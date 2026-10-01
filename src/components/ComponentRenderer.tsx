import React from 'react';
import { Sparkles } from 'lucide-react';

// 1. Chart Renderers
import { 
  CandlestickTradingDemo, DonutAllocationDemo, RadarSkillsDemo, 
  ActivityHeatmapDemo, StreamAreaDemo, DualBarComparisonDemo, 
  BubbleMarketMapDemo, FunnelConversionDemo, TreemapPortfolioDemo, 
  SpeedometerGaugeDemo, WaterfallCashflowDemo, SparklineMiniBadgeDemo 
} from './renderers/ChartRenderers';

// 2. Table Renderers
import { 
  DataGridDemo, PivotMatrixDemo, TreeTableDemo, InlineEditTableDemo, 
  StickyFreezeTableDemo, VirtualScrollTableDemo, OrderbookTableDemo, 
  PricingPlanTableDemo, AuditLogTableDemo, FileManagerTableDemo, 
  InventoryStockTableDemo, LeaderboardTableDemo 
} from './renderers/TableRenderers';

// 3. Dashboard Renderers
import { 
  MultiGaugeHardwareDemo, ExecutiveOverviewDemo, GlobalEdgeTrafficDemo, 
  EcommerceLiveFeedDemo, DevOpsPipelineDemo, SecurityWafDemo, 
  RetentionCohortDemo, DbClusterHealthDemo, CloudBillingCostDemo, 
  CustomerSupportSlaDemo, IotSmartFacilityDemo, AiInferenceStatsDemo 
} from './renderers/DashboardRenderers';

// 4. Form & AI Renderers
import { 
  GlassStepperDemo, CreditCard3DDemo, PasswordMeterDemo, DateRangePickerDemo, 
  DualRangeSliderDemo, MarkdownEditorDemo, OtpVerifyDemo, TagComboboxDemo, 
  AiDiffInspectorDemo, AiAudioWaveformDemo 
} from './renderers/FormAiRenderers';

// 5. Stat Card Renderers
import { 
  KpiMetricNeonDemo, StatRevenueDemo, StatLatencyDemo, StatConversionDemo, 
  StatBatteryDemo, StatGithubStarsDemo, StatUptimeSlaDemo, StatCryptoBalanceDemo, 
  StatDbQpsDemo, StatAiTpsDemo, StatDiskUsageDemo, StatCsatDemo 
} from './renderers/StatCardRenderers';

// 6. Nav, Feedback & Theme Renderers
import { 
  FloatingNavDemo, SidebarCollapsibleDemo, BreadcrumbDemo, CommandPaletteDemo, 
  NotificationToastDemo, DestructiveModalDemo, SkeletonShimmerDemo, StarRatingDemo, 
  ThemePaletteDemo, BorderBeamDemo, BentoGridDemo, ThemeToggleDemo 
} from './renderers/NavFeedbackThemeRenderers';

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

  // 2. TABLES, DATAGRIDS & PIVOTS
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

  // 3. DASHBOARDS & METRICS
  if (componentId === 'circular-gauge-monitor') return <MultiGaugeHardwareDemo />;
  if (componentId === 'dashboard-grid-overview') return <ExecutiveOverviewDemo />;
  if (componentId === 'dashboard-api-gateway-traffic') return <GlobalEdgeTrafficDemo />;
  if (componentId === 'dashboard-ecommerce-live-feed') return <EcommerceLiveFeedDemo />;
  if (componentId === 'dashboard-devops-pipeline-ci') return <DevOpsPipelineDemo />;
  if (componentId === 'dashboard-security-audit-threat') return <SecurityWafDemo />;
  if (componentId === 'dashboard-user-retention-cohort') return <RetentionCohortDemo />;
  if (componentId === 'dashboard-database-cluster-health') return <DbClusterHealthDemo />;
  if (componentId === 'dashboard-cloud-billing-cost') return <CloudBillingCostDemo />;
  if (componentId === 'dashboard-customer-support-sla') return <CustomerSupportSlaDemo />;
  if (componentId === 'dashboard-iot-smart-facility') return <IotSmartFacilityDemo />;
  if (componentId === 'dashboard-ai-model-inference-stats') return <AiInferenceStatsDemo />;

  // 4. FORMS & INPUTS
  if (componentId === 'glass-form-stepper') return <GlassStepperDemo />;
  if (componentId === 'form-credit-card-live-preview') return <CreditCard3DDemo />;
  if (componentId === 'form-password-strength-meter') return <PasswordMeterDemo />;
  if (componentId === 'form-date-range-quick-picker') return <DateRangePickerDemo />;
  if (componentId === 'form-dual-range-slider-filter') return <DualRangeSliderDemo />;
  if (componentId === 'form-rich-markdown-editor') return <MarkdownEditorDemo />;
  if (componentId === 'form-phone-country-otp-verify') return <OtpVerifyDemo />;
  if (componentId === 'form-tag-combobox-autocomplete') return <TagComboboxDemo />;

  // 5. AI WIDGETS
  if (componentId === 'ai-code-diff-inspector') return <AiDiffInspectorDemo />;
  if (componentId === 'ai-audio-voice-waveform') return <AiAudioWaveformDemo />;

  // 6. STATS & KPI CARDS
  if (componentId === 'kpi-metric-neon') return <KpiMetricNeonDemo />;
  if (componentId === 'stat-revenue-growth-gradient') return <StatRevenueDemo />;
  if (componentId === 'stat-server-latency-ms') return <StatLatencyDemo />;
  if (componentId === 'stat-conversion-funnel-kpi') return <StatConversionDemo />;
  if (componentId === 'stat-battery-power-consumption') return <StatBatteryDemo />;
  if (componentId === 'stat-github-stars-trend') return <StatGithubStarsDemo />;
  if (componentId === 'stat-uptime-sla-four-nines') return <StatUptimeSlaDemo />;
  if (componentId === 'stat-crypto-portfolio-balance') return <StatCryptoBalanceDemo />;
  if (componentId === 'stat-database-qps-throughput') return <StatDbQpsDemo />;
  if (componentId === 'stat-ai-token-generation-speed') return <StatAiTpsDemo />;
  if (componentId === 'stat-storage-disk-usage-bar') return <StatDiskUsageDemo />;
  if (componentId === 'stat-customer-satisfaction-csat') return <StatCsatDemo />;

  // 7. NAVIGATION & FEEDBACK
  if (componentId === 'floating-tab-navigation') return <FloatingNavDemo />;
  if (componentId === 'nav-sidebar-collapsible-dark') return <SidebarCollapsibleDemo />;
  if (componentId === 'nav-breadcrumb-trail-path') return <BreadcrumbDemo />;
  if (componentId === 'nav-command-palette-cmd-k') return <CommandPaletteDemo />;
  if (componentId === 'notification-toast-feed') return <NotificationToastDemo />;
  if (componentId === 'modal-confirm-destructive-dialog') return <DestructiveModalDemo />;
  if (componentId === 'feedback-skeleton-shimmer-loader') return <SkeletonShimmerDemo />;
  if (componentId === 'feedback-rating-star-interactive') return <StarRatingDemo />;

  // 8. THEMES & TOKENS
  if (componentId === 'theme-token-palette') return <ThemePaletteDemo />;
  if (componentId === 'theme-border-gradient-beam') return <BorderBeamDemo />;
  if (componentId === 'theme-bento-grid-card-layout') return <BentoGridDemo />;
  if (componentId === 'theme-dark-light-mode-toggle') return <ThemeToggleDemo />;

  // Fallback for remaining customized items
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
