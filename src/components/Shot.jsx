import { useZoom } from '../ZoomContext';

/** A screenshot that opens full size when clicked. */
export default function Shot({ src, alt, caption, className = '' }) {
  const zoom = useZoom();
  return (
    <div className={`shot ${className}`} onClick={() => zoom(src, alt)}>
      <img src={src} alt={alt} loading="lazy" />
      {caption && <span className="cap">{caption}</span>}
    </div>
  );
}
