import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <header className="mb-10">
        <Link href="/" className="text-sm hover:underline mb-4 inline-block">
          ← Back to home
        </Link>
        <h1 className="text-2xl font-bold">Blog</h1>
      </header>

      <main>
        <div className="space-y-10">
          {allPosts.map((post) => (
            <article key={post.slug} className="space-y-2">
              <div className="flex justify-between items-baseline">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lg font-medium hover:underline"
                >
                  {post.title}
                </Link>
                <span className="text-sm text-muted-foreground">
                  {post.date}
                </span>
              </div>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </main>

      <footer className="mt-16 pt-6 border-t border-muted">
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gabriel Keller
          </div>
          <nav>
            <ul className="flex space-x-4 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

const allPosts = [
  {
    title: "The Value of Minimalism in Digital Design",
    slug: "minimalism-in-digital-design",
    date: "May 15, 2023",
    excerpt:
      "Exploring how minimalist design principles can create more effective digital experiences.",
  },
  {
    title: "Writing as a Tool for Thinking",
    slug: "writing-as-thinking-tool",
    date: "April 22, 2023",
    excerpt:
      "How the process of writing helps clarify thoughts and develop new ideas.",
  },
  {
    title: "The Future of Personal Websites",
    slug: "future-of-personal-websites",
    date: "March 10, 2023",
    excerpt:
      "Why personal websites remain relevant in an age of social media platforms.",
  },
  {
    title: "Digital Minimalism: A Month Without Social Media",
    slug: "digital-minimalism-experiment",
    date: "February 18, 2023",
    excerpt:
      "My experience and insights from taking a month-long break from all social media platforms.",
  },
  {
    title: "The Art of Slow Reading",
    slug: "art-of-slow-reading",
    date: "January 25, 2023",
    excerpt:
      "In a world of skimming and scanning, the value of reading deeply and deliberately.",
  },
  {
    title: "Building a Personal Knowledge Management System",
    slug: "personal-knowledge-management",
    date: "December 12, 2022",
    excerpt:
      "How I organize my notes, ideas, and research using digital tools.",
  },
];
