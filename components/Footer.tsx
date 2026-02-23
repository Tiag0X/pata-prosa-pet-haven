import React from 'react';
import { PawPrint, Instagram, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 border-b border-white/10 pb-12">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-brand-cream text-brand-dark p-2 rounded-xl">
                <PawPrint size={24} fill="currentColor" />
              </div>
              <div className="leading-tight font-display font-bold text-xl">
                Pata & Prosa
              </div>
            </div>
            <p className="text-brand-sage leading-relaxed">
              Espaço de Convivência Pet Friendly. Onde cuidado, carinho e bem-estar caminham juntos.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-gold">Fale Conosco</h3>
            <ul className="space-y-4 text-brand-sage">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-1" size={18} />
                <span>Rua Artur Rocha, 193<br />Auxiliadora, Porto Alegre - RS<br />90450-171</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <span>(51) 9045-0171</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} />
                <a href="https://www.instagram.com/pataeprosa/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                  @pataeprosa
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-gold">Horário</h3>
            <ul className="space-y-4 text-brand-sage">
              <li className="flex justify-between">
                <span>Seg - Sex</span>
                <span className="text-white">08:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span className="text-white">09:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="text-white">Fechado</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-brand-sage text-sm">
          <p>© 2026 Autonexus Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};