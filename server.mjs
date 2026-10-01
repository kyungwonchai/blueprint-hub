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
app.use(express.json({ limit: '20mb' }));

// Storage setup
const STORAGE_DIR = path.join(__dirname, 'storage');
const BLUEPRINTS_FILE = path.join(STORAGE_DIR, 'blueprints.json');
const BOARDS_FILE = path.join(STORAGE_DIR, 'boards.json');

if (!fs.existsSync(STORAGE_DIR)) {
  fs.mkdirSync(STORAGE_DIR, { recursive: true });
}

function loadJson(file, defaultVal = []) {
  try {
    if (fs.existsSync(file)) {
      return JSON.parse(fs.readFileSync(file, 'utf-8'));
    }
  } catch (e) {
    console.error(`Error reading ${file}:`, e.message);
  }
  return defaultVal;
}

function saveJson(file, data) {
  try {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {
    console.error(`Error saving ${file}:`, e.message);
  }
}

// Ensure initial seed board if empty
function initSeedBoards() {
  const boards = loadJson(BOARDS_FILE, []);
  if (boards.length === 0) {
    const seed = [
      {
        id: 'board_main_demo',
        title: '실시간 AI 관제 대시보드 칠판',
        description: '네온 지표 카드 + 실시간 RPS 스트림 차트 + 데이터그리드 배치',
        author: 'kw',
        isPublic: true,
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        items: [
          {
            id: 'slot_kpi_1',
            componentId: 'kpi-metric-neon',
            name: '2026 네온 글래스 KPI 지표 카드',
            category: 'stats',
            type: 'component',
            x: 40,
            y: 40,
            width: 450,
            height: 280,
            zIndex: 1,
          },
          {
            id: 'slot_chart_1',
            componentId: 'analytics-chart-stream',
            name: '실시간 스트리밍 시각화 차트 패널',
            category: 'charts',
            type: 'component',
            x: 520,
            y: 40,
            width: 500,
            height: 280,
            zIndex: 2,
          },
          {
            id: 'slot_grid_1',
            componentId: 'datagrid-realtime-pro',
            name: '실시간 인터랙티브 데이터 그리드',
            category: 'tables',
            type: 'component',
            x: 40,
            y: 350,
            width: 980,
            height: 380,
            zIndex: 3,
          },
          {
            id: 'sticky_note_1',
            componentId: 'sticky-note',
            name: '기획 포스트잇',
            category: 'feedback',
            type: 'sticky',
            x: 1040,
            y: 40,
            width: 260,
            height: 220,
            zIndex: 4,
            stickyText: '💡 AI에게 지시할 때:\n- 다크 테마 일관성 유지\n- 초당 60fps 부드러운 차트 렌더링',
            stickyColor: '#fef08a'
          }
        ]
      }
    ];
    saveJson(BOARDS_FILE, seed);
  }
}
initSeedBoards();

// ==========================================
// 1. Board CRUD & Real-time Auto-Save APIs
// ==========================================

// List boards (filter by author or public)
function handleGetBoards(req, res) {
  const { author, scope } = req.query;
  const boards = loadJson(BOARDS_FILE, []);
  
  let result = boards;
  if (scope === 'my' && author) {
    result = boards.filter((b) => b.author === author);
  } else if (scope === 'public') {
    result = boards.filter((b) => b.isPublic || b.author === author);
  }
  
  res.json(result);
}

// Get single board
function handleGetBoardById(req, res) {
  const { id } = req.params;
  const boards = loadJson(BOARDS_FILE, []);
  const found = boards.find((b) => b.id === id);
  if (!found) {
    return res.status(404).json({ error: 'Board not found', id });
  }
  res.json(found);
}

// Create or Save board (Debounced Auto-Save)
function handleSaveBoard(req, res) {
  const board = req.body;
  if (!board || !board.id) {
    return res.status(400).json({ error: 'Invalid board payload' });
  }

  const boards = loadJson(BOARDS_FILE, []);
  const idx = boards.findIndex((b) => b.id === board.id);

  const updatedBoard = {
    ...board,
    updatedAt: new Date().toISOString(),
  };

  if (idx >= 0) {
    boards[idx] = updatedBoard;
  } else {
    boards.unshift(updatedBoard);
  }

  saveJson(BOARDS_FILE, boards);
  res.json({ success: true, board: updatedBoard });
}

// Delete board
function handleDeleteBoard(req, res) {
  const { id } = req.params;
  const boards = loadJson(BOARDS_FILE, []);
  const filtered = boards.filter((b) => b.id !== id);
  saveJson(BOARDS_FILE, filtered);
  res.json({ success: true, deletedId: id });
}

// Duplicate board
function handleDuplicateBoard(req, res) {
  const { id } = req.params;
  const { author } = req.body;
  const boards = loadJson(BOARDS_FILE, []);
  const target = boards.find((b) => b.id === id);
  if (!target) {
    return res.status(404).json({ error: 'Target board not found' });
  }

  const newId = 'board_' + Math.random().toString(36).substring(2, 9);
  const duplicated = {
    ...target,
    id: newId,
    title: `${target.title} (복사본)`,
    author: author || target.author || 'kw',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  boards.unshift(duplicated);
  saveJson(BOARDS_FILE, boards);
  res.json({ success: true, board: duplicated });
}

// ==========================================
// 2. Blueprint Snapshot APIs
// ==========================================

function handleGetBlueprintsRecent(req, res) {
  const list = loadJson(BLUEPRINTS_FILE, []);
  res.json(list.slice(0, 30));
}

function handleGetBlueprintById(req, res) {
  const { id } = req.params;
  const list = loadJson(BLUEPRINTS_FILE, []);
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

  const list = loadJson(BLUEPRINTS_FILE, []);
  const filtered = list.filter((b) => b.id !== blueprintData.id);
  const updated = [blueprintData, ...filtered];
  saveJson(BLUEPRINTS_FILE, updated);

  console.log(`[BlueprintHub] 📸 New Blueprint Snapshot saved: [${blueprintData.id}] ${blueprintData.title}`);
  res.json({ success: true, blueprint: blueprintData });
}

// Register API routes for both root and /blueprint-hub/ prefix
['', '/blueprint-hub'].forEach((prefix) => {
  // Boards
  app.get(`${prefix}/api/boards`, handleGetBoards);
  app.get(`${prefix}/api/boards/:id`, handleGetBoardById);
  app.post(`${prefix}/api/boards`, handleSaveBoard);
  app.put(`${prefix}/api/boards/:id`, handleSaveBoard);
  app.delete(`${prefix}/api/boards/:id`, handleDeleteBoard);
  app.post(`${prefix}/api/boards/:id/duplicate`, handleDuplicateBoard);

  // Blueprints
  app.get(`${prefix}/api/blueprints/recent`, handleGetBlueprintsRecent);
  app.get(`${prefix}/api/blueprints/:id`, handleGetBlueprintById);
  app.post(`${prefix}/api/blueprints`, handlePostBlueprint);
  
  // Health
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
