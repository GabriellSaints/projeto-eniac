import { useState } from 'react';
import { X, Lock, Mail, User as UserIcon, BadgeCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { UserRole } from '../types';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterSuccess: (data: any) => void;
  onSwitchToLogin: () => void;
}

export default function RegisterModal({
  isOpen,
  onClose,
  onRegisterSuccess,
  onSwitchToLogin,
}: RegisterModalProps) {
  const [name, setName] = useState('');
  const [ra, setRa] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('comprador');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegisterSuccess({ name, ra, email, password, role });
    onClose();
    // Reset
    setName('');
    setRa('');
    setEmail('');
    setPassword('');
    setRole('comprador');
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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden z-50"
          >
            <div className="p-8 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Criar Conta</h2>
                  <p className="text-sm text-slate-500 mt-1">Junte-se à ENIAC Store</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Role Selection */}
                <div className="flex p-1 bg-slate-100 rounded-xl mb-6">
                  <button
                    type="button"
                    onClick={() => setRole('comprador')}
                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      role === 'comprador' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    Sou Aluno
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('vendedor')}
                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      role === 'vendedor' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    Quero Vender
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon size={18} className="text-slate-400" />
                    </div>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10 w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="João da Silva"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">RA</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <BadgeCheck size={18} className="text-slate-400" />
                      </div>
                      <input
                        type="text"
                        required
                        value={ra}
                        onChange={(e) => setRa(e.target.value)}
                        className="pl-10 w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="123456"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Senha</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={18} className="text-slate-400" />
                      </div>
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">E-mail Institucional</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-slate-400" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="nome@eniac.edu.br"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 text-slate-900 font-bold py-3.5 rounded-xl hover:bg-amber-400 transition-colors mt-6 shadow-lg shadow-amber-500/20"
                >
                  Criar Conta
                </button>
              </form>

              <div className="mt-8 text-center text-sm text-slate-600 border-t border-slate-100 pt-6">
                Já possui uma conta?{' '}
                <button
                  onClick={onSwitchToLogin}
                  className="font-bold text-slate-900 hover:underline"
                >
                  Fazer Login
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
