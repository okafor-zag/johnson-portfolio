import CopyButton from '../components/CopyButton';
export default function Contact() {
  return (
    <main>
<section className="sec big-cta">
    <div className="orb" style={{width: '620px', height: '620px', background: 'var(--accent)', top: '-240px', left: '-180px'}}></div>
    <div className="container">
      <p className="eyebrow">Available now</p>
      <h2 className="title">Let's build <em>something.</em></h2>
      <p className="sub" style={{marginBottom: '2.4rem'}}>Open to product design, UI/UX and frontend roles — remote, hybrid or Lagos-based. Freelance and contract welcome too.</p>

      <div className="cols2">
        <div className="panel">
          <h4>Direct</h4>
          <dl style={{margin: 0}}>
            <div className="kv"><dt>Email</dt><dd>johnsonzagazor06@gmail.com <CopyButton value="johnsonzagazor06@gmail.com" /></dd></div>
            <div className="kv"><dt>Phone</dt><dd>+234 812 245 8421 <CopyButton value="+2348122458421" /></dd></div>
            <div className="kv"><dt>Based in</dt><dd>Lagos, Nigeria · WAT</dd></div>
            <div className="kv"><dt>LinkedIn</dt><dd><a href="https://www.linkedin.com/in/johnson-okafor-9a9b131b2/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent2)'}}>johnson-okafor ↗</a></dd></div>
          </dl>
        </div>
        <div className="panel">
          <h4>CV</h4>
          <p style={{marginBottom: '1.2rem'}}>Full work history, skills and certifications in one page you can forward.</p>
          <a className="btn btn-p" href="Johnson-Okafor-CV.pdf" target="_blank" rel="noopener noreferrer" download>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12M7 11l5 5 5-5M4 19.5h16"/></svg>
            Download CV (PDF)
          </a>
        </div>
        <div className="panel">
          <h4>What I'm looking for</h4>
          <p>Product design or UI/UX where the work ships, not just gets presented. I'm equally happy owning a design system, taking a product from Figma into React, or building a brand from nothing.</p>
          <p style={{marginTop: '1rem'}}>If you've got a role and you're not sure whether I fit it — send it anyway. I'd rather tell you honestly than have us both wonder.</p>
        </div>
      </div>
    </div>
  </section>
    </main>
  );
}
