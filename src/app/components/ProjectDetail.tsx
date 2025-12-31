import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projectData: Record<string, any> = {
  haloguide: {
    title: 'HaloGuide',
    tagline: 'AI assistant for digital parenting guidance',
    subtitle: 'Academic Project — Orange Young Talents Competition 2025-2026',
    image: '/images/projects/haloguide-main.png',
    problem: 'Parents struggle to navigate digital risks like cyberbullying, inappropriate content, and misinformation. Despite available resources, they remain scattered and difficult to apply when issues arise.',
    solution: 'HaloGuide is an AI conversational agent designed as a copilot for parents. It allows them to describe situations in their own words and receive help identifying problems, understanding severity, and taking concrete action.',
    context: 'Academic project for Orange Young Talents Competition 2025-2026. Team of 4 students at Paris-Dauphine PSL, Master MIAGE. Remained at concept and prototype stage.',
    role: 'Research, UX Design & AI Strategy',
    contributions: [
      'User research with parents and professionals',
      'Competitive analysis of digital safety solutions',
      'UX design: user journeys and use cases',
      'Technical architecture using RAG (Retrieval Augmented Generation)',
      'Documentation and presentation materials'
    ],
    tech: ['Python', 'NLP', 'RAG Architecture', 'OpenAI API', 'Figma', 'UX Research', 'AI Ethics'],
    skills: [
      'Project management and cross-functional collaboration',
      'UX research: interviews, personas, scenarios',
      'AI systems: conversational architecture, LLMs, RAG, ethics (GDPR, AI Act)',
      'Strategic analysis: market positioning, B2B2C models',
      'Professional communication: structured documentation, pitching'
    ],
    learnings: 'Developed deep understanding of AI applied to sensitive contexts. Learned to balance technical feasibility with user needs while integrating ethical and regulatory dimensions (child protection, GDPR, AI Act). Collaboration taught me the importance of structure and communication in innovation projects.'
  },
  unicovoit: {
    title: 'UniCovoit',
    tagline: 'Campus carpooling made easy',
    image: '/images/projects/unicovoit-home.png',
    gallery: [
      { src: '/images/projects/unicovoit-home.png', caption: 'Homepage with search interface' },
      { src: '/images/projects/unicovoit-results.png', caption: 'Search results showing available rides' },
      { src: '/images/projects/unicovoit-details.png', caption: 'Trip details and booking page' }
    ],
    problem: 'Students at Paris-Dauphine lack an efficient way to share rides and reduce transportation costs.',
    solution: 'A full-stack web application enabling students to offer and find carpooling opportunities on campus.',
    role: 'Full-Stack Developer',
    tech: ['Java', 'Vaadin', 'Spring Boot', 'PostgreSQL', 'REST API'],
    learnings: 'Gained hands-on experience with enterprise Java frameworks and learned the importance of clean architecture and database optimization.'
  },
  'connect-compliment': {
    title: 'Connect & Compliment',
    tagline: 'Fostering wellbeing through kindness',
    image: 'https://images.unsplash.com/photo-1633198362880-4864a5d6fa30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29ya3NwYWNlJTIwY29kaW5nfGVufDF8fHx8MTc2NjY3Njc2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    problem: 'Students often feel isolated and disconnected from their campus community, impacting mental wellbeing.',
    solution: 'A community-driven initiative to encourage positive interactions and compliments among students.',
    role: 'UX Researcher & Community Designer',
    tech: ['User Research', 'Community Building', 'UX Design', 'Social Impact'],
    learnings: 'Developed empathy-driven design skills and learned how small interactions can create meaningful change in communities.'
  },
  portfolio: {
    title: 'This Portfolio',
    tagline: 'A digital home that feels like me',
    image: '/images/projects/portfolio-main.png',
    problem: 'Most developer portfolios feel cold and impersonal — I wanted mine to reflect my personality and design aesthetic.',
    solution: 'A custom-built portfolio blending fashion editorial design with modern web technologies.',
    role: 'Designer & Developer',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Figma'],
    learnings: 'Discovered the power of combining technical skills with visual design, and learned how personal branding can differentiate you in a crowded field.'
  }
};

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
            Project not found
          </h2>
          <Link to="/" className="mt-4 inline-block" style={{ color: 'var(--soft-blush)' }}>
            <span className="flex items-center gap-2">
              <ArrowLeft size={20} />
              Back to Home
            </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--warm-cream)' }}>
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-x-2"
          style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero */}
      <motion.section
        className="py-24 px-6 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
          {project.title}
        </h1>
        <p className="text-xl mb-12" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
          {project.tagline}
        </p>

        <div className="rounded-3xl overflow-hidden" style={{ boxShadow: '0 16px 48px rgba(0, 0, 0, 0.1)' }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover"
            onError={(e) => {
              // Fallback to placeholder if image not found
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1685456891912-c09f9cd252eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYW1wdXMlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc2NjY3Njc2Mnww&ixlib=rb-4.1.0&q=80&w=1080';
            }}
          />
        </div>
      </motion.section>

      {/* Gallery Section (if project has multiple images) */}
      {project.gallery && project.gallery.length > 1 && (
        <motion.section
          className="py-12 px-6 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="mb-8 text-center" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
            Screenshots
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {project.gallery.map((item: any, index: number) => (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 8px 24px rgba(255, 172, 199, 0.15)',
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full aspect-[4/3] object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1685456891912-c09f9cd252eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYW1wdXMlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc2NjY3Njc2Mnww&ixlib=rb-4.1.0&q=80&w=1080';
                  }}
                />
                <div className="p-4">
                  <p className="text-sm text-center" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Overview */}
      <motion.section
        className="py-12 px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
              Problem
            </h3>
            <p style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
              {project.problem}
            </p>
          </div>
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
              Solution
            </h3>
            <p style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
              {project.solution}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        className="py-12 px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h3 className="mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
          Tech Stack & My Role
        </h3>
        <p className="mb-4" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
          <strong>Role:</strong> {project.role}
        </p>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full"
              style={{
                backgroundColor: 'var(--pastel-yellow)',
                color: 'var(--charcoal)',
                fontFamily: 'var(--font-body)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Key Learnings */}
      <motion.section
        className="py-12 px-6 max-w-5xl mx-auto mb-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h3 className="mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
          Key Learnings
        </h3>
        <p
          className="p-6 rounded-2xl"
          style={{
            backgroundColor: 'white',
            color: 'var(--warm-gray)',
            fontFamily: 'var(--font-body)',
            borderLeft: '4px solid var(--pastel-pink)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
          }}
        >
          {project.learnings}
        </p>
      </motion.section>
    </div>
  );
}
