import React, { useState } from 'react';
import { 
  Sparkles, Compass, Eye, Shield, Cpu, Zap, BarChart2, Activity,
  Maximize2, Database, TrendingUp, Layers, HelpCircle
} from 'lucide-react';

// =========================================================
// 1. D3 Ridgeline Density Matrix (Multi-Line Cycle Time Wave)
// ==========================================
export const RidgelineDensityDemo: React.FC = () => {
  const [activeCurve, setActiveCurve] = useState<number | null>(null);

  const series = [
    { label: 'Line A (프레스 주조)', peak: 85, color: '#6366f1', base: 40, path: 'M 30,70 C 90,70 120,20 180,20 C 240,20 270,70 370,70 L 370,70 L 30,70 Z' },
    { label: 'Line B (CNC 정밀가공)', peak: 92, color: '#3b82f6', base: 80, path: 'M 30,110 C 110,110 150,55 210,55 C 270,55 310,110 370,110 L 370,110 L 30,110 Z' },
    { label: 'Line C (표면 열처리)', peak: 78, color: '#10b981', base: 120, path: 'M 30,150 C 70,150 110,95 170,95 C 230,95 280,150 370,150 L 370,150 L 30,150 Z' },
    { label: 'Line D (모듈 결합조립)', peak: 96, color: '#f59e0b', base: 160, path: 'M 30,190 C 130,190 170,135 240,135 C 300,135 340,190 370,190 L 370,190 L 30,190 Z' },
  ];

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-indigo-400" />
          <h4 className="text-sm font-bold text-white tracking-wide">공정별 택트타임 릿지라인 밀도 분포 (D3 Ridgeline Joyplot)</h4>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">Cycle Time Joyplot</span>
      </div>

      <div className="relative">
        <svg viewBox="0 0 400 230" className="w-full h-48 bg-slate-950/50 rounded-lg p-2">
          {/* Axis grid */}
          <line x1="30" y1="210" x2="370" y2="210" stroke="#334155" strokeWidth="1.5" />
          <text x="30" y="224" fill="#64748b" fontSize="9">10s (초고속)</text>
          <text x="200" y="224" textAnchor="middle" fill="#64748b" fontSize="9">45s (표준 택트)</text>
          <text x="370" y="224" textAnchor="end" fill="#64748b" fontSize="9">120s (지연)</text>

          {/* Overlapping Joyplot Areas */}
          {series.map((s, idx) => {
            const isHighlight = activeCurve === null || activeCurve === idx;
            return (
              <g 
                key={idx} 
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setActiveCurve(idx)}
                onMouseLeave={() => setActiveCurve(null)}
              >
                {/* Area Fill */}
                <path
                  d={s.path}
                  fill={s.color}
                  fillOpacity={isHighlight ? 0.35 : 0.08}
                  stroke={s.color}
                  strokeWidth={activeCurve === idx ? 3 : 1.8}
                />
                {/* Text Label */}
                <text
                  x="35"
                  y={s.base + 22}
                  fill={isHighlight ? '#f8fafc' : '#64748b'}
                  fontSize="10"
                  fontWeight="bold"
                >
                  {s.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
        {series.map((s, i) => (
          <div
            key={i}
            onMouseEnter={() => setActiveCurve(i)}
            onMouseLeave={() => setActiveCurve(null)}
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
              activeCurve === i
                ? 'bg-slate-800 border-indigo-400'
                : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800'
            }`}
          >
            <div className="flex items-center gap-1.5 font-semibold text-slate-200">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
              <span>{s.label.split(' ')[0]}</span>
            </div>
            <div className="text-[10px] text-indigo-300 font-mono mt-0.5">정상 수렴도 {s.peak}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// =========================================================
// 2. Correlation Matrix Heatmap with Coefficients (품질 상관 매트릭스)
// =========================================================
export const CorrelationMatrixDemo: React.FC = () => {
  const [hoverCell, setHoverCell] = useState<{ r: number; c: number } | null>(null);

  const variables = ['금형온도', '사출압', '수지유량', '냉각시간', '인장강도', '치수정밀도'];
  const matrix = [
    [1.00,  0.78,  0.62, -0.45,  0.81,  0.89],
    [0.78,  1.00,  0.85, -0.61,  0.72,  0.68],
    [0.62,  0.85,  1.00, -0.38,  0.59,  0.51],
    [-0.45, -0.61, -0.38,  1.00, -0.74, -0.82],
    [0.81,  0.72,  0.59, -0.74,  1.00,  0.94],
    [0.89,  0.68,  0.51, -0.82,  0.94,  1.00],
  ];

  const getColor = (val: number) => {
    if (val === 1) return '#3b82f6';
    if (val > 0.7) return '#10b981';
    if (val > 0.4) return '#06b6d4';
    if (val > 0) return '#64748b';
    if (val > -0.6) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-400" />
          <h4 className="text-sm font-bold text-white tracking-wide">품질 인자 피어슨 상관계수 매트릭스 (Pearson Correlation Heatmap)</h4>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">r: -1.0 ~ +1.0</span>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[380px] flex flex-col items-center">
          <div className="grid grid-cols-7 gap-1 text-[11px] font-bold text-slate-300 text-center mb-1">
            <div className="w-16"></div>
            {variables.map((v, i) => (
              <div key={i} className="w-12 text-[10px] truncate text-slate-400" title={v}>{v}</div>
            ))}
          </div>

          {matrix.map((row, rIdx) => (
            <div key={rIdx} className="grid grid-cols-7 gap-1 items-center mb-1">
              <div className="w-16 text-[10px] font-semibold text-slate-400 text-right pr-2 truncate">{variables[rIdx]}</div>
              {row.map((val, cIdx) => {
                const isHovered = hoverCell?.r === rIdx && hoverCell?.c === cIdx;
                return (
                  <div
                    key={cIdx}
                    onMouseEnter={() => setHoverCell({ r: rIdx, c: cIdx })}
                    onMouseLeave={() => setHoverCell(null)}
                    style={{ backgroundColor: getColor(val) }}
                    className={`w-12 h-9 rounded flex items-center justify-center font-mono text-[11px] font-bold transition-all cursor-pointer ${
                      isHovered ? 'ring-2 ring-white scale-110 z-10 shadow-lg text-white' : 'text-slate-900 opacity-90 hover:opacity-100'
                    }`}
                  >
                    {val.toFixed(2)}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {hoverCell && (
        <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs flex justify-between items-center">
          <span className="text-slate-300">
            상관관계: <strong className="text-emerald-400">{variables[hoverCell.r]}</strong> ↔ <strong className="text-cyan-400">{variables[hoverCell.c]}</strong>
          </span>
          <span className="font-mono font-bold text-white bg-slate-900 px-2 py-0.5 rounded">
            r = {matrix[hoverCell.r][hoverCell.c]}
          </span>
        </div>
      )}
    </div>
  );
};

// =========================================================
// 3. Multi-Level Circular Sunburst Defect Tree (다층 원형 선버스트)
// =========================================================
export const SunburstDefectTreeDemo: React.FC = () => {
  const [hoveredTier, setHoveredTier] = useState<string>('전체 결함 분석');

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-fuchsia-400" />
          <h4 className="text-sm font-bold text-white tracking-wide">다계층 결함 분류 원형 선버스트 (Multi-Tier Sunburst Breakdown)</h4>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 font-mono">3 Tiers</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-7 flex justify-center">
          <svg viewBox="0 0 340 340" className="w-full max-w-[280px] h-auto drop-shadow-[0_0_20px_rgba(217,70,239,0.15)]">
            {/* Center Root */}
            <circle cx="170" cy="170" r="35" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" className="cursor-pointer" onMouseEnter={() => setHoveredTier('루트: 전체 공정 결함 (100%)')} />
            <text x="170" y="174" textAnchor="middle" fill="#c7d2fe" fontSize="10" fontWeight="bold">Total PPM</text>

            {/* Tier 1 Arcs (3 Sectors) */}
            {/* Sector 1: 기구결함 (180 deg) */}
            <path d="M 170,115 A 55 55 0 0 1 225,170 L 255,170 A 85 85 0 0 0 170,85 Z" fill="#3b82f6" opacity="0.85" className="cursor-pointer hover:opacity-100 transition-all" onMouseEnter={() => setHoveredTier('Tier 1: 기구 치수 결함 (48%)')} />
            <path d="M 225,170 A 55 55 0 0 1 170,225 L 170,255 A 85 85 0 0 0 255,170 Z" fill="#10b981" opacity="0.85" className="cursor-pointer hover:opacity-100 transition-all" onMouseEnter={() => setHoveredTier('Tier 1: 표면 외관 결함 (32%)')} />
            <path d="M 170,225 A 55 55 0 0 1 170,115 L 170,85 A 85 85 0 0 0 170,255 Z" fill="#f59e0b" opacity="0.85" className="cursor-pointer hover:opacity-100 transition-all" onMouseEnter={() => setHoveredTier('Tier 1: 전장 전기 결함 (20%)')} />

            {/* Tier 2 Arcs Outer Ring (Leaf defects) */}
            <path d="M 170,80 A 90 90 0 0 1 235,105 L 260,85 A 125 125 0 0 0 170,45 Z" fill="#60a5fa" opacity="0.7" className="cursor-pointer hover:opacity-100" onMouseEnter={() => setHoveredTier('Tier 2: 사출 휨/변형 (28%)')} />
            <path d="M 235,105 A 90 90 0 0 1 260,170 L 295,170 A 125 125 0 0 0 260,85 Z" fill="#93c5fd" opacity="0.7" className="cursor-pointer hover:opacity-100" onMouseEnter={() => setHoveredTier('Tier 2: 홀 가공 편심 (20%)')} />
            <path d="M 260,170 A 90 90 0 0 1 235,235 L 260,255 A 125 125 0 0 0 295,170 Z" fill="#34d399" opacity="0.7" className="cursor-pointer hover:opacity-100" onMouseEnter={() => setHoveredTier('Tier 2: 미세 스크래치 (18%)')} />
            <path d="M 235,235 A 90 90 0 0 1 170,260 L 170,295 A 125 125 0 0 0 260,255 Z" fill="#6ee7b7" opacity="0.7" className="cursor-pointer hover:opacity-100" onMouseEnter={() => setHoveredTier('Tier 2: 도장 기포/이물 (14%)')} />
            <path d="M 170,260 A 90 90 0 0 1 170,80 L 170,45 A 125 125 0 0 0 170,295 Z" fill="#fcd34d" opacity="0.7" className="cursor-pointer hover:opacity-100" onMouseEnter={() => setHoveredTier('Tier 2: 납땜 불량 / 단선 (20%)')} />
          </svg>
        </div>

        <div className="md:col-span-5 space-y-3">
          <div className="p-3 rounded-lg bg-slate-800/80 border border-fuchsia-500/30">
            <div className="text-[10px] text-fuchsia-400 font-mono uppercase tracking-wider">SELECTED LAYER DETAILS</div>
            <div className="text-sm font-bold text-white mt-1">{hoveredTier}</div>
          </div>
          <div className="text-xs text-slate-400 space-y-1">
            <p>• 안쪽 계층: 대분류 공정군 결함</p>
            <p>• 바깥쪽 계층: 구체적 불량 사유 드릴다운</p>
            <p>• 각도 비례: 누적 불량 점유율 (PPM Weight)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================
// 4. Hexagonal Honeycomb Equipment Mesh (허니콤 설비 가동 격자)
// =========================================================
export const HoneycombEquipmentMeshDemo: React.FC = () => {
  const [selectedCell, setSelectedCell] = useState<string | null>(null);

  const cells = [
    { id: 'H-01', name: 'CNC-1호기', state: 'online', temp: '42°C', load: '88%' },
    { id: 'H-02', name: 'CNC-2호기', state: 'online', temp: '45°C', load: '92%' },
    { id: 'H-03', name: '프레스-A', state: 'warning', temp: '68°C', load: '98%' },
    { id: 'H-04', name: '프레스-B', state: 'online', temp: '41°C', load: '75%' },
    { id: 'H-05', name: '로봇용접-1', state: 'offline', temp: '24°C', load: '0%' },
    { id: 'H-06', name: '로봇용접-2', state: 'online', temp: '48°C', load: '84%' },
    { id: 'H-07', name: 'AI검사-1', state: 'online', temp: '36°C', load: '95%' },
    { id: 'H-08', name: 'AI검사-2', state: 'online', temp: '38°C', load: '91%' },
  ];

  const getColor = (state: string) => {
    if (state === 'online') return 'border-emerald-500/60 bg-emerald-950/40 text-emerald-400';
    if (state === 'warning') return 'border-amber-500/60 bg-amber-950/40 text-amber-400';
    return 'border-rose-500/60 bg-rose-950/40 text-rose-400';
  };

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400" />
          <h4 className="text-sm font-bold text-white tracking-wide">육각 허니콤 설비 셀 메쉬 (Hexagonal Equipment Mesh)</h4>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">Hex Mesh 8-Nodes</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {cells.map((cell) => {
          const isSelected = selectedCell === cell.id;
          return (
            <div
              key={cell.id}
              onClick={() => setSelectedCell(cell.id)}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${getColor(cell.state)} ${
                isSelected ? 'ring-2 ring-white scale-105 shadow-xl' : 'hover:scale-[1.02]'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-white font-bold">{cell.id}</span>
                <div className={`w-2 h-2 rounded-full ${cell.state === 'online' ? 'bg-emerald-400 animate-pulse' : cell.state === 'warning' ? 'bg-amber-400' : 'bg-rose-400'}`} />
              </div>
              <div className="text-xs font-bold text-slate-100">{cell.name}</div>
              <div className="mt-2 pt-2 border-t border-white/10 flex justify-between text-[10px] font-mono">
                <span className="text-slate-400">{cell.temp}</span>
                <span className="font-bold">{cell.load} 부하</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
