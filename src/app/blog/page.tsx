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
    slug: "the-importance-of-digital-solutions-in-modern-business",
    title: "The Importance of Digital Solutions in Modern Business",
    excerpt:
      "In today’s fast-moving world, businesses must adopt digital solutions to remain competitive and achieve sustainable growth.",
    date: "Jan 10, 2025",
    readTime: "4 min read",
    tag: "Digital Strategy",
  },
  {
    slug: "how-mobile-app-development-drives-business-growth",
    title: "How Mobile App Development Drives Business Growth",
    excerpt:
      "The rise of smartphones has made mobile app development one of the most powerful tools for businesses to connect with customers.",
    date: "Jan 18, 2025",
    readTime: "5 min read",
    tag: "Mobile Apps",
  },
  {
    slug: "building-client-centric-digital-products",
    title: "Building Client-Centric Digital Products",
    excerpt:
      "Creating successful digital products requires a client-centric approach that keeps real customer needs at the center.",
    date: "Jan 26, 2025",
    readTime: "5 min read",
    tag: "Product Development",
  },
  {
    slug: "the-role-of-transparent-communication-in-project-success",
    title: "The Role of Transparent Communication in Project Success",
    excerpt:
      "Transparent communication between teams and clients is one of the most important factors behind successful project development.",
    date: "Feb 02, 2025",
    readTime: "4 min read",
    tag: "Collaboration",
  },
  {
    slug: "transforming-ideas-into-reality-with-skilled-development-teams",
    title: "Transforming Ideas into Reality with Skilled Development Teams",
    excerpt:
      "Every successful product begins with an idea—and the right development team turns that idea into a powerful digital reality.",
    date: "Feb 10, 2025",
    readTime: "6 min read",
    tag: "Teamwork",
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