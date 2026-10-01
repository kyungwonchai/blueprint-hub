import React, { useState, useRef, useEffect } from 'react';
import { 
  Layers, Camera, ArrowLeft, Trash2, Plus, Sparkles, 
  Move, Maximize2, StickyNote, Grid, Eye, RotateCcw,
  ZoomIn, ZoomOut, Check, ChevronRight, Layout, HelpCircle
} from 'lucide-react';
import { ComponentItem } from '../types';
import { ComponentRenderer } from './ComponentRenderer';

interface CanvasItem {
  id: string; // unique canvas slot instance id
  componentId: string;
  name: string;
  category: string;
  type: 'component' | 'sticky';
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  stickyText?: string;
  stickyColor?: string;
}

interface CanvasStudioProps {
  cartItems: ComponentItem[];
  onBackToCatalog: () => void;
  onCreateSnapshot: (layoutType: string, slots: { slotId: string; componentId: string; x: number; y: number; width: number; height: number }[]) => void;
  onRemoveItem: (id: string) => void;
}

export const CanvasStudio: React.FC<CanvasStudioProps> = ({
  cartItems,
  onBackToCatalog,
  onCreateSnapshot,
  onRemoveItem,
}) => {
  // Freeform Whiteboard Items state
  const [boardItems, setBoardItems] = useState<CanvasItem[]>(() => {
    // Initial cascade placement like sticky notes on a board
    return cartItems.map((item, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const isWide = item.category === 'tables' || item.category === 'dashboards';

      return {
        id: `widget_${item.id}_${idx}_${Date.now()}`,
        componentId: item.id,
        name: item.name,
        category: item.category,
        type: 'component',
        x: isWide ? 40 : 40 + col * 480,
        y: 40 + row * 340 + (isWide && col === 1 ? 340 : 0),
        width: isWide ? 940 : 450,
        height: 320,
        zIndex: idx + 1,
      };
    });
  });

  const [snapToGrid, setSnapToGrid] = useState(true);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [maxZIndex, setMaxZIndex] = useState(100);

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
    const newSticky: CanvasItem = {
      id: `sticky_${Date.now()}`,
      componentId: 'sticky-note',
      name: '💡 기획 메모 / AI 지시사항',
      category: 'feedback',
      type: 'sticky',
      x: 100 + (boardItems.length % 5) * 30,
      y: 100 + (boardItems.length % 5) * 30,
      width: 260,
      height: 200,
      zIndex: newZ,
      stickyText: '여기에 원하는 레이아웃 메모나 AI에게 전달할 요구사항을 적으세요.',
      stickyColor: '#fef08a', // Yellow sticky
    };
    setBoardItems(prev => [...prev, newSticky]);
    setActiveItemId(newSticky.id);
  };

  // Reset to auto cascade alignment
  const handleAutoAlign = () => {
    setBoardItems(prev => {
      return prev.map((item, idx) => {
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
    });
  };

  // Mouse Down to Start Drag
  const handleMouseDownItem = (e: React.MouseEvent, item: CanvasItem) => {
    // If clicking input/textarea or resize handle, don't drag
    if ((e.target as HTMLElement).tagName === 'TEXTAREA' || (e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'BUTTON') {
      return;
    }

    e.preventDefault();
    const newZ = maxZIndex + 1;
    setMaxZIndex(newZ);
    setActiveItemId(item.id);

    // Bring to front
    setBoardItems(prev => prev.map(it => it.id === item.id ? { ...it, zIndex: newZ } : it));

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
  const handleMouseDownResize = (e: React.MouseEvent, item: CanvasItem) => {
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
    // 1. Handling Drag
    if (draggingRef.current) {
      const { id, startX, startY, initialItemX, initialItemY } = draggingRef.current;
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      let newX = Math.max(10, initialItemX + deltaX);
      let newY = Math.max(10, initialItemY + deltaY);

      if (snapToGrid) {
        newX = Math.round(newX / 20) * 20;
        newY = Math.round(newY / 20) * 20;
      }

      setBoardItems(prev => prev.map(it => it.id === id ? { ...it, x: newX, y: newY } : it));
    }

    // 2. Handling Resize
    if (resizingRef.current) {
      const { id, startX, startY, initialWidth, initialHeight } = resizingRef.current;
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      let newWidth = Math.max(220, initialWidth + deltaX);
      let newHeight = Math.max(160, initialHeight + deltaY);

      if (snapToGrid) {
        newWidth = Math.round(newWidth / 20) * 20;
        newHeight = Math.round(newHeight / 20) * 20;
      }

      setBoardItems(prev => prev.map(it => it.id === id ? { ...it, width: newWidth, height: newHeight } : it));
    }
  };

  const handleMouseUp = () => {
    draggingRef.current = null;
    resizingRef.current = null;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  // Remove Item
  const handleRemoveBoardItem = (id: string, compId: string) => {
    setBoardItems(prev => prev.filter(it => it.id !== id));
    onRemoveItem(compId);
  };

  // Sticky text change
  const handleStickyTextChange = (id: string, text: string) => {
    setBoardItems(prev => prev.map(it => it.id === id ? { ...it, stickyText: text } : it));
  };

  // Create Snapshot from Freeform Layout
  const handleSnapshotClick = () => {
    // Sort items by Y then X for logical document flow
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
    <div className="min-h-screen bg-[#06070b] flex flex-col text-slate-100 font-sans select-none overflow-x-hidden">
      
      {/* Studio Top Floating Toolbar */}
      <header className="sticky top-0 z-40 bg-[#0c0e18]/95 backdrop-blur-2xl border-b border-white/10 px-4 sm:px-6 py-3 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToCatalog}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-slate-300 hover:text-white border border-white/10 transition-all active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>카탈로그 추가</span>
            </button>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />
            <h2 className="text-sm font-black text-white flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-gradient-to-tr from-fuchsia-600 to-violet-600 shadow-[0_0_12px_rgba(217,70,239,0.5)]">
                <StickyNote className="w-4 h-4 text-white" />
              </div>
              <span>포스트잇 칠판 프리폼 캔버스</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">
                자유 드래그 & 리사이즈
              </span>
            </h2>
          </div>

          {/* Whiteboard Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleAddStickyNote}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              <StickyNote className="w-3.5 h-3.5" />
              <span>+ 메모 포스트잇 붙이기</span>
            </button>

            <button
              onClick={handleAutoAlign}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-all"
              title="칠판의 모든 위젯을 깔끔하게 자동 정렬"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden md:inline">자동 정돈</span>
            </button>

            <button
              onClick={() => setSnapToGrid(!snapToGrid)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                snapToGrid 
                  ? 'bg-violet-600/30 border-violet-500/50 text-violet-300' 
                  : 'bg-white/[0.03] border-white/10 text-slate-400'
              }`}
              title="20px 모눈 격자 자석 스냅"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>격자 스냅 {snapToGrid ? 'ON' : 'OFF'}</span>
            </button>

            {/* Snapshot API Button */}
            <button
              onClick={handleSnapshotClick}
              disabled={boardItems.length === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:brightness-110 text-white text-xs font-black shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all active:scale-95 disabled:opacity-30"
            >
              <Camera className="w-4 h-4" />
              <span>칠판 스냅샷 API 발행</span>
            </button>
          </div>
        </div>
      </header>

      {/* Guide Banner */}
      <div className="bg-violet-950/30 border-b border-violet-500/20 px-4 py-2 text-center text-xs text-violet-300 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
        <span>
          💡 <strong>포스트잇 칠판 모드:</strong> 원하는 곳 어디든 마우스로 자유롭게 끌어다 놓고(Drag), 우측 하단 핸들(↘)로 크기를 조절하세요!
        </span>
      </div>

      {/* The Infinite Freeform Board (Miro / Whiteboard Style) */}
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
            <h3 className="text-lg font-bold text-white mb-2">칠판이 비어 있습니다</h3>
            <p className="text-xs text-slate-400 max-w-md mb-6 leading-relaxed">
              카탈로그에서 UI 컴포넌트들을 담아오시거나, 상단의 [+ 메모 포스트잇 붙이기]를 눌러 칠판에 자유롭게 배치해보세요.
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

            // Render Sticky Memo Note
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
                  {/* Sticky Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-amber-300/60">
                    <span className="text-xs font-black tracking-tight flex items-center gap-1 text-amber-900">
                      📌 기획 포스트잇
                    </span>
                    <button
                      onClick={() => setBoardItems(prev => prev.filter(it => it.id !== item.id))}
                      className="text-amber-700 hover:text-rose-600 p-1 rounded"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Sticky Textarea */}
                  <textarea
                    value={item.stickyText || ''}
                    onChange={(e) => handleStickyTextChange(item.id, e.target.value)}
                    placeholder="여기에 자유롭게 메모를 적으세요..."
                    className="w-full flex-1 bg-transparent text-xs font-medium text-amber-950 placeholder-amber-700/60 focus:outline-none resize-none pt-2 font-sans leading-relaxed"
                  />

                  {/* Resize Handle */}
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

            // Render Real Component Widget on Freeform Board
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
                {/* Freeform Header (Drag Handle) */}
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

                {/* Rendered Live Component */}
                <div className="w-full flex-1 overflow-hidden pointer-events-auto">
                  <ComponentRenderer componentId={item.componentId} isCompact={false} />
                </div>

                {/* Freeform Resize Handle (Bottom Right) */}
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
