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
    <section id="owl-post" className="relative min-h-screen py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-ink-light/30 to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="divider mb-8">
            <span className="text-gold-muted">✦</span>
          </div>
          <h2 className="chapter-heading text-3xl md:text-4xl text-gold mb-4">
            Chapter V
          </h2>
          <p className="text-2xl md:text-3xl text-foreground font-serif">
            Send an Owl
          </p>
          <p className="text-foreground/60 mt-4 max-w-xl mx-auto">
            Correspondence is always welcome. Send a letter and expect a swift reply.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="parchment aged-paper p-8">
              <h3 className="font-serif text-xl text-ink mb-6">Direct Lines of Communication</h3>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:Muhammadlivee@icloud.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-sm bg-ink/10 flex items-center justify-center flex-shrink-0 group-hover:bg-burgundy/20 transition-colors">
                    <span className="text-sepia group-hover:text-burgundy transition-colors">✉</span>
                  </div>
                  <div>
                    <p className="text-sepia text-sm">Owl Post Address</p>
                    <p className="text-ink group-hover:text-burgundy transition-colors">
                      Muhammadlivee@icloud.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+16479046923" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-sm bg-ink/10 flex items-center justify-center flex-shrink-0 group-hover:bg-burgundy/20 transition-colors">
                    <span className="text-sepia group-hover:text-burgundy transition-colors">☎</span>
                  </div>
                  <div>
                    <p className="text-sepia text-sm">Floo Network</p>
                    <p className="text-ink group-hover:text-burgundy transition-colors">
                      (647) 904-6923
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-ink/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sepia">⚐</span>
                  </div>
                  <div>
                    <p className="text-sepia text-sm">Current Residence</p>
                    <p className="text-ink">Toronto, Ontario, Canada</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-sepia/20 my-6" />

                {/* Social Links */}
                <div>
                  <p className="text-sepia text-sm mb-4">Registry Entries</p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Muhmdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-ink/10 text-ink text-sm rounded-sm border border-sepia/30 hover:bg-burgundy/20 hover:border-burgundy/50 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/muhmdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-ink/10 text-ink text-sm rounded-sm border border-sepia/30 hover:bg-burgundy/20 hover:border-burgundy/50 transition-colors"
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
          >
            <form onSubmit={handleSubmit} className="parchment aged-paper p-8">
              <h3 className="font-serif text-xl text-ink mb-6">Compose Your Letter</h3>

              <AnimatePresence mode="wait">
                {showSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <div className="wax-seal mx-auto mb-4">
                      <span className="text-parchment">✓</span>
                    </div>
                    <h4 className="font-serif text-xl text-ink mb-2">Letter Dispatched</h4>
                    <p className="text-sepia">
                      Your owl is on its way. Expect a response soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {/* Name */}
                    <div>
                      <label className="block text-sepia text-sm mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 bg-ink/5 border border-sepia/30 rounded-sm text-ink placeholder-sepia/50 focus:border-gold-muted focus:outline-none transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sepia text-sm mb-2">Return Address</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 bg-ink/5 border border-sepia/30 rounded-sm text-ink placeholder-sepia/50 focus:border-gold-muted focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sepia text-sm mb-2">Your Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-3 bg-ink/5 border border-sepia/30 rounded-sm text-ink placeholder-sepia/50 focus:border-gold-muted focus:outline-none transition-colors resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-3 bg-burgundy text-parchment font-serif rounded-sm border border-gold-muted/30 hover:bg-burgundy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
          className="text-center mt-20 pt-8 border-t border-gold-muted/20"
        >
          <p className="text-foreground/40 text-sm">
            Crafted by{' '}
            <span className="text-gold-muted">Muhammad Khan</span>
          </p>
          <p className="text-foreground/30 text-xs mt-2 incantation">
            &ldquo;After all this time?&rdquo; — &ldquo;Always.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
