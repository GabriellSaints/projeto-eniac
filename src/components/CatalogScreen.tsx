import { useMemo, useState } from 'react';
import { ChevronRight, Filter, Search, ShoppingCart, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES, BRANDS } from '../data';

interface CatalogScreenProps {
  setView: (view: string) => void;
  setSelectedProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  sellerProducts: Product[];
}

export default function CatalogScreen({
  setView,
  setSelectedProduct,
  onAddToCart,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  sellerProducts,
}: CatalogScreenProps) {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(5000);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const allProducts = [...PRODUCTS, ...sellerProducts];

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // Category filter
      if (selectedCategory !== 'Todos' && selectedCategory !== 'Ofertas' && product.category !== selectedCategory) {
        return false;
      }
      
      // Offer filter
      if (selectedCategory === 'Ofertas' && !product.originalPrice) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (
          !product.title.toLowerCase().includes(query) &&
          !product.description.toLowerCase().includes(query) &&
          !product.brand.toLowerCase().includes(query)
        ) {
          return false;
        }
      }

      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }

      // Price filter
      if (product.price > priceRange) {
        return false;
      }

      return true;
    });
  }, [allProducts, selectedCategory, searchQuery, selectedBrands, priceRange]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setView('detail');
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      
      {/* Mobile Filter Toggle */}
      <div className="md:hidden flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
        <span className="font-bold text-slate-800">{filteredProducts.length} produtos encontrados</span>
        <button 
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          className="flex items-center gap-2 text-slate-600 font-medium bg-slate-100 px-4 py-2 rounded-lg"
        >
          <Filter size={18} /> Filtros
        </button>
      </div>

      {/* Sidebar Filters */}
      <AnimatePresence>
        {(isMobileFiltersOpen || window.innerWidth >= 768) && (
          <motion.aside 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:w-64 shrink-0 space-y-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 md:block"
          >
            <div>
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                Categorias
              </h3>
              <div className="space-y-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsMobileFiltersOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === category 
                        ? 'bg-amber-500 text-slate-900 font-bold' 
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h3 className="font-bold text-slate-900 mb-4">Marcas</h3>
              <div className="space-y-3">
                {BRANDS.map((brand) => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                      selectedBrands.includes(brand) ? 'bg-amber-500 border-amber-500' : 'border-slate-300 group-hover:border-amber-500'
                    }`}>
                      {selectedBrands.includes(brand) && <div className="w-2.5 h-2.5 bg-slate-900 rounded-sm" />}
                    </div>
                    <span className="text-sm text-slate-600">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900">Preço Máximo</h3>
                <span className="text-xs font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded">
                  R$ {priceRange}
                </span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="5000" 
                step="50"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1">
        <div className="mb-6 hidden md:block">
          <h1 className="text-3xl font-bold text-slate-900">{selectedCategory}</h1>
          <p className="text-slate-500 mt-1">Exibindo {filteredProducts.length} produtos correspondentes</p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <Search size={32} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Nenhum produto encontrado</h3>
            <p className="text-slate-500 max-w-md">
              Não encontramos nenhum produto correspondente aos filtros selecionados. Tente remover alguns filtros ou buscar por outro termo.
            </p>
            <button 
              onClick={() => {
                setSelectedCategory('Todos');
                setSelectedBrands([]);
                setPriceRange(5000);
              }}
              className="mt-6 text-amber-600 font-semibold hover:underline"
            >
              Limpar todos os filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                key={product.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-xl transition-all flex flex-col"
              >
                <div 
                  className="aspect-square relative overflow-hidden bg-slate-50 cursor-pointer p-6 shrink-0"
                  onClick={() => handleProductClick(product)}
                >
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full z-10">
                      {product.badge}
                    </span>
                  )}
                  {product.sellerId && (
                    <span className="absolute top-4 right-4 bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full z-10 border border-purple-200">
                      Marketplace
                    </span>
                  )}
                  <img 
                    src={product.imageUrl} 
                    alt={product.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-5 flex flex-col flex-1">
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
                  
                  <p className="text-xs text-slate-500 mt-1">{product.brand}</p>
                  
                  <div className="mt-auto pt-4 flex items-center justify-between">
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
                      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-amber-500 hover:text-slate-900 transition-colors shrink-0"
                    >
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
