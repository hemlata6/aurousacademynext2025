import { Card, Typography, Box } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';
import ContactUs from '@/components/CommonSections/ContactUs';
import instId from '@/constant/instId';

const HomeSection2 = () => {

    const scrollContainerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [banners, setBanners] = useState([]);
    // const instId = 120;

    const getBanners = async () => {
        try {
            const response = await Network.fetchBannerss(instId.instId);
            const fetchedBanners = response.banners || [];

            // Filter only the banners with group === 'ENQUIRY FORM BANNER 16:9'
            const filteredBanners = fetchedBanners.filter(item => item?.group === 'ENQUIRY FORM BANNER 16:9');

            if (filteredBanners.length > 0) {
                const extendedBanners = [...filteredBanners, filteredBanners[0]];
                setBanners(extendedBanners);
            } else {
                setBanners([]);
            }
        } catch (error) {
            console.error('Failed to fetch banners:', error);
            setBanners([]);
        };
    };

    useEffect(() => {
        getBanners();
    }, []);

    // Auto-slide banners
    useEffect(() => {
        if (banners.length <= 1) return;

        const autoSlideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                // Loop back to first banner if we reach the end
                if (nextIndex >= banners.length - 1) {
                    return 0;
                } else {
                    return nextIndex;
                }
            });
        }, 5000); // Change banner every 5 seconds

        return () => clearInterval(autoSlideInterval);
    }, [banners]);

    // console.log('banners', banners);


    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                position: 'relative',
                overflow: 'hidden',
                padding: { xs: '1.5rem 1rem', sm: '2rem 1.5rem', md: '2.5rem 2rem', lg: '3rem 2.5rem' },
                minHeight: 'auto',
            }}
        >
            {/* Main Content Container */}
            <Box
                sx={{
                    width: '100%',
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}
            >
                {/* Main Card with Left and Right Sections */}
                <Card
                    sx={{
                        background: '#ffffff',
                        borderRadius: { xs: '16px', md: '24px' },
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1)',
                        }
                    }}
                >
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: '3fr 2fr' },
                            gap: 0,
                            alignItems: 'stretch',
                        }}
                    >
                        {/* Left Section - Full Banner Image */}
                        <Box
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                                background: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                            }}
                        >
                            {banners && banners.length > 0 && banners[currentIndex]?.banner ? (
                                <img
                                    src={`${Endpoints.mediaBaseUrl}${banners[currentIndex].banner}`}
                                    alt="Aurous Academy Results"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        objectPosition: 'center',
                                        display: 'block',
                                        transition: 'opacity 0.5s ease-in-out',
                                    }}
                                />
                            ) : (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100%',
                                        color: '#ffffff',
                                        fontSize: '1.2rem',
                                    }}
                                >
                                    Loading...
                                </Box>
                            )}

                            {/* Pagination Dots */}
                            {banners && banners.length > 1 && (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: '1.5rem',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        display: 'flex',
                                        gap: '0.5rem',
                                        zIndex: 10,
                                    }}
                                >
                                    {banners.slice(0, -1).map((_, index) => (
                                        <Box
                                            key={index}
                                            onClick={() => setCurrentIndex(index)}
                                            sx={{
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '50%',
                                                background: currentIndex === index
                                                    ? '#3b82f6'
                                                    : 'rgba(255, 255, 255, 0.5)',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                border: '2px solid rgba(255, 255, 255, 0.8)',
                                                transform: currentIndex === index ? 'scale(1.3)' : 'scale(1)',
                                                '&:hover': {
                                                    background: '#3b82f6',
                                                    transform: 'scale(1.2)',
                                                }
                                            }}
                                        />
                                    ))}
                                </Box>
                            )}
                        </Box>

                        {/* Right Section - Contact Form */}
                        <Box
                            sx={{
                                // padding: { xs: '2.5rem 2rem', md: '3rem 2.5rem' },
                                pl:3,
                                pr:3,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                gap: '1rem',
                                background: '#ffffff',
                                position: 'relative',
                                height: '100%',
                            }}
                        >
                            {/* Form Title */}
                            {/* <Box sx={{ marginBottom: '0.5rem' }}>
                                <Typography
                                    sx={{
                                        pt:1,
                                        fontSize: { xs: '1.5rem', md: '1.75rem' },
                                        fontWeight: '700',
                                        color: '#1e293b',
                                        marginBottom: '0.3rem',
                                        letterSpacing: '-0.5px',
                                    }}
                                >
                                    Book Your Free Session
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '0.85rem', md: '0.95rem' },
                                        color: '#64748b',
                                        fontWeight: '400',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    Fill the form below to get a callback from our mentors.
                                </Typography>
                            </Box> */}

                            {/* Contact Form - Using ContactUs Component */}
                            <ContactUs />
                        </Box>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
};

export default HomeSection2;


