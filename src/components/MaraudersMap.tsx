'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

const experiences: Experience[] = [
  {
    id: 'tmu-ai',
    role: 'Software Engineer',
    company: 'Toronto Metropolitan University',
    location: 'Toronto, ON',
    period: 'Sep 2025 – May 2026',
    description: 'AI-Powered Mobile Wellness Companion',
    highlights: [
      'Built secure AI microservice (.NET 9) with REST APIs, rate limiting, and API key auth',
      'Self-hosted and deployed Mistral 7B for local LLM inference using Docker',
      'Implemented QLoRA-based fine-tuning pipeline for domain-specific mood detection',
      'Led end-to-end integration testing across containerized services',
    ],
    techStack: ['C#', 'ASP.NET', 'PostgreSQL', 'Docker', 'Mistral 7B', 'QLoRA'],
  },
  {
    id: 'learningmode',
    role: 'Software Engineer (Co-op)',
    company: 'LearningModeAI',
    location: 'Toronto, ON',
    period: 'Dec 2024 – Jun 2025',
    description: 'Chrome extension and scalable microservices',
    highlights: [
      'Developed Chrome extension leveraging GPT-4o for real-time contextual Q&A',
      'Built microservices backend using Python and Golang with Redis caching',
      'Integrated AWS Transcribe and S3 for transcription fallback (+30% coverage)',
      'Designed CI/CD pipeline to AWS EC2 using Docker (-40% deployment time)',
    ],
    techStack: ['JavaScript', 'Golang', 'Python', 'AWS', 'Redis', 'Docker', 'GitHub Actions'],
  },
];

export default function MaraudersMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="marauders-map"
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background relative z-20 py-20 px-6 overflow-hidden"
    >
      {/* Parchment texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">🗺️ The Marauder&apos;s Map</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto font-mono">
            &quot;I solemnly swear that I am up to no good.&quot;
          </p>
        </motion.div>

        {/* Footsteps decoration */}
        <div className="absolute left-1/2 top-40 -translate-x-1/2 h-[calc(100%-200px)] w-1 pointer-events-none">
          <motion.div
            className="w-full bg-gradient-to-b from-gold/50 to-transparent"
            style={{ height: pathLength, scaleY: pathLength }}
          />
        </div>

        {/* Timeline */}
        <div className="relative space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gold border-4 border-background z-10 hidden md:block">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gold"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Footsteps */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 text-2xl hidden md:block"
                style={{ top: -30 }}
                animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
              >
                👣
              </motion.div>

              {/* Content card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-background/50 backdrop-blur-md border border-gold/30 rounded-xl p-6 hover:border-gold/60 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-gold font-semibold">{exp.company}</p>
                      <p className="text-foreground/50 text-sm">{exp.location}</p>
                    </div>
                    <span className="px-3 py-1 bg-scarlet/20 text-gold text-sm rounded-full border border-scarlet/30 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/60 text-sm mb-4 italic font-mono">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2 text-foreground/70 text-sm"
                      >
                        <span className="text-gold mt-0.5">✦</span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-foreground/5 text-foreground/60 text-xs rounded border border-foreground/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>

        {/* Map footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 font-mono text-foreground/40 text-sm"
        >
          &quot;Mischief Managed.&quot;
        </motion.div>
      </div>
    </section>
  );
}
