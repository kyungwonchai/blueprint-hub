import React, { useState } from 'react';
import { 
  Sparkles, Terminal, Copy, Check, Mic, ArrowRight, ShieldCheck,
  CreditCard, Calendar, Sliders, FileCode, Smartphone, MapPin, 
  ToggleLeft, ToggleRight, Star, Volume2, Key, Cpu, UploadCloud,
  Layers, Smile, Frown, Meh, Bot, Play, Search
} from 'lucide-react';

// 1. Glass Stepper
export const GlassStepperDemo: React.FC = () => {
  const [step, setStep] = useState(2);
  const titles = ['1. 클러스터 환경', '2. 환경변수 주입', '3. 배포 승인'];
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-3">
      <div className="flex items-center justify-between text-xs font-bold text-white">
        <span>글래스 스텝 위저드</span>
        <span className="text-violet-400">Step {step} / 3</span>
      </div>
      <div className="flex gap-2">
        {[1, 2, 3].map(s => (
          <div key={s} onClick={() => setStep(s)} className={`flex-1 h-2 rounded-full cursor-pointer transition-all ${s <= step ? 'bg-violet-500 shadow-[0_0_8px_#8b5cf6]' : 'bg-white/10'}`} />
        ))}
      </div>
      <div className="flex justify-between items-center bg-slate-950/60 p-2.5 rounded-xl border border-white/5">
        <span className="text-xs font-bold text-slate-200">{titles[step - 1]}</span>
        <button onClick={() => setStep(s => s === 3 ? 1 : s + 1)} className="px-2 py-0.5 rounded bg-violet-600 hover:bg-violet-500 text-white text-[10px] font-bold">다음</button>
      </div>
    </div>
  );
};

// 2. Drag Drop Upload Zone
export const DragDropUploadDemo: React.FC = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const startUpload = () => {
    setUploading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); setUploading(false); return 100; }
        return p + 25;
      });
    }, 200);
  };

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>스마트 파일 업로더</span>
        <span className="text-cyan-400 text-[10px]">{uploading ? `${progress}%` : '대기중'}</span>
      </div>
      <div onClick={startUpload} className="border-2 border-dashed border-white/20 hover:border-violet-400 rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer bg-slate-950/40 hover:bg-slate-950/60 transition-all text-center">
        <UploadCloud className="w-6 h-6 text-violet-400 mb-1" />
        <span className="text-xs font-bold text-white">클릭하여 파일 업로드 시연</span>
        <span className="text-[10px] text-slate-400">PDF, JSON, PNG (최대 50MB)</span>
      </div>
      {uploading && (
        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
          <div className="bg-gradient-to-r from-violet-500 to-cyan-400 h-full transition-all duration-200" style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
};

// 3. Tag Combobox
export const TagComboboxDemo: React.FC = () => {
  const [tags, setTags] = useState(['React19', 'TypeScript', 'Tailwind']);
  const removeTag = (t: string) => setTags(tags.filter(x => x !== t));
  const addTag = () => {
    const list = ['Next.js', 'Vite', 'GraphQL', 'Prisma', 'Docker'];
    const next = list.find(x => !tags.includes(x));
    if (next) setTags([...tags, next]);
  };
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>다중 태그 셀렉터</span>
        <button onClick={addTag} className="text-violet-400 text-[10px] font-bold">+ 태그추가</button>
      </div>
      <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-slate-950/60 border border-white/10 min-h-[38px] items-center">
        {tags.map(t => (
          <span key={t} onClick={() => removeTag(t)} className="px-2 py-0.5 rounded-md bg-violet-600/30 border border-violet-500/40 text-violet-200 text-[10px] font-bold flex items-center gap-1 cursor-pointer hover:bg-rose-900/40 hover:text-rose-300">
            #{t} ✕
          </span>
        ))}
      </div>
    </div>
  );
};

