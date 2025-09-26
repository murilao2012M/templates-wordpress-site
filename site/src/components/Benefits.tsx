import React from 'react';
import { CheckCircle, Clock, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Economize Tempo Valioso',
    description: 'Não perca mais tempo procurando o design perfeito. Tenha acesso imediato a mais de 500 opções profissionais.',
    stats: '90% menos tempo'
  },
  {
    icon: TrendingUp,
    title: 'Aumente suas Conversões',
    description: 'Templates otimizados para conversão que transformam visitantes em clientes de forma mais eficiente.',
    stats: '+150% conversões'
  },
  {
    icon: Users,
    title: 'Impressione seus Clientes',
    description: 'Designs profissionais que transmitem credibilidade e confiança, elevando a percepção da sua marca.',
    stats: '100% profissional'
  },
  {
    icon: CheckCircle,
    title: 'Garantia de Qualidade',
    description: 'Todos os templates passam por rigorosos testes de qualidade e compatibilidade antes de serem disponibilizados.',
    stats: 'Qualidade garantida'
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforme seu negócio <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">hoje mesmo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como nossa coleção de templates pode revolucionar sua presença online e acelerar seus resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex-shrink-0">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {benefit.stats}
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Finalmente tudo mudou!
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Imagine ter em suas mãos uma biblioteca ilimitada de designs prontos, modernos e 100% personalizáveis. Apresentamos a +500 Templates WordPress: a solução completa para quem busca eficiência, qualidade e resultados profissionais.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">Conteúdos selecionados para todos os desenvolvimentos</h4>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">Fácil de utilizar</h4>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">Construir Apenas Selecione e Tenha os Templates em Seu Site Hoje Mesmo</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;