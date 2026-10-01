import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const renderersDir = path.join(__dirname, 'src/components/renderers');

// 2. Table Renderers (12 distinct full UIs)
const tableRenderers = `import React, { useState } from 'react';
import { 
  Table, Search, ArrowUpDown, ChevronDown, ChevronRight, CheckSquare, 
  Square, Download, Folder, FileText, Check, Award, AlertCircle, Edit3
} from 'lucide-react';

export const DataGridDemo: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['1', '2']);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="p-3 border-b border-white/10 flex items-center justify-between">
        <span className="text-xs font-bold text-white">실시간 데이터그리드</span>
        <span className="text-[10px] text-slate-400">선택 {selectedIds.length}개</span>
      </div>
      <div className="p-2 space-y-1 text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02]">
          <span className="font-bold text-white">OAuth-Server</span>
          <span className="text-emerald-400 font-bold text-[10px]">ACTIVE</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02]">
          <span className="font-bold text-white">Trading-Engine</span>
          <span className="text-emerald-400 font-bold text-[10px]">ACTIVE</span>
        </div>
      </div>
    </div>
  );
};

export const PivotMatrixDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="p-3 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
        <span className="text-xs font-bold text-white">다차원 피벗 매트릭스 (PowerBI)</span>
        <span className="text-[10px] text-violet-400 font-bold">지역 x 분기</span>
      </div>
      <table className="w-full text-left text-[11px] text-slate-300">
        <thead className="bg-white/[0.03] text-slate-400 font-bold">
          <tr><th className="p-2">권역</th><th className="p-2 text-right">Q1</th><th className="p-2 text-right">Q2</th><th className="p-2 text-right text-violet-400">합계</th></tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          <tr><td className="p-2 font-bold text-white">수도권</td><td className="p-2 text-right font-mono">$14.2k</td><td className="p-2 text-right font-mono">$18.9k</td><td className="p-2 text-right font-mono text-violet-300 font-bold">$33.1k</td></tr>
          <tr><td className="p-2 font-bold text-white">영남권</td><td className="p-2 text-right font-mono">$8.2k</td><td className="p-2 text-right font-mono">$9.4k</td><td className="p-2 text-right font-mono text-violet-300 font-bold">$17.6k</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export const TreeTableDemo: React.FC = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1 text-xs">
      <div className="flex items-center justify-between font-bold text-white mb-2">
        <span>계층형 트리 테이블</span>
        <span className="text-[10px] text-slate-500">Tree View</span>
      </div>
      <div onClick={() => setOpen(!open)} className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white/[0.04] cursor-pointer text-violet-300 font-bold">
        {open ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
        <Folder className="w-3.5 h-3.5 text-amber-400" />
        <span>src/components (3 files)</span>
      </div>
      {open && (
        <div className="pl-6 space-y-1 text-slate-300 text-[11px]">
          <div className="flex items-center justify-between p-1 rounded bg-white/[0.02]">
            <span className="flex items-center gap-1"><FileText className="w-3 h-3 text-cyan-400" /> Header.tsx</span>
            <span className="text-[10px] text-slate-500">12 KB</span>
          </div>
          <div className="flex items-center justify-between p-1 rounded bg-white/[0.02]">
            <span className="flex items-center gap-1"><FileText className="w-3 h-3 text-cyan-400" /> CanvasStudio.tsx</span>
            <span className="text-[10px] text-slate-500">28 KB</span>
          </div>
        </div>
      )}
    </div>
  );
};

export const InlineEditTableDemo: React.FC = () => {
  const [val, setVal] = useState('프로덕션 클러스터 #1');
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="flex items-center justify-between text-xs font-bold text-white">
        <span>엑셀 인라인 셀 편집</span>
        <span className="text-emerald-400 text-[10px]">더블클릭 편집</span>
      </div>
      <div className="p-2 rounded-xl bg-slate-950/60 border border-violet-500/40 flex items-center justify-between">
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="bg-transparent text-xs text-white focus:outline-none flex-1 font-bold"
        />
        <Edit3 className="w-3.5 h-3.5 text-violet-400" />
      </div>
    </div>
  );
};

export const StickyFreezeTableDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="p-2.5 bg-white/[0.02] border-b border-white/10 text-xs font-bold text-white">
        좌우 동결 고정 컬럼 (Freeze Sticky)
      </div>
      <div className="overflow-x-auto p-2">
        <div className="flex gap-2 text-[11px] min-w-[280px]">
          <div className="p-1.5 bg-violet-950/80 rounded font-bold text-violet-300 shrink-0">고정: 계좌번호</div>
          <div className="p-1.5 bg-white/[0.02] rounded text-slate-400 shrink-0">가로스크롤 상세항목...</div>
          <div className="p-1.5 bg-emerald-950/80 rounded font-bold text-emerald-400 shrink-0 ml-auto">고정: 잔액 $98k</div>
        </div>
      </div>
    </div>
  );
};

export const VirtualScrollTableDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="flex items-center justify-between text-xs font-bold text-white">
        <span>10만건 가상 윈도잉 (Virtual Window)</span>
        <span className="text-cyan-400 text-[10px] font-mono">60 fps</span>
      </div>
      <div className="h-24 bg-slate-950/70 rounded-xl p-2 border border-white/5 space-y-1 font-mono text-[10px] overflow-hidden">
        <div className="flex justify-between text-slate-300"><span>[Row #84,201]</span><span className="text-emerald-400">0.02ms latency</span></div>
        <div className="flex justify-between text-slate-300"><span>[Row #84,202]</span><span className="text-emerald-400">0.01ms latency</span></div>
        <div className="flex justify-between text-slate-300"><span>[Row #84,203]</span><span className="text-emerald-400">0.02ms latency</span></div>
      </div>
    </div>
  );
};

export const OrderbookTableDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1 font-mono text-[10px]">
      <div className="flex justify-between font-bold text-slate-400 font-sans text-xs mb-1">
        <span>호가창 (Orderbook)</span>
        <span className="text-emerald-400">$68,490</span>
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

export const PricingPlanTableDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl text-[11px]">
      <div className="flex justify-between font-bold text-white mb-2 text-xs">
        <span>요금제 비교표</span>
        <span className="text-violet-400">Pro vs Ent</span>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between p-1 bg-white/[0.02] rounded">
          <span className="text-slate-300">무제한 AI 토큰</span>
          <span className="text-emerald-400 font-bold">✔ Pro 지원</span>
        </div>
        <div className="flex justify-between p-1 bg-white/[0.02] rounded">
          <span className="text-slate-300">전담 SLA 99.99%</span>
          <span className="text-violet-400 font-bold">Enterprise</span>
        </div>
      </div>
    </div>
  );
};

export const AuditLogTableDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl font-mono text-[10px] space-y-1">
      <div className="flex justify-between font-bold text-white font-sans text-xs mb-1">
        <span>보안 감사 로그</span>
        <span className="text-slate-500">Live Audit</span>
      </div>
      <div className="p-1.5 bg-white/[0.02] rounded flex items-center justify-between text-slate-300">
        <span>ADMIN_KEY_ROTATE</span>
        <span className="text-slate-500">14:52:01</span>
      </div>
      <div className="p-1.5 bg-white/[0.02] rounded flex items-center justify-between text-emerald-400">
        <span>POLICY_UPDATE_SUCCESS</span>
        <span className="text-slate-500">14:50:18</span>
      </div>
    </div>
  );
};

export const FileManagerTableDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl text-xs space-y-1.5">
      <div className="flex justify-between font-bold text-white">
        <span>파일 탐색기</span>
        <span className="text-slate-400 text-[10px]">2 Files</span>
      </div>
      <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/[0.02]">
        <span className="flex items-center gap-1.5 text-white"><FileText className="w-3.5 h-3.5 text-violet-400" /> blueprint.json</span>
        <Download className="w-3.5 h-3.5 text-slate-400 hover:text-white cursor-pointer" />
      </div>
    </div>
  );
};

export const InventoryStockTableDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl text-xs space-y-1.5">
      <div className="flex justify-between font-bold text-white">
        <span>물류 재고 관리</span>
        <span className="text-rose-400 text-[10px] font-bold">재고부족 1건</span>
      </div>
      <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/[0.02]">
        <span className="text-white font-mono">SKU-99201 (OLED 패널)</span>
        <span className="text-rose-400 font-bold font-mono">4 EA (경고)</span>
      </div>
    </div>
  );
};

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
    </div>
  );
};
`;

fs.writeFileSync(path.join(renderersDir, 'TableRenderers.tsx'), tableRenderers, 'utf-8');
console.log('Saved TableRenderers.tsx');
