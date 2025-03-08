import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:underline mb-8">
        <ArrowLeft className="mr-1 h-4 w-4" /> Back to home
      </Link>

      <article className="prose prose-slate max-w-none">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>

        <section className="mb-8">
          <h2>Professional Background</h2>
          <p>
            I'm Gabriel Keller, a full-stack software engineer who thrives on building efficient, scalable solutions
            to complex technical challenges. With a strong foundation in both frontend and backend development,
            I specialize in creating robust applications that prioritize developer experience and code quality.
          </p>
        </section>

        <section className="mb-8">
          <h2>Technical Expertise</h2>
          <div className="not-prose">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Frontend</h3>
                <ul className="list-none p-0 space-y-1">
                  <li>• TypeScript & JavaScript</li>
                  <li>• React & Next.js</li>
                  <li>• TailwindCSS</li>
                  <li>• Frontend Testing (Jest, RTL)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Backend</h3>
                <ul className="list-none p-0 space-y-1">
                  <li>• Python</li>
                  <li>• Node.js</li>
                  <li>• RESTful APIs</li>
                  <li>• Database Design</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Developer Tools</h3>
                <ul className="list-none p-0 space-y-1">
                  <li>• Git & Version Control</li>
                  <li>• CI/CD Pipelines</li>
                  <li>• Docker</li>
                  <li>• Cloud Platforms</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Best Practices</h3>
                <ul className="list-none p-0 space-y-1">
                  <li>• Clean Code</li>
                  <li>• Test-Driven Development</li>
                  <li>• Code Review</li>
                  <li>• Documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2>Current Focus</h2>
          <p>
            I'm currently focused on developing type-safe, performant web applications using modern technologies.
            My work involves creating intuitive user interfaces with React and Next.js, while ensuring robust
            backend systems using Python and Node.js. I'm particularly passionate about:
          </p>
          <ul>
            <li>Building developer tools that enhance productivity</li>
            <li>Implementing type-safe architectures</li>
            <li>Creating efficient, maintainable codebases</li>
            <li>Contributing to open-source projects</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Beyond Coding</h2>
          <p>
            When I'm not writing code, I enjoy staying up-to-date with the latest developments in software
            engineering and contributing to the developer community. I believe in continuous learning and
            regularly explore new technologies and methodologies to improve my craft.
          </p>
        </section>

        <section>
          <h2>Connect</h2>
          <p>
            I'm always interested in connecting with fellow developers and discussing interesting technical
            challenges. You can find me on{" "}
            <Link href="https://github.com/gjkeller" className="text-primary hover:underline">
              GitHub
            </Link>
            , where I contribute to various projects and share my work.
          </p>
        </section>
      </article>
    </div>
  )
}

