import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights for OTs building postpartum practices. Articles on clinical practice, business strategy, and maternal health.",
};

export default function BlogPage() {
  return (
    <main className="bg-[#FAF7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://thepostpartumot.com" }, { name: "Blog", url: "https://thepostpartumot.com/blog" }])) }} />
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A3660] mb-4 font-serif">
            Blog
          </h1>
          <p className="text-lg text-[#6B6560] font-serif max-w-lg mx-auto">
            Insights for OTs building postpartum practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-sm shadow-[#0A3660]/4 hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <p className="text-xs text-[#6B6560] font-sans">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <span className="text-xs text-[#469695] font-sans font-bold bg-[#469695]/10 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>
                <h2 className="font-serif text-[#0A3660] font-bold text-lg mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="font-serif text-[#6B6560] text-sm leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#469695] font-sans font-bold text-sm mt-5 inline-block hover:text-[#357574] transition-colors"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
