export function GET() {
  const content = `# The Postpartum OT

> Personal mentorship for occupational therapists building postpartum practices.

## About
The Postpartum OT was founded by Melissa O'Neal, OTR/L, PCES, an occupational therapist with over 10 years of clinical experience in postpartum care. The program offers 1:1 mentorship, group support, and a community of 600+ OTs who are building or growing postpartum practices.

## Services
- New Practitioners Mentorship: 1:1 mentorship for OTs starting a postpartum practice
- Growing Practices Mentorship: Strategic guidance for OTs scaling an existing practice
- Community Membership: Free community of 600+ occupational therapists

## Key Topics
- Postpartum care and recovery
- Matrescence (the identity transition of becoming a mother)
- Infant development and feeding
- Maternal mental health
- Practice building for OTs
- Fourth trimester support

## Podcast
The Functional Fourth Trimester: Weekly conversations about building a postpartum practice. Available on Apple Podcasts and Spotify.

## Contact
- Email: hello@thepostpartumot.com
- Website: https://thepostpartumot.com`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
