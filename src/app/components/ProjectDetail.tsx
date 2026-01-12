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
  'drop-calendar': {
    title: '1 AI Prompt Challenge',
    tagline: 'Building a production-ready app with a single AI prompt',
    image: '/images/projects/drop-calendar-kanban.png',
    gallery: [
      { src: '/images/projects/drop-calendar-kanban.png', caption: 'Kanban board with drag-and-drop status tracking' },
      { src: '/images/projects/drop-calendar-drops.png', caption: 'All drops view with search and filters' },
      { src: '/images/projects/drop-calendar-calendar.png', caption: 'Monthly calendar showing launch dates' },
      { src: '/images/projects/drop-calendar-create.png', caption: 'Create new drop form with validation' }
    ],
    problem: 'Can a fully functional, production-ready application with authentication, CRUD operations, drag-and-drop interactions, calendar views, and email notifications be generated from just one AI prompt?',
    solution: 'I challenged myself to build "Drop Calendar" — a complete fashion product drop planning tool — using only a single, carefully crafted prompt to an AI. The result: a working Next.js application with NextAuth authentication, Prisma ORM, task management, kanban boards, calendar views, and email reminders. Every feature from the prompt specification was implemented: user authentication, drop CRUD, status tracking, task checklists, search/filters, and responsive dashboard UI.',
    context: 'This was a self-imposed experiment to explore the limits of AI-assisted development and prompt engineering. The entire codebase was generated from one comprehensive prompt that specified architecture, tech stack, database design, features, and non-functional requirements. Contact me to discuss the AI model used and the prompt engineering approach! 🤖',
    role: 'Prompt Engineer & AI-Assisted Developer',
    contributions: [
      'Crafted comprehensive single-prompt specification covering full-stack architecture',
      'Specified authentication system with credentials and Google OAuth',
      'Detailed CRUD operations, data models, and database relationships',
      'Defined interactive UI requirements: kanban board with drag-and-drop, calendar view',
      'Outlined task management with categories, priorities, and progress tracking',
      'Specified search, filters, and responsive dashboard layout',
      'Included testing, seed data, and deployment requirements in prompt',
      'Generated production-ready code that works out-of-the-box'
    ],
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'React Hook Form', 'Zod'],
    learnings: 'This experiment proved that with precise prompt engineering, complex production applications can be generated by AI. The key is structuring requirements clearly: defining tech stack, data models, user flows, edge cases, and non-functional requirements upfront. The challenge taught me how to think architecturally, anticipate implementation details, and communicate technical specifications in a way that AI models can parse into working code. It also highlighted the importance of prompt structure, specificity, and constraint definition in AI-assisted development.'
  },
  'process-mining': {
    title: 'Business Process Analytics & Process Mining',
    tagline: 'Analyzing how business processes actually run using data',
    image: '/images/projects/process-mining-main.png',
    problem: 'Organizations often lack visibility into how their processes actually execute, leading to hidden inefficiencies, bottlenecks, and compliance issues that impact performance.',
    solution: 'Process mining analyzes event logs to discover real process flows, identify bottlenecks and rework patterns, check conformance against expected behavior, and translate data insights into actionable improvement recommendations.',
    role: 'Process Analyst & Data Analyst',
    contributions: [
      'Business process modeling using BPMN',
      'Process discovery from real execution data and event logs',
      'Identification of bottlenecks, rework patterns, and inefficiencies',
      'Conformance checking between expected and actual process behavior',
      'Performance analysis using KPIs and throughput times',
      'Translation of data insights into process improvement recommendations'
    ],
    tech: ['Celonis', 'Process Mining', 'BPMN', 'Data Analysis', 'KPI Analysis'],
    learnings: 'Learned to bridge the gap between data and business operations. Process mining reveals the reality of how work gets done, enabling evidence-based improvement rather than assumptions.'
  },
  'supernutri-score': {
    title: 'SuperNutri-Score',
    tagline: 'Transparent multicriteria food evaluation system',
    image: '/images/projects/supernutri-heatmap.png',
    gallery: [
      { src: '/images/projects/supernutri-heatmap.png', caption: 'Comparison heatmap: Nutri-Score vs SuperNutri-Score classifications' },
      { src: '/images/projects/supernutri-interface.png', caption: 'Interactive Gradio interface with real-time analysis' },
      { src: '/images/projects/supernutri-weights.png', caption: 'Configurable criteria weights for ELECTRE TRI' },
      { src: '/images/projects/supernutri-profiles.png', caption: 'Category profile thresholds (b1-b6) configuration' }
    ],
    problem: 'The French Nutri-Score system, while effective at communicating nutritional quality, uses a compensatory algorithm that can produce counterintuitive results. It fails to account for environmental impact, food additives, or organic certification, limiting its ability to guide consumers toward truly healthy and sustainable food choices.',
    solution: 'SuperNutri-Score implements three interconnected evaluation systems: (1) A faithful Nutri-Score calculator reproducing the official March 2025 algorithm, (2) ELECTRE TRI multicriteria classification using eight criteria including additives, and (3) A hybrid SuperNutri-Score combining ELECTRE TRI (70%) with Green-Score environmental rating (30%) plus organic bonus, producing transparent A\'\'–E\'\' ratings with consumer guidance.',
    context: 'Academic project for "Transparence des Algorithmes pour la Décision" course at Université Paris Dauphine-PSL. Validated against 123 sauce products from OpenFoodFacts database.',
    role: 'Data Scientist & Algorithm Designer',
    contributions: [
      'Faithful implementation of Nutri-Score algorithm with special protein rule',
      'ELECTRE TRI classification with pessimistic/optimistic procedures (λ=0.6, λ=0.7)',
      'Hybrid scoring combining nutritional, environmental, and quality dimensions',
      'Interactive Gradio interface with configurable parameters and real-time evaluation',
      'Data validation pipeline comparing calculated vs OpenFoodFacts reference scores',
      'Statistical analysis with confusion matrices and classification reports',
      'Visualization suite: heatmaps, distribution histograms, comparative charts',
      'Comprehensive documentation in Jupyter Notebook format'
    ],
    tech: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Gradio', 'OpenPyXL', 'ELECTRE TRI'],
    learnings: 'Learned to implement complex multicriteria decision analysis methods (ELECTRE TRI) and bridge theoretical algorithms with practical interfaces. The project taught me how to balance mathematical rigor with user transparency, validate models against real-world data, and design interactive tools that make algorithmic decisions explainable. Understanding how compensatory vs non-compensatory methods produce different classifications deepened my appreciation for algorithmic transparency in consumer-facing systems.'
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
        className="py-12 md:py-24 px-6 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
          {project.title}
        </h1>
        <p className="text-base md:text-xl mb-8 md:mb-12" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
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
          <h3 className="mb-6 md:mb-8 text-center text-xl md:text-2xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
            Screenshots
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
        className="py-8 md:py-12 px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="mb-3 md:mb-4 text-xl md:text-2xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
              Problem
            </h3>
            <p className="text-sm md:text-base" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
              {project.problem}
            </p>
          </div>
          <div>
            <h3 className="mb-3 md:mb-4 text-xl md:text-2xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
              Solution
            </h3>
            <p className="text-sm md:text-base" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
              {project.solution}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        className="py-8 md:py-12 px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h3 className="mb-4 md:mb-6 text-xl md:text-2xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
          Tech Stack & My Role
        </h3>
        <p className="mb-4 text-sm md:text-base" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
          <strong>Role:</strong> {project.role}
        </p>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {project.tech.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm md:text-base"
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
        className="py-8 md:py-12 px-6 max-w-5xl mx-auto mb-12 md:mb-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h3 className="mb-4 md:mb-6 text-xl md:text-2xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
          Key Learnings
        </h3>
        <p
          className="p-4 md:p-6 rounded-2xl text-sm md:text-base"
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
