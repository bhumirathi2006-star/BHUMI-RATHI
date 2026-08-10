import React, { useState, useMemo } from 'react';
import { Search, MapPin, Calendar, Clock, X, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Destination } from '../types';
import { destinations } from '../data';

interface DestinationsProps {
  selectedCategory: string;
  setSelectedCategory: (category: 'Heritage' | 'Desert' | 'Lakes' | 'Nature' | 'Holy' | 'All') => void;
}

export default function Destinations({ selectedCategory, setSelectedCategory }: DestinationsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDestination, setActiveDestination] = useState<Destination | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const categories: Array<'All' | 'Heritage' | 'Desert' | 'Lakes' | 'Nature' | 'Holy'> = [
    'All', 'Heritage', 'Desert', 'Lakes', 'Nature', 'Holy'
  ];

  // Search and filter logic
  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
      const matchesSearch =
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.nickName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.keyAttractions.some((attr) => attr.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const openDestinationDetails = (dest: Destination) => {
    setActiveDestination(dest);
    setActiveGalleryIndex(0);
  };

  const closeDestinationDetails = () => {
    setActiveDestination(null);
  };

  return (
    <section id="destinations" className="py-24 bg-brand-cream dark:bg-slate-950 text-brand-navy dark:text-brand-cream border-t border-brand-navy/10 dark:border-brand-gold/15 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-brand-navy dark:text-brand-gold border-2 border-brand-navy dark:border-brand-gold/40 px-4 py-1.5 sharp-card bg-brand-gold/15 mb-4">
            Discover Rajasthan
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-navy dark:text-brand-cream tracking-tight uppercase font-serif">
            Popular Royal Destinations
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4" />
          <p className="text-brand-navy/80 dark:text-brand-cream/80 mt-6 text-sm sm:text-base font-sans font-medium tracking-wide leading-relaxed">
            From the pink terracotta walls of Jaipur to the glittering dunes of Jaisalmer, plan your next extraordinary adventure through Rajasthan’s most legendary cities.
          </p>
        </div>

        {/* Search and Filters Bar with Geometric Layout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 border-b border-brand-navy/10 dark:border-brand-gold/15 pb-8">
          {/* Tabs Filter */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 sharp-button cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-brand-navy dark:bg-brand-gold text-brand-gold dark:text-brand-navy border-brand-navy dark:border-brand-gold font-bold'
                    : 'bg-white dark:bg-slate-900 text-brand-navy dark:text-brand-cream border-brand-navy/30 dark:border-brand-gold/30 hover:border-brand-navy dark:hover:border-brand-gold hover:text-brand-navy dark:hover:text-brand-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80 order-1 md:order-2">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-brand-navy/50 dark:text-brand-cream/50">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH CITIES, MONUMENTS..."
              className="w-full pl-9 pr-8 py-2 bg-white dark:bg-slate-900 border border-brand-navy/30 dark:border-brand-gold/30 text-brand-navy dark:text-brand-cream text-xs font-bold uppercase tracking-wider sharp-card focus:outline-none focus:border-brand-navy dark:focus:border-brand-gold placeholder-brand-navy/40 dark:placeholder-brand-cream/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-brand-navy/60 dark:text-brand-cream/60 hover:text-brand-navy dark:hover:text-brand-cream cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Destinations Grid */}
        <AnimatePresence mode="popLayout">
          {filteredDestinations.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredDestinations.map((dest) => (
                <motion.div
                  key={dest.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white dark:bg-slate-900 border-2 border-brand-navy dark:border-brand-gold/30 overflow-hidden sharp-card transition-all duration-500 flex flex-col h-full shadow-[6px_6px_0px_0px_rgba(0,35,102,0.15)] dark:shadow-[6px_6px_0px_0px_rgba(255,215,0,0.1)] hover:shadow-[10px_10px_0px_0px_rgba(217,70,37,0.3)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,217,0,0.25)] hover:border-brand-saffron dark:hover:border-brand-gold hover:-translate-x-1.5 hover:-translate-y-1.5"
                >
                  {/* Thumbnail Cover image */}
                  <div className="relative h-60 overflow-hidden border-b-2 border-brand-navy dark:border-brand-gold/30">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-112 group-hover:rotate-1"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
                    
                    {/* Badge Category */}
                    <span className="absolute top-4 left-4 bg-brand-gold text-brand-navy text-[10px] font-black uppercase tracking-widest px-3 py-1 sharp-card border border-brand-navy dark:border-brand-gold/40">
                      {dest.category}
                    </span>

                    {/* Nickname and Title on overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold flex items-center gap-1 leading-none mb-1">
                        <MapPin className="h-3 w-3" /> {dest.nickName}
                      </p>
                      <h3 className="text-2xl font-bold tracking-tight uppercase font-serif text-white">{dest.name}</h3>
                    </div>
                  </div>

                  {/* Card Content body */}
                  <div className="p-6 flex-grow flex flex-col justify-between bg-white dark:bg-slate-900">
                    <div>
                      <p className="text-brand-navy/80 dark:text-brand-cream/80 text-xs sm:text-sm leading-relaxed font-medium">
                        {dest.tagline}
                      </p>

                      {/* Travel statistics summary */}
                      <div className="mt-5 grid grid-cols-2 gap-2 border-t border-brand-navy/10 dark:border-brand-gold/15 pt-4 text-[10px] uppercase tracking-widest font-bold text-brand-navy/60 dark:text-brand-cream/60">
                        <div className="flex items-center space-x-1.5">
                          <Calendar className="h-3.5 w-3.5 text-brand-gold" />
                          <span>Oct - Mar Best</span>
                        </div>
                        <div className="flex items-center space-x-1.5 justify-end">
                          <Clock className="h-3.5 w-3.5 text-brand-gold" />
                          <span>{dest.recommendedDays} Days Stay</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => openDestinationDetails(dest)}
                      className="mt-6 w-full py-2.5 bg-brand-navy text-white hover:bg-brand-gold hover:text-brand-navy dark:bg-slate-950 dark:text-brand-gold dark:hover:bg-brand-gold dark:hover:text-brand-navy font-bold uppercase tracking-widest text-xs sharp-button border border-brand-navy dark:border-brand-gold/30 transition-all duration-300 flex items-center justify-center space-x-1 cursor-pointer group-hover:border-brand-gold"
                    >
                      <span>Explore Details</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white border-2 border-dashed border-brand-navy/20 sharp-card"
            >
              <div className="text-brand-navy/40 mb-3 text-4xl">🏜️</div>
              <p className="text-brand-navy font-bold text-base uppercase tracking-wider">No heritage spots match your search</p>
              <p className="text-brand-navy/60 text-xs mt-1 uppercase tracking-widest font-semibold">Try resetting your category filter or adjusting search text</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-4 px-5 py-2.5 bg-brand-gold text-brand-navy border border-brand-navy font-bold text-xs uppercase tracking-widest sharp-button cursor-pointer"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Detailed Modal/Dialog Overlay with Geometric Frame */}
        <AnimatePresence>
          {activeDestination && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeDestinationDetails}
                className="fixed inset-0 bg-brand-navy/90 backdrop-blur-sm"
              />

              {/* Modal Body Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="relative bg-brand-cream dark:bg-slate-900 rounded-none overflow-hidden max-w-4xl w-full z-10 border-4 border-brand-navy dark:border-brand-gold my-8 max-h-[90vh] flex flex-col sharp-card shadow-[16px_16px_0px_0px_rgba(255,215,0,0.5)] dark:shadow-[16px_16px_0px_0px_rgba(255,215,0,0.25)]"
              >
                {/* Header Actions / Close button */}
                <button
                  onClick={closeDestinationDetails}
                  className="absolute top-4 right-4 z-20 p-2 bg-brand-navy hover:bg-brand-gold text-white hover:text-brand-navy dark:bg-slate-950 transition-all cursor-pointer sharp-card border border-brand-gold"
                  aria-label="Close details"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="overflow-y-auto flex-grow">
                  {/* Majestic Header Banner */}
                  <div className="relative h-64 sm:h-80 border-b-4 border-brand-navy dark:border-brand-gold">
                    <img
                      src={activeDestination.gallery[activeGalleryIndex]}
                      alt={activeDestination.name}
                      className="w-full h-full object-cover transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="bg-brand-gold text-brand-navy text-[9px] font-black uppercase tracking-widest px-2.5 py-1 sharp-card border border-brand-navy dark:border-brand-gold/40">
                          {activeDestination.category}
                        </span>
                        <span className="text-brand-gold text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" /> {activeDestination.nickName}
                        </span>
                      </div>
                      <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 font-serif uppercase text-white">
                        {activeDestination.name}
                      </h2>
                    </div>
                  </div>

                  {/* Interactive Multi-Image Thumbnail Row */}
                  <div className="p-4 sm:p-6 bg-white dark:bg-slate-950 border-b-2 border-brand-navy dark:border-brand-gold/30">
                    <div className="flex items-center space-x-2 text-xs font-bold text-brand-navy dark:text-brand-cream uppercase tracking-widest mb-3">
                      <ImageIcon className="h-3.5 w-3.5 text-brand-gold" />
                      <span>Interactive Heritage Gallery (Click to view)</span>
                    </div>
                    <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-thin">
                      {activeDestination.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveGalleryIndex(idx)}
                          className={`relative flex-shrink-0 w-24 h-16 overflow-hidden border-2 cursor-pointer transition-all duration-300 sharp-card ${
                            activeGalleryIndex === idx
                              ? 'border-brand-navy dark:border-brand-gold scale-95 shadow-md'
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${activeDestination.name} view ${idx}`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Description & Detailed planning card */}
                  <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left & Middle Column: Deep History & Attractions */}
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-base font-black text-brand-navy dark:text-brand-gold uppercase tracking-widest mb-2 border-b-2 border-brand-navy/10 dark:border-brand-gold/20 pb-2">
                          History & Heritage
                        </h3>
                        <p className="text-brand-navy/80 dark:text-brand-cream/80 leading-relaxed text-xs sm:text-sm font-medium">
                          {activeDestination.description}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base font-black text-brand-navy dark:text-brand-gold uppercase tracking-widest mb-3 border-b-2 border-brand-navy/10 dark:border-brand-gold/20 pb-2">
                          Key Attractions
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {activeDestination.keyAttractions.map((attr, index) => (
                            <div key={index} className="flex items-start space-x-2.5">
                              <span className="flex-shrink-0 w-5 h-5 bg-brand-gold text-brand-navy rounded-none flex items-center justify-center text-xs font-black border border-brand-navy dark:border-brand-gold/40">
                                ✓
                              </span>
                              <span className="text-brand-navy dark:text-brand-cream text-xs sm:text-sm font-semibold">
                                {attr}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Travel Quick Planning Widget */}
                    <div className="bg-white dark:bg-slate-950 border-2 border-brand-navy dark:border-brand-gold/30 p-6 h-fit space-y-5 sharp-card shadow-[4px_4px_0px_0px_rgba(0,35,102,0.1)] dark:shadow-[4px_4px_0px_0px_rgba(255,215,0,0.15)]">
                      <h4 className="font-black text-brand-navy dark:text-brand-gold text-xs uppercase tracking-widest border-b-2 border-brand-navy/10 dark:border-brand-gold/20 pb-2">
                        Quick Travel Plan
                      </h4>

                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-black text-brand-navy/50 dark:text-brand-cream/50 block">
                          Best Time to Visit
                        </span>
                        <div className="flex items-center space-x-2 mt-1.5 text-brand-navy dark:text-brand-cream">
                          <Calendar className="h-4 w-4 text-brand-gold flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-extrabold uppercase">{activeDestination.bestTimeToVisit}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-black text-brand-navy/50 dark:text-brand-cream/50 block">
                          Suggested Stay
                        </span>
                        <div className="flex items-center space-x-2 mt-1.5 text-brand-navy dark:text-brand-cream">
                          <Clock className="h-4 w-4 text-brand-gold flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-extrabold uppercase">{activeDestination.recommendedDays} Days / {activeDestination.recommendedDays - 1} Nights</span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          const contactSection = document.getElementById('contact');
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                            closeDestinationDetails();
                          }
                        }}
                        className="w-full mt-2 py-3 bg-brand-gold hover:bg-brand-navy text-brand-navy hover:text-white dark:hover:text-brand-gold font-extrabold transition-all duration-300 text-center text-[10px] uppercase tracking-widest cursor-pointer sharp-button border border-brand-navy dark:border-brand-gold/40"
                      >
                        Inquire About Trip
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
