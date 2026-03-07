import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ReaderContent from '@/components/ReaderContent';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Blog | The Postpartum OT',
  description: 'Articles, insights, and practical guidance for clinicians and families navigating the postpartum period. From Melissa O\'Neal, OTR/L.',
  alternates: { canonical: `${company.url}/blog` },
};

const posts = [
  { title: 'How to Stop Second-Guessing Yourself', slug: 'stop-second-guessing-serve-moms-with-confidence', image: 'blog-stop-second-guessing.jpg', category: 'Confidence & Mindset', excerpt: "The families who need you don't need you to be perfect. They need you to be present. Here's how to move past self-doubt." },
  { title: "Why Knowing What to Do Isn't Enough: The Confidence Gap", slug: 'confidence-gap-postpartum-ots', image: 'blog-confidence-gap.jpg', category: 'Confidence & Mindset', excerpt: "You have the knowledge. What's missing is confidence. How to bridge the gap and start helping families today." },
  { title: 'From Overwhelmed to In Control', slug: 'build-confidence-postpartum-care-professional', image: 'blog-overwhelmed-to-in-control.jpg', category: 'Confidence & Mindset', excerpt: 'Feeling paralyzed about starting your postpartum practice? A step-by-step guide to building confidence through action.' },
  { title: 'The OT Advantage: Mom and Baby Classes', slug: 'ot-advantage-mom-baby-classes', image: 'blog-ot-advantage-mom-baby-classes.jpg', category: 'Postpartum Practice Building', excerpt: 'Why OTs are perfectly positioned to run mom and baby classes — and how to get started.' },
  { title: 'Why the Questions We Ask Families Matter', slug: 'questions-we-ask-families-matter', image: 'blog-questions-we-ask-families.jpg', category: 'Clinical Skills', excerpt: 'Transform routine check-ins into meaningful conversations with postpartum families.' },
  { title: 'Self-Settling vs. Self-Soothing', slug: 'self-settling-vs-self-soothing', image: 'blog-self-settling-vs-self-soothing.jpg', category: 'Clinical Skills', excerpt: "The neuroscience behind infant sleep — why 'self-soothing' is a myth and what clinicians should teach families instead." },
  { title: 'Getting Paid for Your Postpartum OT Services', slug: 'getting-paid-postpartum-ot-services', image: 'melissa-oneal-postpartum-ot-founder.jpg', category: 'Postpartum Practice Building', excerpt: "Can you bill for postpartum OT? Yes. Here's your guide to insurance, private pay, and hybrid billing models." },
  { title: 'The Invisible Weight: Mental Load of New Motherhood', slug: 'invisible-weight-mental-load-motherhood', image: 'blog-invisible-weight-mental-load.jpg', category: 'For Moms & Caregivers', excerpt: 'The mental load of new motherhood goes far beyond diaper changes. Understanding the cognitive burden and how to support it.' },
  { title: 'Creating Moments That Matter: Supporting New Mothers', slug: 'creating-moments-that-matter-new-mothers', image: 'blog-creating-moments-that-matter.jpg', category: 'Clinical Skills', excerpt: 'Practical strategies for healthcare providers to create meaningful connections with postpartum families.' },
  { title: 'Being YOU is Your Superpower: Why Authenticity Beats Conformity', slug: 'authenticity-beats-conformity-business', image: 'blog-authenticity-beats-conformity.jpg', category: 'Postpartum Practice Building', excerpt: "In a crowded market, your unique approach to postpartum care isn't a limitation — it's your superpower." },
  { title: 'The Power of Showing Up: Why OTs Are Needed in Postpartum Care', slug: 'power-of-showing-up-ots-postpartum', image: 'blog-power-of-showing-up.png', category: 'Postpartum Practice Building', excerpt: "Imposter syndrome holding you back? Your OT training and desire to help are more powerful than your doubts." },
  { title: 'Welcome to The Postpartum OT', slug: 'welcome-to-the-postpartum-ot', image: 'blog-power-of-showing-up.png', category: 'About', excerpt: "Meet Melissa O'Neal, OTR/L, and discover how The Postpartum OT is transforming care for families." },
];

const categoryColors: Record<string, string> = {
  'Confidence & Mindset': 'bg-purple-100 text-purple-700',
  'Postpartum Practice Building': 'bg-teal-100 text-teal-700',
  'Clinical Skills': 'bg-blue-100 text-blue-700',
  'For Moms & Caregivers': 'bg-pink-100 text-pink-700',
  'About': 'bg-gray-100 text-gray-700',
};

export default function BlogPage() {
  return (
    <>
      <ReaderContent title="The Postpartum OT Blog" />

      <section className="bg-[#0A3660] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">From the Blog</h2>
          <p className="text-gray-200 font-lora italic">Insights for clinicians and families navigating the postpartum world.</p>
        </div>
      </section>

      <section className="py-16 bg-[#FEFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`/images/${post.image}`}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                    {post.category}
                  </span>
                  <h3 className="font-bold text-[#0A3660] mt-3 mb-2 leading-snug group-hover:text-[#469695] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-lora leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
