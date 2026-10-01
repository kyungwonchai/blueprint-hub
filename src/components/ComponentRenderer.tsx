import { 
  RidgelineDensityDemo, CorrelationMatrixDemo, SunburstDefectTreeDemo, HoneycombEquipmentMeshDemo 
} from './renderers/MathematicalVizRenderers';
import { 
  ChordDiagramDemo, ViolinDistributionPlotDemo, ParallelCoordinatesDemo, 
  ParliamentGridDemo, DependencyWheelDemo, NetworkTopologyDemo 
} from './renderers/AdvancedSciVizRenderers';
import { 
  PolarRoseChartDemo, TernaryPlotDemo, VoronoiMeshDemo, ThermalContourDemo, 
  HighchartsMatrixDemo, EchartsGaugeClusterDemo, AgGridTreeGroupingDemo, 
  Anamorphic3DCardDemo, RaymarchingShaderDemo, DroneSwarmFleetDemo 
} from './renderers/MegaSuiteRenderers';
import { 
  InteractiveSpotlightCardDemo, LiquidGlassDistortionDemo, 
  MagneticHoverButtonDemo, SoundReactivePulseDemo 
} from './renderers/TrendingEffectsRenderers';
import { 
  DevExpressRibbonDemo, DevExpressPropertyGridDemo, DevExpressFilterEditorDemo, 
  DevExpressDiagramDemo, DevExpressDockingDemo, DevExpressSpreadsheetDemo 
} from './renderers/DevExpressWpfRenderers';
import React from 'react';
import { Sparkles } from 'lucide-react';

// 1. Chart Renderers
import { 
  SpcQualityControlDemo, DonutAllocationDemo, RadarSkillsDemo, 
  ActivityHeatmapDemo, StreamAreaDemo, DualBarComparisonDemo, 
  BubbleMarketMapDemo, FunnelConversionDemo, TreemapPortfolioDemo, 
  SpeedometerGaugeDemo, WaterfallCashflowDemo, SparklineMiniBadgeDemo, SankeyFlowDemo, SunburstHierarchyDemo, BoxplotOutlierDemo, BulletPerformanceDemo, MarimekkoMosaicDemo, HexbinDensityDemo, DendrogramClusterDemo, BumpRankingDemo 
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
  GlassStepperDemo, DragDropUploadDemo, TagComboboxDemo, CreditCard3DDemo, 
  PasswordMeterDemo, DateRangePickerDemo, DualRangeSliderDemo, MarkdownEditorDemo, 
  OtpVerifyDemo, AddressSmartSearchDemo, PermissionMatrixDemo, SurveyNpsDemo,
  AiPromptCommanderDemo, InteractiveTerminalDemo, AiDiffInspectorDemo, AiChatThreadDemo,
  AiVectorSearchDemo, AiAgentDagFlowDemo, AiImageStudioDemo, AiAudioWaveformDemo,
  AiFunctionCallDemo, AiPromptVaultDemo, AiTokenCostDemo, AiSentimentRadarDemo
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
  MegaMenuDemo, SegmentedControlDemo, DockMagnificationDemo, PaginationDemo, 
  MobileBottomBarDemo, TocScrollspyDemo, StepperProgressDemo, RadialWheelDemo,
  NotificationToastDemo, DestructiveModalDemo, SystemAlertBannerDemo, EmptyStateDemo,
  SkeletonShimmerDemo, BottomSheetDrawerDemo, PulsingBadgeDemo, ConfettiCelebrationDemo,
  RichHoverTooltipDemo, CookieConsentDemo, StarRatingDemo, OfflineToastDemo,
  ThemePaletteDemo, GlassmorphismDemo, NeonGlowDemo, TypographyScaleDemo,
  GradientMeshDemo, BorderBeamDemo, ThemeToggleDemo, GridDotMatrixDemo,
  NeumorphismDemo, BentoGridDemo, ClaymorphismDemo, NoiseOverlayDemo
} from './renderers/NavFeedbackThemeRenderers';

interface RendererProps {
  componentId: string;
  isCompact?: boolean;
}

