# Revista Architecture

Simple architecture overview for the Revista blog.

## Technology Stack

- **Astro** - Static site generator (zero-JS by default)
- **React** - Interactive components (Navbar, MobileMenu, ContactForm)
- **TypeScript** - Type safety
- **MDX** - Blog post format
- **SCSS** - Styling

## Key Features

- **Zero-JS by default**: Astro components render to HTML, no JavaScript needed
- **React islands**: Interactive components use `client:load` directive
- **Content Collections**: MDX posts in `src/content/posts/` with Zod validation
- **Static generation**: All pages pre-rendered at build time

## Folder Structure

```
src/
├── components/    # Astro and React components
├── content/       # MDX blog posts
├── pages/         # Route pages
├── utils/         # Helper functions
└── css/           # Global and component styles
```

## Styling

- Global styles in `src/css/main.css`
- Component-specific styles in scoped `<style>` blocks
- SCSS support via Sass preprocessor
