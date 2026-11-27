import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

/* Numbers verified Nov 19, 2026 per the plan. The maternal hotline is a
   support line, not a crisis line, and says so. Test every number before
   launch. */
const lines = [
  {
    name: "988 Suicide and Crisis Lifeline",
    detail: "Call or text 988, any time.",
    href: "tel:988",
    action: "Call 988",
  },
  {
    name: "National Maternal Mental Health Hotline",
    detail: "Call or text 1-833-TLC-MAMA (1-833-852-6262), 24/7. A support line, not a crisis line.",
    href: "tel:18338526262",
    action: "Call the hotline",
  },
  {
    name: "Emergency",
    detail: "If you or your baby are in danger, call 911.",
    href: "tel:911",
    action: "Call 911",
  },
];

export default function HelpNow() {
  return (
    <section aria-labelledby="help-title" className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-10">
      <div className="rounded-[2rem] border border-line-strong p-7 sm:p-10 lg:p-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="help-title" className="text-[1.9rem] leading-[1.15] sm:text-[2.3rem]">
            If you need help right now
          </h2>
          <Link href="/need-help-now" className="group inline-flex min-h-11 items-center gap-2 font-sans text-[1rem] font-bold text-heading">
            Warning signs and more support
            <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4 transition-transform duration-500 ease-(--ease-out-soft) group-hover:translate-x-1" />
          </Link>
        </div>
        <ul className="mt-9 grid gap-6 md:grid-cols-[1fr_1.4fr_1fr] md:gap-10">
          {lines.map((line) => (
            <li key={line.name} className="flex flex-col border-t border-line pt-6">
              <h3 className="text-[1.05rem]">{line.name}</h3>
              <p className="mt-2 text-muted">{line.detail}</p>
              <a
                href={line.href}
                className="mt-4 inline-flex min-h-11 w-fit items-center gap-2 font-sans text-[1rem] font-bold text-heading underline underline-offset-4"
              >
                <Phone aria-hidden="true" strokeWidth={1.5} className="size-4 text-accent" />
                {line.action}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
