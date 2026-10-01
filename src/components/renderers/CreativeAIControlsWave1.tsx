import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Layers, Activity, Eye, ShieldAlert, Cpu, 
  Orbit, Compass, Play, Pause, RefreshCw, Zap, Sliders,
  Gauge, Terminal, Wind, Shuffle, Crosshair, BarChart2
} from 'lucide-react';

// =========================================================================
// 1. Quantum Probability State Manifold (양자 확률 상태 오비탈 블록 구체)
// =========================================================================
export const QuantumOrbitalManifoldDemo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [phase, setPhase] = useState<number>(0.75);
  const [electronCount] = useState<number>(80);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const render = () => {
      t += 0.02;
      ctx.fillStyle = 'rgba(7, 10, 19, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const r = 65;

      // Draw Bloch Sphere Wireframe Rings
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(cx, cy, r, r * 0.4, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Orbital Probability Cloud Points
      for (let i = 0; i < electronCount; i++) {
        const u = (i / electronCount) * Math.PI * 2;
        const v = Math.sin(u * 3 + t * phase) * Math.PI;
        
        const px = cx + r * Math.sin(v) * Math.cos(u + t * 0.5);
        const py = cy + r * Math.cos(v) * 0.8;
        const pz = Math.sin(v) * Math.sin(u + t * 0.5);

        const alpha = Math.max(0.1, (pz + 1) / 2);
        const size = 1.5 + alpha * 2.5;

        ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;
        ctx.shadowColor = '#c084fc';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Quantum Superposition Center Core
      ctx.fillStyle = '#38bdf8';
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(cx, cy, 5 + Math.sin(t * 3) * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [phase, electronCount]);

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Orbit className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
          <h4 className="text-xs font-bold text-white">양자 확률 상태 오비탈 구체 (Quantum Orbital Manifold)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">Bloch ψ-State</span>
      </div>
      <div className="flex justify-center">
        <canvas ref={canvasRef} width={320} height={180} className="w-full max-w-[320px] h-40 bg-slate-950 rounded-lg border border-slate-800" />
      </div>
      <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-800">
        <span className="text-slate-400">양자 위상 간섭 (Phase Interference)</span>
        <input type="range" min="0.1" max="2" step="0.1" value={phase} onChange={e => setPhase(parseFloat(e.target.value))} className="w-24 accent-purple-500 cursor-pointer" />
      </div>
    </div>
  );
};

// =========================================================================
// 2. Multi-Tier Defect Sankey Cascade (계단형 불량 전이 캐스케이드)
// =========================================================================
export const DefectSankeyCascadeDemo: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  const stages = [
    { name: '투입 원자재', loss: '0%', yield: '100%', color: '#3b82f6', h: 90 },
    { name: '사출/가공 공정', loss: '-1.4%', yield: '98.6%', color: '#06b6d4', h: 78 },
    { name: '표면 도금/열처리', loss: '-0.8%', yield: '97.8%', color: '#10b981', h: 70 },
    { name: '정밀 센서 본딩', loss: '-0.5%', yield: '97.3%', color: '#f59e0b', h: 64 },
    { name: '최종 출하 합격', loss: '양품', yield: '97.3%', color: '#ec4899', h: 64 },
  ];

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs font-bold text-white">공정 단계별 누적 수율 손실 캐스케이드 (Yield Cascade)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">5-Stages</span>
      </div>

      <div className="h-36 flex items-end justify-between gap-2 p-2 bg-slate-950/60 rounded-lg border border-slate-800">
        {stages.map((st, i) => (
          <div
            key={i}
            onMouseEnter={() => setSelectedStage(st.name)}
            onMouseLeave={() => setSelectedStage(null)}
            className="flex-1 flex flex-col items-center gap-1 cursor-pointer group"
          >
            <span className="text-[9px] font-mono text-cyan-300 font-bold">{st.yield}</span>
            <div
              style={{ height: `${st.h}%`, backgroundColor: st.color }}
              className={`w-full rounded-t-lg transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:brightness-125 shadow-lg`}
            />
            <span className="text-[9px] text-slate-400 truncate w-full text-center">{st.name.split(' ')[0]}</span>
          </div>
        ))}
      </div>

      <div className="p-2 rounded bg-slate-800/60 text-[11px] text-slate-300 flex justify-between font-mono">
        <span>선택 공정: {selectedStage || '공정 컬럼에 마우스를 올려보세요'}</span>
        <span className="text-emerald-400 font-bold">최종 양품률: 97.3%</span>
      </div>
    </div>
  );
};

