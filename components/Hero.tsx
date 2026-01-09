import React, { useEffect, useState } from 'react';
import { Heart, PawPrint } from 'lucide-react';

// List of all available images in public/pet-random
const PET_IMAGES = [
  "35513168-ai-gerado-cachorro-sorrir-em-fundo-isolado-em-laranja-gratis-foto.jpg",
  "Produtos-para-pets.webp",
  "alegre.jpg",
  "cachorro-feliz.jpg",
  "convivencia-capa.jpg",
  "download (1).jpg",
  "download (2).jpg",
  "download (3).jpg",
  "download (4).jpg",
  "download.jpg",
  "images (1).jpg",
  "images (2).jpg",
  "images (3).jpg",
  "images.jpg",
  "istockphoto-1041987488-612x612.jpg",
  "istockphoto-1503385646-612x612.jpg",
  "pag-18-CAES-E-GATOS.jpg",
  "sinais-que-indicam-se-o-seu-cachorro-esta-ou-nao-feliz.jpg"
];

export const Hero: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle and pick 5 unique images
    const shuffled = [...PET_IMAGES].sort(() => 0.5 - Math.random());
    setImages(shuffled.slice(0, 5).map(img => `/pet-random/${img}`));
  }, []);

  // Use a placeholder if images haven't loaded/hydrated yet (or initial server render)
  // to avoid undefined access. We can default to the first 5 in original order or placeholders.
  const displayImages = images.length > 0 ? images : Array(5).fill('/verde_favicon.png');

  return (
    <section className="relative pt-16 pb-24 overflow-hidden bg-brand-cream min-h-[600px] flex items-center">
      {/* Background Decor Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200C100 150 400 400 600 300C800 200 1100 500 1500 400" stroke="#3A5A40" strokeWidth="2" />
          <path d="M-50 600C200 550 500 750 800 650C1100 550 1300 850 1600 700" stroke="#3A5A40" strokeWidth="2" />
          <path d="M200 -100C300 100 100 400 300 600" stroke="#3A5A40" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content Left */}
          <div className="space-y-10">
            <div className="space-y-6">
              <img src="/verde.png" alt="Pata & Prosa" className="hidden md:block h-32 md:h-40 w-auto" />
              <p className="text-2xl md:text-3xl text-brand-green font-bold leading-tight">
                Seu pet merece viver momentos extraordinários.
              </p>
            </div>

            <p className="text-xl text-brand-dark/70 leading-relaxed max-w-lg font-medium">
              O espaço de convivência mais completo do bairro <strong className="text-brand-green">Auxiliadora</strong>. Banho, creche e hospedagem com atendimento humanizado e segurança em <strong className="text-brand-green">Porto Alegre</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#contato" className="flex items-center justify-center bg-brand-dark text-white px-10 py-4 rounded-full font-extrabold hover:bg-brand-green transition-all shadow-2xl shadow-brand-dark/20 hover:scale-105 active:scale-95">
                Agendar pelo WhatsApp
              </a>
              <a href="#sobre" className="flex items-center justify-center bg-transparent border-[3px] border-brand-dark text-brand-dark px-10 py-4 rounded-full font-extrabold hover:bg-brand-dark hover:text-white transition-all hover:shadow-xl hover:scale-105 active:scale-95">
                Conhecer o Espaço
              </a>
            </div>

            <div className="flex items-center gap-4 text-brand-dark/60 font-medium">
              <div className="bg-brand-dark/10 p-2 rounded-full">
                <Heart size={20} className="fill-brand-green text-brand-green" />
              </div>
              <p className="text-sm max-w-[280px]">Aqui, cada patinha é tratada com respeito, atenção individual e muito afeto.</p>
            </div>
          </div>

          {/* Organic Collage Right */}
          <div className="relative h-[550px] w-full mt-12 lg:mt-0">
            {/* Main Center Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[380px] z-20 border-[6px] border-brand-cream overflow-hidden shadow-2xl" style={{ borderRadius: '40% 60% 70% 30% / 50% 60% 40% 50%' }}>
              <img
                src={displayImages[0]}
                className="w-full h-full object-cover"
                alt="Pet"
              />
            </div>

            {/* Top Left Blob */}
            <div className="absolute top-0 left-0 w-[200px] h-[200px] z-10 border-[4px] border-brand-cream overflow-hidden shadow-xl rotate-[-5deg]" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}>
              <img
                src={displayImages[1]}
                className="w-full h-full object-cover"
                alt="Pet"
              />
            </div>

            {/* Top Right Blob */}
            <div className="absolute top-[20px] right-[40px] w-[220px] h-[180px] z-0 border-[4px] border-brand-cream overflow-hidden shadow-lg rotate-[8deg]" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}>
              <img
                src={displayImages[2]}
                className="w-full h-full object-cover"
                alt="Pet"
              />
            </div>

            {/* Bottom Left Blob */}
            <div className="absolute bottom-[20px] left-[40px] w-[240px] h-[200px] z-10 border-[4px] border-brand-cream overflow-hidden shadow-lg rotate-[-10deg]" style={{ borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%' }}>
              <img
                src={displayImages[3]}
                className="w-full h-full object-cover"
                alt="Pet"
              />
            </div>

            {/* Bottom Right Blob */}
            <div className="absolute bottom-0 right-0 w-[200px] h-[240px] z-10 border-[4px] border-brand-cream overflow-hidden shadow-xl rotate-[5deg]" style={{ borderRadius: '40% 60% 40% 60% / 40% 40% 60% 60%' }}>
              <img
                src={displayImages[4]}
                className="w-full h-full object-cover"
                alt="Pet"
              />
            </div>

            {/* Stats Badge */}
            <div className="absolute bottom-[80px] right-[-20px] bg-white p-5 rounded-3xl shadow-2xl z-30 flex items-center gap-4 rotate-[-3deg] border border-brand-green/10">
              <div className="bg-brand-cream p-2 rounded-xl text-brand-green">
                <PawPrint size={32} fill="currentColor" />
              </div>
              <div className="leading-tight">
                <p className="text-3xl font-extrabold text-brand-dark">+1000</p>
                <p className="text-xs font-bold text-brand-green uppercase tracking-widest">Pets felizes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};