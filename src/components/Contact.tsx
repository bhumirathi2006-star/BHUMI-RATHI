import React, { useState } from 'react';
import { Send, MapPin, Mail, Share2, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import FAQ from './FAQ';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset fields
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-brand-cream dark:bg-slate-950 text-brand-navy dark:text-brand-cream border-t border-brand-navy/10 dark:border-brand-gold/15 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-brand-navy dark:text-brand-gold border-2 border-brand-navy dark:border-brand-gold/40 px-4 py-1.5 sharp-card bg-brand-gold/15 mb-4">
            Plan Your Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-navy dark:text-brand-cream tracking-tight uppercase font-serif">
            Get in Touch & FAQ
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4" />
          <p className="text-brand-navy/80 dark:text-brand-cream/80 mt-6 text-sm sm:text-base font-sans font-medium tracking-wide leading-relaxed">
            Need custom itineraries or certified travel guides? Fill out the inquiry form or read our frequently asked questions.
          </p>
        </div>

        {/* Form and FAQ layout side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Contact form & Info (7 columns on large screens) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white dark:bg-slate-900 border-2 border-brand-navy dark:border-brand-gold/30 sharp-card p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,35,102,0.15)] dark:shadow-[6px_6px_0px_0px_rgba(255,215,0,0.1)]">
              <h3 className="text-lg font-black uppercase tracking-widest text-brand-navy dark:text-brand-gold mb-6 border-b-2 border-brand-navy/10 dark:border-brand-gold/15 pb-2 font-serif">
                Send Heritage Inquiry
              </h3>

              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="inquiry-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div>
                      <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-black text-brand-navy/70 dark:text-brand-cream/70 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="E.G. AARAV SHARMA"
                        className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-brand-navy/40 dark:border-brand-gold/30 sharp-card text-brand-navy dark:text-brand-cream text-xs font-semibold uppercase tracking-wider focus:outline-none focus:border-brand-navy dark:focus:border-brand-gold placeholder-brand-navy/30 dark:placeholder-brand-cream/30"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[10px] uppercase tracking-widest font-black text-brand-navy/70 dark:text-brand-cream/70 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E.G. AARAV@MUMBAI.COM"
                        className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-brand-navy/40 dark:border-brand-gold/30 sharp-card text-brand-navy dark:text-brand-cream text-xs font-semibold uppercase tracking-wider focus:outline-none focus:border-brand-navy dark:focus:border-brand-gold placeholder-brand-navy/30 dark:placeholder-brand-cream/30"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[10px] uppercase tracking-widest font-black text-brand-navy/70 dark:text-brand-cream/70 mb-2">
                        Your Plan / Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="HOW MANY DAYS ARE YOU VISITING? ANY SPECIFIC CITIES IN MIND?"
                        className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-brand-navy/40 dark:border-brand-gold/30 sharp-card text-brand-navy dark:text-brand-cream text-xs font-semibold uppercase tracking-wider focus:outline-none focus:border-brand-navy dark:focus:border-brand-gold placeholder-brand-navy/30 dark:placeholder-brand-cream/30"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-brand-gold hover:bg-brand-navy text-brand-navy hover:text-white dark:bg-brand-gold dark:hover:bg-slate-950 dark:hover:text-brand-gold border-2 border-brand-navy dark:border-brand-gold/40 font-black uppercase tracking-widest text-xs sharp-button transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,35,102,0.15)] dark:shadow-[4px_4px_0px_0px_rgba(255,215,0,0.1)] hover:shadow-none"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-brand-navy border-t-transparent animate-spin" />
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 space-y-4"
                  >
                    <div className="w-16 h-16 rotate-45 bg-brand-gold text-brand-navy border-2 border-brand-navy dark:border-brand-gold flex items-center justify-center mx-auto">
                      <div className="-rotate-45 text-2xl font-black">✓</div>
                    </div>
                    <h4 className="text-xl font-black text-brand-navy dark:text-brand-gold uppercase font-serif mt-4">
                      Khamma Ghani! 🙏
                    </h4>
                    <p className="text-brand-navy/80 dark:text-brand-cream/80 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-medium">
                      Thank you for reaching out to us. Your royal inquiry has been received. Our Rajasthani heritage travel experts will contact you within 24 hours at your email address!
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-4 px-5 py-2.5 border-2 border-brand-navy dark:border-brand-gold bg-white dark:bg-slate-950 text-brand-navy dark:text-brand-gold hover:bg-brand-gold dark:hover:bg-brand-gold dark:hover:text-brand-navy text-[10px] uppercase tracking-widest font-black sharp-button transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Fictional contact detail nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 border-2 border-brand-navy dark:border-brand-gold/30 sharp-card p-5 flex items-center space-x-4 shadow-[4px_4px_0px_0px_rgba(0,35,102,0.1)] dark:shadow-[4px_4px_0px_0px_rgba(255,215,0,0.1)]">
                <div className="p-3 bg-brand-navy dark:bg-slate-950 text-brand-gold border border-brand-gold dark:border-brand-gold/40 sharp-card shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[9px] font-black text-brand-navy/50 dark:text-brand-cream/50 uppercase tracking-widest leading-none mb-1">Tourism Office</h4>
                  <p className="text-xs sm:text-sm font-extrabold text-brand-navy dark:text-brand-gold uppercase">RTDC Office, Jaipur, India</p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 border-2 border-brand-navy dark:border-brand-gold/30 sharp-card p-5 flex items-center space-x-4 shadow-[4px_4px_0px_0px_rgba(0,35,102,0.1)] dark:shadow-[4px_4px_0px_0px_rgba(255,215,0,0.1)]">
                <div className="p-3 bg-brand-navy dark:bg-slate-950 text-brand-gold border border-brand-gold dark:border-brand-gold/40 sharp-card shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[9px] font-black text-brand-navy/50 dark:text-brand-cream/50 uppercase tracking-widest leading-none mb-1">Email Inquiry</h4>
                  <p className="text-xs sm:text-sm font-extrabold text-brand-navy dark:text-brand-gold lowercase">info@rajasthantourism.gov</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: FAQs (5 columns on large screens) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 border-2 border-brand-navy dark:border-brand-gold/30 sharp-card p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,35,102,0.15)] dark:shadow-[6px_6px_0px_0px_rgba(255,215,0,0.1)]">
              <h3 className="text-lg font-black uppercase tracking-widest text-brand-navy dark:text-brand-gold mb-6 border-b-2 border-brand-navy/10 dark:border-brand-gold/15 pb-2 font-serif">
                Frequently Asked
              </h3>
              <FAQ />
            </div>

            {/* Social Sharing badge */}
            <div className="bg-brand-navy dark:bg-slate-900 text-white border-2 border-brand-navy dark:border-brand-gold/50 sharp-card p-6 text-center space-y-4 shadow-[6px_6px_0px_0px_rgba(255,215,0,0.3)] dark:shadow-[6px_6px_0px_0px_rgba(255,215,0,0.15)]">
              <h4 className="text-brand-gold font-black uppercase tracking-widest text-xs flex items-center justify-center gap-1.5 font-serif">
                <Share2 className="h-4.5 w-4.5 text-brand-gold" />
                Follow The Royal Vibe
              </h4>
              <p className="text-xs text-brand-cream/80 dark:text-brand-cream/70 max-w-xs mx-auto font-medium leading-relaxed">
                Connect with us on official channels to see daily photos, story reels, and tourist reviews of Rajasthan.
              </p>
              <div className="flex justify-center space-x-3 pt-1">
                <a href="#_" className="p-2.5 bg-brand-navy dark:bg-slate-950 text-brand-gold border border-brand-gold dark:border-brand-gold/30 hover:bg-brand-gold hover:text-brand-navy dark:hover:bg-brand-gold dark:hover:text-brand-navy sharp-card transition-all duration-300">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#_" className="p-2.5 bg-brand-navy dark:bg-slate-950 text-brand-gold border border-brand-gold dark:border-brand-gold/30 hover:bg-brand-gold hover:text-brand-navy dark:hover:bg-brand-gold dark:hover:text-brand-navy sharp-card transition-all duration-300">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#_" className="p-2.5 bg-brand-navy dark:bg-slate-950 text-brand-gold border border-brand-gold dark:border-brand-gold/30 hover:bg-brand-gold hover:text-brand-navy dark:hover:bg-brand-gold dark:hover:text-brand-navy sharp-card transition-all duration-300">
                  <Youtube className="h-4 w-4" />
                </a>
                <a href="#_" className="p-2.5 bg-brand-navy dark:bg-slate-950 text-brand-gold border border-brand-gold dark:border-brand-gold/30 hover:bg-brand-gold hover:text-brand-navy dark:hover:bg-brand-gold dark:hover:text-brand-navy sharp-card transition-all duration-300">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
