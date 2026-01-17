import { getCollection, type CollectionEntry } from 'astro:content';
import readingTime from 'reading-time';
import slugify from 'slugify';
import type { ContentAdapter, Post, PostData, ReadingTime } from '../types';
import { getPostSlug } from '../../postHelpers';

type MarkdownPost = CollectionEntry<'posts'>;

export class MarkdownContentAdapter implements ContentAdapter {
  private async convertPost(post: MarkdownPost): Promise<Post> {
    const slug = getPostSlug({
      ...post,
      slug: post.data.slug || slugify(post.data.title, { lower: true }),
      excerpt: '',
      readingTime: { text: '', minutes: 0, time: 0, words: 0 },
    });

    await post.render();

    const body = post.body || '';
    const contentText = `${post.data.title} ${body}`
      .replace(/[#*_~\[\]()]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const readingTimeData = readingTime(contentText);

    const plainText = body
      .replace(/```[\s\S]*?```/g, '')
      .replace(/`[^`]+`/g, '')
      .replace(/[#*_~\[\]()!]/g, '')
      .replace(/\n+/g, ' ')
      .trim()
      .substring(0, 160);

    const excerpt =
      plainText.length > 0
        ? plainText.length >= 160
          ? `${plainText}...`
          : plainText
        : `${post.data.title.substring(0, 100)}...`;

    return {
      id: post.id,
      slug,
      body,
      excerpt,
      data: {
        title: post.data.title,
        image: post.data.image,
        imageAttribution: post.data.imageAttribution,
        date: post.data.date,
        category: post.data.category,
        trending: post.data.trending,
        topPick: post.data.topPick,
        popular: post.data.popular,
        slug: post.data.slug,
      },
      readingTime: {
        text: readingTimeData.text,
        minutes: readingTimeData.minutes,
        time: readingTimeData.time,
        words: readingTimeData.words,
      },
      render: async () => {
        const rendered = await post.render();
        return {
          Content: rendered.Content,
          headings: rendered.headings || [],
        };
      },
    };
  }

  async getAllPosts(): Promise<Post[]> {
    const posts = await getCollection('posts');
    const convertedPosts = await Promise.all(
      posts.map((post) => this.convertPost(post))
    );

    return convertedPosts.sort((a, b) => {
      const dateA = new Date(a.data.date).getTime();
      const dateB = new Date(b.data.date).getTime();
      return dateB - dateA;
    });
  }

  async getPostsByCategory(category: string): Promise<Post[]> {
    const allPosts = await this.getAllPosts();
    return allPosts.filter(
      (post) => post.data.category.toLowerCase() === category.toLowerCase()
    );
  }

  async getPostBySlug(category: string, slug: string): Promise<Post | undefined> {
    const allPosts = await this.getAllPosts();
    return allPosts.find(
      (post) =>
        post.data.category.toLowerCase() === category.toLowerCase() &&
        (post.slug === slug || post.id === slug)
    );
  }

  async getDistinctCategories(): Promise<string[]> {
    const allPosts = await this.getAllPosts();
    const categories = new Set(allPosts.map((post) => post.data.category));
    return Array.from(categories);
  }
}
