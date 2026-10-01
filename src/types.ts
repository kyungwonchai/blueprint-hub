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

export interface BlueprintLayoutSlot {
  slotId: string;
  componentId: string;
  colSpan?: number; // 1 to 12
  titleOverride?: string;
}

export interface BlueprintSnapshot {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  author: string;
  layout: {
    type: 'dashboard-grid' | '1-col' | '2-col-equal' | 'sidebar-main';
    slots: BlueprintLayoutSlot[];
  };
  components: ComponentItem[];
  generatedAiPrompt: string;
}
