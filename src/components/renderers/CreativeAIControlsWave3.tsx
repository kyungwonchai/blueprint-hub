import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Layers, Activity, Eye, ShieldAlert, Cpu, 
  Orbit, Compass, Play, Pause, RefreshCw, Zap, Sliders,
  Gauge, Terminal, Wind, Shuffle, Crosshair, BarChart2,
  Radio, GitPullRequest, Waves, Disc, HelpCircle, Magnet
} from 'lucide-react';

// =========================================================================
// 1. 360° 3D LiDAR Pointcloud Radar (360도 라이다 포인트클라우드 레이더)
// =========================================================================
export const LidarPointcloudRadarDemo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rpm, setRpm] = useState<number>(600);
  const [obstacleCount] = useState<number>(14);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let angle = 0;
    
    // Fixed simulated obstacle positions
    const obstacles = Array.from({ length: obstacleCount }).map((_, i) => ({
      theta: (i * (Math.PI * 2) / obstacleCount) + (Math.random() * 0.4 - 0.2),
      dist: 35 + Math.random() * 45,
      intensity: 0.5 + Math.random() * 0.5
    }));

    const render = () => {
      angle = (angle + (rpm / 60) * 0.05) % (Math.PI * 2);
      
      ctx.fillStyle = 'rgba(5, 10, 20, 0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const maxR = 75;

      // Draw concentric radar range rings
      ctx.lineWidth = 1;
      [25, 50, 75].forEach((r, idx) => {
        ctx.strokeStyle = idx === 2 ? 'rgba(56, 189, 248, 0.4)' : 'rgba(56, 189, 248, 0.15)';
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Crosshairs
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
      ctx.beginPath();
      ctx.moveTo(cx - maxR, cy); ctx.lineTo(cx + maxR, cy);
      ctx.moveTo(cx, cy - maxR); ctx.lineTo(cx, cy + maxR);
      ctx.stroke();

      // Sweeping Laser Beam
      const sweepX = cx + Math.cos(angle) * maxR;
      const sweepY = cy + Math.sin(angle) * maxR;
      const grad = ctx.createRadialGradient(cx, cy, 5, cx, cy, maxR);
      grad.addColorStop(0, 'rgba(6, 182, 212, 0.8)');
      grad.addColorStop(1, 'rgba(6, 182, 212, 0.0)');
      
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.8)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(sweepX, sweepY);
      ctx.stroke();

      // Obstacle Return Points
      obstacles.forEach(obs => {
        const ox = cx + Math.cos(obs.theta) * obs.dist;
        const oy = cy + Math.sin(obs.theta) * obs.dist;
        
        // Intensity flash if beam passes near
        const dAngle = Math.abs((angle - obs.theta + Math.PI * 2) % (Math.PI * 2));
        const isHit = dAngle < 0.2;
        
        ctx.fillStyle = isHit ? '#f43f5e' : `rgba(56, 189, 248, ${obs.intensity})`;
        ctx.shadowColor = isHit ? '#f43f5e' : '#38bdf8';
        ctx.shadowBlur = isHit ? 10 : 3;
        ctx.beginPath();
        ctx.arc(ox, oy, isHit ? 3.5 : 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [rpm, obstacleCount]);

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Disc className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
          <h4 className="text-xs font-bold text-white">360° LiDAR 포인트클라우드 레이더 (LiDAR Pointcloud HUD)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">16-Channel 100m</span>
      </div>

      <div className="flex justify-center">
        <canvas ref={canvasRef} width={280} height={180} className="w-full max-w-[280px] h-40 bg-slate-950 rounded-lg border border-slate-800" />
      </div>

      <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-800 font-mono">
        <span className="text-slate-400">스캐너 RPM: {rpm}</span>
        <input type="range" min="300" max="1200" step="50" value={rpm} onChange={e => setRpm(parseInt(e.target.value))} className="w-24 accent-cyan-500 cursor-pointer" />
      </div>
    </div>
  );
};

// =========================================================================
// 2. Kinetic Tension Spring-Mass Damper Simulator (탄성-질량-감쇠 조화진동자)
// =========================================================================
export const KineticTensionSpringDiagramDemo: React.FC = () => {
  const [damping, setDamping] = useState<number>(0.15); // 0.01 ~ 0.5
  const [massPos, setMassPos] = useState<number>(30);

  useEffect(() => {
    let vel = 0;
    let pos = 40;
    let animId: number;
    const k = 0.08; // spring constant

    const step = () => {
      const force = -k * pos - damping * vel;
      vel += force;
      pos += vel;
      setMassPos(pos);
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [damping]);

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-emerald-400" />
          <h4 className="text-xs font-bold text-white">동적 조화 진동자 물리 시뮬레이터 (Spring-Mass Damper)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">Hooke's Law ODE</span>
      </div>

      <div className="h-32 bg-slate-950 rounded-lg p-3 border border-slate-800 relative flex items-center justify-center overflow-hidden">
        {/* Wall */}
        <div className="absolute left-4 top-4 bottom-4 w-3 bg-slate-700 rounded border-r-2 border-slate-500" />
        
        {/* Spring Coil representation */}
        <svg className="w-full h-16 ml-6 mr-14">
          <path
            d={`M 10 32 Q ${30 + massPos * 0.4} 12, ${50 + massPos * 0.6} 32 T ${90 + massPos * 0.8} 32 T ${130 + massPos * 1.0} 32 L ${160 + massPos} 32`}
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* Mass Block */}
        <div 
          style={{ transform: `translateX(${massPos}px)` }}
          className="absolute w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 border border-emerald-300 shadow-[0_0_15px_#10b981] flex flex-col items-center justify-center text-white font-mono text-[10px] font-bold"
        >
          <span>2.5 kg</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono">
        <span className="text-slate-400">감쇠 계수 (Damping ζ): {damping.toFixed(2)}</span>
        <input type="range" min="0.02" max="0.4" step="0.02" value={damping} onChange={e => setDamping(parseFloat(e.target.value))} className="w-24 accent-emerald-500 cursor-pointer" />
      </div>
    </div>
  );
};

// =========================================================================
// 3. Dynamic Voronoi Cell Tessellation (동적 보로노이 셀 응력 다각형)
// =========================================================================
export const VoronoiCellTessellationDemo: React.FC = () => {
  const [cells] = useState([
    { id: 'C1', x: 20, y: 30, stress: 'High (84 MPa)', color: '#ef4444' },
    { id: 'C2', x: 70, y: 25, stress: 'Normal (42 MPa)', color: '#10b981' },
    { id: 'C3', x: 45, y: 65, stress: 'Warning (68 MPa)', color: '#f59e0b' },
    { id: 'C4', x: 80, y: 80, stress: 'Nominal (28 MPa)', color: '#06b6d4' },
    { id: 'C5', x: 15, y: 75, stress: 'Nominal (18 MPa)', color: '#8b5cf6' },
  ]);

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-amber-400" />
          <h4 className="text-xs font-bold text-white">동적 보로노이 셀 응력 다각형 (Voronoi Stress Tessellation)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">FEA Delaunay</span>
      </div>

      <div className="h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative flex items-center justify-center">
        {/* SVG Voronoi Polygons */}
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 50,0 35,45 0,55" fill="rgba(239, 68, 68, 0.25)" stroke="#ef4444" strokeWidth="0.8" />
          <polygon points="50,0 100,0 100,60 55,45 35,45" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="0.8" />
          <polygon points="35,45 55,45 65,100 25,100" fill="rgba(245, 158, 11, 0.25)" stroke="#f59e0b" strokeWidth="0.8" />
          <polygon points="0,55 35,45 25,100 0,100" fill="rgba(139, 92, 246, 0.2)" stroke="#8b5cf6" strokeWidth="0.8" />
          <polygon points="55,45 100,60 100,100 65,100" fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4" strokeWidth="0.8" />
          
          {/* Seed Points */}
          {cells.map(c => (
            <circle key={c.id} cx={c.x} cy={c.y} r="2.5" fill={c.color} />
          ))}
        </svg>
      </div>

      <div className="p-2 rounded bg-slate-800/60 text-[11px] text-slate-300 flex justify-between font-mono">
        <span>최대 구조 응력점: Cell C1</span>
        <span className="text-rose-400 font-bold">84.2 MPa CRITICAL</span>
      </div>
    </div>
  );
};

// =========================================================================
// 4. Interactive Fourier Wave Synthesis (푸리에 고조파 합성 분석기)
// =========================================================================
export const FourierWaveSynthSpectraDemo: React.FC = () => {
  const [harmonics, setHarmonics] = useState<number>(3); // 1 to 7

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Waves className="w-4 h-4 text-violet-400" />
          <h4 className="text-xs font-bold text-white">푸리에 고조파 합성 분석기 (Harmonic Fourier Wave Synthesizer)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 font-mono">Σ sin(nωt)/n</span>
      </div>

      <div className="h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 300 100">
          <path
            d={Array.from({ length: 60 }).map((_, i) => {
              const x = i * 5;
              const t = (i / 60) * Math.PI * 4;
              let y = 50;
              for (let h = 1; h <= harmonics; h += 2) {
                y += (Math.sin(h * t) / h) * 35;
              }
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ')}
            fill="none"
            stroke="#a78bfa"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono">
        <span className="text-slate-400">합성 차수 (Harmonics N): {harmonics}</span>
        <div className="flex gap-1.5">
          {[1, 3, 5, 7].map(n => (
            <button
              key={n}
              onClick={() => setHarmonics(n)}
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${harmonics === n ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-400'}`}
            >
              N={n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 5. Active Magnetic Levitation PID Controller (자기부상 능동 PID 제어)
// =========================================================================
export const MagneticLevitationPidLoopDemo: React.FC = () => {
  const [kp, setKp] = useState<number>(1.8);
  const [isLocked] = useState<boolean>(true);

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Magnet className="w-4 h-4 text-rose-400" />
          <h4 className="text-xs font-bold text-white">자기부상 능동 PID 제어 루프 (MagLev PID Stabilizer)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono">10 kHz PWM</span>
      </div>

      <div className="h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative flex flex-col items-center justify-between">
        {/* Electromagnet Core */}
        <div className="w-20 h-6 rounded-b-lg bg-gradient-to-r from-slate-700 via-rose-600 to-slate-700 border border-rose-400 shadow-[0_0_12px_#f43f5e] flex items-center justify-center font-mono text-[9px] text-white font-bold">
          COIL: 2.4A
        </div>

        {/* Magnetic Field Glow */}
        <div className="w-16 h-12 rounded-full bg-rose-500/15 blur-sm" />

        {/* Levitating Steel Ball */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-100 to-slate-400 border-2 border-white shadow-[0_0_15px_#38bdf8] animate-bounce" style={{ animationDuration: '2s' }} />

        {/* Laser Photo-Sensor Receiver */}
        <div className="w-full border-t border-dashed border-cyan-500/40 flex justify-between px-3 text-[9px] font-mono text-cyan-400">
          <span>OPT-RX</span>
          <span>AIR GAP: 12.04 mm</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono">
        <span className="text-slate-400">비례 이득 (Kp Gain): {kp}</span>
        <input type="range" min="0.5" max="3.0" step="0.1" value={kp} onChange={e => setKp(parseFloat(e.target.value))} className="w-24 accent-rose-500 cursor-pointer" />
      </div>
    </div>
  );
};

// =========================================================================
// 6. Chemical Reaction Kinetics ODE Solver (화학 반응 동역학 농도 곡선)
// =========================================================================
export const ChemicalReactionKineticsDemo: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400" />
          <h4 className="text-xs font-bold text-white">화학 반응 동역학 ODE 농도 곡선 (Arrhenius Reaction Kinetics)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">A + B ➔ C</span>
      </div>

      <div className="h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 300 100">
          {/* Reagent A curve */}
          <path d="M 10 15 Q 100 80 290 85" fill="none" stroke="#ef4444" strokeWidth="2" />
          {/* Reagent B curve */}
          <path d="M 10 30 Q 120 75 290 80" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
          {/* Product C curve */}
          <path d="M 10 85 Q 100 20 290 15" fill="none" stroke="#10b981" strokeWidth="2.5" />
        </svg>
        <div className="absolute top-2 right-3 font-mono text-[9px] space-y-0.5">
          <div className="text-rose-400 font-bold">■ Reagent [A]</div>
          <div className="text-amber-400 font-bold">■ Reagent [B]</div>
          <div className="text-emerald-400 font-bold">■ Product [C]</div>
        </div>
      </div>

      <div className="p-2 rounded bg-slate-800/60 text-[11px] text-slate-300 flex justify-between font-mono">
        <span className="text-slate-400">반응 전환 수율:</span>
        <span className="text-emerald-400 font-bold">94.8% (350K 평형)</span>
      </div>
    </div>
  );
};

// =========================================================================
// 7. Micro-Fluidic Lattice Boltzmann Streamline (격자 볼츠만 유체 와류)
// =========================================================================
export const CellularAutomataFluidDemo: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Wind className="w-4 h-4 text-sky-400" />
          <h4 className="text-xs font-bold text-white">격자 볼츠만 미세 유체 와류 (Lattice Boltzmann Streamline)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono">Re = 2200 Vortex</span>
      </div>

      <div className="h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative flex items-center justify-center overflow-hidden">
        {/* Streamlines */}
        {Array.from({ length: 7 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
            style={{ top: `${15 + i * 12}%`, animation: `pulse ${1.5 + i * 0.2}s infinite` }}
          />
        ))}
        {/* Cylindrical Obstacle */}
        <div className="relative z-10 w-10 h-10 rounded-full bg-slate-800 border-2 border-cyan-400 shadow-[0_0_12px_#06b6d4] flex items-center justify-center text-[9px] font-bold text-cyan-300">
          OBST
        </div>
      </div>

      <div className="p-2 rounded bg-slate-800/60 text-[11px] text-slate-300 flex justify-between font-mono">
        <span className="text-slate-400">카르만 와류 주파수:</span>
        <span className="text-cyan-400 font-bold">14.2 Hz (St = 0.21)</span>
      </div>
    </div>
  );
};

// =========================================================================
// 8. AI Neural Attention Tensor Slicer (신경망 어텐션 텐서 슬라이서)
// =========================================================================
export const NeuralWeightMatrixInspectorDemo: React.FC = () => {
  const [layer, setLayer] = useState<number>(8);

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-fuchsia-400" />
          <h4 className="text-xs font-bold text-white">신경망 어텐션 텐서 슬라이서 (Transformer Attention Tensor)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 font-mono">32-Heads 4K</span>
      </div>

      <div className="grid grid-cols-8 gap-1 p-2 bg-slate-950 rounded-lg border border-slate-800">
        {Array.from({ length: 32 }).map((_, idx) => {
          const weight = Math.sin(idx * 0.5 + layer) * 0.5 + 0.5;
          const bg = weight > 0.8 ? '#d946ef' : weight > 0.5 ? '#8b5cf6' : weight > 0.2 ? '#3b82f6' : '#1e293b';
          return (
            <div key={idx} style={{ backgroundColor: bg }} className="h-6 rounded-sm transition-colors cursor-pointer hover:scale-110" />
          );
        })}
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono">
        <span className="text-slate-400">어텐션 레이어 (Layer {layer}/32)</span>
        <input type="range" min="1" max="32" step="1" value={layer} onChange={e => setLayer(parseInt(e.target.value))} className="w-24 accent-fuchsia-500 cursor-pointer" />
      </div>
    </div>
  );
};

// =========================================================================
// 9. Cpk / Cp Statistical Quality Bell Curve (공정능력지수 정규분포 가우스 곡선)
// =========================================================================
export const CpkCpProcessCapabilityDemo: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-4 h-4 text-emerald-400" />
          <h4 className="text-xs font-bold text-white">공정능력지수 가우스 정규분포 곡선 (Cpk / Ppk Gaussian Bell)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">Cpk 1.67 PASS</span>
      </div>

      <div className="h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 300 100">
          {/* Bell Curve */}
          <path
            d="M 10 90 Q 100 90 130 50 Q 150 10 170 50 Q 200 90 290 90"
            fill="rgba(16, 185, 129, 0.2)"
            stroke="#10b981"
            strokeWidth="2.5"
          />
          {/* Spec Limit Lines */}
          <line x1="70" y1="10" x2="70" y2="90" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="230" y1="10" x2="230" y2="90" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="150" y1="10" x2="150" y2="90" stroke="#38bdf8" strokeWidth="1" />
        </svg>
        <div className="absolute bottom-1 inset-x-4 flex justify-between font-mono text-[9px] text-slate-400">
          <span className="text-rose-400">LSL (24.98)</span>
          <span className="text-cyan-400">Mean μ (25.00)</span>
          <span className="text-rose-400">USL (25.02)</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
        <div className="p-1.5 rounded bg-slate-800/60 border border-slate-700/50 flex justify-between">
          <span className="text-slate-400">Cp (잠재능력)</span>
          <span className="text-emerald-400 font-bold">1.82</span>
        </div>
        <div className="p-1.5 rounded bg-slate-800/60 border border-slate-700/50 flex justify-between">
          <span className="text-slate-400">Cpk (실공정능력)</span>
          <span className="text-emerald-400 font-bold">1.67 (A등급)</span>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 10. Ultrasonic Doppler Velocity Profile (초음파 도플러 유속 프로파일)
// =========================================================================
export const PiezoelectricUltrasonicDopplerDemo: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs font-bold text-white">초음파 도플러 유량 유속 프로파일 (Ultrasonic Doppler Profile)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">DN150 Pipe</span>
      </div>

      <div className="h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative flex items-center justify-center">
        {/* Parabolic Laminar Flow Profile */}
        <svg className="w-full h-full" viewBox="0 0 300 100">
          <path d="M 20 15 Q 180 50 20 85" fill="rgba(6, 182, 212, 0.25)" stroke="#06b6d4" strokeWidth="2.5" />
          <line x1="20" y1="50" x2="180" y2="50" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />
        </svg>
        <div className="absolute top-2 right-3 font-mono text-[9px] text-cyan-300">Vmax: 3.42 m/s (Center)</div>
      </div>

      <div className="p-2 rounded bg-slate-800/60 text-[11px] text-slate-300 flex justify-between font-mono">
        <span className="text-slate-400">순간 체적 유량:</span>
        <span className="text-cyan-400 font-bold">218.4 m³/h (정상)</span>
      </div>
    </div>
  );
};

// =========================================================================
// 11. Gantt Critical Path CPM DAG (PERT/CPM 임계 경로 공정 스케줄러)
// =========================================================================
export const GanttCriticalPathCpmDemo: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <GitPullRequest className="w-4 h-4 text-rose-400" />
          <h4 className="text-xs font-bold text-white">PERT/CPM 임계 경로 공정망 (Critical Path CPM DAG)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono">Float = 0 Days</span>
      </div>

      <div className="space-y-2 p-2 bg-slate-950 rounded-lg border border-slate-800">
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] font-mono text-rose-400 font-bold">
            <span>[CRITICAL] 금형 설계 및 CNC 절삭</span>
            <span>D+14 (0 Slack)</span>
          </div>
          <div className="h-2 rounded bg-rose-500/80 shadow-[0_0_8px_#f43f5e]" style={{ width: '80%' }} />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] font-mono text-cyan-400">
            <span>[NON-CRIT] 사출 원자재 입고 검수</span>
            <span>D+6 (+3d Slack)</span>
          </div>
          <div className="h-2 rounded bg-cyan-500/50" style={{ width: '45%' }} />
        </div>
      </div>

      <div className="p-2 rounded bg-slate-800/60 text-[11px] text-slate-300 flex justify-between font-mono">
        <span className="text-slate-400">프로젝트 완공 예상일:</span>
        <span className="text-rose-400 font-bold">총 42영업일 (지연 0일)</span>
      </div>
    </div>
  );
};

// =========================================================================
// 12. Michelson Laser Interferometer (마이컬슨 광학 간섭계)
// =========================================================================
export const OptoelectronicInterferometerDemo: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-rose-500" />
          <h4 className="text-xs font-bold text-white">마이컬슨 광학 나노 간섭계 (Michelson Laser Fringe)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono">λ = 632.8 nm</span>
      </div>

      <div className="h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative flex items-center justify-center overflow-hidden">
        {/* Concentric Interference Fringe Rings */}
        {[8, 16, 24, 32, 40, 48].map((r, i) => (
          <div
            key={i}
            style={{ width: `${r * 2.5}px`, height: `${r * 2.5}px` }}
            className={`absolute rounded-full border-2 ${i % 2 === 0 ? 'border-rose-500/80 shadow-[0_0_8px_#f43f5e]' : 'border-slate-800'}`}
          />
        ))}
      </div>

      <div className="flex justify-between text-[11px] font-mono">
        <span className="text-slate-400">미세 변위 카운트:</span>
        <span className="text-rose-400 font-bold">Δd = 12.65 nm PASS</span>
      </div>
    </div>
  );
};
