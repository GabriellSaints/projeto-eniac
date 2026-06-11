import { Package, Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-amber-500 text-slate-900 p-1.5 rounded-lg font-bold">
                <Package size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none tracking-tight text-slate-100">ENIAC</span>
                <span className="text-amber-500 font-semibold text-xs leading-none tracking-widest">STORE</span>
              </div>
            </div>
            <p className="text-sm">
              A loja oficial de eletrônicos, livros e vestuário do Centro Universitário ENIAC. Feita por estudantes, para estudantes.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Departamentos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Kits Acadêmicos e Eletrônica</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Vestuário Oficial</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Livros e Manuais</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Ofertas do Semestre</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Ajuda & Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Política de Retirada</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Dúvidas Frequentes (FAQ)</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 shrink-0" />
                <span>Rua Força Pública, 89 - Centro<br/>Guarulhos - SP, 07012-030<br/>Retirada no Laboratório Maker</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <span>(11) 2436-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <span>store@eniac.edu.br</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>&copy; {new Date().getFullYear()} ENIAC Store. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Termos de Uso</a>
            <a href="#" className="hover:text-slate-300">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
