import React, { useState, useEffect } from 'react';
import { 
  Factory, Layers, Activity, ShieldCheck, Truck, BarChart3, 
  Calendar, Check, Plus, Sparkles, ArrowUpRight, Search, Filter,
  Settings, RefreshCw, AlertTriangle, Eye, Sliders, Box, Cpu,
  HardDrive, Zap, ChevronRight, ChevronDown, CheckCircle2,
  TrendingUp, TrendingDown, Clock, HelpCircle, Info, Image,
  Maximize2, Radio, Play, Pause, ExternalLink, Orbit, GitBranch,
  Gauge, Terminal, Wind, Shuffle, FileSpreadsheet
} from 'lucide-react';
import { COMPONENTS_DATA } from '../data/componentsData';
import { ComponentItem } from '../types';

// Import Live High-End Renderers to embed directly in Domain Tabs
import { DevExpressRibbonDemo, DevExpressSpreadsheetDemo, DevExpressPropertyGridDemo } from './renderers/DevExpressWpfRenderers';
import { ChordDiagramDemo, ViolinDistributionPlotDemo, ParallelCoordinatesDemo, NetworkTopologyDemo } from './renderers/AdvancedSciVizRenderers';
import { RidgelineDensityDemo, CorrelationMatrixDemo, SunburstDefectTreeDemo, HoneycombEquipmentMeshDemo } from './renderers/MathematicalVizRenderers';
import { LorenzAttractorDemo, UmapEmbeddingProjectorDemo, PoincareHyperbolicDiskDemo } from './renderers/CosmicMathVizRenderers';
import { MagneticFerrofluidCanvasDemo, KineticCyberDialDemo, TactileMatrixSwitcherDemo } from './renderers/CuttingEdgeInteractiveRenderers';
import { DroneSwarmFleetDemo, VoronoiMeshDemo, ThermalContourDemo } from './renderers/MegaSuiteRenderers';

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
  const [activeTab, setActiveTab] = useState<'mes_live' | 'quality_sci' | 'cosmic_math' | 'materials_bom' | 'digital_twin' | 'executive_war'>('mes_live');

  // Shared Master-Detail Drilldown State
  const [selectedLine, setSelectedLine] = useState<{ id: string; name: string; img: string; speed: string; yield: string; status: string; temp: string; cpk: string }>({
    id: 'LINE-A',
    name: 'LINE-A (초정밀 8K OLED 스마트 조립 로봇 라인)',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    speed: '142 bpm',
    yield: '99.8%',
    status: 'RUNNING',
    temp: '41.8°C',
    cpk: '1.84'
  });

  const [selectedLot, setSelectedLot] = useState<string>('LOT-2026-X842');
  const [drilldownModal, setDrilldownModal] = useState<{ title: string; tech: string; details: any } | null>(null);

  // Live Auto Production Stream
  const [liveYield, setLiveYield] = useState<number>(99.42);
  const [liveOutput, setLiveOutput] = useState<number>(14280);

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveYield(y => Number((99.2 + Math.random() * 0.6).toFixed(2)));
      setLiveOutput(o => o + Math.floor(Math.random() * 5));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const getComponent = (id: string) => COMPONENTS_DATA.find(c => c.id === id);

  const renderTechBadge = (techName: string, desc: string, compId: string) => {
    const comp = getComponent(compId);
    const inCart = comp ? cartItems.some(x => x.id === comp.id) : false;

    return (
      <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-[10px] backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#06b6d4]" />
        <span className="font-bold text-slate-200 font-mono">{techName}</span>
        <button
          onClick={() => setDrilldownModal({ title: techName, tech: desc, details: comp })}
          className="text-violet-400 hover:text-white underline ml-1 font-bold"
          title="기술 스펙 확인"
        >
          [원리]
        </button>
        {comp && (
          <button
            onClick={() => onAddToCart(comp)}
            className={`ml-auto px-2 py-0.5 rounded-lg text-[9px] font-extrabold transition-all ${
              inCart ? 'bg-fuchsia-500 text-white shadow-md' : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
            }`}
          >
            {inCart ? '✔ 담김' : '+ 부품담기'}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 animate-fade-in font-sans">
      
      {/* 1. Ultra-Impact Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900/90 border border-violet-500/30 shadow-2xl p-6 sm:p-8 backdrop-blur-3xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-violet-600/20 via-fuchsia-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 text-black text-[10px] font-black uppercase tracking-wider shadow-lg animate-pulse">
                ● 2026 World-Class Autonomous Enterprise Hub
              </span>
              <span className="text-xs text-slate-400 font-mono">Realtime SCADA / Mathematical Physics / Digital Twin</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              회사 동료들의 뇌리에 1년은 남을 <span className="grad-text">초격차 산업용 관제탑</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              단순한 데모가 아닌, 4K 초고화질 비전 AI 카메라 · 3D 카오스 로렌츠 궤적 · D3 코드 다이어그램 · UMAP 잠재 공간 프로젝터 · DevExpress 정밀 제어가 결합된 세상에 없던 통합 엔터프라이즈 종합 앱입니다.
            </p>
          </div>

          {/* 6 Large Professional Domain App Switchers */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-black/70 border border-white/15 shadow-2xl">
            {[
              { id: 'mes_live', label: '1. 생산 MES & 4K 비전', icon: Factory, col: 'from-emerald-600 to-teal-600' },
              { id: 'quality_sci', label: '2. D3 과학 품질 분석', icon: Activity, col: 'from-indigo-600 to-blue-600' },
              { id: 'cosmic_math', label: '3. 카오스 & UMAP 수학', icon: Orbit, col: 'from-purple-600 to-pink-600' },
              { id: 'materials_bom', label: '4. BOM 휠 & 수불부', icon: Truck, col: 'from-amber-600 to-orange-600' },
              { id: 'digital_twin', label: '5. 디지털 트윈 & 물리학', icon: Zap, col: 'from-fuchsia-600 to-violet-600' },
              { id: 'executive_war', label: '6. DevExpress 워룸', icon: FileSpreadsheet, col: 'from-rose-600 to-red-600' },
            ].map(tab => {
              const Icon = tab.icon;
              const isSel = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black transition-all ${
                    isSel ? `bg-gradient-to-r ${tab.col} text-white shadow-lg scale-105` : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Top Smart Factory KPI Tiles (Interlinked & Glowing) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Realtime Yield */}
        <div className="relative overflow-hidden p-4 rounded-2xl bg-slate-900/95 border border-emerald-500/40 backdrop-blur-2xl shadow-xl flex flex-col justify-between">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-slate-300">종합 공정 수율 (OEE)</span>
            <span className="text-[10px] text-emerald-400 font-mono font-bold">목표 99.0%</span>
          </div>
          <div className="text-3xl font-black text-white font-mono my-1">{liveYield}%</div>
          {renderTechBadge('Micro-Gauge Sparkline', '실시간 SVG 동적 보간 렌더링', 'chart-sparkline-mini-badge')}
        </div>

        {/* KPI 2: Total Output */}
        <div className="relative overflow-hidden p-4 rounded-2xl bg-slate-900/95 border border-violet-500/40 backdrop-blur-2xl shadow-xl flex flex-col justify-between">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-slate-300">금일 누적 양품 생산량</span>
            <span className="text-[10px] text-violet-400 font-mono font-bold">진척률 104%</span>
          </div>
          <div className="text-3xl font-black text-white font-mono my-1">{liveOutput.toLocaleString()} EA</div>
          {renderTechBadge('Progress Stepper Tile', '목표 대비 달성률 동적 채움', 'stat-revenue-growth-gradient')}
        </div>

        {/* KPI 3: Defect Rate PPM */}
        <div className="relative overflow-hidden p-4 rounded-2xl bg-slate-900/95 border border-amber-500/40 backdrop-blur-2xl shadow-xl flex flex-col justify-between">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-slate-300">불량률 (PPM 관제)</span>
            <span className="text-[10px] text-emerald-400 font-mono font-bold">-18 PPM</span>
          </div>
          <div className="text-3xl font-black text-amber-400 font-mono my-1">42 PPM</div>
          {renderTechBadge('PPM Anomaly Monitor', '임계치 초과 시 자동 Alert 뱃지', 'stat-server-latency-ms')}
        </div>

        {/* KPI 4: Active Shift Info */}
        <div className="relative overflow-hidden p-4 rounded-2xl bg-slate-900/95 border border-cyan-500/40 backdrop-blur-2xl shadow-xl flex flex-col justify-between">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-slate-300">공정 능력 지수 (Cpk)</span>
            <span className="text-[10px] text-cyan-400 font-mono font-bold">Six Sigma Pro</span>
          </div>
          <div className="text-3xl font-black text-cyan-400 font-mono my-1">1.84 Cpk</div>
          {renderTechBadge('Cpk Capability Gauge', '공정 능력 지수 6시그마 검증', 'stat-uptime-sla-four-nines')}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. APP 1: PRODUCTION MES WITH 4K FACTORY CAM & REALTIME SCADA */}
      {/* ========================================================================= */}
      {activeTab === 'mes_live' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 4K Industrial Camera Feed & Line Switcher */}
            <div className="lg:col-span-1 space-y-4">
              <div className="p-4 rounded-3xl bg-slate-900/95 border border-white/10 shadow-2xl space-y-3">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <h3 className="text-xs font-black text-white flex items-center gap-1.5">
                    <Radio className="w-4 h-4 text-rose-500 animate-pulse" />
                    스마트 팩토리 4K 비전 감시캠
                  </h3>
                  <span className="text-[10px] text-emerald-400 font-mono font-bold">● LIVE 60 FPS</span>
                </div>

                {/* 4K Photo with Augmented Reality HUD Overlay */}
                <div className="relative rounded-2xl overflow-hidden h-48 border border-white/20 group">
                  <img
                    src={selectedLine.img}
                    alt="Factory Line Cam"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* AR HUD Telemetry Box */}
                  <div className="absolute top-2 left-2 p-1.5 rounded-lg bg-black/60 border border-emerald-500/40 font-mono text-[9px] text-emerald-300">
                    <div>CAM-01: {selectedLine.id}</div>
                    <div>온도: {selectedLine.temp} | Cpk: {selectedLine.cpk}</div>
                  </div>

                  <div className="absolute bottom-2 inset-x-2 flex justify-between items-end text-white text-xs">
                    <div>
                      <span className="font-extrabold block text-sm">{selectedLine.name}</span>
                      <span className="text-[10px] text-cyan-300 font-mono">가동 속도: {selectedLine.speed}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500 text-black font-black text-[10px]">
                      {selectedLine.status}
                    </span>
                  </div>
                </div>

                {/* Line Selector Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {[
                    { id: 'LINE-A', name: 'LINE-A (OLED 조립)', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', speed: '142 bpm', yield: '99.8%', status: 'RUNNING', temp: '41.8°C', cpk: '1.84' },
                    { id: 'LINE-B', name: 'LINE-B (SMT 고속실장)', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', speed: '185 bpm', yield: '99.4%', status: 'RUNNING', temp: '45.2°C', cpk: '1.68' },
                    { id: 'LINE-C', name: 'LINE-C (광학 클린룸)', img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80', speed: '95 bpm', yield: '98.9%', status: 'STANDBY', temp: '22.4°C', cpk: '1.92' },
                    { id: 'LINE-D', name: 'LINE-D (최종 에이징)', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80', speed: '110 bpm', yield: '99.9%', status: 'RUNNING', temp: '38.0°C', cpk: '1.95' }
                  ].map(line => (
                    <button
                      key={line.id}
                      onClick={() => setSelectedLine(line)}
                      className={`p-2.5 rounded-xl text-left border transition-all text-xs font-bold ${
                        selectedLine.id === line.id
                          ? 'bg-violet-600 text-white border-violet-400 shadow-lg shadow-violet-900/40'
                          : 'bg-slate-950 text-slate-300 border-white/5 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{line.id}</span>
                        <span className="text-[9px] font-mono text-cyan-300">{line.yield}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 block truncate">{line.name.split('(')[1]?.replace(')', '') || line.name}</span>
                    </button>
                  ))}
                </div>

                {renderTechBadge('DevExpress Master-Detail SCADA', '비전 카메라와 설비 데이터 실시간 동기화', 'datagrid-realtime-pro')}
              </div>
            </div>

            {/* Right 2 Cols: Interlinked DevExpress DataGrid + Realtime SPC 관리도 */}
            <div className="lg:col-span-2 space-y-4">
              <div className="p-4 rounded-3xl bg-slate-900/95 border border-white/10 shadow-2xl space-y-3">
                <div className="flex flex-wrap justify-between items-center gap-2 border-b border-white/10 pb-3">
                  <div>
                    <h3 className="text-xs font-black text-white">
                      {selectedLine.name} — 실시간 LOT 생산 이력
                    </h3>
                    <span className="text-[10px] text-emerald-400 font-bold">● 실시간 공정 데이터 스트림 연결됨</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 text-[10px] text-slate-300 font-mono">
                    선택된 LOT: <b>{selectedLot}</b>
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[11px] text-slate-300">
                    <thead className="bg-white/[0.04] text-slate-400 font-bold font-mono">
                      <tr>
                        <th className="p-2.5">LOT 번호</th>
                        <th className="p-2.5">품목 규격</th>
                        <th className="p-2.5 text-right">투입량</th>
                        <th className="p-2.5 text-right">양품수량</th>
                        <th className="p-2.5 text-right">불량률</th>
                        <th className="p-2.5 text-center">검사판정</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-mono">
                      {[
                        { lot: 'LOT-2026-X842', item: 'OLED-65-GEN4', input: '1,500', ok: '1,494', defect: '0.40%', pass: 'PASS' },
                        { lot: 'LOT-2026-X843', item: 'OLED-65-GEN4', input: '1,500', ok: '1,488', defect: '0.80%', pass: 'PASS' },
                        { lot: 'LOT-2026-X844', item: 'OLED-77-ULTRA', input: '1,200', ok: '1,175', defect: '2.08%', pass: 'REVIEW' },
                        { lot: 'LOT-2026-X845', item: 'OLED-55-SLIM', input: '2,000', ok: '1,992', defect: '0.40%', pass: 'PASS' }
                      ].map(row => {
                        const isSel = selectedLot === row.lot;
                        return (
                          <tr
                            key={row.lot}
                            onClick={() => setSelectedLot(row.lot)}
                            className={`cursor-pointer transition-colors ${
                              isSel ? 'bg-violet-600/30 text-white font-bold' : 'hover:bg-white/[0.03]'
                            }`}
                          >
                            <td className="p-2.5 text-cyan-300 flex items-center gap-1.5">
                              {isSel && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />}
                              {row.lot}
                            </td>
                            <td className="p-2.5 text-white font-sans">{row.item}</td>
                            <td className="p-2.5 text-right">{row.input}</td>
                            <td className="p-2.5 text-right text-emerald-400 font-bold">{row.ok}</td>
                            <td className="p-2.5 text-right text-amber-400">{row.defect}</td>
                            <td className="p-2.5 text-center">
                              <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                                row.pass === 'PASS' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                              }`}>
                                {row.pass}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {renderTechBadge('DevExpress Sticky DataGrid', '행 클릭 시 연동 검사 데이터 자동 갱신', 'table-sticky-column-finance')}
              </div>

              {/* D3 Sankey Flow & SPC 관리도 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-3xl bg-slate-900/95 border border-white/10 shadow-2xl space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-white">
                    <span>{selectedLot} 샌키 에너지/자재 유량</span>
                    <span className="text-cyan-400 font-mono text-[10px]">수율 99.4%</span>
                  </div>
                  <div className="h-28 w-full bg-slate-950/80 rounded-2xl p-2 border border-white/5 relative">
                    <svg viewBox="0 0 300 80" className="w-full h-full">
                      <rect x="10" y="10" width="10" height="60" fill="#8b5cf6" rx="2" />
                      <text x="24" y="25" fill="#cbd5e1" fontSize="7" fontWeight="bold">원자재 100%</text>
                      <rect x="140" y="10" width="10" height="40" fill="#06b6d4" rx="2" />
                      <rect x="140" y="55" width="10" height="15" fill="#f59e0b" rx="2" />
                      <rect x="270" y="10" width="10" height="50" fill="#10b981" rx="2" />
                      <text x="225" y="25" fill="#10b981" fontSize="7" fontWeight="bold">양품 98.4%</text>
                      <rect x="270" y="65" width="10" height="8" fill="#ef4444" rx="2" />
                      <path d="M 20 20 C 75 20, 75 20, 140 20 L 140 40 C 75 40, 75 35, 20 35 Z" fill="rgba(6, 182, 212, 0.3)" />
                      <path d="M 20 45 C 75 45, 75 60, 140 60 L 140 70 C 75 70, 75 65, 20 65 Z" fill="rgba(245, 158, 11, 0.3)" />
                      <path d="M 150 20 C 205 20, 205 15, 270 15 L 270 50 C 205 50, 205 40, 150 40 Z" fill="rgba(16, 185, 129, 0.3)" />
                    </svg>
                  </div>
                  {renderTechBadge('D3 Sankey Flow Ribbon', '공정 단계별 유량 손실 시각화', 'chart-sankey-flow')}
                </div>

                <div className="p-4 rounded-3xl bg-slate-900/95 border border-white/10 shadow-2xl space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-white">
                    <span>{selectedLot} 불량 유형 파레토</span>
                    <span className="text-fuchsia-400 font-mono text-[10px]">누적 6건</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="p-2 rounded-xl bg-slate-950 border border-white/5">
                      <span className="text-slate-400 block">표면 스크래치</span>
                      <span className="font-mono font-bold text-rose-400 text-xs">3건 (50%)</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950 border border-white/5">
                      <span className="text-slate-400 block">이물/먼지 유입</span>
                      <span className="font-mono font-bold text-amber-400 text-xs">2건 (33%)</span>
                    </div>
                  </div>
                  {renderTechBadge('Pareto 80/20 Dual Bar', '불량 원인 집중 개선 타겟팅', 'chart-bar-comparison-dual')}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. APP 2: D3 SCIENTIFIC QUALITY & CORRELATION */}
      {/* ========================================================================= */}
      {activeTab === 'quality_sci' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChordDiagramDemo />
            <ViolinDistributionPlotDemo />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ParallelCoordinatesDemo />
            <CorrelationMatrixDemo />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. APP 3: COSMIC CHAOS & UMAP HIGH-DIMENSIONAL MATH */}
      {/* ========================================================================= */}
      {activeTab === 'cosmic_math' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LorenzAttractorDemo />
            <UmapEmbeddingProjectorDemo />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PoincareHyperbolicDiskDemo />
            <SunburstDefectTreeDemo />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. APP 4: MATERIALS BOM DEPENDENCY & REORDER */}
      {/* ========================================================================= */}
      {activeTab === 'materials_bom' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RidgelineDensityDemo />
            <HoneycombEquipmentMeshDemo />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <NetworkTopologyDemo />
            <DevExpressPropertyGridDemo />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 7. APP 5: DIGITAL TWIN, DRONE FLEET & PHYSICS SHADER */}
      {/* ========================================================================= */}
      {activeTab === 'digital_twin' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DroneSwarmFleetDemo />
            <MagneticFerrofluidCanvasDemo />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <KineticCyberDialDemo />
            <TactileMatrixSwitcherDemo />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 8. APP 6: DEVEXPRESS EXECUTIVE WAR ROOM & SPREADSHEET */}
      {/* ========================================================================= */}
      {activeTab === 'executive_war' && (
        <div className="space-y-6">
          <DevExpressRibbonDemo />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DevExpressSpreadsheetDemo />
            <DevExpressPropertyGridDemo />
          </div>
        </div>
      )}

      {/* 9. Drilldown Tech Spec Modal */}
      {drilldownModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-3xl bg-slate-900 border border-violet-500/50 p-6 shadow-2xl space-y-4 animate-scale-up">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  2026 High-End Architecture Spec
                </span>
                <h3 className="text-base font-black text-white mt-1">{drilldownModal.title}</h3>
              </div>
              <button
                onClick={() => setDrilldownModal(null)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-2xl border border-white/10">
              {drilldownModal.tech}
            </p>

            {drilldownModal.details && (
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>컴포넌트 ID:</span>
                  <span className="font-mono text-cyan-400 font-bold">{drilldownModal.details.id}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>복잡도 등급:</span>
                  <span className="font-mono text-fuchsia-400 font-bold">{drilldownModal.details.complexity}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] text-[11px] text-slate-400">
                  💡 {drilldownModal.details.aiPromptGuidance}
                </div>
              </div>
            )}

            <div className="flex gap-2 pt-2">
              {drilldownModal.details && (
                <button
                  onClick={() => {
                    onAddToCart(drilldownModal.details);
                    setDrilldownModal(null);
                  }}
                  className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-black hover:opacity-90 shadow-lg shadow-violet-900/50"
                >
                  + 이 컴포넌트 내 프로젝트에 담기
                </button>
              )}
              <button
                onClick={() => setDrilldownModal(null)}
                className="px-5 py-3 rounded-2xl bg-white/10 text-slate-300 text-xs font-bold hover:bg-white/20"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
