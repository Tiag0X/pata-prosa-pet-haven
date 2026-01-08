import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <div
        className="fixed top-0 left-0 h-1 bg-[#3D7A5A] z-50 transition-all duration-100"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Header />

      <main className="flex-grow">
        <Hero />
        <About />
        <Differentials />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
