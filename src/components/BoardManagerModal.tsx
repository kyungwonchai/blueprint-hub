import React, { useState } from 'react';
import { 
  X, Plus, Copy, Trash2, Globe, Lock, Clock, User, 
  Layers, ArrowRight, Sparkles, Folder, CheckCircle2 
} from 'lucide-react';
import { BoardData } from '../types';

interface BoardManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: string;
  onChangeUser: (user: string) => void;
  boards: BoardData[];
  currentBoardId: string;
  onSelectBoard: (board: BoardData) => void;
  onCreateNewBoard: (title: string, isPublic: boolean) => void;
  onDuplicateBoard: (boardId: string) => void;
  onDeleteBoard: (boardId: string) => void;
}

export const BoardManagerModal: React.FC<BoardManagerModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onChangeUser,
  boards,
  currentBoardId,
  onSelectBoard,
  onCreateNewBoard,
  onDuplicateBoard,
  onDeleteBoard,
}) => {
  const [scope, setScope] = useState<'my' | 'all'>('my');
  const [newTitle, setNewTitle] = useState('');
  const [newIsPublic, setNewIsPublic] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [editingUser, setEditingUser] = useState(false);
  const [userNameInput, setUserNameInput] = useState(currentUser);

  if (!isOpen) return null;

  const filteredBoards = boards.filter((b) => {
    if (scope === 'my') {
      return b.author === currentUser || b.author === 'kw';
    }
    return true;
  });

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    onCreateNewBoard(newTitle.trim(), newIsPublic);
    setNewTitle('');
    setIsCreating(false);
  };

  const handleSaveUser = () => {
    if (userNameInput.trim()) {
      onChangeUser(userNameInput.trim());
      setEditingUser(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
      <div 
        className="relative w-full max-w-3xl max-h-[88vh] flex flex-col rounded-3xl bg-[#0c0e18] border border-white/15 shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 pb-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-fuchsia-600 to-violet-600 text-white shadow-lg">
              <Folder className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black text-white">칠판(보드) 프로젝트 관리자</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300">
                  총 {boards.length}개 보드
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                <span>현재 작업자:</span>
                {editingUser ? (
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      value={userNameInput}
                      onChange={(e) => setUserNameInput(e.target.value)}
                      className="px-2 py-0.5 bg-slate-900 border border-violet-500 rounded text-xs text-white"
                    />
                    <button onClick={handleSaveUser} className="text-emerald-400 hover:text-emerald-300 font-bold text-xs">저장</button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setEditingUser(true)}
                    className="font-bold text-violet-400 hover:text-violet-300 underline underline-offset-2 flex items-center gap-1"
                  >
                    <User className="w-3 h-3" /> {currentUser} (변경)
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCreating(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>+ 새 칠판 만들기</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Create Board Inline Panel */}
        {isCreating && (
          <form onSubmit={handleCreateSubmit} className="p-4 bg-violet-950/30 border-b border-violet-500/30 flex flex-wrap items-center justify-between gap-3">
            <input
              type="text"
              required
              placeholder="새 칠판 이름 (예: 모바일 결제 플로우, 어드민 대시보드)..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="flex-1 min-w-[240px] px-3.5 py-2 bg-black/60 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
            />
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newIsPublic}
                  onChange={(e) => setNewIsPublic(e.target.checked)}
                  className="accent-violet-500 rounded"
                />
                <span>팀 전체 공개</span>
              </label>
              <button
                type="submit"
                className="px-4 py-2 bg-violet-600 text-white text-xs font-bold rounded-xl shadow hover:bg-violet-500"
              >
                생성
              </button>
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                className="px-3 py-2 text-xs text-slate-400 hover:text-white"
              >
                취소
              </button>
            </div>
          </form>
        )}

        {/* Scope Filter Tabs */}
        <div className="px-6 pt-3 border-b border-white/10 flex items-center gap-2 bg-[#090b12]">
          <button
            onClick={() => setScope('my')}
            className={`px-4 py-2 text-xs font-bold border-b-2 transition-all ${
              scope === 'my'
                ? 'border-violet-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            내 칠판 보드 ({boards.filter(b => b.author === currentUser || b.author === 'kw').length})
          </button>
          <button
            onClick={() => setScope('all')}
            className={`px-4 py-2 text-xs font-bold border-b-2 transition-all ${
              scope === 'all'
                ? 'border-violet-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            전체 팀 공유 보드 ({boards.length})
          </button>
        </div>

        {/* Boards List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-[#08090f]">
          {filteredBoards.length === 0 ? (
            <div className="py-16 text-center text-slate-500">
              <Folder className="w-12 h-12 mx-auto mb-2 text-slate-600 stroke-1" />
              <p className="text-xs">보드가 없습니다. 상단의 [+ 새 칠판 만들기]를 눌러 시작하세요.</p>
            </div>
          ) : (
            filteredBoards.map((board) => {
              const isCurrent = board.id === currentBoardId;
              return (
                <div
                  key={board.id}
                  className={`p-4 rounded-2xl border transition-all flex flex-wrap items-center justify-between gap-3 group ${
                    isCurrent
                      ? 'bg-violet-950/30 border-violet-500/60 shadow-lg ring-1 ring-violet-500/30'
                      : 'bg-white/[0.025] hover:bg-white/[0.05] border-white/5 hover:border-violet-500/30'
                  }`}
                >
                  <div className="flex-1 min-w-[240px] pr-2">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-xs font-extrabold text-white group-hover:text-violet-300 transition-colors">
                        {board.title}
                      </h4>
                      {isCurrent && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          현재 편집중
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span>👤 {board.author}</span>
                      <span>•</span>
                      <span>위젯 {board.items?.length || 0}개</span>
                      <span>•</span>
                      <span>{new Date(board.updatedAt || board.createdAt).toLocaleDateString('ko-KR')}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onDuplicateBoard(board.id)}
                      className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/5"
                      title="보드 복제하기"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>

                    {board.id !== 'board_main_demo' && (
                      <button
                        onClick={() => onDeleteBoard(board.id)}
                        className="p-2 rounded-xl bg-white/[0.04] hover:bg-rose-500/10 text-slate-400 hover:text-rose-400 border border-white/5"
                        title="보드 삭제"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <button
                      onClick={() => {
                        onSelectBoard(board);
                        onClose();
                      }}
                      className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold shadow transition-all active:scale-95"
                    >
                      <span>칠판 열기</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
