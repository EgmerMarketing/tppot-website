const HEIGHTS = [28, 36, 48, 58, 64, 52, 40, 30, 44, 60, 64, 50, 34, 26, 42, 58, 64, 54, 38, 28, 46, 62, 56, 40, 32, 48, 36];
const TEAL_BARS = new Set([7, 9, 13, 15]);

/** Dean's 27-bar mark. Decorative. The section heading stays first in the DOM. */
export default function SoundWave({ className = "h-16 w-auto" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 395 64"
      className={`sound-wave ${className}`}
    >
      {HEIGHTS.map((height, index) => {
        const bar = index + 1;
        return (
          <rect
            key={bar}
            className="sound-wave-bar"
            x={index * 15}
            y={64 - height}
            width="5"
            height={height}
            rx="2.5"
            fill={TEAL_BARS.has(bar) ? "#469695" : "#a8b8a2"}
            style={{ ["--i" as string]: index }}
          />
        );
      })}
    </svg>
  );
}
