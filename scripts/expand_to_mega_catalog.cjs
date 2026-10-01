const fs = require('fs');
const path = require('path');

// Exhaustive 150+ components generator covering every global D3/ECharts/DevExpress/AG-Grid/BI tool
console.log("=== Generating Massive 160+ Component Master Catalog ===");

const newComponents = [
  // Advanced Charts (D3 / ECharts / SciPy)
  {
    id: "chart-sankey-flow",
    name: "생산 공정 에너지 & 자재 흐름 샌키 다이어그램 (Sankey Flow)",
    category: "charts",
    tags: ["sankey", "flow", "energy", "d3", "흐름도", "샌키", "에너지"],
    description: "원자재 투입부터 각 공정 분기 및 손실(Loss), 최종 완제품까지의 유량 에너지 노드 맵.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-sankey-flow",
    aiPromptGuidance: "D3 스타일 샌키 플로우 다이어그램. 노드 간 가변 리본 폭과 곡선 베지어로 유량을 시각화하세요."
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
    aiPromptGuidance: "동심원 형태의 썬버스트 파티션 차트. 링 클릭 시 해당 하위 세그먼트로 줌인 확대되도록 구현하세요."
  },
  {
    id: "chart-chord-dependency",
    name: "공정 간 상호 연관도 & 부품 전이 코드 (Chord Diagram) 매핑",
    category: "charts",
    tags: ["chord", "dependency", "network", "코드", "연관도", "네트워크"],
    description: "공정 라인 간 자재 전달 및 상호 영향도를 원형 리본 매트릭스로 표현.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-chord-dependency",
    aiPromptGuidance: "원형 둘레의 노드 간 상호 연결 곡선 리본 매트릭스 코드 다이어그램입니다."
  },
  {
    id: "chart-parallel-coordinates",
    name: "다변량 품질 인자 병렬 좌표계 (Parallel Coordinates)",
    category: "charts",
    tags: ["parallel", "multivariate", "spc", "병렬좌표", "다변량", "품질"],
    description: "온도, 압력, 전압, 회전수, 수율 5개 수직 축을 관통하는 다차원 상관관계 선형 궤적.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-parallel-coordinates",
    aiPromptGuidance: "5개 이상의 수직 축을 가로지르는 폴리라인 궤적 렌더링 병렬 좌표계입니다."
  },
  {
    id: "chart-ridgeline-density",
    name: "시간대별 센서 진동 주파수 릿지라인 (Ridgeline Density) 밀도",
    category: "charts",
    tags: ["ridgeline", "density", "joyplot", "릿지라인", "밀도", "주파수"],
    description: "다수의 겹쳐진 산등성이 밀도 곡선(Joyplot)으로 설비 진동 분포 추이를 시각화.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-ridgeline-density",
    aiPromptGuidance: "여러 레이어가 수직으로 겹치는 영역 밀도 곡선 릿지라인 차트입니다."
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
    aiPromptGuidance: "박스와 수염, 이상치 도트를 렌더링하는 통계 박스플롯입니다."
  },
  {
    id: "chart-violin-distribution",
    name: "KDE 커널 밀도 추정 바이올린 플롯 (Violin Plot Distribution)",
    category: "charts",
    tags: ["violin", "kde", "distribution", "바이올린", "커널밀도", "분포"],
    description: "박스플롯과 연속 확률 밀도 곡선을 결합한 대칭형 바이올린 분포도.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-violin-distribution",
    aiPromptGuidance: "좌우 대칭 부드러운 베지어 커널 밀도 곡선과 중앙 박스플롯을 결합하세요."
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
    aiPromptGuidance: "배경 3단계 그라데이션 범위와 목표치 마커, 실제치 바를 결합한 불릿 차트입니다."
  },
  {
    id: "chart-voronoi-partition",
    name: "설비 배치 및 영향 구역 보로노이 다이어그램 (Voronoi Tessellation)",
    category: "charts",
    tags: ["voronoi", "delaunay", "spatial", "보로노이", "공간분할", "영향권"],
    description: "공장 바닥 각 설비 노드 중심의 최근접 다각형 영역 분할 및 이상 발생 구역 하이라이트.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-voronoi-partition",
    aiPromptGuidance: "다각형 공간 분할 테셀레이션 보로노이 셀 그리드 렌더링입니다."
  },
  {
    id: "chart-contour-topography",
    name: "클린룸 열분포 등고선 컨투어 맵 (Contour Density Heatmap)",
    category: "charts",
    tags: ["contour", "topography", "heatmap", "등고선", "열분포", "컨투어"],
    description: "온도/기압 등위선(Iso-line)과 그라데이션 채움으로 공장 내 핫스팟 탐지.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-contour-topography",
    aiPromptGuidance: "다단계 등위선 루프와 밀도 그라데이션을 표현하는 등고선 맵입니다."
  }
];

console.log("Adding exotic chart and industrial controls...");
