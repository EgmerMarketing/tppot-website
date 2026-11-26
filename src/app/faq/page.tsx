import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import CtaRow from "@/components/site/CtaRow";
import JsonLd from "@/components/site/JsonLd";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const title = "Postpartum Questions New Parents Ask Most, Answered";

const faqs = [
  {
    question: "How long does postpartum recovery take?",
    answer:
      "There is no single timeline. Some daily tasks ease in a few weeks, and some take longer. A checkup is a visit, not a finish line. Your provider can say what fits your body. Read the recovery page for what an occupational therapist looks at in the day.",
    href: "/topics/postpartum-recovery",
    hrefLabel: "Postpartum recovery",
  },
  {
    question: "When does it get easier with a newborn?",
    answer:
      "Easier usually arrives in pieces, not on one morning. Nights, feeding, and your sense of yourself can each shift on their own. Start Here walks the fourth trimester in three stretches. If you are suffering, not just tired, use Need Help Now.",
    href: "/start-here",
    hrefLabel: "Start Here",
  },
  {
    question: "How do I get anything done with a newborn?",
    answer:
      "Shrink the day to feeding, diapers, your own food, and one rest. A routine is a short list you can repeat. Ask for help with one named task.",
    href: "/topics/newborn-daily-routine",
    hrefLabel: "Newborn daily routine",
  },
  {
    question: "What is postpartum occupational therapy?",
    answer:
      "Occupational therapy helps people do the daily activities that matter to them. After birth, that can include sleep, feeding routines, and getting through the day. It does not replace your doctor, midwife, or mental health clinician.",
    href: "/what-is-postpartum-occupational-therapy",
    hrefLabel: "What is postpartum OT?",
  },
  {
    question: "How can a dad or partner help?",
    answer:
      "Take a real shift, including the night, and do a task without waiting for a new list. Check your own sleep and mood. Partners can call or text 988, and family members can use 1-833-TLC-MAMA, which is a support line, not a crisis line.",
    href: "/topics/dads-and-partners",
    hrefLabel: "Dads and partners",
  },
  {
    question: "Where do I get help if I am not okay right now?",
    answer:
      "If you are in crisis, call or text 988. If you or the baby may be in danger, call 911. For support that is not a crisis line, call or text 1-833-852-6262. This website cannot respond to emergencies.",
    href: "/need-help-now",
    hrefLabel: "Need Help Now",
  },
  {
    question: "Is this medical advice?",
    answer:
      "No. The Postpartum OT shares educational information. It is not medical or professional advice, and it is not a substitute for care from your own provider.",
    href: "/disclaimer",
    hrefLabel: "Disclaimer",
  },
  {
    question: "How do I join the community?",
    answer:
      "The Functional Fourth Trimester Circle is a Facebook group that started November 18, 2026. The public link, cost, and rules are not posted yet. Use the waitlist and you will be told when those details are ready. Live sessions are listed for Wednesdays, 11:00 to 11:30 AM Mountain Time. Platform and price are not confirmed.",
    href: "/community",
    hrefLabel: "Community",
  },
  {
    question: "Where are the free handouts?",
    answer:
      "The resources page is the library. The files are not uploaded yet, so the cards are placeholders. Safety information is never behind a signup.",
    href: "/resources",
    hrefLabel: "Resources",
  },
  {
    question: "I am a healthcare professional. Where do I go?",
    answer:
      "This site is for families. Professional options are on the For Professionals page, linked from the footer. Which offers are open, and any prices, are not approved yet.",
    href: "/for-professionals",
    hrefLabel: "For Professionals",
  },
];

export const metadata: Metadata = {
  title,
  description:
    "Short answers to postpartum questions new parents ask, with links to the page that goes further. Educational information, not medical advice.",
};

export default function FaqPage() {
  return (
    <article className="bg-[#FAF7F2] pb-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "FAQ", url: `${SITE_URL}/faq` },
        ])}
      />
      <JsonLd data={faqSchema(faqs.map(({ question, answer }) => ({ question, answer })))} />
      <PageHeader
        title={title}
        lede="Short answers, then a link to the page that owns the topic. Nothing here is a diagnosis."
      />
      <div className="mx-auto max-w-[760px] px-6 md:px-8">
        <CtaRow primary="podcast" />
        <div className="mt-10 space-y-8">
          {faqs.map((faq) => (
            <section key={faq.question}>
              <h2 className="font-sans text-2xl font-bold text-[#0A3660]">{faq.question}</h2>
              <p className="mt-2 font-serif text-lg leading-relaxed text-black">{faq.answer}</p>
              <p className="mt-2">
                <Link href={faq.href} className="font-sans text-sm font-bold text-[#0A3660] underline">
                  {faq.hrefLabel}
                </Link>
              </p>
            </section>
          ))}
        </div>
        <NeedsMelissa>
          [NEEDS MELISSA: anonymized questions from parents or the Circle, if you want them added. None are invented here.]
        </NeedsMelissa>
      </div>
    </article>
  );
}
