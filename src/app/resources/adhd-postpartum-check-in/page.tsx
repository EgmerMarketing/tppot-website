import type { Metadata } from "next";
import Link from "next/link";
import FamilyGuide from "@/components/site/FamilyGuide";

const title = "ADHD postpartum check-in";
const description =
  "A reflection worksheet, rewritten from a clinical intake, that a parent can fill out and bring to a provider. Not a diagnosis and not a screening tool.";

export const metadata: Metadata = { title, description };

const prompts = [
  "How are you experiencing this season right now?",
  "What feels most challenging in your daily routine?",
  "What strengths do you bring to caring for this baby?",
  "Starting tasks: what is hard to begin?",
  "Time: where does the day slip?",
  "Focus: what pulls you away?",
  "Finishing: what stays half done?",
  "Memory: what do you lose track of?",
  "Sound, touch, light, or clothing: what wears you out?",
  "Talking with people: interrupting, missing cues, or worrying about judgment.",
  "Mood, worry, sadness, feeling rejected, or feeling overwhelmed.",
  "Sleep, feeling not up to this, loneliness, or childcare tasks.",
  "Routines, caring for yourself, the house, and any work you are doing.",
  "Who can help: a partner, family, friends, or a group.",
  "What do you most want a provider to know?",
];

export default function AdhdCheckInPage() {
  return (
    <FamilyGuide
      title={title}
      path="/resources/adhd-postpartum-check-in"
      lede="This is a reflection you can write and take to your own provider. It is not a diagnosis. It is not a screening tool. It does not score you. Medication is not on this page."
    >
      <p>
        The prompts come from a clinical intake about ADHD and postpartum daily life. Use them only if you want words for a conversation. Nothing you type or write here is sent to this website.
      </p>
      <p>
        If you might act on thoughts of harm, stop and open{" "}
        <Link href="/need-help-now">Need Help Now</Link>. If home safety, sleep, or basic care feels beyond what you can manage, talk with your provider.
      </p>
      <ol className="check-in">
        {prompts.map((prompt) => (
          <li key={prompt}>
            <p className="font-sans text-base font-bold text-[#0A3660]">{prompt}</p>
            <div className="write-line" />
            <div className="write-line" />
          </li>
        ))}
      </ol>
    </FamilyGuide>
  );
}
