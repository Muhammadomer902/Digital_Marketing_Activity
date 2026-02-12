"use client";

import Link from "next/link";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
};

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "crafting-digital-experiences-that-convert",
    title: "Crafting Digital Experiences That Actually Convert",
    excerpt:
      "From first impression to final click, here’s how we design and build digital products that turn visitors into loyal customers.",
    date: "Jan 20, 2025",
    readTime: "5 min read",
    tag: "Product Strategy",
  },
  {
    slug: "why-speed-and-design-matter-together",
    title: "Why Speed and Design Matter Together",
    excerpt:
      "A beautiful interface isn’t enough. We break down why performance, UX, and engineering need to move in sync.",
    date: "Feb 02, 2025",
    readTime: "4 min read",
    tag: "Performance",
  },
  {
    slug: "from-idea-to-launch-with-duofast",
    title: "From Idea to Launch with DuoFast",
    excerpt:
      "Our end‑to‑end process for helping founders and teams ship impactful digital products—on time and with confidence.",
    date: "Feb 10, 2025",
    readTime: "6 min read",
    tag: "Process",
  },
];

export default function BlogPage() {
  return (
    <section className="pt-28 pb-16 bg-slate-950/95">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
        {/* Heading */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#cbff54]">
            Insights
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Stories, Playbooks &amp; Lessons
            <br />
            From the DuoFast Team
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/80">
            Short, practical breakdowns of how we think about building products,
            shipping fast, and designing experiences that stand out.
          </p>
        </div>

        {/* Grid of posts */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`
                group relative flex flex-col justify-between rounded-3xl border border-white/5 bg-white/5
                px-5 py-6 sm:px-6 sm:py-7
                shadow-xl shadow-black/40 backdrop-blur
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:border-[#cbff54] hover:bg-white/10
                hover:shadow-2xl hover:shadow-[#cbff54]/20
                opacity-0 translate-y-6
                animate-[fadeUp_0.7s_ease-out_forwards]
              `}
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              <div>
                <span className="inline-flex items-center rounded-full bg-[#033231] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#cbff54]">
                  {post.tag}
                </span>

                <h2 className="mt-4 text-lg sm:text-xl font-semibold text-white group-hover:text-[#cbff54] transition-colors">
                  {post.title}
                </h2>

                <p className="mt-3 text-sm text-white/80 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs font-medium text-white/70">
                <span>{post.date}</span>
                <span className="flex items-center gap-2">
                  {post.readTime}
                  <span className="h-1 w-1 rounded-full bg-[#cbff54]" />
                  <span className="text-[#cbff54] group-hover:translate-x-1 transition-transform">
                    Read
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Simple keyframe for cards */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}