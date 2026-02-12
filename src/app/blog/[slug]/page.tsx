import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const BLOG_POSTS = [
  {
    slug: "the-importance-of-digital-solutions-in-modern-business",
    title: "The Importance of Digital Solutions in Modern Business",
    date: "Jan 10, 2025",
    readTime: "4 min read",
    tag: "Digital Strategy",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Team collaborating in front of laptops and digital dashboards",
    content: [
      "In today’s fast-moving world, businesses must adopt digital solutions to remain competitive. Companies that invest in technology and innovation are more likely to achieve business success and sustainable business growth. A strong digital strategy allows organizations to connect with customers, improve operations, and deliver better services.",
      "At Duofast, we focus on helping businesses transform their creative ideas into real products. Our professional team works closely with clients to understand their needs and provide tailored solutions. Through strong transparent communication, we ensure that every project aligns with the client’s vision and expectations.",
      "Modern organizations need a reliable technology partner that can support their journey. From project development to final delivery, our skilled developers follow industry best practices to ensure high-quality results. With experience in app designing and product development, we help companies build digital platforms that create value.",
      "Businesses that invest in user-focused design and client-centric development are able to attract and retain customers. Our team believes in building solutions that match your project, your vision, and your goals. With a strong focus on innovation and collaboration, we continue to deliver impactful digital experiences.",
      "As the global market becomes more competitive, companies must adapt quickly. Partnering with Duofast means gaining access to global services, expert knowledge, and innovative approaches that support long-term success.",
    ],
  },
  {
    slug: "how-mobile-app-development-drives-business-growth",
    title: "How Mobile App Development Drives Business Growth",
    date: "Jan 18, 2025",
    readTime: "5 min read",
    tag: "Mobile Apps",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Person holding a smartphone with app icons glowing on screen",
    content: [
      "The rise of smartphones has made mobile app development one of the most powerful tools for businesses today. Companies use mobile apps to connect with customers, provide services, and strengthen their digital presence.",
      "A well-designed mobile application can improve engagement and increase customer satisfaction. With strong app designing and development practices, businesses can deliver smooth user experiences that build trust and loyalty.",
      "At Duofast, we specialize in creating innovative and client-centric applications. Our skilled developers focus on understanding the client’s needs and turning their creative ideas into successful digital products. Through careful planning and project development, we ensure every app meets modern standards.",
      "Mobile apps also support startups by offering startup solutions that help them grow faster. Whether it is a small freelance service or a large organization, having a mobile presence can boost visibility and improve performance.",
      "Our professional team works with businesses to build your vision and create solutions that drive real results. With a strong focus on user-focused design and innovative-driven development, we ensure each app delivers maximum value.",
      "By choosing the right digital partner, businesses can achieve faster growth and long-term success. Mobile apps are not just tools; they are essential for building strong customer relationships and expanding in the global market.",
    ],
  },
  {
    slug: "building-client-centric-digital-products",
    title: "Building Client-Centric Digital Products",
    date: "Jan 26, 2025",
    readTime: "5 min read",
    tag: "Product Development",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Product team discussing wireframes and user flows around a table",
    content: [
      "Creating successful digital products requires a client-centric approach. Understanding customer needs and expectations is the key to delivering meaningful solutions. Businesses that focus on their users can create products that stand out in the market.",
      "At Duofast, our goal is to transform ideas into innovative products. Our expertise in product development allows us to create solutions that align with business objectives. Through transparent communication, we ensure every step of the development process is clear and collaborative.",
      "Our professional team works with passion and dedication to turn your project into a success. We combine development practices, creativity, and technical knowledge to deliver powerful digital products.",
      "Innovation plays a major role in modern business. By using innovative-driven strategies and best practices, we create solutions that support long-term growth. Our focus on user-focused design ensures that products are simple, efficient, and valuable.",
      "With strong teamwork and planning, we help businesses achieve business success. Whether it is an app, website, or platform, our goal is to deliver quality and build lasting relationships with clients.",
    ],
  },
  {
    slug: "the-role-of-transparent-communication-in-project-success",
    title: "The Role of Transparent Communication in Project Success",
    date: "Feb 02, 2025",
    readTime: "4 min read",
    tag: "Collaboration",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Colleagues communicating and planning around a digital whiteboard",
    content: [
      "One of the most important factors behind successful project development is transparent communication. Clear discussions between teams and clients help avoid confusion and improve productivity.",
      "At Duofast, we believe that strong communication builds trust. Our professional team ensures that clients stay informed at every stage of development. This approach helps us understand your project, your vision, and business goals more effectively.",
      "When businesses and developers work together as partners, they can create better results. Our skilled developers focus on teamwork, planning, and collaboration to ensure smooth execution.",
      "A strong digital partner not only provides technical support but also guides clients in making better decisions. With proper planning and development practices, we deliver projects that meet expectations.",
      "By maintaining open communication and focusing on quality, we continue to deliver digital solutions that help businesses grow and succeed in the global market.",
    ],
  },
  {
    slug: "transforming-ideas-into-reality-with-skilled-development-teams",
    title: "Transforming Ideas into Reality with Skilled Development Teams",
    date: "Feb 10, 2025",
    readTime: "6 min read",
    tag: "Teamwork",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Development team gathered around a laptop discussing ideas",
    content: [
      "Every successful product begins with an idea. Turning those ideas into reality requires the support of a skilled and experienced team. At Duofast, we focus on helping businesses transform their vision into powerful digital products.",
      "Our skilled developers combine creativity, technical skills, and expertise to build modern solutions. From app development service to product development, we deliver services that match business needs.",
      "We believe in building strong partnerships with clients. By understanding your project, we create solutions that support business growth and long-term success. Our client-centric approach ensures that every product is designed with the user in mind.",
      "Technology continues to evolve, and businesses must stay updated. With our global services and strong digital strategy, we help companies remain competitive. Our focus on best practices and innovation ensures quality results.",
      "At Duofast, we are more than just developers. We are a technology partner committed to delivering solutions that make a difference. Together, we build your vision and create products that shape the future.",
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

        {/* Hero image */}
        <div className="mt-6 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/30">
          <div className="relative h-64 sm:h-72 md:h-80">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
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