'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const traits = [
  'Courage in the face of production deployments...',
  'A mind sharp enough to debug the darkest code...',
  'Ambition to build systems that scale...',
  'Loyalty to clean architecture and best practices...',
];

export default function SortingHat() {
  const [isSorted, setIsSorted] = useState(false);
  const [currentTrait, setCurrentTrait] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSort = () => {
    if (isSorted) return;
    setIsSorted(true);
    
    let index = 0;
    const interval = setInterval(() => {
      setCurrentTrait(index);
      index++;
      if (index >= traits.length) {
        clearInterval(interval);
        setTimeout(() => setShowResult(true), 800);
      }
    }, 1200);
  };

  // Get basePath for images
  const basePath = process.env.NODE_ENV === 'production' ? '/mk-portfolio' : '';

  return (
    <section id="sorting-hat" className="relative min-h-screen py-16 md:py-24 px-4 md:px-6">
      {/* Parchment background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-ink-light/50 to-background" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
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
            Chapter I
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-serif">
            The Sorting Ceremony
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-1"
          >
            {/* Chocolate Frog Card Frame */}
            <div className="relative max-w-[280px] sm:max-w-sm mx-auto">
              {/* Outer card shape */}
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 rounded-lg shadow-2xl" />
              
              {/* Gold trim layer */}
              <div className="absolute -inset-3 md:-inset-5 border-4 md:border-[6px] border-yellow-600/80 rounded-lg" 
                   style={{ 
                     boxShadow: 'inset 0 0 20px rgba(202, 138, 4, 0.3), 0 0 15px rgba(202, 138, 4, 0.2)' 
                   }} 
              />
              
              {/* Inner decorative border */}
              <div className="absolute -inset-1 md:-inset-2 border-2 border-yellow-500/50 rounded-md" />
              
              {/* Corner ornaments */}
              <div className="absolute -top-5 -left-5 md:-top-7 md:-left-7 w-8 h-8 md:w-10 md:h-10 text-yellow-500 text-2xl md:text-3xl flex items-center justify-center">✦</div>
              <div className="absolute -top-5 -right-5 md:-top-7 md:-right-7 w-8 h-8 md:w-10 md:h-10 text-yellow-500 text-2xl md:text-3xl flex items-center justify-center">✦</div>
              <div className="absolute -bottom-5 -left-5 md:-bottom-7 md:-left-7 w-8 h-8 md:w-10 md:h-10 text-yellow-500 text-2xl md:text-3xl flex items-center justify-center">✦</div>
              <div className="absolute -bottom-5 -right-5 md:-bottom-7 md:-right-7 w-8 h-8 md:w-10 md:h-10 text-yellow-500 text-2xl md:text-3xl flex items-center justify-center">✦</div>
              
              {/* Portrait */}
              <div className="relative aspect-[3/4] overflow-hidden bg-ink rounded-sm">
                {/* Living Portrait - Chocolate Frog Card Effect */}
                <motion.div
                  className="w-full h-full"
                  animate={{
                    scale: [1, 1.05, 1.03, 1.06, 1],
                    x: [0, 8, -5, 10, -8, 0],
                    y: [0, -5, 3, -8, 5, 0],
                  }}
                  transition={{
                    duration: 20,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${basePath}/profile.jpg`}
                    alt="Muhammad Khan"
                    className="w-full h-full object-cover sepia-[0.2] contrast-[1.1] scale-110"
                  />
                </motion.div>
                {/* Aged overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/40 pointer-events-none" />
              </div>
              
              {/* Nameplate */}
              <div className="absolute -bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 w-full">
                <div className="parchment aged-paper py-2 md:py-3 px-4 md:px-6 text-center mx-4 md:mx-8">
                  <h3 className="chapter-heading text-base md:text-lg text-ink tracking-widest">
                    Muhammad Khan
                  </h3>
                  <p className="text-sepia text-xs md:text-sm mt-1">Software Engineer</p>
                </div>
              </div>
            </div>

            {/* Info below portrait */}
            <div className="mt-16 md:mt-20 text-center">
              <p className="text-foreground/60 text-xs md:text-sm">
                Toronto Metropolitan University
              </p>
              <p className="text-gold-muted text-xs md:text-sm mt-1">
                Bachelor of Engineering, Class of 2026
              </p>
              
              {/* Links */}
              <div className="flex justify-center gap-4 md:gap-6 mt-4 md:mt-6 flex-wrap">
                <a
                  href="https://github.com/Muhmdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-gold transition-colors text-xs md:text-sm underline underline-offset-4 decoration-gold-muted/50"
                >
                  GitHub Archives
                </a>
                <a
                  href="https://linkedin.com/in/muhmdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-gold transition-colors text-xs md:text-sm underline underline-offset-4 decoration-gold-muted/50"
                >
                  LinkedIn Registry
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Sorting Ceremony */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2"
          >
            <div className="parchment aged-paper p-6 md:p-8 lg:p-10">
              {!isSorted ? (
                <div className="text-center">
                  <p className="text-ink text-base md:text-lg leading-relaxed mb-6 md:mb-8 incantation">
                    &ldquo;Ah, another soul seeking their place in the grand tapestry of code. 
                    Come, let me peer into the depths of your technical prowess...&rdquo;
                  </p>
                  
                  <button
                    onClick={handleSort}
                    className="px-6 md:px-8 py-2.5 md:py-3 bg-burgundy text-parchment font-serif rounded-sm border border-gold-muted/50 hover:bg-burgundy/90 transition-colors shadow-lg text-sm md:text-base"
                  >
                    Begin the Ceremony
                  </button>
                </div>
              ) : !showResult ? (
                <div className="text-center min-h-[180px] md:min-h-[200px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentTrait}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-ink text-base md:text-lg incantation"
                    >
                      &ldquo;{traits[currentTrait]}&rdquo;
                    </motion.p>
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="mb-4 md:mb-6">
                    <p className="chapter-heading text-burgundy text-xl md:text-2xl tracking-widest">
                      GRYFFINDOR
                    </p>
                    <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-muted to-transparent mx-auto mt-3 md:mt-4" />
                  </div>
                  
                  <p className="text-ink leading-relaxed mb-4 md:mb-6 incantation text-sm md:text-base">
                    &ldquo;Where dwell the brave at heart, their daring, nerve, and chivalry 
                    set Gryffindors apart! You shall build systems that others fear to deploy.&rdquo;
                  </p>
                  
                  {/* Wax seal */}
                  <div className="wax-seal mx-auto mt-6 md:mt-8 w-12 h-12 md:w-[60px] md:h-[60px]">
                    <span className="text-parchment font-serif text-lg md:text-xl">G</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* About text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 md:mt-8 text-foreground/80 leading-relaxed text-sm md:text-base"
            >
              <p>
                A Software Engineering graduate with hands-on experience building{' '}
                <span className="text-gold">LLM-powered applications</span>,{' '}
                <span className="text-gold">distributed systems</span>, and{' '}
                <span className="text-gold">scalable microservices</span>.
              </p>
              <p className="mt-3 md:mt-4 text-foreground/60 text-xs md:text-sm">
                Passionate about shipping production-ready AI products and crafting 
                elegant solutions to complex problems.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
