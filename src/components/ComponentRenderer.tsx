import React, { useState } from 'react';
import { 
  Activity, ArrowUpRight, Sparkles, ArrowRight, Paperclip, Mic,
  Search, ArrowUpDown, CheckSquare, Square, MoreHorizontal,
  BarChart3, TrendingUp, Check, ChevronRight, User, Mail, KeyRound,
  Palette, Cpu, HardDrive, Thermometer, Terminal, Copy, LayoutGrid,
  Zap, Database, Layers, Settings, CheckCircle2, X, Bell, Play
} from 'lucide-react';
import { THEME_PRESETS } from '../data/componentsData';

// Modular Renderer Imports
import { 
  CandlestickTradingDemo, DonutAllocationDemo, RadarSkillsDemo, 
  ActivityHeatmapDemo, StreamAreaDemo, DualBarComparisonDemo, 
  BubbleMarketMapDemo, FunnelConversionDemo, TreemapPortfolioDemo, 
  SpeedometerGaugeDemo, WaterfallCashflowDemo, SparklineMiniBadgeDemo 
} from './renderers/ChartRenderers';

import { 
  DataGridDemo, PivotMatrixDemo, TreeTableDemo, InlineEditTableDemo, 
  StickyFreezeTableDemo, VirtualScrollTableDemo, OrderbookTableDemo, 
  PricingPlanTableDemo, AuditLogTableDemo, FileManagerTableDemo, 
  InventoryStockTableDemo, LeaderboardTableDemo 
} from './renderers/TableRenderers';

import { 
  GlassStepperDemo, CreditCard3DDemo, PasswordMeterDemo, DateRangePickerDemo, 
  DualRangeSliderDemo, MarkdownEditorDemo, OtpVerifyDemo, TagComboboxDemo, 
  AiDiffInspectorDemo, AiAudioWaveformDemo 
} from './renderers/FormAiRenderers';

import { 
  MultiGaugeHardwareDemo, GlobalEdgeTrafficDemo, SecurityWafDemo, 
  BorderBeamDemo, BentoGridDemo, ThemeToggleDemo 
} from './renderers/OtherRenderers';

interface RendererProps {
  componentId: string;
  isCompact?: boolean;
}

