import { Leaf, Heart, Shield, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Amor pelos Animais",
      description: "Cada pet é tratado com carinho e dedicação",
    },
    {
      icon: Shield,
      title: "Ambiente Seguro",
      description: "Instalações pensadas para o bem-estar animal",
    },
    {
      icon: Users,
      title: "Equipe Capacitada",
      description: "Profissionais apaixonados por pets",
    },
    {
      icon: Leaf,
      title: "Espaço Natural",
      description: "Ambiente acolhedor e tranquilo",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-leaf mb-4">
            <Leaf className="w-5 h-5" />
            <span className="font-medium">Quem Somos</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Mais do que um Pet Shop
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            A Pata & Prosa nasceu do amor pelos animais e da vontade de oferecer um espaço 
            diferenciado, onde tutores e pets se sintam em casa. Somos um espaço de convivência, 
            pensado para promover conforto, segurança e qualidade de vida.
          </p>

          <p className="text-base text-foreground/80 mt-4 font-medium">
            Nosso compromisso é cuidar do seu pet como se fosse nosso — com responsabilidade, 
            empatia e profissionais capacitados.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-background rounded-2xl p-6 text-center card-hover shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
