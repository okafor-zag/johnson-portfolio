import { templates } from '../data';
import { useZoom } from '../ZoomContext';

/** Infinite template strip. The list is rendered twice so the -50% keyframe loops seamlessly. */
export default function Marquee() {
  const zoom = useZoom();
  const run = [...templates, ...templates];
  return (
    <div className="marquee">
      <div className="track">
        {run.map((t, i) => (
          <div className="mcard" key={`${t.img}-${i}`} onClick={() => zoom(`/img/${t.img}`, `${t.name} website template`)}>
            <img src={`/img/${t.img}`} alt={`${t.name} website template`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
