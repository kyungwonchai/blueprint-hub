import React, { useState, useEffect } from 'react';
import { 
  Download, FileCode, Folder, Search, Copy, Check, Terminal, 
  ExternalLink, Sparkles, RefreshCw, Layers, ShieldCheck, Box
} from 'lucide-react';

interface FileInfo {
  path: string;
  size: number;
  mtime: string;
}

export const SourceCodeTab: React.FC = () => {
  const [files, setFiles] = useState<FileInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedFile, setSelectedFile] = useState<string>('package.json');
  const [fileContent, setFileContent] = useState<string>('');
  const [contentLoading, setContentLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Fetch file list
  const fetchFiles = async () => {
    setLoading(true);
    try {
      const res = await fetch('/blueprint-hub/api/source/files');
      const data = await res.json();
      if (data.files) {
        setFiles(data.files);
        // default select App.tsx or package.json
        const defaultTarget = data.files.find((f: FileInfo) => f.path === 'src/App.tsx') || data.files[0];
        if (defaultTarget) {
          setSelectedFile(defaultTarget.path);
        }
      }
    } catch (e) {
      console.error('Failed to load file list:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  // Fetch file content when selectedFile changes
  useEffect(() => {
    if (!selectedFile) return;
    let cancelled = false;
    setContentLoading(true);
    fetch(`/blueprint-hub/api/source/content?file=${encodeURIComponent(selectedFile)}`)
      .then(res => res.text())
      .then(text => {
        if (!cancelled) setFileContent(text);
      })
      .catch(err => {
        if (!cancelled) setFileContent(`// 오류: 파일을 불러오지 못했습니다 (${err.message})`);
      })
      .finally(() => {
        if (!cancelled) setContentLoading(false);
      });
    return () => { cancelled = true; };
  }, [selectedFile]);

  const copyCode = () => {
    navigator.clipboard.writeText(fileContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredFiles = files.filter(f => f.path.toLowerCase().includes(search.toLowerCase()));

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Banner Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-950/60 via-slate-900/80 to-cyan-950/60 border border-violet-500/20 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-xs font-bold text-violet-300">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>Full Open Source & Instant ZIP Export</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              <Terminal className="w-7 h-7 text-cyan-400" />
              <span>블루프린트 허브 전체 소스코드 패키지</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              로그인 없이 누구나 전체 소스코드 ZIP 압축본을 1초 만에 직접 다운로드하거나, 
              웹 브라우저에서 100여 개 전체 소스 파일을 즉시 열람하고 코드를 복사할 수 있습니다.
            </p>
          </div>

          {/* Big Download Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <a
              href="/blueprint-hub/download"
              download="blueprint-hub-source.zip"
              className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-black text-sm shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-5 h-5 text-black stroke-[2.5]" />
              <span>전체 소스코드 ZIP 다운로드</span>
            </a>
          </div>
        </div>

        {/* Quick URL & Specs */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-bold">직접 다운로드 URL:</span>
            <code className="text-emerald-400 bg-black/40 px-2.5 py-1 rounded-lg border border-white/10 select-all">
              https://kwopi.duckdns.org/blueprint-hub/download
            </code>
          </div>
          <div className="flex items-center gap-4 text-slate-300 font-sans">
            <span>📦 총 파일: <strong className="text-white font-bold">{files.length}개</strong></span>
            <span>⚡ 라이선스: <strong className="text-violet-400 font-bold">Unrestricted / Open</strong></span>
            <span>🛡️ 보안: <strong className="text-cyan-400 font-bold">Public (로그인 불필요)</strong></span>
          </div>
        </div>
      </div>

      {/* Code Browser Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[780px]">
        {/* Left: File Tree Explorer */}
        <div className="lg:col-span-4 flex flex-col rounded-2xl bg-slate-950/80 border border-white/10 overflow-hidden shadow-xl backdrop-blur-md">
          {/* File Search Header */}
          <div className="p-3 border-b border-white/10 bg-white/[0.02] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Folder className="w-3.5 h-3.5 text-amber-400" />
                <span>프로젝트 파일 탐색기</span>
              </span>
              <button
                onClick={fetchFiles}
                className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title="새로고침"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-cyan-400' : ''}`} />
              </button>
            </div>
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="파일명 검색... (예: App.tsx, server.mjs)"
                className="w-full pl-8 pr-3 py-1.5 bg-black/50 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
              />
            </div>
          </div>

          {/* File List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin scrollbar-thumb-white/10">
            {loading ? (
              <div className="flex items-center justify-center h-40 text-xs text-slate-500">
                파일 목록을 읽는 중...
              </div>
            ) : filteredFiles.length === 0 ? (
              <div className="flex items-center justify-center h-40 text-xs text-slate-500">
                검색된 파일이 없습니다
              </div>
            ) : (
              filteredFiles.map((file) => {
                const isSelected = selectedFile === file.path;
                return (
                  <button
                    key={file.path}
                    onClick={() => setSelectedFile(file.path)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-all ${
                      isSelected
                        ? 'bg-violet-600/30 border border-violet-500/50 text-white font-bold shadow-md'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <FileCode className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-violet-400' : 'text-slate-500'}`} />
                      <span className="truncate">{file.path}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 shrink-0 ml-2">
                      {formatSize(file.size)}
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Right: Code Viewer & Actions */}
        <div className="lg:col-span-8 flex flex-col rounded-2xl bg-black/90 border border-white/10 overflow-hidden shadow-xl backdrop-blur-md">
          {/* File Info Bar */}
          <div className="px-4 py-3 border-b border-white/10 bg-slate-900/60 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 truncate">
              <FileCode className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="font-mono text-xs font-bold text-white truncate">{selectedFile}</span>
              <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">
                ({fileContent.split('\n').length} lines)
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={copyCode}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-bold text-slate-200 transition-all active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">복사 완료!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>코드 복사</span>
                  </>
                )}
              </button>

              <a
                href={`/blueprint-hub/api/source/content?file=${encodeURIComponent(selectedFile)}`}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-slate-300 hover:text-white transition-all"
                title="새 창에서 원본 열기"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Editor/Code Viewer Area */}
          <div className="flex-1 overflow-auto p-4 font-mono text-xs leading-relaxed text-slate-200 bg-[#090b10] selection:bg-violet-600/40">
            {contentLoading ? (
              <div className="flex items-center justify-center h-full text-slate-500">
                <RefreshCw className="w-5 h-5 animate-spin mr-2 text-violet-400" />
                파일 내용 로딩 중...
              </div>
            ) : (
              <pre className="whitespace-pre overflow-x-auto">
                <code>{fileContent}</code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
