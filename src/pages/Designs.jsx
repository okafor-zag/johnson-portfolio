import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { figmaProjects } from '../data/portfolioData';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.6, delay },
});

function ImageSlider({ images, accent, title, link }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!images || images.length <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % images.length);
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images]);

  const prev = (e) => { e.preventDefault(); stopTimer(); setCurrent(c => (c - 1 + images.length) % images.length); startTimer(); };
  const next = (e) => { e.preventDefault(); stopTimer(); setCurrent(c => (c + 1) % images.length); startTimer(); };

  if (!images || images.length === 0) {
    return (
      <div style={{ height: 240, background: `linear-gradient(135deg, #0d0d14, ${accent}28)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
        <div style={{ width: 70, height: 70, borderRadius: 16, background: accent + '22', border: `1.5px solid ${accent}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🎨</div>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', textAlign: 'center', padding: '0 2rem', lineHeight: 1.7 }}>
          Export screens from Figma as PNG<br />and add them to portfolioData.js
        </div>
        <a href={link} target="_blank" rel="noreferrer"
          onClick={e => e.stopPropagation()}
          style={{ fontSize: '12px', color: accent, background: accent + '18', border: `1px solid ${accent}44`, padding: '5px 16px', borderRadius: 999 }}
        >
          Open in Figma ↗
        </a>
      </div>
    );
  }

  return (
    <div
      style={{ height: 240, position: 'relative', overflow: 'hidden', background: '#000' }}
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${title} ${current + 1}`}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button onClick={prev} style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', width: 32, height: 32, borderRadius: '50%', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>‹</button>
          <button onClick={next} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', width: 32, height: 32, borderRadius: '50%', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>›</button>
          {/* Progress bar */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'rgba(255,255,255,0.1)' }}>
            <motion.div
              key={current}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
              style={{ height: '100%', background: accent }}
            />
          </div>
          {/* Dots */}
          <div style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 5 }}>
            {images.map((_, i) => (
              <button key={i} onClick={e => { e.preventDefault(); stopTimer(); setCurrent(i); startTimer(); }}
                style={{ width: i === current ? 18 : 6, height: 6, borderRadius: 999, background: i === current ? '#fff' : 'rgba(255,255,255,0.3)', border: 'none', cursor: 'pointer', transition: 'all 0.25s', padding: 0 }}
              />
            ))}
          </div>
          <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(0,0,0,0.55)', fontSize: '10px', color: 'rgba(255,255,255,0.7)', padding: '2px 9px', borderRadius: 999 }}>
            {current + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}

export default function Designs() {
  return (
    <main style={{ paddingTop: '6rem' }}>
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 500, height: 500, background: 'var(--accent)', top: '-150px', left: '-150px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-eyebrow">Figma and Canva</span>
            <h1 className="section-title">Design<br /><em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>Portfolio</em></h1>
            <p className="section-subtitle" style={{ fontSize: '1.05rem' }}>
              UI/UX designs, SaaS products, website templates and brand work — 100+ screens. Sliders auto-play every 5 seconds. Click any card to open the full design.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem', marginBottom: '2rem' }}
          >
            {[
              { n: '100+', l: 'Website Templates' },
              { n: '5+', l: 'SaaS Projects' },
              { n: '6', l: 'Design Systems' },
              { n: '4+', l: 'Years in design' },
              { n: '50+', l: 'Graphics | Visual designss' },
            ].map(s => (
              <div key={s.l} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem 1.25rem' }}>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', fontWeight: 700 }}>{s.n}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </motion.div>

          {/* Tip */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            style={{ background: 'rgba(124,107,240,0.07)', border: '1px solid rgba(124,107,240,0.2)', borderRadius: 'var(--radius)', padding: '1rem 1.5rem', marginBottom: '2.5rem', fontSize: '14px', color: 'var(--text-secondary)', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}
          >
            <span style={{ fontSize: '18px', flexShrink: 0 }}>💡</span>
            <span>
              I have bult over 100 website templates using tools like <code style={{ background: 'var(--surface)', padding: '1px 6px', borderRadius: 4, fontSize: '12px' }}>Figma, Adobe Photoshop, Canva</code> And You can request my full catalogue by contacting me through email on the contact pagge  i also do <code style={{ background: 'var(--surface)', padding: '1px 6px', borderRadius: 4, fontSize: '12px' }}>flyers, logos, graphics designs, company rebrandings</code> using <code style={{ background: 'var(--surface)', padding: '1px 6px', borderRadius: 4, fontSize: '12px' }}>canva, adobe illustrator, adobe photoshop, microsoft office </code> as well as other Design and tech tools
            </span>
          </motion.div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {figmaProjects.map((p, i) => (
              <motion.div key={p.id} {...reveal(i * 0.07)}
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}
              >
                <ImageSlider images={p.images} accent={p.accent} title={p.title} link={p.link} />
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{p.category}</div>
                  <h3 style={{ fontWeight: 500, fontSize: '1rem', marginBottom: '0.6rem', lineHeight: 1.35 }}>{p.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>{p.description}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                      {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: '10px' }}>{t}</span>)}
                    </div>
                    <a href={p.link} target="_blank" rel="noreferrer"
                      style={{ fontSize: '12px', color: p.accent, background: p.accent + '18', border: `1px solid ${p.accent}44`, padding: '5px 14px', borderRadius: 999, whiteSpace: 'nowrap' }}
                    >
                      Open in Figma ↗
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Request catalogue — now opens email */}
          <motion.div {...reveal()} style={{ marginTop: '2.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontWeight: 500, marginBottom: 4, fontSize: '1rem' }}>100+ more website template designs available</div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>Built for different purposes — covering diverse industries, layouts and visual styles.</p>
            </div>
            <button
              className="btn-ghost"
              style={{ whiteSpace: 'nowrap' }}
              onClick={() => { window.location.href = 'mailto:johnsonzagazor06@gmail.com?subject=Design%20Catalogue%20Request&body=Hi%20Johnson%2C%20I%20would%20like%20to%20see%20your%20full%20design%20catalogue.'; }}
            >
              Request full catalogue →
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
