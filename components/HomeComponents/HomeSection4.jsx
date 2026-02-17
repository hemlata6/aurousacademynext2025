import React, { useEffect, useState } from 'react'
import { Button, Typography, useMediaQuery, Box, Stack, Chip } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';

const HomeSection4 = () => {
    const isMobile = useMediaQuery("(min-width:768px)");
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [hoveredChip, setHoveredChip] = useState(null);
    const [banners, setBanners] = useState([]);
    const instId = 120;

    useEffect(() => {
        getBanners();
    }, []);

    const handleNavigateAPRE = () => {
        // const url = 'https://apre.aurousacademy.com'
        const url = banners?.length > 0 ? banners[0]?.contentLink : "";
        window.open(url, '_blank', 'noreferrer');
    };

    const getBanners = async () => {
        try {
            const response = await Network.fetchBannerss(instId);
            const fetchedBanners = response.banners || [];
            // Filter banners with group === 'scholarship'
            const newBanners = fetchedBanners.filter(item => item?.group === 'scholarship');
            setBanners(newBanners);
        } catch (error) {
            console.error('Failed to fetch banners:', error);
            setBanners([]);
        }
    };



    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1f3a 25%, #2d1b69 50%, #1a1f3a 75%, #0a0e1a 100%)',
                position: 'relative',
                overflow: 'hidden',
                padding: { xs: '1.2rem 0.5rem', md: '2rem 1rem' }, // reduced padding
                minHeight: { xs: 'auto', md: 'auto' }, // remove forced 100vh
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 20% 30%, rgba(255, 202, 8, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 15, 16, 0.1) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.1) 0%, transparent 60%)',
                    pointerEvents: 'none'
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    pointerEvents: 'none'
                }
            }}
        >
            <Box
                sx={{
                    maxWidth: '1200px',
                    width: '100%',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                {/* Main Heading */}
                <Box
                    sx={{
                        marginBottom: { xs: '1rem', md: '1.5rem' }, // reduced margin
                        position: 'relative'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2.1rem', lg: '2.5rem' }, // reduced
                            fontWeight: '900',
                            lineHeight: 1.1,
                            marginBottom: '0.5rem',
                            textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                            position: 'relative'
                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6B6B 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '-8px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '80%',
                                    height: '3px',
                                    background: 'linear-gradient(90deg, transparent 0%, #FFD700 50%, transparent 100%)',
                                    borderRadius: '2px'
                                }
                            }}
                        >
                            Aurous Academy's
                        </Box>
                        <br />
                        <Box component="span" sx={{ color: '#ffffff' }}>
                            Story Began with a{' '}
                        </Box>
                        <Box
                            component="span"
                            sx={{
                                background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 50%, #FFD700 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                position: 'relative',
                                display: 'inline-block',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: '-5px',
                                    left: '-10px',
                                    right: '-10px',
                                    bottom: '-5px',
                                    background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 215, 0, 0.1) 100%)',
                                    borderRadius: '15px',
                                    zIndex: -1
                                }
                            }}
                        >
                            Bold Vision
                        </Box>
                    </Typography>

                    {/* Decorative elements */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: { xs: '-20px', md: '-30px' },
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '100px',
                            height: '4px',
                            background: 'linear-gradient(90deg, transparent 0%, #FFD700 50%, transparent 100%)',
                            borderRadius: '2px'
                        }}
                    />
                </Box>

                {/* Subtitle */}
                <Box
                    sx={{
                        marginBottom: { xs: '1.2rem', md: '1.8rem' }, // reduced margin
                        maxWidth: '800px',
                        margin: '0 auto',
                    }}
                >
                    {/* <Typography
                        sx={{
                            fontSize: { xs: '0.9rem', sm: '1.05rem', md: '1.15rem' }, // reduced
                            color: 'rgba(255, 255, 255, 0.9)',
                            lineHeight: 1.4,
                            fontWeight: '400',
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                        }}
                    >
                        To Turn Ambitions into Triumphs. Step into a Future Where Your Dreams Are Fostered Through{' '}
                        <Box
                            component="span"
                            sx={{
                                background: 'linear-gradient(135deg, #FF6B6B 0%, #FF0F10 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: '700',
                                fontSize: '1.1em',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    width: '100%',
                                    height: '2px',
                                    background: 'linear-gradient(90deg, #FF6B6B 0%, #FF0F10 100%)',
                                    borderRadius: '1px'
                                }
                            }}
                        >
                            Scholarships
                        </Box>
                        {' '}and Guided by Unmatched Excellence.
                    </Typography> */}
                </Box>

                {/* Feature Tags */}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 1.2,
                        marginBottom: { xs: '1.2rem', md: '1.8rem' } // reduced margin
                    }}
                >
                    {[
                        { icon: '🎓', text: 'Merit-Based Scholarships', color: '#FFD700' },
                        // { icon: '⏰', text: 'Limited Time Offer', color: '#FF6B6B' },
                        // { icon: '🏆', text: '95% Success Rate', color: '#4ECDC4' },
                        { icon: '💰', text: 'Up to 100% Off', color: '#9B59B6' }
                    ].map((feature, index) => (
                        <Chip
                            key={index}
                            icon={<span style={{ fontSize: '1.2rem' }}>{feature.icon}</span>}
                            label={feature.text}
                            onMouseEnter={() => setHoveredChip(index)}
                            onMouseLeave={() => setHoveredChip(null)}
                            sx={{
                                background: hoveredChip === index
                                    ? `linear-gradient(135deg, ${feature.color}30 0%, ${feature.color}20 100%)`
                                    : 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(20px)',
                                color: hoveredChip === index ? feature.color : '#fff',
                                border: `1px solid ${hoveredChip === index ? feature.color + '50' : 'rgba(255, 255, 255, 0.2)'}`,
                                fontSize: { xs: '0.7rem', md: '0.8rem' }, // reduced
                                fontWeight: '600',
                                padding: { xs: '5px 8px', md: '7px 12px' }, // reduced
                                borderRadius: '25px',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: hoveredChip === index ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)',
                                boxShadow: hoveredChip === index
                                    ? `0 8px 25px ${feature.color}40`
                                    : '0 4px 15px rgba(0, 0, 0, 0.2)',
                                cursor: 'pointer',
                                '& .MuiChip-icon': {
                                    marginLeft: '8px',
                                    fontSize: '1.2rem'
                                }
                            }}
                        />
                    ))}
                </Box>

                {/* Image Section */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: { xs: '1.2rem', md: '1.8rem' }, // reduced margin
                        position: 'relative'
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            borderRadius: '14px', // reduced
                            overflow: 'hidden',
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)', // reduced
                            transition: 'all 0.4s ease',
                            maxWidth: { xs: '100%', md: '90%' }, // slightly more compact
                            '&:hover': {
                                transform: 'scale(1.02)',
                                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)'
                            },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%)',
                                zIndex: 1,
                                pointerEvents: 'none'
                            },
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: '-2px',
                                left: '-2px',
                                right: '-2px',
                                bottom: '-2px',
                                background: 'linear-gradient(135deg, #FFD700, #FF6B6B, #4ECDC4, #9B59B6)',
                                borderRadius: '16px', // reduced
                                zIndex: -1,
                                opacity: 0.7
                            }
                        }}
                    >
                        <img
                            style={{
                                display: isMobile ? 'block' : 'none',
                                width: '100%',
                                height: 'auto',
                                position: 'relative',
                                zIndex: 2
                            }}
                            alt='Scholarship Program Desktop'
                            src={banners?.length > 0 ? Endpoints?.mediaBaseUrl + banners[0]?.banner : '/Images/Rectangle2428.svg'} // Use first banner or fallback image
                        />
                        <img
                            style={{
                                display: isMobile ? 'none' : 'block',
                                width: '100%',
                                height: 'auto',
                                position: 'relative',
                                zIndex: 2
                            }}
                            alt='Scholarship Program Mobile'
                            src={banners?.length > 0 ? Endpoints?.mediaBaseUrl + banners[0]?.banner : '/Images/MOBBanner1.svg'}
                        />
                    </Box>
                </Box>

                {/* CTA Button */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative'
                    }}
                >
                    <Button
                        onClick={handleNavigateAPRE}
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                        sx={{
                            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
                            color: '#000',
                            fontSize: { xs: '0.9rem', md: '1.05rem' }, // reduced
                            fontWeight: '900',
                            padding: { xs: '0.6rem 1.2rem', md: '0.8rem 2rem' }, // reduced
                            borderRadius: '30px', // reduced
                            textTransform: 'none',
                            border: 'none',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 8px 20px rgba(255, 215, 0, 0.4)', // reduced
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: isButtonHovered ? 'translateY(-5px) scale(1.05)' : 'translateY(0) scale(1)',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #FFA500 0%, #FFD700 50%, #FFD700 100%)',
                                boxShadow: '0 12px 30px rgba(255, 215, 0, 0.5)',
                            },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: '-100%',
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
                                transition: 'left 0.6s ease',
                            },
                            '&:hover::before': {
                                left: '100%'
                            },
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: isButtonHovered ? '150%' : '0%',
                                height: isButtonHovered ? '150%' : '0%',
                                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                                borderRadius: '50%',
                                transition: 'all 0.4s ease',
                                zIndex: -1
                            }
                        }}
                    >
                        🚀 Register Now & Claim Your Scholarship
                    </Button>
                </Box>

                {/* Bottom decorative line */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: { xs: '8px', md: '16px' }, // reduced
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '120px', // reduced
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent 0%, #FFD700 50%, transparent 100%)',
                        borderRadius: '1px'
                    }}
                />
            </Box>
        </Box>
    )
}

export default HomeSection4


