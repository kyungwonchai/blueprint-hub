import React, { useState, useMemo } from 'react';
import { 
  X, Sparkles, Copy, CheckCircle2, Sliders, Palette, 
  Layers, Sun, Shield, Terminal, ArrowRight, Eye 
} from 'lucide-react';

interface GlassTokenBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlassTokenBuilderModal: React.FC<GlassTokenBuilderModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [blur, setBlur] = useState<number>(16);
  const [surfaceAlpha, setSurfaceAlpha] = useState<number>(0.8);
  const [borderAlpha, setBorderAlpha] = useState<number>(0.15);
  const [glowColor, setGlowColor] = useState<string>('#06b6d4');
  const [glowSpread, setGlowSpread] = useState<number>(24);
  const [glowAlpha, setGlowAlpha] = useState<number>(0.35);
  const [borderRadius, setBorderRadius] = useState<number>(20);

  const [copiedTailwind, setCopiedTailwind] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

  // Preset Palettes
  const presets = [
    { name: 'Electric Cyan (일렉트릭 사이언)', color: '#06b6d4', blur: 16, glow: 25, alpha: 0.35, surface: 0.8 },
    { name: 'Cyber Violet (네온 바이올렛)', color: '#8b5cf6', blur: 20, glow: 30, alpha: 0.4, surface: 0.85 },
    { name: 'Artlist Gold (옵시디언 옐로우)', color: '#ffea00', blur: 18, glow: 28, alpha: 0.45, surface: 0.9 },
    { name: 'Neon Emerald (매트릭스 에메랄드)', color: '#10b981', blur: 16, glow: 22, alpha: 0.35, surface: 0.8 },
    { name: 'Crimson Flame (사이버 옵시디언 레드)', color: '#f43f5e', blur: 20, glow: 32, alpha: 0.45, surface: 0.85 },
  ];

  const applyPreset = (p: typeof presets[0]) => {
    setGlowColor(p.color);
    setBlur(p.blur);
    setGlowSpread(p.glow);
    setGlowAlpha(p.alpha);
    setSurfaceAlpha(p.surface);
  };

  // Convert hex to rgba
  const hexToRgba = (hex: string, alpha: number) => {
    const c = hex.replace('#', '');
    const r = parseInt(c.substring(0, 2), 16) || 0;
    const g = parseInt(c.substring(2, 4), 16) || 0;
    const b = parseInt(c.substring(4, 6), 16) || 0;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const previewCardStyle: React.CSSProperties = {
    backgroundColor: `rgba(13, 15, 24, ${surfaceAlpha})`,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    borderColor: hexToRgba(glowColor, borderAlpha),
    borderRadius: `${borderRadius}px`,
    boxShadow: `0 0 ${glowSpread}px ${hexToRgba(glowColor, glowAlpha)}, 0 10px 30px rgba(0, 0, 0, 0.6)`,
  };

  // Tailwind class representation
  const tailwindClasses = useMemo(() => {
    const blurClass = blur >= 24 ? 'backdrop-blur-2xl' : blur >= 16 ? 'backdrop-blur-xl' : blur >= 8 ? 'backdrop-blur-md' : 'backdrop-blur-sm';
    const roundedClass = borderRadius >= 24 ? 'rounded-3xl' : borderRadius >= 16 ? 'rounded-2xl' : 'rounded-xl';
    return `bg-[#0d0f18]/[${Math.round(surfaceAlpha * 100)}%] ${blurClass} border border-[${glowColor}]/[${Math.round(borderAlpha * 100)}%] ${roundedClass} shadow-[0_0_${glowSpread}px_${hexToRgba(glowColor, glowAlpha)}]`;
  }, [blur, surfaceAlpha, borderAlpha, glowColor, glowSpread, glowAlpha, borderRadius]);

  // Pure CSS representation
  const pureCssString = useMemo(() => {
    return `.neon-glass-surface {
  background-color: rgba(13, 15, 24, ${surfaceAlpha});
  backdrop-filter: blur(${blur}px);
  -webkit-backdrop-filter: blur(${blur}px);
  border: 1px solid ${hexToRgba(glowColor, borderAlpha)};
  border-radius: ${borderRadius}px;
  box-shadow: 0 0 ${glowSpread}px ${hexToRgba(glowColor, glowAlpha)}, 0 10px 30px rgba(0, 0, 0, 0.6);
}`;
  }, [surfaceAlpha, blur, glowColor, borderAlpha, borderRadius, glowSpread, glowAlpha]);

  if (!isOpen) return null;

  const handleCopyTailwind = () => {
    navigator.clipboard.writeText(tailwindClasses);
    setCopiedTailwind(true);
    setTimeout(() => setCopiedTailwind(false), 2000);
  };

  const handleCopyCss = () => {
    navigator.clipboard.writeText(pureCssString);
    setCopiedCss(true);
    setTimeout(() => setCopiedCss(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-[#090a10] border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden text-slate-100">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg transition-transform hover:scale-105"
              style={{ backgroundColor: glowColor, boxShadow: `0 0 18px ${glowColor}80` }}
            >
              <Sliders className="w-5 h-5 text-black font-black" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <span>Glassmorphism & Neon Design Token Builder</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono">
                  LIVE STUDIO
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                딥 다크 글래스모피즘 표면 투명도, 블러 반경, 네온 헤일로(Halo) 발광을 실시간 조절하여 토큰 추출
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Split */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Controls (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Quick Presets */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Palette className="w-4 h-4 text-cyan-400" />
                <span>2026 대표 네온 테마 프리셋</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {presets.map(p => (
                  <button
                    key={p.name}
                    onClick={() => applyPreset(p)}
                    className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-left flex items-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: p.color, boxShadow: `0 0 8px ${p.color}` }} />
                    <span className="text-[11px] font-bold text-slate-200 truncate">{p.name.split('(')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-4">
              {/* Blur */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">Backdrop Blur (블러 반경)</span>
                  <span className="font-mono text-cyan-400 font-bold">{blur}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={blur}
                  onChange={e => setBlur(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Surface Alpha */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">Surface Opacity (표면 불투명도)</span>
                  <span className="font-mono text-cyan-400 font-bold">{Math.round(surfaceAlpha * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.05"
                  value={surfaceAlpha}
                  onChange={e => setSurfaceAlpha(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Glow Spread */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">Neon Glow Radius (발광 헤일로 반경)</span>
                  <span className="font-mono text-cyan-400 font-bold">{glowSpread}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="60"
                  value={glowSpread}
                  onChange={e => setGlowSpread(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Glow Alpha */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">Neon Glow Intensity (네온 강도)</span>
                  <span className="font-mono text-cyan-400 font-bold">{Math.round(glowAlpha * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.8"
                  step="0.05"
                  value={glowAlpha}
                  onChange={e => setGlowAlpha(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Border Radius */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-bold">Border Radius (모서리 곡률)</span>
                  <span className="font-mono text-cyan-400 font-bold">{borderRadius}px</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="36"
                  value={borderRadius}
                  onChange={e => setBorderRadius(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Glow Color Custom Hex */}
              <div className="flex items-center justify-between pt-1 border-t border-white/10">
                <span className="text-xs font-bold text-slate-300">Accent Color Hex</span>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={glowColor}
                    onChange={e => setGlowColor(e.target.value)}
                    className="w-7 h-7 rounded-lg border-0 cursor-pointer bg-transparent"
                  />
                  <input
                    type="text"
                    value={glowColor}
                    onChange={e => setGlowColor(e.target.value)}
                    className="w-20 px-2 py-1 rounded bg-black/60 border border-white/20 text-xs font-mono text-center text-white"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Live Preview & Output (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Live Interactive Preview Box */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-cyan-400" />
                <span>실시간 라이브 렌더링 카드 (Live Preview)</span>
              </span>

              <div className="relative rounded-2xl bg-[#050608] border border-white/10 p-6 sm:p-8 min-h-[260px] flex items-center justify-center overflow-hidden">
                {/* Background Grid Pattern to show glass transparency */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                
                {/* Preview Component Card */}
                <div 
                  style={previewCardStyle}
                  className="relative z-10 w-full max-w-md p-5 border transition-all duration-300 space-y-4"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full animate-ping" style={{ backgroundColor: glowColor }} />
                      <span className="text-xs font-black text-white">QUANTUM SENSOR #01</span>
                    </div>
                    <span 
                      className="px-2 py-0.5 rounded-full text-[10px] font-mono font-black"
                      style={{ backgroundColor: `${glowColor}25`, color: glowColor, border: `1px solid ${glowColor}50` }}
                    >
                      OPTIMAL 99.8%
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-2xl font-black text-white font-mono tracking-tight">1,420.85 MFLOPS</div>
                    <p className="text-[11px] text-slate-400">초당 실시간 분산 양자 격자 연산 처리량</p>
                  </div>

                  {/* Sparkline simulation */}
                  <div className="h-8 w-full flex items-end gap-1 pt-1">
                    {[40, 65, 50, 85, 95, 75, 100, 80, 90, 110].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 rounded-t transition-all duration-500" 
                        style={{ 
                          height: `${(h / 110) * 100}%`, 
                          backgroundColor: glowColor,
                          opacity: 0.3 + (i / 10) * 0.7 
                        }} 
                      />
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-white/10">
                    <span className="text-[10px] text-slate-400 font-mono">Token: {glowColor}</span>
                    <button 
                      className="px-3 py-1 rounded-lg text-xs font-bold transition-transform active:scale-95"
                      style={{ backgroundColor: glowColor, color: '#000', boxShadow: `0 0 10px ${glowColor}60` }}
                    >
                      동기화 테스트
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Generated Code Blocks */}
            <div className="space-y-3">
              
              {/* Tailwind Classes */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-cyan-300">Tailwind CSS v4 Classes</span>
                  <button
                    onClick={handleCopyTailwind}
                    className="text-[10px] font-bold text-slate-300 hover:text-white px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 flex items-center gap-1 border border-white/10"
                  >
                    {copiedTailwind ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedTailwind ? '복사됨!' : '클래스 복사'}</span>
                  </button>
                </div>
                <div className="p-3 rounded-xl bg-black/80 border border-white/10 font-mono text-[11px] text-emerald-300 break-all select-all">
                  {tailwindClasses}
                </div>
              </div>

              {/* Pure CSS */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-violet-300">Pure CSS (.neon-glass-surface)</span>
                  <button
                    onClick={handleCopyCss}
                    className="text-[10px] font-bold text-slate-300 hover:text-white px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 flex items-center gap-1 border border-white/10"
                  >
                    {copiedCss ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCss ? '복사됨!' : 'CSS 복사'}</span>
                  </button>
                </div>
                <div className="p-3 rounded-xl bg-black/80 border border-white/10 font-mono text-[11px] text-violet-300 whitespace-pre overflow-x-auto select-all max-h-32">
                  {pureCssString}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
