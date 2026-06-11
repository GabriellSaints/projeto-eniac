import { useState } from 'react';
import { ShoppingCart, Star, ShieldCheck, Truck, ArrowLeft, Store } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface DetailScreenProps {
  product: Product;
  setView: (view: string) => void;
  onAddToCart: (product: Product, qty: number) => void;
  setSelectedProduct: (product: Product) => void;
  isLoggedIn: boolean;
  sellerProducts: Product[];
}

export default function DetailScreen({
  product,
  setView,
  onAddToCart,
  setSelectedProduct,
  isLoggedIn,
  sellerProducts,
}: DetailScreenProps) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden"
    >
      {/* Top Nav */}
      <div className="p-6 border-b border-slate-100">
        <button 
          onClick={() => setView('catalog')}
          className="flex items-center gap-2 text-slate-500 hover:text-amber-600 font-medium transition-colors"
        >
          <ArrowLeft size={18} />
          Voltar para o Catálogo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-12">
        {/* Images Column */}
        <div className="space-y-6">
          <div className="aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex items-center justify-center p-8 relative">
            {product.badge && (
              <span className="absolute top-6 left-6 bg-amber-500 text-slate-900 font-bold px-4 py-1.5 rounded-full z-10 shadow-lg">
                {product.badge}
              </span>
            )}
            <motion.img 
              key={activeImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={product.thumbnails?.[activeImage] || product.imageUrl} 
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>
          
          {product.thumbnails && product.thumbnails.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.thumbnails.map((thumb, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 bg-slate-50 ${
                    activeImage === idx ? 'border-amber-500' : 'border-transparent hover:border-slate-300'
                  }`}
                >
                  <img src={thumb} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info Column */}
        <div className="flex flex-col">
          <div className="mb-2 flex items-center gap-3">
            <span className="text-sm font-bold text-amber-600 tracking-wider uppercase">
              {product.category}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-sm text-slate-500">{product.subCategory}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            {product.title}
          </h1>

          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-1 text-amber-500">
              <Star size={18} fill="currentColor" />
              <span className="font-bold text-slate-800 ml-1">{product.rating}</span>
            </div>
            <span className="text-slate-400 text-sm">({product.reviewsCount} avaliações)</span>
            <span className="text-slate-300">|</span>
            <span className="text-sm text-slate-500">Marca: <strong className="text-slate-800">{product.brand}</strong></span>
          </div>

          <div className="mb-8">
            {product.originalPrice && (
              <span className="text-lg text-slate-400 line-through block mb-1">
                De: R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
            <div className="flex items-end gap-3">
              <span className="text-5xl font-bold text-slate-900">
                R$ {product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded text-sm mb-2">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              )}
            </div>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            {product.longDescription || product.description}
          </p>

          {/* Action Box */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mt-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="font-bold text-slate-800 flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${product.stockStatus === 'DISPONÍVEL' || product.stockStatus === 'EM ESTOQUE' ? 'bg-green-500' : 'bg-amber-500'}`} />
                  {product.stockStatus}
                </p>
                <p className="text-sm text-slate-500 mt-1">{product.stockDescription}</p>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center border border-slate-300 rounded-lg bg-white">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-l-lg"
                >-</button>
                <span className="w-12 text-center font-bold text-slate-900">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-r-lg"
                >+</button>
              </div>
            </div>

            <button 
              onClick={handleAddToCart}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:shadow-lg hover:shadow-amber-500/20 active:scale-[0.98]"
            >
              <ShoppingCart size={24} />
              Adicionar ao Carrinho
            </button>

            {product.sellerId && (
              <div className="mt-4 flex items-center gap-3 p-3 bg-white border border-purple-100 rounded-xl">
                <Store className="text-purple-600" size={24} />
                <div className="text-sm">
                  <p className="text-slate-500">Vendido e entregue por:</p>
                  <p className="font-bold text-slate-900">{product.sellerStoreName}</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-3 text-slate-600 text-sm">
              <ShieldCheck className="text-amber-500" size={20} />
              Garantia ENIAC de qualidade
            </div>
            <div className="flex items-center gap-3 text-slate-600 text-sm">
              <Truck className="text-amber-500" size={20} />
              Retirada rápida no campus
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Tab */}
      <div className="border-t border-slate-100 bg-slate-50 p-8 md:p-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Especificações Técnicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          <div className="flex justify-between py-3 border-b border-slate-200">
            <span className="text-slate-500">SKU</span>
            <span className="font-medium text-slate-900">{product.sku}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-slate-200">
            <span className="text-slate-500">Marca</span>
            <span className="font-medium text-slate-900">{product.brand}</span>
          </div>
          {Object.entries(product.specifications || {}).map(([key, value]) => (
            <div key={key} className="flex justify-between py-3 border-b border-slate-200">
              <span className="text-slate-500">{key}</span>
              <span className="font-medium text-slate-900 text-right max-w-[60%]">{value as React.ReactNode}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
