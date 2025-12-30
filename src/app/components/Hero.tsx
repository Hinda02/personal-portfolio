import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const taglines = [
  "IT Student @ Paris-Dauphine",
  "Fashion Tech Enthusiast",
  "Building beautiful things with code"
];

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6" style={{ background: 'linear-gradient(135deg, var(--warm-cream) 0%, #FFF9F0 100%)' }}>
      {/* Decorative blobs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--pastel-pink) 0%, var(--pastel-yellow) 100%)' }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--pastel-yellow) 0%, var(--soft-blush) 100%)' }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.h1
          className="mb-8 text-5xl md:text-6xl lg:text-7xl"
          style={{
            fontFamily: 'var(--font-accent)',
            fontStyle: 'italic',
            color: 'var(--pastel-pink)',
            filter: 'drop-shadow(0 4px 12px rgba(255, 172, 199, 0.2))'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hinda
        </motion.h1>

        <motion.div
          className="h-16 mb-12 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.p
            key={taglineIndex}
            className="text-2xl md:text-3xl"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--charcoal)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {taglines[taglineIndex]}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button
            onClick={scrollToAbout}
            className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: 'var(--pastel-pink)',
              color: 'var(--charcoal)',
              boxShadow: '0 4px 16px rgba(255, 214, 224, 0.4)'
            }}
          >
            Explore My Work
          </button>
          <a
            href="#contact"
            className="text-lg transition-all duration-300 hover:translate-x-2"
            style={{ color: 'var(--charcoal)' }}
          >
            Get in touch ↓
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 cursor-pointer"
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={32} style={{ color: 'var(--warm-gray)' }} />
      </motion.div>
    </section>
  );
}
