import React, { useState } from 'react';
import { 
  Sparkles, Terminal, Copy, Check, Mic, ArrowRight, ShieldCheck,
  CreditCard, Calendar, Sliders, FileCode, Smartphone, MapPin, ToggleLeft, Star, Volume2, Key, Cpu
} from 'lucide-react';

export const GlassStepperDemo: React.FC = () => {
  const [step, setStep] = useState(2);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-3">
      <div className="flex items-center justify-between text-xs font-bold text-white">
        <span>글래스 스텝 위저드</span>
        <span className="text-violet-400">Step {step} / 3</span>
      </div>
      <div className="flex gap-2">
        {[1, 2, 3].map(s => (
          <div key={s} className={`flex-1 h-1.5 rounded-full ${s <= step ? 'bg-violet-500 shadow-[0_0_8px_#8b5cf6]' : 'bg-white/10'}`} />
        ))}
      </div>
      <input type="text" readOnly value="2단계: 클러스터 환경변수 설정" className="w-full px-3 py-1.5 rounded-xl bg-slate-950/60 border border-white/10 text-xs text-white" />
    </div>
  );
};

export const CreditCard3DDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="rounded-xl p-3 bg-gradient-to-tr from-violet-900 via-indigo-900 to-fuchsia-900 border border-white/20 text-white shadow-xl space-y-3">
        <div className="flex justify-between items-center"><span className="text-[10px] tracking-widest uppercase">Platinum AI Card</span><CreditCard className="w-4 h-4 text-violet-300" /></div>
        <div className="font-mono text-sm tracking-widest">•••• •••• •••• 4920</div>
        <div className="flex justify-between text-[10px] text-slate-300"><span>KW DEEP MIND</span><span>12/29</span></div>
      </div>
    </div>
  );
};

export const PasswordMeterDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>비밀번호 보안 강도</span>
        <span className="text-emerald-400 text-[10px] font-bold">강력함 (100%)</span>
      </div>
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex gap-1">
        <div className="flex-1 bg-emerald-500 rounded-full" />
        <div className="flex-1 bg-emerald-500 rounded-full" />
        <div className="flex-1 bg-emerald-500 rounded-full" />
        <div className="flex-1 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]" />
      </div>
      <span className="text-[10px] text-slate-400 block">✔ 특수문자, 대소문자, 12자 이상 충족</span>
    </div>
  );
};

export const DateRangePickerDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>기간 설정 캘린더</span>
        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
      </div>
      <div className="flex gap-1">
        <button className="flex-1 py-1 rounded bg-violet-600 text-white text-[10px] font-bold">최근 7일</button>
        <button className="flex-1 py-1 rounded bg-white/5 text-slate-400 text-[10px]">이번 달</button>
        <button className="flex-1 py-1 rounded bg-white/5 text-slate-400 text-[10px]">1분기</button>
      </div>
    </div>
  );
};

export const DualRangeSliderDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-3">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>가격 범위 듀얼 슬라이더</span>
        <span className="text-violet-400 font-mono text-[11px]">$200 ~ $1,500</span>
      </div>
      <div className="relative h-2 bg-slate-800 rounded-full flex items-center">
        <div className="absolute left-1/4 right-1/4 h-full bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full" />
        <div className="absolute left-1/4 w-4 h-4 rounded-full bg-white shadow-lg -translate-x-1/2 cursor-pointer" />
        <div className="absolute right-1/4 w-4 h-4 rounded-full bg-white shadow-lg translate-x-1/2 cursor-pointer" />
      </div>
    </div>
  );
};

export const MarkdownEditorDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span className="flex items-center gap-1"><FileCode className="w-3.5 h-3.5 text-violet-400" /> 마크다운 에디터</span>
        <span className="text-[10px] text-slate-500">Live Preview</span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
        <div className="p-2 rounded bg-slate-950 text-slate-400"># Title
- [x] Done</div>
        <div className="p-2 rounded bg-violet-950/40 text-violet-200 font-sans font-bold">Title<br /><span className="text-emerald-400">✔ Done</span></div>
      </div>
    </div>
  );
};

export const OtpVerifyDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span>6자리 OTP 인증</span>
        <span className="text-rose-400 font-mono text-[10px]">02:59</span>
      </div>
      <div className="flex justify-between gap-1.5">
        {['5', '8', '2', '9', '', ''].map((v, i) => (
          <div key={i} className={`w-8 h-9 rounded-lg border flex items-center justify-center font-mono font-bold text-sm ${v ? 'border-violet-500 text-white bg-violet-500/10' : 'border-white/10 text-slate-600 bg-slate-950/60'}`}>{v || '•'}</div>
        ))}
      </div>
    </div>
  );
};

export const TagComboboxDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2">
      <div className="text-xs font-bold text-white">다중 태그 셀렉터</div>
      <div className="flex flex-wrap gap-1 p-1.5 rounded-xl bg-slate-950/60 border border-white/10">
        <span className="px-2 py-0.5 rounded-md bg-violet-600 text-white text-[10px] font-bold">#React19 ✕</span>
        <span className="px-2 py-0.5 rounded-md bg-cyan-600 text-white text-[10px] font-bold">#TypeScript ✕</span>
        <span className="px-2 py-0.5 rounded-md bg-fuchsia-600 text-white text-[10px] font-bold">#Tailwind ✕</span>
      </div>
    </div>
  );
};

export const AiDiffInspectorDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-2 font-mono text-[10px]">
      <div className="flex justify-between items-center text-xs font-bold text-white font-sans">
        <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-violet-400" /> AI Diff 인스펙터</span>
        <span className="text-emerald-400 text-[10px]">1 hunk clean</span>
      </div>
      <div className="p-2 rounded bg-slate-950 border border-white/5 space-y-0.5">
        <div className="text-rose-400 bg-rose-950/30 px-1 rounded">- const total = items.length;</div>
        <div className="text-emerald-400 bg-emerald-950/30 px-1 rounded">+ const total = useMemo(() =&gt; items.length, [items]);</div>
      </div>
    </div>
  );
};

export const AiAudioWaveformDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-3">
      <div className="flex justify-between items-center text-xs font-bold text-white">
        <span className="flex items-center gap-1.5"><Volume2 className="w-3.5 h-3.5 text-emerald-400" /> 실시간 음성 주파수 (STT)</span>
        <span className="text-emerald-400 text-[10px] animate-pulse">● REC</span>
      </div>
      <div className="flex items-center justify-between gap-1 h-8 px-2 bg-slate-950/60 rounded-xl">
        {[20, 45, 80, 60, 95, 30, 70, 85, 40, 90, 65, 35].map((h, i) => (
          <div key={i} className="flex-1 bg-emerald-400 rounded-full" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
};
