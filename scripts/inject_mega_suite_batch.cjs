const fs = require('fs');
const path = require('path');

// 1. Update ComponentRenderer.tsx
const rendererPath = path.join(__dirname, '../src/components/ComponentRenderer.tsx');
let rendererContent = fs.readFileSync(rendererPath, 'utf8');

const importStatement = `import { 
  PolarRoseChartDemo, TernaryPlotDemo, VoronoiMeshDemo, ThermalContourDemo, 
  HighchartsMatrixDemo, EchartsGaugeClusterDemo, AgGridTreeGroupingDemo, 
  Anamorphic3DCardDemo, RaymarchingShaderDemo, DroneSwarmFleetDemo 
} from './renderers/MegaSuiteRenderers';
`;

rendererContent = importStatement + rendererContent;

const handlers = `
  // Mega Suite Exotic & Industrial Web Controls
  if (componentId === 'chart-polar-rose-coxcomb') return <PolarRoseChartDemo />;
  if (componentId === 'chart-ternary-phase-plot') return <TernaryPlotDemo />;
  if (componentId === 'chart-voronoi-facility-mesh') return <VoronoiMeshDemo />;
  if (componentId === 'chart-thermal-contour-map') return <ThermalContourDemo />;
  if (componentId === 'table-highcharts-heat-matrix') return <HighchartsMatrixDemo />;
  if (componentId === 'circular-echarts-triple-gauge') return <EchartsGaugeClusterDemo />;
  if (componentId === 'table-ag-grid-enterprise-grouping') return <AgGridTreeGroupingDemo />;
  if (componentId === 'theme-anamorphic-3d-depth') return <Anamorphic3DCardDemo />;
  if (componentId === 'theme-raymarching-liquid-shader') return <RaymarchingShaderDemo />;
  if (componentId === 'dashboard-autonomous-drone-fleet') return <DroneSwarmFleetDemo />;
`;

rendererContent = rendererContent.replace(
  `// 3. DASHBOARDS & METRICS (12)`,
  `${handlers}\n  // 3. DASHBOARDS & METRICS (12)`
);

fs.writeFileSync(rendererPath, rendererContent);

// 2. Add metadata to componentsData.ts
const compDataPath = path.join(__dirname, '../src/data/componentsData.ts');
let compData = fs.readFileSync(compDataPath, 'utf8');

