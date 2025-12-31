import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projectData: Record<string, any> = {
  haloguide: {
    title: 'HaloGuide',
    tagline: 'Conception d\'un assistant IA pour la parentalité numérique',
    subtitle: 'Projet académique — Concours Orange Jeunes Talents 2025-2026',
    image: '/images/projects/haloguide-main.png',
    problem: 'Face à la multiplication des risques numériques (cyberharcèlement, contenus inadaptés, désinformation), les parents se retrouvent souvent démunis. Bien que de nombreuses ressources existent, elles restent dispersées, techniques et difficiles à actionner au moment où un problème concret survient.',
    solution: 'HaloGuide est un concept d\'agent conversationnel pensé comme un copilote pour les parents. L\'idée centrale est de permettre à un parent de décrire sa situation avec ses propres mots, puis de recevoir une aide pour qualifier le problème, comprendre sa gravité et identifier les actions concrètes à entreprendre.',
    context: 'Projet académique réalisé dans le cadre du Concours Orange Jeunes Talents 2025-2026, en équipe de 4 étudiants, sous la direction de Thierry Jaillet — Paris-Dauphine PSL, Master MIAGE. Ce projet est resté au stade de la conception et du prototypage.',
    role: 'Research, UX Design & AI Strategy',
    contributions: [
      'Recherche utilisateur — Conduite et analyse d\'entretiens avec des parents et professionnels',
      'Benchmark concurrentiel — Analyse comparative des solutions existantes sur le marché de la cyberprotection',
      'Conception fonctionnelle — Définition des parcours utilisateurs et scénarios d\'usage',
      'Architecture technique — Exploration des approches RAG (Retrieval Augmented Generation) et intégration de bases de connaissances',
      'Production documentaire — Rédaction du dossier de présentation et supports de communication'
    ],
    tech: ['Python', 'NLP', 'RAG Architecture', 'OpenAI API', 'Figma', 'UX Research', 'AI Ethics'],
    skills: [
      'Gestion de projet et travail collaboratif en équipe pluridisciplinaire',
      'Recherche UX — Entretiens exploratoires, personas, scénarios d\'usage',
      'Systèmes IA — Architectures conversationnelles, LLM, RAG, éthique (RGPD, AI Act)',
      'Analyse stratégique — Benchmark sectoriel, positionnement, modèles économiques B2B2C',
      'Communication professionnelle — Dossier structuré, pitch, vulgarisation technique'
    ],
    learnings: 'Ce projet m\'a permis de développer une compréhension approfondie des enjeux de l\'IA appliquée à des contextes sensibles. J\'ai appris à équilibrer faisabilité technique et besoins utilisateurs, tout en intégrant les dimensions éthiques et réglementaires (protection des mineurs, RGPD, AI Act). L\'expérience de collaboration en équipe pluridisciplinaire m\'a également appris l\'importance de la structuration et de la communication dans la conduite de projets d\'innovation.'
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
    image: 'https://images.unsplash.com/photo-1633381638831-0ced80e2fee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzY2Njc2NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
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