// 4. 3D Credit Card
export const CreditCard3DDemo: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>3D 카드 결제 (Click 회전)</span>
        <button onClick={() => setFlipped(!flipped)} className="text-[10px] text-cyan-400 font-bold">Flip 3D</button>
      </div>
      <div onClick={() => setFlipped(!flipped)} className="cursor-pointer rounded-xl p-3.5 bg-gradient-to-tr from-violet-900 via-indigo-900 to-fuchsia-900 border border-white/20 text-white shadow-xl space-y-3 transition-transform hover:scale-[1.02]">
        <div className="flex justify-between items-center"><span className="text-[10px] tracking-widest uppercase font-mono">Platinum Corp</span><CreditCard className="w-4 h-4 text-violet-300" /></div>
        <div className="font-mono text-sm tracking-widest">{flipped ? 'CVC: 942 | PIN: ••••' : '•••• •••• •••• 4920'}</div>
        <div className="flex justify-between text-[10px] text-slate-300"><span>KW DEEP MIND</span><span>12/29</span></div>
      </div>
    </div>
  );
};

// 5. Password Meter
export const PasswordMeterDemo: React.FC = () => {
  const [pw, setPw] = useState('Password!2026');
  const len = pw.length;
  const isStrong = len >= 10;
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>비밀번호 강도 측정</span>
        <span className={`text-[10px] font-bold ${isStrong ? 'text-emerald-400' : 'text-amber-400'}`}>
          {isStrong ? '강력함 (100%)' : '보통 (50%)'}
        </span>
      </div>
      <input
        type="text"
        value={pw}
        onChange={e => setPw(e.target.value)}
        className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white font-mono"
      />
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden flex gap-1">
        <div className={`flex-1 rounded-full ${len >= 4 ? 'bg-emerald-500' : 'bg-slate-700'}`} />
        <div className={`flex-1 rounded-full ${len >= 8 ? 'bg-emerald-500' : 'bg-slate-700'}`} />
        <div className={`flex-1 rounded-full ${len >= 10 ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-slate-700'}`} />
      </div>
    </div>
  );
};

