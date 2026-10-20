import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Sparkles, Sliders, Palette, Layers, Eye, Copy, Check, 
  ArrowRight, Shield, Zap, RefreshCw, Maximize2, Minimize2,
  Table, BarChart2, LayoutGrid, MousePointer, CloudRain,
  Flame, Cpu, Radio, CheckCircle2, ChevronRight, Download,
  Sun, Moon, Contrast, Type, Move, Code2, Play
} from 'lucide-react';

interface DesignStudioTabProps {
  currentTheme?: string;
  onAddToCart?: (item: any) => void;
}

export type StudioSubTool = 
  | 'glass' 
  | 'shadow' 
  | 'contrast' 
  | 'clamp' 
  | 'quantum-dock' 
  | 'table' 
  | 'chart' 
  | 'bento' 
  | 'spotlight' 
  | 'aurora' 
  | 'skeleton';

// Helper: Hex to RGB
function hexToRgb(hex: string) {
  const clean = hex.replace('#', '');
  const num = parseInt(clean, 16);
  return { 
    r: (num >> 16) & 255, 
    g: (num >> 8) & 255, 
    b: num & 255 
  };
}

// Helper: Relative Luminance (WCAG 2.1)
function getLuminance(r: number, g: number, b: number) {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export const DesignStudioTab: React.FC<DesignStudioTabProps> = ({
  currentTheme = 'cyber-violet',
  onAddToCart
}) => {
  const [activeTool, setActiveTool] = useState<StudioSubTool>('glass');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string = 'default') => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // =========================================================================
  // 1. 글래스모피즘 & 스펙큘러 상태
  // =========================================================================
  const [glassBlur, setGlassBlur] = useState<number>(18);
  const [glassOpacity, setGlassOpacity] = useState<number>(12);
  const [glassSaturation, setGlassSaturation] = useState<number>(160);
  const [glassBorderOpacity, setGlassBorderOpacity] = useState<number>(16);
  const [glassBorderWidth, setGlassBorderWidth] = useState<number>(1);
  const [glassRadius, setGlassRadius] = useState<number>(24);
  const [glassColor, setGlassColor] = useState<string>('#ffffff');
  const [glassSpecularTop, setGlassSpecularTop] = useState<boolean>(true);
  const [glassCanvasBg, setGlassCanvasBg] = useState<'mesh' | 'dark' | 'light'>('mesh');

  const glassRgb = hexToRgb(glassColor);
  const glassBgVal = `rgba(${glassRgb.r}, ${glassRgb.g}, ${glassRgb.b}, ${(glassOpacity / 100).toFixed(2)})`;
  const glassBorderVal = `${glassBorderWidth}px solid rgba(${glassRgb.r}, ${glassRgb.g}, ${glassRgb.b}, ${(glassBorderOpacity / 100).toFixed(2)})`;
  const glassFilterVal = `blur(${glassBlur}px) saturate(${glassSaturation}%)`;
  const glassShadowVal = glassSpecularTop 
    ? `inset 0 1px 0 rgba(255, 255, 255, 0.22), 0 16px 40px -10px rgba(0, 0, 0, 0.5)`
    : `0 16px 40px -10px rgba(0, 0, 0, 0.5)`;

  const glassCssCode = `.glass-surface {
  background: ${glassBgVal};
  backdrop-filter: ${glassFilterVal};
  -webkit-backdrop-filter: ${glassFilterVal};
  border: ${glassBorderVal};
  border-radius: ${glassRadius}px;
  box-shadow: ${glassShadowVal};
}`;

  // =========================================================================
  // 2. 다중 레이어 섀도우 상태
  // =========================================================================
  const [shLayers, setShLayers] = useState<number>(5);
  const [shMaxY, setShMaxY] = useState<number>(36);
  const [shMaxBlur, setShMaxBlur] = useState<number>(64);
  const [shAlpha, setShAlpha] = useState<number>(20);
  const [shColor, setShColor] = useState<string>('#0f172a');

  const shRgb = hexToRgb(shColor);
  const shadowList = useMemo(() => {
    const list: string[] = [];
    const maxA = shAlpha / 100;
    for (let i = 1; i <= shLayers; i++) {
      const progress = Math.pow(i / shLayers, 1.8);
      const y = Math.round(shMaxY * progress);
      const blur = Math.round(shMaxBlur * progress);
      const a = (maxA * (0.35 + 0.65 * (i / shLayers))).toFixed(3);
      list.push(`0px ${y}px ${blur}px rgba(${shRgb.r}, ${shRgb.g}, ${shRgb.b}, ${a})`);
    }
    return list;
  }, [shLayers, shMaxY, shMaxBlur, shAlpha, shRgb]);

  const shadowCssCode = `.elevated-surface {
  background: #0f131f;
  border-radius: 24px;
  box-shadow: 
    ${shadowList.join(',\n    ')};
}`;

  const applyShadowPreset = (type: 'soft' | 'elevation' | 'neon' | 'apple') => {
    if (type === 'soft') {
      setShLayers(4);
      setShMaxY(24);
      setShMaxBlur(48);
      setShAlpha(12);
      setShColor('#0f172a');
    } else if (type === 'elevation') {
      setShLayers(6);
      setShMaxY(50);
      setShMaxBlur(90);
      setShAlpha(28);
      setShColor('#05070d');
    } else if (type === 'neon') {
      setShLayers(3);
      setShMaxY(0);
      setShMaxBlur(60);
      setShAlpha(45);
      setShColor('#8b5cf6');
    } else if (type === 'apple') {
      setShLayers(5);
      setShMaxY(20);
      setShMaxBlur(35);
      setShAlpha(16);
      setShColor('#000000');
    }
  };

  // =========================================================================
  // 3. WCAG & APCA 명도대비 상태
  // =========================================================================
  const [conBg, setConBg] = useState<string>('#07080D');
  const [conFg, setConFg] = useState<string>('#38BDF8');

  const { contrastRatio, passAaNorm, passAaaNorm, passAaLg, passUi } = useMemo(() => {
    const bg = hexToRgb(conBg);
    const fg = hexToRgb(conFg);
    const l1 = getLuminance(bg.r, bg.g, bg.b);
    const l2 = getLuminance(fg.r, fg.g, fg.b);
    const bright = Math.max(l1, l2);
    const dark = Math.min(l1, l2);
    const ratio = (bright + 0.05) / (dark + 0.05);
    return {
      contrastRatio: ratio.toFixed(2),
      passAaNorm: ratio >= 4.5,
      passAaaNorm: ratio >= 7.0,
      passAaLg: ratio >= 3.0,
      passUi: ratio >= 3.0
    };
  }, [conBg, conFg]);

  const swapContrastColors = () => {
    const temp = conBg;
    setConBg(conFg);
    setConFg(temp);
  };

  const contrastCssCode = `:root {
  --theme-bg: ${conBg.toUpperCase()};
  --theme-fg: ${conFg.toUpperCase()};
  /* WCAG 2.1 Contrast Ratio: ${contrastRatio}:1 (${passAaNorm ? 'AA PASS' : 'AA FAIL'}) */
}

.accessible-container {
  background-color: var(--theme-bg);
  color: var(--theme-fg);
}`;

  // =========================================================================
  // 4. 반응형 Fluid Clamp() 상태
  // =========================================================================
  const [clampMinVp, setClampMinVp] = useState<number>(375);
  const [clampMaxVp, setClampMaxVp] = useState<number>(1440);
  const [clampMinF, setClampMinF] = useState<number>(18);
  const [clampMaxF, setClampMaxF] = useState<number>(44);
  const [clampSimVp, setClampSimVp] = useState<number>(860);

  const { clampFormula, liveCalculatedPx, liveCalculatedRem } = useMemo(() => {
    const minRem = (clampMinF / 16).toFixed(3);
    const maxRem = (clampMaxF / 16).toFixed(3);
    const slope = (clampMaxF - clampMinF) / (clampMaxVp - clampMinVp);
    const yAxisIntersection = -clampMinVp * slope + clampMinF;
    const prefRem = (yAxisIntersection / 16).toFixed(3);
    const prefVw = (slope * 100).toFixed(3);
    const formula = `clamp(${minRem}rem, ${prefRem}rem + ${prefVw}vw, ${maxRem}rem)`;

    // Calculate current simulated pixel size
    const prefPx = yAxisIntersection + (slope * clampSimVp);
    const clampedPx = Math.min(Math.max(prefPx, clampMinF), clampMaxF);
    return {
      clampFormula: formula,
      liveCalculatedPx: clampedPx.toFixed(1),
      liveCalculatedRem: (clampedPx / 16).toFixed(2)
    };
  }, [clampMinVp, clampMaxVp, clampMinF, clampMaxF, clampSimVp]);

  const clampCssCode = `.fluid-hero-headline {
  /* Viewport ${clampMinVp}px -> ${clampMinF}px | Viewport ${clampMaxVp}px -> ${clampMaxF}px */
  font-size: ${clampFormula};
  line-height: 1.15;
  letter-spacing: -0.025em;
}`;

  // =========================================================================
  // 5. Quantum AI 독 & 버튼 시스템 상태
  // =========================================================================
  const [promptText, setPromptText] = useState<string>('Cinematic aerial drone shot of neon semiconductor fabrication plant in 2026, anamorphic lens 35mm, ultra-clean reflections, 60fps');
  const [activeCamPreset, setActiveCamPreset] = useState<string>('Dynamic Crane');
  const [activeRatio, setActiveRatio] = useState<string>('16:9 Widescreen');
  const [motionIntensity, setMotionIntensity] = useState<number>(75);
  const [activeSegmentMode, setActiveSegmentMode] = useState<'text' | 'image' | 'brush'>('text');

  // Spotlight card mouse tracker
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty('--mouse-x', `${x}px`);
    ref.current.style.setProperty('--mouse-y', `${y}px`);
  };

  // =========================================================================
  // 6. 모던 데이터 테이블 상태
  // =========================================================================
  const [tblTheme, setTblTheme] = useState<'glass' | 'minimal' | 'neon'>('glass');
  const [tblDensity, setTblDensity] = useState<'py-2' | 'py-3.5' | 'py-5'>('py-3.5');
  const [tblZebra, setTblZebra] = useState<boolean>(true);
  const [tblHoverSpot, setTblHoverSpot] = useState<boolean>(true);
  const [tblShowBadge, setTblShowBadge] = useState<boolean>(true);
  const [tblShowProg, setTblShowProg] = useState<boolean>(true);
  const [tblAccent, setTblAccent] = useState<'indigo' | 'emerald' | 'rose' | 'cyan' | 'amber'>('indigo');

  const tableSampleRows = [
    { id: 'INV-9024', name: '김태리', role: 'Lead AI Architect', status: 'Active', usage: 88, amount: '$14,200.00', trend: '+18.4%' },
    { id: 'INV-9025', name: '박성훈', role: 'Cloud Infra Dev', status: 'Active', usage: 64, amount: '$8,950.00', trend: '+6.2%' },
    { id: 'INV-9026', name: '최유진', role: 'Security Engineer', status: 'Pending', usage: 42, amount: '$5,400.00', trend: '-2.1%' },
    { id: 'INV-9027', name: '이도현', role: 'Frontend Specialist', status: 'Active', usage: 95, amount: '$19,800.00', trend: '+31.0%' },
    { id: 'INV-9028', name: '한소희', role: 'Product Designer', status: 'Risk', usage: 19, amount: '$2,150.00', trend: '-11.5%' }
  ];

  // =========================================================================
  // 7. SVG 네온 차트 상태
  // =========================================================================
  const [chartType, setChartType] = useState<'area' | 'bar'>('area');
  const [chartColor, setChartColor] = useState<string>('#6366f1');
  const [chartStroke, setChartStroke] = useState<number>(3);
  const [chartGlow, setChartGlow] = useState<number>(8);
  const [chartShowDots, setChartShowDots] = useState<boolean>(true);
  const [chartShowGrid, setChartShowGrid] = useState<boolean>(true);
  const [chartPoints, setChartPoints] = useState<number[]>([28, 45, 38, 68, 54, 85, 72, 96, 82, 115, 98, 134]);
  const [hoveredPoint, setHoveredPoint] = useState<{ x: number; y: number; val: number } | null>(null);

  const randomizeChartData = () => {
    setChartPoints(Array.from({ length: 12 }, () => Math.floor(Math.random() * 110) + 25));
  };

  // SVG Chart Geometry
  const chartWidth = 680;
  const chartHeight = 260;
  const chartPad = 28;
  const maxChartVal = Math.max(...chartPoints) * 1.15;

  const svgCalculatedPoints = useMemo(() => {
    return chartPoints.map((val, idx) => {
      const x = chartPad + (idx / (chartPoints.length - 1)) * (chartWidth - chartPad * 2);
      const y = chartHeight - chartPad - (val / maxChartVal) * (chartHeight - chartPad * 2);
      return { x: Math.round(x), y: Math.round(y), val };
    });
  }, [chartPoints, maxChartVal]);

  const chartAreaPath = useMemo(() => {
    if (svgCalculatedPoints.length === 0) return { lineD: '', areaD: '' };
    let d = `M ${svgCalculatedPoints[0].x} ${svgCalculatedPoints[0].y}`;
    for (let i = 0; i < svgCalculatedPoints.length - 1; i++) {
      const xMid = (svgCalculatedPoints[i].x + svgCalculatedPoints[i + 1].x) / 2;
      d += ` C ${xMid} ${svgCalculatedPoints[i].y}, ${xMid} ${svgCalculatedPoints[i + 1].y}, ${svgCalculatedPoints[i + 1].x} ${svgCalculatedPoints[i + 1].y}`;
    }
    const areaD = `${d} L ${svgCalculatedPoints[svgCalculatedPoints.length - 1].x} ${chartHeight - chartPad} L ${svgCalculatedPoints[0].x} ${chartHeight - chartPad} Z`;
    return { lineD: d, areaD };
  }, [svgCalculatedPoints]);

  // =========================================================================
  // 8. 벤토 그리드 상태
  // =========================================================================
  const [bentoPreset, setBentoPreset] = useState<'apple' | 'saas' | 'enterprise'>('apple');
  const [bentoGap, setBentoGap] = useState<number>(16);
  const [bentoRad, setBentoRad] = useState<number>(20);

  // =========================================================================
  // 9. 마우스 추적 스포트라이트 상태
  // =========================================================================
  const [spotSize, setSpotSize] = useState<number>(260);
  const [spotAlpha, setSpotAlpha] = useState<number>(30);
  const [spotColor, setSpotColor] = useState<string>('#6366f1');

  // =========================================================================
  // 10. 오로라 메쉬 & SVG 노이즈 상태
  // =========================================================================
  const [aurColor1, setAurColor1] = useState<string>('#4f46e5');
  const [aurColor2, setAurColor2] = useState<string>('#ec4899');
  const [aurColor3, setAurColor3] = useState<string>('#06b6d4');
  const [aurBlur, setAurBlur] = useState<number>(55);
  const [aurNoise, setAurNoise] = useState<number>(14);

  // =========================================================================
  // 11. 스켈레톤 쉬머 상태
  // =========================================================================
  const [skelSpeed, setSkelSpeed] = useState<number>(1.8);
  const [skelType, setSkelType] = useState<'card' | 'feed' | 'profile'>('card');

  // Add Component to Blueprint Cart
  const handleAddStudioToCart = () => {
    if (!onAddToCart) return;
    const item = {
      id: `studio-${activeTool}-custom-${Date.now()}`,
      name: `디자인 스튜디오: ${activeTool.toUpperCase()}`,
      category: 'themes',
      complexity: 'Advanced',
      tags: ['studio', activeTool, 'customizer', '2026-design'],
      description: `디자인 스튜디오 PRO에서 커스텀 조율된 ${activeTool} 컴포넌트 프리셋`,
      fullSourceCode: glassCssCode,
    };
    onAddToCart(item);
  };

  return (
    <div className="w-full min-h-screen bg-[#04060c] text-slate-100 flex flex-col font-sans">
      
      {/* Top Hero Banner */}
      <div className="border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900/60 to-transparent px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="max-w-[1920px] mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-400/30 text-cyan-300 text-[10px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                2026 Next-Gen Design Studio PRO & UI Lab
              </span>
              <span className="text-xs text-slate-400 font-mono tracking-widest hidden sm:inline">
                Zero-Loss Precision Workbench
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              디자인 스튜디오 <span className="grad-text">연습공간 & UI 인터랙티브 랩</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              글래스모피즘 스펙큘러 조명, 3D 다중 레이어 그림자, WCAG 2.1 명도 대비 및 APCA 검증기, 반응형 Fluid Typography, Quantum AI 인터랙티브 독 & 버튼, 네온 SVG 차트, 벤토 그리드, 마우스 스포트라이트, 오로라 프랙탈 노이즈를 실시간 파라미터로 즉시 테스트하고 완성된 코드를 추출하세요.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => copyToClipboard(glassCssCode, 'main-code')}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 text-xs font-bold border border-white/10 transition-all shadow-md active:scale-95"
            >
              {copiedKey === 'main-code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>CSS 토큰 복사</span>
            </button>
            <button
              onClick={handleAddStudioToCart}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-black shadow-lg shadow-violet-900/40 active:scale-95 transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>청사진 보관함에 담기</span>
            </button>
          </div>
        </div>

        {/* Studio Sub-Tool Bar (11 Cutting-Edge Tools) */}
        <div className="max-w-[1920px] mx-auto mt-6 flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
          {[
            { id: 'glass', label: '글래스모피즘 & 스펙큘러', icon: Layers, badge: 'PRO' },
            { id: 'shadow', label: '다중 레이어 섀도우', icon: Move, badge: '3D' },
            { id: 'contrast', label: 'WCAG 명도대비 & APCA', icon: Contrast, badge: 'A11y' },
            { id: 'clamp', label: '반응형 Clamp() 타이포', icon: Type, badge: 'Math' },
            { id: 'quantum-dock', label: 'Quantum AI 인터랙티브 독', icon: Sparkles, badge: 'AI' },
            { id: 'table', label: '모던 데이터 테이블', icon: Table, badge: 'Grid' },
            { id: 'chart', label: 'SVG 네온 차트 스튜디오', icon: BarChart2, badge: 'Neon' },
            { id: 'bento', label: '벤토 그리드 아키텍트', icon: LayoutGrid, badge: 'Bento' },
            { id: 'spotlight', label: '마우스 추적 스포트라이트', icon: MousePointer, badge: 'Mouse' },
            { id: 'aurora', label: '오로라 메쉬 & SVG 노이즈', icon: CloudRain, badge: 'Noise' },
            { id: 'skeleton', label: '스켈레톤 쉬머 생성기', icon: Zap, badge: 'UX' },
          ].map((tool) => {
            const Icon = tool.icon;
            const isSel = activeTool === tool.id;
            return (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id as StudioSubTool)}
                className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  isSel
                    ? 'bg-gradient-to-r from-cyan-600/90 to-indigo-600/90 text-white shadow-lg shadow-cyan-900/40 border border-cyan-400/40'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.07] border border-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSel ? 'text-cyan-200' : 'text-slate-400'}`} />
                <span>{tool.label}</span>
                <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSel ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-500'
                }`}>
                  {tool.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Studio Interactive Workspace */}
      <main className="flex-1 max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* ========================================================================= */}
        {/* 1. 글래스모피즘 & 스펙큘러 라이트 (Glassmorphism & Specular Studio)       */}
        {/* ========================================================================= */}
        {activeTool === 'glass' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Control Sidebar (4 Cols) */}
            <div className="lg:col-span-4 bg-slate-900/95 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-2xl">
              <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  글래스모피즘 & 스펙큘러 세부 설정
                </h3>
                <span className="text-[10px] font-mono text-cyan-400">Backdrop-Filter</span>
              </div>

              {/* Sliders */}
              <div className="space-y-4 text-xs font-mono">
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>블러 강도 (Blur)</span>
                    <span className="text-cyan-300 font-bold">{glassBlur}px</span>
                  </div>
                  <input
                    type="range" min="0" max="60" value={glassBlur}
                    onChange={(e) => setGlassBlur(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>배경 불투명도 (Opacity)</span>
                    <span className="text-cyan-300 font-bold">{glassOpacity}%</span>
                  </div>
                  <input
                    type="range" min="0" max="100" value={glassOpacity}
                    onChange={(e) => setGlassOpacity(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>채도 부스팅 (Saturation)</span>
                    <span className="text-cyan-300 font-bold">{glassSaturation}%</span>
                  </div>
                  <input
                    type="range" min="100" max="220" value={glassSaturation}
                    onChange={(e) => setGlassSaturation(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>보더 불투명도 (Border Opacity)</span>
                    <span className="text-cyan-300 font-bold">{glassBorderOpacity}%</span>
                  </div>
                  <input
                    type="range" min="0" max="100" value={glassBorderOpacity}
                    onChange={(e) => setGlassBorderOpacity(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>코너 둥글기 (Border Radius)</span>
                    <span className="text-cyan-300 font-bold">{glassRadius}px</span>
                  </div>
                  <input
                    type="range" min="0" max="48" value={glassRadius}
                    onChange={(e) => setGlassRadius(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                {/* Specular Top Edge Light Toggle */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-slate-200 font-bold font-sans">상단 단면 스펙큘러 조명</div>
                    <div className="text-[10px] text-slate-500 font-sans">inset 0 1px 0 빛 맺힘 효과</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={glassSpecularTop}
                    onChange={(e) => setGlassSpecularTop(e.target.checked)}
                    className="w-4 h-4 accent-cyan-500 rounded cursor-pointer"
                  />
                </div>

                {/* Tint Color Picker */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                  <span className="text-slate-300 font-sans">틴트 색상 (Tint Color)</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color" value={glassColor}
                      onChange={(e) => setGlassColor(e.target.value)}
                      className="w-7 h-7 rounded border border-slate-700 bg-transparent cursor-pointer"
                    />
                    <span className="font-mono text-[11px] text-cyan-300">{glassColor.toUpperCase()}</span>
                  </div>
                </div>
              </div>

              {/* Background Canvas Mode Selector */}
              <div className="pt-3 border-t border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-2 font-sans">프리뷰 캔버스 배경 모드:</span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'mesh', label: '🌌 오로라 메쉬' },
                    { id: 'dark', label: '⬛ 딥 다크' },
                    { id: 'light', label: '⬜ 클린 라이트' },
                  ].map((bg) => (
                    <button
                      key={bg.id}
                      onClick={() => setGlassCanvasBg(bg.id as any)}
                      className={`py-1.5 px-2 rounded-lg text-[10px] font-bold border transition-all ${
                        glassCanvasBg === bg.id
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {bg.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Preview Canvas & Code Output (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div 
                className={`relative w-full min-h-[460px] rounded-3xl p-8 flex items-center justify-center overflow-hidden border border-slate-800 transition-colors duration-500 ${
                  glassCanvasBg === 'mesh' ? 'bg-[#05070f]' : glassCanvasBg === 'dark' ? 'bg-slate-950' : 'bg-slate-200'
                }`}
              >
                {/* Background Aurora Blobs for Mesh Canvas */}
                {glassCanvasBg === 'mesh' && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-violet-600/40 blur-[80px] animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-cyan-500/35 blur-[90px] animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-fuchsia-600/30 blur-[70px]" />
                  </div>
                )}

                {/* Floating Glassmorphism Showcase Card */}
                <div
                  style={{
                    background: glassBgVal,
                    backdropFilter: glassFilterVal,
                    WebkitBackdropFilter: glassFilterVal,
                    border: glassBorderVal,
                    borderRadius: `${glassRadius}px`,
                    boxShadow: glassShadowVal,
                    color: glassCanvasBg === 'light' ? '#0f172a' : '#ffffff',
                  }}
                  className="relative z-10 w-full max-w-lg p-8 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center text-black font-bold">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">Next-Gen Specular Glass</div>
                        <div className="text-lg font-black tracking-tight">Crystalline Aero Card</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/10 border border-white/20">
                      {glassBlur}px BLUR
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed opacity-85 mb-6">
                    상단 1px 스펙큘러 라이팅(<code>inset 0 1px 0</code>)과 낮은 투명도(4~15%), 채도 160% 증폭을 결합하여 탁하지 않고 크리스탈처럼 투명하게 투과되는 상용급 글래스모피즘입니다.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                      <div className="text-[10px] opacity-60">REFRACTION</div>
                      <div className="text-sm font-bold text-cyan-300">1.52 (Crown Glass)</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                      <div className="text-[10px] opacity-60">SPECULAR TOP</div>
                      <div className="text-sm font-bold text-emerald-400">{glassSpecularTop ? 'ACTIVE' : 'OFF'}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                    <span className="font-mono text-[11px] opacity-70">CSS3 Backdrop Spec 2026</span>
                    <button className="px-4 py-2 rounded-xl bg-white text-slate-950 font-bold text-xs shadow-lg hover:bg-slate-100 active:scale-95 transition-all">
                      체험 컴포넌트 동작
                    </button>
                  </div>
                </div>
              </div>

              {/* Code Generation Panel */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 relative shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    Production-Ready CSS Output
                  </span>
                  <button
                    onClick={() => copyToClipboard(glassCssCode, 'glass-css')}
                    className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    {copiedKey === 'glass-css' ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                    <span>CSS 복사</span>
                  </button>
                </div>
                <pre className="font-mono text-xs text-slate-300 bg-slate-900/90 p-4 rounded-xl overflow-x-auto leading-relaxed border border-slate-800">
                  {glassCssCode}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. 다중 레이어 섀도우 (Multi-layer Elevation Shadows)                      */}
        {/* ========================================================================= */}
        {activeTool === 'shadow' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 bg-slate-900/95 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-2xl">
              <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Move className="w-4 h-4 text-indigo-400" />
                  다중 레이어 3D 엘리베이션 섀도우
                </h3>
                <span className="text-[10px] font-mono text-indigo-400">Progressive Depth</span>
              </div>

              {/* Presets */}
              <div className="space-y-1.5">
                <span className="text-[11px] text-slate-400 font-sans">원클릭 프리셋:</span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'soft', label: '소프트 내추럴' },
                    { id: 'elevation', label: '딥 엘리베이션' },
                    { id: 'neon', label: '사이버 네온 글로우' },
                    { id: 'apple', label: '애플 미니멀 뎁스' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => applyShadowPreset(p.id as any)}
                      className="py-1.5 px-2.5 rounded-lg text-xs font-bold bg-slate-950 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white transition-all text-left"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-4 text-xs font-mono pt-3 border-t border-slate-800">
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>그림자 분할 단수 (Layers)</span>
                    <span className="text-indigo-300 font-bold">{shLayers}단계</span>
                  </div>
                  <input
                    type="range" min="1" max="8" value={shLayers}
                    onChange={(e) => setShLayers(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Y축 수직 오프셋 (Y-Offset)</span>
                    <span className="text-indigo-300 font-bold">{shMaxY}px</span>
                  </div>
                  <input
                    type="range" min="0" max="100" value={shMaxY}
                    onChange={(e) => setShMaxY(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>블러 반경 (Blur Radius)</span>
                    <span className="text-indigo-300 font-bold">{shMaxBlur}px</span>
                  </div>
                  <input
                    type="range" min="0" max="140" value={shMaxBlur}
                    onChange={(e) => setShMaxBlur(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>그림자 투명도 (Alpha)</span>
                    <span className="text-indigo-300 font-bold">{shAlpha}%</span>
                  </div>
                  <input
                    type="range" min="0" max="100" value={shAlpha}
                    onChange={(e) => setShAlpha(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                  <span className="text-slate-300 font-sans">그림자 색상 (Shadow Color)</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color" value={shColor}
                      onChange={(e) => setShColor(e.target.value)}
                      className="w-7 h-7 rounded border border-slate-700 bg-transparent cursor-pointer"
                    />
                    <span className="font-mono text-[11px] text-indigo-300">{shColor.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Floating Preview & Code Output (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="relative w-full min-h-[460px] rounded-3xl bg-slate-950 p-8 flex items-center justify-center overflow-hidden border border-slate-800">
                <div 
                  style={{
                    backgroundColor: '#0f131f',
                    borderRadius: '24px',
                    boxShadow: shadowList.join(', '),
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="w-full max-w-md p-8 border border-white/10 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 font-bold mb-4">
                    <Move className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-black text-white mb-2">3D Layered Elevation Card</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    단일 뭉툭한 그림자 대신, 거듭제곱 분포(<code>i / layers ^ 1.8</code>)로 계산된 {shLayers}개의 세분화된 그림자 레이어가 자연스럽고 극적인 입체감을 형성합니다.
                  </p>
                  <div className="flex items-center justify-between text-xs font-mono pt-4 border-t border-white/10 text-slate-400">
                    <span>LAYERS: {shLayers}</span>
                    <span className="text-indigo-400 font-bold">HOVER ME</span>
                  </div>
                </div>
              </div>

              {/* Code Generation Panel */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 relative shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-indigo-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    Multi-layer Shadow CSS
                  </span>
                  <button
                    onClick={() => copyToClipboard(shadowCssCode, 'shadow-css')}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    {copiedKey === 'shadow-css' ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                    <span>CSS 복사</span>
                  </button>
                </div>
                <pre className="font-mono text-xs text-slate-300 bg-slate-900/90 p-4 rounded-xl overflow-x-auto leading-relaxed border border-slate-800 max-h-48">
                  {shadowCssCode}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. WCAG 명도대비 & APCA 검증 (WCAG Contrast & Theme Verifier)             */}
        {/* ========================================================================= */}
        {activeTool === 'contrast' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 bg-slate-900/95 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-2xl">
              <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Contrast className="w-4 h-4 text-emerald-400" />
                  WCAG 2.1 명도 대비 및 테마 검증
                </h3>
                <span className="text-[10px] font-mono text-emerald-400">sRGB Rel Luminance</span>
              </div>

              {/* Color Pickers */}
              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 block mb-1">배경색 (Background)</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color" value={conBg}
                      onChange={(e) => setConBg(e.target.value)}
                      className="w-10 h-10 rounded border border-slate-700 bg-transparent cursor-pointer"
                    />
                    <input
                      type="text" value={conBg}
                      onChange={(e) => setConBg(e.target.value)}
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white font-mono uppercase"
                    />
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block mb-1">텍스트/전경색 (Foreground Text)</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color" value={conFg}
                      onChange={(e) => setConFg(e.target.value)}
                      className="w-10 h-10 rounded border border-slate-700 bg-transparent cursor-pointer"
                    />
                    <input
                      type="text" value={conFg}
                      onChange={(e) => setConFg(e.target.value)}
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white font-mono uppercase"
                    />
                  </div>
                </div>

                <button
                  onClick={swapContrastColors}
                  className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>배경색과 텍스트 색상 스왑</span>
                </button>
              </div>

              {/* Ratio Score Card */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase">명도 대비율 (Contrast Ratio)</span>
                <div className={`text-3xl font-black font-mono ${
                  passAaNorm ? 'text-emerald-400' : Number(contrastRatio) >= 3.0 ? 'text-amber-400' : 'text-rose-400'
                }`}>
                  {contrastRatio} : 1
                </div>
                <p className="text-[11px] text-slate-400 font-sans">
                  {passAaNorm ? '✅ WCAG 2.1 AA 일반 텍스트 기준 통과' : '⚠️ 일반 텍스트 최소 대비 4.5:1 미달'}
                </p>
              </div>

              {/* Compliance Badges Matrix */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">AA Normal (4.5)</span>
                  <span className={`font-black ${passAaNorm ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {passAaNorm ? 'PASS' : 'FAIL'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">AAA Normal (7.0)</span>
                  <span className={`font-black ${passAaaNorm ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {passAaaNorm ? 'PASS' : 'FAIL'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">AA Large (3.0)</span>
                  <span className={`font-black ${passAaLg ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {passAaLg ? 'PASS' : 'FAIL'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">UI Controls (3.0)</span>
                  <span className={`font-black ${passUi ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {passUi ? 'PASS' : 'FAIL'}
                  </span>
                </div>
              </div>
            </div>

            {/* Readability Simulated Preview & Code (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div 
                style={{
                  backgroundColor: conBg,
                  color: conFg,
                  borderRadius: '24px',
                  border: `1px solid ${conFg}33`
                }}
                className="w-full min-h-[460px] p-8 flex flex-col justify-between transition-colors duration-300 shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-current opacity-70">
                    <div className="text-xs font-mono font-bold tracking-widest uppercase">
                      WCAG 2.1 & APCA Contrast Simulation
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold border border-current font-mono">
                      {contrastRatio}:1
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                    접근성과 미학의 완벽한 조화
                  </h2>

                  <p className="text-base leading-relaxed opacity-90 max-w-2xl mb-6">
                    모든 사용자가 편안하게 텍스트를 판독할 수 있도록 수학적인 sRGB 상대 휘도(Relative Luminance) 공식을 통해 정밀하게 검증된 컬러 대비 시스템입니다.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    <div className="p-4 rounded-xl border border-current bg-current/5">
                      <div className="text-xs font-bold mb-1">일반 본문 텍스트 (14px Regular)</div>
                      <p className="text-xs opacity-80 leading-normal">
                        작은 폰트 크기에서도 글자가 뭉개지지 않고 선명하게 가독성을 유지하는지 확인하세요.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-current bg-current/5">
                      <div className="text-xs font-bold mb-1">볼드 인포메이션 (14px Bold)</div>
                      <p className="text-xs font-bold leading-normal">
                        강조 문구와 수치가 배경 위에서 명확하게 시선을 끄는지 평가합니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-current opacity-75 text-xs font-mono">
                  <span>BACKGROUND: {conBg.toUpperCase()} | FOREGROUND: {conFg.toUpperCase()}</span>
                  <button 
                    style={{ backgroundColor: conFg, color: conBg }}
                    className="px-4 py-2 rounded-xl font-bold shadow-lg transition-transform active:scale-95"
                  >
                    대비 적용 버튼
                  </button>
                </div>
              </div>

              {/* Code Generation Panel */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 relative shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    Accessible CSS Variables
                  </span>
                  <button
                    onClick={() => copyToClipboard(contrastCssCode, 'contrast-css')}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    {copiedKey === 'contrast-css' ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                    <span>CSS 복사</span>
                  </button>
                </div>
                <pre className="font-mono text-xs text-slate-300 bg-slate-900/90 p-4 rounded-xl overflow-x-auto leading-relaxed border border-slate-800">
                  {contrastCssCode}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. 반응형 Fluid Typography 계산기 (Fluid Clamp Calculator)                */}
        {/* ========================================================================= */}
        {activeTool === 'clamp' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 bg-slate-900/95 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-2xl">
              <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Type className="w-4 h-4 text-amber-400" />
                  반응형 Fluid Typography 계산기
                </h3>
                <span className="text-[10px] font-mono text-amber-400">CSS clamp()</span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-slate-400 block mb-1">최소 뷰포트 (Min Vp)</span>
                    <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2">
                      <input
                        type="number" value={clampMinVp}
                        onChange={(e) => setClampMinVp(Number(e.target.value))}
                        className="w-full bg-transparent text-white font-bold"
                      />
                      <span className="text-slate-500">px</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-1">최대 뷰포트 (Max Vp)</span>
                    <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2">
                      <input
                        type="number" value={clampMaxVp}
                        onChange={(e) => setClampMaxVp(Number(e.target.value))}
                        className="w-full bg-transparent text-white font-bold"
                      />
                      <span className="text-slate-500">px</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-slate-400 block mb-1">최소 폰트 (Min Size)</span>
                    <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2">
                      <input
                        type="number" value={clampMinF}
                        onChange={(e) => setClampMinF(Number(e.target.value))}
                        className="w-full bg-transparent text-white font-bold"
                      />
                      <span className="text-slate-500">px</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-1">최대 폰트 (Max Size)</span>
                    <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2">
                      <input
                        type="number" value={clampMaxF}
                        onChange={(e) => setClampMaxF(Number(e.target.value))}
                        className="w-full bg-transparent text-white font-bold"
                      />
                      <span className="text-slate-500">px</span>
                    </div>
                  </div>
                </div>

                {/* Viewport Simulation Slider */}
                <div className="pt-3 border-t border-slate-800">
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>가상 뷰포트 너비 조절</span>
                    <span className="text-amber-400 font-bold">{clampSimVp}px</span>
                  </div>
                  <input
                    type="range" min="320" max="1920" value={clampSimVp}
                    onChange={(e) => setClampSimVp(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>Mobile (320px)</span>
                    <span>Tablet (768px)</span>
                    <span>4K PC (1920px)</span>
                  </div>
                </div>
              </div>

              {/* Result Summary Pill */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-1">
                <div className="text-slate-400 text-[10px]">현재 가상 뷰포트({clampSimVp}px)에서의 계산 폰트:</div>
                <div className="text-xl font-black text-amber-300">
                  {liveCalculatedPx}px <span className="text-xs font-normal text-slate-400">({liveCalculatedRem}rem)</span>
                </div>
              </div>
            </div>

            {/* Typography Live Scaling Showcase (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="relative w-full min-h-[460px] rounded-3xl bg-slate-950 p-8 flex flex-col justify-center border border-slate-800 overflow-hidden shadow-2xl">
                <div className="space-y-4 max-w-3xl">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-950/60 border border-amber-800/80 px-2.5 py-1 rounded-full">
                    Live Fluid Scaling • {clampSimVp}px Viewport
                  </span>
                  
                  <h1 
                    style={{ fontSize: `${liveCalculatedPx}px`, lineHeight: 1.15 }}
                    className="font-black text-white tracking-tight transition-all duration-150"
                  >
                    화면 크기에 맞춰 유려하게 반응하는 타이포그래피
                  </h1>

                  <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
                    미디어 쿼리(Breakpoints)를 단계별로 일일이 작성하지 않아도, 화면 너비에 따라 1px 단위로 부드럽게 선형 보간되는 차세대 CSS 수식입니다.
                  </p>
                </div>
              </div>

              {/* Code Generation Panel */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 relative shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-amber-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    Fluid Typography CSS
                  </span>
                  <button
                    onClick={() => copyToClipboard(clampCssCode, 'clamp-css')}
                    className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    {copiedKey === 'clamp-css' ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                    <span>CSS 복사</span>
                  </button>
                </div>
                <pre className="font-mono text-xs text-slate-300 bg-slate-900/90 p-4 rounded-xl overflow-x-auto leading-relaxed border border-slate-800">
                  {clampCssCode}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 5. Quantum AI 인터랙티브 독 & 버튼 시스템                              */}
        {/* ========================================================================= */}
        {activeTool === 'quantum-dock' && (
          <div className="space-y-8">
            {/* 1. Floating Glass Navbar Preview */}
            <div className="w-full flex justify-center">
              <nav className="inline-flex items-center gap-6 px-6 py-2.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2 text-white font-extrabold text-sm tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#D4FF00] shadow-[0_0_10px_#D4FF00]" />
                  STUDIO.AI
                </div>
                <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-slate-300">
                  <span className="text-white font-bold cursor-pointer hover:text-[#D4FF00] transition-colors">Generate</span>
                  <span className="cursor-pointer hover:text-white transition-colors">Camera Motion</span>
                  <span className="cursor-pointer hover:text-white transition-colors">Templates</span>
                  <span className="cursor-pointer hover:text-white transition-colors">Pricing</span>
                </div>
                <button className="px-4 py-1.5 rounded-full bg-[#D4FF00] text-black font-extrabold text-xs shadow-[0_0_20px_rgba(212,255,0,0.35)] hover:scale-105 active:scale-95 transition-all">
                  Pro Upgrade
                </button>
              </nav>
            </div>

            {/* 2. AI Prompt Composer Dock */}
            <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950/80 border border-white/10 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl space-y-4 focus-within:border-[#D4FF00]/60 focus-within:shadow-[0_0_40px_rgba(212,255,0,0.15)] transition-all">
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 flex items-center justify-between">
                <span>01. AI Prompt Composer Dock (Focus inside to see neon glow)</span>
                <span className="text-[#D4FF00]">2026 Engine Ready</span>
              </div>
              
              <textarea
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                rows={3}
                placeholder="Describe your cinematic shot... e.g., A cyberpunk samurai walking through neon-lit rain in Tokyo, anamorphic lens, 24fps"
                className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none resize-none leading-relaxed font-sans"
              />

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-2">
                  <button 
                    onClick={() => setActiveCamPreset(activeCamPreset === 'Dynamic Crane' ? 'Orbit 360' : 'Dynamic Crane')}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-slate-300 transition-all flex items-center gap-1.5"
                  >
                    <span>🎥 Camera: {activeCamPreset}</span>
                  </button>
                  <button 
                    onClick={() => setActiveRatio(activeRatio === '16:9 Widescreen' ? '2.35:1 Anamorphic' : '16:9 Widescreen')}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-slate-300 transition-all flex items-center gap-1.5"
                  >
                    <span>📐 Ratio: {activeRatio}</span>
                  </button>
                  <button className="px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-slate-300 transition-all">
                    + Reference Image
                  </button>
                </div>

                <button className="px-5 py-2.5 rounded-2xl bg-[#D4FF00] hover:bg-[#E2FF4D] text-black font-black text-xs shadow-[0_0_25px_rgba(212,255,0,0.4)] flex items-center gap-2 active:scale-95 transition-all">
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Video</span>
                </button>
              </div>
            </div>

            {/* 3. Button Suite & Micro Controls Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Button Systems */}
              <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
                <div className="text-xs font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                  <Zap className="w-4 h-4 text-[#D4FF00]" />
                  <span>02. Next-Gen Button Variations</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white text-xs font-bold backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition-all">
                    Crisp Glass Button
                  </button>
                  <button className="px-4 py-2 rounded-xl bg-[#D4FF00] hover:bg-[#E2FF4D] text-black text-xs font-black shadow-[0_0_18px_rgba(212,255,0,0.35)] transition-all">
                    Quantum Lime CTA
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 rounded-xl bg-slate-950 text-white text-xs font-bold border border-transparent shadow-lg relative transition-all before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-r before:from-[#F5A623] before:to-pink-500 before:-z-10">
                    Artlist Gradient Border
                  </button>
                  <button className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-black text-xs font-black shadow-lg transition-all">
                    Pure White Action
                  </button>
                </div>
              </div>

              {/* Studio Parameters & Controls */}
              <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
                <div className="text-xs font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  <span>03. Studio Parameters & Micro Controls</span>
                </div>
                
                {/* Segmented Control */}
                <div className="flex p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold">
                  {(['text', 'image', 'brush'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveSegmentMode(m)}
                      className={`flex-1 py-1.5 rounded-lg transition-all ${
                        activeSegmentMode === m ? 'bg-white/15 text-white shadow' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {m === 'text' ? 'Text to Video' : m === 'image' ? 'Image to Video' : 'Motion Brush'}
                    </button>
                  ))}
                </div>

                {/* Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>Camera Motion Intensity</span>
                    <span className="text-[#D4FF00] font-bold">{motionIntensity}%</span>
                  </div>
                  <input
                    type="range" min="0" max="100" value={motionIntensity}
                    onChange={(e) => setMotionIntensity(Number(e.target.value))}
                    className="w-full accent-[#D4FF00] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* 4. Specular Top-Edge Lighting Bento Cards */}
            <div className="max-w-4xl mx-auto space-y-3">
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <MousePointer className="w-4 h-4 text-violet-400" />
                <span>04. Interactive Spotlight Glass Cards (마우스 커서 호버 시 광원 추적)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  ref={card1Ref}
                  onMouseMove={(e) => handleCardMouseMove(e, card1Ref)}
                  className="relative p-6 rounded-3xl bg-white/[0.045] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-2xl transition-all group"
                  style={{
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22), 0 12px 36px rgba(0,0,0,0.5)'
                  }}
                >
                  <div 
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(280px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(212, 255, 0, 0.18), transparent 80%)'
                    }}
                  />
                  <div className="relative z-10 space-y-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#D4FF00]/15 text-[#D4FF00] font-black border border-[#D4FF00]/30">
                      QUANTUM AI ENGINE
                    </span>
                    <h3 className="text-base font-black text-white">Specular Top-Edge Lighting</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      뿌연 블러 대신 <code>inset 0 1px 0 rgba(255,255,255,0.22)</code> 속성을 사용하여 유리 상단 단면에만 빛이 맺히도록 설계된 2026 하이엔드 글래스 기법입니다.
                    </p>
                  </div>
                </div>

                <div
                  ref={card2Ref}
                  onMouseMove={(e) => handleCardMouseMove(e, card2Ref)}
                  className="relative p-6 rounded-3xl bg-white/[0.045] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-2xl transition-all group"
                  style={{
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22), 0 12px 36px rgba(0,0,0,0.5)'
                  }}
                >
                  <div 
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(280px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(245, 166, 35, 0.18), transparent 80%)'
                    }}
                  />
                  <div className="relative z-10 space-y-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#F5A623]/15 text-[#F5A623] font-black border border-[#F5A623]/30">
                      ARTLIST CINEMA
                    </span>
                    <h3 className="text-base font-black text-white">Ultra-Low Opacity Surface</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      배경 불투명도를 4.5%로 낮추고 채도를 160%로 높여, 뒷배경의 빛이 탁해지지 않고 크리스탈처럼 투명하게 투과되는 극상의 시각적 깊이를 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 6. 모던 데이터 테이블 (Modern Data Table Customizer & Studio)             */}
        {/* ========================================================================= */}
        {activeTool === 'table' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 bg-slate-900/95 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-2xl">
              <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Table className="w-4 h-4 text-indigo-400" />
                  Data Table 커스터마이징
                </h3>
                <span className="text-[10px] font-mono text-indigo-400">Ledger Suite</span>
              </div>

              {/* Accent Color */}
              <div className="space-y-1.5">
                <span className="text-[11px] text-slate-400">포인트 액센트 컬러:</span>
                <div className="flex gap-2">
                  {(['indigo', 'emerald', 'rose', 'cyan', 'amber'] as const).map((col) => (
                    <button
                      key={col}
                      onClick={() => setTblAccent(col)}
                      className={`w-7 h-7 rounded-full transition-transform ${
                        tblAccent === col ? 'scale-125 ring-2 ring-white' : 'opacity-70 hover:opacity-100'
                      }`}
                      style={{
                        backgroundColor: col === 'indigo' ? '#6366f1' : col === 'emerald' ? '#10b981' : col === 'rose' ? '#f43f5e' : col === 'cyan' ? '#06b6d4' : '#f59e0b'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div className="space-y-3 pt-3 border-t border-slate-800 text-xs font-sans">
                <label className="flex items-center justify-between cursor-pointer">
                  <span>얼룩말 줄무늬 (Zebra Striping)</span>
                  <input type="checkbox" checked={tblZebra} onChange={(e) => setTblZebra(e.target.checked)} className="w-4 h-4 accent-indigo-500 rounded" />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span>마우스 호버 스포트라이트</span>
                  <input type="checkbox" checked={tblHoverSpot} onChange={(e) => setTblHoverSpot(e.target.checked)} className="w-4 h-4 accent-indigo-500 rounded" />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span>상태 뱃지 (Status Badge)</span>
                  <input type="checkbox" checked={tblShowBadge} onChange={(e) => setTblShowBadge(e.target.checked)} className="w-4 h-4 accent-indigo-500 rounded" />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span>점유율 프로그레스 바 (Node Load)</span>
                  <input type="checkbox" checked={tblShowProg} onChange={(e) => setTblShowProg(e.target.checked)} className="w-4 h-4 accent-indigo-500 rounded" />
                </label>
              </div>

              {/* Density */}
              <div className="pt-3 border-t border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-2">행 간격 밀도 (Density):</span>
                <div className="grid grid-cols-3 gap-2 text-xs font-bold">
                  {[
                    { id: 'py-2', label: '컴팩트' },
                    { id: 'py-3.5', label: '노멀' },
                    { id: 'py-5', label: '여유로움' },
                  ].map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setTblDensity(d.id as any)}
                      className={`py-1.5 rounded-lg border transition-all ${
                        tblDensity === d.id ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Table Live Preview (8 Cols) */}
            <div className="lg:col-span-8 bg-slate-950/80 border border-slate-800 rounded-3xl p-6 shadow-2xl overflow-hidden space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-base font-bold text-white">Cloud Resource & Billing Ledger</h3>
                  <p className="text-xs text-slate-400">실시간 워크스페이스 노드 점유율 및 정산 현황</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5" />
                    <span>CSV 내보내기</span>
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse font-sans text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/60 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      <th className="px-5 py-3">Invoice</th>
                      <th className="px-5 py-3">Owner</th>
                      <th className="px-5 py-3">Status</th>
                      {tblShowProg && <th className="px-5 py-3">Node Load</th>}
                      <th className="px-5 py-3 text-right">Volume</th>
                      <th className="px-5 py-3 text-right">Delta</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableSampleRows.map((r, i) => (
                      <tr 
                        key={r.id}
                        className={`border-b border-slate-800/60 transition-colors ${
                          tblZebra && i % 2 === 1 ? 'bg-slate-900/30' : ''
                        } ${tblHoverSpot ? 'hover:bg-indigo-500/10' : ''}`}
                      >
                        <td className={`px-5 ${tblDensity} font-mono text-slate-400`}>{r.id}</td>
                        <td className={`px-5 ${tblDensity}`}>
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center font-bold text-indigo-300 text-xs">
                              {r.name[0]}
                            </div>
                            <div>
                              <div className="font-semibold text-white">{r.name}</div>
                              <div className="text-[10px] text-slate-400">{r.role}</div>
                            </div>
                          </div>
                        </td>
                        <td className={`px-5 ${tblDensity}`}>
                          {tblShowBadge && (
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                              r.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                              r.status === 'Pending' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                              'bg-rose-500/10 text-rose-400 border-rose-500/20'
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${r.status === 'Active' ? 'bg-emerald-400 animate-pulse' : r.status === 'Pending' ? 'bg-amber-400' : 'bg-rose-400'}`} />
                              {r.status}
                            </span>
                          )}
                        </td>
                        {tblShowProg && (
                          <td className={`px-5 ${tblDensity}`}>
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${r.usage}%` }} />
                              </div>
                              <span className="font-mono text-[10px] text-slate-400">{r.usage}%</span>
                            </div>
                          </td>
                        )}
                        <td className={`px-5 ${tblDensity} text-right font-mono font-bold text-white`}>{r.amount}</td>
                        <td className={`px-5 ${tblDensity} text-right font-mono text-[11px] font-bold ${
                          r.trend.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'
                        }`}>
                          {r.trend}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 7. SVG 네온 차트 스튜디오 (Neon SVG Chart Studio)                          */}
        {/* ========================================================================= */}
        {activeTool === 'chart' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 bg-slate-900/95 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-2xl">
              <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-cyan-400" />
                  SVG 네온 차트 스튜디오
                </h3>
                <span className="text-[10px] font-mono text-cyan-400">Pure SVG + Filter</span>
              </div>

              {/* Chart Type Toggle */}
              <div>
                <span className="text-[11px] text-slate-400 block mb-2 font-sans">차트 형태:</span>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                  <button
                    onClick={() => setChartType('area')}
                    className={`py-2 rounded-lg border transition-all ${
                      chartType === 'area' ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Smooth Area (곡선)
                  </button>
                  <button
                    onClick={() => setChartType('bar')}
                    className={`py-2 rounded-lg border transition-all ${
                      chartType === 'bar' ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Neon Bar (막대)
                  </button>
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-4 text-xs font-mono pt-3 border-t border-slate-800">
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>라인 두께 (Stroke Width)</span>
                    <span className="text-cyan-300 font-bold">{chartStroke}px</span>
                  </div>
                  <input
                    type="range" min="1" max="6" value={chartStroke}
                    onChange={(e) => setChartStroke(Number(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>글로우 반경 (Glow Radius)</span>
                    <span className="text-cyan-300 font-bold">{chartGlow}px</span>
                  </div>
                  <input
                    type="range" min="0" max="20" value={chartGlow}
                    onChange={(e) => setChartGlow(Number(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                  <span className="text-slate-300 font-sans">네온 색상 (Neon Hue)</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color" value={chartColor}
                      onChange={(e) => setChartColor(e.target.value)}
                      className="w-7 h-7 rounded border border-slate-700 bg-transparent cursor-pointer"
                    />
                    <span className="font-mono text-[11px] text-cyan-300">{chartColor.toUpperCase()}</span>
                  </div>
                </div>

                <button
                  onClick={randomizeChartData}
                  className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>데이터 랜덤 갱신</span>
                </button>
              </div>
            </div>

            {/* Neon Chart Canvas (8 Cols) */}
            <div className="lg:col-span-8 bg-slate-950/90 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Real-time Throughput</span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <h3 className="text-3xl font-extrabold text-white font-mono">
                      134.8K <span className="text-xs font-normal text-slate-400">req/sec</span>
                    </h3>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      +24.8% vs last wk
                    </span>
                  </div>
                </div>
                <div className="flex gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-bold">
                  <span className="px-3 py-1 rounded-lg bg-slate-800 text-white shadow">24H</span>
                  <span className="px-3 py-1 text-slate-400 hover:text-white cursor-pointer">7D</span>
                  <span className="px-3 py-1 text-slate-400 hover:text-white cursor-pointer">30D</span>
                </div>
              </div>

              {/* Pure SVG Neon Canvas */}
              <div className="relative w-full">
                <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-auto overflow-visible">
                  <defs>
                    <linearGradient id="neonAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={chartColor} stopOpacity="0.45" />
                      <stop offset="100%" stopColor={chartColor} stopOpacity="0.0" />
                    </linearGradient>
                    <filter id="neonFilterGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation={chartGlow} result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Grid Lines */}
                  {chartShowGrid && [0.25, 0.5, 0.75].map((ratio, idx) => {
                    const y = Math.round(chartHeight * ratio);
                    return (
                      <line 
                        key={idx}
                        x1={chartPad} y1={y} x2={chartWidth - chartPad} y2={y}
                        stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1"
                      />
                    );
                  })}

                  {/* Area vs Bar */}
                  {chartType === 'area' ? (
                    <>
                      <path d={chartAreaPath.areaD} fill="url(#neonAreaGrad)" />
                      <path 
                        d={chartAreaPath.lineD} 
                        fill="none" 
                        stroke={chartColor} 
                        strokeWidth={chartStroke} 
                        filter="url(#neonFilterGlow)" 
                        strokeLinecap="round" 
                      />
                      {chartShowDots && svgCalculatedPoints.map((pt, idx) => (
                        <circle
                          key={idx}
                          cx={pt.x} cy={pt.y} r={hoveredPoint?.x === pt.x ? 7 : 4}
                          fill="#090d16"
                          stroke={chartColor}
                          strokeWidth="2.5"
                          className="cursor-pointer transition-all duration-200"
                          onMouseEnter={() => setHoveredPoint(pt)}
                          onMouseLeave={() => setHoveredPoint(null)}
                        />
                      ))}
                    </>
                  ) : (
                    svgCalculatedPoints.map((pt, idx) => {
                      const barW = 28;
                      const bHeight = (chartHeight - chartPad) - pt.y;
                      return (
                        <rect
                          key={idx}
                          x={pt.x - barW / 2} y={pt.y}
                          width={barW} height={bHeight}
                          rx="6"
                          fill="url(#neonAreaGrad)"
                          stroke={chartColor}
                          strokeWidth="1.5"
                          filter="url(#neonFilterGlow)"
                          className="cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      );
                    })
                  )}
                </svg>

                {/* Floating Tooltip */}
                {hoveredPoint && (
                  <div
                    style={{
                      left: `${(hoveredPoint.x / chartWidth) * 100}%`,
                      top: `${(hoveredPoint.y / chartHeight) * 100}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-12 bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg shadow-xl text-xs font-mono text-cyan-300 pointer-events-none z-20 whitespace-nowrap animate-scale-up"
                  >
                    {hoveredPoint.val}k req/s
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 8. 벤토 그리드 아키텍트 (Bento Grid Architect)                            */}
        {/* ========================================================================= */}
        {activeTool === 'bento' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center gap-3">
                <LayoutGrid className="w-5 h-5 text-indigo-400" />
                <div>
                  <h3 className="text-sm font-bold text-white">벤토 그리드 아키텍트</h3>
                  <p className="text-xs text-slate-400">Apple Silicon / SaaS 벤토 레이아웃 생성기</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400">레이아웃 프리셋:</span>
                {(['apple', 'saas', 'enterprise'] as const).map((pr) => (
                  <button
                    key={pr}
                    onClick={() => setBentoPreset(pr)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      bentoPreset === pr ? 'bg-indigo-600 text-white shadow' : 'bg-slate-950 text-slate-400 border border-slate-800'
                    }`}
                  >
                    {pr.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div 
              style={{ gap: `${bentoGap}px` }}
              className="grid grid-cols-1 md:grid-cols-3 auto-rows-[180px] w-full"
            >
              {[
                { span: 'md:col-span-2 md:row-span-2', title: 'Neural Engine Core', sub: '초당 38조 회 연산 처리 아키텍처', icon: Cpu, accent: 'from-indigo-500/20 to-purple-500/5' },
                { span: 'md:col-span-1', title: 'Zero Latency', sub: '0.4ms 글로벌 엣지 응답', icon: Zap, accent: 'from-emerald-500/20 to-teal-500/5' },
                { span: 'md:col-span-1', title: 'End-to-End 암호화', sub: '양자 내성 보안 프로토콜', icon: Shield, accent: 'from-cyan-500/20 to-blue-500/5' },
                { span: 'md:col-span-3', title: 'Unified Workspace Pipeline', sub: '코드 배포부터 실시간 로그 분석까지 단일 벤토 대시보드에서 제어하세요.', icon: Layers, accent: 'from-pink-500/15 to-indigo-500/5' }
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    style={{ borderRadius: `${bentoRad}px` }}
                    className={`${card.span} group relative overflow-hidden bg-gradient-to-br ${card.accent} bg-slate-950/80 border border-slate-800 hover:border-indigo-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">{card.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{card.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 9. 마우스 추적 스포트라이트 (Mouse Tracking Spotlight)                     */}
        {/* ========================================================================= */}
        {activeTool === 'spotlight' && (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <MousePointer className="w-5 h-5 text-indigo-400" />
                <div>
                  <h3 className="text-sm font-bold text-white">마우스 추적 스포트라이트</h3>
                  <p className="text-xs text-slate-400">카드 위에서 마우스 위치를 감지하여 듀얼 스펙큘러 광원 형성</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">광원 반경:</span>
                  <input
                    type="range" min="150" max="450" value={spotSize}
                    onChange={(e) => setSpotSize(Number(e.target.value))}
                    className="w-24 accent-indigo-500 cursor-pointer"
                  />
                  <span className="text-indigo-400 font-bold">{spotSize}px</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Edge Compute Workers', desc: '전 세계 리전에서 0ms 콜드 스타트로 실행되는 서버리스 함수', icon: Zap },
                { title: 'Vector Database Sync', desc: '임베딩 인덱싱과 하이브리드 시맨틱 검색을 단일 API로 처리', icon: Cpu },
                { title: 'Automated Deal Bot', desc: '실시간 파트너스 핫딜 수집 및 멀티 채널 자동 발행 파이프라인', icon: Radio },
                { title: 'Zero-Trust Access', desc: '모든 엔드포인트 요청에 대해 하드웨어 키 기반 서명 검증 수행', icon: Shield }
              ].map((item, idx) => (
                <div
                  key={idx}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                  }}
                  className="relative rounded-3xl bg-slate-950 border border-slate-800 p-8 overflow-hidden group cursor-pointer transition-colors shadow-2xl"
                >
                  <div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(${spotSize}px circle at var(--x, 0px) var(--y, 0px), rgba(99, 102, 241, 0.25), transparent 80%)`
                    }}
                  />
                  <div className="relative z-10 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 10. 오로라 메쉬 & SVG 노이즈 (Aurora Mesh & Noise Generator)               */}
        {/* ========================================================================= */}
        {activeTool === 'aurora' && (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CloudRain className="w-5 h-5 text-fuchsia-400" />
                <div>
                  <h3 className="text-sm font-bold text-white">오로라 메쉬 & SVG 프랙탈 노이즈 생성기</h3>
                  <p className="text-xs text-slate-400">유체 블롭 애니메이션 + feTurbulence 노이즈 결합</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-slate-400">블러 강도:</span>
                <input
                  type="range" min="20" max="100" value={aurBlur}
                  onChange={(e) => setAurBlur(Number(e.target.value))}
                  className="w-24 accent-fuchsia-500 cursor-pointer"
                />
                <span className="text-fuchsia-400 font-bold">{aurBlur}px</span>
              </div>
            </div>

            <div className="relative w-full h-[460px] rounded-3xl bg-slate-950 overflow-hidden flex items-center justify-center border border-slate-800 shadow-2xl">
              {/* Aurora Blob Layer */}
              <div className="absolute inset-0 overflow-hidden" style={{ filter: `blur(${aurBlur}px)` }}>
                <div className="w-72 h-72 rounded-full absolute -top-10 -left-10 animate-blob opacity-70" style={{ background: aurColor1 }} />
                <div className="w-80 h-80 rounded-full absolute top-20 right-10 animate-blob opacity-70" style={{ background: aurColor2 }} />
                <div className="w-72 h-72 rounded-full absolute -bottom-16 left-1/3 animate-blob opacity-70" style={{ background: aurColor3 }} />
              </div>

              {/* Hero Content */}
              <div className="relative z-10 text-center px-6 max-w-lg space-y-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 border border-white/20 text-white backdrop-blur-md">
                  Aurora Mesh + Grain Texture 2026
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Design Beyond Boundaries
                </h3>
                <p className="text-xs text-slate-200/80 leading-relaxed">
                  다중 컬러 블롭 애니메이션과 프랙탈 노이즈 질감을 결합하여 Stripe 및 Linear 스타일의 입체적인 히어로 배경을 구현합니다.
                </p>
                <button className="px-5 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs shadow-lg hover:bg-slate-100 transition-all">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 11. 스켈레톤 쉬머 생성기 (Skeleton Shimmer Generator)                      */}
        {/* ========================================================================= */}
        {activeTool === 'skeleton' && (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-indigo-400" />
                <div>
                  <h3 className="text-sm font-bold text-white">스켈레톤 쉬머 생성기</h3>
                  <p className="text-xs text-slate-400">사용자 경험(UX) 최적화용 반응형 로더 제너레이터</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">쉬머 속도:</span>
                  <input
                    type="range" min="0.8" max="3.5" step="0.1" value={skelSpeed}
                    onChange={(e) => setSkelSpeed(Number(e.target.value))}
                    className="w-24 accent-indigo-500 cursor-pointer"
                  />
                  <span className="text-indigo-400 font-bold">{skelSpeed}s</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div 
                style={{ '--shimmer-speed': `${skelSpeed}s` } as any}
                className="w-full max-w-md bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-5 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800/90 shimmer-effect" />
                  <div className="space-y-2 flex-1">
                    <div className="h-3.5 w-1/2 bg-slate-800/90 rounded-md shimmer-effect" />
                    <div className="h-2.5 w-1/3 bg-slate-800/60 rounded-md shimmer-effect" />
                  </div>
                </div>
                <div className="h-44 w-full rounded-2xl bg-slate-800/80 shimmer-effect" />
                <div className="space-y-2">
                  <div className="h-3 w-full bg-slate-800/90 rounded shimmer-effect" />
                  <div className="h-3 w-5/6 bg-slate-800/90 rounded shimmer-effect" />
                  <div className="h-3 w-2/3 bg-slate-800/60 rounded shimmer-effect" />
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

    </div>
  );
};
