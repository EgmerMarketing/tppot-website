"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

interface BlogFilterProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogFilter({ posts, categories }: BlogFilterProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        search === "" ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, search, activeCategory]);

  return (
    <>
      {/* Search and Filter Bar */}
      <div className="mb-12 space-y-6">
        {/* Search */}
        <div className="relative max-w-md mx-auto">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B6560]"
            strokeWidth={1.5}
          />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search blog posts"
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E6F0F0] rounded-xl text-[#0A3660] font-sans text-[15px] placeholder-[#6B6560]/60 focus:outline-none focus:border-[#469695] focus:ring-2 focus:ring-[#469695]/20 transition-colors"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-xl text-sm font-bold font-sans transition-colors ${
              activeCategory === "All"
                ? "bg-[#469695] text-white"
                : "bg-white text-[#6B6560] border border-[#E6F0F0] hover:border-[#469695] hover:text-[#469695]"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-bold font-sans transition-colors ${
                activeCategory === cat
                  ? "bg-[#469695] text-white"
                  : "bg-white text-[#6B6560] border border-[#E6F0F0] hover:border-[#469695] hover:text-[#469695]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg text-[#6B6560] font-serif">
            No articles found matching your search.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setActiveCategory("All");
            }}
            className="mt-4 text-[#469695] font-sans font-bold text-sm hover:text-[#357574] transition-colors"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
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
      )}

      {/* Count */}
      <p className="text-center text-sm text-[#6B6560] font-sans mt-8">
        Showing {filteredPosts.length} of {posts.length} articles
      </p>
    </>
  );
}
