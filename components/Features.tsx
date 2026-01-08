import React from 'react';
import { Star, Clock, Lock, Smile, Home } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/10 p-3 rounded-full mb-4">
            <Star className="text-brand-gold" size={32} />
          </div>
          <h2 className="text-4xl font-display font-bold mb-4">Nosso Diferencial</h2>
          <p className="text-xl text-brand-sage max-w-2xl mx-auto">
            Por que escolher a Pata & Prosa? <br />
            <span className="text-base font-normal opacity-80">Aqui, não cuidamos apenas de pets — cuidamos de histórias, vínculos e famílias.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
            <Smile className="text-brand-gold mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Monitoramento Constante</h3>
            <p className="text-brand-sage">Seu pet sob olhares atentos durante todas as brincadeiras.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
            <Clock className="text-brand-gold mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Socialização Estruturada</h3>
            <p className="text-brand-sage">Grupos divididos por temperamento e porte para interações saudáveis.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
            <Lock className="text-brand-gold mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Transparência Total</h3>
            <p className="text-brand-sage">Acompanhe a rotina do seu cão e fique tranquilo onde estiver.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors md:col-start-1 lg:col-start-auto">
            <Star className="text-brand-gold mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Higiene Rigorosa</h3>
            <p className="text-brand-sage">Protocolos sanitários de nível hospitalar para saúde de todos.</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors md:col-span-2 lg:col-span-1 md:text-center lg:text-left">
            <Home className="text-brand-gold mb-4 inline-block lg:block" size={32} />
            <h3 className="text-xl font-bold mb-2">Localização Privilegiada</h3>
            <p className="text-brand-sage">Fácil acesso no coração do bairro Auxiliadora.</p>
          </div>
        </div>
      </div>
    </section>
  );
};