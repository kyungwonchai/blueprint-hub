const fs = require('fs');
const path = require('path');

// 1. Update ComponentRenderer.tsx to import and map DevExpress WPF controls
const rendererPath = path.join(__dirname, '../src/components/ComponentRenderer.tsx');
let rendererContent = fs.readFileSync(rendererPath, 'utf8');

const importStatement = `import { 
  DevExpressRibbonDemo, DevExpressPropertyGridDemo, DevExpressFilterEditorDemo, 
  DevExpressDiagramDemo, DevExpressDockingDemo, DevExpressSpreadsheetDemo 
} from './renderers/DevExpressWpfRenderers';
`;

rendererContent = importStatement + rendererContent;

const handlers = `
  // DevExpress WPF Commercial Enterprise Suite
  if (componentId === 'devexpress-ribbon-command-bar') return <DevExpressRibbonDemo />;
  if (componentId === 'devexpress-property-grid-inspector') return <DevExpressPropertyGridDemo />;
  if (componentId === 'devexpress-visual-filter-editor') return <DevExpressFilterEditorDemo />;
  if (componentId === 'devexpress-visio-diagram-flow') return <DevExpressDiagramDemo />;
  if (componentId === 'devexpress-docking-layout-mdi') return <DevExpressDockingDemo />;
  if (componentId === 'devexpress-excel-spreadsheet-matrix') return <DevExpressSpreadsheetDemo />;
`;

rendererContent = rendererContent.replace(
  `// 2. TABLES & PIVOTS (12)`,
  `${handlers}\n  // 2. TABLES & PIVOTS (12)`
);

fs.writeFileSync(rendererPath, rendererContent);

// 2. Add metadata to componentsData.ts
const compDataPath = path.join(__dirname, '../src/data/componentsData.ts');
let compData = fs.readFileSync(compDataPath, 'utf8');

const devexpressItems = [
  {
    id: "devexpress-ribbon-command-bar",
    name: "DevExpress 오피스 스타일 리본 커맨드 바 (Office Ribbon & Action Tabs)",
    category: "navigation",
    tags: ["devexpress", "wpf", "ribbon", "office", "리본", "커맨드", "메뉴"],
    description: "Office / WPF 스타일 상단 리본 메뉴 탭과 그룹화된 도구 스트립.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "devexpress-ribbon-command-bar",
    aiPromptGuidance: "DevExpress WPF 스타일 오피스 리본 커맨드 툴바를 렌더링하세요.",
    fullSourceCode: `// DevExpress Ribbon Bar Sample Code`
  },
  {
    id: "devexpress-property-grid-inspector",
    name: "DevExpress 정밀 프로퍼티 그리드 인스펙터 (PropertyGrid Editor)",
    category: "forms",
    tags: ["devexpress", "propertygrid", "inspector", "프로퍼티", "인스펙터", "속성"],
    description: "객체 속성 실시간 바인딩 및 타입별 인라인 에디터(숫자/텍스트/토글) 그리드.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "devexpress-property-grid-inspector",
    aiPromptGuidance: "DevExpress PropertyGrid 스타일 객체 속성 트리 및 인라인 에디터를 구현하세요.",
    fullSourceCode: `// DevExpress PropertyGrid Sample Code`
  },
  {
    id: "devexpress-visual-filter-editor",
    name: "DevExpress 비주얼 필터 트리 에디터 (FilterEditor AND/OR Builder)",
    category: "tables",
    tags: ["devexpress", "filter", "sql", "필터", "조건문", "빌더"],
    description: "계층형 AND/OR 논리 연산자 트리 구조의 복합 쿼리 필터 빌더.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "devexpress-visual-filter-editor",
    aiPromptGuidance: "DevExpress FilterEditor 스타일 계층형 조건문 빌더를 작성하세요.",
    fullSourceCode: `// DevExpress FilterEditor Sample Code`
  },
  {
    id: "devexpress-visio-diagram-flow",
    name: "DevExpress Visio 스타일 공정 흐름 다이어그램 (Diagram Control)",
    category: "dashboards",
    tags: ["devexpress", "visio", "diagram", "node", "다이어그램", "노드", "흐름도"],
    description: "공정 단계별 노드 연결선 및 상태 애니메이션 Visio 다이어그램.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "devexpress-visio-diagram-flow",
    aiPromptGuidance: "DevExpress Diagram 스타일 노드 및 연결선 흐름도를 렌더링하세요.",
    fullSourceCode: `// DevExpress Diagram Sample Code`
  },
  {
    id: "devexpress-docking-layout-mdi",
    name: "DevExpress WPF 도킹 레이아웃 & MDI 패널 매니저 (Docking Layout)",
    category: "themes",
    tags: ["devexpress", "docking", "mdi", "layout", "도킹", "레이아웃", "분할"],
    description: "좌우/상하 패널 분할 및 고정(Pin), 부동(Floating) MDI 도킹 레이아웃.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "devexpress-docking-layout-mdi",
    aiPromptGuidance: "DevExpress Docking MDI 다단 분할 레이아웃 매니저를 구현하세요.",
    fullSourceCode: `// DevExpress Docking Sample Code`
  },
  {
    id: "devexpress-excel-spreadsheet-matrix",
    name: "DevExpress 엑셀 수식 내장 스프레드시트 뷰 (Excel Spreadsheet)",
    category: "tables",
    tags: ["devexpress", "excel", "spreadsheet", "formula", "엑셀", "스프레드시트", "수식"],
    description: "셀 좌표(A1, B2), 내장 수식(=SUM), 통계 요약 행이 포함된 스프레드시트.",
    complexity: "Advanced",
    dependencies: ["lucide-react"],
    previewType: "devexpress-excel-spreadsheet-matrix",
    aiPromptGuidance: "DevExpress Spreadsheet 스타일 엑셀 셀 좌표 및 수식 연산 그리드를 렌더링하세요.",
    fullSourceCode: `// DevExpress Spreadsheet Sample Code`
  }
];

const str = devexpressItems.map(it => JSON.stringify(it, null, 2)).join(',\n  ');
compData = compData.replace(
  'export const COMPONENTS_DATA: ComponentItem[] = [',
  `export const COMPONENTS_DATA: ComponentItem[] = [\n  ${str},`
);

fs.writeFileSync(compDataPath, compData);
console.log('✅ DevExpress WPF Commercial Suite fully wired into BlueprintHub!');
