# Gabriel Keller - Personal Website

A clean, minimal personal website showcasing professional information and social connections. Built with modern web technologies and optimized for performance and accessibility.

## Overview

This is a single-page personal website that presents basic information about Gabriel Keller, a full-stack software engineer, along with links to social media profiles. The site emphasizes simplicity, readability, and professional presentation.

## Tech Stack

### Frontend Framework

- **Next.js 15.1.0** - React framework with App Router for server-side rendering and optimal performance
- **React 19** - Latest React version for component-based UI development
- **TypeScript** - Static type checking for enhanced developer experience and code reliability

### Styling & Design

- **Tailwind CSS 3.4.17** - Utility-first CSS framework for rapid UI development
- **tailwindcss-animate** - Animation utilities for smooth interactions
- **@tailwindcss/typography** - Beautiful typography defaults for content
- **Mulish** - Google Fonts typeface for clean, readable typography

### UI Components

- **Radix UI** - Comprehensive collection of accessible, unstyled UI primitives
  - Form components, navigation, dialogs, and interactive elements
  - Built-in accessibility features and keyboard navigation
- **Lucide React** - Beautiful, customizable SVG icons
- **class-variance-authority** - Utility for creating component variants
- **clsx** & **tailwind-merge** - Conditional className utilities

### Package Management & Build Tools

- **pnpm** - Fast, disk space efficient package manager with superior monorepo support
  - Uses content-addressable storage to save disk space
  - Strict dependency resolution prevents phantom dependencies
  - Faster installations compared to npm/yarn
- **ESLint** - Code linting and style enforcement with Next.js integration
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing for CSS
- **TypeScript** - Compile-time type checking and IntelliSense

### Deployment

- **Vercel** - Optimized hosting platform with automatic deployments
- Automatic HTTPS, global CDN, and performance monitoring

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with font configuration
│   ├── page.tsx             # Main landing page
│   └── types.d.ts           # TypeScript type definitions
├── public/                  # Static assets
├── components.json          # shadcn/ui configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.mjs         # Next.js configuration
```

## Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Performance Optimized** - Built with Next.js for fast loading and SEO
- **Accessible** - WCAG compliant with proper semantic HTML and ARIA labels
- **Type Safe** - Full TypeScript implementation for reliable code
- **Modern Fonts** - Mulish from Google Fonts for excellent readability
- **Social Integration** - Direct links to GitHub, LinkedIn, and X (Twitter)

## Design Philosophy

The website follows a minimal, content-focused approach with:

- Clean typography hierarchy using Mulish
- Consistent spacing and visual rhythm
- Subtle hover animations and transitions
- Professional color palette with good contrast ratios
- Mobile-first responsive design

## Development

### Prerequisites

- **Node.js** 18+ (specified in `.nvmrc`)
- **pnpm** 8+ (specified in `package.json` via `packageManager` field)

### Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Available Scripts

```bash
# Development
pnpm dev              # Start development server with hot reload
pnpm build            # Create optimized production build
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint checks
pnpm lint:fix         # Fix auto-fixable ESLint issues
pnpm type-check       # Run TypeScript type checking

# Maintenance
pnpm clean            # Clean build artifacts (.next, out)
pnpm reinstall        # Clean install (prune store, remove node_modules, fresh install)
```

### pnpm Benefits

- **Disk Efficiency** - Uses hard links and content-addressable storage
- **Speed** - Faster installations and updates
- **Security** - Strict dependency resolution prevents supply chain attacks
- **Monorepo Support** - Excellent workspace management (if needed in future)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is personal and proprietary to Gabriel Keller.
