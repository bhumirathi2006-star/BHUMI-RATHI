import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Castle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import MoreDestinations from './components/MoreDestinations';
import FoodCulture from './components/FoodCulture';
import Festivals from './components/Festivals';
import TravelTips from './components/TravelTips';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check if user has a preference saved
    const saved = localStorage.getItem('explore-rajasthan-theme');
    if (saved) return saved === 'dark';
    // Fallback to system preference (or default to false for a clean royal white/gold feel)
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [selectedCategory, setSelectedCategory] = useState<'Heritage' | 'Desert' | 'Lakes' | 'Nature' | 'Holy' | 'All'>('All');

  // Sync dark class on body/html or wrapper element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('explore-rajasthan-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('explore-rajasthan-theme', 'light');
    }
  }, [isDarkMode]);

  // Loading animation timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleExploreClick = () => {
    const el = document.getElementById('destinations');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100 dark' : 'bg-white text-slate-800'}`}>
      
      {/* Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-navy dark:bg-slate-950 text-white select-none"
          >
            {/* Beautiful traditional 8-pointed star pattern formed by sharp rotated squares */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: 360 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="relative w-24 h-24 mb-8 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-brand-gold rotate-0 opacity-20 border border-brand-gold sharp-card animate-pulse" />
              <div className="absolute inset-0 bg-brand-gold rotate-45 opacity-40 border border-brand-gold sharp-card" />
              <div className="absolute inset-2 bg-brand-navy dark:bg-slate-900 border-2 border-brand-gold rotate-45 flex items-center justify-center shadow-lg sharp-card">
                <Castle className="-rotate-45 h-8 w-8 text-brand-gold animate-pulse" />
              </div>
            </motion.div>

            {/* Majestic greeting & custom loader tracker */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center space-y-4 px-6 max-w-md"
            >
              <h1 className="font-serif text-2xl sm:text-3xl font-black text-brand-gold uppercase tracking-widest">
                Khamma Ghani 🙏
              </h1>
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-cream/85 leading-relaxed font-sans">
                Entering The Land of Kings
              </p>
              
              {/* Gold gradient status loading line */}
              <div className="w-48 h-0.5 bg-white/10 mx-auto relative overflow-hidden border border-white/5">
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Glassmorphic Navbar */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main className="relative">
        {/* Hero Section */}
        <Hero onExploreClick={handleExploreClick} onFilterCategory={setSelectedCategory} />

        {/* Popular Destinations Grid (searchable/filterable) */}
        <Destinations selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        {/* Explore More Destinations (Off the beaten path & Interactive Map) */}
        <MoreDestinations />

        {/* Food, Tradition & Bazaars */}
        <FoodCulture />

        {/* Festival Timeline Grid */}
        <Festivals />

        {/* Useful Travel Tips Section */}
        <TravelTips />

        {/* Combined Contact Form & FAQ Accordion */}
        <Contact />
      </main>

      {/* Aesthetic Footer */}
      <Footer />
    </div>
  );
}
