import React, { useState } from 'react';
import { 
  Sparkles, Layers, Activity, Eye, ShieldAlert, Cpu, 
  Orbit, Compass, Play, Pause, RefreshCw, Zap, Sliders,
  Gauge, Terminal, Wind, Shuffle, Crosshair, BarChart2,
  Lock, CheckCircle2, AlertTriangle, Radio, GitPullRequest
} from 'lucide-react';

// =========================================================================
// 5. Six-Sigma Dynamic Tolerance Gauge (동적 6시그마 공차 게이지)
// =========================================================================
export const SixSigmaDynamicGaugeDemo: React.FC = () => {
  const [val, setVal] = useState<number>(0.003); // -0.015 to +0.015
  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Crosshair className="w-4 h-4 text-emerald-400" />
          <h4 className="text-xs font-bold text-white">6시그마 동적 공차 게이지 (Six Sigma Tolerance HUD)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">±0.010 mm USL</span>
      </div>

      <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-3">
        {/* Horizontal Deviation Scale */}
        <div className="relative h-6 flex items-center">
          <div className="absolute inset-x-0 h-2 rounded-full bg-slate-800 flex overflow-hidden">
            <div className="w-1/4 bg-rose-500/40" />
            <div className="w-1/2 bg-emerald-500/40" />
            <div className="w-1/4 bg-rose-500/40" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-5 bg-white" />
          {/* Moving Needle */}
          <div 
            style={{ left: `${50 + (val / 0.015) * 50}%` }}
            className="absolute -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white shadow-[0_0_10px_#10b981] transition-all"
          />
        </div>
        <div className="flex justify-between text-[9px] font-mono text-slate-500">
          <span>-0.015 (LSL)</span>
          <span className="text-white">Target 0.000</span>
          <span>+0.015 (USL)</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px]">
        <span className="text-slate-400">실시간 치수 편차:</span>
        <span className={`font-mono font-bold ${Math.abs(val) > 0.01 ? 'text-rose-400' : 'text-emerald-400'}`}>
          {val > 0 ? `+${val.toFixed(4)}` : val.toFixed(4)} mm
        </span>
      </div>
    </div>
  );
};

// =========================================================================
// 6. Laser Caliper Micron Micrometer HUD (레이저 마이크로미터 HUD)
// =========================================================================
export const LaserMicrometerDemo: React.FC = () => {
  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
          <h4 className="text-xs font-bold text-white">레이저 비접촉 캘리퍼 마이크로미터 (Laser Caliper HUD)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">0.1 μm Precision</span>
      </div>

      <div className="relative h-28 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center overflow-hidden">
        {/* Laser Beam Lines */}
        <div className="absolute inset-x-4 h-0.5 bg-rose-500 shadow-[0_0_12px_#f43f5e] animate-pulse" />
        <div className="relative z-10 w-24 h-16 rounded bg-slate-800 border-2 border-cyan-400/80 flex items-center justify-center font-mono text-cyan-300 text-xs font-bold shadow-lg">
          24.084 mm
        </div>
        <div className="absolute top-2 left-3 font-mono text-[9px] text-slate-500">BEAM FREQ: 632.8 nm He-Ne</div>
      </div>

      <div className="flex justify-between text-[11px] font-mono text-slate-300">
        <span className="text-slate-400">광학 분해능:</span>
        <span className="text-cyan-400 font-bold">±0.0001 mm PASS</span>
      </div>
    </div>
  );
};

// =========================================================================
// 7. Thermal Infrared Pallet Matrix (열화상 적외선 센서 팔레트)
// =========================================================================
export const ThermalInfraredPalletDemo: React.FC = () => {
  const grid = [
    [24, 25, 26, 28, 26],
    [25, 38, 52, 39, 27],
    [26, 54, 78, 55, 28],
    [25, 37, 51, 38, 26],
    [24, 25, 26, 27, 25],
  ];

  const getHeatColor = (t: number) => {
    if (t > 70) return '#ef4444';
    if (t > 50) return '#f59e0b';
    if (t > 30) return '#06b6d4';
    return '#1e293b';
  };

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400" />
          <h4 className="text-xs font-bold text-white">열화상 적외선 스팟 매트릭스 (Infrared Thermal Matrix)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">5x5 Array</span>
      </div>

      <div className="grid grid-cols-5 gap-1.5 p-2 bg-slate-950 rounded-lg border border-slate-800">
        {grid.flat().map((t, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: getHeatColor(t) }}
            className="h-7 rounded flex items-center justify-center font-mono text-[10px] font-bold text-white shadow-sm transition-transform hover:scale-110 cursor-pointer"
          >
            {t}°
          </div>
        ))}
      </div>

      <div className="flex justify-between text-[11px] font-mono">
        <span className="text-slate-400">핫스팟 최고온도:</span>
        <span className="text-rose-400 font-bold">78.0°C (경고)</span>
      </div>
    </div>
  );
};

// =========================================================================
// 8. Multi-Thread Worker Pool Threadpool Monitor (워커 스레드풀 HUD)
// =========================================================================
export const WorkerPoolThreadMonitorDemo: React.FC = () => {
  const threads = [
    { id: 'T-01', job: 'Vision AI Inference', load: 88, color: 'bg-emerald-500' },
    { id: 'T-02', job: 'FFT Audio Transform', load: 64, color: 'bg-cyan-500' },
    { id: 'T-03', job: 'OPC-UA Telemetry Pub', load: 92, color: 'bg-fuchsia-500' },
    { id: 'T-04', job: 'Database Batch Sync', load: 45, color: 'bg-violet-500' },
  ];

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-fuchsia-400" />
          <h4 className="text-xs font-bold text-white">멀티스레드 워커 풀 관제 (Worker Threadpool HUD)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 font-mono">4-Cores Active</span>
      </div>

      <div className="space-y-2">
        {threads.map(t => (
          <div key={t.id} className="p-2 rounded bg-slate-950 border border-slate-800 space-y-1">
            <div className="flex justify-between text-[10px] font-mono text-slate-300">
              <span>{t.id}: {t.job}</span>
              <span className="font-bold">{t.load}%</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className={`h-full ${t.color}`} style={{ width: `${t.load}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
