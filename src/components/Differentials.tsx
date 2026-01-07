import { Heart, Shield, Home, Users, Sparkles } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cada pet é tratado com atenção e carinho individual",
    },
    {
      icon: Sparkles,
      title: "Amor e Respeito",
      description: "Respeitamos o tempo e temperamento de cada animal",
    },
    {
      icon: Shield,
      title: "Ambiente Seguro",
      description: "Instalações preparadas para o bem-estar e segurança",
    },
    {
      icon: Users,
      title: "Equipe Apaixonada",
      description: "Profissionais dedicados e amantes de pets",
    },
    {
      icon: Home,
      title: "Espaço Acolhedor",
      description: "Ambiente pensado para conforto de tutores e pets",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <span className="text-xl">💛</span>
            <span className="font-medium">Nosso Diferencial</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a Pata & Prosa?
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aqui, não cuidamos apenas de pets — cuidamos de histórias, vínculos e famílias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className="group bg-card rounded-2xl p-6 text-center card-hover shadow-soft border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-golden-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
