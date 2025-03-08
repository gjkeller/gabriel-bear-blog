import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <header className="mb-10">
        <Link href="/" className="text-sm hover:underline mb-4 inline-block">
          ← Back to home
        </Link>
        <h1 className="text-2xl font-bold">About Me</h1>
      </header>

      <main className="prose prose-gray max-w-none">
        <p>
          Hello! I'm John Doe, a writer, developer, and perpetual learner based in San Francisco. This website is my
          digital home—a place to share my thoughts, projects, and interests.
        </p>

        <h2>Background</h2>
        <p>
          I studied Computer Science and Philosophy at Stanford University, where I became fascinated by the
          intersection of technology and human experience. After graduation, I worked as a software engineer at several
          tech companies before transitioning to focus more on writing and independent projects.
        </p>

        <h2>What I Do</h2>
        <p>Currently, I split my time between:</p>
        <ul>
          <li>Writing essays on technology, philosophy, and digital culture</li>
          <li>Developing open-source software projects</li>
          <li>Consulting with startups on product strategy and design</li>
          <li>Reading widely across disciplines</li>
        </ul>

        <h2>This Website</h2>
        <p>
          I created this website as a place to share my writing without the distractions and constraints of social media
          platforms. It's deliberately minimal in design, focusing attention on the content rather than flashy visuals
          or unnecessary features.
        </p>
        <p>
          The site is built with Next.js and styled with Tailwind CSS, drawing inspiration from the clean,
          content-focused aesthetic of platforms like Bear Blog.
        </p>

        <h2>Connect</h2>
        <p>
          I'm always interested in connecting with like-minded individuals. Feel free to reach out via email at
          john@example.com or find me on Twitter @johndoe.
        </p>
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

