import React, { useState, useRef } from 'react';
import { 
  Sparkles, MousePointer, Orbit, Radio, Compass, Eye, 
  Layers, Volume2, ShieldCheck, Zap, Activity, Grid
} from 'lucide-react';

// 1. Interactive Spotlight Bento Card (Cursor Glow Tracker)
export const InteractiveSpotlightCardDemo: React.FC = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [isHover, setIsHover] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative overflow-hidden rounded-2xl bg-slate-900/90 border border-white/10 p-5 shadow-2xl transition-all group"
    >
      {/* Dynamic Cursor Spotlight Radial Mask */}
      {isHover && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(139, 92, 246, 0.25), transparent 80%)`
          }}
        />
      )}
      <div className="relative z-10 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs font-black text-white flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            2026 스포트라이트 래디얼 카드 (Spotlight Mask)
          </span>
          <span className="text-[10px] text-violet-300 font-mono font-bold">X: {Math.round(pos.x)} Y: {Math.round(pos.y)}</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          마우스 커서의 물리적 위치를 추적하여 림라이트 방사형 그라데이션 조명을 실시간 렌더링합니다.
        </p>
      </div>
    </div>
  );
};

// 2. Liquid Glass Card with Dynamic Distortion (2026 Glass Refraction)
export const LiquidGlassDistortionDemo: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-tr from-white/[0.08] via-white/[0.02] to-transparent backdrop-blur-3xl border border-white/20 p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-fuchsia-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-cyan-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 space-y-2">
        <div className="flex justify-between items-center text-xs font-black text-white">
          <span>리퀴드 글래스 (Liquid Glass Refraction)</span>
          <span className="text-cyan-300 font-mono text-[10px]">Backdrop 3xl</span>
        </div>
        <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-emerald-400 flex justify-between">
          <span>backdrop-filter: blur(64px) saturate(180%);</span>
          <span className="text-white font-bold">✔ OK</span>
        </div>
      </div>
    </div>
  );
};

// 3. Magnetic Hover Pull Button (Physics Interaction)
export const MagneticHoverButtonDemo: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setOffset({
      x: (e.clientX - centerX) * 0.35,
      y: (e.clientY - centerY) * 0.35
    });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl flex items-center justify-between">
      <div>
        <span className="text-xs font-bold text-white block">자기장 마그네틱 버튼 (Magnetic Hover)</span>
        <span className="text-[10px] text-slate-400">커서 근접 시 물리적 인력 흡착</span>
      </div>
      <button
        ref={btnRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`
        }}
        className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-black text-xs shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-transform duration-100 cursor-pointer active:scale-95"
      >
        마그네틱 흡착 ✦
      </button>
    </div>
  );
};

// 4. Sound Reactive Frequency Pulse
export const SoundReactivePulseDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const bars = [25, 60, 90, 45, 80, 100, 70, 35, 85, 65, 40, 95];

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl space-y-3">
      <div className="flex justify-between items-center text-xs font-bold text-white">
        <span className="flex items-center gap-1.5"><Volume2 className="w-4 h-4 text-emerald-400" /> 사운드 리액티브 주파수 이퀄라이저</span>
        <button onClick={() => setIsPlaying(!isPlaying)} className={`text-[10px] px-2 py-0.5 rounded font-bold ${isPlaying ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/10 text-slate-400'}`}>
          {isPlaying ? '● LIVE AUDIO' : 'PAUSED'}
        </button>
      </div>
      <div className="flex items-end justify-between h-10 gap-1 bg-slate-950/80 p-2 rounded-xl border border-white/5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-gradient-to-t from-emerald-500 via-teal-400 to-cyan-300 rounded-full transition-all duration-150"
            style={{ height: isPlaying ? `${h}%` : '15%' }}
          />
        ))}
      </div>
    </div>
  );
};
