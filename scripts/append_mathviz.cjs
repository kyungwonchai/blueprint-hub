const fs = require('fs');

const dataFile = 'src/data/componentsData.ts';
let code = fs.readFileSync(dataFile, 'utf8');

const newComponents = [
  {
    id: "chart-ridgeline-cycle-time",
    name: "공정 택트타임 릿지라인 조이플롯 (D3 Ridgeline Joyplot)",
    category: "charts",
    tags: ["ridgeline", "joyplot", "cycletime", "density", "릿지라인", "택트타임"],
    description: "생산 라인별 택트타임과 사이클 타임의 정규분포 곡선을 층상(Overlapping Ridgeline) 형태로 쌓아 산포 비교.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-ridgeline-cycle-time",
    aiPromptGuidance: "D3 스타일의 Ridgeline/Joyplot 중첩 곡선 영역을 SVG로 렌더링하고 라인 호버 인터랙션을 지원하세요.",
    fullSourceCode: "// Ridgeline Joyplot"
  },
  {
    id: "chart-pearson-correlation-matrix",
    name: "품질 인자 피어슨 상관계수 매트릭스 (Pearson Correlation Heatmap)",
    category: "charts",
    tags: ["correlation", "pearson", "matrix", "quality", "피어슨", "상관계수"],
    description: "금형온도, 사출압, 유량, 냉각시간, 인장강도 등 품질 인자 간의 다변량 상관계수(r: -1.0 ~ +1.0)를 색상 매트릭스로 분석.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-pearson-correlation-matrix",
    aiPromptGuidance: "피어슨 상관계수 매트릭스 히트맵 그리드를 계산하고 셀 호버 시 상세 인자 상관계수를 표시하세요.",
    fullSourceCode: "// Correlation Matrix"
  },
  {
    id: "chart-sunburst-multitier-defect",
    name: "다계층 결함 분류 원형 선버스트 (Multi-Tier Sunburst Breakdown)",
    category: "charts",
    tags: ["sunburst", "defect", "hierarchy", "ppm", "선버스트", "결함분류"],
    description: "공정 대분류부터 세부 불량 사유까지 3계층으로 파고드는 원형 다층 선버스트 차트로 불량 PPM 점유율 시각화.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-sunburst-multitier-defect",
    aiPromptGuidance: "다계층 방사형 원호(Arc)를 이용해 3단계 결함 드릴다운을 수행하는 선버스트 차트를 렌더링하세요.",
    fullSourceCode: "// Multi-Tier Sunburst"
  },
  {
    id: "chart-hexagonal-equipment-mesh",
    name: "육각 허니콤 설비 가동 격자 (Hexagonal Equipment Mesh)",
    category: "charts",
    tags: ["honeycomb", "hexagonal", "iot", "mesh", "허니콤", "육각격자"],
    description: "스마트 팩토리 내 주요 CNC, 프레스, 용접 로봇 설비의 실시간 온도/부하 상태를 벌집형 허니콤 메쉬로 모니터링.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-hexagonal-equipment-mesh",
    aiPromptGuidance: "스마트 팩토리 설비 셀을 벌집형 허니콤 육각형 격자로 배열하고 실시간 텔레메트리를 연결하세요.",
    fullSourceCode: "// Hexagonal Mesh"
  }
];

const lastBracket = code.lastIndexOf('];');
if (lastBracket !== -1) {
  const newItemsJson = newComponents.map(c => `  ${JSON.stringify(c, null, 2)}`).join(',\n');
  const updatedCode = code.slice(0, lastBracket) + ',\n' + newItemsJson + '\n' + code.slice(lastBracket);
  fs.writeFileSync(dataFile, updatedCode, 'utf8');
  console.log("Successfully appended 4 new mathematical viz components to componentsData.ts");
} else {
  console.error("Could not find COMPONENTS_DATA closing bracket");
}
