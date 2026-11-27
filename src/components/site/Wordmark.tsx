import Link from "next/link";

/**
 * Type-only wordmark. The live logo files are white artwork that disappears on
 * a light background; this stands in until Melissa sends a navy or SVG logo.
 */
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-baseline gap-1.5 whitespace-nowrap font-serif text-[1.15rem] sm:text-[1.3rem] leading-none tracking-[-0.01em] text-heading ${className}`}
    >
      <span className="hidden font-sans text-[0.8rem] sm:inline font-bold uppercase tracking-[0.14em] text-muted">The</span>
      <span>
        Postpartum <em className="font-medium italic text-accent-ink">OT</em>
      </span>
      <span className="sr-only">, home</span>
    </Link>
  );
}
