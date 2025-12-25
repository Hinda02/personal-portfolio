import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Sparkles } from 'lucide-react';

export function Contact() {
  const contactLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:hinda@example.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com' }
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
            Let's Connect
          </h2>
          <p className="mb-12 text-lg" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
            Whether it's a project, an opportunity, or just to say hello — I'd love to hear from you.
          </p>

          {/* Contact links */}
          <div className="flex justify-center gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: 'var(--pastel-pink)',
                  boxShadow: '0 4px 16px rgba(255, 214, 224, 0.3)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'var(--soft-blush)',
                  boxShadow: '0 6px 20px rgba(255, 172, 199, 0.4)',
                  transition: { duration: 0.2 }
                }}
                aria-label={link.label}
              >
                <link.icon size={24} style={{ color: 'var(--charcoal)' }} />
              </motion.a>
            ))}
          </div>

          {/* Decorative sparkle */}
          <motion.div
            className="inline-block"
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles size={32} style={{ color: 'var(--pastel-yellow)' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
