import { ComponentItem } from '../types';

export const THEME_PRESETS = [

  { id: 'cyber-violet', name: 'Cyber Violet', bg: '#08090f', accent: '#8b5cf6', sub: '#d946ef' },
  { id: 'neon-emerald', name: 'Neon Emerald', bg: '#060d0a', accent: '#10b981', sub: '#06b6d4' },
  { id: 'amber-gold', name: 'Amber Luxury', bg: '#0d0a06', accent: '#f59e0b', sub: '#ef4444' },
  { id: 'deep-slate', name: 'Deep Minimal', bg: '#0f172a', accent: '#3b82f6', sub: '#6366f1' },
];

export const CATEGORIES: { id: string; name: string; icon: string; count?: number }[] = [

  { id: 'all', name: '전체 컴포넌트', icon: '✨' },
  { id: 'dashboards', name: '대시보드 & 메트릭', icon: '📊' },
  { id: 'tables', name: '데이터 표 & 그리드', icon: '📑' },
  { id: 'charts', name: '시각화 & 차트', icon: '📈' },
  { id: 'forms', name: '스마트 폼 & 입력', icon: '📝' },
  { id: 'ai-widgets', name: 'AI 네이티브 위젯', icon: '🤖' },
  { id: 'stats', name: 'KPI & 상태 카드', icon: '⚡' },
  { id: 'navigation', name: '네비게이션 & 탭', icon: '🧭' },
  { id: 'feedback', name: '모달 & 알림 피드백', icon: '🔔' },
  { id: 'themes', name: '테마 & 디자인 토큰', icon: '🎨' },
];

