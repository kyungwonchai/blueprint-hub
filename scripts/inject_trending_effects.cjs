const fs = require('fs');
const path = require('path');

// 1. Update ComponentRenderer.tsx to map trending effects
const rendererPath = path.join(__dirname, '../src/components/ComponentRenderer.tsx');
let rendererContent = fs.readFileSync(rendererPath, 'utf8');

const importStatement = `import { 
  InteractiveSpotlightCardDemo, LiquidGlassDistortionDemo, 
  MagneticHoverButtonDemo, SoundReactivePulseDemo 
} from './renderers/TrendingEffectsRenderers';
`;

rendererContent = importStatement + rendererContent;

const handlers = `
  // 2026 Magic UI / Aceternity Trending Interaction Suite
  if (componentId === 'trending-spotlight-radial-card') return <InteractiveSpotlightCardDemo />;
  if (componentId === 'trending-liquid-glass-refraction') return <LiquidGlassDistortionDemo />;
  if (componentId === 'trending-magnetic-hover-button') return <MagneticHoverButtonDemo />;
  if (componentId === 'trending-sound-reactive-equalizer') return <SoundReactivePulseDemo />;
`;

rendererContent = rendererContent.replace(
  `// 9. THEMES & TOKENS (12)`,
  `${handlers}\n  // 9. THEMES & TOKENS (12)`
);

fs.writeFileSync(rendererPath, rendererContent);

// 2. Add metadata to componentsData.ts
const compDataPath = path.join(__dirname, '../src/data/componentsData.ts');
let compData = fs.readFileSync(compDataPath, 'utf8');

const trendingItems = [
  {
    id: "trending-spotlight-radial-card",
    name: "Aceternity 스타일 스포트라이트 마우스 추적 카드 (Spotlight Radial Mask)",
    category: "themes",
    tags: ["spotlight", "radial", "aceternity", "magicui", "스포트라이트", "방사형"],
    description: "마우스 커서의 물리적 좌표를 추적하여 림라이트 방사형 조명을 비추는 스포트라이트 카드.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "trending-spotlight-radial-card",
    aiPromptGuidance: "마우스 move 이벤트 기반 방사형 radial-gradient 마스크 스포트라이트 카드를 구현하세요.",
    fullSourceCode: `// Spotlight Card Source Code`
  },
  {
    id: "trending-liquid-glass-refraction",
    name: "2026 리퀴드 글래스 굴절 패널 (Liquid Glass Backdrop Refraction)",
    category: "themes",
    tags: ["liquid", "glass", "refraction", "backdrop", "글래스", "굴절", "리퀴드"],
    description: "초미세 다단 블러(64px)와 채도 증폭, 배경 광원을 투과하는 리퀴드 글래스.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "trending-liquid-glass-refraction",
    aiPromptGuidance: "Backdrop saturate(180%)와 64px 블러를 적용한 차세대 리퀴드 글래스를 렌더링하세요.",
    fullSourceCode: `// Liquid Glass Source Code`
  },
  {
    id: "trending-magnetic-hover-button",
    name: "자기장 물리 인력 마그네틱 버튼 (Magnetic Hover Pull Physics)",
    category: "forms",
    tags: ["magnetic", "physics", "hover", "마그네틱", "인력", "버튼"],
    description: "커서가 접근하면 요소 중심점이 마우스 방향으로 자연스럽게 끌려오는 마그네틱 인터랙션.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "trending-magnetic-hover-button",
    aiPromptGuidance: "커서 위치 벡터 차이를 계산하여 translate3d로 인력을 구현한 마그네틱 버튼입니다.",
    fullSourceCode: `// Magnetic Button Source Code`
  },
  {
    id: "trending-sound-reactive-equalizer",
    name: "사운드 리액티브 실시간 오디오 주파수 펄스 (Sound Reactive Pulse)",
    category: "ai-widgets",
    tags: ["sound", "audio", "reactive", "equalizer", "사운드", "이퀄라이저", "주파수"],
    description: "오디오 비트 및 주파수 대역별 가변 진폭 높이를 동적으로 시각화하는 이퀄라이저.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "trending-sound-reactive-equalizer",
    aiPromptGuidance: "오디오 주파수 대역 진폭을 시각화하는 동적 펄스 이퀄라이저 바를 렌더링하세요.",
    fullSourceCode: `// Sound Reactive Source Code`
  }
];

const str = trendingItems.map(it => JSON.stringify(it, null, 2)).join(',\n  ');
compData = compData.replace(
  'export const COMPONENTS_DATA: ComponentItem[] = [',
  `export const COMPONENTS_DATA: ComponentItem[] = [\n  ${str},`
);

fs.writeFileSync(compDataPath, compData);
console.log('✅ Trending Magic UI / Aceternity Effects mapped into BlueprintHub');
