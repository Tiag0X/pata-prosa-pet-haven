import React from 'react';
import { Scissors, Home, Dog, Coffee, Stethoscope, ArrowRight } from 'lucide-react';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  colorClass: string;
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: <Scissors size={32} />,
      title: "Banho & Tosa",
      description: "Estética aliada à saúde dermatológica. Utilizamos produtos hipoalergênicos e técnicas de manuseio Cat & Dog Friendly para um banho relaxante, sem traumas.",
      features: ["Banho Terapêutico", "Tosa da Raça", "Hidratação Profunda", "Corte de Unhas"],
      colorClass: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Home size={32} />,
      title: "Creche Canina",
      description: "A melhor solução para gastar energia e combater a ansiedade de separação. Uma rotina equilibrada entre atividades físicas, cognitivas e descanso.",
      features: ["Enriquecimento Ambiental", "Socialização Monitorada", "Relatório Diário", "Rotina Estruturada"],
      colorClass: "bg-green-50 text-green-600"
    },
    {
      icon: <Dog size={32} />,
      title: "Hospedagem Pet",
      description: "Viaje tranquilo sabendo que seu pet está em férias. Suítes confortáveis, supervisão 24h e muito afeto para que ele não sinta saudades de casa.",
      features: ["Monitoramento Noturno", "Alimentação Controlada", "Vídeos Diários", "Atenção Individual"],
      colorClass: "bg-orange-50 text-orange-600"
    },
    {
      icon: <Coffee size={32} />,
      title: "Café Pet Friendly",
      description: "Um espaço pensado para você. Desfrute de um café especial enquanto espera seu pet ou trabalha em nosso ambiente acolhedor com Wi-Fi.",
      features: ["Espaço Acolhedor", "Wi-Fi Gratuito", "Encontros de Tutores", "Clima Leve"],
      colorClass: "bg-amber-50 text-amber-800"
    },
    {
      icon: <Stethoscope size={32} />,
      title: "Consultas Veterinárias",
      description: "Prevenção e tratamento com quem entende. Nossa clínica oferece suporte completo para manter a saúde do seu pet sempre em dia.",
      features: ["Vacinação", "Check-ups", "Clínica Geral", "Atendimento Responsável"],
      colorClass: "bg-red-50 text-red-600"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-brand-cream relative">
      {/* Background SVG Curve */}
      <div className="absolute top-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-green font-bold uppercase tracking-wider text-sm">Nossos Serviços</span>
          <h2 className="text-4xl font-display font-bold text-brand-dark mt-2 mb-4">Cuidado Completo para seu Pet</h2>
          <p className="text-gray-600 text-lg">
            Oferecemos uma experiência única de cuidado e carinho, com serviços pensados para atender todas as necessidades do seu companheiro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.colorClass} group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-brand-green rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contato" className="inline-flex items-center text-brand-green font-extrabold hover:text-brand-dark transition-all hover:translate-x-1">
                Saber mais <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};