import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogArticle from '@/components/seo/BlogArticle';
import { categoryLabel } from '@/components/BlogCard';
import { seoMetadata } from '@/lib/seo';
import { blogPosts, getBlogPost, getRelatedPosts } from '@/content/blog';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return seoMetadata({
    title: `${post.title} | Blog Prep-Anglais`,
    description: post.description,
    path: `/blog/${post.slug}`,
    overline: `Prep-Anglais · ${categoryLabel(post.category)}`,
  });
}

export default function PostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return <BlogArticle post={post} related={getRelatedPosts(post.slug, 3)} />;
}