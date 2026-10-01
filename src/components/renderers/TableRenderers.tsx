import React, { useState } from 'react';
import { 
  Table, Search, ArrowUpDown, ChevronDown, ChevronRight, CheckSquare, 
  Square, Download, Folder, FileText, Check, Award, AlertCircle, Edit3,
  Filter, Plus, Trash2, ArrowUp, ArrowDown, Eye
} from 'lucide-react';

// 1. Realtime DataGrid
export const DataGridDemo: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>(['1']);

  const initialRows = [
    { id: '1', name: 'OAuth-Auth-Server', status: 'ACTIVE', latency: '12ms', cpu: '24%' },
    { id: '2', name: 'Trading-Engine-Core', status: 'ACTIVE', latency: '4ms', cpu: '68%' },
    { id: '3', name: 'Payment-Gateway-KR', status: 'STANDBY', latency: '45ms', cpu: '12%' },
  ];

  const filtered = initialRows
    .filter(r => r.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="p-3 border-b border-white/10 flex items-center justify-between gap-2 bg-white/[0.02]">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-black/40 border border-white/10 flex-1">
          <Search className="w-3 h-3 text-slate-400" />
          <input
            type="text"
            placeholder="마이크로서비스 검색..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="bg-transparent text-xs text-white focus:outline-none w-full"
          />
        </div>
        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-[10px] font-bold border border-white/10"
        >
          <ArrowUpDown className="w-3 h-3" />
          <span>{sortAsc ? 'A-Z' : 'Z-A'}</span>
        </button>
      </div>
      <div className="p-2 space-y-1 text-xs">
        {filtered.map(row => {
          const isSel = selectedIds.includes(row.id);
          return (
            <div
              key={row.id}
              onClick={() => toggleSelect(row.id)}
              className={`flex items-center justify-between p-2 rounded-xl transition-all cursor-pointer border ${
                isSel ? 'bg-violet-600/20 border-violet-500/40 text-white' : 'bg-white/[0.02] border-transparent hover:bg-white/[0.05] text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-violet-400">{isSel ? '☑' : '☐'}</span>
                <span className="font-bold text-xs">{row.name}</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px]">
                <span className="text-cyan-400">{row.latency}</span>
                <span className={`font-bold px-1.5 py-0.5 rounded ${row.status === 'ACTIVE' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}`}>
                  {row.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 2. Pivot Matrix
export const PivotMatrixDemo: React.FC = () => {
  const [metric, setMetric] = useState<'sales' | 'units'>('sales');
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="p-3 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
        <span className="text-xs font-bold text-white">PowerBI 피벗 매트릭스</span>
        <div className="flex gap-1">
          <button onClick={() => setMetric('sales')} className={`px-2 py-0.5 rounded text-[10px] font-bold ${metric === 'sales' ? 'bg-violet-600 text-white' : 'bg-white/5 text-slate-400'}`}>매출액</button>
          <button onClick={() => setMetric('units')} className={`px-2 py-0.5 rounded text-[10px] font-bold ${metric === 'units' ? 'bg-violet-600 text-white' : 'bg-white/5 text-slate-400'}`}>수량</button>
        </div>
      </div>
      <table className="w-full text-left text-[11px] text-slate-300">
        <thead className="bg-white/[0.03] text-slate-400 font-bold">
          <tr><th className="p-2">권역/부서</th><th className="p-2 text-right">Q1</th><th className="p-2 text-right">Q2</th><th className="p-2 text-right text-violet-400">합계</th></tr>
        </thead>
        <tbody className="divide-y divide-white/5 font-mono">
          <tr>
            <td className="p-2 font-bold text-white font-sans">수도권 (HQ)</td>
            <td className="p-2 text-right">{metric === 'sales' ? '$14.2k' : '480 EA'}</td>
            <td className="p-2 text-right">{metric === 'sales' ? '$18.9k' : '620 EA'}</td>
            <td className="p-2 text-right text-violet-300 font-bold">{metric === 'sales' ? '$33.1k' : '1,100 EA'}</td>
          </tr>
          <tr>
            <td className="p-2 font-bold text-white font-sans">영남권 지사</td>
            <td className="p-2 text-right">{metric === 'sales' ? '$8.2k' : '290 EA'}</td>
            <td className="p-2 text-right">{metric === 'sales' ? '$9.4k' : '340 EA'}</td>
            <td className="p-2 text-right text-violet-300 font-bold">{metric === 'sales' ? '$17.6k' : '630 EA'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// 3. Tree Table
export const TreeTableDemo: React.FC = () => {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({ src: true });
  const toggle = (key: string) => setOpenFolders(p => ({ ...p, [key]: !p[key] }));

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1 text-xs">
      <div className="flex items-center justify-between font-bold text-white mb-1">
        <span>계층형 트리 테이블</span>
        <span className="text-[10px] text-slate-500">Tree Nodes</span>
      </div>
      <div onClick={() => toggle('src')} className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white/[0.04] cursor-pointer text-violet-300 font-bold">
        {openFolders['src'] ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
        <Folder className="w-3.5 h-3.5 text-amber-400" />
        <span>src/ (3 items)</span>
      </div>
      {openFolders['src'] && (
        <div className="pl-6 space-y-1 text-slate-300 text-[11px]">
          <div className="flex items-center justify-between p-1 rounded bg-white/[0.02]">
            <span className="flex items-center gap-1"><FileText className="w-3 h-3 text-cyan-400" /> Header.tsx</span>
            <span className="text-[10px] text-slate-500 font-mono">12 KB</span>
          </div>
          <div className="flex items-center justify-between p-1 rounded bg-white/[0.02]">
            <span className="flex items-center gap-1"><FileText className="w-3 h-3 text-cyan-400" /> CanvasStudio.tsx</span>
            <span className="text-[10px] text-slate-500 font-mono">28 KB</span>
          </div>
        </div>
      )}
    </div>
  );
};

// 4. Inline Edit Table
export const InlineEditTableDemo: React.FC = () => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [items, setItems] = useState([
    { id: '1', key: 'CLUSTER_NAME', val: 'prod-k8s-cluster-01' },
    { id: '2', key: 'MAX_REPLICAS', val: '64' }
  ]);

  const updateVal = (id: string, val: string) => {
    setItems(prev => prev.map(it => it.id === id ? { ...it, val } : it));
  };

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="flex items-center justify-between text-xs font-bold text-white">
        <span>인라인 셀 편집</span>
        <span className="text-emerald-400 text-[10px]">더블클릭/클릭 수정</span>
      </div>
      <div className="space-y-1.5">
        {items.map(it => (
          <div key={it.id} className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-white/5">
            <span className="text-slate-400 font-mono text-[10px]">{it.key}</span>
            <input
              type="text"
              value={it.val}
              onChange={e => updateVal(it.id, e.target.value)}
              className="bg-transparent text-right text-xs font-bold text-violet-300 focus:outline-none border-b border-transparent focus:border-violet-500 px-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// 5. Sticky Column Table
export const StickyFreezeTableDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="p-2.5 bg-white/[0.02] border-b border-white/10 text-xs font-bold text-white flex justify-between">
        <span>좌우 동결 고정 컬럼 (Freeze)</span>
        <span className="text-slate-400 text-[10px]">가로 스크롤</span>
      </div>
      <div className="overflow-x-auto p-2">
        <table className="w-full text-xs text-left min-w-[320px]">
          <thead>
            <tr className="text-slate-400 border-b border-white/5">
              <th className="p-1.5 bg-violet-950/80 sticky left-0 font-bold text-violet-300">고정: ID</th>
              <th className="p-1.5">포지션</th>
              <th className="p-1.5">진입가</th>
              <th className="p-1.5 bg-emerald-950/80 sticky right-0 font-bold text-emerald-400 text-right">고정: 손익</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 font-mono text-[11px]">
            <tr>
              <td className="p-1.5 bg-violet-950/80 sticky left-0 text-white font-bold">#BTC-LONG</td>
              <td className="p-1.5 text-slate-300">2.5 BTC</td>
              <td className="p-1.5 text-slate-300">$64,200</td>
              <td className="p-1.5 bg-emerald-950/80 sticky right-0 text-right text-emerald-400 font-bold">+$10,420</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 6. Virtual Scroll Table
export const VirtualScrollTableDemo: React.FC = () => {
  const [offset, setOffset] = useState(84200);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="flex items-center justify-between text-xs font-bold text-white">
        <span>10만건 가상 윈도잉</span>
        <button onClick={() => setOffset(o => o + 100)} className="text-cyan-400 text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
          Scroll +100
        </button>
      </div>
      <div className="h-24 bg-slate-950/70 rounded-xl p-2 border border-white/5 space-y-1 font-mono text-[10px]">
        {[0, 1, 2].map(i => (
          <div key={i} className="flex justify-between text-slate-300 p-1 rounded bg-white/[0.02]">
            <span>[Row #{offset + i}]</span>
            <span className="text-emerald-400">0.0{(i+1)}ms (60fps)</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// 7. Orderbook Table
export const OrderbookTableDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1 font-mono text-[10px]">
      <div className="flex justify-between font-bold text-slate-400 font-sans text-xs mb-1">
        <span>호가창 (Orderbook)</span>
        <span className="text-emerald-400 font-bold">$68,490</span>
      </div>
      <div className="relative p-1 rounded bg-rose-950/40 flex justify-between text-rose-300">
        <div className="absolute inset-y-0 right-0 bg-rose-500/20 w-3/4 rounded-r" />
        <span className="relative font-bold">68,520.00</span>
        <span className="relative">4.82 BTC</span>
      </div>
      <div className="relative p-1 rounded bg-emerald-950/40 flex justify-between text-emerald-300">
        <div className="absolute inset-y-0 right-0 bg-emerald-500/20 w-1/2 rounded-r" />
        <span className="relative font-bold">68,480.00</span>
        <span className="relative">3.15 BTC</span>
      </div>
    </div>
  );
};

// 8. Pricing Plan Table
export const PricingPlanTableDemo: React.FC = () => {
  const [cycle, setCycle] = useState<'month' | 'year'>('month');
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl text-[11px] space-y-2">
      <div className="flex justify-between font-bold text-white text-xs items-center">
        <span>요금제 비교표</span>
        <button onClick={() => setCycle(cycle === 'month' ? 'year' : 'month')} className="text-violet-400 text-[10px] px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
          {cycle === 'month' ? '월 결제' : '연 결제 (20% 할인)'}
        </button>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between p-1 bg-white/[0.02] rounded">
          <span className="text-slate-300">AI 에이전트 동시실행</span>
          <span className="text-emerald-400 font-bold font-mono">{cycle === 'month' ? '10개' : '무제한'}</span>
        </div>
        <div className="flex justify-between p-1 bg-white/[0.02] rounded">
          <span className="text-slate-300">전담 SLA 지원</span>
          <span className="text-violet-400 font-bold">Enterprise</span>
        </div>
      </div>
    </div>
  );
};

// 9. Audit Log Table
export const AuditLogTableDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl font-mono text-[10px] space-y-1">
      <div className="flex justify-between font-bold text-white font-sans text-xs mb-1">
        <span>보안 감사 로그</span>
        <span className="text-emerald-400 text-[10px]">● Live Stream</span>
      </div>
      <div className="p-1.5 bg-white/[0.02] rounded flex items-center justify-between text-slate-300">
        <span>ADMIN_KEY_ROTATE</span>
        <span className="text-slate-500">14:52:01</span>
      </div>
      <div className="p-1.5 bg-white/[0.02] rounded flex items-center justify-between text-emerald-400">
        <span>POLICY_UPDATE_OK</span>
        <span className="text-slate-500">14:50:18</span>
      </div>
    </div>
  );
};

// 10. FileManager Table
export const FileManagerTableDemo: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl text-xs space-y-1.5">
      <div className="flex justify-between font-bold text-white">
        <span>파일 탐색기</span>
        <span className="text-slate-400 text-[10px]">2 Files</span>
      </div>
      <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/[0.02]">
        <span className="flex items-center gap-1.5 text-white"><FileText className="w-3.5 h-3.5 text-violet-400" /> blueprint.json</span>
        <button onClick={() => { setDownloaded(true); setTimeout(() => setDownloaded(false), 1500); }} className="p-1 text-slate-400 hover:text-white">
          {downloaded ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};

// 11. Inventory Stock Table
export const InventoryStockTableDemo: React.FC = () => {
  const [qty, setQty] = useState(4);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl text-xs space-y-1.5">
      <div className="flex justify-between font-bold text-white">
        <span>물류 재고 관리</span>
        <span className={`text-[10px] font-bold ${qty < 5 ? 'text-rose-400' : 'text-emerald-400'}`}>
          {qty < 5 ? '재고부족 경고' : '정상 수량'}
        </span>
      </div>
      <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/[0.02]">
        <span className="text-white font-mono">SKU-99201 (OLED)</span>
        <div className="flex items-center gap-1.5">
          <span className="font-mono font-bold text-amber-300">{qty} EA</span>
          <button onClick={() => setQty(q => q + 5)} className="px-1.5 py-0.5 rounded bg-violet-600 text-white text-[10px] font-bold">+5 입고</button>
        </div>
      </div>
    </div>
  );
};

// 12. Leaderboard Table
export const LeaderboardTableDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl text-xs space-y-1.5">
      <div className="flex justify-between font-bold text-white">
        <span>유저 리더보드</span>
        <Award className="w-4 h-4 text-amber-400" />
      </div>
      <div className="flex items-center justify-between p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold">
        <span>🥇 1위. DevMaster_KW</span>
        <span className="font-mono">9,840 pts</span>
      </div>
      <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/[0.02] text-slate-300">
        <span>🥈 2위. AgentZero</span>
        <span className="font-mono">8,420 pts</span>
      </div>
    </div>
  );
};
