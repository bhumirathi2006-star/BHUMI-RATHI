import React from 'react';
import { ShieldCheck, Compass, Wallet, Briefcase, AlertTriangle } from 'lucide-react';

export default function TravelTips() {
  const categories = [
    {
      title: 'Safety & Respect',
      icon: <ShieldCheck className="h-6 w-6 text-brand-gold" />,
      tips: [
        { label: 'Dress Modestly', desc: 'When visiting religious temples, mosques, or quiet rural communities, keep shoulders and knees covered.' },
        { label: 'Verify Tour Guides', desc: 'Hire only certified tour guides carrying official government-issued ID badges at fort ticketing counters.' },
        { label: 'Hydration is Key', desc: 'The desert climate is arid. Always carry bottled mineral water, electrolyte packets, and drink regularly.' }
      ]
    },
    {
      title: 'Transportation',
      icon: <Compass className="h-6 w-6 text-brand-gold" />,
      tips: [
        { label: 'Royal Trains', desc: 'Take express trains like Shatabdi or Intercity to travel between major nodes like Jaipur and Jodhpur.' },
        { label: 'App-Based Cabs', desc: 'Ola and Uber work exceptionally well in Jaipur and Udaipur. For Jaisalmer, hire local prepaid taxis.' },
        { label: 'Book in Advance', desc: 'Winter is peak global season. Book trains and luxury state buses (RSRTC Volvo) at least 30 days prior.' }
      ]
    },
    {
      title: 'Budget Guide',
      icon: <Wallet className="h-6 w-6 text-brand-gold" />,
      tips: [
        { label: 'Backpacker Budget', desc: '₹1,500 - ₹2,500 / day. Stay in hostels, eat local street food, and use public buses.' },
        { label: 'Heritage Havelis', desc: '₹4,000 - ₹8,000 / day. Enjoy boutique converted heritage family hotels with local dining.' },
        { label: 'Ultra Luxury', desc: '₹20,000+ / day. Experience iconic royal palace stays (Taj Lake Palace, Rambagh Palace).' }
      ]
    },
    {
      title: 'Packing Checklist',
      icon: <Briefcase className="h-6 w-6 text-brand-gold" />,
      tips: [
        { label: 'Warm Layers', desc: 'Desert winter nights (particularly in Jaisalmer) can drop below 8°C. Pack a cozy jacket.' },
        { label: 'Walking Shoes', desc: 'Visiting colossal forts involves steep uphill walking over cobbles. Sturdy sneakers are an absolute must.' },
        { label: 'Sun Protection', desc: 'Carry high SPF sunscreen, polarized sunglasses, and a wide-brimmed cotton hat for midday tours.' }
      ]
    }
  ];

  return (
    <section id="tips" className="py-24 bg-brand-cream dark:bg-slate-950 text-brand-navy dark:text-brand-cream border-t border-brand-navy/10 dark:border-brand-gold/15 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-brand-navy dark:text-brand-gold border-2 border-brand-navy dark:border-brand-gold/40 px-4 py-1.5 sharp-card bg-brand-gold/15 mb-4">
            Plan Smart
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-navy dark:text-brand-cream tracking-tight uppercase font-serif">
            Essential Travel Tips
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4" />
          <p className="text-brand-navy/80 dark:text-brand-cream/80 mt-6 text-sm sm:text-base font-sans font-medium tracking-wide leading-relaxed">
            Avoid common tourist traps, choose the right commute, manage your budget, and remain respectful of centuries-old local traditions.
          </p>
        </div>

        {/* Tip categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-white dark:bg-slate-900 border-2 border-brand-navy dark:border-brand-gold/30 sharp-card shadow-[6px_6px_0px_0px_rgba(0,35,102,0.12)] dark:shadow-[6px_6px_0px_0px_rgba(255,215,0,0.1)] hover:shadow-[10px_10px_0px_0px_rgba(217,70,37,0.3)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,217,0,0.25)] hover:border-brand-saffron dark:hover:border-brand-gold hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Title */}
                <div className="flex items-center space-x-3.5 mb-6 border-b-2 border-brand-navy/10 dark:border-brand-gold/15 pb-4">
                  <div className="p-2.5 bg-brand-navy dark:bg-slate-950 text-brand-gold sharp-card border border-brand-gold dark:border-brand-gold/50">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-wide font-serif text-brand-navy dark:text-brand-gold">{cat.title}</h3>
                </div>

                {/* Subtips */}
                <div className="space-y-5">
                  {cat.tips.map((tip, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-4 h-4 rotate-45 bg-brand-gold border border-brand-navy dark:border-brand-gold/40 text-brand-navy flex items-center justify-center font-black mt-1.5 shrink-0">
                        <span className="text-[8px] -rotate-45 font-black">✓</span>
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-sm font-extrabold uppercase tracking-wide text-brand-navy dark:text-brand-cream">{tip.label}</h4>
                        <p className="text-xs sm:text-sm text-brand-navy/70 dark:text-brand-cream/70 leading-relaxed font-medium">{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Urgent/Important Warning box - Deep Navy Backdrop */}
        <div className="bg-brand-navy dark:bg-slate-900 text-white border-2 border-brand-navy dark:border-brand-gold sharp-card p-6 sm:p-8 flex flex-col md:flex-row items-start gap-6 shadow-[8px_8px_0px_0px_rgba(255,215,0,0.4)] dark:shadow-[8px_8px_0px_0px_rgba(255,215,0,0.15)]">
          <div className="p-3 bg-brand-gold text-brand-navy sharp-card border border-white dark:border-brand-gold flex-shrink-0">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-black uppercase text-brand-gold tracking-wide">
              Crucial: Beware of "Lapka" (Unauthorized Commission Agents)
            </h3>
            <p className="text-brand-cream/90 text-xs sm:text-sm leading-relaxed font-medium">
              In highly crowded tourist districts like Jaipur’s Hawa Mahal or Udaipur’s City Palace gates, you may be approached by friendly strangers offering free rides or massive jewelry store discounts. These are commission-based middlemen trying to route you to overpriced private emporiums. Kindly refuse and stick to government-certified outlets for authentic handicrafts and textiles.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
