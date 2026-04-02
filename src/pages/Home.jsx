import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personal, experience, websites, figmaProjects } from '../data/portfolioData';
import profilePhoto from '../assets/johnson-bw.jpg';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const roles = ['Frontend Developer', 'UI/UX Designer', 'Graphics Designer', 'WordPress Developer', 'Technical Writer'];

const skillItems = [
  { label: 'React.js', icon: '⚛️' },
  { label: 'Figma', icon: '🎨' },
  { label: 'WordPress', icon: '🌐' },
  { label: 'Vue.js', icon: '💚' },
  { label: 'UI/UX Design', icon: '✏️' },
  { label: 'Elementor', icon: '🔧' },
  { label: 'JavaScript', icon: '🟨' },
  { label: 'Canva', icon: '🖼️' },
  { label: 'Technical Writing', icon: '📝' },
  { label: 'HTML & CSS', icon: '🏗️' },
  { label: 'Photoshop', icon: '🖌️' },
  { label: 'Node.js', icon: '🟢' },
];

// doubled for seamless loop
const marqueeItems = [...skillItems, ...skillItems];

function SiteThumb({ site }) {
  const imgSrc = site.screenshot
    ? site.screenshot
    : `https://api.microlink.io/?url=${encodeURIComponent(site.url)}&screenshot=true&embed=screenshot.url&waitUntil=networkidle2`;

  return (
    <div style={{ position: 'relative', background: '#0d0e1a', height: 160 }}>
      <div style={{ background: 'rgba(0,0,0,0.55)', padding: '7px 10px', display: 'flex', alignItems: 'center', gap: 5 }}>
        {['#ff5f57','#febc2e','#28c840'].map(c => (
          <span key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, display: 'block', flexShrink: 0 }} />
        ))}
        <span style={{ flex: 1, background: 'rgba(255,255,255,0.07)', borderRadius: 4, padding: '2px 8px', fontSize: '10px', color: 'var(--text-muted)', marginLeft: 4, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
          {site.url.replace('https://','').replace('http://','').replace(/\/$/,'')}
        </span>
      </div>
      <img
        src={imgSrc}
        alt={site.title}
        style={{ width: '100%', height: 130, objectFit: 'cover', objectPosition: 'top', display: 'block' }}
        onError={e => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div style={{ display: 'none', height: 130, alignItems: 'center', justifyContent: 'center', background: 'var(--surface2)', fontSize: '1.8rem' }}>🌐</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '5rem', overflow: 'hidden', position: 'relative' }}>
        <div className="orb" style={{ width: 700, height: 700, background: 'var(--accent)', top: '-250px', right: '-200px' }} />
        <div className="orb" style={{ width: 400, height: 400, background: '#00d4aa', bottom: '0', left: '-150px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }}>

            {/* Left — text */}
            <div>
              <motion.div {...fadeIn(0.1)}>
                <span className="section-eyebrow">Available for Remote and hybrid, full time and part time jobs</span>
              </motion.div>

              <motion.h1 {...fadeIn(0.2)} style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                fontWeight: 700, lineHeight: 1.0,
                letterSpacing: '-2px', marginBottom: '1.25rem',
              }}>
                Design.<br />
                <em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>Build.</em><br />
                Ship.
              </motion.h1>

              <motion.div {...fadeIn(0.3)} style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '1.25rem' }}>
                {roles.map(r => <span key={r} className="tag">{r}</span>)}
              </motion.div>

              <motion.p {...fadeIn(0.4)} style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '480px', lineHeight: 1.85, marginBottom: '2rem' }}>
                {personal.bio}
              </motion.p>

              <motion.div {...fadeIn(0.5)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <Link to="/designs" className="btn-primary">View My Work →</Link>
                <a href={`mailto:${personal.email}`} className="btn-ghost">Get In Touch</a>
              </motion.div>

              {/* Stats */}
              <motion.div {...fadeIn(0.6)} style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                {[
                  { num: '4+', label: 'Years Exp.' },
                  { num: '150+', label: 'Designs' },
                  { num: '20+', label: 'live sites' },
                  { num: '2', label: 'Current Roles' },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontFamily: 'var(--ff-display)', fontSize: '2.4rem', fontWeight: 700, lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '3px' }}>{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="hero-photo-wrap"
              style={{ flexShrink: 0, position: 'relative' }}
            >
              <div style={{
                width: 300, height: 380,
                borderRadius: '40% 60% 60% 40% / 50% 50% 50% 50%',
                overflow: 'hidden',
                border: '2px solid rgba(124,107,240,0.3)',
                boxShadow: '0 0 60px rgba(124,107,240,0.15), 0 0 0 1px rgba(255,255,255,0.04)',
                position: 'relative',
              }}>
                <img
                  src={profilePhoto}
                  alt="Johnson Okafor"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'contrast(1.05)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(124,107,240,0.12) 0%, transparent 60%)' }} />
              </div>

              {/* Bouncing "Open to work" badge */}
              <motion.div
                animate={{
                  x: [0, 15, -10, 20, -5, 10, 0],
                  y: [0, -12, 8, -18, 5, -8, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
                style={{
                  position: 'absolute', bottom: -20, left: -30,
                  background: 'var(--surface)',
                  border: '1px solid rgba(0,212,170,0.4)',
                  borderRadius: 12, padding: '0.6rem 1rem',
                  display: 'flex', alignItems: 'center', gap: 8,
                  boxShadow: '0 8px 30px rgba(0,0,0,0.5), 0 0 20px rgba(0,212,170,0.1)',
                  zIndex: 3,
                }}
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--teal)', display: 'block', flexShrink: 0 }}
                />
                <span style={{ fontSize: '12px', fontWeight: 500, whiteSpace: 'nowrap', color: 'var(--text)' }}>Open to work</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <style>{`
          @media(max-width: 900px){ .hero-photo-wrap{ display: none; } }
        `}</style>
      </section>

      {/* ══ CURRENT ROLES ════════════════════════════════════ */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {experience.filter(e => e.current).map((job, i) => (
              <motion.div key={i} {...reveal(i * 0.1)}
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}
              >
                <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block', flexShrink: 0 }} />
                  Currently Here
                </div>
                <div style={{ fontWeight: 500, fontSize: '0.95rem', marginBottom: '2px' }}>{job.role}</div>
                <div style={{ color: 'var(--accent2)', fontSize: '13px' }}>{job.company}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '11px', marginTop: '4px' }}>{job.period}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SKILLS MARQUEE ═══════════════════════════════════ */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1.5rem 0', overflow: 'hidden', position: 'relative' }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, var(--bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, var(--bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
          style={{ display: 'flex', gap: '0', whiteSpace: 'nowrap', width: 'max-content' }}
        >
          {marqueeItems.map((s, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0 1.75rem', fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500 }}>
              <span style={{ fontSize: '18px' }}>{s.icon}</span>
              {s.label}
              <span style={{ color: 'var(--accent)', marginLeft: '0.75rem', fontSize: '8px' }}>◆</span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* ══ FEATURED DESIGNS ═════════════════════════════════ */}
      <section>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <motion.div {...reveal()}>
              <div className="section-eyebrow">Figma & Design</div>
              <h2 className="section-title">Featured<br />Design Work</h2>
            </motion.div>
            <motion.div {...reveal(0.1)}>
              <Link to="/designs" style={{ color: 'var(--accent2)', fontSize: '14px', borderBottom: '1px solid rgba(167,139,250,0.3)', paddingBottom: '2px' }}>
                View all designs →
              </Link>
            </motion.div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {figmaProjects.slice(0, 3).map((p, i) => (
              <motion.a key={p.id} href={p.link} target="_blank" rel="noreferrer"
                {...reveal(i * 0.1)}
                whileHover={{ y: -6, borderColor: 'rgba(124,107,240,0.5)' }}
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'block', transition: 'border-color 0.3s' }}
              >
                {p.images && p.images.length > 0 ? (
                  <img src={p.images[0]} alt={p.title} style={{ width: '100%', height: 180, objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                ) : (
                  <div style={{ height: 180, background: `linear-gradient(135deg, ${p.color} 0%, ${p.accent}44 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ width: 56, height: 56, borderRadius: 12, background: p.accent + '33', border: `1px solid ${p.accent}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>🎨</div>
                    <div style={{ position: 'absolute', top: 10, right: 10, fontSize: '10px', background: 'rgba(0,0,0,0.5)', padding: '3px 10px', borderRadius: 999, color: 'rgba(255,255,255,0.7)' }}>Figma</div>
                  </div>
                )}
                <div style={{ padding: '1.1rem' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '5px' }}>{p.category}</div>
                  <div style={{ fontWeight: 500, marginBottom: '5px', fontSize: '0.95rem' }}>{p.title}</div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>{p.description}</p>
                  <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                    {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: '9px' }}>{t}</span>)}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED WEBSITES ════════════════════════════════ */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <motion.div {...reveal()}>
              <div className="section-eyebrow">Development</div>
              <h2 className="section-title">Websites<br />I've Built</h2>
            </motion.div>
            <motion.div {...reveal(0.1)}>
              <Link to="/websites" style={{ color: 'var(--teal)', fontSize: '14px', borderBottom: '1px solid rgba(0,212,170,0.3)', paddingBottom: '2px' }}>
                View all projects →
              </Link>
            </motion.div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {websites.filter(w => w.featured).slice(0, 3).map((site, i) => (
              <motion.a key={site.id} href={site.url} target="_blank" rel="noreferrer"
                {...reveal(i * 0.1)}
                whileHover={{ y: -6, borderColor: 'rgba(0,212,170,0.35)' }}
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'block', transition: 'border-color 0.3s' }}
              >
                <SiteThumb site={site} />
                <div style={{ padding: '1.1rem' }}>
                  <div style={{ fontSize: '10px', color: 'var(--teal)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '5px' }}>{site.category}</div>
                  <div style={{ fontWeight: 500, marginBottom: '5px', fontSize: '0.95rem' }}>{site.title}</div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.7rem' }}>{site.description}</p>
                  <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                    {site.stack.map(t => <span key={t} className="tag-ghost tag" style={{ fontSize: '9px' }}>{t}</span>)}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT STRIP ══════════════════════════════════════ */}
      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <motion.div {...reveal()}>
              <span className="section-eyebrow">About Me</span>
              <h2 className="section-title">Lagos-based.<br /><em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>Global reach.</em></h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                I am a multi-disciplinary creative with 4+ years of experience — building fast websites, designing beautiful interfaces, and writing technical content that actually makes sense.
              </p>
              <Link to="/about" className="btn-ghost" style={{ display: 'inline-flex' }}>Read my full story →</Link>
            </motion.div>

            <motion.div {...reveal(0.15)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: '🎨', title: 'UI/UX Design', desc: 'Figma, XD, Canva, Photoshop' },
                { icon: '💻', title: 'Frontend Dev', desc: 'React, Vue, HTML, CSS, JS' },
                { icon: '🌐', title: 'WordPress', desc: 'Elementor, custom themes' },
                { icon: '✍️', title: 'Tech Writing', desc: '1st place at WriteTech Bootcamp' },
              ].map(item => (
                <div key={item.title} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.25rem' }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: '0.6rem' }}>{item.icon}</div>
                  <div style={{ fontWeight: 500, fontSize: '0.9rem', marginBottom: '3px' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════════ */}
      <section style={{ borderTop: '1px solid var(--border)', textAlign: 'center', background: 'var(--bg2)' }}>
        <div className="container" style={{ maxWidth: 680 }}>
          <motion.div {...reveal()}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Let's work together</div>
            <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>
              Have a project<br /><em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>in mind?</em>
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1rem', lineHeight: 1.85 }}>
              Website, brand identity, Figma prototype, or a story worth writing — reach out and let's make something great.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`mailto:${personal.email}?subject=Project%20Enquiry`} className="btn-primary">
                Send me an email →
              </a>
              <Link to="/about" className="btn-ghost">Learn more about me</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
