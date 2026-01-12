import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      role: 'Marketing & IS Manager',
      company: 'RUS Brand',
      period: 'Present',
      description: 'Managing digital marketing campaigns and information systems for a sustainable fashion startup',
      side: 'right'
    },
    {
      role: 'Math and English Teacher',
      company: 'Part-time',
      period: '',
      description: 'Creating adapted teaching strategies, lesson plans, and educational materials',
      side: 'left'
    },
    {
      role: 'MIAGE/IT Student',
      company: 'Paris-Dauphine University',
      period: '2023 – Present',
      description: 'Specializing in business applications of IT, AI, and information systems',
      side: 'right'
    },
    {
      role: 'Technical Computer Science Student',
      company: 'EFREI',
      period: '2022 – 2023',
      description: 'Designing, developing, and maintaining software applications, from analyzing user needs to deploying solutions',
      side: 'left'
    }
  ];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-wider mb-4" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-heading)' }}>
          Experience
        </p>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
          My Journey So Far
        </h2>
      </motion.div>

      {/* Mobile view - simple cards */}
      <div className="md:hidden space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="p-4 rounded-2xl"
            style={{
              backgroundColor: 'var(--warm-cream)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h3 className="mb-1 text-base font-semibold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
              {exp.role}
            </h3>
            <p className="mb-1 text-sm" style={{ color: 'var(--soft-blush)', fontFamily: 'var(--font-heading)' }}>
              {exp.company}
            </p>
            {exp.period && (
              <p className="mb-2 text-xs" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
                {exp.period}
              </p>
            )}
            <p className="text-sm leading-relaxed" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Desktop view - timeline */}
      <div className="hidden md:block relative">
        {/* Vertical line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full"
          style={{ backgroundColor: 'var(--pastel-pink)' }}
        />

        {/* Timeline items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`flex items-center gap-8 ${exp.side === 'left' ? 'flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Card */}
              <div className="flex-1">
                <motion.div
                  className="p-6 rounded-2xl"
                  style={{
                    backgroundColor: 'var(--warm-cream)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 8px 24px rgba(255, 172, 199, 0.15)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <h3 className="mb-2 text-xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
                    {exp.role}
                  </h3>
                  <p className="mb-2 text-base" style={{ color: 'var(--soft-blush)', fontFamily: 'var(--font-heading)' }}>
                    {exp.company}
                  </p>
                  {exp.period && (
                    <p className="mb-3 text-sm" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
                      {exp.period}
                    </p>
                  )}
                  <p className="text-base" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
                    {exp.description}
                  </p>
                </motion.div>
              </div>

              {/* Node */}
              <motion.div
                className="relative z-10 w-6 h-6 rounded-full border-4 flex-shrink-0"
                style={{
                  backgroundColor: 'var(--pastel-yellow)',
                  borderColor: 'var(--pastel-pink)'
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
              />

              {/* Empty space for alignment */}
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
