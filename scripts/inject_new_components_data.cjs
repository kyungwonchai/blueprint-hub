const fs = require('fs');
const path = require('path');

const compDataPath = path.join(__dirname, '../src/data/componentsData.ts');
let content = fs.readFileSync(compDataPath, 'utf8');

const newItems = [
  {
    id: "chart-sankey-flow",
    name: "D3 스타일 제조 공정 에너지 & 자재 흐름 샌키 다이어그램 (Sankey Flow)",
    category: "charts",
    tags: ["sankey", "flow", "energy", "d3", "흐름도", "샌키", "에너지"],
    description: "원자재 투입부터 각 공정 분기 및 손실(Loss), 최종 완제품까지의 유량 에너지 노드 맵.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-sankey-flow",
    aiPromptGuidance: "D3 스타일 샌키 플로우 다이어그램. 노드 간 가변 리본 폭과 곡선 베지어로 유량을 시각화하세요.",
    fullSourceCode: `import React, { useState } from 'react';

export const SankeyFlowChart: React.FC = () => {
  const [selectedFlow, setSelectedFlow] = useState<string | null>(null);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl">
      <div className="flex justify-between items-center text-sm font-bold text-white mb-2">
        <span>샌키 자재/에너지 유량 (Sankey Flow)</span>
        <span className="text-cyan-400 font-mono text-xs">{selectedFlow || '노선 클릭 상세'}</span>
      </div>
      <div className="h-44 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 relative">
        <svg viewBox="0 0 320 90" className="w-full h-full">
          <rect x="10" y="10" width="12" height="70" fill="#8b5cf6" rx="2" />
          <text x="26" y="25" fill="#cbd5e1" fontSize="8" fontWeight="bold">원자재 100%</text>
          <rect x="150" y="10" width="12" height="45" fill="#06b6d4" rx="2" />
          <text x="166" y="25" fill="#cbd5e1" fontSize="7">1공정 조립 65%</text>
          <rect x="150" y="60" width="12" height="20" fill="#f59e0b" rx="2" />
          <text x="166" y="72" fill="#cbd5e1" fontSize="7">2공정 가공 35%</text>
          <rect x="290" y="10" width="12" height="55" fill="#10b981" rx="2" />
          <text x="240" y="25" fill="#10b981" fontSize="8" fontWeight="bold">양품 98.4%</text>
          <rect x="290" y="70" width="12" height="10" fill="#ef4444" rx="2" />
          <text x="250" y="80" fill="#ef4444" fontSize="7">Loss 1.6%</text>
          <path d="M 22 25 C 80 25, 80 25, 150 25 L 150 45 C 80 45, 80 45, 22 45 Z" fill="rgba(6, 182, 212, 0.3)" onClick={() => setSelectedFlow('원자재 ➔ 1공정: 65%')} className="cursor-pointer hover:fill-cyan-500/60" />
          <path d="M 22 55 C 80 55, 80 70, 150 70 L 150 80 C 80 80, 80 75, 22 75 Z" fill="rgba(245, 158, 11, 0.3)" onClick={() => setSelectedFlow('원자재 ➔ 2공정: 35%')} className="cursor-pointer hover:fill-amber-500/60" />
          <path d="M 162 25 C 220 25, 220 20, 290 20 L 290 55 C 220 55, 220 45, 162 45 Z" fill="rgba(16, 185, 129, 0.3)" onClick={() => setSelectedFlow('공정 ➔ 최종 완제품: 98.4%')} className="cursor-pointer hover:fill-emerald-500/60" />
        </svg>
      </div>
    </div>
  );
};`
  },
  {
    id: "chart-sunburst-hierarchy",
    name: "계층형 다차원 동심원 썬버스트 (Sunburst Hierarchy) 드릴다운",
    category: "charts",
    tags: ["sunburst", "hierarchy", "pie", "썬버스트", "동심원", "계층"],
    description: "중심(대분류)에서 외곽(소분류/부품)으로 뻗어나가는 다층 링 드릴다운 시각화.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-sunburst-hierarchy",
    aiPromptGuidance: "동심원 형태의 썬버스트 파티션 차트. 링 클릭 시 해당 하위 세그먼트로 줌인 확대되도록 구현하세요.",
    fullSourceCode: `import React, { useState } from 'react';

export const SunburstHierarchyChart: React.FC = () => {
  const [level, setLevel] = useState('전사 제조본부');
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl">
      <div className="flex justify-between items-center text-sm font-bold text-white mb-2">
        <span>동심원 썬버스트 계층 드릴다운</span>
        <span className="text-violet-400 font-mono text-xs">{level}</span>
      </div>
      <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r="20" fill="#8b5cf6" onClick={() => setLevel('Root: 전사 제조본부')} className="cursor-pointer hover:opacity-80" />
          <circle cx="60" cy="60" r="34" stroke="#06b6d4" strokeWidth="10" fill="none" strokeDasharray="100 114" strokeDashoffset="0" onClick={() => setLevel('1공장 디스플레이')} className="cursor-pointer hover:opacity-80" />
          <circle cx="60" cy="60" r="34" stroke="#f59e0b" strokeWidth="10" fill="none" strokeDasharray="60 154" strokeDashoffset="-100" onClick={() => setLevel('2공장 반도체')} className="cursor-pointer hover:opacity-80" />
          <circle cx="60" cy="60" r="34" stroke="#10b981" strokeWidth="10" fill="none" strokeDasharray="54 160" strokeDashoffset="-160" onClick={() => setLevel('3공장 광학')} className="cursor-pointer hover:opacity-80" />
          <circle cx="60" cy="60" r="48" stroke="#3b82f6" strokeWidth="8" fill="none" strokeDasharray="50 250" strokeDashoffset="0" onClick={() => setLevel('LINE-A (OLED)')} className="cursor-pointer hover:opacity-80" />
          <circle cx="60" cy="60" r="48" stroke="#a855f7" strokeWidth="8" fill="none" strokeDasharray="50 250" strokeDashoffset="-50" onClick={() => setLevel('LINE-B (SMT)')} className="cursor-pointer hover:opacity-80" />
        </svg>
      </div>
    </div>
  );
};`
  },
  {
    id: "chart-boxplot-outlier",
    name: "공정 치수 편차 박스플롯 & 이상치 (Boxplot IQR & Outlier)",
    category: "charts",
    tags: ["boxplot", "iqr", "outlier", "박스플롯", "사분위수", "이상치"],
    description: "중앙값(Q2), 사분위범위(Q1~Q3), 최소/최대 수염 및 이상치 점(Outlier Dot) 표시.",
    complexity: "Medium",
    dependencies: ["lucide-react"],
    previewType: "chart-boxplot-outlier",
    aiPromptGuidance: "박스와 수염, 이상치 도트를 렌더링하는 통계 박스플롯입니다.",
    fullSourceCode: `import React from 'react';

export const BoxplotOutlierChart: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl">
      <div className="flex justify-between items-center text-sm font-bold text-white mb-2">
        <span>공정 치수 편차 박스플롯 (Boxplot IQR)</span>
        <span className="text-emerald-400 font-mono text-xs">정상 분포</span>
      </div>
      <div className="h-36 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 flex items-center justify-around font-mono text-xs">
        <div className="flex flex-col items-center">
          <div className="relative w-12 h-24 flex flex-col items-center justify-center">
            <line x1="24" y1="5" x2="24" y2="85" stroke="#94a3b8" strokeWidth="1.5" />
            <div className="absolute inset-x-2 top-5 bottom-6 bg-violet-600/40 border border-violet-400 rounded flex items-center justify-center">
              <line x1="0" y1="20" x2="32" y2="20" stroke="#ffffff" strokeWidth="2" />
            </div>
            <circle cx="24" cy="2" r="2.5" fill="#ef4444" />
          </div>
          <span className="text-slate-400 mt-1">두께 (T)</span>
        </div>
      </div>
    </div>
  );
};`
  },
  {
    id: "chart-bullet-performance",
    name: "스티븐 퓨(Stephen Few) 표준 불릿 그래프 (Bullet Target Bar)",
    category: "charts",
    tags: ["bullet", "kpi", "target", "불릿", "목표달성", "게이지"],
    description: "정성적 범위(나쁨/만족/우수), 목표치(수직 바), 실제 달성치(중앙 바) 초압축 게이지.",
    complexity: "Simple",
    dependencies: ["lucide-react"],
    previewType: "chart-bullet-performance",
    aiPromptGuidance: "배경 3단계 그라데이션 범위와 목표치 마커, 실제치 바를 결합한 불릿 차트입니다.",
    fullSourceCode: `import React, { useState } from 'react';

export const BulletTargetBar: React.FC = () => {
  const [val, setVal] = useState(84);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl space-y-3">
      <div className="flex justify-between items-center text-sm font-bold text-white">
        <span>스티븐 퓨 불릿 그래프 (Bullet Target)</span>
        <span className="text-emerald-400 font-mono text-xs">{val} / 목표 90</span>
      </div>
      <div className="relative h-6 bg-slate-950 rounded-lg overflow-hidden border border-white/10 flex items-center">
        <div className="absolute inset-y-0 left-0 w-[50%] bg-slate-800" />
        <div className="absolute inset-y-0 left-[50%] w-[35%] bg-slate-700" />
        <div className="absolute inset-y-0 left-[85%] w-[15%] bg-slate-600" />
        <div className="absolute inset-y-1.5 left-0 bg-emerald-400 rounded-r shadow-[0_0_8px_#10b981]" style={{ width: \`\${val}%\` }} />
        <div className="absolute inset-y-0 left-[90%] w-1 bg-rose-400 shadow-md" />
      </div>
    </div>
  );
};`
  }
];

// Append new items into COMPONENTS_DATA array
const str = newItems.map(it => JSON.stringify(it, null, 2)).join(',\n  ');
content = content.replace(
  'export const COMPONENTS_DATA: ComponentItem[] = [',
  `export const COMPONENTS_DATA: ComponentItem[] = [\n  ${str},`
);

fs.writeFileSync(compDataPath, content);
console.log('✅ Injected 4 exotic D3/Few charts into COMPONENTS_DATA');
