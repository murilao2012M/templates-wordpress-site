import React from 'react';
import { Mail, Shield, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Templates WP
            </h3>
            <p className="text-gray-400 leading-relaxed">
              A maior coleção de templates premium para WordPress. Transforme sua presença online com designs profissionais e modernos.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Garantias</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">Acesso vitalício</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">Suporte por email</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Informações Legais</h4>
            <div className="space-y-2 text-gray-400">
              <p>Este produto é comercializado com apoio da Hotmart.</p>
              <p>A plataforma não faz controle editorial prévio dos produtos comercializados.</p>
              <p>+500 TEMPLATES WORDPRESS. Todos os direitos reservados © 2025</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p className="mb-4">
              Este site não é afiliado ao WordPress.org. WordPress é uma marca registrada da WordPress Foundation.
            </p>
            <p>
              Desenvolvido com ❤️ para profissionais que buscam excelência em web design.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;