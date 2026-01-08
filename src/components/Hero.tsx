import { Button } from "./ui/button";
import { Heart, PawPrint } from "lucide-react";
import petGoldenLying from "../assets/pet-golden-lying.jpg";
import petBulldogSofa from "../assets/pet-bulldog-sofa.jpg";
import petPersonCat from "../assets/pet-person-cat.jpg";
import petGoldenMain from "../assets/pet-golden-main.jpg";
import petBulldogSitting from "../assets/pet-bulldog-sitting.jpg";
import petBulldogCat from "../assets/pet-bulldog-cat.jpg";
import petDogsPlaying from "../assets/pet-dogs-playing.jpg";
import petGoldenStanding from "../assets/pet-golden-standing.jpg";

const SpeechBubbleImage = ({ 
  src, 
  alt, 
  className = "",
  tailPosition = "none"
}: { 
  src: string; 
  alt: string; 
  className?: string;
  tailPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "none";
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="bg-card p-1 rounded-[16px] shadow-card overflow-hidden h-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-full rounded-[12px] object-cover"
        />
      </div>
      {tailPosition === "bottom-left" && (
        <svg className="absolute -bottom-2 left-3 w-4 h-3 text-card" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 12C8 12 0 8 0 0H16C16 8 8 12 8 12Z" />
        </svg>
      )}
      {tailPosition === "bottom-right" && (
        <svg className="absolute -bottom-2 right-3 w-4 h-3 text-card" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 12C8 12 0 8 0 0H16C16 8 8 12 8 12Z" />
        </svg>
      )}
      {tailPosition === "top-left" && (
        <svg className="absolute -top-2 left-3 w-4 h-3 text-card rotate-180" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 12C8 12 0 8 0 0H16C16 8 8 12 8 12Z" />
        </svg>
      )}
      {tailPosition === "top-right" && (
        <svg className="absolute -top-2 right-3 w-4 h-3 text-card rotate-180" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 12C8 12 0 8 0 0H16C16 8 8 12 8 12Z" />
        </svg>
      )}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-background">
      {/* Decorative green blob - left side */}
      <div className="absolute top-32 left-6 md:left-12 w-14 md:w-20 h-28 md:h-40 bg-primary/20 rounded-[50px] rotate-6" />
      
      {/* Small decorative elements */}
      <div className="absolute bottom-32 left-16 w-8 h-4 bg-accent/40 rounded-full" />
      <div className="absolute bottom-20 right-1/4 w-6 h-3 bg-accent/30 rounded-full" />
      
      {/* Squiggle decorations */}
      <svg className="absolute top-1/2 right-1/3 w-5 h-5 text-primary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12c2-2 4-2 6 0s4 2 6 0" />
      </svg>
      <svg className="absolute bottom-1/3 left-1/2 w-5 h-5 text-primary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12c2-2 4-2 6 0s4 2 6 0" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content - Left Side */}
          <div className="text-left space-y-6">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
              Pata & Prosa
            </h1>

            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              Onde seu pet é parte da família.
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Cuidado, carinho e bem-estar caminham juntos, oferecendo serviços completos para cães, em um ambiente seguro, acolhedor e cheio de amor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="hero" size="lg" className="rounded-full px-8 text-base" asChild>
                <a href="#contato">Agendar Visita</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 border-2 border-primary text-primary hover:bg-primary/5 text-base font-semibold" asChild>
                <a href="#servicos">Conhecer Serviços</a>
              </Button>
            </div>

            <div className="flex items-start gap-3 pt-4">
              <Heart className="w-5 h-5 text-primary fill-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Aqui, cada patinha é tratada com respeito,<br />
                atenção individual e muito afeto
              </p>
            </div>
          </div>

          {/* Image Collage - Right Side */}
          <div className="relative w-full h-[480px] md:h-[540px] lg:h-[580px]">
            {/* Row 1 - Top */}
            <SpeechBubbleImage
              src={petGoldenLying}
              alt="Golden Retriever deitado"
              className="absolute top-0 left-0 w-[120px] md:w-[145px] h-[95px] md:h-[110px]"
              tailPosition="bottom-left"
            />
            <SpeechBubbleImage
              src={petBulldogSofa}
              alt="Bulldog no sofá"
              className="absolute top-0 left-[130px] md:left-[155px] w-[95px] md:w-[110px] h-[95px] md:h-[110px]"
              tailPosition="bottom-right"
            />
            <SpeechBubbleImage
              src={petPersonCat}
              alt="Pessoa com gato"
              className="absolute top-0 right-0 w-[95px] md:w-[115px] h-[125px] md:h-[145px]"
              tailPosition="bottom-left"
            />

            {/* Row 2 - Middle */}
            <SpeechBubbleImage
              src={petGoldenMain}
              alt="Golden Retriever sorrindo"
              className="absolute top-[105px] md:top-[120px] left-[20px] md:left-[30px] w-[160px] md:w-[190px] h-[160px] md:h-[190px] z-10"
              tailPosition="bottom-right"
            />
            <SpeechBubbleImage
              src={petBulldogSitting}
              alt="Bulldog sentado"
              className="absolute top-[95px] md:top-[110px] right-0 w-[110px] md:w-[130px] h-[150px] md:h-[175px]"
              tailPosition="bottom-left"
            />

            {/* Row 3 - Bottom */}
            <SpeechBubbleImage
              src={petBulldogCat}
              alt="Bulldog e gato juntos"
              className="absolute bottom-[80px] md:bottom-[95px] left-0 w-[140px] md:w-[165px] h-[105px] md:h-[120px]"
              tailPosition="top-right"
            />
            <SpeechBubbleImage
              src={petDogsPlaying}
              alt="Cachorros brincando"
              className="absolute bottom-0 left-[90px] md:left-[110px] w-[150px] md:w-[180px] h-[85px] md:h-[100px]"
              tailPosition="top-left"
            />
            <SpeechBubbleImage
              src={petGoldenStanding}
              alt="Golden Retriever"
              className="absolute bottom-0 right-0 w-[110px] md:w-[130px] h-[120px] md:h-[140px]"
              tailPosition="top-left"
            />

            {/* Badge +1000 */}
            <div className="absolute bottom-[110px] md:bottom-[130px] right-[45px] md:right-[60px] bg-card rounded-2xl shadow-card px-4 py-2 flex items-center gap-3 z-20">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-xl text-foreground">+1000</p>
                <p className="text-xs text-muted-foreground">Pets felizes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
          <path
            d="M0 80V50C180 65 360 75 540 70C720 65 900 40 1080 35C1260 30 1350 45 1440 50V80H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
