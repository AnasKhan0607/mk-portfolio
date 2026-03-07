'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Spell {
  id: string;
  name: string;
  latinName: string;
  description: string;
  details: string[];
  ingredients: string[];
  difficulty: 'Apprentice' | 'Journeyman' | 'Master' | 'Legendary';
}

const spells: Spell[] = [
  {
    id: 'atc',
    name: 'Air Traffic Control System',
    latinName: 'Aeris Dominatus',
    description: 'A distributed enchantment that monitors aerial vessels in real-time, preventing collisions through ancient separation algorithms and asynchronous communication.',
    details: [
      'Distributed event-driven simulation using FastAPI microservices',
      'Asynchronous messaging via RabbitMQ with Redis state management',
      'Real-time WebSocket dashboard streaming aircraft telemetry',
      'Conflict detection achieving sub-200ms alerting latency',
      'Redis distributed locks preventing race conditions',
    ],
    ingredients: ['Python', 'FastAPI', 'RabbitMQ', 'Redis', 'PostgreSQL', 'Docker', 'WebSocket'],
    difficulty: 'Legendary',
  },
  {
    id: 'wellness',
    name: 'AI Wellness Companion',
    latinName: 'Animus Curator',
    description: 'A sentient companion that reads emotional auras through fine-tuned language models, providing comfort while maintaining the strictest security protocols.',
    details: [
      'Secure AI microservice with REST APIs and rate limiting',
      'Self-hosted Mistral 7B for local LLM inference',
      'QLoRA-based fine-tuning pipeline for mood detection',
      'Containerized distributed microservices architecture',
      'End-to-end integration testing across services',
    ],
    ingredients: ['C#', 'ASP.NET', 'PostgreSQL', 'Docker', 'Mistral 7B', 'QLoRA'],
    difficulty: 'Legendary',
  },
  {
    id: 'learning',
    name: 'LearningMode Extension',
    latinName: 'Intellectus Augmento',
    description: 'An enchanted browser artifact that summons GPT-4o to provide instant wisdom and contextual knowledge while traversing the digital realm.',
    details: [
      'Real-time contextual Q&A using GPT-4o and OpenAI Assistants API',
      'Microservices backend in Python and Golang',
      'Redis caching for efficient transcript processing',
      'AWS Transcribe fallback pipeline increasing coverage by 30%',
      'CI/CD to AWS EC2 reducing deployment time by 40%',
    ],
    ingredients: ['JavaScript', 'Golang', 'Python', 'AWS', 'Redis', 'Docker', 'GitHub Actions'],
    difficulty: 'Master',
  },
  {
    id: 'parking',
    name: 'Parking Detection System',
    latinName: 'Vehiculum Revelio',
    description: 'A hackathon-forged spell that peers through enchanted eyes to reveal parked carriages, training custom vision models on ancient manuscripts.',
    details: [
      'YOLOv8 and OpenCV for real-time spot detection',
      'Custom model trained on PKLot dataset',
      'End-to-end ML pipeline with GPU acceleration',
      'COCO to YOLO dataset conversion automation',
      'CLI-driven inference for images and video',
    ],
    ingredients: ['Python', 'OpenCV', 'YOLOv8', 'TensorFlow', 'Flask'],
    difficulty: 'Master',
  },
];

const difficultyColors = {
  Apprentice: 'text-forest',
  Journeyman: 'text-sepia',
  Master: 'text-gold-muted',
  Legendary: 'text-burgundy',
};

export default function SpellBook() {
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);

  return (
    <section id="spellbook" className="relative min-h-screen py-16 md:py-24 px-4 md:px-6">
      <div className="absolute inset-0 bg-ink-light/30" />
      
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
            Chapter II
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-serif">
            The Spell Book
          </p>
          <p className="text-foreground/60 mt-3 md:mt-4 max-w-xl mx-auto text-sm md:text-base px-4">
            A collection of incantations crafted through countless hours of practice, 
            each representing mastery over different domains of the arcane arts.
          </p>
        </motion.div>

        {/* Spells grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {spells.map((spell, index) => (
            <motion.div
              key={spell.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedSpell(spell)}
              className="cursor-pointer group"
            >
              <div className="parchment aged-paper p-4 md:p-6 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                {/* Difficulty badge */}
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <span className={`text-[10px] md:text-xs uppercase tracking-widest ${difficultyColors[spell.difficulty]}`}>
                    {spell.difficulty}
                  </span>
                  <span className="text-sepia/60 text-[10px] md:text-xs">№ {index + 1}</span>
                </div>

                {/* Spell name */}
                <h3 className="text-lg md:text-xl text-ink font-serif mb-1 group-hover:text-burgundy transition-colors">
                  {spell.name}
                </h3>
                <p className="text-sepia text-xs md:text-sm incantation mb-3 md:mb-4">
                  &ldquo;{spell.latinName}&rdquo;
                </p>

                {/* Description */}
                <p className="text-ink/80 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3">
                  {spell.description}
                </p>

                {/* Ingredients preview */}
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {spell.ingredients.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 md:px-2 py-0.5 bg-ink/10 text-sepia text-[10px] md:text-xs rounded-sm border border-sepia/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {spell.ingredients.length > 3 && (
                    <span className="text-sepia/60 text-[10px] md:text-xs px-1.5 md:px-2 py-0.5">
                      +{spell.ingredients.length - 3}
                    </span>
                  )}
                </div>

                {/* Click hint */}
                <p className="text-sepia/40 text-[10px] md:text-xs mt-3 md:mt-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                  Tap to read more →
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spell detail modal */}
        <AnimatePresence>
          {selectedSpell && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-ink/95 z-50 flex items-center justify-center p-4 md:p-6 backdrop-blur-sm"
              onClick={() => setSelectedSpell(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="parchment aged-paper max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 lg:p-10 relative"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedSpell(null)}
                  className="absolute top-3 md:top-4 right-3 md:right-4 w-8 h-8 flex items-center justify-center text-sepia hover:text-burgundy transition-colors text-lg"
                >
                  ✕
                </button>

                {/* Spell header */}
                <div className="text-center mb-6 md:mb-8 pr-8">
                  <span className={`text-[10px] md:text-xs uppercase tracking-widest ${difficultyColors[selectedSpell.difficulty]}`}>
                    {selectedSpell.difficulty} Spell
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-ink font-serif mt-2">
                    {selectedSpell.name}
                  </h3>
                  <p className="text-sepia incantation text-base md:text-lg mt-1">
                    &ldquo;{selectedSpell.latinName}&rdquo;
                  </p>
                  <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-sepia/50 to-transparent mx-auto mt-3 md:mt-4" />
                </div>

                {/* Description */}
                <p className="text-ink/90 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                  {selectedSpell.description}
                </p>

                {/* Effects */}
                <div className="mb-6 md:mb-8">
                  <h4 className="text-sepia font-serif text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
                    Magical Properties
                  </h4>
                  <ul className="space-y-2">
                    {selectedSpell.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2 md:gap-3 text-ink/80 text-xs md:text-sm"
                      >
                        <span className="text-gold-muted mt-0.5">❧</span>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Ingredients */}
                <div>
                  <h4 className="text-sepia font-serif text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
                    Required Ingredients
                  </h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {selectedSpell.ingredients.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-1 bg-ink/10 text-ink text-xs md:text-sm rounded-sm border border-sepia/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Wax seal */}
                <div className="flex justify-center mt-8 md:mt-10">
                  <div className="wax-seal w-12 h-12 md:w-[60px] md:h-[60px]">
                    <span className="text-parchment font-serif text-sm md:text-base">✦</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
