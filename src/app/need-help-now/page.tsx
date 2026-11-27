import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import { WhereNext } from "@/components/site/Character";
import CrisisLines from "@/components/site/CrisisLines";
import { ClinicianReview } from "@/components/site/NeedsMelissa";
import { LearnMore } from "@/components/site/Scan";
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
            Postpartum anxiety vs depression: when should I get help?
          </h2>
          <p className="mt-2 font-serif text-base text-black">
            If sadness or worry is heavy or scaring you, call your provider or 1-833-852-6262. If you might act on thoughts of harm, call or text 988 now.
          </p>
          <LearnMore>
            <p>
              This site does not sort those feelings into a diagnosis.{" "}
              <a href="https://mchb.hrsa.gov/programs-impact/national-maternal-mental-health-hotline">
                HRSA describes signs their counselors hear about
              </a>
              .
            </p>
            <ClinicianReview>
              [CLINICIAN REVIEW: B3, intrusive thoughts. Do not publish wording about intrusive thoughts until a clinician reviews it. This is a placeholder, not parent education.]
            </ClinicianReview>
          </LearnMore>
        </section>

        <section className="mt-10">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">
            How do I ask for help?
          </h2>
          <p className="mt-2 font-serif text-base text-black">
            You can say, “I am not okay, and I need you to stay while I call.”
          </p>
          <LearnMore>
            <p>
              You do not need the perfect words. Ask a partner, a friend, or your provider. If you are
              alone, call or text 988, or the support line at 1-833-852-6262. This page is not treatment.
            </p>
          </LearnMore>
        </section>

        <section className="mt-10">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">
            Urgent warning signs: call 911 or 988 now
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 font-serif text-base text-black">
            <li>Call 911 if you, your baby, or someone with you may be in immediate danger.</li>
            <li>Call or text 988 if you are in emotional crisis or thinking about harm.</li>
          </ul>
          <LearnMore>
            <p>
              This page does not publish a symptom checklist. Your own provider can tell you which body symptoms they want you to report.
            </p>
          </LearnMore>
        </section>

        <section className="mt-10">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">Help for dads and partners</h2>
          <p className="mt-2 font-serif text-base text-black">
            Partners and family can use 988, 911, and 1-833-TLC-MAMA.{" "}
            <Link href="/topics/dads-and-partners" className="font-bold text-[#0A3660] underline">Everyday ideas for dads and partners</Link>.
          </p>
          <LearnMore>
            <p>HRSA says partners and family are encouraged to contact the maternal mental health hotline. That page is not a crisis service.</p>
          </LearnMore>
        </section>
      </div>
      <WhereNext links={[{ href: "/topics/postpartum-mental-load-identity", label: "Mental load and identity" }, { href: "/community", label: "Community" }]} />
    </article>
  );
}
