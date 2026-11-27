import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import { WhereNext } from "@/components/site/Character";
import EmailSignup from "@/components/site/EmailSignup";
import ResourceLibrary from "@/components/site/ResourceLibrary";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const title = "Postpartum Resources: Plans, Checklists and Handouts for New Parents";

export const metadata: Metadata = {
  title,
  description:
    "Family guides and a travel handout for new parents. Other library files are still being added. Crisis resources are always open.",
};

export default function ResourcesPage() {
  return (
    <div className="bg-[#FAF7F2] pb-16">
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Resources", url: `${SITE_URL}/resources` }])} />
      <PageHeader
        title={title}
        lede="Family guides below are ready to read. The travel sheet is a download. Other files in the library are still placeholders. Safety information never asks for your email."
        emphasis="Resources"
      />
      <div className="mx-auto max-w-[1120px] px-6 py-8 md:px-8">
        <ul className="panel-navy grid gap-3 rounded-2xl bg-navy p-3 sm:grid-cols-2 sm:p-4">
          {[
            ["/resources/your-top-postpartum-questions", "Your top postpartum questions, answered", "What an occupational therapist can help with in daily life, sleep, feeding posture, and mood."],
            ["/resources/night-weaning", "A gentle guide to night weaning (9 months+)", "When the handout says a family might consider night weaning, and when to talk with a provider."],
            ["/resources/better-questions", "Better questions than how are you?", "Questions partners, family, and friends can ask a new mom."],
            ["/resources/adhd-and-new-parenthood", "ADHD and new parenthood: practical support", "Routines, room setup, fatigue, sensory load, and getting a task started."],
            ["/resources/adhd-postpartum-check-in", "ADHD postpartum check-in", "A reflection to print and bring to a provider. Not a diagnosis or a screening tool."],
            ["/blog/tips-to-travel-postpartum", "Tips for traveling postpartum", "Breastfeeding on an airplane, from the handout. The PDF is a download."],
          ].map(([href, label, text]) => (
            <li key={href}>
              <Link href={href} className={`surface-card flex h-full flex-col rounded-[1.5rem] bg-white p-5 ${href.includes("night") ? "sm:mt-4" : ""}`}>
                <span className="mb-2 inline-flex w-fit rounded-full bg-[#eef6f6] px-3 py-1 font-sans text-base font-bold text-[#2f6b6a]">
                  {href.includes("travel") ? "PDF story" : "Page"}
                </span>
                <p className="font-sans text-lg font-bold text-[#0A3660]">{label}</p>
                <p className="mt-2 font-serif text-base text-black">{text}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          <a className="font-sans text-base font-bold text-[#0A3660] underline" href="/resources/tips-to-travel-postpartum.pdf">
            Download the travel handout. No email.
          </a>
        </p>
      </div>
      <div className="mx-auto grid max-w-[1120px] gap-10 px-6 md:px-8 lg:grid-cols-[1.3fr_0.7fr]">
        <ResourceLibrary />
        <aside className="h-fit rounded-2xl bg-white p-6">
          <EmailSignup idPrefix="resources" heading="Optional: tell me when handouts are ready" />
        </aside>
      </div>
      <WhereNext links={[{ href: "/blog/tips-to-travel-postpartum", label: "Travel tips" }, { href: "/topics", label: "Postpartum topics" }]} />
    </div>
  );
}
