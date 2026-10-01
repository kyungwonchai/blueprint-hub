import React, { useState } from 'react';
import { 
  Layers, LayoutGrid, Columns2, Columns3,
  Camera, ArrowLeft, Trash2, Plus, Sparkles, GripVertical,
  Maximize2, Minimize2, ArrowUp, ArrowDown, Eye, Check,
  ChevronLeft, ChevronRight, Sliders, Layout, Box
} from 'lucide-react';
import { ComponentItem } from '../types';
import { ComponentRenderer } from './ComponentRenderer';

interface CanvasStudioProps {
  cartItems: ComponentItem[];
  onBackToCatalog: () => void;
  onCreateSnapshot: (layoutType: string, slots: { slotId: string; componentId: string; colSpan?: number }[]) => void;
  onRemoveItem: (id: string) => void;
}

type LayoutType = 'custom-grid' | 'dashboard-grid' | '1-col' | '2-col-equal';

export const CanvasStudio: React.FC<CanvasStudioProps> = ({
  cartItems,
  onBackToCatalog,
  onCreateSnapshot,
  onRemoveItem,
}) => {
  const [layoutType, setLayoutType] = useState<LayoutType>('custom-grid');
  
  // Custom slot states: ordering and custom colSpan for each item
  const [items, setItems] = useState<{ item: ComponentItem; colSpan: number }[]>(() => {
    return cartItems.map((item) => {
      let defaultSpan = 6;
      if (item.category === 'tables' || item.category === 'dashboards') defaultSpan = 12;
      if (item.category === 'stats' || item.category === 'navigation') defaultSpan = 6;
      return { item, colSpan: defaultSpan };
    });
  });

  // Drag and Drop state
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);
  const [dragOverIdx, setDragOverIdx] = useState<number | null>(null);

  // Sync if cartItems change externally
  React.useEffect(() => {
    setItems((prev) => {
      const existingMap = new Map(prev.map(p => [p.item.id, p.colSpan]));
      return cartItems.map(item => ({
        item,
        colSpan: existingMap.get(item.id) || (item.category === 'tables' ? 12 : 6)
      }));
    });
  }, [cartItems]);

  // ColSpan adjuster (4: 1/3, 6: 1/2, 8: 2/3, 12: Full)
  const handleSetColSpan = (idx: number, span: number) => {
    setItems(prev => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], colSpan: span };
      return copy;
    });
  };

  // Move up/down
  const handleMove = (idx: number, direction: 'up' | 'down') => {
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= items.length) return;
    setItems(prev => {
      const copy = [...prev];
      const temp = copy[idx];
      copy[idx] = copy[targetIdx];
      copy[targetIdx] = temp;
      return copy;
    });
  };

  // Drag and Drop handlers
  const onDragStart = (e: React.DragEvent, idx: number) => {
    setDraggedIdx(idx);
    e.dataTransfer.effectAllowed = 'move';
    // Transparent or custom drag preview
  };

  const onDragOver = (e: React.DragEvent, idx: number) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === idx) return;
    setDragOverIdx(idx);
  };

  const onDragLeave = () => {
    setDragOverIdx(null);
  };

  const onDrop = (e: React.DragEvent, dropIdx: number) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === dropIdx) {
      setDraggedIdx(null);
      setDragOverIdx(null);
      return;
    }

    setItems(prev => {
      const copy = [...prev];
      const [draggedItem] = copy.splice(draggedIdx, 1);
      copy.splice(dropIdx, 0, draggedItem);
      return copy;
    });

    setDraggedIdx(null);
    setDragOverIdx(null);
  };

  const handleSnapshotClick = () => {
    const slots = items.map((slot, idx) => ({
      slotId: `slot_${idx + 1}`,
      componentId: slot.item.id,
      colSpan: slot.colSpan,
    }));
    onCreateSnapshot(layoutType, slots);
  };

  return (
    <div className="min-h-screen bg-[#06070b] flex flex-col text-slate-100 font-sans select-none">
      {/* Studio Top Action Bar */}
      <header className="sticky top-0 z-30 bg-[#0c0e18]/95 backdrop-blur-2xl border-b border-white/10 px-4 sm:px-6 py-3.5 shadow-2xl">
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
            <h2 className="text-sm font-extrabold text-white flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600">
                <Layout className="w-4 h-4 text-white" />
              </div>
              <span>비주얼 캔버스 정밀 배치 스튜디오</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                {items.length}개 슬롯 조립중
              </span>
            </h2>
          </div>

          {/* Layout Presets */}
          <div className="flex items-center gap-1.5 bg-black/60 p-1 rounded-2xl border border-white/10">
            <button
              onClick={() => {
                setLayoutType('custom-grid');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                layoutType === 'custom-grid' ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
              title="자유 정밀 그리드 (너비 자유 조절 & 마우스 드래그)"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>자유 정밀 그리드</span>
            </button>

            <button
              onClick={() => {
                setLayoutType('2-col-equal');
                setItems(prev => prev.map(p => ({ ...p, colSpan: 6 })));
              }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                layoutType === '2-col-equal' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
              title="2열 균등 분할"
            >
              <Columns2 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">2열 분할</span>
            </button>

            <button
              onClick={() => {
                setLayoutType('1-col');
                setItems(prev => prev.map(p => ({ ...p, colSpan: 12 })));
              }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                layoutType === '1-col' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
              title="1열 풀피드"
            >
              <Columns3 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">1열 풀피드</span>
            </button>
          </div>

          {/* Create Snapshot & API Button */}
          <button
            onClick={handleSnapshotClick}
            disabled={items.length === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-500 to-fuchsia-600 hover:brightness-110 text-white text-xs font-black shadow-[0_0_24px_rgba(139,92,246,0.5)] transition-all active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
          >
            <Camera className="w-4 h-4" />
            <span>스냅샷 & AI 청사진 API 발행</span>
          </button>
        </div>
      </header>

      {/* Main Interactive Canvas Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {items.length === 0 ? (
          <div className="h-96 flex flex-col items-center justify-center text-center p-8 rounded-3xl border-2 border-dashed border-white/10 bg-white/[0.01]">
            <Layers className="w-16 h-16 text-slate-600 stroke-1 mb-4 animate-bounce" />
            <h3 className="text-lg font-bold text-white mb-2">캔버스에 배치된 컴포넌트가 없습니다</h3>
            <p className="text-xs text-slate-400 max-w-md mb-6 leading-relaxed">
              카탈로그에서 필요한 UI 컨트롤들을 장바구니에 담아오시면 이곳에서 실시간으로 대시보드 및 웹앱 레이아웃을 조립할 수 있습니다.
            </p>
            <button
              onClick={onBackToCatalog}
              className="px-5 py-2.5 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold shadow-lg transition-all"
            >
              컴포넌트 카탈로그 둘러보기
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            
            {/* Canvas Subheader / Drag Guide */}
            <div className="p-3.5 rounded-2xl bg-white/[0.025] border border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <GripVertical className="w-4 h-4 text-violet-400 animate-pulse" />
                <span>
                  <strong className="text-white">마우스 드래그 앤 드롭</strong>으로 순서를 자유롭게 바꾸고, 슬롯별 <strong className="text-violet-300">너비 버튼(1/3, 1/2, 2/3, Full)</strong>으로 정밀 배치하세요.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={onBackToCatalog}
                  className="flex items-center gap-1 text-[11px] font-bold text-violet-400 hover:text-violet-300 px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20"
                >
                  <Plus className="w-3.5 h-3.5" /> 컴포넌트 추가
                </button>
              </div>
            </div>

            {/* 12-Column Responsive CSS Grid Canvas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 transition-all duration-300">
              {items.map((slot, idx) => {
                const { item, colSpan } = slot;
                const isDragging = draggedIdx === idx;
                const isOver = dragOverIdx === idx;

                // Responsive colSpan style
                const colSpanClass = 
                  colSpan === 4 ? 'lg:col-span-4' :
                  colSpan === 8 ? 'lg:col-span-8' :
                  colSpan === 12 ? 'lg:col-span-12' :
                  'lg:col-span-6';

                return (
                  <div 
                    key={`${item.id}_${idx}`}
                    draggable
                    onDragStart={(e) => onDragStart(e, idx)}
                    onDragOver={(e) => onDragOver(e, idx)}
                    onDragLeave={onDragLeave}
                    onDrop={(e) => onDrop(e, idx)}
                    className={`relative rounded-3xl bg-[#0b0d16]/90 border p-5 shadow-2xl transition-all duration-200 flex flex-col justify-between ${colSpanClass} ${
                      isDragging ? 'opacity-40 scale-95 border-fuchsia-500 ring-2 ring-fuchsia-500/50' :
                      isOver ? 'border-violet-400 bg-violet-950/20 scale-[1.01] ring-2 ring-violet-500/50' :
                      'border-white/10 hover:border-violet-500/40'
                    }`}
                  >
                    {/* Slot Header & Precision Tools */}
                    <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-white/10 gap-2">
                      
                      {/* Drag Handle & Info */}
                      <div className="flex items-center gap-2 cursor-grab active:cursor-grabbing">
                        <div 
                          className="p-1 rounded-lg bg-white/[0.06] hover:bg-violet-500/20 text-slate-400 hover:text-white transition-colors"
                          title="마우스로 잡고 드래그하여 순서 이동"
                        >
                          <GripVertical className="w-4 h-4 text-violet-400" />
                        </div>
                        <span className="w-6 h-6 rounded-lg bg-violet-500/20 text-violet-300 font-mono text-xs font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <div>
                          <h4 className="text-xs font-bold text-white">{item.name}</h4>
                          <span className="text-[10px] text-slate-500 font-mono">#{item.id}</span>
                        </div>
                      </div>

                      {/* Precision Width & Ordering Controls */}
                      <div className="flex items-center gap-1.5">
                        
                        {/* Width Selector Buttons */}
                        <div className="flex items-center bg-black/60 p-0.5 rounded-xl border border-white/10 text-[10px] font-bold">
                          <button
                            onClick={() => handleSetColSpan(idx, 4)}
                            className={`px-2 py-1 rounded-lg transition-all ${colSpan === 4 ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'}`}
                            title="1/3 너비 (4칸)"
                          >
                            1/3
                          </button>
                          <button
                            onClick={() => handleSetColSpan(idx, 6)}
                            className={`px-2 py-1 rounded-lg transition-all ${colSpan === 6 ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'}`}
                            title="1/2 너비 (6칸)"
                          >
                            1/2
                          </button>
                          <button
                            onClick={() => handleSetColSpan(idx, 8)}
                            className={`px-2 py-1 rounded-lg transition-all ${colSpan === 8 ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'}`}
                            title="2/3 너비 (8칸)"
                          >
                            2/3
                          </button>
                          <button
                            onClick={() => handleSetColSpan(idx, 12)}
                            className={`px-2 py-1 rounded-lg transition-all ${colSpan === 12 ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'}`}
                            title="전체 너비 (12칸)"
                          >
                            Full
                          </button>
                        </div>

                        {/* Step Ordering */}
                        <div className="flex items-center gap-0.5 bg-black/40 p-0.5 rounded-xl border border-white/10">
                          <button
                            onClick={() => handleMove(idx, 'up')}
                            disabled={idx === 0}
                            className="p-1 rounded-lg text-slate-400 hover:text-white disabled:opacity-20 hover:bg-white/5"
                            title="위로 이동"
                          >
                            <ArrowUp className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleMove(idx, 'down')}
                            disabled={idx === items.length - 1}
                            className="p-1 rounded-lg text-slate-400 hover:text-white disabled:opacity-20 hover:bg-white/5"
                            title="아래로 이동"
                          >
                            <ArrowDown className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Remove Slot */}
                        <button
                          onClick={() => {
                            onRemoveItem(item.id);
                            setItems(prev => prev.filter((_, i) => i !== idx));
                          }}
                          className="p-1.5 rounded-xl text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                          title="캔버스에서 제거"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Live Rendered Interactive Component */}
                    <div className="w-full flex-1">
                      <ComponentRenderer componentId={item.id} isCompact={false} />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}
      </main>
    </div>
  );
};
