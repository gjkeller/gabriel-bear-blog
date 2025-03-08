import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <header className="mb-10">
        <h1 className="text-2xl font-bold mb-1">John Doe</h1>
        <p className="text-muted-foreground">Writer, developer, and thinker.</p>
      </header>

      <main>
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <article key={post.slug} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <Link href={`/blog/${post.slug}`} className="text-lg font-medium hover:underline">
                    {post.title}
                  </Link>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </article>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/blog" className="inline-flex items-center text-sm font-medium hover:underline">
              View all posts <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p className="mb-4">
            Hello! I'm John, a writer and developer based in San Francisco. I write about technology, philosophy, and
            the intersection between the two.
          </p>
          <p>
            This is a simple, content-focused personal website inspired by the minimalist design principles of Bear
            Blog. No unnecessary distractions, just pure content.
          </p>
        </section>
      </main>

      <footer className="mt-16 pt-6 border-t border-muted">
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} John Doe</div>
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
  )
}

const recentPosts = [
  {
    title: "The Value of Minimalism in Digital Design",
    slug: "minimalism-in-digital-design",
    date: "May 15, 2023",
    excerpt: "Exploring how minimalist design principles can create more effective digital experiences.",
  },
  {
    title: "Writing as a Tool for Thinking",
    slug: "writing-as-thinking-tool",
    date: "April 22, 2023",
    excerpt: "How the process of writing helps clarify thoughts and develop new ideas.",
  },
  {
    title: "The Future of Personal Websites",
    slug: "future-of-personal-websites",
    date: "March 10, 2023",
    excerpt: "Why personal websites remain relevant in an age of social media platforms.",
  },
]

