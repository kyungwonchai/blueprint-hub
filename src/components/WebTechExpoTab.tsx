import React, { useState } from 'react';
import { 
  Sparkles, Play, Globe, Eye, Code, Copy, CheckCircle2, 
  X, ExternalLink, ShieldCheck, Zap, Maximize2, Layers, Compass 
} from 'lucide-react';
import { WEB_TECH_EXPO_DATA, WebTechExpoItem } from '../data/webTechExpoData';

export const WebTechExpoTab: React.FC = () => {
  const [activeBooth, setActiveBooth] = useState<WebTechExpoItem | null>(null);
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  const handleCopyPrompt = (item: WebTechExpoItem) => {
    navigator.clipboard.writeText(item.aiDirectivePrompt);
    setCopiedPromptId(item.id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in font-sans">
      
      {/* Expo Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-fuchsia-950/40 via-violet-950/30 to-cyan-950/40 border border-fuchsia-500/30 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30 tracking-wider uppercase">
              2026 Future Web Tech Exhibition
            </span>
            <span className="text-xs text-slate-400">웹의 한계를 부수는 최신 기술 쇼케이스</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            지금 웹에서 어디까지 가능할까? <span className="grad-text">최신 웹기술 전시장</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            실시간 하드웨어 레이트레이싱, 5,000대 군집 드론쇼, 아인슈타인 블랙홀 중력 렌징, 3D 아나몰픽 고래 전광판까지 — 최신 웹 그래픽스/물리 시뮬레이션의 세상물정을 둘러보고 내 앱에 적용해보세요.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
            <div className="text-xl font-black text-emerald-400">100%</div>
            <div className="text-[10px] text-slate-400">Zero Server / Pure Web</div>
          </div>
          <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
            <div className="text-xl font-black text-cyan-400">60 FPS</div>
            <div className="text-[10px] text-slate-400">GPU Hardware Accel</div>
          </div>
        </div>
      </div>

      {/* Expo Booth Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WEB_TECH_EXPO_DATA.map((item) => {
          return (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-[#0c0e18]/90 hover:bg-[#121524] backdrop-blur-2xl border border-white/10 hover:border-fuchsia-500/50 p-6 shadow-2xl transition-all duration-300 hover:shadow-[0_0_35px_rgba(217,70,239,0.25)] hover:-translate-y-1"
            >
              <div>
                {/* Booth Thumbnail & Category */}
                <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-4 border border-white/10 group-hover:border-fuchsia-500/40 transition-colors shadow-inner">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e18] via-transparent to-black/40" />
                  
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-black/70 backdrop-blur-md text-fuchsia-300 border border-fuchsia-500/30">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-cyan-300 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-cyan-500/30">
                      {item.badge}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveBooth(item)}
                    className="absolute bottom-2.5 right-2.5 p-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-lg transition-transform active:scale-90 flex items-center gap-1 text-[11px] font-bold"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>체험하기</span>
                  </button>
                </div>

                <h3 className="text-base font-extrabold text-white group-hover:text-fuchsia-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {item.tagline}
                </p>

                {/* World Insight Box (세상물정 파악) */}
                <div className="p-3.5 rounded-2xl bg-white/[0.025] border border-white/5 space-y-1.5 mb-4">
                  <div className="text-[11px] font-bold text-violet-300 flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-violet-400" />
                    <span>세상물정 & 산업 적용 인사이트</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-3">
                    {item.worldInsight}
                  </p>
                </div>

                {/* Tech Keywords */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.techKeywords.map((kw, i) => (
                    <span key={i} className="text-[10px] text-slate-500 bg-black/40 px-2 py-0.5 rounded border border-white/5 font-mono">
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/5">
                <button
                  onClick={() => setActiveBooth(item)}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:brightness-110 text-white text-xs font-black shadow-lg active:scale-95 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>전시관 체험</span>
                </button>

                <button
                  onClick={() => handleCopyPrompt(item)}
                  className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs font-semibold active:scale-95 transition-all"
                  title="이 기술을 AI에게 만들어달라고 할 때 쓰는 프롬프트 복사"
                >
                  {copiedPromptId === item.id ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
                  <span>{copiedPromptId === item.id ? '복사됨!' : 'AI 프롬프트'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Interactive Expo Booth Modal (IFrame with zero background drain on close) */}
      {activeBooth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-lg animate-fade-in">
          <div 
            className="relative w-full max-w-5xl h-[90vh] flex flex-col rounded-3xl bg-[#090b12] border border-fuchsia-500/40 shadow-[0_0_100px_rgba(217,70,239,0.3)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/60">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-extrabold text-white">{activeBooth.title}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      LIVE EXPO BOOTH
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 hidden sm:block">{activeBooth.tagline}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeBooth.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white border border-white/10"
                  title="새 창 전체화면으로 열기"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setActiveBooth(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Live Interactive IFrame Canvas */}
            <div className="flex-1 w-full h-full bg-black relative">
              <iframe
                src={activeBooth.demoUrl}
                className="w-full h-full border-0"
                title={activeBooth.title}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>

            {/* Modal Bottom Guide Bar */}
            <div className="p-3.5 bg-[#07080e] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>
                  <strong>원리:</strong> {activeBooth.howItWorks}
                </span>
              </div>
              <button
                onClick={() => handleCopyPrompt(activeBooth)}
                className="px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold shadow transition-all"
              >
                이 기술 AI 주문 프롬프트 복사
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
