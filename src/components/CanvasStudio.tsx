import React, { useState, useRef, useEffect } from 'react';
import { 
  Layers, Camera, ArrowLeft, Trash2, Plus, Sparkles, 
  Move, StickyNote, Grid, RotateCcw, Folder, User, Check, Edit3, Lock, Globe 
} from 'lucide-react';
import { ComponentItem, BoardData, CanvasBoardItem } from '../types';
import { ComponentRenderer } from './ComponentRenderer';

interface CanvasStudioProps {
  board: BoardData;
  currentUser: string;
  onUpdateBoard: (updated: BoardData) => void;
  onBackToCatalog: () => void;
  onOpenBoardManager: () => void;
  onCreateSnapshot: (layoutType: string, slots: { slotId: string; componentId: string; x: number; y: number; width: number; height: number }[]) => void;
  onRemoveItem: (id: string) => void;
}

export const CanvasStudio: React.FC<CanvasStudioProps> = ({
  board,
  currentUser,
  onUpdateBoard,
  onBackToCatalog,
  onOpenBoardManager,
  onCreateSnapshot,
  onRemoveItem,
}) => {
  const [boardItems, setBoardItems] = useState<CanvasBoardItem[]>(board.items || []);
  const [snapToGrid, setSnapToGrid] = useState(true);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [maxZIndex, setMaxZIndex] = useState(100);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleInput, setTitleInput] = useState(board.title);

  // Sync with board changes
  useEffect(() => {
    setBoardItems(board.items || []);
    setTitleInput(board.title);
  }, [board.id]);

  // Notify parent on board items change
  const notifyBoardChange = (newItems: CanvasBoardItem[]) => {
    setBoardItems(newItems);
    onUpdateBoard({
      ...board,
      items: newItems,
    });
  };

  // Dragging state
  const draggingRef = useRef<{
    id: string;
    startX: number;
    startY: number;
    initialItemX: number;
    initialItemY: number;
  } | null>(null);

  // Resizing state
  const resizingRef = useRef<{
    id: string;
    startX: number;
    startY: number;
    initialWidth: number;
    initialHeight: number;
  } | null>(null);

  const boardRef = useRef<HTMLDivElement>(null);

  // Add a Sticky Memo Note
  const handleAddStickyNote = () => {
    const newZ = maxZIndex + 1;
    setMaxZIndex(newZ);
    const newSticky: CanvasBoardItem = {
      id: `sticky_${Date.now()}`,
      componentId: 'sticky-note',
      name: '💡 기획 포스트잇',
      category: 'feedback',
      type: 'sticky',
      x: 60 + (boardItems.length % 5) * 40,
      y: 60 + (boardItems.length % 5) * 40,
      width: 260,
      height: 200,
      zIndex: newZ,
      stickyText: '여기에 기획 메모나 AI에게 전달할 요구사항을 적으세요.',
      stickyColor: '#fef08a',
    };
    const updated = [...boardItems, newSticky];
    notifyBoardChange(updated);
    setActiveItemId(newSticky.id);
  };

  // Auto align widgets cascade
  const handleAutoAlign = () => {
    const aligned = boardItems.map((item, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const isWide = item.width > 600 || item.category === 'tables';
      return {
        ...item,
        x: isWide ? 40 : 40 + col * 490,
        y: 40 + row * 350,
        zIndex: idx + 1,
      };
    });
    notifyBoardChange(aligned);
  };

  // Save Title
  const handleSaveTitle = () => {
    if (titleInput.trim()) {
      onUpdateBoard({ ...board, title: titleInput.trim() });
      setIsEditingTitle(false);
    }
  };

  // Mouse Down to Start Drag
  const handleMouseDownItem = (e: React.MouseEvent, item: CanvasBoardItem) => {
    if ((e.target as HTMLElement).tagName === 'TEXTAREA' || (e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'BUTTON') {
      return;
    }

    e.preventDefault();
    const newZ = maxZIndex + 1;
    setMaxZIndex(newZ);
    setActiveItemId(item.id);

    // Bring to front
    const updated = boardItems.map(it => it.id === item.id ? { ...it, zIndex: newZ } : it);
    setBoardItems(updated);

    draggingRef.current = {
      id: item.id,
      startX: e.clientX,
      startY: e.clientY,
      initialItemX: item.x,
      initialItemY: item.y,
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Mouse Down on Resize Handle
  const handleMouseDownResize = (e: React.MouseEvent, item: CanvasBoardItem) => {
    e.stopPropagation();
    e.preventDefault();

    const newZ = maxZIndex + 1;
    setMaxZIndex(newZ);
    setActiveItemId(item.id);

    resizingRef.current = {
      id: item.id,
      startX: e.clientX,
      startY: e.clientY,
      initialWidth: item.width,
      initialHeight: item.height,
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (draggingRef.current) {
      const { id, startX, startY, initialItemX, initialItemY } = draggingRef.current;
      let newX = Math.max(10, initialItemX + (e.clientX - startX));
      let newY = Math.max(10, initialItemY + (e.clientY - startY));

      if (snapToGrid) {
        newX = Math.round(newX / 20) * 20;
        newY = Math.round(newY / 20) * 20;
      }

      setBoardItems(prev => prev.map(it => it.id === id ? { ...it, x: newX, y: newY } : it));
    }

    if (resizingRef.current) {
      const { id, startX, startY, initialWidth, initialHeight } = resizingRef.current;
      let newWidth = Math.max(220, initialWidth + (e.clientX - startX));
      let newHeight = Math.max(160, initialHeight + (e.clientY - startY));

      if (snapToGrid) {
        newWidth = Math.round(newWidth / 20) * 20;
        newHeight = Math.round(newHeight / 20) * 20;
      }

      setBoardItems(prev => prev.map(it => it.id === id ? { ...it, width: newWidth, height: newHeight } : it));
    }
  };

  const handleMouseUp = () => {
    if (draggingRef.current || resizingRef.current) {
      // Sync finalized coordinates with server
      setBoardItems(currentItems => {
        onUpdateBoard({ ...board, items: currentItems });
        return currentItems;
      });
    }
    draggingRef.current = null;
    resizingRef.current = null;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  // Remove Item
  const handleRemoveBoardItem = (id: string, compId: string) => {
    const updated = boardItems.filter(it => it.id !== id);
    notifyBoardChange(updated);
    onRemoveItem(compId);
  };

  // Sticky text change
  const handleStickyTextChange = (id: string, text: string) => {
    const updated = boardItems.map(it => it.id === id ? { ...it, stickyText: text } : it);
    notifyBoardChange(updated);
  };

  // Create Snapshot from Freeform Layout
  const handleSnapshotClick = () => {
    const sorted = [...boardItems].sort((a, b) => (a.y - b.y) || (a.x - b.x));
    const slots = sorted.map((s, idx) => ({
      slotId: `slot_${idx + 1}`,
      componentId: s.componentId,
      x: s.x,
      y: s.y,
      width: s.width,
      height: s.height,
    }));
    onCreateSnapshot('freeform-whiteboard', slots);
  };

  return (
    <div className="min-h-screen bg-[#06070b] flex flex-col text-slate-100 font-sans select-none overflow-x-hidden animate-fade-in">
      
      {/* Studio Top Floating Sub-Bar */}
      <div className="sticky top-[58px] z-30 bg-[#0c0e18]/95 backdrop-blur-2xl border-b border-white/10 px-4 sm:px-6 py-2.5 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBoardManager}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-slate-300 hover:text-white border border-white/10"
            title="다른 칠판으로 전환 또는 새 칠판 만들기"
          >
            <Folder className="w-4 h-4 text-fuchsia-400" />
            <span>칠판 목록 ({board.author})</span>
          </button>

          <div className="h-4 w-px bg-white/10 hidden sm:block" />

          {/* Board Title Inline Edit */}
          {isEditingTitle ? (
            <div className="flex items-center gap-1">
              <input
                type="text"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                onBlur={handleSaveTitle}
                onKeyDown={(e) => e.key === 'Enter' && handleSaveTitle()}
                autoFocus
                className="px-2.5 py-1 bg-black/80 border border-violet-500 rounded-lg text-xs font-bold text-white focus:outline-none"
              />
              <button onClick={handleSaveTitle} className="text-emerald-400 p-1"><Check className="w-4 h-4" /></button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditingTitle(true)}
              className="flex items-center gap-1.5 text-xs font-extrabold text-white hover:text-violet-300 group"
              title="더블클릭 또는 클릭하여 칠판 이름 수정"
            >
              <span>{board.title}</span>
              <Edit3 className="w-3 h-3 text-slate-500 group-hover:text-violet-400" />
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onBackToCatalog}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 text-xs font-bold transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ 컴포넌트 추가</span>
          </button>

          <button
            onClick={handleAddStickyNote}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition-all"
          >
            <StickyNote className="w-3.5 h-3.5" />
            <span>+ 포스트잇 메모</span>
          </button>

          <button
            onClick={handleAutoAlign}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs font-semibold"
            title="바둑판식 자동 정렬"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden md:inline">자동 정돈</span>
          </button>

          <button
            onClick={() => setSnapToGrid(!snapToGrid)}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold border ${
              snapToGrid 
                ? 'bg-violet-600/30 border-violet-500/50 text-violet-300' 
                : 'bg-white/[0.03] border-white/10 text-slate-400'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>자석 {snapToGrid ? 'ON' : 'OFF'}</span>
          </button>

          {/* Snapshot API Button */}
          <button
            onClick={handleSnapshotClick}
            disabled={boardItems.length === 0}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:brightness-110 text-white text-xs font-black shadow-[0_0_16px_rgba(139,92,246,0.4)] transition-all active:scale-95 disabled:opacity-30"
          >
            <Camera className="w-4 h-4" />
            <span>스냅샷 API 발행</span>
          </button>
        </div>
      </div>

      {/* Infinite Freeform Canvas */}
      <main 
        ref={boardRef}
        className="flex-1 relative w-full min-h-[1400px] overflow-auto bg-[#07080d]"
        style={{
          backgroundImage: snapToGrid 
            ? 'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)'
            : 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        {boardItems.length === 0 ? (
          <div className="h-96 flex flex-col items-center justify-center text-center p-8 rounded-3xl border-2 border-dashed border-white/10 bg-white/[0.01] max-w-lg mx-auto mt-20">
            <StickyNote className="w-16 h-16 text-slate-600 stroke-1 mb-4 animate-bounce" />
            <h3 className="text-lg font-bold text-white mb-2">이 칠판이 비어 있습니다</h3>
            <p className="text-xs text-slate-400 max-w-md mb-6 leading-relaxed">
              카탈로그에서 컴포넌트를 담아오시거나 상단의 [+ 포스트잇 메모]를 눌러 칠판에 아이디어를 붙여보세요.
            </p>
            <button
              onClick={onBackToCatalog}
              className="px-5 py-2.5 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold shadow-lg transition-all"
            >
              컴포넌트 카탈로그 둘러보기
            </button>
          </div>
        ) : (
          boardItems.map((item) => {
            const isSelected = activeItemId === item.id;

            // 1. Sticky Post-it
            if (item.type === 'sticky') {
              return (
                <div
                  key={item.id}
                  onMouseDown={(e) => handleMouseDownItem(e, item)}
                  className={`rounded-2xl p-4 shadow-2xl flex flex-col justify-between transition-shadow cursor-grab active:cursor-grabbing border-2 ${
                    isSelected ? 'ring-4 ring-fuchsia-500/50 border-amber-300' : 'border-amber-400/60'
                  }`}
                  style={{
                    position: 'absolute',
                    left: `${item.x}px`,
                    top: `${item.y}px`,
                    width: `${item.width}px`,
                    height: `${item.height}px`,
                    zIndex: item.zIndex,
                    backgroundColor: item.stickyColor || '#fef08a',
                    color: '#1e293b',
                  }}
                >
                  <div className="flex items-center justify-between pb-2 border-b border-amber-300/60">
                    <span className="text-xs font-black tracking-tight flex items-center gap-1 text-amber-900">
                      📌 기획 포스트잇
                    </span>
                    <button
                      onClick={() => handleRemoveBoardItem(item.id, item.componentId)}
                      className="text-amber-700 hover:text-rose-600 p-1 rounded"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <textarea
                    value={item.stickyText || ''}
                    onChange={(e) => handleStickyTextChange(item.id, e.target.value)}
                    placeholder="여기에 자유롭게 메모를 적으세요..."
                    className="w-full flex-1 bg-transparent text-xs font-medium text-amber-950 placeholder-amber-700/60 focus:outline-none resize-none pt-2 font-sans leading-relaxed"
                  />

                  <div
                    onMouseDown={(e) => handleMouseDownResize(e, item)}
                    className="absolute bottom-1 right-1 w-4 h-4 cursor-se-resize flex items-center justify-center text-amber-600 hover:text-amber-900"
                    title="크기 조절"
                  >
                    ↘
                  </div>
                </div>
              );
            }

            // 2. Real Component Widget
            return (
              <div
                key={item.id}
                onMouseDown={(e) => handleMouseDownItem(e, item)}
                style={{
                  position: 'absolute',
                  left: `${item.x}px`,
                  top: `${item.y}px`,
                  width: `${item.width}px`,
                  minHeight: `${item.height}px`,
                  zIndex: item.zIndex,
                }}
                className={`rounded-3xl bg-[#0b0d18]/95 backdrop-blur-2xl border p-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between transition-all group ${
                  isSelected 
                    ? 'border-fuchsia-500 shadow-[0_0_30px_rgba(217,70,239,0.35)] ring-2 ring-fuchsia-500/50' 
                    : 'border-white/15 hover:border-violet-400/60'
                }`}
              >
                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10 cursor-grab active:cursor-grabbing">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-white/[0.08] text-violet-400 group-hover:text-white">
                      <Move className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-xs font-bold text-white line-clamp-1">{item.name}</h4>
                    <span className="text-[10px] text-slate-500 font-mono">
                      ({item.x}, {item.y})
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveBoardItem(item.id, item.componentId);
                      }}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                      title="칠판에서 떼어내기"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="w-full flex-1 overflow-hidden pointer-events-auto">
                  <ComponentRenderer componentId={item.componentId} isCompact={false} />
                </div>

                <div
                  onMouseDown={(e) => handleMouseDownResize(e, item)}
                  className="absolute bottom-1.5 right-1.5 w-5 h-5 cursor-se-resize flex items-center justify-center text-slate-500 hover:text-fuchsia-400 bg-white/[0.04] hover:bg-fuchsia-500/20 rounded-md transition-colors"
                  title="마우스로 잡고 크기 조절 (Resize)"
                >
                  ↘
                </div>
              </div>
            );
          })
        )}
      </main>
    </div>
  );
};
