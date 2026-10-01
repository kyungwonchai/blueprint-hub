import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10194;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Storage setup
const STORAGE_DIR = path.join(__dirname, 'storage');
const BLUEPRINTS_FILE = path.join(STORAGE_DIR, 'blueprints.json');

if (!fs.existsSync(STORAGE_DIR)) {
  fs.mkdirSync(STORAGE_DIR, { recursive: true });
}

function loadBlueprints() {
  try {
    if (fs.existsSync(BLUEPRINTS_FILE)) {
      return JSON.parse(fs.readFileSync(BLUEPRINTS_FILE, 'utf-8'));
    }
  } catch (e) {
    console.error('Error reading blueprints:', e.message);
  }
  return [];
}

function saveBlueprints(data) {
  try {
    fs.writeFileSync(BLUEPRINTS_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {
    console.error('Error saving blueprints:', e.message);
  }
}

// REST API Handler Functions
function handleGetBlueprintsRecent(req, res) {
  const list = loadBlueprints();
  res.json(list.slice(0, 20));
}

function handleGetBlueprintById(req, res) {
  const { id } = req.params;
  const list = loadBlueprints();
  const found = list.find((item) => item.id === id);
  if (!found) {
    return res.status(404).json({ error: 'Blueprint not found', id });
  }
  res.json(found);
}

function handlePostBlueprint(req, res) {
  const blueprintData = req.body;
  if (!blueprintData || !blueprintData.id) {
    return res.status(400).json({ error: 'Invalid blueprint payload' });
  }

  const list = loadBlueprints();
  const filtered = list.filter((b) => b.id !== blueprintData.id);
  const updated = [blueprintData, ...filtered];
  saveBlueprints(updated);

  console.log(`[BlueprintHub] 📸 New Blueprint saved: [${blueprintData.id}] ${blueprintData.title}`);
  res.json({ success: true, blueprint: blueprintData });
}

// Register API routes for both /api and /blueprint-hub/api
['', '/blueprint-hub'].forEach((prefix) => {
  app.get(`${prefix}/api/blueprints/recent`, handleGetBlueprintsRecent);
  app.get(`${prefix}/api/blueprints/:id`, handleGetBlueprintById);
  app.post(`${prefix}/api/blueprints`, handlePostBlueprint);
  
  // Quick health check
  app.get(`${prefix}/api/health`, (req, res) => {
    res.json({ status: 'ok', service: 'blueprint-hub', time: new Date().toISOString() });
  });
});

// Static assets serving (dist folder)
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  app.use('/blueprint-hub', express.static(distPath));
  app.use(express.static(distPath));

  app.get(['/blueprint-hub/*', '/*'], (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  console.warn('⚠️ dist folder not found. Please run npm run build');
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(`🚀 BlueprintHub Server running on http://0.0.0.0:${PORT}`);
  console.log(`🔗 Local URL:  http://172.30.1.70:${PORT}/blueprint-hub/`);
  console.log(`🌐 DuckDNS:    https://kwopi.duckdns.org/blueprint-hub/`);
  console.log(`======================================================\n`);
});
