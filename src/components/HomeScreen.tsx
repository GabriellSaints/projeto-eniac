import { ChevronRight, ArrowRight, ShoppingCart, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../data';

interface HomeScreenProps {
  setView: (view: string) => void;
  setSelectedProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  setSelectedCategory: (category: string) => void;
  sellerProducts: Product[];
}

export default function HomeScreen({
  setView,
  setSelectedProduct,
  onAddToCart,
  setSelectedCategory,
  sellerProducts,
}: HomeScreenProps) {
  const allProducts = [...PRODUCTS, ...sellerProducts];
  
  // Get featured products (those with badges)
  const featuredProducts = allProducts.filter(p => p.badge).slice(0, 4);
  
  // Get latest products (just some selection without badge for 'novidades')
  const latestProducts = allProducts.filter(p => !p.badge).slice(0, 4);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setView('detail');
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setView('catalog');
  };

  return (
    <div className="space-y-16 pb-8">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000" 
          alt="ENIAC Campus" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-20 p-8 md:p-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold tracking-wider mb-4 border border-amber-500/30">
              VOLTA ÀS AULAS 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Tudo o que você precisa para o seu semestre.
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Equipamentos de laboratório, vestuário oficial e livros técnicos.
              Acesse ferramentas exclusivas para alunos do Centro Universitário ENIAC.
            </p>
            <button 
              onClick={() => setView('catalog')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 px-8 rounded-full flex items-center gap-2 transition-all hover:gap-4 hover:shadow-lg hover:shadow-amber-500/20"
            >
              Ver Catálogo Completo
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Categories Row */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Categorias</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.filter(c => c !== 'Todos').map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => handleCategoryClick(category)}
              className="bg-white border border-slate-200 p-4 rounded-2xl hover:border-amber-500 hover:shadow-md transition-all group flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                <ChevronRight size={20} className="text-slate-400 group-hover:text-amber-600" />
              </div>
              <span className="font-semibold text-slate-700 group-hover:text-slate-900">{category}</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Destaques da Loja</h2>
          <button 
            onClick={() => handleCategoryClick('Ofertas')}
            className="text-amber-600 font-semibold hover:text-amber-700 flex items-center gap-1"
          >
            Ver mais <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-xl transition-all"
            >
              {/* Product Image */}
              <div 
                className="aspect-square relative overflow-hidden bg-slate-50 cursor-pointer p-6"
                onClick={() => handleProductClick(product)}
              >
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full z-10">
                    {product.badge}
                  </span>
                )}
                <img 
                  src={product.imageUrl} 
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Product Details */}
              <div className="p-5 flex flex-col h-[180px]">
                <div className="flex items-center gap-1 text-amber-500 mb-2">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                  <span className="text-xs text-slate-400">({product.reviewsCount})</span>
                </div>
                
                <h3 
                  className="font-bold text-slate-800 line-clamp-2 cursor-pointer hover:text-amber-600 transition-colors"
                  onClick={() => handleProductClick(product)}
                >
                  {product.title}
                </h3>
                
                <p className="text-sm text-slate-500 mt-1">{product.brand}</p>
                
                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex flex-col">
                    {product.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        R$ {product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="font-bold text-xl text-slate-900">
                      R$ {product.price.toFixed(2)}
                    </span>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-amber-500 hover:text-slate-900 transition-colors"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest Arrivals */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-8">Novidades no Laboratório</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-xl transition-all"
            >
              <div 
                className="aspect-square relative overflow-hidden bg-slate-50 cursor-pointer p-6"
                onClick={() => handleProductClick(product)}
              >
                <img 
                  src={product.imageUrl} 
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-5 flex flex-col h-[180px]">
                <h3 
                  className="font-bold text-slate-800 line-clamp-2 cursor-pointer hover:text-amber-600 transition-colors"
                  onClick={() => handleProductClick(product)}
                >
                  {product.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{product.brand}</p>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="font-bold text-xl text-slate-900">
                    R$ {product.price.toFixed(2)}
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-amber-500 hover:text-slate-900 transition-colors"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
