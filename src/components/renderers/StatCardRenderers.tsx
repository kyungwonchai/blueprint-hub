import React, { useState, useEffect } from 'react';
import { 
  Activity, ArrowUpRight, DollarSign, Wifi, TrendingUp, BatteryCharging, 
  GitBranch, ShieldCheck, Coins, Database, Zap, HardDrive, Heart,
  Cpu, Thermometer, Radio, Gauge, RefreshCw, BarChart2, ShieldAlert
} from 'lucide-react';

// 1. Hyper Glow Production OEE Metric
export const KpiMetricNeonDemo: React.FC = () => {
  const [val, setVal] = useState(99.42);
  return (
    <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-violet-950/60 via-slate-900/95 to-slate-950 backdrop-blur-2xl border border-violet-500/40 p-4 shadow-[0_0_25px_rgba(139,92,246,0.15)] hover:border-violet-400/80 transition-all duration-300">
      <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-extrabold tracking-wider text-slate-300 uppercase flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          종합 설비 효율 (OEE)
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-md bg-violet-500/20 text-violet-300 font-mono font-bold">Grade A+</span>
      </div>
      <div className="flex items-baseline justify-between mb-2">
        <div className="text-3xl font-black text-white font-mono tracking-tight">{val}%</div>
        <span className="inline-flex items-center text-[11px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/30">
          <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />+1.4%p
        </span>
      </div>
      {/* Dynamic Mini Bar */}
      <div className="w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden">
        <div className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 h-full rounded-full shadow-[0_0_8px_#8b5cf6]" style={{ width: `${val}%` }} />
      </div>
    </div>
  );
};

// 2. High-Tech MRR / Output Progress
export const StatRevenueDemo: React.FC = () => (
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900/95 to-fuchsia-950/40 backdrop-blur-2xl border border-cyan-500/40 p-4 shadow-2xl space-y-2">
    <div className="flex justify-between text-xs font-extrabold text-slate-300">
      <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-cyan-400" /> 금일 목표 생산량 진척도</span>
      <span className="text-cyan-300 font-mono font-bold">14,280 / 15,000 EA</span>
    </div>
    <div className="flex items-baseline justify-between">
      <span className="text-2xl font-black text-white font-mono">95.2%</span>
      <span className="text-[10px] text-cyan-400 font-bold font-mono">납기 -04:20:18</span>
    </div>
    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 h-full rounded-full shadow-[0_0_10px_#06b6d4]" style={{ width: '95.2%' }} />
    </div>
  </div>
);

// 3. Ultra Low Micro-Ping Latency
export const StatLatencyDemo: React.FC = () => (
  <div className="rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900/90 to-slate-950 backdrop-blur-2xl border border-emerald-500/40 p-4 shadow-2xl flex items-center justify-between">
    <div>
      <span className="text-[11px] font-bold text-slate-400 block mb-1">MES 엣지 통신 지연 (RT-Latency)</span>
      <div className="text-2xl font-black text-white font-mono">
        1.84 <span className="text-xs font-bold text-emerald-400">ms (P99)</span>
      </div>
    </div>
    <div className="flex flex-col items-end gap-1">
      <span className="px-2.5 py-1 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-black rounded-lg animate-pulse">
        ● REALTIME
      </span>
      <span className="text-[9px] text-slate-500 font-mono">Packet Loss: 0.00%</span>
    </div>
  </div>
);

// 4. Conversion Quality Index
export const StatConversionDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-cyan-500/40 p-4 shadow-2xl space-y-2">
    <div className="flex justify-between text-xs font-bold text-slate-300">
      <span>공정 합격률 (First Pass Yield)</span>
      <span className="text-cyan-400 font-mono font-bold">Six Sigma</span>
    </div>
    <div className="flex items-baseline justify-between">
      <span className="text-2xl font-black text-white font-mono">99.96%</span>
      <span className="text-xs text-emerald-400 font-bold font-mono">CPK: 1.82</span>
    </div>
    <div className="grid grid-cols-4 gap-1 text-[9px] font-mono text-center">
      <span className="bg-emerald-950 p-1 rounded text-emerald-300 font-bold">1공정 100%</span>
      <span className="bg-emerald-950 p-1 rounded text-emerald-300 font-bold">2공정 99.9%</span>
      <span className="bg-emerald-950 p-1 rounded text-emerald-300 font-bold">3공정 100%</span>
      <span className="bg-emerald-950 p-1 rounded text-emerald-300 font-bold">4공정 99.9%</span>
    </div>
  </div>
);

// 5. IoT Energy Power
export const StatBatteryDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-amber-500/40 p-4 shadow-2xl flex items-center justify-between">
    <div>
      <span className="text-[11px] font-bold text-slate-400 block mb-1">설비 순시 소비전력 & 피크전력</span>
      <div className="text-2xl font-black text-amber-300 font-mono">
        48.2 <span className="text-xs font-bold text-slate-400">kW / 60kW</span>
      </div>
      <span className="text-[10px] text-emerald-400 font-bold">전력 효율 94.8% (정상)</span>
    </div>
    <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
      <BatteryCharging className="w-5 h-5" />
    </div>
  </div>
);

