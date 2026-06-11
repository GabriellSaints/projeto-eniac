import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, qty: number) => void;
  onRemoveItem: (productId: string) => void;
  setView: (view: string) => void;
  isLoggedIn: boolean;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  setView,
  isLoggedIn,
}: CartDrawerProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckout = () => {
    onClose();
    setView('checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-3 text-slate-900">
                <ShoppingBag size={24} className="text-amber-500" />
                <h2 className="text-xl font-bold">Meu Carrinho</h2>
                <span className="bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full text-xs font-bold">
                  {cartItems.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                  <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center">
                    <ShoppingBag size={48} className="text-slate-300" />
                  </div>
                  <p className="text-lg font-medium text-slate-500">Seu carrinho está vazio</p>
                  <button 
                    onClick={() => { onClose(); setView('catalog'); }}
                    className="text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                  >
                    Explorar produtos
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={item.product.id} 
                      className="flex gap-4 bg-white"
                    >
                      <div className="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                        <img 
                          src={item.product.thumbnails[0]} 
                          alt={item.product.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 pr-4">{item.product.title}</h3>
                          <button 
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-slate-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{item.product.category}</p>
                        
                        <div className="flex items-center justify-between mt-auto pt-2">
                          <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50">
                            <button 
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-l-lg transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-r-lg transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <p className="font-bold text-slate-900">
                            R$ {(item.product.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-slate-100 p-6 bg-slate-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="text-xl font-bold text-slate-900">R$ {subtotal.toFixed(2)}</span>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  Finalizar Compra
                  <ArrowRight size={20} />
                </button>
                
                {!isLoggedIn && (
                  <p className="text-xs text-center text-slate-500 mt-4">
                    Você precisará fazer login para finalizar o pedido.
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
