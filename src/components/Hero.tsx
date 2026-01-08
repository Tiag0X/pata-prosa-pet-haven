import { Button } from "@/components/ui/button";
import { Heart, PawPrint } from "lucide-react";
import heroImage from "@/assets/hero-dog.jpg";
import serviceBath from "@/assets/service-bath.jpg";
import serviceDaycare from "@/assets/service-daycare.jpg";
import serviceHotel from "@/assets/service-hotel.jpg";
import serviceCafe from "@/assets/service-cafe.jpg";
import serviceVet from "@/assets/service-vet.jpg";

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
      <div className="bg-card p-1.5 rounded-[20px] shadow-card overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full rounded-[16px] object-cover"
        />
      </div>
      {/* Speech bubble tails */}
      {tailPosition === "bottom-left" && (
        <div className="absolute -bottom-2 left-4 w-4 h-4 bg-card rounded-full" />
      )}
      {tailPosition === "bottom-right" && (
        <div className="absolute -bottom-2 right-4 w-4 h-4 bg-card rounded-full" />
      )}
      {tailPosition === "top-left" && (
        <div className="absolute -top-2 left-4 w-4 h-4 bg-card rounded-full" />
      )}
      {tailPosition === "top-right" && (
        <div className="absolute -top-2 right-4 w-4 h-4 bg-card rounded-full" />
      )}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[hsl(var(--soft-mint))]">
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

          {/* Image Collage - Speech Bubble Style */}
          <div className="relative h-[520px] md:h-[580px] lg:h-[620px]">
            {/* Row 1 - Top */}
            <SpeechBubbleImage
              src={serviceDaycare}
              alt="Golden Retriever deitado"
              className="absolute top-0 left-0 w-32 md:w-40 aspect-[4/3]"
              tailPosition="bottom-left"
            />
            <SpeechBubbleImage
              src={serviceCafe}
              alt="Bulldog francês no sofá"
              className="absolute top-0 left-36 md:left-44 w-28 md:w-32 aspect-square"
              tailPosition="bottom-right"
            />
            <SpeechBubbleImage
              src={serviceVet}
              alt="Pessoa com gato"
              className="absolute top-0 right-0 w-28 md:w-36 aspect-[3/4]"
              tailPosition="bottom-left"
            />

            {/* Row 2 - Middle */}
            <SpeechBubbleImage
              src={heroImage}
              alt="Golden Retriever sorrindo - destaque"
              className="absolute top-28 md:top-32 left-8 md:left-12 w-44 md:w-56 aspect-square z-10"
              tailPosition="bottom-right"
            />
            <SpeechBubbleImage
              src={serviceBath}
              alt="Bulldog francês sentado"
              className="absolute top-24 md:top-28 right-4 w-32 md:w-40 aspect-[3/4]"
              tailPosition="bottom-left"
            />

            {/* Row 3 - Bottom */}
            <SpeechBubbleImage
              src={serviceHotel}
              alt="Bulldog e gato juntos"
              className="absolute bottom-16 md:bottom-20 left-0 w-36 md:w-44 aspect-[4/3]"
              tailPosition="top-right"
            />
            <SpeechBubbleImage
              src={serviceDaycare}
              alt="Cachorros brincando"
              className="absolute bottom-0 left-32 md:left-40 w-36 md:w-44 aspect-[16/9]"
              tailPosition="top-left"
            />
            <SpeechBubbleImage
              src={serviceBath}
              alt="Cachorro feliz"
              className="absolute bottom-8 right-0 w-32 md:w-40 aspect-square"
              tailPosition="top-left"
            />

            {/* Badge +1000 */}
            <div className="absolute bottom-28 md:bottom-32 right-8 md:right-16 bg-card rounded-2xl shadow-card px-4 py-2.5 flex items-center gap-3 z-20">
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
