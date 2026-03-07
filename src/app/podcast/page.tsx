import type { Metadata } from 'next';
import ReaderContent from '@/components/ReaderContent';
import Button from '@/components/Button';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Functional Fourth Trimester Podcast',
  description: 'Listen to the Functional Fourth Trimester podcast with Melissa O\'Neal, OTR/L. Real conversations about postpartum care, practice building, and supporting families.',
  alternates: { canonical: `${company.url}/podcast` },
};

export default function PodcastPage() {
  return (
    <>
      <ReaderContent title="Functional Fourth Trimester Podcast" />

      <section className="bg-[#0A3660] text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Functional Fourth Trimester</h2>
          <p className="text-lg font-lora italic text-gray-200 mb-8">
            Honest conversations about postpartum care, practice building, and showing up for families when it matters most.
          </p>
          <Button href={company.social.spotify} external>Listen on Spotify</Button>
        </div>
      </section>

      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-[#0A3660] mb-8">Listen Now</h2>
          <iframe
            src={`https://open.spotify.com/embed/show/${company.spotifyShowId}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
            title="Functional Fourth Trimester podcast on Spotify"
          />
          <div className="flex gap-4 mt-8">
            <Button href={company.social.spotify} external variant="primary">Spotify</Button>
            <Button href="#" variant="ghost">Apple Podcasts [PLACEHOLDER]</Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-[#0A3660] mb-6">About the Podcast</h2>
          <p className="text-gray-700 font-lora leading-relaxed mb-4">
            The Functional Fourth Trimester is a weekly podcast for healthcare professionals and families navigating the postpartum period. Hosted by Melissa O&apos;Neal, OTR/L, each episode dives into the real work of postpartum care — clinically, practically, and personally.
          </p>
          <p className="text-gray-700 font-lora leading-relaxed">
            Whether you&apos;re a clinician building your postpartum practice or a parent searching for answers, there&apos;s something here for you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#469695] text-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black mb-4">Want to Be a Guest?</h2>
          <p className="font-lora italic mb-6 text-white/90">We&apos;d love to hear your story. Reach out with your topic idea.</p>
          <Button href="/contact" variant="secondary">Get in Touch</Button>
        </div>
      </section>
    </>
  );
}
