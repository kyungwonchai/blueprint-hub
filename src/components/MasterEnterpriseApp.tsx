import React, { useState } from 'react';
import { 
  BarChart3, Activity, Layers, ShoppingBag, Check, Plus, Sparkles, 
  ArrowUpRight, Shield, Zap, RefreshCw, Eye, Search, Filter,
  DollarSign, Server, Globe, Bot, Play, CheckCircle2
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

  const getComponent = (id: string) => COMPONENTS_DATA.find(c => c.id === id);

  const renderComponentWrapper = (id: string, customTitle?: string) => {
    const item = getComponent(id);
    if (!item) return null;
    const inCart = cartItems.some(x => x.id === item.id);

    return (
      <div className="relative group/slot rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-violet-500/50 p-3 shadow-xl transition-all">
        {/* Quick Inspector Ribbon */}
        <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            <span className="text-[11px] font-bold text-white tracking-tight truncate">
              {customTitle || item.name}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => onOpenDetailModal(item)}
              className="p-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="컴포넌트 상세 스펙 및 소스코드 보기"
            >
              <Eye className="w-3 h-3" />
            </button>

            <button
              onClick={() => onAddToCart(item)}
              className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold transition-all ${
                inCart
                  ? 'bg-fuchsia-500 text-white shadow-sm'
                  : 'bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white border border-white/10'
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
      <div className="p-4 rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black text-[10px] font-black uppercase tracking-wider">
              Live Master System
            </span>
            <h2 className="text-base sm:text-lg font-black text-white">
              2026 엔터프라이즈 실시간 관제 마스터 허브
            </h2>
          </div>
          <p className="text-xs text-slate-400">
            실제 운영 중인 통합 앱 안에서 개별 컨트롤들의 실시간 상호작용과 역할을 직접 체험하고 원하는 컴포넌트를 즉시 장바구니에 담으세요.
          </p>
        </div>

        {/* Workspace Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-black/60 border border-white/10">
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
            <span>DevOps & 인프라 관제탑</span>
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

          {/* Main Chart + Orderbook Split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
              {renderComponentWrapper('chart-candlestick-trading')}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderComponentWrapper('chart-donut-allocation')}
                {renderComponentWrapper('chart-bubble-market-map')}
              </div>
            </div>
            <div className="space-y-4">
              {renderComponentWrapper('table-compact-crypto-orderbook')}
              {renderComponentWrapper('form-credit-card-live-preview')}
              {renderComponentWrapper('chart-gauge-speedometer')}
            </div>
          </div>

          {/* Bottom Full Grid */}
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
