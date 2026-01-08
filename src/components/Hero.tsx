import { Button } from "@/components/ui/button";
import { Heart, PawPrint } from "lucide-react";
import petGoldenLying from "@/assets/pet-golden-lying.jpg";
import petBulldogSofa from "@/assets/pet-bulldog-sofa.jpg";
import petPersonCat from "@/assets/pet-person-cat.jpg";
import petGoldenMain from "@/assets/pet-golden-main.jpg";
import petBulldogSitting from "@/assets/pet-bulldog-sitting.jpg";
import petBulldogCat from "@/assets/pet-bulldog-cat.jpg";
import petDogsPlaying from "@/assets/pet-dogs-playing.jpg";
import petGoldenStanding from "@/assets/pet-golden-standing.jpg";

const SpeechBubbleImage = ({ 
  src, 
  alt, 
  className = "",
  tailPosition = "none",
  size = "md"
}: { 
  src: string; 
  alt: string; 
  className?: string;
  tailPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "none";
  size?: "sm" | "md" | "lg";
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
      {/* Speech bubble tails */}
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
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[hsl(var(--soft-mint))]">
      {/* Decorative squiggles */}
      <svg className="absolute top-40 left-12 w-6 h-6 text-primary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12c2-2 4-2 6 0s4 2 6 0" />
      </svg>
      <svg className="absolute bottom-40 left-20 w-5 h-5 text-primary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12c2-2 4-2 6 0s4 2 6 0" />
      </svg>
      <svg className="absolute top-1/3 right-8 w-5 h-5 text-primary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12c2-2 4-2 6 0s4 2 6 0" />
      </svg>
      
      {/* Decorative blob */}
      <div className="absolute top-32 left-8 w-16 h-24 bg-primary/15 rounded-[40px] rotate-12" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-left space-y-5">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
              Pata & Prosa
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-foreground">
              Onde seu pet é parte da família.
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Cuidado, carinho e bem-estar caminham juntos, oferecendo serviços completos para cães, em um ambiente seguro, acolhedor e cheio de amor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="hero" size="lg" className="rounded-full px-8" asChild>
                <a href="#contato">Agendar Visita</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 border-primary text-primary hover:bg-primary/5" asChild>
                <a href="#servicos">Conhecer Serviços</a>
              </Button>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <Heart className="w-5 h-5 text-primary fill-primary" />
              <p className="text-sm text-muted-foreground">
                Aqui, cada patinha é tratada com respeito, atenção individual e muito afeto
              </p>
            </div>
          </div>

          {/* Image Collage - Speech Bubble Style Grid */}
          <div className="relative w-full h-[500px] md:h-[560px] lg:h-[600px]">
            {/* Row 1 */}
            <SpeechBubbleImage
              src={petGoldenLying}
              alt="Golden Retriever deitado"
              className="absolute top-0 left-0 w-[130px] md:w-[150px] h-[100px] md:h-[115px]"
              tailPosition="bottom-left"
            />
            <SpeechBubbleImage
              src={petBulldogSofa}
              alt="Bulldog no sofá"
              className="absolute top-0 left-[140px] md:left-[160px] w-[100px] md:w-[115px] h-[100px] md:h-[115px]"
              tailPosition="bottom-right"
            />
            <SpeechBubbleImage
              src={petPersonCat}
              alt="Pessoa com gato"
              className="absolute top-0 right-0 w-[100px] md:w-[120px] h-[130px] md:h-[150px]"
              tailPosition="bottom-left"
            />

            {/* Row 2 - Main center images */}
            <SpeechBubbleImage
              src={petGoldenMain}
              alt="Golden Retriever sorrindo"
              className="absolute top-[110px] md:top-[125px] left-0 w-[170px] md:w-[200px] h-[170px] md:h-[200px] z-10"
              tailPosition="bottom-right"
            />
            <SpeechBubbleImage
              src={petBulldogSitting}
              alt="Bulldog sentado"
              className="absolute top-[100px] md:top-[115px] right-0 w-[120px] md:w-[140px] h-[160px] md:h-[180px]"
              tailPosition="bottom-left"
            />

            {/* Row 3 - Bottom */}
            <SpeechBubbleImage
              src={petBulldogCat}
              alt="Bulldog e gato juntos"
              className="absolute bottom-[85px] md:bottom-[100px] left-0 w-[150px] md:w-[175px] h-[110px] md:h-[130px]"
              tailPosition="top-right"
            />
            <SpeechBubbleImage
              src={petDogsPlaying}
              alt="Cachorros brincando"
              className="absolute bottom-0 left-[100px] md:left-[120px] w-[160px] md:w-[190px] h-[90px] md:h-[105px]"
              tailPosition="top-left"
            />
            <SpeechBubbleImage
              src={petGoldenStanding}
              alt="Golden Retriever"
              className="absolute bottom-0 right-0 w-[120px] md:w-[140px] h-[130px] md:h-[150px]"
              tailPosition="top-left"
            />

            {/* Badge +1000 */}
            <div className="absolute bottom-[115px] md:bottom-[135px] right-[50px] md:right-[70px] bg-card rounded-2xl shadow-card px-4 py-2.5 flex items-center gap-3 z-20">
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
            d="M0 80V40C120 60 240 70 360 60C480 50 600 30 720 25C840 20 960 30 1080 40C1200 50 1320 60 1440 55V80H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
