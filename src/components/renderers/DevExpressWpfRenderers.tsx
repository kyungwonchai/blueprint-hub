import React, { useState } from 'react';
import { 
  FileSpreadsheet, Sliders, Filter, Workflow, GitBranch, SplitSquareVertical,
  Layers, Database, FileText, Check, Plus, Eye, ArrowRight, CornerDownRight,
  Sparkles, Shield, Cpu, RefreshCw, ZoomIn, ZoomOut, Download, Maximize2
} from 'lucide-react';

// 1. DevExpress Ribbon Command Bar
export const DevExpressRibbonDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'data' | 'view'>('home');
  return (
    <div className="w-full rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden text-xs">
      {/* Ribbon Tabs Header */}
      <div className="flex items-center gap-1 px-3 pt-2 bg-slate-950 border-b border-white/10">
        <span className="px-2 py-0.5 rounded bg-violet-600 font-bold text-white text-[10px]">FILE</span>
        {[
          { id: 'home', label: '홈 (Home)' },
          { id: 'data', label: '데이터 분석 (Data)' },
          { id: 'view', label: '보기 (View)' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3 py-1 rounded-t-lg font-bold transition-all ${
              activeTab === tab.id ? 'bg-slate-900 text-white border-t-2 border-violet-500' : 'text-slate-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Ribbon Tool Strip */}
      <div className="p-2.5 bg-slate-900/90 flex items-center gap-3 overflow-x-auto text-[11px]">
        {activeTab === 'home' && (
          <>
            <div className="flex flex-col items-center gap-1 px-2 border-r border-white/10">
              <span className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-violet-400 cursor-pointer">📋</span>
              <span className="text-[9px] text-slate-400">붙여넣기</span>
            </div>
            <div className="flex flex-col items-center gap-1 px-2 border-r border-white/10">
              <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold cursor-pointer">⚡ 실행</span>
              <span className="text-[9px] text-slate-400">자동 분석</span>
            </div>
            <div className="flex flex-col items-center gap-1 px-2">
              <span className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 cursor-pointer">💾 저장</span>
              <span className="text-[9px] text-slate-400">내보내기</span>
            </div>
          </>
        )}
        {activeTab === 'data' && (
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 rounded bg-violet-600 text-white font-bold text-[10px]">피벗 새로고침</button>
            <button className="px-2 py-1 rounded bg-white/5 text-slate-300 text-[10px]">조건부 서식</button>
            <button className="px-2 py-1 rounded bg-white/5 text-slate-300 text-[10px]">SQL 쿼리 빌더</button>
          </div>
        )}
        {activeTab === 'view' && (
          <div className="flex items-center gap-2">
            <span className="text-slate-300 text-[10px]">그리드 눈금선: <b>ON</b></span>
            <span className="text-slate-300 text-[10px]">도킹 패널: <b>좌우 분할</b></span>
          </div>
        )}
      </div>
    </div>
  );
};

// 2. DevExpress PropertyGrid Inspector
export const DevExpressPropertyGridDemo: React.FC = () => {
  const [props, setProps] = useState({
    lineSpeed: '142 bpm',
    targetYield: '99.8%',
    autoCalibration: true,
    alertThresholdPpm: 50
  });

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3.5 shadow-2xl space-y-2 text-xs">
      <div className="flex justify-between items-center border-b border-white/10 pb-1.5 font-bold text-white">
        <span>DevExpress 프로퍼티 그리드 (PropertyGrid)</span>
        <span className="text-[10px] text-violet-400 font-mono">라인 파라미터</span>
      </div>
      <div className="space-y-1 font-mono text-[11px]">
        <div className="flex justify-between items-center p-1.5 rounded bg-slate-950/60 border border-white/5">
          <span className="text-slate-400">설비 속도 (LineSpeed)</span>
          <input
            type="text"
            value={props.lineSpeed}
            onChange={e => setProps({ ...props, lineSpeed: e.target.value })}
            className="bg-transparent text-right text-cyan-300 font-bold focus:outline-none w-24 border-b border-transparent focus:border-cyan-500"
          />
        </div>
        <div className="flex justify-between items-center p-1.5 rounded bg-slate-950/60 border border-white/5">
          <span className="text-slate-400">목표 수율 (TargetYield)</span>
          <input
            type="text"
            value={props.targetYield}
            onChange={e => setProps({ ...props, targetYield: e.target.value })}
            className="bg-transparent text-right text-emerald-400 font-bold focus:outline-none w-24 border-b border-transparent focus:border-emerald-500"
          />
        </div>
        <div className="flex justify-between items-center p-1.5 rounded bg-slate-950/60 border border-white/5">
          <span className="text-slate-400">이상감지 임계치 (PPM)</span>
          <input
            type="number"
            value={props.alertThresholdPpm}
            onChange={e => setProps({ ...props, alertThresholdPpm: Number(e.target.value) })}
            className="bg-transparent text-right text-amber-400 font-bold focus:outline-none w-20 border-b border-transparent focus:border-amber-500"
          />
        </div>
      </div>
    </div>
  );
};

// 3. DevExpress Visual Filter Editor (Tree Expression Builder)
export const DevExpressFilterEditorDemo: React.FC = () => {
  const [op, setOp] = useState<'AND' | 'OR'>('AND');
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3.5 shadow-2xl space-y-2 text-xs">
      <div className="flex justify-between items-center border-b border-white/10 pb-1.5 font-bold text-white">
        <span>비주얼 필터 에디터 (FilterEditor)</span>
        <button onClick={() => setOp(op === 'AND' ? 'OR' : 'AND')} className="px-2 py-0.5 rounded bg-violet-600 text-white font-mono font-bold text-[10px]">
          [{op}] 조건 결합
        </button>
      </div>
      <div className="p-2 rounded-xl bg-slate-950 border border-white/5 space-y-1.5 font-mono text-[11px]">
        <div className="flex items-center gap-1.5 text-cyan-300">
          <span className="text-slate-500">├─</span>
          <span className="text-violet-400 font-bold">[수율]</span>
          <span>&gt;=</span>
          <span className="bg-white/10 px-1.5 py-0.2 rounded text-emerald-400 font-bold">99.0%</span>
        </div>
        <div className="flex items-center gap-1.5 text-cyan-300">
          <span className="text-slate-500">└─</span>
          <span className="text-violet-400 font-bold">[불량PPM]</span>
          <span>&lt;</span>
          <span className="bg-white/10 px-1.5 py-0.2 rounded text-amber-400 font-bold">50 PPM</span>
        </div>
      </div>
    </div>
  );
};

// 4. DevExpress Visio Diagram & Node Flow
export const DevExpressDiagramDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3.5 shadow-2xl space-y-2 text-xs">
      <div className="flex justify-between items-center border-b border-white/10 pb-1.5 font-bold text-white">
        <span>Visio 스타일 공정 다이어그램 (Diagram)</span>
        <span className="text-emerald-400 text-[10px]">● 4 Nodes Active</span>
      </div>
      <div className="h-28 w-full bg-slate-950/80 rounded-xl p-2 border border-white/5 relative flex items-center justify-between px-4">
        {/* Node 1 */}
        <div className="p-2 rounded-xl bg-violet-600/30 border border-violet-500 text-center font-bold text-[10px] text-violet-200">
          1. 투입
        </div>
        <span className="text-slate-500 font-bold">➔</span>
        {/* Node 2 */}
        <div className="p-2 rounded-xl bg-cyan-600/30 border border-cyan-500 text-center font-bold text-[10px] text-cyan-200">
          2. SMT 실장
        </div>
        <span className="text-slate-500 font-bold">➔</span>
        {/* Node 3 */}
        <div className="p-2 rounded-xl bg-emerald-600/30 border border-emerald-500 text-center font-bold text-[10px] text-emerald-200 animate-pulse">
          3. AI 검사
        </div>
        <span className="text-slate-500 font-bold">➔</span>
        {/* Node 4 */}
        <div className="p-2 rounded-xl bg-fuchsia-600/30 border border-fuchsia-500 text-center font-bold text-[10px] text-fuchsia-200">
          4. 출하
        </div>
      </div>
    </div>
  );
};

