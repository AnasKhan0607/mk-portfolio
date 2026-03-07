'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillCategory {
  id: string;
  name: string;
  subtitle: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Ancient Tongues',
    subtitle: 'Languages of power',
    skills: ['Python', 'Java', 'Golang', 'JavaScript', 'C/C++', 'C#', 'Ruby', 'Assembly'],
  },
  {
    id: 'frameworks',
    name: 'Enchanted Artifacts',
    subtitle: 'Tools of amplification',
    skills: ['React', 'Spring Boot', 'FastAPI', 'ASP.NET', 'Ruby on Rails', 'TensorFlow', 'NumPy', 'Pandas'],
  },
  {
    id: 'cloud',
    name: 'The Cloud Realm',
    subtitle: 'Commanding the heavens',
    skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'],
  },
  {
    id: 'data',
    name: 'The Vault',
    subtitle: 'Knowledge preserved',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'OracleSQL'],
  },
  {
    id: 'ai',
    name: 'Dark Arts',
    subtitle: 'Forbidden knowledge',
    skills: ['LLM Engineering', 'Prompt Engineering', 'Fine-tuning', 'OpenAI APIs', 'Computer Vision', 'YOLOv8'],
  },
  {
    id: 'tools',
    name: 'Essential Supplies',
    subtitle: 'Wizard necessities',
    skills: ['Git', 'Linux', 'Agile', 'RabbitMQ', 'WebSocket', 'REST APIs'],
  },
];

export default function RoomOfRequirement() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [tappedCategory, setTappedCategory] = useState<string | null>(null);

  const handleTap = (id: string) => {
    setTappedCategory(tappedCategory === id ? null : id);
  };

  const isActive = (id: string) => hoveredCategory === id || tappedCategory === id;

  return (
    <section id="room-of-requirement" className="relative min-h-screen py-16 md:py-24 px-4 md:px-6">
      <div className="absolute inset-0 bg-ink-light/20" />
      
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
            Chapter IV
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-serif">
            The Room of Requirement
          </p>
          <p className="text-foreground/60 mt-3 md:mt-4 max-w-xl mx-auto text-sm md:text-base px-4">
            A magical chamber containing the tools and knowledge for any challenge.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              onClick={() => handleTap(category.id)}
              className="group cursor-pointer"
            >
              <div 
                className={`
                  relative h-full p-4 md:p-6 rounded-sm border transition-all duration-500
                  ${isActive(category.id)
                    ? 'bg-parchment border-gold-muted/50 shadow-lg shadow-gold/10' 
                    : 'bg-ink-light/30 border-gold-muted/20 hover:border-gold-muted/40'
                  }
                `}
              >
                {/* Cabinet/shelf top decoration */}
                <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-gold-muted/30 to-transparent" />
                
                {/* Category header */}
                <div className="mb-3 md:mb-4">
                  <h3 className={`font-serif text-base md:text-lg transition-colors duration-300 ${
                    isActive(category.id) ? 'text-ink' : 'text-foreground'
                  }`}>
                    {category.name}
                  </h3>
                  <p className={`text-xs md:text-sm transition-colors duration-300 ${
                    isActive(category.id) ? 'text-sepia' : 'text-foreground/50'
                  }`}>
                    {category.subtitle}
                  </p>
                </div>

                {/* Skills */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isActive(category.id) ? 'expanded' : 'collapsed'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap gap-1.5 md:gap-2"
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: isActive(category.id) ? skillIndex * 0.05 : 0 }}
                        className={`
                          px-1.5 md:px-2 py-0.5 md:py-1 text-xs md:text-sm rounded-sm border transition-all duration-300
                          ${isActive(category.id)
                            ? 'bg-ink/10 text-ink border-sepia/30' 
                            : 'bg-foreground/5 text-foreground/70 border-foreground/10'
                          }
                        `}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Magical glow on hover/tap */}
                {isActive(category.id) && (
                  <motion.div
                    className="absolute inset-0 rounded-sm pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(201, 162, 39, 0.05) 0%, transparent 70%)',
                    }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 md:mt-16"
        >
          <div className="divider">
            <span className="text-gold-muted/60 text-sm">❧</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
