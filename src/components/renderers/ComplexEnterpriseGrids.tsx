import React, { useState, useEffect } from 'react';
import { 
  Table2, ChevronRight, ChevronDown, Filter, Layers, Database,
  TrendingUp, TrendingDown, ArrowUpDown, Pin, Sparkles, Check,
  AlertTriangle, RefreshCw, BarChart2, CheckCircle2, Sliders, Eye
} from 'lucide-react';

// =========================================================================
// 1. Banded Multi-Header Hierarchical Master-Detail Grid (다단 헤더 계층형 마스터-디테일 그리드)
// =========================================================================
export const BandedMultiHeaderMasterDetailGridDemo: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({ 'LOT-101': true });

  const toggleRow = (id: string) => {
    setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const rows = [
    {
      id: 'LOT-101', line: 'LINE-A (초정밀 사출)', equip: 'EQ-CNC-04', thickness: '24.082', dev: '+0.002', cpk: '1.84',
      defectType: '기포/스크래치', defectCount: 2, yieldRate: '99.8%', status: 'PASS',
      details: [
        { subLot: 'SUB-101-1', serial: 'SN-994821', temp: '210°C', press: '142 bar', inspect: '정상 (0 def)' },
        { subLot: 'SUB-101-2', serial: 'SN-994822', temp: '211°C', press: '144 bar', inspect: '미세 스크래치 (1 def)' }
      ]
    },
    {
      id: 'LOT-102', line: 'LINE-B (광학 센서 본딩)', equip: 'EQ-BOND-09', thickness: '12.504', dev: '-0.004', cpk: '1.62',
      defectType: '단차 불량', defectCount: 5, yieldRate: '99.1%', status: 'PASS',
      details: [
        { subLot: 'SUB-102-1', serial: 'SN-882103', temp: '185°C', press: '98 bar', inspect: '정상 (0 def)' }
      ]
    },
    {
      id: 'LOT-103', line: 'LINE-C (표면 레이저 열처리)', equip: 'EQ-LASER-02', thickness: '38.120', dev: '+0.015', cpk: '1.24',
      defectType: '열변형 크랙', defectCount: 14, yieldRate: '97.2%', status: 'WARNING',
      details: [
        { subLot: 'SUB-103-1', serial: 'SN-773419', temp: '320°C', press: '12 bar', inspect: '크랙 검출 (재작업)' }
      ]
    }
  ];

  return (
    <div className="w-full rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl overflow-hidden text-xs">
      <div className="p-3 bg-slate-950 border-b border-white/10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Table2 className="w-4 h-4 text-cyan-400" />
          <h4 className="font-bold text-white text-xs">다단 복합 헤더 & 마스터-디테일 서브그리드 (Banded Master-Detail)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">Banded Headers // Nested Sub-Tables</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left font-mono text-[10px] text-slate-300">
          <thead>
            {/* Top Band Header */}
            <tr className="bg-slate-950/80 text-slate-400 font-bold border-b border-white/10 text-center">
              <th className="p-1.5 w-6 border-r border-white/5"></th>
              <th colSpan={2} className="p-1.5 bg-violet-950/40 text-violet-300 border-r border-white/10">【 공정 / 설비 정보 】</th>
              <th colSpan={3} className="p-1.5 bg-cyan-950/40 text-cyan-300 border-r border-white/10">【 실시간 가공 치수 & Cpk 】</th>
              <th colSpan={3} className="p-1.5 bg-emerald-950/40 text-emerald-300 border-r border-white/10">【 불량 및 품질 검사 】</th>
              <th className="p-1.5 bg-amber-950/40 text-amber-300">【 판정 】</th>
            </tr>
            {/* Sub Columns */}
            <tr className="bg-white/[0.02] text-slate-400 font-bold border-b border-white/5 text-[9px]">
              <th className="p-1.5 text-center">#</th>
              <th className="p-1.5">생산 라인</th>
              <th className="p-1.5">설비 ID</th>
              <th className="p-1.5 text-right">두께(mm)</th>
              <th className="p-1.5 text-right">편차</th>
              <th className="p-1.5 text-center">Cpk</th>
              <th className="p-1.5">주요 불량</th>
              <th className="p-1.5 text-right">불량수</th>
              <th className="p-1.5 text-right">FPY 수율</th>
              <th className="p-1.5 text-center">상태</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map(row => (
              <React.Fragment key={row.id}>
                <tr className="hover:bg-white/[0.03] transition-colors cursor-pointer" onClick={() => toggleRow(row.id)}>
                  <td className="p-1.5 text-center text-slate-500">
                    {expandedRows[row.id] ? <ChevronDown className="w-3.5 h-3.5 text-cyan-400 inline" /> : <ChevronRight className="w-3.5 h-3.5 inline" />}
                  </td>
                  <td className="p-1.5 font-bold text-white font-sans">{row.line}</td>
                  <td className="p-1.5 text-slate-400">{row.equip}</td>
                  <td className="p-1.5 text-right text-cyan-300 font-bold">{row.thickness}</td>
                  <td className="p-1.5 text-right text-amber-400">{row.dev}</td>
                  <td className="p-1.5 text-center text-emerald-400 font-bold">{row.cpk}</td>
                  <td className="p-1.5 text-slate-300 font-sans">{row.defectType}</td>
                  <td className="p-1.5 text-right text-rose-400 font-bold">{row.defectCount}</td>
                  <td className="p-1.5 text-right text-emerald-400 font-bold">{row.yieldRate}</td>
                  <td className="p-1.5 text-center">
                    <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${
                      row.status === 'PASS' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>

                {/* Nested Detail Sub-Table */}
                {expandedRows[row.id] && (
                  <tr className="bg-slate-950/90">
                    <td colSpan={10} className="p-2.5 pl-8 border-l-2 border-cyan-500">
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[9px] text-slate-400">
                          <span className="font-bold text-cyan-400">↳ {row.id} 하위 시리얼 바코드 상세 검사이력 (Nested Child Records):</span>
                          <span>총 {row.details.length}건 등록됨</span>
                        </div>
                        <table className="w-full text-left font-mono text-[9px] bg-slate-900/60 rounded-lg overflow-hidden">
                          <thead className="bg-white/5 text-slate-400">
                            <tr>
                              <th className="p-1 pl-2">서브 LOT</th>
                              <th className="p-1">바코드 시리얼</th>
                              <th className="p-1">성형 온도</th>
                              <th className="p-1">사출 압력</th>
                              <th className="p-1 text-right pr-2">광학 비전 판정</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-slate-300">
                            {row.details.map((d, i) => (
                              <tr key={i} className="hover:bg-white/5">
                                <td className="p-1 pl-2 text-violet-300">{d.subLot}</td>
                                <td className="p-1 text-slate-400">{d.serial}</td>
                                <td className="p-1 text-amber-300">{d.temp}</td>
                                <td className="p-1 text-cyan-300">{d.press}</td>
                                <td className="p-1 text-right pr-2 text-emerald-400 font-bold">{d.inspect}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// =========================================================================
// 2. Multi-Dimensional OLAP Cube Pivot Matrix (다차원 OLAP 큐브 피벗 매트릭스)
// =========================================================================
export const OlapPivotSlicerMatrixDemo: React.FC = () => {
  const [metric, setMetric] = useState<'revenue' | 'volume' | 'margin'>('revenue');

  const data = [
    { factory: '화성 FAB 1', q1: 1420, q2: 1580, q3: 1690, q4: 1820, total: 6510 },
    { factory: '평택 FAB 2', q1: 2100, q2: 2240, q3: 2410, q4: 2590, total: 9340 },
    { factory: '아산 FAB 3', q1: 980, q2: 1040, q3: 1120, q4: 1190, total: 4330 },
  ];

  return (
    <div className="w-full rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl p-3.5 space-y-3 text-xs">
      <div className="flex flex-wrap justify-between items-center gap-2 border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-violet-400" />
          <h4 className="font-bold text-white text-xs">다차원 OLAP 피벗 큐브 슬라이서 (Multi-Dimensional OLAP Matrix)</h4>
        </div>
        <div className="flex gap-1 bg-slate-950 p-1 rounded-lg border border-white/10 font-mono text-[10px]">
          {(['revenue', 'volume', 'margin'] as const).map(m => (
            <button
              key={m}
              onClick={() => setMetric(m)}
              className={`px-2 py-0.5 rounded font-bold transition-all ${
                metric === m ? 'bg-violet-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              {m === 'revenue' ? '매출액 (KRW)' : m === 'volume' ? '생산량 (K-Pcs)' : '영업이익률 (%)'}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left font-mono text-[10px] text-slate-300">
          <thead className="bg-slate-950 text-slate-400 font-bold border-b border-white/10">
            <tr>
              <th className="p-2">생산 거점 (Row Slicer)</th>
              <th className="p-2 text-right">Q1 실적</th>
              <th className="p-2 text-right">Q2 실적</th>
              <th className="p-2 text-right">Q3 실적</th>
              <th className="p-2 text-right">Q4 실적</th>
              <th className="p-2 text-right bg-violet-950/40 text-violet-300">연간 누적 (Grand Total)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {data.map((r, i) => (
              <tr key={i} className="hover:bg-white/[0.03]">
                <td className="p-2 font-bold text-white font-sans flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  {r.factory}
                </td>
                <td className="p-2 text-right text-cyan-300">{r.q1.toLocaleString()}</td>
                <td className="p-2 text-right text-cyan-300">{r.q2.toLocaleString()}</td>
                <td className="p-2 text-right text-cyan-300">{r.q3.toLocaleString()}</td>
                <td className="p-2 text-right text-cyan-300">{r.q4.toLocaleString()}</td>
                <td className="p-2 text-right font-bold text-emerald-400 bg-violet-950/20">{r.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-slate-950 font-bold border-t border-white/10 text-slate-200">
            <tr>
              <td className="p-2 text-violet-400">합계 (Total Sum)</td>
              <td className="p-2 text-right">4,500</td>
              <td className="p-2 text-right">4,860</td>
              <td className="p-2 text-right">5,220</td>
              <td className="p-2 text-right">5,600</td>
              <td className="p-2 text-right text-emerald-400 bg-violet-950/40">20,180</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

// =========================================================================
// 3. Level-2 High-Frequency Orderbook Depth Matrix (초고속 오더북 뎁스 호가창)
// =========================================================================
export const HighFrequencyTickOrderbookGridDemo: React.FC = () => {
  const [lastTick, setLastTick] = useState<number>(84200);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastTick(prev => prev + (Math.random() > 0.5 ? 100 : -100));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const asks = [
    { price: lastTick + 300, qty: 1420, depth: 85 },
    { price: lastTick + 200, qty: 980, depth: 60 },
    { price: lastTick + 100, qty: 450, depth: 30 },
  ];

  const bids = [
    { price: lastTick - 100, qty: 620, depth: 40 },
    { price: lastTick - 200, qty: 1150, depth: 70 },
    { price: lastTick - 300, qty: 1890, depth: 95 },
  ];

  return (
    <div className="w-full rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl p-3.5 space-y-2.5 text-xs">
      <div className="flex justify-between items-center border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <h4 className="font-bold text-white text-xs">초고속 L2 오더북 뎁스 호가 매트릭스 (L2 Orderbook Depth)</h4>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold animate-pulse">
          LIVE: {lastTick.toLocaleString()} KRW
        </span>
      </div>

      {/* Asks (Sell) */}
      <div className="space-y-1 font-mono text-[10px]">
        {asks.map((a, i) => (
          <div key={i} className="relative flex justify-between items-center p-1 px-2 rounded overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 bg-rose-500/15" style={{ width: `${a.depth}%` }} />
            <span className="relative z-10 text-rose-400 font-bold">{a.price.toLocaleString()}</span>
            <span className="relative z-10 text-slate-300">{a.qty} LOT</span>
          </div>
        ))}

        {/* Current Mid Spread Line */}
        <div className="p-1.5 rounded bg-slate-950 border border-white/10 flex justify-between items-center font-bold">
          <span className="text-cyan-400">체결가 (Current Match)</span>
          <span className="text-white text-xs">{lastTick.toLocaleString()} KRW</span>
        </div>

        {/* Bids (Buy) */}
        {bids.map((b, i) => (
          <div key={i} className="relative flex justify-between items-center p-1 px-2 rounded overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 bg-emerald-500/15" style={{ width: `${b.depth}%` }} />
            <span className="relative z-10 text-emerald-400 font-bold">{b.price.toLocaleString()}</span>
            <span className="relative z-10 text-slate-300">{b.qty} LOT</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// =========================================================================
// 4. TreeList Multi-Column Gantt Timeline Grid (트리리스트 간트 타임라인 그리드)
// =========================================================================
export const TreeListGanttTimelineGridDemo: React.FC = () => {
  const tasks = [
    { id: 1, name: '1. 광학 모듈 설계', start: 10, duration: 40, progress: 100, status: 'DONE' },
    { id: 2, name: '  ├─ 1.1 렌즈 굴절률 FEA', start: 10, duration: 20, progress: 100, status: 'DONE' },
    { id: 3, name: '  └─ 1.2 UV 경화 접착 시험', start: 25, duration: 25, progress: 85, status: 'IN_PROGRESS' },
    { id: 4, name: '2. 클린룸 양산 라인 셋업', start: 45, duration: 45, progress: 40, status: 'IN_PROGRESS' },
  ];

  return (
    <div className="w-full rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl p-3.5 space-y-3 text-xs">
      <div className="flex justify-between items-center border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-amber-400" />
          <h4 className="font-bold text-white text-xs">트리리스트 공정 간트 차트 연동 그리드 (TreeList Gantt Matrix)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">Hierarchical WBS // Gantt Overlay</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left font-mono text-[10px] text-slate-300">
          <thead className="bg-slate-950 text-slate-400 font-bold border-b border-white/10">
            <tr>
              <th className="p-2 w-48">WBS 공정명</th>
              <th className="p-2 w-16 text-center">진척률</th>
              <th className="p-2">타임라인 간트 바 (D+1 ~ D+60)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {tasks.map(t => (
              <tr key={t.id} className="hover:bg-white/[0.03]">
                <td className="p-2 font-bold text-white truncate font-sans">{t.name}</td>
                <td className="p-2 text-center text-cyan-300 font-bold">{t.progress}%</td>
                <td className="p-2">
                  <div className="relative h-4 bg-slate-950 rounded-full overflow-hidden border border-white/5 flex items-center">
                    <div
                      style={{ left: `${t.start}%`, width: `${t.duration}%` }}
                      className={`absolute h-full rounded-full ${
                        t.status === 'DONE' ? 'bg-emerald-500' : 'bg-gradient-to-r from-amber-500 to-orange-500'
                      } shadow-md`}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// =========================================================================
// 5. In-Cell Micro Sparkline & Heatmap Grid (셀 내장 마이크로 스파크라인 그리드)
// =========================================================================
export const InCellMicroSparklineHeatmapGridDemo: React.FC = () => {
  const sensors = [
    { id: 'SEN-01', name: '챔버 내부 진공도', current: '10^-6 Torr', trend: [12, 14, 18, 16, 22, 28, 25], heat: 'bg-emerald-500/20 text-emerald-300' },
    { id: 'SEN-02', name: '플라즈마 RF 출력', current: '2.45 kW', trend: [45, 42, 48, 55, 60, 58, 64], heat: 'bg-amber-500/20 text-amber-300' },
    { id: 'SEN-03', name: '냉각수 회수 유량', current: '14.2 L/min', trend: [80, 78, 75, 70, 65, 50, 42], heat: 'bg-rose-500/20 text-rose-300' },
  ];

  return (
    <div className="w-full rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl p-3.5 space-y-3 text-xs">
      <div className="flex justify-between items-center border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-4 h-4 text-emerald-400" />
          <h4 className="font-bold text-white text-xs">셀 내장 마이크로 스파크라인 & 히트맵 그리드 (In-Cell Sparklines)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">Micro SVG Trends</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left font-mono text-[10px] text-slate-300">
          <thead className="bg-slate-950 text-slate-400 font-bold border-b border-white/10">
            <tr>
              <th className="p-2">센서 ID</th>
              <th className="p-2">계측 항목</th>
              <th className="p-2 text-right">현재값</th>
              <th className="p-2 w-36 text-center">24시간 추세 (Sparkline)</th>
              <th className="p-2 text-center">상태 히트맵</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {sensors.map(s => (
              <tr key={s.id} className="hover:bg-white/[0.03]">
                <td className="p-2 text-cyan-400 font-bold">{s.id}</td>
                <td className="p-2 text-white font-sans">{s.name}</td>
                <td className="p-2 text-right text-emerald-400 font-bold">{s.current}</td>
                <td className="p-2 flex justify-center">
                  <svg className="w-28 h-6" viewBox="0 0 100 24">
                    <polyline
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2"
                      points={s.trend.map((v, idx) => `${idx * 16},${24 - (v / 80) * 20}`).join(' ')}
                    />
                  </svg>
                </td>
                <td className="p-2 text-center">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${s.heat}`}>
                    NOMINAL
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// =========================================================================
// 6. Dual-Side Column Pinning Virtual Grid (좌우 양방향 컬럼 고정 가상 그리드)
// =========================================================================
export const MultiColumnPinningVirtualGridDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl p-3.5 space-y-3 text-xs">
      <div className="flex justify-between items-center border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <Pin className="w-4 h-4 text-cyan-400" />
          <h4 className="font-bold text-white text-xs">양방향 컬럼 고정 & 그룹핑 가상 그리드 (Dual-Pinning Grid)</h4>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">Left/Right Freeze // Group Footer</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left font-mono text-[10px] text-slate-300">
          <thead className="bg-slate-950 text-slate-400 font-bold border-b border-white/10">
            <tr>
              <th className="p-2 bg-slate-950 sticky left-0 z-10 border-r border-white/10 text-cyan-300">📌 고정 LOT (Freeze)</th>
              <th className="p-2">공정 라인</th>
              <th className="p-2">작업자</th>
              <th className="p-2">설비 가동시간</th>
              <th className="p-2 text-right">전력 사용량</th>
              <th className="p-2 bg-slate-950 sticky right-0 z-10 border-l border-white/10 text-right text-emerald-400">📌 제어 (Action)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {[
              { lot: 'LOT-X01', line: 'Main Fab Line 1', worker: '김수석 (책임)', uptime: '99.4h', power: '142 kWh', action: 'PASS' },
              { lot: 'LOT-X02', line: 'Clean Room 2', worker: '박선임 (공정)', uptime: '96.2h', power: '188 kWh', action: 'AUDIT' },
            ].map((r, i) => (
              <tr key={i} className="hover:bg-white/[0.03]">
                <td className="p-2 bg-slate-900 sticky left-0 z-10 border-r border-white/10 font-bold text-cyan-300">{r.lot}</td>
                <td className="p-2 text-white font-sans">{r.line}</td>
                <td className="p-2 text-slate-400 font-sans">{r.worker}</td>
                <td className="p-2 text-emerald-400">{r.uptime}</td>
                <td className="p-2 text-right text-amber-400">{r.power}</td>
                <td className="p-2 bg-slate-900 sticky right-0 z-10 border-l border-white/10 text-right">
                  <button className="px-2 py-0.5 rounded bg-violet-600 hover:bg-violet-500 text-white font-bold text-[9px]">
                    {r.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// =========================================================================
// 7. Interactive Cell Formula Calculation Engine Matrix (동적 수식 계산 엔진 매트릭스)
// =========================================================================
export const InteractiveCellFormulaCalcMatrixDemo: React.FC = () => {
  const [cost, setCost] = useState<number>(1450);
  const [markup, setMarkup] = useState<number>(35); // 35%

  const price = Math.round(cost * (1 + markup / 100));
  const margin = price - cost;

  return (
    <div className="w-full rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl p-3.5 space-y-3 text-xs">
      <div className="flex justify-between items-center border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-violet-400" />
          <h4 className="font-bold text-white text-xs">엔터프라이즈 셀 수식 계산 엔진 매트릭스 (Formula Calc Engine)</h4>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 font-bold">=COST * (1 + MARKUP)</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="p-2.5 rounded-xl bg-slate-950 border border-white/5 space-y-1">
          <span className="text-[10px] text-slate-400">제조 원가 (Cost)</span>
          <div className="flex items-center gap-1">
            <span className="text-slate-500">$</span>
            <input
              type="number"
              value={cost}
              onChange={e => setCost(Number(e.target.value))}
              className="w-full bg-transparent text-cyan-300 font-mono font-bold text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-950 border border-white/5 space-y-1">
          <span className="text-[10px] text-slate-400">마크업 마진율 (Markup %)</span>
          <div className="flex items-center gap-1">
            <input
              type="number"
              value={markup}
              onChange={e => setMarkup(Number(e.target.value))}
              className="w-full bg-transparent text-amber-300 font-mono font-bold text-sm focus:outline-none"
            />
            <span className="text-slate-500">%</span>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-violet-950/30 border border-violet-500/30 space-y-1">
          <span className="text-[10px] text-violet-300 font-bold">최종 납품가 (Auto Calc)</span>
          <div className="text-emerald-400 font-mono font-bold text-sm">
            ${price.toLocaleString()} (+${margin})
          </div>
        </div>
      </div>
    </div>
  );
};
