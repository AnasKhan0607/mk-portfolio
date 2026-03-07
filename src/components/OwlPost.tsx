'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OwlPost() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOwlFlying, setIsOwlFlying] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsOwlFlying(true);

    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormState({ name: '', email: '', message: '' });

    // Reset after showing success
    setTimeout(() => {
      setIsOwlFlying(false);
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <section id="owl-post" className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background relative z-20 py-20 px-6 overflow-hidden">
      {/* Flying owl animation */}
      <AnimatePresence>
        {isOwlFlying && (
          <motion.div
            className="fixed z-50 text-6xl"
            initial={{ x: '50vw', y: '80vh', rotate: 0 }}
            animate={{
              x: ['50vw', '60vw', '80vw', '120vw'],
              y: ['80vh', '40vh', '20vh', '-10vh'],
              rotate: [0, -10, -20, -30],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          >
            🦉
            {/* Letter trailing */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-2xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            >
              ✉️
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">🦉 Owl Post</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Send an owl and I&apos;ll respond faster than a Nimbus 2000 on a clear day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-background/50 backdrop-blur-md border border-gold/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Direct Apparition Points</h3>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:Muhammadlivee@icloud.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-scarlet/20 flex items-center justify-center group-hover:bg-scarlet/40 transition-colors">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm">Owl Mail</p>
                    <p className="text-gold group-hover:text-cream transition-colors">
                      Muhammadlivee@icloud.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+16479046923" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-scarlet/20 flex items-center justify-center group-hover:bg-scarlet/40 transition-colors">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm">Floo Network</p>
                    <p className="text-gold group-hover:text-cream transition-colors">
                      (647) 904-6923
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-scarlet/20 flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm">Current Location</p>
                    <p className="text-foreground">Toronto, ON 🇨🇦</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-gold/20">
                  <p className="text-foreground/60 text-sm mb-4">Connect via Portkey</p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Muhmdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors border border-gold/30"
                    >
                      <svg className="w-5 h-5 fill-current text-foreground" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/muhmdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors border border-gold/30"
                    >
                      <svg className="w-5 h-5 fill-current text-foreground" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-background/50 backdrop-blur-md border border-gold/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Compose Your Owl</h3>

              <AnimatePresence mode="wait">
                {showSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-4">✨</div>
                    <h4 className="text-2xl font-bold text-gold mb-2">Owl Dispatched!</h4>
                    <p className="text-foreground/60">
                      Your message is on its way. Expect a response soon!
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
                      <label className="block text-foreground/60 text-sm mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 bg-background/50 border border-gold/30 rounded-lg text-foreground focus:border-gold focus:outline-none transition-colors"
                        placeholder="Harry Potter"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-foreground/60 text-sm mb-2">Owl Address</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 bg-background/50 border border-gold/30 rounded-lg text-foreground focus:border-gold focus:outline-none transition-colors"
                        placeholder="harry@hogwarts.edu"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-foreground/60 text-sm mb-2">Your Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-3 bg-background/50 border border-gold/30 rounded-lg text-foreground focus:border-gold focus:outline-none transition-colors resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-scarlet text-foreground font-semibold rounded-full border-2 border-gold hover:bg-scarlet/80 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          >
                            🦉
                          </motion.span>
                          Sending Owl...
                        </>
                      ) : (
                        <>
                          <span>🦉</span>
                          Send Owl
                        </>
                      )}
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
          className="text-center mt-20 pt-8 border-t border-gold/20"
        >
          <p className="text-foreground/40 text-sm">
            Crafted with ✨ magic and ☕ coffee by{' '}
            <span className="text-gold">Muhammad Khan</span>
          </p>
          <p className="text-foreground/30 text-xs mt-2 font-mono">
            &quot;After all this time?&quot; — &quot;Always.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
