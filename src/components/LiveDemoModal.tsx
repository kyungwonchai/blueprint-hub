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
  const [copiedBriefPrompt, setCopiedBriefPrompt] = useState(false);
  const [copiedFullPrompt, setCopiedFullPrompt] = useState(false);
  const [promptMode, setPromptMode] = useState<'brief' | 'full'>('full');

  if (!item) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(item.fullSourceCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const getBriefPrompt = () => {
    const cleanPropsName = item.name.replace(/[^a-zA-Z0-9]/g, '') || 'CustomComponent';
    return `[AI 컴포넌트 구현 지시서: ${item.name}]

## 1. 컴포넌트 메타 정보
- 컴포넌트명: ${item.name}
- 카테고리: ${item.category}
- 난이도: ${item.complexity}
- 필수 의존성: ${item.dependencies.join(', ')}

## 2. 설계 지침 (Implementation Guidance)
${item.aiPromptGuidance}

## 3. 권장 컴포넌트 선언 명세 (Props Interface)
\`\`\`typescript
export interface ${cleanPropsName}Props {
  // 프로젝트 비즈니스 로직에 맞춘 Props 속성을 정의하세요
  className?: string;
  theme?: 'dark' | 'light' | 'cyber';
}
\`\`\`

위 지침과 명세에 따라 완전히 동작하는 TypeScript/React 컴포넌트를 작성해주세요.`;
  };

  const getFullPrompt = () => {
    const cleanPropsName = item.name.replace(/[^a-zA-Z0-9]/g, '') || 'CustomComponent';
    return `[AI 컴포넌트 구현 지시서 (샘플 소스코드 포함): ${item.name}]

## 1. 컴포넌트 메타 정보
- 컴포넌트명: ${item.name}
- 카테고리: ${item.category}
- 난이도: ${item.complexity}
- 필수 의존성: ${item.dependencies.join(', ')}

## 2. 설계 지침 (Implementation Guidance)
${item.aiPromptGuidance}

## 3. 권장 컴포넌트 선언 명세 (Props Interface)
\`\`\`typescript
export interface ${cleanPropsName}Props {
  // 프로젝트 비즈니스 로직에 맞춘 Props 속성을 정의하세요
  className?: string;
  theme?: 'dark' | 'light' | 'cyber';
}
\`\`\`

## 4. 참조 기준 샘플 소스코드 (Reference Source Code)
아래 검증된 구현 코드를 기반으로 UI 스타일, 애니메이션, 수식 로직을 유지하며 내 요구사항에 맞게 확장/커스텀해주세요:
\`\`\`tsx
${item.fullSourceCode}
\`\`\`

위 샘플 코드를 참고하여 프로젝트에 최적화된 완전한 TypeScript/React 컴포넌트를 작성해주세요.`;
  };

  const handleCopyBriefPrompt = () => {
    navigator.clipboard.writeText(getBriefPrompt());
    setCopiedBriefPrompt(true);
    setTimeout(() => setCopiedBriefPrompt(false), 2000);
  };

  const handleCopyFullPrompt = () => {
    navigator.clipboard.writeText(getFullPrompt());
    setCopiedFullPrompt(true);
    setTimeout(() => setCopiedFullPrompt(false), 2000);
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
              <div className="p-4 rounded-2xl bg-gradient-to-r from-fuchsia-950/40 via-purple-950/30 to-indigo-950/40 border border-fuchsia-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-fuchsia-500/20 text-fuchsia-400 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">AI 프롬프트 생성기 (Prompt Orchestrator)</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      AI에게 전달할 프롬프트 형식을 선택하여 복사하세요. <strong>샘플 소스코드 포함 모드</strong>를 사용하면 AI가 기존 캔버스/로직을 완벽하게 계승하여 커스텀합니다.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyBriefPrompt}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-slate-200 hover:text-white text-xs font-bold border border-white/10 active:scale-95 transition-all"
                    title="지침과 인터페이스 명세만 복사합니다"
                  >
                    {copiedBriefPrompt ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                    <span>{copiedBriefPrompt ? '간결 지침 복사됨!' : '간결 지침 복사'}</span>
                  </button>

                  <button
                    onClick={handleCopyFullPrompt}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white text-xs font-bold shadow-lg shadow-fuchsia-500/20 hover:brightness-110 active:scale-95 transition-all"
                    title="AI가 완벽히 재현할 수 있도록 실제 동작 소스코드를 함께 동봉합니다"
                  >
                    {copiedFullPrompt ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
                    <span>{copiedFullPrompt ? '샘플 포함 프롬프트 복사됨!' : '✨ 샘플 포함 프롬프트 복사'}</span>
                  </button>
                </div>
              </div>

              {/* Mode Toggle Bar */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-white/10 text-xs">
                  <button
                    onClick={() => setPromptMode('full')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                      promptMode === 'full'
                        ? 'bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    ✨ 샘플 소스코드 포함 모드 (권장)
                  </button>
                  <button
                    onClick={() => setPromptMode('brief')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                      promptMode === 'brief'
                        ? 'bg-white/10 text-white border border-white/20'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    간결 지침 모드
                  </button>
                </div>
                <span className="text-[11px] text-slate-400">
                  {promptMode === 'full' ? '실제 동작 TSX/Canvas 코드가 동봉됩니다' : '기본 메타 및 Props 명세만 포함됩니다'}
                </span>
              </div>

              {/* Preview Content */}
              <div className="p-5 rounded-2xl bg-black/90 border border-white/10 text-xs text-slate-300 font-mono leading-relaxed space-y-4 max-h-[450px] overflow-y-auto">
                <div className="space-y-2">
                  <div className="text-violet-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                    <span>1. 설계 지침 (Implementation Guidance)</span>
                  </div>
                  <p className="font-sans text-slate-200 pl-3.5 border-l-2 border-violet-500/30">{item.aiPromptGuidance}</p>
                </div>

                <div className="space-y-2">
                  <div className="text-cyan-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span>2. 권장 컴포넌트 선언 명세 (Props Interface)</span>
                  </div>
                  <pre className="text-slate-300 text-[11px] bg-slate-950 p-3 rounded-xl border border-white/5 overflow-x-auto">
{`export interface ${item.name.replace(/[^a-zA-Z0-9]/g, '') || 'CustomComponent'}Props {
  // 프로젝트 비즈니스 로직에 맞춘 Props 속성을 정의하세요
  className?: string;
  theme?: 'dark' | 'light' | 'cyber';
}`}
                  </pre>
                </div>

                {promptMode === 'full' && (
                  <div className="space-y-2">
                    <div className="text-fuchsia-400 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-fuchsia-400"></span>
                      <span>3. 참조 기준 샘플 소스코드 (Reference Source Code)</span>
                    </div>
                    <pre className="text-slate-300 text-[11px] bg-slate-950 p-3 rounded-xl border border-fuchsia-500/20 overflow-x-auto leading-relaxed">
                      <code>{item.fullSourceCode}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
