export type ProfessionalHandout = {
  id: string;
  title: string;
  summary: string;
  file: string;
  gated: boolean;
};

/** Professional PDFs. Gated files are a soft gate: the file is public, but not linked until the form succeeds. */
export const PROFESSIONAL_HANDOUTS: ProfessionalHandout[] = [
  {
    id: "ot-adhd-assessments",
    title: "OT assessments for women with ADHD",
    summary:
      "How an occupational therapist can look at executive function, daily routines, sensory load, and signs that need a physician.",
    file: "/resources/ot-adhd-postpartum-assessments.pdf",
    gated: true,
  },
  {
    id: "adhd-postpartum-intake",
    title: "ADHD postpartum intake questionnaire",
    summary:
      "A clinical intake form covering ADHD history, executive function, sensory triggers, and daily living after birth.",
    file: "/resources/adhd-postpartum-intake-questionnaire.pdf",
    gated: true,
  },
  {
    id: "conversation-starters",
    title: "Postpartum care conversation starters",
    summary:
      "Questions providers can ask instead of “How are you?” so a new parent can say more than “I’m fine.”",
    file: "/resources/postpartum-care-conversation-starters.pdf",
    gated: true,
  },
  {
    id: "night-weaning-guide",
    title: "A gentle guide to night weaning",
    summary:
      "Written for healthcare professionals supporting families considering night weaning for babies 9 months and older.",
    file: "/resources/night-weaning-guide.pdf",
    gated: true,
  },
  {
    id: "ten-postpartum-questions",
    title: "10 most common postpartum questions",
    summary:
      "Ten questions for occupational therapists, from daily tasks and sleep to feeding posture, pelvic floor, and mood.",
    file: "/resources/10-most-common-postpartum-questions.pdf",
    gated: false,
  },
];

export function professionalHandout(id: string): ProfessionalHandout | undefined {
  return PROFESSIONAL_HANDOUTS.find((item) => item.id === id);
}

export const GATED_HANDOUT_PATHS = PROFESSIONAL_HANDOUTS.filter((item) => item.gated).map(
  (item) => item.file,
);
