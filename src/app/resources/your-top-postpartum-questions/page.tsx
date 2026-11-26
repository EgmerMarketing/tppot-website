import type { Metadata } from "next";
import Link from "next/link";
import FamilyGuide from "@/components/site/FamilyGuide";

const title = "Your top postpartum questions, answered";
const description =
  "Plain-language answers, from an occupational therapy handout, about daily life, sleep, feeding posture, pain, pelvic floor, and mood after birth. Not medical advice.";

export const metadata: Metadata = { title, description };

export default function TopQuestionsPage() {
  return (
    <FamilyGuide
      title={title}
      path="/resources/your-top-postpartum-questions"
      lede="These answers come from a handout written for occupational therapists. They describe what that kind of help can look like. They are not a plan for your body."
    >
      <h2>What can an occupational therapist help with after birth?</h2>
      <p>
        The daily jobs: bathing, meals, rest, and caring for the baby. The handout also names muscle and joint pain, mood, sleep habits, and safer ways to care for a baby. The aim is to make the change into this season more workable for you and the baby.
      </p>

      <h2>What about mood?</h2>
      <p>
        An occupational therapist may help with stress, a simple daily rhythm, and ways to slow down. They may also notice signs of depression or anxiety. That is a reason to talk with your own provider, not a diagnosis from this page.
      </p>
      <p>
        If you might act on thoughts of harm, or you are scared, use{" "}
        <Link href="/need-help-now">Need Help Now</Link>.
      </p>

      <h2>What about sleep?</h2>
      <p>
        The handout says a realistic sleep rhythm can include changes to the room, ways to settle your body, and ways to work with fatigue. It does not promise a full night.
      </p>

      <h2>What about feeding?</h2>
      <p>
        A lactation consultant is the person for latch and milk supply. An occupational therapist can look at posture, how you hold the baby, and upper-body tiredness or pain while you feed. Some therapists take extra lactation training. This page does not.
      </p>

      <h2>What about pain, lifting, and pelvic floor?</h2>
      <p>
        The handout says an occupational therapist may suggest how to set up feeding, diaper changes, and lifting so they cost less. Some, with extra training, work on pelvic-floor strength, leaking, and moving more easily. Cesarean recovery and pelvic pain stay with your own provider. This site does not give those exercises.
      </p>

      <h2>How long does recovery take?</h2>
      <p>
        The handout says healing takes time and is different for each person. There is no single clock on this page.
      </p>

      <h2>Where can you look for company?</h2>
      <p>
        The handout names support groups, online resources, and community programs, plus listening when feelings are heavy. If that is where you are, talk with your provider, and use Need Help Now if you need someone right now.
      </p>
    </FamilyGuide>
  );
}
