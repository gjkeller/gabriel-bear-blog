import type { MDXComponents } from 'mdx/types';
import { useMDXComponents as getBaseComponents } from './components/mdx-components';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getBaseComponents(components);
}
