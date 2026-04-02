import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { personal } from '../data/portfolioData';

// ── YOUR MEDIUM BLOG HEADLINES (copy these when posting) ────────
// 1. How I Designed 100+ Website Templates Working at SmartbloksAI
// 2. From Student to Lead Designer: My AltSchool Africa Journey
// 3. Building Responsive WordPress Sites That Actually Perform
// 4. Figma Tips I Wish I Knew as a Junior UI Designer
// 5. Teaching Web Development: What Students Actually Struggle With
// 6. React vs Vue: My Real-World Take After Using Both in Production
// 7. Why Every Nigerian Developer Should Learn Technical Writing
// 8. UI/UX Design for African Markets: What Western Patterns Miss
// 9. How I Built an E-Commerce Store for a London Fashion Brand
// ────────────────────────────────────────────────────────────────

const coverImages = {
  1: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  2: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
  3: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  4: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&q=80',
  5: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
  6: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80',
  7: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',
  8: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80',
  9: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
};

const posts = [
  {
    id: 1,
    title: "How I Designed 100+ Website Templates Working at SmartbloksAI",
    category: "Design",
    readTime: "7 min",
    date: "Mar 15, 2025",
    featured: true,
    trending: false,
    excerpt: "A behind-the-scenes look at designing over a hundred reusable website templates — the process, the patterns, the constraints, and the lessons learned working inside a fast-moving product team.",
    tags: ["Figma", "Design Systems", "Workflow"],
    emoji: "🎨",
  },
  {
    id: 2,
    title: "From Student to Lead Designer: My AltSchool Africa Journey",
    category: "Career",
    readTime: "9 min",
    date: "Jan 28, 2025",
    featured: false,
    trending: true,
    excerpt: "How enrolling at AltSchool Africa completely changed my trajectory as a developer and designer, what I wish I had known before starting out, and the moment everything clicked.",
    tags: ["Career", "Learning", "AltSchool"],
    emoji: "🚀",
  },
  {
    id: 3,
    title: "Building Responsive WordPress Sites That Actually Perform",
    category: "Development",
    readTime: "6 min",
    date: "Nov 10, 2024",
    featured: false,
    trending: true,
    excerpt: "WordPress can get bloated fast. After building multiple client sites with Elementor, here is my exact workflow for keeping things fast, clean, and maintainable without sacrificing flexibility.",
    tags: ["WordPress", "Performance", "Elementor"],
    emoji: "⚡",
  },
  {
    id: 4,
    title: "Figma Tips I Wish I Knew as a Junior UI Designer",
    category: "Design",
    readTime: "5 min",
    date: "Sep 22, 2024",
    featured: false,
    trending: false,
    excerpt: "After years designing SaaS interfaces and 100+ website templates in Figma, these are the shortcuts, component tricks, and hidden features that genuinely changed how I work every day.",
    tags: ["Figma", "UI Design", "Productivity"],
    emoji: "✏️",
  },
  {
    id: 5,
    title: "Teaching Web Development: What Students Actually Struggle With",
    category: "Teaching",
    readTime: "8 min",
    date: "Jul 14, 2024",
    featured: false,
    trending: false,
    excerpt: "After 4 years instructing at digital training camps in Lagos, here are the real blockers that trip up beginners — not syntax errors, but something much deeper — and how to help them break through.",
    tags: ["Teaching", "Education", "Web Dev"],
    emoji: "📚",
  },
  {
    id: 6,
    title: "React vs Vue: My Real-World Take After Using Both in Production",
    category: "Development",
    readTime: "10 min",
    date: "May 5, 2024",
    featured: false,
    trending: false,
    excerpt: "Not a benchmark article or framework war. Just an honest account of what it is actually like building real client projects in both React and Vue — the wins, the frustrations, and when to use which.",
    tags: ["React", "Vue", "Frontend"],
    emoji: "⚛️",
  },
  {
    id: 7,
    title: "Why Every Nigerian Developer Should Learn Technical Writing",
    category: "Career",
    readTime: "6 min",
    date: "Mar 18, 2024",
    featured: false,
    trending: true,
    excerpt: "I ranked 1st at the Zaycodes WriteTech Bootcamp. Here is why technical writing is one of the most underrated skills in tech, and how it has opened doors that pure coding never could.",
    tags: ["Technical Writing", "Career", "Nigeria Tech"],
    emoji: "📝",
  },
  {
    id: 8,
    title: "UI/UX Design for African Markets: What Western Patterns Miss",
    category: "Design",
    readTime: "8 min",
    date: "Jan 9, 2024",
    featured: false,
    trending: false,
    excerpt: "Designing for users in Lagos, Nairobi, or Accra is not the same as designing for London or San Francisco. Device types, data costs, trust signals — here is what you need to think about differently.",
    tags: ["UX Design", "Africa", "Localisation"],
    emoji: "🌍",
  },
  {
    id: 9,
    title: "How I Built an E-Commerce Store for a London Fashion Brand",
    category: "Development",
    readTime: "11 min",
    date: "Nov 28, 2023",
    featured: false,
    trending: false,
    excerpt: "A full case study on building Benoit London — managing client expectations across time zones, integrating WooCommerce and an affiliate system, and delivering a polished site that converts.",
    tags: ["WordPress", "WooCommerce", "Case Study"],
    emoji: "🛍️",
  },
];

