import React from 'react';
import { 
  X, History, Sparkles, ExternalLink, ArrowRight, 
  Layers, Copy, CheckCircle2, Box 
} from 'lucide-react';
import { BlueprintSnapshot } from '../types';

interface RecentBlueprintsModalProps {
  isOpen: boolean;
  onClose: () => void;
  blueprints: BlueprintSnapshot[];
  onSelectBlueprint: (bp: BlueprintSnapshot) => void;
}

export const RecentBlueprintsModal: React.FC<RecentBlueprintsModalProps> = ({
  isOpen,
  onClose,
  blueprints,
  onSelectBlueprint,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-3xl bg-[#0d0f18] border border-white/15 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <History className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-white">공개 블루프린트 API 보관소</h3>
              <p className="text-[11px] text-slate-400">발행된 스냅샷 청사진 총 {blueprints.length}건</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {blueprints.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <Box className="w-10 h-10 mx-auto mb-2 text-slate-600 stroke-1" />
              <p className="text-xs">아직 생성된 블루프린트가 없습니다.</p>
            </div>
          ) : (
            blueprints.map((bp) => (
              <div
                key={bp.id}
                onClick={() => {
                  onSelectBlueprint(bp);
                  onClose();
                }}
                className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-violet-500/40 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-white group-hover:text-violet-300 transition-colors">
                      {bp.title}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.2 rounded border border-cyan-500/20">
                      {bp.id}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>{bp.components.length}개 컴포넌트</span>
                    <span>•</span>
                    <span>레이아웃: {bp.layout.type}</span>
                    <span>•</span>
                    <span className="text-slate-500">{new Date(bp.createdAt).toLocaleDateString('ko-KR')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-slate-400 group-hover:text-violet-400 transition-colors">
                  <span className="text-xs font-semibold">보기</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
