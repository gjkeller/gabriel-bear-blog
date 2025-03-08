import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BlogPost() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:underline mb-8">
        <ArrowLeft className="mr-1 h-4 w-4" /> Back to home
      </Link>

      <article className="prose prose-slate max-w-none">
        <header className="mb-8 not-prose">
          <h1 className="text-3xl font-bold mb-2">Building Modern Web Applications with Next.js and TypeScript</h1>
          <p className="text-muted-foreground">March 8, 2024</p>
        </header>

        <p>
          As web applications become increasingly complex, having a robust tech stack and type safety becomes crucial for maintaining
          code quality and developer productivity. In this post, we'll explore how to leverage Next.js 14 and TypeScript to build
          modern, type-safe web applications.
        </p>

        <h2>Why Next.js and TypeScript?</h2>
        <p>
          Next.js has evolved into a powerful framework that combines the best of React with server-side rendering, static site
          generation, and API routes. When paired with TypeScript, it provides an excellent foundation for building scalable
          web applications. Here are some key benefits:
        </p>
        <ul>
          <li>Strong type safety across your entire application</li>
          <li>Improved developer experience with better IDE support</li>
          <li>Built-in performance optimizations</li>
          <li>File-based routing and API endpoints</li>
          <li>Server and client components for optimal rendering strategies</li>
        </ul>

        <h2>Setting Up a Type-Safe Project</h2>
        <p>
          Let's look at how to set up a new Next.js project with TypeScript and some essential type safety configurations.
          First, create a new project:
        </p>
        <pre><code>{`npx create-next-app@latest my-app --typescript
cd my-app`}</code></pre>

        <h2>Type-Safe API Routes</h2>
        <p>
          One of the most powerful features of Next.js is its API routes. Here's how to create a type-safe API endpoint:
        </p>
        <pre><code>{`// app/api/users/route.ts
import { NextResponse } from 'next/server'

interface User {
  id: string
  name: string
  email: string
}

export async function GET() {
  const users: User[] = [
    { id: '1', name: 'John', email: 'john@example.com' }
  ]
  
  return NextResponse.json(users)
}`}</code></pre>

        <h2>Server Components and Data Fetching</h2>
        <p>
          Next.js 14 introduces improvements to React Server Components, allowing for more efficient server-side rendering
          and data fetching. Here's an example of a type-safe server component:
        </p>
        <pre><code>{`// app/users/page.tsx
interface User {
  id: string
  name: string
}

async function getUsers(): Promise<User[]> {
  const res = await fetch('https://api.example.com/users')
  if (!res.ok) throw new Error('Failed to fetch users')
  return res.json()
}

export default async function UsersPage() {
  const users = await getUsers()
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}`}</code></pre>

        <h2>Best Practices and Tips</h2>
        <p>
          When building with Next.js and TypeScript, consider these best practices:
        </p>
        <ul>
          <li>Use strict TypeScript configuration with "strict": true</li>
          <li>Leverage path aliases for cleaner imports</li>
          <li>Implement proper error boundaries and loading states</li>
          <li>Use zod or io-ts for runtime type validation</li>
          <li>Keep components small and focused</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Next.js and TypeScript provide a powerful combination for building modern web applications. By following type-safe
          patterns and leveraging the latest features of both technologies, you can create maintainable, performant applications
          that scale with your needs.
        </p>
        
        <p>
          In future posts, we'll dive deeper into specific aspects of this stack, including state management, testing strategies,
          and deployment optimizations. Stay tuned!
        </p>
      </article>
    </div>
  )
} 