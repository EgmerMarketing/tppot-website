import Link from "next/link";
import DisclaimerLine from "@/components/site/DisclaimerLine";

type Crumb = { name: string; href: string };

export default function PageHeader({
  title,
  lede,
  crumbs = [],
  disclaimer,
}: {
  title: string;
  lede?: React.ReactNode;
  crumbs?: Crumb[];
  disclaimer?: React.ReactNode;
}) {
  return (
    <header className="mx-auto max-w-[760px] px-6 pt-10 md:px-8 md:pt-14">
      {crumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-black">
            <li>
              <Link href="/" className="font-bold text-[#0A3660] underline underline-offset-4">
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.href} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <Link href={crumb.href} className="font-bold text-[#0A3660] underline underline-offset-4">
                  {crumb.name}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      )}
      <h1 className="font-sans text-3xl font-bold leading-tight text-[#0A3660] md:text-[2.6rem]">
        {title}
      </h1>
      <DisclaimerLine>{disclaimer}</DisclaimerLine>
      {lede && (
        <div className="mt-5 font-serif text-lg leading-relaxed text-black">{lede}</div>
      )}
    </header>
  );
}
