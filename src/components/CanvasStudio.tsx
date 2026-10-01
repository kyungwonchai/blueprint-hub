import React, { useState } from 'react';
import { 
  Layers, LayoutGrid, Columns2, Columns3, Sidebar, 
  Camera, ArrowLeft, Trash2, Plus, Sparkles, Move,
  Maximize2, Eye
} from 'lucide-react';
import { ComponentItem, BlueprintSnapshot } from '../types';
import { ComponentRenderer } from './ComponentRenderer';

interface CanvasStudioProps {
  cartItems: ComponentItem[];
  onBackToCatalog: () => void;
  onCreateSnapshot: (layoutType: string, slots: { slotId: string; componentId: string }[]) => void;
  onRemoveItem: (id: string) => void;
}

type LayoutType = 'dashboard-grid' | '1-col' | '2-col-equal' | 'sidebar-main';

export const CanvasStudio: React.FC<CanvasStudioProps> = ({
  cartItems,
  onBackToCatalog,
  onCreateSnapshot,
  onRemoveItem,
}) => {
  const [layoutType, setLayoutType] = useState<LayoutType>('dashboard-grid');

  const handleSnapshotClick = () => {
    const slots = cartItems.map((item, idx) => ({
      slotId: `slot_${idx + 1}`,
      componentId: item.id,
    }));
    onCreateSnapshot(layoutType, slots);
  };

  return (
    <div className="min-h-screen bg-[#06070b] flex flex-col text-slate-100">
      {/* Studio Top Action Bar */}
      <header className="sticky top-0 z-30 bg-[#0c0e18]/90 backdrop-blur-2xl border-b border-white/10 px-4 sm:px-6 py-3.5 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToCatalog}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-slate-300 hover:text-white border border-white/10 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>카탈로그로 돌아가기</span>
            </button>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />
            <h2 className="text-sm font-extrabold text-white flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-violet-400" />
              <span>비주얼 캔버스 스튜디오</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300">
                {cartItems.length}개 컨트롤 배치중
              </span>
            </h2>
          </div>

          {/* Layout Grid Selector */}
          <div className="flex items-center gap-1.5 bg-black/50 p-1 rounded-2xl border border-white/10">
            <button
              onClick={() => setLayoutType('dashboard-grid')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                layoutType === 'dashboard-grid' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
              title="대시보드 4분할 그리드"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden md:inline">대시보드 4분할</span>
            </button>

            <button
              onClick={() => setLayoutType('2-col-equal')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                layoutType === '2-col-equal' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
              title="2열 균등 레이아웃"
            >
              <Columns2 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">2단 분할</span>
            </button>

            <button
              onClick={() => setLayoutType('1-col')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                layoutType === '1-col' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
              title="1열 세로 피드"
            >
              <Columns3 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">1단 풀피드</span>
            </button>
          </div>

          {/* Create Snapshot & API Button */}
          <button
            onClick={handleSnapshotClick}
            disabled={cartItems.length === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-500 to-fuchsia-600 hover:brightness-110 text-white text-xs font-black shadow-[0_0_24px_rgba(139,92,246,0.5)] transition-all active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
          >
            <Camera className="w-4 h-4" />
            <span>스냅샷 & AI 청사진 API 발행</span>
          </button>
        </div>
      </header>

      {/* Main Interactive Canvas Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {cartItems.length === 0 ? (
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
          <div className="space-y-6">
            
            {/* Canvas Header Info */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Eye className="w-4 h-4 text-violet-400" />
                <span>실시간 라이브 캔버스 프리뷰 (컴포넌트 조작 가능)</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">Layout: {layoutType}</span>
            </div>

            {/* Dynamic Grid Layout */}
            <div className={`grid gap-6 transition-all duration-300 ${
              layoutType === '1-col' ? 'grid-cols-1' :
              layoutType === '2-col-equal' ? 'grid-cols-1 lg:grid-cols-2' :
              'grid-cols-1 md:grid-cols-2 lg:grid-cols-12'
            }`}>
              {cartItems.map((item, idx) => {
                // Determine responsive col-span for dashboard grid
                let colSpanClass = 'lg:col-span-6';
                if (layoutType === 'dashboard-grid') {
                  if (item.category === 'stats' || item.category === 'navigation') {
                    colSpanClass = 'lg:col-span-6';
                  } else if (item.category === 'tables' || item.category === 'dashboards') {
                    colSpanClass = 'lg:col-span-12';
                  } else {
                    colSpanClass = 'lg:col-span-6';
                  }
                }

                return (
                  <div 
                    key={`${item.id}_${idx}`}
                    className={`relative rounded-3xl bg-white/[0.02] border border-white/10 hover:border-violet-500/40 p-5 shadow-2xl transition-all ${
                      layoutType === '1-col' ? 'w-full' :
                      layoutType === '2-col-equal' ? 'w-full' :
                      colSpanClass
                    }`}
                  >
                    {/* Slot Header Tools */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-violet-500/20 text-violet-300 font-mono text-xs font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <h4 className="text-xs font-bold text-white">{item.name}</h4>
                        <span className="text-[10px] text-slate-500 font-mono">({item.category})</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                          title="캔버스에서 제거"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Live Rendered Component */}
                    <div className="w-full">
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
