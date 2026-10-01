const fs = require('fs');
const path = require('path');

// Update ComponentRenderer.tsx to include Sankey, Sunburst, Boxplot, Bullet
const rendererPath = path.join(__dirname, '../src/components/ComponentRenderer.tsx');
let rendererContent = fs.readFileSync(rendererPath, 'utf8');

// Replace imports
rendererContent = rendererContent.replace(
  `SpeedometerGaugeDemo, WaterfallCashflowDemo, SparklineMiniBadgeDemo`,
  `SpeedometerGaugeDemo, WaterfallCashflowDemo, SparklineMiniBadgeDemo, SankeyFlowDemo, SunburstHierarchyDemo, BoxplotOutlierDemo, BulletPerformanceDemo`
);

// Add handlers
const addition = `
  // Exotic Advanced Visualizations (D3 / SciPy / Few Standard)
  if (componentId === 'chart-sankey-flow') return <SankeyFlowDemo />;
  if (componentId === 'chart-sunburst-hierarchy') return <SunburstHierarchyDemo />;
  if (componentId === 'chart-boxplot-outlier') return <BoxplotOutlierDemo />;
  if (componentId === 'chart-bullet-performance') return <BulletPerformanceDemo />;
`;

rendererContent = rendererContent.replace(
  `if (componentId === 'chart-sparkline-mini-badge') return <SparklineMiniBadgeDemo />;`,
  `if (componentId === 'chart-sparkline-mini-badge') return <SparklineMiniBadgeDemo />;${addition}`
);

fs.writeFileSync(rendererPath, rendererContent);
console.log('✅ ComponentRenderer.tsx updated with exotic chart renderers');
