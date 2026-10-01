import React from 'react';
import { 
  X, Trash2, Layers, ShoppingBag, ArrowRight, Sparkles, Box 
} from 'lucide-react';
import { ComponentItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: ComponentItem[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onGoToCanvas: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onClearCart,
  onGoToCanvas,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-md h-full bg-[#0a0c14] border-l border-white/10 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-white">컴포넌트 보관함 (Cart)</h3>
              <p className="text-[11px] text-slate-400">조합할 컴포넌트 총 {cartItems.length}개</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500">
              <Box className="w-12 h-12 mb-3 stroke-1 text-slate-600" />
              <p className="text-sm font-bold text-slate-400">보관함이 비어 있습니다</p>
              <p className="text-xs text-slate-500 mt-1 max-w-xs">
                카탈로그에서 원하는 컴포넌트의 [+담기] 버튼을 눌러 보관함에 추가해보세요.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={item.id}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-violet-500/30 transition-all"
              >
                <div className="flex-1 pr-3">
                  <span className="text-[10px] font-bold text-violet-400 uppercase tracking-wider block mb-0.5">
                    {item.category}
                  </span>
                  <h4 className="text-xs font-bold text-white line-clamp-1">{item.name}</h4>
                  <span className="text-[10px] text-slate-500 font-mono">#{item.id}</span>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="p-2 rounded-xl text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                  title="제거"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer Actions */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t border-white/10 space-y-2 bg-white/[0.01]">
            <button
              onClick={() => {
                onClose();
                onGoToCanvas();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-extrabold shadow-[0_0_24px_rgba(139,92,246,0.4)] hover:brightness-110 active:scale-95 transition-all"
            >
              <Layers className="w-4 h-4" />
              <span>캔버스 스튜디오에서 조합하기</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClearCart}
              className="w-full py-2 text-center text-xs font-semibold text-slate-500 hover:text-slate-300 transition-colors"
            >
              장바구니 전체 비우기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
