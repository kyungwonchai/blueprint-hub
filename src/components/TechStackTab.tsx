import React, { useState } from 'react';
import { 
  Zap, Code, Layers, Sparkles, Check, Copy, CheckCircle2,
  Gauge, Box, Shield, ArrowRight, Flame, Globe
} from 'lucide-react';
import { TECH_STACKS_DATA } from '../data/techStackData';
import { TechStackItem } from '../types';

export const TechStackTab: React.FC = () => {
  const [selectedStack, setSelectedStack] = useState<TechStackItem>(TECH_STACKS_DATA[0]);
  const [copiedDirective, setCopiedDirective] = useState(false);

  const handleCopyDirective = () => {
    navigator.clipboard.writeText(selectedStack.aiDirectiveTemplate);
    setCopiedDirective(true);
    setTimeout(() => setCopiedDirective(false), 2000);
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-violet-950/40 via-indigo-950/30 to-fuchsia-950/30 border border-violet-500/20 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
              2026 AI-Native Tech Stack Lab
            </span>
            <span className="text-xs text-slate-400">초보자부터 고수까지 실무 가이드</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            어떤 기술스택으로 AI에게 만들어달라고 할까?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
            프레임워크별 렌더링 성능, 번들 크기, AI 구현 오차율을 비교하고 실제 동작 소스코드와 AI 맞춤 프롬프트를 확인하세요.
          </p>
        </div>
      </div>

      {/* Tech Stack Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {TECH_STACKS_DATA.map((stack) => {
          const isSelected = selectedStack.id === stack.id;
          return (
            <div
              key={stack.id}
              onClick={() => setSelectedStack(stack)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                isSelected
                  ? 'bg-violet-950/40 border-violet-500 shadow-[0_0_24px_rgba(139,92,246,0.3)] ring-2 ring-violet-500/30'
                  : 'bg-white/[0.025] hover:bg-white/[0.05] border-white/10 hover:border-violet-500/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/[0.06] text-slate-300 border border-white/10">
                    {stack.category}
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">
                    {stack.badge}
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-white group-hover:text-violet-300 transition-colors mb-1">
                  {stack.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {stack.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px]">{stack.bundleSize}</span>
                <span className="font-bold text-violet-400 flex items-center gap-1">
                  AI 적합도 {stack.aiEaseScore}%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Stack Deep Dive Detail Panel */}
      <div className="rounded-3xl bg-[#0a0c14] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex flex-wrap items-center justify-between pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-black text-white">{selectedStack.name}</h3>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {selectedStack.yearTrend}
              </span>
            </div>
            <p className="text-xs text-slate-400">{selectedStack.tagline}</p>
          </div>

          <button
            onClick={handleCopyDirective}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:brightness-110 text-white text-xs font-bold shadow-lg active:scale-95 transition-all"
          >
            {copiedDirective ? <CheckCircle2 className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{copiedDirective ? 'AI 프롬프트 복사됨!' : '이 기술스택으로 AI 주문 프롬프트 복사'}</span>
          </button>
        </div>

        {/* Pros & Cons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-emerald-950/10 border border-emerald-500/20 space-y-2">
            <h4 className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <Zap className="w-4 h-4" /> 강력한 장점 (Pros)
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {selectedStack.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✔</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-rose-950/10 border border-rose-500/20 space-y-2">
            <h4 className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
              <Shield className="w-4 h-4" /> 고려할 한계점 (Cons)
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {selectedStack.cons.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✖</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* When to use */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-slate-300">
          <strong className="text-violet-300 font-bold block mb-1">💡 언제 이 기술스택을 선택해야 할까?</strong>
          <p className="leading-relaxed">{selectedStack.whenToUse}</p>
        </div>

        {/* Live Code Preview */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-white flex items-center gap-1.5 font-mono">
              <Code className="w-4 h-4 text-cyan-400" /> 실제 동작 기준 소스코드 예시
            </span>
          </div>
          <pre className="p-5 rounded-2xl bg-black/90 border border-white/10 text-xs text-slate-200 font-mono overflow-x-auto leading-relaxed max-h-[350px]">
            <code>{selectedStack.sampleCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
