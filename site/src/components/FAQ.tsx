import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Como vou receber o produto após a compra?',
    answer: 'Após a confirmação do pagamento, você receberá um e-mail da Hotmart com um link para baixar um arquivo em formato zip ou rar. Dentro dele, haverá um documento com o link de acesso para o painel no Google Drive onde todos os templates estão armazenados.'
  },
  {
    question: 'Quanto tempo leva para eu receber o acesso ao produto?',
    answer: 'O acesso é liberado imediatamente após a confirmação do pagamento. Você receberá por e-mail as credenciais de acesso em poucos minutos. Para pagamentos via boleto, o prazo pode ser de 1 a 3 dias úteis para compensação.'
  },
  {
    question: 'Onde os templates estão armazenados?',
    answer: 'Todos os 500+ templates estão armazenados de forma segura em uma pasta no Google Drive. Você terá acesso vitalício a esse conteúdo.'
  },
  {
    question: 'Preciso de algum programa específico para acessar os arquivos?',
    answer: 'Sim. Os arquivos são compactados em formato zip ou rar. Recomendamos o programa como o Winrar ou 7-zip (ambos gratuitos) para descompactar os arquivos e acessar o conteúdo.'
  },
  {
    question: 'O produto inclui o WordPress e a hospedagem?',
    answer: 'Não. Este produto é uma coleção de templates prontos. Você precisará de um serviço de hospedagem e um domínio próprio para sua instalação do WordPress, que é uma plataforma gratuita, mas você precisará de um serviço de hospedagem.'
  },
  {
    question: 'Os templates são compatíveis com qualquer versão do WordPress?',
    answer: 'Sim, os templates são atualizados e compatíveis com versões mais recentes do WordPress, garantindo o funcionamento correto e seguro do seu site.'
  },
  {
    question: 'Como faço para instalar os templates?',
    answer: 'Cada template vem com um arquivo de instalação e na maioria dos casos, instruções detalhadas. O processo é simples: basta fazer o upload do arquivo para sua instalação do WordPress e seguir os etapas de ativação.'
  },
  {
    question: 'Os templates vêm com suporte?',
    answer: 'Este produto é uma biblioteca de templates prontos. Não oferecemos suporte individual para instalação ou personalização, no entanto, muitos templates incluem tutoriais do desenvolvedor original que podem ser úteis.'
  },
  {
    question: 'Posso usar os templates em mais de um site?',
    answer: 'Sim, você pode usar os templates em quantos sites desejar. Não há limitação de uso após a compra.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dúvidas <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Encontre respostas para as perguntas mais comuns sobre nossa coleção de templates.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Entre em contato conosco
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;