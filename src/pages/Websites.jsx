import { motion } from 'framer-motion';
import { useState } from 'react';
import { websites } from '../data/portfolioData';

// HOW TO ADD YOUR OWN SCREENSHOTS:
// 1. Take a screenshot of each website (press F12 in browser, use device toolbar for full-width)
// 2. Save the image file in: src/assets/screenshots/
// 3. In portfolioData.js, add a "screenshot" field to each website e.g:
//    screenshot: require('../assets/screenshots/benoit.jpg')
// Until then, this component shows a live preview using microlink (free, 50 req/day)

const categoryColors = {
  'E-Commerce · Fashion': '#00d4aa',
  'Business · WordPress': '#7c6bf0',
  'Web App · React': '#f0c040',
  'Frontend · React': '#f0c040',
  'Portfolio · WordPress': '#7c6bf0',
  'Frontend · Auth UI': '#e040fb',
  'Frontend · Learning': '#3d9be9',
  'Frontend · HTML/CSS': '#3d9be9',
};

function SiteThumb({ site }) {
  const [status, setStatus] = useState('loading'); // loading | loaded | error
  const accentColor = categoryColors[site.category] || 'var(--accent)';

  // Use screenshot from data if provided, else try microlink free API
  const imgSrc = site.screenshot
    ? site.screenshot
    : `https://api.microlink.io/?url=${encodeURIComponent(site.url)}&screenshot=true&embed=screenshot.url&waitUntil=networkidle2`;

  return (
    <div style={{ position: 'relative', background: '#0d0e1a' }}>
      {/* Browser chrome */}
      <div style={{ background: 'rgba(0,0,0,0.55)', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 6, zIndex: 2, position: 'relative' }}>
        {['#ff5f57','#febc2e','#28c840'].map(c => (
          <span key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, display: 'block', flexShrink: 0 }} />
        ))}
        <span style={{ flex: 1, background: 'rgba(255,255,255,0.07)', borderRadius: 4, padding: '3px 10px', fontSize: '11px', color: 'var(--text-muted)', marginLeft: 6, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
          {site.url.replace('https://','').replace('http://','').replace(/\/$/,'')}
        </span>
        {site.featured && <span style={{ fontSize: '10px', background: 'rgba(0,212,170,0.15)', border: '1px solid rgba(0,212,170,0.3)', color: '#00d4aa', padding: '2px 8px', borderRadius: 999, flexShrink: 0 }}>Featured</span>}
      </div>

      {/* Screenshot */}
      {status !== 'error' && (
        <img
          src={imgSrc}
          alt={site.title}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          style={{
            width: '100%', height: 210, objectFit: 'cover', objectPosition: 'top', display: 'block',
            opacity: status === 'loaded' ? 1 : 0, transition: 'opacity 0.4s',
          }}
        />
      )}

      {/* Loading shimmer */}
      {status === 'loading' && (
        <div style={{ position: 'absolute', top: 37, left: 0, right: 0, height: 210, background: 'linear-gradient(90deg, var(--surface) 25%, var(--surface2) 50%, var(--surface) 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.4s infinite' }} />
      )}

      {/* Error fallback - stylish placeholder */}
      {status === 'error' && (
        <div style={{ height: 210, background: `linear-gradient(135deg, #0d1117, ${accentColor}18)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <div style={{ width: 56, height: 56, borderRadius: 12, background: accentColor + '22', border: `1px solid ${accentColor}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🌐</div>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Click to visit site</span>
        </div>
      )}
      <style>{`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
    </div>
  );
}

export default function Websites() {
  return (
    <main style={{ paddingTop: '6rem' }}>
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 500, height: 500, background: 'var(--teal)', top: '-150px', right: '-150px', opacity: 0.12 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-eyebrow">Development</span>
            <h1 className="section-title">Websites<br /><em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>I have Built</em></h1>
            <p className="section-subtitle" style={{ fontSize: '1.05rem' }}>Real live websites built for clients and personal projects — from luxury e-commerce to React web apps.</p>
          </motion.div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Tip banner */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ background: 'rgba(124,107,240,0.07)', border: '1px solid rgba(124,107,240,0.2)', borderRadius: 'var(--radius)', padding: '1rem 1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '14px', color: 'var(--text-secondary)' }}
          >
            <span style={{ fontSize: '18px' }}>💡</span>
            <span>I have built a vast amout live website hosted on a number oh ostinh platforms <code style={{ background: 'var(--surface)', padding: '1px 6px', borderRadius: 4, fontSize: '12px' }}>vercel, netlify, firebase and github</code> in addition i have built website on platforms like<code style={{ background: 'var(--surface)', padding: '1px 6px', borderRadius: 4, fontSize: '12px' }}> Codesandbox, Vs code, cursor</code></span>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem' }}>
            {websites.map((site, i) => (
              <motion.a
                key={site.id}
                href={site.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -8 }}
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'block', transition: 'border-color 0.3s' }}
              >
                <SiteThumb site={site} />
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: categoryColors[site.category] || 'var(--accent)', marginBottom: '6px' }}>{site.category}</div>
                  <div style={{ fontWeight: 500, fontSize: '1.05rem', marginBottom: '6px' }}>{site.title}</div>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '0.9rem' }}>{site.description}</p>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {site.stack.map(t => <span key={t} style={{ fontSize: '11px', padding: '4px 11px', borderRadius: 999, background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>{t}</span>)}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.15 }}
            style={{ marginTop: '2.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}
          >
            <div>
              <div style={{ fontWeight: 500, marginBottom: 4, fontSize: '1rem' }}>More projects on GitHub</div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>Browse my full list of repositories and open source work.</p>
            </div>
            <a href="https://github.com/okafor-zag" target="_blank" rel="noreferrer" className="btn-ghost" style={{ whiteSpace: 'nowrap' }}>View GitHub →</a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