// =========================================================================
// 3. 3D Gyroscope Inertial Orientation Horizon (인공수평 자이로스코프)
// =========================================================================
export const GyroscopeInertialHorizonDemo: React.FC = () => {
  const [pitch, setPitch] = useState<number>(12); // -30 to 30
  const [roll, setRoll] = useState<number>(-8);   // -45 to 45

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-emerald-400" />
          <h4 className="text-xs font-bold text-white">항공/AGV 관성 자세 인공수평계 (Attitude Gyro Horizon)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">AHRS 6-DOF</span>
      </div>

      <div className="flex justify-center py-1">
        <div className="relative w-40 h-40 rounded-full border-4 border-slate-800 bg-slate-950 overflow-hidden shadow-inner flex items-center justify-center">
          {/* Artificial Horizon Pitch/Roll Disc */}
          <div
            style={{
              transform: `rotate(${roll}deg) translateY(${pitch * 1.5}px)`,
              transition: 'transform 0.1s ease-out'
            }}
            className="absolute w-64 h-64 flex flex-col"
          >
            {/* Sky (Blue) */}
            <div className="flex-1 bg-sky-600/80 flex items-end justify-center pb-2">
              <div className="w-16 h-0.5 bg-white/60" />
            </div>
            {/* Ground (Brown/Dark) */}
            <div className="flex-1 bg-amber-900/80 flex items-start justify-center pt-2">
              <div className="w-16 h-0.5 bg-white/60" />
            </div>
          </div>

          {/* Center Airplane Fixed Reticle */}
          <div className="absolute z-10 flex items-center gap-1 pointer-events-none">
            <div className="w-8 h-1 bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <div className="w-8 h-1 bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
          </div>

          {/* Pitch Degree Lines */}
          <div className="absolute inset-0 border border-white/20 rounded-full pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
        <div className="p-1.5 rounded bg-slate-800/60 border border-slate-700/50 flex justify-between">
          <span className="text-slate-400">PITCH (피치각)</span>
          <span className="text-cyan-400 font-bold">{pitch}°</span>
        </div>
        <div className="p-1.5 rounded bg-slate-800/60 border border-slate-700/50 flex justify-between">
          <span className="text-slate-400">ROLL (롤링각)</span>
          <span className="text-emerald-400 font-bold">{roll}°</span>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 4. Acoustic Audio Spectrogram FFT Waterfall (음향 주파수 스펙트로그램)
// =========================================================================
export const AcousticSpectrogramDemo: React.FC = () => {
  const [peakFreq] = useState<string>('4.2 kHz (베어링 마모)');

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Wind className="w-4 h-4 text-rose-400" />
          <h4 className="text-xs font-bold text-white">설비 음향 주파수 스펙트로그램 (FFT Acoustic Waterfall)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono">20Hz ~ 20kHz</span>
      </div>

      <div className="h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative overflow-hidden flex flex-col justify-between">
        {/* Waterfall Horizontal Energy Bands */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex gap-1 h-3.5 items-center">
            {Array.from({ length: 18 }).map((_, j) => {
              const energy = Math.sin(i * 1.5 + j * 0.8) * 0.5 + 0.5;
              const bg = energy > 0.8 ? '#f43f5e' : energy > 0.5 ? '#f59e0b' : energy > 0.2 ? '#06b6d4' : '#1e293b';
              return (
                <div key={j} style={{ backgroundColor: bg }} className="flex-1 h-full rounded-sm opacity-90 transition-colors" />
              );
            })}
          </div>
        ))}
        <div className="text-[9px] font-mono text-slate-500 flex justify-between pt-1">
          <span>0 kHz</span>
          <span>10 kHz</span>
          <span>20 kHz</span>
        </div>
      </div>

      <div className="p-2 rounded bg-slate-800/60 text-[11px] text-slate-300 flex justify-between font-mono">
        <span className="text-slate-400">이상 진동 검출:</span>
        <span className="text-rose-400 font-bold">{peakFreq}</span>
      </div>
    </div>
  );
};
