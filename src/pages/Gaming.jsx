import { motion } from 'framer-motion';
import { personal, youtubeVideos } from '../data/portfolioData';

// To add your real videos:
// 1. Go to one of your YouTube videos
// 2. Copy the URL - it looks like: youtube.com/watch?v=ABC123xyz
// 3. The video ID is the part after ?v= e.g. ABC123xyz
// 4. Open src/data/portfolioData.js, find youtubeVideos, and replace REPLACE_WITH_YOUR_VIDEO_ID_1 etc.

function YouTubeEmbed({ videoId, title }) {
  const isPlaceholder = videoId.startsWith('REPLACE_');
  if (isPlaceholder) {
    return (
      <div style={{
        aspectRatio: '16/9', background: 'var(--surface2)',
        borderRadius: 'var(--radius)', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
        border: '1px dashed var(--border)',
      }}>
        <span style={{ fontSize: '2rem' }}>▶</span>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', padding: '0 1rem' }}>
          Add your YouTube video ID in portfolioData.js
        </span>
      </div>
    );
  }
  return (
    <div style={{ aspectRatio: '16/9', borderRadius: 'var(--radius)', overflow: 'hidden', background: '#000' }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ display: 'block' }}
      />
    </div>
  );
}

export default function Gaming() {
  return (
    <main style={{ paddingTop: '6rem' }}>
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 600, height: 600, background: '#e040fb', top: '-200px', right: '-200px', opacity: 0.12 }} />
        <div className="orb" style={{ width: 400, height: 400, background: '#f0c040', bottom: '-100px', left: '-100px', opacity: 0.08 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-eyebrow">Beyond the keyboard</span>
            <h1 className="section-title">
              Gamer.<br /><em style={{ fontStyle: 'italic', color: '#e040fb' }}>Streamer.</em>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: 540, fontSize: '1.1rem' }}>
              When I am not building websites or designing in Figma, I am on the sticks. I post gaming clips on TikTok and YouTube as <strong style={{ color: 'var(--text)' }}>Afin Gamer</strong> — and I am building toward going live full-time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Grid */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <span className="section-eyebrow">Content</span>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Video Clips</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
              Gaming highlights from my YouTube channel.
            </p>
          </div>

          {/* Featured video - large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '1.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', padding: '1.25rem' }}
          >
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Featured clip</div>
            <YouTubeEmbed videoId={youtubeVideos[0].id} title={youtubeVideos[0].title} />
            <div style={{ marginTop: '0.75rem', fontWeight: 500, fontSize: '1rem' }}>{youtubeVideos[0].title}</div>
          </motion.div>

          {/* 2-column grid for remaining videos */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {youtubeVideos.slice(1).map((v, i) => (
              <motion.div
                key={v.id + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', padding: '1.25rem' }}
              >
                <YouTubeEmbed videoId={v.id} title={v.title} />
                <div style={{ marginTop: '0.75rem', fontWeight: 500, fontSize: '0.95rem' }}>{v.title}</div>
              </motion.div>
            ))}
          </div>

          {/* Channel cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {/* TikTok */}
            <motion.a
              href={personal.links.tiktok} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              whileHover={{ y: -8 }}
              style={{ background: 'linear-gradient(135deg, #010101, #1a0a1a)', border: '1px solid rgba(224,64,251,0.2)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', display: 'block', textAlign: 'center', transition: 'border-color 0.3s' }}
            >
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🎵</div>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>TikTok</div>
              <div style={{ color: '#e040fb', fontSize: '15px', marginBottom: '1rem' }}>@afingamer01</div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Short-form gaming clips, funny moments, and highlights. Growing my audience one clip at a time.
              </p>
              <span style={{ fontSize: '13px', color: '#e040fb', background: 'rgba(224,64,251,0.1)', border: '1px solid rgba(224,64,251,0.3)', padding: '8px 18px', borderRadius: 999 }}>
                Follow on TikTok ↗
              </span>
            </motion.a>

            {/* YouTube */}
            <motion.a
              href={personal.links.youtube} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }} whileHover={{ y: -8 }}
              style={{ background: 'linear-gradient(135deg, #0f0a00, #1a0e00)', border: '1px solid rgba(255,68,68,0.2)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', display: 'block', textAlign: 'center', transition: 'border-color 0.3s' }}
            >
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>▶️</div>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>YouTube</div>
              <div style={{ color: '#ff4444', fontSize: '15px', marginBottom: '1rem' }}>@Afin-Gamer01</div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Longer gaming content, full sessions, and the journey toward becoming a consistent live streamer.
              </p>
              <span style={{ fontSize: '13px', color: '#ff4444', background: 'rgba(255,68,68,0.1)', border: '1px solid rgba(255,68,68,0.3)', padding: '8px 18px', borderRadius: 999 }}>
                Subscribe on YouTube ↗
              </span>
            </motion.a>
          </div>

         {/* Code by day, Games by night */}
<section style={{ borderTop: '1px solid var(--border)' }}>
  <div className="container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}
    >
      <div>
        <div className="section-eyebrow">The journey</div>
        <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '2.2rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
          Code by day.<br />
          <em style={{ fontStyle: 'italic', color: '#e040fb' }}>Games by night.</em>
        </h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '15px' }}>
          The same attention to detail I bring to UI design and frontend development — I bring to gaming content creation. Creativity does not live in just one box.
        </p>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '15px' }}>
          I am currently building my presence on TikTok and YouTube, posting gaming clips and working toward going live. It runs parallel to everything else I do.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {[
          { icon: '🎮', label: 'Gaming Content', sub: 'Clips and highlights' },
          { icon: '📱', label: 'TikTok Active', sub: '@afingamer01' },
          { icon: '🎬', label: 'YouTube Channel', sub: 'Long-form videos' },
          { icon: '🚀', label: 'Going Live', sub: 'Coming soon' },
        ].map(item => (
          <div key={item.label} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.25rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{item.icon}</div>
            <div style={{ fontWeight: 500, fontSize: '13px', marginBottom: '2px' }}>{item.label}</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.sub}</div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
</section>
            {/* <ol style={{ listStyle: 'decimal', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                'Go to one of your YouTube videos',
                'Copy the URL — it looks like: youtube.com/watch?v=ABC123xyz',
                'The video ID is the part after ?v= e.g. ABC123xyz',
                'Open src/data/portfolioData.js in Cursor',
                'Find youtubeVideos at the bottom of the file',
                'Replace REPLACE_WITH_YOUR_VIDEO_ID_1 with your real ID',
                'Repeat for each video — add as many as you want!',
              ].map((s, i) => (
                <li key={i} style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{s}</li>
              ))}
            </ol> */}
        </div>
      </section>
    </main>
  );
}