export const ComponentRenderer: React.FC<RendererProps> = ({ componentId, isCompact = false }) => {
  // 1. CHARTS (12)
  if (componentId === 'chart-candlestick-trading') return <SpcQualityControlDemo />;
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
  // Exotic Advanced Visualizations (D3 / SciPy / Few Standard)
  if (componentId === 'chart-sankey-flow') return <SankeyFlowDemo />;
  if (componentId === 'chart-sunburst-hierarchy') return <SunburstHierarchyDemo />;
  if (componentId === 'chart-boxplot-outlier') return <BoxplotOutlierDemo />;
  if (componentId === 'chart-bullet-performance') return <BulletPerformanceDemo />;
  if (componentId === 'chart-marimekko-mosaic') return <MarimekkoMosaicDemo />;
  if (componentId === 'chart-hexbin-density') return <HexbinDensityDemo />;
  if (componentId === 'chart-dendrogram-cluster') return <DendrogramClusterDemo />;
  if (componentId === 'chart-bump-ranking') return <BumpRankingDemo />;
  if (componentId === 'chart-chord-matrix-flow') return <ChordDiagramDemo />;
  if (componentId === 'chart-violin-tolerance-distribution') return <ViolinDistributionPlotDemo />;
  if (componentId === 'chart-parallel-coordinates-multidim') return <ParallelCoordinatesDemo />;
  if (componentId === 'chart-parliament-item-grid') return <ParliamentGridDemo />;
  if (componentId === 'chart-dependency-wheel-bom') return <DependencyWheelDemo />;
  if (componentId === 'chart-network-force-topology') return <NetworkTopologyDemo />;
  if (componentId === 'chart-ridgeline-cycle-time') return <RidgelineDensityDemo />;
  if (componentId === 'chart-pearson-correlation-matrix') return <CorrelationMatrixDemo />;
  if (componentId === 'chart-sunburst-multitier-defect') return <SunburstDefectTreeDemo />;
  if (componentId === 'chart-hexagonal-equipment-mesh') return <HoneycombEquipmentMeshDemo />;



  
  // DevExpress WPF Commercial Enterprise Suite
  if (componentId === 'devexpress-ribbon-command-bar') return <DevExpressRibbonDemo />;
  if (componentId === 'devexpress-property-grid-inspector') return <DevExpressPropertyGridDemo />;
  if (componentId === 'devexpress-visual-filter-editor') return <DevExpressFilterEditorDemo />;
  if (componentId === 'devexpress-visio-diagram-flow') return <DevExpressDiagramDemo />;
  if (componentId === 'devexpress-docking-layout-mdi') return <DevExpressDockingDemo />;
  if (componentId === 'devexpress-excel-spreadsheet-matrix') return <DevExpressSpreadsheetDemo />;

  // 2. TABLES & PIVOTS (12)
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

  
  // Mega Suite Exotic & Industrial Web Controls
  if (componentId === 'chart-polar-rose-coxcomb') return <PolarRoseChartDemo />;
  if (componentId === 'chart-ternary-phase-plot') return <TernaryPlotDemo />;
  if (componentId === 'chart-voronoi-facility-mesh') return <VoronoiMeshDemo />;
  if (componentId === 'chart-thermal-contour-map') return <ThermalContourDemo />;
  if (componentId === 'table-highcharts-heat-matrix') return <HighchartsMatrixDemo />;
  if (componentId === 'circular-echarts-triple-gauge') return <EchartsGaugeClusterDemo />;
  if (componentId === 'table-ag-grid-enterprise-grouping') return <AgGridTreeGroupingDemo />;
  if (componentId === 'theme-anamorphic-3d-depth') return <Anamorphic3DCardDemo />;
  if (componentId === 'theme-raymarching-liquid-shader') return <RaymarchingShaderDemo />;
  if (componentId === 'dashboard-autonomous-drone-fleet') return <DroneSwarmFleetDemo />;

  // 3. DASHBOARDS & METRICS (12)
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

  // 4. FORMS & INPUTS (12)
  if (componentId === 'glass-form-stepper') return <GlassStepperDemo />;
  if (componentId === 'form-drag-drop-file-zone') return <DragDropUploadDemo />;
  if (componentId === 'form-tag-combobox-autocomplete') return <TagComboboxDemo />;
  if (componentId === 'form-credit-card-live-preview') return <CreditCard3DDemo />;
  if (componentId === 'form-password-strength-meter') return <PasswordMeterDemo />;
  if (componentId === 'form-date-range-quick-picker') return <DateRangePickerDemo />;
  if (componentId === 'form-dual-range-slider-filter') return <DualRangeSliderDemo />;
  if (componentId === 'form-rich-markdown-editor') return <MarkdownEditorDemo />;
  if (componentId === 'form-phone-country-otp-verify') return <OtpVerifyDemo />;
  if (componentId === 'form-address-smart-search') return <AddressSmartSearchDemo />;
  if (componentId === 'form-toggle-permission-matrix') return <PermissionMatrixDemo />;
  if (componentId === 'form-survey-nps-rating') return <SurveyNpsDemo />;

  // 5. AI WIDGETS (12)
  if (componentId === 'ai-prompt-commander') return <AiPromptCommanderDemo />;
  if (componentId === 'interactive-terminal-card') return <InteractiveTerminalDemo />;
  if (componentId === 'ai-code-diff-inspector') return <AiDiffInspectorDemo />;
  if (componentId === 'ai-chat-thread-bubble-feed') return <AiChatThreadDemo />;
  if (componentId === 'ai-vector-search-explorer') return <AiVectorSearchDemo />;
  if (componentId === 'ai-agent-task-dag-flow') return <AiAgentDagFlowDemo />;
  if (componentId === 'ai-image-generator-studio') return <AiImageStudioDemo />;
  if (componentId === 'ai-audio-voice-waveform') return <AiAudioWaveformDemo />;
  if (componentId === 'ai-function-calling-json-schema') return <AiFunctionCallDemo />;
  if (componentId === 'ai-prompt-template-vault') return <AiPromptVaultDemo />;
  if (componentId === 'ai-token-cost-calculator') return <AiTokenCostDemo />;
  if (componentId === 'ai-sentiment-emotion-radar') return <AiSentimentRadarDemo />;

  // 6. STATS & KPI CARDS (12)
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

  // 7. NAVIGATION (12)
  if (componentId === 'floating-tab-navigation') return <FloatingNavDemo />;
  if (componentId === 'nav-sidebar-collapsible-dark') return <SidebarCollapsibleDemo />;
  if (componentId === 'nav-breadcrumb-trail-path') return <BreadcrumbDemo />;
  if (componentId === 'nav-command-palette-cmd-k') return <CommandPaletteDemo />;
  if (componentId === 'nav-mega-menu-product-dropdown') return <MegaMenuDemo />;
  if (componentId === 'nav-segmented-control-pill') return <SegmentedControlDemo />;
  if (componentId === 'nav-dock-magnification-bar') return <DockMagnificationDemo />;
  if (componentId === 'nav-pagination-smart-jump') return <PaginationDemo />;
  if (componentId === 'nav-mobile-bottom-tab-bar') return <MobileBottomBarDemo />;
  if (componentId === 'nav-toc-scrollspy-article') return <TocScrollspyDemo />;
  if (componentId === 'nav-stepper-progress-milestones') return <StepperProgressDemo />;
  if (componentId === 'nav-context-radial-wheel') return <RadialWheelDemo />;

  // 8. FEEDBACK & MODALS (12)
  if (componentId === 'notification-toast-feed') return <NotificationToastDemo />;
  if (componentId === 'modal-confirm-destructive-dialog') return <DestructiveModalDemo />;
  if (componentId === 'feedback-banner-system-alert') return <SystemAlertBannerDemo />;
  if (componentId === 'feedback-empty-state-placeholder') return <EmptyStateDemo />;
  if (componentId === 'feedback-skeleton-shimmer-loader') return <SkeletonShimmerDemo />;
  if (componentId === 'feedback-drawer-bottom-sheet') return <BottomSheetDrawerDemo />;
  if (componentId === 'feedback-badge-status-pulsing') return <PulsingBadgeDemo />;
  if (componentId === 'feedback-confetti-celebration-popup') return <ConfettiCelebrationDemo />;
  if (componentId === 'feedback-tooltip-rich-hover-card') return <RichHoverTooltipDemo />;
  if (componentId === 'feedback-cookie-consent-banner') return <CookieConsentDemo />;
  if (componentId === 'feedback-rating-star-interactive') return <StarRatingDemo />;
  if (componentId === 'feedback-offline-network-toast') return <OfflineToastDemo />;

  
  // 2026 Magic UI / Aceternity Trending Interaction Suite
  if (componentId === 'trending-spotlight-radial-card') return <InteractiveSpotlightCardDemo />;
  if (componentId === 'trending-liquid-glass-refraction') return <LiquidGlassDistortionDemo />;
  if (componentId === 'trending-magnetic-hover-button') return <MagneticHoverButtonDemo />;
  if (componentId === 'trending-sound-reactive-equalizer') return <SoundReactivePulseDemo />;

  // 9. THEMES & TOKENS (12)
  if (componentId === 'theme-token-palette') return <ThemePaletteDemo />;
  if (componentId === 'theme-glassmorphism-blur-spec') return <GlassmorphismDemo />;
  if (componentId === 'theme-neon-glow-shadow-matrix') return <NeonGlowDemo />;
  if (componentId === 'theme-typography-scale-spec') return <TypographyScaleDemo />;
  if (componentId === 'theme-gradient-mesh-canvas') return <GradientMeshDemo />;
  if (componentId === 'theme-border-gradient-beam') return <BorderBeamDemo />;
  if (componentId === 'theme-dark-light-mode-toggle') return <ThemeToggleDemo />;
  if (componentId === 'theme-grid-dot-pattern-canvas') return <GridDotMatrixDemo />;
  if (componentId === 'theme-neumorphism-soft-ui') return <NeumorphismDemo />;
  if (componentId === 'theme-bento-grid-card-layout') return <BentoGridDemo />;
  if (componentId === 'theme-claymorphism-3d-card') return <ClaymorphismDemo />;
  if (componentId === 'theme-noise-texture-overlay') return <NoiseOverlayDemo />;

  return null;
};