export const ComponentRenderer: React.FC<RendererProps> = ({ componentId, isCompact = false }) => {
  // 1. CHARTS & VISUALIZATIONS
  if (componentId === 'chart-candlestick-trading') return <CandlestickTradingDemo />;
  if (componentId === 'chart-donut-allocation') return <DonutAllocationDemo />;
  if (componentId === 'chart-radar-skills') return <RadarSkillsDemo />;
  if (componentId === 'chart-activity-heatmap') return <ActivityHeatmapDemo />;
  if (componentId === 'analytics-chart-stream') return <StreamAreaDemo />;
  if (componentId === 'chart-bar-comparison-dual') return <DualBarComparisonDemo />;
  if (componentId === 'chart-bubble-market-map') return <BubbleMarketMapDemo />;
  if (componentId === 'chart-funnel-conversion') return <FunnelConversionDemo />;
  if (componentId === 'chart-treemap-portfolio') return <TreemapPortfolioDemo />;
  if (componentId === 'chart-gauge-speedometer') return <SpeedometerGaugeDemo />;
  if (componentId === 'chart-waterfall-cashflow') return <WaterfallCashflowDemo />;
  if (componentId === 'chart-sparkline-mini-badge') return <SparklineMiniBadgeDemo />;

  // 2. TABLES & GRIDS
  if (componentId === 'datagrid-realtime-pro') return <DataGridDemo />;
  if (componentId === 'table-pivot-matrix-analysis') return <PivotMatrixDemo />;
  if (componentId === 'table-expandable-tree-rows') return <TreeTableDemo />;
  if (componentId === 'table-inline-editable-cell') return <InlineEditTableDemo />;
  if (componentId === 'table-sticky-column-finance') return <StickyFreezeTableDemo />;
  if (componentId === 'table-virtualized-infinite-scroll') return <VirtualScrollTableDemo />;
  if (componentId === 'table-compact-crypto-orderbook') return <OrderbookTableDemo />;
  if (componentId === 'table-comparison-pricing-plan') return <PricingPlanTableDemo />;
  if (componentId === 'table-audit-log-timeline') return <AuditLogTableDemo />;
  if (componentId === 'table-file-manager-explorer') return <FileManagerTableDemo />;
  if (componentId === 'table-inventory-stock-batch') return <InventoryStockTableDemo />;
  if (componentId === 'table-leaderboard-ranking') return <LeaderboardTableDemo />;

  // 3. FORMS & INPUTS
  if (componentId === 'glass-form-stepper') return <GlassStepperDemo />;
  if (componentId === 'form-credit-card-live-preview') return <CreditCard3DDemo />;
  if (componentId === 'form-password-strength-meter') return <PasswordMeterDemo />;
  if (componentId === 'form-date-range-quick-picker') return <DateRangePickerDemo />;
  if (componentId === 'form-dual-range-slider-filter') return <DualRangeSliderDemo />;
  if (componentId === 'form-rich-markdown-editor') return <MarkdownEditorDemo />;
  if (componentId === 'form-phone-country-otp-verify') return <OtpVerifyDemo />;
  if (componentId === 'form-tag-combobox-autocomplete') return <TagComboboxDemo />;

  // 4. AI WIDGETS
  if (componentId === 'ai-prompt-commander') return <AiPromptCommanderDemo isCompact={isCompact} />;
  if (componentId === 'interactive-terminal-card') return <TerminalCardDemo isCompact={isCompact} />;
  if (componentId === 'ai-code-diff-inspector') return <AiDiffInspectorDemo />;
  if (componentId === 'ai-audio-voice-waveform') return <AiAudioWaveformDemo />;

  // 5. DASHBOARDS & STATS
  if (componentId === 'circular-gauge-monitor') return <MultiGaugeHardwareDemo />;
  if (componentId === 'dashboard-api-gateway-traffic') return <GlobalEdgeTrafficDemo />;
  if (componentId === 'dashboard-security-audit-threat') return <SecurityWafDemo />;
  if (componentId === 'kpi-metric-neon') return <KpiMetricNeonDemo />;
  if (componentId === 'stat-revenue-growth-gradient') return <StatRevenueDemo />;
  if (componentId === 'stat-server-latency-ms') return <StatLatencyDemo />;

  // 6. THEMES & DESIGN TOKENS
  if (componentId === 'theme-token-palette') return <ThemePaletteDemo />;
  if (componentId === 'theme-border-gradient-beam') return <BorderBeamDemo />;
  if (componentId === 'theme-bento-grid-card-layout') return <BentoGridDemo />;
  if (componentId === 'theme-dark-light-mode-toggle') return <ThemeToggleDemo />;

  // 7. NAVIGATION & FEEDBACK
  if (componentId === 'floating-tab-navigation') return <FloatingNavDemo />;
  if (componentId === 'notification-toast-feed') return <NotificationToastDemo />;

  // Dynamic Clean Visualizer for extended items
  return <DistinctControlFallback componentId={componentId} />;
};

/* --- Built-in Clean Demos --- */

const KpiMetricNeonDemo: React.FC = () => {
  return (
    <div className="relative group overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/50 transition-all duration-300">
      <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all duration-500" />
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">실시간 활성 유저 (MAU)</span>
        <div className="p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
          <Activity className="w-4 h-4" />
        </div>
      </div>
      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-3xl font-extrabold text-white tracking-tight">128,490</span>
        <span className="inline-flex items-center text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
          <ArrowUpRight className="w-3 h-3 mr-0.5" />
          +14.2%
        </span>
      </div>
      <p className="text-xs text-slate-500 font-medium">전월 대비 +16,020명 증가</p>
    </div>
  );
};

const StatRevenueDemo: React.FC = () => {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-violet-950/40 via-slate-900/90 to-fuchsia-950/30 backdrop-blur-xl border border-violet-500/30 p-5 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-slate-400">
        <span>월간 반복 매출 (MRR)</span>
        <span className="text-violet-400">Target 88%</span>
      </div>
      <div className="text-2xl font-black text-white font-mono">$128,400.00</div>
      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full rounded-full w-[88%]" />
      </div>
    </div>
  );
};

