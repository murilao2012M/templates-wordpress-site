import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Templates WP
              </h1>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Início
              </a>
              <a href="#recursos" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Recursos
              </a>
              <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Depoimentos
              </a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                FAQ
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
              <Download size={18} />
              Comprar Agora
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Início
              </a>
              <a href="#recursos" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Recursos
              </a>
              <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Depoimentos
              </a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                FAQ
              </a>
              <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold flex items-center justify-center gap-2">
                <a href="https://pay.hotmart.com/P94652225R"></a>
                Comprar Agora
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;