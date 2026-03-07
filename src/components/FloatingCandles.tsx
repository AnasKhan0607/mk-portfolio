'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Candle {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  scale: number;
}

export default function FloatingCandles() {
  const [candles, setCandles] = useState<Candle[]>([]);

  useEffect(() => {
    // Generate random candles on mount
    const generatedCandles: Candle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 60 + 5, // Keep in upper 65% of screen
      delay: Math.random() * 2,
      duration: 4 + Math.random() * 4,
      scale: 0.5 + Math.random() * 0.5,
    }));
    setCandles(generatedCandles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {candles.map((candle) => (
        <motion.div
          key={candle.id}
          className="absolute"
          style={{
            left: `${candle.x}%`,
            top: `${candle.y}%`,
            transform: `scale(${candle.scale})`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.6, 1, 0.6],
            y: [0, -30, 0],
          }}
          transition={{
            duration: candle.duration,
            delay: candle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Candle body */}
          <div className="relative">
            {/* Flame glow */}
            <div 
              className="absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full blur-md animate-flicker"
              style={{ 
                background: 'radial-gradient(circle, #D3A625 0%, #740001 50%, transparent 70%)',
              }}
            />
            {/* Flame */}
            <motion.div 
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-3 h-5"
              animate={{ 
                scaleY: [1, 1.2, 0.9, 1.1, 1],
                scaleX: [1, 0.9, 1.1, 0.95, 1],
              }}
              transition={{ 
                duration: 0.5, 
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                background: 'linear-gradient(to top, #D3A625, #EEBA30, #FFF)',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              }}
            />
            {/* Candle stick */}
            <div 
              className="w-2 h-12 mx-auto rounded-b-sm"
              style={{
                background: 'linear-gradient(to right, #8B4513, #D2691E, #8B4513)',
              }}
            />
            {/* Dripping wax */}
            <div 
              className="absolute top-0 left-0 w-3 h-2 rounded-full -translate-x-0.5"
              style={{ background: '#F5DEB3' }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
