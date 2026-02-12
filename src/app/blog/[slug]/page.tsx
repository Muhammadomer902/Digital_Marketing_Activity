import { notFound } from "next/navigation";
import Link from "next/link";

const BLOG_POSTS = [
  {
    slug: "crafting-digital-experiences-that-convert",
    title: "Crafting Digital Experiences That Actually Convert",
    date: "Jan 20, 2025",
    readTime: "5 min read",
    tag: "Product Strategy",
    content: [
      "At DuoFast, we don’t see a website or app as just a collection of screens. Every interaction is a chance to build trust, tell your story, and move a visitor one step closer to action.",
      "When we design and build digital experiences, we obsess over three things: clarity, flow, and feedback. Clarity keeps the user from guessing, flow keeps them moving forward, and feedback reassures them they’re always in control.",
      "From hero sections with a strong value proposition to high‑intent CTAs and frictionless contact flows, we make sure every part of your product is aligned with a clear goal.",
    ],
  },
  {
    slug: "why-speed-and-design-matter-together",
    title: "Why Speed and Design Matter Together",
    date: "Feb 02, 2025",
    readTime: "4 min read",
    tag: "Performance",
    content: [
      "A slow product feels broken, no matter how beautiful the interface is. Performance is part of the design, not an afterthought.",
      "We use modern tooling, image optimization, and careful component design in Next.js to keep experiences fast without sacrificing aesthetics.",
      "The result: interfaces that feel effortless, especially on mobile and lower‑end devices, where many of your real users live.",
    ],
  },
  {
    slug: "from-idea-to-launch-with-duofast",
    title: "From Idea to Launch with DuoFast",
    date: "Feb 10, 2025",
    readTime: "6 min read",
    tag: "Process",
    content: [
      "Every project starts with understanding the problem, not the feature list. We listen, ask questions, and map out the outcomes you care about.",
      "From there, we move through discovery, UX, design, development, and launch with clear checkpoints and communication.",
      "The goal is simple: ship something you’re proud of, on a timeline you can rely on, with a partner you trust.",
    ],
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="pt-28 pb-16 bg-slate-950/95">
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-8 md:px-10">
        <div className="mb-6">
          <Link
            href="/blog"
            className="text-sm text-[#cbff54] hover:underline flex items-center gap-2"
          >
            <span className="h-4 w-4 rounded-full border border-[#cbff54] flex items-center justify-center text-[10px]">
              ←
            </span>
            Back to all articles
          </Link>
        </div>

        <span className="inline-flex items-center rounded-full bg-[#033231] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#cbff54]">
          {post.tag}
        </span>

        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          {post.title}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-medium text-white/70">
          <span>{post.date}</span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span>{post.readTime}</span>
        </div>

        <div className="mt-8 space-y-5 text-sm md:text-base leading-relaxed text-white/85">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}