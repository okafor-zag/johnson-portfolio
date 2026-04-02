import { Link } from 'react-router-dom';
import { personal } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      padding: '3rem 0 2rem',
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              J<span style={{ color: 'var(--accent)' }}>.</span>Okafor
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '13px', maxWidth: '280px', lineHeight: 1.7 }}>
              Frontend Developer · UI/UX Designer · Technical Writer · Lagos, Nigeria
            </p>
          </div>
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Navigation</div>
              {['/', '/about', '/designs', '/websites', '/blog', '/gaming', '/contact'].map((path, i) => (
                <div key={path} style={{ marginBottom: '0.4rem' }}>
                  <Link to={path} style={{ color: 'var(--text-secondary)', fontSize: '13px', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--text)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {['Home','About','Designs','Websites','Blog','Gaming','Contact'][i]}
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Connect</div>
              {[
                { label: 'GitHub', url: personal.links.github },
                { label: 'LinkedIn', url: personal.links.linkedin },
                { label: 'Medium', url: personal.links.medium },
                { label: 'TikTok', url: personal.links.tiktok },
                { label: 'YouTube', url: personal.links.youtube },
              ].map(l => (
                <div key={l.label} style={{ marginBottom: '0.4rem' }}>
                  <a href={l.url} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '13px', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent2)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {l.label} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>© {year} Okafor Johnson Chukwuemeka. All rights reserved.</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Built with React · Designed from scratch</p>
        </div>
      </div>
    </footer>
  );
}
