import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Location } from './components/Location';
import { ContactForm } from './components/ContactForm';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

export default function App() {
  // Simple scroll progress for fun
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-brand-green z-50 transition-all duration-100"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Header />

      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <Services />
        <Location />
        <ContactForm />
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}