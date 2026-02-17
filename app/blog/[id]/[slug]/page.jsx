import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import BlogDetailsClient from './BlogDetailsClient';
import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';

export async function generateMetadata({ params }) {
    try {
        const { id } = params;
        
        // Fetch blog data
        const response = await Network.fetchBlogDetailApi(id);
        const blog = response?.content;

        if (blog?.id) {
            const title = blog.title || 'Blog | Aurous Academy';
            const description = blog.description || blog.blog?.blog || blog.content?.substring(0, 160) || 'Read our latest blog';
            
            // Build absolute image URL
            let imageUrl = '/og-image.jpg'; // fallback
            if (blog.image) {
                imageUrl = blog.image.startsWith('http') ? blog.image : `${Endpoints.mediaBaseUrl}${blog.image}`;
            } else if (blog.blog?.thumb) {
                imageUrl = blog.blog.thumb.startsWith('http') ? blog.blog.thumb : `${Endpoints.mediaBaseUrl}${blog.blog.thumb}`;
            }
            
            const url = `https://aurousacademy.com/blog/${id}/${params.slug}`;

            return {
                title,
                description,
                openGraph: {
                    title,
                    description,
                    image: imageUrl,
                    url,
                    type: 'article',
                    authors: [blog.author || 'Aurous Academy'],
                    publishedTime: blog.date || new Date().toISOString(),
                },
                twitter: {
                    card: 'summary_large_image',
                    title,
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

function BlogDetailsPage({ params }) {
    const instId = 120;

    const getInstituteDetail = async () => {
        try {
            let response = await Network.fetchInstituteDetail(instId);
            Endpoints.mediaBaseUrl = response.instituteTechSetting.mediaUrl;
        } catch (err) {
            console.log(err);
        }
    };

    // Setup institute detail
    getInstituteDetail();

    const cid = params?.id;

    return (
        <div id="homePageCss">
            <div>
                <BlogDetailsClient cid={cid} />
            </div>
        </div>
    );
}

export default BlogDetailsPage;
