"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import NeedsMelissa from "@/components/site/NeedsMelissa";

type Handout = {
  title: string;
  summary: string;
  stage: string;
  topic: string;
  audience: string;
  safety?: boolean;
};

const handouts: Handout[] = [
  {
    title: "Postpartum plan template",
    summary: "A one-page plan for the first weeks: who is on duty, feeding, and rest.",
    stage: "Weeks 0 to 6",
    topic: "Daily life",
    audience: "Parents",
  },
  {
    title: "Night-shift card",
    summary: "A card for two adults to trade a block of the night.",
    stage: "Weeks 0 to 6",
    topic: "Sleep",
    audience: "Parents",
  },
  {
    title: "Feeding routine sheet",
    summary: "Who does which part of feeding. Not a latch or supply guide.",
    stage: "Weeks 0 to 6",
    topic: "Feeding",
    audience: "Parents",
  },
  {
    title: "Note for grandparents and caregivers",
    summary: "How to ask which single job would help today.",
    stage: "Any time",
    topic: "Partners and family",
    audience: "Grandparents and caregivers",
  },
  {
    title: "Back-to-work questions",
    summary: "Three questions to settle before the first day back. Not legal advice.",
    stage: "Months 3 to 12",
    topic: "Daily life",
    audience: "Parents",
  },
  {
    title: "Partner check-in",
    summary: "A short check on the non-birthing parent's sleep and mood, plus where to call.",
    stage: "Any time",
    topic: "Partners and family",
    audience: "Dads and partners",
  },
  {
    title: "Postpartum safety and crisis resources",
    summary: "988, 911, the maternal mental health support line, and the PSI HelpLine. Always open.",
    stage: "Any time",
    topic: "Safety",
    audience: "Everyone",
    safety: true,
  },
];

const stages = ["All stages", "Any time", "Weeks 0 to 6", "Months 3 to 12"];
const topics = ["All topics", "Daily life", "Sleep", "Feeding", "Partners and family", "Safety"];
const audiences = ["Everyone", "Parents", "Dads and partners", "Grandparents and caregivers"];

function Chip({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`inline-flex min-h-11 items-center rounded-full px-4 font-sans text-sm font-bold ${
        pressed ? "bg-[#0A3660] text-white" : "border-2 border-[#0A3660] bg-white text-[#0A3660]"
      }`}
    >
      {children}
    </button>
  );
}

export default function ResourceLibrary() {
  const [stage, setStage] = useState(stages[0]);
  const [topic, setTopic] = useState(topics[0]);
  const [audience, setAudience] = useState(audiences[0]);

  const visible = useMemo(
    () =>
      handouts.filter((item) => {
        const stageOk = stage === "All stages" || item.stage === stage;
        const topicOk = topic === "All topics" || item.topic === topic;
        const audienceOk = audience === "Everyone" || item.audience === audience || item.audience === "Everyone";
        return stageOk && topicOk && audienceOk;
      }),
    [stage, topic, audience],
  );

  return (
    <div id="library">
      <div className="space-y-4">
        <fieldset>
          <legend className="mb-2 font-sans text-sm font-bold text-[#0A3660]">Stage</legend>
          <div className="flex flex-wrap gap-2">
            {stages.map((item) => (
              <Chip key={item} pressed={stage === item} onClick={() => setStage(item)}>
                {item}
              </Chip>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="mb-2 font-sans text-sm font-bold text-[#0A3660]">Topic</legend>
          <div className="flex flex-wrap gap-2">
            {topics.map((item) => (
              <Chip key={item} pressed={topic === item} onClick={() => setTopic(item)}>
                {item}
              </Chip>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="mb-2 font-sans text-sm font-bold text-[#0A3660]">Audience</legend>
          <div className="flex flex-wrap gap-2">
            {audiences.map((item) => (
              <Chip key={item} pressed={audience === item} onClick={() => setAudience(item)}>
                {item}
              </Chip>
            ))}
          </div>
        </fieldset>
      </div>

      <ul className="mt-8 grid gap-4">
        {visible.map((item) => (
          <li key={item.title} className="rounded-2xl border border-[#0A3660]/15 bg-white p-5">
            <p className="font-sans text-xs font-bold uppercase tracking-wide text-[#2f6b6a]">
              {item.topic} · {item.audience}
            </p>
            <h3 className="mt-2 font-sans text-xl font-bold text-[#0A3660]">{item.title}</h3>
            <p className="mt-2 font-serif text-base leading-relaxed text-black">{item.summary}</p>
            {item.safety ? (
              <p className="mt-4">
                <Link href="/need-help-now" className="font-sans text-sm font-bold text-[#0A3660] underline">
                  Open Need Help Now. No signup.
                </Link>
              </p>
            ) : (
              <>
                <NeedsMelissa>
                  [NEEDS MELISSA: handout file for “{item.title}”. The file is not uploaded, and this card is not a download.]
                </NeedsMelissa>
                <button
                  type="button"
                  disabled
                  className="inline-flex min-h-11 cursor-not-allowed items-center rounded-xl border-2 border-[#0A3660]/30 px-4 font-sans text-sm font-bold text-[#0A3660]"
                >
                  Handout file not added yet
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      {visible.length === 0 && (
        <p className="mt-6 font-serif text-base text-black">Nothing in that combination yet. Try Safety, which stays open.</p>
      )}
    </div>
  );
}
