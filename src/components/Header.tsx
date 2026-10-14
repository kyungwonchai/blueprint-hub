import React, { useState } from 'react';
import { 
  Sparkles, Search, ShoppingBag, LayoutTemplate, Layers, 
  History, Terminal, RefreshCw, X, Folder, Zap, Database, User, 
  CloudCheck, CheckCircle2, Compass, Palette, Maximize2, Minimize2,
  Sliders, Cpu
} from 'lucide-react';
import { CATEGORIES, THEME_PRESETS, ThemePreset } from '../data/componentsData';
import { CategoryId } from '../types';

export type MainTabMode = 'master' | 'studio' | 'fab' | 'catalog' | 'themes' | 'canvas' | 'expo' | 'techstack' | 'storage';

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
  currentTheme: string;
  onSelectTheme: (themeId: string) => void;
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
  currentTheme,
  onSelectTheme,
  onOpenCart,
  onOpenBoardManager,
  onOpenRecentBlueprints,
}) => {
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const activeThemeObj = THEME_PRESETS.find(t => t.id === currentTheme) || THEME_PRESETS[0];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-black/85 border-b border-white/10 shadow-2xl transition-colors duration-500">
      {/* Top Banner & Main Nav Bar */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        
        {/* Brand Logo & Current Board Name */}
        <div className="flex items-center gap-3">
          <div 
            onClick={() => setCurrentTab('master')}
            className="w-10 h-10 rounded-2xl flex items-center justify-center border border-white/20 cursor-pointer shadow-lg transition-transform hover:scale-105"
            style={{ backgroundColor: activeThemeObj.accent }}
          >
            <LayoutTemplate className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 
                onClick={() => setCurrentTab('master')}
                className="text-base sm:text-lg font-black text-white tracking-tight flex items-center gap-1.5 cursor-pointer"
              >
                Blueprint<span style={{ color: activeThemeObj.sub }}>Hub</span>
              </h1>
              <span 
                className="text-[10px] font-extrabold px-2 py-0.5 rounded-full border"
                style={{ 
                  backgroundColor: `${activeThemeObj.accent}22`, 
                  borderColor: activeThemeObj.accent, 
                  color: activeThemeObj.accent 
                }}
              >
                2026 Enterprise MES
              </span>
            </div>
            
            {/* Active Board Indicator */}
            <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
              <button 
                onClick={onOpenBoardManager}
                className="hover:text-white font-bold text-slate-300 flex items-center gap-1"
                title="칠판 전환 및 관리"
              >
                <Folder className="w-3 h-3 text-fuchsia-400" />
                <span className="underline decoration-dotted">{currentBoardTitle}</span>
              </button>
              <span>•</span>
              {saveStatus === 'saving' ? (
                <span className="text-amber-400 text-[10px] flex items-center gap-1 animate-pulse font-mono">
                  ☁️ 동기화 중...
                </span>
              ) : (
                <span className="text-emerald-400 text-[10px] flex items-center gap-1 font-mono">
                  ☁️ 서버 연결됨
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 bg-black/60 p-1.5 rounded-2xl border border-white/10 shadow-inner">
          <button
            onClick={() => setCurrentTab('master')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'master'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>🏭 실전 MES 관제</span>
          </button>

          <button
            onClick={() => setCurrentTab('studio')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'studio'
                ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-lg shadow-cyan-900/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5 text-cyan-300" />
            <span>🛠️ 디자인 스튜디오 PRO</span>
          </button>

          <button
            onClick={() => setCurrentTab('fab')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'fab'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-900/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-300" />
            <span>🔬 팹 텔레메트리</span>
          </button>

          <button
            onClick={() => setCurrentTab('catalog')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'catalog'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>글로벌 마스터 카탈로그</span>
          </button>

          <button
            onClick={() => setCurrentTab('themes')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'themes'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5 text-pink-300" />
            <span>🎨 테마 스튜디오</span>
          </button>

          <button
            onClick={() => setCurrentTab('canvas')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'canvas'
                ? 'bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-300" />
            <span>포스트잇 칠판</span>
          </button>

          <button
            onClick={() => setCurrentTab('expo')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'expo'
                ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-pink-300" />
            <span>🌌 웹기술 전시장</span>
          </button>

          <button
            onClick={() => setCurrentTab('techstack')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'techstack'
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">2026 스택랩</span>
          </button>

          <button
            onClick={() => setCurrentTab('storage')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'storage'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Database className="w-3.5 h-3.5 text-cyan-300" />
            <span className="hidden sm:inline">스토리지 가이드</span>
          </button>
        </nav>

        {/* Right Tools (Theme Dropdown, Fullscreen, Search, Cart, Board Manager) */}
        <div className="flex items-center gap-2">
          {/* Live Dynamic Theme Selector */}
          <div className="relative">
            <button
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-bold text-white transition-all shadow-md"
              title="글로벌 테마 및 컬러 팔레트 전환"
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeThemeObj.accent }} />
              <Palette className="w-3.5 h-3.5 text-slate-300" />
              <span className="hidden xl:inline">{activeThemeObj.name.split(' ')[0]}</span>
            </button>

            {isThemeOpen && (
              <div className="absolute right-0 mt-2 w-56 p-2 rounded-2xl bg-slate-900 border border-white/20 shadow-2xl z-50 space-y-1 animate-scale-up">
                <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  2026 Dynamic Themes
                </div>
                {THEME_PRESETS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      onSelectTheme(t.id);
                      setIsThemeOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-xs font-bold text-left transition-all ${
                      currentTheme === t.id ? 'bg-white/15 text-white' : 'hover:bg-white/5 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: t.accent }} />
                      <span>{t.name}</span>
                    </div>
                    {currentTheme === t.id && <span className="text-[10px] text-emerald-400">●</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Fullscreen Wide Monitor Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-colors"
            title={isFullscreen ? '전체화면 종료' : '모니터 전체화면 확대'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {currentTab === 'catalog' && (
            <div className="relative min-w-[160px] sm:min-w-[200px]">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="컴포넌트 & 비주얼 컨트롤 검색..."
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
            <span className="hidden md:inline">내 칠판</span>
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
        <div className="w-full px-4 sm:px-6 lg:px-8 py-2 overflow-x-auto border-t border-white/5 flex items-center gap-2 scrollbar-none">
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
