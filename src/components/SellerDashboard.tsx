import { useState } from 'react';
import { PackageSearch, Plus, TrendingUp, DollarSign, Package } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface SellerDashboardProps {
  sellerId: string;
  sellerProducts: Product[];
  onAddProduct: (product: Product) => void;
}

export default function SellerDashboard({
  sellerId,
  sellerProducts,
  onAddProduct,
}: SellerDashboardProps) {
  const [isAddingMode, setIsAddingMode] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    category: 'Livros',
    description: '',
    stock: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product: Product = {
      id: `mkt-${Date.now()}`,
      title: newProduct.title,
      description: newProduct.description,
      price: parseFloat(newProduct.price),
      category: newProduct.category,
      brand: 'Marketplace Aluno',
      rating: 5.0,
      reviewsCount: 0,
      stockStatus: 'DISPONÍVEL',
      stockDescription: `${newProduct.stock} unidades disponíveis`,
      sellerId: sellerId,
      sellerStoreName: 'Minha Lojinha (Aluno)',
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800', // default image
    };
    
    onAddProduct(product);
    setIsAddingMode(false);
    setNewProduct({ title: '', price: '', category: 'Livros', description: '', stock: '' });
  };

  const totalRevenue = sellerProducts.reduce((sum, p) => sum + p.price, 0); // Simplified metric

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard do Vendedor</h1>
          <p className="text-slate-500 mt-2">Gerencie seus produtos e acompanhe suas vendas no marketplace.</p>
        </div>
        <button 
          onClick={() => setIsAddingMode(!isAddingMode)}
          className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-amber-500/20"
        >
          {isAddingMode ? 'Voltar' : <><Plus size={20} /> Novo Produto</>}
        </button>
      </div>

      {!isAddingMode && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Package size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Produtos Ativos</p>
              <p className="text-2xl font-bold text-slate-900">{sellerProducts.length}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <DollarSign size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Valor em Estoque</p>
              <p className="text-2xl font-bold text-slate-900">R$ {totalRevenue.toFixed(2)}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Visualizações</p>
              <p className="text-2xl font-bold text-slate-900">0</p>
            </div>
          </div>
        </div>
      )}

      {isAddingMode ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8"
        >
          <h2 className="text-xl font-bold text-slate-900 mb-6">Cadastrar Novo Produto</h2>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Título do Produto</label>
              <input 
                type="text" 
                required
                value={newProduct.title}
                onChange={(e) => setNewProduct({...newProduct, title: e.target.value})}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none" 
                placeholder="Ex: Livro Cálculo Vol. 1 Usado"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Preço (R$)</label>
                <input 
                  type="number" 
                  step="0.01"
                  required
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none" 
                  placeholder="50.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Quantidade em Estoque</label>
                <input 
                  type="number" 
                  required
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none" 
                  placeholder="1"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Categoria</label>
              <select 
                value={newProduct.category}
                onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              >
                <option value="Livros">Livros</option>
                <option value="Equipamentos">Equipamentos</option>
                <option value="Acessórios">Acessórios</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Descrição</label>
              <textarea 
                rows={4}
                required
                value={newProduct.description}
                onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none resize-none" 
                placeholder="Descreva as condições do seu produto..."
              />
            </div>
            <button 
              type="submit"
              className="bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-xl hover:bg-amber-400 transition-colors"
            >
              Publicar Produto
            </button>
          </form>
        </motion.div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {sellerProducts.length === 0 ? (
            <div className="p-12 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <PackageSearch size={32} className="text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Nenhum produto cadastrado</h3>
              <p className="text-slate-500 max-w-sm mb-6">
                Você ainda não adicionou nenhum produto para venda. Comece agora mesmo!
              </p>
              <button 
                onClick={() => setIsAddingMode(true)}
                className="text-amber-600 font-bold hover:underline"
              >
                Cadastrar primeiro produto
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-sm">
                    <th className="p-4 font-semibold">Produto</th>
                    <th className="p-4 font-semibold">Categoria</th>
                    <th className="p-4 font-semibold">Estoque</th>
                    <th className="p-4 font-semibold">Preço</th>
                    <th className="p-4 font-semibold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {sellerProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 flex items-center gap-3">
                        <img src={product.imageUrl} alt="" className="w-12 h-12 rounded object-cover border border-slate-200" />
                        <span className="font-medium text-slate-900">{product.title}</span>
                      </td>
                      <td className="p-4 text-slate-600">{product.category}</td>
                      <td className="p-4 text-slate-600">{product.stockDescription}</td>
                      <td className="p-4 font-bold text-slate-900">R$ {product.price.toFixed(2)}</td>
                      <td className="p-4 text-right">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Ativo</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
