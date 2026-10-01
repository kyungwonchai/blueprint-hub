import React from 'react';
import { 
  Activity, ArrowUpRight, DollarSign, Wifi, TrendingUp, BatteryCharging, 
  GitBranch, ShieldCheck, Coins, Database, Zap, HardDrive, Heart 
} from 'lucide-react';

export const KpiMetricNeonDemo: React.FC = () => (
  <div className="relative group overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/50 transition-all duration-300">
    <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all duration-500" />
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">실시간 활성 유저 (MAU)</span>
      <div className="p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20"><Activity className="w-4 h-4" /></div>
    </div>
    <div className="flex items-baseline gap-3 mb-2">
      <span className="text-3xl font-extrabold text-white tracking-tight">128,490</span>
      <span className="inline-flex items-center text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20"><ArrowUpRight className="w-3 h-3 mr-0.5" />+14.2%</span>
    </div>
    <p className="text-xs text-slate-500 font-medium">전월 대비 +16,020명 증가</p>
  </div>
);

export const StatRevenueDemo: React.FC = () => (
  <div className="rounded-2xl bg-gradient-to-br from-violet-950/40 via-slate-900/90 to-fuchsia-950/30 backdrop-blur-xl border border-violet-500/30 p-5 shadow-2xl space-y-2">
    <div className="flex justify-between text-xs font-bold text-slate-400"><span>월간 반복 매출 (MRR)</span><span className="text-violet-400">Target 88%</span></div>
    <div className="text-2xl font-black text-white font-mono">$128,400.00</div>
    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden"><div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full rounded-full w-[88%]" /></div>
  </div>
);

export const StatLatencyDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 p-5 shadow-2xl flex items-center justify-between">
    <div>
      <span className="text-xs text-slate-400 block mb-1">글로벌 네트워크 지연</span>
      <span className="text-2xl font-black text-white font-mono">18 <span className="text-sm font-normal text-emerald-400">ms</span></span>
    </div>
    <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold rounded-xl animate-pulse">Ultra Low Ping</span>
  </div>
);

export const StatConversionDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 p-5 shadow-2xl space-y-2">
    <div className="flex justify-between text-xs font-bold text-slate-400"><span>가입 전환율 (CVR)</span><span className="text-cyan-400 font-bold">A/B Winner</span></div>
    <div className="text-2xl font-black text-white font-mono">4.82% <span className="text-xs text-emerald-400 font-normal">(+1.2%p)</span></div>
  </div>
);

export const StatBatteryDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl flex items-center justify-between">
    <div>
      <span className="text-xs text-slate-400 block mb-1">전력 소모 & 배터리 효율</span>
      <span className="text-2xl font-black text-white font-mono">14.2 <span className="text-sm font-normal text-amber-400">Watts</span></span>
    </div>
    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20"><BatteryCharging className="w-5 h-5" /></div>
  </div>
);

export const StatGithubStarsDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl flex items-center justify-between">
    <div>
      <span className="text-xs text-slate-400 block mb-1">GitHub Stars Trending</span>
      <span className="text-2xl font-black text-white font-mono">+142 <span className="text-xs text-amber-400 font-normal">Today</span></span>
    </div>
    <div className="p-2.5 rounded-xl bg-white/5 text-white border border-white/10"><GitBranch className="w-5 h-5" /></div>
  </div>
);

export const StatUptimeSlaDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-emerald-500/40 p-5 shadow-2xl flex items-center justify-between">
    <div>
      <span className="text-xs text-slate-400 block mb-1">연간 무장애 가동률 (SLA)</span>
      <span className="text-2xl font-black text-emerald-400 font-mono">99.99%</span>
    </div>
    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
  </div>
);

export const StatCryptoBalanceDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-amber-500/30 p-5 shadow-2xl space-y-1">
    <span className="text-xs text-slate-400 block">암호화폐 총 자산 평가액</span>
    <div className="text-2xl font-black text-white font-mono">$148,290.00</div>
    <span className="text-xs text-emerald-400 font-bold">+12.4% (24h)</span>
  </div>
);

export const StatDbQpsDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 p-5 shadow-2xl flex items-center justify-between">
    <div>
      <span className="text-xs text-slate-400 block mb-1">DB 초당 쿼리 처리수 (QPS)</span>
      <span className="text-2xl font-black text-white font-mono">14,500 <span className="text-xs text-cyan-400">QPS</span></span>
    </div>
    <Database className="w-5 h-5 text-cyan-400" />
  </div>
);

export const StatAiTpsDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-violet-500/40 p-5 shadow-2xl flex items-center justify-between">
    <div>
      <span className="text-xs text-slate-400 block mb-1">AI 초당 토큰 생성 속도</span>
      <span className="text-2xl font-black text-violet-300 font-mono">120 <span className="text-xs text-fuchsia-400 font-bold">TPS</span></span>
    </div>
    <Zap className="w-5 h-5 text-violet-400" />
  </div>
);

export const StatDiskUsageDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl space-y-2">
    <div className="flex justify-between text-xs text-slate-400"><span>NVMe SSD 용량</span><span className="text-white font-bold font-mono">1.42 / 2.0 TB (71%)</span></div>
    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden"><div className="bg-cyan-500 h-full w-[71%] rounded-full shadow-[0_0_8px_#06b6d4]" /></div>
  </div>
);

export const StatCsatDemo: React.FC = () => (
  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-rose-500/30 p-5 shadow-2xl flex items-center justify-between">
    <div>
      <span className="text-xs text-slate-400 block mb-1">고객 만족도 점수 (CSAT)</span>
      <span className="text-2xl font-black text-white font-mono">4.9 <span className="text-xs text-rose-400">/ 5.0</span></span>
    </div>
    <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-bounce" />
  </div>
);
