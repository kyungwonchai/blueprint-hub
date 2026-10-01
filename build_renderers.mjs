import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const renderersDir = path.join(__dirname, 'src/components/renderers');
if (!fs.existsSync(renderersDir)) {
  fs.mkdirSync(renderersDir, { recursive: true });
}

// 1. Chart Renderers (12 distinct full UIs)
const chartRenderers = `import React, { useState } from 'react';
import { 
  CandlestickChart, PieChart, Target, Flame, BarChart3, 
  TrendingUp, Activity, Compass, ArrowUpRight, Check, Eye, EyeOff
} from 'lucide-react';

export const CandlestickTradingDemo: React.FC = () => {
  const [showLabels, setShowLabels] = useState(true);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-white flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          BTC/USDT 1분봉 캔들스틱
        </span>
        <button onClick={() => setShowLabels(!showLabels)} className="text-[10px] text-slate-400 hover:text-white px-2 py-0.5 rounded bg-white/5 border border-white/10">
          {showLabels ? '수치 레이블 ON' : '미니멀 OFF'}
        </button>
      </div>
      <div className="h-32 w-full bg-slate-950/70 rounded-xl p-2 border border-white/5">
        <svg viewBox="0 0 300 80" className="w-full h-full">
          <line x1="30" y1="20" x2="30" y2="60" stroke="#10b981" strokeWidth="1.5" />
          <rect x="25" y="30" width="10" height="20" fill="#10b981" rx="1" />
          <line x1="70" y1="15" x2="70" y2="55" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="65" y="25" width="10" height="15" fill="#ef4444" rx="1" />
          <line x1="110" y1="10" x2="110" y2="50" stroke="#10b981" strokeWidth="1.5" />
          <rect x="105" y="15" width="10" height="25" fill="#10b981" rx="1" />
          <line x1="150" y1="8" x2="150" y2="40" stroke="#10b981" strokeWidth="1.5" />
          <rect x="145" y="12" width="10" height="20" fill="#10b981" rx="1" />
          <line x1="190" y1="15" x2="190" y2="50" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="185" y="22" width="10" height="18" fill="#ef4444" rx="1" />
          <line x1="230" y1="5" x2="230" y2="40" stroke="#10b981" strokeWidth="1.5" />
          <rect x="225" y="8" width="10" height="25" fill="#10b981" rx="1" />
          <path d="M 30 45 Q 110 25, 190 25 T 270 12" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          {showLabels && <text x="235" y="10" fill="#10b981" fontSize="8" fontFamily="monospace">$68.4k</text>}
        </svg>
      </div>
    </div>
  );
};

export const DonutAllocationDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
        <span>자산 배분 비중 (Donut)</span>
        <span className="text-violet-400 font-mono text-[11px]">$100k Total</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative w-24 h-24 shrink-0 mx-auto">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="38" stroke="#8b5cf6" strokeWidth="14" fill="none" strokeDasharray="107 132" strokeDashoffset="0" />
            <circle cx="50" cy="50" r="38" stroke="#06b6d4" strokeWidth="14" fill="none" strokeDasharray="60 179" strokeDashoffset="-107" />
            <circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="14" fill="none" strokeDasharray="48 191" strokeDashoffset="-167" />
            <circle cx="50" cy="50" r="38" stroke="#10b981" strokeWidth="14" fill="none" strokeDasharray="24 215" strokeDashoffset="-215" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">45%</div>
        </div>
        <div className="text-[10px] space-y-1 text-slate-300">
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-violet-500" /> AI Tech: 45%</div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400" /> US Bonds: 25%</div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400" /> Crypto: 20%</div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Cash: 10%</div>
        </div>
      </div>
    </div>
  );
};

export const RadarSkillsDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
        <span>다차원 레이더 역량 (Radar)</span>
        <span className="text-cyan-400 text-[10px] font-mono">94.2 pts</span>
      </div>
      <div className="relative h-32 w-full flex items-center justify-center">
        <svg viewBox="0 0 160 160" className="w-full h-full">
          <polygon points="80,15 136,47 136,113 80,145 24,113 24,47" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <polygon points="80,24 130,52 120,110 80,132 38,105 34,52" fill="rgba(6, 182, 212, 0.3)" stroke="#06b6d4" strokeWidth="2" />
          <text x="80" y="10" fill="#94a3b8" fontSize="7" textAnchor="middle">AI추론</text>
          <text x="142" y="50" fill="#94a3b8" fontSize="7">코드품질</text>
          <text x="142" y="118" fill="#94a3b8" fontSize="7">보안</text>
          <text x="80" y="155" fill="#94a3b8" fontSize="7" textAnchor="middle">속도</text>
          <text x="18" y="118" fill="#94a3b8" fontSize="7" textAnchor="end">아키</text>
          <text x="18" y="50" fill="#94a3b8" fontSize="7" textAnchor="end">UX</text>
        </svg>
      </div>
    </div>
  );
};

export const ActivityHeatmapDemo: React.FC = () => {
  const weeks = Array.from({ length: 16 }, () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 5)));
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
        <span>활동 잔디 히트맵</span>
        <span className="text-fuchsia-400 text-[10px] font-mono">1,842 Events</span>
      </div>
      <div className="flex gap-1 overflow-x-auto pb-1">
        {weeks.map((week, wIdx) => (
          <div key={wIdx} className="flex flex-col gap-1">
            {week.map((level, dIdx) => (
              <div
                key={dIdx}
                className={\`w-3 h-3 rounded-sm border \${
                  level === 4 ? 'bg-fuchsia-500 border-fuchsia-400' :
                  level === 3 ? 'bg-violet-600 border-violet-500' :
                  level === 2 ? 'bg-violet-800 border-violet-700' :
                  level === 1 ? 'bg-violet-950 border-violet-900' :
                  'bg-white/[0.03] border-white/5'
                }\`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const StreamAreaDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-white flex items-center gap-1">
          <Activity className="w-3.5 h-3.5 text-cyan-400" />
          실시간 초당 처리량 (RPS)
        </span>
        <span className="text-emerald-400 text-[10px] font-bold">+18.4% Peak</span>
      </div>
      <div className="h-28 w-full">
        <svg viewBox="0 0 400 120" className="w-full h-full">
          <defs>
            <linearGradient id="streamGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d="M 0 90 Q 60 30, 120 70 T 240 35 T 340 55 T 400 15 L 400 120 L 0 120 Z" fill="url(#streamGrad)" />
          <path d="M 0 90 Q 60 30, 120 70 T 240 35 T 340 55 T 400 15" fill="none" stroke="#06b6d4" strokeWidth="2.5" />
        </svg>
      </div>
    </div>
  );
};

export const DualBarComparisonDemo: React.FC = () => {
  const bars = [
    { label: '1Q', target: 80, actual: 95 },
    { label: '2Q', target: 85, actual: 78 },
    { label: '3Q', target: 90, actual: 104 },
    { label: '4Q', target: 100, actual: 115 },
  ];
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-3">
        <span>목표치 vs 실적치 듀얼 바</span>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="flex items-center gap-1 text-slate-400"><span className="w-2 h-2 rounded bg-slate-600" />목표</span>
          <span className="flex items-center gap-1 text-violet-400"><span className="w-2 h-2 rounded bg-violet-500" />실적</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 items-end h-28 pt-2">
        {bars.map((b, i) => (
          <div key={i} className="flex flex-col items-center gap-1 h-full justify-end">
            <div className="flex items-end gap-1.5 w-full justify-center h-20">
              <div className="w-3 bg-slate-700 rounded-t" style={{ height: \`\${b.target * 0.7}%\` }} />
              <div className="w-3 bg-gradient-to-t from-violet-600 to-fuchsia-500 rounded-t shadow-[0_0_8px_rgba(139,92,246,0.4)]" style={{ height: \`\${b.actual * 0.7}%\` }} />
            </div>
            <span className="text-[10px] text-slate-400">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BubbleMarketMapDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
        <span>3차원 버블 클러스터 마켓 맵</span>
        <span className="text-amber-400 text-[10px]">Vol / Return</span>
      </div>
      <div className="relative h-28 w-full bg-slate-950/60 rounded-xl p-2 border border-white/5 flex items-center justify-center">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <circle cx="40" cy="70" r="18" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="40" y="73" fill="#fff" fontSize="7" textAnchor="middle">NVDA</text>
          <circle cx="110" cy="35" r="26" fill="rgba(139,92,246,0.4)" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="110" y="38" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">AAPL</text>
          <circle cx="165" cy="65" r="14" fill="rgba(16,185,129,0.3)" stroke="#10b981" strokeWidth="1.5" />
          <text x="165" y="68" fill="#fff" fontSize="6" textAnchor="middle">TSLA</text>
        </svg>
      </div>
    </div>
  );
};

export const FunnelConversionDemo: React.FC = () => {
  const steps = [
    { label: '방문자', count: '100,000', w: '100%', bg: 'bg-violet-600' },
    { label: '가입', count: '42,000', w: '75%', bg: 'bg-violet-500' },
    { label: '장바구니', count: '18,500', w: '50%', bg: 'bg-fuchsia-500' },
    { label: '최종결제', count: '6,200', w: '28%', bg: 'bg-emerald-500' },
  ];
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
        <span>구매 전환 퍼널 (Funnel)</span>
        <span className="text-emerald-400 text-[10px]">CVR 6.2%</span>
      </div>
      {steps.map((s, i) => (
        <div key={i} className="space-y-0.5">
          <div className="flex justify-between text-[10px] text-slate-300">
            <span>{s.label}</span>
            <span className="font-mono font-bold text-white">{s.count}</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
            <div className={\`h-full \${s.bg} rounded-full\`} style={{ width: s.w }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const TreemapPortfolioDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
        <span>섹터별 시가총액 트리맵 (Treemap)</span>
        <span className="text-emerald-400 text-[10px]">+2.4% Tech</span>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-1.5 h-28 font-mono text-[10px]">
        <div className="col-span-2 row-span-2 bg-emerald-600/80 rounded-lg p-2 flex flex-col justify-between text-white border border-emerald-400/40">
          <span className="font-bold">반도체 / AI</span>
          <span className="text-xs font-extrabold">+4.82%</span>
        </div>
        <div className="bg-rose-600/70 rounded-lg p-1.5 flex flex-col justify-between text-white border border-rose-400/30">
          <span>금융</span>
          <span className="text-[11px]">-1.20%</span>
        </div>
        <div className="bg-emerald-700/80 rounded-lg p-1.5 flex flex-col justify-between text-white border border-emerald-500/30">
          <span>헬스케어</span>
          <span className="text-[11px]">+0.85%</span>
        </div>
      </div>
    </div>
  );
};

export const SpeedometerGaugeDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
        <span>180도 스피도미터 속도계</span>
        <span className="text-amber-400 text-[10px] font-mono">124 km/h</span>
      </div>
      <div className="relative h-28 flex items-center justify-center">
        <svg viewBox="0 0 200 120" className="w-full h-full">
          <path d="M 30 100 A 70 70 0 0 1 170 100" fill="none" stroke="#334155" strokeWidth="12" strokeLinecap="round" />
          <path d="M 30 100 A 70 70 0 0 1 145 50" fill="none" stroke="#f59e0b" strokeWidth="12" strokeLinecap="round" strokeDasharray="180" />
          <circle cx="100" cy="100" r="8" fill="#f59e0b" />
          <line x1="100" y1="100" x2="135" y2="55" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export const WaterfallCashflowDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
        <span>재무 손익 워터폴 (Waterfall)</span>
        <span className="text-emerald-400 text-[10px]">Net +$48k</span>
      </div>
      <div className="flex items-end justify-between gap-2 h-24 pt-2 border-b border-white/10">
        <div className="flex flex-col items-center gap-1"><div className="w-6 bg-emerald-500 rounded-t h-16" /><span className="text-[9px] text-slate-400">매출</span></div>
        <div className="flex flex-col items-center gap-1"><div className="w-6 bg-rose-500 rounded-t h-8" /><span className="text-[9px] text-slate-400">원가</span></div>
        <div className="flex flex-col items-center gap-1"><div className="w-6 bg-rose-500 rounded-t h-5" /><span className="text-[9px] text-slate-400">마케팅</span></div>
        <div className="flex flex-col items-center gap-1"><div className="w-6 bg-violet-500 rounded-t h-12 shadow-[0_0_8px_#8b5cf6]" /><span className="text-[9px] text-violet-400 font-bold">순익</span></div>
      </div>
    </div>
  );
};

export const SparklineMiniBadgeDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl flex items-center justify-between">
      <div>
        <span className="text-[10px] text-slate-400 block">7-Day Trend</span>
        <span className="text-sm font-bold text-white">$4,892.20</span>
      </div>
      <div className="w-24 h-10">
        <svg viewBox="0 0 100 40" className="w-full h-full">
          <polyline fill="none" stroke="#10b981" strokeWidth="2.5" points="0,35 20,28 40,32 60,15 80,18 100,5" strokeLinecap="round" />
        </svg>
      </div>
      <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded-lg border border-emerald-500/20">+14.2%</span>
    </div>
  );
};
`;

fs.writeFileSync(path.join(renderersDir, 'ChartRenderers.tsx'), chartRenderers, 'utf-8');
console.log('Saved ChartRenderers.tsx');
