import { CalendarDays, MessagesSquare } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import SignupForm from "@/components/site/SignupForm";

/*
  Confirmed by Melissa (family-first plan, Nov 22, 2026): the Circle is a
  Facebook group started November 18, 2026, and Live runs Wednesdays 11:00 to
  11:30 AM MT. Platform, cost, sign-up and replays are still open, so none of
  them appear here.
*/
export default function Community() {
  return (
    <section id="community" aria-labelledby="community-title" className="px-2 sm:px-4">
      <div className="mx-auto max-w-[90rem] rounded-[2.5rem] bg-tint px-4 py-20 ring-1 ring-line sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[80rem] gap-14 lg:grid-cols-12 lg:gap-12">
          <BlurFade inView direction="up" offset={14} duration={0.8} className="lg:col-span-5">
            <h2 id="community-title" className="text-[2.1rem] leading-[1.12] sm:text-[2.6rem]">
              Join the waitlist for the Functional Fourth Trimester community
            </h2>
            <p className="mt-5 max-w-[46ch] text-[1.1rem] text-muted">
              A place to ask questions, be heard and get real answers, without the trends and the noise. Add your email and you&apos;ll be the first to know when it opens.
            </p>
            <ul className="mt-10 grid gap-6">
              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-surface text-accent ring-1 ring-line">
                  <MessagesSquare aria-hidden="true" strokeWidth={1.5} className="size-5" />
                </span>
                <div>
                  <h3 className="text-[1.05rem]">Functional Fourth Trimester Circle</h3>
                  <p className="mt-1 text-muted">A Facebook group for new parents, started in November 2026.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-surface text-accent ring-1 ring-line">
                  <CalendarDays aria-hidden="true" strokeWidth={1.5} className="size-5" />
                </span>
                <div>
                  <h3 className="text-[1.05rem]">Functional Fourth Trimester Live</h3>
                  <p className="mt-1 text-muted">Weekly sessions on Wednesdays, 11:00 to 11:30 AM Mountain Time.</p>
                </div>
              </li>
            </ul>
          </BlurFade>

          <BlurFade inView direction="up" offset={20} delay={0.1} duration={0.9} className="lg:col-span-6 lg:col-start-7">
            <div className="rounded-[2rem] bg-[color-mix(in_oklab,var(--surface)_55%,transparent)] p-2 ring-1 ring-line">
              <div className="rounded-[calc(2rem-0.5rem)] bg-surface p-6 shadow-(--shadow) sm:p-9">
                <p className="font-serif text-[1.5rem] leading-snug text-heading">Save your spot</p>
                <p className="mt-2 text-muted">Just your email. No health questions, ever.</p>
                <div className="mt-8">
                  <SignupForm source="home-community" />
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
