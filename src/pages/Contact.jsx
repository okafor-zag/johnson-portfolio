import { motion } from 'framer-motion';
import { personal } from '../data/portfolioData';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.5, delay },
});

export default function Contact() {

  // ── Defined INSIDE the component so personal.email is always ready ──
  const contactItems = [
    { icon: '✉', label: 'Email', value: personal.email, href: `mailto:${personal.email}?subject=Project%20Enquiry` },
    { icon: '📞', label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: '🔗', label: 'LinkedIn', value: 'johnson-okafor', href: personal.links.linkedin },
    { icon: '🐙', label: 'GitHub', value: 'okafor-zag', href: personal.links.github },
    { icon: '✍', label: 'Medium', value: '@johnsonzagazor06', href: personal.links.medium },
    { icon: '🎮', label: 'TikTok', value: '@afingamer01', href: personal.links.tiktok },
    { icon: '▶', label: 'YouTube', value: '@Afin-Gamer01', href: personal.links.youtube },
  ];

  return (
    <main style={{ paddingTop: '6rem' }}>
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 600, height: 600, background: 'var(--accent)', top: '-200px', left: '50%', transform: 'translateX(-50%)', opacity: 0.15 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-eyebrow" style={{ justifyContent: 'center' }}>Let us talk</span>
            <h1 className="section-title">
              Got a project<br /><em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>in mind?</em>
            </h1>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '3rem', fontSize: '1.1rem' }}>
              Whether you need a new website, a UI/UX design, a brand identity, or just want to say hello — I am always open to a conversation.
            </p>
            {/* Plain <a> tag — most reliable way to open mail client */}
            <a
              href={`mailto:${personal.email}?subject=Project%20Enquiry`}
              className="btn-primary"
              style={{ fontSize: '17px', padding: '1rem 2.5rem', marginBottom: '1rem', display: 'inline-flex' }}
            >
              Send me an email ✉
            </a>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
  or copy directly:{' '}
  <span
    style={{ color: 'var(--accent2)', cursor: 'pointer', borderBottom: '1px dashed rgba(167,139,250,0.4)' }}
    onClick={() => navigator.clipboard.writeText(personal.email)}
    title="Click to copy"
  >
    {personal.email}
  </span>
  {' '}— copy & paste into your email app
</p>
          </motion.div>
        </div>
      </section>

      <section style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', maxWidth: 900, margin: '0 auto' }}>
            {contactItems.map((item, i) => (
              // ── Regular <a> tag wrapped in motion.div for animation ──
              // motion.a was blocking native link navigation — this fixes it
              <motion.div key={item.label} {...reveal(i * 0.07)}>
                <a
                  href={item.href}
                  target={item.href.startsWith('mailto') || item.href.startsWith('tel') ? '_self' : '_blank'}
                  rel="noreferrer"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    transition: 'border-color 0.25s, transform 0.25s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(124,107,240,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--surface2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '3px' }}>{item.label}</div>
                    <div style={{ fontSize: '15px', color: 'var(--text)', fontWeight: 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.value}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '16px', flexShrink: 0 }}>↗</span>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...reveal(0.1)}
            style={{ marginTop: '4rem', background: 'linear-gradient(135deg, var(--surface), var(--surface2))', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '3rem', textAlign: 'center', maxWidth: 640, margin: '4rem auto 0' }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
            <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Open to opportunities</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.5rem', fontSize: '15px' }}>
              Available for freelance projects, contract work, and full-time roles. Based in Lagos, Nigeria — open to remote work globally.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '13px', padding: '6px 16px', borderRadius: 999, background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.25)', color: 'var(--teal)' }}>✓ Available for freelance</span>
              <span style={{ fontSize: '13px', padding: '6px 16px', borderRadius: 999, background: 'rgba(124,107,240,0.1)', border: '1px solid rgba(124,107,240,0.25)', color: 'var(--accent2)' }}>✓ Open to remote work</span>
              <span style={{ fontSize: '13px', padding: '6px 16px', borderRadius: 999, background: 'rgba(240,192,64,0.1)', border: '1px solid rgba(240,192,64,0.25)', color: 'var(--gold)' }}>✓ Lagos, Nigeria based</span>
              <span style={{ fontSize: '13px', padding: '6px 16px', borderRadius: 999, background: 'rgba(222, 64, 240, 0.11)', border: '1px solid rgba(228, 64, 240, 0.32)', color: 'rgba(228, 64, 240, 0.63)' }}>✓ Open to Hybrid jobs</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
