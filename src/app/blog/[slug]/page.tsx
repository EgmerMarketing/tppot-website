import type { Metadata } from 'next';
import Link from 'next/link';
import ReaderContent from '@/components/ReaderContent';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return {
    title,
    alternates: { canonical: `https://thepostpartumot.com/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <>
      <ReaderContent title={title} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/blog" className="text-[#469695] font-semibold text-sm hover:underline mb-6 inline-block">← Back to Blog</Link>
        <h2 className="text-3xl md:text-4xl font-black text-[#0A3660] mb-4">{title}</h2>
        <p className="text-gray-500 font-lora italic text-sm mb-8">By Melissa O&apos;Neal, OTR/L</p>
        <div className="bg-gray-100 rounded-2xl p-8 text-center text-gray-400 italic">
          [Blog post content migration in progress — full content coming soon]
        </div>
      </div>
    </>
  );
}
