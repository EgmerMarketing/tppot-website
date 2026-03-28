import type { Metadata } from "next";
import Image from "next/image";
import { Play, Compass, MessageCircle, Calculator, Users, BookOpen } from "lucide-react";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free resources to grow your postpartum OT practice. Webinar replays, niche finder GPT, conversation guides, income calculators, and more.",
};

const featuredResources = [
  {
    tag: "New Replay",
    title: "Mom & Baby Class Training Replay",
    description:
      "Missed the live session? Watch the full replay and learn why OTs are uniquely suited to lead mom & baby groups and how these classes can expand your reach, build community connection, and support early development.",
    cta: "Watch the Replay Free",
    ctaSub: "Instant access",
    href: "https://melissaoneal.thepostpartumot.com/mom-baby-replay",
    image: "/images/resources/mom-baby-webinar.jpg",
    icon: Play,
  },
  {
    tag: "Start Here",
    title: "Find Your Niche (Interactive GPT)",
    description:
      "Get crystal clear on your niche in minutes. This interactive tool helps you identify who you serve best, the problems you solve, and how to talk about your offer so your message finally clicks.",
    cta: "Use the GPT Now",
    ctaSub: "Free, instant access",
    href: "https://melissaoneal.thepostpartumot.com/find-your-niche-gpt",
    image: "/images/resources/niche-finder.jpg",
    icon: Compass,
  },
];

const tools = [
  {
    tag: "Clinical Tool",
    title: "Conversation Starter Guide",
    description:
      "Structured prompts to help you open supportive, trauma informed conversations with postpartum families, in the hospital or at home.",
    cta: "Get the Guide",
    href: "https://melissaoneal.thepostpartumot.com/conversation-starter",
    icon: MessageCircle,
  },
  {
    tag: "Business Tool",
    title: "Postpartum Income & Rate Calculator",
    description:
      "Know your numbers. Set confident rates, map your monthly income goals, and model packages that work for your life and your clients.",
    cta: "Calculate My Rates",
    href: "https://melissaoneal.thepostpartumot.com/Postpartum-income-rate-cal",
    icon: Calculator,
  },
];

const moreResources = [
  {
    title: "The Postpartum Collective (Webinar Series)",
    href: "https://melissaoneal.thepostpartumot.com/TPOT-collective-webinar-success",
    icon: Users,
  },
  {
    title: "Supporting Infant Sleep Patterns",
    href: "https://melissaoneal.kartra.com/page/supporting-infance-sleep-patterns",
    icon: BookOpen,
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-[#FAF7F2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://thepostpartumot.com" },
              { name: "Resources", url: "https://thepostpartumot.com/resources" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 pt-24 md:pt-32 pb-12">
        <div className="text-center">
          <p className="text-[#469695] font-bold text-xs tracking-[0.2em] uppercase mb-4 font-sans">
            Free Tools
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A3660] mb-4 font-serif">
            Resources to Grow Your Postpartum Practice
          </h1>
          <p className="text-lg text-[#6B6560] font-serif max-w-2xl mx-auto">
            Evidence informed tools to help OTs and healthcare professionals support families and build a confident, sustainable practice.
          </p>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {featuredResources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-sm shadow-[#0A3660]/4 hover:shadow-lg hover:shadow-[#0A3660]/10 transition-all overflow-hidden flex flex-col"
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#469695] text-white text-xs font-bold font-sans px-3 py-1.5 rounded-lg">
                    {resource.tag}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-[#0A3660] mb-3 font-serif group-hover:text-[#469695] transition-colors">
                  {resource.title}
                </h2>
                <p className="text-[15px] text-[#6B6560] leading-relaxed font-serif flex-1 mb-6">
                  {resource.description}
                </p>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 bg-[#357574] text-white px-5 py-3 rounded-xl font-bold text-sm font-sans group-hover:bg-[#0A3660] transition-colors">
                    <resource.icon className="w-4 h-4" strokeWidth={2} />
                    {resource.cta}
                  </span>
                  <span className="text-xs text-[#6B6560] font-sans">{resource.ctaSub}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <a
              key={tool.title}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-sm shadow-[#0A3660]/4 hover:shadow-lg hover:shadow-[#0A3660]/10 transition-all p-8 flex gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#469695]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#469695] transition-colors">
                <tool.icon className="w-6 h-6 text-[#469695] group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-[11px] text-[#469695] font-bold tracking-wider uppercase font-sans">
                  {tool.tag}
                </span>
                <h3 className="text-lg font-bold text-[#0A3660] mt-1 mb-2 font-serif group-hover:text-[#469695] transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-[#6B6560] leading-relaxed font-serif mb-4">
                  {tool.description}
                </p>
                <span className="text-[#469695] font-sans font-bold text-sm">
                  {tool.cta}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* More Resources */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 pb-24 md:pb-32">
        <h2 className="text-sm font-bold text-[#0A3660] uppercase tracking-wider mb-6 font-sans">
          More Resources
        </h2>
        <div className="space-y-3">
          {moreResources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white rounded-xl shadow-sm shadow-[#0A3660]/4 hover:shadow-md transition-shadow p-5"
            >
              <resource.icon className="w-5 h-5 text-[#469695] flex-shrink-0" strokeWidth={1.5} />
              <span className="text-[15px] font-bold text-[#0A3660] font-sans group-hover:text-[#469695] transition-colors flex-1">
                {resource.title}
              </span>
              <svg className="w-4 h-4 text-[#0A3660]/30 group-hover:text-[#469695] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
