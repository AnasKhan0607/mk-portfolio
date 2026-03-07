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
    'Building distributed systems that scale...',
    'Conjuring LLM-powered applications...',
    'Crafting microservices with precision...',
    'Deploying to the cloud realms...',
  ];

  return (
    <main className="relative min-h-screen bg-background">
      {/* Atmospheric candles */}
      <FloatingCandles />
      <SparkleTrail />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-gold-muted/20">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="font-serif text-lg md:text-xl text-gold">MK</a>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <a 
                href="#owl-post" 
                className="px-3 py-1.5 bg-burgundy/80 text-parchment text-sm rounded-sm border border-gold-muted/30"
              >
                Contact
              </a>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
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
      <section className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 md:px-6 pt-16 md:pt-20">
        {/* Book opening effect */}
        <div className="relative max-w-2xl mx-auto text-center">
          {/* Ornate top decoration */}
          <div className="mb-6 md:mb-8 text-gold-muted/60 text-sm md:text-base overflow-hidden">
            <span className="hidden sm:inline">❦ ═══════════════════════ ❦</span>
            <span className="sm:hidden">❦ ══════════ ❦</span>
          </div>

          {/* Title */}
          <h1 className="chapter-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold mb-4 md:mb-6 leading-tight">
            The Developer&apos;s
            <br />
            Grimoire
          </h1>

          {/* Decorative line */}
          <div className="w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-gold-muted to-transparent mx-auto mb-6 md:mb-8" />

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-serif mb-6 md:mb-8 px-4">
            A collection of arcane knowledge in
            <br className="sm:hidden" />
            <span className="sm:hidden"> </span>
            the arts of{' '}
            <span className="text-gold">Software Engineering</span>
          </p>

          {/* Typing text on parchment */}
          <div className="parchment aged-paper py-4 md:py-6 px-4 md:px-8 mb-8 md:mb-12 inline-block mx-4">
            <TypewriterText
              texts={incantations}
              className="text-ink text-sm sm:text-base md:text-lg"
              typingSpeed={60}
              deletingSpeed={30}
              pauseDuration={3000}
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <a
              href="#spellbook"
              className="px-6 md:px-8 py-2.5 md:py-3 bg-burgundy text-parchment font-serif rounded-sm border border-gold-muted/30 hover:bg-burgundy/90 transition-colors text-sm md:text-base"
            >
              View the Spell Book
            </a>
            <a
              href="#owl-post"
              className="px-6 md:px-8 py-2.5 md:py-3 bg-transparent text-gold border border-gold-muted/50 font-serif rounded-sm hover:bg-gold-muted/10 transition-colors text-sm md:text-base"
            >
              Send an Owl
            </a>
          </div>

          {/* Ornate bottom decoration */}
          <div className="mt-8 md:mt-12 text-gold-muted/60 text-sm md:text-base overflow-hidden">
            <span className="hidden sm:inline">❦ ═══════════════════════ ❦</span>
            <span className="sm:hidden">❦ ══════════ ❦</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-foreground/40">
            <span className="text-[10px] md:text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-6 md:h-8 bg-gradient-to-b from-gold-muted/50 to-transparent" />
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
