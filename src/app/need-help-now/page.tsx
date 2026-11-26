import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import CrisisLines from "@/components/site/CrisisLines";
import { ClinicianReview } from "@/components/site/NeedsMelissa";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const title = "Need Help Now? Postpartum Crisis Lines and Urgent Warning Signs";

export const metadata: Metadata = {
  title,
  description:
    "Call or text 988 for a crisis. Call 911 in an emergency. 1-833-TLC-MAMA is a 24/7 support line, not a crisis line. PSI HelpLine contacts included.",
  robots: { index: true, follow: true },
};

export default function NeedHelpNowPage() {
  return (
    <article className="bg-white pb-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Need Help Now", url: `${SITE_URL}/need-help-now` },
        ])}
      />
      <PageHeader
        title={title}
        disclaimer="This page lists support contacts. It is not medical advice, and this website cannot answer an emergency."
      />
      <div className="mx-auto max-w-[760px] px-6 md:px-8">
        <aside className="mt-8 rounded-2xl border-4 border-[#0A3660] bg-[#eef6f6] p-5 md:p-8" aria-label="Who to contact">
          <CrisisLines />
        </aside>

        <section className="mt-12">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">
            Postpartum anxiety vs depression: signs it&apos;s time to get help
          </h2>
          <p className="mt-3 font-serif text-lg leading-relaxed text-black">
            Sadness, worry, and not feeling like yourself can show up after birth. This site does
            not sort those feelings into a diagnosis. If they are heavy, lasting, or scaring you,
            talk with your provider or call the maternal mental health support line at
            1-833-852-6262. HRSA&apos;s page describes signs their counselors hear about. If you
            might act on thoughts of harm, call or text 988 now.
          </p>
          <p className="mt-3">
            <a
              className="font-sans text-sm font-bold text-[#0A3660] underline"
              href="https://mchb.hrsa.gov/programs-impact/national-maternal-mental-health-hotline"
            >
              National Maternal Mental Health Hotline at HRSA
            </a>
          </p>
          <ClinicianReview>
            [CLINICIAN REVIEW: B3, intrusive thoughts. Do not publish wording about intrusive thoughts until a clinician reviews it. This is a placeholder, not parent education.]
          </ClinicianReview>
        </section>

        <section className="mt-10">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">
            How to ask for help with postpartum depression
          </h2>
          <p className="mt-3 font-serif text-lg leading-relaxed text-black">
            You can say, “I am not okay, and I need you to stay while I call.” You do not need the
            perfect words. Ask a partner, a friend, or your provider. If you are alone, call or
            text 988, or the support line at 1-833-852-6262. A volunteer or counselor is there for
            that call. This page is not treatment.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">
            Urgent warning signs: call 911 or 988 now
          </h2>
          <p className="mt-3 font-serif text-lg leading-relaxed text-black">
            Call 911 if you, your baby, or someone with you may be in immediate danger, including
            a medical emergency. Call or text 988 if you are in emotional crisis or thinking about
            harming yourself or someone else. This page does not publish a symptom checklist.
            Your own provider can tell you which body symptoms they want you to report.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">Help for dads and partners</h2>
          <p className="mt-3 font-serif text-lg leading-relaxed text-black">
            Partners and family members can call or text 988, call 911, and use 1-833-TLC-MAMA.
            HRSA says partners and family are encouraged to contact the maternal mental health
            hotline. More everyday ideas are on the{" "}
            <Link href="/topics/dads-and-partners" className="font-bold text-[#0A3660] underline">
              dads and partners
            </Link>{" "}
            page. That page is not a crisis service.
          </p>
        </section>
      </div>
    </article>
  );
}
