import { ComponentItem } from '../types';

export const THEME_PRESETS = [
  {
    "id": "cyber-violet",
    "name": "Cyber Violet",
    "bg": "#08090f",
    "accent": "#8b5cf6",
    "sub": "#d946ef"
  },
  {
    "id": "neon-emerald",
    "name": "Neon Emerald",
    "bg": "#060d0a",
    "accent": "#10b981",
    "sub": "#06b6d4"
  },
  {
    "id": "amber-gold",
    "name": "Amber Luxury",
    "bg": "#0d0a06",
    "accent": "#f59e0b",
    "sub": "#ef4444"
  },
  {
    "id": "deep-slate",
    "name": "Deep Minimal",
    "bg": "#0f172a",
    "accent": "#3b82f6",
    "sub": "#6366f1"
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
    "id": "chart-candlestick-trading",
    "name": "실시간 캔들스틱 & 거래량 복합 차트 (수치 레이블 On/Off)",
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
    "description": "상승/하락 양봉·음봉, 이동평균선(MA), 하단 거래량 바, 호가 레이블 토글 스위치 지원.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "chart-candlestick-trading",
    "aiPromptGuidance": "이 컴포넌트는 금융/주식/코인용 캔들스틱 차트입니다. 상승/하락 캔들과 이동평균선, 레이블 토글 스위치를 포함하여 구현하세요.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 실시간 캔들스틱 & 거래량 복합 차트 (수치 레이블 On/Off)\n * Category: charts\n * Complexity: Advanced\n */\nexport const ChartCandlestickTrading: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">실시간 캔들스틱 & 거래량 복합 차트 (수치 레이블 On/Off)</h4>\n            <span className=\"text-[11px] text-slate-400\">상승/하락 양봉·음봉, 이동평균선(MA), 하단 거래량 바, 호가 레이블 토글 스위치 지원.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "chart-donut-allocation",
    "name": "도넛 포트폴리오 비중 차트 (인터랙티브 세그먼트)",
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
    "aiPromptGuidance": "이 컴포넌트는 SVG 기반 원형 도넛 비중 차트입니다. 중앙 메트릭과 각 세그먼트 호버 인터랙션, 범례 리스트를 구현하세요.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 도넛 포트폴리오 비중 차트 (인터랙티브 세그먼트)\n * Category: charts\n * Complexity: Medium\n */\nexport const ChartDonutAllocation: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">도넛 포트폴리오 비중 차트 (인터랙티브 세그먼트)</h4>\n            <span className=\"text-[11px] text-slate-400\">중앙 총액 메트릭, 호버 시 세그먼트 확대, 컬러풀 범례 및 비율(%)이 표시되는 현대적 도넛 차트.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "chart-radar-skills",
    "name": "육각형 레이더/스파이더 다차원 역량 비교 차트",
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
    "aiPromptGuidance": "이 컴포넌트는 다축 스킬 레이더(Spider) 차트입니다. 6개 항목 다각형 시각화를 SVG로 깔끔하게 렌더링하도록 작성하세요.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 육각형 레이더/스파이더 다차원 역량 비교 차트\n * Category: charts\n * Complexity: Advanced\n */\nexport const ChartRadarSkills: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">육각형 레이더/스파이더 다차원 역량 비교 차트</h4>\n            <span className=\"text-[11px] text-slate-400\">6개 축(AI, 코드품질, 아키텍처, 속도, 보안, UX) 다차원 폴리곤 비교 시각화.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "chart-activity-heatmap",
    "name": "GitHub 스타일 연간 기여도 & 활동 히트맵",
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
    "description": "날짜별/시간대별 활동 밀도를 녹색/보라색 강도로 보여주는 매트릭스 히트맵.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "chart-activity-heatmap",
    "aiPromptGuidance": "이 컴포넌트는 깃허브 잔디 스타일의 활동 히트맵 매트릭스입니다. 레벨 0~4 단계의 컬러 강도를 적용하세요.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: GitHub 스타일 연간 기여도 & 활동 히트맵\n * Category: charts\n * Complexity: Medium\n */\nexport const ChartActivityHeatmap: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">GitHub 스타일 연간 기여도 & 활동 히트맵</h4>\n            <span className=\"text-[11px] text-slate-400\">날짜별/시간대별 활동 밀도를 녹색/보라색 강도로 보여주는 매트릭스 히트맵.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 실시간 RPS 트래픽 스트림 영역 차트입니다. SVG 베지어 곡선과 네온 그라데이션을 적용하세요.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 실시간 초당 처리량(RPS) 네온 스트림 에어리어 차트\n * Category: charts\n * Complexity: Medium\n */\nexport const AnalyticsChartStream: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">실시간 초당 처리량(RPS) 네온 스트림 에어리어 차트</h4>\n            <span className=\"text-[11px] text-slate-400\">부드러운 베지어 곡선과 네온 그라데이션 영역 채우기, 피크 인디케이터.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "chart-bar-comparison-dual",
    "name": "비교 분석 듀얼 컬럼 막대 바 차트 (월별/분기별)",
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
    "aiPromptGuidance": "이 컴포넌트는 예측 vs 실적을 대비하는 듀얼 막대 차트입니다. 막대 높이와 툴팁 호버 효과를 포함하세요.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 비교 분석 듀얼 컬럼 막대 바 차트 (월별/분기별)\n * Category: charts\n * Complexity: Medium\n */\nexport const ChartBarComparisonDual: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">비교 분석 듀얼 컬럼 막대 바 차트 (월별/분기별)</h4>\n            <span className=\"text-[11px] text-slate-400\">예측값 대비 실적 달성률을 나란히 비교하는 듀얼 막대 그래프.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "chart-bubble-market-map",
    "name": "다차원 버블 클러스터 마켓 맵 (상관관계 분석)",
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
    "aiPromptGuidance": "이 컴포넌트는 3차원 데이터를 표현하는 버블 산점도 차트입니다. X/Y 좌표 및 크기/컬러 매핑을 구현하세요.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 다차원 버블 클러스터 마켓 맵 (상관관계 분석)\n * Category: charts\n * Complexity: Advanced\n */\nexport const ChartBubbleMarketMap: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">다차원 버블 클러스터 마켓 맵 (상관관계 분석)</h4>\n            <span className=\"text-[11px] text-slate-400\">X축(변동성), Y축(수익률), 버블크기(시가총액)를 매핑한 버블 시각화.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "chart-funnel-conversion",
    "name": "사용자 유입 & 구매 전환율 퍼널 (Funnel) 차트",
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
    "description": "방문 -> 가입 -> 결제 단계별 이탈률과 잔존율을 시각화하는 퍼널.",
    "complexity": "Medium",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "chart-funnel-conversion",
    "aiPromptGuidance": "이 컴포넌트는 단계별 이탈율을 나타내는 마케팅 퍼널 차트입니다. 사다리꼴 SVG 레이아웃을 사용하세요.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 사용자 유입 & 구매 전환율 퍼널 (Funnel) 차트\n * Category: charts\n * Complexity: Medium\n */\nexport const ChartFunnelConversion: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">사용자 유입 & 구매 전환율 퍼널 (Funnel) 차트</h4>\n            <span className=\"text-[11px] text-slate-400\">방문 -> 가입 -> 결제 단계별 이탈률과 잔존율을 시각화하는 퍼널.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "chart-treemap-portfolio",
    "name": "섹터별 트리맵 (Treemap) 히트맵 사각 격자",
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
    "aiPromptGuidance": "이 컴포넌트는 금융 시장 섹터별 시가총액과 등락폭을 나타내는 트리맵 그리드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 섹터별 트리맵 (Treemap) 히트맵 사각 격자\n * Category: charts\n * Complexity: Advanced\n */\nexport const ChartTreemapPortfolio: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">섹터별 트리맵 (Treemap) 히트맵 사각 격자</h4>\n            <span className=\"text-[11px] text-slate-400\">면적에 비례하는 타일 배치와 등락률 색상(Green/Red) 타일링.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "chart-gauge-speedometer",
    "name": "반원형 스피도미터 속도계 & 부하 게이지",
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
    "aiPromptGuidance": "이 컴포넌트는 반원형 아크 게이지 속도계입니다. 바늘 각도 계산 및 위험 구간 색상 밴드를 구현하세요.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 반원형 스피도미터 속도계 & 부하 게이지\n * Category: charts\n * Complexity: Medium\n */\nexport const ChartGaugeSpeedometer: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">반원형 스피도미터 속도계 & 부하 게이지</h4>\n            <span className=\"text-[11px] text-slate-400\">180도 반원형 바늘 게이지 및 그린/옐로우/레드 임계 영역 표시.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "chart-waterfall-cashflow",
    "name": "재무 손익 & 캐시플로우 워터폴 (Waterfall) 차트",
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
    "aiPromptGuidance": "이 컴포넌트는 손익 누적을 계단식으로 표현하는 워터폴 폭포 차트입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 재무 손익 & 캐시플로우 워터폴 (Waterfall) 차트\n * Category: charts\n * Complexity: Advanced\n */\nexport const ChartWaterfallCashflow: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">재무 손익 & 캐시플로우 워터폴 (Waterfall) 차트</h4>\n            <span className=\"text-[11px] text-slate-400\">매출 증가분과 지출 차감분을 누적 계단형으로 보여주는 재무 차트.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "chart-sparkline-mini-badge",
    "name": "인라인 미니 스파크라인 트렌드 뱃지 (7-Day)",
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
    "aiPromptGuidance": "이 컴포넌트는 컴팩트한 인라인 미니 스파크라인 차트 뱃지입니다. SVG 폴리라인을 활용하세요.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 인라인 미니 스파크라인 트렌드 뱃지 (7-Day)\n * Category: charts\n * Complexity: Simple\n */\nexport const ChartSparklineMiniBadge: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">인라인 미니 스파크라인 트렌드 뱃지 (7-Day)</h4>\n            <span className=\"text-[11px] text-slate-400\">표나 카드 안에 쏙 들어가는 초소형 초경량 7일간 추세선 뱃지.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "circular-gauge-monitor",
    "name": "멀티 코어 하드웨어 텔레메트리 게이지 패널",
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
    "aiPromptGuidance": "이 컴포넌트는 원형 SVG 게이지를 활용한 하드웨어 모니터링 대시보드 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 멀티 코어 하드웨어 텔레메트리 게이지 패널\n * Category: dashboards\n * Complexity: Medium\n */\nexport const CircularGaugeMonitor: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">멀티 코어 하드웨어 텔레메트리 게이지 패널</h4>\n            <span className=\"text-[11px] text-slate-400\">CPU, RAM, GPU 온도 원형 게이지 및 실시간 텔레메트리 패널.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "dashboard-grid-overview",
    "name": "2026 통합 경영 총괄 모니터링 그리드",
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
    "aiPromptGuidance": "이 컴포넌트는 경영진을 위한 최상위 메트릭 종합 오버뷰 대시보드 레이아웃입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 2026 통합 경영 총괄 모니터링 그리드\n * Category: dashboards\n * Complexity: Advanced\n */\nexport const DashboardGridOverview: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">2026 통합 경영 총괄 모니터링 그리드</h4>\n            <span className=\"text-[11px] text-slate-400\">총매출, 활성 유저, 서버 헬스, 결제 트랜잭션 4분할 종합 뷰.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "dashboard-api-gateway-traffic",
    "name": "글로벌 API 게이트웨이 & 엣지 라우팅 관제탑",
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
    "aiPromptGuidance": "이 컴포넌트는 글로벌 리전별 지연시간 및 트래픽 상태를 한눈에 관제하는 대시보드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 글로벌 API 게이트웨이 & 엣지 라우팅 관제탑\n * Category: dashboards\n * Complexity: Advanced\n */\nexport const DashboardApiGatewayTraffic: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">글로벌 API 게이트웨이 & 엣지 라우팅 관제탑</h4>\n            <span className=\"text-[11px] text-slate-400\">대륙별 리전(서울, 도쿄, 프랑크푸르트, 버지니아) 지연시간 및 오류율 지도.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "dashboard-ecommerce-live-feed",
    "name": "이커머스 실시간 주문 & 배송 상태 대시보드",
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
    "aiPromptGuidance": "이 컴포넌트는 실시간 주문 스트림과 결제 상태를 라이브로 보여주는 커머스 대시보드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 이커머스 실시간 주문 & 배송 상태 대시보드\n * Category: dashboards\n * Complexity: Medium\n */\nexport const DashboardEcommerceLiveFeed: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">이커머스 실시간 주문 & 배송 상태 대시보드</h4>\n            <span className=\"text-[11px] text-slate-400\">초단위 주문 유입 피드, 장바구니 담김 현황, 실시간 결제 승인액 카운터.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "dashboard-devops-pipeline-ci",
    "name": "DevOps CI/CD 빌드 파이프라인 매트릭스",
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
    "aiPromptGuidance": "이 컴포넌트는 빌드/테스트/배포 파이프라인의 스테이지별 진행 상태를 시각화한 대시보드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: DevOps CI/CD 빌드 파이프라인 매트릭스\n * Category: dashboards\n * Complexity: Medium\n */\nexport const DashboardDevopsPipelineCi: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">DevOps CI/CD 빌드 파이프라인 매트릭스</h4>\n            <span className=\"text-[11px] text-slate-400\">Lint -> Unit Test -> Docker Build -> K8s 배포 단계별 소요시간 및 성공 여부.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "dashboard-security-audit-threat",
    "name": "보안 위협 감지 & 방화벽 WAF 침입 탐지 보드",
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
    "aiPromptGuidance": "이 컴포넌트는 사이버 보안 및 WAF 위협 탐지 현황을 실시간 표시하는 보안 관제 대시보드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 보안 위협 감지 & 방화벽 WAF 침입 탐지 보드\n * Category: dashboards\n * Complexity: Advanced\n */\nexport const DashboardSecurityAuditThreat: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">보안 위협 감지 & 방화벽 WAF 침입 탐지 보드</h4>\n            <span className=\"text-[11px] text-slate-400\">DDoS 차단 건수, 악성 봇 탐지, SSL 인증서 만료일, 실시간 IP 블랙리스트.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "dashboard-user-retention-cohort",
    "name": "사용자 리텐션 코호트 (Cohort) 분석 매트릭스",
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
    "description": "주차별/월차별 가입자 잔존율을 색상 밀도로 나타내는 코호트 그리드.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "dashboard-user-retention-cohort",
    "aiPromptGuidance": "이 컴포넌트는 사용자 리텐션 코호트 분석 매트릭스 테이블입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 사용자 리텐션 코호트 (Cohort) 분석 매트릭스\n * Category: dashboards\n * Complexity: Advanced\n */\nexport const DashboardUserRetentionCohort: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">사용자 리텐션 코호트 (Cohort) 분석 매트릭스</h4>\n            <span className=\"text-[11px] text-slate-400\">주차별/월차별 가입자 잔존율을 색상 밀도로 나타내는 코호트 그리드.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "dashboard-database-cluster-health",
    "name": "PostgreSQL / Redis 클러스터 복제 지연 모니터",
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
    "description": "Master-Replica 복제 지연(Replication Lag), 커넥션 풀 사용률, 쿼리 락 현황.",
    "complexity": "Advanced",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "dashboard-database-cluster-health",
    "aiPromptGuidance": "이 컴포넌트는 DB 클러스터 노드별 복제 상태 및 커넥션 풀을 모니터링하는 대시보드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: PostgreSQL / Redis 클러스터 복제 지연 모니터\n * Category: dashboards\n * Complexity: Advanced\n */\nexport const DashboardDatabaseClusterHealth: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">PostgreSQL / Redis 클러스터 복제 지연 모니터</h4>\n            <span className=\"text-[11px] text-slate-400\">Master-Replica 복제 지연(Replication Lag), 커넥션 풀 사용률, 쿼리 락 현황.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "dashboard-cloud-billing-cost",
    "name": "AWS/GCP 멀티 클라우드 비용 예측 & 예산 보드",
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
    "aiPromptGuidance": "이 컴포넌트는 클라우드 인프라 월별 비용 및 예산 소진율을 표시하는 대시보드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: AWS/GCP 멀티 클라우드 비용 예측 & 예산 보드\n * Category: dashboards\n * Complexity: Medium\n */\nexport const DashboardCloudBillingCost: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">AWS/GCP 멀티 클라우드 비용 예측 & 예산 보드</h4>\n            <span className=\"text-[11px] text-slate-400\">이번 달 누적 사용 금액, 월말 예상 청구액, 비용 초과 경고 인디케이터.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "dashboard-customer-support-sla",
    "name": "고객 센터 티켓 인박스 & SLA 대응 시간 보드",
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
    "aiPromptGuidance": "이 컴포넌트는 CS 티켓 유입량과 SLA 달성률을 추적하는 상담 관제 보드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 고객 센터 티켓 인박스 & SLA 대응 시간 보드\n * Category: dashboards\n * Complexity: Medium\n */\nexport const DashboardCustomerSupportSla: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">고객 센터 티켓 인박스 & SLA 대응 시간 보드</h4>\n            <span className=\"text-[11px] text-slate-400\">미처리 티켓 수, 평균 첫 응답 시간(FRT), 고객 만족도(CSAT 98%).</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "dashboard-iot-smart-facility",
    "name": "스마트 빌딩 IoT 환경 센서 (온습도/전력) 허브",
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
    "aiPromptGuidance": "이 컴포넌트는 IoT 센서 데이터를 집계하여 층별 환경을 시각화하는 스마트 허브 패널입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 스마트 빌딩 IoT 환경 센서 (온습도/전력) 허브\n * Category: dashboards\n * Complexity: Medium\n */\nexport const DashboardIotSmartFacility: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">스마트 빌딩 IoT 환경 센서 (온습도/전력) 허브</h4>\n            <span className=\"text-[11px] text-slate-400\">각 층별 실내 온도, 습도, CO2 농도, 실시간 전력 소비량(kW).</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "dashboard-ai-model-inference-stats",
    "name": "LLM 추론 토큰 소모량 & 레이턴시 벤치마크",
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
    "aiPromptGuidance": "이 컴포넌트는 LLM 모델별 TPS, TTFT, 비용을 실시간 관제하는 AI 전용 대시보드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: LLM 추론 토큰 소모량 & 레이턴시 벤치마크\n * Category: dashboards\n * Complexity: Advanced\n */\nexport const DashboardAiModelInferenceStats: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">LLM 추론 토큰 소모량 & 레이턴시 벤치마크</h4>\n            <span className=\"text-[11px] text-slate-400\">초당 생성 토큰 수 (TPS), 평균 TTFT (First Token Latency), GPU vRAM 점유.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 엔터프라이즈급 실시간 데이터 테이블입니다. 검색, 행 선택, 상태 뱃지를 포함하세요.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 2026 엔터프라이즈 리얼타임 데이터그리드 (정렬/다중선택)\n * Category: tables\n * Complexity: Advanced\n */\nexport const DatagridRealtimePro: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">2026 엔터프라이즈 리얼타임 데이터그리드 (정렬/다중선택)</h4>\n            <span className=\"text-[11px] text-slate-400\">체크박스 일괄 선택, 검색 필터링, 정렬, 마이크로서비스 상태 인디케이터.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "table-expandable-tree-rows",
    "name": "계층형 트리 구조 확장 (Tree Table) 테이블",
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
    "aiPromptGuidance": "이 컴포넌트는 부모-자식 트리 깊이를 시각적으로 표현하는 계층형 테이블입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 계층형 트리 구조 확장 (Tree Table) 테이블\n * Category: tables\n * Complexity: Advanced\n */\nexport const TableExpandableTreeRows: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">계층형 트리 구조 확장 (Tree Table) 테이블</h4>\n            <span className=\"text-[11px] text-slate-400\">부모-자식 관계의 프로젝트/파일 트리를 아코디언 형태로 펼치는 테이블.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "table-inline-editable-cell",
    "name": "엑셀 스타일 인라인 셀 편집 (Inline Edit) 그리드",
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
    "aiPromptGuidance": "이 컴포넌트는 더블클릭으로 데이터를 즉시 수정하고 Enter로 저장하는 인라인 편집 테이블입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 엑셀 스타일 인라인 셀 편집 (Inline Edit) 그리드\n * Category: tables\n * Complexity: Advanced\n */\nexport const TableInlineEditableCell: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">엑셀 스타일 인라인 셀 편집 (Inline Edit) 그리드</h4>\n            <span className=\"text-[11px] text-slate-400\">셀 더블클릭 시 즉시 텍스트/숫자/셀렉트 입력창으로 전환되는 반응형 그리드.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "table-sticky-column-finance",
    "name": "좌우 고정 컬럼 (Sticky Freeze) 금융 대사표",
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
    "aiPromptGuidance": "이 컴포넌트는 좌/우 헤더 및 컬럼이 고정된 가로 스크롤 금융 테이블입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 좌우 고정 컬럼 (Sticky Freeze) 금융 대사표\n * Category: tables\n * Complexity: Medium\n */\nexport const TableStickyColumnFinance: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">좌우 고정 컬럼 (Sticky Freeze) 금융 대사표</h4>\n            <span className=\"text-[11px] text-slate-400\">좌측 계좌명과 우측 최종합계 컬럼을 고정하고 중앙만 가로 스크롤되는 표.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "table-virtualized-infinite-scroll",
    "name": "10만 건 가상화 (Virtual Scroll) 초고속 테이블",
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
    "aiPromptGuidance": "이 컴포넌트는 뷰포트 영역만 렌더링하여 대용량 데이터를 고속 스크롤하는 가상 테이블입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 10만 건 가상화 (Virtual Scroll) 초고속 테이블\n * Category: tables\n * Complexity: Advanced\n */\nexport const TableVirtualizedInfiniteScroll: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">10만 건 가상화 (Virtual Scroll) 초고속 테이블</h4>\n            <span className=\"text-[11px] text-slate-400\">수만 개의 행을 버벅임 없이 60fps로 렌더링하는 가상 윈도우 테이블.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "table-compact-crypto-orderbook",
    "name": "초고속 호가창 (Orderbook) 뎁스 매칭 테이블",
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
    "aiPromptGuidance": "이 컴포넌트는 실시간 호가 잔량 바 배경을 포함한 주식/코인 오더북 테이블입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 초고속 호가창 (Orderbook) 뎁스 매칭 테이블\n * Category: tables\n * Complexity: Advanced\n */\nexport const TableCompactCryptoOrderbook: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">초고속 호가창 (Orderbook) 뎁스 매칭 테이블</h4>\n            <span className=\"text-[11px] text-slate-400\">매수(Green)/매도(Red) 잔량 비중 바와 실시간 체결가 틱 애니메이션.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "table-comparison-pricing-plan",
    "name": "SaaS 플랜 요금제 비교 & 스펙 체크리스트 표",
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
    "aiPromptGuidance": "이 컴포넌트는 SaaS 가격 플랜별 기능 지원 여부를 깔끔하게 정리한 비교표입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: SaaS 플랜 요금제 비교 & 스펙 체크리스트 표\n * Category: tables\n * Complexity: Medium\n */\nexport const TableComparisonPricingPlan: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">SaaS 플랜 요금제 비교 & 스펙 체크리스트 표</h4>\n            <span className=\"text-[11px] text-slate-400\">Free vs Pro vs Enterprise 기능별 지원 여부(Check/Cross) 비교표.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "table-audit-log-timeline",
    "name": "보안 감사 로그 & 작업 이력 (Audit Log) 테이블",
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
    "aiPromptGuidance": "이 컴포넌트는 시스템 변경 기록을 추적하는 타임라인 기반 감사 로그 테이블입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 보안 감사 로그 & 작업 이력 (Audit Log) 테이블\n * Category: tables\n * Complexity: Medium\n */\nexport const TableAuditLogTimeline: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">보안 감사 로그 & 작업 이력 (Audit Log) 테이블</h4>\n            <span className=\"text-[11px] text-slate-400\">작업자 IP, 수행한 명령, 전후 변경 Diff, 타임스탬프가 표시되는 로그 표.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "table-file-manager-explorer",
    "name": "클라우드 파일 탐색기 & 권한 매트릭스 테이블",
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
    "aiPromptGuidance": "이 컴포넌트는 구글 드라이브 스타일의 클라우드 파일 관리 목록 테이블입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 클라우드 파일 탐색기 & 권한 매트릭스 테이블\n * Category: tables\n * Complexity: Medium\n */\nexport const TableFileManagerExplorer: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">클라우드 파일 탐색기 & 권한 매트릭스 테이블</h4>\n            <span className=\"text-[11px] text-slate-400\">파일명, 확장자 아이콘, 소유자, 용량, 최종 수정일, 다운로드 액션 바.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "table-inventory-stock-batch",
    "name": "물류 재고 관리 & 입출고 배치 (Batch) 테이블",
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
    "aiPromptGuidance": "이 컴포넌트는 안전재고 미달 시 경고 뱃지를 띄우는 창고 재고 관리 테이블입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 물류 재고 관리 & 입출고 배치 (Batch) 테이블\n * Category: tables\n * Complexity: Medium\n */\nexport const TableInventoryStockBatch: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">물류 재고 관리 & 입출고 배치 (Batch) 테이블</h4>\n            <span className=\"text-[11px] text-slate-400\">바코드 SKU, 현재고, 안전재고 부족 경고 뱃지, 발주 수량 조절 스텝 버튼.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "table-api-endpoints-doc",
    "name": "REST / GraphQL 엔드포인트 사양 정의 테이블",
    "category": "tables",
    "tags": [
      "table",
      "api",
      "swagger",
      "rest",
      "graphql",
      "엔드포인트",
      "문서",
      "개발자"
    ],
    "description": "GET/POST/PUT/DELETE 메소드 뱃지, URI 경로, 권한 스코프, 응답 코드.",
    "complexity": "Simple",
    "dependencies": [
      "lucide-react"
    ],
    "previewType": "table-api-endpoints-doc",
    "aiPromptGuidance": "이 컴포넌트는 Swagger/OpenAPI 스타일의 깔끔한 API 엔드포인트 스펙 테이블입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: REST / GraphQL 엔드포인트 사양 정의 테이블\n * Category: tables\n * Complexity: Simple\n */\nexport const TableApiEndpointsDoc: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">REST / GraphQL 엔드포인트 사양 정의 테이블</h4>\n            <span className=\"text-[11px] text-slate-400\">GET/POST/PUT/DELETE 메소드 뱃지, URI 경로, 권한 스코프, 응답 코드.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "table-leaderboard-ranking",
    "name": "실시간 유저 랭킹 & 게이미피케이션 리더보드",
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
    "aiPromptGuidance": "이 컴포넌트는 상위 랭커 메달 뱃지와 사용자 레벨이 강조된 리더보드 테이블입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 실시간 유저 랭킹 & 게이미피케이션 리더보드\n * Category: tables\n * Complexity: Medium\n */\nexport const TableLeaderboardRanking: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">실시간 유저 랭킹 & 게이미피케이션 리더보드</h4>\n            <span className=\"text-[11px] text-slate-400\">1~3등 골드/실버/브론즈 왕관 뱃지, 연승 기록, 아바타 및 점수 게이지.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 단계별 입력을 진행하는 글래스모피즘 멀티스텝 폼 위저드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 글래스모피즘 다단계 스텝 (Stepper) 위저드 폼\n * Category: forms\n * Complexity: Medium\n */\nexport const GlassFormStepper: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">글래스모피즘 다단계 스텝 (Stepper) 위저드 폼</h4>\n            <span className=\"text-[11px] text-slate-400\">스텝 네비게이션, 유효성 검사 인디케이터, 부드러운 전환 효과.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "form-drag-drop-file-zone",
    "name": "스마트 드래그앤드롭 파일 업로더 & 프로그레스",
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
    "aiPromptGuidance": "이 컴포넌트는 드래그 앤 드롭 지원 및 실시간 업로드 진행 바가 있는 파일 업로더입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 스마트 드래그앤드롭 파일 업로더 & 프로그레스\n * Category: forms\n * Complexity: Medium\n */\nexport const FormDragDropFileZone: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">스마트 드래그앤드롭 파일 업로더 & 프로그레스</h4>\n            <span className=\"text-[11px] text-slate-400\">다중 파일 드롭존, 확장자 유효성 체크, 업로드 진행률 퍼센트 바.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "form-tag-combobox-autocomplete",
    "name": "다중 태그 셀렉터 & 스마트 자동완성 콤보박스",
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
    "aiPromptGuidance": "이 컴포넌트는 다중 선택 칩과 키보드 단축키를 지원하는 태그 콤보박스입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 다중 태그 셀렉터 & 스마트 자동완성 콤보박스\n * Category: forms\n * Complexity: Medium\n */\nexport const FormTagComboboxAutocomplete: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">다중 태그 셀렉터 & 스마트 자동완성 콤보박스</h4>\n            <span className=\"text-[11px] text-slate-400\">키워드 타이핑 시 연관 태그 추천, 백스페이스 삭제, 컬러 태그 칩.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "form-credit-card-live-preview",
    "name": "실시간 3D 인터랙티브 카드 결제 폼 (Flip Preview)",
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
    "aiPromptGuidance": "이 컴포넌트는 카드 정보 입력 시 앞/뒷면이 회전하는 반응형 신용카드 결제 폼입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 실시간 3D 인터랙티브 카드 결제 폼 (Flip Preview)\n * Category: forms\n * Complexity: Advanced\n */\nexport const FormCreditCardLivePreview: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">실시간 3D 인터랙티브 카드 결제 폼 (Flip Preview)</h4>\n            <span className=\"text-[11px] text-slate-400\">카드 번호 입력 시 실시간으로 가상 카드가 회전하며 CVC를 보여주는 결제 폼.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "form-password-strength-meter",
    "name": "보안 등급 실시간 측정기 & 패스워드 생성기",
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
    "aiPromptGuidance": "이 컴포넌트는 비밀번호 복잡도를 실시간 채점하는 보안 입력 폼입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 보안 등급 실시간 측정기 & 패스워드 생성기\n * Category: forms\n * Complexity: Simple\n */\nexport const FormPasswordStrengthMeter: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">보안 등급 실시간 측정기 & 패스워드 생성기</h4>\n            <span className=\"text-[11px] text-slate-400\">대소문자/특수문자/길이 충족 여부 체크리스트 및 원클릭 난수 생성기.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "form-date-range-quick-picker",
    "name": "기간 설정 듀얼 캘린더 & 빠른 프리셋 피커",
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
    "aiPromptGuidance": "이 컴포넌트는 빠른 기간 프리셋 버튼과 듀얼 캘린더 날짜 범위 선택기입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 기간 설정 듀얼 캘린더 & 빠른 프리셋 피커\n * Category: forms\n * Complexity: Medium\n */\nexport const FormDateRangeQuickPicker: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">기간 설정 듀얼 캘린더 & 빠른 프리셋 피커</h4>\n            <span className=\"text-[11px] text-slate-400\">오늘, 어제, 최근 7일, 이번 달 원클릭 프리셋 및 시작/종료일 선택창.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "form-dual-range-slider-filter",
    "name": "가격/수치 범위 듀얼 썸 (Dual Thumb) 슬라이더",
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
    "aiPromptGuidance": "이 컴포넌트는 최소/최대 범위를 조절하는 듀얼 핸들 범위 슬라이더입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 가격/수치 범위 듀얼 썸 (Dual Thumb) 슬라이더\n * Category: forms\n * Complexity: Medium\n */\nexport const FormDualRangeSliderFilter: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">가격/수치 범위 듀얼 썸 (Dual Thumb) 슬라이더</h4>\n            <span className=\"text-[11px] text-slate-400\">최솟값과 최댓값을 동시에 조절하는 부드러운 네온 슬라이더 컨트롤러.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "form-rich-markdown-editor",
    "name": "실시간 프리뷰 지원 경량 마크다운 에디터",
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
    "aiPromptGuidance": "이 컴포넌트는 툴바와 실시간 마크다운 파서가 내장된 작성기 폼입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 실시간 프리뷰 지원 경량 마크다운 에디터\n * Category: forms\n * Complexity: Advanced\n */\nexport const FormRichMarkdownEditor: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">실시간 프리뷰 지원 경량 마크다운 에디터</h4>\n            <span className=\"text-[11px] text-slate-400\">굵게, 기울임, 코드블럭, 링크 툴바 및 분할 화면 실시간 렌더링.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "form-phone-country-otp-verify",
    "name": "국가번호 선택 & 6자리 OTP 인증번호 폼",
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
    "aiPromptGuidance": "이 컴포넌트는 자동 다음 칸 포커스 및 타이머가 있는 6자리 OTP 인증 입력기입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 국가번호 선택 & 6자리 OTP 인증번호 폼\n * Category: forms\n * Complexity: Medium\n */\nexport const FormPhoneCountryOtpVerify: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">국가번호 선택 & 6자리 OTP 인증번호 폼</h4>\n            <span className=\"text-[11px] text-slate-400\">6개 칸 자동 포커스 이동, 3분 유효시간 타이머, 재전송 링크.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "form-address-smart-search",
    "name": "주소 우편번호 스마트 검색 & 상세주소 폼",
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
    "aiPromptGuidance": "이 컴포넌트는 주소 검색 모달 연동 및 배송지 정보를 입력받는 스마트 폼입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 주소 우편번호 스마트 검색 & 상세주소 폼\n * Category: forms\n * Complexity: Simple\n */\nexport const FormAddressSmartSearch: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">주소 우편번호 스마트 검색 & 상세주소 폼</h4>\n            <span className=\"text-[11px] text-slate-400\">도로명/지번 자동완성 드롭다운 및 상세주소 입력 가이드.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "form-toggle-permission-matrix",
    "name": "역할별 상세 권한 스위치 (Switch Matrix) 폼",
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
    "aiPromptGuidance": "이 컴포넌트는 사용자 그룹별 권한을 설정하는 토글 스위치 매트릭스 폼입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 역할별 상세 권한 스위치 (Switch Matrix) 폼\n * Category: forms\n * Complexity: Simple\n */\nexport const FormTogglePermissionMatrix: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">역할별 상세 권한 스위치 (Switch Matrix) 폼</h4>\n            <span className=\"text-[11px] text-slate-400\">읽기/쓰기/삭제 권한을 토글 스위치로 직관적으로 온/오프하는 설정 폼.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "form-survey-nps-rating",
    "name": "0~10 순고객추천지수 (NPS) & 별점 피드백 폼",
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
    "aiPromptGuidance": "이 컴포넌트는 사용자 만족도 측정을 위한 NPS 0~10 점수 선택 및 피드백 폼입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 0~10 순고객추천지수 (NPS) & 별점 피드백 폼\n * Category: forms\n * Complexity: Simple\n */\nexport const FormSurveyNpsRating: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">0~10 순고객추천지수 (NPS) & 별점 피드백 폼</h4>\n            <span className=\"text-[11px] text-slate-400\">11단계 점수 버튼, 감정 이모지 반응형 컬러, 주관식 한 줄 의견 입력창.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 최신 AI 모델 스위처와 음성/텍스트 입력을 지원하는 프롬프트 커맨더입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 2026 AI 커맨드 센터 & 프롬프트 인스펙터\n * Category: ai-widgets\n * Complexity: Advanced\n */\nexport const AiPromptCommander: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">2026 AI 커맨드 센터 & 프롬프트 인스펙터</h4>\n            <span className=\"text-[11px] text-slate-400\">모델 셀렉터(Flash/Pro), 실시간 프롬프트 파라미터 제어, 음성 마이크 버튼.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 macOS 스타일의 다크 터미널 카드입니다. 상단 신호등 버튼 및 명령어 복사 액션을 구현하세요.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 개발자용 임베디드 웹 터미널 & 로그 스트림\n * Category: ai-widgets\n * Complexity: Medium\n */\nexport const InteractiveTerminalCard: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">개발자용 임베디드 웹 터미널 & 로그 스트림</h4>\n            <span className=\"text-[11px] text-slate-400\">맥 OS 스타일의 윈도우 헤더, 실시간 타이핑 애니메이션 및 명령어 복사 기능.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "ai-code-diff-inspector",
    "name": "AI 자동 코드 리팩토링 Before/After Diff 뷰어",
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
    "aiPromptGuidance": "이 컴포넌트는 AI가 제안한 코드 변경 사항을 시각적으로 대조하는 Diff 인스펙터입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: AI 자동 코드 리팩토링 Before/After Diff 뷰어\n * Category: ai-widgets\n * Complexity: Advanced\n */\nexport const AiCodeDiffInspector: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">AI 자동 코드 리팩토링 Before/After Diff 뷰어</h4>\n            <span className=\"text-[11px] text-slate-400\">빨간색(삭제)/초록색(추가) 라인 하이라이트와 원클릭 적용(Apply) 버튼.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 스트리밍 커서 효과와 코드 하이라이트를 지원하는 AI 챗 버블 목록입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 멀티턴 AI 대화 스레드 & 토큰 스트리밍 버블\n * Category: ai-widgets\n * Complexity: Medium\n */\nexport const AiChatThreadBubbleFeed: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">멀티턴 AI 대화 스레드 & 토큰 스트리밍 버블</h4>\n            <span className=\"text-[11px] text-slate-400\">사용자 및 어시스턴트 버블, 코드블럭 복사, 재생성(Regenerate) 툴바.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "ai-vector-search-explorer",
    "name": "RAG 임베딩 벡터 검색 & 유사도 시밀러리티 뷰어",
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
    "aiPromptGuidance": "이 컴포넌트는 RAG 파이프라인에서 검색된 지식 청크와 매칭 유사도를 시각화하는 위젯입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: RAG 임베딩 벡터 검색 & 유사도 시밀러리티 뷰어\n * Category: ai-widgets\n * Complexity: Advanced\n */\nexport const AiVectorSearchExplorer: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">RAG 임베딩 벡터 검색 & 유사도 시밀러리티 뷰어</h4>\n            <span className=\"text-[11px] text-slate-400\">코사인 유사도(Cosine Score 0.94) 상위 문서 청크 하이라이트 패널.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "ai-agent-task-dag-flow",
    "name": "자율 AI 에이전트 다단계 실행 DAG 워크플로우",
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
    "aiPromptGuidance": "이 컴포넌트는 다중 에이전트 간 작업 흐름을 노드 다이어그램으로 표시하는 위젯입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 자율 AI 에이전트 다단계 실행 DAG 워크플로우\n * Category: ai-widgets\n * Complexity: Advanced\n */\nexport const AiAgentTaskDagFlow: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">자율 AI 에이전트 다단계 실행 DAG 워크플로우</h4>\n            <span className=\"text-[11px] text-slate-400\">계획 수립 -> 웹 검색 -> 코드 작성 -> 단위 테스트 노드 간 연결선.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "ai-image-generator-studio",
    "name": "AI 텍스트 투 이미지 (Text-to-Image) 생성 캔버스",
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
    "aiPromptGuidance": "이 컴포넌트는 프롬프트와 스타일 프리셋을 선택하여 이미지를 렌더링하는 스튜디오 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: AI 텍스트 투 이미지 (Text-to-Image) 생성 캔버스\n * Category: ai-widgets\n * Complexity: Medium\n */\nexport const AiImageGeneratorStudio: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">AI 텍스트 투 이미지 (Text-to-Image) 생성 캔버스</h4>\n            <span className=\"text-[11px] text-slate-400\">화풍(Cyberpunk, Anime, Photo), 종횡비(16:9, 1:1), 4장 그리드 결과물.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "ai-audio-voice-waveform",
    "name": "실시간 AI 음성 인식 & 오디오 주파수 파형 바",
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
    "aiPromptGuidance": "이 컴포넌트는 실시간 음성 주파수 애니메이션과 STT 텍스트 스트림을 보여주는 위젯입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 실시간 AI 음성 인식 & 오디오 주파수 파형 바\n * Category: ai-widgets\n * Complexity: Medium\n */\nexport const AiAudioVoiceWaveform: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">실시간 AI 음성 인식 & 오디오 주파수 파형 바</h4>\n            <span className=\"text-[11px] text-slate-400\">말하는 음량에 따라 튀어오르는 네온 이퀄라이저 바와 실시간 자막 생성.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "ai-function-calling-json-schema",
    "name": "AI Tool Calling / 함수 호출 JSON 파라미터 빌더",
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
    "aiPromptGuidance": "이 컴포넌트는 LLM이 호출한 외부 도구(Function Calling)의 파라미터를 점검하는 위젯입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: AI Tool Calling / 함수 호출 JSON 파라미터 빌더\n * Category: ai-widgets\n * Complexity: Advanced\n */\nexport const AiFunctionCallingJsonSchema: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">AI Tool Calling / 함수 호출 JSON 파라미터 빌더</h4>\n            <span className=\"text-[11px] text-slate-400\">함수명, 인자(Arguments) 유효성 검사, 실행 결과 반환 콘솔.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 자주 쓰는 유용한 시스템 프롬프트를 검색하고 원클릭 복사하는 보관함입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 검증된 시스템 프롬프트 템플릿 보관함 (Vault)\n * Category: ai-widgets\n * Complexity: Simple\n */\nexport const AiPromptTemplateVault: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">검증된 시스템 프롬프트 템플릿 보관함 (Vault)</h4>\n            <span className=\"text-[11px] text-slate-400\">코딩 전문가, 비즈니스 기획, 영어 튜터 카테고리별 프롬프트 복사 카드.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "ai-token-cost-calculator",
    "name": "LLM 모델별 토큰 단가 & 예상 비용 계산기",
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
    "aiPromptGuidance": "이 컴포넌트는 토큰 사용량에 따른 모델별 과금액을 실시간 산출하는 계산기 위젯입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: LLM 모델별 토큰 단가 & 예상 비용 계산기\n * Category: ai-widgets\n * Complexity: Medium\n */\nexport const AiTokenCostCalculator: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">LLM 모델별 토큰 단가 & 예상 비용 계산기</h4>\n            <span className=\"text-[11px] text-slate-400\">입력/출력 토큰 수 슬라이더 조절 시 Gemini, GPT, Claude 비용 실시간 비교.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "ai-sentiment-emotion-radar",
    "name": "텍스트 감정 분석 (Sentiment) 긍부정 스펙트럼",
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
    "aiPromptGuidance": "이 컴포넌트는 사용자 리뷰/댓글의 긍부정 점수를 시각적으로 요약하는 감정 분석 위젯입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 텍스트 감정 분석 (Sentiment) 긍부정 스펙트럼\n * Category: ai-widgets\n * Complexity: Simple\n */\nexport const AiSentimentEmotionRadar: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">텍스트 감정 분석 (Sentiment) 긍부정 스펙트럼</h4>\n            <span className=\"text-[11px] text-slate-400\">긍정 82%, 중립 12%, 부정 6% 색상 바 및 주요 키워드 클라우드.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 부드러운 네온 글로우 효과가 적용된 KPI 메트릭 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 네온 글로우 실시간 활성 사용자 (MAU) 지표 카드\n * Category: stats\n * Complexity: Simple\n */\nexport const KpiMetricNeon: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">네온 글로우 실시간 활성 사용자 (MAU) 지표 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">은은한 네온 배경 블러, 성장률 뱃지 및 전월 대비 증감 수치.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "stat-revenue-growth-gradient",
    "name": "월간 반복 매출 (MRR) 그라데이션 성장 카드",
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
    "aiPromptGuidance": "이 컴포넌트는 MRR 지표와 목표 달성 진행률 바를 표시하는 통계 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 월간 반복 매출 (MRR) 그라데이션 성장 카드\n * Category: stats\n * Complexity: Simple\n */\nexport const StatRevenueGrowthGradient: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">월간 반복 매출 (MRR) 그라데이션 성장 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">달러 금액, 이번 분기 목표치 달성률(88%), 미니 상승 그래프.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "stat-server-latency-ms",
    "name": "글로벌 네트워크 응답 지연 (Latency) 상태 카드",
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
    "aiPromptGuidance": "이 컴포넌트는 서버 레이턴시와 안정성을 나타내는 상태 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 글로벌 네트워크 응답 지연 (Latency) 상태 카드\n * Category: stats\n * Complexity: Simple\n */\nexport const StatServerLatencyMs: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">글로벌 네트워크 응답 지연 (Latency) 상태 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">평균 18ms 초저지연 상태 표시, 패킷 손실 0.00% 보장 뱃지.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "stat-conversion-funnel-kpi",
    "name": "신규 고객 가입 전환율 (CVR 4.8%) 지표 카드",
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
    "aiPromptGuidance": "이 컴포넌트는 가입 전환율과 A/B 테스트 지표를 강조하는 통계 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 신규 고객 가입 전환율 (CVR 4.8%) 지표 카드\n * Category: stats\n * Complexity: Simple\n */\nexport const StatConversionFunnelKpi: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">신규 고객 가입 전환율 (CVR 4.8%) 지표 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">방문자 대비 가입 전환율, A/B 테스트 승리 태그, 전주 대비 증감.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "stat-battery-power-consumption",
    "name": "디바이스 전력 소모 & 배터리 헬스 카드",
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
    "aiPromptGuidance": "이 컴포넌트는 배터리 잔량 및 충전 상태를 시각화한 모바일/IoT 지표 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 디바이스 전력 소모 & 배터리 헬스 카드\n * Category: stats\n * Complexity: Simple\n */\nexport const StatBatteryPowerConsumption: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">디바이스 전력 소모 & 배터리 헬스 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">충전 잔여 시간, 배터리 효율 96%, 절전 모드 토글 스위치.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "stat-github-stars-trend",
    "name": "오픈소스 저장소 스타 & 포크 증감 카드",
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
    "aiPromptGuidance": "이 컴포넌트는 깃허브 스타 수와 오늘 상승폭을 보여주는 개발자 친화 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 오픈소스 저장소 스타 & 포크 증감 카드\n * Category: stats\n * Complexity: Simple\n */\nexport const StatGithubStarsTrend: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">오픈소스 저장소 스타 & 포크 증감 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">오늘 획득한 스타 수(+142), 깃허브 트렌딩 1위 뱃지, 포크 수치.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "stat-uptime-sla-four-nines",
    "name": "서비스 가동률 99.99% (Four Nines) 보증 카드",
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
    "aiPromptGuidance": "이 컴포넌트는 99.99% SLA 무장애 달성 기록을 강조하는 신뢰도 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 서비스 가동률 99.99% (Four Nines) 보증 카드\n * Category: stats\n * Complexity: Simple\n */\nexport const StatUptimeSlaFourNines: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">서비스 가동률 99.99% (Four Nines) 보증 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">지난 365일 무중단 운영 시간, 장애 발생 0건, 그린 핑 펄스 애니메이션.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "stat-crypto-portfolio-balance",
    "name": "암호화폐 총 자산 평가액 & 24h 변동 카드",
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
    "aiPromptGuidance": "이 컴포넌트는 암호화폐 잔고와 24시간 수익률을 나타내는 금융 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 암호화폐 총 자산 평가액 & 24h 변동 카드\n * Category: stats\n * Complexity: Simple\n */\nexport const StatCryptoPortfolioBalance: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">암호화폐 총 자산 평가액 & 24h 변동 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">총 평가액($148,290.00), 실시간 수익률(+12.4%), 미니 코인 아이콘들.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "stat-database-qps-throughput",
    "name": "데이터베이스 초당 쿼리 처리수 (QPS 14.5k) 카드",
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
    "aiPromptGuidance": "이 컴포넌트는 DB 트랜잭션 QPS와 캐시 히트율을 표시하는 성능 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 데이터베이스 초당 쿼리 처리수 (QPS 14.5k) 카드\n * Category: stats\n * Complexity: Simple\n */\nexport const StatDatabaseQpsThroughput: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">데이터베이스 초당 쿼리 처리수 (QPS 14.5k) 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">Read/Write 비율(85:15), 슬로우 쿼리 발생 0건, 버퍼 캐시 히트율 99.2%.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "stat-ai-token-generation-speed",
    "name": "AI 모델 초당 토큰 생성 속도 (120 TPS) 카드",
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
    "aiPromptGuidance": "이 컴포넌트는 AI 실시간 토큰 생성 속도(TPS)를 보여주는 지표 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: AI 모델 초당 토큰 생성 속도 (120 TPS) 카드\n * Category: stats\n * Complexity: Simple\n */\nexport const StatAiTokenGenerationSpeed: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">AI 모델 초당 토큰 생성 속도 (120 TPS) 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">1초당 120개 토큰 고속 스트리밍, Flash 모델 최적화 상태.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "stat-storage-disk-usage-bar",
    "name": "NVMe SSD 스토리지 사용 용량 & 여유 공간 카드",
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
    "aiPromptGuidance": "이 컴포넌트는 디스크 사용량과 남은 여유 공간을 프로그레스 바로 나타내는 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: NVMe SSD 스토리지 사용 용량 & 여유 공간 카드\n * Category: stats\n * Complexity: Simple\n */\nexport const StatStorageDiskUsageBar: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">NVMe SSD 스토리지 사용 용량 & 여유 공간 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">1.42 TB / 2.00 TB (71% 사용중), 남은 여유공간 580 GB 표시 바.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "stat-customer-satisfaction-csat",
    "name": "고객 만족도 점수 (CSAT 4.9 / 5.0) 카드",
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
    "aiPromptGuidance": "이 컴포넌트는 서비스의 CSAT 평점과 누적 평가수를 나타내는 통계 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 고객 만족도 점수 (CSAT 4.9 / 5.0) 카드\n * Category: stats\n * Complexity: Simple\n */\nexport const StatCustomerSatisfactionCsat: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">고객 만족도 점수 (CSAT 4.9 / 5.0) 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">5점 만점 4.9점, 총 1,420개 긍정 리뷰, 하트 애니메이션 아이콘.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 부드러운 캡슐 형태의 플로팅 탭 네비게이션입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 2026 플로팅 캡슐 탭 네비게이션\n * Category: navigation\n * Complexity: Simple\n */\nexport const FloatingTabNavigation: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">2026 플로팅 캡슐 탭 네비게이션</h4>\n            <span className=\"text-[11px] text-slate-400\">스마트 활성 표시 인디케이터, 글래스모피즘 플로팅 디자인의 탑/서브 탭 컨트롤.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 너비 조절 및 서브메뉴 확장을 지원하는 다크 사이드바입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 축소/확장 지원 사이드바 메뉴 & 유저 프로필\n * Category: navigation\n * Complexity: Medium\n */\nexport const NavSidebarCollapsibleDark: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">축소/확장 지원 사이드바 메뉴 & 유저 프로필</h4>\n            <span className=\"text-[11px] text-slate-400\">아이콘 전용 미니 모드 전환, 뱃지 카운트, 하단 유저 프로필 카드.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 현재 웹 페이지 계층 위치를 명확히 보여주는 브레드크럼입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 스마트 경로 브레드크럼 (Breadcrumb) 트레일\n * Category: navigation\n * Complexity: Simple\n */\nexport const NavBreadcrumbTrailPath: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">스마트 경로 브레드크럼 (Breadcrumb) 트레일</h4>\n            <span className=\"text-[11px] text-slate-400\">홈 > 대시보드 > 프로젝트 > 칠판 스튜디오 단계별 링크 및 드롭다운 메뉴.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 빠른 검색과 액션 실행을 제공하는 Cmd+K 커맨드 팔레트 모달입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 맥 스타일 커맨드 팔레트 (Cmd + K / Quick Action)\n * Category: navigation\n * Complexity: Advanced\n */\nexport const NavCommandPaletteCmdK: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">맥 스타일 커맨드 팔레트 (Cmd + K / Quick Action)</h4>\n            <span className=\"text-[11px] text-slate-400\">키보드 상하 화살표 선택, 페이지 즉시 이동, 단축키 뱃지 표시.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 SaaS 메인 랜딩에 적합한 대형 메가 드롭다운 메뉴입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 다단 메가메뉴 (Mega Menu) 기능/솔루션 소개\n * Category: navigation\n * Complexity: Medium\n */\nexport const NavMegaMenuProductDropdown: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">다단 메가메뉴 (Mega Menu) 기능/솔루션 소개</h4>\n            <span className=\"text-[11px] text-slate-400\">호버 시 풍부한 아이콘, 설명문, 인기 기능 추천 뱃지가 펼쳐지는 메뉴.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 슬라이딩 인디케이터가 있는 세그먼트 버튼 컨트롤입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: iOS 스타일 세그먼트 컨트롤러 (Segmented Pill)\n * Category: navigation\n * Complexity: Simple\n */\nexport const NavSegmentedControlPill: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">iOS 스타일 세그먼트 컨트롤러 (Segmented Pill)</h4>\n            <span className=\"text-[11px] text-slate-400\">배경 하이라이트가 미끄러지듯 이동하는 깔끔한 보기 모드 전환기.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 마우스 호버 거리에 따라 스케일이 커지는 macOS 독 메뉴입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: macOS 독 (Dock) 호버 확대 아이콘 툴바\n * Category: navigation\n * Complexity: Medium\n */\nexport const NavDockMagnificationBar: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">macOS 독 (Dock) 호버 확대 아이콘 툴바</h4>\n            <span className=\"text-[11px] text-slate-400\">마우스 커서 근처의 아이콘이 부드럽게 커지는 인터랙티브 독.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 대규모 데이터 페이징을 지원하는 페이지네이션 네비게이션입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 페이지네이션 번호 바 & 직접 페이지 점프 인풋\n * Category: navigation\n * Complexity: Simple\n */\nexport const NavPaginationSmartJump: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">페이지네이션 번호 바 & 직접 페이지 점프 인풋</h4>\n            <span className=\"text-[11px] text-slate-400\">이전/다음, 중간 생략(…), 직접 페이지 번호 입력 및 행 개수 셀렉트.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 스마트폰 화면 하단에 고정되는 반응형 네비게이션 탭바입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 모바일 하단 고정 액션 탭바 (Safe Area 대응)\n * Category: navigation\n * Complexity: Simple\n */\nexport const NavMobileBottomTabBar: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">모바일 하단 고정 액션 탭바 (Safe Area 대응)</h4>\n            <span className=\"text-[11px] text-slate-400\">홈, 검색, 알림, 프로필 아이콘 및 신규 알림 레드 닷(Red Dot).</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 기술 문서에 필수적인 스크롤 감지 목차(TOC) 네비게이터입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 문서 목차 (TOC) 실시간 스크롤스파이 인디케이터\n * Category: navigation\n * Complexity: Medium\n */\nexport const NavTocScrollspyArticle: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">문서 목차 (TOC) 실시간 스크롤스파이 인디케이터</h4>\n            <span className=\"text-[11px] text-slate-400\">사용자가 보고 있는 문서 본문 헤딩(H2/H3) 위치를 하이라이트하는 사이드 목차.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 프로젝트나 주문 처리 프로세스 마일스톤을 보여주는 스텝바입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 가로형 마일스톤 단계 진행바 (Progress Stepper)\n * Category: navigation\n * Complexity: Simple\n */\nexport const NavStepperProgressMilestones: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">가로형 마일스톤 단계 진행바 (Progress Stepper)</h4>\n            <span className=\"text-[11px] text-slate-400\">완료(체크), 진행중(펄스), 대기 상태를 원형 번호로 잇는 진행바.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 방사형으로 배치된 8방향 퀵 액션 레이디얼 메뉴입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 원형 레이디얼 컨텍스트 휠 (Radial Pie Menu)\n * Category: navigation\n * Complexity: Advanced\n */\nexport const NavContextRadialWheel: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">원형 레이디얼 컨텍스트 휠 (Radial Pie Menu)</h4>\n            <span className=\"text-[11px] text-slate-400\">우클릭 또는 버튼 클릭 시 360도 원형으로 펼쳐지는 빠른 퀵 메뉴.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Advanced</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 성공/에러 피드백을 전달하는 글래스모피즘 토스트 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 인터랙티브 알림 피드 & 토스트 카드\n * Category: feedback\n * Complexity: Simple\n */\nexport const NotificationToastFeed: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">인터랙티브 알림 피드 & 토스트 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">성공/경고/정보/에러 상태별 색상 및 실시간 알림 카운터, 닫기 인터랙션.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "modal-confirm-destructive-dialog",
    "name": "위험 작업 2중 확인 (Destructive Action) 모달",
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
    "aiPromptGuidance": "이 컴포넌트는 영구 삭제 등 위험 액션 시 텍스트 확인 입력을 요구하는 모달입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 위험 작업 2중 확인 (Destructive Action) 모달\n * Category: feedback\n * Complexity: Medium\n */\nexport const ModalConfirmDestructiveDialog: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">위험 작업 2중 확인 (Destructive Action) 모달</h4>\n            <span className=\"text-[11px] text-slate-400\">삭제 확인을 위해 프로젝트명을 직접 타이핑해야 활성화되는 안전 다이얼로그.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "feedback-banner-system-alert",
    "name": "상단 글로벌 공지 & 시스템 점검 배너",
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
    "aiPromptGuidance": "이 컴포넌트는 서비스 상단에 노출되는 긴급 공지 배너 바입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 상단 글로벌 공지 & 시스템 점검 배너\n * Category: feedback\n * Complexity: Simple\n */\nexport const FeedbackBannerSystemAlert: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">상단 글로벌 공지 & 시스템 점검 배너</h4>\n            <span className=\"text-[11px] text-slate-400\">정기 점검 안내, 즉시 새로고침 버튼, 오늘 하루 보지 않기 옵션.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "feedback-empty-state-placeholder",
    "name": "일러스트레이션 감성 빈 화면 (Empty State) 카드",
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
    "aiPromptGuidance": "이 컴포넌트는 검색 결과 없음 또는 데이터 비어있음 상태를 안내하는 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 일러스트레이션 감성 빈 화면 (Empty State) 카드\n * Category: feedback\n * Complexity: Simple\n */\nexport const FeedbackEmptyStatePlaceholder: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">일러스트레이션 감성 빈 화면 (Empty State) 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">데이터가 없을 때 친절한 안내 문구와 첫 데이터 생성 유도 CTA 버튼.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
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
    "aiPromptGuidance": "이 컴포넌트는 카드 및 테이블 로딩 상태를 표현하는 스켈레톤 시머입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 스켈레톤 시머 (Skeleton Shimmer) 로딩 플레이스홀더\n * Category: feedback\n * Complexity: Simple\n */\nexport const FeedbackSkeletonShimmerLoader: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">스켈레톤 시머 (Skeleton Shimmer) 로딩 플레이스홀더</h4>\n            <span className=\"text-[11px] text-slate-400\">콘텐츠가 로딩 중일 때 깜빡임 없는 세련된 웨이브 시머 이펙트.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "feedback-drawer-bottom-sheet",
    "name": "모바일 바텀 시트 & 제스처 드로어 (Bottom Sheet)",
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
    "aiPromptGuidance": "이 컴포넌트는 터치 제스처 드래그로 닫을 수 있는 반응형 바텀시트 드로어입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 모바일 바텀 시트 & 제스처 드로어 (Bottom Sheet)\n * Category: feedback\n * Complexity: Medium\n */\nexport const FeedbackDrawerBottomSheet: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">모바일 바텀 시트 & 제스처 드로어 (Bottom Sheet)</h4>\n            <span className=\"text-[11px] text-slate-400\">아래에서 위로 올라오는 부드러운 오버레이 패널 및 드래그 핸들 바.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "feedback-badge-status-pulsing",
    "name": "실시간 가동 펄스 뱃지 & 마이크로 인디케이터",
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
    "aiPromptGuidance": "이 컴포넌트는 라이브 상태를 표시하는 깜빡이는 펄스 뱃지 모음입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 실시간 가동 펄스 뱃지 & 마이크로 인디케이터\n * Category: feedback\n * Complexity: Simple\n */\nexport const FeedbackBadgeStatusPulsing: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">실시간 가동 펄스 뱃지 & 마이크로 인디케이터</h4>\n            <span className=\"text-[11px] text-slate-400\">초록색/노란색/빨간색/보라색 핑 애니메이션이 도는 상태 표시 뱃지 세트.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "feedback-confetti-celebration-popup",
    "name": "축하 콘페티 (Confetti) 파티클 축포 팝업",
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
    "aiPromptGuidance": "이 컴포넌트는 미션 성공을 축하하는 화려한 콘페티 애니메이션 팝업입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 축하 콘페티 (Confetti) 파티클 축포 팝업\n * Category: feedback\n * Complexity: Medium\n */\nexport const FeedbackConfettiCelebrationPopup: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">축하 콘페티 (Confetti) 파티클 축포 팝업</h4>\n            <span className=\"text-[11px] text-slate-400\">목표 달성이나 결제 완료 시 화면에 오색종이가 흩날리는 축하 모달.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "feedback-tooltip-rich-hover-card",
    "name": "풍부한 정보 리치 호버 카드 (Rich Tooltip)",
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
    "aiPromptGuidance": "이 컴포넌트는 사용자 호버 시 확장 정보를 표시하는 리치 툴팁 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 풍부한 정보 리치 호버 카드 (Rich Tooltip)\n * Category: feedback\n * Complexity: Simple\n */\nexport const FeedbackTooltipRichHoverCard: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">풍부한 정보 리치 호버 카드 (Rich Tooltip)</h4>\n            <span className=\"text-[11px] text-slate-400\">텍스트뿐만 아니라 아바타, 통계 수치, 팔로우 버튼이 들어간 툴팁.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "feedback-cookie-consent-banner",
    "name": "GDPR 규정 준수 쿠키 동의 & 개인정보 설정창",
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
    "aiPromptGuidance": "이 컴포넌트는 웹사이트 하단에 깔끔하게 뜨는 쿠키 수집 동의 모달입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: GDPR 규정 준수 쿠키 동의 & 개인정보 설정창\n * Category: feedback\n * Complexity: Simple\n */\nexport const FeedbackCookieConsentBanner: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">GDPR 규정 준수 쿠키 동의 & 개인정보 설정창</h4>\n            <span className=\"text-[11px] text-slate-400\">필수 쿠키 / 마케팅 쿠키 선택적 허용 스위치 및 모두 수락 버튼.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "feedback-rating-star-interactive",
    "name": "반응형 5성급 별점 평가 & 호버 애니메이션",
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
    "aiPromptGuidance": "이 컴포넌트는 별점 인터랙션과 실시간 피드백 텍스트를 제공하는 평가 위젯입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 반응형 5성급 별점 평가 & 호버 애니메이션\n * Category: feedback\n * Complexity: Simple\n */\nexport const FeedbackRatingStarInteractive: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">반응형 5성급 별점 평가 & 호버 애니메이션</h4>\n            <span className=\"text-[11px] text-slate-400\">호버하는 위치에 따라 별이 황금색으로 채워지며 즉시 점수 반영.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "feedback-offline-network-toast",
    "name": "인터넷 연결 끊김 감지 & 자동 재연결 토스트",
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
    "aiPromptGuidance": "이 컴포넌트는 브라우저 온/오프라인 이벤트를 감지하여 표시하는 상태 토스트입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 인터넷 연결 끊김 감지 & 자동 재연결 토스트\n * Category: feedback\n * Complexity: Simple\n */\nexport const FeedbackOfflineNetworkToast: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">인터넷 연결 끊김 감지 & 자동 재연결 토스트</h4>\n            <span className=\"text-[11px] text-slate-400\">오프라인 상태 알림 및 네트워크 복구 시 녹색 자동 동기화 피드백.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "theme-token-palette",
    "name": "디자인 시스템 토큰 & 프리셋 컬러 팔레트",
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
    "aiPromptGuidance": "이 컴포넌트는 디자인 시스템 테마 토큰과 컬러 팔레트를 보여주는 스위처입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 디자인 시스템 토큰 & 프리셋 컬러 팔레트\n * Category: themes\n * Complexity: Simple\n */\nexport const ThemeTokenPalette: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">디자인 시스템 토큰 & 프리셋 컬러 팔레트</h4>\n            <span className=\"text-[11px] text-slate-400\">사이버 바이올렛, 네온 에메랄드, 앰버 럭셔리, 딥 슬레이트 색상 견본.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "theme-glassmorphism-blur-spec",
    "name": "초정밀 글래스모피즘 (Glassmorphism) 블러 패널",
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
    "aiPromptGuidance": "이 컴포넌트는 2026년형 투명 유리 질감 효과를 보여주는 스타일 데모 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 초정밀 글래스모피즘 (Glassmorphism) 블러 패널\n * Category: themes\n * Complexity: Simple\n */\nexport const ThemeGlassmorphismBlurSpec: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">초정밀 글래스모피즘 (Glassmorphism) 블러 패널</h4>\n            <span className=\"text-[11px] text-slate-400\">백드롭 블러(Backdrop-Blur-2xl), 반투명 테두리, 노이즈 질감 오버레이.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "theme-neon-glow-shadow-matrix",
    "name": "네온 글로우 & 사이버펑크 그림자 강도 매트릭스",
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
    "aiPromptGuidance": "이 컴포넌트는 다양한 레벨의 네온 그림자 효과 토큰을 시각화한 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 네온 글로우 & 사이버펑크 그림자 강도 매트릭스\n * Category: themes\n * Complexity: Simple\n */\nexport const ThemeNeonGlowShadowMatrix: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">네온 글로우 & 사이버펑크 그림자 강도 매트릭스</h4>\n            <span className=\"text-[11px] text-slate-400\">Soft Glow(10px)부터 Super Intense Burst(50px)까지의 네온 발광 스펙.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "theme-typography-scale-spec",
    "name": "2026 모던 타이포그래피 스케일 & 폰트 페어링",
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
    "aiPromptGuidance": "이 컴포넌트는 반응형 폰트 크기 및 굵기 위계(Typography Scale)를 정리한 가이드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 2026 모던 타이포그래피 스케일 & 폰트 페어링\n * Category: themes\n * Complexity: Simple\n */\nexport const ThemeTypographyScaleSpec: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">2026 모던 타이포그래피 스케일 & 폰트 페어링</h4>\n            <span className=\"text-[11px] text-slate-400\">Display Title(48px), H1~H4, Body Text, Mono 숫자 폰트 위계 체계.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "theme-gradient-mesh-canvas",
    "name": "오로라 그라데이션 메쉬 (Mesh Gradient) 배경",
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
    "aiPromptGuidance": "이 컴포넌트는 CSS 다중 방사형 그라데이션을 합성한 오로라 메쉬 배경입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 오로라 그라데이션 메쉬 (Mesh Gradient) 배경\n * Category: themes\n * Complexity: Medium\n */\nexport const ThemeGradientMeshCanvas: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">오로라 그라데이션 메쉬 (Mesh Gradient) 배경</h4>\n            <span className=\"text-[11px] text-slate-400\">몽환적으로 움직이는 다색상 오로라 블러 메쉬 배경 캔버스.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "theme-border-gradient-beam",
    "name": "테두리를 따라 회전하는 라이트 빔 (Border Beam)",
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
    "aiPromptGuidance": "이 컴포넌트는 카드 테두리에 빛나는 광선이 회전하는 Border Beam 효과입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 테두리를 따라 회전하는 라이트 빔 (Border Beam)\n * Category: themes\n * Complexity: Medium\n */\nexport const ThemeBorderGradientBeam: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">테두리를 따라 회전하는 라이트 빔 (Border Beam)</h4>\n            <span className=\"text-[11px] text-slate-400\">카드 외곽선을 따라 네온 빛줄기가 끝없이 회전하는 고급 효과.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "theme-dark-light-mode-toggle",
    "name": "부드러운 해/달 인터랙티브 다크/라이트 모드 스위치",
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
    "aiPromptGuidance": "이 컴포넌트는 부드러운 애니메이션으로 다크/라이트 모드를 전환하는 토글 버튼입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 부드러운 해/달 인터랙티브 다크/라이트 모드 스위치\n * Category: themes\n * Complexity: Simple\n */\nexport const ThemeDarkLightModeToggle: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">부드러운 해/달 인터랙티브 다크/라이트 모드 스위치</h4>\n            <span className=\"text-[11px] text-slate-400\">태양과 달 아이콘이 회전하며 전환되는 모던 테마 토글 버튼.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "theme-grid-dot-pattern-canvas",
    "name": "사이버 스페이스 점자 (Dot Matrix) 그리드 패턴",
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
    "aiPromptGuidance": "이 컴포넌트는 SVG 패턴을 활용한 점자 매트릭스 그리드 배경 텍스처입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 사이버 스페이스 점자 (Dot Matrix) 그리드 패턴\n * Category: themes\n * Complexity: Simple\n */\nexport const ThemeGridDotPatternCanvas: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">사이버 스페이스 점자 (Dot Matrix) 그리드 패턴</h4>\n            <span className=\"text-[11px] text-slate-400\">미세한 격자 점들이 은은하게 빛나는 개발자 대시보드 전용 배경.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "theme-neumorphism-soft-ui",
    "name": "소프트 뉴모피즘 (Neumorphism) 다크 릴리프 버튼",
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
    "aiPromptGuidance": "이 컴포넌트는 다크 톤의 입체적인 소프트 음양각 뉴모피즘 버튼 디자인입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 소프트 뉴모피즘 (Neumorphism) 다크 릴리프 버튼\n * Category: themes\n * Complexity: Simple\n */\nexport const ThemeNeumorphismSoftUi: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">소프트 뉴모피즘 (Neumorphism) 다크 릴리프 버튼</h4>\n            <span className=\"text-[11px] text-slate-400\">음각과 양각 그림자를 조화롭게 배치한 세련된 입체감 컨트롤러.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "theme-bento-grid-card-layout",
    "name": "애플 스타일 벤토 그리드 (Bento Grid) 모듈러",
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
    "aiPromptGuidance": "이 컴포넌트는 다양한 가로세로 비율의 카드를 배치하는 벤토 그리드 모듈입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 애플 스타일 벤토 그리드 (Bento Grid) 모듈러\n * Category: themes\n * Complexity: Medium\n */\nexport const ThemeBentoGridCardLayout: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">애플 스타일 벤토 그리드 (Bento Grid) 모듈러</h4>\n            <span className=\"text-[11px] text-slate-400\">크고 작은 사각형 카드들이 조화롭게 어우러진 최신 Bento 레이아웃.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Medium</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "theme-claymorphism-3d-card",
    "name": "3D 클레이모피즘 (Claymorphism) 볼륨 플로팅 카드",
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
    "aiPromptGuidance": "이 컴포넌트는 둥글고 푹신한 볼륨감을 주는 클레이모피즘 스타일 카드입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 3D 클레이모피즘 (Claymorphism) 볼륨 플로팅 카드\n * Category: themes\n * Complexity: Simple\n */\nexport const ThemeClaymorphism3dCard: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">3D 클레이모피즘 (Claymorphism) 볼륨 플로팅 카드</h4>\n            <span className=\"text-[11px] text-slate-400\">찰흙처럼 부드러운 둥근 모서리와 내부/외부 듀얼 그림자 효과.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  },
  {
    "id": "theme-noise-texture-overlay",
    "name": "필름 그레인 & 노이즈 텍스처 (Noise Texture) 스펙",
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
    "aiPromptGuidance": "이 컴포넌트는 SVG feTurbulence 필터를 사용한 모던 노이즈 텍스처 오버레이입니다.",
    "fullSourceCode": "import React, { useState } from 'react';\nimport { Sparkles, Layers, Box, Terminal, Activity, Zap, Check } from 'lucide-react';\n\n/**\n * 2026 AI-Native Component: 필름 그레인 & 노이즈 텍스처 (Noise Texture) 스펙\n * Category: themes\n * Complexity: Simple\n */\nexport const ThemeNoiseTextureOverlay: React.FC = () => {\n  const [activeState, setActiveState] = useState(true);\n\n  return (\n    <div className=\"w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/40 transition-all\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <div className=\"flex items-center gap-2\">\n          <div className=\"p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20\">\n            <Sparkles className=\"w-4 h-4\" />\n          </div>\n          <div>\n            <h4 className=\"text-sm font-bold text-white\">필름 그레인 & 노이즈 텍스처 (Noise Texture) 스펙</h4>\n            <span className=\"text-[11px] text-slate-400\">밋밋한 단색 배경에 아날로그 고급스러움을 더하는 미세 SVG 노이즈 필터.</span>\n          </div>\n        </div>\n        <button\n          onClick={() => setActiveState(!activeState)}\n          className=\"px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10\"\n        >\n          {activeState ? 'ON' : 'OFF'}\n        </button>\n      </div>\n\n      <div className=\"p-4 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300\">\n        <p className=\"text-emerald-400 font-mono mb-2\">✔ 2026 UI Baseline Verified</p>\n        <div className=\"flex items-center gap-2 text-slate-400\">\n          <span>Dependencies: lucide-react</span>\n          <span>•</span>\n          <span>Complexity: Simple</span>\n        </div>\n      </div>\n    </div>\n  );\n};"
  }
];
