import React, { useState, useEffect } from 'react';
import { Box, Typography, useMediaQuery, IconButton, Container, Chip, Grid2 } from '@mui/material';
import parse, { domToReact } from 'html-react-parser';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const BlogDetails = ({ blogItem, loading }) => {

    console.log('blogItem', blogItem);
    

    function linkifyHtml(htmlString) {
        const urlRegex = /((https?:\/\/[^\s<]+))/g;
        return htmlString.replace(urlRegex, (url) => {
            if (htmlString.includes(`<a href="${url}`)) return url;
            return `<a href="${url}">${url}</a>`;
        });
    }
    const options = {
        replace: (domNode) => {
            if (domNode.name === 'a' && domNode.attribs?.href) {
                const href = domNode.attribs.href;
                const anchorText = domNode.children?.[0]?.data?.toLowerCase?.() || '';
                const isDownloadLink =
                    anchorText.includes('click here to download') ||
                    anchorText.includes('click to download');

                const handleDownload = async (e) => {
                    e.preventDefault();

                    try {
                        const response = await fetch(href);
                        const blob = await response.blob();

                        const fileName = href.split('/').pop().split('?')[0] || 'downloaded_file';
                        const url = window.URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = fileName;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        window.URL.revokeObjectURL(url);
                    } catch (error) {
                        // console.error('Download failed:', error);
                        window.open(href, '_blank'); // fallback
                    }
                };

                return isDownloadLink ? (
                    <a
                        href={href}
                        onClick={handleDownload}
                        style={{
                            color: '#FFD700',
                            textDecoration: 'none',
                            background: 'rgba(255, 215, 0, 0.1)',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            border: '1px solid rgba(255, 215, 0, 0.3)',
                            cursor: 'pointer',
                            display: 'inline-block',
                            margin: '4px',
                            transition: 'all 0.2s ease',
                            fontWeight: 600,
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(255, 215, 0, 0.2)';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(255, 215, 0, 0.1)';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        {domToReact(domNode.children, options)}
                    </a>
                ) : (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#4ADE80',
                            textDecoration: 'none',
                            borderBottom: '1px solid rgba(74, 222, 128, 0.3)',
                            transition: 'all 0.2s ease',
                        }}
                    >
                        {domToReact(domNode.children, options)}
                    </a>
                );
            }

            if (domNode.name === 'img' && domNode.attribs?.src) {
                return (
                    <img
                        src={domNode.attribs.src}
                        alt={domNode.attribs.alt || 'Blog content illustration'}
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            borderRadius: '15px',
                            margin: '20px 0',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                        }}
                    />
                );
            }
        },
    };

    const isMobile = useMediaQuery("(min-width:600px)");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Box
            sx={{
                width: '100%',
                // minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255, 177, 153, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)
                    `,
                    zIndex: 1,
                },
            }}
        >
            {/* Back Button */}
            {/* <Box
                sx={{
                    position: 'fixed',
                    top: { xs: 20, sm: 30 },
                    left: { xs: 20, sm: 30 },
                    zIndex: 1000,
                }}
            >
                <IconButton
                    onClick={() => navigate(-1)}
                    sx={{
                        background: 'rgba(255, 215, 0, 0.1)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 215, 0, 0.3)',
                        color: '#FFD700',
                        padding: 2,
                        '&:hover': {
                            background: 'rgba(255, 215, 0, 0.2)',
                            transform: 'scale(1.05)',
                        },
                        transition: 'all 0.2s ease',
                    }}
                >
                    <ArrowBackIcon sx={{ fontSize: '1.5rem' }} />
                </IconButton>
            </Box> */}

            <Container
                // maxWidth="lg"
                sx={{
                    pt: { xs: 4, sm: 4 },
                    pb: 4,
                    position: 'relative',
                    zIndex: 2,
                }}
            >

                {/* Blog Posts Grid or Individual Blog */}
                {blogItem?.blog ? (
                    <>
                        {/* Individual Blog Content */}
                        <Box
                            sx={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '25px',
                                overflow: 'hidden',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                                position: 'relative',
                                p: { xs: 3, sm: 4, md: 6 },
                            }}
                        >
                            {/* Blog Header */}
                            <Box sx={{ mb: 6, textAlign: 'center' }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        color: '#FFD700',
                                        fontWeight: 800,
                                        mb: 3,
                                    }}
                                >
                                    {blogItem?.blog?.title}
                                </Typography>

                                {blogItem?.blog?.createdAt && (
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                                        <CalendarTodayIcon sx={{ color: '#FFD700', fontSize: '1.2rem' }} />
                                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                            {new Date(blogItem?.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </Typography>
                                    </Box>
                                )}

                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '2px',
                                        background: 'linear-gradient(90deg, transparent 0%, #FFD700 20%, #FFD700 80%, transparent 100%)',
                                        my: 4,
                                    }}
                                />
                            </Box>

                            {/* Blog HTML Content */}
                            <Box
                                sx={{
                                    '& p': {
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontSize: { xs: '1.1rem', sm: '1.2rem' },
                                        lineHeight: 1.8,
                                        mb: 4,
                                        textAlign: 'justify',
                                    },
                                    '& h1, & h2, & h3, & h4, & h5, & h6': {
                                        color: '#FFD700',
                                        fontWeight: 600,
                                        mb: 3,
                                        mt: 6,
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: '-8px',
                                            left: 0,
                                            width: '60px',
                                            height: '3px',
                                            background: 'linear-gradient(90deg, #FFD700, #FFA500)',
                                            borderRadius: '2px',
                                        },
                                    },
                                    '& h1': { fontSize: { xs: '2rem', sm: '2.5rem' } },
                                    '& h2': { fontSize: { xs: '1.7rem', sm: '2rem' } },
                                    '& h3': { fontSize: { xs: '1.5rem', sm: '1.7rem' } },
                                    '& ul, & ol': {
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        pl: 4,
                                        mb: 4,
                                    },
                                    '& li': {
                                        mb: 2,
                                        fontSize: { xs: '1.1rem', sm: '1.2rem' },
                                        lineHeight: 1.7,
                                        position: 'relative',
                                        '&::marker': {
                                            color: '#FFD700',
                                        },
                                    },
                                    '& a': {
                                        color: '#4ADE80',
                                        textDecoration: 'none',
                                        borderBottom: '1px solid rgba(74, 222, 128, 0.3)',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            color: '#FFD700',
                                            borderBottomColor: 'rgba(255, 215, 0, 0.5)',
                                        },
                                    },
                                    '& img': {
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '500px',
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                        borderRadius: '15px',
                                        my: 6,
                                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                    },
                                    '& blockquote': {
                                        borderLeft: '4px solid #FFD700',
                                        background: 'rgba(255, 215, 0, 0.05)',
                                        pl: 4,
                                        py: 3,
                                        my: 4,
                                        borderRadius: '0 15px 15px 0',
                                        fontStyle: 'italic',
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontSize: { xs: '1.1rem', sm: '1.2rem' },
                                        position: 'relative',
                                        '&::before': {
                                            content: '"""',
                                            position: 'absolute',
                                            top: '10px',
                                            left: '15px',
                                            fontSize: '3rem',
                                            color: '#FFD700',
                                            opacity: 0.3,
                                            lineHeight: 0,
                                        },
                                    },
                                    '& code': {
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        color: '#4ADE80',
                                        px: 1.5,
                                        py: 0.5,
                                        borderRadius: '8px',
                                        fontSize: '0.95em',
                                        fontFamily: 'monospace',
                                    },
                                    '& pre': {
                                        background: 'rgba(0, 0, 0, 0.4)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '15px',
                                        p: 3,
                                        overflow: 'auto',
                                        my: 4,
                                        '& code': {
                                            background: 'transparent',
                                            px: 0,
                                            py: 0,
                                        },
                                    },
                                    '& table': {
                                        width: '100%',
                                        borderCollapse: 'collapse',
                                        mb: 4,
                                        '& th': {
                                            background: 'rgba(255, 215, 0, 0.1)',
                                            color: '#FFD700',
                                            padding: '12px',
                                            textAlign: 'left',
                                            fontWeight: 600,
                                        },
                                        '& td': {
                                            padding: '12px',
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                        },
                                    },
                                }}
                            >
                                {parse(blogItem?.blog?.blog ? linkifyHtml(blogItem?.blog?.blog) : '', options)}
                                {/* {blogItem?.blog?.blog} */}
                            </Box>
                        </Box>
                    </>
                ) : (
                    <Box
                        sx={{
                            textAlign: 'center',
                            py: 12,
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '20px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontWeight: 600,
                                mb: 2
                            }}
                        >
                            No Blog Content Available
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.5)',
                                maxWidth: '400px',
                                mx: 'auto'
                            }}
                        >
                            The blog content could not be loaded.
                        </Typography>
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default BlogDetails;