const StatLatencyDemo: React.FC = () => {
  return (
    <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 p-5 shadow-2xl flex items-center justify-between">
      <div>
        <span className="text-xs text-slate-400 block mb-1">글로벌 응답 지연</span>
        <span className="text-2xl font-black text-white font-mono">18 <span className="text-sm font-normal text-emerald-400">ms</span></span>
      </div>
      <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold rounded-xl animate-pulse">Ultra Fast</span>
    </div>
  );
};

const AiPromptCommanderDemo: React.FC<{ isCompact?: boolean }> = ({ isCompact }) => {
  const [prompt, setPrompt] = useState('');
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-2xl border border-violet-500/30 p-3 shadow-2xl">
      <div className="flex items-center gap-2 mb-2 px-1 text-xs font-bold text-violet-400">
        <Sparkles className="w-3.5 h-3.5" /> AI Command Center
      </div>
      <div className="flex items-center gap-2 bg-slate-950/60 rounded-xl p-2 border border-white/5">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="AI에게 무엇이든 지시하세요..."
          className="flex-1 bg-transparent text-xs text-slate-100 placeholder-slate-500 focus:outline-none px-1"
        />
        <button className="p-2 rounded-xl bg-violet-600 text-white font-semibold shadow-lg">
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

const TerminalCardDemo: React.FC<{ isCompact?: boolean }> = () => {
  return (
    <div className="w-full rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/15 overflow-hidden shadow-2xl font-mono text-xs">
      <div className="bg-white/[0.04] px-4 py-2 border-b border-white/10 flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        <span className="text-slate-400 text-[10px] ml-2">bash — 80x24</span>
      </div>
      <div className="p-3 text-[11px] text-slate-300 space-y-1">
        <div className="text-emerald-400">kw@blueprint:~$ agy --approval-mode=yolo</div>
        <div className="text-cyan-400 pl-2">✔ DevExpress Grade Controls Ready (100% Verified)</div>
      </div>
    </div>
  );
};

const ThemePaletteDemo: React.FC = () => {
  return (
    <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="text-xs font-bold text-white flex items-center justify-between">
        <span>테마 디자인 토큰</span>
        <Palette className="w-3.5 h-3.5 text-fuchsia-400" />
      </div>
      <div className="flex gap-2">
        {THEME_PRESETS.map((t) => (
          <div key={t.id} className="flex-1 h-10 rounded-xl flex items-center justify-center text-[10px] font-bold text-white border border-white/10 shadow-md" style={{ backgroundColor: t.bg }}>
            <span style={{ color: t.accent }}>● {t.name.split(' ')[0]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const FloatingNavDemo: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-2">
      <nav className="flex items-center gap-1 p-1 rounded-full bg-slate-900/90 border border-white/10 shadow-2xl">
        <button className="px-3 py-1.5 rounded-full bg-violet-600 text-white text-xs font-bold shadow-md">Overview</button>
        <button className="px-3 py-1.5 rounded-full text-slate-400 text-xs hover:text-white">Analytics</button>
        <button className="px-3 py-1.5 rounded-full text-slate-400 text-xs hover:text-white">Settings</button>
      </nav>
    </div>
  );
};

const NotificationToastDemo: React.FC = () => {
  return (
    <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 p-3.5 shadow-2xl flex items-center gap-3">
      <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <CheckCircle2 className="w-4 h-4" />
      </div>
      <div>
        <h5 className="text-xs font-bold text-white">AI 청사진 동기화 완료</h5>
        <p className="text-[11px] text-slate-400">포스트잇 칠판이 실시간 저장되었습니다.</p>
      </div>
    </div>
  );
};

const DistinctControlFallback: React.FC<{ componentId: string }> = ({ componentId }) => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-violet-400" />
        <span className="text-xs font-bold text-white capitalize">{componentId.replace(/-/g, ' ')}</span>
      </div>
      <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 font-bold">2026 UI</span>
    </div>
  );
};
