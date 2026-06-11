import { useState } from 'react';
import { ShieldCheck, ArrowLeft, CheckCircle2, CreditCard, Building2, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { CartItem } from '../types';

interface CheckoutScreenProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, qty: number) => void;
  onRemoveItem: (productId: string) => void;
  isLoggedIn: boolean;
  studentInfo: { name: string; ra: string; email: string } | null;
  onPlaceOrder: (orderData: any) => void;
  setView: (view: string) => void;
}

export default function CheckoutScreen({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  isLoggedIn,
  studentInfo,
  onPlaceOrder,
  setView,
}: CheckoutScreenProps) {
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [deliveryMethod, setDeliveryMethod] = useState('retirada_campus');

  // Prevent accessing checkout if empty or not logged in
  if (!isLoggedIn || cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Ação Inválida</h2>
        <p className="text-slate-500 mb-8">Você precisa estar logado e ter itens no carrinho para finalizar a compra.</p>
        <button 
          onClick={() => setView('home')}
          className="bg-amber-500 text-slate-900 font-bold px-8 py-3 rounded-full"
        >
          Voltar ao Início
        </button>
      </div>
    );
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingFee = deliveryMethod === 'retirada_campus' ? 0 : 15.0;
  const discount = paymentMethod === 'pix' ? subtotal * 0.05 : 0;
  const total = subtotal + shippingFee - discount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPlaceOrder({
      studentName: studentInfo?.name,
      ra: studentInfo?.ra,
      email: studentInfo?.email,
      paymentMethod,
      deliveryMethod,
      subtotal,
      shippingFee,
      discount,
      total,
      items: cartItems,
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <button 
        onClick={() => setView('cart')}
        className="flex items-center gap-2 text-slate-500 hover:text-amber-600 font-medium mb-8 transition-colors"
      >
        <ArrowLeft size={18} />
        Voltar para o Carrinho
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Checkout Form */}
        <div className="flex-1 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm">1</span>
              Dados do Aluno
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Nome Completo</label>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium">
                  {studentInfo?.name}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Registro Acadêmico (RA)</label>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium">
                  {studentInfo?.ra}
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-600 mb-2">E-mail Institucional</label>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium">
                  {studentInfo?.email}
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4 flex items-center gap-1">
              <ShieldCheck size={14} /> Seus dados estão vinculados ao portal ENIAC.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm">2</span>
              Método de Entrega
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className={`cursor-pointer p-4 border rounded-xl flex items-start gap-4 transition-all ${
                deliveryMethod === 'retirada_campus' ? 'border-amber-500 bg-amber-50' : 'border-slate-200 hover:border-amber-300'
              }`}>
                <input 
                  type="radio" 
                  name="delivery" 
                  value="retirada_campus" 
                  checked={deliveryMethod === 'retirada_campus'} 
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  className="mt-1 accent-amber-500" 
                />
                <div>
                  <p className="font-bold text-slate-900 flex items-center gap-2"><Building2 size={18} /> Retirada no Campus</p>
                  <p className="text-sm text-slate-500 mt-1">Grátis. Retire na secretaria em até 2 dias úteis.</p>
                </div>
              </label>

              <label className={`cursor-pointer p-4 border rounded-xl flex items-start gap-4 transition-all ${
                deliveryMethod === 'correios' ? 'border-amber-500 bg-amber-50' : 'border-slate-200 hover:border-amber-300'
              }`}>
                <input 
                  type="radio" 
                  name="delivery" 
                  value="correios" 
                  checked={deliveryMethod === 'correios'} 
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  className="mt-1 accent-amber-500" 
                />
                <div>
                  <p className="font-bold text-slate-900 flex items-center gap-2"><MapPin size={18} /> Correios / Transportadora</p>
                  <p className="text-sm text-slate-500 mt-1">R$ 15,00. Entrega no endereço cadastrado.</p>
                </div>
              </label>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm">3</span>
              Forma de Pagamento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className={`cursor-pointer p-4 border rounded-xl flex items-start gap-4 transition-all ${
                paymentMethod === 'pix' ? 'border-amber-500 bg-amber-50' : 'border-slate-200 hover:border-amber-300'
              }`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="pix" 
                  checked={paymentMethod === 'pix'} 
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mt-1 accent-amber-500" 
                />
                <div>
                  <p className="font-bold text-slate-900 flex items-center gap-2">PIX</p>
                  <p className="text-sm text-green-600 font-semibold mt-1">5% de desconto no valor dos produtos.</p>
                </div>
              </label>

              <label className={`cursor-pointer p-4 border rounded-xl flex items-start gap-4 transition-all ${
                paymentMethod === 'cartao_credito' ? 'border-amber-500 bg-amber-50' : 'border-slate-200 hover:border-amber-300'
              }`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="cartao_credito" 
                  checked={paymentMethod === 'cartao_credito'} 
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mt-1 accent-amber-500" 
                />
                <div>
                  <p className="font-bold text-slate-900 flex items-center gap-2"><CreditCard size={18} /> Cartão de Crédito</p>
                  <p className="text-sm text-slate-500 mt-1">Até 3x sem juros.</p>
                </div>
              </label>
            </div>
            
            {paymentMethod === 'cartao_credito' && (
              <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-4">
                <input type="text" placeholder="Número do Cartão" className="w-full p-3 border border-slate-200 rounded-lg" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Validade (MM/AA)" className="w-full p-3 border border-slate-200 rounded-lg" />
                  <input type="text" placeholder="CVV" className="w-full p-3 border border-slate-200 rounded-lg" />
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:w-96 shrink-0">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-24"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6">Resumo do Pedido</h3>
            
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <div className="w-16 h-16 bg-slate-50 rounded-lg overflow-hidden border border-slate-100 shrink-0">
                    <img src={item.product.thumbnails[0]} alt={item.product.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-800 line-clamp-1">{item.product.title}</p>
                    <p className="text-xs text-slate-500">Qtd: {item.quantity}</p>
                    <p className="text-sm font-bold text-slate-900 mt-1">R$ {(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-6 space-y-3">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Frete</span>
                <span>{shippingFee === 0 ? 'Grátis' : `R$ ${shippingFee.toFixed(2)}`}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600 font-medium">
                  <span>Desconto (PIX)</span>
                  <span>- R$ {discount.toFixed(2)}</span>
                </div>
              )}
              
              <div className="border-t border-slate-200 pt-4 mt-4">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-slate-900">Total</span>
                  <span className="text-2xl font-bold text-amber-500">R$ {total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={handleSubmit}
              className="w-full mt-8 bg-amber-500 text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 active:scale-[0.98]"
            >
              <CheckCircle2 size={20} />
              Confirmar Pedido
            </button>
            <p className="text-xs text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
              <ShieldCheck size={14} /> Compra 100% segura
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
