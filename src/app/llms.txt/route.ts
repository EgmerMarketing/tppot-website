export function GET() {
  const content = `# The Postpartum OT

> Postpartum support for new moms and dads from an occupational therapist, Melissa O'Neal, OTR/L.

## What this site covers
- Postpartum sleep deprivation and infant sleep
- Feeding routines and pumping
- Newborn daily routines
- Postpartum recovery and daily tasks
- Postpartum mental load and identity
- Help for dads and partners

## Podcast
Functional Fourth Trimester: honest conversations about life after a baby, hosted by Melissa O'Neal, OTR/L. Available on Apple Podcasts and Spotify.

## Important
The Postpartum OT shares educational information. It is not medical or professional advice. In crisis, call or text 988; in an emergency, call 911.

## Contact
- Email: hello@thepostpartumot.com
- Website: https://thepostpartumot.com`;

  return new Response(content, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
