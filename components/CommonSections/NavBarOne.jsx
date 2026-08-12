'use client';

import { Box, Button, Stack, Typography, useMediaQuery, AppBar, Toolbar, Container } from '@mui/material';
import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid2';
import images from '@/lib/images';
import { useRouter } from 'next/navigation';
import Network from '@/lib/Netwrok';
import instId from '@/constant/instId';

const Logo = images.logo;
const Cellphone = images.cellphoneIcon;
const ButtonIcon = images.buttonIcon;

const NavBarOne = () => {
    const isMobile = useMediaQuery("(max-width:768px)");
    const isTablet = useMediaQuery("(max-width:1024px)");
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [banners, setBanners] = useState([]);
    // const instId = 120;

    useEffect(() => {
        getBanners();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleConvertToBase64 = (e) => {
        e.preventDefault();
        var object = {
            "isAdmitCard": true,
            "contact": ''
        }
        const url = `https://portal.aurousacademy.com/#/data=${btoa(JSON.stringify(object))}`;
        // Open the WhatsApp URL in a new tab
        window.open(url, '_blank');
    };

    // const handleNavigateAPRE = () => {
    //     // const url = 'https://apre.aurousacademy.com/'
    //      const url = 'https://apre.aurousacademy.com/'
    //     window.open(url, '_blank', 'noreferrer');
    // };
    const handleNavigate = () => {
        router.push('/');
    };

    const handleNavigateAPRE = () => {
        const url = 'https://pragyan.aurousacademy.com/'
        // const url = banners?.length > 0 ? banners[0]?.contentLink : "";
        window.open(url, '_blank', 'noreferrer');
    };

    const getBanners = async () => {
        try {
            const response = await Network.fetchBannerss(instId.instId);
            const fetchedBanners = response.banners || [];

            const newBanners = fetchedBanners.filter(item => item?.group === 'scholarship');
            setBanners(newBanners);
        } catch (error) {
            console.error('Failed to fetch banners:', error);
            setBanners([]);
        }
    };

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                background: scrolled
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 249, 250, 0.95) 100%)'
                    : 'linear-gradient(135deg, #ffffff 0%, #fefefe 100%)',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '2px solid rgba(183, 14, 14, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: scrolled
                    ? '0 8px 32px rgba(183, 14, 14, 0.15)'
                    : '0 2px 12px rgba(0, 0, 0, 0.08)',
                    margin:'0px',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: { xs: '70px', sm: '80px', md: '90px' },
                        // px: { xs: 1, sm: 2, md: 4 },
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%'
                    }}
                >
                    {/* Logo Section - Left Side */}
                    <Box
                        component="img"
                        src={Logo}
                        alt="Aurous Academy"
                        onClick={handleNavigate}
                        sx={{
                            height: { xs: '45px', sm: '55px', md: '65px' },
                            width: 'auto',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease-in-out',
                            filter: 'drop-shadow(0 4px 8px rgba(183, 14, 14, 0.15))',
                            flexShrink: 0,
                            '&:hover': {
                                transform: 'scale(1.05)',
                                filter: 'drop-shadow(0 6px 12px rgba(183, 14, 14, 0.25))',
                            }
                        }}
                    />

                    {/* Navigation Actions - Right Side */}
                    <Stack
                        direction="row"
                        spacing={isMobile ? 1 : 2}
                        alignItems="center"
                        sx={{ flexShrink: 0 }}
                    >
                        {/* Admit Card Button - Always visible but smaller on mobile */}
                        <Button
                            onClick={(e) => handleConvertToBase64(e)}
                            variant="outlined"
                            sx={{
                                textTransform: 'none',
                                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                                border: isMobile ? '1.5px solid #B70E0E' : '2px solid #B70E0E',
                                color: '#B70E0E',
                                minWidth: isMobile ? '80px' : { sm: '140px', md: '160px', lg: '180px' },
                                height: isMobile ? '35px' : { sm: '45px', md: '50px' },
                                fontSize: isMobile ? '10px' : { sm: '12px', md: '13px' },
                                fontWeight: '600',
                                borderRadius: isMobile ? '18px' : '25px',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: isMobile ? '0 2px 8px rgba(183, 14, 14, 0.15)' : '0 4px 15px rgba(183, 14, 14, 0.2)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: '-100%',
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                                    transition: 'left 0.5s',
                                },
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #B70E0E 0%, #d41e1e 100%)',
                                    color: '#ffffff',
                                    transform: 'translateY(-2px)',
                                    boxShadow: isMobile ? '0 4px 12px rgba(183, 14, 14, 0.25)' : '0 8px 25px rgba(183, 14, 14, 0.35)',
                                    '&::before': {
                                        left: '100%',
                                    }
                                },
                            }}
                        >
                            {isMobile ? '📋' : '📋 Download Admit Card'}
                        </Button>

                        {/* Scholarship Button */}
                        <Button
                            onClick={handleNavigateAPRE}
                            variant="contained"
                            sx={{
                                textTransform: 'none',
                                background: '#E3F0FF',
                                color: '#1a1a1a',
                                border: '2px solid #3399FF',
                                minWidth: isMobile ? '120px' : { xs: '160px', sm: '180px', md: '220px', lg: '250px' },
                                height: isMobile ? '35px' : { xs: '45px', sm: '50px', md: '55px' },
                                fontSize: isMobile ? '10px' : { xs: '11px', sm: '12px', md: '14px' },
                                fontWeight: '700',
                                borderRadius: isMobile ? '18px' : '27px',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: isMobile ? '0 3px 12px rgba(255, 202, 8, 0.3)' : '0 6px 20px rgba(255, 202, 8, 0.4)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)',
                                    transform: 'translateX(-100%)',
                                    transition: 'transform 0.6s',
                                },
                                '&:hover': {
                                    background: '#D0E7FF',
                                    border: '2px solid #1976D2',
                                    transform: 'translateY(-3px) scale(1.02)',
                                    boxShadow: isMobile ? '0 5px 18px rgba(51, 153, 255, 0.18)' : '0 10px 30px rgba(51, 153, 255, 0.22)',
                                    '&::before': {
                                        transform: 'translateX(100%)',
                                    }
                                },
                                '&:active': {
                                    transform: 'translateY(-1px) scale(0.98)',
                                }
                            }}
                        >
                         🎓 {isMobile ? 'Scholarship' : 'Register for Scholarship Exam'}
                        </Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBarOne


