import { Box, Button, Chip, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Link from 'next/link';

const HomeSection3 = () => {
    const isMobile = useMediaQuery("(min-width:768px)");
    const [hoveredCard, setHoveredCard] = useState(null);
    const cardData = [
        {
            id: 'jee',
            icon: '/IIT_JEE_SVG.svg',
            title: 'IIT-JEE',
            classes: ['Class 11th', 'Class 12th', 'Dropper'],
            description: 'Become Engineer with IITians faculty at Aurous',
            link: '/jee',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            id: 'neet',
            icon: '/NEET_UG_SVG.svg',
            title: 'NEET-UG',
            classes: ['Class 11th', 'Class 12th', 'Dropper'],
            description: 'Your First Step Towards Becoming a Doctor',
            link: '/neet',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            id: 'foundation',
            icon: '/FOUNDATION.svg',
            title: 'Foundation',
            classes: ['Class 7th', 'Class 8th', 'Class 9th', 'Class 10th'],
            description: 'Build Your Strong Base with Experts at Aurous',
            link: '/foundation',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        }
    ];

    const cardStyle = (isHovered, gradient) => ({
        background: isHovered
            ? 'linear-gradient(135deg, rgba(16, 24, 40, 0.95) 0%, rgba(16, 24, 40, 0.98) 100%)'
            : 'linear-gradient(135deg, #e0f2fe 0%, #f1f5f9 100%)',
        borderRadius: '20px',
        padding: { xs: '1.5rem', md: '2rem' },
        width: '100%',
        maxWidth: { xs: '320px', md: '380px' },
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        border: isHovered ? `2px solid transparent` : '2px solid rgba(255, 255, 255, 0.2)',
        backgroundImage: isHovered ? undefined : `${gradient}, linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)`,
        backgroundBlendMode: isHovered ? 'normal' : 'overlay',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: gradient,
            opacity: isHovered ? 0.1 : 0,
            transition: 'opacity 0.4s ease',
            zIndex: -1
        }
    });

    const chipStyle = (isHovered) => ({
        borderRadius: '25px',
        backgroundColor: isHovered ? 'rgba(255, 202, 8, 0.2)' : 'rgba(255, 255, 255, 0.9)',
        color: isHovered ? '#FFCA08' : '#374151',
        border: isHovered ? '1px solid rgba(255, 202, 8, 0.3)' : '1px solid rgba(0, 0, 0, 0.1)',
        fontSize: { xs: '11px', md: '12px' },
        fontWeight: '500',
        padding: { xs: '6px 12px', md: '8px 16px' },
        height: 'auto',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        // Enhanced contrast for mobile
        '@media (max-width: 768px)': {
            backgroundColor: isHovered ? 'rgba(255, 202, 8, 0.25)' : 'rgba(255, 255, 255, 0.95)',
            color: isHovered ? '#B8860B' : '#1f2937',
            fontWeight: '600'
        },
        '&:hover': {
            backgroundColor: isHovered ? 'rgba(255, 202, 8, 0.3)' : 'rgba(255, 255, 255, 0.9)',
            transform: 'scale(1.05)'
        }
    });

    const buttonStyle = (gradient) => ({
        textTransform: 'none',
        background: `linear-gradient(135deg, #FFCA08 0%, #FF8C42 100%)`,
        color: '#000',
        fontSize: { xs: '13px', md: '14px' },
        fontWeight: '600',
        borderRadius: '25px',
        padding: { xs: '10px 20px', md: '12px 24px' },
        border: 'none',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 8px 20px rgba(255, 202, 8, 0.3)',
        // Mobile optimizations
        '@media (max-width: 768px)': {
            width: '100%',
            maxWidth: '280px',
            fontSize: '14px',
            fontWeight: '700'
        },
        '&:hover': {
            background: `linear-gradient(135deg, #FF8C42 0%, #FFCA08 100%)`,
            transform: 'translateY(-2px) scale(1.05)',
            boxShadow: '0 12px 30px rgba(255, 202, 8, 0.4)',
        },
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
            transition: 'left 0.5s ease',
        },
        '&:hover::before': {
            left: '100%'
        }
    });

    return (
        <Box
            sx={{
                padding: { xs: '2rem 1rem', md: '4rem 2rem' },
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                minHeight: 'auto', // Changed from 100vh to auto
                position: 'relative',
                paddingBottom: { xs: '3rem', md: '4rem' }, // Added specific bottom padding
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 202, 8, 0.1) 0%, transparent 50%)',
                    pointerEvents: 'none'
                }
            }}
        >
            {/* Modern Cards Container */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: 3, md: 4 },
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: { xs: '10%', md: '50%' }, // Adjusted positioning
                        left: { xs: '50%', md: '5%' }, // Adjusted to start from card edges
                        width: { xs: '4px', md: '90%' }, // Increased line thickness and adjusted width
                        height: { xs: '80%', md: '4px' }, // Increased line thickness and adjusted height
                        background: {
                            xs: 'linear-gradient(180deg, transparent 0%, rgba(120, 119, 198, 0.4) 20%, rgba(255, 202, 8, 0.5) 50%, rgba(245, 87, 108, 0.4) 80%, transparent 100%)',
                            md: 'linear-gradient(90deg, transparent 0%, rgba(120, 119, 198, 0.4) 20%, rgba(255, 202, 8, 0.5) 50%, rgba(245, 87, 108, 0.4) 80%, transparent 100%)'
                        },
                        transform: { xs: 'translateX(-50%)', md: 'translateY(-50%)' },
                        zIndex: -1,
                        borderRadius: '2px', // Added border radius for smoother look
                        display: { xs: 'block', md: 'block' }
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: { xs: '10%', md: '50%' }, // Adjusted positioning
                        left: { xs: '50%', md: '5%' }, // Adjusted to start from card edges
                        width: { xs: '4px', md: '90%' }, // Increased line thickness and adjusted width
                        height: { xs: '80%', md: '4px' }, // Increased line thickness and adjusted height
                        background: {
                            xs: 'linear-gradient(180deg, transparent 0%, rgba(120, 119, 198, 0.2) 20%, rgba(255, 202, 8, 0.3) 50%, rgba(245, 87, 108, 0.2) 80%, transparent 100%)',
                            md: 'linear-gradient(90deg, transparent 0%, rgba(120, 119, 198, 0.2) 20%, rgba(255, 202, 8, 0.3) 50%, rgba(245, 87, 108, 0.2) 80%, transparent 100%)'
                        },
                        transform: { xs: 'translateX(-50%)', md: 'translateY(-50%)' },
                        zIndex: -1,
                        borderRadius: '2px', // Added border radius for smoother look
                        animation: 'pulse 3s ease-in-out infinite',
                        display: { xs: 'block', md: 'block' }
                    },
                    '@keyframes pulse': {
                        '0%': { opacity: 0.4 }, // Increased base opacity
                        '50%': { opacity: 1 }, // Increased peak opacity
                        '100%': { opacity: 0.4 } // Increased base opacity
                    }
                }}
            >
                {cardData.map((card, index) => (
                    <Box
                        key={card.id}
                        onMouseEnter={() => setHoveredCard(card.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        sx={{
                            ...cardStyle(hoveredCard === card.id, card.gradient),
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: { xs: '-20px', md: '50%' }, // Adjusted positioning for better visibility
                                left: { xs: '50%', md: '-20px' }, // Adjusted positioning for better visibility
                                width: '40px', // Increased dot size
                                height: '40px', // Increased dot size
                                background: card.gradient,
                                borderRadius: '50%',
                                transform: { xs: 'translateX(-50%)', md: 'translateY(-50%)' },
                                zIndex: 10,
                                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)', // Enhanced shadow
                                opacity: hoveredCard === card.id ? 1 : 0.8, // Increased base opacity
                                transition: 'all 0.3s ease',
                                border: '4px solid rgba(255, 255, 255, 0.95)' // Increased border thickness
                            },
                            '&:hover::before': {
                                transform: { xs: 'translateX(-50%) scale(1.3)', md: 'translateY(-50%) scale(1.3)' }, // Increased hover scale
                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.35)' // Enhanced hover shadow
                            }
                        }}
                    >
                        {/* Icon Container */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: '1.5rem',
                                '& img': {
                                    width: { xs: '60px', md: '80px' },
                                    height: { xs: '60px', md: '80px' },
                                    filter: hoveredCard === card.id
                                        ? 'brightness(0) invert(1)'
                                        : 'none',
                                    transition: 'all 0.3s ease'
                                }
                            }}
                        >
                            <img alt={card.title} src={card.icon} />
                        </Box>

                        {/* Title */}
                        <Typography
                            sx={{
                                textAlign: 'center',
                                fontSize: { xs: '20px', md: '28px' },
                                fontWeight: '700',
                                marginBottom: '1.5rem',
                                transition: 'color 0.3s ease',
                                color: hoveredCard === card.id ? '#fff' : '#1f2937',
                                background: hoveredCard === card.id
                                    ? 'linear-gradient(135deg, #fff 0%, #f1f5f9 100%)'
                                    : 'none',
                                backgroundClip: hoveredCard === card.id ? 'text' : 'unset',
                                WebkitBackgroundClip: hoveredCard === card.id ? 'text' : 'unset',
                                WebkitTextFillColor: hoveredCard === card.id ? 'transparent' : 'unset',
                                textShadow: hoveredCard === card.id ? '0 1px 2px rgba(0,0,0,0.3)' : 'none'
                            }}
                        >
                            {card.title}
                        </Typography>

                        {/* Class Pills */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 1,
                                marginBottom: '1.5rem',
                                flexWrap: 'wrap'
                            }}
                        >
                            {card.classes.map((className, idx) => (
                                <Chip
                                    key={idx}
                                    label={className}
                                    sx={chipStyle(hoveredCard === card.id)}
                                />
                            ))}
                        </Box>

                        {/* Description */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: '2rem',
                            }}
                        >
                            <Typography
                                sx={{
                                    color: hoveredCard === card.id ? '#fff' : '#1f2937',
                                    textAlign: 'center',
                                    fontSize: { xs: '17px', md: '16px' },
                                    lineHeight: '1.7',
                                    fontWeight: { xs: 600, md: 500 },
                                    px: { xs: 2, md: 0 },
                                    py: { xs: 1.2, md: 0 },
                                    borderRadius: { xs: '16px', md: '0' },
                                    background: {
                                        xs: hoveredCard === card.id
                                            ? 'linear-gradient(90deg, rgba(16,24,40,0.85) 0%, rgba(120,119,198,0.12) 100%)'
                                            : 'rgba(255,255,255,0.85)',
                                        md: 'none'
                                    },
                                    boxShadow: { xs: '0 4px 24px rgba(120,119,198,0.10)', md: 'none' },
                                    textShadow: {
                                        xs: hoveredCard === card.id ? '0 1px 2px rgba(0,0,0,0.25)' : 'none',
                                        md: 'none'
                                    },
                                    border: {
                                        xs: hoveredCard === card.id
                                            ? '2px solid transparent'
                                            : '2px solid rgba(255,255,255,0.5)',
                                        md: 'none'
                                    },
                                    backgroundClip: { xs: 'padding-box', md: 'unset' },
                                    position: 'relative',
                                    overflow: 'hidden',
                                    animation: 'fadeInDesc 1s cubic-bezier(0.4,0,0.2,1)',
                                    '&::before': {
                                        content: '""',
                                        display: { xs: 'block', md: 'none' },
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '16px',
                                        zIndex: 0,
                                        pointerEvents: 'none',
                                        background: hoveredCard === card.id
                                            ? 'linear-gradient(270deg, #E8410E, #FFCA08, #E8410E)'
                                            : 'none',
                                        backgroundSize: '400% 400%',
                                        animation: hoveredCard === card.id ? 'descBorderMove 6s ease infinite' : 'none',
                                        opacity: hoveredCard === card.id ? 0.18 : 0,
                                        transition: 'opacity 0.4s',
                                    },
                                    '@keyframes descBorderMove': {
                                        '0%': { backgroundPosition: '0% 50%' },
                                        '50%': { backgroundPosition: '100% 50%' },
                                        '100%': { backgroundPosition: '0% 50%' },
                                    },
                                    '@keyframes fadeInDesc': {
                                        '0%': { opacity: 0, transform: 'translateY(20px)' },
                                        '100%': { opacity: 1, transform: 'translateY(0)' },
                                    },
                                }}
                            >
                                {card.description}
                            </Typography>
                        </Box>

                        {/* CTA Button */}
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Link href={card.link} style={{ textDecoration: 'none' }}>
                                <Button sx={buttonStyle(card.gradient)}>
                                    Explore Now to Understand better
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default HomeSection3;


