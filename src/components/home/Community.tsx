import { CalendarDays, MessagesSquare } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import SignupForm from "@/components/site/SignupForm";

/*
  Confirmed by Melissa (family-first plan, Nov 22, 2026): the Circle is a
  Facebook group started November 18, 2026, and Live runs Wednesdays 11:00 to
  11:30 AM MT. Platform, cost, sign-up and replays are still open, so none of
  them appear here.
  Full-bleed teal band that slides 96px under the navy podcast band. All text
  on teal is #061726 (5.23:1).
*/
export default function Community() {
  return (
    <section id="community" aria-labelledby="community-title" className="band band-teal band-lower overflow-hidden">
      <div aria-hidden="true" className="seal" />
      <div className="relative mx-auto grid max-w-[84rem] gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <BlurFade inView direction="up" offset={12} duration={0.6} className="lg:col-span-5">
          <h2 id="community-title" className="t-h2">
            Join the waitlist for the Functional Fourth Trimester community
          </h2>
          <p className="t-lead mt-5 max-w-[46ch]">
            A place to ask questions, be heard and get real answers, without the trends and the noise. Add your email and you&apos;ll be the first to know when it opens.
          </p>
          <ul className="mt-10 grid gap-6">
            <li className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-frame bg-[rgb(6_23_38/0.1)]">
                <MessagesSquare aria-hidden="true" strokeWidth={1.5} className="size-5" />
              </span>
              <div>
                <h3 className="t-h3">Functional Fourth Trimester Circle</h3>
                <p className="mt-1">A Facebook group for new parents, started in November 2026.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-frame bg-[rgb(6_23_38/0.1)]">
                <CalendarDays aria-hidden="true" strokeWidth={1.5} className="size-5" />
              </span>
              <div>
                <h3 className="t-h3">Functional Fourth Trimester Live</h3>
                <p className="mt-1">Weekly sessions on Wednesdays, 11:00 to 11:30 AM Mountain Time.</p>
              </div>
            </li>
          </ul>
        </BlurFade>

        <BlurFade inView direction="up" offset={16} delay={0.1} duration={0.7} className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-frame-card bg-surface p-6 text-ink shadow-[0_24px_48px_-24px_rgb(6_23_38/0.35)] [--ring-gap:var(--surface)] sm:p-10">
            <p className="font-serif text-[1.75rem] leading-snug text-heading">Save your spot</p>
            <p className="mt-2 text-muted">Just your email. No health questions, ever.</p>
            <div className="mt-8">
              <SignupForm source="home-community" />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
