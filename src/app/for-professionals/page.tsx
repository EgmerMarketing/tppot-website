import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const title = "Postpartum OT Resources for Healthcare Professionals";

const offers = [
  {
    name: "Vetted directory listing",
    note: "[NEEDS MELISSA: whether a paid directory listing exists, and the price. Not approved. No dollar amount is shown.]",
  },
  {
    name: "Professional community",
    note: "[NEEDS MELISSA: whether a paid professional community exists, and the price. Not approved. No member count is shown.]",
  },
  {
    name: "Apply to lead a support group session",
    note: "[NEEDS MELISSA: whether clinicians can apply to lead a session, and whether applying is free. That has not been confirmed.]",
  },
  {
    name: "Apply to be a podcast guest",
    note: "[NEEDS MELISSA: whether clinicians can apply to be a podcast guest, and whether applying is free. That has not been confirmed.]",
  },
];

export const metadata: Metadata = {
  title,
  description:
    "A single page for healthcare professionals. Family pages are the rest of this site. Offers and prices are not approved yet.",
};

export default function ForProfessionalsPage() {
  return (
    <article className="bg-[#FAF7F2] pb-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "For Professionals", url: `${SITE_URL}/for-professionals` },
        ])}
      />
      <PageHeader
        title={title}
        lede="This website is for moms, dads, and caregivers. This is the one page for occupational therapists and other healthcare professionals. Nothing on it is a live checkout."
      />
      <div className="family-copy mx-auto max-w-[760px] px-6 md:px-8">
        <p>
          Older professional paths, including mentorship service pages and the mom-and-baby webinar
          replay URL, now land here. The webinar itself is not embedded, because the old links were
          not reliable.
        </p>
        <NeedsMelissa>
          [NEEDS MELISSA: which professional offers stay. Mentorship, the mom-and-baby webinar replay, and the professional Facebook group are an open question, not a menu you can buy today.]
        </NeedsMelissa>

        <h2>Four options, none of them approved yet</h2>
        <ul>
          {offers.map((offer) => (
            <li key={offer.name}>
              <p className="font-sans font-bold text-[#0A3660]">{offer.name}</p>
              <NeedsMelissa>{offer.note}</NeedsMelissa>
            </li>
          ))}
        </ul>
        <p>
          There is no application form until Melissa says these options exist. Use the{" "}
          <Link href="/contact">contact form</Link> if you need to write to her, and please do not
          include a patient&apos;s health details.
        </p>

        <h2>Professional Facebook group</h2>
        <p>
          The previous version of this site linked a Facebook group for occupational therapists.
          Facebook is secondary here. Parents should not be sent to that group. The parent Circle
          is a different, private group. They request to join from the Community page.
        </p>
        <p>
          <a href="https://www.facebook.com/groups/1967522367025806">
            Facebook group previously linked from this site
          </a>
        </p>
        <NeedsMelissa>
          [NEEDS MELISSA: confirm this is the professional group, that the link should stay, and what the group should be called.]
        </NeedsMelissa>
      </div>
    </article>
  );
}
