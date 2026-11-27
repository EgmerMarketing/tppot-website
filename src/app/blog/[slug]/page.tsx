import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlugs, blogPosts } from "@/content/blog";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";
import { marked } from "marked";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://thepostpartumot.com/blog/${slug}`,
    },
  };
}

function formatContent(content: string): string {
  // The page already renders the post title as the only H1. Drop a leading
  // markdown title so the article body does not add a second one.
  const withoutLeadingTitle = content.replace(/^#\s+[^\n]+\n+/, "");
  const html = marked(withoutLeadingTitle, { async: false }) as string;
  return html
    .replace(/<h2>/g, '<h2 class="text-2xl font-bold text-[#0A3660] mt-10 mb-4 font-sans">')
    .replace(/<h3>/g, '<h3 class="text-xl font-bold text-[#0A3660] mt-8 mb-3 font-sans">')
    .replace(/<h4>/g, '<h4 class="text-lg font-bold text-[#0A3660] mt-6 mb-2 font-sans">')
    .replace(/<p>/g, '<p class="max-w-[70ch] text-lg font-normal leading-[1.6] text-black mb-6 font-serif">')
    .replace(/<ul>/g, '<ul class="list-disc list-inside mb-6 space-y-2">')
    .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-6 space-y-2">')
    .replace(/<li>/g, '<li class="text-black font-serif">')
    .replace(/<strong>/g, '<strong class="text-[#0A3660] font-semibold">')
    .replace(/<a href="/g, '<a class="text-[#0A3660] underline" href="')
    .replace(/<hr>/g, '<hr class="my-8 border-[#E6F0F0]">')
    .replace(/<em>/g, '<em class="font-bold not-italic text-[#2f6b6a]">')
    .replace(/<blockquote>/g, '<blockquote class="max-w-[70ch] border-l-2 border-[#469695] pl-5 my-6 text-lg font-normal leading-[1.6]">')
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  // If not enough same-category posts, fill with recent posts
  if (relatedPosts.length < 3) {
    const remaining = blogPosts
      .filter((p) => p.slug !== post.slug && !relatedPosts.includes(p))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...remaining);
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: "https://thepostpartumot.com" },
        { name: "Blog", url: "https://thepostpartumot.com/blog" },
        { name: post.title, url: `https://thepostpartumot.com/blog/${slug}` },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        url: `https://thepostpartumot.com/blog/${slug}`,
        keywords: [post.category, "postpartum", "occupational therapy"],
      })) }} />

      {/* Hero */}
      <section className="band-teal-deep relative bg-teal-deep pb-20 pt-16 lg:pb-28 lg:pt-20">
        <div className="relative max-w-[720px] mx-auto px-6">
          <Link
            href="/blog"
            className="mb-6 inline-flex min-h-11 items-center font-sans text-base font-bold text-white underline"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="mb-5">
            <span className="rounded bg-white px-3 py-1 font-sans text-base font-bold text-[#0A3660]">
              {post.category}
            </span>
          </div>

          <h1 className="mb-4 font-sans text-3xl font-bold leading-tight text-white lg:text-4xl">
            {post.title}
          </h1>
          <p className="mb-6 font-serif text-base text-white">
            Educational information, not medical or professional advice.
          </p>

          <div className="flex items-center gap-3 font-sans text-base text-white">
            <span>By Melissa O&apos;Neal, OTR/L</span>
            <span aria-hidden="true">|</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[720px] mx-auto px-6">
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />

          {/* CTA */}
          <div className="mt-12 p-8 bg-[#E6F0F0] rounded-2xl">
            <p className="mb-4 font-serif text-lg text-black">
              Listen to the podcast, or join the waitlist for the parent community.
            </p>
            <Link
              href="/podcast"
              className="inline-flex min-h-11 items-center rounded-xl bg-[#0A3660] px-6 py-3 font-sans font-bold text-white"
            >
              Listen to the podcast
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-20 bg-[#E6F0F0]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0A3660] mb-10 font-serif">
              Related Articles
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="bg-white rounded-2xl shadow-sm shadow-[#0A3660]/4 hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="p-6">
                    <p className="text-base text-[#6B6560] font-sans mb-2">
                      {new Date(relatedPost.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <h3 className="mb-2 font-sans text-base font-bold leading-snug text-[#0A3660] underline">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    <p className="font-serif text-[#6B6560] text-base line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
