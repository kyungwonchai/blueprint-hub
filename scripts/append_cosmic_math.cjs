const fs = require('fs');

const dataFile = 'src/data/componentsData.ts';
let code = fs.readFileSync(dataFile, 'utf8');

const newComponents = [
  {
    id: "chart-lorenz-attractor-3d",
    name: "3차원 카오스 로렌츠 어트랙터 (3D Lorenz Attractor ODE)",
    category: "charts",
    tags: ["lorenz", "attractor", "chaos", "ode", "differential", "로렌츠", "카오스", "미분방정식"],
    description: "비선형 동역학 카오스 미분방정식을 실시간 3D 궤적 렌더링으로 시각화하여 불규칙 공정 진동과 난류 거동을 해석.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-lorenz-attractor-3d",
    aiPromptGuidance: "3차원 로렌츠 미분방정식(dx, dy, dz)을 3D Y축 회전 투영과 무지개 그라디언트 궤적으로 Canvas에 실시간 렌더링하세요.",
    fullSourceCode: "// 3D Lorenz Attractor Code"
  },
  {
    id: "chart-umap-latent-projector",
    name: "고차원 센서 UMAP 임베딩 프로젝터 (UMAP Latent Space 2D)",
    category: "charts",
    tags: ["umap", "tsne", "embedding", "manifold", "latent", "고차원", "임베딩", "매니폴드"],
    description: "센서 수백 개의 고차원 데이터를 비선형 차원 축소(UMAP/t-SNE)하여 잠재 공간(Latent Space) 내 이상 군집 클러스터링 시각화.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-umap-latent-projector",
    aiPromptGuidance: "다변량 센서 임베딩 공간을 2D 매니폴드 밀도 구름과 군집별 산점도(Scatter Points)로 인터랙티브하게 표현하세요.",
    fullSourceCode: "// UMAP Projector Code"
  },
  {
    id: "chart-poincare-hyperbolic-disk",
    name: "푸앵카레 쌍곡면 비유클리드 트리 (Poincaré Hyperbolic Disk)",
    category: "charts",
    tags: ["poincare", "hyperbolic", "noneuclidean", "tree", "푸앵카레", "쌍곡기하학", "비유클리드"],
    description: "무한히 확장되는 방대한 공정/설비 계층 구조를 유한한 푸앵카레 원판 안으로 등각 사상(Conformal Mapping)하는 비유클리드 기하 시각화.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "chart-poincare-hyperbolic-disk",
    aiPromptGuidance: "푸앵카레 쌍곡 기하학 원판 좌표계 위에 측지선(Geodesic Arcs)과 동심원 트리 노드를 등각 사상 렌더링하세요.",
    fullSourceCode: "// Poincare Hyperbolic Disk Code"
  }
];

const lastBracket = code.lastIndexOf('];');
if (lastBracket !== -1) {
  const newItemsJson = newComponents.map(c => `  ${JSON.stringify(c, null, 2)}`).join(',\n');
  const updatedCode = code.slice(0, lastBracket) + ',\n' + newItemsJson + '\n' + code.slice(lastBracket);
  fs.writeFileSync(dataFile, updatedCode, 'utf8');
  console.log("Successfully appended 3 cosmic math components to componentsData.ts");
} else {
  console.error("Could not find COMPONENTS_DATA closing bracket");
}
