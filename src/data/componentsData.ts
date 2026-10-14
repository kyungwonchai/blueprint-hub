import { ComponentItem } from '../types';

export interface ThemePreset {
  id: string;
  name: string;
  bg: string;
  accent: string;
  sub: string;
  border?: string;
  cardBg?: string;
  desc?: string;
}

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: "cyber-violet",
    name: "Cyber Violet (네온 바이올렛)",
    bg: "#08090f",
    accent: "#8b5cf6",
    sub: "#d946ef",
    border: "#8b5cf644",
    cardBg: "#0f111e",
    desc: "2026 AI-Native 사이버 펑크 바이올렛 네온 룩"
  },
  {
    id: "neon-emerald",
    name: "Neon Matrix (사이버 에메랄드)",
    bg: "#050d09",
    accent: "#10b981",
    sub: "#06b6d4",
    border: "#10b98144",
    cardBg: "#091712",
    desc: "고신뢰성 SCADA 설비 관제 & 6시그마 에메랄드"
  },
  {
    id: "deep-ocean",
    name: "Deep Titanium (엔터프라이즈 네이비)",
    bg: "#070c14",
    accent: "#3b82f6",
    sub: "#38bdf8",
    border: "#3b82f644",
    cardBg: "#0c1524",
    desc: "글로벌 초대형 엔터프라이즈 표준 티타늄 네이비"
  },
  {
    id: "amber-gold",
    name: "Amber Quartz (황금 앰버 럭셔리)",
    bg: "#0d0a06",
    accent: "#f59e0b",
    sub: "#ef4444",
    border: "#f59e0b44",
    cardBg: "#18130a",
    desc: "골드 앰버 인더스트리얼 & 파이낸스 럭셔리"
  },
  {
    id: "obsidian-crimson",
    name: "Obsidian Flame (옵시디언 크림슨)",
    bg: "#0f0709",
    accent: "#f43f5e",
    sub: "#fb923c",
    border: "#f43f5e44",
    cardBg: "#1a0b10",
    desc: "임계 경보 및 초고속 HFT 틱 관제 크림슨"
  },
  {
    id: "clean-slate",
    name: "Modern Slate (초미니멀 모노 슬레이트)",
    bg: "#0f172a",
    accent: "#94a3b8",
    sub: "#cbd5e1",
    border: "#94a3b844",
    cardBg: "#1e293b",
    desc: "눈이 편안한 초미니멀 개발자 모노 슬레이트"
  },
  {
    id: "tokyo-night",
    name: "Tokyo Night (도쿄 나이트 사이버)",
    bg: "#090a16",
    accent: "#7aa2f7",
    sub: "#bb9af7",
    border: "#7aa2f744",
    cardBg: "#101226",
    desc: "도쿄의 야경과 네온 불빛을 형상화한 다크 블루/라벤더"
  },
  {
    id: "synthwave-84",
    name: "Synthwave '84 (네온 레트로웨이브)",
    bg: "#120924",
    accent: "#ff7edb",
    sub: "#36f9f6",
    border: "#ff7edb44",
    cardBg: "#1d0e3a",
    desc: "80년대 레트로 퓨처리즘 핫핑크 & 형광 시안"
  },
  {
    id: "nord-frost",
    name: "Nord Frost (북유럽 프로스트 아이스)",
    bg: "#0c1017",
    accent: "#88c0d0",
    sub: "#81a1c1",
    border: "#88c0d044",
    cardBg: "#141b24",
    desc: "북극의 오로라와 청명한 빙하를 담은 아틱 블루"
  },
  {
    id: "dracula-pro",
    name: "Dracula Pro (다크 드라큘라 뱀파이어)",
    bg: "#0e0d17",
    accent: "#bd93f9",
    sub: "#ff79c6",
    border: "#bd93f944",
    cardBg: "#181628",
    desc: "개발자들의 전설적인 다크 테마 퍼플 & 핑크"
  },
  {
    id: "solarized-dark",
    name: "Solarized Dark (솔라라이즈드 청록)",
    bg: "#041116",
    accent: "#2aa198",
    sub: "#268bd2",
    border: "#2aa19844",
    cardBg: "#07202a",
    desc: "광학적 대비 이론 기반의 딥 틸(Teal) & 시안"
  },
  {
    id: "monokai-pro",
    name: "Monokai Pro (모노카이 고대비 오렌지)",
    bg: "#131313",
    accent: "#ffd866",
    sub: "#ff6188",
    border: "#ffd86644",
    cardBg: "#1e1e1e",
    desc: "선명하고 활력 넘치는 골든 옐로우 & 코랄 레드"
  },
  {
    id: "rose-pine",
    name: "Rosé Pine (빈티지 로즈 파인)",
    bg: "#0f0e17",
    accent: "#ebbcba",
    sub: "#9ccfd8",
    border: "#ebbcba44",
    cardBg: "#191726",
    desc: "자연스러운 따뜻함을 주는 빈티지 로즈 & 소나무 그린"
  },
  {
    id: "carbon-stealth",
    name: "Carbon Stealth (카본 스텔스 블랙)",
    bg: "#050505",
    accent: "#71717a",
    sub: "#d4d4d8",
    border: "#71717a44",
    cardBg: "#121214",
    desc: "F-22 스텔스 전투기 질감의 극단적 무광 매트 카본"
  },
  {
    id: "hyper-aurora",
    name: "Hyper Aurora (오로라 홀로그래픽)",
    bg: "#040d12",
    accent: "#10b981",
    sub: "#a855f7",
    border: "#10b98144",
    cardBg: "#081b24",
    desc: "청록색 빛줄기와 보랏빛 오로라가 공존하는 홀로그램"
  },
  {
    id: "quantum-flux",
    name: "Quantum Flux (양자 플럭스 블루)",
    bg: "#060b19",
    accent: "#00f2fe",
    sub: "#4facfe",
    border: "#00f2fe44",
    cardBg: "#0b152d",
    desc: "초전도체 양자 플럭스를 연상시키는 일렉트릭 블루"
  },
  {
    id: "artlist-cinema",
    name: "Artlist Cinema (아트리스트 옵시디언 옐로우)",
    bg: "#0d0d0f",
    accent: "#ffea00",
    sub: "#ffaa00",
    border: "#ffea0044",
    cardBg: "#141418",
    desc: "Artlist.io 영감의 시네마틱 딥 옵시디언 블랙 & 고대비 일렉트릭 옐로우 미디어 디자인 시스템"
  },
  {
    id: "higgsfield-lime",
    name: "Higgsfield AI Studio (네온 라임 & 흑요석)",
    bg: "#070709",
    accent: "#D4FF00",
    sub: "#7C3AED",
    border: "#D4FF0044",
    cardBg: "#0f0f14",
    desc: "Higgsfield AI 영감의 초저투명도(4.5%) 크리스탈 글래스 & 네온 라임 시네마틱 룩"
  },
  {
    id: "artlist-amber-pro",
    name: "Artlist Cinema Amber (시네마틱 앰버 & 티타늄)",
    bg: "#08090d",
    accent: "#F5A623",
    sub: "#38bdf8",
    border: "#F5A62344",
    cardBg: "#11131a",
    desc: "Artlist.io 시네마틱 앰버 골드 글로우 & 티타늄 서피스 시스템"
  }
];

export const CATEGORIES: { id: string; name: string; icon: string; count?: number }[] = [
  {
    "id": "all",
    "name": "전체 컴포넌트",
    "icon": "✨"
  },
  {
    "id": "dashboards",
    "name": "대시보드 & 메트릭",
    "icon": "📊"
  },
  {
    "id": "tables",
    "name": "데이터 표 & 그리드",
    "icon": "📑"
  },
  {
    "id": "charts",
    "name": "시각화 & 차트",
    "icon": "📈"
  },
  {
    "id": "forms",
    "name": "스마트 폼 & 입력",
    "icon": "📝"
  },
  {
    "id": "ai-widgets",
    "name": "AI 네이티브 위젯",
    "icon": "🤖"
  },
  {
    "id": "stats",
    "name": "KPI & 상태 카드",
    "icon": "⚡"
  },
  {
    "id": "navigation",
    "name": "네비게이션 & 탭",
    "icon": "🧭"
  },
  {
    "id": "feedback",
    "name": "모달 & 알림 피드백",
    "icon": "🔔"
  },
  {
    "id": "themes",
    "name": "테마 & 디자인 토큰",
    "icon": "🎨"
  }
];

export const COMPONENTS_DATA: ComponentItem[] = [
  {
  "id": "chart-polar-rose-coxcomb",
  "name": "나이팅게일 로즈 차트 (Polar Area / Coxcomb Quality Distribution)",
  "category": "charts",
  "tags": [
    "polar",
    "coxcomb",
    "rose",
    "nightingale",
    "나이팅게일",
    "로즈",
    "극좌표"
  ],
  "description": "각도별/반경별 다중 면적 부채꼴로 분기별 품질 불량 및 원인을 시각화.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-polar-rose-coxcomb",
  "aiPromptGuidance": "원형 극좌표계 나이팅게일 로즈 꽃잎 차트를 SVG 호(Arc)로 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const PolarRoseChartDemo: React.FC = () => {\n  const [selected, setSelected] = useState('1분기 품질불량: 42건');\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span>나이팅게일 로즈 차트 (Nightingale Rose / Polar Area)</span>\n        <span className=\"text-violet-400 font-mono text-[10px]\">{selected}</span>\n      </div>\n      <div className=\"h-32 w-full flex items-center justify-center\">\n        <svg viewBox=\"0 0 160 160\" className=\"w-full h-full max-w-[140px]\">\n          <circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"none\" stroke=\"rgba(255,255,255,0.05)\" strokeWidth=\"1\" />\n          <circle cx=\"80\" cy=\"80\" r=\"40\" fill=\"none\" stroke=\"rgba(255,255,255,0.05)\" strokeWidth=\"1\" />\n          <circle cx=\"80\" cy=\"80\" r=\"20\" fill=\"none\" stroke=\"rgba(255,255,255,0.05)\" strokeWidth=\"1\" />\n          {/* Petals */}\n          <path d=\"M 80 80 L 80 20 A 60 60 0 0 1 122 38 Z\" fill=\"rgba(139,92,246,0.6)\" stroke=\"#8b5cf6\" className=\"cursor-pointer hover:opacity-80\" onClick={() => setSelected('1분기 조립불량: 58건')} />\n          <path d=\"M 80 80 L 122 38 A 60 60 0 0 1 140 80 Z\" fill=\"rgba(6,182,212,0.6)\" stroke=\"#06b6d4\" className=\"cursor-pointer hover:opacity-80\" onClick={() => setSelected('2분기 가공불량: 42건')} />\n          <path d=\"M 80 80 L 140 80 A 45 45 0 0 1 112 112 Z\" fill=\"rgba(245,158,11,0.6)\" stroke=\"#f59e0b\" className=\"cursor-pointer hover:opacity-80\" onClick={() => setSelected('3분기 포장불량: 31건')} />\n          <path d=\"M 80 80 L 112 112 A 30 30 0 0 1 80 110 Z\" fill=\"rgba(16,185,129,0.6)\" stroke=\"#10b981\" className=\"cursor-pointer hover:opacity-80\" onClick={() => setSelected('4분기 검사불량: 18건')} />\n          <path d=\"M 80 80 L 80 110 A 50 50 0 0 1 45 115 Z\" fill=\"rgba(239,68,68,0.6)\" stroke=\"#ef4444\" className=\"cursor-pointer hover:opacity-80\" onClick={() => setSelected('반품 클레임: 35건')} />\n          <path d=\"M 80 80 L 45 115 A 55 55 0 0 1 25 80 Z\" fill=\"rgba(217,70,239,0.6)\" stroke=\"#d946ef\" className=\"cursor-pointer hover:opacity-80\" onClick={() => setSelected('원자재 불량: 48건')} />\n        </svg>\n      </div>\n    </div>\n  );\n};\n\n// 2. Ternary Plot (3원 합금/원자재 삼각 좌표계)"
},
  {
  "id": "chart-ternary-phase-plot",
  "name": "3원 원자재 배합 삼각 도표 (Ternary Phase Composition Plot)",
  "category": "charts",
  "tags": [
    "ternary",
    "phase",
    "composition",
    "삼각도표",
    "합금",
    "배합비"
  ],
  "description": "3가지 성분비(A+B+C = 100%)의 혼합 비율과 물성 상평형도를 정삼각형에 매핑.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-ternary-phase-plot",
  "aiPromptGuidance": "정삼각형 좌표계 삼원 성분비 상평형도 텐서 도표를 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const TernaryPlotDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span>3원 성분 삼각 도표 (Ternary Phase Plot)</span>\n        <span className=\"text-cyan-400 font-mono text-[10px]\">A+B+C = 100%</span>\n      </div>\n      <div className=\"h-32 w-full flex items-center justify-center\">\n        <svg viewBox=\"0 0 160 140\" className=\"w-full h-full max-w-[160px]\">\n          {/* Triangle Grid */}\n          <polygon points=\"80,15 145,125 15,125\" fill=\"rgba(255,255,255,0.02)\" stroke=\"#64748b\" strokeWidth=\"1.5\" />\n          <line x1=\"80\" y1=\"15\" x2=\"80\" y2=\"125\" stroke=\"rgba(255,255,255,0.1)\" strokeDasharray=\"2 2\" />\n          <line x1=\"47\" y1=\"70\" x2=\"113\" y2=\"70\" stroke=\"rgba(255,255,255,0.1)\" strokeDasharray=\"2 2\" />\n          {/* Sample Points */}\n          <circle cx=\"80\" cy=\"55\" r=\"4.5\" fill=\"#10b981\" stroke=\"#ffffff\" strokeWidth=\"1\" />\n          <circle cx=\"65\" cy=\"85\" r=\"4\" fill=\"#06b6d4\" stroke=\"#ffffff\" strokeWidth=\"1\" />\n          <circle cx=\"105\" cy=\"95\" r=\"4\" fill=\"#8b5cf6\" stroke=\"#ffffff\" strokeWidth=\"1\" />\n          {/* Axis Labels */}\n          <text x=\"80\" y=\"10\" fill=\"#cbd5e1\" fontSize=\"7\" textAnchor=\"middle\">실리콘 (Si: 60%)</text>\n          <text x=\"150\" y=\"132\" fill=\"#cbd5e1\" fontSize=\"7\">알루미늄 (Al: 25%)</text>\n          <text x=\"10\" y=\"132\" fill=\"#cbd5e1\" fontSize=\"7\">마그네슘 (Mg: 15%)</text>\n        </svg>\n      </div>\n    </div>\n  );\n};\n\n// 3. Voronoi Facility Influence Mesh"
},
  {
  "id": "chart-voronoi-facility-mesh",
  "name": "공장 설비 영향 구역 보로노이 분할 (Voronoi Spatial Mesh)",
  "category": "charts",
  "tags": [
    "voronoi",
    "mesh",
    "spatial",
    "보로노이",
    "공간분할",
    "설비배치"
  ],
  "description": "설비 노드 중심의 최근접 다각형 영역 분할 및 실시간 부하 상태 컬러링.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-voronoi-facility-mesh",
  "aiPromptGuidance": "공간 테셀레이션 다각형 보로노이 셀 그리드를 구현하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const VoronoiMeshDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span>설비 영향 구역 보로노이 분할 (Voronoi Mesh)</span>\n        <span className=\"text-emerald-400 font-mono text-[10px]\">6개 구역 정상</span>\n      </div>\n      <div className=\"h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5\">\n        <svg viewBox=\"0 0 280 80\" className=\"w-full h-full\">\n          <polygon points=\"10,10 90,10 65,45 10,40\" fill=\"rgba(139,92,246,0.2)\" stroke=\"#8b5cf6\" strokeWidth=\"1\" />\n          <circle cx=\"45\" cy=\"25\" r=\"3\" fill=\"#8b5cf6\" /><text x=\"52\" y=\"27\" fill=\"#ffffff\" fontSize=\"7\">CNC-01</text>\n          \n          <polygon points=\"90,10 180,10 160,50 65,45\" fill=\"rgba(6,182,212,0.2)\" stroke=\"#06b6d4\" strokeWidth=\"1\" />\n          <circle cx=\"120\" cy=\"28\" r=\"3\" fill=\"#06b6d4\" /><text x=\"127\" y=\"30\" fill=\"#ffffff\" fontSize=\"7\">SMT-02</text>\n          \n          <polygon points=\"180,10 270,10 270,45 160,50\" fill=\"rgba(16,185,129,0.2)\" stroke=\"#10b981\" strokeWidth=\"1\" />\n          <circle cx=\"215\" cy=\"26\" r=\"3\" fill=\"#10b981\" /><text x=\"222\" y=\"28\" fill=\"#ffffff\" fontSize=\"7\">ROBOT-03</text>\n          \n          <polygon points=\"10,40 65,45 80,75 10,75\" fill=\"rgba(245,158,11,0.2)\" stroke=\"#f59e0b\" strokeWidth=\"1\" />\n          <circle cx=\"42\" cy=\"60\" r=\"3\" fill=\"#f59e0b\" /><text x=\"49\" y=\"62\" fill=\"#ffffff\" fontSize=\"7\">AGING-04</text>\n          \n          <polygon points=\"65,45 160,50 170,75 80,75\" fill=\"rgba(239,68,68,0.2)\" stroke=\"#ef4444\" strokeWidth=\"1\" />\n          <circle cx=\"120\" cy=\"62\" r=\"3\" fill=\"#ef4444\" /><text x=\"127\" y=\"64\" fill=\"#ffffff\" fontSize=\"7\">PRESS-05</text>\n        </svg>\n      </div>\n    </div>\n  );\n};\n\n// 4. Cleanroom Thermal Contour Heatmap"
},
  {
  "id": "chart-thermal-contour-map",
  "name": "클린룸 열분포 등고선 컨투어 맵 (Thermal Contour Heatmap)",
  "category": "charts",
  "tags": [
    "contour",
    "thermal",
    "heatmap",
    "등고선",
    "열분포",
    "클린룸"
  ],
  "description": "공장 내부 핫스팟과 온도 기울기를 등위선(Iso-line) 곡선으로 표현.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-thermal-contour-map",
  "aiPromptGuidance": "다단계 동심 등위선과 밀도 그라데이션 컨투어 맵을 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const ThermalContourDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span>클린룸 열분포 등고선 컨투어 (Thermal Contour)</span>\n        <span className=\"text-amber-400 font-mono text-[10px]\">Peak 48.2°C</span>\n      </div>\n      <div className=\"h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 relative\">\n        <svg viewBox=\"0 0 280 80\" className=\"w-full h-full\">\n          {/* Contour Outer Ring */}\n          <ellipse cx=\"140\" cy=\"40\" rx=\"120\" ry=\"32\" fill=\"rgba(6,182,212,0.15)\" stroke=\"#06b6d4\" strokeWidth=\"1\" />\n          <ellipse cx=\"140\" cy=\"40\" rx=\"80\" ry=\"24\" fill=\"rgba(16,185,129,0.25)\" stroke=\"#10b981\" strokeWidth=\"1\" />\n          <ellipse cx=\"140\" cy=\"40\" rx=\"45\" ry=\"16\" fill=\"rgba(245,158,11,0.35)\" stroke=\"#f59e0b\" strokeWidth=\"1\" />\n          <ellipse cx=\"140\" cy=\"40\" rx=\"20\" ry=\"8\" fill=\"rgba(239,68,68,0.55)\" stroke=\"#ef4444\" strokeWidth=\"1.5\" />\n          <text x=\"140\" y=\"42\" fill=\"#ffffff\" fontSize=\"7\" fontWeight=\"bold\" textAnchor=\"middle\">핫스팟 48°C</text>\n          <text x=\"220\" y=\"38\" fill=\"#94a3b8\" fontSize=\"6\">22°C (정상)</text>\n        </svg>\n      </div>\n    </div>\n  );\n};\n\n// 5. Highcharts Heat Grid Matrix with Color Scale"
},
  {
  "id": "table-highcharts-heat-matrix",
  "name": "Highcharts 스타일 다차원 품질 히트 매트릭스 (Heat Grid Matrix)",
  "category": "tables",
  "tags": [
    "highcharts",
    "heatmatrix",
    "grid",
    "히트맵",
    "매트릭스",
    "품질"
  ],
  "description": "요일별/라인별 불량 발생 빈도를 색상 밀도 스케일로 나타낸 히트 매트릭스.",
  "complexity": "Medium",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "table-highcharts-heat-matrix",
  "aiPromptGuidance": "Highcharts 스타일 다차원 컬러 스케일 히트 그리드 매트릭스를 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const HighchartsMatrixDemo: React.FC = () => {\n  const [val, setVal] = useState('라인 2 x 수요일: 불량 2건');\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span>Highcharts 다차원 히트 그리드 (Heat Matrix)</span>\n        <span className=\"text-emerald-400 font-mono text-[10px]\">{val}</span>\n      </div>\n      <div className=\"grid grid-cols-5 gap-1 text-[9px] font-mono text-center\">\n        {['월', '화', '수', '목', '금'].map(d => (\n          <div key={d} className=\"text-slate-500 font-bold\">{d}</div>\n        ))}\n        {[\n          { l: 'L1', v: 0, bg: 'bg-slate-950' }, { l: 'L1', v: 1, bg: 'bg-emerald-950' }, { l: 'L1', v: 4, bg: 'bg-emerald-600' }, { l: 'L1', v: 2, bg: 'bg-emerald-800' }, { l: 'L1', v: 0, bg: 'bg-slate-950' },\n          { l: 'L2', v: 3, bg: 'bg-emerald-700' }, { l: 'L2', v: 0, bg: 'bg-slate-950' }, { l: 'L2', v: 2, bg: 'bg-emerald-800' }, { l: 'L2', v: 8, bg: 'bg-rose-600' }, { l: 'L2', v: 1, bg: 'bg-emerald-950' }\n        ].map((c, i) => (\n          <div\n            key={i}\n            onClick={() => setVal(`${c.l} 라인: ${c.v}건 발생`)}\n            className={`${c.bg} p-2 rounded border border-white/5 cursor-pointer hover:border-white/40 text-white font-bold`}\n          >\n            {c.v}\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// 6. ECharts Dynamic Gauge Speedometer Cluster"
},
  {
  "id": "circular-echarts-triple-gauge",
  "name": "ECharts 트리플 클러스터 게이지 (Triple Synchronized Gauge)",
  "category": "dashboards",
  "tags": [
    "echarts",
    "gauge",
    "cluster",
    "게이지",
    "클러스터",
    "모터"
  ],
  "description": "모터 부하, 공압, 인버터 온도를 3련 원형 게이지로 동시 관제.",
  "complexity": "Medium",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "circular-echarts-triple-gauge",
  "aiPromptGuidance": "3개 축이 동기화되는 ECharts 스타일 트리플 원형 게이지를 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const EchartsGaugeClusterDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span>ECharts 트리플 클러스터 게이지 (Triple Gauge)</span>\n        <span className=\"text-cyan-400 font-mono text-[10px]\">3개 축 동기화</span>\n      </div>\n      <div className=\"grid grid-cols-3 gap-2 text-center text-[10px]\">\n        <div className=\"p-2 rounded-xl bg-slate-950 border border-white/5\">\n          <div className=\"w-12 h-12 rounded-full border-4 border-violet-500 border-t-transparent mx-auto flex items-center justify-center font-bold text-white font-mono\">\n            85%\n          </div>\n          <span className=\"text-slate-400 mt-1 block\">모터 부하</span>\n        </div>\n        <div className=\"p-2 rounded-xl bg-slate-950 border border-white/5\">\n          <div className=\"w-12 h-12 rounded-full border-4 border-emerald-500 border-r-transparent mx-auto flex items-center justify-center font-bold text-white font-mono\">\n            99%\n          </div>\n          <span className=\"text-slate-400 mt-1 block\">공압 안정</span>\n        </div>\n        <div className=\"p-2 rounded-xl bg-slate-950 border border-white/5\">\n          <div className=\"w-12 h-12 rounded-full border-4 border-amber-500 border-b-transparent mx-auto flex items-center justify-center font-bold text-white font-mono\">\n            42°C\n          </div>\n          <span className=\"text-slate-400 mt-1 block\">인버터 온도</span>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// 7. AG-Grid Style Hierarchical Grouping Tree"
},
  {
  "id": "table-ag-grid-enterprise-grouping",
  "name": "AG-Grid 엔터프라이즈 행 계층 그룹핑 (Row Grouping & Aggregation)",
  "category": "tables",
  "tags": [
    "ag-grid",
    "grouping",
    "aggregation",
    "그룹핑",
    "집계",
    "표"
  ],
  "description": "본사/지사/라인별 다단계 폴딩 및 SUM/AVG 소계 자동 계산 엔터프라이즈 표.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "table-ag-grid-enterprise-grouping",
  "aiPromptGuidance": "AG-Grid Enterprise 스타일 다계층 행 그룹핑 및 소계 롤업 테이블을 작성하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const AgGridTreeGroupingDemo: React.FC = () => {\n  const [open, setOpen] = useState(true);\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3.5 shadow-2xl space-y-1.5 text-xs\">\n      <div className=\"flex justify-between items-center font-bold text-white border-b border-white/10 pb-1.5\">\n        <span>AG-Grid 엔터프라이즈 행 그룹핑 (Row Grouping)</span>\n        <span className=\"text-violet-400 font-mono text-[10px]\">Aggregation: SUM</span>\n      </div>\n      <div onClick={() => setOpen(!open)} className=\"p-1.5 rounded-lg bg-violet-600/20 text-violet-300 font-bold flex justify-between cursor-pointer\">\n        <span>▼ [Group: 대한민국 본사 공장] (2개 라인)</span>\n        <span className=\"font-mono text-white\">합계: $48,200</span>\n      </div>\n      {open && (\n        <div className=\"pl-4 space-y-1 text-[11px] font-mono text-slate-300\">\n          <div className=\"p-1.5 rounded bg-white/[0.02] flex justify-between\">\n            <span className=\"text-cyan-300\">├─ LINE-A (OLED 스마트 조립)</span>\n            <span className=\"text-emerald-400 font-bold\">$33,100</span>\n          </div>\n          <div className=\"p-1.5 rounded bg-white/[0.02] flex justify-between\">\n            <span className=\"text-cyan-300\">└─ LINE-B (SMT 고속 실장)</span>\n            <span className=\"text-emerald-400 font-bold\">$15,100</span>\n          </div>\n        </div>\n      )}\n    </div>\n  );\n};\n\n// 8. 3D WebGL Anamorphic Depth Card"
},
  {
  "id": "theme-anamorphic-3d-depth",
  "name": "3D 아나몰픽 깊이감 레이어드 카드 (Anamorphic Depth Layers)",
  "category": "themes",
  "tags": [
    "anamorphic",
    "3d",
    "depth",
    "아나몰픽",
    "입체",
    "깊이감"
  ],
  "description": "시선 각도에 따라 레이어가 튀어나오는 3D 아나몰픽 착시 깊이감 카드.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "theme-anamorphic-3d-depth",
  "aiPromptGuidance": "다층 z-index와 3D rotate 트랜스폼으로 아나몰픽 깊이감을 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const Anamorphic3DCardDemo: React.FC = () => {\n  return (\n    <div className=\"relative overflow-hidden rounded-2xl bg-gradient-to-tr from-violet-900/60 via-slate-950 to-cyan-900/40 p-5 shadow-2xl border border-white/20 text-white\">\n      <div className=\"flex justify-between items-center mb-2\">\n        <span className=\"text-xs font-black\">3D 아나몰픽 깊이감 (Anamorphic Depth)</span>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-white/10 text-cyan-300 font-mono\">Depth: 120px</span>\n      </div>\n      <div className=\"h-16 flex items-center justify-around\">\n        <div className=\"w-10 h-10 rounded-xl bg-violet-500 shadow-[0_15px_30px_rgba(139,92,246,0.6)] transform -rotate-12 translate-y-1 flex items-center justify-center font-bold text-xs\">\n          Layer 1\n        </div>\n        <div className=\"w-12 h-12 rounded-xl bg-fuchsia-500 shadow-[0_20px_40px_rgba(217,70,239,0.6)] transform rotate-6 -translate-y-2 flex items-center justify-center font-bold text-xs\">\n          Layer 2\n        </div>\n        <div className=\"w-10 h-10 rounded-xl bg-cyan-400 shadow-[0_15px_30px_rgba(6,182,212,0.6)] transform -rotate-6 translate-y-1 flex items-center justify-center font-bold text-xs text-black\">\n          Layer 3\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// 9. Raymarching Shading Liquid Shader"
},
  {
  "id": "theme-raymarching-liquid-shader",
  "name": "레이마칭 SDF 볼륨 셰이더 패널 (Raymarching Liquid Shader)",
  "category": "themes",
  "tags": [
    "raymarching",
    "shader",
    "sdf",
    "레이마칭",
    "셰이더",
    "유체"
  ],
  "description": "실시간 서명 거리 함수(SDF) 기반 3D 유체 노이즈 레이마칭 셰이더.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "theme-raymarching-liquid-shader",
  "aiPromptGuidance": "GLSL Raymarching SDF 볼륨 노이즈 셰이더 패널을 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const RaymarchingShaderDemo: React.FC = () => {\n  return (\n    <div className=\"relative overflow-hidden rounded-2xl bg-slate-950 p-5 shadow-2xl border border-violet-500/40\">\n      <div className=\"absolute inset-0 bg-gradient-to-r from-violet-600/30 via-fuchsia-600/30 to-cyan-500/30 animate-pulse blur-xl\" />\n      <div className=\"relative z-10 space-y-2\">\n        <div className=\"flex justify-between items-center text-xs font-black text-white\">\n          <span>레이마칭(Raymarching) SDF 볼륨 셰이더</span>\n          <span className=\"text-emerald-400 font-mono text-[10px]\">GLSL Fragment</span>\n        </div>\n        <p className=\"text-xs text-slate-300 leading-relaxed font-mono text-[10px] bg-black/60 p-2 rounded-xl border border-white/10\">\n          float d = length(p) - 1.0 + 0.1 * sin(10.0 * p.x);<br />\n          vec3 n = normalize(vec3(dFdx(d), dFdy(d), 0.05));\n        </p>\n      </div>\n    </div>\n  );\n};\n\n// 10. Autonomous Drone Swarm Fleet Control (5,000 Drones)"
},
  {
  "id": "dashboard-autonomous-drone-fleet",
  "name": "자율 군집 드론 물류 관제 노드맵 (Autonomous Drone Swarm Fleet)",
  "category": "dashboards",
  "tags": [
    "drone",
    "swarm",
    "fleet",
    "드론",
    "군집",
    "물류"
  ],
  "description": "스마트 팩토리 자율 비행 물류 드론 편대 위치 및 배터리/임무 실시간 추적.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "dashboard-autonomous-drone-fleet",
  "aiPromptGuidance": "군집 드론 위치 좌표와 상태 텔레메트리 관제 허브를 구현하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const DroneSwarmFleetDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span>자율 군집 드론 물류 관제 (Drone Swarm Fleet)</span>\n        <span className=\"text-emerald-400 font-mono text-[10px]\">● 64 Drones Active</span>\n      </div>\n      <div className=\"h-24 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 relative flex items-center justify-around\">\n        {[\n          { id: 'D-01', x: '10%', y: '30%', status: '배송중' },\n          { id: 'D-02', x: '40%', y: '60%', status: '충전중' },\n          { id: 'D-03', x: '70%', y: '20%', status: '귀환' }\n        ].map(d => (\n          <div key={d.id} className=\"flex flex-col items-center gap-1 font-mono text-[9px]\">\n            <div className=\"w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 font-bold animate-bounce\">\n              🛸\n            </div>\n            <span className=\"text-white font-bold\">{d.id}</span>\n            <span className=\"text-slate-400\">{d.status}</span>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};"
},
  {
  "id": "chart-marimekko-mosaic",
  "name": "마리메꼬 모자이크 차트 (Marimekko Mosaic Market Share)",
  "category": "charts",
  "tags": [
    "marimekko",
    "mosaic",
    "market",
    "마리메꼬",
    "모자이크",
    "점유율"
  ],
  "description": "가로축(시장 세그먼트 규모)과 세로축(품목별 점유율)을 면적 비례 사각형으로 표현.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-marimekko-mosaic",
  "aiPromptGuidance": "가로폭과 세로높이가 모두 가변적인 2D 마리메꼬 모자이크 차트를 구현하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const MarimekkoMosaicDemo: React.FC = () => {\n  const [selected, setSelected] = useState('스마트폰 OLED (40% x 60%)');\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span>마리메꼬 모자이크 차트 (Marimekko Mosaic)</span>\n        <span className=\"text-violet-400 font-mono text-[10px]\">{selected}</span>\n      </div>\n      <div className=\"h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 flex gap-1\">\n        {/* Col 1 (Width 60%) */}\n        <div className=\"flex-1 flex flex-col gap-1 h-full\" style={{ flex: '6' }}>\n          <div\n            onClick={() => setSelected('스마트폰 OLED (60% 시장 x 70% 점유)')}\n            className=\"bg-violet-600/80 hover:bg-violet-500 rounded p-1 text-[9px] font-bold text-white flex flex-col justify-between cursor-pointer\"\n            style={{ height: '70%' }}\n          >\n            <span>스마트폰 OLED</span><span>70%</span>\n          </div>\n          <div\n            onClick={() => setSelected('스마트폰 LCD (60% 시장 x 30% 점유)')}\n            className=\"bg-violet-800/80 hover:bg-violet-700 rounded p-1 text-[9px] text-violet-200 flex flex-col justify-between cursor-pointer\"\n            style={{ height: '30%' }}\n          >\n            <span>LCD</span><span>30%</span>\n          </div>\n        </div>\n        {/* Col 2 (Width 40%) */}\n        <div className=\"flex-1 flex flex-col gap-1 h-full\" style={{ flex: '4' }}>\n          <div\n            onClick={() => setSelected('TV/대형 디스플레이 (40% 시장 x 50% 점유)')}\n            className=\"bg-cyan-600/80 hover:bg-cyan-500 rounded p-1 text-[9px] font-bold text-white flex flex-col justify-between cursor-pointer\"\n            style={{ height: '50%' }}\n          >\n            <span>TV 대형 OLED</span><span>50%</span>\n          </div>\n          <div\n            onClick={() => setSelected('TV/기타 패널 (40% 시장 x 50% 점유)')}\n            className=\"bg-cyan-800/80 hover:bg-cyan-700 rounded p-1 text-[9px] text-cyan-200 flex flex-col justify-between cursor-pointer\"\n            style={{ height: '50%' }}\n          >\n            <span>기타 패널</span><span>50%</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// 18. Hexbin Density Scatter"
},
  {
  "id": "chart-hexbin-density",
  "name": "2D 육각 격자 밀도 분포 헥스빈 차트 (Hexbin Density Scatter)",
  "category": "charts",
  "tags": [
    "hexbin",
    "density",
    "scatter",
    "헥스빈",
    "밀도",
    "산포도"
  ],
  "description": "1만 개 이상의 산포도 포인트를 육각형 셀로 집계하여 농도별 히트맵으로 시각화.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-hexbin-density",
  "aiPromptGuidance": "2차원 평면을 정육각형 그리드로 분할하여 포인트 밀도를 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const HexbinDensityDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span>헥스빈 육각 격자 밀도 분포 (Hexbin 2D Density)</span>\n        <span className=\"text-emerald-400 font-mono text-[10px]\">10,000 Pts</span>\n      </div>\n      <div className=\"h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 relative flex items-center justify-center\">\n        <svg viewBox=\"0 0 240 80\" className=\"w-full h-full\">\n          {[\n            { cx: 40, cy: 30, col: '#10b981', count: 850 },\n            { cx: 70, cy: 30, col: '#059669', count: 420 },\n            { cx: 55, cy: 55, col: '#047857', count: 310 },\n            { cx: 100, cy: 30, col: '#8b5cf6', count: 940 },\n            { cx: 130, cy: 30, col: '#7c3aed', count: 620 },\n            { cx: 115, cy: 55, col: '#6d28d9', count: 410 },\n            { cx: 160, cy: 30, col: '#06b6d4', count: 780 },\n            { cx: 190, cy: 30, col: '#0891b2', count: 520 },\n            { cx: 175, cy: 55, col: '#0e7490', count: 340 }\n          ].map((h, i) => (\n            <g key={i} className=\"hover:opacity-80 cursor-pointer\">\n              <polygon\n                points={`${h.cx}, ${h.cy - 14} ${h.cx + 12}, ${h.cy - 7} ${h.cx + 12}, ${h.cy + 7} ${h.cx}, ${h.cy + 14} ${h.cx - 12}, ${h.cy + 7} ${h.cx - 12}, ${h.cy - 7}`}\n                fill={h.col}\n                stroke=\"#ffffff\"\n                strokeWidth=\"0.5\"\n              />\n              <text x={h.cx} y={h.cy + 3} fill=\"#ffffff\" fontSize=\"6\" fontFamily=\"monospace\" textAnchor=\"middle\">{h.count}</text>\n            </g>\n          ))}\n        </svg>\n      </div>\n    </div>\n  );\n};\n\n// 19. Dendrogram Cluster Tree"
},
  {
  "id": "chart-dendrogram-cluster",
  "name": "계층형 클러스터링 덴드로그램 수형도 (Dendrogram Tree)",
  "category": "charts",
  "tags": [
    "dendrogram",
    "cluster",
    "tree",
    "덴드로그램",
    "수형도",
    "군집"
  ],
  "description": "공정 센서 데이터 군집화(Clustering) 거리와 계층적 수형도 시각화.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-dendrogram-cluster",
  "aiPromptGuidance": "계층적 군집 거리를 나타내는 덴드로그램 브랜치 노드 트리를 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const DendrogramClusterDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span>덴드로그램 계층 클러스터링 (Dendrogram Tree)</span>\n        <span className=\"text-cyan-400 font-mono text-[10px]\">3 Clusters</span>\n      </div>\n      <div className=\"h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5\">\n        <svg viewBox=\"0 0 280 80\" className=\"w-full h-full\">\n          {/* Root node */}\n          <path d=\"M 20 40 H 80 M 80 20 V 60 M 80 20 H 140 M 80 60 H 140\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" fill=\"none\" />\n          <path d=\"M 140 20 V 30 M 140 10 H 200 M 140 30 H 200\" stroke=\"#8b5cf6\" strokeWidth=\"1.5\" fill=\"none\" />\n          <path d=\"M 140 60 V 70 M 140 50 H 200 M 140 70 H 200\" stroke=\"#06b6d4\" strokeWidth=\"1.5\" fill=\"none\" />\n          <circle cx=\"200\" cy=\"10\" r=\"3\" fill=\"#8b5cf6\" /><text x=\"210\" y=\"12\" fill=\"#cbd5e1\" fontSize=\"7\">공정 파라미터 A</text>\n          <circle cx=\"200\" cy=\"30\" r=\"3\" fill=\"#8b5cf6\" /><text x=\"210\" y=\"32\" fill=\"#cbd5e1\" fontSize=\"7\">공정 파라미터 B</text>\n          <circle cx=\"200\" cy=\"50\" r=\"3\" fill=\"#06b6d4\" /><text x=\"210\" y=\"52\" fill=\"#cbd5e1\" fontSize=\"7\">센서 진동 군집 C</text>\n          <circle cx=\"200\" cy=\"70\" r=\"3\" fill=\"#06b6d4\" /><text x=\"210\" y=\"72\" fill=\"#cbd5e1\" fontSize=\"7\">센서 온도 군집 D</text>\n        </svg>\n      </div>\n    </div>\n  );\n};\n\n// 20. Bump Ranking Transition Chart"
},
  {
  "id": "chart-bump-ranking",
  "name": "분기별 순위 랭킹 변동 범프 차트 (Bump Ranking Transition)",
  "category": "charts",
  "tags": [
    "bump",
    "ranking",
    "transition",
    "범프",
    "순위",
    "랭킹"
  ],
  "description": "시간의 흐름(Q1~Q4)에 따른 생산 라인별 품질 및 생산량 순위 교차 흐름.",
  "complexity": "Medium",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-bump-ranking",
  "aiPromptGuidance": "시간 경과에 따른 순위 랭킹 변동을 부드러운 곡선으로 연결하는 범프 차트입니다.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const BumpRankingDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span>범프 순위 랭킹 변동 차트 (Bump Ranking)</span>\n        <span className=\"text-emerald-400 font-mono text-[10px]\">Q1 ➔ Q4 순위</span>\n      </div>\n      <div className=\"h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5\">\n        <svg viewBox=\"0 0 300 80\" className=\"w-full h-full\">\n          {/* Rank 1 line: LINE-A */}\n          <path d=\"M 30 20 C 100 20, 120 40, 180 40 S 240 20, 270 20\" stroke=\"#10b981\" strokeWidth=\"2.5\" fill=\"none\" />\n          {/* Rank 2 line: LINE-B */}\n          <path d=\"M 30 40 C 100 40, 120 20, 180 20 S 240 60, 270 60\" stroke=\"#8b5cf6\" strokeWidth=\"2.5\" fill=\"none\" />\n          {/* Rank 3 line: LINE-C */}\n          <path d=\"M 30 60 C 100 60, 120 60, 180 60 S 240 40, 270 40\" stroke=\"#f59e0b\" strokeWidth=\"2.5\" fill=\"none\" />\n          \n          <circle cx=\"30\" cy=\"20\" r=\"4\" fill=\"#10b981\" /><text x=\"5\" y=\"23\" fill=\"#10b981\" fontSize=\"8\" fontWeight=\"bold\">1위</text>\n          <circle cx=\"180\" cy=\"20\" r=\"4\" fill=\"#8b5cf6\" />\n          <circle cx=\"270\" cy=\"20\" r=\"4\" fill=\"#10b981\" /><text x=\"278\" y=\"23\" fill=\"#10b981\" fontSize=\"8\" fontWeight=\"bold\">LINE-A</text>\n          <circle cx=\"270\" cy=\"40\" r=\"4\" fill=\"#f59e0b\" /><text x=\"278\" y=\"43\" fill=\"#f59e0b\" fontSize=\"8\" fontWeight=\"bold\">LINE-C</text>\n          <circle cx=\"270\" cy=\"60\" r=\"4\" fill=\"#8b5cf6\" /><text x=\"278\" y=\"63\" fill=\"#8b5cf6\" fontSize=\"8\" fontWeight=\"bold\">LINE-B</text>\n        </svg>\n      </div>\n    </div>\n  );\n};"
},
  {
  "id": "trending-spotlight-radial-card",
  "name": "Aceternity 스타일 스포트라이트 마우스 추적 카드 (Spotlight Radial Mask)",
  "category": "themes",
  "tags": [
    "spotlight",
    "radial",
    "aceternity",
    "magicui",
    "스포트라이트",
    "방사형"
  ],
  "description": "마우스 커서의 물리적 좌표를 추적하여 림라이트 방사형 조명을 비추는 스포트라이트 카드.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "trending-spotlight-radial-card",
  "aiPromptGuidance": "마우스 move 이벤트 기반 방사형 radial-gradient 마스크 스포트라이트 카드를 구현하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const InteractiveSpotlightCardDemo: React.FC = () => {\n  const [pos, setPos] = useState({ x: 50, y: 50 });\n  const [isHover, setIsHover] = useState(false);\n  const cardRef = useRef<HTMLDivElement>(null);\n\n  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {\n    if (!cardRef.current) return;\n    const rect = cardRef.current.getBoundingClientRect();\n    setPos({\n      x: e.clientX - rect.left,\n      y: e.clientY - rect.top\n    });\n  };\n\n  return (\n    <div\n      ref={cardRef}\n      onMouseMove={handleMouseMove}\n      onMouseEnter={() => setIsHover(true)}\n      onMouseLeave={() => setIsHover(false)}\n      className=\"relative overflow-hidden rounded-2xl bg-slate-900/90 border border-white/10 p-5 shadow-2xl transition-all group\"\n    >\n      {/* Dynamic Cursor Spotlight Radial Mask */}\n      {isHover && (\n        <div\n          className=\"pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100\"\n          style={{\n            background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(139, 92, 246, 0.25), transparent 80%)`\n          }}\n        />\n      )}\n      <div className=\"relative z-10 space-y-2\">\n        <div className=\"flex justify-between items-center\">\n          <span className=\"text-xs font-black text-white flex items-center gap-1.5\">\n            <Sparkles className=\"w-3.5 h-3.5 text-violet-400\" />\n            2026 스포트라이트 래디얼 카드 (Spotlight Mask)\n          </span>\n          <span className=\"text-[10px] text-violet-300 font-mono font-bold\">X: {Math.round(pos.x)} Y: {Math.round(pos.y)}</span>\n        </div>\n        <p className=\"text-xs text-slate-300 leading-relaxed\">\n          마우스 커서의 물리적 위치를 추적하여 림라이트 방사형 그라데이션 조명을 실시간 렌더링합니다.\n        </p>\n      </div>\n    </div>\n  );\n};\n\n// 2. Liquid Glass Card with Dynamic Distortion (2026 Glass Refraction)"
},
  {
  "id": "trending-liquid-glass-refraction",
  "name": "2026 리퀴드 글래스 굴절 패널 (Liquid Glass Backdrop Refraction)",
  "category": "themes",
  "tags": [
    "liquid",
    "glass",
    "refraction",
    "backdrop",
    "글래스",
    "굴절",
    "리퀴드"
  ],
  "description": "초미세 다단 블러(64px)와 채도 증폭, 배경 광원을 투과하는 리퀴드 글래스.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "trending-liquid-glass-refraction",
  "aiPromptGuidance": "Backdrop saturate(180%)와 64px 블러를 적용한 차세대 리퀴드 글래스를 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const LiquidGlassDistortionDemo: React.FC = () => {\n  return (\n    <div className=\"relative overflow-hidden rounded-2xl bg-gradient-to-tr from-white/[0.08] via-white/[0.02] to-transparent backdrop-blur-3xl border border-white/20 p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]\">\n      <div className=\"absolute -top-12 -left-12 w-32 h-32 bg-fuchsia-600/30 rounded-full blur-3xl pointer-events-none\" />\n      <div className=\"absolute -bottom-12 -right-12 w-32 h-32 bg-cyan-600/30 rounded-full blur-3xl pointer-events-none\" />\n      <div className=\"relative z-10 space-y-2\">\n        <div className=\"flex justify-between items-center text-xs font-black text-white\">\n          <span>리퀴드 글래스 (Liquid Glass Refraction)</span>\n          <span className=\"text-cyan-300 font-mono text-[10px]\">Backdrop 3xl</span>\n        </div>\n        <div className=\"p-2.5 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-emerald-400 flex justify-between\">\n          <span>backdrop-filter: blur(64px) saturate(180%);</span>\n          <span className=\"text-white font-bold\">✔ OK</span>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// 3. Magnetic Hover Pull Button (Physics Interaction)"
},
  {
  "id": "trending-magnetic-hover-button",
  "name": "자기장 물리 인력 마그네틱 버튼 (Magnetic Hover Pull Physics)",
  "category": "forms",
  "tags": [
    "magnetic",
    "physics",
    "hover",
    "마그네틱",
    "인력",
    "버튼"
  ],
  "description": "커서가 접근하면 요소 중심점이 마우스 방향으로 자연스럽게 끌려오는 마그네틱 인터랙션.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "trending-magnetic-hover-button",
  "aiPromptGuidance": "커서 위치 벡터 차이를 계산하여 translate3d로 인력을 구현한 마그네틱 버튼입니다.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const MagneticHoverButtonDemo: React.FC = () => {\n  const [offset, setOffset] = useState({ x: 0, y: 0 });\n  const btnRef = useRef<HTMLButtonElement>(null);\n\n  const handleMouseMove = (e: React.MouseEvent) => {\n    if (!btnRef.current) return;\n    const rect = btnRef.current.getBoundingClientRect();\n    const centerX = rect.left + rect.width / 2;\n    const centerY = rect.top + rect.height / 2;\n    setOffset({\n      x: (e.clientX - centerX) * 0.35,\n      y: (e.clientY - centerY) * 0.35\n    });\n  };\n\n  const handleMouseLeave = () => {\n    setOffset({ x: 0, y: 0 });\n  };\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl flex items-center justify-between\">\n      <div>\n        <span className=\"text-xs font-bold text-white block\">자기장 마그네틱 버튼 (Magnetic Hover)</span>\n        <span className=\"text-[10px] text-slate-400\">커서 근접 시 물리적 인력 흡착</span>\n      </div>\n      <button\n        ref={btnRef}\n        onMouseMove={handleMouseMove}\n        onMouseLeave={handleMouseLeave}\n        style={{\n          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`\n        }}\n        className=\"px-5 py-2.5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-black text-xs shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-transform duration-100 cursor-pointer active:scale-95\"\n      >\n        마그네틱 흡착 ✦\n      </button>\n    </div>\n  );\n};\n\n// 4. Sound Reactive Frequency Pulse"
},
  {
  "id": "trending-sound-reactive-equalizer",
  "name": "사운드 리액티브 실시간 오디오 주파수 펄스 (Sound Reactive Pulse)",
  "category": "ai-widgets",
  "tags": [
    "sound",
    "audio",
    "reactive",
    "equalizer",
    "사운드",
    "이퀄라이저",
    "주파수"
  ],
  "description": "오디오 비트 및 주파수 대역별 가변 진폭 높이를 동적으로 시각화하는 이퀄라이저.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "trending-sound-reactive-equalizer",
  "aiPromptGuidance": "오디오 주파수 대역 진폭을 시각화하는 동적 펄스 이퀄라이저 바를 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const SoundReactivePulseDemo: React.FC = () => {\n  const [isPlaying, setIsPlaying] = useState(true);\n  const bars = [25, 60, 90, 45, 80, 100, 70, 35, 85, 65, 40, 95];\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl space-y-3\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span className=\"flex items-center gap-1.5\"><Volume2 className=\"w-4 h-4 text-emerald-400\" /> 사운드 리액티브 주파수 이퀄라이저</span>\n        <button onClick={() => setIsPlaying(!isPlaying)} className={`text-[10px] px-2 py-0.5 rounded font-bold ${isPlaying ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/10 text-slate-400'}`}>\n          {isPlaying ? '● LIVE AUDIO' : 'PAUSED'}\n        </button>\n      </div>\n      <div className=\"flex items-end justify-between h-10 gap-1 bg-slate-950/80 p-2 rounded-xl border border-white/5\">\n        {bars.map((h, i) => (\n          <div\n            key={i}\n            className=\"flex-1 bg-gradient-to-t from-emerald-500 via-teal-400 to-cyan-300 rounded-full transition-all duration-150\"\n            style={{ height: isPlaying ? `${h}%` : '15%' }}\n          />\n        ))}\n      </div>\n    </div>\n  );\n};"
},
  {
  "id": "enterprise-ribbon-command-bar",
  "name": "Enterprise Desktop Standard 오피스 스타일 리본 커맨드 바 (Office Ribbon & Action Tabs)",
  "category": "navigation",
  "tags": [
    "enterprise",
    "desktop-ui",
    "ribbon",
    "office",
    "리본",
    "커맨드",
    "메뉴"
  ],
  "description": "Office / WPF 스타일 상단 리본 메뉴 탭과 그룹화된 도구 스트립.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "enterprise-ribbon-command-bar",
  "aiPromptGuidance": "Enterprise Desktop Standard WPF 스타일 오피스 리본 커맨드 툴바를 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const EnterpriseRibbonDemo: React.FC = () => {\n  const [activeTab, setActiveTab] = useState<'home' | 'data' | 'view'>('home');\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden text-xs\">\n      {/* Ribbon Tabs Header */}\n      <div className=\"flex items-center gap-1 px-3 pt-2 bg-slate-950 border-b border-white/10\">\n        <span className=\"px-2 py-0.5 rounded bg-violet-600 font-bold text-white text-[10px]\">FILE</span>\n        {[\n          { id: 'home', label: '홈 (Home)' },\n          { id: 'data', label: '데이터 분석 (Data)' },\n          { id: 'view', label: '보기 (View)' }\n        ].map(tab => (\n          <button\n            key={tab.id}\n            onClick={() => setActiveTab(tab.id as any)}\n            className={`px-3 py-1 rounded-t-lg font-bold transition-all ${\n              activeTab === tab.id ? 'bg-slate-900 text-white border-t-2 border-violet-500' : 'text-slate-400 hover:text-white'\n            }`}\n          >\n            {tab.label}\n          </button>\n        ))}\n      </div>\n      {/* Ribbon Tool Strip */}\n      <div className=\"p-2.5 bg-slate-900/90 flex items-center gap-3 overflow-x-auto text-[11px]\">\n        {activeTab === 'home' && (\n          <>\n            <div className=\"flex flex-col items-center gap-1 px-2 border-r border-white/10\">\n              <span className=\"p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-violet-400 cursor-pointer\">📋</span>\n              <span className=\"text-[9px] text-slate-400\">붙여넣기</span>\n            </div>\n            <div className=\"flex flex-col items-center gap-1 px-2 border-r border-white/10\">\n              <span className=\"p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold cursor-pointer\">⚡ 실행</span>\n              <span className=\"text-[9px] text-slate-400\">자동 분석</span>\n            </div>\n            <div className=\"flex flex-col items-center gap-1 px-2\">\n              <span className=\"p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 cursor-pointer\">💾 저장</span>\n              <span className=\"text-[9px] text-slate-400\">내보내기</span>\n            </div>\n          </>\n        )}\n        {activeTab === 'data' && (\n          <div className=\"flex items-center gap-2\">\n            <button className=\"px-2 py-1 rounded bg-violet-600 text-white font-bold text-[10px]\">피벗 새로고침</button>\n            <button className=\"px-2 py-1 rounded bg-white/5 text-slate-300 text-[10px]\">조건부 서식</button>\n            <button className=\"px-2 py-1 rounded bg-white/5 text-slate-300 text-[10px]\">SQL 쿼리 빌더</button>\n          </div>\n        )}\n        {activeTab === 'view' && (\n          <div className=\"flex items-center gap-2\">\n            <span className=\"text-slate-300 text-[10px]\">그리드 눈금선: <b>ON</b></span>\n            <span className=\"text-slate-300 text-[10px]\">도킹 패널: <b>좌우 분할</b></span>\n          </div>\n        )}\n      </div>\n    </div>\n  );\n};\n\n// 2. Enterprise PropertyGrid Inspector"
},
  {
  "id": "enterprise-property-grid-inspector",
  "name": "Enterprise Desktop Standard 정밀 프로퍼티 그리드 인스펙터 (PropertyGrid Editor)",
  "category": "forms",
  "tags": [
    "enterprise",
    "propertygrid",
    "inspector",
    "프로퍼티",
    "인스펙터",
    "속성"
  ],
  "description": "객체 속성 실시간 바인딩 및 타입별 인라인 에디터(숫자/텍스트/토글) 그리드.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "enterprise-property-grid-inspector",
  "aiPromptGuidance": "Enterprise Desktop Standard PropertyGrid 스타일 객체 속성 트리 및 인라인 에디터를 구현하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const EnterprisePropertyGridDemo: React.FC = () => {\n  const [props, setProps] = useState({\n    lineSpeed: '142 bpm',\n    targetYield: '99.8%',\n    autoCalibration: true,\n    alertThresholdPpm: 50\n  });\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3.5 shadow-2xl space-y-2 text-xs\">\n      <div className=\"flex justify-between items-center border-b border-white/10 pb-1.5 font-bold text-white\">\n        <span>엔터프라이즈 프로퍼티 그리드 (Property Inspector)</span>\n        <span className=\"text-[10px] text-violet-400 font-mono\">라인 파라미터</span>\n      </div>\n      <div className=\"space-y-1 font-mono text-[11px]\">\n        <div className=\"flex justify-between items-center p-1.5 rounded bg-slate-950/60 border border-white/5\">\n          <span className=\"text-slate-400\">설비 속도 (LineSpeed)</span>\n          <input\n            type=\"text\"\n            value={props.lineSpeed}\n            onChange={e => setProps({ ...props, lineSpeed: e.target.value })}\n            className=\"bg-transparent text-right text-cyan-300 font-bold focus:outline-none w-24 border-b border-transparent focus:border-cyan-500\"\n          />\n        </div>\n        <div className=\"flex justify-between items-center p-1.5 rounded bg-slate-950/60 border border-white/5\">\n          <span className=\"text-slate-400\">목표 수율 (TargetYield)</span>\n          <input\n            type=\"text\"\n            value={props.targetYield}\n            onChange={e => setProps({ ...props, targetYield: e.target.value })}\n            className=\"bg-transparent text-right text-emerald-400 font-bold focus:outline-none w-24 border-b border-transparent focus:border-emerald-500\"\n          />\n        </div>\n        <div className=\"flex justify-between items-center p-1.5 rounded bg-slate-950/60 border border-white/5\">\n          <span className=\"text-slate-400\">이상감지 임계치 (PPM)</span>\n          <input\n            type=\"number\"\n            value={props.alertThresholdPpm}\n            onChange={e => setProps({ ...props, alertThresholdPpm: Number(e.target.value) })}\n            className=\"bg-transparent text-right text-amber-400 font-bold focus:outline-none w-20 border-b border-transparent focus:border-amber-500\"\n          />\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// 3. Visual Tree Filter Editor (Expression Builder)"
},
  {
  "id": "enterprise-visual-filter-editor",
  "name": "Enterprise Desktop Standard 비주얼 필터 트리 에디터 (FilterEditor AND/OR Builder)",
  "category": "tables",
  "tags": [
    "enterprise",
    "filter",
    "sql",
    "필터",
    "조건문",
    "빌더"
  ],
  "description": "계층형 AND/OR 논리 연산자 트리 구조의 복합 쿼리 필터 빌더.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "enterprise-visual-filter-editor",
  "aiPromptGuidance": "Enterprise Desktop Standard FilterEditor 스타일 계층형 조건문 빌더를 작성하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const EnterpriseFilterEditorDemo: React.FC = () => {\n  const [op, setOp] = useState<'AND' | 'OR'>('AND');\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3.5 shadow-2xl space-y-2 text-xs\">\n      <div className=\"flex justify-between items-center border-b border-white/10 pb-1.5 font-bold text-white\">\n        <span>비주얼 필터 에디터 (FilterEditor)</span>\n        <button onClick={() => setOp(op === 'AND' ? 'OR' : 'AND')} className=\"px-2 py-0.5 rounded bg-violet-600 text-white font-mono font-bold text-[10px]\">\n          [{op}] 조건 결합\n        </button>\n      </div>\n      <div className=\"p-2 rounded-xl bg-slate-950 border border-white/5 space-y-1.5 font-mono text-[11px]\">\n        <div className=\"flex items-center gap-1.5 text-cyan-300\">\n          <span className=\"text-slate-500\">├─</span>\n          <span className=\"text-violet-400 font-bold\">[수율]</span>\n          <span>&gt;=</span>\n          <span className=\"bg-white/10 px-1.5 py-0.2 rounded text-emerald-400 font-bold\">99.0%</span>\n        </div>\n        <div className=\"flex items-center gap-1.5 text-cyan-300\">\n          <span className=\"text-slate-500\">└─</span>\n          <span className=\"text-violet-400 font-bold\">[불량PPM]</span>\n          <span>&lt;</span>\n          <span className=\"bg-white/10 px-1.5 py-0.2 rounded text-amber-400 font-bold\">50 PPM</span>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// 4. Interactive Node Flow Diagram"
},
  {
  "id": "enterprise-visio-diagram-flow",
  "name": "Enterprise Desktop Standard Visio 스타일 공정 흐름 다이어그램 (Diagram Control)",
  "category": "dashboards",
  "tags": [
    "enterprise",
    "visio",
    "diagram",
    "node",
    "다이어그램",
    "노드",
    "흐름도"
  ],
  "description": "공정 단계별 노드 연결선 및 상태 애니메이션 Visio 다이어그램.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "enterprise-visio-diagram-flow",
  "aiPromptGuidance": "Enterprise Desktop Standard Diagram 스타일 노드 및 연결선 흐름도를 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const EnterpriseDiagramDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3.5 shadow-2xl space-y-2 text-xs\">\n      <div className=\"flex justify-between items-center border-b border-white/10 pb-1.5 font-bold text-white\">\n        <span>인터랙티브 노드 공정 다이어그램 (Node Diagram)</span>\n        <span className=\"text-emerald-400 text-[10px]\">● 4 Nodes Active</span>\n      </div>\n      <div className=\"h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 relative flex items-center justify-between px-4\">\n        {/* Node 1 */}\n        <div className=\"p-2 rounded-xl bg-violet-600/30 border border-violet-500 text-center font-bold text-[10px] text-violet-200\">\n          1. 투입\n        </div>\n        <span className=\"text-slate-500 font-bold\">➔</span>\n        {/* Node 2 */}\n        <div className=\"p-2 rounded-xl bg-cyan-600/30 border border-cyan-500 text-center font-bold text-[10px] text-cyan-200\">\n          2. SMT 실장\n        </div>\n        <span className=\"text-slate-500 font-bold\">➔</span>\n        {/* Node 3 */}\n        <div className=\"p-2 rounded-xl bg-emerald-600/30 border border-emerald-500 text-center font-bold text-[10px] text-emerald-200 animate-pulse\">\n          3. AI 검사\n        </div>\n        <span className=\"text-slate-500 font-bold\">➔</span>\n        {/* Node 4 */}\n        <div className=\"p-2 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500 text-center font-bold text-[10px] text-fuchsia-200\">\n          4. 출하\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// 5. Multi-Window Docking Layout Manager"
},
  {
  "id": "enterprise-docking-layout-mdi",
  "name": "Enterprise Desktop Standard WPF 도킹 레이아웃 & MDI 패널 매니저 (Docking Layout)",
  "category": "themes",
  "tags": [
    "enterprise",
    "docking",
    "mdi",
    "layout",
    "도킹",
    "레이아웃",
    "분할"
  ],
  "description": "좌우/상하 패널 분할 및 고정(Pin), 부동(Floating) MDI 도킹 레이아웃.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "enterprise-docking-layout-mdi",
  "aiPromptGuidance": "Enterprise Desktop Standard Docking MDI 다단 분할 레이아웃 매니저를 구현하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const EnterpriseDockingDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3.5 shadow-2xl space-y-2 text-xs\">\n      <div className=\"flex justify-between items-center font-bold text-white\">\n        <span>엔터프라이즈 도킹 레이아웃 (Docking MDI)</span>\n        <span className=\"text-slate-400 text-[10px]\">패널 드래그 분할</span>\n      </div>\n      <div className=\"grid grid-cols-3 gap-1.5 h-24 text-[10px]\">\n        <div className=\"p-2 rounded-xl bg-slate-950 border border-white/10 flex flex-col justify-between\">\n          <span className=\"text-slate-400 font-bold\">탐색기 (Pinned)</span>\n          <span className=\"text-violet-300 font-mono\">BOM Tree</span>\n        </div>\n        <div className=\"col-span-2 p-2 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between\">\n          <div className=\"flex justify-between text-slate-400 font-bold\">\n            <span>메인 관제 뷰 (Active Document)</span>\n            <span className=\"text-emerald-400\">● 60 FPS</span>\n          </div>\n          <span className=\"text-cyan-300 font-mono\">Enterprise Realtime Engine</span>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// 6. Enterprise Formula Spreadsheet Matrix"
},
  {
  "id": "enterprise-excel-spreadsheet-matrix",
  "name": "Enterprise Desktop Standard 엑셀 수식 내장 스프레드시트 뷰 (Excel Spreadsheet)",
  "category": "tables",
  "tags": [
    "enterprise",
    "excel",
    "spreadsheet",
    "formula",
    "엑셀",
    "스프레드시트",
    "수식"
  ],
  "description": "셀 좌표(A1, B2), 내장 수식(=SUM), 통계 요약 행이 포함된 스프레드시트.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "enterprise-excel-spreadsheet-matrix",
  "aiPromptGuidance": "Enterprise Desktop Standard Spreadsheet 스타일 엑셀 셀 좌표 및 수식 연산 그리드를 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const EnterpriseSpreadsheetDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1.5 text-xs\">\n      <div className=\"flex justify-between items-center font-bold text-white\">\n        <span className=\"flex items-center gap-1.5\"><FileSpreadsheet className=\"w-4 h-4 text-emerald-400\" /> 엔터프라이즈 스프레드시트 뷰</span>\n        <span className=\"text-emerald-400 text-[10px] font-mono\">=SUM(B2:D2)</span>\n      </div>\n      <div className=\"overflow-x-auto\">\n        <table className=\"w-full text-left text-[10px] font-mono text-slate-300\">\n          <thead className=\"bg-slate-950 text-slate-500\">\n            <tr><th className=\"p-1\"></th><th className=\"p-1\">A</th><th className=\"p-1\">B</th><th className=\"p-1\">C (수식)</th></tr>\n          </thead>\n          <tbody className=\"divide-y divide-white/5\">\n            <tr>\n              <td className=\"p-1 text-slate-500 bg-slate-950\">1</td>\n              <td className=\"p-1 text-white\">생산원가</td>\n              <td className=\"p-1 text-cyan-300\">$1,420</td>\n              <td className=\"p-1 text-emerald-400 font-bold\">$1,420</td>\n            </tr>\n            <tr>\n              <td className=\"p-1 text-slate-500 bg-slate-950\">2</td>\n              <td className=\"p-1 text-white\">납품단가</td>\n              <td className=\"p-1 text-cyan-300\">$2,100</td>\n              <td className=\"p-1 text-emerald-400 font-bold\">+$680 (마진)</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  );\n};"
},
  {
  "id": "chart-sankey-flow",
  "name": "D3 스타일 제조 공정 에너지 & 자재 흐름 샌키 다이어그램 (Sankey Flow)",
  "category": "charts",
  "tags": [
    "sankey",
    "flow",
    "energy",
    "d3",
    "흐름도",
    "샌키",
    "에너지"
  ],
  "description": "원자재 투입부터 각 공정 분기 및 손실(Loss), 최종 완제품까지의 유량 에너지 노드 맵.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-sankey-flow",
  "aiPromptGuidance": "D3 스타일 샌키 플로우 다이어그램. 노드 간 가변 리본 폭과 곡선 베지어로 유량을 시각화하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const SankeyFlowDemo: React.FC = () => {\n  const [selectedFlow, setSelectedFlow] = useState<string | null>(null);\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span>샌키 자재/에너지 유량 (Sankey Flow)</span>\n        <span className=\"text-cyan-400 font-mono text-[10px]\">{selectedFlow || '흐름 선택'}</span>\n      </div>\n      <div className=\"h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 relative\">\n        <svg viewBox=\"0 0 320 90\" className=\"w-full h-full\">\n          {/* Left Nodes (Inputs) */}\n          <rect x=\"10\" y=\"10\" width=\"12\" height=\"70\" fill=\"#8b5cf6\" rx=\"2\" />\n          <text x=\"26\" y=\"25\" fill=\"#cbd5e1\" fontSize=\"8\" fontWeight=\"bold\">원자재 100%</text>\n\n          {/* Middle Nodes (Processes) */}\n          <rect x=\"150\" y=\"10\" width=\"12\" height=\"45\" fill=\"#06b6d4\" rx=\"2\" />\n          <text x=\"166\" y=\"25\" fill=\"#cbd5e1\" fontSize=\"7\">1공정 조립 65%</text>\n\n          <rect x=\"150\" y=\"60\" width=\"12\" height=\"20\" fill=\"#f59e0b\" rx=\"2\" />\n          <text x=\"166\" y=\"72\" fill=\"#cbd5e1\" fontSize=\"7\">2공정 가공 35%</text>\n\n          {/* Right Nodes (Outputs / Waste) */}\n          <rect x=\"290\" y=\"10\" width=\"12\" height=\"55\" fill=\"#10b981\" rx=\"2\" />\n          <text x=\"240\" y=\"25\" fill=\"#10b981\" fontSize=\"8\" fontWeight=\"bold\">양품 98.4%</text>\n\n          <rect x=\"290\" y=\"70\" width=\"12\" height=\"10\" fill=\"#ef4444\" rx=\"2\" />\n          <text x=\"250\" y=\"80\" fill=\"#ef4444\" fontSize=\"7\">Loss 1.6%</text>\n\n          {/* Flow Ribbons (Curved Beziers) */}\n          <path\n            d=\"M 22 25 C 80 25, 80 25, 150 25 L 150 45 C 80 45, 80 45, 22 45 Z\"\n            fill=\"rgba(6, 182, 212, 0.3)\"\n            className=\"hover:fill-cyan-500/60 cursor-pointer transition-colors\"\n            onClick={() => setSelectedFlow('원자재 ➔ 1공정: 65%')}\n          />\n          <path\n            d=\"M 22 55 C 80 55, 80 70, 150 70 L 150 80 C 80 80, 80 75, 22 75 Z\"\n            fill=\"rgba(245, 158, 11, 0.3)\"\n            className=\"hover:fill-amber-500/60 cursor-pointer transition-colors\"\n            onClick={() => setSelectedFlow('원자재 ➔ 2공정: 35%')}\n          />\n          <path\n            d=\"M 162 25 C 220 25, 220 20, 290 20 L 290 55 C 220 55, 220 45, 162 45 Z\"\n            fill=\"rgba(16, 185, 129, 0.3)\"\n            className=\"hover:fill-emerald-500/60 cursor-pointer transition-colors\"\n            onClick={() => setSelectedFlow('공정 ➔ 최종 완제품: 98.4%')}\n          />\n        </svg>\n      </div>\n    </div>\n  );\n};\n\n// 14. Sunburst Hierarchy"
},
  {
  "id": "chart-sunburst-hierarchy",
  "name": "계층형 다차원 동심원 썬버스트 (Sunburst Hierarchy) 드릴다운",
  "category": "charts",
  "tags": [
    "sunburst",
    "hierarchy",
    "pie",
    "썬버스트",
    "동심원",
    "계층"
  ],
  "description": "중심(대분류)에서 외곽(소분류/부품)으로 뻗어나가는 다층 링 드릴다운 시각화.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-sunburst-hierarchy",
  "aiPromptGuidance": "동심원 형태의 썬버스트 파티션 차트. 링 클릭 시 해당 하위 세그먼트로 줌인 확대되도록 구현하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const SunburstHierarchyDemo: React.FC = () => {\n  const [level, setLevel] = useState('전사 제조본부');\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white mb-1\">\n        <span>동심원 썬버스트 계층 드릴다운</span>\n        <span className=\"text-violet-400 font-mono text-[10px]\">{level}</span>\n      </div>\n      <div className=\"relative w-28 h-28 mx-auto flex items-center justify-center\">\n        <svg viewBox=\"0 0 120 120\" className=\"w-full h-full -rotate-90\">\n          {/* Inner Ring (Root) */}\n          <circle cx=\"60\" cy=\"60\" r=\"20\" fill=\"#8b5cf6\" className=\"cursor-pointer hover:opacity-80\" onClick={() => setLevel('Root: 전사 제조본부')} />\n          {/* Middle Ring (Plants) */}\n          <circle cx=\"60\" cy=\"60\" r=\"34\" stroke=\"#06b6d4\" strokeWidth=\"10\" fill=\"none\" strokeDasharray=\"100 114\" strokeDashoffset=\"0\" className=\"cursor-pointer hover:opacity-80\" onClick={() => setLevel('1공장 디스플레이')} />\n          <circle cx=\"60\" cy=\"60\" r=\"34\" stroke=\"#f59e0b\" strokeWidth=\"10\" fill=\"none\" strokeDasharray=\"60 154\" strokeDashoffset=\"-100\" className=\"cursor-pointer hover:opacity-80\" onClick={() => setLevel('2공장 반도체')} />\n          <circle cx=\"60\" cy=\"60\" r=\"34\" stroke=\"#10b981\" strokeWidth=\"10\" fill=\"none\" strokeDasharray=\"54 160\" strokeDashoffset=\"-160\" className=\"cursor-pointer hover:opacity-80\" onClick={() => setLevel('3공장 광학')} />\n          {/* Outer Ring (Lines) */}\n          <circle cx=\"60\" cy=\"60\" r=\"48\" stroke=\"#3b82f6\" strokeWidth=\"8\" fill=\"none\" strokeDasharray=\"50 250\" strokeDashoffset=\"0\" className=\"cursor-pointer hover:opacity-80\" onClick={() => setLevel('LINE-A (OLED)')} />\n          <circle cx=\"60\" cy=\"60\" r=\"48\" stroke=\"#a855f7\" strokeWidth=\"8\" fill=\"none\" strokeDasharray=\"50 250\" strokeDashoffset=\"-50\" className=\"cursor-pointer hover:opacity-80\" onClick={() => setLevel('LINE-B (SMT)')} />\n        </svg>\n        <div className=\"absolute inset-0 flex items-center justify-center pointer-events-none\">\n          <span className=\"text-[9px] font-bold text-white text-center leading-none\">드릴다운<br />Click</span>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// 15. Boxplot & Outlier"
},
  {
  "id": "chart-boxplot-outlier",
  "name": "공정 치수 편차 박스플롯 & 이상치 (Boxplot IQR & Outlier)",
  "category": "charts",
  "tags": [
    "boxplot",
    "iqr",
    "outlier",
    "박스플롯",
    "사분위수",
    "이상치"
  ],
  "description": "중앙값(Q2), 사분위범위(Q1~Q3), 최소/최대 수염 및 이상치 점(Outlier Dot) 표시.",
  "complexity": "Medium",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-boxplot-outlier",
  "aiPromptGuidance": "박스와 수염, 이상치 도트를 렌더링하는 통계 박스플롯입니다.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const BoxplotOutlierDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span>공정 치수 편차 박스플롯 (Boxplot IQR)</span>\n        <span className=\"text-emerald-400 font-mono text-[10px]\">정상 분포</span>\n      </div>\n      <div className=\"h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 flex items-center justify-around font-mono text-[9px]\">\n        {/* Boxplot 1 */}\n        <div className=\"flex flex-col items-center\">\n          <div className=\"relative w-12 h-20 flex flex-col items-center justify-center\">\n            <line x1=\"24\" y1=\"5\" x2=\"24\" y2=\"75\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" />\n            <line x1=\"12\" y1=\"5\" x2=\"36\" y2=\"5\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" />\n            <line x1=\"12\" y1=\"75\" x2=\"36\" y2=\"75\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" />\n            <div className=\"absolute inset-x-2 top-4 bottom-5 bg-violet-600/40 border border-violet-400 rounded flex items-center justify-center\">\n              <line x1=\"0\" y1=\"18\" x2=\"32\" y2=\"18\" stroke=\"#ffffff\" strokeWidth=\"2\" />\n            </div>\n            {/* Outlier Dot */}\n            <circle cx=\"24\" cy=\"2\" r=\"2.5\" fill=\"#ef4444\" />\n          </div>\n          <span className=\"text-slate-400 mt-1\">두께 (T)</span>\n        </div>\n\n        {/* Boxplot 2 */}\n        <div className=\"flex flex-col items-center\">\n          <div className=\"relative w-12 h-20 flex flex-col items-center justify-center\">\n            <line x1=\"24\" y1=\"10\" x2=\"24\" y2=\"70\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" />\n            <line x1=\"12\" y1=\"10\" x2=\"36\" y2=\"10\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" />\n            <line x1=\"12\" y1=\"70\" x2=\"36\" y2=\"70\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" />\n            <div className=\"absolute inset-x-2 top-6 bottom-7 bg-emerald-600/40 border border-emerald-400 rounded flex items-center justify-center\">\n              <line x1=\"0\" y1=\"15\" x2=\"32\" y2=\"15\" stroke=\"#ffffff\" strokeWidth=\"2\" />\n            </div>\n          </div>\n          <span className=\"text-slate-400 mt-1\">폭 (W)</span>\n        </div>\n\n        {/* Boxplot 3 */}\n        <div className=\"flex flex-col items-center\">\n          <div className=\"relative w-12 h-20 flex flex-col items-center justify-center\">\n            <line x1=\"24\" y1=\"15\" x2=\"24\" y2=\"65\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" />\n            <line x1=\"12\" y1=\"15\" x2=\"36\" y2=\"15\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" />\n            <line x1=\"12\" y1=\"65\" x2=\"36\" y2=\"65\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" />\n            <div className=\"absolute inset-x-2 top-7 bottom-8 bg-cyan-600/40 border border-cyan-400 rounded flex items-center justify-center\">\n              <line x1=\"0\" y1=\"12\" x2=\"32\" y2=\"12\" stroke=\"#ffffff\" strokeWidth=\"2\" />\n            </div>\n          </div>\n          <span className=\"text-slate-400 mt-1\">길이 (L)</span>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// 16. Stephen Few Bullet Chart"
},
  {
  "id": "chart-bullet-performance",
  "name": "스티븐 퓨(Stephen Few) 표준 불릿 그래프 (Bullet Target Bar)",
  "category": "charts",
  "tags": [
    "bullet",
    "kpi",
    "target",
    "불릿",
    "목표달성",
    "게이지"
  ],
  "description": "정성적 범위(나쁨/만족/우수), 목표치(수직 바), 실제 달성치(중앙 바) 초압축 게이지.",
  "complexity": "Simple",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-bullet-performance",
  "aiPromptGuidance": "배경 3단계 그라데이션 범위와 목표치 마커, 실제치 바를 결합한 불릿 차트입니다.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const BulletPerformanceDemo: React.FC = () => {\n  const [val, setVal] = useState(84);\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-3\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span>스티븐 퓨 불릿 그래프 (Bullet Target)</span>\n        <span className=\"text-emerald-400 font-mono text-[11px]\">{val} / 목표 90</span>\n      </div>\n      {/* Bullet Bar Container */}\n      <div className=\"relative h-6 bg-slate-950 rounded-lg overflow-hidden border border-white/10 flex items-center\">\n        {/* Background Ranges (Bad / Satisfactory / Good) */}\n        <div className=\"absolute inset-y-0 left-0 w-[50%] bg-slate-800\" title=\"미달 (0~50)\" />\n        <div className=\"absolute inset-y-0 left-[50%] w-[35%] bg-slate-700\" title=\"보통 (50~85)\" />\n        <div className=\"absolute inset-y-0 left-[85%] w-[15%] bg-slate-600\" title=\"우수 (85~100)\" />\n        {/* Actual Performance Bar */}\n        <div className=\"absolute inset-y-1.5 left-0 bg-emerald-400 rounded-r shadow-[0_0_8px_#10b981] transition-all\" style={{ width: `${val}%` }} />\n        {/* Target Marker */}\n        <div className=\"absolute inset-y-0 left-[90%] w-1 bg-rose-400 shadow-md\" title=\"타겟 목표치: 90\" />\n      </div>\n      <div className=\"flex justify-between text-[10px] text-slate-400 font-mono\">\n        <span>0 (최저)</span>\n        <span className=\"text-rose-400 font-bold\">목표선 (90)</span>\n        <span>100 (만점)</span>\n      </div>\n    </div>\n  );\n};\n\n// 17. Marimekko Mosaic Plot"
},
  {
    "id": "chart-candlestick-trading",
    "name": "실시간 SPC 통계적 공정 관리도 (X-bar & R 관리한계선 UCL/LCL)",
    "category": "charts",
    "tags": [
      "chart",
      "candlestick",
      "trading",
      "finance",
      "crypto",
      "캔들",
      "주식",
      "차트",
      "거래량"
    ],
    "description": "중심선(CL) 및 상/하한 관리선(UCL/LCL) 기준 실시간 불량 이상치(Anomaly) 자동 감지 및 보간 선형 관리도.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "chart-candlestick-trading",
    "aiPromptGuidance": "금융용 캔들스틱 및 거래량 복합 차트. 상승/하락 캔들과 MA선을 SVG로 직접 렌더링하세요.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const SpcQualityControlDemo: React.FC = () => {\n  const [ucl] = useState(105);\n  const [lcl] = useState(95);\n  const [cl] = useState(100);\n  const [points, setPoints] = useState([98.2, 99.5, 101.4, 100.2, 103.8, 99.1, 102.3, 104.1]);\n  const [anomaly, setAnomaly] = useState(false);\n\n  const addPoint = () => {\n    const val = Number((97 + Math.random() * 8).toFixed(1));\n    setPoints(p => [...p.slice(1), val]);\n    if (val > ucl || val < lcl) setAnomaly(true);\n    else setAnomaly(false);\n  };\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between items-center\">\n        <div>\n          <span className=\"text-xs font-black text-white flex items-center gap-1.5\">\n            <span className=\"w-2 h-2 rounded-full bg-emerald-400 animate-pulse\" />\n            SPC 관리도 (X-bar / R 관리 한계선)\n          </span>\n          <span className=\"text-[10px] text-slate-400 font-mono\">UCL: 105.0 | CL: 100.0 | LCL: 95.0</span>\n        </div>\n        <button onClick={addPoint} className=\"text-[10px] px-2 py-0.5 rounded bg-violet-600 hover:bg-violet-500 text-white font-bold\">\n          샘플링 측정\n        </button>\n      </div>\n\n      <div className=\"h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 relative\">\n        <svg viewBox=\"0 0 300 80\" className=\"w-full h-full\">\n          {/* UCL / LCL Lines */}\n          <line x1=\"0\" y1=\"12\" x2=\"300\" y2=\"12\" stroke=\"#ef4444\" strokeWidth=\"1\" strokeDasharray=\"3 3\" />\n          <text x=\"5\" y=\"10\" fill=\"#ef4444\" fontSize=\"7\" fontFamily=\"monospace\">UCL: 105.0</text>\n          \n          <line x1=\"0\" y1=\"40\" x2=\"300\" y2=\"40\" stroke=\"#10b981\" strokeWidth=\"1\" />\n          <text x=\"5\" y=\"38\" fill=\"#10b981\" fontSize=\"7\" fontFamily=\"monospace\">CL: 100.0</text>\n          \n          <line x1=\"0\" y1=\"68\" x2=\"300\" y2=\"68\" stroke=\"#ef4444\" strokeWidth=\"1\" strokeDasharray=\"3 3\" />\n          <text x=\"5\" y=\"66\" fill=\"#ef4444\" fontSize=\"7\" fontFamily=\"monospace\">LCL: 95.0</text>\n\n          {/* Connected Trend Line */}\n          <polyline\n            fill=\"none\"\n            stroke=\"#06b6d4\"\n            strokeWidth=\"2\"\n            points={points.map((pt, i) => `${20 + i * 36},${80 - (pt - 92) * 5}`).join(' ')}\n          />\n\n          {/* Data Points with Deviation Inspection */}\n          {points.map((pt, i) => {\n            const cx = 20 + i * 36;\n            const cy = 80 - (pt - 92) * 5;\n            const isOut = pt > ucl || pt < lcl;\n            return (\n              <g key={i}>\n                <circle cx={cx} cy={cy} r={isOut ? \"4.5\" : \"3\"} fill={isOut ? \"#ef4444\" : \"#06b6d4\"} stroke=\"#ffffff\" strokeWidth=\"1\" />\n                <text x={cx} y={cy - 5} fill=\"#cbd5e1\" fontSize=\"6\" fontFamily=\"monospace\" textAnchor=\"middle\">{pt}</text>\n              </g>\n            );\n          })}\n        </svg>\n      </div>\n      {anomaly && (\n        <div className=\"p-1 rounded bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[10px] font-bold text-center animate-pulse\">\n          ⚠️ 관리 한계선 이탈 발생! 공정 인자 즉시 보정 권장\n        </div>\n      )}\n    </div>\n  );\n};\n\n// 2. Multi-Level Donut"
  },
  {
    "id": "chart-donut-allocation",
    "name": "인터랙티브 멀티 세그먼트 도넛 비중 차트 (중앙 총액)",
    "category": "charts",
    "tags": [
      "chart",
      "donut",
      "pie",
      "portfolio",
      "allocation",
      "도넛",
      "파이",
      "비중",
      "원형"
    ],
    "description": "중앙 총액 메트릭, 호버 시 세그먼트 확대, 컬러풀 범례 및 비율(%)이 표시되는 현대적 도넛 차트.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "chart-donut-allocation",
    "aiPromptGuidance": "SVG 원형 도넛 비중 차트. strokeDasharray와 strokeDashoffset으로 각 자산 비중을 분할 렌더링하세요.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const DonutAllocationDemo: React.FC = () => {\n  const [selected, setSelected] = useState('OLED 스마트조립');\n  const items = [\n    { label: 'OLED 스마트조립', pct: 45, col: '#8b5cf6', val: '450 EA' },\n    { label: 'SMT 고속실장', pct: 25, col: '#06b6d4', val: '250 EA' },\n    { label: '광학렌즈 모듈', pct: 20, col: '#f59e0b', val: '200 EA' },\n    { label: '최종 에이징검사', pct: 10, col: '#10b981', val: '100 EA' }\n  ];\n  const cur = items.find(i => i.label === selected) || items[0];\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl\">\n      <div className=\"flex items-center justify-between text-xs font-bold text-white mb-2\">\n        <span>공정별 생산 비중 (Donut)</span>\n        <span className=\"text-violet-400 font-mono text-[11px]\">1,000 EA Total</span>\n      </div>\n      <div className=\"flex items-center gap-3\">\n        <div className=\"relative w-24 h-24 shrink-0 mx-auto\">\n          <svg viewBox=\"0 0 100 100\" className=\"w-full h-full -rotate-90\">\n            <circle cx=\"50\" cy=\"50\" r=\"38\" stroke=\"#8b5cf6\" strokeWidth=\"14\" fill=\"none\" strokeDasharray=\"107 132\" strokeDashoffset=\"0\" className=\"cursor-pointer hover:opacity-80\" onClick={() => setSelected('OLED 스마트조립')} />\n            <circle cx=\"50\" cy=\"50\" r=\"38\" stroke=\"#06b6d4\" strokeWidth=\"14\" fill=\"none\" strokeDasharray=\"60 179\" strokeDashoffset=\"-107\" className=\"cursor-pointer hover:opacity-80\" onClick={() => setSelected('SMT 고속실장')} />\n            <circle cx=\"50\" cy=\"50\" r=\"38\" stroke=\"#f59e0b\" strokeWidth=\"14\" fill=\"none\" strokeDasharray=\"48 191\" strokeDashoffset=\"-167\" className=\"cursor-pointer hover:opacity-80\" onClick={() => setSelected('광학렌즈 모듈')} />\n            <circle cx=\"50\" cy=\"50\" r=\"38\" stroke=\"#10b981\" strokeWidth=\"14\" fill=\"none\" strokeDasharray=\"24 215\" strokeDashoffset=\"-215\" className=\"cursor-pointer hover:opacity-80\" onClick={() => setSelected('최종 에이징검사')} />\n          </svg>\n          <div className=\"absolute inset-0 flex flex-col items-center justify-center text-center\">\n            <span className=\"text-[10px] font-bold text-white\">{cur.pct}%</span>\n            <span className=\"text-[8px] text-slate-400 font-mono\">{cur.val}</span>\n          </div>\n        </div>\n        <div className=\"text-[10px] space-y-1 text-slate-300\">\n          {items.map(it => (\n            <button key={it.label} onClick={() => setSelected(it.label)} className={`flex items-center justify-between w-full px-1.5 py-0.5 rounded transition-all ${selected === it.label ? 'bg-white/10 font-bold text-white' : 'hover:bg-white/5'}`}>\n              <span className=\"flex items-center gap-1.5\"><span className=\"w-2 h-2 rounded-full\" style={{ backgroundColor: it.col }} /> {it.label}</span>\n              <span className=\"font-mono text-slate-400\">{it.pct}%</span>\n            </button>\n          ))}\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// 3. Radar Skills"
  },
  {
    "id": "chart-radar-skills",
    "name": "육각형 다차원 스파이더 레이더 역량 벤치마크 차트",
    "category": "charts",
    "tags": [
      "chart",
      "radar",
      "spider",
      "polygon",
      "skill",
      "다각형",
      "레이더",
      "역량",
      "비교"
    ],
    "description": "6개 축(AI, 코드품질, 아키텍처, 속도, 보안, UX) 다차원 폴리곤 비교 시각화.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "chart-radar-skills",
    "aiPromptGuidance": "6축 다각형 스파이더 레이더 차트. 정육각형 그리드망과 데이터 폴리곤 영역을 렌더링하세요.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const RadarSkillsDemo: React.FC = () => {\n  const [mode, setMode] = useState<'lineA' | 'lineB'>('lineA');\n  const pointsA = \"80,24 130,52 120,110 80,132 38,105 34,52\";\n  const pointsB = \"80,35 115,60 135,115 80,120 45,95 40,65\";\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl\">\n      <div className=\"flex items-center justify-between text-xs font-bold text-white mb-1\">\n        <span>6각 품질역량 벤치마크</span>\n        <div className=\"flex gap-1 text-[9px]\">\n          <button onClick={() => setMode('lineA')} className={`px-2 py-0.5 rounded ${mode === 'lineA' ? 'bg-emerald-500 text-black font-bold' : 'bg-white/5 text-slate-400'}`}>LINE-A</button>\n          <button onClick={() => setMode('lineB')} className={`px-2 py-0.5 rounded ${mode === 'lineB' ? 'bg-violet-500 text-white font-bold' : 'bg-white/5 text-slate-400'}`}>LINE-B</button>\n        </div>\n      </div>\n      <div className=\"relative h-32 w-full flex items-center justify-center\">\n        <svg viewBox=\"0 0 160 160\" className=\"w-full h-full\">\n          <polygon points=\"80,15 136,47 136,113 80,145 24,113 24,47\" fill=\"none\" stroke=\"rgba(255,255,255,0.08)\" strokeWidth=\"1\" />\n          <polygon points=\"80,35 118,57 118,103 80,125 42,103 42,57\" fill=\"none\" stroke=\"rgba(255,255,255,0.05)\" strokeWidth=\"1\" />\n          <polygon points={mode === 'lineA' ? pointsA : pointsB} fill={mode === 'lineA' ? \"rgba(16, 185, 129, 0.3)\" : \"rgba(139, 92, 246, 0.3)\"} stroke={mode === 'lineA' ? \"#10b981\" : \"#8b5cf6\"} strokeWidth=\"2\" />\n          <text x=\"80\" y=\"10\" fill=\"#94a3b8\" fontSize=\"7\" textAnchor=\"middle\">치수정밀도</text>\n          <text x=\"142\" y=\"50\" fill=\"#94a3b8\" fontSize=\"7\">표면조도</text>\n          <text x=\"142\" y=\"118\" fill=\"#94a3b8\" fontSize=\"7\">인장강도</text>\n          <text x=\"80\" y=\"155\" fill=\"#94a3b8\" fontSize=\"7\" textAnchor=\"middle\">내열성</text>\n          <text x=\"18\" y=\"118\" fill=\"#94a3b8\" fontSize=\"7\" textAnchor=\"end\">절연저항</text>\n          <text x=\"18\" y=\"50\" fill=\"#94a3b8\" fontSize=\"7\" textAnchor=\"end\">도막두께</text>\n        </svg>\n      </div>\n    </div>\n  );\n};\n\n// 4. Activity Heatmap"
  },
  {
    "id": "chart-activity-heatmap",
    "name": "GitHub 스타일 연간 기여도 & 시간대별 활동 잔디 히트맵",
    "category": "charts",
    "tags": [
      "chart",
      "heatmap",
      "activity",
      "github",
      "commit",
      "히트맵",
      "잔디",
      "활동량"
    ],
    "description": "날짜별/시간대별 활동 밀도를 녹색/보라색 5단계 강도로 보여주는 매트릭스 히트맵.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "chart-activity-heatmap",
    "aiPromptGuidance": "GitHub 커밋 잔디 스타일 활동 히트맵. 5단계 색상 농도로 일별 밀도를 표시하세요.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const ActivityHeatmapDemo: React.FC = () => {\n  const [filter, setFilter] = useState<number | null>(null);\n  const weeks = Array.from({ length: 16 }, (_, wi) => Array.from({ length: 5 }, (_, di) => (wi * 3 + di * 7) % 5));\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl\">\n      <div className=\"flex items-center justify-between text-xs font-bold text-white mb-2\">\n        <span>연간 설비 가동 히트맵</span>\n        <div className=\"flex items-center gap-1 text-[9px] text-slate-400\">\n          <span>강도:</span>\n          {[1, 2, 3, 4].map(lvl => (\n            <button key={lvl} onClick={() => setFilter(filter === lvl ? null : lvl)} className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center font-mono ${filter === lvl ? 'ring-2 ring-white font-bold text-white' : ''} ${lvl === 4 ? 'bg-emerald-500' : lvl === 3 ? 'bg-emerald-600' : lvl === 2 ? 'bg-emerald-800' : 'bg-emerald-950'}`}>\n              {lvl}\n            </button>\n          ))}\n        </div>\n      </div>\n      <div className=\"flex gap-1 overflow-x-auto pb-1\">\n        {weeks.map((week, wIdx) => (\n          <div key={wIdx} className=\"flex flex-col gap-1\">\n            {week.map((level, dIdx) => {\n              const dim = filter !== null && filter !== level;\n              return (\n                <div\n                  key={dIdx}\n                  title={`Week ${wIdx + 1}, Day ${dIdx + 1}: ${level * 20}% 부하`}\n                  className={`w-3 h-3 rounded-sm transition-opacity ${dim ? 'opacity-20' : 'opacity-100'} ${\n                    level === 4 ? 'bg-emerald-500 border border-emerald-400' :\n                    level === 3 ? 'bg-emerald-600 border border-emerald-500' :\n                    level === 2 ? 'bg-emerald-800 border border-emerald-700' :\n                    level === 1 ? 'bg-emerald-950 border border-emerald-900' :\n                    'bg-white/[0.03] border border-white/5'\n                  }`}\n                />\n              );\n            })}\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// 5. Stream Area RPS"
  },
  {
    "id": "analytics-chart-stream",
    "name": "실시간 초당 처리량(RPS) 네온 스트림 에어리어 차트",
    "category": "charts",
    "tags": [
      "chart",
      "stream",
      "area",
      "metric",
      "traffic",
      "트래픽",
      "스트림",
      "차트"
    ],
    "description": "부드러운 베지어 곡선과 네온 그라데이션 영역 채우기, 피크 인디케이터.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "analytics-chart-stream",
    "aiPromptGuidance": "실시간 트래픽 스트림 영역 차트. SVG 곡선 경로와 그라데이션 면적을 렌더링하세요.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const StreamAreaDemo: React.FC = () => {\n  const [tps, setTps] = useState(1420);\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl\">\n      <div className=\"flex items-center justify-between mb-2\">\n        <span className=\"text-xs font-bold text-white flex items-center gap-1\">\n          <Activity className=\"w-3.5 h-3.5 text-cyan-400 animate-pulse\" />\n          초당 공정 센서 패킷 (TPS)\n        </span>\n        <button onClick={() => setTps(Math.floor(Math.random() * 800) + 1200)} className=\"text-cyan-400 font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20\">\n          {tps.toLocaleString()} TPS (갱신)\n        </button>\n      </div>\n      <div className=\"h-28 w-full\">\n        <svg viewBox=\"0 0 400 120\" className=\"w-full h-full\">\n          <defs>\n            <linearGradient id=\"streamGrad2\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n              <stop offset=\"0%\" stopColor=\"#06b6d4\" stopOpacity=\"0.5\" />\n              <stop offset=\"100%\" stopColor=\"#06b6d4\" stopOpacity=\"0.0\" />\n            </linearGradient>\n          </defs>\n          <path d=\"M 0 80 Q 70 30, 140 60 T 280 20 T 400 50 L 400 120 L 0 120 Z\" fill=\"url(#streamGrad2)\" />\n          <path d=\"M 0 80 Q 70 30, 140 60 T 280 20 T 400 50\" fill=\"none\" stroke=\"#06b6d4\" strokeWidth=\"2.5\" />\n          <circle cx=\"280\" cy=\"20\" r=\"4\" fill=\"#10b981\" className=\"animate-ping\" />\n          <circle cx=\"280\" cy=\"20\" r=\"3\" fill=\"#10b981\" />\n        </svg>\n      </div>\n    </div>\n  );\n};\n\n// 6. Dual Bar Comparison"
  },
  {
    "id": "chart-bar-comparison-dual",
    "name": "예측 vs 실적 듀얼 컬럼 막대 바 차트 (달성률 뱃지)",
    "category": "charts",
    "tags": [
      "chart",
      "bar",
      "comparison",
      "dual",
      "막대",
      "비교",
      "분기"
    ],
    "description": "예측값 대비 실적 달성률을 나란히 비교하는 듀얼 막대 그래프.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "chart-bar-comparison-dual",
    "aiPromptGuidance": "목표치와 실적치를 나란히 배치하는 듀얼 컬럼 바 차트입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const DualBarComparisonDemo: React.FC = () => {\n  const data = [\n    { label: '1공장', target: 80, actual: 95 },\n    { label: '2공장', target: 100, actual: 110 },\n    { label: '3공장', target: 120, actual: 105 },\n    { label: '4공장', target: 140, actual: 155 }\n  ];\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl\">\n      <div className=\"flex items-center justify-between text-xs font-bold text-white mb-2\">\n        <span>공장별 계획 vs 실적 듀얼 막대</span>\n        <div className=\"flex items-center gap-2 text-[10px]\">\n          <span className=\"flex items-center gap-1 text-slate-400\"><span className=\"w-2 h-2 rounded-sm bg-slate-600\" /> 계획</span>\n          <span className=\"flex items-center gap-1 text-emerald-400\"><span className=\"w-2 h-2 rounded-sm bg-emerald-500\" /> 실적</span>\n        </div>\n      </div>\n      <div className=\"grid grid-cols-4 gap-3 items-end h-28 pt-2\">\n        {data.map(d => (\n          <div key={d.label} className=\"flex flex-col items-center gap-1 h-full justify-end\">\n            <div className=\"flex gap-1 items-end w-full justify-center h-20\">\n              <div className=\"w-3 bg-slate-700 rounded-t\" style={{ height: `${(d.target / 160) * 100}%` }} />\n              <div className=\"w-3 bg-gradient-to-t from-emerald-600 to-teal-500 rounded-t shadow-[0_0_8px_#10b981]\" style={{ height: `${(d.actual / 160) * 100}%` }} />\n            </div>\n            <span className=\"text-[10px] text-slate-400 font-bold\">{d.label}</span>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// 7. Bubble Market Map (공정별 불량 위험도 클러스터)"
  },
  {
    "id": "chart-bubble-market-map",
    "name": "3차원 버블 산포도 상관관계 분석 마켓 맵",
    "category": "charts",
    "tags": [
      "chart",
      "bubble",
      "cluster",
      "market",
      "버블",
      "산포도",
      "상관관계"
    ],
    "description": "X축(변동성), Y축(수익률), 버블크기(시가총액)를 매핑한 버블 시각화.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "chart-bubble-market-map",
    "aiPromptGuidance": "3차원 지표(X, Y, Size, Color)를 원형 버블로 표현하는 산점도 맵입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const BubbleMarketMapDemo: React.FC = () => {\n  const [selectedBubble, setSelectedBubble] = useState<string | null>(null);\n  const bubbles = [\n    { name: 'CVD증착', x: 25, y: 35, r: 24, col: '#10b981', yield: '99.8%' },\n    { name: '노광에칭', x: 60, y: 30, r: 20, col: '#8b5cf6', yield: '99.4%' },\n    { name: '모듈본딩', x: 45, y: 70, r: 18, col: '#ef4444', yield: '98.2%' },\n    { name: '에이징', x: 80, y: 60, r: 22, col: '#06b6d4', yield: '99.9%' }\n  ];\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl\">\n      <div className=\"flex items-center justify-between text-xs font-bold text-white mb-2\">\n        <span>공정별 품질 산포도 클러스터</span>\n        <span className=\"text-emerald-400 text-[10px] font-mono\">{selectedBubble || '버블 클릭 상세'}</span>\n      </div>\n      <div className=\"relative h-28 bg-slate-950/60 rounded-xl overflow-hidden border border-white/5\">\n        {bubbles.map(b => (\n          <div\n            key={b.name}\n            onClick={() => setSelectedBubble(`${b.name}: 수율 ${b.yield}`)}\n            style={{\n              left: `${b.x}%`,\n              top: `${b.y}%`,\n              width: `${b.r * 2}px`,\n              height: `${b.r * 2}px`,\n              backgroundColor: `${b.col}33`,\n              borderColor: b.col\n            }}\n            className=\"absolute -translate-x-1/2 -translate-y-1/2 rounded-full border flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg\"\n          >\n            <span className=\"text-[10px] font-bold text-white leading-none\">{b.name}</span>\n            <span className=\"text-[8px] font-mono\" style={{ color: b.col }}>{b.yield}</span>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// 8. Funnel Conversion (제조 수율 퍼널)"
  },
  {
    "id": "chart-funnel-conversion",
    "name": "마케팅 단계별 전환율 & 이탈 분석 퍼널 (Funnel) 차트",
    "category": "charts",
    "tags": [
      "chart",
      "funnel",
      "conversion",
      "marketing",
      "퍼널",
      "전환율",
      "마케팅"
    ],
    "description": "방문 -> 회원가입 -> 장바구니 -> 최종결제 단계별 이탈률과 잔존율 퍼널.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "chart-funnel-conversion",
    "aiPromptGuidance": "단계별 너비가 좁아지는 사다리꼴 형태의 전환 퍼널 차트입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const FunnelConversionDemo: React.FC = () => {\n  const steps = [\n    { label: '1. 웨이퍼 원자재 투입', count: '100,000 EA', pct: '100%', w: '100%', col: 'bg-violet-600' },\n    { label: '2. 가공/성형 공정', count: '99,400 EA', pct: '99.4%', w: '85%', col: 'bg-indigo-600' },\n    { label: '3. 모듈 조립/검사', count: '98,800 EA', pct: '98.8%', w: '65%', col: 'bg-cyan-600' },\n    { label: '4. 최종 양품 출하', count: '98,400 EA', pct: '98.4%', w: '45%', col: 'bg-emerald-500' }\n  ];\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span>제조 공정 잔존 수율 퍼널</span>\n        <span className=\"text-emerald-400 font-mono text-[10px]\">최종 수율 98.4%</span>\n      </div>\n      <div className=\"space-y-1.5 pt-1\">\n        {steps.map(s => (\n          <div key={s.label} className=\"space-y-0.5\">\n            <div className=\"flex justify-between text-[10px] text-slate-300\">\n              <span>{s.label}</span>\n              <span className=\"font-mono text-slate-400\">{s.count} ({s.pct})</span>\n            </div>\n            <div className=\"h-2.5 bg-slate-950 rounded-full overflow-hidden\">\n              <div className={`h-full rounded-full ${s.col}`} style={{ width: s.w }} />\n            </div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// 9. Treemap Portfolio (품목별 생산 점유율)"
  },
  {
    "id": "chart-treemap-portfolio",
    "name": "섹터별 시가총액 트리맵 (Treemap) 컬러 타일 그리드",
    "category": "charts",
    "tags": [
      "chart",
      "treemap",
      "stocks",
      "sector",
      "트리맵",
      "섹터",
      "주식"
    ],
    "description": "면적에 비례하는 타일 배치와 등락률 색상(Green/Red) 타일링.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "chart-treemap-portfolio",
    "aiPromptGuidance": "Finviz 스타일의 트리맵 타일 사각 그리드. 등락폭에 따라 색상이 결정됩니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const TreemapPortfolioDemo: React.FC = () => {\n  const [selected, setSelected] = useState<string | null>(null);\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl\">\n      <div className=\"flex justify-between text-xs font-bold text-white mb-2\">\n        <span>품목별 생산 점유 트리맵 (Click)</span>\n        <span className=\"text-violet-400 text-[10px] font-mono\">{selected || '품목 선택'}</span>\n      </div>\n      <div className=\"grid grid-cols-3 gap-1.5 h-24\">\n        <div onClick={() => setSelected('OLED 65인치: 수율 99.8%')} className=\"col-span-2 bg-emerald-600/80 hover:bg-emerald-500 rounded-xl p-2 flex flex-col justify-between text-white cursor-pointer transition-colors border border-emerald-400/30\">\n          <span className=\"font-bold text-xs\">OLED 65\" Gen4</span>\n          <span className=\"text-[10px] font-mono font-bold\">점유율 45% (수율 99.8%)</span>\n        </div>\n        <div className=\"flex flex-col gap-1.5\">\n          <div onClick={() => setSelected('OLED 55인치: 수율 99.4%')} className=\"flex-1 bg-emerald-700/80 hover:bg-emerald-600 rounded-lg p-1.5 flex justify-between items-center text-white cursor-pointer text-[10px] font-bold\">\n            <span>55\" Slim</span><span>30%</span>\n          </div>\n          <div onClick={() => setSelected('OLED 77인치: 수율 98.2%')} className=\"flex-1 bg-amber-700/80 hover:bg-amber-600 rounded-lg p-1.5 flex justify-between items-center text-white cursor-pointer text-[10px] font-bold\">\n            <span>77\" Ultra</span><span>25%</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// 10. Speedometer Gauge (설비 가동 부하율)"
  },
  {
    "id": "chart-gauge-speedometer",
    "name": "반원형 스피도미터 속도계 & 위험 구간 임계 게이지",
    "category": "charts",
    "tags": [
      "chart",
      "gauge",
      "speedometer",
      "speed",
      "속도계",
      "게이지",
      "반원"
    ],
    "description": "180도 반원형 바늘 게이지 및 그린/옐로우/레드 임계 영역 표시.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "chart-gauge-speedometer",
    "aiPromptGuidance": "180도 반원형 속도계 게이지. 회전 바늘과 임계치 컬러 밴드를 구현하세요.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const SpeedometerGaugeDemo: React.FC = () => {\n  const [val, setVal] = useState(88);\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span>설비 가동 부하율 (OEE)</span>\n        <span className=\"text-emerald-400 font-mono text-[10px]\">{val}% 가동</span>\n      </div>\n      <div className=\"relative w-32 h-16 mx-auto overflow-hidden\">\n        <div className=\"w-32 h-32 rounded-full border-[10px] border-slate-800 border-t-emerald-500 border-r-teal-500 -rotate-45\" />\n        <div className=\"absolute bottom-0 left-1/2 -translate-x-1/2 text-center\">\n          <span className=\"text-sm font-black text-white font-mono\">{val}%</span>\n          <span className=\"text-[8px] text-slate-400 block\">정상 가동</span>\n        </div>\n      </div>\n      <input type=\"range\" min=\"0\" max=\"100\" value={val} onChange={e => setVal(Number(e.target.value))} className=\"w-full h-1 bg-slate-800 rounded accent-emerald-500 cursor-pointer\" />\n    </div>\n  );\n};\n\n// 11. Waterfall Cashflow (제조 원가 분해 워터폴)"
  },
  {
    "id": "chart-waterfall-cashflow",
    "name": "재무 손익 & 캐시플로우 누적 워터폴 (Waterfall) 폭포 차트",
    "category": "charts",
    "tags": [
      "chart",
      "waterfall",
      "finance",
      "cashflow",
      "워터폴",
      "재무",
      "현금흐름"
    ],
    "description": "매출 증가분과 지출 차감분을 누적 계단형으로 보여주는 재무 차트.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "chart-waterfall-cashflow",
    "aiPromptGuidance": "손익 누적을 계단식으로 표현하는 워터폴 폭포 차트입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const WaterfallCashflowDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl\">\n      <div className=\"flex justify-between text-xs font-bold text-white mb-2\">\n        <span>제조 단위 원가 분해 워터폴</span>\n        <span className=\"text-emerald-400 font-mono text-[10px]\">Total: $420/EA</span>\n      </div>\n      <div className=\"flex items-end justify-between h-24 pt-2 text-[10px] font-mono\">\n        <div className=\"flex flex-col items-center gap-1\"><div className=\"w-5 bg-emerald-500 rounded-t h-16\" /><span className=\"text-slate-400\">판매가</span></div>\n        <div className=\"flex flex-col items-center gap-1\"><div className=\"w-5 bg-rose-500 rounded-t h-8\" /><span className=\"text-slate-400\">원자재</span></div>\n        <div className=\"flex flex-col items-center gap-1\"><div className=\"w-5 bg-rose-500 rounded-t h-6\" /><span className=\"text-slate-400\">가공비</span></div>\n        <div className=\"flex flex-col items-center gap-1\"><div className=\"w-5 bg-emerald-500 rounded-t h-12 shadow-[0_0_8px_#10b981]\" /><span className=\"text-emerald-300 font-bold\">마진</span></div>\n      </div>\n    </div>\n  );\n};\n\n// 12. Sparkline Mini Badge"
  },
  {
    "id": "chart-sparkline-mini-badge",
    "name": "초소형 7일간 추세 인라인 미니 스파크라인 (Sparkline) 뱃지",
    "category": "charts",
    "tags": [
      "chart",
      "sparkline",
      "mini",
      "trend",
      "스파크라인",
      "미니차트",
      "트렌드"
    ],
    "description": "표나 카드 안에 쏙 들어가는 초소형 초경량 7일간 추세선 뱃지.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "chart-sparkline-mini-badge",
    "aiPromptGuidance": "테이블 행 또는 카드 내부에 삽입되는 인라인 미니 스파크라인 그래프입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const SparklineMiniBadgeDemo: React.FC = () => {\n  const [trend, setTrend] = useState<number[]>([98, 99, 97, 100, 99, 102, 101, 104]);\n  const updateSpark = () => {\n    setTrend(prev => [...prev.slice(1), Math.floor(Math.random() * 8) + 98]);\n  };\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl flex items-center justify-between\">\n      <div>\n        <span className=\"text-slate-400 text-[10px] block\">실시간 생산 BPM</span>\n        <span className=\"text-sm font-black text-white font-mono\">142 bpm</span>\n        <span className=\"text-[9px] text-emerald-400 block font-bold\">+4.2% Peak</span>\n      </div>\n      <div onClick={updateSpark} className=\"w-24 h-10 cursor-pointer\" title=\"클릭 시 스파크라인 실시간 갱신\">\n        <svg viewBox=\"0 0 100 40\" className=\"w-full h-full\">\n          <polyline\n            fill=\"none\"\n            stroke=\"#10b981\"\n            strokeWidth=\"2.5\"\n            points={trend.map((val, idx) => `${idx * 14},${40 - (val - 95) * 4}`).join(' ')}\n          />\n        </svg>\n      </div>\n    </div>\n  );\n};\n\n// 13. Sankey Flow"
  },
  {
    "id": "datagrid-realtime-pro",
    "name": "2026 엔터프라이즈 리얼타임 데이터그리드 (정렬/다중선택)",
    "category": "tables",
    "tags": [
      "table",
      "datagrid",
      "grid",
      "sort",
      "filter",
      "표",
      "그리드",
      "데이터",
      "정렬"
    ],
    "description": "체크박스 일괄 선택, 검색 필터링, 정렬, 마이크로서비스 상태 인디케이터.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "datagrid-realtime-pro",
    "aiPromptGuidance": "체크박스 다중선택, 검색 필터링, 정렬이 가능한 리얼타임 데이터그리드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const DataGridDemo: React.FC = () => {\n  const [searchTerm, setSearchTerm] = useState('');\n  const [sortAsc, setSortAsc] = useState(true);\n  const [selectedIds, setSelectedIds] = useState<string[]>(['1']);\n\n  const initialRows = [\n    { id: '1', name: 'OAuth-Auth-Server', status: 'ACTIVE', latency: '12ms', cpu: '24%' },\n    { id: '2', name: 'Trading-Engine-Core', status: 'ACTIVE', latency: '4ms', cpu: '68%' },\n    { id: '3', name: 'Payment-Gateway-KR', status: 'STANDBY', latency: '45ms', cpu: '12%' },\n  ];\n\n  const filtered = initialRows\n    .filter(r => r.name.toLowerCase().includes(searchTerm.toLowerCase()))\n    .sort((a, b) => sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));\n\n  const toggleSelect = (id: string) => {\n    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);\n  };\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl\">\n      <div className=\"p-3 border-b border-white/10 flex items-center justify-between gap-2 bg-white/[0.02]\">\n        <div className=\"flex items-center gap-1.5 px-2 py-1 rounded-lg bg-black/40 border border-white/10 flex-1\">\n          <Search className=\"w-3 h-3 text-slate-400\" />\n          <input\n            type=\"text\"\n            placeholder=\"마이크로서비스 검색...\"\n            value={searchTerm}\n            onChange={e => setSearchTerm(e.target.value)}\n            className=\"bg-transparent text-xs text-white focus:outline-none w-full\"\n          />\n        </div>\n        <button\n          onClick={() => setSortAsc(!sortAsc)}\n          className=\"flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-[10px] font-bold border border-white/10\"\n        >\n          <ArrowUpDown className=\"w-3 h-3\" />\n          <span>{sortAsc ? 'A-Z' : 'Z-A'}</span>\n        </button>\n      </div>\n      <div className=\"p-2 space-y-1 text-xs\">\n        {filtered.map(row => {\n          const isSel = selectedIds.includes(row.id);\n          return (\n            <div\n              key={row.id}\n              onClick={() => toggleSelect(row.id)}\n              className={`flex items-center justify-between p-2 rounded-xl transition-all cursor-pointer border ${\n                isSel ? 'bg-violet-600/20 border-violet-500/40 text-white' : 'bg-white/[0.02] border-transparent hover:bg-white/[0.05] text-slate-300'\n              }`}\n            >\n              <div className=\"flex items-center gap-2\">\n                <span className=\"text-violet-400\">{isSel ? '☑' : '☐'}</span>\n                <span className=\"font-bold text-xs\">{row.name}</span>\n              </div>\n              <div className=\"flex items-center gap-2 font-mono text-[10px]\">\n                <span className=\"text-cyan-400\">{row.latency}</span>\n                <span className={`font-bold px-1.5 py-0.5 rounded ${row.status === 'ACTIVE' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}`}>\n                  {row.status}\n                </span>\n              </div>\n            </div>\n          );\n        })}\n      </div>\n    </div>\n  );\n};\n\n// 2. Pivot Matrix"
  },
  {
    "id": "table-pivot-matrix-analysis",
    "name": "파워BI / 엑셀 스타일 다차원 피벗 테이블 (Pivot Matrix)",
    "category": "tables",
    "tags": [
      "table",
      "pivot",
      "matrix",
      "powerbi",
      "excel",
      "피벗",
      "집계",
      "행렬"
    ],
    "description": "행/열 기준 다차원 크로스탭 집계, 소계(Subtotal) 및 총합계 자동 계산.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "table-pivot-matrix-analysis",
    "aiPromptGuidance": "지역별/분기별 매출을 행과 열로 교차 집계하는 피벗 매트릭스 테이블입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const PivotMatrixDemo: React.FC = () => {\n  const [metric, setMetric] = useState<'sales' | 'units'>('sales');\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl\">\n      <div className=\"p-3 border-b border-white/10 flex items-center justify-between bg-white/[0.02]\">\n        <span className=\"text-xs font-bold text-white\">PowerBI 피벗 매트릭스</span>\n        <div className=\"flex gap-1\">\n          <button onClick={() => setMetric('sales')} className={`px-2 py-0.5 rounded text-[10px] font-bold ${metric === 'sales' ? 'bg-violet-600 text-white' : 'bg-white/5 text-slate-400'}`}>매출액</button>\n          <button onClick={() => setMetric('units')} className={`px-2 py-0.5 rounded text-[10px] font-bold ${metric === 'units' ? 'bg-violet-600 text-white' : 'bg-white/5 text-slate-400'}`}>수량</button>\n        </div>\n      </div>\n      <table className=\"w-full text-left text-[11px] text-slate-300\">\n        <thead className=\"bg-white/[0.03] text-slate-400 font-bold\">\n          <tr><th className=\"p-2\">권역/부서</th><th className=\"p-2 text-right\">Q1</th><th className=\"p-2 text-right\">Q2</th><th className=\"p-2 text-right text-violet-400\">합계</th></tr>\n        </thead>\n        <tbody className=\"divide-y divide-white/5 font-mono\">\n          <tr>\n            <td className=\"p-2 font-bold text-white font-sans\">수도권 (HQ)</td>\n            <td className=\"p-2 text-right\">{metric === 'sales' ? '$14.2k' : '480 EA'}</td>\n            <td className=\"p-2 text-right\">{metric === 'sales' ? '$18.9k' : '620 EA'}</td>\n            <td className=\"p-2 text-right text-violet-300 font-bold\">{metric === 'sales' ? '$33.1k' : '1,100 EA'}</td>\n          </tr>\n          <tr>\n            <td className=\"p-2 font-bold text-white font-sans\">영남권 지사</td>\n            <td className=\"p-2 text-right\">{metric === 'sales' ? '$8.2k' : '290 EA'}</td>\n            <td className=\"p-2 text-right\">{metric === 'sales' ? '$9.4k' : '340 EA'}</td>\n            <td className=\"p-2 text-right text-violet-300 font-bold\">{metric === 'sales' ? '$17.6k' : '630 EA'}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  );\n};\n\n// 3. Tree Table"
  },
  {
    "id": "table-expandable-tree-rows",
    "name": "계층형 트리 구조 확장 (Tree Table) 마스터-디테일 테이블",
    "category": "tables",
    "tags": [
      "table",
      "tree",
      "hierarchical",
      "expandable",
      "트리",
      "계층형",
      "폴더",
      "테이블"
    ],
    "description": "부모-자식 관계의 프로젝트/파일 트리를 아코디언 형태로 펼치는 테이블.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "table-expandable-tree-rows",
    "aiPromptGuidance": "부모-자식 관계의 계층형 데이터를 펼치고 접을 수 있는 트리 테이블입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const TreeTableDemo: React.FC = () => {\n  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({ src: true });\n  const toggle = (key: string) => setOpenFolders(p => ({ ...p, [key]: !p[key] }));\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1 text-xs\">\n      <div className=\"flex items-center justify-between font-bold text-white mb-1\">\n        <span>계층형 트리 테이블</span>\n        <span className=\"text-[10px] text-slate-500\">Tree Nodes</span>\n      </div>\n      <div onClick={() => toggle('src')} className=\"flex items-center gap-1.5 p-1.5 rounded-lg bg-white/[0.04] cursor-pointer text-violet-300 font-bold\">\n        {openFolders['src'] ? <ChevronDown className=\"w-3.5 h-3.5\" /> : <ChevronRight className=\"w-3.5 h-3.5\" />}\n        <Folder className=\"w-3.5 h-3.5 text-amber-400\" />\n        <span>src/ (3 items)</span>\n      </div>\n      {openFolders['src'] && (\n        <div className=\"pl-6 space-y-1 text-slate-300 text-[11px]\">\n          <div className=\"flex items-center justify-between p-1 rounded bg-white/[0.02]\">\n            <span className=\"flex items-center gap-1\"><FileText className=\"w-3 h-3 text-cyan-400\" /> Header.tsx</span>\n            <span className=\"text-[10px] text-slate-500 font-mono\">12 KB</span>\n          </div>\n          <div className=\"flex items-center justify-between p-1 rounded bg-white/[0.02]\">\n            <span className=\"flex items-center gap-1\"><FileText className=\"w-3 h-3 text-cyan-400\" /> CanvasStudio.tsx</span>\n            <span className=\"text-[10px] text-slate-500 font-mono\">28 KB</span>\n          </div>\n        </div>\n      )}\n    </div>\n  );\n};\n\n// 4. Inline Edit Table"
  },
  {
    "id": "table-inline-editable-cell",
    "name": "엑셀 스타일 인라인 셀 즉시 편집 (Inline Cell Edit) 그리드",
    "category": "tables",
    "tags": [
      "table",
      "inline-edit",
      "excel",
      "spreadsheet",
      "인라인수정",
      "엑셀",
      "셀편집"
    ],
    "description": "셀 더블클릭 시 즉시 텍스트/숫자/셀렉트 입력창으로 전환되는 반응형 그리드.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "table-inline-editable-cell",
    "aiPromptGuidance": "더블클릭으로 셀 값을 즉시 수정하고 Enter로 반영하는 인라인 편집 테이블입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const InlineEditTableDemo: React.FC = () => {\n  const [editingId, setEditingId] = useState<string | null>(null);\n  const [items, setItems] = useState([\n    { id: '1', key: 'CLUSTER_NAME', val: 'prod-k8s-cluster-01' },\n    { id: '2', key: 'MAX_REPLICAS', val: '64' }\n  ]);\n\n  const updateVal = (id: string, val: string) => {\n    setItems(prev => prev.map(it => it.id === id ? { ...it, val } : it));\n  };\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2\">\n      <div className=\"flex items-center justify-between text-xs font-bold text-white\">\n        <span>인라인 셀 편집</span>\n        <span className=\"text-emerald-400 text-[10px]\">더블클릭/클릭 수정</span>\n      </div>\n      <div className=\"space-y-1.5\">\n        {items.map(it => (\n          <div key={it.id} className=\"flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-white/5\">\n            <span className=\"text-slate-400 font-mono text-[10px]\">{it.key}</span>\n            <input\n              type=\"text\"\n              value={it.val}\n              onChange={e => updateVal(it.id, e.target.value)}\n              className=\"bg-transparent text-right text-xs font-bold text-violet-300 focus:outline-none border-b border-transparent focus:border-violet-500 px-1\"\n            />\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// 5. Sticky Column Table"
  },
  {
    "id": "table-sticky-column-finance",
    "name": "좌우 고정 컬럼 (Freeze Sticky Column) 금융 대사표",
    "category": "tables",
    "tags": [
      "table",
      "sticky",
      "freeze",
      "finance",
      "고정컬럼",
      "대사표",
      "스크롤"
    ],
    "description": "좌측 계좌명과 우측 최종합계 컬럼을 고정하고 중앙만 가로 스크롤되는 표.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "table-sticky-column-finance",
    "aiPromptGuidance": "좌측 식별자와 우측 결괏값 컬럼을 동결(Freeze)한 가로 스크롤 테이블입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const StickyFreezeTableDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl\">\n      <div className=\"p-2.5 bg-white/[0.02] border-b border-white/10 text-xs font-bold text-white flex justify-between\">\n        <span>좌우 동결 고정 컬럼 (Freeze)</span>\n        <span className=\"text-slate-400 text-[10px]\">가로 스크롤</span>\n      </div>\n      <div className=\"overflow-x-auto p-2\">\n        <table className=\"w-full text-xs text-left min-w-[320px]\">\n          <thead>\n            <tr className=\"text-slate-400 border-b border-white/5\">\n              <th className=\"p-1.5 bg-violet-950/80 sticky left-0 font-bold text-violet-300\">고정: ID</th>\n              <th className=\"p-1.5\">포지션</th>\n              <th className=\"p-1.5\">진입가</th>\n              <th className=\"p-1.5 bg-emerald-950/80 sticky right-0 font-bold text-emerald-400 text-right\">고정: 손익</th>\n            </tr>\n          </thead>\n          <tbody className=\"divide-y divide-white/5 font-mono text-[11px]\">\n            <tr>\n              <td className=\"p-1.5 bg-violet-950/80 sticky left-0 text-white font-bold\">#BTC-LONG</td>\n              <td className=\"p-1.5 text-slate-300\">2.5 BTC</td>\n              <td className=\"p-1.5 text-slate-300\">$64,200</td>\n              <td className=\"p-1.5 bg-emerald-950/80 sticky right-0 text-right text-emerald-400 font-bold\">+$10,420</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  );\n};\n\n// 6. Virtual Scroll Table"
  },
  {
    "id": "table-virtualized-infinite-scroll",
    "name": "10만 건 가상화 (Virtual Windowing) 60fps 초고속 테이블",
    "category": "tables",
    "tags": [
      "table",
      "virtual-scroll",
      "performance",
      "infinite",
      "가상스크롤",
      "대용량",
      "고성능"
    ],
    "description": "수만 개의 행을 버벅임 없이 60fps로 렌더링하는 가상 윈도우 테이블.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "table-virtualized-infinite-scroll",
    "aiPromptGuidance": "뷰포트에 노출되는 행만 렌더링하여 10만 건도 초고속 렌더링하는 가상화 테이블입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const VirtualScrollTableDemo: React.FC = () => {\n  const [offset, setOffset] = useState(84200);\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2\">\n      <div className=\"flex items-center justify-between text-xs font-bold text-white\">\n        <span>10만건 가상 윈도잉</span>\n        <button onClick={() => setOffset(o => o + 100)} className=\"text-cyan-400 text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20\">\n          Scroll +100\n        </button>\n      </div>\n      <div className=\"h-24 bg-slate-950/70 rounded-xl p-2 border border-white/5 space-y-1 font-mono text-[10px]\">\n        {[0, 1, 2].map(i => (\n          <div key={i} className=\"flex justify-between text-slate-300 p-1 rounded bg-white/[0.02]\">\n            <span>[Row #{offset + i}]</span>\n            <span className=\"text-emerald-400\">0.0{(i+1)}ms (60fps)</span>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// 7. Orderbook Table"
  },
  {
    "id": "table-compact-crypto-orderbook",
    "name": "초고속 호가창 (Orderbook) 뎁스 매칭 실시간 테이블",
    "category": "tables",
    "tags": [
      "table",
      "orderbook",
      "crypto",
      "depth",
      "호가창",
      "체결",
      "오더북"
    ],
    "description": "매수(Green)/매도(Red) 잔량 비중 바와 실시간 체결가 틱 애니메이션.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "table-compact-crypto-orderbook",
    "aiPromptGuidance": "매수/매도 누적 잔량 바가 행 배경으로 채워지는 실시간 호가창 오더북 테이블입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const OrderbookTableDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1 font-mono text-[10px]\">\n      <div className=\"flex justify-between font-bold text-slate-400 font-sans text-xs mb-1\">\n        <span>호가창 (Orderbook)</span>\n        <span className=\"text-emerald-400 font-bold\">$68,490</span>\n      </div>\n      <div className=\"relative p-1 rounded bg-rose-950/40 flex justify-between text-rose-300\">\n        <div className=\"absolute inset-y-0 right-0 bg-rose-500/20 w-3/4 rounded-r\" />\n        <span className=\"relative font-bold\">68,520.00</span>\n        <span className=\"relative\">4.82 BTC</span>\n      </div>\n      <div className=\"relative p-1 rounded bg-emerald-950/40 flex justify-between text-emerald-300\">\n        <div className=\"absolute inset-y-0 right-0 bg-emerald-500/20 w-1/2 rounded-r\" />\n        <span className=\"relative font-bold\">68,480.00</span>\n        <span className=\"relative\">3.15 BTC</span>\n      </div>\n    </div>\n  );\n};\n\n// 8. Pricing Plan Table"
  },
  {
    "id": "table-comparison-pricing-plan",
    "name": "SaaS 플랜 요금제 비교 & 스펙 체크리스트 매트릭스",
    "category": "tables",
    "tags": [
      "table",
      "pricing",
      "comparison",
      "saas",
      "요금제",
      "비교표",
      "플랜"
    ],
    "description": "Free vs Pro vs Enterprise 기능별 지원 여부(Check/Cross) 비교표.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "table-comparison-pricing-plan",
    "aiPromptGuidance": "요금제별 기능 지원 여부를 체크 아이콘과 수치로 비교하는 SaaS 스펙 매트릭스입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const PricingPlanTableDemo: React.FC = () => {\n  const [cycle, setCycle] = useState<'month' | 'year'>('month');\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl text-[11px] space-y-2\">\n      <div className=\"flex justify-between font-bold text-white text-xs items-center\">\n        <span>요금제 비교표</span>\n        <button onClick={() => setCycle(cycle === 'month' ? 'year' : 'month')} className=\"text-violet-400 text-[10px] px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20\">\n          {cycle === 'month' ? '월 결제' : '연 결제 (20% 할인)'}\n        </button>\n      </div>\n      <div className=\"space-y-1\">\n        <div className=\"flex justify-between p-1 bg-white/[0.02] rounded\">\n          <span className=\"text-slate-300\">AI 에이전트 동시실행</span>\n          <span className=\"text-emerald-400 font-bold font-mono\">{cycle === 'month' ? '10개' : '무제한'}</span>\n        </div>\n        <div className=\"flex justify-between p-1 bg-white/[0.02] rounded\">\n          <span className=\"text-slate-300\">전담 SLA 지원</span>\n          <span className=\"text-violet-400 font-bold\">Enterprise</span>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// 9. Audit Log Table"
  },
  {
    "id": "table-audit-log-timeline",
    "name": "보안 감사 로그 & 작업 전후 Diff 이력 테이블",
    "category": "tables",
    "tags": [
      "table",
      "audit",
      "log",
      "timeline",
      "감사로그",
      "이력",
      "작업기록"
    ],
    "description": "작업자 IP, 수행한 명령, 전후 변경 Diff, 타임스탬프가 표시되는 로그 표.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "table-audit-log-timeline",
    "aiPromptGuidance": "보안 감사 로그 및 관리자 작업 이력을 시계열로 추적하는 타임라인 테이블입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const AuditLogTableDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl font-mono text-[10px] space-y-1\">\n      <div className=\"flex justify-between font-bold text-white font-sans text-xs mb-1\">\n        <span>보안 감사 로그</span>\n        <span className=\"text-emerald-400 text-[10px]\">● Live Stream</span>\n      </div>\n      <div className=\"p-1.5 bg-white/[0.02] rounded flex items-center justify-between text-slate-300\">\n        <span>ADMIN_KEY_ROTATE</span>\n        <span className=\"text-slate-500\">14:52:01</span>\n      </div>\n      <div className=\"p-1.5 bg-white/[0.02] rounded flex items-center justify-between text-emerald-400\">\n        <span>POLICY_UPDATE_OK</span>\n        <span className=\"text-slate-500\">14:50:18</span>\n      </div>\n    </div>\n  );\n};\n\n// 10. FileManager Table"
  },
  {
    "id": "table-file-manager-explorer",
    "name": "클라우드 파일 탐색기 & 권한 매트릭스 그리드",
    "category": "tables",
    "tags": [
      "table",
      "file-manager",
      "explorer",
      "storage",
      "파일탐색기",
      "드라이브",
      "용량"
    ],
    "description": "파일명, 확장자 아이콘, 소유자, 용량, 최종 수정일, 다운로드 액션 바.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "table-file-manager-explorer",
    "aiPromptGuidance": "구글 드라이브 형태의 파일 목록 및 권한, 용량, 다운로드 액션 테이블입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const FileManagerTableDemo: React.FC = () => {\n  const [downloaded, setDownloaded] = useState(false);\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl text-xs space-y-1.5\">\n      <div className=\"flex justify-between font-bold text-white\">\n        <span>파일 탐색기</span>\n        <span className=\"text-slate-400 text-[10px]\">2 Files</span>\n      </div>\n      <div className=\"flex items-center justify-between p-1.5 rounded-lg bg-white/[0.02]\">\n        <span className=\"flex items-center gap-1.5 text-white\"><FileText className=\"w-3.5 h-3.5 text-violet-400\" /> blueprint.json</span>\n        <button onClick={() => { setDownloaded(true); setTimeout(() => setDownloaded(false), 1500); }} className=\"p-1 text-slate-400 hover:text-white\">\n          {downloaded ? <Check className=\"w-3.5 h-3.5 text-emerald-400\" /> : <Download className=\"w-3.5 h-3.5\" />}\n        </button>\n      </div>\n    </div>\n  );\n};\n\n// 11. Inventory Stock Table"
  },
  {
    "id": "table-inventory-stock-batch",
    "name": "물류 재고 관리 & 입출고 배치 (Batch) 제어 테이블",
    "category": "tables",
    "tags": [
      "table",
      "inventory",
      "stock",
      "warehouse",
      "재고관리",
      "물류",
      "바코드"
    ],
    "description": "바코드 SKU, 현재고, 안전재고 부족 경고 뱃지, 발주 수량 조절 스텝 버튼.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "table-inventory-stock-batch",
    "aiPromptGuidance": "안전재고 미달 경고 및 입출고 증감 버튼이 포함된 물류 창고 관리 테이블입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const InventoryStockTableDemo: React.FC = () => {\n  const [qty, setQty] = useState(4);\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl text-xs space-y-1.5\">\n      <div className=\"flex justify-between font-bold text-white\">\n        <span>물류 재고 관리</span>\n        <span className={`text-[10px] font-bold ${qty < 5 ? 'text-rose-400' : 'text-emerald-400'}`}>\n          {qty < 5 ? '재고부족 경고' : '정상 수량'}\n        </span>\n      </div>\n      <div className=\"flex items-center justify-between p-1.5 rounded-lg bg-white/[0.02]\">\n        <span className=\"text-white font-mono\">SKU-99201 (OLED)</span>\n        <div className=\"flex items-center gap-1.5\">\n          <span className=\"font-mono font-bold text-amber-300\">{qty} EA</span>\n          <button onClick={() => setQty(q => q + 5)} className=\"px-1.5 py-0.5 rounded bg-violet-600 text-white text-[10px] font-bold\">+5 입고</button>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// 12. Leaderboard Table"
  },
  {
    "id": "table-leaderboard-ranking",
    "name": "실시간 유저 랭킹 & 1~3위 왕관 메달 리더보드",
    "category": "tables",
    "tags": [
      "table",
      "leaderboard",
      "ranking",
      "gamification",
      "리더보드",
      "순위",
      "점수"
    ],
    "description": "1~3등 골드/실버/브론즈 왕관 뱃지, 연승 기록, 아바타 및 점수 게이지.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "table-leaderboard-ranking",
    "aiPromptGuidance": "골드/실버/브론즈 왕관 및 사용자 아바타, 점수 게이지가 들어간 리더보드 테이블입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const LeaderboardTableDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl text-xs space-y-1.5\">\n      <div className=\"flex justify-between font-bold text-white\">\n        <span>유저 리더보드</span>\n        <Award className=\"w-4 h-4 text-amber-400\" />\n      </div>\n      <div className=\"flex items-center justify-between p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold\">\n        <span>🥇 1위. DevMaster_KW</span>\n        <span className=\"font-mono\">9,840 pts</span>\n      </div>\n      <div className=\"flex items-center justify-between p-1.5 rounded-lg bg-white/[0.02] text-slate-300\">\n        <span>🥈 2위. AgentZero</span>\n        <span className=\"font-mono\">8,420 pts</span>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "circular-gauge-monitor",
    "name": "멀티 코어 하드웨어 텔레메트리 게이지 패널 (CPU/RAM/Temp)",
    "category": "dashboards",
    "tags": [
      "dashboard",
      "gauge",
      "hardware",
      "cpu",
      "ram",
      "system",
      "하드웨어",
      "모니터링"
    ],
    "description": "CPU, RAM, GPU 온도 원형 게이지 및 실시간 텔레메트리 패널.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "circular-gauge-monitor",
    "aiPromptGuidance": "원형 SVG 호 게이지를 사용한 실시간 CPU/RAM/온도 하드웨어 모니터 패널입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const MultiGaugeHardwareDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl\">\n    <div className=\"flex justify-between text-xs font-bold text-white mb-3\">\n      <span>하드웨어 텔레메트리</span><span className=\"text-emerald-400 text-[10px]\">● 16 Cores</span>\n    </div>\n    <div className=\"grid grid-cols-3 gap-2 text-center text-[10px]\">\n      <div className=\"p-2 rounded-xl bg-white/[0.02] border border-white/5\"><Cpu className=\"w-4 h-4 mx-auto text-violet-400 mb-1\" /><span className=\"text-slate-400 block\">CPU</span><span className=\"font-bold text-white font-mono\">38%</span></div>\n      <div className=\"p-2 rounded-xl bg-white/[0.02] border border-white/5\"><HardDrive className=\"w-4 h-4 mx-auto text-cyan-400 mb-1\" /><span className=\"text-slate-400 block\">RAM</span><span className=\"font-bold text-white font-mono\">18.6GB</span></div>\n      <div className=\"p-2 rounded-xl bg-white/[0.02] border border-white/5\"><Thermometer className=\"w-4 h-4 mx-auto text-amber-400 mb-1\" /><span className=\"text-slate-400 block\">온도</span><span className=\"font-bold text-amber-400 font-mono\">48°C</span></div>\n    </div>\n  </div>\n);"
  },
  {
    "id": "dashboard-grid-overview",
    "name": "2026 통합 경영 총괄 모니터링 4분할 그리드",
    "category": "dashboards",
    "tags": [
      "dashboard",
      "executive",
      "kpi",
      "revenue",
      "overview",
      "경영",
      "총괄",
      "대시보드"
    ],
    "description": "총매출, 활성 유저, 서버 헬스, 결제 트랜잭션 4분할 종합 뷰.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "dashboard-grid-overview",
    "aiPromptGuidance": "경영진을 위한 4분할 핵심 KPI 종합 요약 대시보드 그리드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const ExecutiveOverviewDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-3\">\n    <div className=\"flex justify-between text-xs font-bold text-white\"><span>통합 경영 총괄 뷰</span><span className=\"text-violet-400 text-[10px]\">Executive Board</span></div>\n    <div className=\"grid grid-cols-2 gap-2 text-[11px]\">\n      <div className=\"p-2.5 rounded-xl bg-gradient-to-br from-violet-900/40 to-transparent border border-violet-500/30 text-white\"><span className=\"text-slate-400 block text-[10px]\">총 매출</span><span className=\"text-base font-black font-mono\">$1.48M</span></div>\n      <div className=\"p-2.5 rounded-xl bg-gradient-to-br from-emerald-900/40 to-transparent border border-emerald-500/30 text-white\"><span className=\"text-slate-400 block text-[10px]\">활성 유저</span><span className=\"text-base font-black font-mono\">128.4k</span></div>\n    </div>\n  </div>\n);"
  },
  {
    "id": "dashboard-api-gateway-traffic",
    "name": "글로벌 API 게이트웨이 & 엣지 리전별 지연시간 관제탑",
    "category": "dashboards",
    "tags": [
      "dashboard",
      "api",
      "gateway",
      "edge",
      "latency",
      "게이트웨이",
      "레이턴시"
    ],
    "description": "대륙별 리전(서울, 도쿄, 프랑크푸르트, 버지니아) 지연시간 및 오류율 지도.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "dashboard-api-gateway-traffic",
    "aiPromptGuidance": "전 세계 리전별 엣지 서버 응답 속도 및 오류율을 관제하는 글로벌 게이트웨이 보드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const GlobalEdgeTrafficDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n    <div className=\"flex justify-between text-xs font-bold text-white\"><span className=\"flex items-center gap-1\"><Globe className=\"w-3.5 h-3.5 text-cyan-400\" /> 글로벌 엣지 레이턴시</span><span className=\"text-cyan-400 text-[10px] font-mono\">4 Regions</span></div>\n    <div className=\"space-y-1 text-[11px] font-mono\">\n      <div className=\"flex justify-between p-1 rounded bg-white/[0.02] text-slate-300\"><span>🇰🇷 Seoul (icn)</span><span className=\"text-emerald-400 font-bold\">8ms</span></div>\n      <div className=\"flex justify-between p-1 rounded bg-white/[0.02] text-slate-300\"><span>🇯🇵 Tokyo (nrt)</span><span className=\"text-emerald-400 font-bold\">22ms</span></div>\n      <div className=\"flex justify-between p-1 rounded bg-white/[0.02] text-slate-300\"><span>🇺🇸 Virginia (iad)</span><span className=\"text-amber-400 font-bold\">142ms</span></div>\n    </div>\n  </div>\n);"
  },
  {
    "id": "dashboard-ecommerce-live-feed",
    "name": "이커머스 초단위 실시간 주문 & 결제 피드 보드",
    "category": "dashboards",
    "tags": [
      "dashboard",
      "ecommerce",
      "orders",
      "shipping",
      "이커머스",
      "주문",
      "배송"
    ],
    "description": "초단위 주문 유입 피드, 장바구니 담김 현황, 실시간 결제 승인액 카운터.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "dashboard-ecommerce-live-feed",
    "aiPromptGuidance": "실시간 주문 결제 내역과 배송 상태가 초단위로 갱신되는 라이브 커머스 피드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const EcommerceLiveFeedDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n    <div className=\"flex justify-between text-xs font-bold text-white\"><span className=\"flex items-center gap-1.5\"><ShoppingCart className=\"w-3.5 h-3.5 text-fuchsia-400\" /> 실시간 주문 피드</span><span className=\"text-emerald-400 text-[10px] font-mono\">+3건/초</span></div>\n    <div className=\"p-2 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between text-xs\">\n      <span className=\"text-white\">ORD-9982 (OLED 모니터)</span><span className=\"font-mono font-bold text-emerald-400\">$890 결제완료</span>\n    </div>\n  </div>\n);"
  },
  {
    "id": "dashboard-devops-pipeline-ci",
    "name": "DevOps CI/CD 빌드 & 배포 파이프라인 스테이지 매트릭스",
    "category": "dashboards",
    "tags": [
      "dashboard",
      "devops",
      "cicd",
      "pipeline",
      "github-actions",
      "파이프라인",
      "배포"
    ],
    "description": "Lint -> Unit Test -> Docker Build -> K8s 배포 단계별 소요시간 및 성공 여부.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "dashboard-devops-pipeline-ci",
    "aiPromptGuidance": "빌드, 테스트, 배포 파이프라인의 각 단계 진행 상황과 소요시간을 나타낸 DevOps 보드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const DevOpsPipelineDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n    <div className=\"flex justify-between text-xs font-bold text-white\"><span className=\"flex items-center gap-1.5\"><GitPullRequest className=\"w-3.5 h-3.5 text-violet-400\" /> CI/CD 파이프라인</span><span className=\"text-emerald-400 text-[10px]\">main #418</span></div>\n    <div className=\"flex items-center justify-between gap-1 text-[10px]\">\n      <span className=\"p-1.5 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-500/30 flex-1 text-center\">✔ Lint</span>\n      <span className=\"p-1.5 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-500/30 flex-1 text-center\">✔ Test</span>\n      <span className=\"p-1.5 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-500/30 flex-1 text-center\">✔ Build</span>\n      <span className=\"p-1.5 rounded-lg bg-violet-950 text-violet-300 border border-violet-500/40 flex-1 text-center font-bold\">Deploy</span>\n    </div>\n  </div>\n);"
  },
  {
    "id": "dashboard-security-audit-threat",
    "name": "사이버 보안 침입 탐지 WAF 방화벽 실시간 차단 보드",
    "category": "dashboards",
    "tags": [
      "dashboard",
      "security",
      "waf",
      "threat",
      "firewall",
      "보안",
      "방화벽",
      "위협"
    ],
    "description": "DDoS 차단 건수, 악성 봇 탐지, SSL 인증서 만료일, 실시간 IP 블랙리스트.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "dashboard-security-audit-threat",
    "aiPromptGuidance": "실시간 DDoS 및 봇 공격 차단 통계를 시각화하는 사이버 보안 관제 대시보드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const SecurityWafDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-rose-500/30 p-4 shadow-2xl space-y-2\">\n    <div className=\"flex justify-between text-xs font-bold text-white\"><span className=\"flex items-center gap-1.5\"><Shield className=\"w-3.5 h-3.5 text-rose-400\" /> WAF 보안 위협 차단</span><span className=\"text-rose-400 font-mono text-[10px] font-bold\">1,842 Blocked</span></div>\n    <div className=\"p-2 rounded-xl bg-rose-950/30 border border-rose-500/20 text-[11px] text-rose-200\">\n      최근 1시간 동안 악성 SQL Injection 142건 및 DDoS 봇 1,700건을 자동 격리했습니다.\n    </div>\n  </div>\n);"
  },
  {
    "id": "dashboard-user-retention-cohort",
    "name": "사용자 주차별 리텐션 코호트 (Cohort Retention) 분석기",
    "category": "dashboards",
    "tags": [
      "dashboard",
      "retention",
      "cohort",
      "analytics",
      "리텐션",
      "코호트",
      "잔존율"
    ],
    "description": "가입 주차별 잔존율을 색상 강도로 표현하는 코호트 매트릭스.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "dashboard-user-retention-cohort",
    "aiPromptGuidance": "가입 주차별 사용자 유지 비율(Retention Rate)을 농도로 나타내는 코호트 분석판입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const RetentionCohortDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl\">\n    <div className=\"flex justify-between text-xs font-bold text-white mb-2\"><span>리텐션 코호트 (Cohort)</span><span className=\"text-violet-400 text-[10px]\">W1 ~ W4</span></div>\n    <div className=\"grid grid-cols-4 gap-1 text-center font-mono text-[10px]\">\n      <div className=\"p-1.5 rounded bg-violet-600 text-white font-bold\">100%</div>\n      <div className=\"p-1.5 rounded bg-violet-700 text-white font-bold\">64%</div>\n      <div className=\"p-1.5 rounded bg-violet-800 text-white font-bold\">48%</div>\n      <div className=\"p-1.5 rounded bg-violet-900 text-slate-300\">35%</div>\n    </div>\n  </div>\n);"
  },
  {
    "id": "dashboard-database-cluster-health",
    "name": "PostgreSQL / Redis 클러스터 복제 지연 및 락 현황판",
    "category": "dashboards",
    "tags": [
      "dashboard",
      "database",
      "postgres",
      "redis",
      "cluster",
      "데이터베이스",
      "복제"
    ],
    "description": "Master-Replica 복제 지연, 커넥션 풀 사용률, 슬로우 쿼리 락 현황.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "dashboard-database-cluster-health",
    "aiPromptGuidance": "DB 클러스터 노드별 복제 상태 및 커넥션 풀을 모니터링하는 대시보드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const DbClusterHealthDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n    <div className=\"flex justify-between text-xs font-bold text-white\"><span>DB 클러스터 복제 지연</span><span className=\"text-emerald-400 text-[10px] font-bold\">Lag: 0.00s</span></div>\n    <div className=\"flex justify-between items-center text-[11px] text-slate-300 bg-white/[0.02] p-2 rounded-xl\">\n      <span>Master (Write) ➔ Replica 1, 2 (Read)</span><span className=\"text-emerald-400 font-bold font-mono\">SYNCED</span>\n    </div>\n  </div>\n);"
  },
  {
    "id": "dashboard-cloud-billing-cost",
    "name": "멀티 클라우드 (AWS/GCP) 월간 비용 예측 및 예산 소진 보드",
    "category": "dashboards",
    "tags": [
      "dashboard",
      "cloud",
      "billing",
      "aws",
      "gcp",
      "cost",
      "클라우드",
      "비용",
      "예산"
    ],
    "description": "이번 달 누적 사용 금액, 월말 예상 청구액, 비용 초과 경고 인디케이터.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "dashboard-cloud-billing-cost",
    "aiPromptGuidance": "클라우드 인프라 월별 비용 및 예산 소진율을 표시하는 대시보드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const CloudBillingCostDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n    <div className=\"flex justify-between text-xs font-bold text-white\"><span className=\"flex items-center gap-1\"><DollarSign className=\"w-3.5 h-3.5 text-amber-400\" /> 멀티클라우드 예상 청구액</span><span className=\"text-amber-400 font-mono text-[10px]\">$4,820 / $6k</span></div>\n    <div className=\"w-full bg-slate-800 rounded-full h-2 overflow-hidden\"><div className=\"bg-amber-500 h-full w-[80%] rounded-full shadow-[0_0_8px_#f59e0b]\" /></div>\n  </div>\n);"
  },
  {
    "id": "dashboard-customer-support-sla",
    "name": "고객 지원 CS 티켓 유입량 & SLA 98% 준수율 보드",
    "category": "dashboards",
    "tags": [
      "dashboard",
      "support",
      "sla",
      "tickets",
      "고객센터",
      "티켓",
      "상담"
    ],
    "description": "미처리 티켓 수, 평균 첫 응답 시간(FRT), 고객 만족도(CSAT 98%).",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "dashboard-customer-support-sla",
    "aiPromptGuidance": "CS 티켓 유입량과 SLA 달성률을 추적하는 상담 관제 보드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const CustomerSupportSlaDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n    <div className=\"flex justify-between text-xs font-bold text-white\"><span className=\"flex items-center gap-1\"><LifeBuoy className=\"w-3.5 h-3.5 text-cyan-400\" /> CS 티켓 & SLA 준수율</span><span className=\"text-emerald-400 font-bold text-[10px]\">98.5%</span></div>\n    <div className=\"flex justify-between text-xs text-slate-300 p-2 rounded-xl bg-white/[0.02]\">\n      <span>평균 첫 응답 (FRT): <strong className=\"text-white\">4분</strong></span><span>미처리: <strong className=\"text-amber-400\">2건</strong></span>\n    </div>\n  </div>\n);"
  },
  {
    "id": "dashboard-iot-smart-facility",
    "name": "스마트 빌딩 IoT 환경 센서 (온습도/CO2/전력) 허브",
    "category": "dashboards",
    "tags": [
      "dashboard",
      "iot",
      "smart-home",
      "sensor",
      "센서",
      "스마트빌딩",
      "온습도"
    ],
    "description": "각 층별 실내 온도, 습도, CO2 농도, 실시간 전력 소비량(kW).",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "dashboard-iot-smart-facility",
    "aiPromptGuidance": "IoT 센서 데이터를 집계하여 층별 환경을 시각화하는 스마트 허브 패널입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const IotSmartFacilityDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n    <div className=\"flex justify-between text-xs font-bold text-white\"><span>스마트 빌딩 IoT 환경 센서</span><span className=\"text-cyan-400 text-[10px]\">4F R&D Hub</span></div>\n    <div className=\"grid grid-cols-3 gap-1.5 text-center text-[10px]\">\n      <div className=\"p-1.5 bg-white/[0.02] rounded-lg\">온도 <strong>23.5°C</strong></div>\n      <div className=\"p-1.5 bg-white/[0.02] rounded-lg\">습도 <strong>45%</strong></div>\n      <div className=\"p-1.5 bg-white/[0.02] rounded-lg\">CO2 <strong>420ppm</strong></div>\n    </div>\n  </div>\n);"
  },
  {
    "id": "dashboard-ai-model-inference-stats",
    "name": "LLM 추론 토큰 소모량 & TPS / TTFT 성능 벤치마크",
    "category": "dashboards",
    "tags": [
      "dashboard",
      "llm",
      "inference",
      "tokens",
      "gpu",
      "토큰",
      "추론",
      "인공지능"
    ],
    "description": "초당 생성 토큰 수 (TPS), 평균 TTFT (First Token Latency), GPU vRAM 점유.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "dashboard-ai-model-inference-stats",
    "aiPromptGuidance": "LLM 모델별 TPS, TTFT, 비용을 실시간 관제하는 AI 전용 대시보드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const AiInferenceStatsDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-violet-500/30 p-4 shadow-2xl space-y-2\">\n    <div className=\"flex justify-between text-xs font-bold text-white\"><span className=\"flex items-center gap-1\"><Bot className=\"w-3.5 h-3.5 text-violet-400\" /> LLM 추론 성능 (TPS)</span><span className=\"text-violet-300 font-mono text-[10px] font-bold\">120 TPS</span></div>\n    <div className=\"flex justify-between text-[11px] text-slate-300 bg-slate-950/60 p-2 rounded-xl\">\n      <span>TTFT (First Token): <strong className=\"text-emerald-400\">140ms</strong></span><span>vRAM: <strong className=\"text-cyan-400\">14.2 GB</strong></span>\n    </div>\n  </div>\n);"
  },
  {
    "id": "glass-form-stepper",
    "name": "글래스모피즘 다단계 스텝 (Stepper) 위저드 폼",
    "category": "forms",
    "tags": [
      "form",
      "stepper",
      "wizard",
      "input",
      "글래스",
      "위저드",
      "스텝폼"
    ],
    "description": "스텝 네비게이션, 유효성 검사 인디케이터, 부드러운 전환 효과.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "glass-form-stepper",
    "aiPromptGuidance": "단계별 입력을 진행하는 글래스모피즘 멀티스텝 폼 위저드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const GlassStepperDemo: React.FC = () => {\n  const [step, setStep] = useState(2);\n  const titles = ['1. 클러스터 환경', '2. 환경변수 주입', '3. 배포 승인'];\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-3\">\n      <div className=\"flex items-center justify-between text-xs font-bold text-white\">\n        <span>글래스 스텝 위저드</span>\n        <span className=\"text-violet-400\">Step {step} / 3</span>\n      </div>\n      <div className=\"flex gap-2\">\n        {[1, 2, 3].map(s => (\n          <div key={s} onClick={() => setStep(s)} className={`flex-1 h-2 rounded-full cursor-pointer transition-all ${s <= step ? 'bg-violet-500 shadow-[0_0_8px_#8b5cf6]' : 'bg-white/10'}`} />\n        ))}\n      </div>\n      <div className=\"flex justify-between items-center bg-slate-950/60 p-2.5 rounded-xl border border-white/5\">\n        <span className=\"text-xs font-bold text-slate-200\">{titles[step - 1]}</span>\n        <button onClick={() => setStep(s => s === 3 ? 1 : s + 1)} className=\"px-2 py-0.5 rounded bg-violet-600 hover:bg-violet-500 text-white text-[10px] font-bold\">다음</button>\n      </div>\n    </div>\n  );\n};\n\n// 2. Drag Drop Upload Zone"
  },
  {
    "id": "form-drag-drop-file-zone",
    "name": "스마트 드래그앤드롭 파일 업로더 & 실시간 진행률 바",
    "category": "forms",
    "tags": [
      "form",
      "upload",
      "file",
      "drag-drop",
      "업로더",
      "파일첨부",
      "드래그앤드롭"
    ],
    "description": "다중 파일 드롭존, 확장자 유효성 체크, 업로드 진행률 퍼센트 바.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "form-drag-drop-file-zone",
    "aiPromptGuidance": "드래그 앤 드롭 지원 및 실시간 업로드 진행 바가 있는 파일 업로더입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const DragDropUploadDemo: React.FC = () => {\n  const [uploading, setUploading] = useState(false);\n  const [progress, setProgress] = useState(0);\n\n  const startUpload = () => {\n    setUploading(true);\n    setProgress(0);\n    const interval = setInterval(() => {\n      setProgress(p => {\n        if (p >= 100) { clearInterval(interval); setUploading(false); return 100; }\n        return p + 25;\n      });\n    }, 200);\n  };\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span>스마트 파일 업로더</span>\n        <span className=\"text-cyan-400 text-[10px]\">{uploading ? `${progress}%` : '대기중'}</span>\n      </div>\n      <div onClick={startUpload} className=\"border-2 border-dashed border-white/20 hover:border-violet-400 rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer bg-slate-950/40 hover:bg-slate-950/60 transition-all text-center\">\n        <UploadCloud className=\"w-6 h-6 text-violet-400 mb-1\" />\n        <span className=\"text-xs font-bold text-white\">클릭하여 파일 업로드 시연</span>\n        <span className=\"text-[10px] text-slate-400\">PDF, JSON, PNG (최대 50MB)</span>\n      </div>\n      {uploading && (\n        <div className=\"w-full bg-slate-800 rounded-full h-1.5 overflow-hidden\">\n          <div className=\"bg-gradient-to-r from-violet-500 to-cyan-400 h-full transition-all duration-200\" style={{ width: `${progress}%` }} />\n        </div>\n      )}\n    </div>\n  );\n};\n\n// 3. Tag Combobox"
  },
  {
    "id": "form-tag-combobox-autocomplete",
    "name": "다중 태그 셀렉터 & 스마트 키워드 자동완성 콤보박스",
    "category": "forms",
    "tags": [
      "form",
      "tags",
      "combobox",
      "autocomplete",
      "태그",
      "자동완성",
      "셀렉트"
    ],
    "description": "키워드 타이핑 시 연관 태그 추천, 백스페이스 삭제, 컬러 태그 칩.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "form-tag-combobox-autocomplete",
    "aiPromptGuidance": "다중 선택 칩과 키보드 단축키를 지원하는 태그 콤보박스입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const TagComboboxDemo: React.FC = () => {\n  const [tags, setTags] = useState(['React19', 'TypeScript', 'Tailwind']);\n  const removeTag = (t: string) => setTags(tags.filter(x => x !== t));\n  const addTag = () => {\n    const list = ['Next.js', 'Vite', 'GraphQL', 'Prisma', 'Docker'];\n    const next = list.find(x => !tags.includes(x));\n    if (next) setTags([...tags, next]);\n  };\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span>다중 태그 셀렉터</span>\n        <button onClick={addTag} className=\"text-violet-400 text-[10px] font-bold\">+ 태그추가</button>\n      </div>\n      <div className=\"flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-slate-950/60 border border-white/10 min-h-[38px] items-center\">\n        {tags.map(t => (\n          <span key={t} onClick={() => removeTag(t)} className=\"px-2 py-0.5 rounded-md bg-violet-600/30 border border-violet-500/40 text-violet-200 text-[10px] font-bold flex items-center gap-1 cursor-pointer hover:bg-rose-900/40 hover:text-rose-300\">\n            #{t} ✕\n          </span>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// 4. 3D Credit Card"
  },
  {
    "id": "form-credit-card-live-preview",
    "name": "실시간 3D 인터랙티브 카드 결제 폼 (Flip 3D 회전)",
    "category": "forms",
    "tags": [
      "form",
      "payment",
      "card",
      "checkout",
      "결제",
      "신용카드",
      "체크아웃"
    ],
    "description": "카드 번호 입력 시 실시간으로 가상 카드가 회전하며 CVC를 보여주는 결제 폼.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "form-credit-card-live-preview",
    "aiPromptGuidance": "카드 정보 입력 시 앞/뒷면이 3D 회전하는 반응형 신용카드 결제 폼입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const CreditCard3DDemo: React.FC = () => {\n  const [flipped, setFlipped] = useState(false);\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span>3D 카드 결제 (Click 회전)</span>\n        <button onClick={() => setFlipped(!flipped)} className=\"text-[10px] text-cyan-400 font-bold\">Flip 3D</button>\n      </div>\n      <div onClick={() => setFlipped(!flipped)} className=\"cursor-pointer rounded-xl p-3.5 bg-gradient-to-tr from-violet-900 via-indigo-900 to-fuchsia-900 border border-white/20 text-white shadow-xl space-y-3 transition-transform hover:scale-[1.02]\">\n        <div className=\"flex justify-between items-center\"><span className=\"text-[10px] tracking-widest uppercase font-mono\">Platinum Corp</span><CreditCard className=\"w-4 h-4 text-violet-300\" /></div>\n        <div className=\"font-mono text-sm tracking-widest\">{flipped ? 'CVC: 942 | PIN: ••••' : '•••• •••• •••• 4920'}</div>\n        <div className=\"flex justify-between text-[10px] text-slate-300\"><span>KW DEEP MIND</span><span>12/29</span></div>\n      </div>\n    </div>\n  );\n};\n\n// 5. Password Meter"
  },
  {
    "id": "form-password-strength-meter",
    "name": "비밀번호 보안 등급 실시간 측정기 & 원클릭 난수 생성기",
    "category": "forms",
    "tags": [
      "form",
      "password",
      "security",
      "meter",
      "비밀번호",
      "보안강도",
      "패스워드"
    ],
    "description": "대소문자/특수문자/길이 충족 여부 체크리스트 및 원클릭 난수 생성기.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "form-password-strength-meter",
    "aiPromptGuidance": "비밀번호 복잡도를 실시간 채점하고 안전한 암호를 생성하는 폼입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const PasswordMeterDemo: React.FC = () => {\n  const [pw, setPw] = useState('Password!2026');\n  const len = pw.length;\n  const isStrong = len >= 10;\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span>비밀번호 강도 측정</span>\n        <span className={`text-[10px] font-bold ${isStrong ? 'text-emerald-400' : 'text-amber-400'}`}>\n          {isStrong ? '강력함 (100%)' : '보통 (50%)'}\n        </span>\n      </div>\n      <input\n        type=\"text\"\n        value={pw}\n        onChange={e => setPw(e.target.value)}\n        className=\"w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white font-mono\"\n      />\n      <div className=\"h-1.5 w-full bg-slate-800 rounded-full overflow-hidden flex gap-1\">\n        <div className={`flex-1 rounded-full ${len >= 4 ? 'bg-emerald-500' : 'bg-slate-700'}`} />\n        <div className={`flex-1 rounded-full ${len >= 8 ? 'bg-emerald-500' : 'bg-slate-700'}`} />\n        <div className={`flex-1 rounded-full ${len >= 10 ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-slate-700'}`} />\n      </div>\n    </div>\n  );\n};\n\n// 6. Date Range Picker"
  },
  {
    "id": "form-date-range-quick-picker",
    "name": "기간 설정 듀얼 캘린더 & 빠른 프리셋 (오늘/최근7일) 피커",
    "category": "forms",
    "tags": [
      "form",
      "calendar",
      "datepicker",
      "range",
      "날짜",
      "기간선택",
      "캘린더"
    ],
    "description": "오늘, 어제, 최근 7일, 이번 달 원클릭 프리셋 및 시작/종료일 선택창.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "form-date-range-quick-picker",
    "aiPromptGuidance": "빠른 기간 프리셋 버튼과 듀얼 캘린더 날짜 범위 선택기입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const DateRangePickerDemo: React.FC = () => {\n  const [range, setRange] = useState('7d');\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span>기간 설정 캘린더</span>\n        <Calendar className=\"w-3.5 h-3.5 text-cyan-400\" />\n      </div>\n      <div className=\"grid grid-cols-3 gap-1\">\n        {[\n          { id: 'today', label: '오늘' },\n          { id: '7d', label: '최근 7일' },\n          { id: '30d', label: '이번 달' }\n        ].map(r => (\n          <button\n            key={r.id}\n            onClick={() => setRange(r.id)}\n            className={`py-1.5 rounded-lg text-[10px] font-bold transition-all ${\n              range === r.id ? 'bg-violet-600 text-white shadow-md' : 'bg-white/5 text-slate-400 hover:bg-white/10'\n            }`}\n          >\n            {r.label}\n          </button>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// 7. Dual Range Slider"
  },
  {
    "id": "form-dual-range-slider-filter",
    "name": "가격/수치 범위 듀얼 썸 (Dual Thumb) 슬라이더 컨트롤",
    "category": "forms",
    "tags": [
      "form",
      "slider",
      "range",
      "filter",
      "슬라이더",
      "가격범위",
      "필터"
    ],
    "description": "최솟값과 최댓값을 동시에 조절하는 부드러운 네온 슬라이더 컨트롤러.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "form-dual-range-slider-filter",
    "aiPromptGuidance": "최소/최대 범위를 양방향 핸들로 조절하는 듀얼 슬라이더입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const DualRangeSliderDemo: React.FC = () => {\n  const [val, setVal] = useState(65);\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-3\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span>가격 범위 듀얼 슬라이더</span>\n        <span className=\"text-violet-400 font-mono text-[11px]\">$200 ~ ${val * 20}</span>\n      </div>\n      <input\n        type=\"range\"\n        min=\"10\"\n        max=\"100\"\n        value={val}\n        onChange={e => setVal(Number(e.target.value))}\n        className=\"w-full h-1.5 bg-slate-800 rounded-lg accent-violet-500 cursor-pointer\"\n      />\n    </div>\n  );\n};\n\n// 8. Markdown Editor"
  },
  {
    "id": "form-rich-markdown-editor",
    "name": "실시간 분할 프리뷰 지원 경량 마크다운 (Markdown) 에디터",
    "category": "forms",
    "tags": [
      "form",
      "markdown",
      "editor",
      "preview",
      "마크다운",
      "에디터",
      "글작성"
    ],
    "description": "굵게, 기울임, 코드블럭, 링크 툴바 및 분할 화면 실시간 렌더링.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "form-rich-markdown-editor",
    "aiPromptGuidance": "툴바와 실시간 분할 마크다운 파서가 내장된 작성기 폼입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const MarkdownEditorDemo: React.FC = () => {\n  const [text, setText] = useState('# Blueprint 2026\\\\n- [x] AI Native Specs');\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span className=\"flex items-center gap-1\"><FileCode className=\"w-3.5 h-3.5 text-violet-400\" /> 마크다운 분할 에디터</span>\n        <span className=\"text-[10px] text-emerald-400\">Live Preview</span>\n      </div>\n      <div className=\"grid grid-cols-2 gap-2 text-[10px] font-mono\">\n        <textarea\n          rows={3}\n          value={text}\n          onChange={e => setText(e.target.value)}\n          className=\"p-2 rounded-xl bg-slate-950 text-slate-300 border border-white/10 focus:outline-none resize-none\"\n        />\n        <div className=\"p-2 rounded-xl bg-violet-950/30 border border-violet-500/20 text-violet-200 font-sans font-bold whitespace-pre-wrap\">\n          {text}\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// 9. OTP Verify"
  },
  {
    "id": "form-phone-country-otp-verify",
    "name": "국가번호 선택 드롭다운 & 6자리 OTP 인증번호 입력기",
    "category": "forms",
    "tags": [
      "form",
      "otp",
      "phone",
      "auth",
      "전화번호",
      "인증번호",
      "문자인증"
    ],
    "description": "6개 칸 자동 포커스 이동, 3분 유효시간 타이머, 재전송 링크.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "form-phone-country-otp-verify",
    "aiPromptGuidance": "자동 다음 칸 포커스 및 타이머가 있는 6자리 OTP 인증 입력기입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const OtpVerifyDemo: React.FC = () => {\n  const [otp, setOtp] = useState(['5', '8', '2', '', '', '']);\n  const handleInput = (idx: number, val: string) => {\n    const next = [...otp];\n    next[idx] = val.slice(-1);\n    setOtp(next);\n  };\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span>6자리 OTP 인증번호</span>\n        <span className=\"text-rose-400 font-mono text-[10px]\">02:45</span>\n      </div>\n      <div className=\"flex justify-between gap-1.5\">\n        {otp.map((v, i) => (\n          <input\n            key={i}\n            type=\"text\"\n            maxLength={1}\n            value={v}\n            onChange={e => handleInput(i, e.target.value)}\n            className={`w-8 h-9 rounded-xl border text-center font-mono font-bold text-sm focus:outline-none ${\n              v ? 'border-violet-500 text-white bg-violet-500/10 shadow-[0_0_8px_#8b5cf6]' : 'border-white/10 text-slate-600 bg-slate-950/60'\n            }`}\n          />\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// 10. Address Smart Search"
  },
  {
    "id": "form-address-smart-search",
    "name": "도로명 주소 / 우편번호 스마트 검색 및 상세주소 폼",
    "category": "forms",
    "tags": [
      "form",
      "address",
      "search",
      "zipcode",
      "주소검색",
      "우편번호",
      "배송지"
    ],
    "description": "도로명/지번 자동완성 드롭다운 및 상세주소 입력 가이드.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "form-address-smart-search",
    "aiPromptGuidance": "주소 검색 모달 연동 및 배송지 정보를 입력받는 스마트 폼입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const AddressSmartSearchDemo: React.FC = () => {\n  const [query, setQuery] = useState('테헤란로');\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span>도로명 주소 스마트 검색</span>\n        <MapPin className=\"w-3.5 h-3.5 text-rose-400\" />\n      </div>\n      <div className=\"flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-950 border border-white/10\">\n        <Search className=\"w-3 h-3 text-slate-400\" />\n        <input\n          type=\"text\"\n          value={query}\n          onChange={e => setQuery(e.target.value)}\n          className=\"bg-transparent text-xs text-white focus:outline-none w-full font-bold\"\n        />\n      </div>\n      <div className=\"p-2 rounded-lg bg-white/[0.02] text-[11px] text-slate-300\">\n        <span className=\"font-bold text-violet-300\">서울특별시 강남구 테헤란로 152</span>\n        <span className=\"text-[10px] text-slate-500 block\">우편번호: 06236</span>\n      </div>\n    </div>\n  );\n};\n\n// 11. RBAC Permission Matrix"
  },
  {
    "id": "form-toggle-permission-matrix",
    "name": "역할별 상세 RBAC 권한 토글 스위치 매트릭스",
    "category": "forms",
    "tags": [
      "form",
      "switch",
      "permissions",
      "rbac",
      "권한",
      "스위치",
      "관리자설정"
    ],
    "description": "읽기/쓰기/삭제 권한을 토글 스위치로 직관적으로 온/오프하는 설정 폼.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "form-toggle-permission-matrix",
    "aiPromptGuidance": "사용자 그룹별 권한을 설정하는 토글 스위치 매트릭스 폼입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const PermissionMatrixDemo: React.FC = () => {\n  const [perms, setPerms] = useState({ read: true, write: true, delete: false });\n  const toggle = (k: keyof typeof perms) => setPerms(p => ({ ...p, [k]: !p[k] }));\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span>RBAC 권한 토글 매트릭스</span>\n        <span className=\"text-violet-400 text-[10px]\">DevOps Role</span>\n      </div>\n      <div className=\"space-y-1 text-xs\">\n        {Object.entries(perms).map(([k, v]) => (\n          <div key={k} onClick={() => toggle(k as any)} className=\"flex items-center justify-between p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer\">\n            <span className=\"capitalize text-slate-300 font-mono\">{k} 권한</span>\n            <span className={`text-xs font-bold ${v ? 'text-emerald-400' : 'text-slate-600'}`}>\n              {v ? 'ON ●' : 'OFF ○'}\n            </span>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// 12. NPS Survey Rating"
  },
  {
    "id": "form-survey-nps-rating",
    "name": "0~10 순고객추천지수 (NPS) 감정 이모지 피드백 폼",
    "category": "forms",
    "tags": [
      "form",
      "nps",
      "rating",
      "feedback",
      "별점",
      "만족도",
      "설문조사"
    ],
    "description": "11단계 점수 버튼, 감정 이모지 반응형 컬러, 주관식 한 줄 의견 입력창.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "form-survey-nps-rating",
    "aiPromptGuidance": "사용자 만족도 측정을 위한 NPS 0~10 점수 선택 및 피드백 폼입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const SurveyNpsDemo: React.FC = () => {\n  const [score, setScore] = useState(9);\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span>순고객추천지수 (NPS 0~10)</span>\n        <span className=\"text-amber-400 font-bold font-mono\">{score}점 (추천자)</span>\n      </div>\n      <div className=\"flex gap-1\">\n        {Array.from({ length: 11 }, (_, i) => (\n          <button\n            key={i}\n            onClick={() => setScore(i)}\n            className={`flex-1 py-1 rounded text-[10px] font-mono font-bold transition-all ${\n              score === i ? 'bg-amber-500 text-black scale-110 shadow-lg' : 'bg-white/5 text-slate-400 hover:bg-white/10'\n            }`}\n          >\n            {i}\n          </button>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// AI WIDGETS\n\n// 1. AI Prompt Commander"
  },
  {
    "id": "ai-prompt-commander",
    "name": "2026 AI 커맨드 센터 & 프롬프트 인스펙터",
    "category": "ai-widgets",
    "tags": [
      "ai",
      "prompt",
      "commander",
      "llm",
      "chat",
      "인공지능",
      "프롬프트",
      "커맨드"
    ],
    "description": "모델 셀렉터(Flash/Pro), 실시간 프롬프트 파라미터 제어, 음성 마이크 버튼.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "ai-prompt-commander",
    "aiPromptGuidance": "최신 AI 모델 스위처와 음성/텍스트 입력을 지원하는 프롬프트 커맨더입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const AiPromptCommanderDemo: React.FC = () => {\n  const [model, setModel] = useState('Claude-3.7-Sonnet');\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-violet-500/30 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span className=\"flex items-center gap-1.5\"><Sparkles className=\"w-4 h-4 text-violet-400\" /> AI 커맨드 센터</span>\n        <select value={model} onChange={e => setModel(e.target.value)} className=\"bg-black/60 border border-white/10 text-violet-300 text-[10px] rounded px-1.5 py-0.5 focus:outline-none\">\n          <option>Claude-3.7-Sonnet</option>\n          <option>GPT-4o-Realtime</option>\n          <option>Gemini-2.5-Pro</option>\n        </select>\n      </div>\n      <div className=\"p-2.5 rounded-xl bg-slate-950 border border-white/5 font-mono text-[11px] text-slate-300 space-y-1\">\n        <div className=\"text-slate-500\">// System Prompt</div>\n        <div className=\"text-cyan-300\">You are a Senior Fullstack Architect with 2026 UI standards.</div>\n      </div>\n    </div>\n  );\n};\n\n// 2. Interactive Terminal"
  },
  {
    "id": "interactive-terminal-card",
    "name": "개발자용 임베디드 웹 터미널 & 로그 스트림",
    "category": "ai-widgets",
    "tags": [
      "terminal",
      "console",
      "cli",
      "log",
      "developer",
      "터미널",
      "콘솔",
      "로그"
    ],
    "description": "맥 OS 스타일의 윈도우 헤더, 실시간 타이핑 애니메이션 및 명령어 복사 기능.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "interactive-terminal-card",
    "aiPromptGuidance": "macOS 스타일의 다크 터미널 카드. 상단 신호등 버튼 및 명령어 복사 액션을 구현하세요.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const InteractiveTerminalDemo: React.FC = () => {\n  const [cmd, setCmd] = useState('');\n  const [logs, setLogs] = useState(['$ agy --approval-mode=yolo', '✔ Connected to runtime [PID: 93090]', '✔ Port 10194 active']);\n\n  const handleRun = (e: React.FormEvent) => {\n    e.preventDefault();\n    if (!cmd) return;\n    setLogs(prev => [...prev, `$ ${cmd}`, `Executed: ${cmd} (0.01ms)`]);\n    setCmd('');\n  };\n\n  return (\n    <div className=\"w-full rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl font-mono text-[10px] space-y-1.5\">\n      <div className=\"flex items-center justify-between border-b border-white/10 pb-1.5\">\n        <div className=\"flex gap-1.5\">\n          <span className=\"w-2.5 h-2.5 rounded-full bg-rose-500\" />\n          <span className=\"w-2.5 h-2.5 rounded-full bg-amber-500\" />\n          <span className=\"w-2.5 h-2.5 rounded-full bg-emerald-500\" />\n        </div>\n        <span className=\"text-slate-500\">bash — agy-session</span>\n      </div>\n      <div className=\"h-16 overflow-y-auto space-y-0.5 text-slate-300\">\n        {logs.slice(-3).map((l, i) => (\n          <div key={i} className={l.startsWith('$') ? 'text-violet-400 font-bold' : 'text-emerald-400'}>{l}</div>\n        ))}\n      </div>\n      <form onSubmit={handleRun} className=\"flex gap-1\">\n        <span className=\"text-violet-400\">&gt;</span>\n        <input\n          type=\"text\"\n          value={cmd}\n          onChange={e => setCmd(e.target.value)}\n          placeholder=\"명령어 입력 후 Enter...\"\n          className=\"bg-transparent text-white focus:outline-none flex-1 text-[10px]\"\n        />\n      </form>\n    </div>\n  );\n};\n\n// 3. AI Diff Inspector"
  },
  {
    "id": "ai-code-diff-inspector",
    "name": "AI 자동 코드 리팩토링 Before/After Diff 비교 뷰어",
    "category": "ai-widgets",
    "tags": [
      "ai",
      "code",
      "diff",
      "refactor",
      "코드비교",
      "리팩토링",
      "깃허브"
    ],
    "description": "빨간색(삭제)/초록색(추가) 라인 하이라이트와 원클릭 적용(Apply) 버튼.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "ai-code-diff-inspector",
    "aiPromptGuidance": "AI가 제안한 코드 변경 사항을 시각적으로 대조하는 Diff 인스펙터입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const AiDiffInspectorDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2 font-mono text-[10px]\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white font-sans\">\n        <span className=\"flex items-center gap-1.5\"><Sparkles className=\"w-3.5 h-3.5 text-violet-400\" /> AI Diff 인스펙터</span>\n        <span className=\"text-emerald-400 text-[10px]\">1 hunk clean</span>\n      </div>\n      <div className=\"p-2 rounded-xl bg-slate-950 border border-white/5 space-y-0.5\">\n        <div className=\"text-rose-400 bg-rose-950/30 px-1 rounded\">- const total = items.length;</div>\n        <div className=\"text-emerald-400 bg-emerald-950/30 px-1 rounded\">+ const total = useMemo(() =&gt; items.length, [items]);</div>\n      </div>\n    </div>\n  );\n};\n\n// 4. AI Chat Bubble Feed"
  },
  {
    "id": "ai-chat-thread-bubble-feed",
    "name": "멀티턴 AI 대화 스레드 & 토큰 스트리밍 버블",
    "category": "ai-widgets",
    "tags": [
      "ai",
      "chat",
      "thread",
      "streaming",
      "챗봇",
      "대화창",
      "메시지"
    ],
    "description": "사용자 및 어시스턴트 버블, 코드블럭 복사, 재생성(Regenerate) 툴바.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "ai-chat-thread-bubble-feed",
    "aiPromptGuidance": "스트리밍 커서 효과와 코드 하이라이트를 지원하는 AI 챗 버블 목록입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const AiChatThreadDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2 text-xs\">\n      <div className=\"flex justify-between items-center font-bold text-white\">\n        <span>멀티턴 AI 대화 스레드</span>\n        <Bot className=\"w-3.5 h-3.5 text-violet-400\" />\n      </div>\n      <div className=\"space-y-1.5\">\n        <div className=\"bg-white/[0.04] p-2 rounded-xl text-slate-300 self-end max-w-[85%] ml-auto text-[11px]\">\n          차트와 피벗 매트릭스 연동 예시를 보여줘.\n        </div>\n        <div className=\"bg-violet-900/30 border border-violet-500/30 p-2 rounded-xl text-violet-200 max-w-[85%] text-[11px]\">\n          ✨ 1분봉 캔들스틱과 10만건 가상 윈도잉 표가 즉시 로드되었습니다!\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// 5. AI Vector Search Explorer"
  },
  {
    "id": "ai-vector-search-explorer",
    "name": "RAG 임베딩 벡터 검색 & 코사인 유사도 시밀러리티 뷰어",
    "category": "ai-widgets",
    "tags": [
      "ai",
      "rag",
      "vector",
      "embedding",
      "유사도",
      "벡터검색",
      "임베딩"
    ],
    "description": "코사인 유사도(Cosine Score 0.94) 상위 문서 청크 하이라이트 패널.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "ai-vector-search-explorer",
    "aiPromptGuidance": "RAG 파이프라인에서 검색된 지식 청크와 매칭 유사도를 시각화하는 위젯입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const AiVectorSearchDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span>RAG 벡터 검색 유사도</span>\n        <span className=\"text-cyan-400 text-[10px] font-mono\">Cosine Sim: 0.942</span>\n      </div>\n      <div className=\"space-y-1 text-[11px] font-mono\">\n        <div className=\"flex justify-between p-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-300\">\n          <span>Chunk #412: Architecture.md</span>\n          <span className=\"font-bold\">94.2%</span>\n        </div>\n        <div className=\"flex justify-between p-1.5 rounded-lg bg-white/[0.02] text-slate-400\">\n          <span>Chunk #108: ComponentSpecs.ts</span>\n          <span>82.1%</span>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// 6. AI Agent Task DAG Flow"
  },
  {
    "id": "ai-agent-task-dag-flow",
    "name": "자율 AI 에이전트 다단계 실행 DAG 워크플로우 노드맵",
    "category": "ai-widgets",
    "tags": [
      "ai",
      "agent",
      "dag",
      "workflow",
      "에이전트",
      "워크플로우",
      "오케스트레이션"
    ],
    "description": "계획 수립 -> 웹 검색 -> 코드 작성 -> 단위 테스트 노드 간 연결선.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "ai-agent-task-dag-flow",
    "aiPromptGuidance": "다중 에이전트 간 작업 흐름을 노드 다이어그램으로 표시하는 위젯입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const AiAgentDagFlowDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span>자율 에이전트 DAG 워크플로우</span>\n        <span className=\"text-emerald-400 text-[10px]\">● Running</span>\n      </div>\n      <div className=\"flex items-center justify-between text-[10px] font-mono gap-1\">\n        <div className=\"p-1.5 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-300\">Plan ✔</div>\n        <span className=\"text-slate-600\">➔</span>\n        <div className=\"p-1.5 rounded-lg bg-violet-950 border border-violet-500/40 text-violet-300 animate-pulse\">Code ⚡</div>\n        <span className=\"text-slate-600\">➔</span>\n        <div className=\"p-1.5 rounded-lg bg-slate-950 text-slate-500\">Verify</div>\n      </div>\n    </div>\n  );\n};\n\n// 7. AI Image Generator Studio"
  },
  {
    "id": "ai-image-generator-studio",
    "name": "AI 텍스트 투 이미지 (Text-to-Image) 화풍 선택 스튜디오",
    "category": "ai-widgets",
    "tags": [
      "ai",
      "image",
      "generation",
      "prompt",
      "이미지생성",
      "화풍선택",
      "해상도"
    ],
    "description": "화풍(Cyberpunk, Anime, Photo), 종횡비(16:9, 1:1), 4장 그리드 결과물.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "ai-image-generator-studio",
    "aiPromptGuidance": "프롬프트와 스타일 프리셋을 선택하여 이미지를 렌더링하는 스튜디오 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const AiImageStudioDemo: React.FC = () => {\n  const [style, setStyle] = useState('Cyberpunk');\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span>AI 이미지 생성 스튜디오</span>\n        <span className=\"text-fuchsia-400 text-[10px]\">{style}</span>\n      </div>\n      <div className=\"flex gap-1\">\n        {['Cyberpunk', 'Photoreal', 'Anime', 'Glass 3D'].map(s => (\n          <button\n            key={s}\n            onClick={() => setStyle(s)}\n            className={`flex-1 py-1 rounded text-[9px] font-bold ${style === s ? 'bg-fuchsia-600 text-white' : 'bg-white/5 text-slate-400'}`}\n          >\n            {s}\n          </button>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// 8. AI Audio Voice Waveform"
  },
  {
    "id": "ai-audio-voice-waveform",
    "name": "실시간 AI 음성 인식 & 오디오 주파수 이퀄라이저 파형 바",
    "category": "ai-widgets",
    "tags": [
      "ai",
      "voice",
      "audio",
      "waveform",
      "음성인식",
      "파형",
      "마이크"
    ],
    "description": "말하는 음량에 따라 튀어오르는 네온 이퀄라이저 바와 실시간 자막 생성.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "ai-audio-voice-waveform",
    "aiPromptGuidance": "실시간 음성 주파수 애니메이션과 STT 텍스트 스트림을 보여주는 위젯입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const AiAudioWaveformDemo: React.FC = () => {\n  const [rec, setRec] = useState(true);\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-3\">\n      <div className=\"flex justify-between items-center text-xs font-bold text-white\">\n        <span className=\"flex items-center gap-1.5\"><Volume2 className=\"w-3.5 h-3.5 text-emerald-400\" /> 실시간 음성 주파수 (STT)</span>\n        <button onClick={() => setRec(!rec)} className={`text-[10px] font-bold px-2 py-0.5 rounded ${rec ? 'bg-rose-500/20 text-rose-300 animate-pulse' : 'bg-white/5 text-slate-400'}`}>\n          {rec ? '● REC ON' : 'PAUSED'}\n        </button>\n      </div>\n      <div className=\"flex items-center justify-between gap-1 h-8 px-2 bg-slate-950/60 rounded-xl\">\n        {[20, 45, 80, 60, 95, 30, 70, 85, 40, 90, 65, 35].map((h, i) => (\n          <div key={i} className=\"flex-1 bg-emerald-400 rounded-full\" style={{ height: rec ? `${h}%` : '20%' }} />\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// 9. AI Tool Calling JSON Schema"
  },
  {
    "id": "ai-function-calling-json-schema",
    "name": "AI Tool Calling / 함수 호출 JSON 인자 파라미터 인스펙터",
    "category": "ai-widgets",
    "tags": [
      "ai",
      "function-calling",
      "tools",
      "json-schema",
      "도구호출",
      "스키마"
    ],
    "description": "함수명, 인자(Arguments) 유효성 검사, 실행 결과 반환 콘솔.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "ai-function-calling-json-schema",
    "aiPromptGuidance": "LLM이 호출한 외부 도구(Function Calling)의 파라미터를 점검하는 위젯입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const AiFunctionCallDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1.5 font-mono text-[10px]\">\n      <div className=\"flex justify-between text-xs font-bold text-white font-sans\">\n        <span>AI Tool Calling Schema</span>\n        <span className=\"text-violet-400\">execute_sql</span>\n      </div>\n      <div className=\"p-2 rounded bg-slate-950 text-slate-300 space-y-0.5\">\n        <span className=\"text-fuchsia-400 font-bold\">{'{ \"query\": \"SELECT * FROM trades LIMIT 5\" }'}</span>\n      </div>\n    </div>\n  );\n};\n\n// 10. AI Prompt Template Vault"
  },
  {
    "id": "ai-prompt-template-vault",
    "name": "검증된 시스템 프롬프트 템플릿 보관함 (Vault)",
    "category": "ai-widgets",
    "tags": [
      "ai",
      "prompt-template",
      "vault",
      "system-prompt",
      "프롬프트보관함",
      "템플릿"
    ],
    "description": "코딩 전문가, 비즈니스 기획, 영어 튜터 카테고리별 프롬프트 복사 카드.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "ai-prompt-template-vault",
    "aiPromptGuidance": "자주 쓰는 유용한 시스템 프롬프트를 검색하고 원클릭 복사하는 보관함입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const AiPromptVaultDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span>프롬프트 템플릿 보관함</span>\n        <Key className=\"w-3.5 h-3.5 text-amber-400\" />\n      </div>\n      <div className=\"p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200\">\n        📌 2026 엔터프라이즈 고성능 컴포넌트 자동 생성 프롬프트\n      </div>\n    </div>\n  );\n};\n\n// 11. AI Token Cost Calculator"
  },
  {
    "id": "ai-token-cost-calculator",
    "name": "LLM 모델별 토큰 단가 & 예상 과금액 실시간 계산기",
    "category": "ai-widgets",
    "tags": [
      "ai",
      "pricing",
      "tokens",
      "calculator",
      "토큰계산기",
      "비용계산",
      "모델비교"
    ],
    "description": "입력/출력 토큰 수 슬라이더 조절 시 Gemini, GPT, Claude 비용 실시간 비교.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "ai-token-cost-calculator",
    "aiPromptGuidance": "토큰 사용량에 따른 모델별 과금액을 실시간 산출하는 계산기 위젯입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const AiTokenCostDemo: React.FC = () => {\n  const [tokens, setTokens] = useState(100);\n  const cost = (tokens * 0.003).toFixed(2);\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span>토큰 비용 계산기</span>\n        <span className=\"text-emerald-400 font-mono font-bold\">${cost}</span>\n      </div>\n      <input\n        type=\"range\"\n        min=\"10\"\n        max=\"1000\"\n        value={tokens}\n        onChange={e => setTokens(Number(e.target.value))}\n        className=\"w-full h-1 bg-slate-800 rounded accent-emerald-500\"\n      />\n      <span className=\"text-[10px] text-slate-400 font-mono block text-right\">{tokens}k Tokens</span>\n    </div>\n  );\n};\n\n// 12. AI Sentiment Emotion Radar"
  },
  {
    "id": "ai-sentiment-emotion-radar",
    "name": "자연어 리뷰 텍스트 감정 분석 (Sentiment 긍부정 스펙트럼)",
    "category": "ai-widgets",
    "tags": [
      "ai",
      "sentiment",
      "nlp",
      "emotion",
      "감정분석",
      "긍부정",
      "자연어처리"
    ],
    "description": "긍정 82%, 중립 12%, 부정 6% 색상 바 및 주요 키워드 클라우드.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "ai-sentiment-emotion-radar",
    "aiPromptGuidance": "사용자 리뷰/댓글의 긍부정 점수를 시각적으로 요약하는 감정 분석 위젯입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const AiSentimentRadarDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2\">\n      <div className=\"flex justify-between text-xs font-bold text-white\">\n        <span>리뷰 텍스트 감정 분석</span>\n        <span className=\"text-emerald-400 font-bold text-[10px]\">96% 긍정</span>\n      </div>\n      <div className=\"flex items-center gap-2 p-2 rounded-xl bg-slate-950/60 text-xs\">\n        <Smile className=\"w-4 h-4 text-emerald-400 shrink-0\" />\n        <span className=\"text-slate-300 text-[11px]\">\"컴포넌트 인터랙션이 너무 빠르고 아름답습니다!\"</span>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "kpi-metric-neon",
    "name": "네온 글로우 실시간 활성 사용자 (MAU) 지표 카드",
    "category": "stats",
    "tags": [
      "kpi",
      "metric",
      "stat",
      "card",
      "mau",
      "지표",
      "통계",
      "카드",
      "네온"
    ],
    "description": "은은한 네온 배경 블러, 성장률 뱃지 및 전월 대비 증감 수치.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "kpi-metric-neon",
    "aiPromptGuidance": "부드러운 네온 글로우 효과가 적용된 KPI 메트릭 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const KpiMetricNeonDemo: React.FC = () => {\n  const [val, setVal] = useState(99.42);\n  return (\n    <div className=\"relative group overflow-hidden rounded-2xl bg-gradient-to-br from-violet-950/60 via-slate-900/95 to-slate-950 backdrop-blur-2xl border border-violet-500/40 p-4 shadow-[0_0_25px_rgba(139,92,246,0.15)] hover:border-violet-400/80 transition-all duration-300\">\n      <div className=\"absolute top-0 right-0 w-32 h-32 bg-violet-500/15 rounded-full blur-3xl pointer-events-none\" />\n      <div className=\"flex items-center justify-between mb-2\">\n        <span className=\"text-[11px] font-extrabold tracking-wider text-slate-300 uppercase flex items-center gap-1.5\">\n          <span className=\"w-2 h-2 rounded-full bg-violet-400 animate-pulse\" />\n          종합 설비 효율 (OEE)\n        </span>\n        <span className=\"text-[10px] px-2 py-0.5 rounded-md bg-violet-500/20 text-violet-300 font-mono font-bold\">Grade A+</span>\n      </div>\n      <div className=\"flex items-baseline justify-between mb-2\">\n        <div className=\"text-3xl font-black text-white font-mono tracking-tight\">{val}%</div>\n        <span className=\"inline-flex items-center text-[11px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/30\">\n          <ArrowUpRight className=\"w-3.5 h-3.5 mr-0.5\" />+1.4%p\n        </span>\n      </div>\n      {/* Dynamic Mini Bar */}\n      <div className=\"w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden\">\n        <div className=\"bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 h-full rounded-full shadow-[0_0_8px_#8b5cf6]\" style={{ width: `${val}%` }} />\n      </div>\n    </div>\n  );\n};\n\n// 2. High-Tech MRR / Output Progress"
  },
  {
    "id": "stat-revenue-growth-gradient",
    "name": "월간 반복 매출 (MRR $128k) 그라데이션 성장 카드",
    "category": "stats",
    "tags": [
      "stats",
      "mrr",
      "revenue",
      "growth",
      "매출",
      "성장률",
      "카드"
    ],
    "description": "달러 금액, 이번 분기 목표치 달성률(88%), 미니 상승 그래프.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "stat-revenue-growth-gradient",
    "aiPromptGuidance": "MRR 지표와 목표 달성 진행률 바를 표시하는 통계 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const StatRevenueDemo: React.FC = () => (\n  <div className=\"relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900/95 to-fuchsia-950/40 backdrop-blur-2xl border border-cyan-500/40 p-4 shadow-2xl space-y-2\">\n    <div className=\"flex justify-between text-xs font-extrabold text-slate-300\">\n      <span className=\"flex items-center gap-1\"><Zap className=\"w-3.5 h-3.5 text-cyan-400\" /> 금일 목표 생산량 진척도</span>\n      <span className=\"text-cyan-300 font-mono font-bold\">14,280 / 15,000 EA</span>\n    </div>\n    <div className=\"flex items-baseline justify-between\">\n      <span className=\"text-2xl font-black text-white font-mono\">95.2%</span>\n      <span className=\"text-[10px] text-cyan-400 font-bold font-mono\">납기 -04:20:18</span>\n    </div>\n    <div className=\"w-full bg-slate-800 rounded-full h-2 overflow-hidden\">\n      <div className=\"bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 h-full rounded-full shadow-[0_0_10px_#06b6d4]\" style={{ width: '95.2%' }} />\n    </div>\n  </div>\n);\n\n// 3. Ultra Low Micro-Ping Latency"
  },
  {
    "id": "stat-server-latency-ms",
    "name": "글로벌 네트워크 응답 지연 (18ms) 초저지연 상태 카드",
    "category": "stats",
    "tags": [
      "stats",
      "latency",
      "ping",
      "network",
      "지연시간",
      "핑",
      "네트워크"
    ],
    "description": "평균 18ms 초저지연 상태 표시, 패킷 손실 0.00% 보장 뱃지.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "stat-server-latency-ms",
    "aiPromptGuidance": "서버 레이턴시와 안정성을 나타내는 상태 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const StatLatencyDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900/90 to-slate-950 backdrop-blur-2xl border border-emerald-500/40 p-4 shadow-2xl flex items-center justify-between\">\n    <div>\n      <span className=\"text-[11px] font-bold text-slate-400 block mb-1\">MES 엣지 통신 지연 (RT-Latency)</span>\n      <div className=\"text-2xl font-black text-white font-mono\">\n        1.84 <span className=\"text-xs font-bold text-emerald-400\">ms (P99)</span>\n      </div>\n    </div>\n    <div className=\"flex flex-col items-end gap-1\">\n      <span className=\"px-2.5 py-1 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-black rounded-lg animate-pulse\">\n        ● REALTIME\n      </span>\n      <span className=\"text-[9px] text-slate-500 font-mono\">Packet Loss: 0.00%</span>\n    </div>\n  </div>\n);\n\n// 4. Conversion Quality Index"
  },
  {
    "id": "stat-conversion-funnel-kpi",
    "name": "신규 고객 가입 전환율 (CVR 4.8%) A/B 승리 지표 카드",
    "category": "stats",
    "tags": [
      "stats",
      "cvr",
      "conversion",
      "marketing",
      "전환율",
      "마케팅지표"
    ],
    "description": "방문자 대비 가입 전환율, A/B 테스트 승리 태그, 전주 대비 증감.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "stat-conversion-funnel-kpi",
    "aiPromptGuidance": "가입 전환율과 A/B 테스트 지표를 강조하는 통계 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const StatConversionDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-cyan-500/40 p-4 shadow-2xl space-y-2\">\n    <div className=\"flex justify-between text-xs font-bold text-slate-300\">\n      <span>공정 합격률 (First Pass Yield)</span>\n      <span className=\"text-cyan-400 font-mono font-bold\">Six Sigma</span>\n    </div>\n    <div className=\"flex items-baseline justify-between\">\n      <span className=\"text-2xl font-black text-white font-mono\">99.96%</span>\n      <span className=\"text-xs text-emerald-400 font-bold font-mono\">CPK: 1.82</span>\n    </div>\n    <div className=\"grid grid-cols-4 gap-1 text-[9px] font-mono text-center\">\n      <span className=\"bg-emerald-950 p-1 rounded text-emerald-300 font-bold\">1공정 100%</span>\n      <span className=\"bg-emerald-950 p-1 rounded text-emerald-300 font-bold\">2공정 99.9%</span>\n      <span className=\"bg-emerald-950 p-1 rounded text-emerald-300 font-bold\">3공정 100%</span>\n      <span className=\"bg-emerald-950 p-1 rounded text-emerald-300 font-bold\">4공정 99.9%</span>\n    </div>\n  </div>\n);\n\n// 5. IoT Energy Power"
  },
  {
    "id": "stat-battery-power-consumption",
    "name": "디바이스 전력 소모 (14.2W) & 배터리 효율 96% 카드",
    "category": "stats",
    "tags": [
      "stats",
      "battery",
      "power",
      "iot",
      "배터리",
      "전력",
      "헬스케어"
    ],
    "description": "충전 잔여 시간, 배터리 효율 96%, 절전 모드 토글 스위치.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "stat-battery-power-consumption",
    "aiPromptGuidance": "배터리 잔량 및 충전 상태를 시각화한 모바일/IoT 지표 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const StatBatteryDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-amber-500/40 p-4 shadow-2xl flex items-center justify-between\">\n    <div>\n      <span className=\"text-[11px] font-bold text-slate-400 block mb-1\">설비 순시 소비전력 & 피크전력</span>\n      <div className=\"text-2xl font-black text-amber-300 font-mono\">\n        48.2 <span className=\"text-xs font-bold text-slate-400\">kW / 60kW</span>\n      </div>\n      <span className=\"text-[10px] text-emerald-400 font-bold\">전력 효율 94.8% (정상)</span>\n    </div>\n    <div className=\"p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]\">\n      <BatteryCharging className=\"w-5 h-5\" />\n    </div>\n  </div>\n);\n\n// 6. Git Branch Stars"
  },
  {
    "id": "stat-github-stars-trend",
    "name": "오픈소스 저장소 스타 (+142 Today) 트렌딩 카드",
    "category": "stats",
    "tags": [
      "stats",
      "github",
      "stars",
      "repo",
      "깃허브",
      "스타수",
      "오픈소스"
    ],
    "description": "오늘 획득한 스타 수(+142), 깃허브 트렌딩 1위 뱃지, 포크 수치.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "stat-github-stars-trend",
    "aiPromptGuidance": "깃허브 스타 수와 오늘 상승폭을 보여주는 개발자 친화 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const StatGithubStarsDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/10 p-4 shadow-2xl flex items-center justify-between\">\n    <div>\n      <span className=\"text-[11px] font-bold text-slate-400 block mb-1\">오픈소스 저장소 스타 트렌드</span>\n      <div className=\"text-2xl font-black text-white font-mono\">\n        14,890 <span className=\"text-xs font-bold text-amber-400 font-sans\">+182 Today</span>\n      </div>\n      <span className=\"text-[10px] text-violet-400 font-mono\">github.com/blueprint-hub</span>\n    </div>\n    <div className=\"p-3 rounded-2xl bg-white/5 border border-white/10 text-white\">\n      <GitBranch className=\"w-5 h-5\" />\n    </div>\n  </div>\n);\n\n// 7. Four Nines SLA"
  },
  {
    "id": "stat-uptime-sla-four-nines",
    "name": "서비스 무장애 가동률 99.99% (Four Nines) 보증 카드",
    "category": "stats",
    "tags": [
      "stats",
      "uptime",
      "sla",
      "reliability",
      "가동률",
      "서버안정성"
    ],
    "description": "지난 365일 무중단 운영 시간, 장애 발생 0건, 그린 핑 펄스 애니메이션.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "stat-uptime-sla-four-nines",
    "aiPromptGuidance": "99.99% SLA 무장애 달성 기록을 강조하는 신뢰도 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const StatUptimeSlaDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-emerald-500/40 p-4 shadow-2xl flex items-center justify-between\">\n    <div>\n      <span className=\"text-[11px] font-bold text-slate-400 block mb-1\">연간 무장애 가동률 (Four Nines)</span>\n      <div className=\"text-2xl font-black text-emerald-400 font-mono\">99.999%</div>\n      <span className=\"text-[10px] text-slate-400\">연간 다운타임: 5분 미만</span>\n    </div>\n    <div className=\"w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_12px_#10b981] animate-pulse\" />\n  </div>\n);\n\n// 8. Crypto Balance / Value"
  },
  {
    "id": "stat-crypto-portfolio-balance",
    "name": "암호화폐 총 자산 평가액 ($148,290) & 24h 변동 카드",
    "category": "stats",
    "tags": [
      "stats",
      "crypto",
      "balance",
      "portfolio",
      "자산평가",
      "암호화폐",
      "수익금"
    ],
    "description": "총 평가액($148,290.00), 실시간 수익률(+12.4%), 미니 코인 아이콘들.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "stat-crypto-portfolio-balance",
    "aiPromptGuidance": "암호화폐 잔고와 24시간 수익률을 나타내는 금융 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const StatCryptoBalanceDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-violet-500/40 p-4 shadow-2xl space-y-1\">\n    <div className=\"flex justify-between text-xs font-bold text-slate-400\">\n      <span>재고 자산 총 평가액 (Inventory Value)</span>\n      <span className=\"text-emerald-400 font-mono font-bold\">+8.4%</span>\n    </div>\n    <div className=\"text-2xl font-black text-white font-mono\">$4,892,100.00</div>\n    <span className=\"text-[10px] text-violet-300 font-mono block\">총 4,200 SKU 활성 관리중</span>\n  </div>\n);\n\n// 9. Database QPS"
  },
  {
    "id": "stat-database-qps-throughput",
    "name": "데이터베이스 초당 쿼리 처리수 (14.5k QPS) 성능 카드",
    "category": "stats",
    "tags": [
      "stats",
      "qps",
      "database",
      "throughput",
      "쿼리수",
      "데이터베이스"
    ],
    "description": "Read/Write 비율(85:15), 슬로우 쿼리 발생 0건, 버퍼 캐시 히트율 99.2%.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "stat-database-qps-throughput",
    "aiPromptGuidance": "DB 트랜잭션 QPS와 캐시 히트율을 표시하는 성능 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const StatDbQpsDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-cyan-500/40 p-4 shadow-2xl flex items-center justify-between\">\n    <div>\n      <span className=\"text-[11px] font-bold text-slate-400 block mb-1\">DB 초당 쿼리 처리수 (QPS)</span>\n      <div className=\"text-2xl font-black text-white font-mono\">\n        24,500 <span className=\"text-xs font-bold text-cyan-400\">QPS</span>\n      </div>\n      <span className=\"text-[10px] text-emerald-400 font-bold\">Replica Node 4/4 SYNCED</span>\n    </div>\n    <Database className=\"w-6 h-6 text-cyan-400 animate-pulse\" />\n  </div>\n);\n\n// 10. AI Model TPS"
  },
  {
    "id": "stat-ai-token-generation-speed",
    "name": "AI 모델 초당 토큰 생성 속도 (120 TPS 초고속) 카드",
    "category": "stats",
    "tags": [
      "stats",
      "tps",
      "tokens",
      "ai-speed",
      "토큰속도",
      "추론성능"
    ],
    "description": "1초당 120개 토큰 고속 스트리밍, Flash 모델 최적화 상태.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "stat-ai-token-generation-speed",
    "aiPromptGuidance": "AI 실시간 토큰 생성 속도(TPS)를 보여주는 지표 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const StatAiTpsDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-violet-500/40 p-4 shadow-2xl flex items-center justify-between\">\n    <div>\n      <span className=\"text-[11px] font-bold text-slate-400 block mb-1\">AI 모델 초당 토큰 생성 속도</span>\n      <div className=\"text-2xl font-black text-violet-300 font-mono\">\n        185 <span className=\"text-xs font-bold text-fuchsia-400\">TPS</span>\n      </div>\n      <span className=\"text-[10px] text-slate-400\">TTFT: 0.12s (Ultra Fast)</span>\n    </div>\n    <Cpu className=\"w-6 h-6 text-violet-400 animate-pulse\" />\n  </div>\n);\n\n// 11. NVMe Disk Usage"
  },
  {
    "id": "stat-storage-disk-usage-bar",
    "name": "NVMe SSD 스토리지 1.42TB / 2.00TB (71%) 잔여 용량 카드",
    "category": "stats",
    "tags": [
      "stats",
      "storage",
      "ssd",
      "disk",
      "용량",
      "스토리지",
      "디스크"
    ],
    "description": "1.42 TB / 2.00 TB (71% 사용중), 남은 여유공간 580 GB 표시 바.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "stat-storage-disk-usage-bar",
    "aiPromptGuidance": "디스크 사용량과 남은 여유 공간을 프로그레스 바로 나타내는 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const StatDiskUsageDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/10 p-4 shadow-2xl space-y-2\">\n    <div className=\"flex justify-between text-xs font-bold text-slate-300\">\n      <span>NVMe 클러스터 스토리지</span>\n      <span className=\"text-cyan-400 font-mono\">1.42TB / 2.00TB (71%)</span>\n    </div>\n    <div className=\"w-full bg-slate-800 rounded-full h-2 overflow-hidden\">\n      <div className=\"bg-cyan-500 h-full rounded-full shadow-[0_0_8px_#06b6d4]\" style={{ width: '71%' }} />\n    </div>\n    <div className=\"flex justify-between text-[10px] text-slate-500 font-mono\">\n      <span>Read: 6.8 GB/s</span>\n      <span>Write: 5.2 GB/s</span>\n    </div>\n  </div>\n);\n\n// 12. CSAT Score"
  },
  {
    "id": "stat-customer-satisfaction-csat",
    "name": "고객 만족도 점수 (CSAT 4.9 / 5.0) 1,420개 리뷰 카드",
    "category": "stats",
    "tags": [
      "stats",
      "csat",
      "satisfaction",
      "reviews",
      "만족도",
      "리뷰점수",
      "별점"
    ],
    "description": "5점 만점 4.9점, 총 1,420개 긍정 리뷰, 하트 애니메이션 아이콘.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "stat-customer-satisfaction-csat",
    "aiPromptGuidance": "서비스의 CSAT 평점과 누적 평가수를 나타내는 통계 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const StatCsatDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-amber-500/40 p-4 shadow-2xl flex items-center justify-between\">\n    <div>\n      <span className=\"text-[11px] font-bold text-slate-400 block mb-1\">고객 품질 만족도 지수 (CSAT)</span>\n      <div className=\"text-2xl font-black text-amber-300 font-mono\">\n        4.94 <span className=\"text-xs text-slate-400 font-normal\">/ 5.00</span>\n      </div>\n      <span className=\"text-[10px] text-emerald-400 font-bold\">1,842개 고객사 리뷰 100% 만족</span>\n    </div>\n    <div className=\"text-amber-400 text-xl font-black\">★★★★★</div>\n  </div>\n);"
  },
  {
    "id": "floating-tab-navigation",
    "name": "2026 플로팅 캡슐 탭 네비게이션",
    "category": "navigation",
    "tags": [
      "nav",
      "navigation",
      "tab",
      "floating",
      "capsule",
      "탭",
      "네비게이션",
      "캡슐"
    ],
    "description": "스마트 활성 표시 인디케이터, 글래스모피즘 플로팅 디자인의 탑/서브 탭 컨트롤.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "floating-tab-navigation",
    "aiPromptGuidance": "부드러운 캡슐 형태의 플로팅 탭 네비게이션입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const FloatingNavDemo: React.FC = () => {\n  const [tab, setTab] = useState('Overview');\n  return (\n    <div className=\"flex items-center justify-center p-2\">\n      <nav className=\"flex items-center gap-1 p-1 rounded-full bg-slate-900/90 border border-white/10 shadow-2xl\">\n        {['Overview', 'Analytics', 'Settings'].map(t => (\n          <button\n            key={t}\n            onClick={() => setTab(t)}\n            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${\n              tab === t ? 'bg-violet-600 text-white shadow-md' : 'text-slate-400 hover:text-white'\n            }`}\n          >\n            {t}\n          </button>\n        ))}\n      </nav>\n    </div>\n  );\n};\n\n// 2. Collapsible Sidebar"
  },
  {
    "id": "nav-sidebar-collapsible-dark",
    "name": "축소/확장 지원 사이드바 메뉴 & 유저 프로필",
    "category": "navigation",
    "tags": [
      "nav",
      "sidebar",
      "collapsible",
      "menu",
      "사이드바",
      "메뉴",
      "접기"
    ],
    "description": "아이콘 전용 미니 모드 전환, 뱃지 카운트, 하단 유저 프로필 카드.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "nav-sidebar-collapsible-dark",
    "aiPromptGuidance": "너비 조절 및 서브메뉴 확장을 지원하는 다크 사이드바입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const SidebarCollapsibleDemo: React.FC = () => {\n  const [active, setActive] = useState('dash');\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1 text-xs\">\n      <div className=\"text-slate-400 font-bold mb-2\">사이드바 네비게이션</div>\n      {[\n        { id: 'dash', label: '📂 대시보드' },\n        { id: 'chart', label: '📊 실시간 차트' },\n        { id: 'setting', label: '⚙️ 환경설정' }\n      ].map(it => (\n        <div\n          key={it.id}\n          onClick={() => setActive(it.id)}\n          className={`p-2 rounded-xl cursor-pointer font-bold transition-all ${\n            active === it.id ? 'bg-violet-600/30 text-violet-200 border border-violet-500/40' : 'text-slate-400 hover:bg-white/5 hover:text-white'\n          }`}\n        >\n          {it.label}\n        </div>\n      ))}\n    </div>\n  );\n};\n\n// 3. Breadcrumb"
  },
  {
    "id": "nav-breadcrumb-trail-path",
    "name": "스마트 경로 브레드크럼 (Breadcrumb) 트레일",
    "category": "navigation",
    "tags": [
      "nav",
      "breadcrumb",
      "path",
      "hierarchy",
      "브레드크럼",
      "경로",
      "위치"
    ],
    "description": "홈 > 대시보드 > 프로젝트 > 칠판 스튜디오 단계별 링크 및 드롭다운 메뉴.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "nav-breadcrumb-trail-path",
    "aiPromptGuidance": "현재 웹 페이지 계층 위치를 명확히 보여주는 브레드크럼입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const BreadcrumbDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl flex items-center gap-1.5 text-xs\">\n    <span className=\"text-slate-400 hover:text-white cursor-pointer\">Home</span><ChevronRight className=\"w-3.5 h-3.5 text-slate-600\" />\n    <span className=\"text-slate-400 hover:text-white cursor-pointer\">Projects</span><ChevronRight className=\"w-3.5 h-3.5 text-slate-600\" />\n    <span className=\"text-violet-400 font-bold\">BlueprintHub</span>\n  </div>\n);\n\n// 4. Command Palette"
  },
  {
    "id": "nav-command-palette-cmd-k",
    "name": "맥 스타일 커맨드 팔레트 (Cmd + K / Quick Action)",
    "category": "navigation",
    "tags": [
      "nav",
      "command-palette",
      "cmdk",
      "search",
      "커맨드팔레트",
      "단축키",
      "검색"
    ],
    "description": "키보드 상하 화살표 선택, 페이지 즉시 이동, 단축키 뱃지 표시.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "nav-command-palette-cmd-k",
    "aiPromptGuidance": "빠른 검색과 액션 실행을 제공하는 Cmd+K 커맨드 팔레트 모달입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const CommandPaletteDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-black/90 backdrop-blur-2xl border border-violet-500/40 p-3 shadow-2xl space-y-2\">\n    <div className=\"flex items-center gap-2 px-2.5 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-slate-300\">\n      <Command className=\"w-4 h-4 text-violet-400\" />\n      <span className=\"font-mono\">Cmd + K 검색...</span>\n      <span className=\"ml-auto text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-slate-400 font-mono\">⌘K</span>\n    </div>\n  </div>\n);\n\n// 5. Mega Menu"
  },
  {
    "id": "nav-mega-menu-product-dropdown",
    "name": "다단 메가메뉴 (Mega Menu) 기능/솔루션 소개",
    "category": "navigation",
    "tags": [
      "nav",
      "megamenu",
      "dropdown",
      "solutions",
      "메가메뉴",
      "드롭다운",
      "솔루션"
    ],
    "description": "호버 시 풍부한 아이콘, 설명문, 인기 기능 추천 뱃지가 펼쳐지는 메뉴.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "nav-mega-menu-product-dropdown",
    "aiPromptGuidance": "SaaS 메인 랜딩에 적합한 대형 메가 드롭다운 메뉴입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const MegaMenuDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2 text-xs\">\n    <div className=\"text-xs font-bold text-white\">다단 메가메뉴</div>\n    <div className=\"grid grid-cols-2 gap-1.5 text-[11px]\">\n      <div className=\"p-2 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/5 cursor-pointer\">\n        <span className=\"font-bold text-violet-300 block\">AI 솔루션</span>\n        <span className=\"text-[10px] text-slate-500\">LLM 오케스트레이션</span>\n      </div>\n      <div className=\"p-2 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/5 cursor-pointer\">\n        <span className=\"font-bold text-cyan-300 block\">클라우드 인프라</span>\n        <span className=\"text-[10px] text-slate-500\">멀티리전 관제</span>\n      </div>\n    </div>\n  </div>\n);\n\n// 6. Segmented Control Pill"
  },
  {
    "id": "nav-segmented-control-pill",
    "name": "iOS 스타일 세그먼트 컨트롤러 (Segmented Pill)",
    "category": "navigation",
    "tags": [
      "nav",
      "segmented",
      "pill",
      "toggle",
      "세그먼트",
      "필터토글"
    ],
    "description": "배경 하이라이트가 미끄러지듯 이동하는 깔끔한 보기 모드 전환기.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "nav-segmented-control-pill",
    "aiPromptGuidance": "슬라이딩 인디케이터가 있는 세그먼트 버튼 컨트롤입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const SegmentedControlDemo: React.FC = () => {\n  const [seg, setSeg] = useState('Day');\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2\">\n      <div className=\"text-xs font-bold text-white\">iOS 세그먼트 알약 (Pill)</div>\n      <div className=\"flex p-1 bg-black/50 rounded-xl border border-white/10\">\n        {['Day', 'Week', 'Month', 'Year'].map(s => (\n          <button\n            key={s}\n            onClick={() => setSeg(s)}\n            className={`flex-1 py-1 rounded-lg text-xs font-bold transition-all ${\n              seg === s ? 'bg-violet-600 text-white shadow-md' : 'text-slate-400 hover:text-white'\n            }`}\n          >\n            {s}\n          </button>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// 7. Dock Magnification"
  },
  {
    "id": "nav-dock-magnification-bar",
    "name": "macOS 독 (Dock) 호버 확대 아이콘 툴바",
    "category": "navigation",
    "tags": [
      "nav",
      "dock",
      "macos",
      "magnification",
      "독",
      "툴바",
      "확대애니메이션"
    ],
    "description": "마우스 커서 근처의 아이콘이 부드럽게 커지는 인터랙티브 독.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "nav-dock-magnification-bar",
    "aiPromptGuidance": "마우스 호버 거리에 따라 스케일이 커지는 macOS 독 메뉴입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const DockMagnificationDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl flex justify-center items-center\">\n    <div className=\"flex items-center gap-2 p-2 rounded-2xl bg-black/60 border border-white/10\">\n      {['🚀', '⚡', '📊', '🤖', '🎨'].map((emoji, idx) => (\n        <div key={idx} className=\"w-8 h-8 rounded-xl bg-white/10 hover:bg-violet-600/50 flex items-center justify-center text-sm cursor-pointer hover:scale-125 transition-transform\">\n          {emoji}\n        </div>\n      ))}\n    </div>\n  </div>\n);\n\n// 8. Pagination Smart Jump"
  },
  {
    "id": "nav-pagination-smart-jump",
    "name": "페이지네이션 번호 바 & 직접 페이지 점프 인풋",
    "category": "navigation",
    "tags": [
      "nav",
      "pagination",
      "page",
      "jump",
      "페이지네이션",
      "페이징",
      "이동"
    ],
    "description": "이전/다음, 중간 생략(…), 직접 페이지 번호 입력 및 행 개수 셀렉트.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "nav-pagination-smart-jump",
    "aiPromptGuidance": "대규모 데이터 페이징을 지원하는 페이지네이션 네비게이션입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const PaginationDemo: React.FC = () => {\n  const [page, setPage] = useState(1);\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl flex items-center justify-between text-xs\">\n      <button onClick={() => setPage(p => Math.max(1, p - 1))} className=\"px-2 py-1 rounded bg-white/5 text-slate-400 hover:text-white\">이전</button>\n      <div className=\"flex gap-1\">\n        {[1, 2, 3, 4, 5].map(p => (\n          <button key={p} onClick={() => setPage(p)} className={`w-6 h-6 rounded font-mono font-bold ${page === p ? 'bg-violet-600 text-white' : 'text-slate-400 hover:bg-white/5'}`}>{p}</button>\n        ))}\n      </div>\n      <button onClick={() => setPage(p => Math.min(5, p + 1))} className=\"px-2 py-1 rounded bg-white/5 text-slate-400 hover:text-white\">다음</button>\n    </div>\n  );\n};\n\n// 9. Mobile Bottom Tab Bar"
  },
  {
    "id": "nav-mobile-bottom-tab-bar",
    "name": "모바일 하단 고정 액션 탭바 (Safe Area 대응)",
    "category": "navigation",
    "tags": [
      "nav",
      "mobile",
      "bottom-nav",
      "tabbar",
      "모바일",
      "하단탭바"
    ],
    "description": "홈, 검색, 알림, 프로필 아이콘 및 신규 알림 레드 닷(Red Dot).",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "nav-mobile-bottom-tab-bar",
    "aiPromptGuidance": "스마트폰 화면 하단에 고정되는 반응형 네비게이션 탭바입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const MobileBottomBarDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-950 border border-white/10 p-2 shadow-2xl flex items-center justify-around text-[10px] text-slate-400\">\n    <div className=\"flex flex-col items-center text-violet-400 font-bold\"><span>🏠</span><span>홈</span></div>\n    <div className=\"flex flex-col items-center hover:text-white\"><span>📈</span><span>트레이딩</span></div>\n    <div className=\"flex flex-col items-center hover:text-white\"><span>🤖</span><span>AI 랩</span></div>\n    <div className=\"flex flex-col items-center hover:text-white\"><span>👤</span><span>프로필</span></div>\n  </div>\n);\n\n// 10. TOC ScrollSpy"
  },
  {
    "id": "nav-toc-scrollspy-article",
    "name": "문서 목차 (TOC) 실시간 스크롤스파이 인디케이터",
    "category": "navigation",
    "tags": [
      "nav",
      "toc",
      "scrollspy",
      "docs",
      "목차",
      "스크롤스파이",
      "문서"
    ],
    "description": "사용자가 보고 있는 문서 본문 헤딩(H2/H3) 위치를 하이라이트하는 사이드 목차.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "nav-toc-scrollspy-article",
    "aiPromptGuidance": "기술 문서에 필수적인 스크롤 감지 목차(TOC) 네비게이터입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const TocScrollspyDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1.5 text-xs\">\n    <div className=\"text-slate-400 font-bold\">문서 목차 (TOC)</div>\n    <div className=\"pl-2 border-l-2 border-violet-500 text-violet-300 font-bold\">1. 개요 및 비전</div>\n    <div className=\"pl-2 border-l-2 border-white/10 text-slate-400 hover:text-white\">2. 컴포넌트 아키텍처</div>\n    <div className=\"pl-2 border-l-2 border-white/10 text-slate-400 hover:text-white\">3. 성능 벤치마크</div>\n  </div>\n);\n\n// 11. Stepper Progress"
  },
  {
    "id": "nav-stepper-progress-milestones",
    "name": "가로형 마일스톤 단계 진행바 (Progress Stepper)",
    "category": "navigation",
    "tags": [
      "nav",
      "stepper",
      "milestone",
      "progress",
      "마일스톤",
      "단계",
      "진행도"
    ],
    "description": "완료(체크), 진행중(펄스), 대기 상태를 원형 번호로 잇는 진행바.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "nav-stepper-progress-milestones",
    "aiPromptGuidance": "프로젝트나 주문 처리 프로세스 마일스톤을 보여주는 스텝바입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const StepperProgressDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2\">\n    <div className=\"flex justify-between text-xs font-bold text-white\"><span>마일스톤 진행</span><span className=\"text-emerald-400 font-mono text-[10px]\">75%</span></div>\n    <div className=\"flex items-center gap-1\">\n      <div className=\"h-1.5 flex-1 bg-emerald-500 rounded-full\" />\n      <div className=\"h-1.5 flex-1 bg-emerald-500 rounded-full\" />\n      <div className=\"h-1.5 flex-1 bg-emerald-500 rounded-full\" />\n      <div className=\"h-1.5 flex-1 bg-white/10 rounded-full\" />\n    </div>\n  </div>\n);\n\n// 12. Radial Context Wheel"
  },
  {
    "id": "nav-context-radial-wheel",
    "name": "원형 레이디얼 컨텍스트 휠 (Radial Pie Menu)",
    "category": "navigation",
    "tags": [
      "nav",
      "radial",
      "pie-menu",
      "context",
      "원형메뉴",
      "우클릭",
      "휠"
    ],
    "description": "우클릭 또는 버튼 클릭 시 360도 원형으로 펼쳐지는 빠른 퀵 메뉴.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "nav-context-radial-wheel",
    "aiPromptGuidance": "방사형으로 배치된 8방향 퀵 액션 레이디얼 메뉴입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const RadialWheelDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl flex items-center justify-between text-xs\">\n    <div><span className=\"font-bold text-white block\">원형 파이 휠 메뉴</span><span className=\"text-[10px] text-slate-400\">우클릭 휠 액션</span></div>\n    <div className=\"w-10 h-10 rounded-full bg-violet-600/30 border border-violet-500 flex items-center justify-center text-sm shadow-[0_0_12px_#8b5cf6]\">⚙️</div>\n  </div>\n);\n\n// FEEDBACK\n\n// 1. Toast Feed"
  },
  {
    "id": "notification-toast-feed",
    "name": "인터랙티브 알림 피드 & 토스트 카드",
    "category": "feedback",
    "tags": [
      "notification",
      "toast",
      "feedback",
      "alert",
      "modal",
      "알림",
      "피드백",
      "토스트"
    ],
    "description": "성공/경고/정보/에러 상태별 색상 및 실시간 알림 카운터, 닫기 인터랙션.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "notification-toast-feed",
    "aiPromptGuidance": "성공/에러 피드백을 전달하는 글래스모피즘 토스트 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const NotificationToastDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 p-3.5 shadow-2xl flex items-center gap-3\">\n    <div className=\"p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20\"><CheckCircle2 className=\"w-4 h-4\" /></div>\n    <div><h5 className=\"text-xs font-bold text-white\">AI 청사진 동기화 완료</h5><p className=\"text-[11px] text-slate-400\">포스트잇 칠판이 실시간 저장되었습니다.</p></div>\n  </div>\n);\n\n// 2. Destructive Modal"
  },
  {
    "id": "modal-confirm-destructive-dialog",
    "name": "위험 작업 2중 확인 (Destructive Action) 프로젝트명 검증 모달",
    "category": "feedback",
    "tags": [
      "modal",
      "dialog",
      "confirm",
      "destructive",
      "경고창",
      "확인모달",
      "삭제"
    ],
    "description": "삭제 확인을 위해 프로젝트명을 직접 타이핑해야 활성화되는 안전 다이얼로그.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "modal-confirm-destructive-dialog",
    "aiPromptGuidance": "영구 삭제 등 위험 액션 시 텍스트 확인 입력을 요구하는 모달입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const DestructiveModalDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-rose-500/40 p-4 shadow-2xl space-y-2 text-xs\">\n    <div className=\"flex items-center gap-2 text-rose-400 font-bold\"><AlertTriangle className=\"w-4 h-4\" /><span>프로젝트 영구 삭제</span></div>\n    <p className=\"text-slate-400 text-[11px]\">확인을 위해 'DELETE'를 입력하세요.</p>\n    <input type=\"text\" placeholder=\"DELETE\" className=\"w-full px-3 py-1 rounded bg-slate-950 border border-rose-500/30 text-rose-300 text-xs\" />\n  </div>\n);\n\n// 3. System Alert Banner"
  },
  {
    "id": "feedback-banner-system-alert",
    "name": "상단 글로벌 긴급 점검 공지 배너 (새로고침 버튼)",
    "category": "feedback",
    "tags": [
      "feedback",
      "banner",
      "alert",
      "announcement",
      "공지배너",
      "점검",
      "알림"
    ],
    "description": "정기 점검 안내, 즉시 새로고침 버튼, 오늘 하루 보지 않기 옵션.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "feedback-banner-system-alert",
    "aiPromptGuidance": "서비스 상단에 노출되는 긴급 공지 배너 바입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const SystemAlertBannerDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-amber-500/10 border border-amber-500/30 p-3 shadow-2xl flex items-center justify-between text-xs text-amber-200\">\n    <div className=\"flex items-center gap-2\"><span>⚠️</span><span>정기 DB 점검이 02:00에 예정되어 있습니다.</span></div>\n    <button className=\"px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[10px]\">확인</button>\n  </div>\n);\n\n// 4. Empty State Placeholder"
  },
  {
    "id": "feedback-empty-state-placeholder",
    "name": "일러스트레이션 감성 빈 화면 (Empty State) & 생성 CTA 카드",
    "category": "feedback",
    "tags": [
      "feedback",
      "empty-state",
      "placeholder",
      "cta",
      "빈화면",
      "안내",
      "첫시작"
    ],
    "description": "데이터가 없을 때 친절한 안내 문구와 첫 데이터 생성 유도 CTA 버튼.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "feedback-empty-state-placeholder",
    "aiPromptGuidance": "검색 결과 없음 또는 데이터 비어있음 상태를 안내하는 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const EmptyStateDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl text-center space-y-2\">\n    <Box className=\"w-6 h-6 mx-auto text-slate-500\" />\n    <span className=\"text-xs font-bold text-white block\">등록된 컴포넌트가 없습니다</span>\n    <button className=\"px-3 py-1 rounded-lg bg-violet-600 text-white text-[10px] font-bold\">+ 새로 만들기</button>\n  </div>\n);\n\n// 5. Skeleton Shimmer"
  },
  {
    "id": "feedback-skeleton-shimmer-loader",
    "name": "스켈레톤 시머 (Skeleton Shimmer) 로딩 플레이스홀더",
    "category": "feedback",
    "tags": [
      "feedback",
      "skeleton",
      "loader",
      "shimmer",
      "스켈레톤",
      "로딩",
      "애니메이션"
    ],
    "description": "콘텐츠가 로딩 중일 때 깜빡임 없는 세련된 웨이브 시머 이펙트.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "feedback-skeleton-shimmer-loader",
    "aiPromptGuidance": "카드 및 테이블 로딩 상태를 표현하는 스켈레톤 시머입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const SkeletonShimmerDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2 animate-pulse\">\n    <div className=\"h-4 bg-white/10 rounded w-1/3\" />\n    <div className=\"h-8 bg-white/5 rounded w-full\" />\n    <div className=\"h-4 bg-white/10 rounded w-2/3\" />\n  </div>\n);\n\n// 6. Bottom Sheet Drawer"
  },
  {
    "id": "feedback-drawer-bottom-sheet",
    "name": "모바일 제스처 드래그 바텀 시트 (Bottom Sheet Drawer)",
    "category": "feedback",
    "tags": [
      "feedback",
      "drawer",
      "bottom-sheet",
      "mobile",
      "바텀시트",
      "드로어"
    ],
    "description": "아래에서 위로 올라오는 부드러운 오버레이 패널 및 드래그 핸들 바.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "feedback-drawer-bottom-sheet",
    "aiPromptGuidance": "터치 제스처 드래그로 닫을 수 있는 반응형 바텀시트 드로어입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const BottomSheetDrawerDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-950 border border-white/10 p-3 shadow-2xl space-y-2 text-xs\">\n    <div className=\"w-8 h-1 bg-white/20 rounded-full mx-auto\" />\n    <div className=\"flex justify-between font-bold text-white\"><span>바텀 시트 드로어</span><X className=\"w-3.5 h-3.5 text-slate-500\" /></div>\n    <p className=\"text-[11px] text-slate-400\">모바일 제스처 스와이프로 닫기 가능</p>\n  </div>\n);\n\n// 7. Pulsing Status Badge"
  },
  {
    "id": "feedback-badge-status-pulsing",
    "name": "실시간 가동 펄스 뱃지 & 마이크로 인디케이터 세트",
    "category": "feedback",
    "tags": [
      "feedback",
      "badge",
      "pulse",
      "status",
      "뱃지",
      "상태표시",
      "펄스"
    ],
    "description": "초록색/노란색/빨간색/보라색 핑 애니메이션이 도는 상태 표시 뱃지 세트.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "feedback-badge-status-pulsing",
    "aiPromptGuidance": "라이브 상태를 표시하는 깜빡이는 펄스 뱃지 모음입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const PulsingBadgeDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl flex items-center justify-between text-xs\">\n    <span className=\"font-bold text-white\">실시간 가동 펄스 뱃지</span>\n    <span className=\"flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold text-[10px]\">\n      <span className=\"w-2 h-2 rounded-full bg-emerald-400 animate-ping\" />\n      OPERATIONAL\n    </span>\n  </div>\n);\n\n// 8. Confetti Celebration"
  },
  {
    "id": "feedback-confetti-celebration-popup",
    "name": "목표 달성 축하 콘페티 (Confetti) 파티클 축포 팝업",
    "category": "feedback",
    "tags": [
      "feedback",
      "confetti",
      "celebration",
      "popup",
      "축하",
      "파티클",
      "성공팝업"
    ],
    "description": "목표 달성이나 결제 완료 시 화면에 오색종이가 흩날리는 축하 모달.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "feedback-confetti-celebration-popup",
    "aiPromptGuidance": "미션 성공을 축하하는 화려한 콘페티 애니메이션 팝업입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const ConfettiCelebrationDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-gradient-to-r from-violet-900/40 to-fuchsia-900/40 border border-fuchsia-500/40 p-4 shadow-2xl text-center space-y-1\">\n    <span className=\"text-lg\">🎉 🚀 ✨</span>\n    <h5 className=\"text-xs font-bold text-white\">목표 달성 축하 콘페티!</h5>\n    <span className=\"text-[10px] text-fuchsia-300\">신규 구독자 10,000명 돌파</span>\n  </div>\n);\n\n// 9. Rich Hover Card"
  },
  {
    "id": "feedback-tooltip-rich-hover-card",
    "name": "아바타/통계가 포함된 풍부한 정보 리치 호버 카드 (Rich Tooltip)",
    "category": "feedback",
    "tags": [
      "feedback",
      "tooltip",
      "hover-card",
      "preview",
      "툴팁",
      "호버카드",
      "미리보기"
    ],
    "description": "텍스트뿐만 아니라 아바타, 통계 수치, 팔로우 버튼이 들어간 툴팁.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "feedback-tooltip-rich-hover-card",
    "aiPromptGuidance": "사용자 호버 시 확장 정보를 표시하는 리치 툴팁 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const RichHoverTooltipDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1.5 text-xs\">\n    <div className=\"flex items-center gap-2\">\n      <div className=\"w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center font-bold text-[10px]\">KW</div>\n      <div><span className=\"font-bold text-white block leading-none\">Senior DevMaster</span><span className=\"text-[9px] text-slate-400\">@kw_architect</span></div>\n    </div>\n    <p className=\"text-[10px] text-slate-300\">2026 AI-Native Component Master</p>\n  </div>\n);\n\n// 10. Cookie Consent"
  },
  {
    "id": "feedback-cookie-consent-banner",
    "name": "GDPR 규정 준수 쿠키 동의 & 선택적 권한 설정창",
    "category": "feedback",
    "tags": [
      "feedback",
      "cookie",
      "gdpr",
      "consent",
      "쿠키동의",
      "개인정보",
      "설정"
    ],
    "description": "필수 쿠키 / 마케팅 쿠키 선택적 허용 스위치 및 모두 수락 버튼.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "feedback-cookie-consent-banner",
    "aiPromptGuidance": "웹사이트 하단에 깔끔하게 뜨는 쿠키 수집 동의 모달입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const CookieConsentDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-950 border border-white/10 p-3 shadow-2xl space-y-2 text-xs\">\n    <div className=\"flex justify-between items-center text-slate-300 text-[11px]\">\n      <span>🍪 서비스 개선을 위한 쿠키 동의</span>\n      <button className=\"px-2 py-0.5 rounded bg-violet-600 text-white font-bold text-[10px]\">수락</button>\n    </div>\n  </div>\n);\n\n// 11. Star Rating"
  },
  {
    "id": "feedback-rating-star-interactive",
    "name": "호버 반응형 5성급 골드 별점 평가 위젯",
    "category": "feedback",
    "tags": [
      "feedback",
      "rating",
      "star",
      "reviews",
      "별점",
      "평가",
      "리뷰"
    ],
    "description": "호버하는 위치에 따라 별이 황금색으로 채워지며 즉시 점수 반영.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "feedback-rating-star-interactive",
    "aiPromptGuidance": "별점 인터랙션과 실시간 피드백 텍스트를 제공하는 평가 위젯입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const StarRatingDemo: React.FC = () => {\n  const [rating, setRating] = useState(5);\n  return (\n    <div className=\"rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-amber-500/30 p-4 shadow-2xl flex items-center justify-between\">\n      <div><span className=\"text-xs font-bold text-white block\">5성급 별점 평가</span><span className=\"text-[10px] text-slate-400\">{rating}점 만점</span></div>\n      <div className=\"flex gap-1 text-amber-400 cursor-pointer\">\n        {[1, 2, 3, 4, 5].map(s => (\n          <Star key={s} onClick={() => setRating(s)} className={`w-4 h-4 ${s <= rating ? 'fill-amber-400' : 'text-slate-600'}`} />\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// 12. Offline Toast"
  },
  {
    "id": "feedback-offline-network-toast",
    "name": "인터넷 연결 끊김 감지 & 자동 재연결 성공 알림 토스트",
    "category": "feedback",
    "tags": [
      "feedback",
      "offline",
      "network",
      "reconnect",
      "오프라인",
      "네트워크",
      "재연결"
    ],
    "description": "오프라인 상태 알림 및 네트워크 복구 시 녹색 자동 동기화 피드백.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "feedback-offline-network-toast",
    "aiPromptGuidance": "브라우저 온/오프라인 이벤트를 감지하여 표시하는 상태 토스트입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const OfflineToastDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-rose-950/40 border border-rose-500/30 p-3 shadow-2xl flex items-center gap-2.5 text-xs text-rose-300\">\n    <WifiOff className=\"w-4 h-4 text-rose-400\" />\n    <div><span className=\"font-bold block\">네트워크 연결 끊김</span><span className=\"text-[10px] text-rose-400\">오프라인 모드로 자동 전환됩니다.</span></div>\n  </div>\n);\n\n// THEMES\n\n// 1. Theme Palette"
  },
  {
    "id": "theme-token-palette",
    "name": "디자인 시스템 토큰 & 프리셋 컬러 팔레트 스위처",
    "category": "themes",
    "tags": [
      "theme",
      "tokens",
      "colors",
      "palette",
      "design-system",
      "디자인토큰",
      "색상",
      "팔레트"
    ],
    "description": "사이버 바이올렛, 네온 에메랄드, 앰버 럭셔리, 딥 슬레이트 색상 견본.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "theme-token-palette",
    "aiPromptGuidance": "디자인 시스템 테마 토큰과 컬러 팔레트를 보여주는 스위처입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const ThemePaletteDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2\">\n    <div className=\"text-xs font-bold text-white flex items-center justify-between\"><span>테마 디자인 토큰</span><Palette className=\"w-3.5 h-3.5 text-fuchsia-400\" /></div>\n    <div className=\"flex gap-2\">\n      {THEME_PRESETS.map((t) => (\n        <div key={t.id} className=\"flex-1 h-10 rounded-xl flex items-center justify-center text-[10px] font-bold text-white border border-white/10 shadow-md\" style={{ backgroundColor: t.bg }}>\n          <span style={{ color: t.accent }}>● {t.name.split(' ')[0]}</span>\n        </div>\n      ))}\n    </div>\n  </div>\n);\n\n// 2. Glassmorphism Spec"
  },
  {
    "id": "theme-glassmorphism-blur-spec",
    "name": "초정밀 2026 글래스모피즘 (Backdrop-Blur-2xl) 유리 패널",
    "category": "themes",
    "tags": [
      "theme",
      "glassmorphism",
      "blur",
      "backdrop",
      "글래스모피즘",
      "블러",
      "유리효과"
    ],
    "description": "백드롭 블러(Backdrop-Blur-2xl), 반투명 테두리, 노이즈 질감 오버레이.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "theme-glassmorphism-blur-spec",
    "aiPromptGuidance": "2026년형 투명 유리 질감 효과를 보여주는 스타일 데모 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const GlassmorphismDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/20 p-4 shadow-2xl space-y-1\">\n    <span className=\"text-xs font-bold text-white block\">Backdrop-Blur-2xl Glass</span>\n    <p className=\"text-[10px] text-slate-300\">초미세 유리 굴절 효과 및 림 라이트</p>\n  </div>\n);\n\n// 3. Neon Glow Matrix"
  },
  {
    "id": "theme-neon-glow-shadow-matrix",
    "name": "네온 글로우 & 사이버펑크 그림자 강도 (10px~50px) 매트릭스",
    "category": "themes",
    "tags": [
      "theme",
      "neon",
      "glow",
      "shadow",
      "네온",
      "발광",
      "그림자",
      "사이버펑크"
    ],
    "description": "Soft Glow(10px)부터 Super Intense Burst(50px)까지의 네온 발광 스펙.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "theme-neon-glow-shadow-matrix",
    "aiPromptGuidance": "다양한 레벨의 네온 그림자 효과 토큰을 시각화한 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const NeonGlowDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-950 p-4 shadow-2xl border border-violet-500/30 flex items-center justify-around\">\n    <div className=\"w-10 h-10 rounded-xl bg-violet-600 shadow-[0_0_15px_#8b5cf6] flex items-center justify-center text-white text-xs font-bold\">10px</div>\n    <div className=\"w-10 h-10 rounded-xl bg-cyan-500 shadow-[0_0_25px_#06b6d4] flex items-center justify-center text-black text-xs font-bold\">25px</div>\n    <div className=\"w-10 h-10 rounded-xl bg-fuchsia-500 shadow-[0_0_35px_#d946ef] flex items-center justify-center text-white text-xs font-bold\">35px</div>\n  </div>\n);\n\n// 4. Typography Scale"
  },
  {
    "id": "theme-typography-scale-spec",
    "name": "2026 모던 타이포그래피 스케일 & 위계 페어링 가이드",
    "category": "themes",
    "tags": [
      "theme",
      "typography",
      "font",
      "scale",
      "타이포그래피",
      "폰트",
      "텍스트스케일"
    ],
    "description": "Display Title(48px), H1~H4, Body Text, Mono 숫자 폰트 위계 체계.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "theme-typography-scale-spec",
    "aiPromptGuidance": "반응형 폰트 크기 및 굵기 위계(Typography Scale)를 정리한 가이드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const TypographyScaleDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1\">\n    <div className=\"text-base font-black text-white leading-tight\">Heading H1 (24px)</div>\n    <div className=\"text-xs font-bold text-violet-300\">Subtitle H3 (14px)</div>\n    <div className=\"text-[10px] text-slate-400 font-mono\">Caption Mono (10px)</div>\n  </div>\n);\n\n// 5. Gradient Mesh"
  },
  {
    "id": "theme-gradient-mesh-canvas",
    "name": "몽환적인 움직이는 오로라 그라데이션 메쉬 (Mesh Gradient) 캔버스",
    "category": "themes",
    "tags": [
      "theme",
      "gradient",
      "mesh",
      "aurora",
      "그라데이션",
      "메쉬",
      "오로라배경"
    ],
    "description": "몽환적으로 움직이는 다색상 오로라 블러 메쉬 배경 캔버스.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "theme-gradient-mesh-canvas",
    "aiPromptGuidance": "CSS 다중 방사형 그라데이션을 합성한 오로라 메쉬 배경입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const GradientMeshDemo: React.FC = () => (\n  <div className=\"relative overflow-hidden rounded-2xl h-24 p-3 flex flex-col justify-end text-white border border-white/20 bg-gradient-to-tr from-violet-800 via-fuchsia-700 to-cyan-600\">\n    <span className=\"font-black text-xs\">오로라 그라데이션 메쉬</span>\n  </div>\n);\n\n// 6. Border Beam"
  },
  {
    "id": "theme-border-gradient-beam",
    "name": "테두리를 따라 무한 회전하는 레이저 광선 (Border Beam)",
    "category": "themes",
    "tags": [
      "theme",
      "border-beam",
      "animation",
      "laser",
      "테두리빔",
      "레이저",
      "애니메이션"
    ],
    "description": "카드 외곽선을 따라 네온 빛줄기가 끝없이 회전하는 고급 효과.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "theme-border-gradient-beam",
    "aiPromptGuidance": "카드 테두리에 빛나는 광선이 회전하는 Border Beam 효과입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const BorderBeamDemo: React.FC = () => (\n  <div className=\"relative overflow-hidden rounded-2xl bg-slate-950 p-4 shadow-2xl border border-violet-500/40\">\n    <div className=\"absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-fuchsia-600/20 animate-pulse\" />\n    <div className=\"relative flex items-center justify-between\">\n      <div><h5 className=\"text-xs font-bold text-white\">Border Beam 광선 레이저</h5><p className=\"text-[10px] text-slate-400\">외곽선을 따라 무한 회전하는 네온 빔</p></div>\n      <div className=\"w-8 h-8 rounded-full bg-violet-600/30 border border-violet-400/50 flex items-center justify-center text-violet-300 text-xs font-bold shadow-[0_0_12px_#8b5cf6]\">✦</div>\n    </div>\n  </div>\n);\n\n// 7. Theme Mode Toggle"
  },
  {
    "id": "theme-dark-light-mode-toggle",
    "name": "부드러운 해/달 회전 인터랙티브 다크/라이트 모드 스위치",
    "category": "themes",
    "tags": [
      "theme",
      "dark-mode",
      "toggle",
      "sun-moon",
      "다크모드",
      "테마전환",
      "스위치"
    ],
    "description": "태양과 달 아이콘이 회전하며 전환되는 모던 테마 토글 버튼.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "theme-dark-light-mode-toggle",
    "aiPromptGuidance": "부드러운 애니메이션으로 다크/라이트 모드를 전환하는 토글 버튼입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const ThemeToggleDemo: React.FC = () => {\n  const [dark, setDark] = useState(true);\n  return (\n    <div className=\"rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl flex items-center justify-between\">\n      <span className=\"text-xs font-bold text-white\">{dark ? '다크 모드 (Cyber)' : '라이트 모드 (Minimal)'}</span>\n      <button onClick={() => setDark(!dark)} className=\"p-2 rounded-xl bg-white/5 border border-white/10 text-amber-300 hover:text-white transition-transform hover:rotate-45\">\n        {dark ? <Sun className=\"w-4 h-4\" /> : <Moon className=\"w-4 h-4\" />}\n      </button>\n    </div>\n  );\n};\n\n// 8. Grid Dot Matrix"
  },
  {
    "id": "theme-grid-dot-pattern-canvas",
    "name": "사이버 스페이스 점자 (Dot Matrix) 그리드 패턴 배경 텍스처",
    "category": "themes",
    "tags": [
      "theme",
      "grid",
      "pattern",
      "dots",
      "그리드패턴",
      "점자",
      "배경질감"
    ],
    "description": "미세한 격자 점들이 은은하게 빛나는 개발자 대시보드 전용 배경.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "theme-grid-dot-pattern-canvas",
    "aiPromptGuidance": "SVG 패턴을 활용한 점자 매트릭스 그리드 배경 텍스처입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const GridDotMatrixDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-950 p-4 shadow-2xl border border-white/10 flex items-center justify-between\">\n    <div><span className=\"text-xs font-bold text-white block\">도트 매트릭스 패턴</span><span className=\"text-[10px] text-slate-500 font-mono\">Dot Pattern 12px</span></div>\n    <div className=\"text-violet-400 font-mono text-sm font-black\">::: ::: :::</div>\n  </div>\n);\n\n// 9. Neumorphism Soft UI"
  },
  {
    "id": "theme-neumorphism-soft-ui",
    "name": "소프트 뉴모피즘 (Neumorphism) 다크 릴리프 음양각 버튼",
    "category": "themes",
    "tags": [
      "theme",
      "neumorphism",
      "soft-ui",
      "emboss",
      "뉴모피즘",
      "엠보싱",
      "소프트UI"
    ],
    "description": "음각과 양각 그림자를 조화롭게 배치한 세련된 입체감 컨트롤러.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "theme-neumorphism-soft-ui",
    "aiPromptGuidance": "다크 톤의 입체적인 소프트 음양각 뉴모피즘 버튼 디자인입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const NeumorphismDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-900 p-4 shadow-2xl border border-white/5 flex items-center justify-around\">\n    <button className=\"px-4 py-2 rounded-xl bg-slate-900 shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_10px_rgba(0,0,0,0.8)] text-xs font-bold text-slate-300 active:shadow-inner\">\n      Soft Button\n    </button>\n  </div>\n);\n\n// 10. Bento Grid"
  },
  {
    "id": "theme-bento-grid-card-layout",
    "name": "애플 스타일 모듈러 벤토 그리드 (Bento Grid) 카드 레이아웃",
    "category": "themes",
    "tags": [
      "theme",
      "bento-grid",
      "modular",
      "apple-style",
      "벤토그리드",
      "모듈러",
      "배치"
    ],
    "description": "크고 작은 사각형 카드들이 조화롭게 어우러진 최신 Bento 레이아웃.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "theme-bento-grid-card-layout",
    "aiPromptGuidance": "다양한 가로세로 비율의 카드를 배치하는 벤토 그리드 모듈입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const BentoGridDemo: React.FC = () => (\n  <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl\">\n    <div className=\"text-xs font-bold text-white mb-2\">애플 스타일 벤토 그리드</div>\n    <div className=\"grid grid-cols-3 gap-1.5 h-20 text-[10px]\">\n      <div className=\"col-span-2 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 border border-white/10 rounded-xl p-2 flex flex-col justify-between text-white\">\n        <span className=\"font-bold\">AI Core 3.7</span>\n        <span className=\"text-violet-300 text-[9px]\">Zero Latency</span>\n      </div>\n      <div className=\"bg-white/[0.04] border border-white/10 rounded-xl p-2 flex flex-col justify-between text-slate-300\">\n        <span>99.9%</span>\n        <span className=\"text-[9px] text-slate-500\">Uptime</span>\n      </div>\n    </div>\n  </div>\n);\n\n// 11. Claymorphism 3D Card"
  },
  {
    "id": "theme-claymorphism-3d-card",
    "name": "3D 클레이모피즘 (Claymorphism) 푹신한 볼륨 플로팅 카드",
    "category": "themes",
    "tags": [
      "theme",
      "claymorphism",
      "3d",
      "fluffy",
      "클레이모피즘",
      "3D카드",
      "볼륨감"
    ],
    "description": "찰흙처럼 부드러운 둥근 모서리와 내부/외부 듀얼 그림자 효과.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "theme-claymorphism-3d-card",
    "aiPromptGuidance": "둥글고 푹신한 볼륨감을 주는 클레이모피즘 스타일 카드입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const ClaymorphismDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-violet-600/80 p-4 shadow-[8px_8px_16px_rgba(0,0,0,0.4),inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.4)] text-white text-center\">\n    <span className=\"text-xs font-black block\">3D Claymorphism</span>\n    <span className=\"text-[10px] text-violet-200\">푹신한 클레이 입체 카드</span>\n  </div>\n);\n\n// 12. Noise Overlay"
  },
  {
    "id": "theme-noise-texture-overlay",
    "name": "필름 그레인 & 노이즈 텍스처 (Noise Texture) 아날로그 스펙",
    "category": "themes",
    "tags": [
      "theme",
      "noise",
      "grain",
      "texture",
      "노이즈",
      "필름그레인",
      "질감"
    ],
    "description": "밋밋한 단색 배경에 아날로그 고급스러움을 더하는 미세 SVG 노이즈 필터.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "theme-noise-texture-overlay",
    "aiPromptGuidance": "SVG feTurbulence 필터를 사용한 모던 노이즈 텍스처 오버레이입니다.",
    "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const NoiseOverlayDemo: React.FC = () => (\n  <div className=\"rounded-2xl bg-slate-950 border border-white/10 p-4 shadow-2xl flex items-center justify-between text-xs\">\n    <div><span className=\"font-bold text-white block\">아날로그 노이즈 텍스처</span><span className=\"text-[10px] text-slate-400\">Film Grain Overlay</span></div>\n    <span className=\"px-2 py-0.5 rounded bg-white/10 text-slate-300 font-mono text-[10px]\">Grain 15%</span>\n  </div>\n);"
  },
  {
    "id": "theme-artlist-cinema-spec",
    "name": "Artlist.io 시네마틱 옵시디언 & 일렉트릭 옐로우 미디어 스위트",
    "category": "themes",
    "tags": [
      "theme",
      "artlist",
      "cinema",
      "yellow",
      "waveform",
      "media-player",
      "dark-mode",
      "아트리스트",
      "시네마틱",
      "일렉트릭옐로우"
    ],
    "description": "Artlist.io 스타일의 딥 옵시디언 다크(#0d0d0f), 고대비 일렉트릭 옐로우(#ffea00) 미디어 플레이어, 오디오 파형(Waveform), 라이센스 태그 및 시네마틱 뱃지.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "theme-artlist-cinema-spec",
    "aiPromptGuidance": "Artlist.io 미디어 플랫폼 스타일의 딥 다크(#0d0d0f) 배경과 일렉트릭 옐로우(#ffea00) 강조색을 적용한 고품격 미디어 트랙 플레이어 및 시네마틱 UI 컴포넌트를 구현하세요.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Play, Pause, Volume2, Sparkles, Music, Film, Check, Download, Bookmark } from 'lucide-react';\n\nexport const ArtlistCinemaDemo: React.FC = () => {\n  const [isPlaying, setIsPlaying] = useState(false);\n  return (\n    <div className=\"w-full rounded-2xl bg-[#0d0d0f] border border-white/10 p-4 shadow-2xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-white/5 pb-2.5\">\n        <div className=\"flex items-center gap-2\">\n          <span className=\"w-2 h-2 rounded-full bg-[#ffea00] shadow-[0_0_8px_#ffea00]\" />\n          <span className=\"text-xs font-black tracking-wider text-white uppercase\">ARTLIST CINEMA PRO</span>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded-full bg-[#ffea00]/15 text-[#ffea00] font-mono font-bold\">PRO MEDIA LICENSE</span>\n      </div>\n      <div className=\"flex items-center gap-3 bg-[#141418] p-3 rounded-xl border border-white/5\">\n        <button onClick={() => setIsPlaying(!isPlaying)} className=\"w-10 h-10 rounded-full bg-[#ffea00] hover:bg-[#fff033] text-black flex items-center justify-center font-bold shadow-[0_0_15px_rgba(255,234,0,0.4)] transition-transform active:scale-95\">\n          {isPlaying ? <Pause className=\"w-4 h-4 fill-black\" /> : <Play className=\"w-4 h-4 fill-black ml-0.5\" />}\n        </button>\n        <div className=\"flex-1 min-w-0\">\n          <div className=\"flex items-center justify-between text-xs font-bold text-white mb-1\">\n            <span className=\"truncate\">Neon Genesis Cyberpunk Odyssey</span>\n            <span className=\"text-[11px] font-mono text-[#ffea00]\">02:48</span>\n          </div>\n          <div className=\"flex items-end gap-[2px] h-6 w-full\">\n            {[40,65,30,80,95,70,45,60,85,100,75,50,90,65,40,80,55,95,70,85,60,40,75,90,50,65,40].map((h, i) => (\n              <div key={i} className={`flex-1 rounded-full transition-all ${i < 12 ? 'bg-[#ffea00] shadow-[0_0_6px_#ffea00]' : 'bg-white/20'}`} style={{ height: `${h}%` }} />\n            ))}\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
  "id": "chart-chord-matrix-flow",
  "name": "공정간 원자재 이동 매트릭스 (D3 Chord Diagram)",
  "category": "charts",
  "tags": [
    "chord",
    "d3",
    "matrix",
    "material-flow",
    "코드차트",
    "원자재유동"
  ],
  "description": "공정 라인(A~E) 간 상호 원자재 및 부품 전달량을 양방향 호와 리본 곡선으로 직관적으로 시각화.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-chord-matrix-flow",
  "aiPromptGuidance": "D3 스타일의 Chord Diagram을 SVG 리본 곡선과 호(Arc)로 렌더링하고 노드 호버 시 흐름을 하이라이트하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const ChordDiagramDemo: React.FC = () => {\n  const [activeNode, setActiveNode] = useState<number | null>(null);\n  const nodes = [\n    { name: '공정 A (주조/단조)', color: '#3b82f6', amount: '4,280 T' },\n    { name: '공정 B (정밀가공)', color: '#10b981', amount: '3,850 T' },\n    { name: '공정 C (표면열처리)', color: '#f59e0b', amount: '2,920 T' },\n    { name: '공정 D (모듈조립)', color: '#8b5cf6', amount: '3,410 T' },\n    { name: '공정 E (검사출하)', color: '#ec4899', amount: '3,200 T' },\n  ];\n\n  // Ribbons between arcs (SVG Bézier curves)\n  const ribbons = [\n    { from: 0, to: 1, flow: '1,450 T/일', path: 'M 150,40 Q 200,200 290,110 Q 200,180 180,45 Z', color: '#3b82f6' },\n    { from: 1, to: 2, flow: '1,120 T/일', path: 'M 310,130 Q 200,200 270,290 Q 210,210 300,160 Z', color: '#10b981' },\n    { from: 2, to: 3, flow: '980 T/일', path: 'M 250,310 Q 200,200 130,290 Q 180,210 230,300 Z', color: '#f59e0b' },\n    { from: 3, to: 4, flow: '1,320 T/일', path: 'M 110,270 Q 200,200 90,130 Q 170,190 120,240 Z', color: '#8b5cf6' },\n    { from: 0, to: 3, flow: '850 T/일', path: 'M 170,40 Q 200,200 100,250 Q 180,180 190,50 Z', color: '#3b82f6' },\n    { from: 1, to: 4, flow: '740 T/일', path: 'M 290,140 Q 200,200 100,150 Q 190,190 280,160 Z', color: '#10b981' },\n  ];\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-3\">\n        <div className=\"flex items-center gap-2\">\n          <Layers className=\"w-5 h-5 text-indigo-400\" />\n          <h4 className=\"text-sm font-bold text-white tracking-wide\">공정간 상호 원자재 이동 코드 다이어그램 (D3 Chord Diagram)</h4>\n        </div>\n        <span className=\"text-[11px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono\">Matrix Flow 5x5</span>\n      </div>\n\n      <div className=\"grid grid-cols-1 md:grid-cols-12 gap-4 items-center\">\n        <div className=\"md:col-span-7 flex justify-center relative\">\n          <svg viewBox=\"0 0 400 360\" className=\"w-full max-w-[340px] h-auto drop-shadow-[0_0_15px_rgba(99,102,241,0.15)]\">\n            {/* Background Outer Ring */}\n            <circle cx=\"200\" cy=\"180\" r=\"140\" fill=\"none\" stroke=\"#1e293b\" strokeWidth=\"20\" />\n\n            {/* Arcs for 5 Nodes */}\n            <path d=\"M 130,48 A 140 140 0 0 1 270,48\" fill=\"none\" stroke=\"#3b82f6\" strokeWidth=\"18\" strokeLinecap=\"round\" className=\"cursor-pointer hover:stroke-blue-400 transition-colors\" onMouseEnter={() => setActiveNode(0)} />\n            <path d=\"M 285,65 A 140 140 0 0 1 338,195\" fill=\"none\" stroke=\"#10b981\" strokeWidth=\"18\" strokeLinecap=\"round\" className=\"cursor-pointer hover:stroke-emerald-400 transition-colors\" onMouseEnter={() => setActiveNode(1)} />\n            <path d=\"M 325,225 A 140 140 0 0 1 200,320\" fill=\"none\" stroke=\"#f59e0b\" strokeWidth=\"18\" strokeLinecap=\"round\" className=\"cursor-pointer hover:stroke-amber-400 transition-colors\" onMouseEnter={() => setActiveNode(2)} />\n            <path d=\"M 175,320 A 140 140 0 0 1 65,215\" fill=\"none\" stroke=\"#8b5cf6\" strokeWidth=\"18\" strokeLinecap=\"round\" className=\"cursor-pointer hover:stroke-purple-400 transition-colors\" onMouseEnter={() => setActiveNode(3)} />\n            <path d=\"M 62,185 A 140 140 0 0 1 115,58\" fill=\"none\" stroke=\"#ec4899\" strokeWidth=\"18\" strokeLinecap=\"round\" className=\"cursor-pointer hover:stroke-pink-400 transition-colors\" onMouseEnter={() => setActiveNode(4)} />\n\n            {/* Ribbons */}\n            {ribbons.map((rib, idx) => {\n              const isHighlight = activeNode === null || rib.from === activeNode || rib.to === activeNode;\n              return (\n                <path\n                  key={idx}\n                  d={rib.path}\n                  fill={rib.color}\n                  opacity={isHighlight ? 0.45 : 0.08}\n                  className=\"transition-all duration-300 hover:opacity-80 cursor-pointer\"\n                />\n              );\n            })}\n\n            {/* Center Label */}\n            <circle cx=\"200\" cy=\"180\" r=\"32\" fill=\"#0f172a\" stroke=\"#334155\" strokeWidth=\"1.5\" />\n            <text x=\"200\" y=\"177\" textAnchor=\"middle\" fill=\"#94a3b8\" fontSize=\"10\" fontFamily=\"sans-serif\">총 유동량</text>\n            <text x=\"200\" y=\"193\" textAnchor=\"middle\" fill=\"#f8fafc\" fontSize=\"12\" fontWeight=\"bold\" fontFamily=\"sans-serif\">17.6k T</text>\n          </svg>\n        </div>\n\n        <div className=\"md:col-span-5 space-y-2 text-xs\">\n          <div className=\"text-[11px] text-slate-400 mb-2 font-mono\">HOVER OVER NODE TO HIGHLIGHT FLOWS:</div>\n          {nodes.map((n, i) => (\n            <div \n              key={i}\n              onMouseEnter={() => setActiveNode(i)}\n              onMouseLeave={() => setActiveNode(null)}\n              className={`p-2 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${\n                activeNode === i \n                  ? 'bg-slate-800/90 border-indigo-500 shadow-md scale-[1.02]' \n                  : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/70'\n              }`}\n            >\n              <div className=\"flex items-center gap-2\">\n                <div className=\"w-2.5 h-2.5 rounded-full\" style={{ backgroundColor: n.color }} />\n                <span className=\"font-semibold text-slate-200\">{n.name}</span>\n              </div>\n              <span className=\"font-mono text-slate-400\">{n.amount}</span>\n            </div>\n          ))}\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// ==========================================\n// 2. Violin Plot (Production Batch Tolerance Distribution)\n// =========================================="
},
  {
  "id": "chart-violin-tolerance-distribution",
  "name": "치수 공차 커널 밀도 (Kernel Density Violin Plot)",
  "category": "charts",
  "tags": [
    "violin",
    "density",
    "tolerance",
    "quality",
    "바이올린",
    "치수공차",
    "품질"
  ],
  "description": "정밀 가공 치수 데이터의 확률 밀도 분포를 바이올린 곡선과 사분위수(IQR) 상자로 표현.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-violin-tolerance-distribution",
  "aiPromptGuidance": "정규분포/왜도 데이터를 커널 밀도 추정 곡선으로 양방향 대칭 렌더링하는 바이올린 플롯을 구현하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const ViolinDistributionPlotDemo: React.FC = () => {\n  const [selectedShift, setSelectedShift] = useState<'day' | 'night'>('day');\n  \n  const lots = [\n    { name: '사출 Lot-101', median: '0.012mm', iqr: '±0.003', points: [12, 18, 45, 80, 120, 95, 60, 30, 10], color: '#3b82f6' },\n    { name: '프레스 Lot-204', median: '0.008mm', iqr: '±0.002', points: [5, 22, 60, 130, 140, 85, 40, 15, 5], color: '#10b981' },\n    { name: 'CNC가공 Lot-309', median: '0.019mm', iqr: '±0.006', points: [25, 40, 70, 90, 85, 75, 55, 35, 20], color: '#f59e0b' },\n    { name: '연마 Lot-412', median: '0.004mm', iqr: '±0.001', points: [2, 10, 35, 110, 160, 120, 30, 8, 2], color: '#ec4899' },\n  ];\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-3\">\n        <div className=\"flex items-center gap-2\">\n          <Activity className=\"w-5 h-5 text-emerald-400\" />\n          <h4 className=\"text-sm font-bold text-white tracking-wide\">공정별 치수 편차 바이올린 플롯 (Kernel Density Violin Plot)</h4>\n        </div>\n        <div className=\"flex bg-slate-800 p-0.5 rounded border border-slate-700 text-xs\">\n          <button \n            onClick={() => setSelectedShift('day')} \n            className={`px-2.5 py-1 rounded font-medium transition-all ${selectedShift === 'day' ? 'bg-emerald-500 text-black shadow' : 'text-slate-400 hover:text-white'}`}\n          >\n            주간 조\n          </button>\n          <button \n            onClick={() => setSelectedShift('night')} \n            className={`px-2.5 py-1 rounded font-medium transition-all ${selectedShift === 'night' ? 'bg-emerald-500 text-black shadow' : 'text-slate-400 hover:text-white'}`}\n          >\n            야간 조\n          </button>\n        </div>\n      </div>\n\n      <div className=\"grid grid-cols-2 sm:grid-cols-4 gap-3\">\n        {lots.map((lot, idx) => (\n          <div key={idx} className=\"bg-slate-800/50 border border-slate-700/60 rounded-lg p-3 flex flex-col items-center\">\n            <div className=\"text-xs font-bold text-slate-200 mb-1\">{lot.name}</div>\n            <div className=\"text-[10px] text-slate-400 font-mono mb-2\">중앙값: {lot.median}</div>\n\n            {/* Violin Shape SVG */}\n            <svg viewBox=\"0 0 100 160\" className=\"w-24 h-36 my-1 overflow-visible\">\n              {/* Tolerance Limit Lines */}\n              <line x1=\"10\" y1=\"20\" x2=\"90\" y2=\"20\" stroke=\"#ef4444\" strokeDasharray=\"3,3\" strokeWidth=\"1\" />\n              <text x=\"92\" y=\"23\" fill=\"#ef4444\" fontSize=\"8\">USL</text>\n              <line x1=\"10\" y1=\"140\" x2=\"90\" y2=\"140\" stroke=\"#ef4444\" strokeDasharray=\"3,3\" strokeWidth=\"1\" />\n              <text x=\"92\" y=\"143\" fill=\"#ef4444\" fontSize=\"8\">LSL</text>\n\n              {/* Center Axis & Boxplot Core */}\n              <line x1=\"50\" y1=\"30\" x2=\"50\" y2=\"130\" stroke=\"#64748b\" strokeWidth=\"2\" />\n              <rect x=\"46\" y=\"65\" width=\"8\" height=\"30\" fill=\"#0f172a\" stroke={lot.color} strokeWidth=\"2\" rx=\"2\" />\n              <circle cx=\"50\" cy=\"80\" r=\"3\" fill=\"#ffffff\" />\n\n              {/* Symmetrical Kernel Density Curves */}\n              <path\n                d={`M 50,30 \n                    C ${50 - lot.points[0]*0.2},40 ${50 - lot.points[2]*0.25},55 ${50 - lot.points[4]*0.25},80 \n                    C ${50 - lot.points[6]*0.25},105 ${50 - lot.points[8]*0.2},120 50,130 \n                    C ${50 + lot.points[8]*0.2},120 ${50 + lot.points[6]*0.25},105 ${50 + lot.points[4]*0.25},80 \n                    C ${50 + lot.points[2]*0.25},55 ${50 + lot.points[0]*0.2},40 50,30 Z`}\n                fill={lot.color}\n                fillOpacity=\"0.28\"\n                stroke={lot.color}\n                strokeWidth=\"1.5\"\n                className=\"hover:fill-opacity-50 transition-all cursor-pointer\"\n              />\n            </svg>\n\n            <div className=\"w-full mt-2 pt-2 border-t border-slate-700/50 flex justify-between text-[10px]\">\n              <span className=\"text-slate-400\">사분위수 IQR</span>\n              <span className=\"font-mono text-emerald-400 font-bold\">{lot.iqr}</span>\n            </div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// ==========================================\n// 3. Parallel Coordinates Plot (High-Dimensional Sensor Analytics)\n// =========================================="
},
  {
  "id": "chart-parallel-coordinates-multidim",
  "name": "다차원 공정 변수 평행 좌표계 (Parallel Coordinates)",
  "category": "charts",
  "tags": [
    "parallel",
    "multivariate",
    "sensors",
    "multidim",
    "평행좌표",
    "다변량"
  ],
  "description": "온도, 압력, RPM, 수율 등 4개 이상의 연속형 변수를 4축 평행선에 연결하여 상관관계를 한눈에 파악.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-parallel-coordinates-multidim",
  "aiPromptGuidance": "다차원 센서 데이터 배치를 평행 수직 축으로 매핑하고 배치별 굴절 폴리라인으로 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const ParallelCoordinatesDemo: React.FC = () => {\n  const [filterHighlight, setFilterHighlight] = useState<string | null>(null);\n\n  const batches = [\n    { id: 'Batch-A01', temp: 85, pressure: 4.2, rpm: 3200, yieldRate: 98.4, status: 'Normal' },\n    { id: 'Batch-A02', temp: 92, pressure: 4.8, rpm: 3450, yieldRate: 99.1, status: 'Normal' },\n    { id: 'Batch-A03', temp: 118, pressure: 5.6, rpm: 4100, yieldRate: 91.2, status: 'Warning' },\n    { id: 'Batch-A04', temp: 78, pressure: 3.9, rpm: 2900, yieldRate: 97.8, status: 'Normal' },\n    { id: 'Batch-A05', temp: 135, pressure: 6.2, rpm: 4600, yieldRate: 84.5, status: 'Critical' },\n    { id: 'Batch-A06', temp: 88, pressure: 4.3, rpm: 3300, yieldRate: 98.9, status: 'Normal' },\n  ];\n\n  // Axis mapping (x: 0, 100, 200, 300)\n  // Temp: 60~140, Pressure: 3~7, RPM: 2500~5000, Yield: 80~100\n  const getY = (val: number, min: number, max: number) => 180 - ((val - min) / (max - min)) * 140;\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-3\">\n        <div className=\"flex items-center gap-2\">\n          <GitBranch className=\"w-5 h-5 text-cyan-400\" />\n          <h4 className=\"text-sm font-bold text-white tracking-wide\">다차원 공정 변수 평행 좌표계 (Parallel Coordinates Plot)</h4>\n        </div>\n        <span className=\"text-[11px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono\">4-Dimensions</span>\n      </div>\n\n      <div className=\"relative overflow-x-auto\">\n        <svg viewBox=\"0 0 500 220\" className=\"w-full min-w-[450px] h-48\">\n          {/* 4 Vertical Axes */}\n          {[\n            { label: '챔버온도 (°C)', min: 60, max: 140, x: 50 },\n            { label: '사출압력 (bar)', min: 3.0, max: 7.0, x: 170 },\n            { label: '스크류 RPM', min: 2500, max: 5000, x: 290 },\n            { label: '최종수율 (%)', min: 80, max: 100, x: 410 },\n          ].map((axis, i) => (\n            <g key={i}>\n              <line x1={axis.x} y1=\"30\" x2={axis.x} y2=\"180\" stroke=\"#475569\" strokeWidth=\"2\" />\n              <text x={axis.x} y=\"20\" textAnchor=\"middle\" fill=\"#94a3b8\" fontSize=\"10\" fontWeight=\"bold\">{axis.label}</text>\n              <text x={axis.x} y=\"195\" textAnchor=\"middle\" fill=\"#64748b\" fontSize=\"9\">{axis.min}</text>\n              <text x={axis.x} y=\"32\" textAnchor=\"middle\" fill=\"#64748b\" fontSize=\"9\">{axis.max}</text>\n            </g>\n          ))}\n\n          {/* Lines for each Batch */}\n          {batches.map((b, idx) => {\n            const y1 = getY(b.temp, 60, 140);\n            const y2 = getY(b.pressure, 3.0, 7.0);\n            const y3 = getY(b.rpm, 2500, 5000);\n            const y4 = getY(b.yieldRate, 80, 100);\n\n            const isWarning = b.status === 'Warning';\n            const isCritical = b.status === 'Critical';\n            const color = isCritical ? '#ef4444' : isWarning ? '#f59e0b' : '#06b6d4';\n            const isTarget = filterHighlight === null || filterHighlight === b.id;\n\n            return (\n              <polyline\n                key={idx}\n                points={`50,${y1} 170,${y2} 290,${y3} 410,${y4}`}\n                fill=\"none\"\n                stroke={color}\n                strokeWidth={filterHighlight === b.id ? 3.5 : isTarget ? 2 : 0.6}\n                opacity={isTarget ? 0.9 : 0.15}\n                className=\"cursor-pointer transition-all duration-200 hover:stroke-white\"\n                onMouseEnter={() => setFilterHighlight(b.id)}\n                onMouseLeave={() => setFilterHighlight(null)}\n              />\n            );\n          })}\n        </svg>\n      </div>\n\n      <div className=\"grid grid-cols-3 sm:grid-cols-6 gap-2 text-xs\">\n        {batches.map((b) => (\n          <div\n            key={b.id}\n            onMouseEnter={() => setFilterHighlight(b.id)}\n            onMouseLeave={() => setFilterHighlight(null)}\n            className={`p-2 rounded border cursor-pointer transition-all ${\n              filterHighlight === b.id\n                ? 'bg-cyan-950/80 border-cyan-400'\n                : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800'\n            }`}\n          >\n            <div className=\"font-bold text-slate-200\">{b.id}</div>\n            <div className={`text-[10px] font-mono mt-0.5 ${\n              b.status === 'Critical' ? 'text-red-400' : b.status === 'Warning' ? 'text-amber-400' : 'text-cyan-400'\n            }`}>\n              수율: {b.yieldRate}%\n            </div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// ==========================================\n// 4. Parliament Item Distribution Grid (Facility Seat/Sensor Map)\n// =========================================="
},
  {
  "id": "chart-parliament-item-grid",
  "name": "설비 점유 반원형 아크 (Parliament Item Arc Chart)",
  "category": "charts",
  "tags": [
    "parliament",
    "arc",
    "facility",
    "status",
    "반원형",
    "설비점유"
  ],
  "description": "공장 내 108대 주요 설비의 가동/경고/정지 상태를 반원형 아크 도트로 조밀하게 배치.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-parliament-item-grid",
  "aiPromptGuidance": "동심원 호 좌표계를 계산하여 아이템 도트를 방사형 반원으로 정렬하는 의회형 차트를 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const ParliamentGridDemo: React.FC = () => {\n  const [activeGroup, setActiveGroup] = useState<string | null>(null);\n\n  // Generate Semi-Circle Arc Points (100 Nodes in 4 Concentric Semi-Circles)\n  const rows = [\n    { radius: 60, count: 18 },\n    { radius: 85, count: 24 },\n    { radius: 110, count: 30 },\n    { radius: 135, count: 36 },\n  ];\n\n  const categories = [\n    { name: '정상 가동 (Optimal)', color: '#10b981', count: 72 },\n    { name: '경고/정비필요 (Warning)', color: '#f59e0b', count: 24 },\n    { name: '오프라인/에러 (Fault)', color: '#ef4444', count: 12 },\n  ];\n\n  let nodeIndex = 0;\n  const nodes: { x: number; y: number; group: number }[] = [];\n\n  rows.forEach((row) => {\n    for (let i = 0; i < row.count; i++) {\n      const angle = Math.PI - (i / (row.count - 1)) * Math.PI;\n      const x = 200 + row.radius * Math.cos(angle);\n      const y = 160 - row.radius * Math.sin(angle);\n      const group = nodeIndex < 72 ? 0 : nodeIndex < 96 ? 1 : 2;\n      nodes.push({ x, y, group });\n      nodeIndex++;\n    }\n  });\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-3\">\n        <div className=\"flex items-center gap-2\">\n          <Wind className=\"w-5 h-5 text-amber-400\" />\n          <h4 className=\"text-sm font-bold text-white tracking-wide\">공장 설비 반원형 점유 분포도 (Parliament Item Arc Chart)</h4>\n        </div>\n        <span className=\"text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono\">108 Active Units</span>\n      </div>\n\n      <div className=\"flex flex-col items-center justify-center\">\n        <svg viewBox=\"0 0 400 180\" className=\"w-full max-w-[380px] h-44 drop-shadow-[0_0_15px_rgba(245,158,11,0.15)]\">\n          {nodes.map((n, idx) => {\n            const cat = categories[n.group];\n            const isDimmed = activeGroup !== null && activeGroup !== cat.name;\n            return (\n              <circle\n                key={idx}\n                cx={n.x}\n                cy={n.y}\n                r=\"4.5\"\n                fill={cat.color}\n                opacity={isDimmed ? 0.2 : 0.9}\n                className=\"transition-all duration-200 hover:r-6 hover:brightness-125 cursor-pointer\"\n              />\n            );\n          })}\n          <text x=\"200\" y=\"150\" textAnchor=\"middle\" fill=\"#94a3b8\" fontSize=\"11\" fontWeight=\"bold\">설비 총 108대 가동 현황</text>\n        </svg>\n\n        <div className=\"flex flex-wrap gap-4 mt-2 justify-center\">\n          {categories.map((c, i) => (\n            <button\n              key={i}\n              onMouseEnter={() => setActiveGroup(c.name)}\n              onMouseLeave={() => setActiveGroup(null)}\n              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs transition-all ${\n                activeGroup === c.name\n                  ? 'bg-slate-800 border-white text-white'\n                  : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800'\n              }`}\n            >\n              <div className=\"w-2.5 h-2.5 rounded-full\" style={{ backgroundColor: c.color }} />\n              <span>{c.name}</span>\n              <span className=\"font-mono font-bold ml-1 text-slate-400\">({c.count})</span>\n            </button>\n          ))}\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// ==========================================\n// 5. Dependency Wheel (BOM Component Dependency Hub)\n// =========================================="
},
  {
  "id": "chart-dependency-wheel-bom",
  "name": "BOM 부품 결합 종속성 휠 (BOM Dependency Wheel)",
  "category": "charts",
  "tags": [
    "dependency",
    "wheel",
    "bom",
    "assembly",
    "종속성휠",
    "부품결합"
  ],
  "description": "복잡한 서브시스템 간의 조립 결합 관계 및 전자기적 종속성을 원형 휠과 연결 현(Chord)으로 표현.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-dependency-wheel-bom",
  "aiPromptGuidance": "서브시스템 원형 분할 휠과 컴포넌트 간의 종속성 베지어 곡선을 인터랙티브하게 표현하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const DependencyWheelDemo: React.FC = () => {\n  const [activeSegment, setActiveSegment] = useState<number | null>(null);\n\n  const parts = [\n    { name: 'ECU 제어보드', color: '#6366f1' },\n    { name: '서보 액추에이터', color: '#ec4899' },\n    { name: 'LiDAR 센서헤드', color: '#14b8a6' },\n    { name: '고출력 BLDC 모터', color: '#f59e0b' },\n    { name: '하우징 프레임', color: '#3b82f6' },\n    { name: '방열 방수 씰', color: '#84cc16' },\n  ];\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-3\">\n        <div className=\"flex items-center gap-2\">\n          <Shuffle className=\"w-5 h-5 text-purple-400\" />\n          <h4 className=\"text-sm font-bold text-white tracking-wide\">BOM 부품 간 결합 종속성 휠 (BOM Dependency Wheel)</h4>\n        </div>\n        <span className=\"text-[11px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono\">6 Subsystems</span>\n      </div>\n\n      <div className=\"grid grid-cols-1 md:grid-cols-12 gap-4 items-center\">\n        <div className=\"md:col-span-7 flex justify-center\">\n          <svg viewBox=\"0 0 360 360\" className=\"w-full max-w-[300px] h-auto\">\n            {/* Outer Circular Ring Segments */}\n            {parts.map((p, idx) => {\n              const startAngle = (idx * 60) * (Math.PI / 180);\n              const endAngle = ((idx + 1) * 60 - 4) * (Math.PI / 180);\n              const r = 140;\n              const x1 = 180 + r * Math.cos(startAngle);\n              const y1 = 180 + r * Math.sin(startAngle);\n              const x2 = 180 + r * Math.cos(endAngle);\n              const y2 = 180 + r * Math.sin(endAngle);\n\n              return (\n                <path\n                  key={idx}\n                  d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}\n                  stroke={p.color}\n                  strokeWidth=\"16\"\n                  fill=\"none\"\n                  strokeLinecap=\"round\"\n                  className=\"cursor-pointer hover:stroke-white transition-all\"\n                  onMouseEnter={() => setActiveSegment(idx)}\n                  onMouseLeave={() => setActiveSegment(null)}\n                />\n              );\n            })}\n\n            {/* Dependency Chords */}\n            <path d=\"M 280,180 Q 180,180 80,180\" stroke=\"#6366f1\" strokeWidth=\"2.5\" fill=\"none\" opacity={activeSegment === null || activeSegment === 0 || activeSegment === 3 ? 0.7 : 0.1} />\n            <path d=\"M 240,260 Q 180,180 120,100\" stroke=\"#ec4899\" strokeWidth=\"2\" fill=\"none\" opacity={activeSegment === null || activeSegment === 1 || activeSegment === 4 ? 0.7 : 0.1} />\n            <path d=\"M 120,260 Q 180,180 240,100\" stroke=\"#14b8a6\" strokeWidth=\"2\" fill=\"none\" opacity={activeSegment === null || activeSegment === 2 || activeSegment === 5 ? 0.7 : 0.1} />\n            <path d=\"M 280,180 Q 180,180 120,260\" stroke=\"#f59e0b\" strokeWidth=\"1.5\" fill=\"none\" opacity={activeSegment === null || activeSegment === 0 || activeSegment === 2 ? 0.7 : 0.1} />\n\n            <circle cx=\"180\" cy=\"180\" r=\"28\" fill=\"#0f172a\" stroke=\"#334155\" strokeWidth=\"1.5\" />\n            <text x=\"180\" y=\"184\" textAnchor=\"middle\" fill=\"#e2e8f0\" fontSize=\"10\" fontWeight=\"bold\">BOM 6종</text>\n          </svg>\n        </div>\n\n        <div className=\"md:col-span-5 space-y-2\">\n          {parts.map((p, idx) => (\n            <div\n              key={idx}\n              onMouseEnter={() => setActiveSegment(idx)}\n              onMouseLeave={() => setActiveSegment(null)}\n              className={`p-2 rounded-lg border text-xs flex items-center justify-between cursor-pointer transition-all ${\n                activeSegment === idx\n                  ? 'bg-slate-800 border-indigo-400 scale-[1.02]'\n                  : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800'\n              }`}\n            >\n              <div className=\"flex items-center gap-2\">\n                <div className=\"w-2.5 h-2.5 rounded-full\" style={{ backgroundColor: p.color }} />\n                <span className=\"text-slate-200 font-medium\">{p.name}</span>\n              </div>\n              <ChevronRight className=\"w-3.5 h-3.5 text-slate-500\" />\n            </div>\n          ))}\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// ==========================================\n// 6. Interactive Network Force Topology\n// =========================================="
},
  {
  "id": "chart-network-force-topology",
  "name": "공장 OT 네트워크 토폴로지 (Network Force Topology)",
  "category": "charts",
  "tags": [
    "network",
    "topology",
    "iot",
    "plc",
    "토폴로지",
    "센서망"
  ],
  "description": "PLC 마스터, 로봇 암, AI 비전 센서, AGV 간의 산업용 통신 토폴로지를 인터랙티브 노드 링크 그래프로 시각화.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-network-force-topology",
  "aiPromptGuidance": "노드와 링크 객체를 바탕으로 인터랙티브 포스 다이렉티드 토폴로지 그래프를 SVG로 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const NetworkTopologyDemo: React.FC = () => {\n  const [hoveredNode, setHoveredNode] = useState<string | null>(null);\n\n  const nodes = [\n    { id: 'PLC-Master', x: 180, y: 110, role: 'Main Gateway', color: '#6366f1', radius: 16 },\n    { id: 'Robot-Arm-1', x: 70, y: 60, role: 'Welding Cell', color: '#10b981', radius: 12 },\n    { id: 'Robot-Arm-2', x: 290, y: 60, role: 'Assembly Cell', color: '#10b981', radius: 12 },\n    { id: 'Vision-Cam-A', x: 60, y: 170, role: 'AI Inspection', color: '#f59e0b', radius: 12 },\n    { id: 'Vision-Cam-B', x: 300, y: 170, role: 'AI Inspection', color: '#f59e0b', radius: 12 },\n    { id: 'AGV-Fleet', x: 180, y: 220, role: 'Logistics Core', color: '#ec4899', radius: 14 },\n  ];\n\n  const links = [\n    { from: 'PLC-Master', to: 'Robot-Arm-1' },\n    { from: 'PLC-Master', to: 'Robot-Arm-2' },\n    { from: 'PLC-Master', to: 'Vision-Cam-A' },\n    { from: 'PLC-Master', to: 'Vision-Cam-B' },\n    { from: 'PLC-Master', to: 'AGV-Fleet' },\n    { from: 'Robot-Arm-1', to: 'Vision-Cam-A' },\n    { from: 'Robot-Arm-2', to: 'Vision-Cam-B' },\n  ];\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-3\">\n        <div className=\"flex items-center gap-2\">\n          <Cpu className=\"w-5 h-5 text-indigo-400\" />\n          <h4 className=\"text-sm font-bold text-white tracking-wide\">공장 OT 센서 네트워크 토폴로지 (Interactive Network Force Graph)</h4>\n        </div>\n        <span className=\"text-[11px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono\">OPC-UA Topology</span>\n      </div>\n\n      <div className=\"relative\">\n        <svg viewBox=\"0 0 360 260\" className=\"w-full h-56 bg-slate-950/60 rounded-lg border border-slate-800\">\n          {/* Links */}\n          {links.map((link, idx) => {\n            const n1 = nodes.find(n => n.id === link.from)!;\n            const n2 = nodes.find(n => n.id === link.to)!;\n            const isHighlight = hoveredNode === link.from || hoveredNode === link.to;\n\n            return (\n              <line\n                key={idx}\n                x1={n1.x}\n                y1={n1.y}\n                x2={n2.x}\n                y2={n2.y}\n                stroke={isHighlight ? '#a5b4fc' : '#334155'}\n                strokeWidth={isHighlight ? 2.5 : 1.2}\n                strokeDasharray={isHighlight ? '4,4' : 'none'}\n                className=\"transition-all duration-300\"\n              />\n            );\n          })}\n\n          {/* Nodes */}\n          {nodes.map((node) => {\n            const isHover = hoveredNode === node.id;\n            return (\n              <g \n                key={node.id} \n                className=\"cursor-pointer\"\n                onMouseEnter={() => setHoveredNode(node.id)}\n                onMouseLeave={() => setHoveredNode(null)}\n              >\n                <circle\n                  cx={node.x}\n                  cy={node.y}\n                  r={isHover ? node.radius + 3 : node.radius}\n                  fill={node.color}\n                  opacity=\"0.9\"\n                  className=\"transition-all duration-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]\"\n                />\n                <circle cx={node.x} cy={node.y} r={node.radius * 0.4} fill=\"#0f172a\" />\n                <text\n                  x={node.x}\n                  y={node.y + node.radius + 12}\n                  textAnchor=\"middle\"\n                  fill={isHover ? '#ffffff' : '#94a3b8'}\n                  fontSize=\"9\"\n                  fontWeight={isHover ? 'bold' : 'normal'}\n                >\n                  {node.id}\n                </text>\n              </g>\n            );\n          })}\n        </svg>\n\n        {hoveredNode && (\n          <div className=\"absolute top-2 right-2 bg-slate-800/90 border border-slate-600 rounded-lg px-3 py-1.5 text-xs text-slate-200 shadow-xl backdrop-blur-sm\">\n            <div className=\"font-bold text-indigo-300\">{hoveredNode}</div>\n            <div className=\"text-[10px] text-slate-400\">\n              역할: {nodes.find(n => n.id === hoveredNode)?.role}\n            </div>\n          </div>\n        )}\n      </div>\n    </div>\n  );\n};"
}
,
  {
  "id": "chart-ridgeline-cycle-time",
  "name": "공정 택트타임 릿지라인 조이플롯 (D3 Ridgeline Joyplot)",
  "category": "charts",
  "tags": [
    "ridgeline",
    "joyplot",
    "cycletime",
    "density",
    "릿지라인",
    "택트타임"
  ],
  "description": "생산 라인별 택트타임과 사이클 타임의 정규분포 곡선을 층상(Overlapping Ridgeline) 형태로 쌓아 산포 비교.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-ridgeline-cycle-time",
  "aiPromptGuidance": "D3 스타일의 Ridgeline/Joyplot 중첩 곡선 영역을 SVG로 렌더링하고 라인 호버 인터랙션을 지원하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const RidgelineDensityDemo: React.FC = () => {\n  const [activeCurve, setActiveCurve] = useState<number | null>(null);\n\n  const series = [\n    { label: 'Line A (프레스 주조)', peak: 85, color: '#6366f1', base: 40, path: 'M 30,70 C 90,70 120,20 180,20 C 240,20 270,70 370,70 L 370,70 L 30,70 Z' },\n    { label: 'Line B (CNC 정밀가공)', peak: 92, color: '#3b82f6', base: 80, path: 'M 30,110 C 110,110 150,55 210,55 C 270,55 310,110 370,110 L 370,110 L 30,110 Z' },\n    { label: 'Line C (표면 열처리)', peak: 78, color: '#10b981', base: 120, path: 'M 30,150 C 70,150 110,95 170,95 C 230,95 280,150 370,150 L 370,150 L 30,150 Z' },\n    { label: 'Line D (모듈 결합조립)', peak: 96, color: '#f59e0b', base: 160, path: 'M 30,190 C 130,190 170,135 240,135 C 300,135 340,190 370,190 L 370,190 L 30,190 Z' },\n  ];\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-3\">\n        <div className=\"flex items-center gap-2\">\n          <Activity className=\"w-5 h-5 text-indigo-400\" />\n          <h4 className=\"text-sm font-bold text-white tracking-wide\">공정별 택트타임 릿지라인 밀도 분포 (D3 Ridgeline Joyplot)</h4>\n        </div>\n        <span className=\"text-[11px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono\">Cycle Time Joyplot</span>\n      </div>\n\n      <div className=\"relative\">\n        <svg viewBox=\"0 0 400 230\" className=\"w-full h-48 bg-slate-950/50 rounded-lg p-2\">\n          {/* Axis grid */}\n          <line x1=\"30\" y1=\"210\" x2=\"370\" y2=\"210\" stroke=\"#334155\" strokeWidth=\"1.5\" />\n          <text x=\"30\" y=\"224\" fill=\"#64748b\" fontSize=\"9\">10s (초고속)</text>\n          <text x=\"200\" y=\"224\" textAnchor=\"middle\" fill=\"#64748b\" fontSize=\"9\">45s (표준 택트)</text>\n          <text x=\"370\" y=\"224\" textAnchor=\"end\" fill=\"#64748b\" fontSize=\"9\">120s (지연)</text>\n\n          {/* Overlapping Joyplot Areas */}\n          {series.map((s, idx) => {\n            const isHighlight = activeCurve === null || activeCurve === idx;\n            return (\n              <g \n                key={idx} \n                className=\"cursor-pointer transition-all duration-200\"\n                onMouseEnter={() => setActiveCurve(idx)}\n                onMouseLeave={() => setActiveCurve(null)}\n              >\n                {/* Area Fill */}\n                <path\n                  d={s.path}\n                  fill={s.color}\n                  fillOpacity={isHighlight ? 0.35 : 0.08}\n                  stroke={s.color}\n                  strokeWidth={activeCurve === idx ? 3 : 1.8}\n                />\n                {/* Text Label */}\n                <text\n                  x=\"35\"\n                  y={s.base + 22}\n                  fill={isHighlight ? '#f8fafc' : '#64748b'}\n                  fontSize=\"10\"\n                  fontWeight=\"bold\"\n                >\n                  {s.label}\n                </text>\n              </g>\n            );\n          })}\n        </svg>\n      </div>\n\n      <div className=\"grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs\">\n        {series.map((s, i) => (\n          <div\n            key={i}\n            onMouseEnter={() => setActiveCurve(i)}\n            onMouseLeave={() => setActiveCurve(null)}\n            className={`p-2 rounded-lg border transition-all cursor-pointer ${\n              activeCurve === i\n                ? 'bg-slate-800 border-indigo-400'\n                : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800'\n            }`}\n          >\n            <div className=\"flex items-center gap-1.5 font-semibold text-slate-200\">\n              <div className=\"w-2 h-2 rounded-full\" style={{ backgroundColor: s.color }} />\n              <span>{s.label.split(' ')[0]}</span>\n            </div>\n            <div className=\"text-[10px] text-indigo-300 font-mono mt-0.5\">정상 수렴도 {s.peak}%</div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// =========================================================\n// 2. Correlation Matrix Heatmap with Coefficients (품질 상관 매트릭스)\n// ========================================================="
},
  {
  "id": "chart-pearson-correlation-matrix",
  "name": "품질 인자 피어슨 상관계수 매트릭스 (Pearson Correlation Heatmap)",
  "category": "charts",
  "tags": [
    "correlation",
    "pearson",
    "matrix",
    "quality",
    "피어슨",
    "상관계수"
  ],
  "description": "금형온도, 사출압, 유량, 냉각시간, 인장강도 등 품질 인자 간의 다변량 상관계수(r: -1.0 ~ +1.0)를 색상 매트릭스로 분석.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-pearson-correlation-matrix",
  "aiPromptGuidance": "피어슨 상관계수 매트릭스 히트맵 그리드를 계산하고 셀 호버 시 상세 인자 상관계수를 표시하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const CorrelationMatrixDemo: React.FC = () => {\n  const [hoverCell, setHoverCell] = useState<{ r: number; c: number } | null>(null);\n\n  const variables = ['금형온도', '사출압', '수지유량', '냉각시간', '인장강도', '치수정밀도'];\n  const matrix = [\n    [1.00,  0.78,  0.62, -0.45,  0.81,  0.89],\n    [0.78,  1.00,  0.85, -0.61,  0.72,  0.68],\n    [0.62,  0.85,  1.00, -0.38,  0.59,  0.51],\n    [-0.45, -0.61, -0.38,  1.00, -0.74, -0.82],\n    [0.81,  0.72,  0.59, -0.74,  1.00,  0.94],\n    [0.89,  0.68,  0.51, -0.82,  0.94,  1.00],\n  ];\n\n  const getColor = (val: number) => {\n    if (val === 1) return '#3b82f6';\n    if (val > 0.7) return '#10b981';\n    if (val > 0.4) return '#06b6d4';\n    if (val > 0) return '#64748b';\n    if (val > -0.6) return '#f59e0b';\n    return '#ef4444';\n  };\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-3\">\n        <div className=\"flex items-center gap-2\">\n          <Layers className=\"w-5 h-5 text-emerald-400\" />\n          <h4 className=\"text-sm font-bold text-white tracking-wide\">품질 인자 피어슨 상관계수 매트릭스 (Pearson Correlation Heatmap)</h4>\n        </div>\n        <span className=\"text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono\">r: -1.0 ~ +1.0</span>\n      </div>\n\n      <div className=\"overflow-x-auto\">\n        <div className=\"min-w-[380px] flex flex-col items-center\">\n          <div className=\"grid grid-cols-7 gap-1 text-[11px] font-bold text-slate-300 text-center mb-1\">\n            <div className=\"w-16\"></div>\n            {variables.map((v, i) => (\n              <div key={i} className=\"w-12 text-[10px] truncate text-slate-400\" title={v}>{v}</div>\n            ))}\n          </div>\n\n          {matrix.map((row, rIdx) => (\n            <div key={rIdx} className=\"grid grid-cols-7 gap-1 items-center mb-1\">\n              <div className=\"w-16 text-[10px] font-semibold text-slate-400 text-right pr-2 truncate\">{variables[rIdx]}</div>\n              {row.map((val, cIdx) => {\n                const isHovered = hoverCell?.r === rIdx && hoverCell?.c === cIdx;\n                return (\n                  <div\n                    key={cIdx}\n                    onMouseEnter={() => setHoverCell({ r: rIdx, c: cIdx })}\n                    onMouseLeave={() => setHoverCell(null)}\n                    style={{ backgroundColor: getColor(val) }}\n                    className={`w-12 h-9 rounded flex items-center justify-center font-mono text-[11px] font-bold transition-all cursor-pointer ${\n                      isHovered ? 'ring-2 ring-white scale-110 z-10 shadow-lg text-white' : 'text-slate-900 opacity-90 hover:opacity-100'\n                    }`}\n                  >\n                    {val.toFixed(2)}\n                  </div>\n                );\n              })}\n            </div>\n          ))}\n        </div>\n      </div>\n\n      {hoverCell && (\n        <div className=\"p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs flex justify-between items-center\">\n          <span className=\"text-slate-300\">\n            상관관계: <strong className=\"text-emerald-400\">{variables[hoverCell.r]}</strong> ↔ <strong className=\"text-cyan-400\">{variables[hoverCell.c]}</strong>\n          </span>\n          <span className=\"font-mono font-bold text-white bg-slate-900 px-2 py-0.5 rounded\">\n            r = {matrix[hoverCell.r][hoverCell.c]}\n          </span>\n        </div>\n      )}\n    </div>\n  );\n};\n\n// =========================================================\n// 3. Multi-Level Circular Sunburst Defect Tree (다층 원형 선버스트)\n// ========================================================="
},
  {
  "id": "chart-sunburst-multitier-defect",
  "name": "다계층 결함 분류 원형 선버스트 (Multi-Tier Sunburst Breakdown)",
  "category": "charts",
  "tags": [
    "sunburst",
    "defect",
    "hierarchy",
    "ppm",
    "선버스트",
    "결함분류"
  ],
  "description": "공정 대분류부터 세부 불량 사유까지 3계층으로 파고드는 원형 다층 선버스트 차트로 불량 PPM 점유율 시각화.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-sunburst-multitier-defect",
  "aiPromptGuidance": "다계층 방사형 원호(Arc)를 이용해 3단계 결함 드릴다운을 수행하는 선버스트 차트를 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const SunburstDefectTreeDemo: React.FC = () => {\n  const [hoveredTier, setHoveredTier] = useState<string>('전체 결함 분석');\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-3\">\n        <div className=\"flex items-center gap-2\">\n          <Compass className=\"w-5 h-5 text-fuchsia-400\" />\n          <h4 className=\"text-sm font-bold text-white tracking-wide\">다계층 결함 분류 원형 선버스트 (Multi-Tier Sunburst Breakdown)</h4>\n        </div>\n        <span className=\"text-[11px] px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 font-mono\">3 Tiers</span>\n      </div>\n\n      <div className=\"grid grid-cols-1 md:grid-cols-12 gap-4 items-center\">\n        <div className=\"md:col-span-7 flex justify-center\">\n          <svg viewBox=\"0 0 340 340\" className=\"w-full max-w-[280px] h-auto drop-shadow-[0_0_20px_rgba(217,70,239,0.15)]\">\n            {/* Center Root */}\n            <circle cx=\"170\" cy=\"170\" r=\"35\" fill=\"#1e1b4b\" stroke=\"#6366f1\" strokeWidth=\"2\" className=\"cursor-pointer\" onMouseEnter={() => setHoveredTier('루트: 전체 공정 결함 (100%)')} />\n            <text x=\"170\" y=\"174\" textAnchor=\"middle\" fill=\"#c7d2fe\" fontSize=\"10\" fontWeight=\"bold\">Total PPM</text>\n\n            {/* Tier 1 Arcs (3 Sectors) */}\n            {/* Sector 1: 기구결함 (180 deg) */}\n            <path d=\"M 170,115 A 55 55 0 0 1 225,170 L 255,170 A 85 85 0 0 0 170,85 Z\" fill=\"#3b82f6\" opacity=\"0.85\" className=\"cursor-pointer hover:opacity-100 transition-all\" onMouseEnter={() => setHoveredTier('Tier 1: 기구 치수 결함 (48%)')} />\n            <path d=\"M 225,170 A 55 55 0 0 1 170,225 L 170,255 A 85 85 0 0 0 255,170 Z\" fill=\"#10b981\" opacity=\"0.85\" className=\"cursor-pointer hover:opacity-100 transition-all\" onMouseEnter={() => setHoveredTier('Tier 1: 표면 외관 결함 (32%)')} />\n            <path d=\"M 170,225 A 55 55 0 0 1 170,115 L 170,85 A 85 85 0 0 0 170,255 Z\" fill=\"#f59e0b\" opacity=\"0.85\" className=\"cursor-pointer hover:opacity-100 transition-all\" onMouseEnter={() => setHoveredTier('Tier 1: 전장 전기 결함 (20%)')} />\n\n            {/* Tier 2 Arcs Outer Ring (Leaf defects) */}\n            <path d=\"M 170,80 A 90 90 0 0 1 235,105 L 260,85 A 125 125 0 0 0 170,45 Z\" fill=\"#60a5fa\" opacity=\"0.7\" className=\"cursor-pointer hover:opacity-100\" onMouseEnter={() => setHoveredTier('Tier 2: 사출 휨/변형 (28%)')} />\n            <path d=\"M 235,105 A 90 90 0 0 1 260,170 L 295,170 A 125 125 0 0 0 260,85 Z\" fill=\"#93c5fd\" opacity=\"0.7\" className=\"cursor-pointer hover:opacity-100\" onMouseEnter={() => setHoveredTier('Tier 2: 홀 가공 편심 (20%)')} />\n            <path d=\"M 260,170 A 90 90 0 0 1 235,235 L 260,255 A 125 125 0 0 0 295,170 Z\" fill=\"#34d399\" opacity=\"0.7\" className=\"cursor-pointer hover:opacity-100\" onMouseEnter={() => setHoveredTier('Tier 2: 미세 스크래치 (18%)')} />\n            <path d=\"M 235,235 A 90 90 0 0 1 170,260 L 170,295 A 125 125 0 0 0 260,255 Z\" fill=\"#6ee7b7\" opacity=\"0.7\" className=\"cursor-pointer hover:opacity-100\" onMouseEnter={() => setHoveredTier('Tier 2: 도장 기포/이물 (14%)')} />\n            <path d=\"M 170,260 A 90 90 0 0 1 170,80 L 170,45 A 125 125 0 0 0 170,295 Z\" fill=\"#fcd34d\" opacity=\"0.7\" className=\"cursor-pointer hover:opacity-100\" onMouseEnter={() => setHoveredTier('Tier 2: 납땜 불량 / 단선 (20%)')} />\n          </svg>\n        </div>\n\n        <div className=\"md:col-span-5 space-y-3\">\n          <div className=\"p-3 rounded-lg bg-slate-800/80 border border-fuchsia-500/30\">\n            <div className=\"text-[10px] text-fuchsia-400 font-mono uppercase tracking-wider\">SELECTED LAYER DETAILS</div>\n            <div className=\"text-sm font-bold text-white mt-1\">{hoveredTier}</div>\n          </div>\n          <div className=\"text-xs text-slate-400 space-y-1\">\n            <p>• 안쪽 계층: 대분류 공정군 결함</p>\n            <p>• 바깥쪽 계층: 구체적 불량 사유 드릴다운</p>\n            <p>• 각도 비례: 누적 불량 점유율 (PPM Weight)</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================\n// 4. Hexagonal Honeycomb Equipment Mesh (허니콤 설비 가동 격자)\n// ========================================================="
},
  {
  "id": "chart-hexagonal-equipment-mesh",
  "name": "육각 허니콤 설비 가동 격자 (Hexagonal Equipment Mesh)",
  "category": "charts",
  "tags": [
    "honeycomb",
    "hexagonal",
    "iot",
    "mesh",
    "허니콤",
    "육각격자"
  ],
  "description": "스마트 팩토리 내 주요 CNC, 프레스, 용접 로봇 설비의 실시간 온도/부하 상태를 벌집형 허니콤 메쉬로 모니터링.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-hexagonal-equipment-mesh",
  "aiPromptGuidance": "스마트 팩토리 설비 셀을 벌집형 허니콤 육각형 격자로 배열하고 실시간 텔레메트리를 연결하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const HoneycombEquipmentMeshDemo: React.FC = () => {\n  const [selectedCell, setSelectedCell] = useState<string | null>(null);\n\n  const cells = [\n    { id: 'H-01', name: 'CNC-1호기', state: 'online', temp: '42°C', load: '88%' },\n    { id: 'H-02', name: 'CNC-2호기', state: 'online', temp: '45°C', load: '92%' },\n    { id: 'H-03', name: '프레스-A', state: 'warning', temp: '68°C', load: '98%' },\n    { id: 'H-04', name: '프레스-B', state: 'online', temp: '41°C', load: '75%' },\n    { id: 'H-05', name: '로봇용접-1', state: 'offline', temp: '24°C', load: '0%' },\n    { id: 'H-06', name: '로봇용접-2', state: 'online', temp: '48°C', load: '84%' },\n    { id: 'H-07', name: 'AI검사-1', state: 'online', temp: '36°C', load: '95%' },\n    { id: 'H-08', name: 'AI검사-2', state: 'online', temp: '38°C', load: '91%' },\n  ];\n\n  const getColor = (state: string) => {\n    if (state === 'online') return 'border-emerald-500/60 bg-emerald-950/40 text-emerald-400';\n    if (state === 'warning') return 'border-amber-500/60 bg-amber-950/40 text-amber-400';\n    return 'border-rose-500/60 bg-rose-950/40 text-rose-400';\n  };\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-3\">\n        <div className=\"flex items-center gap-2\">\n          <Zap className=\"w-5 h-5 text-amber-400\" />\n          <h4 className=\"text-sm font-bold text-white tracking-wide\">육각 허니콤 설비 셀 메쉬 (Hexagonal Equipment Mesh)</h4>\n        </div>\n        <span className=\"text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono\">Hex Mesh 8-Nodes</span>\n      </div>\n\n      <div className=\"grid grid-cols-2 sm:grid-cols-4 gap-3\">\n        {cells.map((cell) => {\n          const isSelected = selectedCell === cell.id;\n          return (\n            <div\n              key={cell.id}\n              onClick={() => setSelectedCell(cell.id)}\n              className={`p-3 rounded-xl border transition-all cursor-pointer ${getColor(cell.state)} ${\n                isSelected ? 'ring-2 ring-white scale-105 shadow-xl' : 'hover:scale-[1.02]'\n              }`}\n            >\n              <div className=\"flex justify-between items-center mb-1\">\n                <span className=\"text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-white font-bold\">{cell.id}</span>\n                <div className={`w-2 h-2 rounded-full ${cell.state === 'online' ? 'bg-emerald-400 animate-pulse' : cell.state === 'warning' ? 'bg-amber-400' : 'bg-rose-400'}`} />\n              </div>\n              <div className=\"text-xs font-bold text-slate-100\">{cell.name}</div>\n              <div className=\"mt-2 pt-2 border-t border-white/10 flex justify-between text-[10px] font-mono\">\n                <span className=\"text-slate-400\">{cell.temp}</span>\n                <span className=\"font-bold\">{cell.load} 부하</span>\n              </div>\n            </div>\n          );\n        })}\n      </div>\n    </div>\n  );\n};"
}
,
  {
  "id": "theme-magnetic-ferrofluid-canvas",
  "name": "마그네틱 페로플루이드 액체 자성체 (Magnetic Ferrofluid Fluid)",
  "category": "themes",
  "tags": [
    "ferrofluid",
    "gpgpu",
    "physics",
    "canvas",
    "자성체",
    "유체역학"
  ],
  "description": "마우스 커서의 물리적 자성 인력에 반응하여 유기적인 액체 필라멘트와 스포크를 형성하는 실시간 GPGPU 캔버스 시뮬레이션.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "theme-magnetic-ferrofluid-canvas",
  "aiPromptGuidance": "HTML5 Canvas와 방사형 중력장 물리 수식을 활용해 마우스 유인 액체 페로플루이드 효과를 60FPS로 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const MagneticFerrofluidCanvasDemo: React.FC = () => {\n  const canvasRef = useRef<HTMLCanvasElement | null>(null);\n  const [particleCount] = useState<number>(120);\n  const [intensity, setIntensity] = useState<number>(1.5);\n  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 180, y: 110 });\n\n  useEffect(() => {\n    const canvas = canvasRef.current;\n    if (!canvas) return;\n    const ctx = canvas.getContext('2d');\n    if (!ctx) return;\n\n    let animId: number;\n    let time = 0;\n\n    // Initialize particles\n    const particles = Array.from({ length: particleCount }, (_, i) => {\n      const angle = (i / particleCount) * Math.PI * 2;\n      const dist = 30 + Math.random() * 60;\n      return {\n        baseAngle: angle,\n        dist: dist,\n        size: 2 + Math.random() * 3,\n        speed: 0.02 + Math.random() * 0.03,\n        color: i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#a855f7' : '#ec4899',\n      };\n    });\n\n    const render = () => {\n      time += 0.03;\n      ctx.fillStyle = 'rgba(15, 23, 42, 0.25)';\n      ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n      const centerX = mousePos.x;\n      const centerY = mousePos.y;\n\n      // Draw Center Magnetic Core Glow\n      const grad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, 70);\n      grad.addColorStop(0, 'rgba(139, 92, 246, 0.4)');\n      grad.addColorStop(1, 'rgba(15, 23, 42, 0)');\n      ctx.fillStyle = grad;\n      ctx.beginPath();\n      ctx.arc(centerX, centerY, 70, 0, Math.PI * 2);\n      ctx.fill();\n\n      // Update & Draw Particles with Magnetic Attraction\n      particles.forEach((p) => {\n        p.baseAngle += p.speed;\n        const fluidDist = p.dist + Math.sin(p.baseAngle * 4 + time) * 15 * intensity;\n        const px = centerX + Math.cos(p.baseAngle) * fluidDist;\n        const py = centerY + Math.sin(p.baseAngle) * fluidDist;\n\n        ctx.fillStyle = p.color;\n        ctx.shadowColor = p.color;\n        ctx.shadowBlur = 8;\n        ctx.beginPath();\n        ctx.arc(px, py, p.size, 0, Math.PI * 2);\n        ctx.fill();\n        ctx.shadowBlur = 0;\n\n        // Draw Spoke Filament Lines\n        ctx.strokeStyle = p.color;\n        ctx.lineWidth = 0.5;\n        ctx.globalAlpha = 0.2;\n        ctx.beginPath();\n        ctx.moveTo(centerX, centerY);\n        ctx.lineTo(px, py);\n        ctx.stroke();\n        ctx.globalAlpha = 1.0;\n      });\n\n      animId = requestAnimationFrame(render);\n    };\n\n    render();\n\n    return () => cancelAnimationFrame(animId);\n  }, [intensity, mousePos, particleCount]);\n\n  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {\n    const rect = e.currentTarget.getBoundingClientRect();\n    setMousePos({\n      x: e.clientX - rect.left,\n      y: e.clientY - rect.top,\n    });\n  };\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-3\">\n        <div className=\"flex items-center gap-2\">\n          <Sparkles className=\"w-5 h-5 text-fuchsia-400 animate-pulse\" />\n          <h4 className=\"text-sm font-bold text-white tracking-wide\">마그네틱 페로플루이드 액체 자성체 (Magnetic Fluid Well)</h4>\n        </div>\n        <span className=\"text-[11px] px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 font-mono\">GPGPU Physics 60FPS</span>\n      </div>\n\n      <div className=\"relative flex justify-center\">\n        <canvas\n          ref={canvasRef}\n          width={360}\n          height={220}\n          onMouseMove={handleMouseMove}\n          className=\"w-full max-w-[360px] h-[220px] bg-slate-950 rounded-lg border border-slate-800 cursor-crosshair drop-shadow-[0_0_20px_rgba(168,85,247,0.2)]\"\n        />\n        <div className=\"absolute bottom-2 left-3 text-[10px] text-slate-400 font-mono pointer-events-none\">\n          마우스를 캔버스 위로 움직여 자성 인력을 제어하세요\n        </div>\n      </div>\n\n      <div className=\"flex items-center justify-between gap-4 text-xs pt-2 border-t border-slate-800\">\n        <span className=\"text-slate-400\">자성 인력 세기 (Intensity)</span>\n        <div className=\"flex items-center gap-2\">\n          <input\n            type=\"range\"\n            min=\"0.5\"\n            max=\"3\"\n            step=\"0.1\"\n            value={intensity}\n            onChange={(e) => setIntensity(parseFloat(e.target.value))}\n            className=\"w-32 accent-fuchsia-500 cursor-pointer\"\n          />\n          <span className=\"font-mono text-fuchsia-400 font-bold\">{intensity}x</span>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 2. 2026 Kinetic Cyberpunk HUD Dial Gauge (초정밀 사이버 휠)\n// ========================================================================="
},
  {
  "id": "nav-kinetic-cyberpunk-dial",
  "name": "햅틱 키네틱 로터리 다이얼 (Tactile Kinetic Cyber Dial)",
  "category": "navigation",
  "tags": [
    "dial",
    "rotary",
    "cyberpunk",
    "haptic",
    "로터리다이얼",
    "조그셔틀"
  ],
  "description": "270도 회전각을 마우스 드래그로 조작하여 RPM과 온도를 실시간 계산하는 사이버펑크 햅틱 로터리 컨트롤러.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "nav-kinetic-cyberpunk-dial",
  "aiPromptGuidance": "Atan2 삼각함수로 드래그 각도를 추적하고 28개 틱 마크와 회전 인디케이터가 연동되는 조그셔틀 다이얼을 만드세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const KineticCyberDialDemo: React.FC = () => {\n  const [angle, setAngle] = useState<number>(135); // 0 to 270 degrees\n  const isDragging = useRef<boolean>(false);\n\n  const handleMouseDown = () => { isDragging.current = true; };\n  const handleMouseUp = () => { isDragging.current = false; };\n  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {\n    if (!isDragging.current) return;\n    const rect = e.currentTarget.getBoundingClientRect();\n    const cx = rect.left + rect.width / 2;\n    const cy = rect.top + rect.height / 2;\n    const dx = e.clientX - cx;\n    const dy = e.clientY - cy;\n    let deg = (Math.atan2(dy, dx) * 180) / Math.PI + 180;\n    deg = Math.max(0, Math.min(270, deg));\n    setAngle(Math.round(deg));\n  };\n\n  const calculatedRpm = Math.round((angle / 270) * 8000);\n  const calculatedTemp = Math.round(25 + (angle / 270) * 85);\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-3\">\n        <div className=\"flex items-center gap-2\">\n          <Gauge className=\"w-5 h-5 text-cyan-400\" />\n          <h4 className=\"text-sm font-bold text-white tracking-wide\">햅틱 키네틱 로터리 다이얼 (Tactile Kinetic Cyber Dial)</h4>\n        </div>\n        <span className=\"text-[11px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono\">Rotary 270°</span>\n      </div>\n\n      <div \n        className=\"flex flex-col items-center justify-center select-none py-2\"\n        onMouseUp={handleMouseUp}\n        onMouseLeave={handleMouseUp}\n        onMouseMove={handleMouseMove}\n      >\n        <div \n          onMouseDown={handleMouseDown}\n          className=\"relative w-44 h-44 rounded-full bg-slate-950 border-4 border-slate-800 flex items-center justify-center cursor-grab active:cursor-grabbing shadow-[0_0_30px_rgba(6,182,212,0.15)]\"\n        >\n          {/* Tick marks around perimeter */}\n          {Array.from({ length: 28 }).map((_, i) => {\n            const rot = i * 10 - 45;\n            return (\n              <div\n                key={i}\n                style={{ transform: `rotate(${rot}deg) translateY(-80px)` }}\n                className={`absolute w-0.5 h-3 ${\n                  rot <= angle - 45 ? 'bg-cyan-400 shadow-[0_0_6px_#06b6d4]' : 'bg-slate-700'\n                }`}\n              />\n            );\n          })}\n\n          {/* Internal Dial Rotor with metallic gradient */}\n          <div \n            style={{ transform: `rotate(${angle - 135}deg)` }}\n            className=\"w-28 h-28 rounded-full bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 border-2 border-slate-600 flex items-center justify-center relative shadow-inner transition-transform duration-75\"\n          >\n            {/* Notch indicator */}\n            <div className=\"absolute top-2 w-2 h-4 rounded bg-cyan-400 shadow-[0_0_8px_#06b6d4]\" />\n            <div className=\"w-10 h-10 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center\">\n              <Zap className=\"w-4 h-4 text-cyan-400\" />\n            </div>\n          </div>\n        </div>\n\n        <div className=\"grid grid-cols-2 gap-4 w-full mt-4 text-center\">\n          <div className=\"p-2.5 rounded-lg bg-slate-800/60 border border-slate-700\">\n            <div className=\"text-[10px] text-slate-400 uppercase font-mono\">ROTOR SPEED</div>\n            <div className=\"text-base font-black text-cyan-400 font-mono mt-0.5\">{calculatedRpm} RPM</div>\n          </div>\n          <div className=\"p-2.5 rounded-lg bg-slate-800/60 border border-slate-700\">\n            <div className=\"text-[10px] text-slate-400 uppercase font-mono\">CHAMBER THERMAL</div>\n            <div className={`text-base font-black font-mono mt-0.5 ${calculatedTemp > 85 ? 'text-rose-400' : 'text-emerald-400'}`}>\n              {calculatedTemp} °C\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 3. Tactile Brutalism 1px Micro-Grid Matrix Switcher (택타일 스위처)\n// ========================================================================="
},
  {
  "id": "feedback-tactile-brutalism-switcher",
  "name": "택타일 브루탈리즘 릴레이 스위처 (Tactile Brutalism 1px Matrix)",
  "category": "feedback",
  "tags": [
    "brutalism",
    "tactile",
    "switch",
    "relay",
    "브루탈리즘",
    "하드웨어스위치"
  ],
  "description": "모던 2026 트렌드인 1px 날카로운 테두리와 강렬한 하드웨어 그림자를 가진 8채널 산업용 고체 릴레이 스위치 매트릭스.",
  "complexity": "Medium",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "feedback-tactile-brutalism-switcher",
  "aiPromptGuidance": "날카로운 1px 하드 섀도우와 물리적 클릭 느낌을 주는 브루탈리즘 스타일의 산업용 채널 매트릭스를 구성하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const TactileMatrixSwitcherDemo: React.FC = () => {\n  const [switches, setSwitches] = useState<boolean[]>([true, true, false, true, false, true, true, false]);\n\n  const channels = [\n    { label: 'CH-1 (Main Bus)', desc: '480V 3-Phase' },\n    { label: 'CH-2 (Servo Driver)', desc: '24V DC Isolated' },\n    { label: 'CH-3 (Cooling Pump)', desc: 'Hydraulic 120 PSI' },\n    { label: 'CH-4 (Vision Feed)', desc: 'GigE PoE Link' },\n    { label: 'CH-5 (Safety Curtain)', desc: 'Optic SIL-3 Safe' },\n    { label: 'CH-6 (Pneumatic Ex)', desc: '6.5 Bar Regulated' },\n    { label: 'CH-7 (IoT Telemetry)', desc: 'MQTT 100Hz Pub' },\n    { label: 'CH-8 (Aux Inverter)', desc: '10kW Standby' },\n  ];\n\n  const toggle = (idx: number) => {\n    const updated = [...switches];\n    updated[idx] = !updated[idx];\n    setSwitches(updated);\n  };\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-3\">\n        <div className=\"flex items-center gap-2\">\n          <Terminal className=\"w-5 h-5 text-amber-400\" />\n          <h4 className=\"text-sm font-bold text-white tracking-wide\">택타일 브루탈리즘 릴레이 스위처 (Tactile Brutalism 1px Matrix)</h4>\n        </div>\n        <span className=\"text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono\">Solid State 8-CH</span>\n      </div>\n\n      <div className=\"grid grid-cols-2 sm:grid-cols-4 gap-2.5\">\n        {channels.map((ch, idx) => {\n          const isActive = switches[idx];\n          return (\n            <div\n              key={idx}\n              onClick={() => toggle(idx)}\n              className={`p-3 rounded-none border-2 transition-all cursor-pointer select-none relative ${\n                isActive\n                  ? 'bg-amber-500/10 border-amber-400 shadow-[2px_2px_0px_#f59e0b]'\n                  : 'bg-slate-950 border-slate-700 shadow-[2px_2px_0px_#334155] opacity-60 hover:opacity-100'\n              }`}\n            >\n              <div className=\"flex justify-between items-center mb-1\">\n                <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-amber-400' : 'text-slate-500'}`}>\n                  {isActive ? 'ENGAGED' : 'TRIPPED'}\n                </span>\n                <div className={`w-2 h-2 rounded-none border ${isActive ? 'bg-amber-400 border-amber-300 animate-ping' : 'bg-slate-800 border-slate-600'}`} />\n              </div>\n              <div className=\"text-xs font-bold text-slate-100 mt-1\">{ch.label}</div>\n              <div className=\"text-[10px] text-slate-400 font-mono mt-0.5\">{ch.desc}</div>\n            </div>\n          );\n        })}\n      </div>\n    </div>\n  );\n};"
}
,
  {
  "id": "chart-lorenz-attractor-3d",
  "name": "3차원 카오스 로렌츠 어트랙터 (3D Lorenz Attractor ODE)",
  "category": "charts",
  "tags": [
    "lorenz",
    "attractor",
    "chaos",
    "ode",
    "differential",
    "로렌츠",
    "카오스",
    "미분방정식"
  ],
  "description": "비선형 동역학 카오스 미분방정식을 실시간 3D 궤적 렌더링으로 시각화하여 불규칙 공정 진동과 난류 거동을 해석.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-lorenz-attractor-3d",
  "aiPromptGuidance": "3차원 로렌츠 미분방정식(dx, dy, dz)을 3D Y축 회전 투영과 무지개 그라디언트 궤적으로 Canvas에 실시간 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const LorenzAttractorDemo: React.FC = () => {\n  const canvasRef = useRef<HTMLCanvasElement | null>(null);\n  const [isPlaying, setIsPlaying] = useState<boolean>(true);\n  const [sigma, setSigma] = useState<number>(10);\n  const [rho, setRho] = useState<number>(28);\n  const [beta, setBeta] = useState<number>(8 / 3);\n\n  useEffect(() => {\n    const canvas = canvasRef.current;\n    if (!canvas) return;\n    const ctx = canvas.getContext('2d');\n    if (!ctx) return;\n\n    let animId: number;\n    let x = 0.1, y = 0, z = 0;\n    const dt = 0.01;\n    const points: { x: number; y: number; z: number }[] = [];\n    let rotAngle = 0;\n\n    const render = () => {\n      if (isPlaying) {\n        // Calculate next 5 steps of differential equations\n        for (let i = 0; i < 5; i++) {\n          const dx = sigma * (y - x) * dt;\n          const dy = (x * (rho - z) - y) * dt;\n          const dz = (x * y - beta * z) * dt;\n          x += dx;\n          y += dy;\n          z += dz;\n          points.push({ x, y, z });\n          if (points.length > 900) points.shift();\n        }\n      }\n\n      rotAngle += 0.008;\n\n      ctx.fillStyle = 'rgba(7, 10, 19, 0.35)';\n      ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n      const cx = canvas.width / 2;\n      const cy = canvas.height / 2 + 20;\n      const scale = 5.2;\n\n      ctx.lineWidth = 1.2;\n\n      for (let i = 1; i < points.length; i++) {\n        const p1 = points[i - 1];\n        const p2 = points[i];\n\n        // 3D rotation around Y axis\n        const rx1 = p1.x * Math.cos(rotAngle) - p1.z * Math.sin(rotAngle);\n        const rz1 = p1.x * Math.sin(rotAngle) + p1.z * Math.cos(rotAngle);\n        const rx2 = p2.x * Math.cos(rotAngle) - p2.z * Math.sin(rotAngle);\n        const rz2 = p2.x * Math.sin(rotAngle) + p2.z * Math.cos(rotAngle);\n\n        const screenX1 = cx + rx1 * scale;\n        const screenY1 = cy - (p1.y - 25) * scale;\n        const screenX2 = cx + rx2 * scale;\n        const screenY2 = cy - (p2.y - 25) * scale;\n\n        const hue = (i / points.length) * 120 + 220; // Neon blue to purple\n        ctx.strokeStyle = `hsla(${hue}, 90%, 65%, ${0.2 + (i / points.length) * 0.8})`;\n        ctx.beginPath();\n        ctx.moveTo(screenX1, screenY1);\n        ctx.lineTo(screenX2, screenY2);\n        ctx.stroke();\n      }\n\n      // Draw active head point with glowing particle\n      if (points.length > 0) {\n        const head = points[points.length - 1];\n        const rx = head.x * Math.cos(rotAngle) - head.z * Math.sin(rotAngle);\n        const screenX = cx + rx * scale;\n        const screenY = cy - (head.y - 25) * scale;\n\n        ctx.fillStyle = '#38bdf8';\n        ctx.shadowColor = '#0284c7';\n        ctx.shadowBlur = 12;\n        ctx.beginPath();\n        ctx.arc(screenX, screenY, 4, 0, Math.PI * 2);\n        ctx.fill();\n        ctx.shadowBlur = 0;\n      }\n\n      animId = requestAnimationFrame(render);\n    };\n\n    render();\n\n    return () => cancelAnimationFrame(animId);\n  }, [isPlaying, sigma, rho, beta]);\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-3\">\n        <div className=\"flex items-center gap-2\">\n          <Orbit className=\"w-5 h-5 text-sky-400 animate-spin\" style={{ animationDuration: '8s' }} />\n          <h4 className=\"text-sm font-bold text-white tracking-wide\">3차원 카오스 로렌츠 어트랙터 (3D Lorenz Attractor ODE)</h4>\n        </div>\n        <div className=\"flex items-center gap-2\">\n          <button \n            onClick={() => setIsPlaying(!isPlaying)}\n            className=\"p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs flex items-center gap-1\"\n          >\n            {isPlaying ? <Pause className=\"w-3.5 h-3.5 text-amber-400\" /> : <Play className=\"w-3.5 h-3.5 text-emerald-400\" />}\n            <span>{isPlaying ? '일시정지' : '시뮬레이션'}</span>\n          </button>\n        </div>\n      </div>\n\n      <div className=\"relative flex justify-center\">\n        <canvas\n          ref={canvasRef}\n          width={380}\n          height={230}\n          className=\"w-full max-w-[380px] h-[230px] bg-slate-950 rounded-lg border border-slate-800 shadow-[0_0_25px_rgba(56,189,248,0.15)]\"\n        />\n        <div className=\"absolute top-2 left-3 text-[10px] font-mono text-sky-400/80 bg-slate-950/80 px-2 py-0.5 rounded border border-sky-900/40\">\n          dx/dt=σ(y-x) | dy/dt=x(ρ-z)-y | dz/dt=xy-βz\n        </div>\n      </div>\n\n      <div className=\"grid grid-cols-3 gap-2 text-xs pt-1\">\n        <div className=\"p-2 rounded bg-slate-800/40 border border-slate-700/50\">\n          <div className=\"text-[10px] text-slate-400 font-mono\">프란틀 수 (σ)</div>\n          <div className=\"font-mono text-sky-400 font-bold\">{sigma}</div>\n        </div>\n        <div className=\"p-2 rounded bg-slate-800/40 border border-slate-700/50\">\n          <div className=\"text-[10px] text-slate-400 font-mono\">레일리 수 (ρ)</div>\n          <div className=\"font-mono text-indigo-400 font-bold\">{rho}</div>\n        </div>\n        <div className=\"p-2 rounded bg-slate-800/40 border border-slate-700/50\">\n          <div className=\"text-[10px] text-slate-400 font-mono\">기하상수 (β)</div>\n          <div className=\"font-mono text-fuchsia-400 font-bold\">2.667</div>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 2. High-Dimensional t-SNE / UMAP Latent Embedding Projector\n// ========================================================================="
},
  {
  "id": "chart-umap-latent-projector",
  "name": "고차원 센서 UMAP 임베딩 프로젝터 (UMAP Latent Space 2D)",
  "category": "charts",
  "tags": [
    "umap",
    "tsne",
    "embedding",
    "manifold",
    "latent",
    "고차원",
    "임베딩",
    "매니폴드"
  ],
  "description": "센서 수백 개의 고차원 데이터를 비선형 차원 축소(UMAP/t-SNE)하여 잠재 공간(Latent Space) 내 이상 군집 클러스터링 시각화.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-umap-latent-projector",
  "aiPromptGuidance": "다변량 센서 임베딩 공간을 2D 매니폴드 밀도 구름과 군집별 산점도(Scatter Points)로 인터랙티브하게 표현하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const UmapEmbeddingProjectorDemo: React.FC = () => {\n  const [selectedCluster, setSelectedCluster] = useState<number | null>(null);\n\n  const clusters = [\n    { id: 0, name: '사출 압력 이상 군집 (Cluster α)', color: '#ec4899', count: 42, center: { x: 90, y: 70 }, radius: 35 },\n    { id: 1, name: 'CNC 미세진동 정상 군집 (Cluster β)', color: '#10b981', count: 128, center: { x: 260, y: 85 }, radius: 45 },\n    { id: 2, name: '표면 열처리 급냉 편차 (Cluster γ)', color: '#f59e0b', count: 64, center: { x: 180, y: 170 }, radius: 38 },\n  ];\n\n  // Deterministic scatter points based on cluster centers\n  const points = React.useMemo(() => {\n    const list: { x: number; y: number; cluster: number; id: string }[] = [];\n    clusters.forEach(c => {\n      for (let i = 0; i < c.count / 3; i++) {\n        const angle = (i / (c.count / 3)) * Math.PI * 2;\n        const r = (i % 3 + 1) * (c.radius / 3.5);\n        list.push({\n          x: c.center.x + Math.cos(angle * 2.3) * r,\n          y: c.center.y + Math.sin(angle * 1.7) * r,\n          cluster: c.id,\n          id: `Point-${c.id}-${i}`\n        });\n      }\n    });\n    return list;\n  }, []);\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-3\">\n        <div className=\"flex items-center gap-2\">\n          <Binary className=\"w-5 h-5 text-emerald-400\" />\n          <h4 className=\"text-sm font-bold text-white tracking-wide\">고차원 센서 임베딩 프로젝터 (UMAP Latent Space 2D)</h4>\n        </div>\n        <span className=\"text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono\">234 Multi-Vectors</span>\n      </div>\n\n      <div className=\"relative\">\n        <svg viewBox=\"0 0 360 230\" className=\"w-full h-48 bg-slate-950/80 rounded-lg border border-slate-800\">\n          {/* Manifold density contour clouds */}\n          {clusters.map((c) => {\n            const isHighlight = selectedCluster === null || selectedCluster === c.id;\n            return (\n              <ellipse\n                key={c.id}\n                cx={c.center.x}\n                cy={c.center.y}\n                rx={c.radius * 1.3}\n                ry={c.radius * 0.9}\n                fill={c.color}\n                opacity={isHighlight ? 0.12 : 0.03}\n                className=\"transition-all duration-300\"\n              />\n            );\n          })}\n\n          {/* Scatter Points */}\n          {points.map((p, idx) => {\n            const isTarget = selectedCluster === null || selectedCluster === p.cluster;\n            const color = clusters[p.cluster].color;\n            return (\n              <circle\n                key={idx}\n                cx={p.x}\n                cy={p.y}\n                r={selectedCluster === p.cluster ? 3.5 : 2.2}\n                fill={color}\n                opacity={isTarget ? 0.9 : 0.15}\n                className=\"transition-all duration-200 cursor-pointer hover:r-5 hover:brightness-150\"\n                onMouseEnter={() => setSelectedCluster(p.cluster)}\n              />\n            );\n          })}\n        </svg>\n      </div>\n\n      <div className=\"grid grid-cols-1 sm:grid-cols-3 gap-2\">\n        {clusters.map((c) => (\n          <div\n            key={c.id}\n            onMouseEnter={() => setSelectedCluster(c.id)}\n            onMouseLeave={() => setSelectedCluster(null)}\n            className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${\n              selectedCluster === c.id\n                ? 'bg-slate-800 border-emerald-400 scale-[1.02]'\n                : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800'\n            }`}\n          >\n            <div className=\"flex items-center gap-2\">\n              <div className=\"w-2.5 h-2.5 rounded-full\" style={{ backgroundColor: c.color }} />\n              <span className=\"font-bold text-slate-200 truncate\">{c.name.split(' ')[0]}</span>\n            </div>\n            <div className=\"text-[10px] text-slate-400 font-mono mt-1\">포인트 {c.count}개 군집</div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 3. Poincaré Hyperbolic Disk Tree (푸앵카레 쌍곡 기하학 트리)\n// ========================================================================="
},
  {
  "id": "chart-poincare-hyperbolic-disk",
  "name": "푸앵카레 쌍곡면 비유클리드 트리 (Poincaré Hyperbolic Disk)",
  "category": "charts",
  "tags": [
    "poincare",
    "hyperbolic",
    "noneuclidean",
    "tree",
    "푸앵카레",
    "쌍곡기하학",
    "비유클리드"
  ],
  "description": "무한히 확장되는 방대한 공정/설비 계층 구조를 유한한 푸앵카레 원판 안으로 등각 사상(Conformal Mapping)하는 비유클리드 기하 시각화.",
  "complexity": "Advanced",
  "dependencies": [
    "lucide-react"
  ],
  "previewType": "chart-poincare-hyperbolic-disk",
  "aiPromptGuidance": "푸앵카레 쌍곡 기하학 원판 좌표계 위에 측지선(Geodesic Arcs)과 동심원 트리 노드를 등각 사상 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const PoincareHyperbolicDiskDemo: React.FC = () => {\n  const [zoomLevel, setZoomLevel] = useState<number>(1);\n  const [activeNode, setActiveNode] = useState<string | null>(null);\n\n  // Nodes arranged on concentric Poincaré hyperbolic rings\n  const hyperbolicRings = [\n    { radius: 35, count: 4, label: 'Core Tier-1', color: '#6366f1' },\n    { radius: 75, count: 12, label: 'Subsystem Tier-2', color: '#38bdf8' },\n    { radius: 110, count: 24, label: 'Micro Sensor Tier-3', color: '#a855f7' },\n  ];\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-3\">\n        <div className=\"flex items-center gap-2\">\n          <Compass className=\"w-5 h-5 text-indigo-400\" />\n          <h4 className=\"text-sm font-bold text-white tracking-wide\">푸앵카레 쌍곡면 비유클리드 트리 (Poincaré Hyperbolic Disk)</h4>\n        </div>\n        <span className=\"text-[11px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono\">Non-Euclidean 2D</span>\n      </div>\n\n      <div className=\"relative flex justify-center\">\n        <svg viewBox=\"0 0 320 320\" className=\"w-full max-w-[280px] h-auto drop-shadow-[0_0_20px_rgba(99,102,241,0.2)]\">\n          {/* Outer Poincaré Geodesic Boundary */}\n          <circle cx=\"160\" cy=\"160\" r=\"140\" fill=\"#030712\" stroke=\"#4f46e5\" strokeWidth=\"2.5\" />\n          \n          {/* Hyperbolic Geodesic Arcs */}\n          <path d=\"M 50,160 Q 160,80 270,160\" fill=\"none\" stroke=\"#1e293b\" strokeWidth=\"1\" strokeDasharray=\"3,3\" />\n          <path d=\"M 50,160 Q 160,240 270,160\" fill=\"none\" stroke=\"#1e293b\" strokeWidth=\"1\" strokeDasharray=\"3,3\" />\n          <path d=\"M 160,50 Q 80,160 160,270\" fill=\"none\" stroke=\"#1e293b\" strokeWidth=\"1\" strokeDasharray=\"3,3\" />\n          <path d=\"M 160,50 Q 240,160 160,270\" fill=\"none\" stroke=\"#1e293b\" strokeWidth=\"1\" strokeDasharray=\"3,3\" />\n\n          {/* Concentric Hyperbolic Rings & Nodes */}\n          {hyperbolicRings.map((ring, ringIdx) => {\n            const nodes = [];\n            for (let i = 0; i < ring.count; i++) {\n              const angle = (i / ring.count) * Math.PI * 2;\n              const x = 160 + ring.radius * Math.cos(angle);\n              const y = 160 + ring.radius * Math.sin(angle);\n              const nodeId = `H-${ringIdx}-${i}`;\n              nodes.push(\n                <circle\n                  key={i}\n                  cx={x}\n                  cy={y}\n                  r={ringIdx === 0 ? 5.5 : ringIdx === 1 ? 3.5 : 2}\n                  fill={ring.color}\n                  className=\"cursor-pointer transition-all hover:scale-150 hover:brightness-150\"\n                  onMouseEnter={() => setActiveNode(`${ring.label} Node #${i + 1}`)}\n                  onMouseLeave={() => setActiveNode(null)}\n                />\n              );\n            }\n            return (\n              <g key={ringIdx}>\n                <circle cx=\"160\" cy=\"160\" r={ring.radius} fill=\"none\" stroke={ring.color} strokeOpacity=\"0.15\" strokeWidth=\"1\" />\n                {nodes}\n              </g>\n            );\n          })}\n\n          {/* Center Origin Node */}\n          <circle cx=\"160\" cy=\"160\" r=\"7\" fill=\"#ffffff\" stroke=\"#6366f1\" strokeWidth=\"2\" className=\"cursor-pointer shadow-lg\" onMouseEnter={() => setActiveNode('Origin Root (0,0)')} />\n        </svg>\n      </div>\n\n      <div className=\"p-2.5 rounded-lg bg-slate-800/70 border border-slate-700 text-xs flex justify-between items-center\">\n        <span className=\"text-slate-400\">포커스 노드:</span>\n        <span className=\"font-mono text-indigo-300 font-bold\">{activeNode || '경계면 노드 위로 마우스를 올려보세요'}</span>\n      </div>\n    </div>\n  );\n};"
},
{
  "id": "math-quantum-orbital-manifold",
  "name": "양자 확률 상태 오비탈 구체 (Quantum Orbital Bloch Manifold)",
  "category": "charts",
  "tags": ["quantum", "bloch", "sphere", "orbital", "양자", "오비탈", "블록구체", "확률파동"],
  "description": "양자 중첩 상태의 파동함수와 위상 간섭을 실시간 3D 오비탈 와이어프레임 및 전자 확률 구름으로 렌더링.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "math-quantum-orbital-manifold",
  "aiPromptGuidance": "양자 블록 구체 및 위상 간섭 전자 구름을 Canvas 2D로 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const QuantumOrbitalManifoldDemo: React.FC = () => {\n  const canvasRef = useRef<HTMLCanvasElement | null>(null);\n  const [phase, setPhase] = useState<number>(0.75);\n  const [electronCount] = useState<number>(80);\n\n  useEffect(() => {\n    const canvas = canvasRef.current;\n    if (!canvas) return;\n    const ctx = canvas.getContext('2d');\n    if (!ctx) return;\n\n    let animId: number;\n    let t = 0;\n\n    const render = () => {\n      t += 0.02;\n      ctx.fillStyle = 'rgba(7, 10, 19, 0.3)';\n      ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n      const cx = canvas.width / 2;\n      const cy = canvas.height / 2;\n      const r = 65;\n\n      // Draw Bloch Sphere Wireframe Rings\n      ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)';\n      ctx.lineWidth = 1;\n      ctx.beginPath();\n      ctx.arc(cx, cy, r, 0, Math.PI * 2);\n      ctx.stroke();\n\n      ctx.beginPath();\n      ctx.ellipse(cx, cy, r, r * 0.4, 0, 0, Math.PI * 2);\n      ctx.stroke();\n\n      // Orbital Probability Cloud Points\n      for (let i = 0; i < electronCount; i++) {\n        const u = (i / electronCount) * Math.PI * 2;\n        const v = Math.sin(u * 3 + t * phase) * Math.PI;\n        \n        const px = cx + r * Math.sin(v) * Math.cos(u + t * 0.5);\n        const py = cy + r * Math.cos(v) * 0.8;\n        const pz = Math.sin(v) * Math.sin(u + t * 0.5);\n\n        const alpha = Math.max(0.1, (pz + 1) / 2);\n        const size = 1.5 + alpha * 2.5;\n\n        ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;\n        ctx.shadowColor = '#c084fc';\n        ctx.shadowBlur = 6;\n        ctx.beginPath();\n        ctx.arc(px, py, size, 0, Math.PI * 2);\n        ctx.fill();\n        ctx.shadowBlur = 0;\n      }\n\n      // Quantum Superposition Center Core\n      ctx.fillStyle = '#38bdf8';\n      ctx.shadowColor = '#38bdf8';\n      ctx.shadowBlur = 15;\n      ctx.beginPath();\n      ctx.arc(cx, cy, 5 + Math.sin(t * 3) * 2, 0, Math.PI * 2);\n      ctx.fill();\n      ctx.shadowBlur = 0;\n\n      animId = requestAnimationFrame(render);\n    };\n\n    render();\n    return () => cancelAnimationFrame(animId);\n  }, [phase, electronCount]);\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Orbit className=\"w-4 h-4 text-purple-400 animate-spin\" style={{ animationDuration: '6s' }} />\n          <h4 className=\"text-xs font-bold text-white\">양자 확률 상태 오비탈 구체 (Quantum Orbital Manifold)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono\">Bloch ψ-State</span>\n      </div>\n      <div className=\"flex justify-center\">\n        <canvas ref={canvasRef} width={320} height={180} className=\"w-full max-w-[320px] h-40 bg-slate-950 rounded-lg border border-slate-800\" />\n      </div>\n      <div className=\"flex items-center justify-between text-[11px] pt-1 border-t border-slate-800\">\n        <span className=\"text-slate-400\">양자 위상 간섭 (Phase Interference)</span>\n        <input type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\" value={phase} onChange={e => setPhase(parseFloat(e.target.value))} className=\"w-24 accent-purple-500 cursor-pointer\" />\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 2. Multi-Tier Defect Sankey Cascade (계단형 불량 전이 캐스케이드)\n// ========================================================================="
},
{
  "id": "viz-defect-sankey-cascade",
  "name": "공정 단계별 누적 수율 손실 캐스케이드 (Multi-Stage Defect Yield Cascade)",
  "category": "charts",
  "tags": ["yield", "cascade", "sankey", "defect", "수율", "손실", "캐스케이드", "공정"],
  "description": "다단계 제조 공정 진행 중 발생하는 누적 불량과 단계별 수율 감쇠를 계단형 캐스케이드 바 그래프로 시각화.",
  "complexity": "Medium",
  "dependencies": ["lucide-react"],
  "previewType": "viz-defect-sankey-cascade",
  "aiPromptGuidance": "5단계 공정별 수율 감쇠와 불량 전이 손실을 계단식 캐스케이드 차트로 인터랙티브하게 구현하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const DefectSankeyCascadeDemo: React.FC = () => {\n  const [selectedStage, setSelectedStage] = useState<string | null>(null);\n\n  const stages = [\n    { name: '투입 원자재', loss: '0%', yield: '100%', color: '#3b82f6', h: 90 },\n    { name: '사출/가공 공정', loss: '-1.4%', yield: '98.6%', color: '#06b6d4', h: 78 },\n    { name: '표면 도금/열처리', loss: '-0.8%', yield: '97.8%', color: '#10b981', h: 70 },\n    { name: '정밀 센서 본딩', loss: '-0.5%', yield: '97.3%', color: '#f59e0b', h: 64 },\n    { name: '최종 출하 합격', loss: '양품', yield: '97.3%', color: '#ec4899', h: 64 },\n  ];\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Layers className=\"w-4 h-4 text-cyan-400\" />\n          <h4 className=\"text-xs font-bold text-white\">공정 단계별 누적 수율 손실 캐스케이드 (Yield Cascade)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono\">5-Stages</span>\n      </div>\n\n      <div className=\"h-36 flex items-end justify-between gap-2 p-2 bg-slate-950/60 rounded-lg border border-slate-800\">\n        {stages.map((st, i) => (\n          <div\n            key={i}\n            onMouseEnter={() => setSelectedStage(st.name)}\n            onMouseLeave={() => setSelectedStage(null)}\n            className=\"flex-1 flex flex-col items-center gap-1 cursor-pointer group\"\n          >\n            <span className=\"text-[9px] font-mono text-cyan-300 font-bold\">{st.yield}</span>\n            <div\n              style={{ height: `${st.h}%`, backgroundColor: st.color }}\n              className={`w-full rounded-t-lg transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:brightness-125 shadow-lg`}\n            />\n            <span className=\"text-[9px] text-slate-400 truncate w-full text-center\">{st.name.split(' ')[0]}</span>\n          </div>\n        ))}\n      </div>\n\n      <div className=\"p-2 rounded bg-slate-800/60 text-[11px] text-slate-300 flex justify-between font-mono\">\n        <span>선택 공정: {selectedStage || '공정 컬럼에 마우스를 올려보세요'}</span>\n        <span className=\"text-emerald-400 font-bold\">최종 양품률: 97.3%</span>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 3. 3D Gyroscope Inertial Orientation Horizon (인공수평 자이로스코프)\n// ========================================================================="
},
{
  "id": "sensor-gyroscope-inertial-horizon",
  "name": "항공/AGV 관성 자세 인공수평계 (Attitude Gyro Horizon)",
  "category": "stats",
  "tags": ["gyro", "horizon", "ahrs", "inertial", "자이로", "인공수평", "관성", "자세"],
  "description": "AGV 무인이송로봇 및 항공체의 6-DOF 자이로스코프 피치(Pitch) 및 롤(Roll) 각도를 실시간 인공수평계로 디스플레이.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "sensor-gyroscope-inertial-horizon",
  "aiPromptGuidance": "Pitch/Roll 각도 변환이 적용된 항공 인공수평계 HUD 게이지를 인터랙티브하게 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const GyroscopeInertialHorizonDemo: React.FC = () => {\n  const [pitch, setPitch] = useState<number>(12); // -30 to 30\n  const [roll, setRoll] = useState<number>(-8);   // -45 to 45\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Compass className=\"w-4 h-4 text-emerald-400\" />\n          <h4 className=\"text-xs font-bold text-white\">항공/AGV 관성 자세 인공수평계 (Attitude Gyro Horizon)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono\">AHRS 6-DOF</span>\n      </div>\n\n      <div className=\"flex justify-center py-1\">\n        <div className=\"relative w-40 h-40 rounded-full border-4 border-slate-800 bg-slate-950 overflow-hidden shadow-inner flex items-center justify-center\">\n          {/* Artificial Horizon Pitch/Roll Disc */}\n          <div\n            style={{\n              transform: `rotate(${roll}deg) translateY(${pitch * 1.5}px)`,\n              transition: 'transform 0.1s ease-out'\n            }}\n            className=\"absolute w-64 h-64 flex flex-col\"\n          >\n            {/* Sky (Blue) */}\n            <div className=\"flex-1 bg-sky-600/80 flex items-end justify-center pb-2\">\n              <div className=\"w-16 h-0.5 bg-white/60\" />\n            </div>\n            {/* Ground (Brown/Dark) */}\n            <div className=\"flex-1 bg-amber-900/80 flex items-start justify-center pt-2\">\n              <div className=\"w-16 h-0.5 bg-white/60\" />\n            </div>\n          </div>\n\n          {/* Center Airplane Fixed Reticle */}\n          <div className=\"absolute z-10 flex items-center gap-1 pointer-events-none\">\n            <div className=\"w-8 h-1 bg-amber-400 shadow-[0_0_8px_#f59e0b]\" />\n            <div className=\"w-2 h-2 rounded-full bg-amber-400\" />\n            <div className=\"w-8 h-1 bg-amber-400 shadow-[0_0_8px_#f59e0b]\" />\n          </div>\n\n          {/* Pitch Degree Lines */}\n          <div className=\"absolute inset-0 border border-white/20 rounded-full pointer-events-none\" />\n        </div>\n      </div>\n\n      <div className=\"grid grid-cols-2 gap-2 text-[10px] font-mono\">\n        <div className=\"p-1.5 rounded bg-slate-800/60 border border-slate-700/50 flex justify-between\">\n          <span className=\"text-slate-400\">PITCH (피치각)</span>\n          <span className=\"text-cyan-400 font-bold\">{pitch}°</span>\n        </div>\n        <div className=\"p-1.5 rounded bg-slate-800/60 border border-slate-700/50 flex justify-between\">\n          <span className=\"text-slate-400\">ROLL (롤링각)</span>\n          <span className=\"text-emerald-400 font-bold\">{roll}°</span>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 4. Acoustic Audio Spectrogram FFT Waterfall (음향 주파수 스펙트로그램)\n// ========================================================================="
},
{
  "id": "sensor-acoustic-spectrogram-waterfall",
  "name": "설비 음향 주파수 스펙트로그램 워터폴 (FFT Acoustic Spectrogram)",
  "category": "charts",
  "tags": ["fft", "acoustic", "spectrogram", "waterfall", "스펙트로그램", "음향", "진동", "고속푸리에"],
  "description": "회전 설비의 이상 진동 및 베어링 마모 주파수를 실시간 FFT 20Hz~20kHz 히트맵 에너지 워터폴로 시각화.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "sensor-acoustic-spectrogram-waterfall",
  "aiPromptGuidance": "FFT 음향 스펙트로그램 주파수 대역별 에너지 밴드를 실시간 워터폴 히트맵으로 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const AcousticSpectrogramDemo: React.FC = () => {\n  const [peakFreq] = useState<string>('4.2 kHz (베어링 마모)');\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Wind className=\"w-4 h-4 text-rose-400\" />\n          <h4 className=\"text-xs font-bold text-white\">설비 음향 주파수 스펙트로그램 (FFT Acoustic Waterfall)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono\">20Hz ~ 20kHz</span>\n      </div>\n\n      <div className=\"h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative overflow-hidden flex flex-col justify-between\">\n        {/* Waterfall Horizontal Energy Bands */}\n        {Array.from({ length: 6 }).map((_, i) => (\n          <div key={i} className=\"flex gap-1 h-3.5 items-center\">\n            {Array.from({ length: 18 }).map((_, j) => {\n              const energy = Math.sin(i * 1.5 + j * 0.8) * 0.5 + 0.5;\n              const bg = energy > 0.8 ? '#f43f5e' : energy > 0.5 ? '#f59e0b' : energy > 0.2 ? '#06b6d4' : '#1e293b';\n              return (\n                <div key={j} style={{ backgroundColor: bg }} className=\"flex-1 h-full rounded-sm opacity-90 transition-colors\" />\n              );\n            })}\n          </div>\n        ))}\n        <div className=\"text-[9px] font-mono text-slate-500 flex justify-between pt-1\">\n          <span>0 kHz</span>\n          <span>10 kHz</span>\n          <span>20 kHz</span>\n        </div>\n      </div>\n\n      <div className=\"p-2 rounded bg-slate-800/60 text-[11px] text-slate-300 flex justify-between font-mono\">\n        <span className=\"text-slate-400\">이상 진동 검출:</span>\n        <span className=\"text-rose-400 font-bold\">{peakFreq}</span>\n      </div>\n    </div>\n  );\n};"
},
{
  "id": "qc-six-sigma-dynamic-gauge",
  "name": "6시그마 동적 공차 게이지 HUD (Six Sigma Dynamic Tolerance HUD)",
  "category": "stats",
  "tags": ["six-sigma", "tolerance", "gauge", "hud", "6시그마", "공차", "게이지", "품질"],
  "description": "초정밀 가공 치수의 LSL/USL 상하한 한계와 목표치 대비 실시간 편차를 동적 공차 게이지로 표시.",
  "complexity": "Medium",
  "dependencies": ["lucide-react"],
  "previewType": "qc-six-sigma-dynamic-gauge",
  "aiPromptGuidance": "LSL/USL 기준선 및 동적 타겟 니들이 포함된 6시그마 공차 HUD 게이지를 제작하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const SixSigmaDynamicGaugeDemo: React.FC = () => {\n  const [val, setVal] = useState<number>(0.003); // -0.015 to +0.015\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Crosshair className=\"w-4 h-4 text-emerald-400\" />\n          <h4 className=\"text-xs font-bold text-white\">6시그마 동적 공차 게이지 (Six Sigma Tolerance HUD)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono\">±0.010 mm USL</span>\n      </div>\n\n      <div className=\"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-3\">\n        {/* Horizontal Deviation Scale */}\n        <div className=\"relative h-6 flex items-center\">\n          <div className=\"absolute inset-x-0 h-2 rounded-full bg-slate-800 flex overflow-hidden\">\n            <div className=\"w-1/4 bg-rose-500/40\" />\n            <div className=\"w-1/2 bg-emerald-500/40\" />\n            <div className=\"w-1/4 bg-rose-500/40\" />\n          </div>\n          <div className=\"absolute left-1/2 -translate-x-1/2 w-0.5 h-5 bg-white\" />\n          {/* Moving Needle */}\n          <div \n            style={{ left: `${50 + (val / 0.015) * 50}%` }}\n            className=\"absolute -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white shadow-[0_0_10px_#10b981] transition-all\"\n          />\n        </div>\n        <div className=\"flex justify-between text-[9px] font-mono text-slate-500\">\n          <span>-0.015 (LSL)</span>\n          <span className=\"text-white\">Target 0.000</span>\n          <span>+0.015 (USL)</span>\n        </div>\n      </div>\n\n      <div className=\"flex items-center justify-between text-[11px]\">\n        <span className=\"text-slate-400\">실시간 치수 편차:</span>\n        <span className={`font-mono font-bold ${Math.abs(val) > 0.01 ? 'text-rose-400' : 'text-emerald-400'}`}>\n          {val > 0 ? `+${val.toFixed(4)}` : val.toFixed(4)} mm\n        </span>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 6. Laser Caliper Micron Micrometer HUD (레이저 마이크로미터 HUD)\n// ========================================================================="
},
{
  "id": "sensor-laser-micrometer-caliper",
  "name": "레이저 비접촉 캘리퍼 마이크로미터 (Laser Caliper Micron HUD)",
  "category": "stats",
  "tags": ["laser", "micrometer", "caliper", "precision", "레이저", "마이크로미터", "정밀측정"],
  "description": "0.1μm급 He-Ne 광학 레이저 빔 비접촉 치수 측정 HUD와 실시간 분해능 검증기.",
  "complexity": "Medium",
  "dependencies": ["lucide-react"],
  "previewType": "sensor-laser-micrometer-caliper",
  "aiPromptGuidance": "레이저 빔 펄스 애니메이션과 0.1um 측정값을 출력하는 디지털 마이크로미터 HUD를 구현하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const LaserMicrometerDemo: React.FC = () => {\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Radio className=\"w-4 h-4 text-cyan-400 animate-pulse\" />\n          <h4 className=\"text-xs font-bold text-white\">레이저 비접촉 캘리퍼 마이크로미터 (Laser Caliper HUD)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono\">0.1 μm Precision</span>\n      </div>\n\n      <div className=\"relative h-28 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center overflow-hidden\">\n        {/* Laser Beam Lines */}\n        <div className=\"absolute inset-x-4 h-0.5 bg-rose-500 shadow-[0_0_12px_#f43f5e] animate-pulse\" />\n        <div className=\"relative z-10 w-24 h-16 rounded bg-slate-800 border-2 border-cyan-400/80 flex items-center justify-center font-mono text-cyan-300 text-xs font-bold shadow-lg\">\n          24.084 mm\n        </div>\n        <div className=\"absolute top-2 left-3 font-mono text-[9px] text-slate-500\">BEAM FREQ: 632.8 nm He-Ne</div>\n      </div>\n\n      <div className=\"flex justify-between text-[11px] font-mono text-slate-300\">\n        <span className=\"text-slate-400\">광학 분해능:</span>\n        <span className=\"text-cyan-400 font-bold\">±0.0001 mm PASS</span>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 7. Thermal Infrared Pallet Matrix (열화상 적외선 센서 팔레트)\n// ========================================================================="
},
{
  "id": "sensor-thermal-infrared-matrix",
  "name": "열화상 적외선 스팟 매트릭스 (Infrared Thermal Heatmap Grid)",
  "category": "dashboards",
  "tags": ["thermal", "infrared", "matrix", "heatmap", "열화상", "적외선", "핫스팟", "온도"],
  "description": "설비 주요 발열 부위 5x5 적외선 스팟 센서 어레이의 실시간 온도 분포와 과열 핫스팟 경보.",
  "complexity": "Medium",
  "dependencies": ["lucide-react"],
  "previewType": "sensor-thermal-infrared-matrix",
  "aiPromptGuidance": "5x5 적외선 온도 센서 매트릭스와 동적 히트 컬러 매핑을 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const ThermalInfraredPalletDemo: React.FC = () => {\n  const grid = [\n    [24, 25, 26, 28, 26],\n    [25, 38, 52, 39, 27],\n    [26, 54, 78, 55, 28],\n    [25, 37, 51, 38, 26],\n    [24, 25, 26, 27, 25],\n  ];\n\n  const getHeatColor = (t: number) => {\n    if (t > 70) return '#ef4444';\n    if (t > 50) return '#f59e0b';\n    if (t > 30) return '#06b6d4';\n    return '#1e293b';\n  };\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Zap className=\"w-4 h-4 text-amber-400\" />\n          <h4 className=\"text-xs font-bold text-white\">열화상 적외선 스팟 매트릭스 (Infrared Thermal Matrix)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono\">5x5 Array</span>\n      </div>\n\n      <div className=\"grid grid-cols-5 gap-1.5 p-2 bg-slate-950 rounded-lg border border-slate-800\">\n        {grid.flat().map((t, idx) => (\n          <div\n            key={idx}\n            style={{ backgroundColor: getHeatColor(t) }}\n            className=\"h-7 rounded flex items-center justify-center font-mono text-[10px] font-bold text-white shadow-sm transition-transform hover:scale-110 cursor-pointer\"\n          >\n            {t}°\n          </div>\n        ))}\n      </div>\n\n      <div className=\"flex justify-between text-[11px] font-mono\">\n        <span className=\"text-slate-400\">핫스팟 최고온도:</span>\n        <span className=\"text-rose-400 font-bold\">78.0°C (경고)</span>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 8. Multi-Thread Worker Pool Threadpool Monitor (워커 스레드풀 HUD)\n// ========================================================================="
},
{
  "id": "system-worker-pool-thread-monitor",
  "name": "멀티스레드 워커 풀 실시간 관제 (Worker Threadpool HUD)",
  "category": "dashboards",
  "tags": ["thread", "worker", "multithread", "cpu", "스레드", "워커풀", "동시성", "모니터링"],
  "description": "AI 추론, FFT 주파수 변환, OPC-UA 통신 등 멀티스레드 워커들의 실시간 부하율과 코어 점유율 관제.",
  "complexity": "Medium",
  "dependencies": ["lucide-react"],
  "previewType": "system-worker-pool-thread-monitor",
  "aiPromptGuidance": "멀티스레드 워커 작업 분배 상태와 코어별 로드 프로그레스 바를 HUD 스타일로 구현하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const WorkerPoolThreadMonitorDemo: React.FC = () => {\n  const threads = [\n    { id: 'T-01', job: 'Vision AI Inference', load: 88, color: 'bg-emerald-500' },\n    { id: 'T-02', job: 'FFT Audio Transform', load: 64, color: 'bg-cyan-500' },\n    { id: 'T-03', job: 'OPC-UA Telemetry Pub', load: 92, color: 'bg-fuchsia-500' },\n    { id: 'T-04', job: 'Database Batch Sync', load: 45, color: 'bg-violet-500' },\n  ];\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Cpu className=\"w-4 h-4 text-fuchsia-400\" />\n          <h4 className=\"text-xs font-bold text-white\">멀티스레드 워커 풀 관제 (Worker Threadpool HUD)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 font-mono\">4-Cores Active</span>\n      </div>\n\n      <div className=\"space-y-2\">\n        {threads.map(t => (\n          <div key={t.id} className=\"p-2 rounded bg-slate-950 border border-slate-800 space-y-1\">\n            <div className=\"flex justify-between text-[10px] font-mono text-slate-300\">\n              <span>{t.id}: {t.job}</span>\n              <span className=\"font-bold\">{t.load}%</span>\n            </div>\n            <div className=\"w-full bg-slate-800 h-1.5 rounded-full overflow-hidden\">\n              <div className={`h-full ${t.color}`} style={{ width: `${t.load}%` }} />\n            </div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};"
},
{
  "id": "sensor-lidar-pointcloud-radar",
  "name": "360° LiDAR 포인트클라우드 레이더 (360° LiDAR Pointcloud HUD)",
  "category": "charts",
  "tags": ["lidar", "radar", "pointcloud", "autonomous", "라이다", "포인트클라우드", "레이더", "장애물"],
  "description": "자율주행 및 AGV 로봇을 위한 360도 레이저 스캐닝 빔과 거리 동심원 장애물 반사점 레이더 HUD.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "sensor-lidar-pointcloud-radar",
  "aiPromptGuidance": "360도 회전 레이저 스윕과 장애물 반사 강도를 Canvas 2D 레이더로 시각화하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const LidarPointcloudRadarDemo: React.FC = () => {\n  const canvasRef = useRef<HTMLCanvasElement | null>(null);\n  const [rpm, setRpm] = useState<number>(600);\n  const [obstacleCount] = useState<number>(14);\n\n  useEffect(() => {\n    const canvas = canvasRef.current;\n    if (!canvas) return;\n    const ctx = canvas.getContext('2d');\n    if (!ctx) return;\n\n    let animId: number;\n    let angle = 0;\n    \n    // Fixed simulated obstacle positions\n    const obstacles = Array.from({ length: obstacleCount }).map((_, i) => ({\n      theta: (i * (Math.PI * 2) / obstacleCount) + (Math.random() * 0.4 - 0.2),\n      dist: 35 + Math.random() * 45,\n      intensity: 0.5 + Math.random() * 0.5\n    }));\n\n    const render = () => {\n      angle = (angle + (rpm / 60) * 0.05) % (Math.PI * 2);\n      \n      ctx.fillStyle = 'rgba(5, 10, 20, 0.25)';\n      ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n      const cx = canvas.width / 2;\n      const cy = canvas.height / 2;\n      const maxR = 75;\n\n      // Draw concentric radar range rings\n      ctx.lineWidth = 1;\n      [25, 50, 75].forEach((r, idx) => {\n        ctx.strokeStyle = idx === 2 ? 'rgba(56, 189, 248, 0.4)' : 'rgba(56, 189, 248, 0.15)';\n        ctx.beginPath();\n        ctx.arc(cx, cy, r, 0, Math.PI * 2);\n        ctx.stroke();\n      });\n\n      // Crosshairs\n      ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';\n      ctx.beginPath();\n      ctx.moveTo(cx - maxR, cy); ctx.lineTo(cx + maxR, cy);\n      ctx.moveTo(cx, cy - maxR); ctx.lineTo(cx, cy + maxR);\n      ctx.stroke();\n\n      // Sweeping Laser Beam\n      const sweepX = cx + Math.cos(angle) * maxR;\n      const sweepY = cy + Math.sin(angle) * maxR;\n      const grad = ctx.createRadialGradient(cx, cy, 5, cx, cy, maxR);\n      grad.addColorStop(0, 'rgba(6, 182, 212, 0.8)');\n      grad.addColorStop(1, 'rgba(6, 182, 212, 0.0)');\n      \n      ctx.strokeStyle = 'rgba(6, 182, 212, 0.8)';\n      ctx.lineWidth = 1.5;\n      ctx.beginPath();\n      ctx.moveTo(cx, cy);\n      ctx.lineTo(sweepX, sweepY);\n      ctx.stroke();\n\n      // Obstacle Return Points\n      obstacles.forEach(obs => {\n        const ox = cx + Math.cos(obs.theta) * obs.dist;\n        const oy = cy + Math.sin(obs.theta) * obs.dist;\n        \n        // Intensity flash if beam passes near\n        const dAngle = Math.abs((angle - obs.theta + Math.PI * 2) % (Math.PI * 2));\n        const isHit = dAngle < 0.2;\n        \n        ctx.fillStyle = isHit ? '#f43f5e' : `rgba(56, 189, 248, ${obs.intensity})`;\n        ctx.shadowColor = isHit ? '#f43f5e' : '#38bdf8';\n        ctx.shadowBlur = isHit ? 10 : 3;\n        ctx.beginPath();\n        ctx.arc(ox, oy, isHit ? 3.5 : 2, 0, Math.PI * 2);\n        ctx.fill();\n        ctx.shadowBlur = 0;\n      });\n\n      animId = requestAnimationFrame(render);\n    };\n\n    render();\n    return () => cancelAnimationFrame(animId);\n  }, [rpm, obstacleCount]);\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Disc className=\"w-4 h-4 text-cyan-400 animate-spin\" style={{ animationDuration: '4s' }} />\n          <h4 className=\"text-xs font-bold text-white\">360° LiDAR 포인트클라우드 레이더 (LiDAR Pointcloud HUD)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono\">16-Channel 100m</span>\n      </div>\n\n      <div className=\"flex justify-center\">\n        <canvas ref={canvasRef} width={280} height={180} className=\"w-full max-w-[280px] h-40 bg-slate-950 rounded-lg border border-slate-800\" />\n      </div>\n\n      <div className=\"flex items-center justify-between text-[11px] pt-1 border-t border-slate-800 font-mono\">\n        <span className=\"text-slate-400\">스캐너 RPM: {rpm}</span>\n        <input type=\"range\" min=\"300\" max=\"1200\" step=\"50\" value={rpm} onChange={e => setRpm(parseInt(e.target.value))} className=\"w-24 accent-cyan-500 cursor-pointer\" />\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 2. Kinetic Tension Spring-Mass Damper Simulator (탄성-질량-감쇠 조화진동자)\n// ========================================================================="
},
{
  "id": "math-kinetic-tension-spring",
  "name": "동적 조화 진동자 물리 시뮬레이터 (Spring-Mass-Damper ODE)",
  "category": "charts",
  "tags": ["physics", "spring", "oscillation", "hooke", "조화진동", "용수철", "감쇠", "물리"],
  "description": "훅의 법칙(Hooke's Law) 질량-용수철-감쇠기 2차 미분방정식을 실시간 수치 해석하여 용수철 코일과 질량체의 진동을 렌더링.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "math-kinetic-tension-spring",
  "aiPromptGuidance": "동적 용수철 코일 SVG 변형과 감쇠 계수 조절 슬라이더가 포함된 물리 시뮬레이터를 제작하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const KineticTensionSpringDiagramDemo: React.FC = () => {\n  const [damping, setDamping] = useState<number>(0.15); // 0.01 ~ 0.5\n  const [massPos, setMassPos] = useState<number>(30);\n\n  useEffect(() => {\n    let vel = 0;\n    let pos = 40;\n    let animId: number;\n    const k = 0.08; // spring constant\n\n    const step = () => {\n      const force = -k * pos - damping * vel;\n      vel += force;\n      pos += vel;\n      setMassPos(pos);\n      animId = requestAnimationFrame(step);\n    };\n\n    animId = requestAnimationFrame(step);\n    return () => cancelAnimationFrame(animId);\n  }, [damping]);\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Activity className=\"w-4 h-4 text-emerald-400\" />\n          <h4 className=\"text-xs font-bold text-white\">동적 조화 진동자 물리 시뮬레이터 (Spring-Mass Damper)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono\">Hooke's Law ODE</span>\n      </div>\n\n      <div className=\"h-32 bg-slate-950 rounded-lg p-3 border border-slate-800 relative flex items-center justify-center overflow-hidden\">\n        {/* Wall */}\n        <div className=\"absolute left-4 top-4 bottom-4 w-3 bg-slate-700 rounded border-r-2 border-slate-500\" />\n        \n        {/* Spring Coil representation */}\n        <svg className=\"w-full h-16 ml-6 mr-14\">\n          <path\n            d={`M 10 32 Q ${30 + massPos * 0.4} 12, ${50 + massPos * 0.6} 32 T ${90 + massPos * 0.8} 32 T ${130 + massPos * 1.0} 32 L ${160 + massPos} 32`}\n            fill=\"none\"\n            stroke=\"#10b981\"\n            strokeWidth=\"3\"\n            strokeLinecap=\"round\"\n          />\n        </svg>\n\n        {/* Mass Block */}\n        <div \n          style={{ transform: `translateX(${massPos}px)` }}\n          className=\"absolute w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 border border-emerald-300 shadow-[0_0_15px_#10b981] flex flex-col items-center justify-center text-white font-mono text-[10px] font-bold\"\n        >\n          <span>2.5 kg</span>\n        </div>\n      </div>\n\n      <div className=\"flex items-center justify-between text-[11px] font-mono\">\n        <span className=\"text-slate-400\">감쇠 계수 (Damping ζ): {damping.toFixed(2)}</span>\n        <input type=\"range\" min=\"0.02\" max=\"0.4\" step=\"0.02\" value={damping} onChange={e => setDamping(parseFloat(e.target.value))} className=\"w-24 accent-emerald-500 cursor-pointer\" />\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 3. Dynamic Voronoi Cell Tessellation (동적 보로노이 셀 응력 다각형)\n// ========================================================================="
},
{
  "id": "math-dynamic-voronoi-tessellation",
  "name": "동적 보로노이 셀 응력 다각형 (Voronoi Stress Tessellation)",
  "category": "charts",
  "tags": ["voronoi", "tessellation", "stress", "fea", "보로노이", "테셀레이션", "응력", "유한요소"],
  "description": "소재 내부 입자 결정립(Grain)의 공간 분할과 외력에 따른 국소 응력 집중 현상을 보로노이 다각형 셀로 시각화.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "math-dynamic-voronoi-tessellation",
  "aiPromptGuidance": "다각형 보로노이 셀과 국소 응력 강도 컬러 히트맵을 SVG로 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const VoronoiCellTessellationDemo: React.FC = () => {\n  const [cells] = useState([\n    { id: 'C1', x: 20, y: 30, stress: 'High (84 MPa)', color: '#ef4444' },\n    { id: 'C2', x: 70, y: 25, stress: 'Normal (42 MPa)', color: '#10b981' },\n    { id: 'C3', x: 45, y: 65, stress: 'Warning (68 MPa)', color: '#f59e0b' },\n    { id: 'C4', x: 80, y: 80, stress: 'Nominal (28 MPa)', color: '#06b6d4' },\n    { id: 'C5', x: 15, y: 75, stress: 'Nominal (18 MPa)', color: '#8b5cf6' },\n  ]);\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Layers className=\"w-4 h-4 text-amber-400\" />\n          <h4 className=\"text-xs font-bold text-white\">동적 보로노이 셀 응력 다각형 (Voronoi Stress Tessellation)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono\">FEA Delaunay</span>\n      </div>\n\n      <div className=\"h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative flex items-center justify-center\">\n        {/* SVG Voronoi Polygons */}\n        <svg className=\"w-full h-full\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n          <polygon points=\"0,0 50,0 35,45 0,55\" fill=\"rgba(239, 68, 68, 0.25)\" stroke=\"#ef4444\" strokeWidth=\"0.8\" />\n          <polygon points=\"50,0 100,0 100,60 55,45 35,45\" fill=\"rgba(16, 185, 129, 0.2)\" stroke=\"#10b981\" strokeWidth=\"0.8\" />\n          <polygon points=\"35,45 55,45 65,100 25,100\" fill=\"rgba(245, 158, 11, 0.25)\" stroke=\"#f59e0b\" strokeWidth=\"0.8\" />\n          <polygon points=\"0,55 35,45 25,100 0,100\" fill=\"rgba(139, 92, 246, 0.2)\" stroke=\"#8b5cf6\" strokeWidth=\"0.8\" />\n          <polygon points=\"55,45 100,60 100,100 65,100\" fill=\"rgba(6, 182, 212, 0.2)\" stroke=\"#06b6d4\" strokeWidth=\"0.8\" />\n          \n          {/* Seed Points */}\n          {cells.map(c => (\n            <circle key={c.id} cx={c.x} cy={c.y} r=\"2.5\" fill={c.color} />\n          ))}\n        </svg>\n      </div>\n\n      <div className=\"p-2 rounded bg-slate-800/60 text-[11px] text-slate-300 flex justify-between font-mono\">\n        <span>최대 구조 응력점: Cell C1</span>\n        <span className=\"text-rose-400 font-bold\">84.2 MPa CRITICAL</span>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 4. Interactive Fourier Wave Synthesis (푸리에 고조파 합성 분석기)\n// ========================================================================="
},
{
  "id": "math-fourier-wave-synthesis",
  "name": "푸리에 고조파 합성 분석기 (Harmonic Fourier Wave Synthesizer)",
  "category": "charts",
  "tags": ["fourier", "harmonics", "synthesis", "wave", "푸리에", "고조파", "파형합성", "정현파"],
  "description": "기본파(Fundamental)에 N차 고조파 정현파들을 중첩(Superposition)하여 구형파/삼각파를 합성하는 실시간 푸리에 수식 시각화.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "math-fourier-wave-synthesis",
  "aiPromptGuidance": "N=1,3,5,7 고조파 합성 계수를 인터랙티브하게 선택하여 복합 파형 곡선을 생성하는 컴포넌트를 제작하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const FourierWaveSynthSpectraDemo: React.FC = () => {\n  const [harmonics, setHarmonics] = useState<number>(3); // 1 to 7\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Waves className=\"w-4 h-4 text-violet-400\" />\n          <h4 className=\"text-xs font-bold text-white\">푸리에 고조파 합성 분석기 (Harmonic Fourier Wave Synthesizer)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 font-mono\">Σ sin(nωt)/n</span>\n      </div>\n\n      <div className=\"h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 flex items-center justify-center\">\n        <svg className=\"w-full h-full\" viewBox=\"0 0 300 100\">\n          <path\n            d={Array.from({ length: 60 }).map((_, i) => {\n              const x = i * 5;\n              const t = (i / 60) * Math.PI * 4;\n              let y = 50;\n              for (let h = 1; h <= harmonics; h += 2) {\n                y += (Math.sin(h * t) / h) * 35;\n              }\n              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;\n            }).join(' ')}\n            fill=\"none\"\n            stroke=\"#a78bfa\"\n            strokeWidth=\"2.5\"\n            strokeLinecap=\"round\"\n          />\n        </svg>\n      </div>\n\n      <div className=\"flex items-center justify-between text-[11px] font-mono\">\n        <span className=\"text-slate-400\">합성 차수 (Harmonics N): {harmonics}</span>\n        <div className=\"flex gap-1.5\">\n          {[1, 3, 5, 7].map(n => (\n            <button\n              key={n}\n              onClick={() => setHarmonics(n)}\n              className={`px-2 py-0.5 rounded text-[10px] font-bold ${harmonics === n ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-400'}`}\n            >\n              N={n}\n            </button>\n          ))}\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 5. Active Magnetic Levitation PID Controller (자기부상 능동 PID 제어)\n// ========================================================================="
},
{
  "id": "control-maglev-pid-loop",
  "name": "자기부상 능동 PID 제어 루프 (MagLev PID Stabilizer)",
  "category": "dashboards",
  "tags": ["pid", "maglev", "control", "feedback", "자기부상", "제어기", "피드백", "전자석"],
  "description": "전자석 자력과 중력 사이의 불안정한 평형점을 10kHz 고속 피드백 루프로 안정화하는 능동 자기부상 제어기 HUD.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "control-maglev-pid-loop",
  "aiPromptGuidance": "전자석 코일 발열, 레이저 변위 센서, 부상 구체의 인터랙티브한 PID 안정화 시뮬레이터를 구현하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const MagneticLevitationPidLoopDemo: React.FC = () => {\n  const [kp, setKp] = useState<number>(1.8);\n  const [isLocked] = useState<boolean>(true);\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Magnet className=\"w-4 h-4 text-rose-400\" />\n          <h4 className=\"text-xs font-bold text-white\">자기부상 능동 PID 제어 루프 (MagLev PID Stabilizer)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono\">10 kHz PWM</span>\n      </div>\n\n      <div className=\"h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative flex flex-col items-center justify-between\">\n        {/* Electromagnet Core */}\n        <div className=\"w-20 h-6 rounded-b-lg bg-gradient-to-r from-slate-700 via-rose-600 to-slate-700 border border-rose-400 shadow-[0_0_12px_#f43f5e] flex items-center justify-center font-mono text-[9px] text-white font-bold\">\n          COIL: 2.4A\n        </div>\n\n        {/* Magnetic Field Glow */}\n        <div className=\"w-16 h-12 rounded-full bg-rose-500/15 blur-sm\" />\n\n        {/* Levitating Steel Ball */}\n        <div className=\"w-8 h-8 rounded-full bg-gradient-to-br from-slate-100 to-slate-400 border-2 border-white shadow-[0_0_15px_#38bdf8] animate-bounce\" style={{ animationDuration: '2s' }} />\n\n        {/* Laser Photo-Sensor Receiver */}\n        <div className=\"w-full border-t border-dashed border-cyan-500/40 flex justify-between px-3 text-[9px] font-mono text-cyan-400\">\n          <span>OPT-RX</span>\n          <span>AIR GAP: 12.04 mm</span>\n        </div>\n      </div>\n\n      <div className=\"flex items-center justify-between text-[11px] font-mono\">\n        <span className=\"text-slate-400\">비례 이득 (Kp Gain): {kp}</span>\n        <input type=\"range\" min=\"0.5\" max=\"3.0\" step=\"0.1\" value={kp} onChange={e => setKp(parseFloat(e.target.value))} className=\"w-24 accent-rose-500 cursor-pointer\" />\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 6. Chemical Reaction Kinetics ODE Solver (화학 반응 동역학 농도 곡선)\n// ========================================================================="
},
{
  "id": "science-reaction-kinetics-ode",
  "name": "화학 반응 동역학 ODE 농도 곡선 (Arrhenius Reaction Kinetics)",
  "category": "charts",
  "tags": ["chemistry", "kinetics", "ode", "arrhenius", "화학반응", "반응속도", "아레니우스", "농도"],
  "description": "반응물 A+B가 생성물 C로 전환되는 아레니우스 반응 속도론 미분방정식 해를 실시간 농도 변화 곡선으로 표현.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "science-reaction-kinetics-ode",
  "aiPromptGuidance": "반응물 감쇠 및 생성물 증가를 나타내는 화학 동역학 농도 곡선 차트를 SVG로 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const ChemicalReactionKineticsDemo: React.FC = () => {\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Zap className=\"w-4 h-4 text-amber-400\" />\n          <h4 className=\"text-xs font-bold text-white\">화학 반응 동역학 ODE 농도 곡선 (Arrhenius Reaction Kinetics)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono\">A + B ➔ C</span>\n      </div>\n\n      <div className=\"h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative flex items-center justify-center\">\n        <svg className=\"w-full h-full\" viewBox=\"0 0 300 100\">\n          {/* Reagent A curve */}\n          <path d=\"M 10 15 Q 100 80 290 85\" fill=\"none\" stroke=\"#ef4444\" strokeWidth=\"2\" />\n          {/* Reagent B curve */}\n          <path d=\"M 10 30 Q 120 75 290 80\" fill=\"none\" stroke=\"#f59e0b\" strokeWidth=\"2\" strokeDasharray=\"4 2\" />\n          {/* Product C curve */}\n          <path d=\"M 10 85 Q 100 20 290 15\" fill=\"none\" stroke=\"#10b981\" strokeWidth=\"2.5\" />\n        </svg>\n        <div className=\"absolute top-2 right-3 font-mono text-[9px] space-y-0.5\">\n          <div className=\"text-rose-400 font-bold\">■ Reagent [A]</div>\n          <div className=\"text-amber-400 font-bold\">■ Reagent [B]</div>\n          <div className=\"text-emerald-400 font-bold\">■ Product [C]</div>\n        </div>\n      </div>\n\n      <div className=\"p-2 rounded bg-slate-800/60 text-[11px] text-slate-300 flex justify-between font-mono\">\n        <span className=\"text-slate-400\">반응 전환 수율:</span>\n        <span className=\"text-emerald-400 font-bold\">94.8% (350K 평형)</span>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 7. Micro-Fluidic Lattice Boltzmann Streamline (격자 볼츠만 유체 와류)\n// ========================================================================="
},
{
  "id": "math-lattice-boltzmann-automata",
  "name": "격자 볼츠만 미세 유체 와류 시뮬레이터 (Lattice Boltzmann Streamline)",
  "category": "charts",
  "tags": ["fluid", "boltzmann", "vortex", "streamline", "유체", "볼츠만", "와류", "유선"],
  "description": "원기둥 장애물 후방에 발생하는 주기적 카르만 소용돌이(Kármán Vortex Street) 유선 흐름을 시각화.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "math-lattice-boltzmann-automata",
  "aiPromptGuidance": "장애물 후방 와류 펄스 유선과 무차원 수(Reynolds, Strouhal) 계측 HUD를 제작하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const CellularAutomataFluidDemo: React.FC = () => {\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Wind className=\"w-4 h-4 text-sky-400\" />\n          <h4 className=\"text-xs font-bold text-white\">격자 볼츠만 미세 유체 와류 (Lattice Boltzmann Streamline)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono\">Re = 2200 Vortex</span>\n      </div>\n\n      <div className=\"h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative flex items-center justify-center overflow-hidden\">\n        {/* Streamlines */}\n        {Array.from({ length: 7 }).map((_, i) => (\n          <div \n            key={i} \n            className=\"absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60\"\n            style={{ top: `${15 + i * 12}%`, animation: `pulse ${1.5 + i * 0.2}s infinite` }}\n          />\n        ))}\n        {/* Cylindrical Obstacle */}\n        <div className=\"relative z-10 w-10 h-10 rounded-full bg-slate-800 border-2 border-cyan-400 shadow-[0_0_12px_#06b6d4] flex items-center justify-center text-[9px] font-bold text-cyan-300\">\n          OBST\n        </div>\n      </div>\n\n      <div className=\"p-2 rounded bg-slate-800/60 text-[11px] text-slate-300 flex justify-between font-mono\">\n        <span className=\"text-slate-400\">카르만 와류 주파수:</span>\n        <span className=\"text-cyan-400 font-bold\">14.2 Hz (St = 0.21)</span>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 8. AI Neural Attention Tensor Slicer (신경망 어텐션 텐서 슬라이서)\n// ========================================================================="
},
{
  "id": "ai-neural-weight-matrix-tensor",
  "name": "신경망 어텐션 텐서 슬라이서 (Transformer Attention Tensor Slicer)",
  "category": "ai-widgets",
  "tags": ["tensor", "attention", "transformer", "neural", "텐서", "어텐션", "트랜스포머", "가중치"],
  "description": "32-Head 트랜스포머 언어/비전 모델의 레이어별 어텐션 가중치 매트릭스를 실시간 슬라이싱하여 시각화.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "ai-neural-weight-matrix-tensor",
  "aiPromptGuidance": "다중 레이어 슬라이더와 32채널 어텐션 가중치 컬러 매트릭스 그리드를 구현하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const NeuralWeightMatrixInspectorDemo: React.FC = () => {\n  const [layer, setLayer] = useState<number>(8);\n\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Cpu className=\"w-4 h-4 text-fuchsia-400\" />\n          <h4 className=\"text-xs font-bold text-white\">신경망 어텐션 텐서 슬라이서 (Transformer Attention Tensor)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 font-mono\">32-Heads 4K</span>\n      </div>\n\n      <div className=\"grid grid-cols-8 gap-1 p-2 bg-slate-950 rounded-lg border border-slate-800\">\n        {Array.from({ length: 32 }).map((_, idx) => {\n          const weight = Math.sin(idx * 0.5 + layer) * 0.5 + 0.5;\n          const bg = weight > 0.8 ? '#d946ef' : weight > 0.5 ? '#8b5cf6' : weight > 0.2 ? '#3b82f6' : '#1e293b';\n          return (\n            <div key={idx} style={{ backgroundColor: bg }} className=\"h-6 rounded-sm transition-colors cursor-pointer hover:scale-110\" />\n          );\n        })}\n      </div>\n\n      <div className=\"flex items-center justify-between text-[11px] font-mono\">\n        <span className=\"text-slate-400\">어텐션 레이어 (Layer {layer}/32)</span>\n        <input type=\"range\" min=\"1\" max=\"32\" step=\"1\" value={layer} onChange={e => setLayer(parseInt(e.target.value))} className=\"w-24 accent-fuchsia-500 cursor-pointer\" />\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 9. Cpk / Cp Statistical Quality Bell Curve (공정능력지수 정규분포 가우스 곡선)\n// ========================================================================="
},
{
  "id": "qc-cpk-process-capability-bell",
  "name": "공정능력지수 가우스 정규분포 곡선 (Cpk / Ppk Gaussian Bell)",
  "category": "charts",
  "tags": ["cpk", "process-capability", "gaussian", "normal-distribution", "공정능력", "정규분포", "가우스", "품질"],
  "description": "모집단 가공 데이터의 평균(μ)과 표준편차(σ), 상하한 규격(LSL/USL) 기준 Cpk 1.67 공정 적합성을 가우스 종형 곡선으로 분석.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "qc-cpk-process-capability-bell",
  "aiPromptGuidance": "정규분포 곡선 면적 채움과 LSL/USL/Mean 기준선 및 Cp/Cpk 지표 패널을 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const CpkCpProcessCapabilityDemo: React.FC = () => {\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <BarChart2 className=\"w-4 h-4 text-emerald-400\" />\n          <h4 className=\"text-xs font-bold text-white\">공정능력지수 가우스 정규분포 곡선 (Cpk / Ppk Gaussian Bell)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono\">Cpk 1.67 PASS</span>\n      </div>\n\n      <div className=\"h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative flex items-center justify-center\">\n        <svg className=\"w-full h-full\" viewBox=\"0 0 300 100\">\n          {/* Bell Curve */}\n          <path\n            d=\"M 10 90 Q 100 90 130 50 Q 150 10 170 50 Q 200 90 290 90\"\n            fill=\"rgba(16, 185, 129, 0.2)\"\n            stroke=\"#10b981\"\n            strokeWidth=\"2.5\"\n          />\n          {/* Spec Limit Lines */}\n          <line x1=\"70\" y1=\"10\" x2=\"70\" y2=\"90\" stroke=\"#ef4444\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\" />\n          <line x1=\"230\" y1=\"10\" x2=\"230\" y2=\"90\" stroke=\"#ef4444\" strokeWidth=\"1.5\" strokeDasharray=\"3 3\" />\n          <line x1=\"150\" y1=\"10\" x2=\"150\" y2=\"90\" stroke=\"#38bdf8\" strokeWidth=\"1\" />\n        </svg>\n        <div className=\"absolute bottom-1 inset-x-4 flex justify-between font-mono text-[9px] text-slate-400\">\n          <span className=\"text-rose-400\">LSL (24.98)</span>\n          <span className=\"text-cyan-400\">Mean μ (25.00)</span>\n          <span className=\"text-rose-400\">USL (25.02)</span>\n        </div>\n      </div>\n\n      <div className=\"grid grid-cols-2 gap-2 text-[10px] font-mono\">\n        <div className=\"p-1.5 rounded bg-slate-800/60 border border-slate-700/50 flex justify-between\">\n          <span className=\"text-slate-400\">Cp (잠재능력)</span>\n          <span className=\"text-emerald-400 font-bold\">1.82</span>\n        </div>\n        <div className=\"p-1.5 rounded bg-slate-800/60 border border-slate-700/50 flex justify-between\">\n          <span className=\"text-slate-400\">Cpk (실공정능력)</span>\n          <span className=\"text-emerald-400 font-bold\">1.67 (A등급)</span>\n        </div>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 10. Ultrasonic Doppler Velocity Profile (초음파 도플러 유속 프로파일)\n// ========================================================================="
},
{
  "id": "sensor-ultrasonic-doppler-flow",
  "name": "초음파 도플러 유량 유속 프로파일 (Ultrasonic Doppler Profile)",
  "category": "stats",
  "tags": ["ultrasonic", "doppler", "flowmeter", "velocity", "초음파", "도플러", "유속", "유량계"],
  "description": "배관 단면 반경에 따른 유체 층류/난류 포물선 유속 분포와 초음파 도플러 주파수 천이를 시각화.",
  "complexity": "Medium",
  "dependencies": ["lucide-react"],
  "previewType": "sensor-ultrasonic-doppler-flow",
  "aiPromptGuidance": "배관 중심 최대 유속 포물선 프로파일 및 순간 체적 유량 게이지를 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const PiezoelectricUltrasonicDopplerDemo: React.FC = () => {\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Radio className=\"w-4 h-4 text-cyan-400\" />\n          <h4 className=\"text-xs font-bold text-white\">초음파 도플러 유량 유속 프로파일 (Ultrasonic Doppler Profile)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono\">DN150 Pipe</span>\n      </div>\n\n      <div className=\"h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative flex items-center justify-center\">\n        {/* Parabolic Laminar Flow Profile */}\n        <svg className=\"w-full h-full\" viewBox=\"0 0 300 100\">\n          <path d=\"M 20 15 Q 180 50 20 85\" fill=\"rgba(6, 182, 212, 0.25)\" stroke=\"#06b6d4\" strokeWidth=\"2.5\" />\n          <line x1=\"20\" y1=\"50\" x2=\"180\" y2=\"50\" stroke=\"#38bdf8\" strokeWidth=\"2\" strokeDasharray=\"4 2\" />\n        </svg>\n        <div className=\"absolute top-2 right-3 font-mono text-[9px] text-cyan-300\">Vmax: 3.42 m/s (Center)</div>\n      </div>\n\n      <div className=\"p-2 rounded bg-slate-800/60 text-[11px] text-slate-300 flex justify-between font-mono\">\n        <span className=\"text-slate-400\">순간 체적 유량:</span>\n        <span className=\"text-cyan-400 font-bold\">218.4 m³/h (정상)</span>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 11. Gantt Critical Path CPM DAG (PERT/CPM 임계 경로 공정 스케줄러)\n// ========================================================================="
},
{
  "id": "project-critical-path-cpm-dag",
  "name": "PERT/CPM 임계 경로 공정망 (Critical Path CPM DAG)",
  "category": "dashboards",
  "tags": ["pert", "cpm", "critical-path", "gantt", "임계경로", "공정망", "간트", "일정"],
  "description": "전체 프로젝트 완공일을 좌우하는 여유시간(Float/Slack)=0인 Critical Path 공정 노선들을 붉은색 네온으로 강조.",
  "complexity": "Medium",
  "dependencies": ["lucide-react"],
  "previewType": "project-critical-path-cpm-dag",
  "aiPromptGuidance": "임계 경로와 비임계 경로 태스크 바를 여유시간 정보와 함께 표시하는 CPM DAG를 제작하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const GanttCriticalPathCpmDemo: React.FC = () => {\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <GitPullRequest className=\"w-4 h-4 text-rose-400\" />\n          <h4 className=\"text-xs font-bold text-white\">PERT/CPM 임계 경로 공정망 (Critical Path CPM DAG)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono\">Float = 0 Days</span>\n      </div>\n\n      <div className=\"space-y-2 p-2 bg-slate-950 rounded-lg border border-slate-800\">\n        <div className=\"space-y-1\">\n          <div className=\"flex justify-between text-[10px] font-mono text-rose-400 font-bold\">\n            <span>[CRITICAL] 금형 설계 및 CNC 절삭</span>\n            <span>D+14 (0 Slack)</span>\n          </div>\n          <div className=\"h-2 rounded bg-rose-500/80 shadow-[0_0_8px_#f43f5e]\" style={{ width: '80%' }} />\n        </div>\n        <div className=\"space-y-1\">\n          <div className=\"flex justify-between text-[10px] font-mono text-cyan-400\">\n            <span>[NON-CRIT] 사출 원자재 입고 검수</span>\n            <span>D+6 (+3d Slack)</span>\n          </div>\n          <div className=\"h-2 rounded bg-cyan-500/50\" style={{ width: '45%' }} />\n        </div>\n      </div>\n\n      <div className=\"p-2 rounded bg-slate-800/60 text-[11px] text-slate-300 flex justify-between font-mono\">\n        <span className=\"text-slate-400\">프로젝트 완공 예상일:</span>\n        <span className=\"text-rose-400 font-bold\">총 42영업일 (지연 0일)</span>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 12. Michelson Laser Interferometer (마이컬슨 광학 간섭계)\n// ========================================================================="
},
{
  "id": "science-michelson-interferometer",
  "name": "마이컬슨 광학 나노 간섭계 (Michelson Laser Fringe Interferometer)",
  "category": "stats",
  "tags": ["interferometer", "laser", "michelson", "nanometer", "간섭계", "마이컬슨", "나노측정", "광학"],
  "description": "레이저 빔 분할 및 재합성으로 생성되는 동심원 광학 간섭 줄무늬(Fringe)를 통해 나노미터(nm) 단위 변위를 정밀 측정.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "science-michelson-interferometer",
  "aiPromptGuidance": "동심원 간섭 줄무늬 애니메이션과 레이저 파장 기준 나노 변위 측정 HUD를 제작하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const OptoelectronicInterferometerDemo: React.FC = () => {\n  return (\n    <div className=\"p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-3\">\n      <div className=\"flex items-center justify-between border-b border-slate-800 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Eye className=\"w-4 h-4 text-rose-500\" />\n          <h4 className=\"text-xs font-bold text-white\">마이컬슨 광학 나노 간섭계 (Michelson Laser Fringe)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono\">λ = 632.8 nm</span>\n      </div>\n\n      <div className=\"h-32 bg-slate-950 rounded-lg p-2 border border-slate-800 relative flex items-center justify-center overflow-hidden\">\n        {/* Concentric Interference Fringe Rings */}\n        {[8, 16, 24, 32, 40, 48].map((r, i) => (\n          <div\n            key={i}\n            style={{ width: `${r * 2.5}px`, height: `${r * 2.5}px` }}\n            className={`absolute rounded-full border-2 ${i % 2 === 0 ? 'border-rose-500/80 shadow-[0_0_8px_#f43f5e]' : 'border-slate-800'}`}\n          />\n        ))}\n      </div>\n\n      <div className=\"flex justify-between text-[11px] font-mono\">\n        <span className=\"text-slate-400\">미세 변위 카운트:</span>\n        <span className=\"text-rose-400 font-bold\">Δd = 12.65 nm PASS</span>\n      </div>\n    </div>\n  );\n};"
},
{
  "id": "table-banded-multiheader-hierarchical",
  "name": "다단 복합 헤더 & 마스터-디테일 서브그리드 (Banded Master-Detail)",
  "category": "tables",
  "tags": ["banded", "multiheader", "master-detail", "hierarchical", "다단헤더", "마스터디테일", "계층형", "서브테이블"],
  "description": "공정정보, 실시간 치수 Cpk, 불량검사 등 3계층 다단 밴디드 헤더와 행 클릭 시 펼쳐지는 하위 바코드 시리얼 서브그리드.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "table-banded-multiheader-hierarchical",
  "aiPromptGuidance": "다단 밴디드 헤더와 클릭 시 서브 테이블이 펼쳐지는 엔터프라이즈 마스터 디테일 그리드를 제작하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const BandedMultiHeaderMasterDetailGridDemo: React.FC = () => {\n  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({ 'LOT-101': true });\n\n  const toggleRow = (id: string) => {\n    setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }));\n  };\n\n  const rows = [\n    {\n      id: 'LOT-101', line: 'LINE-A (초정밀 사출)', equip: 'EQ-CNC-04', thickness: '24.082', dev: '+0.002', cpk: '1.84',\n      defectType: '기포/스크래치', defectCount: 2, yieldRate: '99.8%', status: 'PASS',\n      details: [\n        { subLot: 'SUB-101-1', serial: 'SN-994821', temp: '210°C', press: '142 bar', inspect: '정상 (0 def)' },\n        { subLot: 'SUB-101-2', serial: 'SN-994822', temp: '211°C', press: '144 bar', inspect: '미세 스크래치 (1 def)' }\n      ]\n    },\n    {\n      id: 'LOT-102', line: 'LINE-B (광학 센서 본딩)', equip: 'EQ-BOND-09', thickness: '12.504', dev: '-0.004', cpk: '1.62',\n      defectType: '단차 불량', defectCount: 5, yieldRate: '99.1%', status: 'PASS',\n      details: [\n        { subLot: 'SUB-102-1', serial: 'SN-882103', temp: '185°C', press: '98 bar', inspect: '정상 (0 def)' }\n      ]\n    },\n    {\n      id: 'LOT-103', line: 'LINE-C (표면 레이저 열처리)', equip: 'EQ-LASER-02', thickness: '38.120', dev: '+0.015', cpk: '1.24',\n      defectType: '열변형 크랙', defectCount: 14, yieldRate: '97.2%', status: 'WARNING',\n      details: [\n        { subLot: 'SUB-103-1', serial: 'SN-773419', temp: '320°C', press: '12 bar', inspect: '크랙 검출 (재작업)' }\n      ]\n    }\n  ];\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl overflow-hidden text-xs\">\n      <div className=\"p-3 bg-slate-950 border-b border-white/10 flex justify-between items-center\">\n        <div className=\"flex items-center gap-2\">\n          <Table2 className=\"w-4 h-4 text-cyan-400\" />\n          <h4 className=\"font-bold text-white text-xs\">다단 복합 헤더 & 마스터-디테일 서브그리드 (Banded Master-Detail)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono\">Banded Headers // Nested Sub-Tables</span>\n      </div>\n\n      <div className=\"overflow-x-auto\">\n        <table className=\"w-full text-left font-mono text-[10px] text-slate-300\">\n          <thead>\n            {/* Top Band Header */}\n            <tr className=\"bg-slate-950/80 text-slate-400 font-bold border-b border-white/10 text-center\">\n              <th className=\"p-1.5 w-6 border-r border-white/5\"></th>\n              <th colSpan={2} className=\"p-1.5 bg-violet-950/40 text-violet-300 border-r border-white/10\">【 공정 / 설비 정보 】</th>\n              <th colSpan={3} className=\"p-1.5 bg-cyan-950/40 text-cyan-300 border-r border-white/10\">【 실시간 가공 치수 & Cpk 】</th>\n              <th colSpan={3} className=\"p-1.5 bg-emerald-950/40 text-emerald-300 border-r border-white/10\">【 불량 및 품질 검사 】</th>\n              <th className=\"p-1.5 bg-amber-950/40 text-amber-300\">【 판정 】</th>\n            </tr>\n            {/* Sub Columns */}\n            <tr className=\"bg-white/[0.02] text-slate-400 font-bold border-b border-white/5 text-[9px]\">\n              <th className=\"p-1.5 text-center\">#</th>\n              <th className=\"p-1.5\">생산 라인</th>\n              <th className=\"p-1.5\">설비 ID</th>\n              <th className=\"p-1.5 text-right\">두께(mm)</th>\n              <th className=\"p-1.5 text-right\">편차</th>\n              <th className=\"p-1.5 text-center\">Cpk</th>\n              <th className=\"p-1.5\">주요 불량</th>\n              <th className=\"p-1.5 text-right\">불량수</th>\n              <th className=\"p-1.5 text-right\">FPY 수율</th>\n              <th className=\"p-1.5 text-center\">상태</th>\n            </tr>\n          </thead>\n          <tbody className=\"divide-y divide-white/5\">\n            {rows.map(row => (\n              <React.Fragment key={row.id}>\n                <tr className=\"hover:bg-white/[0.03] transition-colors cursor-pointer\" onClick={() => toggleRow(row.id)}>\n                  <td className=\"p-1.5 text-center text-slate-500\">\n                    {expandedRows[row.id] ? <ChevronDown className=\"w-3.5 h-3.5 text-cyan-400 inline\" /> : <ChevronRight className=\"w-3.5 h-3.5 inline\" />}\n                  </td>\n                  <td className=\"p-1.5 font-bold text-white font-sans\">{row.line}</td>\n                  <td className=\"p-1.5 text-slate-400\">{row.equip}</td>\n                  <td className=\"p-1.5 text-right text-cyan-300 font-bold\">{row.thickness}</td>\n                  <td className=\"p-1.5 text-right text-amber-400\">{row.dev}</td>\n                  <td className=\"p-1.5 text-center text-emerald-400 font-bold\">{row.cpk}</td>\n                  <td className=\"p-1.5 text-slate-300 font-sans\">{row.defectType}</td>\n                  <td className=\"p-1.5 text-right text-rose-400 font-bold\">{row.defectCount}</td>\n                  <td className=\"p-1.5 text-right text-emerald-400 font-bold\">{row.yieldRate}</td>\n                  <td className=\"p-1.5 text-center\">\n                    <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${\n                      row.status === 'PASS' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'\n                    }`}>\n                      {row.status}\n                    </span>\n                  </td>\n                </tr>\n\n                {/* Nested Detail Sub-Table */}\n                {expandedRows[row.id] && (\n                  <tr className=\"bg-slate-950/90\">\n                    <td colSpan={10} className=\"p-2.5 pl-8 border-l-2 border-cyan-500\">\n                      <div className=\"space-y-1.5\">\n                        <div className=\"flex justify-between items-center text-[9px] text-slate-400\">\n                          <span className=\"font-bold text-cyan-400\">↳ {row.id} 하위 시리얼 바코드 상세 검사이력 (Nested Child Records):</span>\n                          <span>총 {row.details.length}건 등록됨</span>\n                        </div>\n                        <table className=\"w-full text-left font-mono text-[9px] bg-slate-900/60 rounded-lg overflow-hidden\">\n                          <thead className=\"bg-white/5 text-slate-400\">\n                            <tr>\n                              <th className=\"p-1 pl-2\">서브 LOT</th>\n                              <th className=\"p-1\">바코드 시리얼</th>\n                              <th className=\"p-1\">성형 온도</th>\n                              <th className=\"p-1\">사출 압력</th>\n                              <th className=\"p-1 text-right pr-2\">광학 비전 판정</th>\n                            </tr>\n                          </thead>\n                          <tbody className=\"divide-y divide-white/5 text-slate-300\">\n                            {row.details.map((d, i) => (\n                              <tr key={i} className=\"hover:bg-white/5\">\n                                <td className=\"p-1 pl-2 text-violet-300\">{d.subLot}</td>\n                                <td className=\"p-1 text-slate-400\">{d.serial}</td>\n                                <td className=\"p-1 text-amber-300\">{d.temp}</td>\n                                <td className=\"p-1 text-cyan-300\">{d.press}</td>\n                                <td className=\"p-1 text-right pr-2 text-emerald-400 font-bold\">{d.inspect}</td>\n                              </tr>\n                            ))}\n                          </tbody>\n                        </table>\n                      </div>\n                    </td>\n                  </tr>\n                )}\n              </React.Fragment>\n            ))}\n          </tbody>\n        </table>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 2. Multi-Dimensional OLAP Cube Pivot Matrix (다차원 OLAP 큐브 피벗 매트릭스)\n// ========================================================================="
},
{
  "id": "table-olap-multi-dimensional-pivot",
  "name": "다차원 OLAP 피벗 큐브 슬라이서 (Multi-Dimensional OLAP Matrix)",
  "category": "tables",
  "tags": ["olap", "pivot", "cube", "matrix", "slicer", "피벗", "다차원", "슬라이서", "집계"],
  "description": "생산 거점별, 분기별 실적과 지표(매출, 생산량, 이익률)를 동적으로 전환하는 다차원 OLAP 피벗 매트릭스.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "table-olap-multi-dimensional-pivot",
  "aiPromptGuidance": "지표 슬라이서 토글과 행/열 소계 및 연간 총계(Grand Total)를 산출하는 OLAP 피벗 그리드를 구현하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const OlapPivotSlicerMatrixDemo: React.FC = () => {\n  const [metric, setMetric] = useState<'revenue' | 'volume' | 'margin'>('revenue');\n\n  const data = [\n    { factory: '화성 FAB 1', q1: 1420, q2: 1580, q3: 1690, q4: 1820, total: 6510 },\n    { factory: '평택 FAB 2', q1: 2100, q2: 2240, q3: 2410, q4: 2590, total: 9340 },\n    { factory: '아산 FAB 3', q1: 980, q2: 1040, q3: 1120, q4: 1190, total: 4330 },\n  ];\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl p-3.5 space-y-3 text-xs\">\n      <div className=\"flex flex-wrap justify-between items-center gap-2 border-b border-white/10 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Database className=\"w-4 h-4 text-violet-400\" />\n          <h4 className=\"font-bold text-white text-xs\">다차원 OLAP 피벗 큐브 슬라이서 (Multi-Dimensional OLAP Matrix)</h4>\n        </div>\n        <div className=\"flex gap-1 bg-slate-950 p-1 rounded-lg border border-white/10 font-mono text-[10px]\">\n          {(['revenue', 'volume', 'margin'] as const).map(m => (\n            <button\n              key={m}\n              onClick={() => setMetric(m)}\n              className={`px-2 py-0.5 rounded font-bold transition-all ${\n                metric === m ? 'bg-violet-600 text-white shadow' : 'text-slate-400 hover:text-white'\n              }`}\n            >\n              {m === 'revenue' ? '매출액 (KRW)' : m === 'volume' ? '생산량 (K-Pcs)' : '영업이익률 (%)'}\n            </button>\n          ))}\n        </div>\n      </div>\n\n      <div className=\"overflow-x-auto\">\n        <table className=\"w-full text-left font-mono text-[10px] text-slate-300\">\n          <thead className=\"bg-slate-950 text-slate-400 font-bold border-b border-white/10\">\n            <tr>\n              <th className=\"p-2\">생산 거점 (Row Slicer)</th>\n              <th className=\"p-2 text-right\">Q1 실적</th>\n              <th className=\"p-2 text-right\">Q2 실적</th>\n              <th className=\"p-2 text-right\">Q3 실적</th>\n              <th className=\"p-2 text-right\">Q4 실적</th>\n              <th className=\"p-2 text-right bg-violet-950/40 text-violet-300\">연간 누적 (Grand Total)</th>\n            </tr>\n          </thead>\n          <tbody className=\"divide-y divide-white/5\">\n            {data.map((r, i) => (\n              <tr key={i} className=\"hover:bg-white/[0.03]\">\n                <td className=\"p-2 font-bold text-white font-sans flex items-center gap-1.5\">\n                  <span className=\"w-1.5 h-1.5 rounded-full bg-violet-400\" />\n                  {r.factory}\n                </td>\n                <td className=\"p-2 text-right text-cyan-300\">{r.q1.toLocaleString()}</td>\n                <td className=\"p-2 text-right text-cyan-300\">{r.q2.toLocaleString()}</td>\n                <td className=\"p-2 text-right text-cyan-300\">{r.q3.toLocaleString()}</td>\n                <td className=\"p-2 text-right text-cyan-300\">{r.q4.toLocaleString()}</td>\n                <td className=\"p-2 text-right font-bold text-emerald-400 bg-violet-950/20\">{r.total.toLocaleString()}</td>\n              </tr>\n            ))}\n          </tbody>\n          <tfoot className=\"bg-slate-950 font-bold border-t border-white/10 text-slate-200\">\n            <tr>\n              <td className=\"p-2 text-violet-400\">합계 (Total Sum)</td>\n              <td className=\"p-2 text-right\">4,500</td>\n              <td className=\"p-2 text-right\">4,860</td>\n              <td className=\"p-2 text-right\">5,220</td>\n              <td className=\"p-2 text-right\">5,600</td>\n              <td className=\"p-2 text-right text-emerald-400 bg-violet-950/40\">20,180</td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 3. Level-2 High-Frequency Orderbook Depth Matrix (초고속 오더북 뎁스 호가창)\n// ========================================================================="
},
{
  "id": "table-high-freq-orderbook-depth",
  "name": "초고속 L2 오더북 뎁스 호가 매트릭스 (L2 Orderbook Depth)",
  "category": "tables",
  "tags": ["orderbook", "depth", "tick", "hft", "호가창", "오더북", "뎁스", "금융"],
  "description": "마이크로초 단위 실시간 체결가 틱 스트림과 매수/매도 잔량 누적 깊이(Depth) 시각화 호가 매트릭스.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "table-high-freq-orderbook-depth",
  "aiPromptGuidance": "매수/매도 잔량 누적 히트맵 바와 실시간 체결가 변동 틱 애니메이션이 적용된 오더북을 제작하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const HighFrequencyTickOrderbookGridDemo: React.FC = () => {\n  const [lastTick, setLastTick] = useState<number>(84200);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setLastTick(prev => prev + (Math.random() > 0.5 ? 100 : -100));\n    }, 1200);\n    return () => clearInterval(interval);\n  }, []);\n\n  const asks = [\n    { price: lastTick + 300, qty: 1420, depth: 85 },\n    { price: lastTick + 200, qty: 980, depth: 60 },\n    { price: lastTick + 100, qty: 450, depth: 30 },\n  ];\n\n  const bids = [\n    { price: lastTick - 100, qty: 620, depth: 40 },\n    { price: lastTick - 200, qty: 1150, depth: 70 },\n    { price: lastTick - 300, qty: 1890, depth: 95 },\n  ];\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl p-3.5 space-y-2.5 text-xs\">\n      <div className=\"flex justify-between items-center border-b border-white/10 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <TrendingUp className=\"w-4 h-4 text-emerald-400\" />\n          <h4 className=\"font-bold text-white text-xs\">초고속 L2 오더북 뎁스 호가 매트릭스 (L2 Orderbook Depth)</h4>\n        </div>\n        <span className=\"text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold animate-pulse\">\n          LIVE: {lastTick.toLocaleString()} KRW\n        </span>\n      </div>\n\n      {/* Asks (Sell) */}\n      <div className=\"space-y-1 font-mono text-[10px]\">\n        {asks.map((a, i) => (\n          <div key={i} className=\"relative flex justify-between items-center p-1 px-2 rounded overflow-hidden\">\n            <div className=\"absolute right-0 top-0 bottom-0 bg-rose-500/15\" style={{ width: `${a.depth}%` }} />\n            <span className=\"relative z-10 text-rose-400 font-bold\">{a.price.toLocaleString()}</span>\n            <span className=\"relative z-10 text-slate-300\">{a.qty} LOT</span>\n          </div>\n        ))}\n\n        {/* Current Mid Spread Line */}\n        <div className=\"p-1.5 rounded bg-slate-950 border border-white/10 flex justify-between items-center font-bold\">\n          <span className=\"text-cyan-400\">체결가 (Current Match)</span>\n          <span className=\"text-white text-xs\">{lastTick.toLocaleString()} KRW</span>\n        </div>\n\n        {/* Bids (Buy) */}\n        {bids.map((b, i) => (\n          <div key={i} className=\"relative flex justify-between items-center p-1 px-2 rounded overflow-hidden\">\n            <div className=\"absolute right-0 top-0 bottom-0 bg-emerald-500/15\" style={{ width: `${b.depth}%` }} />\n            <span className=\"relative z-10 text-emerald-400 font-bold\">{b.price.toLocaleString()}</span>\n            <span className=\"relative z-10 text-slate-300\">{b.qty} LOT</span>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 4. TreeList Multi-Column Gantt Timeline Grid (트리리스트 간트 타임라인 그리드)\n// ========================================================================="
},
{
  "id": "table-treelist-gantt-milestone-matrix",
  "name": "트리리스트 공정 간트 차트 연동 그리드 (TreeList Gantt Matrix)",
  "category": "tables",
  "tags": ["treelist", "gantt", "wbs", "milestone", "트리리스트", "간트", "공정표", "일정"],
  "description": "WBS 계층형 트리 테이블과 행 내부 공정 기간 간트 타임라인 바가 일체형으로 연동된 엔터프라이즈 일정 매트릭스.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "table-treelist-gantt-milestone-matrix",
  "aiPromptGuidance": "계층형 WBS 트리 컬럼과 인셀(In-Cell) 간트 진행률 바를 동기화하여 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const TreeListGanttTimelineGridDemo: React.FC = () => {\n  const tasks = [\n    { id: 1, name: '1. 광학 모듈 설계', start: 10, duration: 40, progress: 100, status: 'DONE' },\n    { id: 2, name: '  ├─ 1.1 렌즈 굴절률 FEA', start: 10, duration: 20, progress: 100, status: 'DONE' },\n    { id: 3, name: '  └─ 1.2 UV 경화 접착 시험', start: 25, duration: 25, progress: 85, status: 'IN_PROGRESS' },\n    { id: 4, name: '2. 클린룸 양산 라인 셋업', start: 45, duration: 45, progress: 40, status: 'IN_PROGRESS' },\n  ];\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl p-3.5 space-y-3 text-xs\">\n      <div className=\"flex justify-between items-center border-b border-white/10 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Layers className=\"w-4 h-4 text-amber-400\" />\n          <h4 className=\"font-bold text-white text-xs\">트리리스트 공정 간트 차트 연동 그리드 (TreeList Gantt Matrix)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono\">Hierarchical WBS // Gantt Overlay</span>\n      </div>\n\n      <div className=\"overflow-x-auto\">\n        <table className=\"w-full text-left font-mono text-[10px] text-slate-300\">\n          <thead className=\"bg-slate-950 text-slate-400 font-bold border-b border-white/10\">\n            <tr>\n              <th className=\"p-2 w-48\">WBS 공정명</th>\n              <th className=\"p-2 w-16 text-center\">진척률</th>\n              <th className=\"p-2\">타임라인 간트 바 (D+1 ~ D+60)</th>\n            </tr>\n          </thead>\n          <tbody className=\"divide-y divide-white/5\">\n            {tasks.map(t => (\n              <tr key={t.id} className=\"hover:bg-white/[0.03]\">\n                <td className=\"p-2 font-bold text-white truncate font-sans\">{t.name}</td>\n                <td className=\"p-2 text-center text-cyan-300 font-bold\">{t.progress}%</td>\n                <td className=\"p-2\">\n                  <div className=\"relative h-4 bg-slate-950 rounded-full overflow-hidden border border-white/5 flex items-center\">\n                    <div\n                      style={{ left: `${t.start}%`, width: `${t.duration}%` }}\n                      className={`absolute h-full rounded-full ${\n                        t.status === 'DONE' ? 'bg-emerald-500' : 'bg-gradient-to-r from-amber-500 to-orange-500'\n                      } shadow-md`}\n                    />\n                  </div>\n                </td>\n              </tr>\n            ))}\n          </tbody>\n        </table>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 5. In-Cell Micro Sparkline & Heatmap Grid (셀 내장 마이크로 스파크라인 그리드)\n// ========================================================================="
},
{
  "id": "table-incell-sparkline-heatmap-matrix",
  "name": "셀 내장 마이크로 스파크라인 & 히트맵 그리드 (In-Cell Sparklines)",
  "category": "tables",
  "tags": ["sparkline", "heatmap", "incell", "trend", "스파크라인", "인셀차트", "히트맵", "추세"],
  "description": "각 데이터 행마다 24시간 실시간 센서 계측 추세 마이크로 SVG 스파크라인과 상태 히트맵 뱃지를 내장.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "table-incell-sparkline-heatmap-matrix",
  "aiPromptGuidance": "테이블 각 셀 내부에 미니 스파크라인 폴리라인 그래프와 상태별 컬러 히트맵을 렌더링하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const InCellMicroSparklineHeatmapGridDemo: React.FC = () => {\n  const sensors = [\n    { id: 'SEN-01', name: '챔버 내부 진공도', current: '10^-6 Torr', trend: [12, 14, 18, 16, 22, 28, 25], heat: 'bg-emerald-500/20 text-emerald-300' },\n    { id: 'SEN-02', name: '플라즈마 RF 출력', current: '2.45 kW', trend: [45, 42, 48, 55, 60, 58, 64], heat: 'bg-amber-500/20 text-amber-300' },\n    { id: 'SEN-03', name: '냉각수 회수 유량', current: '14.2 L/min', trend: [80, 78, 75, 70, 65, 50, 42], heat: 'bg-rose-500/20 text-rose-300' },\n  ];\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl p-3.5 space-y-3 text-xs\">\n      <div className=\"flex justify-between items-center border-b border-white/10 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <BarChart2 className=\"w-4 h-4 text-emerald-400\" />\n          <h4 className=\"font-bold text-white text-xs\">셀 내장 마이크로 스파크라인 & 히트맵 그리드 (In-Cell Sparklines)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono\">Micro SVG Trends</span>\n      </div>\n\n      <div className=\"overflow-x-auto\">\n        <table className=\"w-full text-left font-mono text-[10px] text-slate-300\">\n          <thead className=\"bg-slate-950 text-slate-400 font-bold border-b border-white/10\">\n            <tr>\n              <th className=\"p-2\">센서 ID</th>\n              <th className=\"p-2\">계측 항목</th>\n              <th className=\"p-2 text-right\">현재값</th>\n              <th className=\"p-2 w-36 text-center\">24시간 추세 (Sparkline)</th>\n              <th className=\"p-2 text-center\">상태 히트맵</th>\n            </tr>\n          </thead>\n          <tbody className=\"divide-y divide-white/5\">\n            {sensors.map(s => (\n              <tr key={s.id} className=\"hover:bg-white/[0.03]\">\n                <td className=\"p-2 text-cyan-400 font-bold\">{s.id}</td>\n                <td className=\"p-2 text-white font-sans\">{s.name}</td>\n                <td className=\"p-2 text-right text-emerald-400 font-bold\">{s.current}</td>\n                <td className=\"p-2 flex justify-center\">\n                  <svg className=\"w-28 h-6\" viewBox=\"0 0 100 24\">\n                    <polyline\n                      fill=\"none\"\n                      stroke=\"#38bdf8\"\n                      strokeWidth=\"2\"\n                      points={s.trend.map((v, idx) => `${idx * 16},${24 - (v / 80) * 20}`).join(' ')}\n                    />\n                  </svg>\n                </td>\n                <td className=\"p-2 text-center\">\n                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${s.heat}`}>\n                    NOMINAL\n                  </span>\n                </td>\n              </tr>\n            ))}\n          </tbody>\n        </table>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 6. Dual-Side Column Pinning Virtual Grid (좌우 양방향 컬럼 고정 가상 그리드)\n// ========================================================================="
},
{
  "id": "table-virtual-pinning-multi-grouping",
  "name": "양방향 컬럼 고정 & 그룹핑 가상 그리드 (Dual-Pinning Grid)",
  "category": "tables",
  "tags": ["pinning", "freeze", "virtual", "grouping", "컬럼고정", "좌우고정", "가상스크롤", "그룹핑"],
  "description": "좌측 식별자 컬럼과 우측 조치 액션 컬럼을 동시 고정(Sticky Freeze)하고 가로 스크롤 시에도 유지되는 엔터프라이즈 그리드.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "table-virtual-pinning-multi-grouping",
  "aiPromptGuidance": "좌우 양방향 Sticky Freeze 고정 컬럼과 중앙 유동 영역을 가진 가상 그리드를 제작하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const MultiColumnPinningVirtualGridDemo: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl p-3.5 space-y-3 text-xs\">\n      <div className=\"flex justify-between items-center border-b border-white/10 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Pin className=\"w-4 h-4 text-cyan-400\" />\n          <h4 className=\"font-bold text-white text-xs\">양방향 컬럼 고정 & 그룹핑 가상 그리드 (Dual-Pinning Grid)</h4>\n        </div>\n        <span className=\"text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono\">Left/Right Freeze // Group Footer</span>\n      </div>\n\n      <div className=\"overflow-x-auto\">\n        <table className=\"w-full text-left font-mono text-[10px] text-slate-300\">\n          <thead className=\"bg-slate-950 text-slate-400 font-bold border-b border-white/10\">\n            <tr>\n              <th className=\"p-2 bg-slate-950 sticky left-0 z-10 border-r border-white/10 text-cyan-300\">📌 고정 LOT (Freeze)</th>\n              <th className=\"p-2\">공정 라인</th>\n              <th className=\"p-2\">작업자</th>\n              <th className=\"p-2\">설비 가동시간</th>\n              <th className=\"p-2 text-right\">전력 사용량</th>\n              <th className=\"p-2 bg-slate-950 sticky right-0 z-10 border-l border-white/10 text-right text-emerald-400\">📌 제어 (Action)</th>\n            </tr>\n          </thead>\n          <tbody className=\"divide-y divide-white/5\">\n            {[\n              { lot: 'LOT-X01', line: 'Main Fab Line 1', worker: '김수석 (책임)', uptime: '99.4h', power: '142 kWh', action: 'PASS' },\n              { lot: 'LOT-X02', line: 'Clean Room 2', worker: '박선임 (공정)', uptime: '96.2h', power: '188 kWh', action: 'AUDIT' },\n            ].map((r, i) => (\n              <tr key={i} className=\"hover:bg-white/[0.03]\">\n                <td className=\"p-2 bg-slate-900 sticky left-0 z-10 border-r border-white/10 font-bold text-cyan-300\">{r.lot}</td>\n                <td className=\"p-2 text-white font-sans\">{r.line}</td>\n                <td className=\"p-2 text-slate-400 font-sans\">{r.worker}</td>\n                <td className=\"p-2 text-emerald-400\">{r.uptime}</td>\n                <td className=\"p-2 text-right text-amber-400\">{r.power}</td>\n                <td className=\"p-2 bg-slate-900 sticky right-0 z-10 border-l border-white/10 text-right\">\n                  <button className=\"px-2 py-0.5 rounded bg-violet-600 hover:bg-violet-500 text-white font-bold text-[9px]\">\n                    {r.action}\n                  </button>\n                </td>\n              </tr>\n            ))}\n          </tbody>\n        </table>\n      </div>\n    </div>\n  );\n};\n\n// =========================================================================\n// 7. Interactive Cell Formula Calculation Engine Matrix (동적 수식 계산 엔진 매트릭스)\n// ========================================================================="
},
{
  "id": "table-interactive-formula-calculation-engine",
  "name": "엔터프라이즈 셀 수식 계산 엔진 매트릭스 (Formula Calc Engine)",
  "category": "tables",
  "tags": ["formula", "calculation", "excel", "engine", "수식계산", "원가계산", "스프레드시트", "동적계산"],
  "description": "원가, 마진율, 환율 변동 시 셀 내부 수식(=Cost*(1+Markup))이 실시간 반응하여 최종 납품가격을 재계산.",
  "complexity": "Advanced",
  "dependencies": ["lucide-react"],
  "previewType": "table-interactive-formula-calculation-engine",
  "aiPromptGuidance": "입력값 변경 시 수식이 즉각 동적 재계산되는 엔터프라이즈 포뮬러 매트릭스 그리드를 구현하세요.",
  "fullSourceCode": "import React, { useState, useEffect, useRef } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check, Eye } from 'lucide-react';\n\nexport const InteractiveCellFormulaCalcMatrixDemo: React.FC = () => {\n  const [cost, setCost] = useState<number>(1450);\n  const [markup, setMarkup] = useState<number>(35); // 35%\n\n  const price = Math.round(cost * (1 + markup / 100));\n  const margin = price - cost;\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl p-3.5 space-y-3 text-xs\">\n      <div className=\"flex justify-between items-center border-b border-white/10 pb-2\">\n        <div className=\"flex items-center gap-2\">\n          <Sparkles className=\"w-4 h-4 text-violet-400\" />\n          <h4 className=\"font-bold text-white text-xs\">엔터프라이즈 셀 수식 계산 엔진 매트릭스 (Formula Calc Engine)</h4>\n        </div>\n        <span className=\"text-[10px] font-mono text-emerald-400 font-bold\">=COST * (1 + MARKUP)</span>\n      </div>\n\n      <div className=\"grid grid-cols-3 gap-2\">\n        <div className=\"p-2.5 rounded-xl bg-slate-950 border border-white/5 space-y-1\">\n          <span className=\"text-[10px] text-slate-400\">제조 원가 (Cost)</span>\n          <div className=\"flex items-center gap-1\">\n            <span className=\"text-slate-500\">$</span>\n            <input\n              type=\"number\"\n              value={cost}\n              onChange={e => setCost(Number(e.target.value))}\n              className=\"w-full bg-transparent text-cyan-300 font-mono font-bold text-sm focus:outline-none\"\n            />\n          </div>\n        </div>\n\n        <div className=\"p-2.5 rounded-xl bg-slate-950 border border-white/5 space-y-1\">\n          <span className=\"text-[10px] text-slate-400\">마크업 마진율 (Markup %)</span>\n          <div className=\"flex items-center gap-1\">\n            <input\n              type=\"number\"\n              value={markup}\n              onChange={e => setMarkup(Number(e.target.value))}\n              className=\"w-full bg-transparent text-amber-300 font-mono font-bold text-sm focus:outline-none\"\n            />\n            <span className=\"text-slate-500\">%</span>\n          </div>\n        </div>\n\n        <div className=\"p-2.5 rounded-xl bg-violet-950/30 border border-violet-500/30 space-y-1\">\n          <span className=\"text-[10px] text-violet-300 font-bold\">최종 납품가 (Auto Calc)</span>\n          <div className=\"text-emerald-400 font-mono font-bold text-sm\">\n            ${price.toLocaleString()} (+${margin})\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n};"
}
];
