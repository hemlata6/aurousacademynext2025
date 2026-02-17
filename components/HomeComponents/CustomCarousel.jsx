import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Endpoints from '@/constant/endpoints';
import Network from '@/lib/Netwrok';


const CustomCarousel = () => {
    const isMobile = useMediaQuery("(min-width:600px)");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [banners, setBanners] = useState([]);
    const instId = 120;

    // Fetch banners and apply repeat/unique logic
    const getBanners = async () => {
        try {
            const response = await Network.fetchBannerss(instId);
            const fetchedBanners = response.banners || [];
            let resultBanner = [];
            fetchedBanners.forEach((item) => {
                if (item?.group === 'TOP BANNER 3:1') {
                    resultBanner.push(item);
                }
            });
            if (resultBanner.length === 1) {
                // Only one banner, repeat it three times
                setBanners([resultBanner[0], resultBanner[0], resultBanner[0]]);
            } else if (resultBanner.length > 1) {
                // Multiple banners, use as is
                setBanners(resultBanner);
            } else {
                setBanners([]);
            }
        } catch (error) {
            console.error('Failed to fetch banners:', error);
            setBanners([]);
        }
    };

    useEffect(() => {
        getBanners();
    }, []);

    // Auto-scroll only if more than 1 unique banner
    useEffect(() => {
        if (banners.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [banners]);

    // Listen for external arrow events
    useEffect(() => {
        const handlePrev = () => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
        };
        const handleNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        };
        window.addEventListener('carousel-prev', handlePrev);
        window.addEventListener('carousel-next', handleNext);
        return () => {
            window.removeEventListener('carousel-prev', handlePrev);
            window.removeEventListener('carousel-next', handleNext);
        };
    }, [banners]);


    return (
        <React.Fragment>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
                overflow: 'visible',
                background: '#f8f9fa',
                borderRadius: '16px',
                minHeight: { xs: '200px', sm: '250px', md: '300px' },
                maxHeight: { xs: '350px', sm: '400px', md: '450px' },
            }}>
                {/* Carousel Images */}
                <Box
                    sx={{
                        width: '100%',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                        minHeight: { xs: '200px', sm: '250px', md: '300px' },
                        maxHeight: { xs: '350px', sm: '400px', md: '450px' },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            transition: 'transform 0.5s cubic-bezier(.4,2,.6,1)',
                            width: '100%',
                        }}
                        style={{
                            transform: `translateX(${-currentIndex * 100}%)`
                        }}
                    >
                        {banners.map((img, index) => (
                            <Box
                                key={index}
                                sx={{
                                    flex: '0 0 100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                    overflow: 'visible',
                                }}
                            >
                                <img
                                    src={Endpoints?.mediaBaseUrl + img?.banner}
                                    alt={img?.banner || `Banner ${index + 1}`}
                                    className={index === currentIndex ? 'carousel-img-center' : 'carousel-img'}
                                    style={{
                                        width: 'auto',
                                        height: '90%',
                                        maxHeight: '100%',
                                        maxWidth: '100%',
                                        objectFit: 'contain',
                                        borderRadius: 0,
                                        transition: 'all 0.4s cubic-bezier(.4,2,.6,1)',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                        backgroundColor: '#f5f5f5',
                                        display: 'block'
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
                {/* Right Arrow (always visible) */}
                <Box
                    sx={{
                        position: 'absolute',
                        right: { xs: 0, sm: 8 },
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 2,
                        width: { xs: 32, sm: 44 },
                        height: { xs: 32, sm: 44 },
                        background: 'linear-gradient(135deg, #fff 60%, #e8410e 100%)',
                        borderRadius: '50%',
                        boxShadow: '0 2px 8px rgba(232,65,14,0.13)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'box-shadow 0.2s, background 0.2s',
                        '&:hover': {
                            boxShadow: '0 4px 16px 2px #E8410E44',
                            background: 'linear-gradient(135deg, #fff 30%, #e8410e 100%)',
                        },
                    }}
                    onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)}
                >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="11" fill="none" />
                        <path d="M8.5 6L13 11L8.5 16" stroke="#E8410E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Box>
            </Box>
            {/* Dots navigation removed as per request */}
            <style>{`
                .carousel-img {
                    filter: none;
                }
                .carousel-img-center {
                    box-shadow: 0 0 0 0 #1976d2, 0 8px 32px 0 #1976d233;
                    border-radius: 18px;
                    transition: box-shadow 0.4s, transform 0.4s cubic-bezier(.4,2,.6,1);
                }
                .carousel-img-center:hover {
                    box-shadow: 0 0 0 8px #42a5f5cc, 0 12px 36px 0 #1976d244;
                    transform: scale(1.08) perspective(900px) rotateY(-2deg) rotateX(0deg);
                    filter: brightness(1.08) drop-shadow(0 0 12px #42a5f5cc);
                }
                .carousel-img:hover {
                    box-shadow: 0 0 0 4px #42a5f588, 0 8px 24px 0 #1976d233;
                    filter: brightness(1.04);
                    transform: scale(1.04);
                }
            `}</style>
        </React.Fragment>
    );
}

export default CustomCarousel;



