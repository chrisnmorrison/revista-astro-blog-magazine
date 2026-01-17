# Content Providers Guide

This project supports multiple content sources through a **Strategy Pattern** implementation. You can easily switch between Markdown/MDX and Sanity CMS via environment variables.

## Architecture Overview

The content provider system consists of:

1. **ContentAdapter Interface** (`src/utils/content/types.ts`): Defines the contract all adapters must follow
2. **Content Adapters**: Implementations for each content source
   - `MarkdownContentAdapter`: Wraps Astro Content Collections
   - `SanityContentAdapter`: Fetches from Sanity CMS
3. **ContentProviderFactory** (`src/utils/content/ContentProviderFactory.ts`): Creates the appropriate adapter based on configuration

## Switching Content Providers

### Using Markdown/MDX (Default)

Markdown is the default content provider. No configuration needed!

1. Place your `.md` or `.mdx` files in `src/content/posts/`
2. Use the frontmatter schema defined in `src/content/config.ts`
3. Build and deploy

### Using Sanity CMS

1. **Set Environment Variables:**
   ```env
   PUBLIC_CONTENT_PROVIDER=sanity
   PUBLIC_SANITY_PROJECT_ID=your_project_id
   PUBLIC_SANITY_DATASET=production
   PUBLIC_SANITY_API_VERSION=2024-01-01
   PUBLIC_SANITY_USE_CDN=true
   SANITY_API_TOKEN=your_token_here  # Optional, only for private datasets
   ```

2. **Configure Sanity Schema:**
   Ensure your Sanity schema matches the expected structure (see below)

3. **Build:**
   The adapter will automatically fetch from Sanity during build

## Sanity Schema Requirements

Your Sanity schema should include:

```javascript
// schemas/post.js
export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Featured Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'imageAttribution',
      type: 'string',
      title: 'Image Attribution URL',
      optional: true
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{ type: 'category' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'trending',
      type: 'boolean',
      title: 'Trending',
      initialValue: false
    },
    {
      name: 'topPick',
      type: 'boolean',
      title: 'Top Pick',
      initialValue: false
    },
    {
      name: 'popular',
      type: 'boolean',
      title: 'Popular',
      initialValue: false
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        {
          type: 'block'
        }
      ]
    }
  ]
}
```

```javascript
// schemas/category.js
export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    }
  ]
}
```

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `PUBLIC_CONTENT_PROVIDER` | No | `markdown` | Content provider: `markdown` or `sanity` |
| `PUBLIC_SANITY_PROJECT_ID` | Yes (Sanity) | - | Your Sanity project ID |
| `PUBLIC_SANITY_DATASET` | No | `production` | Sanity dataset name |
| `PUBLIC_SANITY_API_VERSION` | No | `2024-01-01` | Sanity API version |
| `PUBLIC_SANITY_USE_CDN` | No | `true` | Use CDN for faster queries |
| `SANITY_API_TOKEN` | No | - | API token for private datasets (server-side only) |

## Adding a New Content Provider

To add a new content provider:

1. **Create an adapter** implementing `ContentAdapter` interface:
   ```typescript
   // src/utils/content/adapters/NewProviderAdapter.ts
   import { ContentAdapter, Post } from '../types';
   
   export class NewProviderAdapter implements ContentAdapter {
     async getAllPosts(): Promise<Post[]> { /* ... */ }
     async getPostsByCategory(category: string): Promise<Post[]> { /* ... */ }
     async getPostBySlug(category: string, slug: string): Promise<Post | undefined> { /* ... */ }
     async getDistinctCategories(): Promise<string[]> { /* ... */ }
   }
   ```

2. **Update the factory** to include your new provider:
   ```typescript
   // src/utils/content/ContentProviderFactory.ts
   export type ContentProvider = 'markdown' | 'sanity' | 'newprovider';
   
   function createContentAdapter(): ContentAdapter {
     switch (provider) {
       case 'newprovider':
         return new NewProviderAdapter();
       // ...
     }
   }
   ```

3. **Add environment variable** support in `env.example`

## Troubleshooting

### Sanity Connection Issues

- Verify `PUBLIC_SANITY_PROJECT_ID` is correct
- Check dataset name matches your Sanity project
- For private datasets, ensure `SANITY_API_TOKEN` is set
- Test your GROQ queries in the Sanity Studio

### Type Errors

The Post type is unified across all providers. If you see type errors:
- Ensure your adapter returns posts matching the `Post` interface
- Check that all required fields are present
- Verify date types are `Date` objects

### Fallback Behavior

If Sanity fails to initialize, the system automatically falls back to Markdown. Check console for warnings.
