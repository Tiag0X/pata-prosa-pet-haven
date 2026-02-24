import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default function App() {
  // Simple scroll progress for fun
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full bg-brand-cream overflow-x-hidden relative">
      {/* Background Decor Lines */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <path d="M-100 200C100 150 400 400 600 300C800 200 1100 500 1500 400" stroke="#3A5A40" strokeWidth="2" />
          <path d="M-50 600C200 550 500 750 800 650C1100 550 1300 850 1600 700" stroke="#3A5A40" strokeWidth="2" />
          <path d="M200 -100C300 100 100 400 300 600" stroke="#3A5A40" strokeWidth="2" />
        </svg>
      </div>

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-brand-green z-50 transition-all duration-100"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <div className="relative z-10">
        <Header />
      </div>

      <main className="flex-grow flex items-center justify-center p-4 md:p-8 relative z-10 w-full min-h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full max-w-[1400px] mx-auto place-items-center mt-12 mb-12">
          <div className="w-full aspect-video flex justify-center rounded-2xl overflow-hidden shadow-2xl relative bg-black/5" style={{ border: '4px solid var(--color-brand-cream)' }}>
            <iframe
              src="/proxy-iframe/e73b7ea5-f110-4031-b644-48b77b2a6a85.html"
              frameBorder="0"
              scrolling="no"
              allowFullScreen={true}
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          <div className="w-full aspect-video flex justify-center rounded-2xl overflow-hidden shadow-2xl relative bg-black/5" style={{ border: '4px solid var(--color-brand-cream)' }}>
            <iframe
              src="/proxy-iframe/9c1ae01d-77a8-4eed-ba26-ef908cf65c35.html"
              frameBorder="0"
              scrolling="no"
              allowFullScreen={true}
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          <div className="w-full aspect-video flex justify-center rounded-2xl overflow-hidden shadow-2xl relative bg-black/5" style={{ border: '4px solid var(--color-brand-cream)' }}>
            <iframe
              src="/proxy-iframe/e594b2b8-14ac-43f9-a867-de18fb6cfda9.html"
              frameBorder="0"
              scrolling="no"
              allowFullScreen={true}
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          <div className="w-full aspect-video flex justify-center rounded-2xl overflow-hidden shadow-2xl relative bg-black/5" style={{ border: '4px solid var(--color-brand-cream)' }}>
            <iframe
              src="/proxy-iframe/70071789-b3df-4715-8c35-f3eb2aaff209.html"
              frameBorder="0"
              scrolling="no"
              allowFullScreen={true}
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </main>

      <div className="relative z-10 w-full">
        <Footer />
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5551998188193?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20agendamento."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full font-bold shadow-2xl hover:bg-[#1ebd5b] hover:scale-105 active:scale-95 transition-all text-sm sm:text-base border-2 border-white/20"
        title="Agendar no WhatsApp"
      >
        <MessageCircle size={22} className="fill-white" />
        <span className="hidden sm:inline">Agendar</span>
      </a>
    </div>
  );
}