export const COMPONENTS_DATA: ComponentItem[] = [
  {
    id: 'kpi-metric-neon',
    name: '2026 네온 글래스 KPI 지표 카드',
    category: 'stats',
    tags: ['kpi', 'metric', 'stat', 'card', 'neon', 'glassmorphism', '지표', '통계'],
    description: '실시간 변동률, 스파크라인 트렌드, 네온 글로우 테두리가 적용된 현대적 엔터프라이즈 KPI 카드.',
    complexity: 'Simple',
    dependencies: ['lucide-react', 'clsx'],
    previewType: 'kpi-metric-neon',
    fullSourceCode: `import React from 'react';
import { TrendingUp, ArrowUpRight, Activity } from 'lucide-react';

interface MetricCardProps {
  title?: string;
  value?: string;
  change?: string;
  trend?: 'up' | 'down';
  period?: string;
}

export const NeonMetricCard: React.FC<MetricCardProps> = ({
  title = "실시간 활성 유저 (MAU)",
  value = "128,490",
  change = "+14.2%",
  trend = "up",
  period = "지난달 대비"
}) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:border-violet-500/50 transition-all duration-300">
      <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all duration-500" />
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">{title}</span>
        <div className="p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
          <Activity className="w-4 h-4" />
        </div>
      </div>
      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-3xl font-extrabold text-white tracking-tight">{value}</span>
        <span className="inline-flex items-center text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
          <ArrowUpRight className="w-3 h-3 mr-0.5" />
          {change}
        </span>
      </div>
      <p className="text-xs text-slate-500 font-medium">{period}</p>
    </div>
  );
};`,
    aiPromptGuidance: `이 컴포넌트는 현대적인 글래스모피즘 KPI 지표 카드입니다. React 19와 Tailwind CSS로 구현하며, Lucide 아이콘을 사용합니다. props로 title, value, change, trend, period를 받도록 구성하세요.`
  },
  {
    id: 'ai-prompt-commander',
    name: 'AI 프롬프트 인라인 커맨더 바',
    category: 'ai-widgets',
    tags: ['ai', 'prompt', 'input', 'chat', 'commander', 'floating', '프롬프트', '인라인'],
    description: '단축키(Ctrl+K), 모드 선택(Fast/Pro), 첨부파일, 음성 입력이 통합된 2026 AI 에이전트 커맨드 바.',
    complexity: 'Advanced',
    dependencies: ['lucide-react'],
    previewType: 'ai-prompt-commander',
    fullSourceCode: `import React, { useState } from 'react';
import { Sparkles, ArrowRight, Paperclip, Mic, SlidersHorizontal } from 'lucide-react';

export const AiPromptCommander: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState<'flash' | 'pro'>('pro');

  return (
    <div className="w-full max-w-3xl mx-auto p-2.5 rounded-2xl bg-slate-900/90 backdrop-blur-2xl border border-violet-500/30 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
      <div className="flex items-center gap-2 mb-2 px-2">
        <span className="flex items-center gap-1 text-[11px] font-bold text-violet-400 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> AI Command Center
        </span>
        <div className="ml-auto flex items-center gap-1.5 bg-slate-800/80 p-0.5 rounded-lg border border-white/5">
          <button 
            onClick={() => setModel('flash')}
            className={\`px-2.5 py-1 text-xs font-semibold rounded-md transition-all \${model === 'flash' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}\`}
          >
            Flash 3.7
          </button>
          <button 
            onClick={() => setModel('pro')}
            className={\`px-2.5 py-1 text-xs font-semibold rounded-md transition-all \${model === 'pro' ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}\`}
          >
            Pro 3.7
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-slate-950/60 rounded-xl p-2 border border-white/5 focus-within:border-violet-500/50 transition-all">
        <textarea
          rows={2}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="AI에게 무엇이든 지시하세요... (Ctrl + Enter로 실행)"
          className="flex-1 bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none resize-none px-2 py-1"
        />
        <div className="flex items-center gap-1 self-end">
          <button className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
            <Paperclip className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
            <Mic className="w-4 h-4" />
          </button>
          <button className="p-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold shadow-lg hover:brightness-110 active:scale-95 transition-all">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};`,
    aiPromptGuidance: `이 컴포넌트는 상단에 모델 셀렉터, 하단에 텍스트에어리어 및 액션 버튼(첨부, 음성, 전송)이 포함된 AI 프롬프트 입력 바입니다. React 상태와 함께 Enter 키 전송 및 Ctrl+Enter 개행 처리를 포함해 구현하세요.`
  },
  {
    id: 'datagrid-realtime-pro',
    name: '실시간 인터랙티브 데이터 그리드 (정렬·검색·뱃지)',
    category: 'tables',
    tags: ['table', 'grid', 'datagrid', 'sort', 'filter', 'badge', '표', '그리드', '데이터'],
    description: '컬럼별 정렬, 실시간 키워드 필터링, 상태 뱃지, 체크박스 다중 선택이 지원되는 고성능 데이터 표.',
    complexity: 'Advanced',
    dependencies: ['lucide-react'],
    previewType: 'datagrid-realtime-pro',
    fullSourceCode: `import React, { useState } from 'react';
import { Search, ArrowUpDown, ChevronDown, CheckSquare, Square, MoreHorizontal, ShieldCheck, AlertCircle } from 'lucide-react';

interface RowData {
  id: string;
  service: string;
  type: string;
  status: 'active' | 'warning' | 'idle';
  load: string;
  uptime: string;
}

const SAMPLE_DATA: RowData[] = [
  { id: '1', service: 'Auth-OAuth-Server', type: 'Microservice', status: 'active', load: '14%', uptime: '99.98%' },
  { id: '2', service: 'Trading-Execution-Engine', type: 'WebSocket', status: 'active', load: '48%', uptime: '100%' },
  { id: '3', service: 'Payment-Gateway-Proxy', type: 'REST API', status: 'warning', load: '82%', uptime: '98.50%' },
  { id: '4', service: 'LLM-Vector-Search-DB', type: 'VectorDB', status: 'active', load: '26%', uptime: '99.95%' },
  { id: '5', service: 'Background-Sync-Worker', type: 'Cron Job', status: 'idle', load: '2%', uptime: '99.40%' },
];

export const RealtimeDataGrid: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [sortField, setSortField] = useState<keyof RowData>('service');
  const [sortAsc, setSortAsc] = useState(true);

  const filtered = SAMPLE_DATA
    .filter(row => row.service.toLowerCase().includes(search.toLowerCase()) || row.type.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];
      return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
    });

  const toggleSelectAll = () => {
    if (selectedIds.length === filtered.length) setSelectedIds([]);
    else setSelectedIds(filtered.map(r => r.id));
  };

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="w-full rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="p-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="서비스명, 유형 검색..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-950/60 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
          />
        </div>
        <div className="text-xs text-slate-400">
          선택됨: <span className="font-bold text-violet-400">{selectedIds.length}</span> / {filtered.length}건
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-white/[0.02] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/10">
            <tr>
              <th className="p-3.5 w-10 text-center">
                <button onClick={toggleSelectAll} className="text-slate-400 hover:text-white">
                  {selectedIds.length === filtered.length && filtered.length > 0 ? <CheckSquare className="w-4 h-4 text-violet-400" /> : <Square className="w-4 h-4" />}
                </button>
              </th>
              <th className="p-3.5 cursor-pointer hover:text-white" onClick={() => { setSortField('service'); setSortAsc(!sortAsc); }}>
                <div className="flex items-center gap-1">서비스명 <ArrowUpDown className="w-3 h-3" /></div>
              </th>
              <th className="p-3.5">유형</th>
              <th className="p-3.5">상태</th>
              <th className="p-3.5">CPU 로드</th>
              <th className="p-3.5">가동률 (Uptime)</th>
              <th className="p-3.5 text-right">액션</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filtered.map(row => (
              <tr key={row.id} className="hover:bg-white/[0.03] transition-colors">
                <td className="p-3.5 text-center">
                  <button onClick={() => toggleSelect(row.id)} className="text-slate-400 hover:text-white">
                    {selectedIds.includes(row.id) ? <CheckSquare className="w-4 h-4 text-violet-400" /> : <Square className="w-4 h-4" />}
                  </button>
                </td>
                <td className="p-3.5 font-bold text-white flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
                  {row.service}
                </td>
                <td className="p-3.5 text-slate-400">{row.type}</td>
                <td className="p-3.5">
                  <span className={\`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border \${
                    row.status === 'active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                    row.status === 'warning' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                    'bg-slate-500/10 text-slate-400 border-slate-500/20'
                  }\`}>
                    {row.status.toUpperCase()}
                  </span>
                </td>
                <td className="p-3.5 font-mono">{row.load}</td>
                <td className="p-3.5 font-mono text-emerald-400 font-semibold">{row.uptime}</td>
                <td className="p-3.5 text-right">
                  <button className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};`,
    aiPromptGuidance: `이 컴포넌트는 상용 데이터 그리드 테이블입니다. 검색 필터, 컬럼 정렬(Sort), 체크박스 전체선택/개별선택, 상태 뱃지, 반응형 가로스크롤을 포함하여 구현하세요.`
  },
  {
    id: 'analytics-chart-stream',
    name: '실시간 스트리밍 시각화 차트 패널',
    category: 'charts',
    tags: ['chart', 'analytics', 'stream', 'graph', 'svg', '차트', '시각화', '그래프'],
    description: 'SVG 기반 부드러운 그라데이션 영역 차트와 시간대별 피크 수치 툴팁을 제공하는 초경량 시각화.',
    complexity: 'Medium',
    dependencies: ['lucide-react'],
    previewType: 'analytics-chart-stream',
    fullSourceCode: `import React, { useState } from 'react';
import { BarChart3, TrendingUp, Calendar } from 'lucide-react';

export const StreamAnalyticsChart: React.FC = () => {
  const [range, setRange] = useState<'24h' | '7d' | '30d'>('7d');

  return (
    <div className="w-full rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 p-5 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-cyan-400" />
            초당 요청 처리량 (Throughput RPS)
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">실시간 네트워크 패킷 및 API 호출 빈도</p>
        </div>
        <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-white/5">
          {(['24h', '7d', '30d'] as const).map(t => (
            <button
              key={t}
              onClick={() => setRange(t)}
              className={\`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all \${range === t ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-white'}\`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="relative h-44 w-full">
        <svg viewBox="0 0 500 150" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 110 Q 70 40, 140 85 T 280 45 T 420 70 T 500 20 L 500 150 L 0 150 Z"
            fill="url(#chartGrad)"
          />
          <path
            d="M 0 110 Q 70 40, 140 85 T 280 45 T 420 70 T 500 20"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Points */}
          <circle cx="280" cy="45" r="5" className="fill-cyan-400 stroke-slate-900 stroke-2" />
          <circle cx="500" cy="20" r="5" className="fill-cyan-400 stroke-slate-900 stroke-2" />
        </svg>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs text-slate-400">
        <span className="flex items-center gap-1 font-semibold text-emerald-400">
          <TrendingUp className="w-3.5 h-3.5" /> 최고 처리량: 4,820 req/s
        </span>
        <span>평균 레이턴시: <strong className="text-white font-mono">14ms</strong></span>
      </div>
    </div>
  );
};`,
    aiPromptGuidance: `이 컴포넌트는 SVG 영역 그라데이션 차트가 포함된 분석 패널입니다. Recharts 라이브러리를 사용하거나 순수 SVG로 렌더링하도록 작성하세요.`
  },
  {
    id: 'glass-form-stepper',
    name: '스마트 글래스 멀티스텝 폼 & 유효성 검증',
    category: 'forms',
    tags: ['form', 'input', 'stepper', 'validation', 'glass', '폼', '입력', '스텝'],
    description: '스텝 진행도 인디케이터, 실시간 인풋 포커스 링, 글래스모피즘 입력 필드로 구성된 회원/설정 폼.',
    complexity: 'Medium',
    dependencies: ['lucide-react'],
    previewType: 'glass-form-stepper',
    fullSourceCode: `import React, { useState } from 'react';
import { Check, ChevronRight, User, Mail, Lock, KeyRound } from 'lucide-react';

export const GlassFormStepper: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', apiKey: '' });

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl bg-slate-900/90 backdrop-blur-2xl border border-white/10 p-6 shadow-2xl">
      {/* Stepper Header */}
      <div className="flex items-center justify-between mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={\`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all \${
              step >= s ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg' : 'bg-slate-800 text-slate-500'
            }\`}>
              {step > s ? <Check className="w-3.5 h-3.5" /> : s}
            </div>
            <span className={\`text-xs font-semibold \${step >= s ? 'text-slate-200' : 'text-slate-500'}\`}>
              {s === 1 ? '기본 정보' : s === 2 ? 'API 키 발급' : '완료'}
            </span>
            {s < 3 && <div className="w-12 h-0.5 bg-white/10 mx-1" />}
          </div>
        ))}
      </div>

      {/* Form Content */}
      <div className="space-y-4">
        {step === 1 && (
          <>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">사용자 닉네임</label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="예: kw_master"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-950/60 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">이메일 주소</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-950/60 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
            </div>
          </>
        )}
        {step === 2 && (
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">AI Engine API Token</label>
            <div className="relative">
              <KeyRound className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                placeholder="sk-ant-api03-..."
                value={formData.apiKey}
                onChange={(e) => setFormData({ ...formData, apiKey: e.target.value })}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-950/60 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 font-mono transition-colors"
              />
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-500/30">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white mb-1">설정이 완료되었습니다!</h4>
            <p className="text-xs text-slate-400">등록된 프로필과 API 키로 서비스를 이용할 수 있습니다.</p>
          </div>
        )}
      </div>

      {/* Footer Buttons */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
        <button
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
          className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-30 transition-colors"
        >
          이전
        </button>
        {step < 3 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all"
          >
            다음 단계 <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => setStep(1)}
            className="px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-lg hover:bg-emerald-500 transition-colors"
          >
            처음으로
          </button>
        )}
      </div>
    </div>
  );
};`,
    aiPromptGuidance: `이 컴포넌트는 다단계 스텝퍼가 적용된 멀티스텝 폼입니다. 유효성 검사 상태 및 다음 단계 이동 애니메이션을 포함하여 구현하세요.`
  },
  {
    id: 'theme-token-palette',
    name: '2026 하이엔드 테마 & 디자인 토큰 스위처',
    category: 'themes',
    tags: ['theme', 'token', 'palette', 'color', 'dark', 'light', '테마', '색상', '토큰'],
    description: 'Cyberpunk Purple, Emerald Finance, Neon Cyber 등 즉시 적용 가능한 프리셋 디자인 토큰 세트.',
    complexity: 'Simple',
    dependencies: ['lucide-react'],
    previewType: 'theme-token-palette',
    fullSourceCode: `import React, { useState } from 'react';
import { Palette, Check } from 'lucide-react';

export const THEME_PRESETS = [
  { id: 'cyber-violet', name: 'Cyber Violet', bg: '#08090f', accent: '#8b5cf6', sub: '#d946ef' },
  { id: 'neon-emerald', name: 'Neon Emerald', bg: '#060d0a', accent: '#10b981', sub: '#06b6d4' },
  { id: 'amber-gold', name: 'Amber Luxury', bg: '#0d0a06', accent: '#f59e0b', sub: '#ef4444' },
  { id: 'deep-slate', name: 'Deep Minimal', bg: '#0f172a', accent: '#3b82f6', sub: '#6366f1' },
];

export const ThemeTokenPalette: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState('cyber-violet');

  return (
    <div className="rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 p-5 shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <Palette className="w-4 h-4 text-violet-400" />
        <h4 className="text-sm font-bold text-white">디자인 테마 토큰 프리셋</h4>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {THEME_PRESETS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTheme(t.id)}
            className={\`p-3 rounded-xl border text-left transition-all relative \${
              activeTheme === t.id ? 'border-violet-500 bg-white/[0.06] shadow-lg' : 'border-white/5 bg-white/[0.02] hover:border-white/20'
            }\`}
          >
            {activeTheme === t.id && (
              <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-violet-500 text-white flex items-center justify-center text-[10px]">
                <Check className="w-2.5 h-2.5" />
              </div>
            )}
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: t.accent }} />
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: t.sub }} />
            </div>
            <div className="text-xs font-bold text-white">{t.name}</div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">{t.accent}</div>
          </button>
        ))}
      </div>
    </div>
  );
};`,
    aiPromptGuidance: `이 컴포넌트는 CSS 변수 기반 디자인 토큰 스위처입니다. 클릭 시 :root 의 --accent, --bg 변수를 동적으로 교체할 수 있도록 구현하세요.`
  },
  {
    id: 'circular-gauge-monitor',
    name: '서버 하드웨어 원형 게이지 & 부하 모니터',
    category: 'stats',
    tags: ['gauge', 'circular', 'cpu', 'memory', 'hardware', 'server', '게이지', '모니터링'],
    description: 'CPU 부하, RAM 점유, GPU 온도를 한눈에 보여주는 원형 SVG 프로그레스 게이지.',
    complexity: 'Medium',
    dependencies: ['lucide-react'],
    previewType: 'circular-gauge-monitor',
    fullSourceCode: `import React from 'react';
import { Cpu, HardDrive, Thermometer } from 'lucide-react';

interface CircularGaugeProps {
  label: string;
  percent: number;
  icon: React.ReactNode;
  color: string;
  subText: string;
}

const GaugeItem: React.FC<CircularGaugeProps> = ({ label, percent, icon, color, subText }) => {
  const radius = 36;
  const circ = 2 * Math.PI * radius;
  const strokeDashoffset = circ - (percent / 100) * circ;

  return (
    <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5">
      <div className="relative w-24 h-24 mb-2 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90">
          <circle cx="48" cy="48" r={radius} stroke="rgba(255,255,255,0.06)" strokeWidth="6" fill="transparent" />
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke={color}
            strokeWidth="6"
            strokeDasharray={circ}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center text-center">
          <span className="text-base font-extrabold text-white">{percent}%</span>
          <span className="text-[10px] text-slate-500 font-mono">{subText}</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
        {icon} {label}
      </div>
    </div>
  );
};

export const HardwareMonitorPanel: React.FC = () => {
  return (
    <div className="rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 p-5 shadow-2xl">
      <h4 className="text-sm font-bold text-white mb-4 flex items-center justify-between">
        <span>시스템 하드웨어 텔레메트리</span>
        <span className="text-xs text-emerald-400 flex items-center gap-1">● 정상 가동중</span>
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <GaugeItem label="CPU 점유율" percent={38} icon={<Cpu className="w-3.5 h-3.5 text-violet-400" />} color="#8b5cf6" subText="16 Cores" />
        <GaugeItem label="RAM 사용량" percent={62} icon={<HardDrive className="w-3.5 h-3.5 text-cyan-400" />} color="#06b6d4" subText="18.6 / 30 GB" />
        <GaugeItem label="코어 온도" percent={48} icon={<Thermometer className="w-3.5 h-3.5 text-amber-400" />} color="#f59e0b" subText="48.0 °C" />
      </div>
    </div>
  );
};`,
    aiPromptGuidance: `이 컴포넌트는 원형 SVG 게이지를 활용한 하드웨어 모니터링 대시보드 카드입니다. 동적인 퍼센티지 바인딩과 strokeDashoffset 계산이 포함되도록 작성하세요.`
  },
  {
    id: 'interactive-terminal-card',
    name: '개발자용 임베디드 웹 터미널 & 로그 스트림',
    category: 'ai-widgets',
    tags: ['terminal', 'console', 'cli', 'log', 'developer', '터미널', '콘솔', '로그'],
    description: '맥 OS 스타일의 윈도우 헤더, 실시간 타이핑 애니메이션 및 명령어 복사 기능이 있는 터미널 컴포넌트.',
    complexity: 'Medium',
    dependencies: ['lucide-react'],
    previewType: 'interactive-terminal-card',
    fullSourceCode: `import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

export const EmbeddedWebTerminal: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const command = 'agy --approval-mode=yolo --prompt "Build Next.js Dashboard"';

  const copyCmd = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/15 overflow-hidden shadow-2xl font-mono text-xs">
      <div className="bg-white/[0.04] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-slate-400 font-sans font-medium text-[11px] flex items-center gap-1">
            <Terminal className="w-3 h-3 text-violet-400" /> bash — 80x24
          </span>
        </div>
        <button
          onClick={copyCmd}
          className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white px-2 py-0.5 rounded hover:bg-white/5 transition-colors"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          {copied ? '복사됨' : '복사'}
        </button>
      </div>
      <div className="p-4 space-y-2 text-slate-300">
        <p className="text-slate-500"># Antigravity 2.0 AI Pair Programming Agent</p>
        <div className="flex items-center gap-2">
          <span className="text-emerald-400">kw@workspace</span>
          <span className="text-violet-400">~/app</span>
          <span className="text-slate-400">$</span>
          <span className="text-white font-bold">{command}</span>
        </div>
        <div className="text-cyan-400 pl-4 border-l border-cyan-500/30">
          ▶ [Planner] Analyzing UI design blueprint tokens...<br />
          ▶ [Coder] Generating zero-error React 19 components...<br />
          ✔ Build succeeded in 1.42s (100% test pass)
        </div>
      </div>
    </div>
  );
};`,
    aiPromptGuidance: `이 컴포넌트는 macOS 스타일의 다크 터미널 카드입니다. 상단 신호등 버튼 및 명령어 복사 액션, 컬러풀한 터미널 출력 라인을 포함하여 구현하세요.`
  },
  {
    id: 'floating-tab-navigation',
    name: '2026 플로팅 캡슐 탭 네비게이션',
    category: 'navigation',
    tags: ['nav', 'navigation', 'tab', 'floating', 'capsule', '탭', '네비게이션', '캡슐'],
    description: '스마트 활성 표시 인디케이터, 글래스모피즘 플로팅 디자인의 탑/서브 탭 컨트롤.',
    complexity: 'Simple',
    dependencies: ['lucide-react'],
    previewType: 'floating-tab-navigation',
    fullSourceCode: `import React, { useState } from 'react';
import { LayoutGrid, Layers, Settings, Zap, Database } from 'lucide-react';

const TABS = [
  { id: 'overview', label: '개요 (Overview)', icon: LayoutGrid },
  { id: 'analytics', label: '분석 (Analytics)', icon: Zap },
  { id: 'database', label: '데이터베이스', icon: Database },
  { id: 'components', label: '컴포넌트 풀', icon: Layers },
  { id: 'settings', label: '환경설정', icon: Settings },
];

export const FloatingCapsuleNav: React.FC = () => {
  const [active, setActive] = useState('overview');

  return (
    <div className="flex items-center justify-center p-2">
      <nav className="flex items-center gap-1.5 p-1.5 rounded-full bg-slate-900/90 backdrop-blur-2xl border border-white/10 shadow-2xl">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={\`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all \${
                isActive
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_0_16px_rgba(139,92,246,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }\`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};`,
    aiPromptGuidance: `이 컴포넌트는 부드러운 캡슐 형태의 플로팅 탭 네비게이션입니다. 선택된 탭에 그라데이션 활성화 효과와 그림자가 적용되도록 구현하세요.`
  },
  {
    id: 'notification-toast-feed',
    name: '인터랙티브 알림 피드 & 토스트 카드',
    category: 'feedback',
    tags: ['notification', 'toast', 'feedback', 'alert', 'modal', '알림', '피드백', '토스트'],
    description: '성공/경고/정보/에러 상태별 색상 및 실시간 알림 카운터, 닫기 인터랙션.',
    complexity: 'Simple',
    dependencies: ['lucide-react'],
    previewType: 'notification-toast-feed',
    fullSourceCode: `import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, X, Bell } from 'lucide-react';

export const NotificationToastFeed: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return (
      <button
        onClick={() => setVisible(true)}
        className="px-4 py-2 rounded-xl bg-violet-600 text-white text-xs font-bold shadow-lg"
      >
        알림 토스트 다시 열기
      </button>
    );
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 p-4 shadow-2xl flex items-start gap-3 relative">
      <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <div className="flex-1 pr-6">
        <h5 className="text-xs font-bold text-white mb-0.5">AI 블루프린트 API 배포 완료</h5>
        <p className="text-xs text-slate-400 leading-relaxed">
          선택하신 4개의 컴포넌트 청사진이 <code className="text-emerald-400 bg-emerald-950/50 px-1 py-0.5 rounded font-mono">/api/blueprints/bp_live</code> 로 성공적으로 발행되었습니다.
        </p>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute top-3 right-3 text-slate-500 hover:text-white p-1 rounded-lg hover:bg-white/5"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};`,
    aiPromptGuidance: `이 컴포넌트는 성공/에러 피드백을 전달하는 글래스모피즘 토스트 카드입니다. 닫기 버튼 및 애니메이션 효과를 구현하세요.`
  }
];

