import BlogDetailsClient from '@/components/BlogSection/BlogDetailsClient';
import { fetchBlogDetail, fetchInstituteDetail } from '@/lib/api';
import Endpoints from '@/constant/endpoints';
import instId from '@/constant/instId';
import {
    DEFAULT_BLOG_IMAGE_URL,
    SITE_URL,
    resolveMediaUrl,
} from '@/lib/site';

async function getMediaBaseUrl() {
    try {
        const response = await fetchInstituteDetail(instId.instId);
        return response?.instituteTechSetting?.mediaUrl || SITE_URL;
    } catch {
        return SITE_URL;
    }
}

function getBlogImage(blog, mediaBaseUrl) {
    return resolveMediaUrl(
        blog?.blog?.thumb || blog?.featuredImage || blog?.image,
        mediaBaseUrl,
        DEFAULT_BLOG_IMAGE_URL
    );
}

export async function generateMetadata({ params }) {
    try {
        const { id, slug } = await params;

        const [response, mediaBaseUrl] = await Promise.all([
            fetchBlogDetail(id),
            getMediaBaseUrl(),
        ]);
        const blog = response?.content;

        if (blog?.id) {
            const title = blog.title || 'Blog | Aurous Academy';
            const description = blog.description || blog.blog?.blog || 'Read our latest blog from Aurous Academy';
            const imageUrl = getBlogImage(blog, mediaBaseUrl);
            const url = `${SITE_URL}/blog/${id}/${slug}`;

            return {
                title: `${title} | Aurous Academy`,
                description,
                keywords: [title, 'Aurous Academy', 'JEE', 'NEET', 'Foundation'].join(', '),
                openGraph: {
                    title: `${title} | Aurous Academy`,
                    description,
                    url,
                    type: 'article',
                    authors: [blog.author || 'Aurous Academy'],
                    publishedTime: blog.date || new Date(blog.createdAt).toISOString(),
                    modifiedTime: blog.updatedAt || blog.createdAt,
                    images: [
                        {
                            url: imageUrl,
                            width: 1200,
                            height: 630,
                            alt: `${title} featured image`,
                        },
                    ],
                },
                twitter: {
                    card: 'summary_large_image',
                    title: `${title} | Aurous Academy`,
                    description,
                    images: [imageUrl],
                },
                alternates: {
                    canonical: url,
                },
            };
        }
    } catch (error) {
        console.error('Error generating metadata:', error);
    }

    return {
        title: 'Blog | Aurous Academy',
        description: 'Explore educational blogs and tips from Aurous Academy',
        openGraph: {
            images: [DEFAULT_BLOG_IMAGE_URL],
        },
        twitter: {
            card: 'summary_large_image',
            images: [DEFAULT_BLOG_IMAGE_URL],
        },
    };
}

async function BlogDetailsPage({ params }) {
    const mediaBaseUrl = await getMediaBaseUrl();
    Endpoints.mediaBaseUrl = mediaBaseUrl;

    const { id, slug } = await params;

    return (
        <div id="homePageCss">
            <div>
                <BlogDetailsClient id={id} slug={slug} />
            </div>
        </div>
    );
}

export default BlogDetailsPage;
