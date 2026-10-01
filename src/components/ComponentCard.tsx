import React, { useState } from 'react';
import { 
  Play, Plus, Check, Code, Sparkles, Copy, ExternalLink,
  Layers, CheckCircle2 
} from 'lucide-react';
import { ComponentItem } from '../types';
import { ComponentRenderer } from './ComponentRenderer';

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

  const handleCopyPrompt = (e: React.MouseEvent) => {
    e.stopPropagation();
    const promptText = `[AI 컴포넌트 스펙: ${item.name}]\n카테고리: ${item.category}\n의존성: ${item.dependencies.join(', ')}\n지침: ${item.aiPromptGuidance}\n\n[TSX 소스코드]\n${item.fullSourceCode}`;
    navigator.clipboard.writeText(promptText);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="group relative flex flex-col rounded-2xl bg-white/[0.025] hover:bg-white/[0.045] backdrop-blur-xl border border-white/10 hover:border-violet-500/40 shadow-2xl hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 overflow-hidden">
      {/* Top Card Header */}
      <div className="p-4 pb-3 border-b border-white/5 flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${
              item.complexity === 'Simple' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
              item.complexity === 'Medium' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' :
              'bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20'
            }`}>
              {item.complexity}
            </span>
            <span className="text-[10px] text-slate-500 font-mono">#{item.id}</span>
          </div>
          <h3 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors line-clamp-1">
            {item.name}
          </h3>
        </div>

        {/* Quick Cart Add Button */}
        <button
          onClick={() => onToggleCart(item)}
          className={`shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            isInCart
              ? 'bg-fuchsia-500 text-white shadow-[0_0_12px_rgba(217,70,239,0.5)]'
              : 'bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white border border-white/10'
          }`}
          title={isInCart ? '장바구니에서 제거' : '장바구니에 담기'}
        >
          {isInCart ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          <span>{isInCart ? '담김' : '담기'}</span>
        </button>
      </div>

      {/* Live Preview Area (Compact Interactive) */}
      <div className="p-4 flex-1 flex flex-col justify-center bg-black/20 overflow-hidden min-h-[160px]">
        <div className="scale-95 pointer-events-none origin-top">
          <ComponentRenderer componentId={item.id} isCompact={true} />
        </div>
      </div>

      {/* Description & Tags */}
      <div className="p-4 pt-3 border-t border-white/5 space-y-3 bg-white/[0.01]">
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Tag Badges */}
        <div className="flex flex-wrap gap-1">
          {item.tags.slice(0, 4).map((tag, idx) => (
            <span key={idx} className="text-[10px] text-slate-500 bg-white/[0.03] px-1.5 py-0.5 rounded border border-white/5">
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Button Group */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => onOpenLiveDemo(item)}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border border-violet-500/30 text-xs font-bold transition-all shadow-sm active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-violet-300" />
            <span>체험 & 소스</span>
          </button>

          <button
            onClick={handleCopyPrompt}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-all active:scale-95"
            title="AI에게 복사해 줄 완성 프롬프트 복사"
          >
            {copiedPrompt ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />}
            <span>{copiedPrompt ? '복사됨!' : 'AI 프롬프트'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
