import React from 'react';
import { 
  Sparkles, Search, ShoppingBag, LayoutTemplate, Layers, 
  History, Terminal, RefreshCw, X, Folder, Zap, Database, User, CloudCheck, CheckCircle2 
} from 'lucide-react';
import { CATEGORIES } from '../data/componentsData';
import { CategoryId } from '../types';

export type MainTabMode = 'catalog' | 'canvas' | 'techstack' | 'storage';

interface HeaderProps {
  currentTab: MainTabMode;
  setCurrentTab: (tab: MainTabMode) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: CategoryId;
  setSelectedCategory: (c: CategoryId) => void;
  cartCount: number;
  currentUser: string;
  currentBoardTitle: string;
  saveStatus: 'saved' | 'saving' | 'idle';
  onOpenCart: () => void;
  onOpenBoardManager: () => void;
  onOpenRecentBlueprints: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  cartCount,
  currentUser,
  currentBoardTitle,
  saveStatus,
  onOpenCart,
  onOpenBoardManager,
  onOpenRecentBlueprints,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-[#07080d]/90 border-b border-white/10 shadow-2xl">
      {/* Top Banner & Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        
        {/* Brand Logo & Current Board Name */}
        <div className="flex items-center gap-3">
          <div 
            onClick={() => setCurrentTab('catalog')}
            className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_24px_rgba(139,92,246,0.5)] border border-white/20 cursor-pointer"
          >
            <LayoutTemplate className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 
                onClick={() => setCurrentTab('catalog')}
                className="text-base sm:text-lg font-black text-white tracking-tight flex items-center gap-1.5 cursor-pointer"
              >
                Blueprint<span className="grad-text">Hub</span>
              </h1>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                2026 AI-Native
              </span>
            </div>
            
            {/* Active Board Indicator */}
            <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
              <button 
                onClick={onOpenBoardManager}
                className="hover:text-violet-300 font-bold text-slate-300 flex items-center gap-1"
                title="칠판 전환 및 관리"
              >
                <Folder className="w-3 h-3 text-fuchsia-400" />
                <span className="underline decoration-dotted">{currentBoardTitle}</span>
              </button>
              <span>•</span>
              {saveStatus === 'saving' ? (
                <span className="text-amber-400 text-[10px] flex items-center gap-1 animate-pulse">
                  ☁️ 저장 중...
                </span>
              ) : (
                <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                  ☁️ 서버 저장됨
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Tabs (Catalog, Canvas, Tech Stack, Storage Guide) */}
        <nav className="flex items-center gap-1 bg-black/60 p-1 rounded-2xl border border-white/10">
          <button
            onClick={() => setCurrentTab('catalog')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'catalog'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>컴포넌트 카탈로그</span>
          </button>

          <button
            onClick={() => setCurrentTab('canvas')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'canvas'
                ? 'bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-300" />
            <span>포스트잇 칠판 캔버스</span>
          </button>

          <button
            onClick={() => setCurrentTab('techstack')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'techstack'
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">2026 기술스택 랩</span>
          </button>

          <button
            onClick={() => setCurrentTab('storage')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'storage'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Database className="w-3.5 h-3.5 text-cyan-300" />
            <span className="hidden sm:inline">스토리지 가이드</span>
          </button>
        </nav>

        {/* Right Tools (Search / Cart / Board Manager / User Profile) */}
        <div className="flex items-center gap-2">
          {currentTab === 'catalog' && (
            <div className="relative min-w-[180px] sm:min-w-[220px]">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="컴포넌트 검색..."
                className="w-full pl-8 pr-3 py-1.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-all"
              />
            </div>
          )}

          <button
            onClick={onOpenBoardManager}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white"
            title="칠판 보드 관리자"
          >
            <Folder className="w-3.5 h-3.5 text-fuchsia-400" />
            <span className="hidden md:inline">내 칠판 목록</span>
          </button>

          <button
            onClick={onOpenRecentBlueprints}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white"
            title="공개 API 스냅샷 보관소"
          >
            <History className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden lg:inline">발행 API</span>
          </button>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-violet-500/30 text-white text-xs font-bold transition-all shadow-lg active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-fuchsia-400" />
            <span className="hidden sm:inline">보관함</span>
            {cartCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-fuchsia-500 text-white text-[10px] font-black">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Category Pills Bar (Only shown on catalog tab) */}
      {currentTab === 'catalog' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 overflow-x-auto border-t border-white/5 flex items-center gap-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as CategoryId)}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
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
      )}
    </header>
  );
};
