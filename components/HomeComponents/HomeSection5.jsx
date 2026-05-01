import { Box, Paper, Stack, Tooltip, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import Grid from '@mui/material/Grid2';

const HomeSection5 = () => {
    const isMobile = useMediaQuery("(min-width:600px)");

    const handleNavigatePlayStore = () => {
        const url = 'https://play.google.com/store/apps/details?id=com.classiolabs.aurousacademy&hl=en'
        window.open(url, '_blank', 'noreferrer');
    };

    return (
        <Box sx={{
            minHeight: { xs: 'auto', md: 'auto', lg: 'auto' },
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #667eea 50%, #764ba2 75%, #667eea 100%)',
            position: 'relative',
            overflow: 'hidden',
            py: { xs: 1, md: 2, lg: 3 }, // reduce vertical padding
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(118, 75, 162, 0.2) 0%, transparent 50%)',
                zIndex: 1,
            }
        }}>
            <Box sx={{
                px: { xs: 1, sm: 2, md: 3, lg: 4 }, // reduce padding to prevent overflow
                position: 'relative',
                zIndex: 2,
                height: '100%',
                maxWidth: { xs: '100%', md: '1200px' },
                margin: '0 auto',
            }}>
                <Grid container spacing={{ xs: 2, md: 3 }} sx={{ minHeight: { xs: 'auto', md: 'auto' }, alignItems: 'stretch', flexWrap: 'wrap' }}>
                    {/* On mobile, show phone icon above cards; on sm+ show in left column */}
                    <Grid size={{ xs: 12, sm: 5, md: 5, lg: 5 }}
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            justifyContent: { sm: 'flex-start' },
                            alignItems: { sm: 'flex-end' },
                            height: { sm: 'auto' },
                            position: { sm: 'relative', md: 'relative', lg: 'relative' },
                            pb: 0,
                            mb: { sm: 0 },
                        }}
                    >
                        <Box
                            className={isMobile ? 'phone-icon' : ''}
                            sx={{
                                width: { sm: '85%', md: '90%' },
                                maxWidth: { sm: '500px' },
                                height: { sm: 'auto', md: '100%' },
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 2,
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-start',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: '-10px',
                                    left: '-10px',
                                    right: '-10px',
                                    bottom: '-10px',
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
                                    borderRadius: '30px',
                                    filter: 'blur(12px)',
                                    zIndex: -1,
                                },
                                '&:hover': {
                                    transform: { sm: 'scale(1.05)' },
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                },
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                        >
                            <Image
                                alt='Aurous Academy learning app preview across devices'
                                src='/Images/Group1000001779.svg'
                                width={520}
                                height={860}
                                sizes='(max-width: 900px) 85vw, 520px'
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: 'calc(100vh - 120px)',
                                    minHeight: '180px',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))',
                                    display: 'block',
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 7, md: 7, lg: 7 }}>
                        <Box sx={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: { xs: '16px', md: '20px' },
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            p: { xs: 2, md: 3, lg: 4 },
                            boxShadow: { xs: '0 8px 24px rgba(0,0,0,0.08)', md: '0 16px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)' },
                            height: 'fit-content',
                            position: 'relative',
                            overflow: 'hidden',
                            maxWidth: { xs: '100%', sm: '100%', md: '600px', lg: '650px' },
                            margin: { md: '0 auto' },
                            boxSizing: 'border-box',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, transparent 50%, rgba(118, 75, 162, 0.1) 100%)',
                                zIndex: -1,
                            }
                        }}>
                            <Stack spacing={{ xs: 4, md: 5 }}>
                                <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem', lg: '2.25rem' },
                                            fontWeight: 800,
                                            background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #c7d2fe 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            lineHeight: 1.2,
                                            mb: 2,
                                            textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                                        }}
                                    >
                                        Aurous Academy is now Available on 
                                        <Box component="span" sx={{ 
                                            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                        }}>
                                            {' '}all Platforms
                                        </Box>
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            fontWeight: 400,
                                            lineHeight: 1.6,
                                            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                                        }}
                                    >
                                        Download lessons and learn anytime, anywhere just made for your ease of learning ✨
                                    </Typography>
                                </Box>

                                {/* Platform Cards - 3 in a row on mobile */}
                                {/* Platform Cards Row */}
                                <Stack
                                    direction="row"
                                    spacing={{ xs: 1, sm: 2 }}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        flexWrap: 'nowrap',
                                        gap: { xs: 1, sm: 2 },
                                        mb: { xs: 1, sm: 0 },
                                        maxWidth: '100%',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {/* Mobile Card */}
                                    <Box
                                        sx={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)',
                                            backdropFilter: 'blur(15px)',
                                            borderRadius: '16px',
                                            border: '1px solid rgba(255, 255, 255, 0.3)',
                                            p: { xs: 1, md: 2 },
                                            textAlign: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            width: { xs: '32%', sm: '110px', md: '120px' },
                                            maxWidth: { xs: '100%', md: '140px' },
                                            flex: '1 1 0',
                                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                                            m: { xs: '0 2px', sm: 0 },
                                            '&:hover': {
                                                transform: 'translateY(-6px) scale(1.04)',
                                                boxShadow: '0 10px 20px rgba(102, 126, 234, 0.18)',
                                                border: '1px solid rgba(255, 255, 255, 0.5)',
                                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                                            }
                                        }}
                                    >
                                        <Box sx={{ mb: 1 }}>
                                            <Image
                                                style={{
                                                    width: '32px',
                                                    height: '32px',
                                                    objectFit: 'contain',
                                                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.13))'
                                                }}
                                                alt='Aurous Academy mobile app screenshot'
                                                src='/Images/Screenshot 2025-01-31 120523-portrait.png'
                                                width={32}
                                                height={32}
                                                loading='lazy'
                                            />
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontSize: '0.85rem',
                                                fontWeight: 700,
                                                color: '#fff',
                                                mb: 0.2,
                                            }}
                                        >
                                            Mobile
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: '0.75rem',
                                                color: 'rgba(255, 255, 255, 0.8)',
                                            }}
                                        >
                                            iOS & Android
                                        </Typography>
                                    </Box>

                                    {/* Tablet Card */}
                                    <Box
                                        sx={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
                                            backdropFilter: 'blur(15px)',
                                            borderRadius: '16px',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            p: { xs: 1, md: 2 },
                                            textAlign: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            width: { xs: '34%', sm: '105px', md: '115px' },
                                            minWidth: { xs: '90px', sm: '105px', md: '115px' },
                                            maxWidth: { xs: '100%', md: '120px' },
                                            flex: '1 1 0',
                                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                                            opacity: 0.7,
                                            m: { xs: '0 2px', sm: 0 },
                                            position: 'relative',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                opacity: 0.9,
                                            }
                                        }}
                                    >
                                        <Box sx={{ mb: 1 }}>
                                            <Image
                                                style={{
                                                    width: '32px',
                                                    height: '32px',
                                                    objectFit: 'contain',
                                                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.13))'
                                                }}
                                                alt='Aurous Academy tablet app screenshot'
                                                src='/Images/Screenshot 2025-01-31 120905-portrait.png'
                                                width={32}
                                                height={32}
                                                loading='lazy'
                                            />
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontSize: '0.85rem',
                                                fontWeight: 700,
                                                color: '#fff',
                                                mb: 0.2,
                                            }}
                                        >
                                            Tablets
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: '0.75rem',
                                                color: 'rgba(255, 255, 255, 0.8)',
                                            }}
                                        >
                                            Android & iPad
                                        </Typography>
                                    </Box>

                                    {/* Desktop Card */}
                                    <Box
                                        sx={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
                                            backdropFilter: 'blur(15px)',
                                            borderRadius: '16px',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            p: { xs: 1, md: 2 },
                                            textAlign: 'center',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            width: { xs: '34%', sm: '105px', md: '115px' },
                                            minWidth: { xs: '90px', sm: '105px', md: '115px' },
                                            maxWidth: { xs: '100%', md: '120px' },
                                            flex: '1 1 0',
                                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                                            opacity: 0.7,
                                            m: { xs: '0 2px', sm: 0 },
                                            position: 'relative',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                opacity: 0.9,
                                            }
                                        }}
                                    >
                                        <Box sx={{ mb: 1 }}>
                                            <Image
                                                style={{
                                                    width: '32px',
                                                    height: '32px',
                                                    objectFit: 'contain',
                                                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.13))'
                                                }}
                                                alt='Aurous Academy desktop app screenshot'
                                                src='/Images/Screenshot 2025-01-31 121149-front.png'
                                                width={32}
                                                height={32}
                                                loading='lazy'
                                            />
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontSize: '0.85rem',
                                                fontWeight: 700,
                                                color: '#fff',
                                                mb: 0.2,
                                            }}
                                        >
                                            Desktop
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: '0.75rem',
                                                color: 'rgba(255, 255, 255, 0.8)',
                                            }}
                                        >
                                            All Browsers
                                        </Typography>
                                    </Box>
                                </Stack>

                                {/* Download Section - 3 in a row on mobile */}
                                <Box sx={{ pt: 2 }}>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '1.125rem', md: '1.25rem' },
                                            fontWeight: 600,
                                            color: '#fff',
                                            mb: 2,
                                            textAlign: { xs: 'center', sm: 'left' },
                                            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                                        }}
                                    >
                                        📱 Download Now
                                    </Typography>
                                    {/* Download Buttons Row */}
                                    <Stack
                                        direction="row"
                                        spacing={{ xs: 1, sm: 2 }}
                                        sx={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flexWrap: 'nowrap',
                                            gap: { xs: 1, sm: 2 },
                                            maxWidth: '100%',
                                            overflow: 'hidden',
                                            mt: 2,
                                        }}
                                    >
                                        <Box
                                            onClick={handleNavigatePlayStore}
                                            sx={{
                                                marginLeft: "0px !important",
                                                cursor: 'pointer',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                borderRadius: '14px',
                                                overflow: 'hidden',
                                                width: { xs: '90px', sm: '110px', md: '150px', lg: '180px' },
                                                minWidth: { xs: '90px', sm: '110px', md: '150px', lg: '180px' },
                                                maxWidth: { xs: '100%', md: '200px', lg: '220px' },
                                                flex: '1 1 0',
                                                m: { xs: '0 2px', sm: 0 },
                                                '&:hover': {
                                                    transform: 'translateY(-3px) scale(1.04)',
                                                    filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.18))',
                                                }
                                            }}
                                        >
                                            <Image
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    objectFit: 'contain',
                                                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.13))',
                                                    maxHeight: '70px',
                                                    maxWidth: '100%'
                                                }}
                                                alt='Download Aurous Academy app from Google Play'
                                                src='/Images/playStore1.svg'
                                                width={180}
                                                height={70}
                                                loading='lazy'
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                marginLeft: "0px !important",
                                                cursor: 'pointer',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                borderRadius: '14px',
                                                overflow: 'hidden',
                                                opacity: 0.7,
                                                width: { xs: '90px', sm: '110px', md: '150px', lg: '180px' },
                                                minWidth: { xs: '90px', sm: '110px', md: '150px', lg: '180px' },
                                                maxWidth: { xs: '100%', md: '200px', lg: '220px' },
                                                flex: '1 1 0',
                                                m: { xs: '0 2px', sm: 0 },
                                                '&:hover': {
                                                    transform: 'translateY(-2px)',
                                                    opacity: 0.9,
                                                }
                                            }}
                                        >
                                            <Image
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    objectFit: 'contain',
                                                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.13))',
                                                    maxHeight: '70px',
                                                    maxWidth: '100%'
                                                }}
                                                alt='Download Aurous Academy app from the App Store'
                                                src='/Images/appStore.svg'
                                                width={180}
                                                height={70}
                                                loading='lazy'
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                marginLeft: "0px !important",
                                                cursor: 'pointer',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                borderRadius: '14px',
                                                overflow: 'hidden',
                                                opacity: 0.7,
                                                width: { xs: '90px', sm: '110px', md: '150px', lg: '180px' },
                                                minWidth: { xs: '90px', sm: '110px', md: '150px', lg: '180px' },
                                                maxWidth: { xs: '100%', md: '200px', lg: '220px' },
                                                flex: '1 1 0',
                                                m: { xs: '0 2px', sm: 0 },
                                                '&:hover': {
                                                    transform: 'translateY(-2px)',
                                                    opacity: 0.9,
                                                }
                                            }}
                                        >
                                            <Image
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    objectFit: 'contain',
                                                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.13))',
                                                    maxHeight: '70px',
                                                    maxWidth: '100%'
                                                }}
                                                alt='Aurous Academy desktop learning access option'
                                                src='/Images/af9f2ac981440bd20c7c159c1ab9c376.jpg'
                                                width={180}
                                                height={70}
                                                loading='lazy'
                                            />
                                        </Box>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default HomeSection5;


