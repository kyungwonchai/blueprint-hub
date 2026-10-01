import React from 'react';
import { 
  Sparkles, Search, ShoppingBag, LayoutTemplate, Layers, 
  History, Terminal, RefreshCw, X 
} from 'lucide-react';
import { CATEGORIES } from '../data/componentsData';
import { CategoryId } from '../types';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: CategoryId;
  setSelectedCategory: (c: CategoryId) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenCanvas: () => void;
  onOpenRecentBlueprints: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  cartCount,
  onOpenCart,
  onOpenCanvas,
  onOpenRecentBlueprints,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-[#07080d]/85 border-b border-white/10 shadow-2xl">
      {/* Top Banner & Brand Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_24px_rgba(139,92,246,0.5)] border border-white/20">
            <LayoutTemplate className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-black text-white tracking-tight flex items-center gap-1.5">
                Blueprint<span className="grad-text">Hub</span>
              </h1>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                2026 AI-Native
              </span>
            </div>
            <p className="text-[11px] text-slate-400">시각적 UI 조립 & 0% 오차 AI 스냅샷 API 플랫폼</p>
          </div>
        </div>

        {/* Global Smart Search */}
        <div className="flex-1 max-w-md min-w-[280px]">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="컴포넌트 검색 (예: 차트, 데이터그리드, table, kpi, 폼)..."
              className="w-full pl-10 pr-9 py-2 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/80 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-500/20 transition-all shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons (Cart, Canvas, Recent Blueprints) */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenRecentBlueprints}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all shadow-sm"
          >
            <History className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">공개 API 보관소</span>
          </button>

          <button
            onClick={onOpenCanvas}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-bold shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all active:scale-95"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>캔버스 스튜디오</span>
          </button>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-violet-500/30 text-white text-xs font-bold transition-all shadow-lg active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 text-fuchsia-400" />
            <span className="hidden sm:inline">장바구니</span>
            {cartCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-fuchsia-500 text-white text-[10px] font-black animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 overflow-x-auto border-t border-white/5 flex items-center gap-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as CategoryId)}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                isSelected
                  ? 'bg-gradient-to-r from-violet-600/90 to-fuchsia-600/90 text-white shadow-[0_0_14px_rgba(139,92,246,0.35)] border border-violet-400/40'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.07] border border-white/5'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
