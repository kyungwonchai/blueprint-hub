const fs = require('fs');
const path = require('path');

// 1. Update ComponentRenderer.tsx
const rendererPath = path.join(__dirname, '../src/components/ComponentRenderer.tsx');
let rendererContent = fs.readFileSync(rendererPath, 'utf8');

rendererContent = rendererContent.replace(
  `SankeyFlowDemo, SunburstHierarchyDemo, BoxplotOutlierDemo, BulletPerformanceDemo`,
  `SankeyFlowDemo, SunburstHierarchyDemo, BoxplotOutlierDemo, BulletPerformanceDemo, MarimekkoMosaicDemo, HexbinDensityDemo, DendrogramClusterDemo, BumpRankingDemo`
);

const handlers = `
  if (componentId === 'chart-marimekko-mosaic') return <MarimekkoMosaicDemo />;
  if (componentId === 'chart-hexbin-density') return <HexbinDensityDemo />;
  if (componentId === 'chart-dendrogram-cluster') return <DendrogramClusterDemo />;
  if (componentId === 'chart-bump-ranking') return <BumpRankingDemo />;
`;

rendererContent = rendererContent.replace(
  `if (componentId === 'chart-bullet-performance') return <BulletPerformanceDemo />;`,
  `if (componentId === 'chart-bullet-performance') return <BulletPerformanceDemo />;${handlers}`
);

fs.writeFileSync(rendererPath, rendererContent);

// 2. Add metadata to componentsData.ts
const compDataPath = path.join(__dirname, '../src/data/componentsData.ts');
let compData = fs.readFileSync(compDataPath, 'utf8');

const exoticItems2 = [
  {
    id: "chart-marimekko-mosaic",
    name: "마리메꼬 모자이크 차트 (Marimekko Mosaic Market Share)",
    category: "charts",
    tags: ["marimekko", "mosaic", "market", "마리메꼬", "모자이크", "점유율"],
    description: "가로축(시장 세그먼트 규모)과 세로축(품목별 점유율)을 면적 비례 사각형으로 표현.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-marimekko-mosaic",
    aiPromptGuidance: "가로폭과 세로높이가 모두 가변적인 2D 마리메꼬 모자이크 차트를 구현하세요.",
    fullSourceCode: `// Marimekko Chart Code`
  },
  {
    id: "chart-hexbin-density",
    name: "2D 육각 격자 밀도 분포 헥스빈 차트 (Hexbin Density Scatter)",
    category: "charts",
    tags: ["hexbin", "density", "scatter", "헥스빈", "밀도", "산포도"],
    description: "1만 개 이상의 산포도 포인트를 육각형 셀로 집계하여 농도별 히트맵으로 시각화.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-hexbin-density",
    aiPromptGuidance: "2차원 평면을 정육각형 그리드로 분할하여 포인트 밀도를 렌더링하세요.",
    fullSourceCode: `// Hexbin Chart Code`
  },
  {
    id: "chart-dendrogram-cluster",
    name: "계층형 클러스터링 덴드로그램 수형도 (Dendrogram Tree)",
    category: "charts",
    tags: ["dendrogram", "cluster", "tree", "덴드로그램", "수형도", "군집"],
    description: "공정 센서 데이터 군집화(Clustering) 거리와 계층적 수형도 시각화.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-dendrogram-cluster",
    aiPromptGuidance: "계층적 군집 거리를 나타내는 덴드로그램 브랜치 노드 트리를 렌더링하세요.",
    fullSourceCode: `// Dendrogram Chart Code`
  },
  {
    id: "chart-bump-ranking",
    name: "분기별 순위 랭킹 변동 범프 차트 (Bump Ranking Transition)",
    category: "charts",
    tags: ["bump", "ranking", "transition", "범프", "순위", "랭킹"],
    description: "시간의 흐름(Q1~Q4)에 따른 생산 라인별 품질 및 생산량 순위 교차 흐름.",
    complexity: "Medium",
    dependencies: ["lucide-react"],
    previewType: "chart-bump-ranking",
    aiPromptGuidance: "시간 경과에 따른 순위 랭킹 변동을 부드러운 곡선으로 연결하는 범프 차트입니다.",
    fullSourceCode: `// Bump Chart Code`
  }
];

const str = exoticItems2.map(it => JSON.stringify(it, null, 2)).join(',\n  ');
compData = compData.replace(
  'export const COMPONENTS_DATA: ComponentItem[] = [',
  `export const COMPONENTS_DATA: ComponentItem[] = [\n  ${str},`
);

fs.writeFileSync(compDataPath, compData);
console.log('✅ Injected Exotic Batch 2 (Marimekko, Hexbin, Dendrogram, Bump) into BlueprintHub');
