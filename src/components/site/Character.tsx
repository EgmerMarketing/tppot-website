import Link from "next/link";

export function Wave({ from, to }: { from: string; to: string }) {
  return (
    <div className="relative -mt-px leading-[0]" aria-hidden="true">
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="block h-12 w-full md:h-16" style={{ background: from }}>
        <path
          fill={to}
          d="M0,36 C180,72 360,0 540,28 C720,56 900,8 1080,32 C1260,56 1360,20 1440,36 L1440,72 L0,72 Z"
        />
      </svg>
    </div>
  );
}

export function Blob({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 200" className={className}>
      <path
        fill="currentColor"
        d="M46,78 C42,28 96,8 128,42 C168,12 198,62 172,104 C204,156 148,198 102,172 C48,204 8,148 46,78 Z"
      />
    </svg>
  );
}

export function Squiggle({ className = "text-[#469695]" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 10" preserveAspectRatio="none" className={`mt-1 h-2 w-24 ${className}`}>
      <path d="M2 7 Q 16 1 30 7 T 58 7 T 86 7 T 118 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Eyebrow({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={`font-sans text-sm font-bold uppercase tracking-[0.14em] ${onDark ? "text-white" : "text-[#2f6b6a]"}`}>
      {children}
    </p>
  );
}

export function NextStep({
  href,
  children,
  onDark = false,
}: {
  href: string;
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <p className="mt-8 font-sans text-sm font-bold">
      <Link href={href} className={`underline underline-offset-4 ${onDark ? "text-white" : "text-[#0A3660]"}`}>
        {children}
      </Link>
    </p>
  );
}

const icons = {
  sleep: "M4 14c2-6 6-8 8-8s4 4 8 4 6-2 8-6",
  feeding: "M8 4c4 6 4 10 0 16M16 4c-4 6-4 10 0 16",
  daily: "M4 16h16M8 8h8M6 20h12",
  recovery: "M12 4v16M6 10c2 4 4 6 6 6s4-2 6-6",
  mood: "M6 14c2 3 10 3 12 0M8 9h.1M16 9h.1",
  dads: "M7 18v-4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4M12 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5",
};

export function TopicIcon({ name }: { name: keyof typeof icons }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8 text-[#0A3660]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <path d={icons[name]} />
    </svg>
  );
}

export function topicIconFor(href: string): keyof typeof icons {
  if (href.includes("sleep")) return "sleep";
  if (href.includes("feeding")) return "feeding";
  if (href.includes("recovery")) return "recovery";
  if (href.includes("mental")) return "mood";
  if (href.includes("dads")) return "dads";
  return "daily";
}

export function StepTrail({ steps }: { steps: string[] }) {
  return (
    <ol className="relative mt-8 space-y-6">
      <svg aria-hidden="true" className="absolute left-[1.15rem] top-6 h-[calc(100%-3rem)] w-6 text-[#469695]" viewBox="0 0 24 200" preserveAspectRatio="none">
        <path d="M12 0 C 22 40 2 70 12 100 C 22 130 2 160 12 200" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      {steps.map((step, index) => (
        <li key={step} className="relative flex items-start gap-4">
          <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A3660] font-sans text-sm font-bold text-white">
            {index + 1}
          </span>
          <p className="pt-1 font-serif text-lg leading-snug text-black">{step}</p>
        </li>
      ))}
    </ol>
  );
}
