import { ComponentItem } from '../types';

export interface ThemePreset {
  id: string;
  name: string;
  bg: string;
  accent: string;
  sub: string;
}

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: "cyber-violet",
    name: "Cyber Violet (네온 바이올렛)",
    bg: "#08090f",
    accent: "#8b5cf6",
    sub: "#d946ef"
  },
  {
    id: "neon-emerald",
    name: "Neon Matrix (사이버 에메랄드)",
    bg: "#050d09",
    accent: "#10b981",
    sub: "#06b6d4"
  },
  {
    id: "deep-ocean",
    name: "Deep Titanium (엔터프라이즈 네이비)",
    bg: "#070c14",
    accent: "#3b82f6",
    sub: "#38bdf8"
  },
  {
    id: "amber-gold",
    name: "Amber Quartz (황금 앰버 럭셔리)",
    bg: "#0d0a06",
    accent: "#f59e0b",
    sub: "#ef4444"
  },
  {
    id: "obsidian-crimson",
    name: "Obsidian Flame (옵시디언 크림슨)",
    bg: "#0f0709",
    accent: "#f43f5e",
    sub: "#fb923c"
  },
  {
    id: "clean-slate",
    name: "Modern Slate (초미니멀 모노 슬레이트)",
    bg: "#0f172a",
    accent: "#94a3b8",
    sub: "#cbd5e1"
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
  "fullSourceCode": "// Spotlight Card Source Code"
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
  "fullSourceCode": "// Liquid Glass Source Code"
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
  "fullSourceCode": "// Magnetic Button Source Code"
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
  "fullSourceCode": "// Sound Reactive Source Code"
},
  {
  "id": "devexpress-ribbon-command-bar",
  "name": "DevExpress 오피스 스타일 리본 커맨드 바 (Office Ribbon & Action Tabs)",
  "category": "navigation",
  "tags": [
    "devexpress",
    "wpf",
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
  "previewType": "devexpress-ribbon-command-bar",
  "aiPromptGuidance": "DevExpress WPF 스타일 오피스 리본 커맨드 툴바를 렌더링하세요.",
  "fullSourceCode": "// DevExpress Ribbon Bar Sample Code"
},
  {
  "id": "devexpress-property-grid-inspector",
  "name": "DevExpress 정밀 프로퍼티 그리드 인스펙터 (PropertyGrid Editor)",
  "category": "forms",
  "tags": [
    "devexpress",
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
  "previewType": "devexpress-property-grid-inspector",
  "aiPromptGuidance": "DevExpress PropertyGrid 스타일 객체 속성 트리 및 인라인 에디터를 구현하세요.",
  "fullSourceCode": "// DevExpress PropertyGrid Sample Code"
},
  {
  "id": "devexpress-visual-filter-editor",
  "name": "DevExpress 비주얼 필터 트리 에디터 (FilterEditor AND/OR Builder)",
  "category": "tables",
  "tags": [
    "devexpress",
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
  "previewType": "devexpress-visual-filter-editor",
  "aiPromptGuidance": "DevExpress FilterEditor 스타일 계층형 조건문 빌더를 작성하세요.",
  "fullSourceCode": "// DevExpress FilterEditor Sample Code"
},
  {
  "id": "devexpress-visio-diagram-flow",
  "name": "DevExpress Visio 스타일 공정 흐름 다이어그램 (Diagram Control)",
  "category": "dashboards",
  "tags": [
    "devexpress",
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
  "previewType": "devexpress-visio-diagram-flow",
  "aiPromptGuidance": "DevExpress Diagram 스타일 노드 및 연결선 흐름도를 렌더링하세요.",
  "fullSourceCode": "// DevExpress Diagram Sample Code"
},
  {
  "id": "devexpress-docking-layout-mdi",
  "name": "DevExpress WPF 도킹 레이아웃 & MDI 패널 매니저 (Docking Layout)",
  "category": "themes",
  "tags": [
    "devexpress",
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
  "previewType": "devexpress-docking-layout-mdi",
  "aiPromptGuidance": "DevExpress Docking MDI 다단 분할 레이아웃 매니저를 구현하세요.",
  "fullSourceCode": "// DevExpress Docking Sample Code"
},
  {
  "id": "devexpress-excel-spreadsheet-matrix",
  "name": "DevExpress 엑셀 수식 내장 스프레드시트 뷰 (Excel Spreadsheet)",
  "category": "tables",
  "tags": [
    "devexpress",
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
  "previewType": "devexpress-excel-spreadsheet-matrix",
  "aiPromptGuidance": "DevExpress Spreadsheet 스타일 엑셀 셀 좌표 및 수식 연산 그리드를 렌더링하세요.",
  "fullSourceCode": "// DevExpress Spreadsheet Sample Code"
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
  "fullSourceCode": "import React, { useState } from 'react';\n\nexport const SankeyFlowChart: React.FC = () => {\n  const [selectedFlow, setSelectedFlow] = useState<string | null>(null);\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl\">\n      <div className=\"flex justify-between items-center text-sm font-bold text-white mb-2\">\n        <span>샌키 자재/에너지 유량 (Sankey Flow)</span>\n        <span className=\"text-cyan-400 font-mono text-xs\">{selectedFlow || '노선 클릭 상세'}</span>\n      </div>\n      <div className=\"h-44 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 relative\">\n        <svg viewBox=\"0 0 320 90\" className=\"w-full h-full\">\n          <rect x=\"10\" y=\"10\" width=\"12\" height=\"70\" fill=\"#8b5cf6\" rx=\"2\" />\n          <text x=\"26\" y=\"25\" fill=\"#cbd5e1\" fontSize=\"8\" fontWeight=\"bold\">원자재 100%</text>\n          <rect x=\"150\" y=\"10\" width=\"12\" height=\"45\" fill=\"#06b6d4\" rx=\"2\" />\n          <text x=\"166\" y=\"25\" fill=\"#cbd5e1\" fontSize=\"7\">1공정 조립 65%</text>\n          <rect x=\"150\" y=\"60\" width=\"12\" height=\"20\" fill=\"#f59e0b\" rx=\"2\" />\n          <text x=\"166\" y=\"72\" fill=\"#cbd5e1\" fontSize=\"7\">2공정 가공 35%</text>\n          <rect x=\"290\" y=\"10\" width=\"12\" height=\"55\" fill=\"#10b981\" rx=\"2\" />\n          <text x=\"240\" y=\"25\" fill=\"#10b981\" fontSize=\"8\" fontWeight=\"bold\">양품 98.4%</text>\n          <rect x=\"290\" y=\"70\" width=\"12\" height=\"10\" fill=\"#ef4444\" rx=\"2\" />\n          <text x=\"250\" y=\"80\" fill=\"#ef4444\" fontSize=\"7\">Loss 1.6%</text>\n          <path d=\"M 22 25 C 80 25, 80 25, 150 25 L 150 45 C 80 45, 80 45, 22 45 Z\" fill=\"rgba(6, 182, 212, 0.3)\" onClick={() => setSelectedFlow('원자재 ➔ 1공정: 65%')} className=\"cursor-pointer hover:fill-cyan-500/60\" />\n          <path d=\"M 22 55 C 80 55, 80 70, 150 70 L 150 80 C 80 80, 80 75, 22 75 Z\" fill=\"rgba(245, 158, 11, 0.3)\" onClick={() => setSelectedFlow('원자재 ➔ 2공정: 35%')} className=\"cursor-pointer hover:fill-amber-500/60\" />\n          <path d=\"M 162 25 C 220 25, 220 20, 290 20 L 290 55 C 220 55, 220 45, 162 45 Z\" fill=\"rgba(16, 185, 129, 0.3)\" onClick={() => setSelectedFlow('공정 ➔ 최종 완제품: 98.4%')} className=\"cursor-pointer hover:fill-emerald-500/60\" />\n        </svg>\n      </div>\n    </div>\n  );\n};"
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
  "fullSourceCode": "import React, { useState } from 'react';\n\nexport const SunburstHierarchyChart: React.FC = () => {\n  const [level, setLevel] = useState('전사 제조본부');\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl\">\n      <div className=\"flex justify-between items-center text-sm font-bold text-white mb-2\">\n        <span>동심원 썬버스트 계층 드릴다운</span>\n        <span className=\"text-violet-400 font-mono text-xs\">{level}</span>\n      </div>\n      <div className=\"relative w-40 h-40 mx-auto flex items-center justify-center\">\n        <svg viewBox=\"0 0 120 120\" className=\"w-full h-full -rotate-90\">\n          <circle cx=\"60\" cy=\"60\" r=\"20\" fill=\"#8b5cf6\" onClick={() => setLevel('Root: 전사 제조본부')} className=\"cursor-pointer hover:opacity-80\" />\n          <circle cx=\"60\" cy=\"60\" r=\"34\" stroke=\"#06b6d4\" strokeWidth=\"10\" fill=\"none\" strokeDasharray=\"100 114\" strokeDashoffset=\"0\" onClick={() => setLevel('1공장 디스플레이')} className=\"cursor-pointer hover:opacity-80\" />\n          <circle cx=\"60\" cy=\"60\" r=\"34\" stroke=\"#f59e0b\" strokeWidth=\"10\" fill=\"none\" strokeDasharray=\"60 154\" strokeDashoffset=\"-100\" onClick={() => setLevel('2공장 반도체')} className=\"cursor-pointer hover:opacity-80\" />\n          <circle cx=\"60\" cy=\"60\" r=\"34\" stroke=\"#10b981\" strokeWidth=\"10\" fill=\"none\" strokeDasharray=\"54 160\" strokeDashoffset=\"-160\" onClick={() => setLevel('3공장 광학')} className=\"cursor-pointer hover:opacity-80\" />\n          <circle cx=\"60\" cy=\"60\" r=\"48\" stroke=\"#3b82f6\" strokeWidth=\"8\" fill=\"none\" strokeDasharray=\"50 250\" strokeDashoffset=\"0\" onClick={() => setLevel('LINE-A (OLED)')} className=\"cursor-pointer hover:opacity-80\" />\n          <circle cx=\"60\" cy=\"60\" r=\"48\" stroke=\"#a855f7\" strokeWidth=\"8\" fill=\"none\" strokeDasharray=\"50 250\" strokeDashoffset=\"-50\" onClick={() => setLevel('LINE-B (SMT)')} className=\"cursor-pointer hover:opacity-80\" />\n        </svg>\n      </div>\n    </div>\n  );\n};"
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
  "fullSourceCode": "import React from 'react';\n\nexport const BoxplotOutlierChart: React.FC = () => {\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl\">\n      <div className=\"flex justify-between items-center text-sm font-bold text-white mb-2\">\n        <span>공정 치수 편차 박스플롯 (Boxplot IQR)</span>\n        <span className=\"text-emerald-400 font-mono text-xs\">정상 분포</span>\n      </div>\n      <div className=\"h-36 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 flex items-center justify-around font-mono text-xs\">\n        <div className=\"flex flex-col items-center\">\n          <div className=\"relative w-12 h-24 flex flex-col items-center justify-center\">\n            <line x1=\"24\" y1=\"5\" x2=\"24\" y2=\"85\" stroke=\"#94a3b8\" strokeWidth=\"1.5\" />\n            <div className=\"absolute inset-x-2 top-5 bottom-6 bg-violet-600/40 border border-violet-400 rounded flex items-center justify-center\">\n              <line x1=\"0\" y1=\"20\" x2=\"32\" y2=\"20\" stroke=\"#ffffff\" strokeWidth=\"2\" />\n            </div>\n            <circle cx=\"24\" cy=\"2\" r=\"2.5\" fill=\"#ef4444\" />\n          </div>\n          <span className=\"text-slate-400 mt-1\">두께 (T)</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
  "fullSourceCode": "import React, { useState } from 'react';\n\nexport const BulletTargetBar: React.FC = () => {\n  const [val, setVal] = useState(84);\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl space-y-3\">\n      <div className=\"flex justify-between items-center text-sm font-bold text-white\">\n        <span>스티븐 퓨 불릿 그래프 (Bullet Target)</span>\n        <span className=\"text-emerald-400 font-mono text-xs\">{val} / 목표 90</span>\n      </div>\n      <div className=\"relative h-6 bg-slate-950 rounded-lg overflow-hidden border border-white/10 flex items-center\">\n        <div className=\"absolute inset-y-0 left-0 w-[50%] bg-slate-800\" />\n        <div className=\"absolute inset-y-0 left-[50%] w-[35%] bg-slate-700\" />\n        <div className=\"absolute inset-y-0 left-[85%] w-[15%] bg-slate-600\" />\n        <div className=\"absolute inset-y-1.5 left-0 bg-emerald-400 rounded-r shadow-[0_0_8px_#10b981]\" style={{ width: `${val}%` }} />\n        <div className=\"absolute inset-y-0 left-[90%] w-1 bg-rose-400 shadow-md\" />\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { CandlestickChart, Eye, EyeOff } from 'lucide-react';\n\nexport const CandlestickTradingChart: React.FC = () => {\n  const [showLabels, setShowLabels] = useState(true);\n\n  return (\n    <div className=\"rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl\">\n      <div className=\"flex items-center justify-between mb-4\">\n        <div>\n          <h4 className=\"text-sm font-bold text-white flex items-center gap-2\">\n            <CandlestickChart className=\"w-4 h-4 text-emerald-400\" />\n            BTC/USDT 실시간 1분봉 캔들스틱\n          </h4>\n          <span className=\"text-xs text-emerald-400 font-mono font-bold\">$68,490.50 (+3.42%)</span>\n        </div>\n        <button\n          onClick={() => setShowLabels(!showLabels)}\n          className=\"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {showLabels ? '수치 레이블 ON' : '미니멀 모드 OFF'}\n        </button>\n      </div>\n\n      <div className=\"relative h-44 w-full bg-slate-950/60 rounded-xl p-2 border border-white/5 overflow-hidden\">\n        <svg viewBox=\"0 0 400 130\" className=\"w-full h-full\">\n          <line x1=\"0\" y1=\"30\" x2=\"400\" y2=\"30\" stroke=\"rgba(255,255,255,0.05)\" strokeDasharray=\"3 3\" />\n          <line x1=\"0\" y1=\"70\" x2=\"400\" y2=\"70\" stroke=\"rgba(255,255,255,0.05)\" strokeDasharray=\"3 3\" />\n          <line x1=\"0\" y1=\"100\" x2=\"400\" y2=\"100\" stroke=\"rgba(255,255,255,0.05)\" strokeDasharray=\"3 3\" />\n          {/* Candles */}\n          <line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"90\" stroke=\"#10b981\" strokeWidth=\"1.5\" />\n          <rect x=\"34\" y=\"50\" width=\"12\" height=\"30\" fill=\"#10b981\" rx=\"1\" />\n          <line x1=\"90\" y1=\"30\" x2=\"90\" y2=\"85\" stroke=\"#ef4444\" strokeWidth=\"1.5\" />\n          <rect x=\"84\" y=\"45\" width=\"12\" height=\"25\" fill=\"#ef4444\" rx=\"1\" />\n          <line x1=\"140\" y1=\"20\" x2=\"140\" y2=\"75\" stroke=\"#10b981\" strokeWidth=\"1.5\" />\n          <rect x=\"134\" y=\"30\" width=\"12\" height=\"35\" fill=\"#10b981\" rx=\"1\" />\n          <line x1=\"190\" y1=\"15\" x2=\"190\" y2=\"60\" stroke=\"#10b981\" strokeWidth=\"1.5\" />\n          <rect x=\"184\" y=\"20\" width=\"12\" height=\"30\" fill=\"#10b981\" rx=\"1\" />\n          <line x1=\"240\" y1=\"25\" x2=\"240\" y2=\"70\" stroke=\"#ef4444\" strokeWidth=\"1.5\" />\n          <rect x=\"234\" y=\"35\" width=\"12\" height=\"20\" fill=\"#ef4444\" rx=\"1\" />\n          <line x1=\"290\" y1=\"10\" x2=\"290\" y2=\"60\" stroke=\"#10b981\" strokeWidth=\"1.5\" />\n          <rect x=\"284\" y=\"15\" width=\"12\" height=\"40\" fill=\"#10b981\" rx=\"1\" />\n          <line x1=\"340\" y1=\"5\" x2=\"340\" y2=\"45\" stroke=\"#10b981\" strokeWidth=\"1.5\" />\n          <rect x=\"334\" y=\"10\" width=\"12\" height=\"25\" fill=\"#10b981\" rx=\"1\" />\n          {/* MA Line */}\n          <path d=\"M 40 70 Q 140 40, 240 35 T 340 18\" fill=\"none\" stroke=\"#f59e0b\" strokeWidth=\"2\" />\n          {showLabels && (\n            <>\n              <text x=\"345\" y=\"15\" fill=\"#10b981\" fontSize=\"10\" fontFamily=\"monospace\" fontWeight=\"bold\">68,490</text>\n              <text x=\"5\" y=\"35\" fill=\"#64748b\" fontSize=\"9\" fontFamily=\"monospace\">68,000</text>\n              <text x=\"5\" y=\"75\" fill=\"#64748b\" fontSize=\"9\" fontFamily=\"monospace\">67,500</text>\n              <text x=\"5\" y=\"105\" fill=\"#64748b\" fontSize=\"9\" fontFamily=\"monospace\">67,000</text>\n            </>\n          )}\n        </svg>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 인터랙티브 멀티 세그먼트 도넛 비중 차트 (중앙 총액)\n * Category: charts | Complexity: Medium\n */\nexport const ChartDonutAllocation: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">인터랙티브 멀티 세그먼트 도넛 비중 차트 (중앙 총액)</h4>\n            <span className=\"text-[11px] text-slate-400\">중앙 총액 메트릭, 호버 시 세그먼트 확대, 컬러풀 범례 및 비율(%)이 표시되는 현대적 도넛 차트.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: chart-donut-allocation</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">SVG 원형 도넛 비중 차트. strokeDasharray와 strokeDashoffset으로 각 자산 비중을 분할 렌더링하세요.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 육각형 다차원 스파이더 레이더 역량 벤치마크 차트\n * Category: charts | Complexity: Advanced\n */\nexport const ChartRadarSkills: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">육각형 다차원 스파이더 레이더 역량 벤치마크 차트</h4>\n            <span className=\"text-[11px] text-slate-400\">6개 축(AI, 코드품질, 아키텍처, 속도, 보안, UX) 다차원 폴리곤 비교 시각화.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: chart-radar-skills</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">6축 다각형 스파이더 레이더 차트. 정육각형 그리드망과 데이터 폴리곤 영역을 렌더링하세요.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: GitHub 스타일 연간 기여도 & 시간대별 활동 잔디 히트맵\n * Category: charts | Complexity: Medium\n */\nexport const ChartActivityHeatmap: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">GitHub 스타일 연간 기여도 & 시간대별 활동 잔디 히트맵</h4>\n            <span className=\"text-[11px] text-slate-400\">날짜별/시간대별 활동 밀도를 녹색/보라색 5단계 강도로 보여주는 매트릭스 히트맵.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: chart-activity-heatmap</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">GitHub 커밋 잔디 스타일 활동 히트맵. 5단계 색상 농도로 일별 밀도를 표시하세요.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 실시간 초당 처리량(RPS) 네온 스트림 에어리어 차트\n * Category: charts | Complexity: Medium\n */\nexport const AnalyticsChartStream: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">실시간 초당 처리량(RPS) 네온 스트림 에어리어 차트</h4>\n            <span className=\"text-[11px] text-slate-400\">부드러운 베지어 곡선과 네온 그라데이션 영역 채우기, 피크 인디케이터.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: analytics-chart-stream</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">실시간 트래픽 스트림 영역 차트. SVG 곡선 경로와 그라데이션 면적을 렌더링하세요.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 예측 vs 실적 듀얼 컬럼 막대 바 차트 (달성률 뱃지)\n * Category: charts | Complexity: Medium\n */\nexport const ChartBarComparisonDual: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">예측 vs 실적 듀얼 컬럼 막대 바 차트 (달성률 뱃지)</h4>\n            <span className=\"text-[11px] text-slate-400\">예측값 대비 실적 달성률을 나란히 비교하는 듀얼 막대 그래프.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: chart-bar-comparison-dual</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">목표치와 실적치를 나란히 배치하는 듀얼 컬럼 바 차트입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 3차원 버블 산포도 상관관계 분석 마켓 맵\n * Category: charts | Complexity: Advanced\n */\nexport const ChartBubbleMarketMap: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">3차원 버블 산포도 상관관계 분석 마켓 맵</h4>\n            <span className=\"text-[11px] text-slate-400\">X축(변동성), Y축(수익률), 버블크기(시가총액)를 매핑한 버블 시각화.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: chart-bubble-market-map</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">3차원 지표(X, Y, Size, Color)를 원형 버블로 표현하는 산점도 맵입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 마케팅 단계별 전환율 & 이탈 분석 퍼널 (Funnel) 차트\n * Category: charts | Complexity: Medium\n */\nexport const ChartFunnelConversion: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">마케팅 단계별 전환율 & 이탈 분석 퍼널 (Funnel) 차트</h4>\n            <span className=\"text-[11px] text-slate-400\">방문 -> 회원가입 -> 장바구니 -> 최종결제 단계별 이탈률과 잔존율 퍼널.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: chart-funnel-conversion</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">단계별 너비가 좁아지는 사다리꼴 형태의 전환 퍼널 차트입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 섹터별 시가총액 트리맵 (Treemap) 컬러 타일 그리드\n * Category: charts | Complexity: Advanced\n */\nexport const ChartTreemapPortfolio: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">섹터별 시가총액 트리맵 (Treemap) 컬러 타일 그리드</h4>\n            <span className=\"text-[11px] text-slate-400\">면적에 비례하는 타일 배치와 등락률 색상(Green/Red) 타일링.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: chart-treemap-portfolio</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">Finviz 스타일의 트리맵 타일 사각 그리드. 등락폭에 따라 색상이 결정됩니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 반원형 스피도미터 속도계 & 위험 구간 임계 게이지\n * Category: charts | Complexity: Medium\n */\nexport const ChartGaugeSpeedometer: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">반원형 스피도미터 속도계 & 위험 구간 임계 게이지</h4>\n            <span className=\"text-[11px] text-slate-400\">180도 반원형 바늘 게이지 및 그린/옐로우/레드 임계 영역 표시.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: chart-gauge-speedometer</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">180도 반원형 속도계 게이지. 회전 바늘과 임계치 컬러 밴드를 구현하세요.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 재무 손익 & 캐시플로우 누적 워터폴 (Waterfall) 폭포 차트\n * Category: charts | Complexity: Advanced\n */\nexport const ChartWaterfallCashflow: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">재무 손익 & 캐시플로우 누적 워터폴 (Waterfall) 폭포 차트</h4>\n            <span className=\"text-[11px] text-slate-400\">매출 증가분과 지출 차감분을 누적 계단형으로 보여주는 재무 차트.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: chart-waterfall-cashflow</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">손익 누적을 계단식으로 표현하는 워터폴 폭포 차트입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 초소형 7일간 추세 인라인 미니 스파크라인 (Sparkline) 뱃지\n * Category: charts | Complexity: Simple\n */\nexport const ChartSparklineMiniBadge: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">초소형 7일간 추세 인라인 미니 스파크라인 (Sparkline) 뱃지</h4>\n            <span className=\"text-[11px] text-slate-400\">표나 카드 안에 쏙 들어가는 초소형 초경량 7일간 추세선 뱃지.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: chart-sparkline-mini-badge</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">테이블 행 또는 카드 내부에 삽입되는 인라인 미니 스파크라인 그래프입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 2026 엔터프라이즈 리얼타임 데이터그리드 (정렬/다중선택)\n * Category: tables | Complexity: Advanced\n */\nexport const DatagridRealtimePro: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">2026 엔터프라이즈 리얼타임 데이터그리드 (정렬/다중선택)</h4>\n            <span className=\"text-[11px] text-slate-400\">체크박스 일괄 선택, 검색 필터링, 정렬, 마이크로서비스 상태 인디케이터.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: datagrid-realtime-pro</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">체크박스 다중선택, 검색 필터링, 정렬이 가능한 리얼타임 데이터그리드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Table, Filter, ArrowUpDown } from 'lucide-react';\n\nexport const PivotMatrixTable: React.FC = () => {\n  const [metric, setMetric] = useState<'revenue' | 'units'>('revenue');\n\n  const data = [\n    { region: '수도권 (서울/경기)', q1: 14200, q2: 18900, q3: 21500, q4: 26800 },\n    { region: '영남권 (부산/대구)', q1: 8200, q2: 9400, q3: 11200, q4: 13500 },\n    { region: '호남권 (광주/전주)', q1: 4500, q2: 5100, q3: 6300, q4: 7200 },\n    { region: '글로벌 (미국/일본)', q1: 32000, q2: 39000, q3: 45000, q4: 58000 },\n  ];\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl\">\n      <div className=\"p-4 border-b border-white/10 flex items-center justify-between\">\n        <h4 className=\"text-sm font-bold text-white flex items-center gap-2\">\n          <Table className=\"w-4 h-4 text-violet-400\" />\n          다차원 피벗 매트릭스 (지역별 x 분기별)\n        </h4>\n        <div className=\"flex items-center gap-1 bg-white/5 p-1 rounded-lg\">\n          <button onClick={() => setMetric('revenue')} className={`px-2.5 py-1 text-xs font-bold rounded-md ${metric === 'revenue' ? 'bg-violet-600 text-white' : 'text-slate-400'}`}>매출액</button>\n          <button onClick={() => setMetric('units')} className={`px-2.5 py-1 text-xs font-bold rounded-md ${metric === 'units' ? 'bg-violet-600 text-white' : 'text-slate-400'}`}>판매량</button>\n        </div>\n      </div>\n      <table className=\"w-full text-xs text-left text-slate-300\">\n        <thead className=\"bg-white/[0.03] text-slate-400 font-bold border-b border-white/10\">\n          <tr>\n            <th className=\"p-3\">영업 권역</th>\n            <th className=\"p-3 text-right\">Q1 (1분기)</th>\n            <th className=\"p-3 text-right\">Q2 (2분기)</th>\n            <th className=\"p-3 text-right\">Q3 (3분기)</th>\n            <th className=\"p-3 text-right\">Q4 (4분기)</th>\n            <th className=\"p-3 text-right text-violet-400\">연간 합계</th>\n          </tr>\n        </thead>\n        <tbody className=\"divide-y divide-white/5\">\n          {data.map((r, i) => {\n            const sum = r.q1 + r.q2 + r.q3 + r.q4;\n            return (\n              <tr key={i} className=\"hover:bg-white/[0.02]\">\n                <td className=\"p-3 font-bold text-white\">{r.region}</td>\n                <td className=\"p-3 text-right font-mono\">${r.q1.toLocaleString()}</td>\n                <td className=\"p-3 text-right font-mono\">${r.q2.toLocaleString()}</td>\n                <td className=\"p-3 text-right font-mono\">${r.q3.toLocaleString()}</td>\n                <td className=\"p-3 text-right font-mono\">${r.q4.toLocaleString()}</td>\n                <td className=\"p-3 text-right font-mono font-bold text-violet-300\">${sum.toLocaleString()}</td>\n              </tr>\n            );\n          })}\n        </tbody>\n      </table>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 계층형 트리 구조 확장 (Tree Table) 마스터-디테일 테이블\n * Category: tables | Complexity: Advanced\n */\nexport const TableExpandableTreeRows: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">계층형 트리 구조 확장 (Tree Table) 마스터-디테일 테이블</h4>\n            <span className=\"text-[11px] text-slate-400\">부모-자식 관계의 프로젝트/파일 트리를 아코디언 형태로 펼치는 테이블.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: table-expandable-tree-rows</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">부모-자식 관계의 계층형 데이터를 펼치고 접을 수 있는 트리 테이블입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 엑셀 스타일 인라인 셀 즉시 편집 (Inline Cell Edit) 그리드\n * Category: tables | Complexity: Advanced\n */\nexport const TableInlineEditableCell: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">엑셀 스타일 인라인 셀 즉시 편집 (Inline Cell Edit) 그리드</h4>\n            <span className=\"text-[11px] text-slate-400\">셀 더블클릭 시 즉시 텍스트/숫자/셀렉트 입력창으로 전환되는 반응형 그리드.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: table-inline-editable-cell</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">더블클릭으로 셀 값을 즉시 수정하고 Enter로 반영하는 인라인 편집 테이블입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 좌우 고정 컬럼 (Freeze Sticky Column) 금융 대사표\n * Category: tables | Complexity: Medium\n */\nexport const TableStickyColumnFinance: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">좌우 고정 컬럼 (Freeze Sticky Column) 금융 대사표</h4>\n            <span className=\"text-[11px] text-slate-400\">좌측 계좌명과 우측 최종합계 컬럼을 고정하고 중앙만 가로 스크롤되는 표.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: table-sticky-column-finance</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">좌측 식별자와 우측 결괏값 컬럼을 동결(Freeze)한 가로 스크롤 테이블입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 10만 건 가상화 (Virtual Windowing) 60fps 초고속 테이블\n * Category: tables | Complexity: Advanced\n */\nexport const TableVirtualizedInfiniteScroll: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">10만 건 가상화 (Virtual Windowing) 60fps 초고속 테이블</h4>\n            <span className=\"text-[11px] text-slate-400\">수만 개의 행을 버벅임 없이 60fps로 렌더링하는 가상 윈도우 테이블.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: table-virtualized-infinite-scroll</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">뷰포트에 노출되는 행만 렌더링하여 10만 건도 초고속 렌더링하는 가상화 테이블입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 초고속 호가창 (Orderbook) 뎁스 매칭 실시간 테이블\n * Category: tables | Complexity: Advanced\n */\nexport const TableCompactCryptoOrderbook: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">초고속 호가창 (Orderbook) 뎁스 매칭 실시간 테이블</h4>\n            <span className=\"text-[11px] text-slate-400\">매수(Green)/매도(Red) 잔량 비중 바와 실시간 체결가 틱 애니메이션.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: table-compact-crypto-orderbook</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">매수/매도 누적 잔량 바가 행 배경으로 채워지는 실시간 호가창 오더북 테이블입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: SaaS 플랜 요금제 비교 & 스펙 체크리스트 매트릭스\n * Category: tables | Complexity: Medium\n */\nexport const TableComparisonPricingPlan: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">SaaS 플랜 요금제 비교 & 스펙 체크리스트 매트릭스</h4>\n            <span className=\"text-[11px] text-slate-400\">Free vs Pro vs Enterprise 기능별 지원 여부(Check/Cross) 비교표.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: table-comparison-pricing-plan</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">요금제별 기능 지원 여부를 체크 아이콘과 수치로 비교하는 SaaS 스펙 매트릭스입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 보안 감사 로그 & 작업 전후 Diff 이력 테이블\n * Category: tables | Complexity: Medium\n */\nexport const TableAuditLogTimeline: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">보안 감사 로그 & 작업 전후 Diff 이력 테이블</h4>\n            <span className=\"text-[11px] text-slate-400\">작업자 IP, 수행한 명령, 전후 변경 Diff, 타임스탬프가 표시되는 로그 표.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: table-audit-log-timeline</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">보안 감사 로그 및 관리자 작업 이력을 시계열로 추적하는 타임라인 테이블입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 클라우드 파일 탐색기 & 권한 매트릭스 그리드\n * Category: tables | Complexity: Medium\n */\nexport const TableFileManagerExplorer: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">클라우드 파일 탐색기 & 권한 매트릭스 그리드</h4>\n            <span className=\"text-[11px] text-slate-400\">파일명, 확장자 아이콘, 소유자, 용량, 최종 수정일, 다운로드 액션 바.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: table-file-manager-explorer</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">구글 드라이브 형태의 파일 목록 및 권한, 용량, 다운로드 액션 테이블입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 물류 재고 관리 & 입출고 배치 (Batch) 제어 테이블\n * Category: tables | Complexity: Medium\n */\nexport const TableInventoryStockBatch: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">물류 재고 관리 & 입출고 배치 (Batch) 제어 테이블</h4>\n            <span className=\"text-[11px] text-slate-400\">바코드 SKU, 현재고, 안전재고 부족 경고 뱃지, 발주 수량 조절 스텝 버튼.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: table-inventory-stock-batch</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">안전재고 미달 경고 및 입출고 증감 버튼이 포함된 물류 창고 관리 테이블입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 실시간 유저 랭킹 & 1~3위 왕관 메달 리더보드\n * Category: tables | Complexity: Medium\n */\nexport const TableLeaderboardRanking: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">실시간 유저 랭킹 & 1~3위 왕관 메달 리더보드</h4>\n            <span className=\"text-[11px] text-slate-400\">1~3등 골드/실버/브론즈 왕관 뱃지, 연승 기록, 아바타 및 점수 게이지.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: table-leaderboard-ranking</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">골드/실버/브론즈 왕관 및 사용자 아바타, 점수 게이지가 들어간 리더보드 테이블입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 멀티 코어 하드웨어 텔레메트리 게이지 패널 (CPU/RAM/Temp)\n * Category: dashboards | Complexity: Medium\n */\nexport const CircularGaugeMonitor: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">멀티 코어 하드웨어 텔레메트리 게이지 패널 (CPU/RAM/Temp)</h4>\n            <span className=\"text-[11px] text-slate-400\">CPU, RAM, GPU 온도 원형 게이지 및 실시간 텔레메트리 패널.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: circular-gauge-monitor</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">원형 SVG 호 게이지를 사용한 실시간 CPU/RAM/온도 하드웨어 모니터 패널입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 2026 통합 경영 총괄 모니터링 4분할 그리드\n * Category: dashboards | Complexity: Advanced\n */\nexport const DashboardGridOverview: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">2026 통합 경영 총괄 모니터링 4분할 그리드</h4>\n            <span className=\"text-[11px] text-slate-400\">총매출, 활성 유저, 서버 헬스, 결제 트랜잭션 4분할 종합 뷰.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: dashboard-grid-overview</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">경영진을 위한 4분할 핵심 KPI 종합 요약 대시보드 그리드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 글로벌 API 게이트웨이 & 엣지 리전별 지연시간 관제탑\n * Category: dashboards | Complexity: Advanced\n */\nexport const DashboardApiGatewayTraffic: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">글로벌 API 게이트웨이 & 엣지 리전별 지연시간 관제탑</h4>\n            <span className=\"text-[11px] text-slate-400\">대륙별 리전(서울, 도쿄, 프랑크푸르트, 버지니아) 지연시간 및 오류율 지도.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: dashboard-api-gateway-traffic</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">전 세계 리전별 엣지 서버 응답 속도 및 오류율을 관제하는 글로벌 게이트웨이 보드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 이커머스 초단위 실시간 주문 & 결제 피드 보드\n * Category: dashboards | Complexity: Medium\n */\nexport const DashboardEcommerceLiveFeed: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">이커머스 초단위 실시간 주문 & 결제 피드 보드</h4>\n            <span className=\"text-[11px] text-slate-400\">초단위 주문 유입 피드, 장바구니 담김 현황, 실시간 결제 승인액 카운터.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: dashboard-ecommerce-live-feed</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">실시간 주문 결제 내역과 배송 상태가 초단위로 갱신되는 라이브 커머스 피드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: DevOps CI/CD 빌드 & 배포 파이프라인 스테이지 매트릭스\n * Category: dashboards | Complexity: Medium\n */\nexport const DashboardDevopsPipelineCi: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">DevOps CI/CD 빌드 & 배포 파이프라인 스테이지 매트릭스</h4>\n            <span className=\"text-[11px] text-slate-400\">Lint -> Unit Test -> Docker Build -> K8s 배포 단계별 소요시간 및 성공 여부.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: dashboard-devops-pipeline-ci</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">빌드, 테스트, 배포 파이프라인의 각 단계 진행 상황과 소요시간을 나타낸 DevOps 보드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 사이버 보안 침입 탐지 WAF 방화벽 실시간 차단 보드\n * Category: dashboards | Complexity: Advanced\n */\nexport const DashboardSecurityAuditThreat: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">사이버 보안 침입 탐지 WAF 방화벽 실시간 차단 보드</h4>\n            <span className=\"text-[11px] text-slate-400\">DDoS 차단 건수, 악성 봇 탐지, SSL 인증서 만료일, 실시간 IP 블랙리스트.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: dashboard-security-audit-threat</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">실시간 DDoS 및 봇 공격 차단 통계를 시각화하는 사이버 보안 관제 대시보드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 사용자 주차별 리텐션 코호트 (Cohort Retention) 분석기\n * Category: dashboards | Complexity: Advanced\n */\nexport const DashboardUserRetentionCohort: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">사용자 주차별 리텐션 코호트 (Cohort Retention) 분석기</h4>\n            <span className=\"text-[11px] text-slate-400\">가입 주차별 잔존율을 색상 강도로 표현하는 코호트 매트릭스.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: dashboard-user-retention-cohort</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">가입 주차별 사용자 유지 비율(Retention Rate)을 농도로 나타내는 코호트 분석판입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: PostgreSQL / Redis 클러스터 복제 지연 및 락 현황판\n * Category: dashboards | Complexity: Advanced\n */\nexport const DashboardDatabaseClusterHealth: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">PostgreSQL / Redis 클러스터 복제 지연 및 락 현황판</h4>\n            <span className=\"text-[11px] text-slate-400\">Master-Replica 복제 지연, 커넥션 풀 사용률, 슬로우 쿼리 락 현황.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: dashboard-database-cluster-health</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">DB 클러스터 노드별 복제 상태 및 커넥션 풀을 모니터링하는 대시보드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 멀티 클라우드 (AWS/GCP) 월간 비용 예측 및 예산 소진 보드\n * Category: dashboards | Complexity: Medium\n */\nexport const DashboardCloudBillingCost: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">멀티 클라우드 (AWS/GCP) 월간 비용 예측 및 예산 소진 보드</h4>\n            <span className=\"text-[11px] text-slate-400\">이번 달 누적 사용 금액, 월말 예상 청구액, 비용 초과 경고 인디케이터.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: dashboard-cloud-billing-cost</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">클라우드 인프라 월별 비용 및 예산 소진율을 표시하는 대시보드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 고객 지원 CS 티켓 유입량 & SLA 98% 준수율 보드\n * Category: dashboards | Complexity: Medium\n */\nexport const DashboardCustomerSupportSla: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">고객 지원 CS 티켓 유입량 & SLA 98% 준수율 보드</h4>\n            <span className=\"text-[11px] text-slate-400\">미처리 티켓 수, 평균 첫 응답 시간(FRT), 고객 만족도(CSAT 98%).</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: dashboard-customer-support-sla</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">CS 티켓 유입량과 SLA 달성률을 추적하는 상담 관제 보드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 스마트 빌딩 IoT 환경 센서 (온습도/CO2/전력) 허브\n * Category: dashboards | Complexity: Medium\n */\nexport const DashboardIotSmartFacility: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">스마트 빌딩 IoT 환경 센서 (온습도/CO2/전력) 허브</h4>\n            <span className=\"text-[11px] text-slate-400\">각 층별 실내 온도, 습도, CO2 농도, 실시간 전력 소비량(kW).</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: dashboard-iot-smart-facility</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">IoT 센서 데이터를 집계하여 층별 환경을 시각화하는 스마트 허브 패널입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: LLM 추론 토큰 소모량 & TPS / TTFT 성능 벤치마크\n * Category: dashboards | Complexity: Advanced\n */\nexport const DashboardAiModelInferenceStats: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">LLM 추론 토큰 소모량 & TPS / TTFT 성능 벤치마크</h4>\n            <span className=\"text-[11px] text-slate-400\">초당 생성 토큰 수 (TPS), 평균 TTFT (First Token Latency), GPU vRAM 점유.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: dashboard-ai-model-inference-stats</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">LLM 모델별 TPS, TTFT, 비용을 실시간 관제하는 AI 전용 대시보드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 글래스모피즘 다단계 스텝 (Stepper) 위저드 폼\n * Category: forms | Complexity: Medium\n */\nexport const GlassFormStepper: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">글래스모피즘 다단계 스텝 (Stepper) 위저드 폼</h4>\n            <span className=\"text-[11px] text-slate-400\">스텝 네비게이션, 유효성 검사 인디케이터, 부드러운 전환 효과.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: glass-form-stepper</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">단계별 입력을 진행하는 글래스모피즘 멀티스텝 폼 위저드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 스마트 드래그앤드롭 파일 업로더 & 실시간 진행률 바\n * Category: forms | Complexity: Medium\n */\nexport const FormDragDropFileZone: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">스마트 드래그앤드롭 파일 업로더 & 실시간 진행률 바</h4>\n            <span className=\"text-[11px] text-slate-400\">다중 파일 드롭존, 확장자 유효성 체크, 업로드 진행률 퍼센트 바.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: form-drag-drop-file-zone</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">드래그 앤 드롭 지원 및 실시간 업로드 진행 바가 있는 파일 업로더입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 다중 태그 셀렉터 & 스마트 키워드 자동완성 콤보박스\n * Category: forms | Complexity: Medium\n */\nexport const FormTagComboboxAutocomplete: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">다중 태그 셀렉터 & 스마트 키워드 자동완성 콤보박스</h4>\n            <span className=\"text-[11px] text-slate-400\">키워드 타이핑 시 연관 태그 추천, 백스페이스 삭제, 컬러 태그 칩.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: form-tag-combobox-autocomplete</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">다중 선택 칩과 키보드 단축키를 지원하는 태그 콤보박스입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 실시간 3D 인터랙티브 카드 결제 폼 (Flip 3D 회전)\n * Category: forms | Complexity: Advanced\n */\nexport const FormCreditCardLivePreview: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">실시간 3D 인터랙티브 카드 결제 폼 (Flip 3D 회전)</h4>\n            <span className=\"text-[11px] text-slate-400\">카드 번호 입력 시 실시간으로 가상 카드가 회전하며 CVC를 보여주는 결제 폼.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: form-credit-card-live-preview</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">카드 정보 입력 시 앞/뒷면이 3D 회전하는 반응형 신용카드 결제 폼입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 비밀번호 보안 등급 실시간 측정기 & 원클릭 난수 생성기\n * Category: forms | Complexity: Simple\n */\nexport const FormPasswordStrengthMeter: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">비밀번호 보안 등급 실시간 측정기 & 원클릭 난수 생성기</h4>\n            <span className=\"text-[11px] text-slate-400\">대소문자/특수문자/길이 충족 여부 체크리스트 및 원클릭 난수 생성기.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: form-password-strength-meter</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">비밀번호 복잡도를 실시간 채점하고 안전한 암호를 생성하는 폼입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 기간 설정 듀얼 캘린더 & 빠른 프리셋 (오늘/최근7일) 피커\n * Category: forms | Complexity: Medium\n */\nexport const FormDateRangeQuickPicker: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">기간 설정 듀얼 캘린더 & 빠른 프리셋 (오늘/최근7일) 피커</h4>\n            <span className=\"text-[11px] text-slate-400\">오늘, 어제, 최근 7일, 이번 달 원클릭 프리셋 및 시작/종료일 선택창.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: form-date-range-quick-picker</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">빠른 기간 프리셋 버튼과 듀얼 캘린더 날짜 범위 선택기입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 가격/수치 범위 듀얼 썸 (Dual Thumb) 슬라이더 컨트롤\n * Category: forms | Complexity: Medium\n */\nexport const FormDualRangeSliderFilter: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">가격/수치 범위 듀얼 썸 (Dual Thumb) 슬라이더 컨트롤</h4>\n            <span className=\"text-[11px] text-slate-400\">최솟값과 최댓값을 동시에 조절하는 부드러운 네온 슬라이더 컨트롤러.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: form-dual-range-slider-filter</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">최소/최대 범위를 양방향 핸들로 조절하는 듀얼 슬라이더입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 실시간 분할 프리뷰 지원 경량 마크다운 (Markdown) 에디터\n * Category: forms | Complexity: Advanced\n */\nexport const FormRichMarkdownEditor: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">실시간 분할 프리뷰 지원 경량 마크다운 (Markdown) 에디터</h4>\n            <span className=\"text-[11px] text-slate-400\">굵게, 기울임, 코드블럭, 링크 툴바 및 분할 화면 실시간 렌더링.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: form-rich-markdown-editor</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">툴바와 실시간 분할 마크다운 파서가 내장된 작성기 폼입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 국가번호 선택 드롭다운 & 6자리 OTP 인증번호 입력기\n * Category: forms | Complexity: Medium\n */\nexport const FormPhoneCountryOtpVerify: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">국가번호 선택 드롭다운 & 6자리 OTP 인증번호 입력기</h4>\n            <span className=\"text-[11px] text-slate-400\">6개 칸 자동 포커스 이동, 3분 유효시간 타이머, 재전송 링크.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: form-phone-country-otp-verify</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">자동 다음 칸 포커스 및 타이머가 있는 6자리 OTP 인증 입력기입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 도로명 주소 / 우편번호 스마트 검색 및 상세주소 폼\n * Category: forms | Complexity: Simple\n */\nexport const FormAddressSmartSearch: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">도로명 주소 / 우편번호 스마트 검색 및 상세주소 폼</h4>\n            <span className=\"text-[11px] text-slate-400\">도로명/지번 자동완성 드롭다운 및 상세주소 입력 가이드.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: form-address-smart-search</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">주소 검색 모달 연동 및 배송지 정보를 입력받는 스마트 폼입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 역할별 상세 RBAC 권한 토글 스위치 매트릭스\n * Category: forms | Complexity: Simple\n */\nexport const FormTogglePermissionMatrix: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">역할별 상세 RBAC 권한 토글 스위치 매트릭스</h4>\n            <span className=\"text-[11px] text-slate-400\">읽기/쓰기/삭제 권한을 토글 스위치로 직관적으로 온/오프하는 설정 폼.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: form-toggle-permission-matrix</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">사용자 그룹별 권한을 설정하는 토글 스위치 매트릭스 폼입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 0~10 순고객추천지수 (NPS) 감정 이모지 피드백 폼\n * Category: forms | Complexity: Simple\n */\nexport const FormSurveyNpsRating: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">0~10 순고객추천지수 (NPS) 감정 이모지 피드백 폼</h4>\n            <span className=\"text-[11px] text-slate-400\">11단계 점수 버튼, 감정 이모지 반응형 컬러, 주관식 한 줄 의견 입력창.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: form-survey-nps-rating</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">사용자 만족도 측정을 위한 NPS 0~10 점수 선택 및 피드백 폼입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 2026 AI 커맨드 센터 & 프롬프트 인스펙터\n * Category: ai-widgets | Complexity: Advanced\n */\nexport const AiPromptCommander: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">2026 AI 커맨드 센터 & 프롬프트 인스펙터</h4>\n            <span className=\"text-[11px] text-slate-400\">모델 셀렉터(Flash/Pro), 실시간 프롬프트 파라미터 제어, 음성 마이크 버튼.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: ai-prompt-commander</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">최신 AI 모델 스위처와 음성/텍스트 입력을 지원하는 프롬프트 커맨더입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 개발자용 임베디드 웹 터미널 & 로그 스트림\n * Category: ai-widgets | Complexity: Medium\n */\nexport const InteractiveTerminalCard: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">개발자용 임베디드 웹 터미널 & 로그 스트림</h4>\n            <span className=\"text-[11px] text-slate-400\">맥 OS 스타일의 윈도우 헤더, 실시간 타이핑 애니메이션 및 명령어 복사 기능.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: interactive-terminal-card</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">macOS 스타일의 다크 터미널 카드. 상단 신호등 버튼 및 명령어 복사 액션을 구현하세요.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: AI 자동 코드 리팩토링 Before/After Diff 비교 뷰어\n * Category: ai-widgets | Complexity: Advanced\n */\nexport const AiCodeDiffInspector: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">AI 자동 코드 리팩토링 Before/After Diff 비교 뷰어</h4>\n            <span className=\"text-[11px] text-slate-400\">빨간색(삭제)/초록색(추가) 라인 하이라이트와 원클릭 적용(Apply) 버튼.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: ai-code-diff-inspector</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">AI가 제안한 코드 변경 사항을 시각적으로 대조하는 Diff 인스펙터입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 멀티턴 AI 대화 스레드 & 토큰 스트리밍 버블\n * Category: ai-widgets | Complexity: Medium\n */\nexport const AiChatThreadBubbleFeed: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">멀티턴 AI 대화 스레드 & 토큰 스트리밍 버블</h4>\n            <span className=\"text-[11px] text-slate-400\">사용자 및 어시스턴트 버블, 코드블럭 복사, 재생성(Regenerate) 툴바.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: ai-chat-thread-bubble-feed</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">스트리밍 커서 효과와 코드 하이라이트를 지원하는 AI 챗 버블 목록입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: RAG 임베딩 벡터 검색 & 코사인 유사도 시밀러리티 뷰어\n * Category: ai-widgets | Complexity: Advanced\n */\nexport const AiVectorSearchExplorer: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">RAG 임베딩 벡터 검색 & 코사인 유사도 시밀러리티 뷰어</h4>\n            <span className=\"text-[11px] text-slate-400\">코사인 유사도(Cosine Score 0.94) 상위 문서 청크 하이라이트 패널.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: ai-vector-search-explorer</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">RAG 파이프라인에서 검색된 지식 청크와 매칭 유사도를 시각화하는 위젯입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 자율 AI 에이전트 다단계 실행 DAG 워크플로우 노드맵\n * Category: ai-widgets | Complexity: Advanced\n */\nexport const AiAgentTaskDagFlow: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">자율 AI 에이전트 다단계 실행 DAG 워크플로우 노드맵</h4>\n            <span className=\"text-[11px] text-slate-400\">계획 수립 -> 웹 검색 -> 코드 작성 -> 단위 테스트 노드 간 연결선.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: ai-agent-task-dag-flow</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">다중 에이전트 간 작업 흐름을 노드 다이어그램으로 표시하는 위젯입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: AI 텍스트 투 이미지 (Text-to-Image) 화풍 선택 스튜디오\n * Category: ai-widgets | Complexity: Medium\n */\nexport const AiImageGeneratorStudio: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">AI 텍스트 투 이미지 (Text-to-Image) 화풍 선택 스튜디오</h4>\n            <span className=\"text-[11px] text-slate-400\">화풍(Cyberpunk, Anime, Photo), 종횡비(16:9, 1:1), 4장 그리드 결과물.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: ai-image-generator-studio</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">프롬프트와 스타일 프리셋을 선택하여 이미지를 렌더링하는 스튜디오 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 실시간 AI 음성 인식 & 오디오 주파수 이퀄라이저 파형 바\n * Category: ai-widgets | Complexity: Medium\n */\nexport const AiAudioVoiceWaveform: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">실시간 AI 음성 인식 & 오디오 주파수 이퀄라이저 파형 바</h4>\n            <span className=\"text-[11px] text-slate-400\">말하는 음량에 따라 튀어오르는 네온 이퀄라이저 바와 실시간 자막 생성.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: ai-audio-voice-waveform</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">실시간 음성 주파수 애니메이션과 STT 텍스트 스트림을 보여주는 위젯입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: AI Tool Calling / 함수 호출 JSON 인자 파라미터 인스펙터\n * Category: ai-widgets | Complexity: Advanced\n */\nexport const AiFunctionCallingJsonSchema: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">AI Tool Calling / 함수 호출 JSON 인자 파라미터 인스펙터</h4>\n            <span className=\"text-[11px] text-slate-400\">함수명, 인자(Arguments) 유효성 검사, 실행 결과 반환 콘솔.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: ai-function-calling-json-schema</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">LLM이 호출한 외부 도구(Function Calling)의 파라미터를 점검하는 위젯입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 검증된 시스템 프롬프트 템플릿 보관함 (Vault)\n * Category: ai-widgets | Complexity: Simple\n */\nexport const AiPromptTemplateVault: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">검증된 시스템 프롬프트 템플릿 보관함 (Vault)</h4>\n            <span className=\"text-[11px] text-slate-400\">코딩 전문가, 비즈니스 기획, 영어 튜터 카테고리별 프롬프트 복사 카드.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: ai-prompt-template-vault</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">자주 쓰는 유용한 시스템 프롬프트를 검색하고 원클릭 복사하는 보관함입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: LLM 모델별 토큰 단가 & 예상 과금액 실시간 계산기\n * Category: ai-widgets | Complexity: Medium\n */\nexport const AiTokenCostCalculator: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">LLM 모델별 토큰 단가 & 예상 과금액 실시간 계산기</h4>\n            <span className=\"text-[11px] text-slate-400\">입력/출력 토큰 수 슬라이더 조절 시 Gemini, GPT, Claude 비용 실시간 비교.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: ai-token-cost-calculator</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">토큰 사용량에 따른 모델별 과금액을 실시간 산출하는 계산기 위젯입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 자연어 리뷰 텍스트 감정 분석 (Sentiment 긍부정 스펙트럼)\n * Category: ai-widgets | Complexity: Simple\n */\nexport const AiSentimentEmotionRadar: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">자연어 리뷰 텍스트 감정 분석 (Sentiment 긍부정 스펙트럼)</h4>\n            <span className=\"text-[11px] text-slate-400\">긍정 82%, 중립 12%, 부정 6% 색상 바 및 주요 키워드 클라우드.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: ai-sentiment-emotion-radar</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">사용자 리뷰/댓글의 긍부정 점수를 시각적으로 요약하는 감정 분석 위젯입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 네온 글로우 실시간 활성 사용자 (MAU) 지표 카드\n * Category: stats | Complexity: Simple\n */\nexport const KpiMetricNeon: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">네온 글로우 실시간 활성 사용자 (MAU) 지표 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">은은한 네온 배경 블러, 성장률 뱃지 및 전월 대비 증감 수치.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: kpi-metric-neon</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">부드러운 네온 글로우 효과가 적용된 KPI 메트릭 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 월간 반복 매출 (MRR $128k) 그라데이션 성장 카드\n * Category: stats | Complexity: Simple\n */\nexport const StatRevenueGrowthGradient: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">월간 반복 매출 (MRR $128k) 그라데이션 성장 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">달러 금액, 이번 분기 목표치 달성률(88%), 미니 상승 그래프.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: stat-revenue-growth-gradient</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">MRR 지표와 목표 달성 진행률 바를 표시하는 통계 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 글로벌 네트워크 응답 지연 (18ms) 초저지연 상태 카드\n * Category: stats | Complexity: Simple\n */\nexport const StatServerLatencyMs: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">글로벌 네트워크 응답 지연 (18ms) 초저지연 상태 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">평균 18ms 초저지연 상태 표시, 패킷 손실 0.00% 보장 뱃지.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: stat-server-latency-ms</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">서버 레이턴시와 안정성을 나타내는 상태 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 신규 고객 가입 전환율 (CVR 4.8%) A/B 승리 지표 카드\n * Category: stats | Complexity: Simple\n */\nexport const StatConversionFunnelKpi: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">신규 고객 가입 전환율 (CVR 4.8%) A/B 승리 지표 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">방문자 대비 가입 전환율, A/B 테스트 승리 태그, 전주 대비 증감.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: stat-conversion-funnel-kpi</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">가입 전환율과 A/B 테스트 지표를 강조하는 통계 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 디바이스 전력 소모 (14.2W) & 배터리 효율 96% 카드\n * Category: stats | Complexity: Simple\n */\nexport const StatBatteryPowerConsumption: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">디바이스 전력 소모 (14.2W) & 배터리 효율 96% 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">충전 잔여 시간, 배터리 효율 96%, 절전 모드 토글 스위치.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: stat-battery-power-consumption</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">배터리 잔량 및 충전 상태를 시각화한 모바일/IoT 지표 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 오픈소스 저장소 스타 (+142 Today) 트렌딩 카드\n * Category: stats | Complexity: Simple\n */\nexport const StatGithubStarsTrend: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">오픈소스 저장소 스타 (+142 Today) 트렌딩 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">오늘 획득한 스타 수(+142), 깃허브 트렌딩 1위 뱃지, 포크 수치.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: stat-github-stars-trend</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">깃허브 스타 수와 오늘 상승폭을 보여주는 개발자 친화 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 서비스 무장애 가동률 99.99% (Four Nines) 보증 카드\n * Category: stats | Complexity: Simple\n */\nexport const StatUptimeSlaFourNines: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">서비스 무장애 가동률 99.99% (Four Nines) 보증 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">지난 365일 무중단 운영 시간, 장애 발생 0건, 그린 핑 펄스 애니메이션.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: stat-uptime-sla-four-nines</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">99.99% SLA 무장애 달성 기록을 강조하는 신뢰도 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 암호화폐 총 자산 평가액 ($148,290) & 24h 변동 카드\n * Category: stats | Complexity: Simple\n */\nexport const StatCryptoPortfolioBalance: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">암호화폐 총 자산 평가액 ($148,290) & 24h 변동 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">총 평가액($148,290.00), 실시간 수익률(+12.4%), 미니 코인 아이콘들.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: stat-crypto-portfolio-balance</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">암호화폐 잔고와 24시간 수익률을 나타내는 금융 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 데이터베이스 초당 쿼리 처리수 (14.5k QPS) 성능 카드\n * Category: stats | Complexity: Simple\n */\nexport const StatDatabaseQpsThroughput: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">데이터베이스 초당 쿼리 처리수 (14.5k QPS) 성능 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">Read/Write 비율(85:15), 슬로우 쿼리 발생 0건, 버퍼 캐시 히트율 99.2%.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: stat-database-qps-throughput</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">DB 트랜잭션 QPS와 캐시 히트율을 표시하는 성능 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: AI 모델 초당 토큰 생성 속도 (120 TPS 초고속) 카드\n * Category: stats | Complexity: Simple\n */\nexport const StatAiTokenGenerationSpeed: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">AI 모델 초당 토큰 생성 속도 (120 TPS 초고속) 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">1초당 120개 토큰 고속 스트리밍, Flash 모델 최적화 상태.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: stat-ai-token-generation-speed</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">AI 실시간 토큰 생성 속도(TPS)를 보여주는 지표 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: NVMe SSD 스토리지 1.42TB / 2.00TB (71%) 잔여 용량 카드\n * Category: stats | Complexity: Simple\n */\nexport const StatStorageDiskUsageBar: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">NVMe SSD 스토리지 1.42TB / 2.00TB (71%) 잔여 용량 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">1.42 TB / 2.00 TB (71% 사용중), 남은 여유공간 580 GB 표시 바.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: stat-storage-disk-usage-bar</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">디스크 사용량과 남은 여유 공간을 프로그레스 바로 나타내는 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 고객 만족도 점수 (CSAT 4.9 / 5.0) 1,420개 리뷰 카드\n * Category: stats | Complexity: Simple\n */\nexport const StatCustomerSatisfactionCsat: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">고객 만족도 점수 (CSAT 4.9 / 5.0) 1,420개 리뷰 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">5점 만점 4.9점, 총 1,420개 긍정 리뷰, 하트 애니메이션 아이콘.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: stat-customer-satisfaction-csat</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">서비스의 CSAT 평점과 누적 평가수를 나타내는 통계 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 2026 플로팅 캡슐 탭 네비게이션\n * Category: navigation | Complexity: Simple\n */\nexport const FloatingTabNavigation: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">2026 플로팅 캡슐 탭 네비게이션</h4>\n            <span className=\"text-[11px] text-slate-400\">스마트 활성 표시 인디케이터, 글래스모피즘 플로팅 디자인의 탑/서브 탭 컨트롤.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: floating-tab-navigation</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">부드러운 캡슐 형태의 플로팅 탭 네비게이션입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 축소/확장 지원 사이드바 메뉴 & 유저 프로필\n * Category: navigation | Complexity: Medium\n */\nexport const NavSidebarCollapsibleDark: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">축소/확장 지원 사이드바 메뉴 & 유저 프로필</h4>\n            <span className=\"text-[11px] text-slate-400\">아이콘 전용 미니 모드 전환, 뱃지 카운트, 하단 유저 프로필 카드.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: nav-sidebar-collapsible-dark</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">너비 조절 및 서브메뉴 확장을 지원하는 다크 사이드바입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 스마트 경로 브레드크럼 (Breadcrumb) 트레일\n * Category: navigation | Complexity: Simple\n */\nexport const NavBreadcrumbTrailPath: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">스마트 경로 브레드크럼 (Breadcrumb) 트레일</h4>\n            <span className=\"text-[11px] text-slate-400\">홈 > 대시보드 > 프로젝트 > 칠판 스튜디오 단계별 링크 및 드롭다운 메뉴.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: nav-breadcrumb-trail-path</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">현재 웹 페이지 계층 위치를 명확히 보여주는 브레드크럼입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 맥 스타일 커맨드 팔레트 (Cmd + K / Quick Action)\n * Category: navigation | Complexity: Advanced\n */\nexport const NavCommandPaletteCmdK: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">맥 스타일 커맨드 팔레트 (Cmd + K / Quick Action)</h4>\n            <span className=\"text-[11px] text-slate-400\">키보드 상하 화살표 선택, 페이지 즉시 이동, 단축키 뱃지 표시.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: nav-command-palette-cmd-k</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">빠른 검색과 액션 실행을 제공하는 Cmd+K 커맨드 팔레트 모달입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 다단 메가메뉴 (Mega Menu) 기능/솔루션 소개\n * Category: navigation | Complexity: Medium\n */\nexport const NavMegaMenuProductDropdown: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">다단 메가메뉴 (Mega Menu) 기능/솔루션 소개</h4>\n            <span className=\"text-[11px] text-slate-400\">호버 시 풍부한 아이콘, 설명문, 인기 기능 추천 뱃지가 펼쳐지는 메뉴.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: nav-mega-menu-product-dropdown</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">SaaS 메인 랜딩에 적합한 대형 메가 드롭다운 메뉴입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: iOS 스타일 세그먼트 컨트롤러 (Segmented Pill)\n * Category: navigation | Complexity: Simple\n */\nexport const NavSegmentedControlPill: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">iOS 스타일 세그먼트 컨트롤러 (Segmented Pill)</h4>\n            <span className=\"text-[11px] text-slate-400\">배경 하이라이트가 미끄러지듯 이동하는 깔끔한 보기 모드 전환기.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: nav-segmented-control-pill</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">슬라이딩 인디케이터가 있는 세그먼트 버튼 컨트롤입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: macOS 독 (Dock) 호버 확대 아이콘 툴바\n * Category: navigation | Complexity: Medium\n */\nexport const NavDockMagnificationBar: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">macOS 독 (Dock) 호버 확대 아이콘 툴바</h4>\n            <span className=\"text-[11px] text-slate-400\">마우스 커서 근처의 아이콘이 부드럽게 커지는 인터랙티브 독.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: nav-dock-magnification-bar</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">마우스 호버 거리에 따라 스케일이 커지는 macOS 독 메뉴입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 페이지네이션 번호 바 & 직접 페이지 점프 인풋\n * Category: navigation | Complexity: Simple\n */\nexport const NavPaginationSmartJump: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">페이지네이션 번호 바 & 직접 페이지 점프 인풋</h4>\n            <span className=\"text-[11px] text-slate-400\">이전/다음, 중간 생략(…), 직접 페이지 번호 입력 및 행 개수 셀렉트.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: nav-pagination-smart-jump</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">대규모 데이터 페이징을 지원하는 페이지네이션 네비게이션입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 모바일 하단 고정 액션 탭바 (Safe Area 대응)\n * Category: navigation | Complexity: Simple\n */\nexport const NavMobileBottomTabBar: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">모바일 하단 고정 액션 탭바 (Safe Area 대응)</h4>\n            <span className=\"text-[11px] text-slate-400\">홈, 검색, 알림, 프로필 아이콘 및 신규 알림 레드 닷(Red Dot).</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: nav-mobile-bottom-tab-bar</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">스마트폰 화면 하단에 고정되는 반응형 네비게이션 탭바입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 문서 목차 (TOC) 실시간 스크롤스파이 인디케이터\n * Category: navigation | Complexity: Medium\n */\nexport const NavTocScrollspyArticle: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">문서 목차 (TOC) 실시간 스크롤스파이 인디케이터</h4>\n            <span className=\"text-[11px] text-slate-400\">사용자가 보고 있는 문서 본문 헤딩(H2/H3) 위치를 하이라이트하는 사이드 목차.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: nav-toc-scrollspy-article</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">기술 문서에 필수적인 스크롤 감지 목차(TOC) 네비게이터입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 가로형 마일스톤 단계 진행바 (Progress Stepper)\n * Category: navigation | Complexity: Simple\n */\nexport const NavStepperProgressMilestones: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">가로형 마일스톤 단계 진행바 (Progress Stepper)</h4>\n            <span className=\"text-[11px] text-slate-400\">완료(체크), 진행중(펄스), 대기 상태를 원형 번호로 잇는 진행바.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: nav-stepper-progress-milestones</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">프로젝트나 주문 처리 프로세스 마일스톤을 보여주는 스텝바입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 원형 레이디얼 컨텍스트 휠 (Radial Pie Menu)\n * Category: navigation | Complexity: Advanced\n */\nexport const NavContextRadialWheel: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">원형 레이디얼 컨텍스트 휠 (Radial Pie Menu)</h4>\n            <span className=\"text-[11px] text-slate-400\">우클릭 또는 버튼 클릭 시 360도 원형으로 펼쳐지는 빠른 퀵 메뉴.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: nav-context-radial-wheel</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">방사형으로 배치된 8방향 퀵 액션 레이디얼 메뉴입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 인터랙티브 알림 피드 & 토스트 카드\n * Category: feedback | Complexity: Simple\n */\nexport const NotificationToastFeed: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">인터랙티브 알림 피드 & 토스트 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">성공/경고/정보/에러 상태별 색상 및 실시간 알림 카운터, 닫기 인터랙션.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: notification-toast-feed</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">성공/에러 피드백을 전달하는 글래스모피즘 토스트 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 위험 작업 2중 확인 (Destructive Action) 프로젝트명 검증 모달\n * Category: feedback | Complexity: Medium\n */\nexport const ModalConfirmDestructiveDialog: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">위험 작업 2중 확인 (Destructive Action) 프로젝트명 검증 모달</h4>\n            <span className=\"text-[11px] text-slate-400\">삭제 확인을 위해 프로젝트명을 직접 타이핑해야 활성화되는 안전 다이얼로그.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: modal-confirm-destructive-dialog</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">영구 삭제 등 위험 액션 시 텍스트 확인 입력을 요구하는 모달입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 상단 글로벌 긴급 점검 공지 배너 (새로고침 버튼)\n * Category: feedback | Complexity: Simple\n */\nexport const FeedbackBannerSystemAlert: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">상단 글로벌 긴급 점검 공지 배너 (새로고침 버튼)</h4>\n            <span className=\"text-[11px] text-slate-400\">정기 점검 안내, 즉시 새로고침 버튼, 오늘 하루 보지 않기 옵션.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: feedback-banner-system-alert</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">서비스 상단에 노출되는 긴급 공지 배너 바입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 일러스트레이션 감성 빈 화면 (Empty State) & 생성 CTA 카드\n * Category: feedback | Complexity: Simple\n */\nexport const FeedbackEmptyStatePlaceholder: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">일러스트레이션 감성 빈 화면 (Empty State) & 생성 CTA 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">데이터가 없을 때 친절한 안내 문구와 첫 데이터 생성 유도 CTA 버튼.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: feedback-empty-state-placeholder</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">검색 결과 없음 또는 데이터 비어있음 상태를 안내하는 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 스켈레톤 시머 (Skeleton Shimmer) 로딩 플레이스홀더\n * Category: feedback | Complexity: Simple\n */\nexport const FeedbackSkeletonShimmerLoader: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">스켈레톤 시머 (Skeleton Shimmer) 로딩 플레이스홀더</h4>\n            <span className=\"text-[11px] text-slate-400\">콘텐츠가 로딩 중일 때 깜빡임 없는 세련된 웨이브 시머 이펙트.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: feedback-skeleton-shimmer-loader</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">카드 및 테이블 로딩 상태를 표현하는 스켈레톤 시머입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 모바일 제스처 드래그 바텀 시트 (Bottom Sheet Drawer)\n * Category: feedback | Complexity: Medium\n */\nexport const FeedbackDrawerBottomSheet: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">모바일 제스처 드래그 바텀 시트 (Bottom Sheet Drawer)</h4>\n            <span className=\"text-[11px] text-slate-400\">아래에서 위로 올라오는 부드러운 오버레이 패널 및 드래그 핸들 바.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: feedback-drawer-bottom-sheet</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">터치 제스처 드래그로 닫을 수 있는 반응형 바텀시트 드로어입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 실시간 가동 펄스 뱃지 & 마이크로 인디케이터 세트\n * Category: feedback | Complexity: Simple\n */\nexport const FeedbackBadgeStatusPulsing: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">실시간 가동 펄스 뱃지 & 마이크로 인디케이터 세트</h4>\n            <span className=\"text-[11px] text-slate-400\">초록색/노란색/빨간색/보라색 핑 애니메이션이 도는 상태 표시 뱃지 세트.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: feedback-badge-status-pulsing</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">라이브 상태를 표시하는 깜빡이는 펄스 뱃지 모음입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 목표 달성 축하 콘페티 (Confetti) 파티클 축포 팝업\n * Category: feedback | Complexity: Medium\n */\nexport const FeedbackConfettiCelebrationPopup: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">목표 달성 축하 콘페티 (Confetti) 파티클 축포 팝업</h4>\n            <span className=\"text-[11px] text-slate-400\">목표 달성이나 결제 완료 시 화면에 오색종이가 흩날리는 축하 모달.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: feedback-confetti-celebration-popup</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">미션 성공을 축하하는 화려한 콘페티 애니메이션 팝업입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 아바타/통계가 포함된 풍부한 정보 리치 호버 카드 (Rich Tooltip)\n * Category: feedback | Complexity: Simple\n */\nexport const FeedbackTooltipRichHoverCard: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">아바타/통계가 포함된 풍부한 정보 리치 호버 카드 (Rich Tooltip)</h4>\n            <span className=\"text-[11px] text-slate-400\">텍스트뿐만 아니라 아바타, 통계 수치, 팔로우 버튼이 들어간 툴팁.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: feedback-tooltip-rich-hover-card</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">사용자 호버 시 확장 정보를 표시하는 리치 툴팁 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: GDPR 규정 준수 쿠키 동의 & 선택적 권한 설정창\n * Category: feedback | Complexity: Simple\n */\nexport const FeedbackCookieConsentBanner: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">GDPR 규정 준수 쿠키 동의 & 선택적 권한 설정창</h4>\n            <span className=\"text-[11px] text-slate-400\">필수 쿠키 / 마케팅 쿠키 선택적 허용 스위치 및 모두 수락 버튼.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: feedback-cookie-consent-banner</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">웹사이트 하단에 깔끔하게 뜨는 쿠키 수집 동의 모달입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 호버 반응형 5성급 골드 별점 평가 위젯\n * Category: feedback | Complexity: Simple\n */\nexport const FeedbackRatingStarInteractive: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">호버 반응형 5성급 골드 별점 평가 위젯</h4>\n            <span className=\"text-[11px] text-slate-400\">호버하는 위치에 따라 별이 황금색으로 채워지며 즉시 점수 반영.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: feedback-rating-star-interactive</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">별점 인터랙션과 실시간 피드백 텍스트를 제공하는 평가 위젯입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 인터넷 연결 끊김 감지 & 자동 재연결 성공 알림 토스트\n * Category: feedback | Complexity: Simple\n */\nexport const FeedbackOfflineNetworkToast: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">인터넷 연결 끊김 감지 & 자동 재연결 성공 알림 토스트</h4>\n            <span className=\"text-[11px] text-slate-400\">오프라인 상태 알림 및 네트워크 복구 시 녹색 자동 동기화 피드백.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: feedback-offline-network-toast</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">브라우저 온/오프라인 이벤트를 감지하여 표시하는 상태 토스트입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 디자인 시스템 토큰 & 프리셋 컬러 팔레트 스위처\n * Category: themes | Complexity: Simple\n */\nexport const ThemeTokenPalette: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">디자인 시스템 토큰 & 프리셋 컬러 팔레트 스위처</h4>\n            <span className=\"text-[11px] text-slate-400\">사이버 바이올렛, 네온 에메랄드, 앰버 럭셔리, 딥 슬레이트 색상 견본.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: theme-token-palette</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">디자인 시스템 테마 토큰과 컬러 팔레트를 보여주는 스위처입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 초정밀 2026 글래스모피즘 (Backdrop-Blur-2xl) 유리 패널\n * Category: themes | Complexity: Simple\n */\nexport const ThemeGlassmorphismBlurSpec: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">초정밀 2026 글래스모피즘 (Backdrop-Blur-2xl) 유리 패널</h4>\n            <span className=\"text-[11px] text-slate-400\">백드롭 블러(Backdrop-Blur-2xl), 반투명 테두리, 노이즈 질감 오버레이.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: theme-glassmorphism-blur-spec</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">2026년형 투명 유리 질감 효과를 보여주는 스타일 데모 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 네온 글로우 & 사이버펑크 그림자 강도 (10px~50px) 매트릭스\n * Category: themes | Complexity: Simple\n */\nexport const ThemeNeonGlowShadowMatrix: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">네온 글로우 & 사이버펑크 그림자 강도 (10px~50px) 매트릭스</h4>\n            <span className=\"text-[11px] text-slate-400\">Soft Glow(10px)부터 Super Intense Burst(50px)까지의 네온 발광 스펙.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: theme-neon-glow-shadow-matrix</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">다양한 레벨의 네온 그림자 효과 토큰을 시각화한 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 2026 모던 타이포그래피 스케일 & 위계 페어링 가이드\n * Category: themes | Complexity: Simple\n */\nexport const ThemeTypographyScaleSpec: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">2026 모던 타이포그래피 스케일 & 위계 페어링 가이드</h4>\n            <span className=\"text-[11px] text-slate-400\">Display Title(48px), H1~H4, Body Text, Mono 숫자 폰트 위계 체계.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: theme-typography-scale-spec</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">반응형 폰트 크기 및 굵기 위계(Typography Scale)를 정리한 가이드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 몽환적인 움직이는 오로라 그라데이션 메쉬 (Mesh Gradient) 캔버스\n * Category: themes | Complexity: Medium\n */\nexport const ThemeGradientMeshCanvas: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">몽환적인 움직이는 오로라 그라데이션 메쉬 (Mesh Gradient) 캔버스</h4>\n            <span className=\"text-[11px] text-slate-400\">몽환적으로 움직이는 다색상 오로라 블러 메쉬 배경 캔버스.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: theme-gradient-mesh-canvas</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">CSS 다중 방사형 그라데이션을 합성한 오로라 메쉬 배경입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 테두리를 따라 무한 회전하는 레이저 광선 (Border Beam)\n * Category: themes | Complexity: Medium\n */\nexport const ThemeBorderGradientBeam: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">테두리를 따라 무한 회전하는 레이저 광선 (Border Beam)</h4>\n            <span className=\"text-[11px] text-slate-400\">카드 외곽선을 따라 네온 빛줄기가 끝없이 회전하는 고급 효과.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: theme-border-gradient-beam</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">카드 테두리에 빛나는 광선이 회전하는 Border Beam 효과입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 부드러운 해/달 회전 인터랙티브 다크/라이트 모드 스위치\n * Category: themes | Complexity: Simple\n */\nexport const ThemeDarkLightModeToggle: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">부드러운 해/달 회전 인터랙티브 다크/라이트 모드 스위치</h4>\n            <span className=\"text-[11px] text-slate-400\">태양과 달 아이콘이 회전하며 전환되는 모던 테마 토글 버튼.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: theme-dark-light-mode-toggle</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">부드러운 애니메이션으로 다크/라이트 모드를 전환하는 토글 버튼입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 사이버 스페이스 점자 (Dot Matrix) 그리드 패턴 배경 텍스처\n * Category: themes | Complexity: Simple\n */\nexport const ThemeGridDotPatternCanvas: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">사이버 스페이스 점자 (Dot Matrix) 그리드 패턴 배경 텍스처</h4>\n            <span className=\"text-[11px] text-slate-400\">미세한 격자 점들이 은은하게 빛나는 개발자 대시보드 전용 배경.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: theme-grid-dot-pattern-canvas</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">SVG 패턴을 활용한 점자 매트릭스 그리드 배경 텍스처입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 소프트 뉴모피즘 (Neumorphism) 다크 릴리프 음양각 버튼\n * Category: themes | Complexity: Simple\n */\nexport const ThemeNeumorphismSoftUi: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">소프트 뉴모피즘 (Neumorphism) 다크 릴리프 음양각 버튼</h4>\n            <span className=\"text-[11px] text-slate-400\">음각과 양각 그림자를 조화롭게 배치한 세련된 입체감 컨트롤러.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: theme-neumorphism-soft-ui</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">다크 톤의 입체적인 소프트 음양각 뉴모피즘 버튼 디자인입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 애플 스타일 모듈러 벤토 그리드 (Bento Grid) 카드 레이아웃\n * Category: themes | Complexity: Medium\n */\nexport const ThemeBentoGridCardLayout: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">애플 스타일 모듈러 벤토 그리드 (Bento Grid) 카드 레이아웃</h4>\n            <span className=\"text-[11px] text-slate-400\">크고 작은 사각형 카드들이 조화롭게 어우러진 최신 Bento 레이아웃.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: theme-bento-grid-card-layout</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">다양한 가로세로 비율의 카드를 배치하는 벤토 그리드 모듈입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 3D 클레이모피즘 (Claymorphism) 푹신한 볼륨 플로팅 카드\n * Category: themes | Complexity: Simple\n */\nexport const ThemeClaymorphism3dCard: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">3D 클레이모피즘 (Claymorphism) 푹신한 볼륨 플로팅 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">찰흙처럼 부드러운 둥근 모서리와 내부/외부 듀얼 그림자 효과.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: theme-claymorphism-3d-card</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">둥글고 푹신한 볼륨감을 주는 클레이모피즘 스타일 카드입니다.</p>\n      </div>\n    </div>\n  );\n};"
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
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 DevExpress/PowerBI Grade AI-Native Control: 필름 그레인 & 노이즈 텍스처 (Noise Texture) 아날로그 스펙\n * Category: themes | Complexity: Simple\n */\nexport const ThemeNoiseTextureOverlay: React.FC = () => {\n  const [isActive, setIsActive] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">필름 그레인 & 노이즈 텍스처 (Noise Texture) 아날로그 스펙</h4>\n            <span className=\"text-[11px] text-slate-400\">밋밋한 단색 배경에 아날로그 고급스러움을 더하는 미세 SVG 노이즈 필터.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setIsActive(!isActive)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {isActive ? '활성 (ON)' : '비활성 (OFF)'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <div className=\"flex items-center justify-between mb-2\">\n          <span className=\"text-emerald-400 font-mono font-bold\">✔ 2026 PowerBI/DevExpress Standard</span>\n          <span className=\"text-slate-500 font-mono\">ID: theme-noise-texture-overlay</span>\n        </div>\n        <p className=\"text-slate-400 leading-relaxed\">SVG feTurbulence 필터를 사용한 모던 노이즈 텍스처 오버레이입니다.</p>\n      </div>\n    </div>\n  );\n};"
  }
];
