const fs = require('fs');
const path = require('path');

// 1. Next-Gen ChartRenderers: ECharts/Highcharts/DevExpress Visual Engine
const chartRenderers = `import React, { useState, useEffect } from 'react';
import { 
  CandlestickChart, PieChart, Target, Flame, BarChart3, 
  TrendingUp, Activity, Compass, ArrowUpRight, Check, Eye, EyeOff,
  Sparkles, Layers, DollarSign, ArrowDownRight, RefreshCw, Sliders,
  Gauge, AlertTriangle, ShieldCheck
} from 'lucide-react';

// 1. SPC Statistical Process Control X-bar & R Chart
export const SpcQualityControlDemo: React.FC = () => {
  const [ucl] = useState(105);
  const [lcl] = useState(95);
  const [cl] = useState(100);
  const [points, setPoints] = useState([98.2, 99.5, 101.4, 100.2, 103.8, 99.1, 102.3, 104.1]);
  const [anomaly, setAnomaly] = useState(false);

  const addPoint = () => {
    const val = Number((97 + Math.random() * 8).toFixed(1));
    setPoints(p => [...p.slice(1), val]);
    if (val > ucl || val < lcl) setAnomaly(true);
    else setAnomaly(false);
  };

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-xs font-black text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            SPC 관리도 (X-bar / R 관리 한계선)
          </span>
          <span className="text-[10px] text-slate-400 font-mono">UCL: 105.0 | CL: 100.0 | LCL: 95.0</span>
        </div>
        <button onClick={addPoint} className="text-[10px] px-2 py-0.5 rounded bg-violet-600 hover:bg-violet-500 text-white font-bold">
          샘플링 측정
        </button>
      </div>

      <div className="h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 relative">
        <svg viewBox="0 0 300 80" className="w-full h-full">
          {/* UCL / LCL Lines */}
          <line x1="0" y1="12" x2="300" y2="12" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
          <text x="5" y="10" fill="#ef4444" fontSize="7" fontFamily="monospace">UCL: 105.0</text>
          
          <line x1="0" y1="40" x2="300" y2="40" stroke="#10b981" strokeWidth="1" />
          <text x="5" y="38" fill="#10b981" fontSize="7" fontFamily="monospace">CL: 100.0</text>
          
          <line x1="0" y1="68" x2="300" y2="68" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
          <text x="5" y="66" fill="#ef4444" fontSize="7" fontFamily="monospace">LCL: 95.0</text>

          {/* Connected Trend Line */}
          <polyline
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2"
            points={points.map((pt, i) => \`\${20 + i * 36},\${80 - (pt - 92) * 5}\`).join(' ')}
          />

          {/* Data Points with Deviation Inspection */}
          {points.map((pt, i) => {
            const cx = 20 + i * 36;
            const cy = 80 - (pt - 92) * 5;
            const isOut = pt > ucl || pt < lcl;
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r={isOut ? "4.5" : "3"} fill={isOut ? "#ef4444" : "#06b6d4"} stroke="#ffffff" strokeWidth="1" />
                <text x={cx} y={cy - 5} fill="#cbd5e1" fontSize="6" fontFamily="monospace" textAnchor="middle">{pt}</text>
              </g>
            );
          })}
        </svg>
      </div>
      {anomaly && (
        <div className="p-1 rounded bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[10px] font-bold text-center animate-pulse">
          ⚠️ 관리 한계선 이탈 발생! 공정 인자 즉시 보정 권장
        </div>
      )}
    </div>
  );
};

// 2. Multi-Level Donut
export const DonutAllocationDemo: React.FC = () => {
  const [selected, setSelected] = useState('OLED 스마트조립');
  const items = [
    { label: 'OLED 스마트조립', pct: 45, col: '#8b5cf6', val: '450 EA' },
    { label: 'SMT 고속실장', pct: 25, col: '#06b6d4', val: '250 EA' },
    { label: '광학렌즈 모듈', pct: 20, col: '#f59e0b', val: '200 EA' },
    { label: '최종 에이징검사', pct: 10, col: '#10b981', val: '100 EA' }
  ];
  const cur = items.find(i => i.label === selected) || items[0];

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
        <span>공정별 생산 비중 (Donut)</span>
        <span className="text-violet-400 font-mono text-[11px]">1,000 EA Total</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative w-24 h-24 shrink-0 mx-auto">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="38" stroke="#8b5cf6" strokeWidth="14" fill="none" strokeDasharray="107 132" strokeDashoffset="0" className="cursor-pointer hover:opacity-80" onClick={() => setSelected('OLED 스마트조립')} />
            <circle cx="50" cy="50" r="38" stroke="#06b6d4" strokeWidth="14" fill="none" strokeDasharray="60 179" strokeDashoffset="-107" className="cursor-pointer hover:opacity-80" onClick={() => setSelected('SMT 고속실장')} />
            <circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="14" fill="none" strokeDasharray="48 191" strokeDashoffset="-167" className="cursor-pointer hover:opacity-80" onClick={() => setSelected('광학렌즈 모듈')} />
            <circle cx="50" cy="50" r="38" stroke="#10b981" strokeWidth="14" fill="none" strokeDasharray="24 215" strokeDashoffset="-215" className="cursor-pointer hover:opacity-80" onClick={() => setSelected('최종 에이징검사')} />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-bold text-white">{cur.pct}%</span>
            <span className="text-[8px] text-slate-400 font-mono">{cur.val}</span>
          </div>
        </div>
        <div className="text-[10px] space-y-1 text-slate-300">
          {items.map(it => (
            <button key={it.label} onClick={() => setSelected(it.label)} className={\`flex items-center justify-between w-full px-1.5 py-0.5 rounded transition-all \${selected === it.label ? 'bg-white/10 font-bold text-white' : 'hover:bg-white/5'}\`}>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: it.col }} /> {it.label}</span>
              <span className="font-mono text-slate-400">{it.pct}%</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. Radar Skills
export const RadarSkillsDemo: React.FC = () => {
  const [mode, setMode] = useState<'lineA' | 'lineB'>('lineA');
  const pointsA = "80,24 130,52 120,110 80,132 38,105 34,52";
  const pointsB = "80,35 115,60 135,115 80,120 45,95 40,65";

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
        <span>6각 품질역량 벤치마크</span>
        <div className="flex gap-1 text-[9px]">
          <button onClick={() => setMode('lineA')} className={\`px-2 py-0.5 rounded \${mode === 'lineA' ? 'bg-emerald-500 text-black font-bold' : 'bg-white/5 text-slate-400'}\`}>LINE-A</button>
          <button onClick={() => setMode('lineB')} className={\`px-2 py-0.5 rounded \${mode === 'lineB' ? 'bg-violet-500 text-white font-bold' : 'bg-white/5 text-slate-400'}\`}>LINE-B</button>
        </div>
      </div>
      <div className="relative h-32 w-full flex items-center justify-center">
        <svg viewBox="0 0 160 160" className="w-full h-full">
          <polygon points="80,15 136,47 136,113 80,145 24,113 24,47" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <polygon points="80,35 118,57 118,103 80,125 42,103 42,57" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <polygon points={mode === 'lineA' ? pointsA : pointsB} fill={mode === 'lineA' ? "rgba(16, 185, 129, 0.3)" : "rgba(139, 92, 246, 0.3)"} stroke={mode === 'lineA' ? "#10b981" : "#8b5cf6"} strokeWidth="2" />
          <text x="80" y="10" fill="#94a3b8" fontSize="7" textAnchor="middle">치수정밀도</text>
          <text x="142" y="50" fill="#94a3b8" fontSize="7">표면조도</text>
          <text x="142" y="118" fill="#94a3b8" fontSize="7">인장강도</text>
          <text x="80" y="155" fill="#94a3b8" fontSize="7" textAnchor="middle">내열성</text>
          <text x="18" y="118" fill="#94a3b8" fontSize="7" textAnchor="end">절연저항</text>
          <text x="18" y="50" fill="#94a3b8" fontSize="7" textAnchor="end">도막두께</text>
        </svg>
      </div>
    </div>
  );
};

// 4. Activity Heatmap
export const ActivityHeatmapDemo: React.FC = () => {
  const [filter, setFilter] = useState<number | null>(null);
  const weeks = Array.from({ length: 16 }, (_, wi) => Array.from({ length: 5 }, (_, di) => (wi * 3 + di * 7) % 5));

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
        <span>연간 설비 가동 히트맵</span>
        <div className="flex items-center gap-1 text-[9px] text-slate-400">
          <span>강도:</span>
          {[1, 2, 3, 4].map(lvl => (
            <button key={lvl} onClick={() => setFilter(filter === lvl ? null : lvl)} className={\`w-3.5 h-3.5 rounded-sm flex items-center justify-center font-mono \${filter === lvl ? 'ring-2 ring-white font-bold text-white' : ''} \${lvl === 4 ? 'bg-emerald-500' : lvl === 3 ? 'bg-emerald-600' : lvl === 2 ? 'bg-emerald-800' : 'bg-emerald-950'}\`}>
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
                  title={\`Week \${wIdx + 1}, Day \${dIdx + 1}: \${level * 20}% 부하\`}
                  className={\`w-3 h-3 rounded-sm transition-opacity \${dim ? 'opacity-20' : 'opacity-100'} \${
                    level === 4 ? 'bg-emerald-500 border border-emerald-400' :
                    level === 3 ? 'bg-emerald-600 border border-emerald-500' :
                    level === 2 ? 'bg-emerald-800 border border-emerald-700' :
                    level === 1 ? 'bg-emerald-950 border border-emerald-900' :
                    'bg-white/[0.03] border border-white/5'
                  }\`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

// 5. Stream Area RPS
export const StreamAreaDemo: React.FC = () => {
  const [tps, setTps] = useState(1420);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-white flex items-center gap-1">
          <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          초당 공정 센서 패킷 (TPS)
        </span>
        <button onClick={() => setTps(Math.floor(Math.random() * 800) + 1200)} className="text-cyan-400 font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
          {tps.toLocaleString()} TPS (갱신)
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

// 6. Dual Bar Comparison
export const DualBarComparisonDemo: React.FC = () => {
  const data = [
    { label: '1공장', target: 80, actual: 95 },
    { label: '2공장', target: 100, actual: 110 },
    { label: '3공장', target: 120, actual: 105 },
    { label: '4공장', target: 140, actual: 155 }
  ];
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
        <span>공장별 계획 vs 실적 듀얼 막대</span>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="flex items-center gap-1 text-slate-400"><span className="w-2 h-2 rounded-sm bg-slate-600" /> 계획</span>
          <span className="flex items-center gap-1 text-emerald-400"><span className="w-2 h-2 rounded-sm bg-emerald-500" /> 실적</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 items-end h-28 pt-2">
        {data.map(d => (
          <div key={d.label} className="flex flex-col items-center gap-1 h-full justify-end">
            <div className="flex gap-1 items-end w-full justify-center h-20">
              <div className="w-3 bg-slate-700 rounded-t" style={{ height: \`\${(d.target / 160) * 100}%\` }} />
              <div className="w-3 bg-gradient-to-t from-emerald-600 to-teal-500 rounded-t shadow-[0_0_8px_#10b981]" style={{ height: \`\${(d.actual / 160) * 100}%\` }} />
            </div>
            <span className="text-[10px] text-slate-400 font-bold">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// 7. Bubble Market Map (공정별 불량 위험도 클러스터)
export const BubbleMarketMapDemo: React.FC = () => {
  const [selectedBubble, setSelectedBubble] = useState<string | null>(null);
  const bubbles = [
    { name: 'CVD증착', x: 25, y: 35, r: 24, col: '#10b981', yield: '99.8%' },
    { name: '노광에칭', x: 60, y: 30, r: 20, col: '#8b5cf6', yield: '99.4%' },
    { name: '모듈본딩', x: 45, y: 70, r: 18, col: '#ef4444', yield: '98.2%' },
    { name: '에이징', x: 80, y: 60, r: 22, col: '#06b6d4', yield: '99.9%' }
  ];
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
        <span>공정별 품질 산포도 클러스터</span>
        <span className="text-emerald-400 text-[10px] font-mono">{selectedBubble || '버블 클릭 상세'}</span>
      </div>
      <div className="relative h-28 bg-slate-950/60 rounded-xl overflow-hidden border border-white/5">
        {bubbles.map(b => (
          <div
            key={b.name}
            onClick={() => setSelectedBubble(\`\${b.name}: 수율 \${b.yield}\`)}
            style={{
              left: \`\${b.x}%\`,
              top: \`\${b.y}%\`,
              width: \`\${b.r * 2}px\`,
              height: \`\${b.r * 2}px\`,
              backgroundColor: \`\${b.col}33\`,
              borderColor: b.col
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg"
          >
            <span className="text-[10px] font-bold text-white leading-none">{b.name}</span>
            <span className="text-[8px] font-mono" style={{ color: b.col }}>{b.yield}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// 8. Funnel Conversion (제조 수율 퍼널)
export const FunnelConversionDemo: React.FC = () => {
  const steps = [
    { label: '1. 웨이퍼 원자재 투입', count: '100,000 EA', pct: '100%', w: '100%', col: 'bg-violet-600' },
    { label: '2. 가공/성형 공정', count: '99,400 EA', pct: '99.4%', w: '85%', col: 'bg-indigo-600' },
    { label: '3. 모듈 조립/검사', count: '98,800 EA', pct: '98.8%', w: '65%', col: 'bg-cyan-600' },
    { label: '4. 최종 양품 출하', count: '98,400 EA', pct: '98.4%', w: '45%', col: 'bg-emerald-500' }
  ];
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>제조 공정 잔존 수율 퍼널</span>
        <span className="text-emerald-400 font-mono text-[10px]">최종 수율 98.4%</span>
      </div>
      <div className="space-y-1.5 pt-1">
        {steps.map(s => (
          <div key={s.label} className="space-y-0.5">
            <div className="flex justify-between text-[10px] text-slate-300">
              <span>{s.label}</span>
              <span className="font-mono text-slate-400">{s.count} ({s.pct})</span>
            </div>
            <div className="h-2.5 bg-slate-950 rounded-full overflow-hidden">
              <div className={\`h-full rounded-full \${s.col}\`} style={{ width: s.w }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 9. Treemap Portfolio (품목별 생산 점유율)
export const TreemapPortfolioDemo: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex justify-between text-xs font-bold text-white mb-2">
        <span>품목별 생산 점유 트리맵 (Click)</span>
        <span className="text-violet-400 text-[10px] font-mono">{selected || '품목 선택'}</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 h-24">
        <div onClick={() => setSelected('OLED 65인치: 수율 99.8%')} className="col-span-2 bg-emerald-600/80 hover:bg-emerald-500 rounded-xl p-2 flex flex-col justify-between text-white cursor-pointer transition-colors border border-emerald-400/30">
          <span className="font-bold text-xs">OLED 65" Gen4</span>
          <span className="text-[10px] font-mono font-bold">점유율 45% (수율 99.8%)</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <div onClick={() => setSelected('OLED 55인치: 수율 99.4%')} className="flex-1 bg-emerald-700/80 hover:bg-emerald-600 rounded-lg p-1.5 flex justify-between items-center text-white cursor-pointer text-[10px] font-bold">
            <span>55" Slim</span><span>30%</span>
          </div>
          <div onClick={() => setSelected('OLED 77인치: 수율 98.2%')} className="flex-1 bg-amber-700/80 hover:bg-amber-600 rounded-lg p-1.5 flex justify-between items-center text-white cursor-pointer text-[10px] font-bold">
            <span>77" Ultra</span><span>25%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 10. Speedometer Gauge (설비 가동 부하율)
export const SpeedometerGaugeDemo: React.FC = () => {
  const [val, setVal] = useState(88);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>설비 가동 부하율 (OEE)</span>
        <span className="text-emerald-400 font-mono text-[10px]">{val}% 가동</span>
      </div>
      <div className="relative w-32 h-16 mx-auto overflow-hidden">
        <div className="w-32 h-32 rounded-full border-[10px] border-slate-800 border-t-emerald-500 border-r-teal-500 -rotate-45" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
          <span className="text-sm font-black text-white font-mono">{val}%</span>
          <span className="text-[8px] text-slate-400 block">정상 가동</span>
        </div>
      </div>
      <input type="range" min="0" max="100" value={val} onChange={e => setVal(Number(e.target.value))} className="w-full h-1 bg-slate-800 rounded accent-emerald-500 cursor-pointer" />
    </div>
  );
};

// 11. Waterfall Cashflow (제조 원가 분해 워터폴)
export const WaterfallCashflowDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex justify-between text-xs font-bold text-white mb-2">
        <span>제조 단위 원가 분해 워터폴</span>
        <span className="text-emerald-400 font-mono text-[10px]">Total: $420/EA</span>
      </div>
      <div className="flex items-end justify-between h-24 pt-2 text-[10px] font-mono">
        <div className="flex flex-col items-center gap-1"><div className="w-5 bg-emerald-500 rounded-t h-16" /><span className="text-slate-400">판매가</span></div>
        <div className="flex flex-col items-center gap-1"><div className="w-5 bg-rose-500 rounded-t h-8" /><span className="text-slate-400">원자재</span></div>
        <div className="flex flex-col items-center gap-1"><div className="w-5 bg-rose-500 rounded-t h-6" /><span className="text-slate-400">가공비</span></div>
        <div className="flex flex-col items-center gap-1"><div className="w-5 bg-emerald-500 rounded-t h-12 shadow-[0_0_8px_#10b981]" /><span className="text-emerald-300 font-bold">마진</span></div>
      </div>
    </div>
  );
};

// 12. Sparkline Mini Badge
export const SparklineMiniBadgeDemo: React.FC = () => {
  const [trend, setTrend] = useState<number[]>([98, 99, 97, 100, 99, 102, 101, 104]);
  const updateSpark = () => {
    setTrend(prev => [...prev.slice(1), Math.floor(Math.random() * 8) + 98]);
  };
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl flex items-center justify-between">
      <div>
        <span className="text-slate-400 text-[10px] block">실시간 생산 BPM</span>
        <span className="text-sm font-black text-white font-mono">142 bpm</span>
        <span className="text-[9px] text-emerald-400 block font-bold">+4.2% Peak</span>
      </div>
      <div onClick={updateSpark} className="w-24 h-10 cursor-pointer" title="클릭 시 스파크라인 실시간 갱신">
        <svg viewBox="0 0 100 40" className="w-full h-full">
          <polyline
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            points={trend.map((val, idx) => \`\${idx * 14},\${40 - (val - 95) * 4}\`).join(' ')}
          />
        </svg>
      </div>
    </div>
  );
};
`;

fs.writeFileSync(path.join(__dirname, '../src/components/renderers/ChartRenderers.tsx'), chartRenderers);
console.log('✅ Generated Highcharts/DevExpress level ChartRenderers.tsx');
