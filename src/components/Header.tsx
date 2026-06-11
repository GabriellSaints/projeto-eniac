import { useState } from 'react';
import { ShoppingCart, Search, User as UserIcon, LogOut, Package, Store, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { User } from '../types';

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearchSubmit: (query: string) => void;
  isLoggedIn: boolean;
  currentUser: User | null;
  onOpenLoginModal: () => void;
  onOpenRegisterModal: () => void;
  onLogout: () => void;
}

export default function Header({
  currentView,
  setView,
  cartCount,
  onOpenCart,
  searchQuery,
  setSearchQuery,
  onSearchSubmit,
  isLoggedIn,
  currentUser,
  onOpenLoginModal,
  onOpenRegisterModal,
  onLogout,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchSubmit(searchQuery);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Início' },
    { id: 'catalog', label: 'Catálogo' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900 text-slate-100 shadow-md backdrop-blur-md bg-opacity-95 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Logo & Navigation */}
        <div className="flex items-center gap-8">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setView('home')}
          >
            <div className="bg-amber-500 text-slate-900 p-2 rounded-lg font-bold shadow-lg group-hover:scale-105 transition-transform">
              <Package size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none tracking-tight">ENIAC</span>
              <span className="text-amber-500 font-semibold text-sm leading-none tracking-widest">STORE</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setView(link.id)}
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  currentView === link.id ? 'text-amber-500' : 'text-slate-300'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <form onSubmit={handleSearch} className="w-full relative">
            <input
              type="text"
              placeholder="Buscar produtos, livros, kits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 text-slate-200 rounded-full py-2 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-slate-700 transition-all border border-slate-700"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-amber-500">
              <Search size={20} />
            </button>
          </form>
        </div>

        {/* Actions (Cart & Profile) */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenCart}
            className="relative p-2 text-slate-300 hover:text-amber-500 transition-colors"
          >
            <ShoppingCart size={24} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 bg-amber-500 text-slate-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg"
                >
                  {cartCount}
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Desktop Auth/Profile */}
          <div className="hidden md:block relative">
            {isLoggedIn && currentUser ? (
              <div 
                className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-slate-800 transition-colors"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">
                  {currentUser.name.charAt(0)}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-semibold leading-tight truncate w-24">{currentUser.name}</span>
                  <span className="text-xs text-slate-400 capitalize">{currentUser.role}</span>
                </div>
                <ChevronDown size={16} className={`text-slate-400 transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button 
                  onClick={onOpenLoginModal}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  Entrar
                </button>
                <button 
                  onClick={onOpenRegisterModal}
                  className="text-sm font-medium bg-amber-500 text-slate-900 px-4 py-2 rounded-full hover:bg-amber-400 transition-colors shadow-lg hover:shadow-amber-500/20"
                >
                  Cadastrar
                </button>
              </div>
            )}

            {/* Profile Dropdown */}
            <AnimatePresence>
              {isProfileMenuOpen && isLoggedIn && currentUser && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-56 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 overflow-hidden"
                >
                  <div className="p-4 border-b border-slate-700">
                    <p className="font-semibold text-slate-200">{currentUser.name}</p>
                    <p className="text-xs text-slate-400">{currentUser.email}</p>
                    <p className="text-xs text-slate-500 mt-1">RA: {currentUser.ra}</p>
                  </div>
                  <div className="p-2">
                    {currentUser.role === 'admin' && (
                      <button 
                        onClick={() => { setView('admin'); setIsProfileMenuOpen(false); }}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
                      >
                        <UserIcon size={16} /> Painel Admin
                      </button>
                    )}
                    {currentUser.role === 'vendedor' && (
                      <button 
                        onClick={() => { setView('seller-dashboard'); setIsProfileMenuOpen(false); }}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
                      >
                        <Store size={16} /> Meu Painel de Vendas
                      </button>
                    )}
                    <button 
                      onClick={() => { onLogout(); setIsProfileMenuOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:bg-slate-700 rounded-lg transition-colors mt-1"
                    >
                      <LogOut size={16} /> Sair
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-slate-800 border-t border-slate-700 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-4">
              <form onSubmit={(e) => { handleSearch(e); setIsMobileMenuOpen(false); }} className="relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 text-slate-200 rounded-full py-2 pl-4 pr-10 border border-slate-700 focus:outline-none focus:border-amber-500"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Search size={18} />
                </button>
              </form>
              
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => { setView(link.id); setIsMobileMenuOpen(false); }}
                    className={`text-left px-4 py-2 rounded-lg ${currentView === link.id ? 'bg-slate-700 text-amber-500' : 'text-slate-300 hover:bg-slate-700'}`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="border-t border-slate-700 pt-4 mt-2">
                {isLoggedIn && currentUser ? (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 px-4 py-2">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                        {currentUser.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-slate-200">{currentUser.name}</p>
                        <p className="text-xs text-slate-400 capitalize">{currentUser.role}</p>
                      </div>
                    </div>
                    {currentUser.role === 'admin' && (
                      <button 
                        onClick={() => { setView('admin'); setIsMobileMenuOpen(false); }}
                        className="text-left px-4 py-2 text-slate-300 hover:bg-slate-700 rounded-lg flex items-center gap-3"
                      >
                        <UserIcon size={18} /> Painel Admin
                      </button>
                    )}
                    {currentUser.role === 'vendedor' && (
                      <button 
                        onClick={() => { setView('seller-dashboard'); setIsMobileMenuOpen(false); }}
                        className="text-left px-4 py-2 text-slate-300 hover:bg-slate-700 rounded-lg flex items-center gap-3"
                      >
                        <Store size={18} /> Painel do Vendedor
                      </button>
                    )}
                    <button 
                      onClick={() => { onLogout(); setIsMobileMenuOpen(false); }}
                      className="text-left px-4 py-2 text-red-400 hover:bg-slate-700 rounded-lg flex items-center gap-3"
                    >
                      <LogOut size={18} /> Sair
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => { onOpenLoginModal(); setIsMobileMenuOpen(false); }}
                      className="px-4 py-2 text-slate-300 hover:bg-slate-700 rounded-lg font-medium"
                    >
                      Entrar
                    </button>
                    <button 
                      onClick={() => { onOpenRegisterModal(); setIsMobileMenuOpen(false); }}
                      className="px-4 py-2 bg-amber-500 text-slate-900 rounded-lg font-medium hover:bg-amber-400"
                    >
                      Criar Conta
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
