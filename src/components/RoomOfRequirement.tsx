'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Ancient Languages',
    icon: '📜',
    description: 'The tongues in which spells are written',
    skills: [
      { name: 'Python', level: 5 },
      { name: 'Java', level: 5 },
      { name: 'Golang', level: 4 },
      { name: 'JavaScript', level: 4 },
      { name: 'C/C++', level: 4 },
      { name: 'C#', level: 4 },
      { name: 'Ruby', level: 3 },
      { name: 'Assembly', level: 2 },
    ],
  },
  {
    id: 'frameworks',
    name: 'Magical Artifacts',
    icon: '⚗️',
    description: 'Enchanted tools that amplify power',
    skills: [
      { name: 'React', level: 4 },
      { name: 'Spring Boot', level: 4 },
      { name: 'FastAPI', level: 5 },
      { name: 'Ruby on Rails', level: 3 },
      { name: 'ASP.NET', level: 4 },
      { name: 'TensorFlow', level: 4 },
      { name: 'NumPy/Pandas', level: 4 },
    ],
  },
  {
    id: 'cloud',
    name: 'Realm of Clouds',
    icon: '☁️',
    description: 'Commanding the heavens above',
    skills: [
      { name: 'AWS', level: 4 },
      { name: 'GCP', level: 3 },
      { name: 'Docker', level: 5 },
      { name: 'Kubernetes', level: 4 },
      { name: 'CI/CD', level: 5 },
      { name: 'GitHub Actions', level: 5 },
    ],
  },
  {
    id: 'databases',
    name: 'Vault of Secrets',
    icon: '🗄️',
    description: 'Where knowledge is stored and retrieved',
    skills: [
      { name: 'PostgreSQL', level: 5 },
      { name: 'MySQL', level: 4 },
      { name: 'MongoDB', level: 4 },
      { name: 'Redis', level: 5 },
      { name: 'OracleSQL', level: 3 },
    ],
  },
  {
    id: 'tools',
    name: 'Wizard\'s Arsenal',
    icon: '🧰',
    description: 'Essential tools of the trade',
    skills: [
      { name: 'Git', level: 5 },
      { name: 'Linux', level: 5 },
      { name: 'Agile', level: 4 },
      { name: 'RabbitMQ', level: 4 },
      { name: 'WebSocket', level: 4 },
    ],
  },
  {
    id: 'ai',
    name: 'Dark Arts of AI',
    icon: '🤖',
    description: 'The forbidden knowledge of machine learning',
    skills: [
      { name: 'LLM Engineering', level: 5 },
      { name: 'Prompt Engineering', level: 5 },
      { name: 'Fine-tuning (QLoRA)', level: 4 },
      { name: 'OpenAI APIs', level: 5 },
      { name: 'Computer Vision', level: 4 },
      { name: 'YOLOv8', level: 4 },
    ],
  },
];

export default function RoomOfRequirement() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="room-of-requirement" className="min-h-screen bg-background relative z-20 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">🚪 The Room of Requirement</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            A magical room that appears when you need it most, containing exactly what you seek.
            Hover over a category to reveal its contents.
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
              className="relative group cursor-pointer"
            >
              <div
                className={`bg-background/50 backdrop-blur-md border rounded-xl p-6 transition-all duration-500 h-full ${
                  activeCategory === category.id
                    ? 'border-gold bg-gold/5 scale-[1.02]'
                    : 'border-gold/30 hover:border-gold/50'
                }`}
              >
                {/* Door effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCategory === category.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{
                      scale: activeCategory === category.id ? [1, 1.2, 1] : 1,
                      rotate: activeCategory === category.id ? [0, 10, -10, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/60 text-sm mb-4">
                    {category.description}
                  </p>

                  {/* Skills preview/full list */}
                  <AnimatePresence mode="wait">
                    {activeCategory === category.id ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3"
                      >
                        {category.skills.map((skill, i) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-foreground/80 text-sm">{skill.name}</span>
                              <div className="flex gap-0.5">
                                {Array.from({ length: 5 }).map((_, j) => (
                                  <span
                                    key={j}
                                    className={`w-2 h-2 rounded-full ${
                                      j < skill.level ? 'bg-gold' : 'bg-foreground/20'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <div className="h-1 bg-foreground/10 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-scarlet to-gold"
                                initial={{ width: 0 }}
                                animate={{ width: `${(skill.level / 5) * 100}%` }}
                                transition={{ delay: i * 0.05 + 0.2, duration: 0.5 }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-wrap gap-2"
                      >
                        {category.skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill.name}
                            className="px-2 py-1 bg-scarlet/20 text-foreground/70 text-xs rounded border border-scarlet/30"
                          >
                            {skill.name}
                          </span>
                        ))}
                        {category.skills.length > 4 && (
                          <span className="px-2 py-1 text-foreground/40 text-xs">
                            +{category.skills.length - 4}
                          </span>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Languages', value: '8+', icon: '📜' },
            { label: 'Frameworks', value: '10+', icon: '⚗️' },
            { label: 'Cloud/DevOps', value: '6+', icon: '☁️' },
            { label: 'AI/ML Tools', value: '6+', icon: '🤖' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background/50 backdrop-blur-md border border-gold/30 rounded-xl p-4 text-center"
            >
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <div className="text-2xl font-bold text-gold">{stat.value}</div>
              <div className="text-foreground/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
