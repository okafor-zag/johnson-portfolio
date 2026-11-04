import { templates } from '../data';
import Marquee from '../components/Marquee';
import { useZoom } from '../ZoomContext';

export default function Designs() {
  const zoom = useZoom();
  return (
    <main>
      <section className="sec tight">
        <div className="container">
          <p className="eyebrow">Template library</p>
          <h2 className="title">{templates.length}+ templates, <em>one system</em></h2>
          <p className="sub">
            Every template here was built from the same component library, which is why they read as a family rather
            than a folder. {templates.length} of more than a hundred, spanning retail, hospitality, health, education,
            property, finance, legal, trade, aviation, agriculture and nonprofit.
          </p>
        </div>
      </section>

      <Marquee />

      <section className="sec">
        <div className="container">
          <div className="gal">
            {templates.map((t) => (
              <div className="gcard" key={t.img} onClick={() => zoom(`/img/${t.img}`, `${t.name} website template`)}>
                <img src={`/img/${t.img}`} alt={`${t.name} website template`} loading="lazy" />
                <div className="m"><b>{t.name}</b><span>{t.kind}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
