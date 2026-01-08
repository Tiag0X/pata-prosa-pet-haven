import React from 'react';
import { PawPrint, MessageCircle, Phone } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-brand-cream">
      <div className="max-w-5xl mx-auto bg-brand-green rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">

        {/* Background Patterns */}
        <PawPrint className="absolute top-10 left-10 text-white/10 rotate-[-15deg]" size={100} />
        <PawPrint className="absolute bottom-10 right-10 text-white/10 rotate-[15deg]" size={120} />

        <div className="relative z-10 space-y-8">
          <div className="inline-block bg-brand-gold text-brand-dark px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-2">
            Venha nos visitar
          </div>

          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
            Seu pet merece esse cuidado especial.<br />
            Agende uma visita e venha tomar um café conosco.
          </h2>

          <p className="text-brand-sage text-lg md:text-xl max-w-2xl mx-auto">
            Agende um horário ou venha nos conhecer.<br />
            Na Pata & Prosa, carinho é rotina 💛
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a href="https://wa.me/555190450171" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white text-brand-green px-10 py-5 rounded-full font-extrabold hover:bg-brand-gold hover:text-brand-dark transition-all transform hover:-translate-y-1 shadow-2xl hover:scale-105 active:scale-95">
              <MessageCircle size={22} />
              Chamar no WhatsApp
            </a>
            <a href="tel:+555190450171" className="flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-extrabold hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
              <Phone size={22} />
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};