import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import BlogDetailsClient from '@/components/BlogSection/BlogDetailsClient';
import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';
import instId from '@/constant/instId';

export async function generateMetadata({ params }) {
    try {
        const { id, slug } = await params;

        // Fetch blog data
        const response = await Network.fetchBlogDetailApi(id);
        const blog = response?.content;

        if (blog?.id) {
            const title = blog.title || 'Blog | Aurous Academy';
            const description = blog.description || blog.blog?.blog || 'Read our latest blog from Aurous Academy';
            // Build absolute image URL - prioritize thumb from blog.blog
            let imageUrl = `https://aurousacademy.com/og-image.jpg`; // fallback

            if (blog.blog?.thumb) {
                const thumbUrl = blog.blog.thumb;
                if (thumbUrl.startsWith('http')) {
                    imageUrl = thumbUrl;
                } else {
                    // Construct full URL with media base URL from endpoints
                    imageUrl = `${Endpoints.mediaBaseUrl}${thumbUrl}`;
                }
            } else if (blog.image) {
                const imageUrlValue = blog.image;
                if (imageUrlValue.startsWith('http')) {
                    imageUrl = imageUrlValue;
                } else {
                    imageUrl = `${Endpoints.mediaBaseUrl}${imageUrlValue}`;
                }
            }

            console.log('Final imageUrl:', imageUrl);

            const url = `https://aurousacademy.com/blog/${id}/${slug}`;

            return {
                title: `${title} | Aurous Academy`,
                description,
                openGraph: {
                    title: `${title} | Aurous Academy`,
                    description,
                    image: imageUrl,
                    url,
                    type: 'article',
                    authors: [blog.author || 'Aurous Academy'],
                    publishedTime: blog.date || new Date(blog.createdAt).toISOString(),
                },
                twitter: {
                    card: 'summary_large_image',
                    title: `${title} | Aurous Academy`,
                    description,
                    image: imageUrl,
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
    };
}

async function BlogDetailsPage({ params }) {
    // const instId = 120;

    const getInstituteDetail = async () => {
        try {
            let response = await Network.fetchInstituteDetail(instId.instId);
            Endpoints.mediaBaseUrl = response.instituteTechSetting.mediaUrl;
        } catch (err) {
            console.log(err);
        }
    };

    // Setup institute detail
    await getInstituteDetail();

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
