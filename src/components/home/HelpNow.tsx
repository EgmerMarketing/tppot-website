import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

/* Numbers verified Nov 19, 2026 per the plan. The maternal hotline is a
   support line, not a crisis line, and says so. Test every number before
   launch. Sits inside the teal help band (page.tsx); all text #061726. */
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
    <section aria-labelledby="help-title">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="help-title" className="t-h2-band">
          If you need help right now
        </h2>
        <Link href="/need-help-now" className="tlink arrow-link inline-flex min-h-11 items-center gap-2">
          Warning signs and more support
          <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4" />
        </Link>
      </div>
      <ul className="mt-10 grid gap-8 md:grid-cols-[1fr_1.4fr_1fr] md:gap-10">
        {lines.map((line) => (
          <li key={line.name} className="flex flex-col border-t-[1.5px] border-[rgb(6_23_38/0.28)] pt-6">
            <h3 className="font-sans text-[1.125rem] font-bold leading-[1.3]">{line.name}</h3>
            <p className="mt-2">{line.detail}</p>
            <a href={line.href} className="btn btn-on-teal mt-5 w-fit">
              <Phone aria-hidden="true" strokeWidth={1.75} className="size-[18px]" />
              {line.action}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
