import React, { useState } from 'react';
import { 
  Activity, ArrowUpRight, Sparkles, ArrowRight, Paperclip, Mic,
  Search, ArrowUpDown, CheckSquare, Square, MoreHorizontal,
  BarChart3, TrendingUp, Check, ChevronRight, User, Mail, KeyRound,
  Palette, Cpu, HardDrive, Thermometer, Terminal, Copy, LayoutGrid,
  Zap, Database, Layers, Settings, CheckCircle2, X, Bell, Play
} from 'lucide-react';
import { THEME_PRESETS } from '../data/componentsData';

interface RendererProps {
  componentId: string;
  isCompact?: boolean;
}

export const ComponentRenderer: React.FC<RendererProps> = ({ componentId, isCompact = false }) => {
  // 1. kpi-metric-neon
  if (componentId === 'kpi-metric-neon') {
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
  }

  // 2. ai-prompt-commander
  if (componentId === 'ai-prompt-commander') {
    return <AiPromptCommanderDemo isCompact={isCompact} />;
  }

  // 3. datagrid-realtime-pro
  if (componentId === 'datagrid-realtime-pro') {
    return <DataGridDemo isCompact={isCompact} />;
  }

  // 4. analytics-chart-stream
  if (componentId === 'analytics-chart-stream') {
    return <AnalyticsChartDemo isCompact={isCompact} />;
  }

  // 5. glass-form-stepper
  if (componentId === 'glass-form-stepper') {
    return <GlassFormDemo isCompact={isCompact} />;
  }

  // 6. theme-token-palette
  if (componentId === 'theme-token-palette') {
    return <ThemePaletteDemo />;
  }

  // 7. circular-gauge-monitor
  if (componentId === 'circular-gauge-monitor') {
    return <GaugeMonitorDemo isCompact={isCompact} />;
  }

  // 8. interactive-terminal-card
  if (componentId === 'interactive-terminal-card') {
    return <TerminalCardDemo isCompact={isCompact} />;
  }

  // 9. floating-tab-navigation
  if (componentId === 'floating-tab-navigation') {
    return <FloatingNavDemo />;
  }

  // 10. notification-toast-feed
  if (componentId === 'notification-toast-feed') {
    return <NotificationToastDemo />;
  }

  return (
    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center text-slate-400 text-xs">
      컴포넌트 렌더러 준비중: {componentId}
    </div>
  );
};

/* --- Internal Sub Demos for Interactive Experience --- */

