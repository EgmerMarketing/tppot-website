import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | The Postpartum OT",
  description:
    "Insights for OTs building postpartum practices. Articles on clinical practice, business strategy, and maternal health.",
};

const posts = [
  {
    slug: "tummy-time-and-milestones",
    title: "Tummy Time and Milestones: What to Expect",
    date: "March 20, 2026",
    excerpt:
      "New parents hear about tummy time constantly but rarely get the full picture. Here is what developmental milestones actually look like in the first year and how OTs can guide families through the process with confidence.",
  },
  {
    slug: "infant-massage-regulation-bonding",
    title: "The Power of Touch: Infant Massage for Regulation and Bonding",
    date: "March 13, 2026",
    excerpt:
      "Infant massage is more than a soothing technique. Research shows it supports nervous system regulation, strengthens the parent child bond, and gives OTs a powerful tool for early intervention with postpartum families.",
  },
  {
    slug: "understanding-postpartum-mood-disorders",
    title: "More Than Baby Blues: Understanding Postpartum Mood Disorders",
    date: "March 6, 2026",
    excerpt:
      "One in five mothers experience a postpartum mood disorder, yet most never receive treatment. OTs are uniquely positioned to recognize the signs and connect families with the support they need.",
  },
  {
    slug: "self-settling-vs-self-soothing",
    title: "Self Settling vs Self Soothing: What Professionals Need to Know",
    date: "February 27, 2026",
    excerpt:
      "These terms get used interchangeably but they describe very different developmental processes. Understanding the distinction changes how you guide parents and the recommendations you make.",
  },
  {
    slug: "getting-paid-postpartum-ot",
    title: "Getting Paid for Your Postpartum OT Services",
    date: "February 20, 2026",
    excerpt:
      "Insurance billing, cash pay models, hybrid approaches. A practical look at how postpartum OTs are structuring their revenue and what actually works in different practice settings.",
  },
  {
    slug: "understanding-mental-load",
    title: "The Invisible Weight: Understanding the Mental Load",
    date: "February 13, 2026",
    excerpt:
      "The mental load is not just a social media buzzword. It is a measurable barrier to occupational performance that OTs can assess, address, and help families navigate with evidence informed strategies.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[#FAF7F2]">
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
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-sm shadow-[#0A3660]/4 hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              <div className="p-7 flex flex-col flex-1">
                <p className="text-xs text-[#6B6560] font-sans mb-3">
                  {post.date}
                </p>
                <h2 className="font-serif text-[#0A3660] font-bold text-lg mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="font-serif text-[#6B6560] text-sm leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-[#469695] font-sans font-bold text-sm mt-5 inline-block hover:text-[#357574] transition-colors"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
