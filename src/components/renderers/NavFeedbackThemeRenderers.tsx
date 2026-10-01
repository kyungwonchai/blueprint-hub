import React, { useState } from 'react';
import { 
  Compass, LayoutGrid, Sidebar, Search, Command, ChevronRight, 
  Layers, Smartphone, BookOpen, CheckCircle2, AlertTriangle, X,
  Bell, ShieldAlert, Sparkles, Star, WifiOff, Palette, Sun, Moon,
  Box, MousePointerClick, Menu, List, Check, ArrowRight, Share2
} from 'lucide-react';
import { THEME_PRESETS } from '../../data/componentsData';

// 1. Floating Nav
export const FloatingNavDemo: React.FC = () => {
  const [tab, setTab] = useState('Overview');
  return (
    <div className="flex items-center justify-center p-2">
      <nav className="flex items-center gap-1 p-1 rounded-full bg-slate-900/90 border border-white/10 shadow-2xl">
        {['Overview', 'Analytics', 'Settings'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              tab === t ? 'bg-violet-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            {t}
          </button>
        ))}
      </nav>
    </div>
  );
};

// 2. Collapsible Sidebar
export const SidebarCollapsibleDemo: React.FC = () => {
  const [active, setActive] = useState('dash');
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1 text-xs">
      <div className="text-slate-400 font-bold mb-2">사이드바 네비게이션</div>
      {[
        { id: 'dash', label: '📂 대시보드' },
        { id: 'chart', label: '📊 실시간 차트' },
        { id: 'setting', label: '⚙️ 환경설정' }
      ].map(it => (
        <div
          key={it.id}
          onClick={() => setActive(it.id)}
          className={`p-2 rounded-xl cursor-pointer font-bold transition-all ${
            active === it.id ? 'bg-violet-600/30 text-violet-200 border border-violet-500/40' : 'text-slate-400 hover:bg-white/5 hover:text-white'
          }`}
        >
          {it.label}
        </div>
      ))}
    </div>
  );
};

// 3. Breadcrumb
export const BreadcrumbDemo: React.FC = () => (
  <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl flex items-center gap-1.5 text-xs">
    <span className="text-slate-400 hover:text-white cursor-pointer">Home</span><ChevronRight className="w-3.5 h-3.5 text-slate-600" />
    <span className="text-slate-400 hover:text-white cursor-pointer">Projects</span><ChevronRight className="w-3.5 h-3.5 text-slate-600" />
    <span className="text-violet-400 font-bold">BlueprintHub</span>
  </div>
);

// 4. Command Palette
export const CommandPaletteDemo: React.FC = () => (
  <div className="w-full rounded-2xl bg-black/90 backdrop-blur-2xl border border-violet-500/40 p-3 shadow-2xl space-y-2">
    <div className="flex items-center gap-2 px-2.5 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-slate-300">
      <Command className="w-4 h-4 text-violet-400" />
      <span className="font-mono">Cmd + K 검색...</span>
      <span className="ml-auto text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-slate-400 font-mono">⌘K</span>
    </div>
  </div>
);

// 5. Mega Menu
export const MegaMenuDemo: React.FC = () => (
  <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2 text-xs">
    <div className="text-xs font-bold text-white">다단 메가메뉴</div>
    <div className="grid grid-cols-2 gap-1.5 text-[11px]">
      <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/5 cursor-pointer">
        <span className="font-bold text-violet-300 block">AI 솔루션</span>
        <span className="text-[10px] text-slate-500">LLM 오케스트레이션</span>
      </div>
      <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/5 cursor-pointer">
        <span className="font-bold text-cyan-300 block">클라우드 인프라</span>
        <span className="text-[10px] text-slate-500">멀티리전 관제</span>
      </div>
    </div>
  </div>
);

