import React, { useState } from 'react';
import { 
  Database, HardDrive, Server, KeyRound, Sparkles, 
  Copy, CheckCircle2, Check, ArrowRight, ShieldCheck, Zap 
} from 'lucide-react';
import { STORAGE_GUIDES_DATA } from '../data/storageGuideData';
import { StorageGuideItem } from '../types';

export const StorageGuideTab: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState<StorageGuideItem>(STORAGE_GUIDES_DATA[1]);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(selectedGuide.aiPromptExample);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-slate-900/40 to-violet-950/40 border border-cyan-500/20 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              Database & Storage Master Architecture
            </span>
            <span className="text-xs text-slate-400">데이터 저장소의 모든 것</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            내 앱의 데이터, 어디에 어떻게 저장해야 할까?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
            로컬 브라우저 캐시부터 파일 기반 JSON 스토리지, SQLite, PostgreSQL, Redis, AI Vector DB까지 완벽한 비교 분석과 AI 지시 가이드.
          </p>
        </div>
      </div>

      {/* Storage Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {STORAGE_GUIDES_DATA.map((guide) => {
          const isSelected = selectedGuide.id === guide.id;
          return (
            <div
              key={guide.id}
              onClick={() => setSelectedGuide(guide)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                isSelected
                  ? 'bg-cyan-950/40 border-cyan-500 shadow-[0_0_24px_rgba(6,182,212,0.3)] ring-2 ring-cyan-500/30'
                  : 'bg-white/[0.025] hover:bg-white/[0.05] border-white/10 hover:border-cyan-500/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/[0.06] text-slate-300 border border-white/10">
                    {guide.type}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">
                    {guide.readSpeed}
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {guide.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  추천 용도: {guide.bestFor}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px]">확장성: {guide.scalability}</span>
                <span className="font-bold text-cyan-400 flex items-center gap-1">
                  선택 가이드 <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Storage Deep Dive Detail */}
      <div className="rounded-3xl bg-[#0a0c14] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex flex-wrap items-center justify-between pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-black text-white">{selectedGuide.name}</h3>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {selectedGuide.type}
              </span>
            </div>
            <p className="text-xs text-slate-400">최적의 활용 분야: <strong>{selectedGuide.bestFor}</strong></p>
          </div>

          <button
            onClick={handleCopyPrompt}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:brightness-110 text-white text-xs font-bold shadow-lg active:scale-95 transition-all"
          >
            {copiedPrompt ? <CheckCircle2 className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{copiedPrompt ? 'DB 프롬프트 복사됨!' : '이 스토리지로 AI DB 연동 프롬프트 복사'}</span>
          </button>
        </div>

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-emerald-950/10 border border-emerald-500/20 space-y-2">
            <h4 className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <Zap className="w-4 h-4" /> 핵심 장점 (Pros)
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {selectedGuide.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✔</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-rose-950/10 border border-rose-500/20 space-y-2">
            <h4 className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> 주의사항 및 한계점 (Cons)
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {selectedGuide.cons.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✖</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AI Directive Example Box */}
        <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 text-xs text-slate-300 space-y-1">
          <strong className="text-cyan-300 font-bold flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-cyan-400" /> AI에게 지시할 때 사용하는 추천 프롬프트 문장:
          </strong>
          <p className="font-mono text-slate-200 pt-1 leading-relaxed bg-black/40 p-3 rounded-xl border border-white/5">
            {selectedGuide.aiPromptExample}
          </p>
        </div>

        {/* Code Snippet */}
        <div>
          <span className="text-xs font-bold text-white flex items-center gap-1.5 font-mono mb-2">
            <Database className="w-4 h-4 text-cyan-400" /> 기본 연결 및 데이터 읽기/쓰기 코드 스니펫
          </span>
          <pre className="p-5 rounded-2xl bg-black/90 border border-white/10 text-xs text-cyan-200 font-mono overflow-x-auto leading-relaxed max-h-[300px]">
            <code>{selectedGuide.connectCodeSnippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
