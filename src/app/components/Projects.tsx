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
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY2NjQxMzc0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'unicovoit',
      title: 'UniCovoit',
      description: 'Campus carpooling application',
      tags: ['Java', 'Vaadin', 'Spring Boot', 'PostgreSQL'],
      image: '/images/projects/unicovoit-home.png'
    },
    {
      id: 'connect-compliment',
      title: 'Connect & Compliment',
      description: 'Student wellbeing initiative at Paris-Dauphine',
      tags: ['UX Research', 'Community Design'],
      image: 'https://images.unsplash.com/photo-1633198362880-4864a5d6fa30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29ya3NwYWNlJTIwY29kaW5nfGVufDF8fHx8MTc2NjY3Njc2Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'portfolio',
      title: 'This Portfolio',
      description: 'Designing and building my digital home',
      tags: ['React', 'Next.js', 'Tailwind', 'Figma'],
      image: 'https://images.unsplash.com/photo-1633381638831-0ced80e2fee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzY2Njc2NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080'
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
          Things I've Built
        </h2>
        <p style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
          A selection of academic and personal projects
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
    </section>
  );
}
