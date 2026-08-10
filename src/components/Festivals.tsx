import React from 'react';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import { festivals } from '../data';

export default function Festivals() {
  return (
    <section id="festivals" className="py-24 bg-brand-cream dark:bg-slate-950 text-brand-navy dark:text-brand-cream border-t border-brand-navy/10 dark:border-brand-gold/15 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-brand-navy dark:text-brand-gold border-2 border-brand-navy dark:border-brand-gold/40 px-4 py-1.5 sharp-card bg-brand-gold/15 mb-4">
            Cultural Galas
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-navy dark:text-brand-cream tracking-tight uppercase font-serif">
            Legendary Festivals Timeline
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4" />
          <p className="text-brand-navy/80 dark:text-brand-cream/80 mt-6 text-sm sm:text-base font-sans font-medium tracking-wide leading-relaxed">
            Time your visit with Rajasthan’s world-renowned fairs and festivals, where sand dunes and palace streets come alive with endless music, dance, and colorful traditional sports.
          </p>
        </div>

        {/* Vertical Timeline Construction */}
        <div className="relative border-l-2 border-brand-navy dark:border-brand-gold/40 md:border-l-0 md:flex md:flex-col md:items-center space-y-12 md:space-y-24 max-w-5xl mx-auto">
          
          {/* Centered timeline vertical bar for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-0.5 w-0.5 bg-brand-navy/30 dark:bg-brand-gold/20" />

          {festivals.map((fest, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={fest.id} 
                className="relative pl-8 md:pl-0 w-full md:grid md:grid-cols-2 md:gap-16 items-center"
              >
                {/* Timeline center node indicator - Rotated Diamond */}
                <div className="absolute top-1 left-[-9px] md:left-1/2 md:-ml-[9px] md:top-1/2 md:-mt-[9px] z-10 w-[18px] h-[18px] rotate-45 bg-brand-gold border-2 border-brand-navy dark:border-brand-gold shadow-sm" />

                {/* Left Block (for even, shows Card; for odd, shows Spacer/Details) */}
                <div className={`order-1 ${isEven ? 'md:text-right md:pr-4' : 'md:order-2 md:pl-4'}`}>
                  {/* Monthly date badge */}
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-brand-gold bg-brand-navy dark:bg-slate-950 border border-brand-navy dark:border-brand-gold/40 px-3 py-1 sharp-card mb-3">
                    <Calendar className="h-3.5 w-3.5 text-brand-gold" />
                    <span>{fest.month}</span>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-2xl font-black text-brand-navy dark:text-brand-gold uppercase font-serif tracking-tight">
                    {fest.name}
                  </h3>

                  {/* Location badge */}
                  <p className={`flex items-center gap-1 text-xs text-brand-navy/60 dark:text-brand-cream/60 font-bold uppercase tracking-wider mt-1.5 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                    <MapPin className="h-3.5 w-3.5 text-brand-gold" />
                    <span>{fest.location}</span>
                  </p>

                  <p className="text-brand-navy/80 dark:text-brand-cream/80 text-xs sm:text-sm leading-relaxed font-medium">
                    {fest.description}
                  </p>
                </div>

                {/* Right Block (visual banner and highlights list) */}
                <div className={`order-2 mt-6 md:mt-0 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="bg-white dark:bg-slate-900 border-2 border-brand-navy dark:border-brand-gold/30 overflow-hidden sharp-card shadow-[6px_6px_0px_0px_rgba(0,35,102,0.12)] dark:shadow-[6px_6px_0px_0px_rgba(255,215,0,0.1)] hover:shadow-[10px_10px_0px_0px_rgba(217,70,37,0.3)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,217,0,0.25)] hover:border-brand-saffron dark:hover:border-brand-gold transition-all duration-300">
                    
                    {/* Visual Banner */}
                    <div className="h-44 sm:h-52 overflow-hidden relative border-b-2 border-brand-navy dark:border-brand-gold/30">
                      <img
                        src={fest.image}
                        alt={fest.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 flex items-center space-x-1.5 text-white">
                        <Sparkles className="h-4 w-4 text-brand-gold" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Festival Highlights</span>
                      </div>
                    </div>

                    {/* Highlight bullets */}
                    <div className="p-5 bg-white dark:bg-slate-900">
                      <ul className="space-y-2.5">
                        {fest.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-xs font-semibold text-brand-navy/80 dark:text-brand-cream/80">
                            <span className="w-1.5 h-1.5 rotate-45 bg-brand-gold border border-brand-navy dark:border-brand-gold/40 shrink-0 mt-1.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
