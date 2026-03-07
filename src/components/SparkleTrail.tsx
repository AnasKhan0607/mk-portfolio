'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function SparkleTrail() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    let sparkleId = 0;
    let lastTime = 0;
    const minInterval = 50; // Minimum ms between sparkles

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < minInterval) return;
      lastTime = now;

      const newSparkle: Sparkle = {
        id: sparkleId++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
      };

      setSparkles((prev) => [...prev.slice(-15), newSparkle]);

      // Remove sparkle after animation
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute rounded-full"
            style={{
              left: sparkle.x,
              top: sparkle.y,
              width: sparkle.size,
              height: sparkle.size,
              background: `radial-gradient(circle, #D3A625 0%, #EEBA30 50%, transparent 100%)`,
              boxShadow: '0 0 6px #D3A625, 0 0 12px #D3A625',
            }}
            initial={{ opacity: 1, scale: 1, x: -sparkle.size / 2, y: -sparkle.size / 2 }}
            animate={{ 
              opacity: 0, 
              scale: 0,
              y: -sparkle.size / 2 + 20,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
