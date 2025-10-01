import React from "react";

function Obrigado() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          🎉 Obrigado pelo cadastro!
        </h1>
        <p className="text-gray-700 mb-6">
          Seu pack grátis de templates já está a caminho do seu e-mail.
        </p>
        <a
          href="/venda"
          className="block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          👉 Aproveite a Oferta Especial: 500+ Templates Premium
        </a>
      </div>
    </div>
  );
}

export default Obrigado;