const AiPromptCommanderDemo: React.FC<{ isCompact?: boolean }> = ({ isCompact }) => {
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState<'flash' | 'pro'>('pro');

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-2xl border border-violet-500/30 p-3 shadow-[0_0_30px_rgba(139,92,246,0.15)]">
      <div className="flex items-center gap-2 mb-2 px-1">
        <span className="flex items-center gap-1 text-[11px] font-bold text-violet-400 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> AI Command Center
        </span>
        <div className="ml-auto flex items-center gap-1 bg-slate-800/80 p-0.5 rounded-lg border border-white/5">
          <button 
            onClick={() => setModel('flash')}
            className={`px-2 py-0.5 text-[11px] font-semibold rounded-md transition-all ${model === 'flash' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
          >
            Flash 3.7
          </button>
          <button 
            onClick={() => setModel('pro')}
            className={`px-2 py-0.5 text-[11px] font-semibold rounded-md transition-all ${model === 'pro' ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
          >
            Pro 3.7
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-slate-950/60 rounded-xl p-2 border border-white/5 focus-within:border-violet-500/50 transition-all">
        <textarea
          rows={isCompact ? 1 : 2}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="AI에게 무엇이든 지시하세요..."
          className="flex-1 bg-transparent text-xs text-slate-100 placeholder-slate-500 focus:outline-none resize-none px-1"
        />
        <div className="flex items-center gap-1 self-end">
          <button className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
            <Mic className="w-3.5 h-3.5" />
          </button>
          <button className="p-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold shadow-lg hover:brightness-110 active:scale-95 transition-all">
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const DataGridDemo: React.FC<{ isCompact?: boolean }> = ({ isCompact }) => {
  const [search, setSearch] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>(['1', '2']);

  const rows = [
    { id: '1', service: 'OAuth-Auth-Server', type: 'Microservice', status: 'active', load: '14%', uptime: '99.98%' },
    { id: '2', service: 'Trading-Execution', type: 'WebSocket', status: 'active', load: '48%', uptime: '100%' },
    { id: '3', service: 'Payment-Gateway', type: 'REST API', status: 'warning', load: '82%', uptime: '98.50%' },
    { id: '4', service: 'LLM-Vector-Search', type: 'VectorDB', status: 'active', load: '26%', uptime: '99.95%' },
  ].filter(r => r.service.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="w-full rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="p-3 border-b border-white/10 flex items-center justify-between gap-2">
        <div className="relative flex-1 max-w-xs">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="서비스 필터링..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 bg-slate-950/60 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
          />
        </div>
        <span className="text-[11px] text-slate-400">선택 {selectedIds.length}건</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-white/[0.02] text-slate-400 uppercase text-[10px] font-semibold border-b border-white/10">
            <tr>
              <th className="p-2.5 w-8 text-center">선택</th>
              <th className="p-2.5">서비스명</th>
              <th className="p-2.5">상태</th>
              <th className="p-2.5">CPU</th>
              <th className="p-2.5">가동률</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map(row => (
              <tr key={row.id} className="hover:bg-white/[0.03] transition-colors">
                <td className="p-2.5 text-center">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(row.id)}
                    onChange={() => setSelectedIds(prev => prev.includes(row.id) ? prev.filter(x => x !== row.id) : [...prev, row.id])}
                    className="accent-violet-500 rounded"
                  />
                </td>
                <td className="p-2.5 font-bold text-white flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  {row.service}
                </td>
                <td className="p-2.5">
                  <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold ${row.status === 'active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                    {row.status.toUpperCase()}
                  </span>
                </td>
                <td className="p-2.5 font-mono text-slate-300">{row.load}</td>
                <td className="p-2.5 font-mono text-emerald-400 font-bold">{row.uptime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AnalyticsChartDemo: React.FC<{ isCompact?: boolean }> = ({ isCompact }) => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
          <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
          초당 요청 처리량 (RPS)
        </h4>
        <span className="text-[11px] text-emerald-400 font-bold">+18.4% Peak</span>
      </div>
      <div className="relative h-28 w-full">
        <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="chartGradDemo" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 90 Q 60 30, 120 70 T 240 35 T 340 55 T 400 15 L 400 120 L 0 120 Z"
            fill="url(#chartGradDemo)"
          />
          <path
            d="M 0 90 Q 60 30, 120 70 T 240 35 T 340 55 T 400 15"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="400" cy="15" r="4" className="fill-cyan-400 stroke-slate-900 stroke-2" />
        </svg>
      </div>
    </div>
  );
};

const GlassFormDemo: React.FC<{ isCompact?: boolean }> = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="rounded-2xl bg-slate-900/90 backdrop-blur-2xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        {[1, 2, 3].map(s => (
          <div key={s} className="flex items-center gap-1.5 text-[11px]">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
              {s}
            </div>
            <span className={step >= s ? 'text-slate-200' : 'text-slate-500'}>
              {s === 1 ? '계정' : s === 2 ? '보안키' : '완료'}
            </span>
          </div>
        ))}
      </div>
      {step === 1 && (
        <input
          type="text"
          placeholder="사용자명 입력..."
          className="w-full px-3 py-2 bg-slate-950/60 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 mb-3"
        />
      )}
      {step === 2 && (
        <input
          type="password"
          placeholder="API Key 입력..."
          className="w-full px-3 py-2 bg-slate-950/60 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 mb-3 font-mono"
        />
      )}
      {step === 3 && (
        <div className="text-center py-2 text-xs text-emerald-400 font-bold">
          ✔ 모든 설정이 완료되었습니다!
        </div>
      )}
      <div className="flex justify-between items-center pt-2 border-t border-white/10">
        <button onClick={() => setStep(Math.max(1, step - 1))} className="text-[11px] text-slate-400 hover:text-white">이전</button>
        <button onClick={() => setStep(step < 3 ? step + 1 : 1)} className="px-3 py-1 bg-violet-600 text-white rounded-lg text-xs font-bold">
          {step < 3 ? '다음' : '재시작'}
        </button>
      </div>
    </div>
  );
};

const ThemePaletteDemo: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState('cyber-violet');
  return (
    <div className="rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center gap-1.5 mb-3 text-xs font-bold text-white">
        <Palette className="w-3.5 h-3.5 text-violet-400" />
        테마 프리셋 선택
      </div>
      <div className="grid grid-cols-2 gap-2">
        {THEME_PRESETS.map((t: { id: string; name: string; accent: string }) => (
          <button
            key={t.id}
            onClick={() => setActiveTheme(t.id)}
            className={`p-2 rounded-xl border text-left flex items-center gap-2 ${activeTheme === t.id ? 'border-violet-500 bg-white/[0.08]' : 'border-white/5 bg-white/[0.02]'}`}
          >
            <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: t.accent }} />
            <span className="text-[11px] font-bold text-white">{t.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const GaugeMonitorDemo: React.FC<{ isCompact?: boolean }> = () => {
  return (
    <div className="rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-xs font-bold text-white mb-3">
        <span>CPU / RAM 모니터</span>
        <span className="text-emerald-400 text-[10px]">● 안정</span>
      </div>
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5">
          <div className="text-xl font-extrabold text-violet-400">38%</div>
          <div className="text-[10px] text-slate-400 mt-0.5">CPU 점유율</div>
        </div>
        <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5">
          <div className="text-xl font-extrabold text-cyan-400">62%</div>
          <div className="text-[10px] text-slate-400 mt-0.5">RAM 점유율</div>
        </div>
      </div>
    </div>
  );
};

const TerminalCardDemo: React.FC<{ isCompact?: boolean }> = () => {
  return (
    <div className="rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/15 overflow-hidden font-mono text-[11px] p-3 shadow-2xl">
      <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-white/10 text-slate-400">
        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        <span className="ml-1 text-[10px]">bash - agy agent</span>
      </div>
      <div className="text-emerald-400 font-bold">$ agy --approval-mode=yolo</div>
      <div className="text-cyan-400 text-[10px] mt-1">✔ Blueprint layout generated (0% error)</div>
    </div>
  );
};

const FloatingNavDemo: React.FC = () => {
  const [active, setActive] = useState('overview');
  return (
    <div className="flex justify-center p-2">
      <div className="flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-full border border-white/10">
        {['overview', 'analytics', 'settings'].map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${active === tab ? 'bg-violet-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

const NotificationToastDemo: React.FC = () => {
  return (
    <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 p-3.5 shadow-2xl flex items-center gap-3">
      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      <div className="flex-1 text-xs">
        <div className="font-bold text-white">블루프린트 API 배포 완료</div>
        <div className="text-slate-400 text-[10px]">엔드포인트: /api/blueprints/live</div>
      </div>
    </div>
  );
};
