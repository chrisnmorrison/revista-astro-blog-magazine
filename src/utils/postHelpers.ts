import type { Post } from './content/types';
import { formatDateLong, formatDateShort } from './formatDate';
import slugify from 'slugify';

export function calculateReadingTime(
  words: number,
  wordsPerMinute: number = 275
): number {
  return Math.ceil(words / wordsPerMinute);
}

export function getPostSlug(post: Post): string {
  if (post.slug) {
    return post.slug;
  }
  return slugify(post.data.title, { lower: true });
}

export function getPostUrl(post: Post): string {
  const categorySlug = slugify(post.data.category, { lower: true });
  const slug = getPostSlug(post);
  return `/${categorySlug}/${slug}`;
}

export function getCategoryUrl(category: string): string {
  return `/${slugify(category, { lower: true })}`;
}

export interface NormalizedPostData {
  title: string;
  category: string;
  date: string;
  dateLong: string;
  dateShort: string;
  slug: string;
  image?: string;
  excerpt: string;
  readingTime: number;
  url: string;
  categoryUrl: string;
}

export function normalizePostData(post: Post): NormalizedPostData {
  return {
    title: post.data.title,
    category: post.data.category,
    date: post.data.date.toISOString(),
    dateLong: formatDateLong(post.data.date),
    dateShort: formatDateShort(post.data.date),
    slug: getPostSlug(post),
    image: post.data.image,
    excerpt: post.excerpt,
    readingTime: calculateReadingTime(post.readingTime.words),
    url: getPostUrl(post),
    categoryUrl: getCategoryUrl(post.data.category),
  };
}
