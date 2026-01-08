import { MapPin, Phone, Instagram } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <span className="text-xl">📍</span>
              <span className="font-medium">Onde Estamos</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Venha nos Conhecer!
            </h2>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Artur+Rocha+513+Porto+Alegre+RS"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background rounded-2xl p-6 text-center card-hover shadow-soft group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
              <p className="text-sm text-muted-foreground">
                Rua Artur Rocha, 513<br />
                Porto Alegre / RS
              </p>
            </a>

            <a
              href="tel:5190450171"
              className="bg-background rounded-2xl p-6 text-center card-hover shadow-soft group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
              <p className="text-sm text-muted-foreground">
                (51) 9045-0171
              </p>
            </a>

            <a
              href="https://instagram.com/pataeprosa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background rounded-2xl p-6 text-center card-hover shadow-soft group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Instagram className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Instagram</h3>
              <p className="text-sm text-muted-foreground">
                @pataeprosa
              </p>
            </a>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary to-golden-light rounded-3xl p-8 md:p-12 text-center">
            <div className="max-w-xl mx-auto">
              <span className="text-5xl mb-4 block animate-paw">🐾</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Traga seu pet para viver essa experiência!
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Agende um horário ou venha nos conhecer.<br />
                Na Pata & Prosa, <strong>carinho é rotina</strong> 💛
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-card text-foreground hover:bg-card/90"
                  asChild
                >
                  <a 
                    href="https://wa.me/5551904450171?text=Olá! Gostaria de agendar um horário na Pata %26 Prosa."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar pelo WhatsApp
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="tel:5190450171">
                    Ligar Agora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
