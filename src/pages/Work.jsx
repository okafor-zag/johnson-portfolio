import Shot from '../components/Shot';
export default function Work() {
  return (
    <main>
<section className="sec tight">
    <div className="container">
      <p className="eyebrow">Case studies</p>
      <h2 className="title">The <em>work</em></h2>
      <p className="sub">Seven projects, each with the problem, what I did about it, and what changed. Click any image to see it full size.</p>
    </div>
  </section>
  <hr className="rule" />

  <article className="case">
    <div className="orb" style={{width: '440px', height: '440px', background: 'var(--gold)', top: '-140px', right: '-160px', opacity: '.07'}}></div>
    <div className="container">
      <div className="case-top">
        <div>
          <p className="case-no"><b>01</b> {"\u00a0"}/{"\u00a0"} TavCorp · 2025–26 · <span style={{color: 'var(--teal)'}}>Shipped</span></p>
          <h2>A store and a dashboard that <em>know each other</em></h2>
          <p className="kind">Product design · E-commerce · Lead designer</p>
        </div>
        <p className="blurb">TavCorp sells consulting packages, not objects — so the shop couldn't end at checkout. <b>The purchase is the start of an engagement</b>, and the customer needs to see it running.</p>
      </div>

      <div className="shots big">
        <Shot src="/img/tav-dashboard.jpg" alt="TavCorp customer dashboard with active packages, cart value, messages and package progress" caption="Customer dashboard · packages, progress, messages" />
      </div>
      <div className="shots big">
        <Shot src="/img/tav-signin.jpg" alt="TavCorp split sign-in screen showing live account state beside the form" caption="Sign-in · the account you're returning to, shown beside the form" />
      </div>
      <div className="shots two">
        <Shot src="/img/tav-store.jpg" alt="TavCorp store front page with product grid, brand strip, new arrivals and collections" caption="Store · catalogue, collections &amp; brands" />
        <Shot src="/img/tav-about.jpg" alt="TavCorp company site about page" caption="Company site · about" />
      </div>

      <div className="pwr">
        <div className="pw">
          <h4>The problem</h4>
          <p>Most storefronts stop at the receipt. TavCorp's customers buy 60-day advisory engagements — they come back weekly to check progress, read consultant replies and renew before a package lapses.</p>
        </div>
        <div className="pw">
          <h4>What I did</h4>
          <p>Designed the shop and the dashboard as one system. The dashboard leads with <b>what needs attention</b> — packages expiring, unread replies, a cart left pending — then progress bars per engagement with days remaining. Even the sign-in screen previews the account waiting behind it.</p>
        </div>
        <div className="pw win">
          <h4>The result</h4>
          <p><span className="bignum">Shipped</span>Catalogue, cart, checkout, payment, dashboard and settings, live on wearetavcorp.com. I joined as a design intern and was leading the design department by the time it went out.</p>
        </div>
      </div>
      <div className="tags">
        <span className="tag">Figma</span><span className="tag">Commerce UX</span><span className="tag">Dashboard design</span>
        <span className="tag">Design system</span><span className="tag-g">Team lead</span>
      </div>
      <a className="go" href="https://www.wearetavcorp.com/" target="_blank" rel="noopener noreferrer">Visit wearetavcorp.com →</a>
    </div>
  </article>

  <article className="case">
    <div className="container">
      <div className="case-top">
        <div>
          <p className="case-no"><b>02</b> {"\u00a0"}/{"\u00a0"} SmartbloksAI · 2024–25</p>
          <h2>A page builder that doesn't <em>drown you in controls</em></h2>
          <p className="kind">Product design · Design system</p>
        </div>
        <p className="blurb">Page builders fail the same way: every widget needs a full settings surface, and the result is a wall of controls nobody can navigate. <b>The fix was a vocabulary, not a cleanup.</b></p>
      </div>

      <div className="shots big">
        <Shot src="/img/builder-canvas.jpg" alt="Smartbloks editor: widget library, live canvas and settings panel" caption="Three-panel editor · widget library, live canvas, settings" />
      </div>
      <div className="shots two">
        <Shot src="/img/builder-settings.jpg" alt="Settings panel with Content and Style tabs" caption="Content / Style split" />
        <Shot src="/img/builder-inline.jpg" alt="Inline text editing on the canvas" caption="Inline editing on canvas" />
      </div>

      <p className="eyebrow" style={{marginTop: '2.6rem'}}>The blocks</p>
      <p className="blurb" style={{maxWidth: '68ch', marginBottom: '1.4rem'}}>Templates are the showroom; <b>blocks are the product</b>. Each one is a page section — a hero, a feature grid, a pricing table, a footer — built to drop into any template without breaking its spacing, type scale or palette. Eight hero blocks below, from a library of more than a thousand.</p>
      <div className="shots four">
        <Shot src="/img/blk-1.jpg" alt="Hero block with background photograph and overlaid heading" />
        <Shot src="/img/blk-2.jpg" alt="Hero block with abstract illustration and search field" />
        <Shot src="/img/blk-3.jpg" alt="Centred hero block with product screenshot below" />
        <Shot src="/img/blk-4.jpg" alt="Split hero block with laptop mockup" />
        <Shot src="/img/blk-5.jpg" alt="Interior-themed hero block with warm palette" />
        <Shot src="/img/blk-6.jpg" alt="Food photography hero block with review stars" />
        <Shot src="/img/blk-7.jpg" alt="Full-bleed photographic hero block with dual buttons" />
        <Shot src="/img/blk-8.jpg" alt="Landscape hero block with centred heading" />
      </div>

      <div className="pwr">
        <div className="pw">
          <h4>The problem</h4>
          <p>Every widget needs controls for content and for styling. Put them in one list and users scroll past what they need. Split them badly and they can't find anything at all.</p>
        </div>
        <div className="pw">
          <h4>What I did</h4>
          <p>Split every panel into <b>Content</b> and <b>Style</b>, then built one control vocabulary used everywhere — theme/custom/gradient colour pickers, custom/all spacing toggles, per-element show-hide switches. Learn a control once, recognise it in every widget.</p>
        </div>
        <div className="pw win">
          <h4>The result</h4>
          <p><span className="bignum">6h → under 2h</span>Full template build time. The show-hide toggles meant one widget covered a dozen layouts, so the library stayed small while output passed <b>1,000 blocks and 100 templates</b>.</p>
        </div>
      </div>
      <div className="tags">
        <span className="tag">Figma</span><span className="tag">Design system</span><span className="tag">Component architecture</span>
        <span className="tag">Usability testing</span><span className="tag-g">Head of design</span>
      </div>
    </div>
  </article>

  <article className="case">
    <div className="container">
      <div className="case-top">
        <div>
          <p className="case-no"><b>03</b> {"\u00a0"}/{"\u00a0"} SmartbloksAI · 2025</p>
          <h2>Smartbillr — invoicing without the <em>dread</em></h2>
          <p className="kind">Product design · FinTech</p>
        </div>
        <p className="blurb">Invoicing tools make you fill a form and hope. <b>Every screen here answers one question before you scroll</b> — what will this look like, where is my money, what needs chasing.</p>
      </div>

      <div className="shots big">
        <Shot src="/img/billr-invoice.jpg" alt="Smartbillr invoice editor with live preview beside the form" caption="Invoice editor · form on the left, live preview on the right" />
      </div>
      <div className="shots three">
        <Shot src="/img/billr-quote.jpg" alt="Quotations screen with totals, trend chart and activity feed" caption="Quotations · status &amp; activity feed" />
        <Shot src="/img/billr-report.jpg" alt="Report overview with revenue, expenses and receivables" caption="Reporting · cash position" />
        <Shot src="/img/billr-expenses.jpg" alt="Expenses overview with spend trend, budgets and alerts" caption="Expenses · budgets &amp; alerts" />
      </div>

      <div className="pwr">
        <div className="pw">
          <h4>The problem</h4>
          <p>Small-business finance tools either hide everything behind menus or show every number at once. Either way the owner can't answer "am I okay this month?" without doing the work themselves.</p>
        </div>
        <div className="pw">
          <h4>What I did</h4>
          <p>Put a <b>live invoice preview beside the form</b> so nothing is a guess. Ranked every overview screen — totals and trend first, budgets beside them, then <b>alerts that name an action</b> ("cash flow negative in 4 days") rather than just reporting a number. Tables sit below the fold.</p>
        </div>
        <div className="pw win">
          <h4>The result</h4>
          <p><span className="bignum">6 screens</span>Invoicing, quotations, expenses, reporting, sign-in and onboarding — one product, one component language, each screen answering its question at a glance.</p>
        </div>
      </div>
      <div className="tags">
        <span className="tag">Figma</span><span className="tag">Dashboard UX</span><span className="tag">Data hierarchy</span>
        <span className="tag">FinTech</span><span className="tag">Design system</span>
      </div>
    </div>
  </article>

  <article className="case">
    <div className="orb" style={{width: '480px', height: '480px', background: '#f2762e', top: '40px', left: '-200px', opacity: '.08'}}></div>
    <div className="container">
      <div className="case-top">
        <div>
          <p className="case-no"><b>04</b> {"\u00a0"}/{"\u00a0"} Brisk Hauling &amp; Logistics · 2026</p>
          <h2>An identity built from <em>nothing</em></h2>
          <p className="kind">Brand identity · Logo · Design system</p>
        </div>
        <p className="blurb">A moving company with no brand at all. <b>Everything you see here I made:</b> the mark, the lockups, the palette, the type and the written guide that keeps it consistent after I'm gone.</p>
      </div>

      <div className="shots big">
        <Shot src="/img/brisk-logo.jpg" alt="Brisk Hauling and Logistics primary logo — a B formed from a lightning bolt and motion lines" caption="Primary lockup · the B is a lightning bolt with motion trails" />
      </div>
      <div className="shots three">
        <Shot src="/img/brisk-mark-a.jpg" alt="Brisk logo in orange and gold on light and dark" caption="Primary colourway" />
        <Shot src="/img/brisk-mark-b.jpg" alt="Brisk logo in blue variants" caption="Secondary colourway" />
        <Shot src="/img/brisk-mark-c.jpg" alt="Brisk logo monochrome variants" caption="Mono &amp; reversed" />
      </div>
      <div className="shots two">
        <Shot src="/img/brisk-colors.jpg" alt="Brisk brand colour palette with hex values and usage hierarchy" caption="Palette · hex values and usage hierarchy" />
        <Shot src="/img/brisk-guide.jpg" alt="Brisk Hauling brand guide document" caption="The written brand guide" className="tall" />
      </div>

      <div className="pwr">
        <div className="pw">
          <h4>The problem</h4>
          <p>A hauling and logistics startup with a name and nothing else. The category looks identical everywhere — blue, a truck, a swoosh — so the job was to be recognisable at the size of a van door and a phone icon.</p>
        </div>
        <div className="pw">
          <h4>What I did</h4>
          <p>Built the <b>B out of a lightning bolt</b> with motion trails running off it, so speed is in the letterform rather than bolted on. Then the full system: primary, secondary and mono colourways, horizontal and stacked lockups, a palette with a stated hierarchy, and a brand guide written so the next designer can't drift. The voice came with it — <i>"quick, but never rushed"</i> — because a logistics brand that only promises speed sounds careless with your things.</p>
        </div>
        <div className="pw win">
          <h4>The result</h4>
          <p><span className="bignum">Complete</span>A full identity delivered and documented. I left the company before launch, so the brand shipped without me — the system is finished and it stands on its own.</p>
        </div>
      </div>
      <div className="tags">
        <span className="tag">Brand identity</span><span className="tag">Logo design</span><span className="tag">Illustrator</span>
        <span className="tag">Figma</span><span className="tag">Brand guidelines</span><span className="tag">Brand voice</span>
      </div>
    </div>
  </article>

  <article className="case">
    <div className="orb" style={{width: '460px', height: '460px', background: 'var(--teal)', top: '-120px', right: '-180px', opacity: '.09'}}></div>
    <div className="container">
      <div className="case-top">
        <div>
          <p className="case-no"><b>05</b> {"\u00a0"}/{"\u00a0"} TECK Africa · Ideastosite · <span style={{color: 'var(--teal)'}}>Live</span></p>
          <h2>Fourteen pages for a charity with <em>one job</em></h2>
          <p className="kind">Nonprofit · Designed and built · WordPress</p>
        </div>
        <p className="blurb">TECK Africa puts computers and digital skills in front of children who have neither. <b>Two audiences, opposite needs:</b> a parent checking it's real, and a donor deciding where the money goes.</p>
      </div>

      <div className="shots three">
        <Shot src="/img/teck-whatwedo.jpg" alt="TECK Africa What We Do page with the four programme areas" caption="What We Do · four programmes" />
        <Shot src="/img/teck-technology.jpg" alt="TECK Africa technology programme page" caption="Programme page · Technology" />
        <Shot src="/img/teck-involved.jpg" alt="TECK Africa get involved page" caption="Get Involved · three routes in" />
      </div>
      <div className="shots three">
        <Shot src="/img/teck-donate.jpg" alt="TECK Africa donate and sponsor page" caption="Donate &amp; Sponsor" />
        <Shot src="/img/teck-eventspg.jpg" alt="TECK Africa events and partners page" caption="Events &amp; corporate partners" />
        <Shot src="/img/teck-blog.jpg" alt="TECK Africa blog page" caption="Blog" />
      </div>

      <div className="pwr">
        <div className="pw">
          <h4>The problem</h4>
          <p>Charity sites usually collapse into one long plea. But a parent, a volunteer, a corporate partner and a one-off donor each arrive wanting a different thing, and a single "Donate" button serves none of them properly.</p>
        </div>
        <div className="pw">
          <h4>What I did</h4>
          <p>Split the site in two. <b>What We Do</b> proves the work is real — Technology, Education, Scholarship and Community each get a full page with photographs of actual sessions. <b>Get Involved</b> then branches by what you can give: money, time or partnership, each with its own page and its own ask.</p>
        </div>
        <div className="pw win">
          <h4>The result</h4>
          <p><span className="bignum">14 pages, live</span>Designed in full and built in WordPress with Elementor. Running at teckafrica.org, carrying programmes, events, a blog and the donation flow.</p>
        </div>
      </div>
      <div className="tags">
        <span className="tag">Figma</span><span className="tag">WordPress</span><span className="tag">Elementor</span>
        <span className="tag">Information architecture</span><span className="tag">Nonprofit</span>
      </div>
      <a className="go" href="https://teckafrica.org/" target="_blank" rel="noopener noreferrer">Visit teckafrica.org →</a>
    </div>
  </article>

  <article className="case">
    <div className="orb" style={{width: '460px', height: '460px', background: '#e8222e', top: '-130px', right: '-170px', opacity: '.09'}}></div>
    <div className="container">
      <div className="case-top">
        <div>
          <p className="case-no"><b>06</b> {"\u00a0"}/{"\u00a0"} Ideastosite · 2023–24 · <span style={{color: 'var(--teal)'}}>Both live</span></p>
          <h2>Two stores, two <em>opposite</em> brands</h2>
          <p className="kind">E-commerce · WordPress &amp; WooCommerce · Designed and built</p>
        </div>
        <p className="blurb">A London luxury handbag label and a bamboo babywear brand. <b>Same stack, same job, nothing else in common</b> — which is the real test of whether someone designs or just applies a template.</p>
      </div>

      <p className="eyebrow">Benoit London · Luxury fashion</p>
      <div className="shots big">
        <Shot src="/img/benoit-screens.jpg" alt="Benoit London home page, bags category with filters, and partner page" caption="Home, category with filters, partner programme" />
      </div>
      <div className="shots two">
        <Shot src="/img/benoit-devices.jpg" alt="Benoit London shown across desktop, tablet, laptop, phone and watch" caption="One build, every screen size" />
        <Shot src="/img/benoit-shop.jpg" alt="Benoit London satchels category page and the Time To Ditch The Ordinary hero" caption="Satchels category &amp; hero" />
      </div>

      <p className="eyebrow" style={{marginTop: '2.4rem'}}>Tiaga Baby · Bamboo babywear</p>
      <div className="shots big">
        <Shot src="/img/tiaga-screens.jpg" alt="Tiaga Baby home, about and product pages" caption="Home, our story, product listing" />
      </div>
      <div className="shots two">
        <Shot src="/img/tiaga-devices.jpg" alt="Tiaga Baby across desktop, tablet, laptop and phone" caption="Responsive across the range" />
        <Shot src="/img/tiaga-shop.jpg" alt="Tiaga Baby made with love section and about page" caption="Made with Love &amp; about" />
      </div>

      <div className="pwr">
        <div className="pw">
          <h4>The problem</h4>
          <p>Benoit sells to three groups at once — retail buyers, wholesale partners and affiliates — and pushing all three down one path makes the shop feel cluttered to everyone. Tiaga sells across borders to new parents, in two currencies, where warmth matters more than restraint.</p>
        </div>
        <div className="pw">
          <h4>What I did</h4>
          <p>For Benoit: hard red and black, large fashion photography, and <b>separate entry points</b> for the affiliate programme and wholesale partners so neither interrupts the retail journey. For Tiaga: soft neutrals, cloud-shaped image masks, hand-drawn marks, a <b>USD/XOF currency switch</b> and WhatsApp as the contact channel, because that's where the customers already are.</p>
        </div>
        <div className="pw win">
          <h4>The result</h4>
          <p><span className="bignum">Both shipping</span>Full catalogues, carts, wishlists and accounts, running today at benoitlondon.com and tiagababy.com. Same tools, two brands nobody would guess came from one designer.</p>
        </div>
      </div>
      <div className="tags">
        <span className="tag">WordPress</span><span className="tag">WooCommerce</span><span className="tag">Elementor</span>
        <span className="tag">Figma</span><span className="tag">Custom CSS</span><span className="tag">Multi-currency</span>
      </div>
      <a className="go" href="https://benoitlondon.com/" target="_blank" rel="noopener noreferrer">benoitlondon.com →</a>
      {"\u00a0"}{"\u00a0"}
      <a className="go" href="https://tiagababy.com/" target="_blank" rel="noopener noreferrer">tiagababy.com →</a>
    </div>
  </article>

  <article className="case">
    <div className="orb" style={{width: '440px', height: '440px', background: '#2f9e44', top: '-100px', left: '-170px', opacity: '.1'}}></div>
    <div className="container">
      <div className="case-top">
        <div>
          <p className="case-no"><b>07</b> {"\u00a0"}/{"\u00a0"} MeetFarm · Concept</p>
          <h2>An app for farmers who <em>don't read manuals</em></h2>
          <p className="kind">Mobile product design · Brand · Agriculture</p>
        </div>
        <p className="blurb">A community platform connecting farmers to agro insights, peer-to-peer trade and a marketplace. <b>The hard part is the first ninety seconds</b> — explaining four unfamiliar ideas before anyone has typed a thing.</p>
      </div>

      <div className="shots split">
        <Shot src="/img/mf-onboard.jpg" alt="MeetFarm onboarding screens explaining agro insights, peer-to-peer trade, the marketplace and local news" caption="Onboarding · one idea per screen" />
        <Shot src="/img/mf-start.jpg" alt="MeetFarm get started screen with illustrated landscape" caption="Get started" />
      </div>
      <div className="shots two">
        <Shot src="/img/mf-auth.jpg" alt="MeetFarm sign up, sign in, password reset and social login screens" caption="Account flow · sign-up through recovery" />
        <Shot src="/img/mf-brand.jpg" alt="MeetFarm app icon and splash screen variations" caption="Mark &amp; splash · the M as a sprouting plant" />
      </div>

      <div className="pwr">
        <div className="pw">
          <h4>The problem</h4>
          <p>Four propositions at once — insights, trade, marketplace, local news — for an audience who may be installing their first app of this kind. Put them on one screen and none of them land.</p>
        </div>
        <div className="pw">
          <h4>What I did</h4>
          <p>Gave each idea <b>its own onboarding screen</b>, one line each, in plain words — "connecting the land with the farmers". Built the mark from an <b>M that reads as a sprouting plant</b>, so the icon says agriculture at thumbnail size. Then a full account flow: sign-up, sign-in, recovery, email confirmation and social options.</p>
        </div>
        <div className="pw win">
          <h4>Where it stands</h4>
          <p><span className="bignum">Unshipped</span>Brand, onboarding and the complete account flow are designed. The project stopped before build — included here because the thinking holds up, not because it launched.</p>
        </div>
      </div>
      <div className="tags">
        <span className="tag">Figma</span><span className="tag">Mobile UI</span><span className="tag">Onboarding UX</span>
        <span className="tag">Brand mark</span><span className="tag">AgTech</span>
      </div>
    </div>
  </article>
    </main>
  );
}
