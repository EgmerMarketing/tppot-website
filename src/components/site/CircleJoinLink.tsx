import { CIRCLE_FACEBOOK_URL } from "@/lib/site";

/** Secondary to the email waitlist. The group is private and asks a few questions. */
export default function CircleJoinLink() {
  return (
    <div className="mt-4">
      <p className="font-serif text-base leading-relaxed text-black">
        The Circle is a private Facebook group. A few short questions help keep it a safe space for parents.
      </p>
      <p className="mt-3">
        <a
          href={CIRCLE_FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[#0A3660] bg-white px-5 py-3 font-sans text-sm font-bold text-[#0A3660]"
        >
          Request to join
        </a>
      </p>
    </div>
  );
}
