import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getBlogPosts } from "@/lib/mdx";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation */}
        <header className="mb-8 pb-4 border-b border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </header>

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Thoughts on software engineering, technology, and life.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">No blog posts yet.</p>
              <p className="text-gray-500">Check back soon for updates!</p>
            </div>
          ) : (
            posts.map((post) => {
              const formattedDate = new Date(post.date).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              );

              return (
                <article
                  key={post.slug}
                  className="border-b border-gray-200 pb-8 last:border-b-0"
                >
                  <div className="mb-4">
                    <Link href={`/blog/${post.slug}`} className="group">
                      <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                        {post.title}
                      </h2>
                    </Link>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={post.date}>{formattedDate}</time>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readingTime.text}</span>
                      </div>

                      {post.author && (
                        <div>
                          <span>by {post.author}</span>
                        </div>
                      )}
                    </div>

                    {post.description && (
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.description}
                      </p>
                    )}

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              );
            })
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to Home
            </Link>

            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Gabriel Keller
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
