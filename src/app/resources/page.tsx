import type { Metadata } from "next";
import PageHeader from "@/components/site/PageHeader";
import EmailSignup from "@/components/site/EmailSignup";
import ResourceLibrary from "@/components/site/ResourceLibrary";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const title = "Free Postpartum Resources: Plans, Checklists and Handouts for New Parents";

export const metadata: Metadata = {
  title,
  description:
    "A free postpartum plan template and handout library for new parents. Files are still being added. Crisis resources are always open.",
};

export default function ResourcesPage() {
  return (
    <div className="bg-[#FAF7F2] pb-16">
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }, { name: "Resources", url: `${SITE_URL}/resources` }])} />
      <PageHeader
        title={title}
        lede="These handouts are meant to be free and open. The files themselves are not uploaded yet, so you will see placeholders instead of downloads. You never have to give an email to read safety information."
      />
      <div className="mx-auto grid max-w-[1120px] gap-10 px-6 md:px-8 lg:grid-cols-[1.3fr_0.7fr]">
        <ResourceLibrary />
        <aside className="h-fit rounded-2xl bg-white p-6">
          <EmailSignup idPrefix="resources" heading="Optional: tell me when handouts are ready" />
        </aside>
      </div>
    </div>
  );
}
