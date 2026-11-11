import { cx } from './ui';

// The name with its mark (three dots and a square, in the accent colour). In the footer the mark sits in
// the line at the text's size.
export default function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={cx(
        'inline-flex flex-none items-center gap-2 font-display text-[22px] leading-none font-medium tracking-[-.02em]',
        'max-sm:min-h-[44px] max-sm:gap-[6px] max-sm:whitespace-nowrap max-sm:text-[clamp(16px,4.6vw,20px)]',
      )}
      href="#top"
    >
      <svg
        className={cx(
          'inline-block flex-none fill-accent',
          footer ? 'mr-[.18em] size-[.8em] align-[-.04em]' : 'size-[22px] max-sm:size-[20px]',
        )}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="6.5" cy="6.5" r="4.5" />
        <circle cx="17.5" cy="6.5" r="4.5" />
        <circle cx="6.5" cy="17.5" r="4.5" />
        <rect x="13" y="13" width="9" height="9" rx="1.5" />
      </svg>
      Will Hawks
    </a>
  );
}