const catColors = {
  Design: '#7c6bf0',
  Development: '#00d4aa',
  Career: '#f0c040',
  Teaching: '#e040fb',
};

const categories = ['All', 'Design', 'Development', 'Career', 'Teaching'];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.5, delay },
});

function CoverImage({ post, height = 200 }) {
  return (
    <div style={{ height, position: 'relative', overflow: 'hidden' }}>
      <img
        src={coverImages[post.id]}
        alt={post.title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', filter: 'brightness(0.7)' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.25rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', background: 'rgba(0,0,0,0.4)', padding: '3px 10px', borderRadius: 999 }}>
          {post.category}
        </span>
        <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{post.emoji}</span>
      </div>
    </div>
  );
}

function PostCard({ post, size = 'normal' }) {
  const accent = catColors[post.category] || 'var(--accent)';
  const isFeatured = size === 'featured';

  return (
    <motion.a
      href={personal.links.medium}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6 }}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${post.trending ? accent + '44' : 'var(--border)'}`,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s, transform 0.3s',
        height: '100%',
      }}
    >
      <CoverImage post={post} height={isFeatured ? 280 : 180} />

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          {post.trending && (
            <span style={{ fontSize: '10px', background: accent + '18', border: `1px solid ${accent}44`, color: accent, padding: '2px 8px', borderRadius: 999 }}>🔥 Trending</span>
          )}
          {post.featured && (
            <span style={{ fontSize: '10px', background: 'rgba(240,192,64,0.15)', border: '1px solid rgba(240,192,64,0.3)', color: 'var(--gold)', padding: '2px 8px', borderRadius: 999 }}>⭐ Featured</span>
          )}
        </div>

        <h3 style={{ fontFamily: 'var(--ff-display)', fontWeight: 700, fontSize: isFeatured ? '1.4rem' : '1.1rem', lineHeight: 1.3, color: 'var(--text)' }}>
          {post.title}
        </h3>

        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.75, flex: 1 }}>{post.excerpt}</p>

        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
          {post.tags.map(t => (
            <span key={t} style={{ fontSize: '10px', padding: '3px 10px', borderRadius: 999, background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>{t}</span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '0.85rem' }}>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{post.date}</span>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', background: 'var(--surface2)', padding: '3px 10px', borderRadius: 999 }}>{post.readTime} read</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const featured = posts.find(p => p.featured);
  const trending = posts.filter(p => p.trending && !p.featured);
  const filtered = activeCategory === 'All'
    ? posts.filter(p => !p.featured)
    : posts.filter(p => p.category === activeCategory && !p.featured);

  return (
    <main style={{ paddingTop: '6rem' }}>
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 400, height: 400, background: 'var(--gold)', top: '-100px', right: '-100px', opacity: 0.1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-eyebrow">Writing</span>
            <h1 className="section-title">Articles on<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Medium</em></h1>
            <p className="section-subtitle" style={{ fontSize: '1.05rem' }}>
              Thoughts on design, development, teaching, and building a tech career from Lagos.
            </p>
            <a
              href={personal.links.medium}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ marginTop: '1.5rem', display: 'inline-flex', background: '#000', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              Follow on Medium ↗
            </a>
          </motion.div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">

          {/* Featured */}
          {featured && (
            <motion.div {...reveal()} style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>⭐ Featured Post</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
              </div>
              <PostCard post={featured} size="featured" />
            </motion.div>
          )}

          {/* Trending */}
          {trending.length > 0 && (
            <motion.div {...reveal(0.05)} style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#e040fb' }}>🔥 Trending</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
                {trending.map((post, i) => (
                  <motion.div key={post.id} {...reveal(i * 0.08)} style={{ height: '100%' }}>
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* All posts */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>All Articles</span>
              <div style={{ flex: 1, height: '1px', background: 'var(--border)', minWidth: 20 }} />
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {categories.map(cat => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    style={{
                      fontSize: '12px', padding: '5px 14px', borderRadius: 999,
                      background: activeCategory === cat ? 'var(--accent)' : 'var(--surface)',
                      color: activeCategory === cat ? '#fff' : 'var(--text-secondary)',
                      border: `1px solid ${activeCategory === cat ? 'var(--accent)' : 'var(--border)'}`,
                      cursor: 'pointer', transition: 'all 0.2s',
                    }}
                  >{cat}</button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}
              >
                {filtered.map((post, i) => (
                  <motion.div key={post.id} {...reveal(i * 0.06)} style={{ height: '100%' }}>
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA */}
          <motion.div {...reveal()} style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✍️</div>
            <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.75rem' }}>Read everything on Medium</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '15px', maxWidth: 420, margin: '0 auto 1.5rem' }}>
              All articles, full length, with comments and responses. Follow to get notified when I publish.
            </p>
            <a href={personal.links.medium} target="_blank" rel="noreferrer" className="btn-ghost">
              Visit @johnsonzagazor06 on Medium ↗
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
