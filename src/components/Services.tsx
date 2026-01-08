import { Check, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

import serviceBath from "../assets/service-bath.jpg";
import serviceDaycare from "../assets/service-daycare.jpg";
import serviceHotel from "../assets/service-hotel.jpg";
import serviceCafe from "../assets/service-cafe.jpg";
import serviceVet from "../assets/service-vet.jpg";

const Services = () => {
  const services = [
    {
      icon: "🛁",
      title: "Banho & Tosa",
      description: "Higiene, estética e bem-estar em cada detalhe. Utilizamos produtos de qualidade, técnicas seguras e respeitamos o tempo e o temperamento de cada animal.",
      features: ["Banho higiênico", "Banho terapêutico", "Tosa higiênica e estética", "Escovação e cuidados especiais"],
      image: serviceBath,
    },
    {
      icon: "🏡",
      title: "Creche Canina",
      description: "Um espaço para seu pet brincar, socializar e gastar energia com segurança. Ideal para cães que ficam muito tempo sozinhos ou precisam de estímulos diários.",
      features: ["Atividades supervisionadas", "Socialização saudável", "Rotina estruturada", "Ambiente limpo e monitorado"],
      image: serviceDaycare,
    },
    {
      icon: "🐕",
      title: "Hospedagem Pet",
      description: "Vai viajar? Seu pet fica tranquilo aqui. Aqui, seu pet nunca se sente sozinho.",
      features: ["Ambiente aconchegante", "Atenção individual", "Rotina de alimentação e descanso", "Muito carinho durante toda a estadia"],
      image: serviceHotel,
    },
    {
      icon: "☕",
      title: "Café Pet Friendly",
      description: "Um cantinho especial para tutores relaxarem enquanto seus pets aproveitam o ambiente.",
      features: ["Espaço acolhedor", "Clima leve e descontraído", "Perfeito para encontros entre tutores e pets"],
      image: serviceCafe,
    },
    {
      icon: "🩺",
      title: "Consultas Veterinárias",
      description: "Cuidado profissional para a saúde do seu melhor amigo.",
      features: ["Atendimento responsável", "Avaliações preventivas", "Orientações claras e humanizadas"],
      image: serviceVet,
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-background paw-pattern">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Nossos Serviços</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cuidado Completo para seu Pet
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma experiência única de cuidado e carinho, com serviços pensados 
            para atender todas as necessidades do seu companheiro.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center bg-card rounded-3xl p-6 lg:p-8 shadow-soft card-hover`}
            >
              {/* Image */}
              <div className="w-full lg:w-2/5 flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-square object-cover rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-3/5 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{service.icon}</span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-foreground/80">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="mt-4" asChild>
                  <a href="#contato">Saber mais</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
