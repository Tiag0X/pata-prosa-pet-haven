import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-dog.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 paw-pattern opacity-50" />
      
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="animate-paw">🐾</span>
              <span>Espaço de Convivência Pet Friendly</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Pata & Prosa
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Na Pata & Prosa, seu pet é parte da família. Criamos um espaço onde cuidado, 
              carinho e bem-estar caminham juntos, oferecendo serviços completos para cães, 
              em um ambiente seguro, acolhedor e cheio de amor.
            </p>

            <p className="text-base text-foreground/80 flex items-center justify-center lg:justify-start gap-2">
              <Heart className="w-5 h-5 text-primary fill-primary" />
              Aqui, cada patinha é tratada com respeito, atenção individual e muito afeto 💛
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contato">Agendar Visita</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#servicos">Conhecer Serviços</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-golden-light/30 rounded-full blur-2xl" />
              
              <img
                src={heroImage}
                alt="Cachorro feliz sendo cuidado na Pata & Prosa"
                className="relative rounded-3xl shadow-elevated w-full object-cover aspect-[4/3]"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💛</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">+1000</p>
                  <p className="text-sm text-muted-foreground">Pets felizes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120V60C240 20 480 0 720 0C960 0 1200 20 1440 60V120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
