# Revista Architecture

This document describes the architecture and design decisions for Revista.

## Technology Stack

- **Astro** - Static site generator (zero-JS by default)
- **React** - Interactive components (islands)
- **TypeScript** - Type safety
- **MDX** - Content format
- **SCSS** - Styling (via Sass)

## Architecture Principles

### 1. Zero-JS by Default

Astro components are server-rendered by default, resulting in zero JavaScript sent to the client. React components are only used for interactive features (Navbar, MobileMenu, ContactForm) and marked with `client:load` directive.

### 2. Content Collections

Posts are managed through Astro's Content Collections API, providing:
- Type safety with Zod schemas
- Automatic validation
- TypeScript autocomplete
- Centralized content management

### 3. Component Organization

```
src/components/
├── About/           # About page components (Astro)
├── featured/        # Featured sections (Astro)
├── Posts/          # Post components (Astro)
├── Sidebar/        # Sidebar components (Astro)
└── [others].jsx    # Interactive React components
```

### 4. Utility Functions

Utilities are organized in `src/utils/`:

- `getPosts.ts` - Post fetching and processing
- `heroCategories.ts` - Category configuration
- `imagePath.ts` - Image path resolution
- `postHelpers.ts` - Post-related utilities
- `formatDate.ts` - Date formatting

### 5. Type Safety

TypeScript is used throughout:
- Content collection schemas
- Component props interfaces
- Utility function types
- Post data types

## Data Flow

### Posts

1. MDX files in `src/content/posts/` are parsed
2. Frontmatter is validated against Zod schema
3. Posts are processed in `getPosts.ts`:
   - Slug generation
   - Excerpt extraction
   - Reading time calculation
4. Posts are sorted by date (newest first)

### Pages

- Static pages: `src/pages/*.astro`
- Dynamic routes: `src/pages/[category]/[slug].astro`
- `getStaticPaths()` generates all possible routes at build time

### Components

- **Astro components**: Server-rendered, no JS
- **React components**: Client-rendered islands with `client:load`
- Props are typed with TypeScript interfaces

## Image Handling

Images are resolved using `resolveImagePath()` utility:

1. External URLs → used as-is
2. Absolute paths (starting with `/`) → used as-is
3. Relative paths → resolved to `/content/` or appropriate public path

## Styling

- Global styles: `src/css/main.css`
- Component styles: Scoped `<style>` blocks in Astro components
- SCSS support: Available via Sass preprocessor
- CSS Variables: Used for theming (see `--primary-*` variables)

## Build Process

1. Astro reads content collections
2. Pages are generated (static or via `getStaticPaths()`)
3. Components are rendered to HTML
4. React islands are bundled separately
5. Final output in `dist/` directory

## Performance Considerations

- **Zero-JS by default**: Most components output pure HTML
- **Code splitting**: React islands are loaded only when needed
- **Static generation**: All pages pre-rendered at build time
- **Image optimization**: Use Astro Image component for optimization (when needed)
- **CSS**: Scoped to components, no global CSS leaks

## Future Improvements

- [ ] Add Astro Image component for automatic image optimization
- [ ] Implement view transitions for smoother navigation
- [ ] Add RSS feed generation
- [ ] Implement search functionality
- [ ] Add dark mode support
- [ ] Improve type safety for component props
