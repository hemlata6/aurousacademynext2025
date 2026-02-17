'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Card, useMediaQuery, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';
import images from '@/lib/images';

const WatchVideoSection = () => {

    const instId = 120;
    const theme = useTheme();
    const [gallerData, setGallerData] = useState([]);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);

    const handleNavigate = () => {
        router.push('/gallery');
    };

    const fetchGallerAPI = async () => {
        try {
            const response = await Network.fetchInstituteDetail(instId);
            setGallerData(response?.institute?.gallery);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        fetchGallerAPI();
    }, []);

    const imageData = [
        {
            id: 1,
            image: "/PRAYAG VERMA.jpg",
        },
        {
            id: 2,
            image: "/KUSHAGRA BANSAL.jpg",
        },
        {
            id: 3,
            image: "/ABHINAV BADEGAONKAR.jpg",
        },
        {
            id: 4,
            image: "/SARTHAK JAIN.jpg",
        },
        {
            id: 5,
            image: "/DARSHIT SINGH.jpg",
        },
        {
            id: 6,
            image: "/HARSHIT SAHU.jpg",
        },
        {
            id: 7,
            image: "/SHREE PANDIT.jpg",
        },
        {
            id: 8,
            image: "/NISHIL SETH GUPTA.jpg",
        },
        {
            id: 9,
            image: "/RISHI TALREJA.jpg",
        },
    ];

    return (
        <>
            <Box sx={{
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(90deg, #0a0f1a 0%, #1a237e 15%, #1e3a8a 30%, #2563eb 50%, #3b82f6 70%, #60a5fa 85%, #93c5fd 100%)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 10% 50%, rgba(15, 23, 42, 0.8) 0%, transparent 40%), radial-gradient(circle at 90% 50%, rgba(147, 197, 253, 0.2) 0%, transparent 60%)',
                    zIndex: 1,
                }
            }}>
                <Box
                    sx={{
                        background: "linear-gradient(90deg, rgba(10, 15, 26, 0.95) 0%, rgba(26, 35, 126, 0.9) 20%, rgba(30, 58, 138, 0.85) 40%, rgba(37, 99, 235, 0.7) 60%, rgba(59, 130, 246, 0.5) 80%, transparent 100%)",
                        position: 'absolute',
                        height: '100%',
                        width: "100%",
                        zIndex: 10,
                        backdropFilter: 'blur(1px)',
                    }}
                >
                    <Stack
                        direction="column"
                        spacing={{ xs: 3, md: 4 }}
                        sx={{
                            height: '100%',
                            justifyContent: 'center',
                            position: 'relative',
                            zIndex: 15,
                        }}
                        p={{ xs: 3, sm: 5, md: 8, lg: 10 }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Box sx={{
                            maxWidth: { xs: '100%', md: '60%', lg: '50%' },
                            transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}>
                            <Typography
                                sx={{
                                    fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '4.5rem' },
                                    fontWeight: 800,
                                    background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 30%, #c7d2fe 60%, #a5b4fc 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    lineHeight: 1.1,
                                    mb: 2,
                                    letterSpacing: '-0.02em',
                                    textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                                    animation: 'glow 2s ease-in-out infinite alternate',
                                }}
                            >
                                Aurous Stars
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem' },
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    mb: 4,
                                    maxWidth: '90%',
                                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                                }}
                            >
                                Uncover the Journey to Rise and Shine ✨
                            </Typography>

                            <Link href='/gallery' style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
                                        color: '#000',
                                        textTransform: 'none',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        fontWeight: 600,
                                        px: { xs: 3, md: 4 },
                                        py: { xs: 1.5, md: 2 },
                                        borderRadius: '50px',
                                        boxShadow: '0 8px 32px rgba(251, 191, 36, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: '-100%',
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                                            transition: 'left 0.5s',
                                        },
                                        '&:hover': {
                                            transform: 'translateY(-2px) scale(1.05)',
                                            boxShadow: '0 12px 40px rgba(251, 191, 36, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                                            background: 'linear-gradient(135deg, #fcd34d 0%, #fbbf24 50%, #f59e0b 100%)',
                                            '&::before': {
                                                left: '100%',
                                            },
                                        },
                                        '&:active': {
                                            transform: 'translateY(-1px) scale(1.02)',
                                        },
                                    }}
                                >
                                    🎬 Watch Our Stars Shine
                                </Button>
                            </Link>
                        </Box>
                    </Stack>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'linear-gradient(90deg, #0a0f1a 0%, #1a237e 15%, #1e3a8a 30%, #2563eb 50%, #3b82f6 70%, #60a5fa 85%, #93c5fd 100%)',
                        width: '100%',
                        py: { xs: 2, md: 3 },
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'radial-gradient(ellipse at 10% center, rgba(15, 23, 42, 0.6) 0%, transparent 50%), radial-gradient(ellipse at 90% center, rgba(147, 197, 253, 0.3) 0%, transparent 70%)',
                            zIndex: 1,
                        }
                    }}
                >
                    {/* Create multiple rows dynamically */}
                    {[0, 1, 2].map((rowIndex) => (
                        <Box
                            key={rowIndex}
                            sx={{
                                display: 'flex',
                                animation: rowIndex % 2 === 0
                                    ? `scroll-left 20s linear infinite`
                                    : `scroll-right 15s linear infinite`,
                                whiteSpace: 'nowrap',
                                py: { xs: 0.5, md: 1 },
                                position: 'relative',
                                zIndex: 2,
                                '&:hover': {
                                    animationPlayState: 'paused',
                                }
                            }}
                        >
                            {/* Duplicate images for seamless scrolling */}
                            {[...imageData, ...imageData].map((item, index) => (
                                <Box
                                    key={`${rowIndex}-${index}`}
                                    sx={{
                                        px: { xs: 1, md: 1.5 },
                                        display: 'inline-block',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            transform: 'scale(1.1) translateY(-8px)',
                                            zIndex: 10,
                                        }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                                                border: '1px solid rgba(59, 130, 246, 0.4)',
                                            },
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(16, 185, 129, 0.1) 100%)',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease',
                                                zIndex: 1,
                                            },
                                            '&:hover::before': {
                                                opacity: 1,
                                            }
                                        }}
                                    >
                                        <img
                                            style={{
                                                width: isMobile ? '180px' : '220px',
                                                height: isMobile ? '120px' : '150px',
                                                objectFit: 'cover',
                                                display: 'block',
                                                borderRadius: '16px',
                                                filter: 'brightness(0.9) contrast(1.1)',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            }}
                                            alt={`Star ${item.id}`}
                                            src={item.image}
                                            onMouseEnter={(e) => {
                                                e.target.style.filter = 'brightness(1.1) contrast(1.2) saturate(1.2)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.filter = 'brightness(0.9) contrast(1.1)';
                                            }}
                                        />

                                        {/* Hover overlay */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease',
                                                display: 'flex',
                                                alignItems: 'flex-end',
                                                justifyContent: 'center',
                                                p: 2,
                                                zIndex: 2,
                                                '&:hover': {
                                                    opacity: 1,
                                                }
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: '#fff',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600,
                                                    textAlign: 'center',
                                                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                                                }}
                                            >
                                                ⭐ Rising Star
                                            </Typography>
                                        </Box>

                                        {/* Shimmer effect */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '-50%',
                                                left: '-50%',
                                                width: '200%',
                                                height: '200%',
                                                background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%)',
                                                transform: 'translateX(-100%)',
                                                transition: 'transform 0.6s ease',
                                                zIndex: 3,
                                            }}
                                            className="shimmer-effect"
                                        />
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    ))}
                </Box>

                <style>
                    {`
                    @keyframes scroll-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }

                    @keyframes scroll-right {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                    
                    @keyframes glow {
                        0% { text-shadow: 0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(59, 130, 246, 0.2); }
                        100% { text-shadow: 0 0 40px rgba(255, 255, 255, 0.5), 0 0 80px rgba(59, 130, 246, 0.4); }
                    }
                    
                    .shimmer-effect:hover {
                        transform: translateX(100%) !important;
                    }
                    `}
                </style>
            </Box>
        </>
    );
};

export default WatchVideoSection;




