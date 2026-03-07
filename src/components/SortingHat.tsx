'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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

  return (
    <section id="sorting-hat" className="relative min-h-screen py-24 px-6">
      {/* Parchment background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-ink-light/50 to-background" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
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
            Chapter I
          </h2>
          <p className="text-2xl md:text-3xl text-foreground font-serif">
            The Sorting Ceremony
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Ornate frame */}
            <div className="relative max-w-sm mx-auto">
              {/* Frame border */}
              <div className="absolute -inset-4 border-4 border-gold-muted/60 rounded-sm" />
              <div className="absolute -inset-6 border border-gold-muted/30 rounded-sm" />
              
              {/* Corner decorations */}
              {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => (
                <div
                  key={corner}
                  className={`absolute w-8 h-8 border-gold-muted
                    ${corner.includes('top') ? '-top-8' : '-bottom-8'}
                    ${corner.includes('left') ? '-left-8 border-l-2 border-t-2' : '-right-8 border-r-2 border-t-2'}
                    ${corner.includes('bottom') ? 'border-b-2 border-t-0' : ''}
                  `}
                />
              ))}
              
              {/* Portrait */}
              <div className="relative aspect-[3/4] overflow-hidden bg-ink">
                <Image
                  src="/profile.jpg"
                  alt="Muhammad Khan"
                  fill
                  className="object-cover sepia-[0.2] contrast-[1.1]"
                  priority
                />
                {/* Aged overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/40" />
              </div>
              
              {/* Nameplate */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full">
                <div className="parchment aged-paper py-3 px-6 text-center mx-8">
                  <h3 className="chapter-heading text-lg text-ink tracking-widest">
                    Muhammad Khan
                  </h3>
                  <p className="text-sepia text-sm mt-1">Software Engineer</p>
                </div>
              </div>
            </div>

            {/* Info below portrait */}
            <div className="mt-20 text-center">
              <p className="text-foreground/60 text-sm">
                Toronto Metropolitan University
              </p>
              <p className="text-gold-muted text-sm mt-1">
                Bachelor of Engineering, Class of 2026
              </p>
              
              {/* Links */}
              <div className="flex justify-center gap-6 mt-6">
                <a
                  href="https://github.com/Muhmdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-gold transition-colors text-sm underline underline-offset-4 decoration-gold-muted/50"
                >
                  GitHub Archives
                </a>
                <a
                  href="https://linkedin.com/in/muhmdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-gold transition-colors text-sm underline underline-offset-4 decoration-gold-muted/50"
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
          >
            <div className="parchment aged-paper p-8 md:p-10">
              {!isSorted ? (
                <div className="text-center">
                  <p className="text-ink text-lg leading-relaxed mb-8 incantation">
                    &ldquo;Ah, another soul seeking their place in the grand tapestry of code. 
                    Come, let me peer into the depths of your technical prowess...&rdquo;
                  </p>
                  
                  <button
                    onClick={handleSort}
                    className="px-8 py-3 bg-burgundy text-parchment font-serif rounded-sm border border-gold-muted/50 hover:bg-burgundy/90 transition-colors shadow-lg"
                  >
                    Begin the Ceremony
                  </button>
                </div>
              ) : !showResult ? (
                <div className="text-center min-h-[200px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentTrait}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-ink text-lg incantation"
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
                  <div className="mb-6">
                    <p className="chapter-heading text-burgundy text-2xl tracking-widest">
                      GRYFFINDOR
                    </p>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-muted to-transparent mx-auto mt-4" />
                  </div>
                  
                  <p className="text-ink leading-relaxed mb-6 incantation">
                    &ldquo;Where dwell the brave at heart, their daring, nerve, and chivalry 
                    set Gryffindors apart! You shall build systems that others fear to deploy.&rdquo;
                  </p>
                  
                  {/* Wax seal */}
                  <div className="wax-seal mx-auto mt-8">
                    <span className="text-parchment font-serif text-xl">G</span>
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
              className="mt-8 text-foreground/80 leading-relaxed"
            >
              <p>
                A Software Engineering graduate with hands-on experience building{' '}
                <span className="text-gold">LLM-powered applications</span>,{' '}
                <span className="text-gold">distributed systems</span>, and{' '}
                <span className="text-gold">scalable microservices</span>.
              </p>
              <p className="mt-4 text-foreground/60 text-sm">
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
