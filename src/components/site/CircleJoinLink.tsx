import { CIRCLE_FACEBOOK_URL } from "@/lib/site";

/** Secondary to the email waitlist. Three questions are required before a request is approved. */
export default function CircleJoinLink() {
  return (
    <div className="mt-4">
      <p className="mt-3">
        <a
          href={CIRCLE_FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[#0A3660] bg-white px-5 py-3 font-sans text-base font-bold text-[#0A3660]"
        >
          Request to join
        </a>
      </p>
      <p className="mt-3 font-serif text-base leading-relaxed text-black">
        Answer three quick questions so we can keep the group safe and without promotion. Approval depends on those answers. Parents, caregivers, and healthcare and birth professionals are welcome.
      </p>
    </div>
  );
}
