import React from 'react';
import { MapPin, Phone, Instagram } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Info Side */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-brand-green font-bold uppercase tracking-wider text-sm">
              <MapPin size={18} />
              <span>Onde Estamos</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-brand-dark">Venha nos Conhecer!</h2>

            <div className="space-y-8 mt-8">
              <div className="flex gap-6 items-start">
                <div className="bg-brand-cream p-4 rounded-full text-brand-green">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-dark">Endereço</h3>
                  <p className="text-gray-600 text-lg">Rua Artur Rocha, 193</p>
                  <p className="text-gray-600 text-lg">Auxiliadora, Porto Alegre - RS, 90450-171</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-brand-cream p-4 rounded-full text-brand-green">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-dark">Telefone</h3>
                  <p className="text-gray-600 text-lg font-mono">(51) 9045-0171</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-brand-cream p-4 rounded-full text-brand-green">
                  <Instagram size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-dark">Instagram</h3>
                  <a href="https://www.instagram.com/pataeprosa/" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-lg font-medium hover:text-brand-green transition-colors">
                    @pataeprosa
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="order-1 lg:order-2">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-brand-cream h-[500px] relative group">
              <div className="absolute inset-0 bg-transparent pointer-events-none lg:pointer-events-auto z-10 lg:hidden flex items-center justify-center">
                <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-600 shadow-sm opacity-0 group-active:opacity-100 transition-opacity">
                  Use dois dedos para mover
                </span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.3!2d-51.2!3d-30.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951978255b6b6b7b%3A0x8b8b8b8b8b8b8b8b!2sRua%20Artur%20Rocha%2C%20193%20-%20Auxiliadora%2C%20Porto%20Alegre%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Pata & Prosa"
                className="pointer-events-auto"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};