# Revista - Open Source Astro Blog/Magazine Template

<div align="center">

![Revista](https://img.shields.io/badge/Astro-5.6.3-FF5D01?logo=astro&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)

**A beautiful, modern, and fully customizable blog/magazine template built with Astro v5. Perfect for personal blogs, publications, or content sites. Free and open-source forever.**

[Features](#features) • [Demo](#demo) • [Installation](#installation) • [Documentation](#documentation) • [Contributing](#contributing) • [License](#license)

</div>

---

## What is Revista?

Revista is a free, open-source blog and magazine template built with [Astro](https://astro.build). It was migrated from an open-source Gatsby blog template that I release years ago.

It's designed to be fast, modern, and easy to customize. Simply write your articles in Markdown, place them in the content folder, and Revista will automatically create categories and articles!

**Perfect for:**
- Personal blogs
- Magazine-style publications
- Educational content sites
- Documentation sites
- Content creators
- Developers who want a fast, minimal blog

## Features

### 🚀 Performance

- **Astro v5** - Ultra-fast static site generator with zero-JS by default
- **Minimal JavaScript** - Only interactive components are hydrated, reducing bundle size
- **Fast Builds** - Optimized for static generation
- **SEO Optimized** - Built-in meta tags, Open Graph, and structured data
- **Lighthouse Score** - Designed for perfect performance scores

### 📝 Content Management

- **Multiple Content Sources** - Choose between Markdown/MDX files or Sanity CMS
- **Markdown/MDX Support** - Write content in familiar Markdown with React components
- **Type-Safe Content** - TypeScript and Zod schemas ensure content validity
- **Automatic Categories** - Categories are automatically created from your posts
- **Featured Sections** - Support for trending, top pick, and popular posts
- **Reading Time** - Automatic reading time calculation

### 🎨 Design & Styling

- **Modern Design** - Clean, professional magazine-style layout
- **Fully Responsive** - Mobile-first design that works on all devices
- **Organized SCSS** - Modular SCSS architecture for easy customization
- **Customizable** - Easy to modify colors, fonts, and styles
- **Accessible** - Built with accessibility in mind

### 🔧 Developer Experience

- **TypeScript** - Full TypeScript support for type safety
- **Component Architecture** - Organized, reusable components
- **Strategy Pattern** - Easy to extend with new content providers
- **Hot Module Replacement** - Fast development with instant updates
- **Well Documented** - Comprehensive documentation and examples

### 📦 Built-In Features

- **Contact Form** - Powered by StaticForms.xyz (optional)
- **Sitemap** - Automatic sitemap generation
- **Categories Page** - Automatic category listing
- **Sidebar** - About, Partners, and Categories sidebar
- **Featured Sections** - Top Articles, Trending, and Popular
- **Recent Posts** - Automatically displays latest posts
- **Hero Section** - Eye-catching homepage hero with category links
- **404 Page** - Custom error page

## Demo

**Live Demo:** [View Demo](https://revista-astro-blog-magazine.pages.dev/)

## Installation

### Prerequisites

- Node.js >= 18.0.0
- npm, yarn, or pnpm

### Quick Start

1. **Clone or fork the repository**
   ```bash
   git clone https://github.com/chrisnmorrison/revista-astro-blog-magazine.git
   cd revista-astro-blog-magazine
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` with your configuration (see [Configuration](#configuration) below)

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:4321` to see your site!

## Configuration

### Environment Variables

Copy `env.example` to `.env` and configure:

#### StaticForms (Contact Form) - Optional

```env
# Get your API key from https://www.staticforms.xyz
PUBLIC_STATICFORMS_API_KEY=sf_your_api_key_here
PUBLIC_STATICFORMS_REDIRECT_URL=/success
```

#### Content Provider - Optional

Choose between Markdown (default) or Sanity CMS:

**Markdown (Default)**
```env
PUBLIC_CONTENT_PROVIDER=markdown
```

**Sanity CMS**
```env
PUBLIC_CONTENT_PROVIDER=sanity
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
PUBLIC_SANITY_USE_CDN=true
SANITY_API_TOKEN=your_token_here  # Optional, for private datasets
```

See [CONTENT_PROVIDERS.md](./CONTENT_PROVIDERS.md) for detailed Sanity setup.

### Site Configuration

Edit `astro.config.mjs` to customize:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com', // Your site URL
  // ... other config
});
```

### Customization

#### Colors & Themes

Edit CSS variables in `src/css/main.css`:

```css
:root {
  --primary-8: #2c89b1; /* Primary color */
  --grey-8: hsl(0, 0%, 25%); /* Text color */
  /* ... more variables */
}
```

#### Categories

Configure categories and colors in `src/utils/heroCategories.ts`:

```typescript
export const categories: Category[] = [
  { category: 'Technology', color: '#2c89b1' },
  { category: 'Science', color: '#48c78e' },
  // Add your categories
];
```

## Usage

### Creating Posts

1. **Using Markdown/MDX (Default)**

   Create a new file in `src/content/posts/`:

   ```markdown
   ---
   title: Your Post Title
   image: /path/to/image.jpg
   date: 2024-01-15
   category: Technology
   trending: true
   topPick: false
   popular: false
   ---
   
   # Your Post Content
   
   Write your content here in Markdown...
   ```

2. **Using Sanity CMS**

   Set `PUBLIC_CONTENT_PROVIDER=sanity` and configure your Sanity project. See [CONTENT_PROVIDERS.md](./CONTENT_PROVIDERS.md) for details.

### Adding Images

Place images in `public/content/category/post-slug/images/` or reference them absolutely:

```markdown
![Alt text](/content/category/post/images/image.jpg)
```

### Categories

Categories are automatically created from your posts. No manual configuration needed!

## Project Structure

```
revista-astro-blog-magazine/
├── public/                      # Static assets (images, favicons)
│   └── content/                 # Post images and assets
├── src/
│   ├── assets/                  # Source images and SVGs
│   ├── components/              # Reusable components
│   │   ├── About/              # About page components
│   │   ├── Sidebar/            # Sidebar components
│   │   ├── Posts/              # Post card components
│   │   ├── featured/           # Featured sections
│   │   └── ...                 # Other components
│   ├── constants/              # Constants (links, social links)
│   ├── content/                # Content Collections (MDX posts)
│   │   └── posts/              # Your blog posts
│   ├── css/                    # Stylesheets
│   │   ├── components/         # Component SCSS files
│   │   ├── pages/              # Page-specific SCSS
│   │   ├── main.css            # Global styles and variables
│   │   └── ...                 # Other CSS files
│   ├── layouts/                # Page layouts
│   │   └── BaseLayout.astro   # Base layout with head and footer
│   ├── pages/                  # Route pages
│   │   ├── [category]/         # Dynamic category routes
│   │   ├── [category]/[slug].astro  # Dynamic post routes
│   │   ├── about.astro         # About page
│   │   ├── categories.astro    # Categories listing
│   │   ├── contact.astro       # Contact page
│   │   └── index.astro         # Homepage
│   └── utils/                  # Utility functions
│       ├── content/            # Content provider abstractions
│       │   ├── adapters/       # Content adapters (Markdown, Sanity)
│       │   ├── ContentProviderFactory.ts
│       │   └── types.ts
│       ├── formatDate.ts       # Date formatting utilities
│       ├── getPosts.ts         # Post fetching API
│       ├── heroCategories.ts   # Category configuration
│       ├── imagePath.ts        # Image path resolution
│       └── postHelpers.ts      # Post-related utilities
├── astro.config.mjs            # Astro configuration
├── env.example                 # Environment variables template
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## Scripts

```bash
# Development
npm run dev          # Start dev server at localhost:4321
npm start            # Alias for dev

# Building
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run format       # Format code with Prettier
npm run type-check   # Run TypeScript type checking
```

## Deployment

Revista can be deployed to any static hosting service:

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Build settings are auto-detected

### Cloudflare Pages

1. Connect your repository
2. Build command: `npm run build`
3. Build output directory: `dist`

### GitHub Pages

1. Update `astro.config.mjs`:
   ```javascript
   site: 'https://yourusername.github.io',
   base: '/repository-name',
   ```
2. Use GitHub Actions or deploy manually

### Other Platforms

Any platform that supports static sites (AWS S3, Firebase Hosting, etc.) will work!

## Technology Stack

- **[Astro](https://astro.build)** v5.6.3 - Static site generator
- **[React](https://react.dev)** v19.2.3 - Interactive components
- **[TypeScript](https://www.typescriptlang.org)** v5.7.2 - Type safety
- **[MDX](https://mdxjs.com)** - Markdown with JSX
- **[Sass](https://sass-lang.com)** - CSS preprocessor
- **[Reading Time](https://github.com/ngryman/reading-time)** - Reading time calculation
- **Optional:** Sanity CMS for headless content management

## Documentation

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Architecture and design decisions
- **[CONTENT_PROVIDERS.md](./CONTENT_PROVIDERS.md)** - Content provider guide (Markdown vs Sanity)
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Contribution guidelines
- **[SUPPORT.md](./SUPPORT.md)** - Support and help resources

## Customization Guide

### Changing Colors

Edit CSS variables in `src/css/main.css`:

```css
:root {
  --primary-8: #your-color;  /* Primary color */
  --primary-7: #your-color;  /* Hover color */
  --grey-8: #your-color;     /* Text color */
}
```

### Changing Fonts

Update font imports in `src/layouts/BaseLayout.astro`:

```astro
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

Then update the CSS variable:

```css
:root {
  --ff-primary: 'YourFont', sans-serif;
}
```

### Adding Pages

Create new `.astro` files in `src/pages/`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Page Title" description="Page description">
  <h1>Your Content</h1>
</BaseLayout>
```

### Modifying Components

Components are in `src/components/`. Most are Astro components with scoped styles. Interactive components use React with `client:load` directive.

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

**Ways to contribute:**
- 🐛 Report bugs
- 💡 Suggest features
- 📝 Improve documentation
- 🎨 Enhance design
- ⚡ Optimize performance
- 🌐 Add translations

## Support

- **Issues:** [GitHub Issues](https://github.com/chrisnmorrison/revista-astro-blog-magazine/issues)
- **Discussions:** [GitHub Discussions](https://github.com/chrisnmorrison/revista-astro-blog-magazine/discussions)
- **Support Guide:** [SUPPORT.md](./SUPPORT.md)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Credits

**Created by:** [Chris Morrison](https://mesmerdesign.ca)

**Inspired by:** The open-source community and the need for fast, beautiful blog templates.

## Star History

If you find this template useful, please consider giving it a ⭐ on GitHub!

## Related Projects

- [Revista Gatsby](https://github.com/chrisnmorrison/revista-gatsby-blog-magazine) - Gatsby version of Revista

## Acknowledgments

- Built with [Astro](https://astro.build)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

<div align="center">

**Made with ❤️ for the open-source community**

[⬆ Back to Top](#revista---open-source-astro-blogmagazine-template)

</div>
