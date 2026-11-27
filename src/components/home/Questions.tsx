import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";

/* Answer-first capsules, 40 to 60 words, real HTML text under question H3s.
   Facts come from the Ability Village Postpartum Resource Guides via the copy
   doc; recheck against current sources before launch. */
export const homeQuestions = [
  {
    q: "What does a postpartum occupational therapist do?",
    a: "Occupational therapy helps people do the everyday things they want and need to do. After a baby, that means the tasks that suddenly feel hard: sleep, feeding, routines, caring for yourself and finding your footing in a new role. A postpartum OT looks at the task, the space and the people, then helps you find a way that fits your family.",
  },
  {
    q: "What is the fourth trimester?",
    a: "The fourth trimester is the first 12 weeks after birth. Your body, your emotions, your relationships and your sense of self are all changing, often at the same time. Many parents find these weeks harder than they expected, and that is a normal response to a very big change.",
  },
  {
    q: "How long do the baby blues last?",
    a: "The baby blues usually start 2 to 3 days after birth and last up to 2 weeks. If your feelings are severe, or they last longer than 2 weeks, tell your provider. It may be postpartum depression or anxiety, which are common and treatable.",
  },
  {
    q: "Can dads get postpartum depression?",
    a: "Yes. About 1 in 10 dads experience depression or anxiety during pregnancy or the first year after birth. In dads it can look like irritability, anger or pulling away. If that sounds familiar, you deserve support too, and talking with a provider is a good first step.",
  },
  {
    q: "Are short naps normal for a newborn?",
    a: "Yes, especially for babies under 6 months. If your baby wakes up happy and ready to engage, a short nap may be meeting their needs. Watch your baby's tired cues more than the clock, and treat wake windows as a guide, not a rule.",
  },
];

export default function Questions() {
  return (
    <section aria-labelledby="questions-title" className="mx-auto max-w-[84rem] px-4 pb-[72px] pt-20 sm:px-6 lg:px-10 lg:pb-28 lg:pt-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <BlurFade inView direction="up" offset={12} duration={0.6}>
              <h2 id="questions-title" className="t-h2">
                Postpartum questions new parents ask
              </h2>
              <p className="t-lead mt-5 max-w-[36ch] text-muted">
                Short, honest answers. Each one is a starting point, not a substitute for your own provider.
              </p>
              <Link href="/faq" className="tlink mt-6 inline-flex min-h-11 items-center text-heading">
                More questions and answers
              </Link>
            </BlurFade>
          </div>
        </div>

        <div className="grid gap-4 lg:col-span-7 lg:col-start-6">
          {homeQuestions.map((item) => (
            <article key={item.q} className="rounded-frame-card border border-line bg-surface p-7 sm:p-9">
              <h3 className="t-h3">{item.q}</h3>
              <p className="mt-3 text-[1.0625rem] leading-[1.75] text-ink">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
