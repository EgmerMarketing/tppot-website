import type { Metadata } from "next";
import Link from "next/link";
import FamilyGuide from "@/components/site/FamilyGuide";

const title = "Better questions than how are you?";
const description =
  "Questions partners, family, and friends can ask a new mom, rewritten from a provider handout. Not a script for treatment.";

export const metadata: Metadata = { title, description };

export default function BetterQuestionsPage() {
  return (
    <FamilyGuide
      title={title}
      path="/resources/better-questions"
      lede="Many new moms say “I’m fine” when they are not. These questions come from a handout for healthcare providers. Partners, family, and friends can use the same idea: ask something open, then leave room for the answer."
    >
      <h2>How to ask</h2>
      <ul>
        <li>Lead with care, not curiosity.</li>
        <li>Silence after the question is okay.</li>
        <li>Notice tone and body, not only the words.</li>
        <li>You can share a little of your own day. Connection goes both ways.</li>
      </ul>

      <h2>Ten questions from the handout</h2>
      <ol>
        <li>“What has surprised you most about these first few weeks?”</li>
        <li>“How is your sleep, not just the baby’s, but yours?”</li>
        <li>“What moments feel the hardest right now?”</li>
        <li>“What do you find yourself worrying about the most?”</li>
        <li>“Who has been the most helpful to you since the baby arrived?”</li>
        <li>“Have you been able to do something just for yourself, even for a few minutes?”</li>
        <li>“What does a typical day look like for you right now?”</li>
        <li>“What part of your day do you look forward to the most?”</li>
        <li>“Have you noticed any changes in your mood or energy?”</li>
        <li>“If you could wave a magic wand, what would you change about this season?”</li>
      </ol>

      <h2>A softer way to say the usual questions</h2>
      <ul>
        <li>Instead of “How are you doing?” try “What’s one moment that stood out today?”</li>
        <li>Instead of “Are you getting enough sleep?” try “What’s been the most surprising part of your nights?”</li>
        <li>Instead of “Are you breastfeeding?” try “What has feeding been like so far?” Feeding takes many forms.</li>
        <li>Instead of “Are you feeling overwhelmed?” try “What’s been weighing on you this week?”</li>
        <li>Instead of “Are you back to your normal routine?” try “What’s working, and what still feels hard?”</li>
        <li>Instead of “Do you feel like yourself again?” try “What’s something that feels different in this season?”</li>
        <li>Instead of “When will you go back to work?” try “What thoughts are coming up about that change?”</li>
        <li>Instead of asking a dad “Are you helping?” try “What roles have you stepped into most?”</li>
        <li>Instead of “Are you sleeping okay with the baby in the house?” try “What’s been the biggest change to your nights?”</li>
        <li>Instead of “Are you enjoying fatherhood?” try “What’s one thing that has surprised you about being a dad?”</li>
        <li>Instead of “Is your older child adjusting?” try “What’s been the sweetest, funniest, or hardest thing they’ve done?”</li>
        <li>Instead of “Does your family help?” try “What’s been helpful, or surprising, about how they stepped in?”</li>
      </ul>
      <p>The handout says partners, siblings, and extended family are adjusting too. You can aim a question at them as well.</p>

      <h2>If she says it is hard</h2>
      <p>You do not have to fix it. The handout’s next steps are:</p>
      <ul>
        <li>Validate: “I hear you, and what you’re feeling is real.”</li>
        <li>Normalize: “Many moms go through this. You’re not alone.”</li>
        <li>
          Connect her with support if she wants it. If you are worried about safety, or she might be in crisis, go to{" "}
          <Link href="/need-help-now">Need Help Now</Link>. Call emergency services if someone may be in immediate danger.
        </li>
      </ul>
    </FamilyGuide>
  );
}
