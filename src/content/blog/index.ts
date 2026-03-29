export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
}

// Import all posts
import { post1 } from './welcome-to-the-postpartum-ot';
import { post2 } from './the-power-of-showing-up';
import { post3 } from './being-you-is-your-superpower';
import { post4 } from './creating-moments-that-matter';
import { post5 } from './the-invisible-weight';
import { post6 } from './getting-paid-for-postpartum-ot-services';
import { post7 } from './self-settling-vs-self-soothing';
import { post8 } from './why-the-questions-we-ask-families-matter';
import { post9 } from './the-ot-advantage';
import { post10 } from './from-overwhelmed-to-in-control';
import { post11 } from './why-knowing-what-to-do-isnt-enough';
import { post12 } from './how-to-stop-second-guessing';
import { post14 } from './how-the-nervous-system-impacts-infant-sleep';
import { post15 } from './more-than-baby-blues';

export const blogPosts: BlogPost[] = [
  post1, post2, post3, post4, post5, post6, post7, post8, post9,
  post10, post11, post12, post14, post15,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
