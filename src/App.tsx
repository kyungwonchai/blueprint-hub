import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { ComponentCard } from './components/ComponentCard';
import { LiveDemoModal } from './components/LiveDemoModal';
import { CartDrawer } from './components/CartDrawer';
import { CanvasStudio } from './components/CanvasStudio';
import { SnapshotModal } from './components/SnapshotModal';
import { RecentBlueprintsModal } from './components/RecentBlueprintsModal';
import { COMPONENTS_DATA } from './data/componentsData';
import { ComponentItem, CategoryId, BlueprintSnapshot } from './types';
import { 
  Sparkles, Layers, Box, Terminal, ArrowRight, 
  CheckCircle2, Flame, Shield, Zap 
} from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<'catalog' | 'canvas'>('catalog');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  
  // Cart state
  const [cartItems, setCartItems] = useState<ComponentItem[]>(() => {
    try {
      const saved = localStorage.getItem('k_blueprint_cart');
      return saved ? JSON.parse(saved) : [COMPONENTS_DATA[0], COMPONENTS_DATA[1], COMPONENTS_DATA[2]];
    } catch {
      return [COMPONENTS_DATA[0], COMPONENTS_DATA[1]];
    }
  });

  // Modals state
  const [activeDemoItem, setActiveDemoItem] = useState<ComponentItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSnapshot, setActiveSnapshot] = useState<BlueprintSnapshot | null>(null);
  const [isRecentOpen, setIsRecentOpen] = useState(false);
  const [recentBlueprints, setRecentBlueprints] = useState<BlueprintSnapshot[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem('k_blueprint_cart', JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  // Load recent blueprints from backend API
  useEffect(() => {
    fetch('/blueprint-hub/api/blueprints/recent')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setRecentBlueprints(data);
      })
      .catch(() => {
        // Fallback demo preset
        setRecentBlueprints([
          {
            id: 'bp_2026_demo_dash',
            title: '2026 AI-Ops 실시간 클라우드 모니터링 대시보드',
            description: 'KPI 네온 카드 + 실시간 RPS 차트 + 데이터그리드 결합 레이아웃',
            createdAt: new Date().toISOString(),
            author: 'Master Developer',
            layout: {
              type: 'dashboard-grid',
              slots: [
                { slotId: 'slot_1', componentId: 'kpi-metric-neon' },
                { slotId: 'slot_2', componentId: 'analytics-chart-stream' },
                { slotId: 'slot_3', componentId: 'datagrid-realtime-pro' },
              ]
            },
            components: [COMPONENTS_DATA[0], COMPONENTS_DATA[3], COMPONENTS_DATA[2]],
            generatedAiPrompt: `[AI Blueprint Implementation Spec: bp_2026_demo_dash]\n\n이 대시보드 레이아웃은 React 19, Tailwind CSS v4, Lucide 아이콘으로 구현합니다.\n포함 컴포넌트: kpi-metric-neon, analytics-chart-stream, datagrid-realtime-pro`
          }
        ]);
      });
  }, []);

  // Filter components with smart search (Korean/English tag matching)
  const filteredComponents = useMemo(() => {
    return COMPONENTS_DATA.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search query filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchId = item.id.toLowerCase().includes(q);
      const matchTags = item.tags.some((t: string) => t.toLowerCase().includes(q));
      return matchName || matchDesc || matchId || matchTags;
    });
  }, [searchQuery, selectedCategory]);

  const toggleCart = (item: ComponentItem) => {
    setCartItems(prev => {
      const exists = prev.some(x => x.id === item.id);
      if (exists) return prev.filter(x => x.id !== item.id);
      return [...prev, item];
    });
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems(prev => prev.filter(x => x.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Create Blueprint Snapshot
  const handleCreateSnapshot = async (layoutType: string, slots: { slotId: string; componentId: string; x?: number; y?: number; width?: number; height?: number }[]) => {
    const newId = 'bp_2026_' + Math.random().toString(36).substring(2, 8);
    const selectedComps = cartItems;

    const fullCodeBundle = selectedComps.map((c, i) => `// ================= [${i + 1}] Component: ${c.name} (${c.id}) =================\n${c.fullSourceCode}`).join('\n\n');

    const layoutDesc = slots.map(s => `- Slot [${s.slotId}]: Component <${s.componentId} /> | 칠판 위치 (X: ${s.x ?? 0}px, Y: ${s.y ?? 0}px, 너비: ${s.width ?? 400}px, 높이: ${s.height ?? 300}px)`).join('\n');

    const generatedPrompt = `# 🚀 AI-Native Freeform Whiteboard Blueprint Code Generation Directive\n\n## 1. Project Blueprint Metadata\n- Blueprint ID: ${newId}\n- Layout Architecture: Freeform Whiteboard Canvas\n- Timestamp: ${new Date().toISOString()}\n- Tech Stack: React 19, TypeScript, Tailwind CSS v4, Lucide-React\n\n## 2. 칠판 공간 배치도 (Spatial Layout Map)\n${layoutDesc}\n\n## 3. Component Specs & Full Source Codes\n${fullCodeBundle}\n\n## 4. Execution Instruction for AI Agent\n사용자가 칠판(화이트보드)에 자유롭게 배치한 위의 상대적 공간 위치(상단/하단/좌/우 비중)를 바탕으로, 자연스러운 모바일/데스크톱 반응형 대시보드 페이지(\`page.tsx\` 또는 \`App.tsx\`)를 작성해 주세요. 딥 다크 네온 글래스모피즘 룩을 유지해야 합니다.`;

    const snapshotData: BlueprintSnapshot = {
      id: newId,
      title: `${selectedComps.map(c => c.name.slice(0, 10)).join(' + ')} 칠판 레이아웃`,
      description: `${selectedComps.length}개의 최신 2026 UI 컨트롤이 배치된 AI 청사진`,
      createdAt: new Date().toISOString(),
      author: 'kw_architect',
      layout: {
        type: layoutType as any,
        slots: slots.map(s => ({ slotId: s.slotId, componentId: s.componentId, customProps: { x: s.x, y: s.y, width: s.width, height: s.height } })),
      },
      components: selectedComps,
      generatedAiPrompt: generatedPrompt,
    };

    // Save to Backend API
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
      
      {/* View Switcher: Catalog vs Canvas */}
      {viewMode === 'canvas' ? (
        <CanvasStudio
          cartItems={cartItems}
          onBackToCatalog={() => setViewMode('catalog')}
          onCreateSnapshot={handleCreateSnapshot}
          onRemoveItem={handleRemoveCartItem}
        />
      ) : (
        <>
          {/* Main Top Header */}
          <Header
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            cartCount={cartItems.length}
            onOpenCart={() => setIsCartOpen(true)}
            onOpenCanvas={() => setViewMode('canvas')}
            onOpenRecentBlueprints={() => setIsRecentOpen(true)}
          />

          {/* Hero Banner Area */}
          <section className="relative overflow-hidden pt-10 pb-8 px-4 sm:px-6 lg:px-8 border-b border-white/5">
            <div className="max-w-7xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 border border-violet-500/30 text-xs font-bold text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-fuchsia-400 animate-spin" />
                <span>2026 AI-Native Component & Blueprint System</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                원하는 UI를 담고 배치하면,<br />
                <span className="grad-text">AI가 0% 오차 완벽한 코드</span>로 완성합니다
              </h2>

              <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
                모호한 자연어 프롬프트는 이제 그만. 검증된 최신 상용급 컨트롤을 시각적으로 고르고 스냅샷 API를 AI(Cursor, Claude, Antigravity)에게 전달하세요.
              </p>

              {/* Quick Feature Chips */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-300">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>React 19 & Tailwind v4</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-300">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>실시간 라이브 팝업 체험</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-300">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>스냅샷 REST API 연동</span>
                </div>
              </div>
            </div>
          </section>

          {/* Component Catalog Grid */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <Box className="w-5 h-5 text-violet-400" />
                  <span>컴포넌트 카탈로그</span>
                  <span className="text-xs font-mono text-slate-400 font-normal">({filteredComponents.length}개)</span>
                </h3>
              </div>

              {cartItems.length > 0 && (
                <button
                  onClick={() => setViewMode('canvas')}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all"
                >
                  <Layers className="w-4 h-4" />
                  <span>담긴 {cartItems.length}개 컨트롤 배치하러 가기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
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
        onGoToCanvas={() => setViewMode('canvas')}
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
          <span className="text-slate-600">Dual Routing Enabled (kwopi.duckdns.org / 10192)</span>
        </div>
      </footer>
    </div>
  );
}
