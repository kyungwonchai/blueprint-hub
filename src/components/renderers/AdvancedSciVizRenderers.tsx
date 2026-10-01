import React, { useState, useEffect } from 'react';
import { 
  Activity, Layers, GitBranch, Wind, Grid, Shuffle, 
  RotateCw, ZoomIn, Play, Pause, ChevronRight, Eye, ShieldAlert, Cpu
} from 'lucide-react';

// ==========================================
// 1. D3 Chord Diagram Demo (Cross-Plant Material Flow)
// ==========================================
export const ChordDiagramDemo: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const nodes = [
    { name: '공정 A (주조/단조)', color: '#3b82f6', amount: '4,280 T' },
    { name: '공정 B (정밀가공)', color: '#10b981', amount: '3,850 T' },
    { name: '공정 C (표면열처리)', color: '#f59e0b', amount: '2,920 T' },
    { name: '공정 D (모듈조립)', color: '#8b5cf6', amount: '3,410 T' },
    { name: '공정 E (검사출하)', color: '#ec4899', amount: '3,200 T' },
  ];

  // Ribbons between arcs (SVG Bézier curves)
  const ribbons = [
    { from: 0, to: 1, flow: '1,450 T/일', path: 'M 150,40 Q 200,200 290,110 Q 200,180 180,45 Z', color: '#3b82f6' },
    { from: 1, to: 2, flow: '1,120 T/일', path: 'M 310,130 Q 200,200 270,290 Q 210,210 300,160 Z', color: '#10b981' },
    { from: 2, to: 3, flow: '980 T/일', path: 'M 250,310 Q 200,200 130,290 Q 180,210 230,300 Z', color: '#f59e0b' },
    { from: 3, to: 4, flow: '1,320 T/일', path: 'M 110,270 Q 200,200 90,130 Q 170,190 120,240 Z', color: '#8b5cf6' },
    { from: 0, to: 3, flow: '850 T/일', path: 'M 170,40 Q 200,200 100,250 Q 180,180 190,50 Z', color: '#3b82f6' },
    { from: 1, to: 4, flow: '740 T/일', path: 'M 290,140 Q 200,200 100,150 Q 190,190 280,160 Z', color: '#10b981' },
  ];

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-400" />
          <h4 className="text-sm font-bold text-white tracking-wide">공정간 상호 원자재 이동 코드 다이어그램 (D3 Chord Diagram)</h4>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">Matrix Flow 5x5</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-7 flex justify-center relative">
          <svg viewBox="0 0 400 360" className="w-full max-w-[340px] h-auto drop-shadow-[0_0_15px_rgba(99,102,241,0.15)]">
            {/* Background Outer Ring */}
            <circle cx="200" cy="180" r="140" fill="none" stroke="#1e293b" strokeWidth="20" />

            {/* Arcs for 5 Nodes */}
            <path d="M 130,48 A 140 140 0 0 1 270,48" fill="none" stroke="#3b82f6" strokeWidth="18" strokeLinecap="round" className="cursor-pointer hover:stroke-blue-400 transition-colors" onMouseEnter={() => setActiveNode(0)} />
            <path d="M 285,65 A 140 140 0 0 1 338,195" fill="none" stroke="#10b981" strokeWidth="18" strokeLinecap="round" className="cursor-pointer hover:stroke-emerald-400 transition-colors" onMouseEnter={() => setActiveNode(1)} />
            <path d="M 325,225 A 140 140 0 0 1 200,320" fill="none" stroke="#f59e0b" strokeWidth="18" strokeLinecap="round" className="cursor-pointer hover:stroke-amber-400 transition-colors" onMouseEnter={() => setActiveNode(2)} />
            <path d="M 175,320 A 140 140 0 0 1 65,215" fill="none" stroke="#8b5cf6" strokeWidth="18" strokeLinecap="round" className="cursor-pointer hover:stroke-purple-400 transition-colors" onMouseEnter={() => setActiveNode(3)} />
            <path d="M 62,185 A 140 140 0 0 1 115,58" fill="none" stroke="#ec4899" strokeWidth="18" strokeLinecap="round" className="cursor-pointer hover:stroke-pink-400 transition-colors" onMouseEnter={() => setActiveNode(4)} />

            {/* Ribbons */}
            {ribbons.map((rib, idx) => {
              const isHighlight = activeNode === null || rib.from === activeNode || rib.to === activeNode;
              return (
                <path
                  key={idx}
                  d={rib.path}
                  fill={rib.color}
                  opacity={isHighlight ? 0.45 : 0.08}
                  className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                />
              );
            })}

            {/* Center Label */}
            <circle cx="200" cy="180" r="32" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <text x="200" y="177" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">총 유동량</text>
            <text x="200" y="193" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="bold" fontFamily="sans-serif">17.6k T</text>
          </svg>
        </div>

        <div className="md:col-span-5 space-y-2 text-xs">
          <div className="text-[11px] text-slate-400 mb-2 font-mono">HOVER OVER NODE TO HIGHLIGHT FLOWS:</div>
          {nodes.map((n, i) => (
            <div 
              key={i}
              onMouseEnter={() => setActiveNode(i)}
              onMouseLeave={() => setActiveNode(null)}
              className={`p-2 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                activeNode === i 
                  ? 'bg-slate-800/90 border-indigo-500 shadow-md scale-[1.02]' 
                  : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/70'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: n.color }} />
                <span className="font-semibold text-slate-200">{n.name}</span>
              </div>
              <span className="font-mono text-slate-400">{n.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. Violin Plot (Production Batch Tolerance Distribution)
// ==========================================
export const ViolinDistributionPlotDemo: React.FC = () => {
  const [selectedShift, setSelectedShift] = useState<'day' | 'night'>('day');
  
  const lots = [
    { name: '사출 Lot-101', median: '0.012mm', iqr: '±0.003', points: [12, 18, 45, 80, 120, 95, 60, 30, 10], color: '#3b82f6' },
    { name: '프레스 Lot-204', median: '0.008mm', iqr: '±0.002', points: [5, 22, 60, 130, 140, 85, 40, 15, 5], color: '#10b981' },
    { name: 'CNC가공 Lot-309', median: '0.019mm', iqr: '±0.006', points: [25, 40, 70, 90, 85, 75, 55, 35, 20], color: '#f59e0b' },
    { name: '연마 Lot-412', median: '0.004mm', iqr: '±0.001', points: [2, 10, 35, 110, 160, 120, 30, 8, 2], color: '#ec4899' },
  ];

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-emerald-400" />
          <h4 className="text-sm font-bold text-white tracking-wide">공정별 치수 편차 바이올린 플롯 (Kernel Density Violin Plot)</h4>
        </div>
        <div className="flex bg-slate-800 p-0.5 rounded border border-slate-700 text-xs">
          <button 
            onClick={() => setSelectedShift('day')} 
            className={`px-2.5 py-1 rounded font-medium transition-all ${selectedShift === 'day' ? 'bg-emerald-500 text-black shadow' : 'text-slate-400 hover:text-white'}`}
          >
            주간 조
          </button>
          <button 
            onClick={() => setSelectedShift('night')} 
            className={`px-2.5 py-1 rounded font-medium transition-all ${selectedShift === 'night' ? 'bg-emerald-500 text-black shadow' : 'text-slate-400 hover:text-white'}`}
          >
            야간 조
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {lots.map((lot, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700/60 rounded-lg p-3 flex flex-col items-center">
            <div className="text-xs font-bold text-slate-200 mb-1">{lot.name}</div>
            <div className="text-[10px] text-slate-400 font-mono mb-2">중앙값: {lot.median}</div>

            {/* Violin Shape SVG */}
            <svg viewBox="0 0 100 160" className="w-24 h-36 my-1 overflow-visible">
              {/* Tolerance Limit Lines */}
              <line x1="10" y1="20" x2="90" y2="20" stroke="#ef4444" strokeDasharray="3,3" strokeWidth="1" />
              <text x="92" y="23" fill="#ef4444" fontSize="8">USL</text>
              <line x1="10" y1="140" x2="90" y2="140" stroke="#ef4444" strokeDasharray="3,3" strokeWidth="1" />
              <text x="92" y="143" fill="#ef4444" fontSize="8">LSL</text>

              {/* Center Axis & Boxplot Core */}
              <line x1="50" y1="30" x2="50" y2="130" stroke="#64748b" strokeWidth="2" />
              <rect x="46" y="65" width="8" height="30" fill="#0f172a" stroke={lot.color} strokeWidth="2" rx="2" />
              <circle cx="50" cy="80" r="3" fill="#ffffff" />

              {/* Symmetrical Kernel Density Curves */}
              <path
                d={`M 50,30 
                    C ${50 - lot.points[0]*0.2},40 ${50 - lot.points[2]*0.25},55 ${50 - lot.points[4]*0.25},80 
                    C ${50 - lot.points[6]*0.25},105 ${50 - lot.points[8]*0.2},120 50,130 
                    C ${50 + lot.points[8]*0.2},120 ${50 + lot.points[6]*0.25},105 ${50 + lot.points[4]*0.25},80 
                    C ${50 + lot.points[2]*0.25},55 ${50 + lot.points[0]*0.2},40 50,30 Z`}
                fill={lot.color}
                fillOpacity="0.28"
                stroke={lot.color}
                strokeWidth="1.5"
                className="hover:fill-opacity-50 transition-all cursor-pointer"
              />
            </svg>

            <div className="w-full mt-2 pt-2 border-t border-slate-700/50 flex justify-between text-[10px]">
              <span className="text-slate-400">사분위수 IQR</span>
              <span className="font-mono text-emerald-400 font-bold">{lot.iqr}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 3. Parallel Coordinates Plot (High-Dimensional Sensor Analytics)
// ==========================================
export const ParallelCoordinatesDemo: React.FC = () => {
  const [filterHighlight, setFilterHighlight] = useState<string | null>(null);

  const batches = [
    { id: 'Batch-A01', temp: 85, pressure: 4.2, rpm: 3200, yieldRate: 98.4, status: 'Normal' },
    { id: 'Batch-A02', temp: 92, pressure: 4.8, rpm: 3450, yieldRate: 99.1, status: 'Normal' },
    { id: 'Batch-A03', temp: 118, pressure: 5.6, rpm: 4100, yieldRate: 91.2, status: 'Warning' },
    { id: 'Batch-A04', temp: 78, pressure: 3.9, rpm: 2900, yieldRate: 97.8, status: 'Normal' },
    { id: 'Batch-A05', temp: 135, pressure: 6.2, rpm: 4600, yieldRate: 84.5, status: 'Critical' },
    { id: 'Batch-A06', temp: 88, pressure: 4.3, rpm: 3300, yieldRate: 98.9, status: 'Normal' },
  ];

  // Axis mapping (x: 0, 100, 200, 300)
  // Temp: 60~140, Pressure: 3~7, RPM: 2500~5000, Yield: 80~100
  const getY = (val: number, min: number, max: number) => 180 - ((val - min) / (max - min)) * 140;

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <GitBranch className="w-5 h-5 text-cyan-400" />
          <h4 className="text-sm font-bold text-white tracking-wide">다차원 공정 변수 평행 좌표계 (Parallel Coordinates Plot)</h4>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">4-Dimensions</span>
      </div>

      <div className="relative overflow-x-auto">
        <svg viewBox="0 0 500 220" className="w-full min-w-[450px] h-48">
          {/* 4 Vertical Axes */}
          {[
            { label: '챔버온도 (°C)', min: 60, max: 140, x: 50 },
            { label: '사출압력 (bar)', min: 3.0, max: 7.0, x: 170 },
            { label: '스크류 RPM', min: 2500, max: 5000, x: 290 },
            { label: '최종수율 (%)', min: 80, max: 100, x: 410 },
          ].map((axis, i) => (
            <g key={i}>
              <line x1={axis.x} y1="30" x2={axis.x} y2="180" stroke="#475569" strokeWidth="2" />
              <text x={axis.x} y="20" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">{axis.label}</text>
              <text x={axis.x} y="195" textAnchor="middle" fill="#64748b" fontSize="9">{axis.min}</text>
              <text x={axis.x} y="32" textAnchor="middle" fill="#64748b" fontSize="9">{axis.max}</text>
            </g>
          ))}

          {/* Lines for each Batch */}
          {batches.map((b, idx) => {
            const y1 = getY(b.temp, 60, 140);
            const y2 = getY(b.pressure, 3.0, 7.0);
            const y3 = getY(b.rpm, 2500, 5000);
            const y4 = getY(b.yieldRate, 80, 100);

            const isWarning = b.status === 'Warning';
            const isCritical = b.status === 'Critical';
            const color = isCritical ? '#ef4444' : isWarning ? '#f59e0b' : '#06b6d4';
            const isTarget = filterHighlight === null || filterHighlight === b.id;

            return (
              <polyline
                key={idx}
                points={`50,${y1} 170,${y2} 290,${y3} 410,${y4}`}
                fill="none"
                stroke={color}
                strokeWidth={filterHighlight === b.id ? 3.5 : isTarget ? 2 : 0.6}
                opacity={isTarget ? 0.9 : 0.15}
                className="cursor-pointer transition-all duration-200 hover:stroke-white"
                onMouseEnter={() => setFilterHighlight(b.id)}
                onMouseLeave={() => setFilterHighlight(null)}
              />
            );
          })}
        </svg>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-xs">
        {batches.map((b) => (
          <div
            key={b.id}
            onMouseEnter={() => setFilterHighlight(b.id)}
            onMouseLeave={() => setFilterHighlight(null)}
            className={`p-2 rounded border cursor-pointer transition-all ${
              filterHighlight === b.id
                ? 'bg-cyan-950/80 border-cyan-400'
                : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800'
            }`}
          >
            <div className="font-bold text-slate-200">{b.id}</div>
            <div className={`text-[10px] font-mono mt-0.5 ${
              b.status === 'Critical' ? 'text-red-400' : b.status === 'Warning' ? 'text-amber-400' : 'text-cyan-400'
            }`}>
              수율: {b.yieldRate}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 4. Parliament Item Distribution Grid (Facility Seat/Sensor Map)
// ==========================================
export const ParliamentGridDemo: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  // Generate Semi-Circle Arc Points (100 Nodes in 4 Concentric Semi-Circles)
  const rows = [
    { radius: 60, count: 18 },
    { radius: 85, count: 24 },
    { radius: 110, count: 30 },
    { radius: 135, count: 36 },
  ];

  const categories = [
    { name: '정상 가동 (Optimal)', color: '#10b981', count: 72 },
    { name: '경고/정비필요 (Warning)', color: '#f59e0b', count: 24 },
    { name: '오프라인/에러 (Fault)', color: '#ef4444', count: 12 },
  ];

  let nodeIndex = 0;
  const nodes: { x: number; y: number; group: number }[] = [];

  rows.forEach((row) => {
    for (let i = 0; i < row.count; i++) {
      const angle = Math.PI - (i / (row.count - 1)) * Math.PI;
      const x = 200 + row.radius * Math.cos(angle);
      const y = 160 - row.radius * Math.sin(angle);
      const group = nodeIndex < 72 ? 0 : nodeIndex < 96 ? 1 : 2;
      nodes.push({ x, y, group });
      nodeIndex++;
    }
  });

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Wind className="w-5 h-5 text-amber-400" />
          <h4 className="text-sm font-bold text-white tracking-wide">공장 설비 반원형 점유 분포도 (Parliament Item Arc Chart)</h4>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">108 Active Units</span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <svg viewBox="0 0 400 180" className="w-full max-w-[380px] h-44 drop-shadow-[0_0_15px_rgba(245,158,11,0.15)]">
          {nodes.map((n, idx) => {
            const cat = categories[n.group];
            const isDimmed = activeGroup !== null && activeGroup !== cat.name;
            return (
              <circle
                key={idx}
                cx={n.x}
                cy={n.y}
                r="4.5"
                fill={cat.color}
                opacity={isDimmed ? 0.2 : 0.9}
                className="transition-all duration-200 hover:r-6 hover:brightness-125 cursor-pointer"
              />
            );
          })}
          <text x="200" y="150" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">설비 총 108대 가동 현황</text>
        </svg>

        <div className="flex flex-wrap gap-4 mt-2 justify-center">
          {categories.map((c, i) => (
            <button
              key={i}
              onMouseEnter={() => setActiveGroup(c.name)}
              onMouseLeave={() => setActiveGroup(null)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs transition-all ${
                activeGroup === c.name
                  ? 'bg-slate-800 border-white text-white'
                  : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
              <span>{c.name}</span>
              <span className="font-mono font-bold ml-1 text-slate-400">({c.count})</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. Dependency Wheel (BOM Component Dependency Hub)
// ==========================================
export const DependencyWheelDemo: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<number | null>(null);

  const parts = [
    { name: 'ECU 제어보드', color: '#6366f1' },
    { name: '서보 액추에이터', color: '#ec4899' },
    { name: 'LiDAR 센서헤드', color: '#14b8a6' },
    { name: '고출력 BLDC 모터', color: '#f59e0b' },
    { name: '하우징 프레임', color: '#3b82f6' },
    { name: '방열 방수 씰', color: '#84cc16' },
  ];

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Shuffle className="w-5 h-5 text-purple-400" />
          <h4 className="text-sm font-bold text-white tracking-wide">BOM 부품 간 결합 종속성 휠 (BOM Dependency Wheel)</h4>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">6 Subsystems</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-7 flex justify-center">
          <svg viewBox="0 0 360 360" className="w-full max-w-[300px] h-auto">
            {/* Outer Circular Ring Segments */}
            {parts.map((p, idx) => {
              const startAngle = (idx * 60) * (Math.PI / 180);
              const endAngle = ((idx + 1) * 60 - 4) * (Math.PI / 180);
              const r = 140;
              const x1 = 180 + r * Math.cos(startAngle);
              const y1 = 180 + r * Math.sin(startAngle);
              const x2 = 180 + r * Math.cos(endAngle);
              const y2 = 180 + r * Math.sin(endAngle);

              return (
                <path
                  key={idx}
                  d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
                  stroke={p.color}
                  strokeWidth="16"
                  fill="none"
                  strokeLinecap="round"
                  className="cursor-pointer hover:stroke-white transition-all"
                  onMouseEnter={() => setActiveSegment(idx)}
                  onMouseLeave={() => setActiveSegment(null)}
                />
              );
            })}

            {/* Dependency Chords */}
            <path d="M 280,180 Q 180,180 80,180" stroke="#6366f1" strokeWidth="2.5" fill="none" opacity={activeSegment === null || activeSegment === 0 || activeSegment === 3 ? 0.7 : 0.1} />
            <path d="M 240,260 Q 180,180 120,100" stroke="#ec4899" strokeWidth="2" fill="none" opacity={activeSegment === null || activeSegment === 1 || activeSegment === 4 ? 0.7 : 0.1} />
            <path d="M 120,260 Q 180,180 240,100" stroke="#14b8a6" strokeWidth="2" fill="none" opacity={activeSegment === null || activeSegment === 2 || activeSegment === 5 ? 0.7 : 0.1} />
            <path d="M 280,180 Q 180,180 120,260" stroke="#f59e0b" strokeWidth="1.5" fill="none" opacity={activeSegment === null || activeSegment === 0 || activeSegment === 2 ? 0.7 : 0.1} />

            <circle cx="180" cy="180" r="28" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <text x="180" y="184" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="bold">BOM 6종</text>
          </svg>
        </div>

        <div className="md:col-span-5 space-y-2">
          {parts.map((p, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveSegment(idx)}
              onMouseLeave={() => setActiveSegment(null)}
              className={`p-2 rounded-lg border text-xs flex items-center justify-between cursor-pointer transition-all ${
                activeSegment === idx
                  ? 'bg-slate-800 border-indigo-400 scale-[1.02]'
                  : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                <span className="text-slate-200 font-medium">{p.name}</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 6. Interactive Network Force Topology
// ==========================================
export const NetworkTopologyDemo: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = [
    { id: 'PLC-Master', x: 180, y: 110, role: 'Main Gateway', color: '#6366f1', radius: 16 },
    { id: 'Robot-Arm-1', x: 70, y: 60, role: 'Welding Cell', color: '#10b981', radius: 12 },
    { id: 'Robot-Arm-2', x: 290, y: 60, role: 'Assembly Cell', color: '#10b981', radius: 12 },
    { id: 'Vision-Cam-A', x: 60, y: 170, role: 'AI Inspection', color: '#f59e0b', radius: 12 },
    { id: 'Vision-Cam-B', x: 300, y: 170, role: 'AI Inspection', color: '#f59e0b', radius: 12 },
    { id: 'AGV-Fleet', x: 180, y: 220, role: 'Logistics Core', color: '#ec4899', radius: 14 },
  ];

  const links = [
    { from: 'PLC-Master', to: 'Robot-Arm-1' },
    { from: 'PLC-Master', to: 'Robot-Arm-2' },
    { from: 'PLC-Master', to: 'Vision-Cam-A' },
    { from: 'PLC-Master', to: 'Vision-Cam-B' },
    { from: 'PLC-Master', to: 'AGV-Fleet' },
    { from: 'Robot-Arm-1', to: 'Vision-Cam-A' },
    { from: 'Robot-Arm-2', to: 'Vision-Cam-B' },
  ];

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-indigo-400" />
          <h4 className="text-sm font-bold text-white tracking-wide">공장 OT 센서 네트워크 토폴로지 (Interactive Network Force Graph)</h4>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">OPC-UA Topology</span>
      </div>

      <div className="relative">
        <svg viewBox="0 0 360 260" className="w-full h-56 bg-slate-950/60 rounded-lg border border-slate-800">
          {/* Links */}
          {links.map((link, idx) => {
            const n1 = nodes.find(n => n.id === link.from)!;
            const n2 = nodes.find(n => n.id === link.to)!;
            const isHighlight = hoveredNode === link.from || hoveredNode === link.to;

            return (
              <line
                key={idx}
                x1={n1.x}
                y1={n1.y}
                x2={n2.x}
                y2={n2.y}
                stroke={isHighlight ? '#a5b4fc' : '#334155'}
                strokeWidth={isHighlight ? 2.5 : 1.2}
                strokeDasharray={isHighlight ? '4,4' : 'none'}
                className="transition-all duration-300"
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const isHover = hoveredNode === node.id;
            return (
              <g 
                key={node.id} 
                className="cursor-pointer"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isHover ? node.radius + 3 : node.radius}
                  fill={node.color}
                  opacity="0.9"
                  className="transition-all duration-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                />
                <circle cx={node.x} cy={node.y} r={node.radius * 0.4} fill="#0f172a" />
                <text
                  x={node.x}
                  y={node.y + node.radius + 12}
                  textAnchor="middle"
                  fill={isHover ? '#ffffff' : '#94a3b8'}
                  fontSize="9"
                  fontWeight={isHover ? 'bold' : 'normal'}
                >
                  {node.id}
                </text>
              </g>
            );
          })}
        </svg>

        {hoveredNode && (
          <div className="absolute top-2 right-2 bg-slate-800/90 border border-slate-600 rounded-lg px-3 py-1.5 text-xs text-slate-200 shadow-xl backdrop-blur-sm">
            <div className="font-bold text-indigo-300">{hoveredNode}</div>
            <div className="text-[10px] text-slate-400">
              역할: {nodes.find(n => n.id === hoveredNode)?.role}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
