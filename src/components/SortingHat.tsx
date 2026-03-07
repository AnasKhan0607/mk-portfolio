'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const sortingTraits = [
  { trait: 'Courage', description: 'Ships to production on Fridays', house: 'GRYFFINDOR' },
  { trait: 'Ambition', description: 'Always chasing that next big project', house: 'GRYFFINDOR' },
  { trait: 'Intelligence', description: 'Debugs at 3 AM and finds the issue', house: 'GRYFFINDOR' },
  { trait: 'Determination', description: 'Never gives up on a failing build', house: 'GRYFFINDOR' },
];

const skills = [
  'LLM Engineering',
  'Distributed Systems',
  'Cloud Infrastructure',
  'Backend Development',
  'AI/ML Integration',
  'DevOps & CI/CD',
];

export default function SortingHat() {
  const [isSorted, setIsSorted] = useState(false);
  const [currentTraitIndex, setCurrentTraitIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSort = () => {
    if (isSorted) return;
    setIsSorted(true);
    
    // Cycle through traits before revealing
    let index = 0;
    const interval = setInterval(() => {
      setCurrentTraitIndex(index);
      index++;
      if (index >= sortingTraits.length) {
        clearInterval(interval);
        setTimeout(() => setShowResult(true), 500);
      }
    }, 800);
  };

  return (
    <section id="sorting-hat" className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background relative z-20 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">🎩 The Sorting Hat</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            &quot;Hmm, difficult. Very difficult. Plenty of courage, I see. Not a bad mind either...&quot;
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Profile Image Placeholder */}
            <div className="relative w-64 h-64 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-scarlet to-gold animate-pulse" />
              <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Muhammad Khan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Gryffindor badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-scarlet border-4 border-gold flex items-center justify-center shadow-lg"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-2xl">🦁</span>
              </motion.div>
            </div>

            {/* Name and Title */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-foreground mb-2">Muhammad Khan</h3>
              <p className="text-gold text-lg font-mono">Software Engineer</p>
              <p className="text-foreground/60 mt-2">Toronto, ON 🇨🇦</p>
            </div>

            {/* Quick Links */}
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://github.com/Muhmdk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-foreground/10 hover:bg-gold/20 rounded-full text-sm font-mono transition-colors border border-gold/30"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/muhmdk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-foreground/10 hover:bg-gold/20 rounded-full text-sm font-mono transition-colors border border-gold/30"
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>

          {/* Right side - Sorting Ceremony */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Sorting Hat Card */}
            <div className="bg-background/50 backdrop-blur-md border border-gold/30 rounded-2xl p-8">
              {!isSorted ? (
                <div className="text-center">
                  <motion.div
                    className="text-8xl mb-6"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🎩
                  </motion.div>
                  <p className="text-foreground/80 mb-6 font-serif italic">
                    &quot;Let me look into your mind... Click to begin the sorting ceremony.&quot;
                  </p>
                  <button
                    onClick={handleSort}
                    className="px-8 py-3 bg-scarlet text-foreground font-semibold rounded-full border-2 border-gold hover:bg-scarlet/80 hover:scale-105 transition-all duration-300"
                  >
                    ✨ Begin Sorting
                  </button>
                </div>
              ) : !showResult ? (
                <div className="text-center">
                  <motion.div
                    className="text-8xl mb-6"
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 0.3, repeat: Infinity }}
                  >
                    🎩
                  </motion.div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTraitIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-foreground/80 font-serif italic"
                    >
                      <p className="text-xl mb-2">&quot;{sortingTraits[currentTraitIndex].trait}...&quot;</p>
                      <p className="text-sm text-foreground/60">{sortingTraits[currentTraitIndex].description}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center"
                >
                  <div className="text-6xl mb-4">🦁</div>
                  <h4 className="text-3xl font-bold text-scarlet mb-2 text-glow-scarlet">GRYFFINDOR!</h4>
                  <p className="text-foreground/80 mb-6">
                    &quot;Where dwell the brave at heart, their daring, nerve, and chivalry set Gryffindors apart!&quot;
                  </p>
                  
                  {/* Skills as magical abilities */}
                  <div className="flex flex-wrap justify-center gap-2 mt-6">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-3 py-1 bg-gold/20 text-gold text-sm rounded-full border border-gold/30"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 bg-background/50 backdrop-blur-md border border-gold/30 rounded-xl p-6"
            >
              <h4 className="text-gold font-semibold mb-3 flex items-center gap-2">
                <span>🏫</span> Wizarding Education
              </h4>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-scarlet/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground">Toronto Metropolitan University</h5>
                  <p className="text-foreground/60 text-sm">Bachelor of Engineering, Software Engineering</p>
                  <p className="text-gold text-sm font-mono">Class of 2026</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-foreground/80 leading-relaxed">
            Software Engineering new grad with hands-on experience building{' '}
            <span className="text-gold">LLM-powered applications</span>,{' '}
            <span className="text-gold">distributed systems</span>, and{' '}
            <span className="text-gold">scalable microservices</span>. 
            Strong background in backend development, cloud infrastructure, and real-time systems, 
            with a passion for shipping production-ready AI products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
