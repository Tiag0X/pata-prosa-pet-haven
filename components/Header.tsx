import React, { useState } from 'react';
import { Phone, Menu, X, PawPrint } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 w-full bg-brand-cream/90 backdrop-blur-md z-40 border-b border-brand-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/verde.png" alt="Pata & Prosa" className="h-16 w-auto" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-brand-dark/80 hover:text-brand-green font-semibold transition-colors text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact & CTA - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2 text-brand-dark font-semibold">
              <Phone size={18} className="text-brand-dark/70" />
              <span>(51) 9045-0171</span>
            </div>
            <a href="#contato" className="bg-brand-green text-white px-8 py-3 rounded-full font-extrabold hover:opacity-90 transition-all shadow-lg shadow-brand-green/20 hover:scale-105 active:scale-95">
              Agendar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-brand-dark p-2 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-brand-cream border-b border-brand-green/10 shadow-lg p-4 flex flex-col gap-4 animate-fade-in-down">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-brand-dark hover:text-brand-green py-2 border-b border-gray-100"
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-2 text-brand-green font-semibold">
              <Phone size={18} />
              <span>(51) 9045-0171</span>
            </div>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="bg-brand-dark text-white text-center px-6 py-3 rounded-full font-bold shadow-md">
              Agendar Visita
            </a>
          </div>
        </div>
      )}
    </header>
  );
};