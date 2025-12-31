import { motion } from 'motion/react';
import { ExternalLink, Calendar, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  source: string;
}

// Curated RSS Feed Sources for Fashion Tech - moved outside component to prevent re-creation
const rssSources = [
  {
    name: 'Vogue Business',
    url: 'https://www.voguebusiness.com/rss',
    category: 'Fashion Tech & Innovation'
  },
  {
    name: 'TechCrunch',
    url: 'https://techcrunch.com/tag/fashion/feed/',
    category: 'Fashion & Retail Tech'
  },
  {
    name: 'WWD',
    url: 'https://wwd.com/feed/',
    category: 'Fashion Industry News'
  }
];

// Fallback curated articles when RSS feeds are unavailable
const fallbackArticles: Article[] = [
  {
    title: 'The Future of AI in Fashion Retail',
    link: 'https://www.voguebusiness.com',
    pubDate: new Date().toISOString(),
    description: 'How artificial intelligence is transforming the way we shop, from virtual try-ons to personalized recommendations and inventory management.',
    source: 'Vogue Business'
  },
  {
    title: 'Sustainable Fashion Tech: The Next Big Wave',
    link: 'https://techcrunch.com',
    pubDate: new Date(Date.now() - 86400000).toISOString(),
    description: 'Exploring innovative technologies that are making fashion more sustainable, from fabric recycling to supply chain transparency.',
    source: 'TechCrunch'
  },
  {
    title: 'Digital Fashion Shows: The New Normal',
    link: 'https://wwd.com',
    pubDate: new Date(Date.now() - 172800000).toISOString(),
    description: 'Fashion weeks embrace digital transformation with virtual showrooms, livestreamed events, and augmented reality experiences.',
    source: 'WWD'
  },
  {
    title: 'Luxury Brands Embrace Web3 and NFTs',
    link: 'https://www.voguebusiness.com',
    pubDate: new Date(Date.now() - 259200000).toISOString(),
    description: 'Major luxury houses are exploring blockchain technology and digital collectibles as new revenue streams and brand engagement tools.',
    source: 'Vogue Business'
  },
  {
    title: 'Smart Fabrics and Wearable Tech Innovation',
    link: 'https://techcrunch.com',
    pubDate: new Date(Date.now() - 345600000).toISOString(),
    description: 'The convergence of fashion and technology through intelligent textiles that monitor health, change color, and adapt to environment.',
    source: 'TechCrunch'
  },
  {
    title: 'E-commerce Personalization with Machine Learning',
    link: 'https://wwd.com',
    pubDate: new Date(Date.now() - 432000000).toISOString(),
    description: 'Fashion retailers leverage ML algorithms to deliver hyper-personalized shopping experiences and boost conversion rates.',
    source: 'WWD'
  }
];

export function FashionTech() {
  const [articles, setArticles] = useState<Article[]>(fallbackArticles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const allArticles: Article[] = [];

        // Fetch from multiple sources
        for (const source of rssSources) {
          try {
            // Using RSS2JSON API to bypass CORS
            const response = await fetch(
              `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(source.url)}&count=3`
            );
            const data = await response.json();

            if (data.items) {
              const articles = data.items.slice(0, 3).map((item: any) => ({
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                description: item.description?.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
                source: source.name
              }));
              allArticles.push(...articles);
            }
          } catch (err) {
            console.error(`Error fetching from ${source.name}:`, err);
          }
        }

        // Sort by date and take the 6 most recent
        allArticles.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

        // Only update if we got articles, otherwise keep fallback
        if (allArticles.length > 0) {
          setArticles(allArticles.slice(0, 6));
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        // Keep fallback articles on error
        setLoading(false);
      }
    };

    fetchArticles();
    // Refresh every 30 minutes
    const interval = setInterval(fetchArticles, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

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
          <p className="uppercase tracking-wider mb-4 flex items-center justify-center gap-2" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-heading)' }}>
            <TrendingUp size={16} />
            Fashion Tech Watch
          </p>
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--charcoal)' }}>
            Latest in Fashion × Technology
          </h2>
          <p className="max-w-3xl mx-auto mb-12" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
            I'm fascinated by how technology is reshaping the fashion industry, from AI-powered personalization to sustainable supply chains. I'm actively seeking opportunities to work at this intersection.
          </p>
        </motion.div>

        {/* Interest tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {interests.map((interest, index) => (
            <motion.span
              key={index}
              className="px-6 py-3 rounded-full text-sm"
              style={{
                backgroundColor: 'white',
                color: 'var(--charcoal)',
                fontFamily: 'var(--font-body)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
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

        {/* Articles Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-solid border-current border-r-transparent" style={{ color: 'var(--pastel-pink)' }} />
            <p className="mt-4" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
              Loading latest articles...
            </p>
          </div>
        ) : (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {articles.map((article, index) => (
              <motion.a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div
                  className="p-6 rounded-2xl h-full transition-all duration-300"
                  style={{
                    backgroundColor: 'white',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                    borderTop: '3px solid var(--pastel-pink)'
                  }}
                >
                  {/* Source & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: 'var(--pastel-yellow)',
                        color: 'var(--charcoal)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {article.source}
                    </span>
                    <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--warm-gray)' }}>
                      <Calendar size={12} />
                      <span>{formatDate(article.pubDate)}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-3 leading-snug transition-colors duration-300 group-hover:text-[var(--soft-blush)]"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--charcoal)',
                      fontSize: '1.125rem'
                    }}
                  >
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="mb-4 text-sm leading-relaxed"
                    style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}
                  >
                    {article.description}
                  </p>

                  {/* Read more link */}
                  <div
                    className="flex items-center gap-2 text-sm transition-all duration-300 group-hover:translate-x-2"
                    style={{ color: 'var(--soft-blush)', fontFamily: 'var(--font-heading)' }}
                  >
                    <span>Read article</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* Auto-update indicator */}
        <motion.p
          className="text-center mt-8 text-xs"
          style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Updates automatically every 30 minutes
        </motion.p>
      </div>
    </section>
  );
}
