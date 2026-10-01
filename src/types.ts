export type CategoryId = 
  | 'all'
  | 'dashboards'
  | 'tables'
  | 'charts'
  | 'forms'
  | 'navigation'
  | 'stats'
  | 'feedback'
  | 'ai-widgets'
  | 'themes';

export interface ComponentItem {
  id: string;
  name: string;
  category: CategoryId;
  tags: string[];
  description: string;
  complexity: 'Simple' | 'Medium' | 'Advanced';
  dependencies: string[];
  previewType: string;
  demoProps?: Record<string, any>;
  fullSourceCode: string;
  aiPromptGuidance: string;
}

export interface CanvasBoardItem {
  id: string;
  componentId: string;
  name: string;
  category: string;
  type: 'component' | 'sticky';
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  stickyText?: string;
  stickyColor?: string;
}

export interface BoardData {
  id: string;
  title: string;
  description: string;
  author: string;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
  items: CanvasBoardItem[];
}

export interface BlueprintLayoutSlot {
  slotId: string;
  componentId: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  customProps?: Record<string, any>;
}

export interface BlueprintSnapshot {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  author: string;
  layout: {
    type: 'freeform-whiteboard' | 'dashboard-grid' | '1-col' | '2-col-equal';
    slots: BlueprintLayoutSlot[];
  };
  components: ComponentItem[];
  generatedAiPrompt: string;
}

export interface TechStackItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Rendering Strategy' | 'Styling' | 'Graphics & 3D' | 'Data Visualization';
  yearTrend: string;
  tagline: string;
  badge: string;
  pros: string[];
  cons: string[];
  bundleSize: string;
  performanceScore: number; // 0-100
  aiEaseScore: number; // 0-100
  whenToUse: string;
  sampleCode: string;
  aiDirectiveTemplate: string;
}

export interface StorageGuideItem {
  id: string;
  name: string;
  type: 'Client Local' | 'Embedded DB' | 'RDBMS' | 'In-Memory Caching' | 'Vector DB (AI)' | 'Document NoSQL';
  bestFor: string;
  readSpeed: 'Ultra Fast' | 'Fast' | 'Medium';
  writeSpeed: 'Ultra Fast' | 'Fast' | 'Medium';
  scalability: 'Single Node' | 'Medium' | 'Cloud Scale';
  pros: string[];
  cons: string[];
  aiPromptExample: string;
  connectCodeSnippet: string;
}
