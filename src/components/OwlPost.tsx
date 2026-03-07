'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OwlPost() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormState({ name: '', email: '', message: '' });

    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <section id="owl-post" className="relative min-h-screen py-16 md:py-24 px-4 md:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-ink-light/30 to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="divider mb-6 md:mb-8">
            <span className="text-gold-muted">✦</span>
          </div>
          <h2 className="chapter-heading text-2xl md:text-3xl lg:text-4xl text-gold mb-3 md:mb-4">
            Chapter V
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-serif">
            Send an Owl
          </p>
          <p className="text-foreground/60 mt-3 md:mt-4 max-w-xl mx-auto text-sm md:text-base px-4">
            Correspondence is always welcome. Send a letter and expect a swift reply.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="parchment aged-paper p-5 md:p-8">
              <h3 className="font-serif text-lg md:text-xl text-ink mb-4 md:mb-6">Direct Lines of Communication</h3>

              <div className="space-y-4 md:space-y-6">
                {/* Email */}
                <a
                  href="mailto:Muhammadlivee@icloud.com"
                  className="flex items-start gap-3 md:gap-4 group"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-ink/10 flex items-center justify-center flex-shrink-0 group-hover:bg-burgundy/20 transition-colors">
                    <span className="text-sepia group-hover:text-burgundy transition-colors text-sm md:text-base">✉</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sepia text-xs md:text-sm">Owl Post Address</p>
                    <p className="text-ink group-hover:text-burgundy transition-colors text-sm md:text-base break-all">
                      Muhammadlivee@icloud.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+16479046923" className="flex items-start gap-3 md:gap-4 group">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-ink/10 flex items-center justify-center flex-shrink-0 group-hover:bg-burgundy/20 transition-colors">
                    <span className="text-sepia group-hover:text-burgundy transition-colors text-sm md:text-base">☎</span>
                  </div>
                  <div>
                    <p className="text-sepia text-xs md:text-sm">Floo Network</p>
                    <p className="text-ink group-hover:text-burgundy transition-colors text-sm md:text-base">
                      (647) 904-6923
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-ink/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sepia text-sm md:text-base">⚐</span>
                  </div>
                  <div>
                    <p className="text-sepia text-xs md:text-sm">Current Residence</p>
                    <p className="text-ink text-sm md:text-base">Toronto, Ontario, Canada</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-sepia/20 my-4 md:my-6" />

                {/* Social Links */}
                <div>
                  <p className="text-sepia text-xs md:text-sm mb-3 md:mb-4">Registry Entries</p>
                  <div className="flex gap-3 md:gap-4">
                    <a
                      href="https://github.com/Muhmdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-ink/10 text-ink text-xs md:text-sm rounded-sm border border-sepia/30 hover:bg-burgundy/20 hover:border-burgundy/50 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/muhmdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-ink/10 text-ink text-xs md:text-sm rounded-sm border border-sepia/30 hover:bg-burgundy/20 hover:border-burgundy/50 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="parchment aged-paper p-5 md:p-8">
              <h3 className="font-serif text-lg md:text-xl text-ink mb-4 md:mb-6">Compose Your Letter</h3>

              <AnimatePresence mode="wait">
                {showSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 md:py-12"
                  >
                    <div className="wax-seal mx-auto mb-3 md:mb-4 w-12 h-12 md:w-[60px] md:h-[60px]">
                      <span className="text-parchment text-sm md:text-base">✓</span>
                    </div>
                    <h4 className="font-serif text-lg md:text-xl text-ink mb-2">Letter Dispatched</h4>
                    <p className="text-sepia text-sm md:text-base">
                      Your owl is on its way. Expect a response soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 md:space-y-6"
                  >
                    {/* Name */}
                    <div>
                      <label className="block text-sepia text-xs md:text-sm mb-1.5 md:mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-ink/5 border border-sepia/30 rounded-sm text-ink placeholder-sepia/50 focus:border-gold-muted focus:outline-none transition-colors text-sm md:text-base"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sepia text-xs md:text-sm mb-1.5 md:mb-2">Return Address</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-ink/5 border border-sepia/30 rounded-sm text-ink placeholder-sepia/50 focus:border-gold-muted focus:outline-none transition-colors text-sm md:text-base"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sepia text-xs md:text-sm mb-1.5 md:mb-2">Your Message</label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-ink/5 border border-sepia/30 rounded-sm text-ink placeholder-sepia/50 focus:border-gold-muted focus:outline-none transition-colors resize-none text-sm md:text-base"
                        placeholder="Write your message here..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 md:px-8 py-2.5 md:py-3 bg-burgundy text-parchment font-serif rounded-sm border border-gold-muted/30 hover:bg-burgundy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                    >
                      {isSubmitting ? 'Sending...' : 'Dispatch Owl'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-20 pt-6 md:pt-8 border-t border-gold-muted/20"
        >
          <p className="text-foreground/40 text-xs md:text-sm">
            Crafted by{' '}
            <span className="text-gold-muted">Muhammad Khan</span>
          </p>
          <p className="text-foreground/30 text-[10px] md:text-xs mt-2 incantation">
            &ldquo;After all this time?&rdquo; — &ldquo;Always.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
