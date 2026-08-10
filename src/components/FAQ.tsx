import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { faqs } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className="border-2 border-brand-navy dark:border-brand-gold/30 sharp-card overflow-hidden bg-white dark:bg-slate-900 transition-all duration-300"
          >
            {/* Accordion header button */}
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer hover:bg-brand-gold/15 dark:hover:bg-brand-gold/10 transition-colors bg-white dark:bg-slate-900"
            >
              <div className="flex items-center space-x-3 pr-4">
                <HelpCircle className="h-4.5 w-4.5 text-brand-navy dark:text-brand-gold flex-shrink-0" />
                <span className="font-extrabold text-brand-navy dark:text-brand-cream text-xs uppercase tracking-wide">
                  {faq.question}
                </span>
              </div>
              <ChevronDown 
                className={`h-4.5 w-4.5 text-brand-navy dark:text-brand-cream transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? 'transform rotate-180 text-brand-gold bg-brand-navy dark:bg-brand-gold dark:text-brand-navy p-0.5 sharp-card' : ''
                }`}
              />
            </button>

            {/* Accordion expanded panel */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-5 pb-5 pt-3 text-brand-navy/80 dark:text-brand-cream/80 text-xs sm:text-sm leading-relaxed border-t-2 border-brand-navy/10 dark:border-brand-gold/15 font-medium bg-brand-gold/5 dark:bg-slate-950">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
