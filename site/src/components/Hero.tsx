import { Download, Star, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Mais de 500 Templates Premium
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Descubra o <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SEGREDO</span> para Criar Sites Profissionais
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Acelere Seus Projetos, Multiplique Suas Vendas e Domine o Mercado Online com a Coleção Definitiva de +500 Templates WordPress
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                  href="https://drive.google.com/drive/folders/1rygf_qHgcX6n2fr0VRvAvsyJmwyV52OF?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
                >
                  <Download size={24} />
                  Baixar 5 Templates Grátis
                </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Users size={20} className="text-blue-600" />
                <span>+10.000 clientes satisfeitos</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-purple-600" />
                <span>Instalação em minutos</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Templates WordPress Profissionais" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;