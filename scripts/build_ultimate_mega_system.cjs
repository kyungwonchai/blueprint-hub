const fs = require('fs');
const path = require('path');

console.log("=== Step 1: Upgrading ChartRenderers with Sankey, Sunburst, Chord, Parallel, Boxplot, Bullet, Ridgeline ===");

const exoticChartCode = `
// 13. Sankey Flow
export const SankeyFlowDemo: React.FC = () => {
  const [selectedFlow, setSelectedFlow] = useState<string | null>(null);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between items-center text-xs font-bold text-white">
        <span>샌키 자재/에너지 유량 (Sankey Flow)</span>
        <span className="text-cyan-400 font-mono text-[10px]">{selectedFlow || '흐름 선택'}</span>
      </div>
      <div className="h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 relative">
        <svg viewBox="0 0 320 90" className="w-full h-full">
          {/* Left Nodes (Inputs) */}
          <rect x="10" y="10" width="12" height="70" fill="#8b5cf6" rx="2" />
          <text x="26" y="25" fill="#cbd5e1" fontSize="8" fontWeight="bold">원자재 100%</text>

          {/* Middle Nodes (Processes) */}
          <rect x="150" y="10" width="12" height="45" fill="#06b6d4" rx="2" />
          <text x="166" y="25" fill="#cbd5e1" fontSize="7">1공정 조립 65%</text>

          <rect x="150" y="60" width="12" height="20" fill="#f59e0b" rx="2" />
          <text x="166" y="72" fill="#cbd5e1" fontSize="7">2공정 가공 35%</text>

          {/* Right Nodes (Outputs / Waste) */}
          <rect x="290" y="10" width="12" height="55" fill="#10b981" rx="2" />
          <text x="240" y="25" fill="#10b981" fontSize="8" fontWeight="bold">양품 98.4%</text>

          <rect x="290" y="70" width="12" height="10" fill="#ef4444" rx="2" />
          <text x="250" y="80" fill="#ef4444" fontSize="7">Loss 1.6%</text>

          {/* Flow Ribbons (Curved Beziers) */}
          <path
            d="M 22 25 C 80 25, 80 25, 150 25 L 150 45 C 80 45, 80 45, 22 45 Z"
            fill="rgba(6, 182, 212, 0.3)"
            className="hover:fill-cyan-500/60 cursor-pointer transition-colors"
            onClick={() => setSelectedFlow('원자재 ➔ 1공정: 65%')}
          />
          <path
            d="M 22 55 C 80 55, 80 70, 150 70 L 150 80 C 80 80, 80 75, 22 75 Z"
            fill="rgba(245, 158, 11, 0.3)"
            className="hover:fill-amber-500/60 cursor-pointer transition-colors"
            onClick={() => setSelectedFlow('원자재 ➔ 2공정: 35%')}
          />
          <path
            d="M 162 25 C 220 25, 220 20, 290 20 L 290 55 C 220 55, 220 45, 162 45 Z"
            fill="rgba(16, 185, 129, 0.3)"
            className="hover:fill-emerald-500/60 cursor-pointer transition-colors"
            onClick={() => setSelectedFlow('공정 ➔ 최종 완제품: 98.4%')}
          />
        </svg>
      </div>
    </div>
  );
};

// 14. Sunburst Hierarchy
export const SunburstHierarchyDemo: React.FC = () => {
  const [level, setLevel] = useState('전사 제조본부');
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex justify-between items-center text-xs font-bold text-white mb-1">
        <span>동심원 썬버스트 계층 드릴다운</span>
        <span className="text-violet-400 font-mono text-[10px]">{level}</span>
      </div>
      <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          {/* Inner Ring (Root) */}
          <circle cx="60" cy="60" r="20" fill="#8b5cf6" className="cursor-pointer hover:opacity-80" onClick={() => setLevel('Root: 전사 제조본부')} />
          {/* Middle Ring (Plants) */}
          <circle cx="60" cy="60" r="34" stroke="#06b6d4" strokeWidth="10" fill="none" strokeDasharray="100 114" strokeDashoffset="0" className="cursor-pointer hover:opacity-80" onClick={() => setLevel('1공장 디스플레이')} />
          <circle cx="60" cy="60" r="34" stroke="#f59e0b" strokeWidth="10" fill="none" strokeDasharray="60 154" strokeDashoffset="-100" className="cursor-pointer hover:opacity-80" onClick={() => setLevel('2공장 반도체')} />
          <circle cx="60" cy="60" r="34" stroke="#10b981" strokeWidth="10" fill="none" strokeDasharray="54 160" strokeDashoffset="-160" className="cursor-pointer hover:opacity-80" onClick={() => setLevel('3공장 광학')} />
          {/* Outer Ring (Lines) */}
          <circle cx="60" cy="60" r="48" stroke="#3b82f6" strokeWidth="8" fill="none" strokeDasharray="50 250" strokeDashoffset="0" className="cursor-pointer hover:opacity-80" onClick={() => setLevel('LINE-A (OLED)')} />
          <circle cx="60" cy="60" r="48" stroke="#a855f7" strokeWidth="8" fill="none" strokeDasharray="50 250" strokeDashoffset="-50" className="cursor-pointer hover:opacity-80" onClick={() => setLevel('LINE-B (SMT)')} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[9px] font-bold text-white text-center leading-none">드릴다운<br />Click</span>
        </div>
      </div>
    </div>
  );
};

// 15. Boxplot & Outlier
export const BoxplotOutlierDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between items-center text-xs font-bold text-white">
        <span>공정 치수 편차 박스플롯 (Boxplot IQR)</span>
        <span className="text-emerald-400 font-mono text-[10px]">정상 분포</span>
      </div>
      <div className="h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 flex items-center justify-around font-mono text-[9px]">
        {/* Boxplot 1 */}
        <div className="flex flex-col items-center">
          <div className="relative w-12 h-20 flex flex-col items-center justify-center">
            <line x1="24" y1="5" x2="24" y2="75" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="12" y1="5" x2="36" y2="5" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="12" y1="75" x2="36" y2="75" stroke="#94a3b8" strokeWidth="1.5" />
            <div className="absolute inset-x-2 top-4 bottom-5 bg-violet-600/40 border border-violet-400 rounded flex items-center justify-center">
              <line x1="0" y1="18" x2="32" y2="18" stroke="#ffffff" strokeWidth="2" />
            </div>
            {/* Outlier Dot */}
            <circle cx="24" cy="2" r="2.5" fill="#ef4444" />
          </div>
          <span className="text-slate-400 mt-1">두께 (T)</span>
        </div>

        {/* Boxplot 2 */}
        <div className="flex flex-col items-center">
          <div className="relative w-12 h-20 flex flex-col items-center justify-center">
            <line x1="24" y1="10" x2="24" y2="70" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="12" y1="10" x2="36" y2="10" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="12" y1="70" x2="36" y2="70" stroke="#94a3b8" strokeWidth="1.5" />
            <div className="absolute inset-x-2 top-6 bottom-7 bg-emerald-600/40 border border-emerald-400 rounded flex items-center justify-center">
              <line x1="0" y1="15" x2="32" y2="15" stroke="#ffffff" strokeWidth="2" />
            </div>
          </div>
          <span className="text-slate-400 mt-1">폭 (W)</span>
        </div>

        {/* Boxplot 3 */}
        <div className="flex flex-col items-center">
          <div className="relative w-12 h-20 flex flex-col items-center justify-center">
            <line x1="24" y1="15" x2="24" y2="65" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="12" y1="15" x2="36" y2="15" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="12" y1="65" x2="36" y2="65" stroke="#94a3b8" strokeWidth="1.5" />
            <div className="absolute inset-x-2 top-7 bottom-8 bg-cyan-600/40 border border-cyan-400 rounded flex items-center justify-center">
              <line x1="0" y1="12" x2="32" y2="12" stroke="#ffffff" strokeWidth="2" />
            </div>
          </div>
          <span className="text-slate-400 mt-1">길이 (L)</span>
        </div>
      </div>
    </div>
  );
};

// 16. Stephen Few Bullet Chart
export const BulletPerformanceDemo: React.FC = () => {
  const [val, setVal] = useState(84);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-3">
      <div className="flex justify-between items-center text-xs font-bold text-white">
        <span>스티븐 퓨 불릿 그래프 (Bullet Target)</span>
        <span className="text-emerald-400 font-mono text-[11px]">{val} / 목표 90</span>
      </div>
      {/* Bullet Bar Container */}
      <div className="relative h-6 bg-slate-950 rounded-lg overflow-hidden border border-white/10 flex items-center">
        {/* Background Ranges (Bad / Satisfactory / Good) */}
        <div className="absolute inset-y-0 left-0 w-[50%] bg-slate-800" title="미달 (0~50)" />
        <div className="absolute inset-y-0 left-[50%] w-[35%] bg-slate-700" title="보통 (50~85)" />
        <div className="absolute inset-y-0 left-[85%] w-[15%] bg-slate-600" title="우수 (85~100)" />
        {/* Actual Performance Bar */}
        <div className="absolute inset-y-1.5 left-0 bg-emerald-400 rounded-r shadow-[0_0_8px_#10b981] transition-all" style={{ width: \`\${val}%\` }} />
        {/* Target Marker */}
        <div className="absolute inset-y-0 left-[90%] w-1 bg-rose-400 shadow-md" title="타겟 목표치: 90" />
      </div>
      <div className="flex justify-between text-[10px] text-slate-400 font-mono">
        <span>0 (최저)</span>
        <span className="text-rose-400 font-bold">목표선 (90)</span>
        <span>100 (만점)</span>
      </div>
    </div>
  );
};
`;

const chartFilePath = path.join(__dirname, '../src/components/renderers/ChartRenderers.tsx');
fs.appendFileSync(chartFilePath, exoticChartCode);
console.log("✅ Appended Sankey, Sunburst, Boxplot, Bullet to ChartRenderers.tsx");
