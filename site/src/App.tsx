import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

function App() {
  // Coloque o useEffect aqui, dentro do componente
  useEffect(() => {
    // Cria o script do Google Ads
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-17613283259";
    document.head.appendChild(script);

    // Inicializa o gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) { window.dataLayer.push(args); }
    gtag('js', new Date());
    gtag('config', 'AW-17613283259');
  }, []); // o array vazio [] garante que rode só uma vez

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
