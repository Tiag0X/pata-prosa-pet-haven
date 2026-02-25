import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 w-full bg-brand-cream/90 backdrop-blur-md z-40 border-b border-brand-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/verde.png" alt="Pata & Prosa" width={1000} height={320} className="h-32 sm:h-40 w-auto hover:scale-105 transition-transform cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};