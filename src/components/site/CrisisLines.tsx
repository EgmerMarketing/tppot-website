type CrisisLinesProps = {
  compact?: boolean;
};

export default function CrisisLines({ compact = false }: CrisisLinesProps) {
  if (compact) {
    return (
      <ul className="mt-4 space-y-3 font-serif text-base leading-relaxed text-black">
        <li>
          <strong className="font-sans text-[#0A3660]">Crisis:</strong>{" "}
          <a className="font-bold text-[#0A3660] underline" href="tel:988">Call 988</a> or{" "}
          <a className="font-bold text-[#0A3660] underline" href="sms:988">text 988</a>.
          Confidential, 24/7.
        </li>
        <li>
          <strong className="font-sans text-[#0A3660]">Emergency:</strong>{" "}
          <a className="font-bold text-[#0A3660] underline" href="tel:911">Call 911</a>.
        </li>
        <li>
          <strong className="font-sans text-[#0A3660]">Support line, not a crisis line:</strong>{" "}
          call or text{" "}
          <a className="font-bold text-[#0A3660] underline" href="tel:18338526262">1-833-852-6262</a>{" "}
          (1-833-TLC-MAMA), 24/7.
        </li>
      </ul>
    );
  }

  return (
    <ul className="space-y-6 font-serif text-lg leading-relaxed text-black">
      <li>
        <p className="font-sans text-2xl font-bold text-[#0A3660]">Call or text 988</p>
        <p className="mt-2">
          The 988 Suicide &amp; Crisis Lifeline is confidential and available 24/7. Call or text 988, any time, or start a chat on the official site.{" "}
          <a className="font-bold text-[#0A3660] underline" href="tel:988">Call 988</a>
          {" · "}
          <a className="font-bold text-[#0A3660] underline" href="sms:988">Text 988</a>
          {" · "}
          <a className="font-bold text-[#0A3660] underline" href="https://988lifeline.org/">
            988lifeline.org
          </a>
        </p>
      </li>
      <li>
        <p className="font-sans text-2xl font-bold text-[#0A3660]">
          National Maternal Mental Health Hotline, a support line
        </p>
        <p className="mt-2">
          Call or text 1-833-TLC-MAMA (1-833-852-6262). This is a support line, not a crisis line.
          If you are in crisis, use 988. HRSA describes the hotline as confidential and
          available 24/7 in English and Spanish, for pregnant people, new parents, and family
          members. TTY users can use their relay service or dial 711, then 1-833-852-6262.{" "}
          <a className="font-bold text-[#0A3660] underline" href="tel:18338526262">Call 1-833-852-6262</a>
          {" · "}
          <a className="font-bold text-[#0A3660] underline" href="sms:18338526262">Text 1-833-852-6262</a>
          {" · "}
          <a
            className="font-bold text-[#0A3660] underline"
            href="https://mchb.hrsa.gov/programs-impact/national-maternal-mental-health-hotline"
          >
            HRSA hotline page
          </a>
        </p>
      </li>
      <li>
        <p className="font-sans text-2xl font-bold text-[#0A3660]">Call 911 in an emergency</p>
        <p className="mt-2">
          If you, your baby, or someone with you may be in immediate danger,{" "}
          <a className="font-bold text-[#0A3660] underline" href="tel:911">call 911</a>.
        </p>
      </li>
      <li>
        <p className="font-sans text-2xl font-bold text-[#0A3660]">
          Postpartum Support International HelpLine
        </p>
        <p className="mt-2">
          PSI&apos;s HelpLine connects you with support and resources. It is not a crisis line.
          You leave a confidential message, and a trained volunteer returns your call or text.
          Call{" "}
          <a className="font-bold text-[#0A3660] underline" href="tel:18009444773">1-800-944-4773</a>{" "}
          and press 1 for Spanish or 2 for English. Text in English:{" "}
          <a className="font-bold text-[#0A3660] underline" href="sms:8009444773">800-944-4773</a>.
          Text in Spanish:{" "}
          <a className="font-bold text-[#0A3660] underline" href="sms:9712037773">971-203-7773</a>.{" "}
          <a className="font-bold text-[#0A3660] underline" href="https://www.postpartum.net/get-help/">
            postpartum.net/get-help
          </a>
        </p>
      </li>
    </ul>
  );
}
