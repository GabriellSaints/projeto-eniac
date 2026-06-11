import { useState } from 'react';
import { X, Lock, Mail, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { User } from '../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: User) => void;
  onSwitchToRegister: () => void;
  users: User[];
}

export default function LoginModal({
  isOpen,
  onClose,
  onLoginSuccess,
  onSwitchToRegister,
  users,
}: LoginModalProps) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const user = users.find(
      (u) => (u.email === identifier || u.ra === identifier) && u.password === password
    );

    if (user) {
      onLoginSuccess(user);
      onClose();
      setIdentifier('');
      setPassword('');
    } else {
      setError('Credenciais inválidas. Verifique seu e-mail/RA e senha.');
    }
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
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden z-50"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Entrar</h2>
                  <p className="text-sm text-slate-500 mt-1">Acesse sua conta ENIAC Store</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-start gap-2 mb-6 text-sm border border-red-100">
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">E-mail ou RA</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-slate-400" />
                    </div>
                    <input
                      type="text"
                      required
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      className="pl-10 w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="ex: 123456 ou email@eniac.edu.br"
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
                      placeholder="Sua senha"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-amber-500 w-4 h-4" />
                    <span className="text-sm text-slate-600">Lembrar-me</span>
                  </label>
                  <a href="#" className="text-sm font-semibold text-amber-600 hover:underline">Esqueceu a senha?</a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-colors mt-6 shadow-lg shadow-slate-900/20"
                >
                  Entrar
                </button>
              </form>

              <div className="mt-8 text-center text-sm text-slate-600">
                Ainda não tem uma conta?{' '}
                <button
                  onClick={onSwitchToRegister}
                  className="font-bold text-amber-600 hover:underline"
                >
                  Cadastre-se agora
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
