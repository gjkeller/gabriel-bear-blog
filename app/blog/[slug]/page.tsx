import Link from "next/link"

interface BlogPostParams {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostParams) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <header className="mb-10">
        <Link href="/blog" className="text-sm hover:underline mb-4 inline-block">
          ← Back to blog
        </Link>
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-muted-foreground">{post.date}</p>
      </header>

      <main className="prose prose-gray max-w-none">{post.content}</main>

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

const allPosts = [
  {
    title: "The Value of Minimalism in Digital Design",
    slug: "minimalism-in-digital-design",
    date: "May 15, 2023",
    excerpt: "Exploring how minimalist design principles can create more effective digital experiences.",
    content: (
      <>
        <p>
          In a world of increasingly complex digital interfaces, minimalism stands as a counterpoint—a design philosophy
          that embraces simplicity, clarity, and purpose. This approach isn't about stripping away features or
          functionality, but rather about distilling an experience down to its essential elements.
        </p>
        <p>
          Minimalist design focuses on removing unnecessary elements, emphasizing negative space, and creating clear
          visual hierarchies. The result is often an interface that feels more intuitive, loads faster, and creates less
          cognitive load for users.
        </p>
        <h2>Core Principles of Minimalist Design</h2>
        <ul>
          <li>
            <strong>Simplicity:</strong> Eliminate unnecessary elements and focus on what truly matters.
          </li>
          <li>
            <strong>Clarity:</strong> Make the purpose and functionality of each element immediately obvious.
          </li>
          <li>
            <strong>Purposeful negative space:</strong> Use whitespace strategically to create focus and improve
            readability.
          </li>
          <li>
            <strong>Typography as a central element:</strong> Rely on well-chosen fonts and thoughtful typography to
            communicate.
          </li>
        </ul>
        <p>
          When implemented thoughtfully, minimalist design doesn't feel empty or lacking—it feels intentional and
          focused. It creates digital spaces where content can breathe and users can focus without distraction.
        </p>
      </>
    ),
  },
  {
    title: "Writing as a Tool for Thinking",
    slug: "writing-as-thinking-tool",
    date: "April 22, 2023",
    excerpt: "How the process of writing helps clarify thoughts and develop new ideas.",
    content: (
      <>
        <p>
          Writing is often viewed primarily as a communication tool—a way to express thoughts that are already fully
          formed. But perhaps its greatest value lies in its ability to help us think more clearly and develop ideas we
          didn't know we had.
        </p>
        <p>
          When we write, we're forced to articulate vague notions into concrete language. This process reveals gaps in
          our thinking, uncovers connections between seemingly disparate ideas, and often leads to insights that
          wouldn't have emerged otherwise.
        </p>
        <h2>How Writing Clarifies Thought</h2>
        <p>
          The blank page is both a mirror and a lens. It reflects our current understanding while also magnifying
          inconsistencies and areas that need development. As we write, we engage in a conversation with ourselves,
          questioning assumptions and refining arguments.
        </p>
        <p>
          This is why many writers report the experience of being surprised by their own writing—discovering what they
          think through the act of putting words on the page.
        </p>
        <h2>Practical Applications</h2>
        <p>
          This understanding of writing as a thinking tool has practical applications beyond formal writing projects:
        </p>
        <ul>
          <li>Journaling to process experiences and emotions</li>
          <li>Note-taking to internalize new information</li>
          <li>Outlining to organize complex projects</li>
          <li>Freewriting to generate creative ideas</li>
        </ul>
        <p>
          By embracing writing as a thinking tool rather than just a communication medium, we gain access to a powerful
          method for developing and refining our thoughts.
        </p>
      </>
    ),
  },
  {
    title: "The Future of Personal Websites",
    slug: "future-of-personal-websites",
    date: "March 10, 2023",
    excerpt: "Why personal websites remain relevant in an age of social media platforms.",
    content: (
      <>
        <p>
          In an era dominated by social media platforms and professional networking sites, the personal website might
          seem like a relic of the early internet. Yet there are compelling reasons why personal websites not only
          remain relevant but are experiencing something of a renaissance.
        </p>
        <h2>Ownership and Control</h2>
        <p>
          Perhaps the most significant advantage of a personal website is that you own and control it completely. Unlike
          content posted on social platforms, which can be subject to algorithmic suppression, format constraints, or
          even platform collapse, your website remains yours.
        </p>
        <p>
          This ownership extends beyond just the content to the presentation and context. You decide how your work is
          displayed, organized, and framed—without the distractions of ads, notifications, or unrelated content.
        </p>
        <h2>Expression Without Constraints</h2>
        <p>
          Personal websites offer freedom from the homogenizing influence of platform templates and character limits.
          They can take any form: a traditional blog, a digital garden of interconnected notes, a portfolio, or
          experimental formats that don't fit neatly into platform categories.
        </p>
        <h2>The Slow Web Movement</h2>
        <p>
          As more people grow weary of the frenetic pace and attention economy of social media, there's growing interest
          in what some call "the slow web"—digital spaces that encourage thoughtful engagement rather than endless
          scrolling and reactive posting.
        </p>
        <p>
          Personal websites, particularly those focused on long-form writing and thoughtful curation, embody this
          alternative approach to online presence.
        </p>
        <h2>Looking Forward</h2>
        <p>
          The future of personal websites likely involves greater integration with other tools and platforms while
          maintaining their independence. New tools are making it easier than ever to create and maintain personal sites
          without technical expertise, potentially broadening their appeal.
        </p>
        <p>
          Far from being obsolete, personal websites represent an enduring and increasingly valuable approach to
          establishing a digital presence—one that prioritizes autonomy, thoughtfulness, and individual expression.
        </p>
      </>
    ),
  },
]

