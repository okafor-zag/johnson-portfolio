import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/designs', label: 'Designs' },
  { to: '/websites', label: 'Websites' },
  { to: '/blog', label: 'Blog' },
  { to: '/gaming', label: 'Gaming' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
          padding: '1.1rem 2.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled ? 'rgba(7,8,15,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ fontFamily: 'var(--ff-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.5px' }}>
          J<span style={{ color: 'var(--accent)' }}>.</span>Okafor
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="nav-desktop">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: location.pathname === l.to ? 'var(--accent2)' : 'var(--text-secondary)',
                transition: 'color 0.2s',
                position: 'relative',
              }}
            >
              {l.label}
              {location.pathname === l.to && (
                <motion.span
                  layoutId="nav-indicator"
                  style={{
                    position: 'absolute', bottom: '-4px', left: 0, right: 0,
                    height: '1px', background: 'var(--accent)',
                  }}
                />
              )}
            </Link>
          ))}
          <a
            href="mailto:johnsonzagazor06@gmail.com"
            className="btn-primary"
            style={{ padding: '0.5rem 1.2rem', fontSize: '12px' }}
          >
            Hire Me
          </a>
        </div>

        {/* Burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-burger"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}
        >
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              animate={menuOpen
                ? i === 0 ? { rotate: 45, y: 8 } : i === 1 ? { opacity: 0 } : { rotate: -45, y: -8 }
                : { rotate: 0, y: 0, opacity: 1 }}
              style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--text)', borderRadius: '2px' }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: '60px', left: 0, right: 0, zIndex: 499,
              background: 'rgba(7,8,15,0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              padding: '2rem',
              display: 'flex', flexDirection: 'column', gap: '1.5rem',
            }}
          >
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={l.to}
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'var(--ff-display)',
                    fontWeight: 700,
                    color: location.pathname === l.to ? 'var(--accent2)' : 'var(--text)',
                  }}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
