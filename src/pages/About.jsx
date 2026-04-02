import { motion } from 'framer-motion';
import { personal, experience, education, certifications, skills } from '../data/portfolioData';
import iqCertificate from '../assets/iq-certificate.jpg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.6, delay },
});

export default function About() {
  return (
    <main style={{ paddingTop: '6rem' }}>
      {/* Header */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 500, height: 500, background: 'var(--accent)', top: '-100px', right: '-200px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div {...fadeUp(0.1)}><span className="section-eyebrow">Who I am</span></motion.div>
          <motion.h1 {...fadeUp(0.2)} className="section-title" style={{ maxWidth: 700 }}>
            Developer. Designer.<br /><em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>Creator.</em>
          </motion.h1>
          <motion.p {...fadeUp(0.3)} style={{ color: 'var(--text-secondary)', maxWidth: 600, lineHeight: 1.9, fontSize: '1.1rem' }}>
            {personal.bio}
          </motion.p>
          <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href={`mailto:${personal.email}`} className="btn-primary">Email Me</a>
            <a href={personal.links.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">LinkedIn ↗</a>
            <a href={personal.links.github} target="_blank" rel="noreferrer" className="btn-ghost">GitHub ↗</a>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <motion.div {...fadeUp()}>
            <span className="section-eyebrow">Toolkit</span>
            <h2 className="section-title">Skills &amp; Tools</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            {[
              { label: 'Design', items: skills.design, accent: 'var(--accent)' },
              { label: 'Development', items: skills.development, accent: 'var(--teal)' },
              { label: 'Other', items: skills.other, accent: 'var(--gold)' },
            ].map((group, i) => (
              <motion.div key={group.label} {...fadeUp(i * 0.1)}
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.75rem' }}
              >
                <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: group.accent, marginBottom: '1rem' }}>{group.label}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {group.items.map(s => (
                    <span key={s} style={{ fontSize: '13px', padding: '5px 13px', borderRadius: 999, background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <div className="container">
          <motion.div {...fadeUp()}>
            <span className="section-eyebrow">Career</span>
            <h2 className="section-title">Work Experience</h2>
          </motion.div>
          <div style={{ marginTop: '2.5rem', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'var(--border)' }} />
            {experience.map((job, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)}
                style={{ paddingLeft: '2.5rem', paddingBottom: '3rem', position: 'relative' }}
              >
                <div style={{ position: 'absolute', left: '-5px', top: '6px', width: 11, height: 11, borderRadius: '50%', background: job.current ? 'var(--teal)' : 'var(--surface2)', border: `2px solid ${job.current ? 'var(--teal)' : 'var(--border)'}` }} />
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: '1.1rem' }}>{job.role}</div>
                    <div style={{ color: 'var(--accent2)', fontSize: '15px', marginTop: 2 }}>{job.company}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', background: 'var(--surface)', border: '1px solid var(--border)', padding: '3px 12px', borderRadius: 999 }}>{job.period}</span>
                    {job.current && <span style={{ fontSize: '11px', color: 'var(--teal)', background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.25)', padding: '2px 10px', borderRadius: 999 }}>Current</span>}
                  </div>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', maxWidth: 660 }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent)', marginTop: '0.35rem', fontSize: '10px', flexShrink: 0 }}>◆</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.75 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
            <div>
              <motion.div {...fadeUp()}>
                <span className="section-eyebrow">Education</span>
                <h2 className="section-title" style={{ fontSize: '2.2rem' }}>Background</h2>
              </motion.div>
              {education.map((e, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)}
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', marginBottom: '1rem' }}
                >
                  <div style={{ fontWeight: 500, fontSize: '1rem' }}>{e.degree}</div>
                  <div style={{ color: 'var(--accent2)', fontSize: '14px', marginTop: 4 }}>{e.institution}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: 4 }}>{e.year}</div>
                </motion.div>
              ))}
            </div>
            <div>
              <motion.div {...fadeUp(0.1)}>
                <span className="section-eyebrow">Achievements</span>
                <h2 className="section-title" style={{ fontSize: '2.2rem' }}>Certifications</h2>
              </motion.div>
              {certifications.map((c, i) => (
                <motion.div key={i} {...fadeUp(i * 0.07)}
                  style={{ background: c.highlight ? 'rgba(124,107,240,0.07)' : 'var(--surface)', border: `1px solid ${c.highlight ? 'rgba(124,107,240,0.3)' : 'var(--border)'}`, borderRadius: 'var(--radius)', padding: '1rem 1.25rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                >
                  <span style={{ fontSize: '18px' }}>{c.highlight ? '🏆' : '✅'}</span>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: '14px' }}>{c.title}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: 2 }}>{c.issuer}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* IQ Certificate */}
          <motion.div {...fadeUp(0.2)} style={{ marginTop: '2rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(124,107,240,0.06), rgba(0,212,170,0.04))',
              border: '1px solid rgba(124,107,240,0.2)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}>
              {/* Certificate image */}
              <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid rgba(124,107,240,0.2)', boxShadow: '0 8px 30px rgba(0,0,0,0.4)' }}>
                <img
                  src={iqCertificate}
                  alt="IQ Test Certificate - Johnson Okafor - Score 113"
                  style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                />
              </div>
              {/* Text */}
              <div>
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>
                  Cognitive Assessment · MyIQ Test
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--ff-display)', fontSize: '3.5rem', fontWeight: 700, lineHeight: 1, background: 'linear-gradient(135deg, var(--accent2), var(--teal))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>113</span>
                  <span style={{ fontWeight: 500, fontSize: '1rem', color: 'var(--text)' }}>IQ Score</span>
                </div>
                <div style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--accent2)', marginBottom: '0.75rem' }}>
                  High Average — Top 19% Globally
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
                  Scored 113 on a standardised cognitive assessment — placing in the same range as roughly 1 in 5 people worldwide. A reflection of the analytical thinking and structured problem-solving I bring to every design and development project.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '11px', padding: '4px 12px', borderRadius: 999, background: 'rgba(124,107,240,0.1)', border: '1px solid rgba(124,107,240,0.25)', color: 'var(--accent2)' }}>Certificate ID: 721 308</span>
                  <span style={{ fontSize: '11px', padding: '4px 12px', borderRadius: 999, background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.25)', color: 'var(--teal)' }}>Issued: Nov 10, 2025</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
