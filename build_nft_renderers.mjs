import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rDir = path.join(__dirname, 'src/components/renderers');

// ==========================================
// NavFeedbackThemeRenderers.tsx
// ==========================================
const nftContent = `import React, { useState } from 'react';
import { 
  Compass, LayoutGrid, Sidebar, Search, Command, ChevronRight, 
  Layers, Smartphone, BookOpen, CheckCircle2, AlertTriangle, X,
  Bell, ShieldAlert, Sparkles, Star, WifiOff, Palette, Sun, Moon,
  Box, MousePointerClick
} from 'lucide-react';
import { THEME_PRESETS } from '../../data/componentsData';

export const FloatingNavDemo: React.FC = () => (
  <div className="flex items-center justify-center p-2">
    <nav className="flex items-center gap-1 p-1 rounded-full bg-slate-900/90 border border-white/10 shadow-2xl">
      <button className="px-3 py-1.5 rounded-full bg-violet-600 text-white text-xs font-bold shadow-md">Overview</button>
      <button className="px-3 py-1.5 rounded-full text-slate-400 text-xs hover:text-white">Analytics</button>
      <button className="px-3 py-1.5 rounded-full text-slate-400 text-xs hover:text-white">Settings</button>
    </nav>
  </div>
);

export const SidebarCollapsibleDemo: React.FC = () => (
  <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1 text-xs">
    <div className="text-slate-400 font-bold mb-2">사이드바 네비게이션</div>
    <div className="p-2 rounded-xl bg-violet-600/20 text-violet-300 font-bold flex items-center gap-2"><span>📂 대시보드</span></div>
    <div className="p-2 rounded-xl text-slate-400 flex items-center gap-2"><span>📊 실시간 차트</span></div>
    <div className="p-2 rounded-xl text-slate-400 flex items-center gap-2"><span>⚙️ 환경설정</span></div>
  </div>
);

export const BreadcrumbDemo: React.FC = () => (
  <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl flex items-center gap-1.5 text-xs">
    <span className="text-slate-400">Home</span><ChevronRight className="w-3.5 h-3.5 text-slate-600" />
    <span className="text-slate-400">Projects</span><ChevronRight className="w-3.5 h-3.5 text-slate-600" />
    <span className="text-violet-400 font-bold">BlueprintHub</span>
  </div>
);

export const CommandPaletteDemo: React.FC = () => (
  <div className="w-full rounded-2xl bg-black/90 backdrop-blur-2xl border border-violet-500/40 p-3 shadow-2xl space-y-2">
    <div className="flex items-center gap-2 px-2 py-1.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-slate-300">
      <Command className="w-3.5 h-3.5 text-violet-400" /><span>Cmd + K 검색...</span>
    </div>
  </div>
);

export const NotificationToastDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 p-3.5 shadow-2xl flex items-center gap-3">
    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"><CheckCircle2 className="w-4 h-4" /></div>
    <div><h5 className="text-xs font-bold text-white">AI 청사진 동기화 완료</h5><p className="text-[11px] text-slate-400">포스트잇 칠판이 실시간 저장되었습니다.</p></div>
  </div>
);

export const DestructiveModalDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-rose-500/40 p-4 shadow-2xl space-y-2 text-xs">
    <div className="flex items-center gap-2 text-rose-400 font-bold"><AlertTriangle className="w-4 h-4" /><span>프로젝트 영구 삭제</span></div>
    <p className="text-slate-400 text-[11px]">확인을 위해 'DELETE'를 입력하세요.</p>
    <input type="text" placeholder="DELETE" className="w-full px-3 py-1 rounded bg-slate-950 border border-rose-500/30 text-rose-300 text-xs" />
  </div>
);

export const SkeletonShimmerDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2 animate-pulse">
    <div className="h-4 bg-white/10 rounded w-1/3" />
    <div className="h-8 bg-white/5 rounded w-full" />
    <div className="h-4 bg-white/10 rounded w-2/3" />
  </div>
);

export const StarRatingDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-amber-500/30 p-4 shadow-2xl flex items-center justify-between">
    <div><span className="text-xs font-bold text-white block">5성급 별점 평가</span><span className="text-[10px] text-slate-400">최고에요!</span></div>
    <div className="flex gap-1 text-amber-400"><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /></div>
  </div>
);

export const ThemePaletteDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
    <div className="text-xs font-bold text-white flex items-center justify-between"><span>테마 디자인 토큰</span><Palette className="w-3.5 h-3.5 text-fuchsia-400" /></div>
    <div className="flex gap-2">
      {THEME_PRESETS.map((t) => (
        <div key={t.id} className="flex-1 h-10 rounded-xl flex items-center justify-center text-[10px] font-bold text-white border border-white/10 shadow-md" style={{ backgroundColor: t.bg }}>
          <span style={{ color: t.accent }}>● {t.name.split(' ')[0]}</span>
        </div>
      ))}
    </div>
  </div>
);

export const BorderBeamDemo: React.FC = () => (
  <div className="relative overflow-hidden rounded-2xl bg-slate-950 p-4 shadow-2xl border border-violet-500/40">
    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-fuchsia-600/20 animate-pulse" />
    <div className="relative flex items-center justify-between">
      <div><h5 className="text-xs font-bold text-white">Border Beam 광선 레이저</h5><p className="text-[10px] text-slate-400">외곽선을 따라 무한 회전하는 네온 빔</p></div>
      <div className="w-8 h-8 rounded-full bg-violet-600/30 border border-violet-400/50 flex items-center justify-center text-violet-300 text-xs font-bold shadow-[0_0_12px_#8b5cf6]">✦</div>
    </div>
  </div>
);

export const BentoGridDemo: React.FC = () => (
  <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl">
    <div className="text-xs font-bold text-white mb-2">애플 스타일 벤토 그리드 (Bento Grid)</div>
    <div className="grid grid-cols-3 gap-1.5 h-24 text-[10px]">
      <div className="col-span-2 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 border border-white/10 rounded-xl p-2 flex flex-col justify-between text-white">
        <span className="font-bold">AI Core 3.7</span><span className="text-violet-300 text-[9px]">Zero Latency Stream</span>
      </div>
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 flex flex-col justify-between text-slate-300">
        <span>99.9%</span><span className="text-[9px] text-slate-500">Uptime</span>
      </div>
    </div>
  </div>
);

export const ThemeToggleDemo: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl flex items-center justify-between">
      <div><span className="text-xs font-bold text-white block">다크 / 라이트 모드 전환</span><span className="text-[10px] text-slate-400">{isDark ? '현재: 다크 네온 모드' : '현재: 라이트 모드'}</span></div>
      <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-amber-400 transition-all active:scale-95">
        {isDark ? <Moon className="w-4 h-4 text-violet-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
      </button>
    </div>
  );
};
`;

fs.writeFileSync(path.join(rDir, 'NavFeedbackThemeRenderers.tsx'), nftContent, 'utf-8');
console.log('Saved NavFeedbackThemeRenderers.tsx');
