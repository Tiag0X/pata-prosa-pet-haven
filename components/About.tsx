import React from 'react';
import { ShieldCheck, Heart, Users, Trees } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/800/600?random=10"
                srcSet="https://picsum.photos/800/600?random=10 800w, https://picsum.photos/1600/1200?random=10 1600w"
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="Equipe Pata e Prosa cuidando de um cachorro"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-display font-bold text-2xl">Amor em cada detalhe</p>
              </div>
            </div>
            {/* Decor blob */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl"></div>
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full font-bold text-sm tracking-wide uppercase">
              Quem Somos
            </div>
            <h2 className="text-4xl font-display font-bold text-brand-dark">
              Mais que um Pet Shop, um segundo lar.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A <strong>Pata & Prosa</strong> nasceu para ressignificar o cuidado animal. Não somos apenas um local de passagem, mas um destino de bem-estar. Nossa estrutura foi desenhada para que seu cão socialize, gaste energia e relaxe em um ambiente livre de estresse.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Aqui, a rotina é feita de liberdade monitorada e respeito à individualidade de cada pet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex gap-4">
                <div className="shrink-0 bg-brand-cream p-3 rounded-lg h-fit">
                  <Heart className="text-brand-green" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Atendimento Humanizado</h3>
                  <p className="text-sm text-gray-500">Olhar atento às necessidades únicas do seu amigo.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 bg-brand-cream p-3 rounded-lg h-fit">
                  <ShieldCheck className="text-brand-green" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Estrutura Segura</h3>
                  <p className="text-sm text-gray-500">Ambientes monitorados e adaptados para garantir proteção.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 bg-brand-cream p-3 rounded-lg h-fit">
                  <Users className="text-brand-green" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Experiência Premium</h3>
                  <p className="text-sm text-gray-500">Qualidade superior em produtos e serviços veterinários.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 bg-brand-cream p-3 rounded-lg h-fit">
                  <Trees className="text-brand-green" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Conexão Real</h3>
                  <p className="text-sm text-gray-500">Transparência total com tutores apaixonados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};