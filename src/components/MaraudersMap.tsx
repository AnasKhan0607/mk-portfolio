'use client';

import { motion } from 'framer-motion';

interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  tools: string[];
}

const experiences: Experience[] = [
  {
    id: 'tmu',
    role: 'Software Engineer',
    organization: 'Toronto Metropolitan University',
    period: 'September 2025 — May 2026',
    description: 'AI-Powered Mobile Wellness Companion',
    achievements: [
      'Built secure AI microservice (.NET 9) with REST APIs, rate limiting, and API key authentication',
      'Self-hosted and deployed Mistral 7B for local LLM inference using Docker',
      'Implemented QLoRA-based fine-tuning pipeline for domain-specific mood detection',
      'Led end-to-end integration testing across containerized services',
    ],
    tools: ['C#', 'ASP.NET', 'PostgreSQL', 'Docker', 'Mistral 7B'],
  },
  {
    id: 'learningmode',
    role: 'Software Engineer',
    organization: 'LearningModeAI',
    period: 'December 2024 — June 2025',
    description: 'Chrome Extension & Scalable Microservices',
    achievements: [
      'Developed Chrome extension leveraging GPT-4o for real-time contextual Q&A',
      'Built microservices backend using Python and Golang with Redis caching',
      'Integrated AWS Transcribe and S3 for transcription fallback (+30% coverage)',
      'Designed CI/CD pipeline to AWS EC2 using Docker (-40% deployment time)',
    ],
    tools: ['JavaScript', 'Golang', 'Python', 'AWS', 'Redis', 'Docker'],
  },
];

export default function MaraudersMap() {
  return (
    <section id="marauders-map" className="relative min-h-screen py-24 px-6 overflow-hidden">
      {/* Map-like background texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 30 50 50 T 100 50' fill='none' stroke='%23C9A227' stroke-width='0.5'/%3E%3Cpath d='M0 70 Q 25 50 50 70 T 100 70' fill='none' stroke='%23C9A227' stroke-width='0.3'/%3E%3Cpath d='M0 30 Q 25 10 50 30 T 100 30' fill='none' stroke='%23C9A227' stroke-width='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 100px',
        }}
      />
      
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
            Chapter III
          </h2>
          <p className="text-2xl md:text-3xl text-foreground font-serif">
            The Journey Thus Far
          </p>
          <p className="text-foreground/50 font-mono text-sm mt-6 incantation">
            &ldquo;I solemnly swear that I am up to no good.&rdquo;
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-muted/50 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-gold-muted rounded-full md:-translate-x-1/2 -translate-x-1/2 top-8 shadow-lg shadow-gold/20" />
              
              {/* Footsteps decoration */}
              <motion.div
                className="absolute left-0 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 top-2 text-gold-muted/40 text-xs"
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ◆
              </motion.div>

              {/* Content card */}
              <div className="ml-6 md:ml-0 parchment aged-paper p-6">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg text-ink font-serif">{exp.role}</h3>
                    <p className="text-sepia">{exp.organization}</p>
                  </div>
                  <span className="text-xs text-sepia/70 font-mono whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Project description */}
                <p className="text-ink/70 text-sm incantation mb-4 pb-4 border-b border-sepia/20">
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-ink/80 text-sm">
                      <span className="text-gold-muted mt-0.5">›</span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-sepia/20">
                  {exp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 bg-ink/5 text-sepia text-xs rounded-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-foreground/40 font-mono text-sm incantation">
            &ldquo;Mischief Managed.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
