import React from "react";

function Venda() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          🚀 Tenha acesso a mais de 500 Templates WordPress Premium
        </h1>
        <p className="text-gray-600 mb-6">
          Designs profissionais, responsivos e otimizados para SEO.
        </p>
        <p className="text-2xl font-bold text-blue-600 mb-6">Apenas $10</p>

        <a
          href="https://pay.hotmart.com/P94652225R"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          💳 Comprar Agora
        </a>
      </div>
    </div>
  );
}

export default Venda;
