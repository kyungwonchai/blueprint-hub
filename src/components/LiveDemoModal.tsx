import React, { useState } from 'react';
import { 
  X, Play, Code, Sparkles, Copy, Check, ExternalLink,
  Plus, Layers, Terminal, Box, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import { ComponentItem } from '../types';
import { ComponentRenderer } from './ComponentRenderer';

interface LiveDemoModalProps {
  item: ComponentItem | null;
  onClose: () => void;
  isInCart: boolean;
  onToggleCart: (item: ComponentItem) => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({
  item,
  onClose,
  isInCart,
  onToggleCart,
}) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'code' | 'prompt'>('demo');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  if (!item) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(item.fullSourceCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyPrompt = () => {
    const promptText = `[AI 컴포넌트 구현 지시서: ${item.name}]\n\n## 1. 컴포넌트 정보\n- 이름: ${item.name}\n- 카테고리: ${item.category}\n- 난이도: ${item.complexity}\n- 의존성 라이브러리: ${item.dependencies.join(', ')}\n\n## 2. 설계 지침\n${item.aiPromptGuidance}\n\n## 3. 완전한 TSX 소스코드\n\`\`\`tsx\n${item.fullSourceCode}\n\`\`\``;
    navigator.clipboard.writeText(promptText);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0d0f17] border border-white/15 shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-5 pb-4 border-b border-white/10 flex items-center justify-between gap-4 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-lg">
              <Box className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-extrabold text-white">{item.name}</h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  {item.category.toUpperCase()}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{item.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleCart(item)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                isInCart
                  ? 'bg-fuchsia-500 text-white shadow-[0_0_16px_rgba(217,70,239,0.4)]'
                  : 'bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/10'
              }`}
            >
              {isInCart ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              <span>{isInCart ? '장바구니 담김' : '장바구니 담기'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-5 pt-3 border-b border-white/10 flex items-center gap-2 bg-black/40">
          <button
            onClick={() => setActiveTab('demo')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'demo'
                ? 'border-violet-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>실제 동작 시연 (Live Demo)</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'code'
                ? 'border-violet-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>TSX 소스코드</span>
          </button>

          <button
            onClick={() => setActiveTab('prompt')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'prompt'
                ? 'border-violet-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>AI 지시 프롬프트 가이드</span>
          </button>
        </div>

        {/* Modal Main Body */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#090a10]">
          {activeTab === 'demo' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-slate-950/80 border border-white/10 shadow-inner flex flex-col items-center justify-center min-h-[300px]">
                <div className="w-full max-w-xl">
                  <ComponentRenderer componentId={item.id} isCompact={false} />
                </div>
              </div>

              {/* Dependencies and Meta */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">필요 라이브러리 (Dependencies)</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.dependencies.map((dep, i) => (
                      <span key={i} className="text-xs font-mono font-bold text-violet-300 bg-violet-500/10 px-2.5 py-1 rounded-lg border border-violet-500/20">
                        {dep}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">구현 난이도 & 태그</span>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="relative">
              <button
                onClick={handleCopyCode}
                className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold shadow-lg transition-all"
              >
                {copiedCode ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? '전체 코드 복사됨!' : '전체 코드 복사'}</span>
              </button>
              <pre className="p-5 rounded-2xl bg-black/90 border border-white/10 text-xs text-slate-200 font-mono overflow-x-auto leading-relaxed max-h-[500px]">
                <code>{item.fullSourceCode}</code>
              </pre>
            </div>
          )}

          {activeTab === 'prompt' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-fuchsia-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white mb-1">AI 지시 프롬프트란?</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      이 텍스트를 Cursor, Claude, Antigravity, ChatGPT에게 붙여넣으면 AI가 모호함 없이 이 컴포넌트의 완벽한 구조와 코드를 재현합니다.
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleCopyPrompt}
                  className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white text-xs font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all"
                >
                  {copiedPrompt ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPrompt ? '프롬프트 복사 완료!' : 'AI 프롬프트 복사'}</span>
                </button>
              </div>

              <div className="p-5 rounded-2xl bg-black/80 border border-white/10 text-xs text-slate-300 font-mono leading-relaxed space-y-3">
                <div className="text-violet-400 font-bold"># AI 지시 지침 (Guidance)</div>
                <p className="font-sans text-slate-200">{item.aiPromptGuidance}</p>
                <div className="text-violet-400 font-bold pt-2"># 추천 컴포넌트 선언 명세</div>
                <pre className="text-slate-400 text-[11px] overflow-x-auto">
{`interface ${item.name.replace(/[^a-zA-Z]/g, '')}Props {
  // 여기에 프로젝트 비즈니스 로직에 맞춘 Props를 추가하세요
}`}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
