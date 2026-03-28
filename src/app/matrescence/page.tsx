import type { Metadata } from "next";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Matrescence: The Transformation of Becoming a Mother | The Postpartum OT",
  description:
    "Understanding matrescence and why it matters for occupational therapists working with postpartum families. By Melissa O'Neal, OTR/L, PCES.",
};

export default function MatrescencePage() {
  return (
    <main className="bg-[#FAF7F2]">
      <article className="max-w-[720px] mx-auto px-6 py-24 md:py-32">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A3660] leading-[1.1] mb-4 font-serif">
            Matrescence: The Transformation of Becoming a Mother
          </h1>
          <p className="text-lg text-[#6B6560] font-serif italic mb-8">
            Why this concept changes everything about how OTs approach postpartum care
          </p>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm font-bold text-[#0A3660] font-sans">
                By Melissa O&apos;Neal, OTR/L, PCES
              </p>
              <p className="text-xs text-[#6B6560] font-sans">March 15, 2026</p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0A3660] mb-4 font-serif">
              What Is Matrescence?
            </h2>
            <p className="text-[16px] text-[#6B6560] leading-relaxed mb-4 font-serif">
              Matrescence is the developmental process of becoming a mother. It
              was first named by anthropologist Dana Raphael in the 1970s and has
              been more recently brought into mainstream awareness by reproductive
              psychiatrist Dr. Alexandra Sacks. The term draws a deliberate
              parallel to adolescence because, like adolescence, matrescence
              involves a complete reorganization of identity, hormones, relationships,
              and sense of self.
            </p>
            <p className="text-[16px] text-[#6B6560] leading-relaxed font-serif">
              Unlike adolescence, however, our culture has no framework for this
              transition. There is no language for the disorientation a new mother
              feels when she can no longer recognize herself. There is no
              acknowledgment that this is normal, expected, and temporary. Instead,
              we pathologize it. We call it postpartum depression when sometimes it
              is simply the natural, difficult, beautiful process of becoming someone
              new.
            </p>
          </section>

          {/* Pull Quote */}
          <blockquote className="border-l-2 border-[#469695] pl-5 py-2">
            <p className="text-[#0A3660] font-medium font-serif italic text-lg leading-relaxed">
              &ldquo;Matrescence is not a disease. It is a developmental
              transition. And understanding the difference changes how we show
              up for the families we serve.&rdquo;
            </p>
          </blockquote>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0A3660] mb-4 font-serif">
              The History We Were Never Taught
            </h2>
            <p className="text-[16px] text-[#6B6560] leading-relaxed mb-4 font-serif">
              Dana Raphael introduced matrescence in her 1975 book, arguing that
              the transition to motherhood deserved the same recognition as any
              other major life stage. Her work was largely ignored by the medical
              establishment. For decades, the focus remained on the baby. The
              mother was an afterthought, relevant only as a vessel for delivery
              and a source of nutrition.
            </p>
            <p className="text-[16px] text-[#6B6560] leading-relaxed mb-4 font-serif">
              In 2017, Dr. Alexandra Sacks published a piece in The New York Times
              titled &ldquo;The Birth of a Mother&rdquo; that reignited the
              conversation. She argued that matrescence should be studied with the
              same rigor we apply to adolescence. Both involve hormonal shifts,
              identity disruption, changes in brain structure, and shifts in every
              relationship in a person&apos;s life.
            </p>
            <p className="text-[16px] text-[#6B6560] leading-relaxed font-serif">
              The research has since accelerated. Brain imaging studies show that
              a mother&apos;s brain undergoes measurable structural changes during
              pregnancy and the postpartum period. Gray matter volume shifts in
              areas associated with empathy, threat detection, and social cognition.
              These are not signs of decline. They are signs of adaptation.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0A3660] mb-4 font-serif">
              Why Matrescence Matters for Occupational Therapists
            </h2>
            <p className="text-[16px] text-[#6B6560] leading-relaxed mb-4 font-serif">
              Occupational therapy is built on the idea that meaningful activity
              is central to health. When a person becomes a mother, every
              occupation in her life changes. Sleep, self care, work, leisure,
              social participation, household management. Nothing is untouched.
              Matrescence provides the framework for understanding why.
            </p>
            <p className="text-[16px] text-[#6B6560] leading-relaxed mb-4 font-serif">
              Without this framework, we risk treating symptoms in isolation. We
              might address sleep deprivation without understanding the identity
              crisis underneath it. We might teach coping strategies without
              acknowledging that a mother is grieving the person she used to be
              while simultaneously falling in love with who she is becoming.
            </p>

            {/* Sub section */}
            <h3 className="text-xl font-bold text-[#0A3660] mb-3 mt-8 font-serif">
              Reframing the Conversation
            </h3>
            <p className="text-[16px] text-[#6B6560] leading-relaxed font-serif">
              When we understand matrescence, we stop asking &ldquo;What is
              wrong with you?&rdquo; and start asking &ldquo;What is happening
              for you?&rdquo; That shift changes everything. It changes the
              questions we ask in evaluations. It changes the goals we write.
              It changes how we listen. A mother who feels seen in her transition
              is far more likely to engage in the therapeutic process than one
              who feels diagnosed.
            </p>
          </section>

          {/* Pull Quote 2 */}
          <blockquote className="border-l-2 border-[#469695] pl-5 py-2">
            <p className="text-[#0A3660] font-medium font-serif italic text-lg leading-relaxed">
              &ldquo;When we stop pathologizing the transition and start
              honoring it, we unlock a level of trust with our clients that
              changes outcomes.&rdquo;
            </p>
          </blockquote>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0A3660] mb-4 font-serif">
              Clinical Applications
            </h2>
            <p className="text-[16px] text-[#6B6560] leading-relaxed mb-4 font-serif">
              In practice, a matrescence informed approach looks like starting
              every evaluation with curiosity about the whole person, not just
              the presenting concern. It means asking about identity, about what
              has changed since becoming a mother, about what she misses and what
              she has discovered.
            </p>
            <p className="text-[16px] text-[#6B6560] leading-relaxed mb-4 font-serif">
              It means recognizing that difficulty with infant feeding might be
              intertwined with anxiety about being a good enough mother. It
              means understanding that resistance to a home exercise program might
              actually be a mother who has nothing left to give at the end of the
              day and needs someone to acknowledge that before offering one more
              thing to do.
            </p>
            <p className="text-[16px] text-[#6B6560] leading-relaxed font-serif">
              Goal writing shifts too. Instead of purely functional targets, we
              can incorporate occupational identity goals. We can help mothers
              reconnect with occupations that ground them in who they are beyond
              the role of caregiver. We can build treatment plans that honor both
              the mother and the baby, because they are not competing interests.
              They are part of the same system.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-[#0A3660] mb-4 font-serif">
              Where We Go From Here
            </h2>
            <p className="text-[16px] text-[#6B6560] leading-relaxed mb-4 font-serif">
              Matrescence is not a trend. It is a framework that gives OTs the
              language and the lens to do what we already do best: see the whole
              person, understand the context, and help people rebuild their lives
              around what matters most.
            </p>
            <p className="text-[16px] text-[#6B6560] leading-relaxed font-serif">
              The mothers we serve are not broken. They are becoming. And OTs
              who understand that distinction are the ones who will make the
              greatest impact in the postpartum space. This is the work. This
              is why it matters.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="bg-[#E6F0F0] rounded-2xl p-8 md:p-10 text-center mt-16">
          <h2 className="text-2xl font-bold text-[#0A3660] mb-4 font-serif">
            Learn how to apply matrescence in your practice
          </h2>
          <p className="text-[17px] text-[#6B6560] leading-relaxed mb-8 max-w-lg mx-auto font-serif">
            Understanding the concept is the first step. Knowing how to weave it
            into your evaluations, treatment plans, and client conversations is
            where mentorship comes in.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-[#357574] text-white px-7 py-4 rounded-xl font-bold text-[15px] hover:bg-[#0A3660] transition-colors font-sans"
          >
            <Calendar className="w-4 h-4" strokeWidth={2} />
            Book a Free Strategy Call
          </a>
        </div>
      </article>
    </main>
  );
}
