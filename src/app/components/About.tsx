import { motion } from 'motion/react';
import { GraduationCap, Heart, Briefcase, Coffee } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const facts = [
    { icon: GraduationCap, text: 'Master MIAGE @ Paris-Dauphine' },
    { icon: Heart, text: 'Fashion × Tech' },
    { icon: Briefcase, text: 'Marketing & IS Manager' },
    { icon: Coffee, text: 'Runs on tea & good ideas' },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Left column - Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(255, 172, 199, 0.2)', border: '3px solid var(--light-pink)' }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjYzNzkyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Hinda"
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          {/* Decorative yellow blob */}
          <motion.div
            className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full"
            style={{ backgroundColor: 'var(--pastel-yellow)', filter: 'blur(8px)', opacity: 0.6 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Right column - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-wider mb-4" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-heading)' }}>
            About
          </p>
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
            Nice to meet you!
          </h2>
          <p className="mb-8 leading-relaxed" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
            I'm Hinda — an IT student with a love for fashion, a knack for making complex things simple, and a belief that technology should feel human. Currently finishing my Master MIAGE at Paris-Dauphine while managing marketing and information systems for a sustainable fashion brand. I'm drawn to the space where code meets creativity.
          </p>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-2xl flex items-center gap-3"
                style={{
                  backgroundColor: 'var(--pastel-yellow)',
                  boxShadow: '0 4px 12px rgba(255, 244, 189, 0.3)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: '0 6px 16px rgba(255, 244, 189, 0.5)' }}
              >
                <fact.icon size={24} style={{ color: 'var(--charcoal)' }} />
                <span style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-body)' }}>
                  {fact.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
