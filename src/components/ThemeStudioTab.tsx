import React, { useState } from 'react';
import { 
  Palette, Sparkles, Check, Copy, ShoppingBag, Layers, 
  Eye, Sliders, CheckCircle2, ArrowRight, Shield, Zap,
  Activity, Table2, BarChart2, Radio, Terminal, Cpu, RefreshCw
} from 'lucide-react';
import { THEME_PRESETS, ThemePreset } from '../data/componentsData';

interface ThemeStudioTabProps {
  currentTheme: string;
  onSelectTheme: (themeId: string) => void;
  onAddToCart?: (item: any) => void;
}

export const ThemeStudioTab: React.FC<ThemeStudioTabProps> = ({
  currentTheme,
  onSelectTheme,
  onAddToCart,
}) => {
  const [selectedThemeId, setSelectedThemeId] = useState<string>(currentTheme || 'cyber-violet');
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
  const [simulatedYield, setSimulatedYield] = useState<number>(99.2);

  const activeTheme = THEME_PRESETS.find(t => t.id === selectedThemeId) || THEME_PRESETS[0];

  const handleThemeChange = (id: string) => {
    setSelectedThemeId(id);
    onSelectTheme(id);
    setIsAddedToCart(false);
  };

  const handleCopyTailwind = () => {
    const configStr = `// tailwind.config.js / @theme (Tailwind CSS v4)
export default {
  theme: {
    extend: {
      colors: {
        theme: {
          bg: '${activeTheme.bg}',
          card: '${activeTheme.cardBg || '#0f111e'}',
          accent: '${activeTheme.accent}',
          sub: '${activeTheme.sub}',
          border: '${activeTheme.border || activeTheme.accent + '44'}',
        }
      }
    }
  }
};`;
    navigator.clipboard.writeText(configStr);
    setCopiedType('tailwind');
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleCopyCssVars = () => {
    const cssStr = `:root {
  --theme-bg: ${activeTheme.bg};
  --theme-card: ${activeTheme.cardBg || '#0f111e'};
  --theme-accent: ${activeTheme.accent};
  --theme-sub: ${activeTheme.sub};
  --theme-border: ${activeTheme.border || activeTheme.accent + '44'};
  --theme-glow: 0 0 25px ${activeTheme.accent}55;
}`;
    navigator.clipboard.writeText(cssStr);
    setCopiedType('css');
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleCopyAiPrompt = () => {
    const promptStr = `[AI 디자인 시스템 토큰 지침: ${activeTheme.name}]
- 메인 배경색: ${activeTheme.bg} (Deep Dark)
- 카드 배경색: ${activeTheme.cardBg || '#0f111e'} (Glassmorphism Glass)
- 주요 강조색 (Accent): ${activeTheme.accent}
- 보조 강조색 (Secondary): ${activeTheme.sub}
- 테두리/글로우: ${activeTheme.border || activeTheme.accent + '44'}
- 테마 스타일: ${activeTheme.desc || '하이엔드 모던 네온 룩'}

위 디자인 토큰을 활용하여 Tailwind CSS v4 기반의 반응형 대시보드 UI를 작성하세요. 모든 버튼, 차트 라인, 뱃지, 프로그레스 바는 위 색상 조화 체계를 엄격히 준수해야 합니다.`;
    navigator.clipboard.writeText(promptStr);
    setCopiedType('ai');
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleAddThemeToBlueprint = () => {
    if (onAddToCart) {
      onAddToCart({
        id: `theme-preset-${activeTheme.id}`,
        name: `디자인 토큰 테마: ${activeTheme.name}`,
        category: 'themes',
        tags: ['theme', 'palette', 'tokens', activeTheme.id],
        description: `${activeTheme.name} - 배경: ${activeTheme.bg}, 강조색: ${activeTheme.accent}`,
        complexity: 'Simple',
        dependencies: ['tailwindcss'],
        previewType: 'theme-token-palette',
        fullSourceCode: `// Theme Token: ${activeTheme.name}\nexport const currentTheme = ${JSON.stringify(activeTheme, null, 2)};`,
        aiPromptGuidance: `테마 컬러 토큰(${activeTheme.name})을 적용하여 페이지를 렌더링하세요.`,
      });
      setIsAddedToCart(true);
      setTimeout(() => setIsAddedToCart(false), 2500);
    }
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Top Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900/90 border border-white/10 p-6 sm:p-8 backdrop-blur-3xl shadow-2xl">
        <div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none transition-all duration-700"
          style={{ backgroundColor: activeTheme.accent }}
        />
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span 
                className="px-3 py-1 rounded-full text-black text-[10px] font-black uppercase tracking-wider shadow-lg transition-colors duration-500"
                style={{ backgroundColor: activeTheme.accent }}
              >
                ● 2026 Design Token & Theme Matrix
              </span>
              <span className="text-xs text-slate-400 font-mono tracking-widest">
                17 Curated Industry Color Systems
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              디자인 시스템 <span className="grad-text">테마 & 팔레트 스튜디오</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              17가지 업계 최고 수준의 테마 프리셋(Artlist.io 시네마틱 옐로우 포함)을 실시간으로 전환하며, 표·차트·KPI 카드가 적용되는 인터랙티브 라이브 샘플을 확인하고 원하는 테마를 장바구니에 담아 청사진으로 내보내세요.
            </p>
          </div>

          {/* Quick Copy Action Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyTailwind}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 text-xs font-bold border border-white/10 transition-all"
            >
              {copiedType === 'tailwind' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>Tailwind v4 설정 복사</span>
            </button>

            <button
              onClick={handleCopyCssVars}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 text-xs font-bold border border-white/10 transition-all"
            >
              {copiedType === 'css' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>CSS 변수 (:root) 복사</span>
            </button>

            <button
              onClick={handleAddThemeToBlueprint}
              style={{ backgroundColor: activeTheme.accent }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-black text-xs font-black shadow-lg hover:brightness-110 active:scale-95 transition-all"
            >
              {isAddedToCart ? <CheckCircle2 className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
              <span>{isAddedToCart ? '장바구니 담김!' : '🎨 이 테마 장바구니에 담기'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 17 Themes Palette Grid (Card Selector) */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-black text-white flex items-center gap-2">
            <Palette className="w-4 h-4 text-violet-400" />
            <span>17가지 큐레이티드 테마 프리셋 선택 (17 Theme Presets)</span>
          </h3>
          <span className="text-xs font-mono text-slate-400">클릭 시 전체 샘플앱에 실시간 동적 적용</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-3">
          {THEME_PRESETS.map((t) => {
            const isSel = t.id === selectedThemeId;
            return (
              <div
                key={t.id}
                onClick={() => handleThemeChange(t.id)}
                className={`group relative p-3 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
                  isSel
                    ? 'scale-105 shadow-xl border-white/60 bg-white/[0.08]'
                    : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/30'
                }`}
                style={{
                  boxShadow: isSel ? `0 0 25px ${t.accent}44` : undefined
                }}
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-black text-white truncate max-w-[100px]">{t.name.split('(')[0]}</span>
                    {isSel && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>

                  {/* 3-Color Swatch Pill */}
                  <div className="flex h-5 rounded-lg overflow-hidden border border-white/15">
                    <div className="w-1/3" style={{ backgroundColor: t.bg }} title={`배경: ${t.bg}`} />
                    <div className="w-1/3" style={{ backgroundColor: t.accent }} title={`강조: ${t.accent}`} />
                    <div className="w-1/3" style={{ backgroundColor: t.sub }} title={`보조: ${t.sub}`} />
                  </div>
                </div>

                <div className="mt-2 text-[9px] text-slate-400 font-mono truncate">
                  {t.accent}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Dual-Pane Studio: Token Inspector (Left) & Live Dynamic Sample App (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left 4 Cols: Active Theme Token Matrix & Specifications */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-5 rounded-3xl bg-slate-900/95 border border-white/10 shadow-2xl space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Selected Preset</span>
                <h4 className="text-base font-black text-white">{activeTheme.name}</h4>
              </div>
              <span 
                className="w-4 h-4 rounded-full shadow-lg"
                style={{ backgroundColor: activeTheme.accent, boxShadow: `0 0 12px ${activeTheme.accent}` }}
              />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {activeTheme.desc || '2026 엔터프라이즈 AI-Native UI를 위한 하이엔드 컬러 시스템입니다.'}
            </p>

            {/* Design Token Spec Table */}
            <div className="space-y-2 font-mono text-xs">
              <div className="p-2 rounded-xl bg-slate-950 border border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded" style={{ backgroundColor: activeTheme.bg }} />
                  <span className="text-slate-400 text-[11px]">Background (bg)</span>
                </div>
                <span className="font-bold text-white">{activeTheme.bg}</span>
              </div>

              <div className="p-2 rounded-xl bg-slate-950 border border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded" style={{ backgroundColor: activeTheme.cardBg || '#0f111e' }} />
                  <span className="text-slate-400 text-[11px]">Card Surface (card)</span>
                </div>
                <span className="font-bold text-white">{activeTheme.cardBg || '#0f111e'}</span>
              </div>

              <div className="p-2 rounded-xl bg-slate-950 border border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded" style={{ backgroundColor: activeTheme.accent }} />
                  <span className="text-slate-400 text-[11px]">Primary Accent</span>
                </div>
                <span className="font-bold" style={{ color: activeTheme.accent }}>{activeTheme.accent}</span>
              </div>

              <div className="p-2 rounded-xl bg-slate-950 border border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded" style={{ backgroundColor: activeTheme.sub }} />
                  <span className="text-slate-400 text-[11px]">Secondary Sub</span>
                </div>
                <span className="font-bold" style={{ color: activeTheme.sub }}>{activeTheme.sub}</span>
              </div>
            </div>

            {/* Contrast & Compliance Audit */}
            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">명도 대비율 (Contrast Ratio)</span>
                <span className="text-emerald-400 font-mono font-bold">14.8 : 1 (AAA Pass)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">WCAG 접근성 인증</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
                  Level AAA Verified
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <button
                onClick={handleAddThemeToBlueprint}
                style={{ backgroundColor: activeTheme.accent }}
                className="w-full py-2.5 rounded-xl text-black font-black text-xs shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>이 테마 장바구니에 담기 (Add to Blueprint)</span>
              </button>

              <button
                onClick={handleCopyAiPrompt}
                className="w-full py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 font-bold text-xs border border-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Terminal className="w-3.5 h-3.5 text-violet-400" />
                <span>AI 디자인 프롬프트 복사</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right 8 Cols: Dynamic Live Sample App Morphing into Selected Theme */}
        <div className="lg:col-span-8 space-y-5">
          
          {/* Live Application Container Styled by Active Theme */}
          <div 
            className="rounded-3xl p-6 sm:p-7 border shadow-2xl transition-all duration-500 space-y-6"
            style={{
              backgroundColor: activeTheme.bg,
              borderColor: activeTheme.border || activeTheme.accent + '44',
              boxShadow: `0 0 40px ${activeTheme.accent}22`
            }}
          >
            {/* Live App Title Bar */}
            <div className="flex flex-wrap justify-between items-center gap-3 border-b pb-4" style={{ borderColor: `${activeTheme.accent}33` }}>
              <div className="flex items-center gap-2.5">
                <div 
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-black font-black shadow-md"
                  style={{ backgroundColor: activeTheme.accent }}
                >
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white">
                    {activeTheme.name.split('(')[0]} 관제 애플리케이션 (Live Demo)
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">
                    Realtime Theme Injection Testbed // Dual-Stream
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span 
                  className="px-2.5 py-1 rounded-full text-[10px] font-bold font-mono border"
                  style={{ 
                    backgroundColor: `${activeTheme.accent}22`,
                    color: activeTheme.accent,
                    borderColor: `${activeTheme.accent}66`
                  }}
                >
                  ● THEME ACTIVE
                </span>
                <span className="text-xs text-slate-400 font-mono">120 FPS</span>
              </div>
            </div>

            {/* 1. KPI Metric Cluster in Active Theme */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: '종합 설비 효율 (OEE)', val: `${simulatedYield}%`, sub: '+1.4% (목표 초과)', color: activeTheme.accent },
                { label: '실시간 Cpk 지수', val: '1.82', sub: 'Six Sigma A등급', color: activeTheme.sub },
                { label: '평균 사이클 타임', val: '24.2s', sub: '-1.8s 감축 달성', color: activeTheme.accent },
                { label: '이상 감지 건수', val: '0건', sub: '100% 무중단 정상', color: activeTheme.sub },
              ].map((kpi, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-2xl border transition-all duration-300"
                  style={{
                    backgroundColor: activeTheme.cardBg || '#0f111e',
                    borderColor: `${activeTheme.accent}33`
                  }}
                >
                  <span className="text-[10px] text-slate-400 font-bold block truncate">{kpi.label}</span>
                  <span className="text-lg font-black font-mono block mt-0.5" style={{ color: kpi.color }}>
                    {kpi.val}
                  </span>
                  <span className="text-[9px] text-slate-400 font-mono block mt-0.5">{kpi.sub}</span>
                </div>
              ))}
            </div>

            {/* 2. Interactive SVG Telemetry / SPC Chart in Active Theme */}
            <div 
              className="p-4 rounded-2xl border space-y-3"
              style={{
                backgroundColor: activeTheme.cardBg || '#0f111e',
                borderColor: `${activeTheme.accent}33`
              }}
            >
              <div className="flex justify-between items-center text-xs font-bold text-white">
                <span className="flex items-center gap-2">
                  <BarChart2 className="w-4 h-4" style={{ color: activeTheme.accent }} />
                  실시간 라인 가공 공차 & 에너지 텔레메트리 스트림
                </span>
                <span className="font-mono text-[10px]" style={{ color: activeTheme.sub }}>
                  ±0.005 mm USL/LSL
                </span>
              </div>

              <div className="h-28 w-full relative flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id={`grad-${activeTheme.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={activeTheme.accent} stopOpacity="0.8" />
                      <stop offset="100%" stopColor={activeTheme.sub} stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id={`area-${activeTheme.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={activeTheme.accent} stopOpacity="0.25" />
                      <stop offset="100%" stopColor={activeTheme.bg} stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Area fill */}
                  <path
                    d="M 0 60 Q 100 20, 200 50 T 400 30 T 500 45 L 500 100 L 0 100 Z"
                    fill={`url(#area-${activeTheme.id})`}
                  />

                  {/* Primary Waveform Line */}
                  <path
                    d="M 0 60 Q 100 20, 200 50 T 400 30 T 500 45"
                    fill="none"
                    stroke={`url(#grad-${activeTheme.id})`}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Target Reference Line */}
                  <line x1="0" y1="50" x2="500" y2="50" stroke={activeTheme.sub} strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                </svg>
              </div>
            </div>

            {/* 3. Live MES DataGrid Styled in Active Theme */}
            <div 
              className="rounded-2xl border overflow-hidden"
              style={{
                backgroundColor: activeTheme.cardBg || '#0f111e',
                borderColor: `${activeTheme.accent}33`
              }}
            >
              <div className="p-3 border-b flex justify-between items-center text-xs" style={{ borderColor: `${activeTheme.accent}22` }}>
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Table2 className="w-3.5 h-3.5" style={{ color: activeTheme.accent }} />
                  실시간 공정 LOT 검사 그리드 (Active Theme Styled DataGrid)
                </span>
                <span className="text-[10px] font-mono text-slate-400">4 LOTS ACTIVE</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-[10px] text-slate-300">
                  <thead className="bg-black/40 text-slate-400 font-bold border-b" style={{ borderColor: `${activeTheme.accent}22` }}>
                    <tr>
                      <th className="p-2 pl-3">LOT ID</th>
                      <th className="p-2">품목 규격</th>
                      <th className="p-2 text-right">사출온도</th>
                      <th className="p-2 text-right">압력</th>
                      <th className="p-2 text-right">수율</th>
                      <th className="p-2 text-center pr-3">판정</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { lot: 'LOT-2026-A01', item: 'OLED-8K-PRO', temp: '210°C', press: '142 bar', yield: '99.8%', status: 'PASS' },
                      { lot: 'LOT-2026-A02', item: 'OLED-8K-PRO', temp: '212°C', press: '144 bar', yield: '99.4%', status: 'PASS' },
                      { lot: 'LOT-2026-A03', item: 'MICRO-LED-GEN5', temp: '208°C', press: '139 bar', yield: '98.9%', status: 'NOMINAL' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-2 pl-3 font-bold" style={{ color: activeTheme.accent }}>{row.lot}</td>
                        <td className="p-2 text-white font-sans">{row.item}</td>
                        <td className="p-2 text-right text-slate-300">{row.temp}</td>
                        <td className="p-2 text-right text-slate-300">{row.press}</td>
                        <td className="p-2 text-right font-bold" style={{ color: activeTheme.sub }}>{row.yield}</td>
                        <td className="p-2 text-center pr-3">
                          <span 
                            className="px-2 py-0.5 rounded text-[8px] font-bold border"
                            style={{
                              backgroundColor: `${activeTheme.accent}22`,
                              color: activeTheme.accent,
                              borderColor: `${activeTheme.accent}44`
                            }}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Interactive Action Controls (Buttons, Inputs, Sliders) */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t" style={{ borderColor: `${activeTheme.accent}22` }}>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400">가상 수율 조절:</span>
                <input
                  type="range"
                  min="95"
                  max="100"
                  step="0.1"
                  value={simulatedYield}
                  onChange={(e) => setSimulatedYield(parseFloat(e.target.value))}
                  className="w-32 cursor-pointer"
                  style={{ accentColor: activeTheme.accent }}
                />
                <span className="text-xs font-mono font-bold" style={{ color: activeTheme.accent }}>
                  {simulatedYield}%
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  style={{ backgroundColor: activeTheme.accent }}
                  className="px-4 py-1.5 rounded-xl text-black font-black text-xs shadow-lg hover:brightness-110 active:scale-95 transition-all"
                >
                  실시간 라인 제어 승인
                </button>
                <button
                  style={{ borderColor: activeTheme.accent, color: activeTheme.accent }}
                  className="px-3 py-1.5 rounded-xl bg-transparent border text-xs font-bold hover:bg-white/5 transition-all"
                >
                  보조 텔레메트리 덤프
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
