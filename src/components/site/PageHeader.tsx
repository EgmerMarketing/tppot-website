import Link from "next/link";
import DisclaimerLine from "@/components/site/DisclaimerLine";
import { Blob, EmphasisTitle, TopicIcon, Wave, topicIconFor } from "@/components/site/Character";

type Crumb = { name: string; href: string };

export default function PageHeader({
  title,
  lede,
  crumbs = [],
  disclaimer,
  emphasis,
  icon,
}: {
  title: string;
  lede?: React.ReactNode;
  crumbs?: Crumb[];
  disclaimer?: React.ReactNode;
  emphasis?: string;
  icon?: ReturnType<typeof topicIconFor>;
}) {
  return (
    <>
      <header className="relative overflow-hidden bg-teal-50">
        <Blob className="pointer-events-none absolute -left-12 top-4 h-36 w-36 text-[#469695]/20" />
        <svg aria-hidden="true" className="pointer-events-none absolute -right-6 bottom-0 h-32 w-32 text-[#0A3660]/10" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="22" fill="none" stroke="currentColor" strokeWidth="4" />
          <circle cx="60" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        {icon && (
          <div className="pointer-events-none absolute bottom-8 right-8 hidden rounded-full bg-white p-3 shadow-sm md:block" aria-hidden="true">
            <TopicIcon name={icon} />
          </div>
        )}
        <div className="relative mx-auto max-w-[760px] px-6 py-12 md:px-8 md:py-16">
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 font-sans text-base text-[#0A3660]">
                <li>
                  <Link href="/" className="font-bold underline underline-offset-4">Home</Link>
                </li>
                {crumbs.map((crumb) => (
                  <li key={crumb.href} className="flex items-center gap-2">
                    <span aria-hidden="true">/</span>
                    <Link href={crumb.href} className="font-bold underline underline-offset-4">{crumb.name}</Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className="font-serif text-4xl font-semibold leading-tight text-[#0A3660] md:text-5xl">
            <EmphasisTitle title={title} emphasis={emphasis} />
          </h1>
          <DisclaimerLine>{disclaimer}</DisclaimerLine>
          {lede && (
            <div className="mt-5 max-w-[70ch] font-serif text-lg leading-[1.6] text-black">{lede}</div>
          )}
        </div>
      </header>
      <Wave from="#eef6f6" to="#FAF7F2" />
    </>
  );
}
