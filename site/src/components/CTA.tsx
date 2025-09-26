import React, { useState, useEffect } from 'react';
import { Download, Clock, CheckCircle } from 'lucide-react';

const CTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); // 2 dias a partir de hoje

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Promoção por TEMPO LIMITADO
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Garanta a compra já ou antes que acabe a promoção
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-2xl p-4 mb-2">
                <span className="text-3xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-sm opacity-80">DIAS</span>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-2xl p-4 mb-2">
                <span className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-sm opacity-80">HORAS</span>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-2xl p-4 mb-2">
                <span className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-sm opacity-80">MINUTOS</span>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-2xl p-4 mb-2">
                <span className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
              </div>
              <span className="text-sm opacity-80">SEGUNDOS</span>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="text-6xl font-bold mb-4">
              R$ 58,97
            </div>
            <p className="text-xl opacity-90">
              Mais de 500 templates premium por menos que o preço de um template individual
            </p>
          </div>

          <a
            href="https://pay.hotmart.com/P94652225R" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3 mx-auto mb-6"
          >
            <Download size={28} />
            COMPRAR AGORA - R$ 58,97
          </a>


          <div className="flex items-center justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Suporte incluso</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg opacity-90 mb-4">
            🔒 Compra 100% segura via Hotmart
          </p>
          <p className="text-sm opacity-75">
            Seus dados estão protegidos com criptografia SSL
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;