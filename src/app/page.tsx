import FloatingCandles from '@/components/FloatingCandles';
import SparkleTrail from '@/components/SparkleTrail';
import TypewriterText from '@/components/TypewriterText';
import SortingHat from '@/components/SortingHat';
import SpellBook from '@/components/SpellBook';
import MaraudersMap from '@/components/MaraudersMap';
import RoomOfRequirement from '@/components/RoomOfRequirement';
import OwlPost from '@/components/OwlPost';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Muhammad Khan | Developer's Grimoire",
  description: "Software Engineer crafting magical code and infrastructure spells. LLM-powered applications, distributed systems, and scalable microservices.",
  keywords: ["software engineer", "portfolio", "LLM", "AI", "distributed systems", "backend", "cloud", "devops", "Toronto"],
  authors: [{ name: "Muhammad Khan" }],
  openGraph: {
    title: "Muhammad Khan | Developer's Grimoire",
    description: "Software Engineer crafting magical code and infrastructure spells",
    type: "website",
  },
};

export default function Home() {
  const terminalTexts = [
    'cast --spell="deploy" --target=production',
    'summon kubernetes --replicas=3',
    'enchant server --with="high-availability"',
    'brew install magic && npm run wizardry',
    'git push origin main --force-with-lease ✨',
    'docker compose up -d --scale api=3',
    'kubectl apply -f patronus.yaml',
    'python train.py --model mistral --lora true',
  ];

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Floating candles background */}
      <FloatingCandles />
      
      {/* Sparkle trail cursor effect */}
      <SparkleTrail />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gold/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold gradient-text">MK</a>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#sorting-hat" className="text-foreground/60 hover:text-gold transition-colors">About</a>
              <a href="#spellbook" className="text-foreground/60 hover:text-gold transition-colors">Projects</a>
              <a href="#marauders-map" className="text-foreground/60 hover:text-gold transition-colors">Experience</a>
              <a href="#room-of-requirement" className="text-foreground/60 hover:text-gold transition-colors">Skills</a>
              <a href="#owl-post" className="px-4 py-2 bg-scarlet text-foreground rounded-full border border-gold hover:bg-scarlet/80 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10 pointer-events-none" />
      
      {/* Hero Section - The Great Hall */}
      <section className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 pt-20">
        {/* Gryffindor crest / logo area */}
        <div className="mb-8">
          <div className="w-24 h-24 rounded-full border-4 border-gold flex items-center justify-center bg-scarlet/20 backdrop-blur-sm">
            <span className="text-5xl">🦁</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4">
          <span className="gradient-text">The Developer&apos;s</span>
          <br />
          <span className="text-foreground text-glow">Grimoire</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/70 text-center mb-8 max-w-2xl">
          Where <span className="text-gold">wizardry</span> meets{' '}
          <span className="text-scarlet">infrastructure</span>
        </p>

        {/* Terminal-style typing text */}
        <div className="w-full max-w-2xl bg-background/80 backdrop-blur-md border border-gold/30 rounded-lg p-6 font-mono text-sm md:text-base">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gold/20">
            <div className="w-3 h-3 rounded-full bg-scarlet" />
            <div className="w-3 h-3 rounded-full bg-gold" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-foreground/50 text-xs">grimoire@hogwarts ~ </span>
          </div>
          <TypewriterText
            texts={terminalTexts}
            className="text-foreground"
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={2500}
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <a
            href="#spellbook"
            className="px-8 py-3 bg-scarlet text-foreground font-semibold rounded-full border-2 border-gold hover:bg-scarlet/80 hover:scale-105 transition-all duration-300 text-center"
          >
            📜 View Spell Book
          </a>
          <a
            href="#owl-post"
            className="px-8 py-3 bg-transparent text-gold font-semibold rounded-full border-2 border-gold hover:bg-gold/10 hover:scale-105 transition-all duration-300 text-center"
          >
            🦉 Send Owl Post
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section - The Sorting Hat */}
      <SortingHat />

      {/* Projects Section - The Spell Book */}
      <SpellBook />

      {/* Experience Section - Marauder's Map */}
      <MaraudersMap />

      {/* Skills Section - Room of Requirement */}
      <RoomOfRequirement />

      {/* Contact Section - Owl Post */}
      <OwlPost />
    </main>
  );
}
