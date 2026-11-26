import type { Metadata } from "next";
import Link from "next/link";
import FamilyGuide from "@/components/site/FamilyGuide";

const title = "ADHD and new parenthood: practical support";
const description =
  "Practical ideas from an occupational therapy handout about routines, the home setup, fatigue, sensory load, and getting tasks started after birth. Not a diagnosis and not medical advice.";

export const metadata: Metadata = { title, description };

export default function AdhdSupportPage() {
  return (
    <FamilyGuide
      title={title}
      path="/resources/adhd-and-new-parenthood"
      lede="This page rewrites an occupational therapy handout about ADHD and postpartum daily life. It is about the setup of your day. It does not assess you, and it does not say whether you have ADHD."
    >
      <h2>What the handout says gets harder</h2>
      <p>Sleep loss can make planning, starting, and finishing harder. The handout also names the daily rhythm, how the rooms are set up, body and mind fatigue, coordination, sensory load, and stress.</p>

      <h2>Set up one zone</h2>
      <ul>
        <li>Pick one spot: feeding, diapers, or the things you use to get yourself ready.</li>
        <li>Keep what you use first within reach.</li>
        <li>Put a second set of essentials where you actually stand, not only in one cupboard.</li>
        <li>Use color, pictures, or open storage so you can see the thing you need.</li>
        <li>For sleep, the handout suggests a plainer space with less to look at.</li>
      </ul>
      <p>A feeding station means supplies within arm’s reach. A diaper spot can have a visible list. A bath can keep towels, clothes, and diapers in the bathroom.</p>

      <h2>One small routine</h2>
      <p>The handout says to map one sequence, such as morning, a feed, or bedtime.</p>
      <ul>
        <li>Break it into pieces you can see.</li>
        <li>Notice when your energy is higher and when it drops.</li>
        <li>Leave room to change the plan.</li>
        <li>Tie a new step to something you already do.</li>
        <li>Give the sequence a clear start and a clear end.</li>
        <li>The handout suggests trying it for about 3 days, then adjusting.</li>
      </ul>

      <h2>Sensory load and fatigue</h2>
      <p>Ideas the handout lists for lowering input: less sound, a simpler view, and softer clothing. Ideas it lists for seeking input: movement, and deep pressure such as a hug.</p>
      <p>For a night feed, it suggests dim light, white noise, a supportive seat, cozy clothes, and a weighted blanket on your lap if that feels okay to you.</p>
      <p>When crying is a lot, it suggests a hug from someone you trust, gum or a straw, and a breathing pattern you already know.</p>
      <p>It also suggests a quieter corner at home, and a 1 or 2 minute reset between hard tasks.</p>

      <h2>Starting and shrinking a task</h2>
      <p>The handout’s energy ideas are pace, plan around the energy you have, choose what matters first, and set up your body so the task costs less.</p>
      <ul>
        <li>List the steps. Cross off steps you can skip.</li>
        <li>Do prep when energy is higher. The meal example is pre-chopped food or a one-pot meal.</li>
        <li>Cut decisions: supplies already in the spot.</li>
        <li>A visual timer, buffers, and doing a task beside another person are named as time supports. The handout’s time note is to estimate, then double it.</li>
      </ul>

      <h2>When to talk with your provider</h2>
      <p>The professional handout says to notify a physician for:</p>
      <ul>
        <li>Signs of postpartum depression or anxiety.</li>
        <li>A home that does not feel safe.</li>
        <li>Sleep loss that is getting in the way of functioning.</li>
        <li>Basic care for yourself or the baby not happening.</li>
        <li>Any talk of harm to yourself or someone else. Use <Link href="/need-help-now">Need Help Now</Link> now.</li>
      </ul>
      <p>This page is general information from that handout. It is not medical advice, a diagnosis, or a treatment plan.</p>
    </FamilyGuide>
  );
}