// 6. Date Range Picker
export const DateRangePickerDemo: React.FC = () => {
  const [range, setRange] = useState('7d');
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>기간 설정 캘린더</span>
        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
      </div>
      <div className="grid grid-cols-3 gap-1">
        {[
          { id: 'today', label: '오늘' },
          { id: '7d', label: '최근 7일' },
          { id: '30d', label: '이번 달' }
        ].map(r => (
          <button
            key={r.id}
            onClick={() => setRange(r.id)}
            className={`py-1.5 rounded-lg text-[10px] font-bold transition-all ${
              range === r.id ? 'bg-violet-600 text-white shadow-md' : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>
    </div>
  );
};

// 7. Dual Range Slider
export const DualRangeSliderDemo: React.FC = () => {
  const [val, setVal] = useState(65);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-3">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>가격 범위 듀얼 슬라이더</span>
        <span className="text-violet-400 font-mono text-[11px]">$200 ~ ${val * 20}</span>
      </div>
      <input
        type="range"
        min="10"
        max="100"
        value={val}
        onChange={e => setVal(Number(e.target.value))}
        className="w-full h-1.5 bg-slate-800 rounded-lg accent-violet-500 cursor-pointer"
      />
    </div>
  );
};

// 8. Markdown Editor
export const MarkdownEditorDemo: React.FC = () => {
  const [text, setText] = useState('# Blueprint 2026\\n- [x] AI Native Specs');
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span className="flex items-center gap-1"><FileCode className="w-3.5 h-3.5 text-violet-400" /> 마크다운 분할 에디터</span>
        <span className="text-[10px] text-emerald-400">Live Preview</span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
        <textarea
          rows={3}
          value={text}
          onChange={e => setText(e.target.value)}
          className="p-2 rounded-xl bg-slate-950 text-slate-300 border border-white/10 focus:outline-none resize-none"
        />
        <div className="p-2 rounded-xl bg-violet-950/30 border border-violet-500/20 text-violet-200 font-sans font-bold whitespace-pre-wrap">
          {text}
        </div>
      </div>
    </div>
  );
};

// 9. OTP Verify
export const OtpVerifyDemo: React.FC = () => {
  const [otp, setOtp] = useState(['5', '8', '2', '', '', '']);
  const handleInput = (idx: number, val: string) => {
    const next = [...otp];
    next[idx] = val.slice(-1);
    setOtp(next);
  };
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>6자리 OTP 인증번호</span>
        <span className="text-rose-400 font-mono text-[10px]">02:45</span>
      </div>
      <div className="flex justify-between gap-1.5">
        {otp.map((v, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            value={v}
            onChange={e => handleInput(i, e.target.value)}
            className={`w-8 h-9 rounded-xl border text-center font-mono font-bold text-sm focus:outline-none ${
              v ? 'border-violet-500 text-white bg-violet-500/10 shadow-[0_0_8px_#8b5cf6]' : 'border-white/10 text-slate-600 bg-slate-950/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// 10. Address Smart Search
export const AddressSmartSearchDemo: React.FC = () => {
  const [query, setQuery] = useState('테헤란로');
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>도로명 주소 스마트 검색</span>
        <MapPin className="w-3.5 h-3.5 text-rose-400" />
      </div>
      <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-950 border border-white/10">
        <Search className="w-3 h-3 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="bg-transparent text-xs text-white focus:outline-none w-full font-bold"
        />
      </div>
      <div className="p-2 rounded-lg bg-white/[0.02] text-[11px] text-slate-300">
        <span className="font-bold text-violet-300">서울특별시 강남구 테헤란로 152</span>
        <span className="text-[10px] text-slate-500 block">우편번호: 06236</span>
      </div>
    </div>
  );
};

// 11. RBAC Permission Matrix
export const PermissionMatrixDemo: React.FC = () => {
  const [perms, setPerms] = useState({ read: true, write: true, delete: false });
  const toggle = (k: keyof typeof perms) => setPerms(p => ({ ...p, [k]: !p[k] }));
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>RBAC 권한 토글 매트릭스</span>
        <span className="text-violet-400 text-[10px]">DevOps Role</span>
      </div>
      <div className="space-y-1 text-xs">
        {Object.entries(perms).map(([k, v]) => (
          <div key={k} onClick={() => toggle(k as any)} className="flex items-center justify-between p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer">
            <span className="capitalize text-slate-300 font-mono">{k} 권한</span>
            <span className={`text-xs font-bold ${v ? 'text-emerald-400' : 'text-slate-600'}`}>
              {v ? 'ON ●' : 'OFF ○'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// 12. NPS Survey Rating
export const SurveyNpsDemo: React.FC = () => {
  const [score, setScore] = useState(9);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>순고객추천지수 (NPS 0~10)</span>
        <span className="text-amber-400 font-bold font-mono">{score}점 (추천자)</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 11 }, (_, i) => (
          <button
            key={i}
            onClick={() => setScore(i)}
            className={`flex-1 py-1 rounded text-[10px] font-mono font-bold transition-all ${
              score === i ? 'bg-amber-500 text-black scale-110 shadow-lg' : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            {i}
          </button>
        ))}
      </div>
    </div>
  );
};

// AI WIDGETS

// 1. AI Prompt Commander
export const AiPromptCommanderDemo: React.FC = () => {
  const [model, setModel] = useState('Claude-3.7-Sonnet');
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-violet-500/30 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between items-center text-xs font-bold text-white">
        <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-violet-400" /> AI 커맨드 센터</span>
        <select value={model} onChange={e => setModel(e.target.value)} className="bg-black/60 border border-white/10 text-violet-300 text-[10px] rounded px-1.5 py-0.5 focus:outline-none">
          <option>Claude-3.7-Sonnet</option>
          <option>GPT-4o-Realtime</option>
          <option>Gemini-2.5-Pro</option>
        </select>
      </div>
      <div className="p-2.5 rounded-xl bg-slate-950 border border-white/5 font-mono text-[11px] text-slate-300 space-y-1">
        <div className="text-slate-500">// System Prompt</div>
        <div className="text-cyan-300">You are a Senior Fullstack Architect with 2026 UI standards.</div>
      </div>
    </div>
  );
};

// 2. Interactive Terminal
export const InteractiveTerminalDemo: React.FC = () => {
  const [cmd, setCmd] = useState('');
  const [logs, setLogs] = useState(['$ agy --approval-mode=yolo', '✔ Connected to runtime [PID: 93090]', '✔ Port 10194 active']);

  const handleRun = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cmd) return;
    setLogs(prev => [...prev, `$ ${cmd}`, `Executed: ${cmd} (0.01ms)`]);
    setCmd('');
  };

  return (
    <div className="w-full rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl font-mono text-[10px] space-y-1.5">
      <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        </div>
        <span className="text-slate-500">bash — agy-session</span>
      </div>
      <div className="h-16 overflow-y-auto space-y-0.5 text-slate-300">
        {logs.slice(-3).map((l, i) => (
          <div key={i} className={l.startsWith('$') ? 'text-violet-400 font-bold' : 'text-emerald-400'}>{l}</div>
        ))}
      </div>
      <form onSubmit={handleRun} className="flex gap-1">
        <span className="text-violet-400">&gt;</span>
        <input
          type="text"
          value={cmd}
          onChange={e => setCmd(e.target.value)}
          placeholder="명령어 입력 후 Enter..."
          className="bg-transparent text-white focus:outline-none flex-1 text-[10px]"
        />
      </form>
    </div>
  );
};

// 3. AI Diff Inspector
export const AiDiffInspectorDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2 font-mono text-[10px]">
      <div className="flex justify-between items-center text-xs font-bold text-white font-sans">
        <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-violet-400" /> AI Diff 인스펙터</span>
        <span className="text-emerald-400 text-[10px]">1 hunk clean</span>
      </div>
      <div className="p-2 rounded-xl bg-slate-950 border border-white/5 space-y-0.5">
        <div className="text-rose-400 bg-rose-950/30 px-1 rounded">- const total = items.length;</div>
        <div className="text-emerald-400 bg-emerald-950/30 px-1 rounded">+ const total = useMemo(() =&gt; items.length, [items]);</div>
      </div>
    </div>
  );
};

// 4. AI Chat Bubble Feed
export const AiChatThreadDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2 text-xs">
      <div className="flex justify-between items-center font-bold text-white">
        <span>멀티턴 AI 대화 스레드</span>
        <Bot className="w-3.5 h-3.5 text-violet-400" />
      </div>
      <div className="space-y-1.5">
        <div className="bg-white/[0.04] p-2 rounded-xl text-slate-300 self-end max-w-[85%] ml-auto text-[11px]">
          차트와 피벗 매트릭스 연동 예시를 보여줘.
        </div>
        <div className="bg-violet-900/30 border border-violet-500/30 p-2 rounded-xl text-violet-200 max-w-[85%] text-[11px]">
          ✨ 1분봉 캔들스틱과 10만건 가상 윈도잉 표가 즉시 로드되었습니다!
        </div>
      </div>
    </div>
  );
};

// 5. AI Vector Search Explorer
export const AiVectorSearchDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="flex justify-between items-center text-xs font-bold text-white">
        <span>RAG 벡터 검색 유사도</span>
        <span className="text-cyan-400 text-[10px] font-mono">Cosine Sim: 0.942</span>
      </div>
      <div className="space-y-1 text-[11px] font-mono">
        <div className="flex justify-between p-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-300">
          <span>Chunk #412: Architecture.md</span>
          <span className="font-bold">94.2%</span>
        </div>
        <div className="flex justify-between p-1.5 rounded-lg bg-white/[0.02] text-slate-400">
          <span>Chunk #108: ComponentSpecs.ts</span>
          <span>82.1%</span>
        </div>
      </div>
    </div>
  );
};

// 6. AI Agent Task DAG Flow
export const AiAgentDagFlowDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>자율 에이전트 DAG 워크플로우</span>
        <span className="text-emerald-400 text-[10px]">● Running</span>
      </div>
      <div className="flex items-center justify-between text-[10px] font-mono gap-1">
        <div className="p-1.5 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-300">Plan ✔</div>
        <span className="text-slate-600">➔</span>
        <div className="p-1.5 rounded-lg bg-violet-950 border border-violet-500/40 text-violet-300 animate-pulse">Code ⚡</div>
        <span className="text-slate-600">➔</span>
        <div className="p-1.5 rounded-lg bg-slate-950 text-slate-500">Verify</div>
      </div>
    </div>
  );
};

// 7. AI Image Generator Studio
export const AiImageStudioDemo: React.FC = () => {
  const [style, setStyle] = useState('Cyberpunk');
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>AI 이미지 생성 스튜디오</span>
        <span className="text-fuchsia-400 text-[10px]">{style}</span>
      </div>
      <div className="flex gap-1">
        {['Cyberpunk', 'Photoreal', 'Anime', 'Glass 3D'].map(s => (
          <button
            key={s}
            onClick={() => setStyle(s)}
            className={`flex-1 py-1 rounded text-[9px] font-bold ${style === s ? 'bg-fuchsia-600 text-white' : 'bg-white/5 text-slate-400'}`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};

// 8. AI Audio Voice Waveform
export const AiAudioWaveformDemo: React.FC = () => {
  const [rec, setRec] = useState(true);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-3">
      <div className="flex justify-between items-center text-xs font-bold text-white">
        <span className="flex items-center gap-1.5"><Volume2 className="w-3.5 h-3.5 text-emerald-400" /> 실시간 음성 주파수 (STT)</span>
        <button onClick={() => setRec(!rec)} className={`text-[10px] font-bold px-2 py-0.5 rounded ${rec ? 'bg-rose-500/20 text-rose-300 animate-pulse' : 'bg-white/5 text-slate-400'}`}>
          {rec ? '● REC ON' : 'PAUSED'}
        </button>
      </div>
      <div className="flex items-center justify-between gap-1 h-8 px-2 bg-slate-950/60 rounded-xl">
        {[20, 45, 80, 60, 95, 30, 70, 85, 40, 90, 65, 35].map((h, i) => (
          <div key={i} className="flex-1 bg-emerald-400 rounded-full" style={{ height: rec ? `${h}%` : '20%' }} />
        ))}
      </div>
    </div>
  );
};

// 9. AI Tool Calling JSON Schema
export const AiFunctionCallDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1.5 font-mono text-[10px]">
      <div className="flex justify-between text-xs font-bold text-white font-sans">
        <span>AI Tool Calling Schema</span>
        <span className="text-violet-400">execute_sql</span>
      </div>
      <div className="p-2 rounded bg-slate-950 text-slate-300 space-y-0.5">
        <span className="text-fuchsia-400 font-bold">{'{ "query": "SELECT * FROM trades LIMIT 5" }'}</span>
      </div>
    </div>
  );
};

// 10. AI Prompt Template Vault
export const AiPromptVaultDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>프롬프트 템플릿 보관함</span>
        <Key className="w-3.5 h-3.5 text-amber-400" />
      </div>
      <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200">
        📌 2026 DevExpress/PowerBI 컴포넌트 자동 생성 프롬프트
      </div>
    </div>
  );
};

// 11. AI Token Cost Calculator
export const AiTokenCostDemo: React.FC = () => {
  const [tokens, setTokens] = useState(100);
  const cost = (tokens * 0.003).toFixed(2);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>토큰 비용 계산기</span>
        <span className="text-emerald-400 font-mono font-bold">${cost}</span>
      </div>
      <input
        type="range"
        min="10"
        max="1000"
        value={tokens}
        onChange={e => setTokens(Number(e.target.value))}
        className="w-full h-1 bg-slate-800 rounded accent-emerald-500"
      />
      <span className="text-[10px] text-slate-400 font-mono block text-right">{tokens}k Tokens</span>
    </div>
  );
};

// 12. AI Sentiment Emotion Radar
export const AiSentimentRadarDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>리뷰 텍스트 감정 분석</span>
        <span className="text-emerald-400 font-bold text-[10px]">96% 긍정</span>
      </div>
      <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/60 text-xs">
        <Smile className="w-4 h-4 text-emerald-400 shrink-0" />
        <span className="text-slate-300 text-[11px]">"컴포넌트 인터랙션이 너무 빠르고 아름답습니다!"</span>
      </div>
    </div>
  );
};
