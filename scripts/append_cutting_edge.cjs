const fs = require('fs');

const dataFile = 'src/data/componentsData.ts';
let code = fs.readFileSync(dataFile, 'utf8');

const newComponents = [
  {
    id: "theme-magnetic-ferrofluid-canvas",
    name: "마그네틱 페로플루이드 액체 자성체 (Magnetic Ferrofluid Fluid)",
    category: "themes",
    tags: ["ferrofluid", "gpgpu", "physics", "canvas", "자성체", "유체역학"],
    description: "마우스 커서의 물리적 자성 인력에 반응하여 유기적인 액체 필라멘트와 스포크를 형성하는 실시간 GPGPU 캔버스 시뮬레이션.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "theme-magnetic-ferrofluid-canvas",
    aiPromptGuidance: "HTML5 Canvas와 방사형 중력장 물리 수식을 활용해 마우스 유인 액체 페로플루이드 효과를 60FPS로 렌더링하세요.",
    fullSourceCode: "// Magnetic Ferrofluid Code"
  },
  {
    id: "nav-kinetic-cyberpunk-dial",
    name: "햅틱 키네틱 로터리 다이얼 (Tactile Kinetic Cyber Dial)",
    category: "navigation",
    tags: ["dial", "rotary", "cyberpunk", "haptic", "로터리다이얼", "조그셔틀"],
    description: "270도 회전각을 마우스 드래그로 조작하여 RPM과 온도를 실시간 계산하는 사이버펑크 햅틱 로터리 컨트롤러.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "nav-kinetic-cyberpunk-dial",
    aiPromptGuidance: "Atan2 삼각함수로 드래그 각도를 추적하고 28개 틱 마크와 회전 인디케이터가 연동되는 조그셔틀 다이얼을 만드세요.",
    fullSourceCode: "// Kinetic Cyber Dial Code"
  },
  {
    id: "feedback-tactile-brutalism-switcher",
    name: "택타일 브루탈리즘 릴레이 스위처 (Tactile Brutalism 1px Matrix)",
    category: "feedback",
    tags: ["brutalism", "tactile", "switch", "relay", "브루탈리즘", "하드웨어스위치"],
    description: "모던 2026 트렌드인 1px 날카로운 테두리와 강렬한 하드웨어 그림자를 가진 8채널 산업용 고체 릴레이 스위치 매트릭스.",
    complexity: "Intermediate",
    dependencies: ["lucide-react"],
    previewType: "feedback-tactile-brutalism-switcher",
    aiPromptGuidance: "날카로운 1px 하드 섀도우와 물리적 클릭 느낌을 주는 브루탈리즘 스타일의 산업용 채널 매트릭스를 구성하세요.",
    fullSourceCode: "// Tactile Brutalism Code"
  }
];

const lastBracket = code.lastIndexOf('];');
if (lastBracket !== -1) {
  const newItemsJson = newComponents.map(c => `  ${JSON.stringify(c, null, 2)}`).join(',\n');
  const updatedCode = code.slice(0, lastBracket) + ',\n' + newItemsJson + '\n' + code.slice(lastBracket);
  fs.writeFileSync(dataFile, updatedCode, 'utf8');
  console.log("Successfully appended 3 cutting-edge components to componentsData.ts");
} else {
  console.error("Could not find COMPONENTS_DATA closing bracket");
}
