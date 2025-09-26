import React from 'react';
import { Palette, Smartphone, Search, Headphones, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Designs Profissionais e Modernos',
    description: 'Desenvolvidos por especialistas para garantir um visual elegante, limpo e atraente que impressiona seus visitantes.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Zap,
    title: 'Totalmente Customizáveis',
    description: 'Altere cores, fontes, layouts e adicione funcionalidades extras para deixar o site com a sua cara, sem precisar de código.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Smartphone,
    title: 'Otimizados para Todos os Dispositivos',
    description: '100% responsivos, adaptando-se perfeitamente a qualquer tela — de smartphones a desktops.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Search,
    title: 'SEO Amigável',
    description: 'Criados seguindo as melhores práticas de SEO, ajudando seu site a ser melhor posicionado nos resultados de busca.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Headphones,
    title: 'Suporte Exclusivo',
    description: 'Nossa equipe de suporte está sempre à sua disposição para ajudar em cada etapa do processo.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Shield,
    title: 'Código Limpo e Seguro',
    description: 'Templates desenvolvidos com código otimizado, seguro e seguindo os padrões mais atuais do WordPress.',
    color: 'from-indigo-500 to-indigo-600'
  }
];

const Features = () => {
  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher nossos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">templates?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada template foi cuidadosamente desenvolvido para oferecer a melhor experiência tanto para você quanto para seus visitantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;