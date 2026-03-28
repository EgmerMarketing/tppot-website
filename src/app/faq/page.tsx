import type { Metadata } from "next";
import { Calendar } from "lucide-react";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ | The Postpartum OT",
  description:
    "Frequently asked questions about postpartum OT mentorship, community, and building your practice with The Postpartum OT.",
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const categories: FAQCategory[] = [
  {
    title: "Getting Started",
    items: [
      {
        question: "Do I need specific certifications to work in postpartum OT?",
        answer:
          "You do not need a specific certification to start working with postpartum families. Your OT license gives you the scope to address functional concerns in this population. That said, specialized training helps you feel confident and credible. Mentorship helps you understand what training is worth your time and money and what you can learn through experience.",
      },
      {
        question: "I'm still in OT school. Is it too early to start learning about this?",
        answer:
          "It is never too early. In fact, starting to learn about postpartum OT while you are still in school gives you a significant advantage. You can seek out fieldwork placements, start building your knowledge base, and enter the workforce with a clearer direction than most new grads.",
      },
      {
        question: "What does a typical postpartum OT practice look like?",
        answer:
          "Every practice looks different depending on your community, your interests, and your business model. Some OTs work in home health visiting new moms. Others build private practices focused on infant development, feeding, or maternal mental health. Some combine postpartum work with pelvic health or pediatrics. Mentorship helps you figure out which model fits you.",
      },
    ],
  },
  {
    title: "Mentorship",
    items: [
      {
        question: "How is mentorship different from an online course?",
        answer:
          "Courses give you information. Mentorship gives you direction. When you work with a mentor, you get personalized guidance based on your specific situation, your market, your skills, and your goals. You can ask questions and get real answers in real time instead of rewatching a module and hoping it applies to you.",
      },
      {
        question: "What does a mentorship session look like?",
        answer:
          "Sessions are one on one video calls where we dig into whatever is most pressing for you. That might be building your referral network, refining your clinical approach, figuring out pricing, or working through a challenging case. There is no rigid curriculum because your needs are unique.",
      },
      {
        question: "How long does mentorship typically last?",
        answer:
          "There is no fixed timeline. Some OTs need a few focused sessions to get unstuck. Others benefit from ongoing support as they build and grow their practice over months. We will figure out together what makes sense for where you are.",
      },
    ],
  },
  {
    title: "Community",
    items: [
      {
        question: "What is the OT community and how do I join?",
        answer:
          "The community is a group of 600+ occupational therapists who are interested in or actively building postpartum practices. It is a place to ask questions, share wins, find resources, and connect with others who understand exactly what you are going through. You can join through our website.",
      },
      {
        question: "Is the community only for experienced postpartum OTs?",
        answer:
          "Not at all. The community includes everyone from students and new grads who are curious about the field to experienced clinicians with thriving practices. That range is part of what makes it valuable. You will learn from people at every stage.",
      },
    ],
  },
  {
    title: "Business Building",
    items: [
      {
        question: "Can I do postpartum OT work within my current job?",
        answer:
          "Absolutely. You do not have to leave your current position to start incorporating postpartum focused services. Many OTs begin by adding postpartum components to their existing caseload, whether that is in home health, pediatrics, or outpatient settings. Mentorship can help you identify opportunities within your current role.",
      },
      {
        question: "How do I get referrals for postpartum OT services?",
        answer:
          "Referrals come from building relationships with the people who already serve your target population: OBGYNs, midwives, pediatricians, lactation consultants, pelvic floor PTs, and doulas. The key is education. Most providers do not know what OT can offer postpartum families. When you show them, referrals follow. Mentorship includes specific strategies and scripts for building these connections.",
      },
    ],
  },
];

const allFaqs = categories.flatMap((cat) => cat.items);

export default function FAQPage() {
  return (
    <main className="bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://thepostpartumot.com" }, { name: "FAQ", url: "https://thepostpartumot.com/faq" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(allFaqs)) }} />
      <section className="max-w-[900px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A3660] mb-4 font-serif">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-[#6B6560] font-serif max-w-lg mx-auto">
            Answers to the questions we hear most from OTs exploring the postpartum space
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-bold text-[#0A3660] mb-6 font-sans">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <details
                    key={item.question}
                    className="bg-white rounded-xl border border-[#E6F0F0] p-5 group"
                  >
                    <summary className="font-sans font-bold text-[#0A3660] cursor-pointer list-none flex items-center justify-between gap-4">
                      <span>{item.question}</span>
                      <svg
                        className="w-5 h-5 text-[#469695] flex-shrink-0 transition-transform group-open:rotate-45"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 5v14M5 12h14"
                        />
                      </svg>
                    </summary>
                    <p className="mt-4 font-serif text-[#6B6560] text-[15px] leading-relaxed">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#E6F0F0] rounded-2xl p-8 md:p-12 text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A3660] mb-4 font-serif">
            Still have questions?
          </h2>
          <p className="text-[17px] text-[#6B6560] leading-relaxed mb-8 max-w-lg mx-auto font-serif">
            The best way to get answers specific to your situation is to talk it
            through. Book a free 15 minute call and ask anything.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-[#357574] text-white px-7 py-4 rounded-xl font-bold text-[15px] hover:bg-[#0A3660] transition-colors font-sans"
          >
            <Calendar className="w-4 h-4" strokeWidth={2} />
            Book a Free Call
          </a>
        </div>
      </section>
    </main>
  );
}
