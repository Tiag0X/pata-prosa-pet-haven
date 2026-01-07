import { Heart, Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xl">🐾</span>
              </div>
              <span className="font-display font-bold text-xl">Pata & Prosa</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Espaço de Convivência Pet Friendly. Onde cuidado, carinho e bem-estar 
              caminham juntos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sobre" className="text-background/70 hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-background/70 hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-background/70 hover:text-primary transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/70 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/70">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Rua Artur Rocha, 513 – Porto Alegre / RS</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:5190450171" className="hover:text-primary transition-colors">
                  (51) 9045-0171
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Instagram className="w-4 h-4 text-primary" />
                <a 
                  href="https://instagram.com/pataeprosa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @pataeprosa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} Pata & Prosa. Todos os direitos reservados.
          </p>
          <p className="text-sm text-background/50 flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> para pets felizes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
