import React from 'react';
import { ExternalLink, Castle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
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
    <footer className="bg-brand-navy dark:bg-slate-950 text-brand-cream/80 dark:text-brand-cream/70 border-t-4 border-brand-saffron pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4 cursor-pointer group" onClick={() => handleScrollTo('home')}>
            {/* Rotating Logo - matched to Navbar */}
            <div className="relative w-10 h-10 shrink-0">
              <div className="absolute inset-0 bg-brand-gold border border-white/20 rotate-45 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[225deg] shadow-md rounded-xl">
                <Castle className="-rotate-45 h-5 w-5 text-brand-navy stroke-[2]" />
              </div>
            </div>
            <div>
              <span className="font-serif text-base font-black tracking-wider text-white uppercase leading-tight block">
                Explore <span className="text-brand-gold">Rajasthan</span>
              </span>
              <p className="text-[8px] uppercase tracking-widest font-black text-brand-gold">The Land of Kings</p>
            </div>
          </div>
          <p className="text-xs text-brand-cream/70 dark:text-brand-cream/60 leading-relaxed font-medium">
            A digital travel guide showcasing Rajasthan’s royal forts, floating white palaces, spicy traditional curries, and the mystical sands of the Thar Desert. Inspiring global travelers since 2026.
          </p>
        </div>

        {/* Navigation Quicklinks */}
        <div className="space-y-3">
          <h4 className="text-brand-gold font-black text-xs uppercase tracking-widest border-b-2 border-white/10 dark:border-brand-gold/20 pb-2 font-serif">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-[11px] font-black uppercase tracking-widest text-brand-cream/90 dark:text-brand-cream/80">
            <li>
              <button onClick={() => handleScrollTo('home')} className="hover:text-brand-gold cursor-pointer transition-colors text-left flex items-center gap-1.5 group">
                <span className="w-1.5 h-1.5 rotate-45 bg-brand-gold scale-0 group-hover:scale-100 transition-transform duration-300 rounded-sm" />
                <span>Home Base</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollTo('destinations')} className="hover:text-brand-gold cursor-pointer transition-colors text-left flex items-center gap-1.5 group">
                <span className="w-1.5 h-1.5 rotate-45 bg-brand-gold scale-0 group-hover:scale-100 transition-transform duration-300 rounded-sm" />
                <span>Royal Destinations</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollTo('culture')} className="hover:text-brand-gold cursor-pointer transition-colors text-left flex items-center gap-1.5 group">
                <span className="w-1.5 h-1.5 rotate-45 bg-brand-gold scale-0 group-hover:scale-100 transition-transform duration-300 rounded-sm" />
                <span>Food & Heritage Crafts</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollTo('festivals')} className="hover:text-brand-gold cursor-pointer transition-colors text-left flex items-center gap-1.5 group">
                <span className="w-1.5 h-1.5 rotate-45 bg-brand-gold scale-0 group-hover:scale-100 transition-transform duration-300 rounded-sm" />
                <span>Cultural Festivals</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Official Disclosures */}
        <div className="space-y-4">
          <h4 className="text-brand-gold font-black text-xs uppercase tracking-widest border-b-2 border-white/10 dark:border-brand-gold/20 pb-2 font-serif">
            Official Disclosures
          </h4>
          <p className="text-[11px] leading-relaxed text-brand-cream/60 dark:text-brand-cream/50 font-medium">
            This digital travel platform is presented as a high-fidelity mock showcase. All booking references, safety advisories, and hotel guidelines are curated for illustrative research and vacation design purposes.
          </p>
        </div>

      </div>

      {/* Copyright bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 dark:border-brand-gold/15 pt-8 flex flex-col items-center justify-center gap-4 text-center font-sans">
        <div className="text-sm font-medium tracking-wide text-brand-cream/90 dark:text-brand-cream/80">
          <span className="transition-all duration-300 hover:text-brand-gold cursor-default group inline-flex items-center gap-1.5">
            Designed & Developed by <span className="font-extrabold text-brand-gold drop-shadow-[0_0_12px_rgba(244,162,97,0.5)] bg-gradient-to-r from-brand-gold to-brand-saffron bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300">Bhumi Rathi</span>
          </span>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-brand-cream/50 dark:text-brand-cream/40 font-bold">
          © {currentYear} Explore Rajasthan Tourism Guide. All Rights Reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-brand-cream/40 dark:text-brand-cream/30">
          <a href="#_" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#_" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          <span>•</span>
          <a href="#_" className="hover:text-brand-gold transition-colors">Travel Warnings</a>
        </div>
      </div>
    </footer>
  );
}
