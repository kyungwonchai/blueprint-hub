import React, { useState } from 'react';
import { 
  Play, Plus, Check, Code, Sparkles, Copy, ExternalLink,
  Layers, CheckCircle2, Eye, Terminal
} from 'lucide-react';
import { ComponentItem } from '../types';
import { ComponentRenderer } from './ComponentRenderer';

import { getComponentMetadata } from '../data/componentMetadata';

interface ComponentCardProps {
  item: ComponentItem;
  isInCart: boolean;
  onToggleCart: (item: ComponentItem) => void;
  onOpenLiveDemo: (item: ComponentItem) => void;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({
  item,
  isInCart,
  onToggleCart,
  onOpenLiveDemo,
}) => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const meta = getComponentMetadata(item);

  const handleCopyPrompt = (e: React.MouseEvent) => {
    e.stopPropagation();
    const promptText = `[AI 컴포넌트 스펙: ${item.name}]\n카테고리: ${item.category}\n의존성: ${item.dependencies.join(', ')}\n지침: ${item.aiPromptGuidance}\n\n[TSX 소스코드]\n${item.fullSourceCode}`;
    navigator.clipboard.writeText(promptText);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 1500);
  };

  const handleCopyCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(item.fullSourceCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 1500);
  };

  return (
    <div className="group relative flex flex-col rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-2xl border border-white/10 hover:border-violet-500/60 shadow-2xl hover:shadow-[0_0_35px_rgba(139,92,246,0.3)] transition-all duration-300 overflow-hidden">
      {/* Top Card Header */}
      <div className="p-4 sm:p-5 pb-3 border-b border-white/10 flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider ${
              item.complexity === 'Simple' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
              item.complexity === 'Medium' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' :
              'bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20'
            }`}>
              {item.complexity}
            </span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
              ⏳ {meta.releaseEra}
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 truncate max-w-[160px]">
              {meta.techOrigin}
            </span>
          </div>
          <h3 className="text-base font-black text-white group-hover:text-violet-300 transition-colors truncate">
            {item.name}
          </h3>
        </div>

        {/* Sleek Tool Actions (Copy Code, Copy AI Prompt, Cart) */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleCopyCode}
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-white border border-white/10 transition-colors"
            title="TSX 전체 소스코드 복사"
          >
            {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Code className="w-4 h-4" />}
          </button>

          <button
            onClick={handleCopyPrompt}
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-fuchsia-400 border border-white/10 transition-colors"
            title="AI 구현 프롬프트 복사"
          >
            {copiedPrompt ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Sparkles className="w-4 h-4 text-fuchsia-400" />}
          </button>

          <button
            onClick={() => onToggleCart(item)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
              isInCart
                ? 'bg-fuchsia-500 text-white shadow-[0_0_15px_rgba(217,70,239,0.6)]'
                : 'bg-white/[0.08] hover:bg-white/[0.16] text-white border border-white/15'
            }`}
            title={isInCart ? '장바구니에서 제거' : '장바구니에 담기'}
          >
            {isInCart ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            <span className="text-xs">{isInCart ? '담김' : '담기'}</span>
          </button>
        </div>
      </div>

      {/* Live Preview Area (Interactive Live Component - Enlarged 30%+) */}
      <div 
        onClick={() => onOpenLiveDemo(item)}
        className="p-4 flex-1 flex flex-col justify-center bg-black/40 overflow-hidden min-h-[225px] cursor-pointer hover:bg-black/30 transition-colors relative group/preview"
      >
        <div className="w-full">
          <ComponentRenderer componentId={item.id} isCompact={true} />
        </div>
        
        {/* Subtle Hover Overlay for Detail Modal */}
        <div className="absolute inset-0 bg-violet-950/40 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <span className="px-4 py-2 rounded-xl bg-violet-600 text-white text-xs font-bold shadow-lg flex items-center gap-2 scale-95 group-hover/preview:scale-100 transition-transform">
            <Eye className="w-4 h-4" />
            <span>대형 팝업 실시간 시연 & 분석</span>
          </span>
        </div>
      </div>

      {/* Description & Tags Footer */}
      <div className="p-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3 bg-white/[0.01]">
        <p className="text-xs text-slate-400 line-clamp-1 flex-1">
          {item.description}
        </p>
        
        <button
          onClick={() => onOpenLiveDemo(item)}
          className="shrink-0 text-xs text-violet-400 hover:text-violet-300 font-bold flex items-center gap-1 hover:underline"
        >
          <span>자세히 보기</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};
