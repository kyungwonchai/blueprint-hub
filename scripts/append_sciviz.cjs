const fs = require('fs');

const dataFile = 'src/data/componentsData.ts';
let code = fs.readFileSync(dataFile, 'utf8');

const newComponents = [
  {
    id: "chart-chord-matrix-flow",
    name: "공정간 원자재 이동 매트릭스 (D3 Chord Diagram)",
    category: "charts",
    tags: ["chord", "d3", "matrix", "material-flow", "코드차트", "원자재유동"],
    description: "공정 라인(A~E) 간 상호 원자재 및 부품 전달량을 양방향 호와 리본 곡선으로 직관적으로 시각화.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-chord-matrix-flow",
    aiPromptGuidance: "D3 스타일의 Chord Diagram을 SVG 리본 곡선과 호(Arc)로 렌더링하고 노드 호버 시 흐름을 하이라이트하세요.",
    fullSourceCode: "// D3 Chord Diagram"
  },
  {
    id: "chart-violin-tolerance-distribution",
    name: "치수 공차 커널 밀도 (Kernel Density Violin Plot)",
    category: "charts",
    tags: ["violin", "density", "tolerance", "quality", "바이올린", "치수공차", "품질"],
    description: "정밀 가공 치수 데이터의 확률 밀도 분포를 바이올린 곡선과 사분위수(IQR) 상자로 표현.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-violin-tolerance-distribution",
    aiPromptGuidance: "정규분포/왜도 데이터를 커널 밀도 추정 곡선으로 양방향 대칭 렌더링하는 바이올린 플롯을 구현하세요.",
    fullSourceCode: "// Violin Plot"
  },
  {
    id: "chart-parallel-coordinates-multidim",
    name: "다차원 공정 변수 평행 좌표계 (Parallel Coordinates)",
    category: "charts",
    tags: ["parallel", "multivariate", "sensors", "multidim", "평행좌표", "다변량"],
    description: "온도, 압력, RPM, 수율 등 4개 이상의 연속형 변수를 4축 평행선에 연결하여 상관관계를 한눈에 파악.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-parallel-coordinates-multidim",
    aiPromptGuidance: "다차원 센서 데이터 배치를 평행 수직 축으로 매핑하고 배치별 굴절 폴리라인으로 렌더링하세요.",
    fullSourceCode: "// Parallel Coordinates"
  },
  {
    id: "chart-parliament-item-grid",
    name: "설비 점유 반원형 아크 (Parliament Item Arc Chart)",
    category: "charts",
    tags: ["parliament", "arc", "facility", "status", "반원형", "설비점유"],
    description: "공장 내 108대 주요 설비의 가동/경고/정지 상태를 반원형 아크 도트로 조밀하게 배치.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-parliament-item-grid",
    aiPromptGuidance: "동심원 호 좌표계를 계산하여 아이템 도트를 방사형 반원으로 정렬하는 의회형 차트를 렌더링하세요.",
    fullSourceCode: "// Parliament Item Grid"
  },
  {
    id: "chart-dependency-wheel-bom",
    name: "BOM 부품 결합 종속성 휠 (BOM Dependency Wheel)",
    category: "charts",
    tags: ["dependency", "wheel", "bom", "assembly", "종속성휠", "부품결합"],
    description: "복잡한 서브시스템 간의 조립 결합 관계 및 전자기적 종속성을 원형 휠과 연결 현(Chord)으로 표현.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-dependency-wheel-bom",
    aiPromptGuidance: "서브시스템 원형 분할 휠과 컴포넌트 간의 종속성 베지어 곡선을 인터랙티브하게 표현하세요.",
    fullSourceCode: "// Dependency Wheel"
  },
  {
    id: "chart-network-force-topology",
    name: "공장 OT 네트워크 토폴로지 (Network Force Topology)",
    category: "charts",
    tags: ["network", "topology", "iot", "plc", "토폴로지", "센서망"],
    description: "PLC 마스터, 로봇 암, AI 비전 센서, AGV 간의 산업용 통신 토폴로지를 인터랙티브 노드 링크 그래프로 시각화.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-network-force-topology",
    aiPromptGuidance: "노드와 링크 객체를 바탕으로 인터랙티브 포스 다이렉티드 토폴로지 그래프를 SVG로 렌더링하세요.",
    fullSourceCode: "// Network Topology"
  }
];

// Find insertion point before closing bracket of COMPONENTS_DATA
const lastBracket = code.lastIndexOf('];');
if (lastBracket !== -1) {
  const newItemsJson = newComponents.map(c => `  ${JSON.stringify(c, null, 2)}`).join(',\n');
  const updatedCode = code.slice(0, lastBracket) + ',\n' + newItemsJson + '\n' + code.slice(lastBracket);
  fs.writeFileSync(dataFile, updatedCode, 'utf8');
  console.log("Successfully appended 6 new advanced scientific charts to componentsData.ts");
} else {
  console.error("Could not find COMPONENTS_DATA closing bracket");
}