// 6. Segmented Control Pill
export const SegmentedControlDemo: React.FC = () => {
  const [seg, setSeg] = useState('Day');
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="text-xs font-bold text-white">iOS 세그먼트 알약 (Pill)</div>
      <div className="flex p-1 bg-black/50 rounded-xl border border-white/10">
        {['Day', 'Week', 'Month', 'Year'].map(s => (
          <button
            key={s}
            onClick={() => setSeg(s)}
            className={`flex-1 py-1 rounded-lg text-xs font-bold transition-all ${
              seg === s ? 'bg-violet-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};

// 7. Dock Magnification
export const DockMagnificationDemo: React.FC = () => (
  <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl flex justify-center items-center">
    <div className="flex items-center gap-2 p-2 rounded-2xl bg-black/60 border border-white/10">
      {['🚀', '⚡', '📊', '🤖', '🎨'].map((emoji, idx) => (
        <div key={idx} className="w-8 h-8 rounded-xl bg-white/10 hover:bg-violet-600/50 flex items-center justify-center text-sm cursor-pointer hover:scale-125 transition-transform">
          {emoji}
        </div>
      ))}
    </div>
  </div>
);

// 8. Pagination Smart Jump
export const PaginationDemo: React.FC = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl flex items-center justify-between text-xs">
      <button onClick={() => setPage(p => Math.max(1, p - 1))} className="px-2 py-1 rounded bg-white/5 text-slate-400 hover:text-white">이전</button>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(p => (
          <button key={p} onClick={() => setPage(p)} className={`w-6 h-6 rounded font-mono font-bold ${page === p ? 'bg-violet-600 text-white' : 'text-slate-400 hover:bg-white/5'}`}>{p}</button>
        ))}
      </div>
      <button onClick={() => setPage(p => Math.min(5, p + 1))} className="px-2 py-1 rounded bg-white/5 text-slate-400 hover:text-white">다음</button>
    </div>
  );
};

// 9. Mobile Bottom Tab Bar
export const MobileBottomBarDemo: React.FC = () => (
  <div className="w-full rounded-2xl bg-slate-950 border border-white/10 p-2 shadow-2xl flex items-center justify-around text-[10px] text-slate-400">
    <div className="flex flex-col items-center text-violet-400 font-bold"><span>🏠</span><span>홈</span></div>
    <div className="flex flex-col items-center hover:text-white"><span>📈</span><span>트레이딩</span></div>
    <div className="flex flex-col items-center hover:text-white"><span>🤖</span><span>AI 랩</span></div>
    <div className="flex flex-col items-center hover:text-white"><span>👤</span><span>프로필</span></div>
  </div>
);

// 10. TOC ScrollSpy
export const TocScrollspyDemo: React.FC = () => (
  <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1.5 text-xs">
    <div className="text-slate-400 font-bold">문서 목차 (TOC)</div>
    <div className="pl-2 border-l-2 border-violet-500 text-violet-300 font-bold">1. 개요 및 비전</div>
    <div className="pl-2 border-l-2 border-white/10 text-slate-400 hover:text-white">2. 컴포넌트 아키텍처</div>
    <div className="pl-2 border-l-2 border-white/10 text-slate-400 hover:text-white">3. 성능 벤치마크</div>
  </div>
);

// 11. Stepper Progress
export const StepperProgressDemo: React.FC = () => (
  <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
    <div className="flex justify-between text-xs font-bold text-white"><span>마일스톤 진행</span><span className="text-emerald-400 font-mono text-[10px]">75%</span></div>
    <div className="flex items-center gap-1">
      <div className="h-1.5 flex-1 bg-emerald-500 rounded-full" />
      <div className="h-1.5 flex-1 bg-emerald-500 rounded-full" />
      <div className="h-1.5 flex-1 bg-emerald-500 rounded-full" />
      <div className="h-1.5 flex-1 bg-white/10 rounded-full" />
    </div>
  </div>
);

// 12. Radial Context Wheel
export const RadialWheelDemo: React.FC = () => (
  <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl flex items-center justify-between text-xs">
    <div><span className="font-bold text-white block">원형 파이 휠 메뉴</span><span className="text-[10px] text-slate-400">우클릭 휠 액션</span></div>
    <div className="w-10 h-10 rounded-full bg-violet-600/30 border border-violet-500 flex items-center justify-center text-sm shadow-[0_0_12px_#8b5cf6]">⚙️</div>
  </div>
);

// FEEDBACK

// 1. Toast Feed
export const NotificationToastDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 p-3.5 shadow-2xl flex items-center gap-3">
    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"><CheckCircle2 className="w-4 h-4" /></div>
    <div><h5 className="text-xs font-bold text-white">AI 청사진 동기화 완료</h5><p className="text-[11px] text-slate-400">포스트잇 칠판이 실시간 저장되었습니다.</p></div>
  </div>
);

// 2. Destructive Modal
export const DestructiveModalDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-rose-500/40 p-4 shadow-2xl space-y-2 text-xs">
    <div className="flex items-center gap-2 text-rose-400 font-bold"><AlertTriangle className="w-4 h-4" /><span>프로젝트 영구 삭제</span></div>
    <p className="text-slate-400 text-[11px]">확인을 위해 'DELETE'를 입력하세요.</p>
    <input type="text" placeholder="DELETE" className="w-full px-3 py-1 rounded bg-slate-950 border border-rose-500/30 text-rose-300 text-xs" />
  </div>
);

// 3. System Alert Banner
export const SystemAlertBannerDemo: React.FC = () => (
  <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-3 shadow-2xl flex items-center justify-between text-xs text-amber-200">
    <div className="flex items-center gap-2"><span>⚠️</span><span>정기 DB 점검이 02:00에 예정되어 있습니다.</span></div>
    <button className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[10px]">확인</button>
  </div>
);

// 4. Empty State Placeholder
export const EmptyStateDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl text-center space-y-2">
    <Box className="w-6 h-6 mx-auto text-slate-500" />
    <span className="text-xs font-bold text-white block">등록된 컴포넌트가 없습니다</span>
    <button className="px-3 py-1 rounded-lg bg-violet-600 text-white text-[10px] font-bold">+ 새로 만들기</button>
  </div>
);

// 5. Skeleton Shimmer
export const SkeletonShimmerDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2 animate-pulse">
    <div className="h-4 bg-white/10 rounded w-1/3" />
    <div className="h-8 bg-white/5 rounded w-full" />
    <div className="h-4 bg-white/10 rounded w-2/3" />
  </div>
);

// 6. Bottom Sheet Drawer
export const BottomSheetDrawerDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-950 border border-white/10 p-3 shadow-2xl space-y-2 text-xs">
    <div className="w-8 h-1 bg-white/20 rounded-full mx-auto" />
    <div className="flex justify-between font-bold text-white"><span>바텀 시트 드로어</span><X className="w-3.5 h-3.5 text-slate-500" /></div>
    <p className="text-[11px] text-slate-400">모바일 제스처 스와이프로 닫기 가능</p>
  </div>
);

// 7. Pulsing Status Badge
export const PulsingBadgeDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl flex items-center justify-between text-xs">
    <span className="font-bold text-white">실시간 가동 펄스 뱃지</span>
    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold text-[10px]">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
      OPERATIONAL
    </span>
  </div>
);

// 8. Confetti Celebration
export const ConfettiCelebrationDemo: React.FC = () => (
  <div className="rounded-2xl bg-gradient-to-r from-violet-900/40 to-fuchsia-900/40 border border-fuchsia-500/40 p-4 shadow-2xl text-center space-y-1">
    <span className="text-lg">🎉 🚀 ✨</span>
    <h5 className="text-xs font-bold text-white">목표 달성 축하 콘페티!</h5>
    <span className="text-[10px] text-fuchsia-300">신규 구독자 10,000명 돌파</span>
  </div>
);

// 9. Rich Hover Card
export const RichHoverTooltipDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1.5 text-xs">
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center font-bold text-[10px]">KW</div>
      <div><span className="font-bold text-white block leading-none">Senior DevMaster</span><span className="text-[9px] text-slate-400">@kw_architect</span></div>
    </div>
    <p className="text-[10px] text-slate-300">2026 AI-Native Component Master</p>
  </div>
);

// 10. Cookie Consent
export const CookieConsentDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-950 border border-white/10 p-3 shadow-2xl space-y-2 text-xs">
    <div className="flex justify-between items-center text-slate-300 text-[11px]">
      <span>🍪 서비스 개선을 위한 쿠키 동의</span>
      <button className="px-2 py-0.5 rounded bg-violet-600 text-white font-bold text-[10px]">수락</button>
    </div>
  </div>
);

// 11. Star Rating
export const StarRatingDemo: React.FC = () => {
  const [rating, setRating] = useState(5);
  return (
    <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-amber-500/30 p-4 shadow-2xl flex items-center justify-between">
      <div><span className="text-xs font-bold text-white block">5성급 별점 평가</span><span className="text-[10px] text-slate-400">{rating}점 만점</span></div>
      <div className="flex gap-1 text-amber-400 cursor-pointer">
        {[1, 2, 3, 4, 5].map(s => (
          <Star key={s} onClick={() => setRating(s)} className={`w-4 h-4 ${s <= rating ? 'fill-amber-400' : 'text-slate-600'}`} />
        ))}
      </div>
    </div>
  );
};

// 12. Offline Toast
export const OfflineToastDemo: React.FC = () => (
  <div className="rounded-2xl bg-rose-950/40 border border-rose-500/30 p-3 shadow-2xl flex items-center gap-2.5 text-xs text-rose-300">
    <WifiOff className="w-4 h-4 text-rose-400" />
    <div><span className="font-bold block">네트워크 연결 끊김</span><span className="text-[10px] text-rose-400">오프라인 모드로 자동 전환됩니다.</span></div>
  </div>
);

// THEMES

// 1. Theme Palette
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

// 2. Glassmorphism Spec
export const GlassmorphismDemo: React.FC = () => (
  <div className="rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/20 p-4 shadow-2xl space-y-1">
    <span className="text-xs font-bold text-white block">Backdrop-Blur-2xl Glass</span>
    <p className="text-[10px] text-slate-300">초미세 유리 굴절 효과 및 림 라이트</p>
  </div>
);

// 3. Neon Glow Matrix
export const NeonGlowDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-950 p-4 shadow-2xl border border-violet-500/30 flex items-center justify-around">
    <div className="w-10 h-10 rounded-xl bg-violet-600 shadow-[0_0_15px_#8b5cf6] flex items-center justify-center text-white text-xs font-bold">10px</div>
    <div className="w-10 h-10 rounded-xl bg-cyan-500 shadow-[0_0_25px_#06b6d4] flex items-center justify-center text-black text-xs font-bold">25px</div>
    <div className="w-10 h-10 rounded-xl bg-fuchsia-500 shadow-[0_0_35px_#d946ef] flex items-center justify-center text-white text-xs font-bold">35px</div>
  </div>
);

// 4. Typography Scale
export const TypographyScaleDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1">
    <div className="text-base font-black text-white leading-tight">Heading H1 (24px)</div>
    <div className="text-xs font-bold text-violet-300">Subtitle H3 (14px)</div>
    <div className="text-[10px] text-slate-400 font-mono">Caption Mono (10px)</div>
  </div>
);

// 5. Gradient Mesh
export const GradientMeshDemo: React.FC = () => (
  <div className="relative overflow-hidden rounded-2xl h-24 p-3 flex flex-col justify-end text-white border border-white/20 bg-gradient-to-tr from-violet-800 via-fuchsia-700 to-cyan-600">
    <span className="font-black text-xs">오로라 그라데이션 메쉬</span>
  </div>
);

// 6. Border Beam
export const BorderBeamDemo: React.FC = () => (
  <div className="relative overflow-hidden rounded-2xl bg-slate-950 p-4 shadow-2xl border border-violet-500/40">
    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-fuchsia-600/20 animate-pulse" />
    <div className="relative flex items-center justify-between">
      <div><h5 className="text-xs font-bold text-white">Border Beam 광선 레이저</h5><p className="text-[10px] text-slate-400">외곽선을 따라 무한 회전하는 네온 빔</p></div>
      <div className="w-8 h-8 rounded-full bg-violet-600/30 border border-violet-400/50 flex items-center justify-center text-violet-300 text-xs font-bold shadow-[0_0_12px_#8b5cf6]">✦</div>
    </div>
  </div>
);

// 7. Theme Mode Toggle
export const ThemeToggleDemo: React.FC = () => {
  const [dark, setDark] = useState(true);
  return (
    <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl flex items-center justify-between">
      <span className="text-xs font-bold text-white">{dark ? '다크 모드 (Cyber)' : '라이트 모드 (Minimal)'}</span>
      <button onClick={() => setDark(!dark)} className="p-2 rounded-xl bg-white/5 border border-white/10 text-amber-300 hover:text-white transition-transform hover:rotate-45">
        {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
    </div>
  );
};

// 8. Grid Dot Matrix
export const GridDotMatrixDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-950 p-4 shadow-2xl border border-white/10 flex items-center justify-between">
    <div><span className="text-xs font-bold text-white block">도트 매트릭스 패턴</span><span className="text-[10px] text-slate-500 font-mono">Dot Pattern 12px</span></div>
    <div className="text-violet-400 font-mono text-sm font-black">::: ::: :::</div>
  </div>
);

// 9. Neumorphism Soft UI
export const NeumorphismDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900 p-4 shadow-2xl border border-white/5 flex items-center justify-around">
    <button className="px-4 py-2 rounded-xl bg-slate-900 shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_10px_rgba(0,0,0,0.8)] text-xs font-bold text-slate-300 active:shadow-inner">
      Soft Button
    </button>
  </div>
);

// 10. Bento Grid
export const BentoGridDemo: React.FC = () => (
  <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl">
    <div className="text-xs font-bold text-white mb-2">애플 스타일 벤토 그리드</div>
    <div className="grid grid-cols-3 gap-1.5 h-20 text-[10px]">
      <div className="col-span-2 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 border border-white/10 rounded-xl p-2 flex flex-col justify-between text-white">
        <span className="font-bold">AI Core 3.7</span>
        <span className="text-violet-300 text-[9px]">Zero Latency</span>
      </div>
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 flex flex-col justify-between text-slate-300">
        <span>99.9%</span>
        <span className="text-[9px] text-slate-500">Uptime</span>
      </div>
    </div>
  </div>
);

// 11. Claymorphism 3D Card
export const ClaymorphismDemo: React.FC = () => (
  <div className="rounded-2xl bg-violet-600/80 p-4 shadow-[8px_8px_16px_rgba(0,0,0,0.4),inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.4)] text-white text-center">
    <span className="text-xs font-black block">3D Claymorphism</span>
    <span className="text-[10px] text-violet-200">푹신한 클레이 입체 카드</span>
  </div>
);

// 12. Noise Overlay
export const NoiseOverlayDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-950 border border-white/10 p-4 shadow-2xl flex items-center justify-between text-xs">
    <div><span className="font-bold text-white block">아날로그 노이즈 텍스처</span><span className="text-[10px] text-slate-400">Film Grain Overlay</span></div>
    <span className="px-2 py-0.5 rounded bg-white/10 text-slate-300 font-mono text-[10px]">Grain 15%</span>
  </div>
);
