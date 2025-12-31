import { motion } from 'motion/react';
import { Code2, Sparkles, TrendingUp, Wrench } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Development',
      skills: 'Java • Spring Boot • React • Next.js • SQL • REST APIs • Vaadin • Git'
    },
    {
      icon: Sparkles,
      title: 'Data & AI',
      skills: 'Python • Machine Learning • Neural Networks • Data Analysis • AI Ethics • Model Evaluation'
    },
    {
      icon: TrendingUp,
      title: 'Business & Strategy',
      skills: 'Marketing Strategy • Project Management • Business Analysis • Product Development • E-commerce'
    },
    {
      icon: Wrench,
      title: 'Tools & Design',
      skills: 'Figma • Git & GitHub • Notion • PowerPoint • UML • Agile Methodologies'
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-wider mb-4" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-heading)' }}>
          Skills
        </p>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
          What I Work With
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-2xl"
            style={{
              backgroundColor: 'var(--warm-cream)',
              borderLeft: '4px solid var(--pastel-pink)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 8px 24px rgba(255, 172, 199, 0.15)',
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--light-pink)' }}>
                <category.icon size={28} style={{ color: 'var(--soft-blush)' }} />
              </div>
              <div className="flex-1">
                <h3 className="mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
                  {category.title}
                </h3>
                <p style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
                  {category.skills}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
