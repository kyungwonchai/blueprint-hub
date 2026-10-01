import React, { useState, useEffect } from 'react';
import { 
  BarChart3, Activity, Layers, ShoppingBag, Check, Plus, Sparkles, 
  ArrowUpRight, Shield, Zap, RefreshCw, Eye, Search, Filter,
  DollarSign, Server, Globe, Bot, Play, CheckCircle2, Sliders,
  TrendingUp, ArrowDownRight, Terminal, Cpu, HardDrive
} from 'lucide-react';
import { COMPONENTS_DATA } from '../data/componentsData';
import { ComponentItem } from '../types';
import { ComponentRenderer } from './ComponentRenderer';

interface MasterEnterpriseAppProps {
  onAddToCart: (item: ComponentItem) => void;
  cartItems: ComponentItem[];
  onOpenDetailModal: (item: ComponentItem) => void;
}

export const MasterEnterpriseApp: React.FC<MasterEnterpriseAppProps> = ({
  onAddToCart,
  cartItems,
  onOpenDetailModal,
}) => {
  const [activeWorkspace, setActiveWorkspace] = useState<'trading' | 'bi' | 'devops' | 'ai'>('trading');
  const [liveTicker, setLiveTicker] = useState(68490);
  const [orderQty, setOrderQty] = useState('0.5');
  const [orderSide, setOrderSide] = useState<'BUY' | 'SELL'>('BUY');
  const [orderSuccess, setOrderSuccess] = useState<string | null>(null);

  // Auto live tick for Enterprise authenticity
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveTicker(p => p + (Math.floor(Math.random() * 30) - 14));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handlePlaceOrder = () => {
    setOrderSuccess(`✔ ${orderSide} ${orderQty} BTC @ $${liveTicker.toLocaleString()} 체결 완료!`);
    setTimeout(() => setOrderSuccess(null), 3000);
  };

  const getComponent = (id: string) => COMPONENTS_DATA.find(c => c.id === id);

  const renderComponentWrapper = (id: string, customTitle?: string) => {
    const item = getComponent(id);
    if (!item) return null;
    const inCart = cartItems.some(x => x.id === item.id);

    return (
      <div className="relative group/slot rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 hover:border-violet-500/50 p-3.5 shadow-xl transition-all flex flex-col justify-between">
        {/* Quick Inspector Ribbon */}
        <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-white/5">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-violet-400 shrink-0" />
            <span className="text-xs font-extrabold text-white tracking-tight truncate">
              {customTitle || item.name}
            </span>
          </div>

          <div className="flex items-center gap-1 shrink-0 ml-2">
            <button
              onClick={() => onOpenDetailModal(item)}
              className="p-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="컴포넌트 상세 스펙 및 소스코드 보기"
            >
              <Eye className="w-3 h-3" />
            </button>

            <button
              onClick={() => onAddToCart(item)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold transition-all ${
                inCart
                  ? 'bg-fuchsia-500 text-white shadow-md'
                  : 'bg-white/[0.08] hover:bg-white/[0.16] text-white border border-white/15'
              }`}
            >
              {inCart ? <Check className="w-2.5 h-2.5" /> : <Plus className="w-2.5 h-2.5" />}
              <span>{inCart ? '담김' : '담기'}</span>
            </button>
          </div>
        </div>

        {/* Live Active Component Display */}
        <div className="w-full">
          <ComponentRenderer componentId={item.id} isCompact={false} />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 animate-fade-in">
      {/* Top App Bar with Workspace Switcher */}
      <div className="p-5 rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black text-[10px] font-black uppercase tracking-wider animate-pulse">
              ● Live Master Enterprise
            </span>
            <h2 className="text-base sm:text-lg font-black text-white">
              2026 엔터프라이즈 실시간 통합 관제 시스템
            </h2>
          </div>
          <p className="text-xs text-slate-400">
            실제 유스케이스 환경에서 100% 작동하는 데이터 기반 컨트롤들을 직접 조작해보고, 필요한 부품을 장바구니에 담으세요.
          </p>
        </div>

        {/* Workspace Switcher */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-black/60 border border-white/10">
          <button
            onClick={() => setActiveWorkspace('trading')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeWorkspace === 'trading'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>금융 & 퀀트 트레이딩</span>
          </button>

          <button
            onClick={() => setActiveWorkspace('bi')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeWorkspace === 'bi'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>경영 BI & 피벗 매트릭스</span>
          </button>

          <button
            onClick={() => setActiveWorkspace('devops')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeWorkspace === 'devops'
                ? 'bg-gradient-to-r from-fuchsia-600 to-rose-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>DevOps & 관제탑</span>
          </button>

          <button
            onClick={() => setActiveWorkspace('ai')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeWorkspace === 'ai'
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>AI 에이전트 & LLM 랩</span>
          </button>
        </div>
      </div>

      {/* 1. TRADING & QUANT WORKSPACE */}
      {activeWorkspace === 'trading' && (
        <div className="space-y-4">
          {/* Top KPI Stream */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {renderComponentWrapper('stat-crypto-portfolio-balance')}
            {renderComponentWrapper('stat-revenue-growth-gradient')}
            {renderComponentWrapper('stat-server-latency-ms')}
            {renderComponentWrapper('chart-sparkline-mini-badge')}
          </div>

          {/* Main Chart + Order Execution Console */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
              {renderComponentWrapper('chart-candlestick-trading')}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderComponentWrapper('chart-donut-allocation')}
                {renderComponentWrapper('chart-bubble-market-map')}
              </div>
            </div>

            {/* Live Orderbook + Interactive Trade Execution Desk */}
            <div className="space-y-4">
              {renderComponentWrapper('table-compact-crypto-orderbook')}
              
              {/* Interactive Live Trading Desk Widget */}
              <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-white">
                  <span>⚡ 원클릭 초단타 주문 데스크</span>
                  <span className="font-mono text-emerald-400 font-bold">${liveTicker.toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setOrderSide('BUY')}
                    className={`py-2 rounded-xl text-xs font-black transition-all ${
                      orderSide === 'BUY' ? 'bg-emerald-600 text-white shadow-[0_0_12px_#10b981]' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    매수 (BUY LONG)
                  </button>
                  <button
                    onClick={() => setOrderSide('SELL')}
                    className={`py-2 rounded-xl text-xs font-black transition-all ${
                      orderSide === 'SELL' ? 'bg-rose-600 text-white shadow-[0_0_12px_#ef4444]' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    매도 (SELL SHORT)
                  </button>
                </div>
                <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-xl border border-white/10">
                  <span className="text-slate-400 text-xs font-mono">수량:</span>
                  <input
                    type="text"
                    value={orderQty}
                    onChange={e => setOrderQty(e.target.value)}
                    className="bg-transparent text-white font-mono font-bold text-xs focus:outline-none flex-1 text-right"
                  />
                  <span className="text-slate-500 text-xs font-mono">BTC</span>
                </div>
                <button
                  onClick={handlePlaceOrder}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-black hover:opacity-95 shadow-lg active:scale-95 transition-all"
                >
                  {orderSide} {orderQty} BTC 주문 즉시 전송
                </button>
                {orderSuccess && (
                  <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold text-center animate-fade-in">
                    {orderSuccess}
                  </div>
                )}
              </div>

              {renderComponentWrapper('chart-gauge-speedometer')}
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {renderComponentWrapper('table-sticky-column-finance')}
            {renderComponentWrapper('chart-waterfall-cashflow')}
          </div>
        </div>
      )}

      {/* 2. BI & ENTERPRISE PIVOT WORKSPACE */}
      {activeWorkspace === 'bi' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {renderComponentWrapper('kpi-metric-neon')}
            {renderComponentWrapper('dashboard-grid-overview')}
            {renderComponentWrapper('stat-conversion-funnel-kpi')}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {renderComponentWrapper('table-pivot-matrix-analysis')}
            {renderComponentWrapper('chart-bar-comparison-dual')}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {renderComponentWrapper('chart-funnel-conversion')}
            {renderComponentWrapper('chart-treemap-portfolio')}
            {renderComponentWrapper('chart-radar-skills')}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {renderComponentWrapper('table-expandable-tree-rows')}
            {renderComponentWrapper('table-inline-editable-cell')}
          </div>
        </div>
      )}

      {/* 3. DEVOPS & INFRASTRUCTURE WORKSPACE */}
      {activeWorkspace === 'devops' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {renderComponentWrapper('circular-gauge-monitor')}
            {renderComponentWrapper('dashboard-api-gateway-traffic')}
            {renderComponentWrapper('stat-uptime-sla-four-nines')}
            {renderComponentWrapper('stat-database-qps-throughput')}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
              {renderComponentWrapper('datagrid-realtime-pro')}
              {renderComponentWrapper('dashboard-devops-pipeline-ci')}
              {renderComponentWrapper('analytics-chart-stream')}
            </div>
            <div className="space-y-4">
              {renderComponentWrapper('dashboard-security-audit-threat')}
              {renderComponentWrapper('table-audit-log-timeline')}
              {renderComponentWrapper('table-file-manager-explorer')}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {renderComponentWrapper('chart-activity-heatmap')}
            {renderComponentWrapper('table-virtualized-infinite-scroll')}
          </div>
        </div>
      )}

      {/* 4. AI AGENT & LLM LAB */}
      {activeWorkspace === 'ai' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {renderComponentWrapper('stat-ai-token-generation-speed')}
            {renderComponentWrapper('dashboard-ai-model-inference-stats')}
            {renderComponentWrapper('ai-prompt-commander')}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {renderComponentWrapper('interactive-terminal-card')}
            {renderComponentWrapper('ai-code-diff-inspector')}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {renderComponentWrapper('ai-audio-voice-waveform')}
            {renderComponentWrapper('glass-form-stepper')}
            {renderComponentWrapper('form-rich-markdown-editor')}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {renderComponentWrapper('theme-bento-grid-card-layout')}
            {renderComponentWrapper('theme-border-gradient-beam')}
          </div>
        </div>
      )}
    </div>
  );
};
