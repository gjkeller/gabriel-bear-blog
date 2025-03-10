import Link from "next/link";

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostParams) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <header className="mb-10">
        <Link
          href="/blog"
          className="text-sm hover:underline mb-4 inline-block"
        >
          ← Back to blog
        </Link>
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-muted-foreground">{post.date}</p>
      </header>

      <main className="prose prose-gray max-w-none">{post.content}</main>

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
    content: (
      <>
        <p>
          In a world of increasingly complex digital interfaces, minimalism
          stands as a counterpoint—a design philosophy that embraces simplicity,
          clarity, and purpose. This approach isn't about stripping away
          features or functionality, but rather about distilling an experience
          down to its essential elements.
        </p>
        <p>
          Minimalist design focuses on removing unnecessary elements,
          emphasizing negative space, and creating clear visual hierarchies. The
          result is often an interface that feels more intuitive, loads faster,
          and creates less cognitive load for users.
        </p>
        <h2>Core Principles of Minimalist Design</h2>
        <ul>
          <li>
            <strong>Simplicity:</strong> Eliminate unnecessary elements and
            focus on what truly matters.
          </li>
          <li>
            <strong>Clarity:</strong> Make the purpose and functionality of each
            element immediately obvious.
          </li>
          <li>
            <strong>Purposeful negative space:</strong> Use whitespace
            strategically to create focus and improve readability.
          </li>
          <li>
            <strong>Typography as a central element:</strong> Rely on
            well-chosen fonts and thoughtful typography to communicate.
          </li>
        </ul>
        <p>
          When implemented thoughtfully, minimalist design doesn't feel empty or
          lacking—it feels intentional and focused. It creates digital spaces
          where content can breathe and users can focus without distraction.
        </p>
      </>
    ),
  },
];
