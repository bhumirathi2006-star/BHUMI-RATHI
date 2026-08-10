import React, { useState } from 'react';
import { Utensils, Star, Flame, ShoppingBag, Landmark, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { foodItems, culturalHighlights } from '../data';

export default function FoodCulture() {
  const [activeTab, setActiveTab] = useState<'cuisine' | 'tradition' | 'shopping'>('cuisine');

  const localMarkets = [
    { name: 'Johari Bazaar (Jaipur)', item: 'Gemstones, gold jewelry, and handmade bandhani tie-dye sarees.', rating: '4.8' },
    { name: 'Bapu Bazaar (Jaipur)', item: 'Famous camel leather Mojari shoes, handprinted bedsheets, and perfumes.', rating: '4.7' },
    { name: 'Hathi Pol Bazaar (Udaipur)', item: 'Traditional miniature paintings, Pichwai artwork, and wooden handicrafts.', rating: '4.6' },
    { name: 'Clock Tower Market (Jodhpur)', item: 'Aromatic Mathania red chillies, authentic local spices, and hand-woven rugs.', rating: '4.8' },
    { name: 'Sadar Bazaar (Jaisalmer)', item: 'Intricately embroidered desert bags, stone carved showpieces, and antiques.', rating: '4.5' },
  ];

  return (
    <section id="culture" className="py-24 bg-brand-cream dark:bg-slate-950 text-brand-navy dark:text-brand-cream border-t border-brand-navy/10 dark:border-brand-gold/15 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-brand-navy dark:text-brand-gold border-2 border-brand-navy dark:border-brand-gold/40 px-4 py-1.5 sharp-card bg-brand-gold/15 mb-4">
            Taste & Traditions
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-navy dark:text-brand-cream tracking-tight uppercase font-serif">
            Heritage, Culture & Food
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4" />
          <p className="text-brand-navy/80 dark:text-brand-cream/80 mt-6 text-sm sm:text-base font-sans font-medium tracking-wide leading-relaxed">
            Rajasthan’s soul lies in its spicy, ghee-laden traditional cuisine, mesmerizing dance forms, historic block crafts, and colorful bustling street markets.
          </p>
        </div>

        {/* Tab Controls with Sharp Borders */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-slate-900 p-1 border-2 border-brand-navy dark:border-brand-gold/30 sharp-card">
            <button
              onClick={() => setActiveTab('cuisine')}
              className={`flex items-center space-x-2 px-5 py-2.5 sharp-button text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeTab === 'cuisine'
                  ? 'bg-brand-navy dark:bg-brand-gold text-brand-gold dark:text-brand-navy font-bold'
                  : 'text-brand-navy dark:text-brand-cream hover:bg-brand-gold/10 dark:hover:bg-brand-gold/10'
              }`}
            >
              <Utensils className="h-4 w-4" />
              <span>Royal Cuisine</span>
            </button>

            <button
              onClick={() => setActiveTab('tradition')}
              className={`flex items-center space-x-2 px-5 py-2.5 sharp-button text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeTab === 'tradition'
                  ? 'bg-brand-navy dark:bg-brand-gold text-brand-gold dark:text-brand-navy font-bold'
                  : 'text-brand-navy dark:text-brand-cream hover:bg-brand-gold/10 dark:hover:bg-brand-gold/10'
              }`}
            >
              <Landmark className="h-4 w-4" />
              <span>Arts & Dances</span>
            </button>

            <button
              onClick={() => setActiveTab('shopping')}
              className={`flex items-center space-x-2 px-5 py-2.5 sharp-button text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeTab === 'shopping'
                  ? 'bg-brand-navy dark:bg-brand-gold text-brand-gold dark:text-brand-navy font-bold'
                  : 'text-brand-navy dark:text-brand-cream hover:bg-brand-gold/10 dark:hover:bg-brand-gold/10'
              }`}
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Bazaars</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {/* CUISINE PANEL */}
            {activeTab === 'cuisine' && (
              <motion.div
                key="cuisine"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {foodItems.map((food) => (
                    <div
                      key={food.id}
                      className="group bg-white dark:bg-slate-900 border-2 border-brand-navy dark:border-brand-gold/30 overflow-hidden sharp-card transition-all duration-300 flex flex-col h-full shadow-[6px_6px_0px_0px_rgba(0,35,102,0.12)] dark:shadow-[6px_6px_0px_0px_rgba(255,215,0,0.1)] hover:shadow-[10px_10px_0px_0px_rgba(217,70,37,0.3)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,217,0,0.25)] hover:border-brand-saffron dark:hover:border-brand-gold hover:translate-x-[-2px] hover:translate-y-[-2px]"
                    >
                      {/* Food image with veg/non-veg badge */}
                      <div className="relative h-48 overflow-hidden border-b-2 border-brand-navy dark:border-brand-gold/30">
                        <img
                          src={food.image}
                          alt={food.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 right-4 bg-white dark:bg-slate-950 px-2.5 py-1 flex items-center space-x-1.5 border border-brand-navy dark:border-brand-gold/40 sharp-card shadow-sm">
                          {/* Rotated square veg indicator */}
                          <span className={`w-2 h-2 rotate-45 shrink-0 ${food.type === 'veg' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                          <span className="text-[9px] font-black uppercase tracking-wider text-brand-navy dark:text-brand-cream leading-none">
                            {food.type === 'veg' ? 'Pure Veg' : 'Mewari Non-Veg'}
                          </span>
                        </div>
                      </div>

                      {/* Content body */}
                      <div className="p-6 flex-grow flex flex-col justify-between bg-white dark:bg-slate-900">
                        <div>
                          <h3 className="text-lg font-black uppercase tracking-wide text-brand-navy dark:text-brand-gold flex items-center gap-1.5 font-serif">
                            {food.name}
                            {food.type === 'non-veg' && <Flame className="h-4 w-4 text-red-500" />}
                          </h3>
                          <p className="text-brand-navy/80 dark:text-brand-cream/80 text-xs sm:text-sm mt-3 leading-relaxed font-medium">
                            {food.description}
                          </p>
                        </div>

                        {/* Recommendation */}
                        <div className="mt-6 pt-4 border-t border-brand-navy/10 dark:border-brand-gold/15 text-xs font-semibold">
                          <span className="font-extrabold text-brand-gold uppercase tracking-widest text-[10px] block mb-1">
                            🍽️ WHERE TO EXPERIENCE:
                          </span>
                          <p className="text-brand-navy/60 dark:text-brand-cream/60 leading-normal">
                            {food.popularAt}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cultural feast note */}
                <div className="border-2 border-brand-navy dark:border-brand-gold sharp-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-brand-gold/10 dark:bg-slate-900">
                  <div className="space-y-2 max-w-2xl text-center md:text-left">
                    <h3 className="font-serif text-lg font-black uppercase text-brand-navy dark:text-brand-gold flex items-center justify-center md:justify-start gap-2">
                      <Sparkles className="h-5 w-5 text-brand-navy dark:text-brand-gold rotate-45" />
                      The Rajasthani Thali Experience
                    </h3>
                    <p className="text-brand-navy/80 dark:text-brand-cream/80 text-xs sm:text-sm font-medium leading-relaxed">
                      Do not leave Rajasthan without ordering an authentic royal "Thali" - a monumental circular metal plate serving over 15 distinct traditional delicacies, unlimited melted cow ghee, sweets, and buttermilk.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      const destinationsEl = document.getElementById('destinations');
                      if (destinationsEl) destinationsEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3 bg-brand-navy hover:bg-brand-gold text-white hover:text-brand-navy border border-brand-navy dark:border-brand-gold/40 font-bold text-xs uppercase tracking-widest sharp-button cursor-pointer whitespace-nowrap dark:bg-slate-950 dark:text-brand-gold dark:hover:bg-brand-gold dark:hover:text-brand-navy transition-all duration-300"
                  >
                    View Food Cities
                  </button>
                </div>
              </motion.div>
            )}

            {/* ARTS & DANCES PANEL */}
            {activeTab === 'tradition' && (
              <motion.div
                key="tradition"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {culturalHighlights.map((cult) => (
                  <div
                    key={cult.id}
                    className="bg-white dark:bg-slate-900 border-2 border-brand-navy dark:border-brand-gold/30 overflow-hidden sharp-card flex flex-col sm:flex-row h-full group hover:shadow-[6px_6px_0px_0px_rgba(0,35,102,0.12)] dark:shadow-[6px_6px_0px_0px_rgba(255,215,0,0.1)] hover:border-brand-saffron dark:hover:border-brand-gold transition-all duration-300"
                  >
                    {/* Art image */}
                    <div className="relative w-full sm:w-48 h-48 sm:h-auto overflow-hidden flex-shrink-0 border-b-2 sm:border-b-0 sm:border-r-2 border-brand-navy dark:border-brand-gold/30">
                      <img
                        src={cult.image}
                        alt={cult.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-3 left-3 bg-brand-navy dark:bg-slate-950 text-brand-gold text-[9px] font-black uppercase tracking-widest px-2 py-1 sharp-card border border-brand-gold">
                        {cult.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-center bg-white dark:bg-slate-900 flex-grow">
                      <h3 className="text-lg font-black uppercase tracking-wide text-brand-navy dark:text-brand-gold font-serif">
                        {cult.name}
                      </h3>
                      <p className="text-brand-navy/80 dark:text-brand-cream/80 text-xs sm:text-sm mt-3 leading-relaxed font-medium">
                        {cult.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* SHOPPING PANEL */}
            {activeTab === 'shopping' && (
              <motion.div
                key="shopping"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
              >
                {/* Intro card with robust geometric details */}
                <div className="lg:col-span-2 bg-brand-navy border-2 border-brand-navy dark:border-brand-gold p-8 text-white sharp-card shadow-[10px_10px_0px_0px_rgba(255,215,0,0.4)] dark:shadow-[10px_10px_0px_0px_rgba(255,215,0,0.2)] space-y-4">
                  <span className="bg-brand-gold text-brand-navy text-[9px] font-black uppercase tracking-widest px-3 py-1 sharp-card inline-block border border-brand-navy">
                    Shopping Paradise
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-serif text-white leading-tight">
                    Traditional Vibrant Bazaars
                  </h3>
                  <p className="text-brand-cream/90 leading-relaxed text-xs sm:text-sm font-medium">
                    No trip is complete without exploring Rajasthan's traditional open-air markets. Famous for centuries for exporting jewelry, handicrafts, paintings, and block-printed textiles worldwide, these bazaars offer incredible bargaining experiences!
                  </p>
                  <div className="pt-4 border-t border-brand-gold/20 text-[10px] font-black uppercase tracking-widest space-y-2 text-brand-gold">
                    <p className="flex items-center gap-2">✓ Always check for genuine GI tags</p>
                    <p className="flex items-center gap-2">✓ Bargaining of 20-30% is standard</p>
                    <p className="flex items-center gap-2">✓ Support local cooperatives</p>
                  </div>
                </div>

                {/* Market lists */}
                <div className="lg:col-span-3 space-y-4">
                  {localMarkets.map((market, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-slate-900 border-2 border-brand-navy dark:border-brand-gold/30 p-5 flex items-center justify-between gap-4 hover:shadow-[4px_4px_0px_0px_rgba(0,35,102,0.1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,215,0,0.1)] hover:border-brand-saffron dark:hover:border-brand-gold transition-all duration-300 sharp-card"
                    >
                      <div className="space-y-1.5">
                        <h4 className="font-extrabold text-brand-navy dark:text-brand-gold flex items-center gap-1.5 text-sm sm:text-base uppercase tracking-wider font-serif">
                          <ShoppingBag className="h-4.5 w-4.5 text-brand-gold" />
                          {market.name}
                        </h4>
                        <p className="text-brand-navy/80 dark:text-brand-cream/80 text-xs leading-relaxed max-w-md font-medium">
                          <span className="font-black text-brand-navy/60 dark:text-brand-gold/60">FAMOUS FOR:</span> {market.item}
                        </p>
                      </div>

                      {/* Rating Badge */}
                      <div className="flex-shrink-0 flex items-center space-x-1.5 bg-brand-gold/20 border border-brand-navy dark:border-brand-gold/40 px-2.5 py-1.5 sharp-card">
                        <Star className="h-3.5 w-3.5 text-brand-navy dark:text-brand-gold fill-brand-navy dark:fill-brand-gold" />
                        <span className="text-xs font-black text-brand-navy dark:text-brand-cream leading-none">{market.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
