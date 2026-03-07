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
  title: "Muhammad Khan | The Developer's Grimoire",
  description: "Software Engineer crafting magical code and infrastructure spells. A tome of projects, experiences, and arcane knowledge.",
};

export default function Home() {
  const incantations = [
    'Building distributed systems that scale beyond measure...',
    'Conjuring LLM-powered applications from the void...',
    'Crafting microservices with architectural precision...',
    'Deploying to the cloud realms with confidence...',
  ];

  return (
    <main className="relative min-h-screen bg-background">
      {/* Atmospheric candles */}
      <FloatingCandles />
      <SparkleTrail />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-gold-muted/20">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="font-serif text-xl text-gold">MK</a>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#sorting-hat" className="text-foreground/60 hover:text-gold transition-colors">About</a>
              <a href="#spellbook" className="text-foreground/60 hover:text-gold transition-colors">Projects</a>
              <a href="#marauders-map" className="text-foreground/60 hover:text-gold transition-colors">Experience</a>
              <a href="#room-of-requirement" className="text-foreground/60 hover:text-gold transition-colors">Skills</a>
              <a 
                href="#owl-post" 
                className="px-4 py-2 bg-burgundy/80 text-parchment rounded-sm border border-gold-muted/30 hover:bg-burgundy transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Vignette overlay */}
      <div className="fixed inset-0 pointer-events-none vignette z-10" />
      
      {/* Hero Section */}
      <section className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        {/* Book opening effect */}
        <div className="relative max-w-2xl mx-auto text-center">
          {/* Ornate top decoration */}
          <div className="mb-8 text-gold-muted/60">
            ❦ ═══════════════════════ ❦
          </div>

          {/* Title */}
          <h1 className="chapter-heading text-4xl md:text-5xl lg:text-6xl text-gold mb-6 leading-tight">
            The Developer&apos;s
            <br />
            Grimoire
          </h1>

          {/* Decorative line */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-muted to-transparent mx-auto mb-8" />

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 font-serif mb-8">
            A collection of arcane knowledge in the arts of
            <br />
            <span className="text-gold">Software Engineering</span>
          </p>

          {/* Typing text on parchment */}
          <div className="parchment aged-paper py-6 px-8 mb-12 inline-block">
            <TypewriterText
              texts={incantations}
              className="text-ink text-lg"
              typingSpeed={60}
              deletingSpeed={30}
              pauseDuration={3000}
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#spellbook"
              className="px-8 py-3 bg-burgundy text-parchment font-serif rounded-sm border border-gold-muted/30 hover:bg-burgundy/90 transition-colors"
            >
              View the Spell Book
            </a>
            <a
              href="#owl-post"
              className="px-8 py-3 bg-transparent text-gold border border-gold-muted/50 font-serif rounded-sm hover:bg-gold-muted/10 transition-colors"
            >
              Send an Owl
            </a>
          </div>

          {/* Ornate bottom decoration */}
          <div className="mt-12 text-gold-muted/60">
            ❦ ═══════════════════════ ❦
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-foreground/40">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gold-muted/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Sections */}
      <SortingHat />
      <SpellBook />
      <MaraudersMap />
      <RoomOfRequirement />
      <OwlPost />
    </main>
  );
}
