const fs = require('fs');
const path = require('path');

const enterpriseAppCode = `import React, { useState, useEffect } from 'react';
import { 
  Factory, Layers, Activity, ShieldCheck, Truck, BarChart3, 
  Calendar, Check, Plus, Sparkles, ArrowUpRight, Search, Filter,
  Settings, RefreshCw, AlertTriangle, Eye, Sliders, Box, Cpu,
  HardDrive, Zap, ChevronRight, ChevronDown, CheckCircle2,
  TrendingUp, TrendingDown, Clock, HelpCircle, Info
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
  // Domain Workspaces: Production / Quality / Materials / SupplyPlanning
  const [activeTab, setActiveTab] = useState<'production' | 'quality' | 'materials' | 'planning'>('production');

  // Shared Master-Detail Drilldown State (Cross-Filtering Chain Reaction)
  const [selectedLine, setSelectedLine] = useState<string>('LINE-A (OLED 스마트 조립)');
  const [selectedLot, setSelectedLot] = useState<string>('LOT-2026-X842');
  const [selectedDefect, setSelectedDefect] = useState<string | null>('표면 스크래치 (42건)');
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

  // Tech Badge Helper to explain cutting-edge DevExpress/PowerBI tech
  const renderTechBadge = (techName: string, desc: string, compId: string) => {
    const comp = getComponent(compId);
    const inCart = comp ? cartItems.some(x => x.id === comp.id) : false;

    return (
      <div className="flex items-center gap-1.5 p-1 rounded-lg bg-white/[0.04] border border-white/10 text-[10px]">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        <span className="font-bold text-slate-300 font-mono">{techName}</span>
        <button
          onClick={() => setDrilldownModal({ title: techName, tech: desc, details: comp })}
          className="text-violet-400 hover:text-white underline ml-1"
          title="기술 스펙 확인"
        >
          [원리]
        </button>
        {comp && (
          <button
            onClick={() => onAddToCart(comp)}
            className={\`ml-auto px-1.5 py-0.5 rounded text-[9px] font-bold transition-all \${
              inCart ? 'bg-fuchsia-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
            }\`}
          >
            {inCart ? '✔ 담김' : '+ 부품담기'}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 animate-fade-in">
      {/* 1. Header Command Hub */}
      <div className="p-5 rounded-3xl bg-slate-900/90 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-black text-[10px] font-black uppercase tracking-wider animate-pulse">
              ● Live Smart Factory MES/ERP
            </span>
            <h2 className="text-base sm:text-lg font-black text-white">
              2026 제조·품질·자재·생산계획 통합 경영 관제 허브
            </h2>
          </div>
          <p className="text-xs text-slate-400">
            DevExpress / PowerBI 초고난도 연동 구조 (마스터 그리드 클릭 ➔ 드릴다운 피벗 ➔ 파레토 차트 ➔ 불량 원인 추적 체인 리액션).
          </p>
        </div>

        {/* Domain Switcher */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-black/60 border border-white/10">
          <button
            onClick={() => setActiveTab('production')}
            className={\`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all \${
              activeTab === 'production' ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }\`}
          >
            <Factory className="w-3.5 h-3.5" />
            <span>생산 라인 MES</span>
          </button>

          <button
            onClick={() => setActiveTab('quality')}
            className={\`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all \${
              activeTab === 'quality' ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }\`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>품질 종합 & 파레토</span>
          </button>

          <button
            onClick={() => setActiveTab('materials')}
            className={\`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all \${
              activeTab === 'materials' ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }\`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>자재 BOM & 재고 수불</span>
          </button>

          <button
            onClick={() => setActiveTab('planning')}
            className={\`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all \${
              activeTab === 'planning' ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }\`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>생산 계획 & 간트 로드</span>
          </button>
        </div>
      </div>

      {/* 2. Top Smart Factory KPI Tiles (Interlinked) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Realtime Yield */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-xl shadow-xl flex flex-col justify-between">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-slate-300">종합 공정 수율 (OEE)</span>
            <span className="text-[10px] text-emerald-400 font-bold font-mono">목표 99.0%</span>
          </div>
          <div className="text-2xl font-black text-white font-mono my-1">{liveYield}%</div>
          {renderTechBadge('Micro-Gauge Sparkline', '실시간 SVG 동적 보간 렌더링', 'chart-sparkline-mini-badge')}
        </div>

        {/* KPI 2: Total Output */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-violet-500/30 backdrop-blur-xl shadow-xl flex flex-col justify-between">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-slate-300">금일 누적 생산량</span>
            <span className="text-[10px] text-violet-400 font-bold font-mono">진척률 104%</span>
          </div>
          <div className="text-2xl font-black text-white font-mono my-1">{liveOutput.toLocaleString()} EA</div>
          {renderTechBadge('Progress Stepper Tile', '목표 대비 달성률 동적 채움', 'stat-revenue-growth-gradient')}
        </div>

        {/* KPI 3: Defect Rate PPM */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-amber-500/30 backdrop-blur-xl shadow-xl flex flex-col justify-between">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-slate-300">불량률 (PPM 관제)</span>
            <span className="text-[10px] text-emerald-400 font-bold font-mono">-18 PPM</span>
          </div>
          <div className="text-2xl font-black text-amber-400 font-mono my-1">42 PPM</div>
          {renderTechBadge('PPM Anomaly Monitor', '임계치 초과 시 자동 Alert 뱃지', 'stat-server-latency-ms')}
        </div>

        {/* KPI 4: Active Shift Info */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-xl flex flex-col justify-between">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-slate-300">교대근무 및 설비 가동</span>
            <span className="text-[10px] text-cyan-400 font-bold">16개 전 라인 가동</span>
          </div>
          <div className="text-xl font-black text-white font-mono my-1">{activeShift} (08:00~20:00)</div>
          {renderTechBadge('Shift Toggle Bar', '근무조 변경 시 작업자 자동 매핑', 'stat-uptime-sla-four-nines')}
        </div>
      </div>

      {/* 3. TAB 1: PRODUCTION MES (마스터 라인 선택 ➔ 상세 LOT 추적 그리드) */}
      {activeTab === 'production' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Production Line Master Grid with Status Indicators */}
          <div className="lg:col-span-1 space-y-4">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-3">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <h3 className="text-xs font-black text-white flex items-center gap-1.5">
                  <Factory className="w-4 h-4 text-violet-400" />
                  생산 라인 마스터 (Line Selector)
                </h3>
                <span className="text-[10px] text-slate-400">클릭 시 우측 연동</span>
              </div>

              <div className="space-y-2">
                {[
                  { id: 'LINE-A', name: 'LINE-A (OLED 스마트 조립)', status: 'RUNNING', speed: '98 bpm', yield: '99.8%' },
                  { id: 'LINE-B', name: 'LINE-B (SMT 고속 실장)', status: 'RUNNING', speed: '142 bpm', yield: '99.4%' },
                  { id: 'LINE-C', name: 'LINE-C (광학 렌즈 모듈)', status: 'STANDBY', speed: '0 bpm', yield: '98.9%' },
                  { id: 'LINE-D', name: 'LINE-D (최종 포장/에이징)', status: 'RUNNING', speed: '85 bpm', yield: '99.9%' }
                ].map(line => {
                  const isSel = selectedLine.includes(line.id);
                  return (
                    <div
                      key={line.id}
                      onClick={() => setSelectedLine(line.name)}
                      className={\`p-3 rounded-xl border transition-all cursor-pointer \${
                        isSel
                          ? 'bg-violet-600/30 border-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                          : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.06]'
                      }\`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-xs text-white">{line.name}</span>
                        <span className={\`text-[9px] font-bold px-1.5 py-0.5 rounded \${
                          line.status === 'RUNNING' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                        }\`}>
                          {line.status}
                        </span>
                      </div>
                      <div className="flex justify-between text-[11px] font-mono text-slate-400">
                        <span>속도: {line.speed}</span>
                        <span className="text-emerald-400 font-bold">수율: {line.yield}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {renderTechBadge('DevExpress Master-Detail', '상위 행 선택 시 하위 컴포넌트 자동 리로드', 'datagrid-realtime-pro')}
            </div>

            {/* Line Environmental Sensors */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-3">
              <h4 className="text-xs font-bold text-white">클린룸 온습도/차압 텔레메트리</h4>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                <div className="p-2 rounded-xl bg-slate-950 border border-white/5">
                  <span className="text-slate-400 block">온도</span>
                  <span className="text-sm font-bold text-white font-mono">22.4°C</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-950 border border-white/5">
                  <span className="text-slate-400 block">습도</span>
                  <span className="text-sm font-bold text-cyan-400 font-mono">45.2%</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-950 border border-white/5">
                  <span className="text-slate-400 block">차압</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">+15 Pa</span>
                </div>
              </div>
              {renderTechBadge('IoT Cleanroom Multi-Gauge', '스마트 빌딩/공장 환경 센서 매핑', 'circular-gauge-monitor')}
            </div>
          </div>

          {/* Right 2 Cols: Interlinked LOT Detail DataGrid + Realtime Defect Heatmap */}
          <div className="lg:col-span-2 space-y-4">
            {/* Active Line Detail DataGrid with Filter / Sort / Freeze */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-3">
              <div className="flex flex-wrap justify-between items-center gap-2 border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xs font-black text-white">
                    {selectedLine} — 실시간 LOT 생산 이력
                  </h3>
                  <span className="text-[10px] text-emerald-400 font-bold">● 실시간 공정 데이터 스트림 연결됨</span>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded bg-black/60 border border-white/10 text-[10px] text-slate-300 font-mono">
                    선택된 LOT: {selectedLot}
                  </span>
                </div>
              </div>

              {/* Real DevExpress Style Table with Fixed Columns & Row Click Chain Reaction */}
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

            {/* Bottom: Defect Pareto Analysis + Heatmap */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-bold text-white">
                  {selectedLot} 공정 검사 불량 유형 파레토 (Pareto 80/20)
                </h4>
                <span className="text-[10px] text-fuchsia-400 font-bold font-mono">불량 누적 6건</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-[11px]">
                {[
                  { type: '표면 스크래치', count: 3, pct: '50%', col: 'bg-rose-600' },
                  { type: '이물/먼지 유입', count: 2, pct: '33%', col: 'bg-amber-600' },
                  { type: '전극 납땜 불량', count: 1, pct: '17%', col: 'bg-violet-600' },
                  { type: '치수 공차 초과', count: 0, pct: '0%', col: 'bg-slate-700' }
                ].map(d => (
                  <div key={d.type} className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                    <span className="text-slate-400 block text-[10px] truncate">{d.type}</span>
                    <div className="flex justify-between font-mono">
                      <span className="font-bold text-white">{d.count}건</span>
                      <span className="text-slate-400 text-[10px]">{d.pct}</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className={\`h-full \${d.col}\`} style={{ width: d.pct }} />
                    </div>
                  </div>
                ))}
              </div>
              {renderTechBadge('Pareto 80/20 Dual Chart', '누적 백분율 곡선과 불량 막대 결합', 'chart-bar-comparison-dual')}
            </div>
          </div>
        </div>
      )}

      {/* 4. TAB 2: QUALITY (다차원 품질 분석, SPC 관리도, 피벗 매트릭스) */}
      {activeTab === 'quality' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* PowerBI Multi-Dimensional Quality Pivot */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-3">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <h3 className="text-xs font-black text-white">
                  품질 피벗 매트릭스 (공정 x 불량원인 x 손실액)
                </h3>
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
              {renderTechBadge('PowerBI Cross-Tab Pivot', '다차원 롤업 집계 및 손실액 실시간 산출', 'table-pivot-matrix-analysis')}
            </div>

            {/* Quality Radar Skills Benchmark */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-3">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <h3 className="text-xs font-black text-white">6대 품질 지수 다차원 레이더 (Spider Matrix)</h3>
                <span className="text-[10px] text-cyan-400 font-mono">CPK: 1.67</span>
              </div>
              <div className="flex items-center justify-center h-44">
                <svg viewBox="0 0 160 160" className="w-full h-full max-w-[200px]">
                  <polygon points="80,15 136,47 136,113 80,145 24,113 24,47" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <polygon points="80,24 130,52 120,110 80,132 38,105 34,52" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" strokeWidth="2" />
                  <text x="80" y="10" fill="#94a3b8" fontSize="7" textAnchor="middle">치수정밀도</text>
                  <text x="142" y="50" fill="#94a3b8" fontSize="7">표면조도</text>
                  <text x="142" y="118" fill="#94a3b8" fontSize="7">인장강도</text>
                  <text x="80" y="155" fill="#94a3b8" fontSize="7" textAnchor="middle">내열성</text>
                  <text x="18" y="118" fill="#94a3b8" fontSize="7" textAnchor="end">절연저항</text>
                  <text x="18" y="50" fill="#94a3b8" fontSize="7" textAnchor="end">도막두께</text>
                </svg>
              </div>
              {renderTechBadge('Radar 6-Axis QC Chart', '품질 6대 속성 규격 상한/하한 비교', 'chart-radar-skills')}
            </div>
          </div>
        </div>
      )}

      {/* 5. TAB 3: MATERIALS (자재 계층형 BOM 트리 & 수불부) */}
      {activeTab === 'materials' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Hierarchical BOM Tree Table */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-3">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <h3 className="text-xs font-black text-white">
                계층형 자재 명세서 (Multi-Level BOM Tree)
              </h3>
              <span className="text-[10px] text-amber-400 font-mono">BOM Level: 3</span>
            </div>
            <div className="space-y-1 text-xs">
              <div className="p-2 rounded-lg bg-violet-600/20 text-violet-200 font-bold flex items-center justify-between">
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
            {renderTechBadge('DevExpress Tree List Grid', '다단계 BOM 전개 및 재고 부족 부품 즉시 경고', 'table-expandable-tree-rows')}
          </div>

          {/* Realtime Inventory Stock Turnover */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-3">
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
                <div key={item.sku} className="p-2.5 rounded-xl bg-slate-950 border border-white/5 flex justify-between items-center">
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

      {/* 6. TAB 4: PLANNING (생산 계획 및 간트 일정 로드) */}
      {activeTab === 'planning' && (
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <div>
              <h3 className="text-xs font-black text-white">
                주간 생산 계획 및 설비 로드 간트 차트 (Gantt Scheduler)
              </h3>
              <span className="text-[10px] text-slate-400">설비별 가동 부하 및 납기 스케줄</span>
            </div>
            <span className="px-2 py-1 rounded bg-violet-600/30 text-violet-200 border border-violet-500/40 text-[10px] font-bold">
              계획 준수율 98.4%
            </span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {[
              { line: 'LINE-A 조립', job: 'WO-8820: OLED 65" 3,000대', start: '월 08:00', end: '수 18:00', pct: '75%', col: 'bg-violet-600' },
              { line: 'LINE-B 실장', job: 'WO-8821: SMT 메인보드 5,000대', start: '화 10:00', end: '목 14:00', pct: '50%', col: 'bg-cyan-600' },
              { line: 'LINE-C 광학', job: 'WO-8822: 4K 렌즈 2,000대', start: '목 08:00', end: '금 20:00', pct: '10%', col: 'bg-fuchsia-600' }
            ].map(g => (
              <div key={g.line} className="p-3 rounded-xl bg-slate-950/70 border border-white/5 space-y-1.5">
                <div className="flex justify-between items-center text-slate-300 font-sans">
                  <span className="font-bold text-white text-xs">{g.line}</span>
                  <span className="text-[11px] text-cyan-300 font-mono">{g.job}</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden relative">
                  <div className={\`h-full rounded-full \${g.col} shadow-md\`} style={{ width: g.pct }} />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>시작: {g.start}</span>
                  <span>진척도: {g.pct}</span>
                  <span>종료: {g.end}</span>
                </div>
              </div>
            ))}
          </div>
          {renderTechBadge('Interactive Gantt Schedule', '생산 작업지시(WO) 실시간 드래그 일정 조정', 'theme-bento-grid-card-layout')}
        </div>
      )}

      {/* 7. Drilldown Tech Explanation Modal */}
      {drilldownModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-3xl bg-slate-900 border border-violet-500/40 p-6 shadow-2xl space-y-4 animate-scale-up">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  2026 Enterprise Control Spec
                </span>
                <h3 className="text-base font-black text-white mt-1">{drilldownModal.title}</h3>
              </div>
              <button
                onClick={() => setDrilldownModal(null)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3.5 rounded-xl border border-white/5">
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
                <div className="p-2 rounded-lg bg-white/[0.02] text-[11px] text-slate-400">
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
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-black hover:opacity-90 shadow-lg"
                >
                  + 이 컴포넌트 내 프로젝트에 담기
                </button>
              )}
              <button
                onClick={() => setDrilldownModal(null)}
                className="px-4 py-2.5 rounded-xl bg-white/10 text-slate-300 text-xs font-bold hover:bg-white/20"
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

fs.writeFileSync(path.join(__dirname, '../src/components/MasterEnterpriseApp.tsx'), enterpriseAppCode);
console.log('✅ Generated Ultimate MasterEnterpriseApp.tsx (Manufacturing / Quality / Materials / Planning)');
