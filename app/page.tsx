import Link from "next/link"
import { ArrowRight } from "lucide-react"

const recentPosts: BlogPost[] = [
  {
    title: "Building Modern Web Applications with Next.js and TypeScript",
    slug: "modern-web-development-nextjs-typescript",
    date: "March 8, 2024",
    excerpt: "A deep dive into creating performant, type-safe web applications using Next.js 14 and TypeScript, with practical examples and best practices.",
  },
]

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <header className="mb-10">
        <h1 className="text-2xl font-bold mb-1">Gabriel Keller</h1>
        <p className="text-muted-foreground">Full Stack Software Engineer | TypeScript & Python Developer</p>
      </header>

      <main>
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Latest Post</h2>
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
            Hello! I'm Gabriel, a full-stack software engineer with a passion for building elegant solutions to complex problems.
            I specialize in TypeScript, Python, and modern web technologies, with experience in developing scalable applications
            and developer tools.
          </p>
          <p className="mb-4">
            Currently, I focus on creating efficient, type-safe applications using technologies like Next.js, React, and TypeScript
            on the frontend, while leveraging Python and Node.js for backend services. I'm particularly interested in developer
            experience, type systems, and building tools that make developers more productive.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
            or writing about software development best practices.
          </p>
        </section>
      </main>

      <footer className="mt-16 pt-6 border-t border-muted">
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Gabriel Keller</div>
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
                <Link href="https://github.com/gjkeller" className="hover:underline">
                  GitHub
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

