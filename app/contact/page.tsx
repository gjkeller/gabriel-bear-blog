import Link from "next/link";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <header className="mb-10">
        <Link href="/" className="text-sm hover:underline mb-4 inline-block">
          ← Back to home
        </Link>
        <h1 className="text-2xl font-bold">Contact</h1>
      </header>

      <main>
        <p className="mb-8">
          Feel free to reach out through any of the following channels:
        </p>

        <div className="space-y-6">
          <a
            href="mailto:me@keller.cv"
            className="flex items-center gap-3 text-lg hover:underline"
          >
            <EnvelopeClosedIcon className="h-5 w-5" />
            <span>me@keller.cv</span>
          </a>

          <a
            href="https://linkedin.com/in/gjkeller"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg hover:underline"
          >
            <LinkedInLogoIcon className="h-5 w-5" />
            <span>linkedin.com/in/gjkeller</span>
          </a>

          <a
            href="https://github.com/gjkeller"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg hover:underline"
          >
            <GitHubLogoIcon className="h-5 w-5" />
            <span>github.com/gjkeller</span>
          </a>
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
