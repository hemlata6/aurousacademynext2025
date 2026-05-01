'use client';

import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Avatar, Dialog } from '@mui/material';
import { PlayCircle, FileText, Clock, BookOpen, Music, Share2, ArrowLeft, ChevronRight } from 'lucide-react';
import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';
import { DEFAULT_BLOG_IMAGE_PATH, resolveMediaUrl } from '@/lib/site';

const optimizeBlogHtml = (html, title) => {
    if (!html || typeof window === 'undefined') {
        return html;
    }

    try {
        const parser = new DOMParser();
        const documentFragment = parser.parseFromString(html, 'text/html');

        documentFragment.querySelectorAll('img').forEach((img, index) => {
            img.setAttribute('loading', 'lazy');
            img.setAttribute('decoding', 'async');
            if (!img.getAttribute('alt')) {
                img.setAttribute('alt', `${title || 'Aurous Academy blog'} illustration ${index + 1}`);
            }
        });

        documentFragment.querySelectorAll('h1').forEach((heading) => {
            const replacement = documentFragment.createElement('h2');
            replacement.innerHTML = heading.innerHTML;
            Array.from(heading.attributes).forEach((attribute) => {
                replacement.setAttribute(attribute.name, attribute.value);
            });
            heading.replaceWith(replacement);
        });

        return documentFragment.body.innerHTML;
    } catch {
        return html;
    }
};

