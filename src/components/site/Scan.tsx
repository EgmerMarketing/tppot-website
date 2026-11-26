export function KeyPoints({ items }: { items: string[] }) {
  return (
    <ul className="panel-navy mt-6 grid gap-3 rounded-2xl bg-navy p-3 sm:grid-cols-2 sm:p-4">
      {items.map((item) => (
        <li
          key={item}
          className="surface-card rounded-xl bg-white px-4 py-3 font-serif text-base leading-snug text-black"
        >
          {item}
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
    <details className="learn-more mt-3 rounded-xl border border-[#0A3660]/20 bg-white">
      <summary>{summary}</summary>
      <div className="space-y-3 px-4 pb-4 font-serif text-base leading-relaxed text-black">{children}</div>
    </details>
  );
}
