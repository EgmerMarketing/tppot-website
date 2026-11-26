import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import Byline from "@/components/site/Byline";
import JsonLd from "@/components/site/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE_URL, UPDATED } from "@/lib/site";

const title = "Matrescence: The Shift in Who You Are After Birth";
const description =
  "A short parent-facing note on matrescence, the word some people use for the identity shift of becoming a mother. Not a diagnosis.";

export const metadata: Metadata = { title, description };

export default function MatrescencePage() {
  const url = `${SITE_URL}/matrescence`;
  return (
    <article className="bg-[#FAF7F2] pb-16">
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Matrescence", url }])} />
      <JsonLd data={articleSchema({ headline: title, description, datePublished: UPDATED, url })} />
      <PageHeader
        title={title}
        lede="Matrescence is a word for the developmental shift of becoming a mother. Anthropologist Dana Raphael named it in the 1970s, and reproductive psychiatrist Dr. Alexandra Sacks later helped more people hear it. Feeling unlike yourself can be part of that shift. It is not, by itself, a diagnosis."
      />
      <div className="family-copy mx-auto max-w-[760px] px-6 md:px-8">
        <p>
          This site does not grade that feeling. If the day is mostly an invisible list of tasks,
          the{" "}
          <Link href="/topics/postpartum-mental-load-identity">mental load and identity</Link> page
          is the longer note. If you are scared, hopeless, or thinking about harm, leave this page
          and open <Link href="/need-help-now">Need Help Now</Link>.
        </p>
        <Byline />
      </div>
    </article>
  );
}
