import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import { KeyPoints, LearnMore } from "@/components/site/Scan";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const title = "Accessibility Statement for The Postpartum OT";

export const metadata: Metadata = {
  title,
  description:
    "What The Postpartum OT is aiming for with accessibility, and how to report a barrier. This page is not a compliance certification.",
};

export default function AccessibilityPage() {
  return (
    <article className="bg-[#FAF7F2] pb-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Accessibility", url: `${SITE_URL}/accessibility` },
        ])}
      />
      <PageHeader
        title={title}
        lede="The aim is a site parents can resize, read, and use with a keyboard. This is not an audit or a certification."
      />
      <div className="family-copy mx-auto max-w-[760px] px-6 md:px-8">
        <h2>What are we aiming for?</h2>
        <KeyPoints
          items={[
            "Target: WCAG 2.2 Level AA. This is not a certification.",
            "One heading, zoom allowed, navy or black text.",
            "Buttons and fields are at least 44 pixels tall.",
          ]}
        />
        <LearnMore summary="Color note">
          <p>Teal is for large areas, icons, and borders. A darker teal is used only for small labels.</p>
          <NeedsMelissa>
            [NEEDS MELISSA: is the darker teal #2f6b6a OK for small text? It is in the site as one token, --tppot-teal-text, and it is not a confirmed brand color.]
          </NeedsMelissa>
        </LearnMore>
        <h2>Known limits</h2>
        <ul>
          <li>The header is a text wordmark until a logo works on a light background.</li>
          <li>Some older blog posts were written for occupational therapists. Their wording was not rewritten.</li>
          <li>Handout files are not uploaded, so those cards cannot be downloaded.</li>
          <li>The email signup does not yet send an automated confirmation.</li>
          <li>Podcast audio plays on Apple Podcasts, Spotify, or YouTube, not in a player on this site. We do not control captions on those apps.</li>
          <li>No video is embedded on this site today.</li>
        </ul>
        <h2>Tell us what blocked you</h2>
        <p>
          Email{" "}
          <a href="mailto:hello@thepostpartumot.com">hello@thepostpartumot.com</a> or use the{" "}
          <Link href="/contact">contact form</Link>. Say which page and what you were trying to do.
          Please leave out health details.
        </p>
      </div>
    </article>
  );
}
