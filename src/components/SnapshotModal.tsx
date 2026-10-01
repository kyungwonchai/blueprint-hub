import React, { useState } from 'react';
import { 
  X, Sparkles, Copy, CheckCircle2, ExternalLink, Download, 
  Terminal, Share2, Code, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { BlueprintSnapshot } from '../types';

interface SnapshotModalProps {
  snapshot: BlueprintSnapshot | null;
  onClose: () => void;
}

export const SnapshotModal: React.FC<SnapshotModalProps> = ({ snapshot, onClose }) => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedApiUrl, setCopiedApiUrl] = useState(false);
  const [activeTab, setActiveTab] = useState<'prompt' | 'api' | 'json'>('prompt');

  if (!snapshot) return null;

  const apiUrl = `${window.location.origin}/blueprint-hub/api/blueprints/${snapshot.id}`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(snapshot.generatedAiPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleCopyApiUrl = () => {
    navigator.clipboard.writeText(apiUrl);
    setCopiedApiUrl(true);
    setTimeout(() => setCopiedApiUrl(false), 2000);
  };

  const handleDownloadJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(snapshot, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `blueprint_${snapshot.id}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0d0f18] border border-violet-500/30 shadow-[0_0_80px_rgba(139,92,246,0.3)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 pb-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-violet-950/40 to-fuchsia-950/40">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white shadow-xl">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-black text-white">AI 블루프린트 청사진 생성 완료!</h2>
                <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  LIVE API
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                스냅샷 ID: <strong className="text-violet-300 font-mono">{snapshot.id}</strong> ({snapshot.components.length}개 컨트롤 결합)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* API Endpoint Banner Bar */}
        <div className="p-4 bg-black/40 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-[280px] flex-1">
            <span className="text-[10px] font-bold font-mono uppercase bg-violet-500/20 text-violet-300 px-2 py-1 rounded">
              GET API
            </span>
            <input
              type="text"
              readOnly
              value={apiUrl}
              className="flex-1 bg-slate-950/80 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-slate-200 font-mono focus:outline-none select-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyApiUrl}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-bold text-white border border-white/10 transition-all active:scale-95"
            >
              {copiedApiUrl ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedApiUrl ? 'URL 복사됨!' : 'API 주소 복사'}</span>
            </button>
            <button
              onClick={handleDownloadJson}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white border border-white/10"
              title="JSON 파일 다운로드"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="px-6 pt-3 border-b border-white/10 flex items-center gap-2 bg-[#090a10]">
          <button
            onClick={() => setActiveTab('prompt')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'prompt'
                ? 'border-violet-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>AI 원클릭 프롬프트 (AI 주입용)</span>
          </button>

          <button
            onClick={() => setActiveTab('api')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'api'
                ? 'border-violet-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>API 응답 JSON 명세</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#08090f] space-y-4">
          {activeTab === 'prompt' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-950/40 to-indigo-950/40 border border-violet-500/20 flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">💡 AI에게 이렇게 명령하세요:</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Cursor, Claude, Antigravity, ChatGPT 등에 아래 프롬프트를 복사하여 붙여넣으면 AI가 청사진에 포함된 컨트롤과 소스코드를 100% 그대로 구현합니다.
                  </p>
                </div>
                <button
                  onClick={handleCopyPrompt}
                  className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-extrabold shadow-lg hover:brightness-110 active:scale-95 transition-all"
                >
                  {copiedPrompt ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedPrompt ? '프롬프트 복사 완료!' : 'AI 프롬프트 전체 복사'}</span>
                </button>
              </div>

              <pre className="p-5 rounded-2xl bg-black/90 border border-white/10 text-xs text-slate-300 font-mono overflow-x-auto leading-relaxed max-h-[420px]">
                <code>{snapshot.generatedAiPrompt}</code>
              </pre>
            </div>
          )}

          {activeTab === 'api' && (
            <pre className="p-5 rounded-2xl bg-black/90 border border-white/10 text-xs text-cyan-300 font-mono overflow-x-auto leading-relaxed max-h-[450px]">
              <code>{JSON.stringify(snapshot, null, 2)}</code>
            </pre>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 border-t border-white/10 flex items-center justify-between bg-white/[0.01]">
          <span className="text-xs text-slate-500 font-medium">
            생성 시각: {new Date(snapshot.createdAt).toLocaleString('ko-KR')}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-bold transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
