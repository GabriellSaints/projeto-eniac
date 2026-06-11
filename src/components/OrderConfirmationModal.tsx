import { X, CheckCircle, Package, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: any;
}

export default function OrderConfirmationModal({
  isOpen,
  onClose,
  orderData,
}: OrderConfirmationModalProps) {
  if (!orderData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8 text-center bg-gradient-to-b from-green-50 to-white">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15, delay: 0.2 }}
                  className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30"
                >
                  <CheckCircle size={40} />
                </motion.div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Pedido Confirmado!</h2>
                <p className="text-slate-500">
                  Obrigado por comprar na ENIAC Store, {orderData.studentName?.split(' ')[0]}.<br/>
                  O número do seu pedido é <strong className="text-slate-700">#ENI-{Math.floor(Math.random() * 100000)}</strong>
                </p>
              </div>

              <div className="p-8 pt-0">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6">
                  <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Package size={18} className="text-amber-500" />
                    Detalhes da Entrega
                  </h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p><strong className="text-slate-700">Aluno:</strong> {orderData.studentName}</p>
                    <p><strong className="text-slate-700">RA:</strong> {orderData.ra}</p>
                    <p><strong className="text-slate-700">Método:</strong> {orderData.deliveryMethod === 'retirada_campus' ? 'Retirada na Secretaria' : 'Correios'}</p>
                    <p><strong className="text-slate-700">Pagamento:</strong> {orderData.paymentMethod === 'pix' ? 'PIX (Aprovado)' : 'Cartão de Crédito'}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between font-bold text-lg text-slate-900 mb-8 border-t border-slate-100 pt-4">
                  <span>Total Pago:</span>
                  <span className="text-amber-600">R$ {orderData.total.toFixed(2)}</span>
                </div>

                <div className="flex gap-4">
                  <button 
                    className="flex-1 border border-slate-200 text-slate-600 font-semibold py-3 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Download size={18} />
                    Recibo
                  </button>
                  <button 
                    onClick={onClose}
                    className="flex-[2] bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    Voltar para a Loja
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