const BlogDetailsClient = ({ id, slug }) => {
    const router = useRouter();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [blogAttachment, setBlogAttachment] = useState([]);
    const [showLoginWarning, setShowLoginWarning] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedAudio, setSelectedAudio] = useState(null);
    const [showAudioModal, setShowAudioModal] = useState(false);
    const [slides, setSlides] = useState([]);

    const instId = 120;

    const slugify = (str) => {
        if (!str) return '';
        return str.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');
    };

    const getImageUrl = (path, fallback = DEFAULT_BLOG_IMAGE_PATH) =>
        resolveMediaUrl(path, Endpoints.mediaBaseUrl, fallback);

    const sanitizedBlogHtml = useMemo(
        () => optimizeBlogHtml(blog?.blog?.blog || '', blog?.title || 'Aurous Academy blog'),
        [blog?.blog?.blog, blog?.title]
    );

    useEffect(() => {
        if (id) {
            fetchBlogDetail();
            fetchBanners();
        }
    }, [id, slug]);

    // useEffect(() => {
    //     if (blog?.id) {
    //         fetchAttachment();
    //     }
    // }, [blog]);

    const fetchBlogDetail = async () => {
        setLoading(true);
        try {
            const response = await Network.fetchBlogDetailApi(id);
            console.log('response', response);

            const blogDetail = response?.content;

            if (response && response.errorCode === 0 && blogDetail?.id) {
                setBlog(blogDetail);
            } else {
                setBlog(null);
            }
        } catch (error) {
            console.error('Error fetching blog:', error);
            setBlog(null);
        } finally {
            setLoading(false);
        }
    };

    // const fetchAttachment = async () => {
    //     try {
    //         const response = await Network.fetchBlogAttachment(blog?.id);
    //         if (response && response.contentList && response.contentList.length > 0) {
    //             setBlogAttachment(response.contentList);
    //         } else {
    //             setBlogAttachment([]);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching attachments:', error);
    //     }
    // };

    const fetchBanners = async () => {
        try {
            const response = await Network.fetchBannerss(instId);
            if (response && response.banners && response.banners.length > 0) {
                const activeBanners = response.banners.filter(banner => banner.active && banner?.group === 'blog');

                if (activeBanners.length > 0) {
                    const bannerSlides = activeBanners.map(banner => ({
                        ...banner,
                        type: 'image',
                        url: Endpoints.mediaBaseUrl + banner.banner,
                        title: banner.title || ''
                    }));
                    setSlides(bannerSlides);
                }
            }
        } catch (error) {
            console.error('Error fetching banners:', error);
        }
    };

    const formatDate = (dateStr) => {
        try {
            return new Date(dateStr).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });
        } catch {
            return 'Recently';
        }
    };

    const handleShare = async () => {
        const normalizedUrlSlug = slugify(slug);
        const shareUrl = `${window.location.origin}/blog/${id}/${normalizedUrlSlug}`;

        const shareData = {
            title: blog?.blog?.title || blog.title,
            url: shareUrl
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(shareUrl);
                alert('Link copied to clipboard!');
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };

    const handleAttachmentClick = (item) => {
        if (item?.entityType === "blog") {
            const titleSlug = slugify(item.title || item.name || 'blog');
            router.push(`/blog/${item?.id}/${titleSlug}`);
            return;
        }

        if (item?.entityType === "video") {
            if (item?.video?.youtubeUrl) {
                setSelectedVideo(item);
                setOpenDialog(true);
            }
            return;
        }

        if (item?.entityType === "audio") {
            if (item?.audio?.audio) {
                setSelectedAudio(item);
                setShowAudioModal(true);
            }
            return;
        }

        if (item?.entityType === "note" && item?.note?.note) {
            window.open(Endpoints.mediaBaseUrl + item?.note?.note, "_blank");
            return;
        }

        if (item?.entityType === "pdf" && item?.pdf?.pdf) {
            window.open(Endpoints.mediaBaseUrl + item?.pdf?.pdf, "_blank");
            return;
        }

        if (item?.entityType === "document" && item?.document?.document) {
            window.open(Endpoints.mediaBaseUrl + item?.document?.document, "_blank");
            return;
        }
    };

    const handleCloseVideo = () => {
        setOpenDialog(false);
        setSelectedVideo(null);
    };

    if (loading) {
        return (
            <div style={{
                minHeight: '100vh',
                background: 'linear-gradient(to bottom, #f0f4ff 0%, #ffffff 50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        margin: '0 auto 24px',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            border: '4px solid rgba(102, 126, 234, 0.2)',
                            borderRadius: '50%'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            border: '4px solid transparent',
                            borderTopColor: '#667eea',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite'
                        }}></div>
                    </div>
                    <p style={{
                        color: '#6b7280',
                        fontSize: '16px',
                        fontWeight: '600'
                    }}>
                        Loading blog...
                    </p>
                    <style jsx>{`
                        @keyframes spin {
                            to { transform: rotate(360deg); }
                        }
                    `}</style>
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div style={{
                minHeight: '100vh',
                background: 'linear-gradient(to bottom, #f0f4ff 0%, #ffffff 50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
            }}>
                <div style={{
                    background: '#ffffff',
                    padding: '48px',
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                    maxWidth: '500px',
                    textAlign: 'center'
                }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #f0f4ff 0%, rgba(118, 75, 162, 0.15) 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px'
                    }}>
                        <BookOpen size={40} color="#667eea" />
                    </div>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#1f2937',
                        marginBottom: '12px'
                    }}>
                        Blog Not Found
                    </h2>
                    <p style={{
                        color: '#6b7280',
                        fontSize: '16px',
                        marginBottom: '32px',
                        lineHeight: '1.6'
                    }}>
                        The blog you're looking for doesn't exist or has been removed.
                    </p>
                    <button
                        onClick={() => router.push('/blog')}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: '#ffffff',
                            border: 'none',
                            padding: '14px 28px',
                            borderRadius: '10px',
                            fontSize: '15px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <ArrowLeft size={18} />
                        Back to Blogs
                    </button>

                </div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        

            {/* Content Section */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '40px 20px'
            }}>
                {/* Header Section */}
            <div
                style={{
                    width: '100%',
                    // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    padding: '60px 20px',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 2
                }}>
                    <div style={{display: "flex", alignItems: "baseline"}}>
                        <button
                            onClick={() => router.push('/blog')}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'rgba(255, 255, 255, 0.2)',
                                color: '#ffffff',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '8px',
                                fontSize: '14px',
                                fontWeight: '700',
                                cursor: 'pointer',
                                marginBottom: '24px',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                        >
                            <ArrowLeft size={18} />
                            Back to Blogs
                        </button>
                        <button
                            onClick={handleShare}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'rgba(255, 255, 255, 0.2)',
                                color: '#ffffff',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '8px',
                                fontSize: '14px',
                                fontWeight: '700',
                                cursor: 'pointer',
                                marginLeft: 'auto',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                        >
                            <Share2 size={18} />
                            Share
                        </button>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(28px, 5vw, 48px)',
                        fontWeight: '700',
                        color: '#ffffff',
                        // marginBottom: '20px',
                        lineHeight: '1.2'
                    }}>
                        {blog.title}
                    </h1>
                </div>
            </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: slides.length > 0 ? '1fr 350px' : '1fr',
                    gap: '40px',
                    alignItems: 'start'
                }}>
                    {/* Main Content */}
                    <div>
                        {/* Featured Image */}
                        {blog?.blog?.thumb && (
                            <div style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                marginBottom: '40px',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                                position: 'relative',
                                width: '100%',
                                paddingTop: '56.25%'
                            }}>
                                <Image
                                    src={getImageUrl(blog.blog.thumb)}
                                    alt={`${blog.title} featured image`}
                                    fill
                                    priority
                                    sizes="(max-width: 1200px) 100vw, 900px"
                                    style={{
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                />
                            </div>
                        )}

                        {/* Blog Content */}
                        {blog?.blog?.blog ? (
                            <div style={{
                                background: '#ffffff',
                                borderRadius: '16px',
                                paddingLeft: '40px',
                                paddingRight: '40px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                marginBottom: '40px'
                            }}>
                                <div
                                    // className="blog-content"
                                    dangerouslySetInnerHTML={{ __html: sanitizedBlogHtml }}
                                    style={{
                                        // color: '#374151',
                                        // fontSize: '17px',
                                        // lineHeight: '1.8',
                                        // fontFamily: 'system-ui, -apple-system, sans-serif'
                                    }}
                                />
                                {/* <style jsx>{`
                                    .blog-content :global(h1),
                                    .blog-content :global(h2),
                                    .blog-content :global(h3),
                                    .blog-content :global(h4),
                                    .blog-content :global(h5),
                                    .blog-content :global(h6) {
                                        color: #1f2937;
                                        font-weight: 700;
                                        margin-top: 2em;
                                        margin-bottom: 0.75em;
                                        line-height: 1.3;
                                    }
                                    
                                    .blog-content :global(h2) {
                                        font-size: 1.875em;
                                    }
                                    
                                    .blog-content :global(h3) {
                                        font-size: 1.5em;
                                    }
                                    
                                    .blog-content :global(p) {
                                        margin-bottom: 1.5em;
                                        color: #4b5563;
                                    }
                                    
                                    .blog-content :global(a) {
                                        color: #667eea;
                                        text-decoration: none;
                                        font-weight: 600;
                                        transition: color 0.2s;
                                    }
                                    
                                    .blog-content :global(a:hover) {
                                        color: #764ba2;
                                        text-decoration: underline;
                                    }
                                    
                                    .blog-content :global(img) {
                                        max-width: 100%;
                                        height: auto;
                                        border-radius: 12px;
                                        margin: 2em 0;
                                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                                    }
                                    
                                    .blog-content :global(ul),
                                    .blog-content :global(ol) {
                                        margin: 1.5em 0;
                                        padding-left: 2em;
                                    }
                                    
                                    .blog-content :global(li) {
                                        margin-bottom: 0.75em;
                                        color: #4b5563;
                                        line-height: 1.75;
                                    }
                                    
                                    .blog-content :global(strong) {
                                        color: #1f2937;
                                        font-weight: 700;
                                    }
                                    
                                    .blog-content :global(blockquote) {
                                        border-left: 4px solid #667eea;
                                        padding-left: 1.5em;
                                        margin: 2em 0;
                                        font-style: italic;
                                        color: #6b7280;
                                    }
                                    
                                    .blog-content :global(code) {
                                        background: #f3f4f6;
                                        padding: 0.2em 0.4em;
                                        border-radius: 4px;
                                        font-size: 0.9em;
                                        color: #667eea;
                                    }
                                    
                                    .blog-content :global(pre) {
                                        background: #1f2937;
                                        color: #f9fafb;
                                        padding: 1.5em;
                                        border-radius: 8px;
                                        overflow-x: auto;
                                        margin: 2em 0;
                                    }
                                    
                                    .blog-content :global(pre code) {
                                        background: transparent;
                                        color: inherit;
                                        padding: 0;
                                    }
                                    
                                    .blog-content :global(table) {
                                        width: 100%;
                                        border-collapse: collapse;
                                        margin: 2em 0;
                                    }
                                    
                                    .blog-content :global(th),
                                    .blog-content :global(td) {
                                        border: 1px solid #e5e7eb;
                                        padding: 0.75em;
                                        text-align: left;
                                    }
                                    
                                    .blog-content :global(th) {
                                        background: #f9fafb;
                                        font-weight: 700;
                                        color: #1f2937;
                                    }
                                `}</style> */}
                            </div>
                        ) : (
                            <div style={{
                                background: '#ffffff',
                                borderRadius: '16px',
                                padding: '60px 40px',
                                textAlign: 'center',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                            }}>
                                <BookOpen size={48} style={{ color: '#667eea', margin: '0 auto 20px' }} />
                                <p style={{ color: '#6b7280', fontSize: '16px', marginBottom: '20px' }}>
                                    No content available for this blog.
                                </p>
                                <button
                                    onClick={() => router.push('/blog')}
                                    style={{
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        color: '#ffffff',
                                        border: 'none',
                                        padding: '12px 24px',
                                        borderRadius: '8px',
                                        fontSize: '15px',
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    ← Back to Blogs
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Sidebar - Slides */}
                    {slides.length > 0 && (
                        <div style={{
                            position: 'sticky',
                            top: '100px'
                        }}>
                            <h3 style={{
                                fontSize: '18px',
                                fontWeight: '700',
                                color: '#1f2937',
                                marginBottom: '20px'
                            }}>
                                Related Content
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            background: '#ffffff',
                                            borderRadius: '12px',
                                            overflow: 'hidden',
                                            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
                                            border: '2px solid rgba(102, 126, 234, 0.1)',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = '#667eea';
                                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(102, 126, 234, 0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.1)';
                                            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
                                        }}
                                    >
                                        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                                            <Image
                                                src={getImageUrl(slide.url, DEFAULT_BLOG_IMAGE_PATH)}
                                                alt={slide.title || `Aurous Academy slide ${index + 1}`}
                                                fill
                                                sizes="350px"
                                                style={{ objectFit: 'cover', display: 'block' }}
                                            />
                                        </div>
                                        {slide.title && (
                                            <div style={{
                                                padding: '12px 16px',
                                                background: 'linear-gradient(to right, #f9fafb, #ffffff)'
                                            }}>
                                                <p style={{
                                                    fontSize: '14px',
                                                    fontWeight: '600',
                                                    color: '#374151',
                                                    margin: 0
                                                }}>
                                                    {slide.title}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Related Resources Section */}
                {blogAttachment.length > 0 && (
                    <div style={{
                        marginTop: '80px',
                        paddingTop: '60px',
                        borderTop: '2px solid rgba(102, 126, 234, 0.15)'
                    }}>
                        <h2 style={{
                            fontSize: '32px',
                            fontWeight: '700',
                            color: '#1f2937',
                            marginBottom: '12px'
                        }}>
                            Related Resources
                        </h2>
                        <p style={{
                            color: '#6b7280',
                            fontSize: '16px',
                            marginBottom: '40px'
                        }}>
                            Explore additional materials and content related to this blog
                        </p>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '24px'
                        }}>
                            {blogAttachment.map((item, i) => (
                                <div
                                    key={i}
                                    onClick={() => handleAttachmentClick(item)}
                                    style={{
                                        background: '#ffffff',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        border: '2px solid rgba(102, 126, 234, 0.1)',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.boxShadow = '0 12px 32px rgba(102, 126, 234, 0.2)';
                                        e.currentTarget.style.borderColor = '#667eea';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.1)';
                                    }}
                                >
                                    <div style={{
                                        height: '180px',
                                        background: 'linear-gradient(135deg, #f0f4ff 0%, rgba(118, 75, 162, 0.1) 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden'
                                    }}>
                                        {item?.thumb ? (
                                            <Image
                                                src={getImageUrl(item.thumb)}
                                                alt={`${item?.title || 'Aurous Academy resource'} featured image`}
                                                fill
                                                sizes="(max-width: 1200px) 100vw, 280px"
                                                style={{
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.3s ease'
                                                }}
                                            />
                                        ) : (
                                            <>
                                                {item?.entityType === "video" && <PlayCircle size={56} color="#667eea" strokeWidth={1.5} />}
                                                {item?.entityType === "audio" && <Music size={56} color="#667eea" strokeWidth={1.5} />}
                                                {item?.entityType === "blog" && <BookOpen size={56} color="#667eea" strokeWidth={1.5} />}
                                                {!["video", "audio", "blog"].includes(item?.entityType) && <FileText size={56} color="#667eea" strokeWidth={1.5} />}
                                            </>
                                        )}
                                    </div>

                                    <div style={{
                                        padding: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flexGrow: 1
                                    }}>
                                        <h3 style={{
                                            fontSize: '16px',
                                            fontWeight: '700',
                                            color: '#1f2937',
                                            marginBottom: '12px',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            lineHeight: '1.4'
                                        }}>
                                            {item?.title || 'Resource Title'}
                                        </h3>

                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            color: '#9ca3af',
                                            fontSize: '13px',
                                            marginBottom: '16px'
                                        }}>
                                            <Clock size={14} />
                                            <span>{item.createdAt ? formatDate(item.createdAt) : "Recently Added"}</span>
                                        </div>

                                        <div style={{
                                            marginTop: 'auto',
                                            paddingTop: '16px',
                                            borderTop: '1px solid #f3f4f6',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            color: '#667eea',
                                            fontWeight: '700',
                                            fontSize: '14px'
                                        }}>
                                            <span>
                                                {item?.entityType === "video" ? "Watch Now" :
                                                    item?.entityType === "audio" ? "Listen Now" :
                                                        item?.entityType === "blog" ? "Read More" : "View"}
                                            </span>
                                            <ChevronRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Video Player Modal */}
            {openDialog && selectedVideo && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 9999,
                    background: 'rgba(0, 0, 0, 0.95)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                }}>
                    <button
                        onClick={handleCloseVideo}
                        style={{
                            position: 'absolute',
                            top: '24px',
                            right: '24px',
                            width: '48px',
                            height: '48px',
                            background: '#ffffff',
                            border: 'none',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            fontWeight: '700',
                            color: '#000000',
                            transition: 'all 0.3s ease',
                            zIndex: 10000
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#f3f4f6';
                            e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#ffffff';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        ✕
                    </button>
                    <div style={{
                        width: '100%',
                        maxWidth: '1200px',
                        aspectRatio: '16/9'
                    }}>
                        <iframe
                            src={`https://www.youtube.com/embed/${selectedVideo?.video?.youtubeUrl?.split('v=')[1]?.split('&')[0]}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                borderRadius: '12px'
                            }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}

            {/* Audio Player Modal */}
            {showAudioModal && selectedAudio && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 9999,
                    background: 'rgba(0, 0, 0, 0.95)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                }}>
                    <button
                        onClick={() => setShowAudioModal(false)}
                        style={{
                            position: 'absolute',
                            top: '24px',
                            right: '24px',
                            width: '48px',
                            height: '48px',
                            background: '#ffffff',
                            border: 'none',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            fontWeight: '700',
                            color: '#000000',
                            transition: 'all 0.3s ease',
                            zIndex: 10000
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#f3f4f6';
                            e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#ffffff';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        ✕
                    </button>
                    <div style={{
                        width: '100%',
                        maxWidth: '600px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '20px',
                        padding: '48px',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '32px'
                        }}>
                            <Music size={64} color="#ffffff" style={{ opacity: 0.9 }} />
                        </div>
                        <audio
                            controls
                            style={{
                                width: '100%',
                                background: 'rgba(255, 255, 255, 0.15)',
                                borderRadius: '12px',
                                outline: 'none'
                            }}
                        >
                            <source src={Endpoints.mediaBaseUrl + selectedAudio?.audio?.audio} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                        <p style={{
                            color: '#ffffff',
                            fontSize: '17px',
                            fontWeight: '600',
                            textAlign: 'center',
                            marginTop: '24px'
                        }}>
                            {selectedAudio?.title || 'Audio Content'}
                        </p>
                    </div>
                </div>
            )}


        </div>
    );
};

export default BlogDetailsClient;
