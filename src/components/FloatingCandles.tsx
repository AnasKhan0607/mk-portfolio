'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Candle {
  id: number;
  x: number;
  y: number;
  height: number;
  delay: number;
  duration: number;
  brightness: number;
}

export default function FloatingCandles() {
  const [candles, setCandles] = useState<Candle[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Create atmospheric candles - fewer on mobile
    const candleCount = window.innerWidth < 768 ? 4 : 8;
    const generatedCandles: Candle[] = Array.from({ length: candleCount }, (_, i) => ({
      id: i,
      x: 10 + (i * (90 / candleCount)) + (Math.random() * 6 - 3),
      y: 5 + Math.random() * 15,
      height: 40 + Math.random() * 30,
      delay: Math.random() * 2,
      duration: 4 + Math.random() * 3,
      brightness: 0.6 + Math.random() * 0.4,
    }));
    setCandles(generatedCandles);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Ambient candlelight glow on ceiling */}
      <div 
        className="absolute top-0 left-0 right-0 h-48 md:h-64 opacity-20 md:opacity-30"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(255, 180, 80, 0.3) 0%, transparent 70%)'
        }}
      />
      
      {candles.map((candle) => (
        <motion.div
          key={candle.id}
          className="absolute hidden sm:block"
          style={{
            left: `${candle.x}%`,
            top: `${candle.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: candle.brightness }}
          transition={{ delay: candle.delay, duration: 1 }}
        >
          {/* Candle glow */}
          <motion.div
            className="absolute -top-16 left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: '80px',
              height: '80px',
              background: 'radial-gradient(circle, rgba(255, 200, 100, 0.4) 0%, rgba(255, 150, 50, 0.2) 40%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.1, 0.95, 1.05, 1],
              opacity: [0.6, 0.8, 0.5, 0.7, 0.6],
            }}
            transition={{
              duration: candle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Flame */}
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2"
            style={{
              width: '8px',
              height: '16px',
              background: 'linear-gradient(to top, #FF6B00, #FFB84D, #FFF4E0)',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              filter: 'blur(1px)',
            }}
            animate={{
              scaleY: [1, 1.15, 0.9, 1.1, 1],
              scaleX: [1, 0.9, 1.05, 0.95, 1],
              rotate: [-2, 2, -1, 1, -2],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Candle body */}
          <div 
            className="relative"
            style={{
              width: '6px',
              height: `${candle.height}px`,
              background: 'linear-gradient(to right, #8B7355, #C4A77D, #8B7355)',
              borderRadius: '2px',
              boxShadow: 'inset -1px 0 2px rgba(0,0,0,0.3)',
            }}
          >
            {/* Dripping wax */}
            <div 
              className="absolute top-0 -left-1 w-2 h-3 rounded-full"
              style={{ background: '#C4A77D' }}
            />
          </div>
          
          {/* Holder */}
          <div 
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 rounded-b"
            style={{
              background: 'linear-gradient(to bottom, #5C4A36, #3D2F24)',
            }}
          />
        </motion.div>
      ))}
      
      {/* Dust particles in candlelight - fewer on mobile */}
      {!isMobile && Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute w-1 h-1 rounded-full bg-amber-200/30 hidden md:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 40}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
