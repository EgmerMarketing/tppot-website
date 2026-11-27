import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { breadcrumbSchema } from "@/lib/schema";
import ContactForm from "@/components/contact/ContactForm";
import PageHeader from "@/components/site/PageHeader";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import JsonLd from "@/components/site/JsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Melissa O'Neal at The Postpartum OT",
  description:
    "Send a message to Melissa O'Neal. Please don't include health details. For a crisis, call or text 988.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAF7F2] pb-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Contact", url: `${SITE_URL}/contact` },
        ])}
      />
      <PageHeader
        title="Contact Melissa O'Neal at The Postpartum OT"
        lede="Write with a question about the podcast, the community waitlist, or the site. Leave health details out. This inbox is not an emergency line."
      />
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <NeedsMelissa>
          [NEEDS MELISSA: how soon you reply. The old “within 24 hours” line and the inactive Kartra calendar are removed.]
        </NeedsMelissa>
      </div>
      <section className="mx-auto grid max-w-[1120px] gap-12 px-6 md:px-8 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-8">
          <h2 className="font-sans text-2xl font-bold text-[#0A3660]">Other ways to reach the site</h2>
          <a href="mailto:hello@thepostpartumot.com" className="flex items-center gap-4">
            <Mail className="h-6 w-6 text-[#0A3660]" aria-hidden="true" />
            <span>
              <span className="block font-sans text-base font-bold text-[#0A3660]">Email</span>
              <span className="font-serif text-base text-black underline">hello@thepostpartumot.com</span>
            </span>
          </a>
          <p className="font-serif text-lg leading-relaxed text-black">
            If you need help now, go to{" "}
            <Link href="/need-help-now" className="font-bold text-[#0A3660] underline">Need Help Now</Link>{" "}
            or call or text 988. Healthcare professionals can read{" "}
            <Link href="/for-professionals" className="font-bold text-[#0A3660] underline">For Professionals</Link>.
          </p>
          <p className="font-serif text-base text-black">
            <a className="font-bold text-[#0A3660] underline" href="https://www.instagram.com/thepostpartumot/">Instagram</a>
            {" · "}
            <a className="font-bold text-[#0A3660] underline" href="https://www.youtube.com/@thepostpartumot">YouTube</a>
          </p>
        </div>
      </section>
    </div>
  );
}
