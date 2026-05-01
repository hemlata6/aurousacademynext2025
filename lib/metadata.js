import { fetchBlogDetail } from './api';
import { DEFAULT_BLOG_IMAGE_URL, DEFAULT_OG_IMAGE_URL, SITE_URL, resolveMediaUrl } from './site';

/**
 * Generate default metadata
 */
export const defaultMetadata = {
  title: 'Aurous Academy - Online Courses for JEE, NEET & Foundation',
  description: 'Aurous Academy provides comprehensive online courses for JEE, NEET preparation and foundation classes.',
  keywords: 'JEE, NEET, Online Courses, Foundation Classes',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Aurous Academy',
    images: [
      {
        url: DEFAULT_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Aurous Academy',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aurouspragyan',
    creator: '@aurouspragyan',
  },
};

/**
 * Generate blog metadata dynamically
 */
export async function generateBlogMetadata(contentId) {
  try {
    const blogData = await fetchBlogDetail(contentId);
    
    if (!blogData || !blogData.content) {
      return defaultMetadata;
    }

    const blog = blogData.content;
    const baseUrl = SITE_URL;
    const blogUrl = `${baseUrl}/blog/${blog.id}/${blog.slug || blog.title?.toLowerCase().replace(/\s+/g, '-')}`;
    
    // Extract image from blog content or use default
    const blogImage = resolveMediaUrl(blog.image || blog.featuredImage, null, DEFAULT_BLOG_IMAGE_URL);
    
    // Create metadata object
    const metadata = {
      title: blog.title || 'Blog - Aurous Academy',
      description: blog.description || blog.summary || 'Read our latest blog post on Aurous Academy',
      keywords: [
        blog.title,
        ...(blog.tags ? blog.tags.split(',') : []),
        'Aurous Academy',
        'Blog'
      ].filter(Boolean).join(', '),
      canonical: blogUrl,
      meta: [
        {
          name: 'description',
          content: blog.description || blog.summary || 'Read our latest blog post on Aurous Academy',
        },
        {
          name: 'keywords',
          content: blog.title,
        },
        {
          property: 'og:title',
          content: blog.title,
        },
        {
          property: 'og:description',
          content: blog.description || blog.summary || 'Read our latest blog post',
        },
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:url',
          content: blogUrl,
        },
        {
          property: 'og:image',
          content: blogImage,
        },
        {
          property: 'article:published_time',
          content: blog.createdAt || new Date().toISOString(),
        },
        {
          property: 'article:modified_time',
          content: blog.updatedAt || new Date().toISOString(),
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: blog.title,
        },
        {
          name: 'twitter:description',
          content: blog.description || blog.summary || 'Read our latest blog post',
        },
        {
          name: 'twitter:image',
          content: blogImage,
        },
      ],
      openGraph: {
        title: blog.title,
        description: blog.description || blog.summary || 'Read our latest blog post',
        url: blogUrl,
        type: 'article',
        publishedTime: blog.createdAt,
        modifiedTime: blog.updatedAt,
        authors: [blog.author || 'Aurous Academy'],
        images: [
          {
            url: blogImage,
            width: 1200,
            height: 630,
            alt: blog.title,
            type: 'image/jpeg',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description: blog.description || blog.summary,
        images: [blogImage],
      },
    };

    return metadata;
  } catch (error) {
    console.error('Error generating blog metadata:', error);
    return defaultMetadata;
  }
}

/**
 * Generate structured data for JSON-LD
 */
export function generateStructuredData(blog) {
  if (!blog) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.description || blog.summary,
    image: blog.image || blog.featuredImage,
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt,
    author: {
      '@type': 'Organization',
      name: 'Aurous Academy',
      logo: 'https://aurousacademy.com/logo.svg',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Aurous Academy',
      logo: {
        '@type': 'ImageObject',
        url: DEFAULT_OG_IMAGE_URL,
      },
    },
  };
}