const megaItems = [
  {
    id: "chart-polar-rose-coxcomb",
    name: "나이팅게일 로즈 차트 (Polar Area / Coxcomb Quality Distribution)",
    category: "charts",
    tags: ["polar", "coxcomb", "rose", "nightingale", "나이팅게일", "로즈", "극좌표"],
    description: "각도별/반경별 다중 면적 부채꼴로 분기별 품질 불량 및 원인을 시각화.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-polar-rose-coxcomb",
    aiPromptGuidance: "원형 극좌표계 나이팅게일 로즈 꽃잎 차트를 SVG 호(Arc)로 렌더링하세요.",
    fullSourceCode: `// Polar Rose Code`
  },
  {
    id: "chart-ternary-phase-plot",
    name: "3원 원자재 배합 삼각 도표 (Ternary Phase Composition Plot)",
    category: "charts",
    tags: ["ternary", "phase", "composition", "삼각도표", "합금", "배합비"],
    description: "3가지 성분비(A+B+C = 100%)의 혼합 비율과 물성 상평형도를 정삼각형에 매핑.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-ternary-phase-plot",
    aiPromptGuidance: "정삼각형 좌표계 삼원 성분비 상평형도 텐서 도표를 렌더링하세요.",
    fullSourceCode: `// Ternary Plot Code`
  },
  {
    id: "chart-voronoi-facility-mesh",
    name: "공장 설비 영향 구역 보로노이 분할 (Voronoi Spatial Mesh)",
    category: "charts",
    tags: ["voronoi", "mesh", "spatial", "보로노이", "공간분할", "설비배치"],
    description: "설비 노드 중심의 최근접 다각형 영역 분할 및 실시간 부하 상태 컬러링.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-voronoi-facility-mesh",
    aiPromptGuidance: "공간 테셀레이션 다각형 보로노이 셀 그리드를 구현하세요.",
    fullSourceCode: `// Voronoi Mesh Code`
  },
  {
    id: "chart-thermal-contour-map",
    name: "클린룸 열분포 등고선 컨투어 맵 (Thermal Contour Heatmap)",
    category: "charts",
    tags: ["contour", "thermal", "heatmap", "등고선", "열분포", "클린룸"],
    description: "공장 내부 핫스팟과 온도 기울기를 등위선(Iso-line) 곡선으로 표현.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-thermal-contour-map",
    aiPromptGuidance: "다단계 동심 등위선과 밀도 그라데이션 컨투어 맵을 렌더링하세요.",
    fullSourceCode: `// Thermal Contour Code`
  },
  {
    id: "table-highcharts-heat-matrix",
    name: "Highcharts 스타일 다차원 품질 히트 매트릭스 (Heat Grid Matrix)",
    category: "tables",
    tags: ["highcharts", "heatmatrix", "grid", "히트맵", "매트릭스", "품질"],
    description: "요일별/라인별 불량 발생 빈도를 색상 밀도 스케일로 나타낸 히트 매트릭스.",
    complexity: "Medium",
    dependencies: ["lucide-react"],
    previewType: "table-highcharts-heat-matrix",
    aiPromptGuidance: "Highcharts 스타일 다차원 컬러 스케일 히트 그리드 매트릭스를 렌더링하세요.",
    fullSourceCode: `// Heat Matrix Code`
  },
  {
    id: "circular-echarts-triple-gauge",
    name: "ECharts 트리플 클러스터 게이지 (Triple Synchronized Gauge)",
    category: "dashboards",
    tags: ["echarts", "gauge", "cluster", "게이지", "클러스터", "모터"],
    description: "모터 부하, 공압, 인버터 온도를 3련 원형 게이지로 동시 관제.",
    complexity: "Medium",
    dependencies: ["lucide-react"],
    previewType: "circular-echarts-triple-gauge",
    aiPromptGuidance: "3개 축이 동기화되는 ECharts 스타일 트리플 원형 게이지를 렌더링하세요.",
    fullSourceCode: `// Triple Gauge Code`
  },
  {
    id: "table-ag-grid-enterprise-grouping",
    name: "AG-Grid 엔터프라이즈 행 계층 그룹핑 (Row Grouping & Aggregation)",
    category: "tables",
    tags: ["ag-grid", "grouping", "aggregation", "그룹핑", "집계", "표"],
    description: "본사/지사/라인별 다단계 폴딩 및 SUM/AVG 소계 자동 계산 엔터프라이즈 표.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "table-ag-grid-enterprise-grouping",
    aiPromptGuidance: "AG-Grid Enterprise 스타일 다계층 행 그룹핑 및 소계 롤업 테이블을 작성하세요.",
    fullSourceCode: `// AG-Grid Grouping Code`
  },
  {
    id: "theme-anamorphic-3d-depth",
    name: "3D 아나몰픽 깊이감 레이어드 카드 (Anamorphic Depth Layers)",
    category: "themes",
    tags: ["anamorphic", "3d", "depth", "아나몰픽", "입체", "깊이감"],
    description: "시선 각도에 따라 레이어가 튀어나오는 3D 아나몰픽 착시 깊이감 카드.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "theme-anamorphic-3d-depth",
    aiPromptGuidance: "다층 z-index와 3D rotate 트랜스폼으로 아나몰픽 깊이감을 렌더링하세요.",
    fullSourceCode: `// Anamorphic Code`
  },
  {
    id: "theme-raymarching-liquid-shader",
    name: "레이마칭 SDF 볼륨 셰이더 패널 (Raymarching Liquid Shader)",
    category: "themes",
    tags: ["raymarching", "shader", "sdf", "레이마칭", "셰이더", "유체"],
    description: "실시간 서명 거리 함수(SDF) 기반 3D 유체 노이즈 레이마칭 셰이더.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "theme-raymarching-liquid-shader",
    aiPromptGuidance: "GLSL Raymarching SDF 볼륨 노이즈 셰이더 패널을 렌더링하세요.",
    fullSourceCode: `// Raymarching Code`
  },
  {
    id: "dashboard-autonomous-drone-fleet",
    name: "자율 군집 드론 물류 관제 노드맵 (Autonomous Drone Swarm Fleet)",
    category: "dashboards",
    tags: ["drone", "swarm", "fleet", "드론", "군집", "물류"],
    description: "스마트 팩토리 자율 비행 물류 드론 편대 위치 및 배터리/임무 실시간 추적.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "dashboard-autonomous-drone-fleet",
    aiPromptGuidance: "군집 드론 위치 좌표와 상태 텔레메트리 관제 허브를 구현하세요.",
    fullSourceCode: `// Drone Fleet Code`
  }
];

const str = megaItems.map(it => JSON.stringify(it, null, 2)).join(',\n  ');
compData = compData.replace(
  'export const COMPONENTS_DATA: ComponentItem[] = [',
  `export const COMPONENTS_DATA: ComponentItem[] = [\n  ${str},`
);

fs.writeFileSync(compDataPath, compData);
console.log('✅ Mega Suite 10 Items Injected into BlueprintHub');
