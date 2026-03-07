'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Spell {
  id: string;
  name: string;
  incantation: string;
  type: 'Transfiguration' | 'Charms' | 'Defense' | 'Potions';
  description: string;
  effects: string[];
  ingredients: string[]; // Tech stack
  power: number; // 1-5
  github?: string;
}

const spells: Spell[] = [
  {
    id: 'atc-system',
    name: 'Aeris Dominatus',
    incantation: 'Air Traffic Control System',
    type: 'Defense',
    description: 'A powerful distributed enchantment that monitors and controls aerial vessels in real-time, preventing catastrophic collisions through ancient separation algorithms.',
    effects: [
      'Distributed event-driven simulation using FastAPI microservices',
      'Asynchronous communication via RabbitMQ, Redis, PostgreSQL',
      'Real-time WebSocket dashboard for aircraft telemetry',
      'Sub-200ms conflict detection and runway allocation',
      'Redis distributed locks preventing race conditions',
    ],
    ingredients: ['Python', 'FastAPI', 'RabbitMQ', 'Redis', 'PostgreSQL', 'Docker', 'WebSocket'],
    power: 5,
    github: 'https://github.com/Muhmdk',
  },
  {
    id: 'wellness-ai',
    name: 'Animus Curator',
    incantation: 'AI-Powered Wellness Companion',
    type: 'Charms',
    description: 'A sentient companion spell that reads emotional auras and provides comfort through fine-tuned language models, all while maintaining the strictest magical security protocols.',
    effects: [
      'Secure AI microservice with REST APIs and rate limiting',
      'Self-hosted Mistral 7B for local LLM inference',
      'QLoRA-based fine-tuning for mood detection',
      'Containerized distributed microservices architecture',
      'End-to-end integration testing across services',
    ],
    ingredients: ['C#', 'ASP.NET', 'PostgreSQL', 'Docker', 'Mistral 7B', 'QLoRA'],
    power: 5,
  },
  {
    id: 'learning-mode',
    name: 'Intellectus Augmento',
    incantation: 'LearningMode Chrome Extension',
    type: 'Charms',
    description: 'An enchanted browser artifact that summons GPT-4o to provide instant wisdom and contextual knowledge while traversing the muggle internet.',
    effects: [
      'Real-time contextual Q&A using GPT-4o and OpenAI Assistants API',
      'Microservices backend in Python and Golang',
      'Redis caching for efficient transcript processing',
      'AWS Transcribe fallback pipeline (+30% coverage)',
      'CI/CD to AWS EC2 reducing deployment by 40%',
    ],
    ingredients: ['JavaScript', 'Golang', 'Python', 'AWS', 'Redis', 'Docker', 'GitHub Actions'],
    power: 4,
  },
  {
    id: 'parking-detection',
    name: 'Vehiculum Revelio',
    incantation: 'Parking Lot Detection System',
    type: 'Transfiguration',
    description: 'A hackathon-forged spell that peers through magical eyes (cameras) to reveal the presence of parked carriages, training custom vision models on ancient parking manuscripts.',
    effects: [
      'YOLOv8 + OpenCV for real-time spot detection',
      'Custom model trained on PKLot dataset',
      'End-to-end ML pipeline with GPU acceleration',
      'COCO to YOLO dataset conversion automation',
      'CLI-driven inference for images and video',
    ],
    ingredients: ['Python', 'OpenCV', 'YOLOv8', 'TensorFlow', 'Flask'],
    power: 4,
    github: 'https://github.com/Muhmdk',
  },
];

const typeColors = {
  Transfiguration: 'from-purple-500 to-blue-500',
  Charms: 'from-gold to-cream',
  Defense: 'from-scarlet to-orange-500',
  Potions: 'from-green-500 to-emerald-500',
};

const typeEmoji = {
  Transfiguration: '🔮',
  Charms: '✨',
  Defense: '🛡️',
  Potions: '⚗️',
};

export default function SpellBook() {
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);

  return (
    <section id="spellbook" className="min-h-screen bg-background relative z-20 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">📖 The Spell Book</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            A collection of powerful incantations, each crafted through countless hours of practice and experimentation.
          </p>
        </motion.div>

        {/* Spell Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {spells.map((spell, index) => (
            <motion.div
              key={spell.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedSpell(spell)}
              className="cursor-pointer group"
            >
              <div className="relative bg-background/50 backdrop-blur-md border border-gold/30 rounded-xl p-6 hover:border-gold/60 transition-all duration-300 hover:scale-[1.02] h-full">
                {/* Spell Type Badge */}
                <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br ${typeColors[spell.type]} flex items-center justify-center shadow-lg`}>
                  <span className="text-lg">{typeEmoji[spell.type]}</span>
                </div>

                {/* Power Level */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${i < spell.power ? 'text-gold' : 'text-foreground/20'}`}
                    >
                      ⚡
                    </span>
                  ))}
                </div>

                {/* Spell Name */}
                <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-gold transition-colors">
                  {spell.name}
                </h3>
                <p className="text-gold/80 font-mono text-sm mb-4 italic">&quot;{spell.incantation}&quot;</p>

                {/* Brief Description */}
                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                  {spell.description}
                </p>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2">
                  {spell.ingredients.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-scarlet/20 text-foreground/80 text-xs rounded border border-scarlet/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {spell.ingredients.length > 4 && (
                    <span className="px-2 py-1 text-foreground/50 text-xs">
                      +{spell.ingredients.length - 4} more
                    </span>
                  )}
                </div>

                {/* Hover hint */}
                <div className="absolute bottom-4 right-4 text-foreground/30 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to reveal ✨
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spell Detail Modal */}
        <AnimatePresence>
          {selectedSpell && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedSpell(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-background border-2 border-gold/50 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedSpell(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground/10 hover:bg-scarlet/50 flex items-center justify-center transition-colors"
                >
                  ✕
                </button>

                {/* Spell Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${typeColors[selectedSpell.type]} flex items-center justify-center`}>
                    <span className="text-3xl">{typeEmoji[selectedSpell.type]}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold gradient-text">{selectedSpell.name}</h3>
                    <p className="text-gold font-mono italic">&quot;{selectedSpell.incantation}&quot;</p>
                  </div>
                </div>

                {/* Power Level */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-foreground/60 text-sm">Power Level:</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${i < selectedSpell.power ? 'text-gold' : 'text-foreground/20'}`}
                      >
                        ⚡
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {selectedSpell.description}
                </p>

                {/* Effects */}
                <div className="mb-6">
                  <h4 className="text-gold font-semibold mb-3">✨ Magical Effects</h4>
                  <ul className="space-y-2">
                    {selectedSpell.effects.map((effect, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2 text-foreground/70 text-sm"
                      >
                        <span className="text-gold">→</span>
                        {effect}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Ingredients (Tech Stack) */}
                <div className="mb-6">
                  <h4 className="text-gold font-semibold mb-3">⚗️ Ingredients</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSpell.ingredients.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-scarlet/20 text-foreground rounded-full text-sm border border-scarlet/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                {selectedSpell.github && (
                  <a
                    href={selectedSpell.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-scarlet text-foreground font-semibold rounded-full border-2 border-gold hover:bg-scarlet/80 transition-colors"
                  >
                    View Source Scroll ↗
                  </a>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
