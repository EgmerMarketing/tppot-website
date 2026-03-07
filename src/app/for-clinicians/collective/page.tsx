import type { Metadata } from 'next';
import { MessageCircle, HelpCircle, Share2, Users, Briefcase, Target } from 'lucide-react';
import ReaderContent from '@/components/ReaderContent';
import Button from '@/components/Button';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'The Postpartum Collective | Free Community for Postpartum Clinicians',
  description: 'Join 600+ healthcare professionals in The Postpartum Collective — a free Facebook community for clinicians passionate about transforming postpartum care.',
  alternates: { canonical: `${company.url}/for-clinicians/collective` },
};

export default function CollectivePage() {
  return (
    <>
      <ReaderContent title="The Postpartum Collective — Free Community for Postpartum Clinicians" />

      {/* Hero */}
      <section className="bg-[#469695] text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">You Don&apos;t Have to Figure This Out Alone</h2>
          <p className="text-lg font-lora italic text-white/90 mb-8">
            Join 600+ clinicians who are building the future of postpartum care — together.
          </p>
          <Button href={company.collectiveUrl} external variant="secondary">
            Join the Postpartum Collective — It&apos;s Free
          </Button>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] mb-6">A Community Built for You</h2>
          <p className="text-gray-700 font-lora leading-relaxed mb-4">
            The Postpartum Collective is a free Facebook community where healthcare professionals passionate about postpartum care come together to learn, share, and support each other.
          </p>
          <p className="text-gray-700 font-lora leading-relaxed">
            Whether you&apos;re just exploring the idea of postpartum work or you&apos;ve been doing it for years, this is your space.
          </p>
        </div>
      </section>

      {/* What&apos;s inside */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] text-center mb-12">Inside the Collective</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <MessageCircle size={28} className="text-[#469695]" />, title: 'Weekly Discussions', body: 'On postpartum topics that matter to your practice and your patients.' },
              { icon: <HelpCircle size={28} className="text-[#469695]" />, title: 'Q&A with Melissa', body: 'Ask anything about postpartum care or practice building — directly to the source.' },
              { icon: <Users size={28} className="text-[#469695]" />, title: 'Peer Support', body: 'A community of clinicians who understand your journey and push you forward.' },
              { icon: <Share2 size={28} className="text-[#469695]" />, title: 'Resource Sharing', body: 'Tools, articles, research, and real-world strategies shared by members.' },
              { icon: <Target size={28} className="text-[#469695]" />, title: 'Accountability', body: 'A community that holds you to your goals and celebrates your wins.' },
              { icon: <Briefcase size={28} className="text-[#469695]" />, title: 'Opportunities', body: 'Job postings, collaboration requests, and connections with like-minded professionals.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#FEFDF8] rounded-2xl p-6 border border-gray-100">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#0A3660] mb-2">{item.title}</h3>
                <p className="text-gray-600 font-lora text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who&apos;s inside */}
      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A3660] mb-8">Who You&apos;ll Meet</h2>
          <p className="text-gray-600 font-lora mb-6">All united by one thing: a belief that families deserve better postpartum support.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['Occupational therapists', 'Physical therapists', 'Speech-language pathologists', 'Nurses and nurse practitioners', 'Midwives and doulas', 'Lactation consultants', 'Mental health professionals', 'Students exploring postpartum care'].map((role) => (
              <div key={role} className="bg-white rounded-lg px-4 py-3 border border-gray-100 text-sm text-gray-700 font-semibold">{role}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#0A3660] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-12">What Members Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <p className="font-lora italic text-gray-200 mb-4">[PLACEHOLDER — awaiting client testimonials]</p>
                <p className="font-bold text-[#469695] text-sm">— Name, OTR/L</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#469695] text-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Join Us — It&apos;s Free</h2>
          <p className="font-lora italic mb-8 text-white/90">
            The Postpartum Collective is completely free. No catch. No upsell required. Just a community of clinicians who care.
          </p>
          <Button href={company.collectiveUrl} external variant="secondary">
            Join the Postpartum Collective
          </Button>
        </div>
      </section>

      {/* Soft upsell */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-[#0A3660] mb-4">Want to Go Deeper?</h2>
          <p className="text-gray-600 font-lora mb-6">
            The Collective is a great starting point. When you&apos;re ready for personalized mentorship and hands-on training, we&apos;re here for that too.
          </p>
          <Button href="/for-clinicians/mentorship" variant="primary">Explore Mentorship</Button>
        </div>
      </section>
    </>
  );
}
