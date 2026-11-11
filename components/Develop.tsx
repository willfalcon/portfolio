import { cx } from './ui';

/* A photograph filling its frame. The frame (its size, radius, ground) comes from the caller. */
export default function Develop({ className, ...img }: React.ImgHTMLAttributes<HTMLImageElement> & { className?: string }) {
  return (
    <div className={cx('relative isolate overflow-hidden', className)}>
      {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes with the props */}
      <img {...img} className="absolute inset-0 z-0 h-full w-full max-w-none object-cover" />
    </div>
  );
}
