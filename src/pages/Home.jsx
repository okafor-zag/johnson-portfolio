import { Link } from 'react-router-dom';
import { personal, availability, stats, achievements, certifications, testimonials, featured, posts, skillMarquee } from '../data';
import Marquee from '../components/Marquee';
import { useZoom } from '../ZoomContext';

const Cup = ({ className = 'cup' }) => (
  <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
    <path d="M14 7h20v10a10 10 0 0 1-20 0z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
    <path d="M14 10H9a5 5 0 0 0 5 7M34 10h5a5 5 0 0 1-5 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M24 27v7M17 41h14M19 41c0-4 2-7 5-7s5 3 5 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v12M7 11l5 5 5-5M4 19.5h16" />
  </svg>
);

export default function Home() {
  const zoom = useZoom();
  const teaser = [posts[0], posts[1], posts[5]];

  return (
    <main>
      <header className="hero">
        <div className="orb" style={{ width: 560, height: 560, background: 'var(--accent)', top: -180, left: -160 }} />
        <div className="orb" style={{ width: 420, height: 420, background: 'var(--teal)', bottom: -220, right: -120, opacity: 0.1 }} />
        <div className="container hero-grid">
          <div>
            {availability.open && <span className="avail"><i />{availability.headline}</span>}
            <h1>Design.<em>Build. Ship.</em></h1>
            <p className="roles">{personal.roles}</p>
            <p className="lede">
              I&apos;m a Lagos-based designer and developer with 5 years of experience. I design software people use
              every day — most recently a <b>no-code website builder</b>, a <b>billing product</b> and a{' '}
              <b>shipped commerce store</b> — then build it in React, WordPress and Elementor.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-p" to="/work">View my work →</Link>
              <a className="btn btn-g" href={personal.cv} download><DownloadIcon /> Download CV</a>
              <Link className="btn btn-g" to="/contact">Get in touch</Link>
            </div>
          </div>
          <div className="portrait">
            <img src="/img/johnson.jpg" alt={personal.name} width="760" height="1013" />
          </div>
        </div>
      </header>

      <section className="stats container">
        {stats.map((s) => (
          <div className="st" key={s.label}>
            <div className="n">{s.n}{s.em && <em>{s.em}</em>}</div>
            <div className="l">{s.label}</div>
          </div>
        ))}
      </section>

      <section className="sec">
        <div className="container">
          <p className="eyebrow">Track record</p>
          <h2 className="title">Five years, <em>In-Proof</em></h2>
          <p className="sub" style={{ marginBottom: '2.8rem' }}>
            Hired at the entry title twice and promoted to run the department both times. Here&apos;s the rest of it.
          </p>

          <div className="record">
            <div className="win">
              <Cup />
              <div className="badge">Competition win</div>
              <h3>1st place</h3>
              <p>Zaycodes WriteTech Bootcamp — placed first in the cohort for technical writing, on top of the design and build work.</p>
            </div>
            <div className="achv">
              {achievements.map((a) => (
                <div className="ach" key={a.body}>
                  <div className="big">{a.big}<em>{a.em}</em></div>
                  <p>{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />

      <section className="sec">
        <div className="container">
          <p className="eyebrow">Certifications</p>
          <h2 className="title">Qualifications <em>and training</em></h2>
          <p className="sub" style={{ marginBottom: '2.6rem' }}>Qualifications, courses and assessments completed alongside the job.</p>

          <div className="certs">
            {certifications.map((c) => (
              <div className={`cert${c.gold ? ' gold' : ''}`} key={c.title}>
                {c.gold && <Cup className="cup sm" />}
                <div><b>{c.title}</b><span>{c.issuer}</span></div>
              </div>
            ))}
          </div>

          <div className="iq">
            <div className="shot" onClick={() => zoom('/img/iq-cert.jpg', 'MyIQ test certificate, score 113')}>
              <img src="/img/iq-cert.jpg" alt="MyIQ test certificate for Johnson Okafor, score 113" loading="lazy" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '.6rem' }}>Cognitive assessment</h3>
              <p className="sub">
                MyIQ standardised assessment, November 2025 — score of 113. Included because problem-solving is most of
                the job: the design work here is less about taste than about untangling systems other people find confusing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="sec">
        <div className="container">
          <p className="eyebrow">Selected work</p>
          <h2 className="title">Projects worth <em>explaining</em></h2>
          <p className="sub" style={{ marginBottom: '2.6rem' }}>
            Seven pieces where the thinking matters more than the screenshot. The full case studies are on the Work page.
          </p>
          <div className="feat">
            {featured.map((f) => (
              <Link className="fcard" to="/work" key={f.title}>
                <img src={`/img/${f.img}`} alt={f.title} loading="lazy" />
                <div className="b">
                  <div className="k">{f.kind}</div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="smarq">
        <div className="strack">
          {[...skillMarquee, ...skillMarquee].map((s, i) => <span key={`${s}-${i}`}>{s}</span>)}
        </div>
      </div>

      <section className="sec">
        <div className="container">
          <p className="eyebrow">What people say</p>
          <h2 className="title">From the people who <em>worked with me</em></h2>
          <p className="sub" style={{ marginBottom: '2.6rem' }}>Recommendations from LinkedIn, unedited.</p>
          <div className="quotes">
            {testimonials.map((t) => (
              <div className="quote" key={t.name}>
                <span className="mark">&ldquo;</span>
                <blockquote>{t.quote}</blockquote>
                <div className="who">
                  <div className="qav">{t.initials}</div>
                  <div><b>{t.name}</b><span>{t.role}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule" />

      <section className="sec">
        <div className="container">
          <p className="eyebrow">Writing</p>
          <h2 className="title">Seven articles, <em>mostly React</em></h2>
          <p className="sub" style={{ marginBottom: '2.4rem' }}>
            I won first place at the Zaycodes WriteTech Bootcamp and kept writing. Rendering behaviour, performance,
            API integration — the things that trip people up are worth writing down.
          </p>
          <div className="wlist">
            {teaser.map((p) => (
              <a className="wrow" href={p.url} target="_blank" rel="noopener noreferrer" key={p.url}>
                <div><div className="wt">{p.title}</div><div className="wc">{p.meta}</div></div>
                <span className="warrow">Medium ↗</span>
              </a>
            ))}
          </div>
          <Link className="go" to="/writing">All seven articles →</Link>
        </div>
      </section>

      <hr className="rule" />

      <section className="sec">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Let&apos;s work together</p>
          <h2 className="title">Have a project <em>in mind?</em></h2>
          <p className="sub" style={{ margin: '0 auto 2rem' }}>
            Website, brand identity, a product interface, or a Figma prototype that needs building — reach out and
            let&apos;s make something.
          </p>
          <Link className="btn btn-p" to="/contact">Start a conversation →</Link>
        </div>
      </section>
    </main>
  );
}
