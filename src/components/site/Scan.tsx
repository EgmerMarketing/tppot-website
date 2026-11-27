export function KeyPoints({ items }: { items: string[] }) {
  return (
    <ul className="panel-navy mt-6 grid gap-3 rounded-[1.75rem] bg-navy p-3 sm:grid-cols-2 sm:p-4">
      {items.map((item, index) => (
        <li
          key={item}
          className={`surface-card flex gap-3 rounded-[1.5rem] bg-white px-4 py-3 font-serif text-lg leading-[1.6] text-black ${index % 2 === 1 ? "sm:mt-3" : ""}`}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="mt-1 h-6 w-6 shrink-0 text-[#2f6b6a]" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 12.5 9.5 17 19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LearnMore({
  summary = "Learn more",
  children,
}: {
  summary?: string;
  children: React.ReactNode;
}) {
  return (
    <details className="learn-more mint-surface mt-3 rounded-[1.25rem] border border-[#0A3660]/15 bg-[#eef6f6]">
      <summary>{summary}</summary>
      <div className="space-y-3 px-4 pb-4 font-serif text-base leading-relaxed text-black">{children}</div>
    </details>
  );
}
