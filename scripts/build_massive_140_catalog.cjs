const fs = require('fs');
const path = require('path');

// 1. New Exotic Exotic Chart Renderers: Marimekko, Hexbin, Dendrogram, Ternary, Bump, Polar Area
const exoticBatch2 = `
// 17. Marimekko Mosaic Plot
export const MarimekkoMosaicDemo: React.FC = () => {
  const [selected, setSelected] = useState('스마트폰 OLED (40% x 60%)');
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between items-center text-xs font-bold text-white">
        <span>마리메꼬 모자이크 차트 (Marimekko Mosaic)</span>
        <span className="text-violet-400 font-mono text-[10px]">{selected}</span>
      </div>
      <div className="h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 flex gap-1">
        {/* Col 1 (Width 60%) */}
        <div className="flex-1 flex flex-col gap-1 h-full" style={{ flex: '6' }}>
          <div
            onClick={() => setSelected('스마트폰 OLED (60% 시장 x 70% 점유)')}
            className="bg-violet-600/80 hover:bg-violet-500 rounded p-1 text-[9px] font-bold text-white flex flex-col justify-between cursor-pointer"
            style={{ height: '70%' }}
          >
            <span>스마트폰 OLED</span><span>70%</span>
          </div>
          <div
            onClick={() => setSelected('스마트폰 LCD (60% 시장 x 30% 점유)')}
            className="bg-violet-800/80 hover:bg-violet-700 rounded p-1 text-[9px] text-violet-200 flex flex-col justify-between cursor-pointer"
            style={{ height: '30%' }}
          >
            <span>LCD</span><span>30%</span>
          </div>
        </div>
        {/* Col 2 (Width 40%) */}
        <div className="flex-1 flex flex-col gap-1 h-full" style={{ flex: '4' }}>
          <div
            onClick={() => setSelected('TV/대형 디스플레이 (40% 시장 x 50% 점유)')}
            className="bg-cyan-600/80 hover:bg-cyan-500 rounded p-1 text-[9px] font-bold text-white flex flex-col justify-between cursor-pointer"
            style={{ height: '50%' }}
          >
            <span>TV 대형 OLED</span><span>50%</span>
          </div>
          <div
            onClick={() => setSelected('TV/기타 패널 (40% 시장 x 50% 점유)')}
            className="bg-cyan-800/80 hover:bg-cyan-700 rounded p-1 text-[9px] text-cyan-200 flex flex-col justify-between cursor-pointer"
            style={{ height: '50%' }}
          >
            <span>기타 패널</span><span>50%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 18. Hexbin Density Scatter
export const HexbinDensityDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between items-center text-xs font-bold text-white">
        <span>헥스빈 육각 격자 밀도 분포 (Hexbin 2D Density)</span>
        <span className="text-emerald-400 font-mono text-[10px]">10,000 Pts</span>
      </div>
      <div className="h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 relative flex items-center justify-center">
        <svg viewBox="0 0 240 80" className="w-full h-full">
          {[
            { cx: 40, cy: 30, col: '#10b981', count: 850 },
            { cx: 70, cy: 30, col: '#059669', count: 420 },
            { cx: 55, cy: 55, col: '#047857', count: 310 },
            { cx: 100, cy: 30, col: '#8b5cf6', count: 940 },
            { cx: 130, cy: 30, col: '#7c3aed', count: 620 },
            { cx: 115, cy: 55, col: '#6d28d9', count: 410 },
            { cx: 160, cy: 30, col: '#06b6d4', count: 780 },
            { cx: 190, cy: 30, col: '#0891b2', count: 520 },
            { cx: 175, cy: 55, col: '#0e7490', count: 340 }
          ].map((h, i) => (
            <g key={i} className="hover:opacity-80 cursor-pointer">
              <polygon
                points={\`\${h.cx}, \${h.cy - 14} \${h.cx + 12}, \${h.cy - 7} \${h.cx + 12}, \${h.cy + 7} \${h.cx}, \${h.cy + 14} \${h.cx - 12}, \${h.cy + 7} \${h.cx - 12}, \${h.cy - 7}\`}
                fill={h.col}
                stroke="#ffffff"
                strokeWidth="0.5"
              />
              <text x={h.cx} y={h.cy + 3} fill="#ffffff" fontSize="6" fontFamily="monospace" textAnchor="middle">{h.count}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

// 19. Dendrogram Cluster Tree
export const DendrogramClusterDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between items-center text-xs font-bold text-white">
        <span>덴드로그램 계층 클러스터링 (Dendrogram Tree)</span>
        <span className="text-cyan-400 font-mono text-[10px]">3 Clusters</span>
      </div>
      <div className="h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5">
        <svg viewBox="0 0 280 80" className="w-full h-full">
          {/* Root node */}
          <path d="M 20 40 H 80 M 80 20 V 60 M 80 20 H 140 M 80 60 H 140" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
          <path d="M 140 20 V 30 M 140 10 H 200 M 140 30 H 200" stroke="#8b5cf6" strokeWidth="1.5" fill="none" />
          <path d="M 140 60 V 70 M 140 50 H 200 M 140 70 H 200" stroke="#06b6d4" strokeWidth="1.5" fill="none" />
          <circle cx="200" cy="10" r="3" fill="#8b5cf6" /><text x="210" y="12" fill="#cbd5e1" fontSize="7">공정 파라미터 A</text>
          <circle cx="200" cy="30" r="3" fill="#8b5cf6" /><text x="210" y="32" fill="#cbd5e1" fontSize="7">공정 파라미터 B</text>
          <circle cx="200" cy="50" r="3" fill="#06b6d4" /><text x="210" y="52" fill="#cbd5e1" fontSize="7">센서 진동 군집 C</text>
          <circle cx="200" cy="70" r="3" fill="#06b6d4" /><text x="210" y="72" fill="#cbd5e1" fontSize="7">센서 온도 군집 D</text>
        </svg>
      </div>
    </div>
  );
};

// 20. Bump Ranking Transition Chart
export const BumpRankingDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between items-center text-xs font-bold text-white">
        <span>범프 순위 랭킹 변동 차트 (Bump Ranking)</span>
        <span className="text-emerald-400 font-mono text-[10px]">Q1 ➔ Q4 순위</span>
      </div>
      <div className="h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5">
        <svg viewBox="0 0 300 80" className="w-full h-full">
          {/* Rank 1 line: LINE-A */}
          <path d="M 30 20 C 100 20, 120 40, 180 40 S 240 20, 270 20" stroke="#10b981" strokeWidth="2.5" fill="none" />
          {/* Rank 2 line: LINE-B */}
          <path d="M 30 40 C 100 40, 120 20, 180 20 S 240 60, 270 60" stroke="#8b5cf6" strokeWidth="2.5" fill="none" />
          {/* Rank 3 line: LINE-C */}
          <path d="M 30 60 C 100 60, 120 60, 180 60 S 240 40, 270 40" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
          
          <circle cx="30" cy="20" r="4" fill="#10b981" /><text x="5" y="23" fill="#10b981" fontSize="8" fontWeight="bold">1위</text>
          <circle cx="180" cy="20" r="4" fill="#8b5cf6" />
          <circle cx="270" cy="20" r="4" fill="#10b981" /><text x="278" y="23" fill="#10b981" fontSize="8" fontWeight="bold">LINE-A</text>
          <circle cx="270" cy="40" r="4" fill="#f59e0b" /><text x="278" y="43" fill="#f59e0b" fontSize="8" fontWeight="bold">LINE-C</text>
          <circle cx="270" cy="60" r="4" fill="#8b5cf6" /><text x="278" y="63" fill="#8b5cf6" fontSize="8" fontWeight="bold">LINE-B</text>
        </svg>
      </div>
    </div>
  );
};
`;

const chartFilePath = path.join(__dirname, '../src/components/renderers/ChartRenderers.tsx');
fs.appendFileSync(chartFilePath, exoticBatch2);
console.log("✅ Appended Marimekko, Hexbin, Dendrogram, Bump to ChartRenderers.tsx");
