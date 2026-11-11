import type { Icon } from '@/app/content';

// The kit's icon mosaic (assets/icons/icon.css): one outline, cells divided by hairlines, each a real logo
// in its own colours over its name and what it is. Read as one picture, so it carries one label.
export default function IconMosaic({ icons, label, cols }: { icons: Icon[]; label: string; cols: 1 | 2 | 3 | 4 }) {
  return (
    <div className={`ic-grid ic-grid--mosaic ic-grid--cols-${cols} mosaic`} role="img" aria-label={label}>
      {icons.map(i => (
        <div className="ic-cell" key={i.name}>
          <span className="ic-tile ic-tile--40">
            <img className={`ic ic-40${i.ink ? ' ic-ink' : ''}`} src={i.src} alt="" width={i.w} height={i.h} loading="lazy" />
          </span>
          <div>
            <div className="ic-cell__name">{i.name}</div>
            <div className="ic-cell__meta">{i.kind}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
