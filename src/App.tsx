import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Header, MainTabMode } from './components/Header';
import { ComponentCard } from './components/ComponentCard';
import { LiveDemoModal } from './components/LiveDemoModal';
import { CartDrawer } from './components/CartDrawer';
import { CanvasStudio } from './components/CanvasStudio';
import { SnapshotModal } from './components/SnapshotModal';
import { RecentBlueprintsModal } from './components/RecentBlueprintsModal';
import { TechStackTab } from './components/TechStackTab';
import { StorageGuideTab } from './components/StorageGuideTab';
import { WebTechExpoTab } from './components/WebTechExpoTab';
import { MasterEnterpriseApp } from './components/MasterEnterpriseApp';
import { BoardManagerModal } from './components/BoardManagerModal';
import { COMPONENTS_DATA } from './data/componentsData';
import { ComponentItem, CategoryId, BlueprintSnapshot, BoardData, CanvasBoardItem } from './types';
import { 
  Sparkles, Layers, Box, Terminal, ArrowRight, 
  CheckCircle2, Flame, Shield, Zap, Database, Folder 
} from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<MainTabMode>('catalog');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  
  // User Profile
  const [currentUser, setCurrentUser] = useState<string>(() => {
    return localStorage.getItem('k_blueprint_user') || 'kw';
  });

  const handleSetUser = (user: string) => {
    setCurrentUser(user);
    localStorage.setItem('k_blueprint_user', user);
  };

  // Boards State
  const [boards, setBoards] = useState<BoardData[]>([]);
  const [currentBoardId, setCurrentBoardId] = useState<string>('board_main_demo');
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'idle'>('saved');

  // Modals state
  const [activeDemoItem, setActiveDemoItem] = useState<ComponentItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBoardManagerOpen, setIsBoardManagerOpen] = useState(false);
  const [activeSnapshot, setActiveSnapshot] = useState<BlueprintSnapshot | null>(null);
  const [isRecentOpen, setIsRecentOpen] = useState(false);
  const [recentBlueprints, setRecentBlueprints] = useState<BlueprintSnapshot[]>([]);

  // Cart state
  const [cartItems, setCartItems] = useState<ComponentItem[]>(() => {
    try {
      const saved = localStorage.getItem('k_blueprint_cart');
      return saved ? JSON.parse(saved) : [COMPONENTS_DATA[0], COMPONENTS_DATA[1], COMPONENTS_DATA[2]];
    } catch {
      return [COMPONENTS_DATA[0], COMPONENTS_DATA[1]];
    }
  });

  // Debounce Auto-Save timer ref
  const saveTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Load boards from Server API
  const loadBoardsFromServer = async () => {
    try {
      const res = await fetch('/blueprint-hub/api/boards');
      if (res.ok) {
        const data: BoardData[] = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setBoards(data);
          if (!data.some(b => b.id === currentBoardId)) {
            setCurrentBoardId(data[0].id);
          }
        }
      }
    } catch (e) {
      console.warn('Boards fetch fallback:', e);
    }
  };

  useEffect(() => {
    loadBoardsFromServer();
  }, []);

  // Current active board object
  const currentBoard = useMemo(() => {
    const found = boards.find(b => b.id === currentBoardId);
    if (found) return found;
    return {
      id: currentBoardId,
      title: '실시간 AI 관제 대시보드 칠판',
      description: '기본 칠판',
      author: currentUser,
      isPublic: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      items: [],
    };
  }, [boards, currentBoardId, currentUser]);

  // Handle board update with 500ms debounce auto-save to server
  const handleUpdateBoard = (updated: BoardData) => {
    // 1. Optimistic Local State Update
    setBoards(prev => {
      const idx = prev.findIndex(b => b.id === updated.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = updated;
        return copy;
      }
      return [updated, ...prev];
    });

    setSaveStatus('saving');

    // 2. Debounced Server Sync
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(async () => {
      try {
        await fetch(`/blueprint-hub/api/boards/${updated.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updated),
        });
        setSaveStatus('saved');
      } catch (e) {
        console.error('Board auto-save error:', e);
        setSaveStatus('idle');
      }
    }, 500);
  };

  // Create new board
  const handleCreateNewBoard = async (title: string, isPublic: boolean) => {
    const newId = 'board_' + Math.random().toString(36).substring(2, 9);
    const newBoard: BoardData = {
      id: newId,
      title,
      description: `${currentUser}의 신규 칠판 프로젝트`,
      author: currentUser,
      isPublic,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      items: [],
    };

    setBoards(prev => [newBoard, ...prev]);
    setCurrentBoardId(newId);
    setCurrentTab('canvas');

    try {
      await fetch('/blueprint-hub/api/boards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBoard),
      });
    } catch (e) {}
  };

  // Duplicate board
  const handleDuplicateBoard = async (boardId: string) => {
    try {
      const res = await fetch(`/blueprint-hub/api/boards/${boardId}/duplicate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: currentUser }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.board) {
          setBoards(prev => [data.board, ...prev]);
          setCurrentBoardId(data.board.id);
        }
      }
    } catch (e) {}
  };

  // Delete board
  const handleDeleteBoard = async (boardId: string) => {
    setBoards(prev => prev.filter(b => b.id !== boardId));
    if (currentBoardId === boardId) {
      setCurrentBoardId(boards[0]?.id || 'board_main_demo');
    }
    try {
      await fetch(`/blueprint-hub/api/boards/${boardId}`, { method: 'DELETE' });
    } catch (e) {}
  };

  // Filter components with smart search
  const filteredComponents = useMemo(() => {
    return COMPONENTS_DATA.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchId = item.id.toLowerCase().includes(q);
      const matchTags = item.tags.some((t: string) => t.toLowerCase().includes(q));
      return matchName || matchDesc || matchId || matchTags;
    });
  }, [searchQuery, selectedCategory]);

  // Toggle component in cart and append to active board
  const toggleCart = (item: ComponentItem) => {
    setCartItems(prev => {
      const exists = prev.some(x => x.id === item.id);
      if (exists) {
        return prev.filter(x => x.id !== item.id);
      } else {
        // Also add as widget to current board
        const newWidget: CanvasBoardItem = {
          id: `widget_${item.id}_${Date.now()}`,
          componentId: item.id,
          name: item.name,
          category: item.category,
          type: 'component',
          x: 40 + (currentBoard.items?.length || 0) * 30,
          y: 60 + (currentBoard.items?.length || 0) * 30,
          width: item.category === 'tables' ? 960 : 460,
          height: 320,
          zIndex: (currentBoard.items?.length || 0) + 1,
        };
        handleUpdateBoard({
          ...currentBoard,
          items: [...(currentBoard.items || []), newWidget],
        });
        return [...prev, item];
      }
    });
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems(prev => prev.filter(x => x.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Create Snapshot from Freeform Board
  const handleCreateSnapshot = async (layoutType: string, slots: { slotId: string; componentId: string; x?: number; y?: number; width?: number; height?: number }[]) => {
    const newId = 'bp_2026_' + Math.random().toString(36).substring(2, 8);
    const selectedComps = slots
      .map(s => COMPONENTS_DATA.find(c => c.id === s.componentId))
      .filter(Boolean) as ComponentItem[];

    const fullCodeBundle = selectedComps.map((c, i) => `// ================= [${i + 1}] Component: ${c.name} (${c.id}) =================\n${c.fullSourceCode}`).join('\n\n');

    const layoutDesc = slots.map(s => `- Slot [${s.slotId}]: Component <${s.componentId} /> | 칠판 위치 (X: ${s.x ?? 0}px, Y: ${s.y ?? 0}px, 너비: ${s.width ?? 400}px, 높이: ${s.height ?? 300}px)`).join('\n');

    const generatedPrompt = `# 🚀 AI-Native Freeform Whiteboard Blueprint Code Generation Directive\n\n## 1. Project Blueprint Metadata\n- Blueprint ID: ${newId}\n- Source Board: "${currentBoard.title}" (Author: ${currentBoard.author})\n- Layout Architecture: Freeform Whiteboard Canvas\n- Timestamp: ${new Date().toISOString()}\n- Tech Stack: React 19, TypeScript, Tailwind CSS v4, Lucide-React\n\n## 2. 칠판 공간 배치도 (Spatial Layout Map)\n${layoutDesc}\n\n## 3. Component Specs & Full Source Codes\n${fullCodeBundle}\n\n## 4. Execution Instruction for AI Agent\n사용자가 칠판(화이트보드)에 자유롭게 배치한 위의 상대적 공간 위치(상단/하단/좌/우 비중)를 바탕으로, 자연스러운 모바일/데스크톱 반응형 대시보드 페이지(\`page.tsx\` 또는 \`App.tsx\`)를 작성해 주세요. 딥 다크 네온 글래스모피즘 룩을 유지해야 합니다.`;

    const snapshotData: BlueprintSnapshot = {
      id: newId,
      title: `${currentBoard.title} 청사진`,
      description: `${selectedComps.length}개의 최신 2026 UI 컨트롤이 배치된 AI 청사진`,
      createdAt: new Date().toISOString(),
      author: currentUser,
      layout: {
        type: layoutType as any,
        slots: slots.map(s => ({ slotId: s.slotId, componentId: s.componentId, customProps: { x: s.x, y: s.y, width: s.width, height: s.height } })),
      },
      components: selectedComps,
      generatedAiPrompt: generatedPrompt,
    };

    try {
      await fetch('/blueprint-hub/api/blueprints', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(snapshotData),
      });
      setRecentBlueprints(prev => [snapshotData, ...prev]);
    } catch (e) {
      console.warn('Backend API save fallback to local:', e);
    }

    setActiveSnapshot(snapshotData);
  };

  return (
    <div className="min-h-screen bg-[#07080d] text-slate-100 flex flex-col font-sans">
      
      {/* Global Unified Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        cartCount={cartItems.length}
        currentUser={currentUser}
        currentBoardTitle={currentBoard.title}
        saveStatus={saveStatus}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBoardManager={() => setIsBoardManagerOpen(true)}
        onOpenRecentBlueprints={() => setIsRecentOpen(true)}
      />

      {/* Main Tab View Switcher */}
      {currentTab === 'master' && (
        <MasterEnterpriseApp
          onAddToCart={toggleCart}
          cartItems={cartItems}
          onOpenDetailModal={(item) => setActiveDemoItem(item)}
        />
      )}

      {currentTab === 'canvas' && (
        <CanvasStudio
          board={currentBoard}
          currentUser={currentUser}
          onUpdateBoard={handleUpdateBoard}
          onBackToCatalog={() => setCurrentTab('catalog')}
          onOpenBoardManager={() => setIsBoardManagerOpen(true)}
          onCreateSnapshot={handleCreateSnapshot}
          onRemoveItem={handleRemoveCartItem}
        />
      )}

      {currentTab === 'techstack' && (
        <TechStackTab />
      )}

      {currentTab === 'storage' && (
        <StorageGuideTab />
      )}

      {currentTab === 'expo' && (
        <WebTechExpoTab />
      )}

      {currentTab === 'catalog' && (
        <>
          {/* Hero Banner */}
          <section className="relative overflow-hidden pt-10 pb-8 px-4 sm:px-6 lg:px-8 border-b border-white/5">
            <div className="max-w-7xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-cyan-600/20 border border-violet-500/30 text-xs font-bold text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-fuchsia-400 animate-spin" />
                <span>2026 AI-Native Component & Blueprint System</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                원하는 UI를 칠판에 붙이고 배치하면,<br />
                <span className="grad-text">AI가 0% 오차 완벽한 코드</span>로 완성합니다
              </h2>

              <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
                모호한 자연어 프롬프트 대신, 검증된 최신 상용급 컨트롤을 포스트잇 칠판처럼 자유롭게 조합하고 스냅샷 API를 AI에게 전달하세요.
              </p>

              {/* Quick Nav Action Chips */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setCurrentTab('canvas')}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-fuchsia-500/20 hover:bg-fuchsia-500/30 border border-fuchsia-500/40 text-xs font-bold text-fuchsia-300 transition-all shadow-lg"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>칠판 캔버스 바로가기 ({currentBoard.items?.length || 0}개 배치중)</span>
                </button>

                <button
                  onClick={() => setCurrentTab('techstack')}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-slate-300 transition-all"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>2026 기술스택 랩</span>
                </button>

                <button
                  onClick={() => setCurrentTab('storage')}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-slate-300 transition-all"
                >
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                  <span>DB 스토리지 가이드</span>
                </button>
              </div>
            </div>
          </section>

          {/* Component Catalog Grid */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <Box className="w-5 h-5 text-violet-400" />
                  <span>컴포넌트 & 인포그래픽 카탈로그</span>
                  <span className="text-xs font-mono text-slate-400 font-normal">({filteredComponents.length}개)</span>
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentTab('canvas')}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all"
                >
                  <Layers className="w-4 h-4" />
                  <span>칠판 캔버스에서 조립하기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {filteredComponents.length === 0 ? (
              <div className="py-20 text-center rounded-3xl border border-white/5 bg-white/[0.01]">
                <Box className="w-12 h-12 text-slate-600 mx-auto mb-3 stroke-1" />
                <h4 className="text-base font-bold text-white mb-1">검색 결과가 없습니다</h4>
                <p className="text-xs text-slate-400">다른 검색어나 카테고리 필터를 선택해보세요.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredComponents.map((item) => (
                  <ComponentCard
                    key={item.id}
                    item={item}
                    isInCart={cartItems.some(x => x.id === item.id)}
                    onToggleCart={toggleCart}
                    onOpenLiveDemo={(c) => setActiveDemoItem(c)}
                  />
                ))}
              </div>
            )}
          </main>
        </>
      )}

      {/* Modals & Drawers */}
      <LiveDemoModal
        item={activeDemoItem}
        onClose={() => setActiveDemoItem(null)}
        isInCart={activeDemoItem ? cartItems.some(x => x.id === activeDemoItem.id) : false}
        onToggleCart={toggleCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        onGoToCanvas={() => {
          setIsCartOpen(false);
          setCurrentTab('canvas');
        }}
      />

      <BoardManagerModal
        isOpen={isBoardManagerOpen}
        onClose={() => setIsBoardManagerOpen(false)}
        currentUser={currentUser}
        onChangeUser={handleSetUser}
        boards={boards}
        currentBoardId={currentBoardId}
        onSelectBoard={(b) => {
          setCurrentBoardId(b.id);
          setCurrentTab('canvas');
        }}
        onCreateNewBoard={handleCreateNewBoard}
        onDuplicateBoard={handleDuplicateBoard}
        onDeleteBoard={handleDeleteBoard}
      />

      <SnapshotModal
        snapshot={activeSnapshot}
        onClose={() => setActiveSnapshot(null)}
      />

      <RecentBlueprintsModal
        isOpen={isRecentOpen}
        onClose={() => setIsRecentOpen(false)}
        blueprints={recentBlueprints}
        onSelectBlueprint={(bp) => setActiveSnapshot(bp)}
      />

      {/* Global Footer */}
      <footer className="border-t border-white/10 bg-[#05060a] py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 <strong>BlueprintHub</strong> — AI-Native Component & Blueprint System</span>
          <span className="text-slate-600">Dual Routing Enabled (kwopi.duckdns.org / 10194)</span>
        </div>
      </footer>
    </div>
  );
}
