import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export function Projects() {
  const projects = [
    {
      id: 'haloguide',
      title: 'HaloGuide',
      description: 'AI-powered parental guidance for digital safety',
      tags: ['Python', 'AI', 'NLP', 'Business Strategy'],
      image: '/images/projects/haloguide-main.png'
    },
    {
      id: 'drop-calendar',
      title: '1 AI Prompt Challenge',
      description: 'Building a complete production app with a single AI prompt',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'AI-Assisted'],
      image: '/images/projects/drop-calendar-kanban.png'
    },
    {
      id: 'unicovoit',
      title: 'UniCovoit',
      description: 'Campus carpooling application',
      tags: ['Java', 'Vaadin', 'Spring Boot', 'PostgreSQL'],
      image: '/images/projects/unicovoit-home.png'
    },
    {
      id: 'process-mining',
      title: 'Business Process Analytics',
      description: 'Process mining and data-driven process improvement',
      tags: ['Celonis', 'Process Mining', 'BPMN', 'Data Analysis'],
      image: '/images/projects/process-mining-main.png'
    },
    {
      id: 'portfolio',
      title: 'This Portfolio',
      description: 'Designing and building my digital home',
      tags: ['React', 'Next.js', 'Tailwind', 'Figma'],
      image: '/images/projects/portfolio-main.png'
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
          Projects
        </p>
        <h2 className="mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
          Selected Work
        </h2>
        <p style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
          Academic projects, technical work, and creative endeavors
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <Link to={`/project/${project.id}`} className="block group">
              <div
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute top-0 left-0 w-full h-1"
                    style={{ backgroundColor: 'var(--pastel-pink)' }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
                    {project.title}
                  </h3>
                  <p className="mb-4" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: 'var(--pastel-yellow)',
                          color: 'var(--charcoal)',
                          fontFamily: 'var(--font-body)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-2 transition-all duration-300 group-hover:translate-x-2" style={{ color: 'var(--soft-blush)' }}>
                    <span style={{ fontFamily: 'var(--font-heading)' }}>View Project</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Fun footer message */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p
          className="text-sm italic"
          style={{
            color: 'var(--warm-gray)',
            fontFamily: 'var(--font-body)'
          }}
        >
          More exciting projects currently marinating... check back soon!
        </p>
      </motion.div>
    </section>
  );
}