// 5. DevExpress Docking Layout Manager
export const DevExpressDockingDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3.5 shadow-2xl space-y-2 text-xs">
      <div className="flex justify-between items-center font-bold text-white">
        <span>WPF 도킹 레이아웃 (Docking MDI)</span>
        <span className="text-slate-400 text-[10px]">패널 드래그 분할</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 h-24 text-[10px]">
        <div className="p-2 rounded-xl bg-slate-950 border border-white/10 flex flex-col justify-between">
          <span className="text-slate-400 font-bold">탐색기 (Pinned)</span>
          <span className="text-violet-300 font-mono">BOM Tree</span>
        </div>
        <div className="col-span-2 p-2 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
          <div className="flex justify-between text-slate-400 font-bold">
            <span>메인 관제 뷰 (Active Document)</span>
            <span className="text-emerald-400">● 60 FPS</span>
          </div>
          <span className="text-cyan-300 font-mono">DevExpress Realtime Engine</span>
        </div>
      </div>
    </div>
  );
};

// 6. Excel-grade Spreadsheet Matrix
export const DevExpressSpreadsheetDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1.5 text-xs">
      <div className="flex justify-between items-center font-bold text-white">
        <span className="flex items-center gap-1.5"><FileSpreadsheet className="w-4 h-4 text-emerald-400" /> Excel 스프레드시트 뷰</span>
        <span className="text-emerald-400 text-[10px] font-mono">=SUM(B2:D2)</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[10px] font-mono text-slate-300">
          <thead className="bg-slate-950 text-slate-500">
            <tr><th className="p-1"></th><th className="p-1">A</th><th className="p-1">B</th><th className="p-1">C (수식)</th></tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            <tr>
              <td className="p-1 text-slate-500 bg-slate-950">1</td>
              <td className="p-1 text-white">생산원가</td>
              <td className="p-1 text-cyan-300">$1,420</td>
              <td className="p-1 text-emerald-400 font-bold">$1,420</td>
            </tr>
            <tr>
              <td className="p-1 text-slate-500 bg-slate-950">2</td>
              <td className="p-1 text-white">납품단가</td>
              <td className="p-1 text-cyan-300">$2,100</td>
              <td className="p-1 text-emerald-400 font-bold">+$680 (마진)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
