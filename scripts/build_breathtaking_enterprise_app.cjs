const fs = require('fs');
const path = require('path');

console.log("=== Building Breathtaking 2026 Enterprise Master App with 4K Industrial Photos & Sci-Fi Graphics ===");

const masterAppCode = `import React, { useState, useEffect } from 'react';
import { 
  Factory, Layers, Activity, ShieldCheck, Truck, BarChart3, 
  Calendar, Check, Plus, Sparkles, ArrowUpRight, Search, Filter,
  Settings, RefreshCw, AlertTriangle, Eye, Sliders, Box, Cpu,
  HardDrive, Zap, ChevronRight, ChevronDown, CheckCircle2,
  TrendingUp, TrendingDown, Clock, HelpCircle, Info, Image,
  Maximize2, Radio, Play, Pause, ExternalLink
} from 'lucide-react';
import { COMPONENTS_DATA } from '../data/componentsData';
import { ComponentItem } from '../types';

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
  const [activeTab, setActiveTab] = useState<'production' | 'quality' | 'materials' | 'planning'>('production');

  // Shared Master-Detail Drilldown State (Cross-Filtering Chain Reaction)
  const [selectedLine, setSelectedLine] = useState<{ id: string; name: string; img: string; speed: string; yield: string; status: string }>({
    id: 'LINE-A',
    name: 'LINE-A (초정밀 8K OLED 스마트 조립 로봇 라인)',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    speed: '142 bpm',
    yield: '99.8%',
    status: 'RUNNING'
  });

  const [selectedLot, setSelectedLot] = useState<string>('LOT-2026-X842');
  const [drilldownModal, setDrilldownModal] = useState<{ title: string; tech: string; details: any } | null>(null);

  // Live Auto Production Stream
  const [liveYield, setLiveYield] = useState<number>(99.42);
  const [liveOutput, setLiveOutput] = useState<number>(14280);
  const [activeShift, setActiveShift] = useState<'주간 A조' | '야간 B조'>('주간 A조');

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
            className={\`ml-auto px-2 py-0.5 rounded-lg text-[9px] font-extrabold transition-all \${
              inCart ? 'bg-fuchsia-500 text-white shadow-md' : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
            }\`}
          >
            {inCart ? '✔ 담김' : '+ 부품담기'}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 animate-fade-in font-sans">
      {/* 1. High-Impact Hero Banner with Industrial Cyberpunk Ambience */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900/90 border border-violet-500/30 shadow-2xl p-6 sm:p-8 backdrop-blur-3xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-violet-600/20 via-fuchsia-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black text-[10px] font-black uppercase tracking-wider shadow-lg animate-pulse">
                ● 2026 Live Autonomous Smart Factory
              </span>
              <span className="text-xs text-slate-400 font-mono">Realtime MES / ERP / SCADA Integrated Tower</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              차세대 스마트 제조·품질·자재 <span className="grad-text">초실감 관제탑</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              4K 초고화질 설비 비전 영상과 DevExpress Master-Detail 그리드, D3 샌키 유량 차트가 결합된 글로벌 최고 등급의 산업용 실전 소프트웨어 아키텍처를 경험하세요.
            </p>
          </div>

          {/* Domain Tab Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-black/70 border border-white/15 shadow-2xl">
            {[
              { id: 'production', label: '생산 라인 MES', icon: Factory, col: 'from-violet-600 to-indigo-600' },
              { id: 'quality', label: '품질 종합 & 파레토', icon: ShieldCheck, col: 'from-emerald-600 to-teal-600' },
              { id: 'materials', label: '자재 BOM & 수불', icon: Truck, col: 'from-amber-600 to-orange-600' },
              { id: 'planning', label: '생산 계획 & 간트', icon: Calendar, col: 'from-fuchsia-600 to-pink-600' }
            ].map(tab => {
              const Icon = tab.icon;
              const isSel = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={\`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black transition-all \${
                    isSel ? \`bg-gradient-to-r \${tab.col} text-white shadow-lg shadow-violet-900/40\` : 'text-slate-400 hover:text-white'
                  }\`}
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
            <span className="text-xs font-bold text-slate-300">교대근무 및 설비 가동</span>
            <span className="text-[10px] text-cyan-400 font-bold">16개 전 라인 가동</span>
          </div>
          <div className="text-xl font-black text-white font-mono my-1">{activeShift} (08:00~20:00)</div>
          {renderTechBadge('Shift Toggle Bar', '근무조 변경 시 작업자 자동 매핑', 'stat-uptime-sla-four-nines')}
        </div>
      </div>

      {/* 3. TAB 1: PRODUCTION MES WITH 4K FACTORY CAM & REALTIME SCADA */}
      {activeTab === 'production' && (
        <div className="space-y-6">
          {/* Main Visual: 4K Smart Factory Live Cam + Realtime Line Telemetry */}
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
                    <div>AI Vision: No Defects Detected</div>
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
                    { id: 'LINE-A', name: 'LINE-A (OLED 조립)', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', speed: '142 bpm', yield: '99.8%', status: 'RUNNING' },
                    { id: 'LINE-B', name: 'LINE-B (SMT 고속실장)', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', speed: '185 bpm', yield: '99.4%', status: 'RUNNING' },
                    { id: 'LINE-C', name: 'LINE-C (광학 클린룸)', img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80', speed: '95 bpm', yield: '98.9%', status: 'STANDBY' },
                    { id: 'LINE-D', name: 'LINE-D (최종 에이징)', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80', speed: '110 bpm', yield: '99.9%', status: 'RUNNING' }
                  ].map(line => (
                    <button
                      key={line.id}
                      onClick={() => setSelectedLine(line)}
                      className={\`p-2.5 rounded-xl text-left border transition-all text-xs font-bold \${
                        selectedLine.id === line.id
                          ? 'bg-violet-600 text-white border-violet-400 shadow-lg shadow-violet-900/40'
                          : 'bg-slate-950 text-slate-300 border-white/5 hover:bg-white/5'
                      }\`}
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
              {/* DevExpress Sticky DataGrid */}
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
                            className={\`cursor-pointer transition-colors \${
                              isSel ? 'bg-violet-600/30 text-white font-bold' : 'hover:bg-white/[0.03]'
                            }\`}
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
                              <span className={\`px-2 py-0.5 rounded text-[9px] font-bold \${
                                row.pass === 'PASS' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                              }\`}>
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
                {/* Sankey Flow */}
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

                {/* Pareto 80/20 Defect Analysis */}
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

      {/* 4. TAB 2: QUALITY (품질 피벗, 나이팅게일 로즈, 6각 레이더) */}
      {activeTab === 'quality' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* PowerBI Multi-Dimensional Quality Pivot */}
          <div className="p-5 rounded-3xl bg-slate-900/95 border border-white/10 shadow-2xl space-y-3">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <h3 className="text-xs font-black text-white">품질 피벗 매트릭스 (공정 x 불량원인 x 손실액)</h3>
              <span className="text-[10px] text-violet-400 font-mono font-bold">PowerBI Pivot Matrix</span>
            </div>
            <table className="w-full text-left text-[11px] text-slate-300">
              <thead className="bg-white/[0.03] text-slate-400 font-bold font-mono">
                <tr>
                  <th className="p-2">공정 단계</th>
                  <th className="p-2 text-right">검사수량</th>
                  <th className="p-2 text-right">불량수량</th>
                  <th className="p-2 text-right">손실금액</th>
                  <th className="p-2 text-right text-emerald-400">합격률</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                <tr>
                  <td className="p-2 font-bold text-white font-sans">1단계: 증착 (CVD)</td>
                  <td className="p-2 text-right">24,000</td>
                  <td className="p-2 text-right text-rose-400">12</td>
                  <td className="p-2 text-right">$2,400</td>
                  <td className="p-2 text-right text-emerald-300 font-bold">99.95%</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-white font-sans">2단계: 노광/에칭</td>
                  <td className="p-2 text-right">23,988</td>
                  <td className="p-2 text-right text-rose-400">28</td>
                  <td className="p-2 text-right">$5,600</td>
                  <td className="p-2 text-right text-emerald-300 font-bold">99.88%</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-white font-sans">3단계: 모듈 본딩</td>
                  <td className="p-2 text-right">23,960</td>
                  <td className="p-2 text-right text-rose-400">8</td>
                  <td className="p-2 text-right">$1,200</td>
                  <td className="p-2 text-right text-emerald-300 font-bold">99.96%</td>
                </tr>
              </tbody>
            </table>
            {renderTechBadge('PowerBI Cross-Tab Pivot', '다차원 롤업 집계 및 손실액 산출', 'table-pivot-matrix-analysis')}
          </div>

          {/* Nightingale Rose Chart */}
          <div className="p-5 rounded-3xl bg-slate-900/95 border border-white/10 shadow-2xl space-y-3">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <h3 className="text-xs font-black text-white">나이팅게일 로즈 차트 (Polar Rose Distribution)</h3>
              <span className="text-[10px] text-cyan-400 font-mono font-bold">극좌표계 부채꼴 면적</span>
            </div>
            <div className="h-44 w-full flex items-center justify-center">
              <svg viewBox="0 0 160 160" className="w-full h-full max-w-[150px]">
                <circle cx="80" cy="80" r="60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <circle cx="80" cy="80" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <path d="M 80 80 L 80 20 A 60 60 0 0 1 122 38 Z" fill="rgba(139,92,246,0.6)" stroke="#8b5cf6" />
                <path d="M 80 80 L 122 38 A 60 60 0 0 1 140 80 Z" fill="rgba(6,182,212,0.6)" stroke="#06b6d4" />
                <path d="M 80 80 L 140 80 A 45 45 0 0 1 112 112 Z" fill="rgba(245,158,11,0.6)" stroke="#f59e0b" />
                <path d="M 80 80 L 112 112 A 30 30 0 0 1 80 110 Z" fill="rgba(16,185,129,0.6)" stroke="#10b981" />
                <path d="M 80 80 L 80 110 A 50 50 0 0 1 45 115 Z" fill="rgba(239,68,68,0.6)" stroke="#ef4444" />
              </svg>
            </div>
            {renderTechBadge('Nightingale Rose Chart', '분기별 원인별 극좌표 부채꼴 면적 비교', 'chart-polar-rose-coxcomb')}
          </div>
        </div>
      )}

      {/* 5. TAB 3: MATERIALS (자재 BOM 트리 & 수불부) */}
      {activeTab === 'materials' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Multi-Level BOM Tree List */}
          <div className="p-5 rounded-3xl bg-slate-900/95 border border-white/10 shadow-2xl space-y-3">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <h3 className="text-xs font-black text-white">계층형 자재 명세서 (Multi-Level BOM Tree)</h3>
              <span className="text-[10px] text-amber-400 font-mono">BOM Level: 3</span>
            </div>
            <div className="space-y-1 text-xs">
              <div className="p-2 rounded-xl bg-violet-600/20 text-violet-200 font-bold flex items-center justify-between">
                <span>📂 [Top Parent] OLED-65-GEN4 완제품</span>
                <span className="font-mono text-[10px]">재고 480 EA</span>
              </div>
              <div className="pl-6 space-y-1 text-[11px] text-slate-300">
                <div className="p-1.5 rounded bg-white/[0.02] flex justify-between">
                  <span>├─ 📁 Display Sub-Assembly (Level 1)</span>
                  <span className="font-mono text-cyan-400">1,200 EA</span>
                </div>
                <div className="pl-6 space-y-1 text-[10px] text-slate-400">
                  <div className="p-1 rounded bg-slate-950 flex justify-between">
                    <span>└── 📄 OLED Glass Panel (SKU-892)</span>
                    <span className="font-mono text-emerald-400 font-bold">2,400 EA (충분)</span>
                  </div>
                  <div className="p-1 rounded bg-slate-950 flex justify-between">
                    <span>└── 📄 Driver IC Module (SKU-102)</span>
                    <span className="font-mono text-rose-400 font-bold">120 EA (발주필요!)</span>
                  </div>
                </div>
              </div>
            </div>
            {renderTechBadge('DevExpress Tree List Grid', '다단계 BOM 전개 및 재고 부족 부품 경고', 'table-expandable-tree-rows')}
          </div>

          {/* ROP Automatic Reorder Console */}
          <div className="p-5 rounded-3xl bg-slate-900/95 border border-white/10 shadow-2xl space-y-3">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <h3 className="text-xs font-black text-white">안전 재고 수불 및 자동 발주 (ROP)</h3>
              <span className="text-[10px] text-emerald-400 font-mono">Auto Purchase Order</span>
            </div>
            <div className="space-y-2 text-xs">
              {[
                { sku: 'SKU-102 (Driver IC)', cur: 120, safety: 500, status: '발주요청 완료 (납기 2일)' },
                { sku: 'SKU-892 (Glass Panel)', cur: 2400, safety: 1000, status: '안전재고 확보' },
                { sku: 'SKU-441 (FPCB 케이블)', cur: 3800, safety: 2000, status: '안전재고 확보' }
              ].map(item => (
                <div key={item.sku} className="p-3 rounded-2xl bg-slate-950 border border-white/5 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-white block">{item.sku}</span>
                    <span className="text-[10px] text-slate-400">{item.status}</span>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-xs font-bold text-cyan-300">{item.cur} EA</span>
                    <span className="text-[9px] text-slate-500 block">안전: {item.safety} EA</span>
                  </div>
                </div>
              ))}
            </div>
            {renderTechBadge('Inventory Stock Table', '재고 소진율 예측 기반 조달 자동화', 'table-inventory-stock-batch')}
          </div>
        </div>
      )}

      {/* 6. TAB 4: PLANNING (간트 스케줄러) */}
      {activeTab === 'planning' && (
        <div className="p-6 rounded-3xl bg-slate-900/95 border border-white/10 shadow-2xl space-y-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <div>
              <h3 className="text-xs font-black text-white">주간 생산 계획 및 설비 로드 간트 차트 (Gantt Scheduler)</h3>
              <span className="text-[10px] text-slate-400">설비별 가동 부하 및 납기 스케줄</span>
            </div>
            <span className="px-2.5 py-1 rounded-lg bg-violet-600/30 text-violet-200 border border-violet-500/40 text-[10px] font-bold">
              계획 준수율 98.4%
            </span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {[
              { line: 'LINE-A 조립', job: 'WO-8820: OLED 65" 3,000대', start: '월 08:00', end: '수 18:00', pct: '75%', col: 'bg-violet-600' },
              { line: 'LINE-B 실장', job: 'WO-8821: SMT 메인보드 5,000대', start: '화 10:00', end: '목 14:00', pct: '50%', col: 'bg-cyan-600' },
              { line: 'LINE-C 광학', job: 'WO-8822: 4K 렌즈 2,000대', start: '목 08:00', end: '금 20:00', pct: '10%', col: 'bg-fuchsia-600' }
            ].map(g => (
              <div key={g.line} className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/5 space-y-2">
                <div className="flex justify-between items-center text-slate-300 font-sans">
                  <span className="font-bold text-white text-xs">{g.line}</span>
                  <span className="text-[11px] text-cyan-300 font-mono">{g.job}</span>
                </div>
                <div className="w-full bg-slate-800 h-3.5 rounded-full overflow-hidden relative">
                  <div className={\`h-full rounded-full \${g.col} shadow-lg\`} style={{ width: g.pct }} />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>시작: {g.start}</span>
                  <span>진척도: {g.pct}</span>
                  <span>종료: {g.end}</span>
                </div>
              </div>
            ))}
          </div>
          {renderTechBadge('Interactive Gantt Schedule', '생산 작업지시(WO) 실시간 일정 조정', 'theme-bento-grid-card-layout')}
        </div>
      )}

      {/* 7. Drilldown Tech Spec Modal */}
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
`;

fs.writeFileSync(path.join(__dirname, '../src/components/MasterEnterpriseApp.tsx'), masterAppCode);
console.log('✅ Generated Breathtaking MasterEnterpriseApp.tsx with 4K Vision Cam & SCADA HUD');