// 6. Git Branch Stars
export const StatGithubStarsDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/10 p-4 shadow-2xl flex items-center justify-between">
    <div>
      <span className="text-[11px] font-bold text-slate-400 block mb-1">오픈소스 저장소 스타 트렌드</span>
      <div className="text-2xl font-black text-white font-mono">
        14,890 <span className="text-xs font-bold text-amber-400 font-sans">+182 Today</span>
      </div>
      <span className="text-[10px] text-violet-400 font-mono">github.com/blueprint-hub</span>
    </div>
    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
      <GitBranch className="w-5 h-5" />
    </div>
  </div>
);

// 7. Four Nines SLA
export const StatUptimeSlaDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-emerald-500/40 p-4 shadow-2xl flex items-center justify-between">
    <div>
      <span className="text-[11px] font-bold text-slate-400 block mb-1">연간 무장애 가동률 (Four Nines)</span>
      <div className="text-2xl font-black text-emerald-400 font-mono">99.999%</div>
      <span className="text-[10px] text-slate-400">연간 다운타임: 5분 미만</span>
    </div>
    <div className="w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_12px_#10b981] animate-pulse" />
  </div>
);

// 8. Crypto Balance / Value
export const StatCryptoBalanceDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-violet-500/40 p-4 shadow-2xl space-y-1">
    <div className="flex justify-between text-xs font-bold text-slate-400">
      <span>재고 자산 총 평가액 (Inventory Value)</span>
      <span className="text-emerald-400 font-mono font-bold">+8.4%</span>
    </div>
    <div className="text-2xl font-black text-white font-mono">$4,892,100.00</div>
    <span className="text-[10px] text-violet-300 font-mono block">총 4,200 SKU 활성 관리중</span>
  </div>
);

// 9. Database QPS
export const StatDbQpsDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-cyan-500/40 p-4 shadow-2xl flex items-center justify-between">
    <div>
      <span className="text-[11px] font-bold text-slate-400 block mb-1">DB 초당 쿼리 처리수 (QPS)</span>
      <div className="text-2xl font-black text-white font-mono">
        24,500 <span className="text-xs font-bold text-cyan-400">QPS</span>
      </div>
      <span className="text-[10px] text-emerald-400 font-bold">Replica Node 4/4 SYNCED</span>
    </div>
    <Database className="w-6 h-6 text-cyan-400 animate-pulse" />
  </div>
);

// 10. AI Model TPS
export const StatAiTpsDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-violet-500/40 p-4 shadow-2xl flex items-center justify-between">
    <div>
      <span className="text-[11px] font-bold text-slate-400 block mb-1">AI 모델 초당 토큰 생성 속도</span>
      <div className="text-2xl font-black text-violet-300 font-mono">
        185 <span className="text-xs font-bold text-fuchsia-400">TPS</span>
      </div>
      <span className="text-[10px] text-slate-400">TTFT: 0.12s (Ultra Fast)</span>
    </div>
    <Cpu className="w-6 h-6 text-violet-400 animate-pulse" />
  </div>
);

// 11. NVMe Disk Usage
export const StatDiskUsageDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/10 p-4 shadow-2xl space-y-2">
    <div className="flex justify-between text-xs font-bold text-slate-300">
      <span>NVMe 클러스터 스토리지</span>
      <span className="text-cyan-400 font-mono">1.42TB / 2.00TB (71%)</span>
    </div>
    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
      <div className="bg-cyan-500 h-full rounded-full shadow-[0_0_8px_#06b6d4]" style={{ width: '71%' }} />
    </div>
    <div className="flex justify-between text-[10px] text-slate-500 font-mono">
      <span>Read: 6.8 GB/s</span>
      <span>Write: 5.2 GB/s</span>
    </div>
  </div>
);

// 12. CSAT Score
export const StatCsatDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-amber-500/40 p-4 shadow-2xl flex items-center justify-between">
    <div>
      <span className="text-[11px] font-bold text-slate-400 block mb-1">고객 품질 만족도 지수 (CSAT)</span>
      <div className="text-2xl font-black text-amber-300 font-mono">
        4.94 <span className="text-xs text-slate-400 font-normal">/ 5.00</span>
      </div>
      <span className="text-[10px] text-emerald-400 font-bold">1,842개 고객사 리뷰 100% 만족</span>
    </div>
    <div className="text-amber-400 text-xl font-black">★★★★★</div>
  </div>
);
