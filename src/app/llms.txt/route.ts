export function GET() {
  const content = `# The Postpartum OT

> Educational postpartum support for moms, dads, and caregivers from Melissa O'Neal, OTR/L. Not medical advice.

## About
Melissa O'Neal, OTR/L, is the occupational therapist behind The Postpartum OT (Postpartum OT LLC). The site helps parents and caregivers with the ordinary hard parts of life after birth: sleep, feeding routines, recovery, daily life, mental load, and support from partners and family. It does not publish a years-of-experience number, prices, or a client count.

## Important
This is education, not medical or professional advice. In a crisis, call or text 988. In an emergency, call 911. The National Maternal Mental Health Hotline, 1-833-852-6262 (1-833-TLC-MAMA), is a 24/7 support line, not a crisis line. Postpartum Support International's HelpLine is 1-800-944-4773. You leave a message and a volunteer returns it. See https://thepostpartumot.com/need-help-now

## Pages
- Start Here: https://thepostpartumot.com/start-here
- Topics: https://thepostpartumot.com/topics
- What is postpartum occupational therapy: https://thepostpartumot.com/what-is-postpartum-occupational-therapy
- Podcast, Functional Fourth Trimester: https://thepostpartumot.com/podcast
- Community waitlist: https://thepostpartumot.com/community
- Free resources: https://thepostpartumot.com/resources
- FAQ: https://thepostpartumot.com/faq
- About: https://thepostpartumot.com/about
- Blog: https://thepostpartumot.com/blog
- For professionals (footer only): https://thepostpartumot.com/for-professionals
- Contact: https://thepostpartumot.com/contact

## Contact
- Email: hello@thepostpartumot.com
- Website: https://thepostpartumot.com`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
