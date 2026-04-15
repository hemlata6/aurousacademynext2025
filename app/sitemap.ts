import { MetadataRoute } from 'next';

const BLOG_COURSE_ID = 3811;

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

async function fetchBlogRoutes(baseUrl: string): Promise<MetadataRoute.Sitemap> {
  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://prodapi.classiolabs.com/';
    const response = await fetch(`${apiBaseUrl}admin/course/fetch-content`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        courseId: BLOG_COURSE_ID,
        contentTypes: ['blog'],
        page: 0,
        pageSize: 100,
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      return [];
    }

    const payload = await response.json();
    const contentList = Array.isArray(payload?.contentList) ? payload.contentList : [];

    return contentList
      .filter((item) => item?.entityType === 'blog' && item?.active === true)
      .map((item) => {
        const id = item?.id;
        const title = item?.title || item?.blog?.title || `blog-${id}`;
        const slug = slugify(title);
        const updatedAt = item?.blog?.updatedAt || item?.updatedAt || new Date().toISOString();

        return {
          url: `${baseUrl}/blog/${id}/${slug}`,
          lastModified: updatedAt,
          changeFrequency: 'weekly' as const,
          priority: 0.75,
        };
      });
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://aurousacademy.com';
  const today = new Date('2024-04-09').toISOString().split('T')[0];

  // Main static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: today,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/course`,
      lastModified: today,
      changeFrequency: 'daily' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/jee`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/neet`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/foundation`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
      changeFrequency: 'daily' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/freeresources`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ourTeam`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/result`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/timetable`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/methodologies`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/previousyearpaper`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/banner`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: today,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacyPolicy`,
      lastModified: today,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termConditions`,
      lastModified: today,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  const blogPages = await fetchBlogRoutes(baseUrl);

  return [...staticPages, ...blogPages];
}
