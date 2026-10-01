import { ComponentItem } from '../types';

export function getComponentMetadata(item: ComponentItem): { releaseEra: string; techOrigin: string } {
  const id = item.id;
  if (id.startsWith('devexpress-')) {
    return { releaseEra: 'Enterprise Commercial', techOrigin: 'DevExpress WPF Pro' };
  }
  if (
    id.startsWith('chart-lorenz') || id.startsWith('chart-umap') || id.startsWith('chart-poincare') ||
    id.startsWith('math-quantum') || id.startsWith('math-fourier') || id.startsWith('math-kinetic') ||
    id.startsWith('math-lattice') || id.startsWith('science-reaction') || id.startsWith('science-michelson')
  ) {
    return { releaseEra: '2026 Cosmic Math', techOrigin: 'Physics ODE & Quantum Mechanics' };
  }
  if (
    id.startsWith('sensor-lidar') || id.startsWith('sensor-gyroscope') || id.startsWith('sensor-acoustic') ||
    id.startsWith('sensor-laser') || id.startsWith('sensor-thermal') || id.startsWith('sensor-ultrasonic')
  ) {
    return { releaseEra: '2026 AI-Native', techOrigin: 'Industrial Telemetry & Robotics' };
  }
  if (
    id.startsWith('qc-') || id.startsWith('viz-defect') || id.startsWith('math-dynamic-voronoi') ||
    id.startsWith('project-critical-path') || id.startsWith('system-worker-pool') || id.startsWith('control-maglev')
  ) {
    return { releaseEra: '2025-2026 Advanced SciViz', techOrigin: 'Six Sigma & MES SCADA' };
  }
  if (id.startsWith('theme-magnetic') || id.startsWith('nav-kinetic') || id.startsWith('feedback-tactile') || id.startsWith('trending-')) {
    return { releaseEra: '2026 Awwwards Experimental', techOrigin: 'WebGL/Canvas Shader' };
  }
  if (id.startsWith('ai-') || id.includes('-ai-') || id.includes('commander')) {
    return { releaseEra: '2026 AI-Native', techOrigin: 'Vercel AI SDK & LLM UX' };
  }
  if (
    id.startsWith('chart-polar') || id.startsWith('chart-ternary') || id.startsWith('chart-voronoi') || 
    id.startsWith('chart-chord') || id.startsWith('chart-violin') || id.startsWith('chart-parallel') || 
    id.startsWith('chart-ridgeline') || id.startsWith('chart-pearson') || id.startsWith('chart-sunburst') ||
    id.startsWith('chart-hexagonal') || id.startsWith('chart-network') || id.startsWith('chart-dependency') ||
    id.startsWith('chart-parliament') || id.startsWith('chart-sankey') || id.startsWith('chart-marimekko') ||
    id.startsWith('chart-hexbin') || id.startsWith('chart-dendrogram') || id.startsWith('chart-bump')
  ) {
    return { releaseEra: '2025-2026 Advanced SciViz', techOrigin: 'D3.js & Observable HQ' };
  }
  if (id.startsWith('table-') || id.startsWith('datagrid-')) {
    return { releaseEra: '2025-2026 Modern Grid', techOrigin: 'AG-Grid Enterprise' };
  }
  return { releaseEra: '2025-2026 Modern Standard', techOrigin: 'Tailwind & Lucide Pro' };
}
