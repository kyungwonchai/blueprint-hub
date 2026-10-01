const fs = require('fs');

const dataFile = 'src/data/componentsData.ts';
let code = fs.readFileSync(dataFile, 'utf8');

// Parse and enrich each component with releaseEra and techOrigin if not present
// Eras: '2026 Next-Gen', '2025 Standard', 'Classic D3/Observable', 'Classic DevExpress'
const updateRegex = /\{\s*"id":\s*"([^"]+)"([\s\S]*?)\}/g;

const enrichedCode = code.replace(updateRegex, (fullMatch, id, rest) => {
  let era = "2026 Next-Gen";
  let origin = "D3/Observable & Awwwards 2026";

  if (id.startsWith('devexpress-')) {
    era = "Enterprise Commercial";
    origin = "DevExpress WPF Enterprise";
  } else if (id.startsWith('table-') || id.startsWith('datagrid-')) {
    era = "2025-2026 Modern";
    origin = "AG-Grid & Highcharts Pro";
  } else if (id.startsWith('chart-lorenz') || id.startsWith('chart-umap') || id.startsWith('chart-poincare')) {
    era = "2026 Cosmic Math";
    origin = "Astrophysics & Topo-Manifold";
  } else if (id.startsWith('chart-polar') || id.startsWith('chart-ternary') || id.startsWith('chart-voronoi') || id.startsWith('chart-chord') || id.startsWith('chart-violin') || id.startsWith('chart-parallel') || id.startsWith('chart-ridgeline')) {
    era = "2025-2026 Advanced SciViz";
    origin = "D3 Graph Gallery & Observable HQ";
  } else if (id.startsWith('theme-magnetic') || id.startsWith('nav-kinetic') || id.startsWith('feedback-tactile') || id.startsWith('trending-')) {
    era = "2026 Awwwards Experimental";
    origin = "WebGL/Canvas Shader & Magic UI";
  } else if (id.startsWith('ai-') || id.includes('-ai-')) {
    era = "2026 AI-Native";
    origin = "Vercel AI SDK & Modern LLM UX";
  } else {
    era = "2025-2026 Modern";
    origin = "Tailwind CSS & Lucide UI";
  }

  // Check if era already exists
  if (rest.includes('"releaseEra":')) {
    return fullMatch;
  }

  const insertProps = `,\n  "releaseEra": "${era}",\n  "techOrigin": "${origin}"`;
  const lastBraceIndex = fullMatch.lastIndexOf('}');
  return fullMatch.slice(0, lastBraceIndex) + insertProps + '\n}';
});

fs.writeFileSync(dataFile, enrichedCode, 'utf8');
console.log("Successfully enriched components with releaseEra and techOrigin metadata.");
