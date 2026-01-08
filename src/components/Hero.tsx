import { Button } from "@/components/ui/button";
import { Heart, PawPrint } from "lucide-react";
import heroImage from "@/assets/hero-dog.jpg";
import serviceBath from "@/assets/service-bath.jpg";
import serviceDaycare from "@/assets/service-daycare.jpg";
import serviceHotel from "@/assets/service-hotel.jpg";
import serviceCafe from "@/assets/service-cafe.jpg";
import serviceVet from "@/assets/service-vet.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[hsl(var(--soft-mint))]">
      {/* Decorative shapes */}
      <div className="absolute top-32 left-8 w-16 h-24 bg-primary/20 rounded-full rotate-12" />
      <div className="absolute bottom-24 left-16 w-12 h-8 bg-accent/30 rounded-full" />
      <div className="absolute top-1/2 right-4 w-6 h-6 bg-primary/30 rounded-full" />

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

          {/* Image Collage */}
          <div className="relative h-[500px] md:h-[600px]">
            {/* Main large image - center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-6 h-6 border-l-4 border-t-4 border-primary rounded-tl-lg" />
                <img
                  src={heroImage}
                  alt="Golden Retriever feliz"
                  className="w-full rounded-3xl shadow-elevated object-cover aspect-[3/4]"
                />
              </div>
            </div>

            {/* Top right image */}
            <div className="absolute top-0 right-0 w-32 md:w-44">
              <div className="bg-card p-2 rounded-2xl shadow-card">
                <img
                  src={serviceCafe}
                  alt="Pet no café"
                  className="w-full rounded-xl object-cover aspect-square"
                />
              </div>
            </div>

            {/* Top right second image */}
            <div className="absolute top-28 md:top-36 right-0 w-28 md:w-36">
              <div className="bg-card p-2 rounded-2xl shadow-card">
                <img
                  src={serviceVet}
                  alt="Gato sendo cuidado"
                  className="w-full rounded-xl object-cover aspect-square"
                />
              </div>
            </div>

            {/* Bottom left image */}
            <div className="absolute bottom-20 left-0 w-28 md:w-36">
              <div className="bg-card p-2 rounded-2xl shadow-card">
                <img
                  src={serviceDaycare}
                  alt="Cachorro na creche"
                  className="w-full rounded-xl object-cover aspect-square"
                />
              </div>
            </div>

            {/* Bottom right image */}
            <div className="absolute bottom-0 right-8 w-28 md:w-36">
              <div className="bg-card p-2 rounded-2xl shadow-card">
                <img
                  src={serviceBath}
                  alt="Cachorro feliz"
                  className="w-full rounded-xl object-cover aspect-square"
                />
              </div>
            </div>

            {/* Bottom center image */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/4 w-24 md:w-32">
              <div className="bg-card p-2 rounded-2xl shadow-card">
                <img
                  src={serviceHotel}
                  alt="Pet brincando"
                  className="w-full rounded-xl object-cover aspect-square"
                />
              </div>
            </div>

            {/* Badge +1000 */}
            <div className="absolute bottom-32 right-0 bg-card rounded-2xl shadow-card px-5 py-3 flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <PawPrint className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-2xl text-foreground">+1000</p>
                <p className="text-sm text-muted-foreground">Pets felizes</p>
              </div>
            </div>

            {/* Decorative speech bubble tails */}
            <div className="absolute top-16 right-36 w-4 h-4">
              <svg viewBox="0 0 20 20" fill="hsl(var(--card))">
                <path d="M0 0 Q10 10 20 0 Q10 5 0 0" />
              </svg>
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
