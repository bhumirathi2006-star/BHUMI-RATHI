import React from 'react';
import { Compass, Calendar, Award, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreClick: () => void;
  onFilterCategory: (category: 'Heritage' | 'Desert' | 'Lakes' | 'Nature' | 'Holy' | 'All') => void;
}

export default function Hero({ onExploreClick, onFilterCategory }: HeroProps) {
  const quickCategories = [
    { name: 'Heritage', label: 'Royal Forts', icon: '🏰', color: 'border-brand-gold bg-brand-navy text-brand-gold', dbName: 'Heritage' as const },
    { name: 'Desert', label: 'Golden Desert', icon: '🐪', color: 'border-brand-gold bg-brand-navy text-brand-gold', dbName: 'Desert' as const },
    { name: 'Lakes', label: 'Scenic Lakes', icon: '⛵', color: 'border-brand-gold bg-brand-navy text-brand-gold', dbName: 'Lakes' as const },
    { name: 'Nature', label: 'Hill Stations', icon: '⛰️', color: 'border-brand-gold bg-brand-navy text-brand-gold', dbName: 'Nature' as const },
  ];

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-12 overflow-hidden bg-brand-navy text-white">
      {/* Background Video with structured elegant overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Cinematic Looping Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-35 scale-105 pointer-events-none"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-camel-caravan-in-the-desert-43093-large.mp4" type="video/mp4" />
          {/* Image fallback if browser blocks video autoplay */}
          <img
            src="https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1920&q=80"
            alt="Majestic Rajasthan Desert"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/95 via-brand-navy/80 to-brand-navy" />
        
        {/* Subtle geometric grid line overlays */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#FFD700_1px,transparent_1px),linear-gradient(to_bottom,#FFD700_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Structured Gold Accent Lines */}
      <div className="absolute top-24 left-0 right-0 h-1 bg-brand-gold opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-gold opacity-80" />

      {/* Hero Content inside a rigid, framed container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-12 pb-16 md:pb-24">
        
        {/* Sharp Tagline Frame */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 border-2 border-brand-gold bg-brand-navy/90 px-5 py-2 mb-8 sharp-card"
        >
          <div className="w-2.5 h-2.5 bg-brand-gold rotate-45 animate-spin-slow" />
          <span className="text-xs md:text-sm font-extrabold text-brand-gold uppercase tracking-widest">
            Welcome to the Realm of Royalty • Rajasthan, India
          </span>
          <div className="w-2.5 h-2.5 bg-brand-gold rotate-45 animate-spin-slow" />
        </motion.div>

        {/* Main Majestic Geometric Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase font-serif mt-4 sm:mt-6"
        >
          <span className="block text-white drop-shadow-md">Explore The Rich</span>
          <span className="block text-brand-gold italic tracking-wide mt-3 sm:mt-4">
            Heritage & Valor
          </span>
        </motion.h1>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-brand-cream/90 leading-relaxed font-sans font-medium tracking-wide"
        >
          Step into a vibrant realm of colossal sandstone forts, floating white marble palaces, traditional folk rhythms, spicy Mewari cuisine, and the golden silence of the Thar Desert.
        </motion.p>

        {/* Call-to-Action Buttons with Sharp Corners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 bg-brand-gold hover:bg-white text-brand-navy font-extrabold uppercase tracking-widest text-sm sharp-button transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-[4px_4px_0px_0px_rgba(255,215,0,0.4)] hover:shadow-none"
          >
            <Compass className="h-5 w-5" />
            <span>Begin Royal Journey</span>
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('tips');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white hover:border-brand-gold hover:text-brand-gold font-extrabold uppercase tracking-widest text-sm sharp-button transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Calendar className="h-5 w-5 text-brand-gold" />
            <span>Plan Best Time</span>
          </button>
        </motion.div>

        {/* Quick Category filter tiles - Sharp Geometric Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="border border-brand-gold/30 p-1 bg-brand-navy/40">
            <div className="border border-brand-gold/30 p-4 sm:p-6 bg-brand-navy/80">
              <p className="text-xs uppercase tracking-widest text-brand-gold font-extrabold mb-6">
                Filter Destinations by Category
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickCategories.map((cat, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      onFilterCategory(cat.dbName);
                      onExploreClick();
                    }}
                    className="group relative overflow-hidden bg-brand-navy border border-brand-gold/40 hover:border-brand-gold p-4 cursor-pointer transition-all duration-300 sharp-card hover:bg-brand-gold hover:text-brand-navy"
                  >
                    <span className="text-3xl mb-2 block">{cat.icon}</span>
                    <h3 className="text-white font-extrabold uppercase tracking-wider text-xs sm:text-sm group-hover:text-brand-navy transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-brand-gold group-hover:text-brand-navy/80 mt-1">{cat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Heritage Trust Badges with rigid geometric separations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-brand-gold/20 pt-8"
        >
          <div className="flex items-center space-x-2 text-brand-cream/80">
            <Award className="h-5 w-5 text-brand-gold" />
            <span className="text-xs uppercase tracking-widest font-bold">UNESCO World Heritage Sites</span>
          </div>
          <div className="w-1.5 h-1.5 bg-brand-gold rotate-45 hidden md:block" />
          <div className="flex items-center space-x-2 text-brand-cream/80">
            <Compass className="h-5 w-5 text-brand-gold" />
            <span className="text-xs uppercase tracking-widest font-bold">100% Certified Guides</span>
          </div>
        </motion.div>
      </div>

      {/* Bouncing Scroll Indicator at the bottom of full-screen hero */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden sm:flex flex-col items-center">
        <button
          onClick={onExploreClick}
          className="flex flex-col items-center gap-1.5 text-brand-gold/80 hover:text-brand-gold transition-colors duration-300 text-[10px] uppercase tracking-widest font-black cursor-pointer"
        >
          <span>Scroll to Explore</span>
          <div className="w-5 h-8 border-2 border-brand-gold/60 rounded-full flex justify-center p-1.5">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-1.5 bg-brand-gold rounded-full" 
            />
          </div>
        </button>
      </div>
    </section>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  );
}
