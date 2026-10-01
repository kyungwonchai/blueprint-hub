import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, MousePointer, ShieldAlert, Cpu, Activity, 
  Rotate3D, Radio, Gauge, Terminal, Play, Pause, RefreshCw, Zap
} from 'lucide-react';

// =========================================================================
// 1. WebGL/Canvas Real-Time Magnetic Liquid Ferrofluid Particle Well
// =========================================================================
export const MagneticFerrofluidCanvasDemo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [particleCount] = useState<number>(120);
  const [intensity, setIntensity] = useState<number>(1.5);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 180, y: 110 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    // Initialize particles
    const particles = Array.from({ length: particleCount }, (_, i) => {
      const angle = (i / particleCount) * Math.PI * 2;
      const dist = 30 + Math.random() * 60;
      return {
        baseAngle: angle,
        dist: dist,
        size: 2 + Math.random() * 3,
        speed: 0.02 + Math.random() * 0.03,
        color: i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#a855f7' : '#ec4899',
      };
    });

    const render = () => {
      time += 0.03;
      ctx.fillStyle = 'rgba(15, 23, 42, 0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = mousePos.x;
      const centerY = mousePos.y;

      // Draw Center Magnetic Core Glow
      const grad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, 70);
      grad.addColorStop(0, 'rgba(139, 92, 246, 0.4)');
      grad.addColorStop(1, 'rgba(15, 23, 42, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 70, 0, Math.PI * 2);
      ctx.fill();

      // Update & Draw Particles with Magnetic Attraction
      particles.forEach((p) => {
        p.baseAngle += p.speed;
        const fluidDist = p.dist + Math.sin(p.baseAngle * 4 + time) * 15 * intensity;
        const px = centerX + Math.cos(p.baseAngle) * fluidDist;
        const py = centerY + Math.sin(p.baseAngle) * fluidDist;

        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw Spoke Filament Lines
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(px, py);
        ctx.stroke();
        ctx.globalAlpha = 1.0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [intensity, mousePos, particleCount]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-fuchsia-400 animate-pulse" />
          <h4 className="text-sm font-bold text-white tracking-wide">마그네틱 페로플루이드 액체 자성체 (Magnetic Fluid Well)</h4>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 font-mono">GPGPU Physics 60FPS</span>
      </div>

      <div className="relative flex justify-center">
        <canvas
          ref={canvasRef}
          width={360}
          height={220}
          onMouseMove={handleMouseMove}
          className="w-full max-w-[360px] h-[220px] bg-slate-950 rounded-lg border border-slate-800 cursor-crosshair drop-shadow-[0_0_20px_rgba(168,85,247,0.2)]"
        />
        <div className="absolute bottom-2 left-3 text-[10px] text-slate-400 font-mono pointer-events-none">
          마우스를 캔버스 위로 움직여 자성 인력을 제어하세요
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 text-xs pt-2 border-t border-slate-800">
        <span className="text-slate-400">자성 인력 세기 (Intensity)</span>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={intensity}
            onChange={(e) => setIntensity(parseFloat(e.target.value))}
            className="w-32 accent-fuchsia-500 cursor-pointer"
          />
          <span className="font-mono text-fuchsia-400 font-bold">{intensity}x</span>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 2. 2026 Kinetic Cyberpunk HUD Dial Gauge (초정밀 사이버 휠)
// =========================================================================
export const KineticCyberDialDemo: React.FC = () => {
  const [angle, setAngle] = useState<number>(135); // 0 to 270 degrees
  const isDragging = useRef<boolean>(false);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    let deg = (Math.atan2(dy, dx) * 180) / Math.PI + 180;
    deg = Math.max(0, Math.min(270, deg));
    setAngle(Math.round(deg));
  };

  const calculatedRpm = Math.round((angle / 270) * 8000);
  const calculatedTemp = Math.round(25 + (angle / 270) * 85);

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Gauge className="w-5 h-5 text-cyan-400" />
          <h4 className="text-sm font-bold text-white tracking-wide">햅틱 키네틱 로터리 다이얼 (Tactile Kinetic Cyber Dial)</h4>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">Rotary 270°</span>
      </div>

      <div 
        className="flex flex-col items-center justify-center select-none py-2"
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div 
          onMouseDown={handleMouseDown}
          className="relative w-44 h-44 rounded-full bg-slate-950 border-4 border-slate-800 flex items-center justify-center cursor-grab active:cursor-grabbing shadow-[0_0_30px_rgba(6,182,212,0.15)]"
        >
          {/* Tick marks around perimeter */}
          {Array.from({ length: 28 }).map((_, i) => {
            const rot = i * 10 - 45;
            return (
              <div
                key={i}
                style={{ transform: `rotate(${rot}deg) translateY(-80px)` }}
                className={`absolute w-0.5 h-3 ${
                  rot <= angle - 45 ? 'bg-cyan-400 shadow-[0_0_6px_#06b6d4]' : 'bg-slate-700'
                }`}
              />
            );
          })}

          {/* Internal Dial Rotor with metallic gradient */}
          <div 
            style={{ transform: `rotate(${angle - 135}deg)` }}
            className="w-28 h-28 rounded-full bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 border-2 border-slate-600 flex items-center justify-center relative shadow-inner transition-transform duration-75"
          >
            {/* Notch indicator */}
            <div className="absolute top-2 w-2 h-4 rounded bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
            <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center">
              <Zap className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full mt-4 text-center">
          <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
            <div className="text-[10px] text-slate-400 uppercase font-mono">ROTOR SPEED</div>
            <div className="text-base font-black text-cyan-400 font-mono mt-0.5">{calculatedRpm} RPM</div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
            <div className="text-[10px] text-slate-400 uppercase font-mono">CHAMBER THERMAL</div>
            <div className={`text-base font-black font-mono mt-0.5 ${calculatedTemp > 85 ? 'text-rose-400' : 'text-emerald-400'}`}>
              {calculatedTemp} °C
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 3. Tactile Brutalism 1px Micro-Grid Matrix Switcher (택타일 스위처)
// =========================================================================
export const TactileMatrixSwitcherDemo: React.FC = () => {
  const [switches, setSwitches] = useState<boolean[]>([true, true, false, true, false, true, true, false]);

  const channels = [
    { label: 'CH-1 (Main Bus)', desc: '480V 3-Phase' },
    { label: 'CH-2 (Servo Driver)', desc: '24V DC Isolated' },
    { label: 'CH-3 (Cooling Pump)', desc: 'Hydraulic 120 PSI' },
    { label: 'CH-4 (Vision Feed)', desc: 'GigE PoE Link' },
    { label: 'CH-5 (Safety Curtain)', desc: 'Optic SIL-3 Safe' },
    { label: 'CH-6 (Pneumatic Ex)', desc: '6.5 Bar Regulated' },
    { label: 'CH-7 (IoT Telemetry)', desc: 'MQTT 100Hz Pub' },
    { label: 'CH-8 (Aux Inverter)', desc: '10kW Standby' },
  ];

  const toggle = (idx: number) => {
    const updated = [...switches];
    updated[idx] = !updated[idx];
    setSwitches(updated);
  };

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-amber-400" />
          <h4 className="text-sm font-bold text-white tracking-wide">택타일 브루탈리즘 릴레이 스위처 (Tactile Brutalism 1px Matrix)</h4>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">Solid State 8-CH</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {channels.map((ch, idx) => {
          const isActive = switches[idx];
          return (
            <div
              key={idx}
              onClick={() => toggle(idx)}
              className={`p-3 rounded-none border-2 transition-all cursor-pointer select-none relative ${
                isActive
                  ? 'bg-amber-500/10 border-amber-400 shadow-[2px_2px_0px_#f59e0b]'
                  : 'bg-slate-950 border-slate-700 shadow-[2px_2px_0px_#334155] opacity-60 hover:opacity-100'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-amber-400' : 'text-slate-500'}`}>
                  {isActive ? 'ENGAGED' : 'TRIPPED'}
                </span>
                <div className={`w-2 h-2 rounded-none border ${isActive ? 'bg-amber-400 border-amber-300 animate-ping' : 'bg-slate-800 border-slate-600'}`} />
              </div>
              <div className="text-xs font-bold text-slate-100 mt-1">{ch.label}</div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">{ch.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
