import { UPDATED } from "@/lib/site";
import NeedsMelissa from "@/components/site/NeedsMelissa";
import { LearnMore } from "@/components/site/Scan";

export default function Byline() {
  return (
    <div className="mt-10 border-t border-[#0A3660]/15 pt-6">
      <p className="font-sans text-base font-bold text-[#0A3660]">
        By Melissa O&apos;Neal, OTR/L
      </p>
      <p className="mt-1 font-serif text-base text-black">
        Updated <time dateTime={UPDATED}>November 26, 2026</time>. Not marked as clinically reviewed.
      </p>
      <LearnMore summary="Review date">
        <NeedsMelissa>
          [NEEDS MELISSA: reviewed date. This page is not marked as clinically reviewed until you confirm a date.]
        </NeedsMelissa>
      </LearnMore>
    </div>
  );
}
