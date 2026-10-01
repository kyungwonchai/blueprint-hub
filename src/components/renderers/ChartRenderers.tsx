import React, { useState } from 'react';
import { 
  CandlestickChart, PieChart, Target, Flame, BarChart3, 
  TrendingUp, Activity, Compass, ArrowUpRight, Check, Eye, EyeOff,
  Sparkles, Layers, DollarSign, ArrowDownRight, RefreshCw, Sliders
} from 'lucide-react';

export const CandlestickTradingDemo: React.FC = () => {
  const [showLabels, setShowLabels] = useState(true);
  const [price, setPrice] = useState(68490);
  const [candles, setCandles] = useState([
    { o: 40, c: 90, h: 30, l: 100, up: true },
    { o: 85, c: 45, h: 90, l: 35, up: false },
    { o: 30, c: 75, h: 20, l: 80, up: true },
    { o: 20, c: 60, h: 15, l: 70, up: true },
    { o: 65, c: 35, h: 70, l: 25, up: false },
    { o: 15, c: 55, h: 10, l: 65, up: true },
    { o: 10, c: 40, h: 5, l: 50, up: true },
  ]);

  const addCandle = () => {
    const isUp = Math.random() > 0.45;
    const diff = Math.floor(Math.random() * 80) - 35;
    setPrice(p => p + diff);
    const newC = {
      o: Math.floor(Math.random() * 40) + 10,
      c: Math.floor(Math.random() * 40) + 30,
      h: Math.floor(Math.random() * 10) + 5,
      l: Math.floor(Math.random() * 20) + 60,
      up: isUp
    };
    setCandles(prev => [...prev.slice(1), newC]);
  };

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-xs font-bold text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            BTC/USDT 1분봉 캔들스틱
          </span>
          <span className="text-[11px] font-mono font-bold text-emerald-400">${price.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={addCandle} className="text-[10px] text-violet-300 hover:text-white px-2 py-0.5 rounded bg-violet-500/20 border border-violet-500/30">
            틱 갱신
          </button>
          <button onClick={() => setShowLabels(!showLabels)} className="text-[10px] text-slate-400 hover:text-white px-2 py-0.5 rounded bg-white/5 border border-white/10">
            {showLabels ? '수치 ON' : 'OFF'}
          </button>
        </div>
      </div>
      <div className="h-32 w-full bg-slate-950/70 rounded-xl p-2 border border-white/5 relative">
        <svg viewBox="0 0 320 80" className="w-full h-full">
          <line x1="0" y1="20" x2="320" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
          <line x1="0" y1="50" x2="320" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
          {candles.map((c, i) => {
            const x = 30 + i * 42;
            const col = c.up ? '#10b981' : '#ef4444';
            return (
              <g key={i}>
                <line x1={x} y1={c.h} x2={x} y2={c.l} stroke={col} strokeWidth="1.5" />
                <rect x={x - 6} y={Math.min(c.o, c.c)} width="12" height={Math.max(8, Math.abs(c.c - c.o))} fill={col} rx="1" />
              </g>
            );
          })}
          <path d="M 30 45 Q 110 25, 190 25 T 280 15" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          {showLabels && <text x="260" y="12" fill="#10b981" fontSize="8" fontFamily="monospace">${(price/1000).toFixed(1)}k</text>}
        </svg>
      </div>
    </div>
  );
};

