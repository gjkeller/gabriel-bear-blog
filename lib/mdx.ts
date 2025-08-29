import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDirectory = join(process.cwd(), "content");

export interface PostMetadata {
  title: string;
  description?: string;
  date: string;
  slug: string;
  tags?: string[];
  draft?: boolean;
  author?: string;
  image?: string;
}

export interface Post extends PostMetadata {
  content: string;
  readingTime: ReturnType<typeof readingTime>;
}

export interface PageMetadata {
  title: string;
  description?: string;
  slug: string;
  draft?: boolean;
}

export interface Page extends PageMetadata {
  content: string;
}

function getMDXFiles(dir: string): string[] {
  return readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

function readMDXFile(filePath: string) {
  const rawContent = readFileSync(filePath, "utf-8");
  return matter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { data, content } = readMDXFile(join(dir, file));
    const slug = file.replace(/\.mdx$/, "");

    return {
      metadata: { ...data, slug } as PostMetadata | PageMetadata,
      content,
    };
  });
}

export function getBlogPosts(): Post[] {
  const blogDir = join(contentDirectory, "blog");
  const posts = getMDXData(blogDir);

  return posts
    .filter((post) => !post.metadata.draft)
    .map((post) => ({
      ...(post.metadata as PostMetadata),
      content: post.content,
      readingTime: readingTime(post.content),
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): Post | null {
  try {
    const filePath = join(contentDirectory, "blog", `${slug}.mdx`);
    const { data, content } = readMDXFile(filePath);

    return {
      ...(data as PostMetadata),
      slug,
      content,
      readingTime: readingTime(content),
    };
  } catch {
    return null;
  }
}

export function getPages(): Page[] {
  const pagesDir = join(contentDirectory, "pages");
  const pages = getMDXData(pagesDir);

  return pages
    .filter((page) => !page.metadata.draft)
    .map((page) => ({
      ...(page.metadata as PageMetadata),
      content: page.content,
    }));
}

export function getPage(slug: string): Page | null {
  try {
    const filePath = join(contentDirectory, "pages", `${slug}.mdx`);
    const { data, content } = readMDXFile(filePath);

    return {
      ...(data as PageMetadata),
      slug,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllSlugs(): string[] {
  const blogSlugs = getMDXFiles(join(contentDirectory, "blog")).map((file) =>
    file.replace(/\.mdx$/, ""),
  );

  return blogSlugs;
}
