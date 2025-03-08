/// <reference types="react" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
} 