export const DonutAllocationDemo: React.FC = () => {
  const [selected, setSelected] = useState('AI Tech');
  const items = [
    { label: 'AI Tech', pct: 45, col: '#8b5cf6', val: '$45,000' },
    { label: 'US Bonds', pct: 25, col: '#06b6d4', val: '$25,000' },
    { label: 'Crypto', pct: 20, col: '#f59e0b', val: '$20,000' },
    { label: 'Cash', pct: 10, col: '#10b981', val: '$10,000' }
  ];
  const cur = items.find(i => i.label === selected) || items[0];

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
        <span>자산 배분 도넛 (Click)</span>
        <span className="text-violet-400 font-mono text-[11px]">$100k Total</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative w-24 h-24 shrink-0 mx-auto">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="38" stroke="#8b5cf6" strokeWidth="14" fill="none" strokeDasharray="107 132" strokeDashoffset="0" className="cursor-pointer hover:opacity-80" onClick={() => setSelected('AI Tech')} />
            <circle cx="50" cy="50" r="38" stroke="#06b6d4" strokeWidth="14" fill="none" strokeDasharray="60 179" strokeDashoffset="-107" className="cursor-pointer hover:opacity-80" onClick={() => setSelected('US Bonds')} />
            <circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="14" fill="none" strokeDasharray="48 191" strokeDashoffset="-167" className="cursor-pointer hover:opacity-80" onClick={() => setSelected('Crypto')} />
            <circle cx="50" cy="50" r="38" stroke="#10b981" strokeWidth="14" fill="none" strokeDasharray="24 215" strokeDashoffset="-215" className="cursor-pointer hover:opacity-80" onClick={() => setSelected('Cash')} />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-bold text-white">{cur.pct}%</span>
            <span className="text-[8px] text-slate-400 font-mono">{cur.val}</span>
          </div>
        </div>
        <div className="text-[10px] space-y-1 text-slate-300">
          {items.map(it => (
            <button key={it.label} onClick={() => setSelected(it.label)} className={`flex items-center justify-between w-full px-1.5 py-0.5 rounded transition-all ${selected === it.label ? 'bg-white/10 font-bold text-white' : 'hover:bg-white/5'}`}>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: it.col }} /> {it.label}</span>
              <span className="font-mono text-slate-400">{it.pct}%</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const RadarSkillsDemo: React.FC = () => {
  const [mode, setMode] = useState<'ai' | 'dev'>('ai');
  const pointsAi = "80,24 130,52 120,110 80,132 38,105 34,52";
  const pointsDev = "80,35 115,60 135,115 80,120 45,95 40,65";

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
        <span>6각 스파이더 레이더</span>
        <div className="flex gap-1 text-[9px]">
          <button onClick={() => setMode('ai')} className={`px-2 py-0.5 rounded ${mode === 'ai' ? 'bg-cyan-500 text-black font-bold' : 'bg-white/5 text-slate-400'}`}>AI Agent</button>
          <button onClick={() => setMode('dev')} className={`px-2 py-0.5 rounded ${mode === 'dev' ? 'bg-violet-500 text-white font-bold' : 'bg-white/5 text-slate-400'}`}>Fullstack</button>
        </div>
      </div>
      <div className="relative h-32 w-full flex items-center justify-center">
        <svg viewBox="0 0 160 160" className="w-full h-full">
          <polygon points="80,15 136,47 136,113 80,145 24,113 24,47" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <polygon points="80,35 118,57 118,103 80,125 42,103 42,57" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <polygon points={mode === 'ai' ? pointsAi : pointsDev} fill={mode === 'ai' ? "rgba(6, 182, 212, 0.3)" : "rgba(139, 92, 246, 0.3)"} stroke={mode === 'ai' ? "#06b6d4" : "#8b5cf6"} strokeWidth="2" />
          <text x="80" y="10" fill="#94a3b8" fontSize="7" textAnchor="middle">추론속도</text>
          <text x="142" y="50" fill="#94a3b8" fontSize="7">코드품질</text>
          <text x="142" y="118" fill="#94a3b8" fontSize="7">보안성</text>
          <text x="80" y="155" fill="#94a3b8" fontSize="7" textAnchor="middle">안정성</text>
          <text x="18" y="118" fill="#94a3b8" fontSize="7" textAnchor="end">아키텍처</text>
          <text x="18" y="50" fill="#94a3b8" fontSize="7" textAnchor="end">UX디자인</text>
        </svg>
      </div>
    </div>
  );
};

export const ActivityHeatmapDemo: React.FC = () => {
  const [filter, setFilter] = useState<number | null>(null);
  const weeks = Array.from({ length: 16 }, (_, wi) => Array.from({ length: 5 }, (_, di) => (wi * 3 + di * 7) % 5));

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
        <span>연간 활동 잔디 (Heatmap)</span>
        <div className="flex items-center gap-1 text-[9px] text-slate-400">
          <span>필터:</span>
          {[1, 2, 3, 4].map(lvl => (
            <button key={lvl} onClick={() => setFilter(filter === lvl ? null : lvl)} className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center font-mono ${filter === lvl ? 'ring-2 ring-white font-bold text-white' : ''} ${lvl === 4 ? 'bg-fuchsia-500' : lvl === 3 ? 'bg-violet-600' : lvl === 2 ? 'bg-violet-800' : 'bg-violet-950'}`}>
              {lvl}
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-1 overflow-x-auto pb-1">
        {weeks.map((week, wIdx) => (
          <div key={wIdx} className="flex flex-col gap-1">
            {week.map((level, dIdx) => {
              const dim = filter !== null && filter !== level;
              return (
                <div
                  key={dIdx}
                  title={`Week ${wIdx + 1}, Day ${dIdx + 1}`}
                  className={`w-3 h-3 rounded-sm transition-opacity ${dim ? 'opacity-20' : 'opacity-100'} ${
                    level === 4 ? 'bg-fuchsia-500 border border-fuchsia-400' :
                    level === 3 ? 'bg-violet-600 border border-violet-500' :
                    level === 2 ? 'bg-violet-800 border border-violet-700' :
                    level === 1 ? 'bg-violet-950 border border-violet-900' :
                    'bg-white/[0.03] border border-white/5'
                  }`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export const StreamAreaDemo: React.FC = () => {
  const [rps, setRps] = useState(1420);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-white flex items-center gap-1">
          <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          초당 요청수 (RPS)
        </span>
        <button onClick={() => setRps(Math.floor(Math.random() * 800) + 1200)} className="text-cyan-400 font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
          {rps.toLocaleString()} RPS (갱신)
        </button>
      </div>
      <div className="h-28 w-full">
        <svg viewBox="0 0 400 120" className="w-full h-full">
          <defs>
            <linearGradient id="streamGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d="M 0 80 Q 70 30, 140 60 T 280 20 T 400 50 L 400 120 L 0 120 Z" fill="url(#streamGrad2)" />
          <path d="M 0 80 Q 70 30, 140 60 T 280 20 T 400 50" fill="none" stroke="#06b6d4" strokeWidth="2.5" />
          <circle cx="280" cy="20" r="4" fill="#10b981" className="animate-ping" />
          <circle cx="280" cy="20" r="3" fill="#10b981" />
        </svg>
      </div>
    </div>
  );
};

export const DualBarComparisonDemo: React.FC = () => {
  const data = [
    { label: 'Q1', target: 80, actual: 95 },
    { label: 'Q2', target: 100, actual: 110 },
    { label: 'Q3', target: 120, actual: 105 },
    { label: 'Q4', target: 140, actual: 155 }
  ];
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
        <span>목표 vs 실적 듀얼 막대</span>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="flex items-center gap-1 text-slate-400"><span className="w-2 h-2 rounded-sm bg-slate-600" /> 목표</span>
          <span className="flex items-center gap-1 text-violet-400"><span className="w-2 h-2 rounded-sm bg-violet-500" /> 실적</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 items-end h-28 pt-2">
        {data.map(d => (
          <div key={d.label} className="flex flex-col items-center gap-1 h-full justify-end">
            <div className="flex gap-1 items-end w-full justify-center h-20">
              <div className="w-3 bg-slate-700 rounded-t" style={{ height: `${(d.target / 160) * 100}%` }} title={`목표: ${d.target}`} />
              <div className="w-3 bg-gradient-to-t from-violet-600 to-fuchsia-500 rounded-t shadow-[0_0_8px_#8b5cf6]" style={{ height: `${(d.actual / 160) * 100}%` }} title={`실적: ${d.actual}`} />
            </div>
            <span className="text-[10px] text-slate-400 font-bold">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BubbleMarketMapDemo: React.FC = () => {
  const [selectedBubble, setSelectedBubble] = useState<string | null>(null);
  const bubbles = [
    { name: 'NVDA', x: 25, y: 35, r: 24, col: '#10b981', gain: '+4.8%' },
    { name: 'AAPL', x: 60, y: 30, r: 20, col: '#8b5cf6', gain: '+1.2%' },
    { name: 'TSLA', x: 45, y: 70, r: 18, col: '#ef4444', gain: '-2.4%' },
    { name: 'MSFT', x: 80, y: 60, r: 22, col: '#06b6d4', gain: '+2.1%' }
  ];
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
        <span>3D 버블 마켓 클러스터</span>
        <span className="text-emerald-400 text-[10px] font-mono">{selectedBubble || '버블 클릭 상세'}</span>
      </div>
      <div className="relative h-28 bg-slate-950/60 rounded-xl overflow-hidden border border-white/5">
        {bubbles.map(b => (
          <div
            key={b.name}
            onClick={() => setSelectedBubble(`${b.name}: ${b.gain}`)}
            style={{
              left: `${b.x}%`,
              top: `${b.y}%`,
              width: `${b.r * 2}px`,
              height: `${b.r * 2}px`,
              backgroundColor: `${b.col}33`,
              borderColor: b.col
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg"
          >
            <span className="text-[10px] font-bold text-white leading-none">{b.name}</span>
            <span className="text-[8px] font-mono" style={{ color: b.col }}>{b.gain}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const FunnelConversionDemo: React.FC = () => {
  const steps = [
    { label: '1. 웹사이트 방문', count: '100,000', pct: '100%', w: '100%', col: 'bg-violet-600' },
    { label: '2. 회원가입 완료', count: '35,000', pct: '35%', w: '75%', col: 'bg-indigo-600' },
    { label: '3. 장바구니 담기', count: '12,000', pct: '12%', w: '50%', col: 'bg-cyan-600' },
    { label: '4. 결제 전환', count: '4,800', pct: '4.8%', w: '30%', col: 'bg-emerald-500' }
  ];
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>퍼널 전환율 (Funnel)</span>
        <span className="text-emerald-400 font-mono text-[10px]">최종 4.8% CVR</span>
      </div>
      <div className="space-y-1.5 pt-1">
        {steps.map(s => (
          <div key={s.label} className="space-y-0.5">
            <div className="flex justify-between text-[10px] text-slate-300">
              <span>{s.label}</span>
              <span className="font-mono text-slate-400">{s.count} ({s.pct})</span>
            </div>
            <div className="h-2.5 bg-slate-950 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${s.col}`} style={{ width: s.w }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TreemapPortfolioDemo: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex justify-between text-xs font-bold text-white mb-2">
        <span>섹터 시총 트리맵 (Click)</span>
        <span className="text-violet-400 text-[10px] font-mono">{selected || '타일 선택'}</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 h-24">
        <div onClick={() => setSelected('반도체 AI: +5.4%')} className="col-span-2 bg-emerald-600/80 hover:bg-emerald-500 rounded-xl p-2 flex flex-col justify-between text-white cursor-pointer transition-colors border border-emerald-400/30">
          <span className="font-bold text-xs">반도체 AI</span>
          <span className="text-[10px] font-mono font-bold">+5.4%</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <div onClick={() => setSelected('빅테크: +2.1%')} className="flex-1 bg-emerald-700/80 hover:bg-emerald-600 rounded-lg p-1.5 flex justify-between items-center text-white cursor-pointer text-[10px] font-bold">
            <span>빅테크</span><span>+2.1%</span>
          </div>
          <div onClick={() => setSelected('헬스케어: -1.4%')} className="flex-1 bg-rose-700/80 hover:bg-rose-600 rounded-lg p-1.5 flex justify-between items-center text-white cursor-pointer text-[10px] font-bold">
            <span>헬스케어</span><span>-1.4%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SpeedometerGaugeDemo: React.FC = () => {
  const [val, setVal] = useState(78);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>반원 스피도미터</span>
        <span className="text-amber-400 font-mono text-[10px]">{val} km/h</span>
      </div>
      <div className="relative w-32 h-16 mx-auto overflow-hidden">
        <div className="w-32 h-32 rounded-full border-[10px] border-slate-800 border-t-amber-500 border-r-rose-500 -rotate-45" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
          <span className="text-sm font-black text-white font-mono">{val}</span>
          <span className="text-[8px] text-slate-400 block">임계구간</span>
        </div>
      </div>
      <input type="range" min="0" max="100" value={val} onChange={e => setVal(Number(e.target.value))} className="w-full h-1 bg-slate-800 rounded accent-amber-500 cursor-pointer" />
    </div>
  );
};

export const WaterfallCashflowDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex justify-between text-xs font-bold text-white mb-2">
        <span>현금흐름 워터폴</span>
        <span className="text-emerald-400 font-mono text-[10px]">Net: +$4.2M</span>
      </div>
      <div className="flex items-end justify-between h-24 pt-2 text-[10px] font-mono">
        <div className="flex flex-col items-center gap-1"><div className="w-5 bg-emerald-500 rounded-t h-16" /><span className="text-slate-400">매출</span></div>
        <div className="flex flex-col items-center gap-1"><div className="w-5 bg-rose-500 rounded-t h-8" /><span className="text-slate-400">서버비</span></div>
        <div className="flex flex-col items-center gap-1"><div className="w-5 bg-rose-500 rounded-t h-6" /><span className="text-slate-400">마케팅</span></div>
        <div className="flex flex-col items-center gap-1"><div className="w-5 bg-violet-500 rounded-t h-12 shadow-[0_0_8px_#8b5cf6]" /><span className="text-violet-300 font-bold">순익</span></div>
      </div>
    </div>
  );
};

export const SparklineMiniBadgeDemo: React.FC = () => {
  const [trend, setTrend] = useState<number[]>([10, 15, 8, 22, 18, 30, 28, 42]);
  const updateSpark = () => {
    setTrend(prev => [...prev.slice(1), Math.floor(Math.random() * 35) + 10]);
  };
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl flex items-center justify-between">
      <div>
        <span className="text-slate-400 text-[10px] block">실시간 세션</span>
        <span className="text-sm font-black text-white font-mono">4,920</span>
        <span className="text-[9px] text-emerald-400 block font-bold">+12.8%</span>
      </div>
      <div onClick={updateSpark} className="w-24 h-10 cursor-pointer" title="클릭 시 스파크라인 실시간 갱신">
        <svg viewBox="0 0 100 40" className="w-full h-full">
          <polyline
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            points={trend.map((val, idx) => `${idx * 14},${40 - (val / 50) * 35}`).join(' ')}
          />
        </svg>
      </div>
    </div>
  );
};
