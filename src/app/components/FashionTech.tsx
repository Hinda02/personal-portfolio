import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FashionTech() {
  const interests = [
    'AI Styling',
    'Sustainable Fashion Tech',
    'Retail Innovation',
    'Digital Fashion'
  ];

  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#FFF5F7' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-wider mb-4" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-heading)' }}>
            Passion
          </p>
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
            Where Fashion Meets Technology
          </h2>
          <p className="max-w-3xl mx-auto mb-12" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
            I'm fascinated by how technology is reshaping the fashion industry — from AI-powered personalization to sustainable supply chains. I'm actively seeking opportunities to work at this intersection.
          </p>
        </motion.div>

        {/* Mood board grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="aspect-square rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758520387469-30e8ed486f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwdGVjaCUyMHJldGFpbHxlbnwxfHx8fDE3NjY2NzY3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Fashion Tech"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1633381638831-0ced80e2fee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzY2Njc2NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Digital Fashion"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden col-span-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1633198362880-4864a5d6fa30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29ya3NwYWNlJTIwY29kaW5nfGVufDF8fHx8MTc2NjY3Njc2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Tech Workspace"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Interest tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {interests.map((interest, index) => (
            <motion.span
              key={index}
              className="px-6 py-3 rounded-full"
              style={{
                backgroundColor: 'white',
                color: 'var(--charcoal)',
                fontFamily: 'var(--font-body)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'var(--pastel-pink)',
                transition: { duration: 0.2 }
              }}
            >
              {interest}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
