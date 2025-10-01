import React, { useState } from "react";

function Capture() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço tipo Mailchimp, Brevo, ConvertKit etc.
    alert(`E-mail cadastrado: ${email}`);
    window.location.href = "/obrigado"; // redireciona para página de obrigado
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Ganhe 10 Templates WordPress Grátis 🎁
        </h1>
        <p className="text-gray-600 mb-6">
          Baixe agora mesmo um pack exclusivo de templates profissionais para
          seu site WordPress.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Digite seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Quero meus templates grátis
          </button>
        </form>
      </div>
    </div>
  );
}

export default Capture;
