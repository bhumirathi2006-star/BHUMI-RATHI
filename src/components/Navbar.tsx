import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Castle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'culture', label: 'Culture' },
    { id: 'festivals', label: 'Festivals' },
    { id: 'tips', label: 'Tips' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="app-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white border-b ${
        scrolled
          ? 'shadow-lg bg-brand-navy/80 backdrop-blur-md border-brand-gold/20 shadow-brand-navy/10'
          : 'bg-brand-navy/65 backdrop-blur-sm border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo with 45deg Golden Rotated Box featuring Palace Icon */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 bg-brand-gold rotate-45 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[225deg] border border-white/20 shadow-md sharp-card">
              <Castle className="-rotate-45 h-4.5 w-4.5 text-brand-navy stroke-[2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight uppercase text-white font-serif">
                Explore <span className="text-brand-gold">Rajasthan</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest font-bold text-brand-gold/70 leading-none">
                The Land of Kings
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 relative cursor-pointer ${
                  activeSection === item.id
                    ? 'text-brand-gold font-bold'
                    : 'text-white/85 hover:text-brand-gold'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}

            {/* Theme selector */}
            <button
              onClick={toggleTheme}
              className="p-1.5 text-white/85 hover:text-brand-gold transition-colors cursor-pointer ml-2"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Royal Call to Action button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-1.5 border border-brand-gold text-brand-gold text-xs font-extrabold uppercase hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 sharp-button cursor-pointer ml-4"
            >
              Plan My Trip
            </button>
          </nav>

          {/* Mobile hamburger & theme */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-white/80 hover:text-brand-gold cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-brand-gold"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-navy/95 backdrop-blur-md border-b border-brand-gold/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 text-xs uppercase tracking-widest font-bold transition-all ${
                    activeSection === item.id
                      ? 'bg-brand-gold/10 text-brand-gold'
                      : 'text-white/80 hover:bg-brand-gold/10 hover:text-brand-gold'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-2.5 text-center border border-brand-gold text-brand-gold text-xs font-bold uppercase hover:bg-brand-gold hover:text-brand-navy transition-all sharp-button"
                >
                  Plan My Trip
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
