import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Use semantic HTML elements and let global CSS handle styling
    h1: ({ children }: { children?: ReactNode }) => <h1>{children}</h1>,
    h2: ({ children }: { children?: ReactNode }) => <h2>{children}</h2>,
    h3: ({ children }: { children?: ReactNode }) => <h3>{children}</h3>,
    h4: ({ children }: { children?: ReactNode }) => <h4>{children}</h4>,
    p: ({ children }: { children?: ReactNode }) => <p>{children}</p>,

    a: ({ href, children }: { href?: string; children?: ReactNode }) => {
      if (href?.startsWith("http")) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      }
      return <Link href={href || "#"}>{children}</Link>;
    },

    ul: ({ children }: { children?: ReactNode }) => <ul>{children}</ul>,
    ol: ({ children }: { children?: ReactNode }) => <ol>{children}</ol>,
    li: ({ children }: { children?: ReactNode }) => <li>{children}</li>,

    blockquote: ({ children }: { children?: ReactNode }) => (
      <blockquote
        style={{
          borderLeft: "4px solid #3b82f6",
          paddingLeft: "1.5rem",
          margin: "1.5rem 0",
          fontStyle: "italic",
          color: "#6b7280",
        }}
      >
        {children}
      </blockquote>
    ),

    pre: ({ children }: { children?: ReactNode }) => (
      <pre
        style={{
          backgroundColor: "#1f2937",
          color: "#f9fafb",
          padding: "1.5rem",
          borderRadius: "0.5rem",
          overflow: "auto",
          margin: "1.5rem 0",
          fontSize: "0.875rem",
        }}
      >
        {children}
      </pre>
    ),

    code: ({ children }: { children?: ReactNode }) => (
      <code
        style={{
          backgroundColor: "#f3f4f6",
          padding: "0.25rem 0.5rem",
          borderRadius: "0.25rem",
          fontSize: "0.875rem",
          fontFamily: "monospace",
          color: "#dc2626",
        }}
      >
        {children}
      </code>
    ),

    img: ({
      src,
      alt,
      width,
      height,
      ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <div style={{ margin: "2rem 0", textAlign: "center" }}>
        <Image
          src={typeof src === "string" ? src : ""}
          alt={alt || ""}
          width={
            typeof width === "number"
              ? width
              : typeof width === "string"
                ? parseInt(width) || 800
                : 800
          }
          height={
            typeof height === "number"
              ? height
              : typeof height === "string"
                ? parseInt(height) || 400
                : 400
          }
          style={{ borderRadius: "0.5rem", maxWidth: "100%", height: "auto" }}
        />
        {alt && (
          <p
            style={{
              fontSize: "0.875rem",
              color: "#6b7280",
              marginTop: "0.5rem",
              fontStyle: "italic",
            }}
          >
            {alt}
          </p>
        )}
      </div>
    ),

    hr: () => <hr />,

    strong: ({ children }: { children?: ReactNode }) => (
      <strong>{children}</strong>
    ),

    // Allow passing through any other components
    ...components,
  };
}
