'use client';

import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import Link from 'next/link';
import Grid from '@mui/material/Grid2';
import images from '@/lib/images';

const Logo = images.roundedLogo;
const telegramLogo = images.telegramLogo;
const faceBookLogo = images.facebookLogo;
const instagramLogo = images.instagramLogo;
const youTube = images.youTube;
const playStore = images.playStore1;
const appStore = images.appStore;
const addressIcon = images.address;
const phoneFooter = images.phoneFooter;
const earphones = images.earphones;
const email = images.email;
import { useRouter } from 'next/navigation';
import HorizontalRuleSharpIcon from '@mui/icons-material/HorizontalRuleSharp';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    const router = useRouter();
    const isMobile = useMediaQuery("(min-width:600px)");
    const [message, setMessage] = useState('Aurous Academy');
    
    // Brochure PDF path from public folder
    const BrochurePDF = '/Updated Brochure.pdf';

    const handleRedirectToCall = () => {
        window.location.href = "tel:+919522512624";
    };

    const handleWhatsapp = (event) => {
        event.preventDefault();

        // Replace the phone number and construct the WhatsApp URL
        const phoneNumber = '+919685099770';
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=Hey,+${encodedMessage}+%21&type=phone_number&app_absent=0`;

        // Open the WhatsApp URL in a new tab
        window.open(whatsappURL, '_blank');
    };


    const handleOnlineCourse = () => {
        const url = 'https://aurousacademy.graphy.com/'
        window.open(url, '_blank', 'noreferrer');
    };

    const handleResultClick = () => {
        router.push('/result');
    }

    const handleDownloadBrochure = () => {
        const link = document.createElement('a');
        link.href = BrochurePDF;
        link.download = 'Aurous Academy Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box sx={{
            background: 'linear-gradient(135deg, #0a0f1a 0%, #1a237e 20%, #264796 40%, #1e3a8a 60%, #0f172a 80%, #000000 100%)',
            // position: 'relative',
            overflow: 'hidden',
            px: { xs: 0.5, sm: 1, md: 1.5, lg: 2 }, // further reduced horizontal padding
            py: { xs: 0.5, md: 1 }, // further reduced vertical padding
            '&::before': {
                content: '""',
                // position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(147, 197, 253, 0.05) 0%, transparent 60%)',
                zIndex: 1,
            }
        }}>
            <Box
            // sx={{ position: 'relative', zIndex: 2 }}
            >
                <Grid container spacing={{ xs: 1, md: 1.5 }}>
                    <Grid size={12}>
                        <Box sx={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                            backdropFilter: 'blur(12px)',
                            borderRadius: '8px', // further reduced radius
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            p: { xs: 0.7, md: 1 }, // further reduced padding
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.06)', // lighter shadow
                            // position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                                content: '""',
                                // position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, transparent 50%, rgba(147, 197, 253, 0.01) 100%)',
                                zIndex: -1,
                            }
                        }}>
                            <Grid container spacing={{ xs: 1.2, md: 2 }}>
                                {/* About Us Section */}
                                <Grid size={{ xs: 6, sm: 6, md: 3 }}>
                                    <Box sx={{
                                        borderBottom: '2px solid transparent',
                                        borderImage: 'linear-gradient(90deg, #3b82f6, #60a5fa, transparent) 1',
                                        pb: 1,
                                        mb: 1.2,
                                    }}>
                                        <Typography
                                            sx={{
                                                color: '#fff',
                                                fontSize: { xs: '1.125rem', md: '1.25rem' },
                                                fontWeight: 700,
                                                background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                            }}
                                        >
                                            About Us
                                        </Typography>
                                    </Box>
                                    <Stack spacing={1}>
                                        {[
                                            { text: 'About Us', href: '/about' },
                                            { text: "Direct from Director's", href: '/ourTeam' },
                                            { text: 'Our Methodologies', href: '/methodologies' },
                                            { text: 'Success Stories', href: '/gallery' },
                                        ].map((item, index) => (
                                            <a key={index} href={item.href} style={{ textDecoration: 'none' }}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 1,
                                                        p: 1,
                                                        borderRadius: '12px',
                                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            background: 'rgba(59, 130, 246, 0.1)',
                                                            transform: 'translateX(8px)',
                                                            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
                                                        }
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            width: '6px',
                                                            height: '6px',
                                                            borderRadius: '50%',
                                                            background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                                                            transition: 'all 0.3s ease',
                                                        }}
                                                    />
                                                    <Typography
                                                        sx={{
                                                            fontSize: '0.875rem',
                                                            color: 'rgba(255, 255, 255, 0.8)',
                                                            fontWeight: 500,
                                                            transition: 'color 0.3s ease',
                                                            '&:hover': {
                                                                color: '#fff',
                                                            }
                                                        }}
                                                    >
                                                        {item.text}
                                                    </Typography>
                                                </Box>
                                            </a>
                                        ))}
                                    </Stack>
                                </Grid>

                                {/* Courses Section */}
                                <Grid size={{ xs: 6, sm: 6, md: 3 }}>
                                    <Box sx={{
                                        borderBottom: '2px solid transparent',
                                        borderImage: 'linear-gradient(90deg, #3b82f6, #60a5fa, transparent) 1',
                                        pb: 1,
                                        mb: 1.2,
                                    }}>
                                        <Typography
                                            sx={{
                                                color: '#fff',
                                                fontSize: { xs: '1.125rem', md: '1.25rem' },
                                                fontWeight: 700,
                                                background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                            }}
                                        >
                                            Courses
                                        </Typography>
                                    </Box>
                                    <Stack spacing={1}>
                                        {[
                                            { text: 'IIT-JEE', href: '/jee' },
                                            { text: 'NEET-UG', href: '/neet' },
                                            { text: 'Foundation', href: '/foundation' },
                                            { text: 'Online Classes', action: handleOnlineCourse },
                                        ].map((item, index) => (
                                            <Box key={index}>
                                                {item.href ? (
                                                    <Link href={item.href} style={{ textDecoration: 'none' }}>
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 1,
                                                                p: 1,
                                                                borderRadius: '12px',
                                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                                cursor: 'pointer',
                                                                '&:hover': {
                                                                    background: 'rgba(59, 130, 246, 0.1)',
                                                                    transform: 'translateX(8px)',
                                                                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
                                                                }
                                                            }}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    width: '6px',
                                                                    height: '6px',
                                                                    borderRadius: '50%',
                                                                    background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                                                                }}
                                                            />
                                                            <Typography
                                                                sx={{
                                                                    fontSize: '0.875rem',
                                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                                    fontWeight: 500,
                                                                    transition: 'color 0.3s ease',
                                                                    '&:hover': {
                                                                        color: '#fff',
                                                                    }
                                                                }}
                                                            >
                                                                {item.text}
                                                            </Typography>
                                                        </Box>
                                                    </Link>
                                                ) : (
                                                    <Box
                                                        onClick={item.action}
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 1,
                                                            p: 1,
                                                            borderRadius: '12px',
                                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                            cursor: 'pointer',
                                                            '&:hover': {
                                                                background: 'rgba(59, 130, 246, 0.1)',
                                                                transform: 'translateX(8px)',
                                                                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
                                                            }
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                width: '6px',
                                                                height: '6px',
                                                                borderRadius: '50%',
                                                                background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                                                            }}
                                                        />
                                                        <Typography
                                                            sx={{
                                                                fontSize: '0.875rem',
                                                                color: 'rgba(255, 255, 255, 0.8)',
                                                                fontWeight: 500,
                                                                transition: 'color 0.3s ease',
                                                                '&:hover': {
                                                                    color: '#fff',
                                                                }
                                                            }}
                                                        >
                                                            {item.text}
                                                        </Typography>
                                                    </Box>
                                                )}
                                            </Box>
                                        ))}
                                    </Stack>
                                </Grid>

                                {/* Results Section */}
                                <Grid size={{ xs: 6, sm: 6, md: 3 }}>
                                    <Box sx={{
                                        borderBottom: '2px solid transparent',
                                        borderImage: 'linear-gradient(90deg, #3b82f6, #60a5fa, transparent) 1',
                                        pb: 1,
                                        mb: 1.2,
                                    }}>
                                        <Typography
                                            sx={{
                                                color: '#fff',
                                                fontSize: { xs: '1.125rem', md: '1.25rem' },
                                                fontWeight: 700,
                                                background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                            }}
                                        >
                                            Results
                                        </Typography>
                                    </Box>
                                    <Stack spacing={1}>
                                        {[
                                            'JEE Advanced',
                                            'JEE Main',
                                            'NEET-UG',
                                            'Olympiad',
                                            'Boards',
                                        ].map((item, index) => (
                                            <Box
                                                onClick={handleResultClick}
                                                key={index}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    p: 1,
                                                    borderRadius: '12px',
                                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    cursor: 'pointer',
                                                    '&:hover': {
                                                        background: 'rgba(59, 130, 246, 0.1)',
                                                        transform: 'translateX(8px)',
                                                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
                                                    }
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: '6px',
                                                        height: '6px',
                                                        borderRadius: '50%',
                                                        background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                                                    }}
                                                />
                                                <Typography
                                                    sx={{
                                                        fontSize: '0.875rem',
                                                        color: 'rgba(255, 255, 255, 0.8)',
                                                        fontWeight: 500,
                                                        transition: 'color 0.3s ease',
                                                        '&:hover': {
                                                            color: '#fff',
                                                        }
                                                    }}
                                                >
                                                    {item}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Grid>

                                {/* Important Links Section */}
                                <Grid size={{ xs: 6, sm: 6, md: 3 }}>
                                    <Box sx={{
                                        borderBottom: '2px solid transparent',
                                        borderImage: 'linear-gradient(90deg, #3b82f6, #60a5fa, transparent) 1',
                                        pb: 1,
                                        mb: 1.2,
                                    }}>
                                        <Typography
                                            sx={{
                                                color: '#fff',
                                                fontSize: { xs: '1.125rem', md: '1.25rem' },
                                                fontWeight: 700,
                                                background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                            }}
                                        >
                                            Important Links
                                        </Typography>
                                    </Box>
                                    <Stack spacing={1}>
                                        {[
                                            { text: 'Privacy Policy', href: '/privacyPolicy' },
                                            { text: 'Refund Policy', href: '/refundPolicy' },
                                            { text: 'Download Brochure', action: handleDownloadBrochure },
                                            { text: 'Download', href: '/previousyearpaper' },
                                            { text: 'Blog', href: '/blog' }
                                        ].map((item, index) => (
                                            <Box key={index}>
                                                {item.href ? (
                                                    <a href={item.href} style={{ textDecoration: 'none' }}>
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 1,
                                                                p: 1,
                                                                borderRadius: '12px',
                                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                                cursor: 'pointer',
                                                                '&:hover': {
                                                                    background: 'rgba(59, 130, 246, 0.1)',
                                                                    transform: 'translateX(8px)',
                                                                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
                                                                }
                                                            }}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    width: '6px',
                                                                    height: '6px',
                                                                    borderRadius: '50%',
                                                                    background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                                                                }}
                                                            />
                                                            <Typography
                                                                sx={{
                                                                    fontSize: '0.875rem',
                                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                                    fontWeight: 500,
                                                                    transition: 'color 0.3s ease',
                                                                    '&:hover': {
                                                                        color: '#fff',
                                                                    }
                                                                }}
                                                            >
                                                                {item.text}
                                                            </Typography>
                                                        </Box>
                                                    </a>
                                                ) : (
                                                    <Box
                                                        onClick={item.action}
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 1,
                                                            p: 1,
                                                            borderRadius: '12px',
                                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                            cursor: 'pointer',
                                                            '&:hover': {
                                                                background: 'rgba(59, 130, 246, 0.1)',
                                                                transform: 'translateX(8px)',
                                                                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
                                                            }
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                width: '6px',
                                                                height: '6px',
                                                                borderRadius: '50%',
                                                                background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                                                            }}
                                                        />
                                                        <Typography
                                                            sx={{
                                                                fontSize: '0.875rem',
                                                                color: 'rgba(255, 255, 255, 0.8)',
                                                                fontWeight: 500,
                                                                transition: 'color 0.3s ease',
                                                                '&:hover': {
                                                                    color: '#fff',
                                                                }
                                                            }}
                                                        >
                                                            {item.text}
                                                        </Typography>
                                                    </Box>
                                                )}
                                            </Box>
                                        ))}
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
            {/* Contact Information Section */}
            <Grid size={12}>
                <Box sx={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    p: { xs: 0.7, md: 1 },
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
                    mt: 0.7,
                }}>
                    <Grid container spacing={{ xs: 1, md: 1.5 }} alignItems="center">
                        {/* Logo Section */}
                        <Grid size={{ xs: 12, md: 2 }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: { xs: 'flex-start', md: 'flex-start' },
                                alignItems: 'center',
                            }}>
                                <Link href='/' style={{ display: 'flex', alignItems: 'center' }}>
                                    <Box
                                        component="img"
                                        src={Logo}
                                        alt="Aurous Academy Logo"
                                        sx={{
                                            width: { xs: '100%', md: '100%' },
                                            height: '100%',
                                            cursor: 'pointer',
                                            transition: 'transform 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                            }
                                        }}
                                    />
                                </Link>
                            </Box>
                        </Grid>

                        {/* Address Section */}
                        <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                p: 1,
                                borderRadius: '8px',
                                background: 'rgba(59, 130, 246, 0.05)',
                                border: '1px solid rgba(59, 130, 246, 0.1)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    border: '1px solid rgba(59, 130, 246, 0.2)',
                                    transform: 'translateY(-2px)',
                                }
                            }}>
                                <Box
                                    component="img"
                                    src={addressIcon}
                                    alt="Address"
                                    sx={{
                                        width: { xs: '24px', md: '32px' },
                                        height: 'auto',
                                    }}
                                />
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: '0.75rem',
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            fontWeight: 600,
                                            mb: 0.5,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                        }}
                                    >
                                        Visit Our Location
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '0.875rem',
                                            color: '#fff',
                                            fontWeight: 500,
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        Plot No. R-4, Opposite Railway Track, Zone-2, MP Nagar, Bhopal, Madhya Pradesh (India), 462011
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        {/* Phone Section */}
                        <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                p: 1,
                                borderRadius: '8px',
                                background: 'rgba(59, 130, 246, 0.05)',
                                border: '1px solid rgba(59, 130, 246, 0.1)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    border: '1px solid rgba(59, 130, 246, 0.2)',
                                    transform: 'translateY(-2px)',
                                }
                            }}
                                onClick={handleRedirectToCall}
                            >
                                <Box
                                    component="img"
                                    src={phoneFooter}
                                    alt="Phone"
                                    sx={{
                                        width: { xs: '24px', md: '32px' },
                                        height: 'auto',
                                    }}
                                />
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: '0.75rem',
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            fontWeight: 600,
                                            mb: 0.5,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                        }}
                                    >
                                        Give Us a Call
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '0.875rem',
                                            color: '#fff',
                                            fontWeight: 600,
                                            mb: 0.5,
                                            transition: 'color 0.3s ease',
                                            '&:hover': {
                                                color: '#60a5fa',
                                            }
                                        }}
                                    >
                                        +91 95225-12624
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '0.75rem',
                                            color: 'rgba(255, 255, 255, 0.6)',
                                            fontWeight: 500,
                                        }}
                                    >
                                        (08:00 AM to 08:00 PM)
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        {/* WhatsApp Support Section */}
                        <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                p: 1,
                                borderRadius: '8px',
                                background: 'rgba(34, 197, 94, 0.05)',
                                border: '1px solid rgba(34, 197, 94, 0.1)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    background: 'rgba(34, 197, 94, 0.1)',
                                    border: '1px solid rgba(34, 197, 94, 0.2)',
                                    transform: 'translateY(-2px)',
                                }
                            }}
                                onClick={handleWhatsapp}
                            >
                                <Box
                                    component="img"
                                    src={earphones}
                                    alt="Support"
                                    sx={{
                                        width: { xs: '24px', md: '32px' },
                                        height: 'auto',
                                    }}
                                />
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: '0.75rem',
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            fontWeight: 600,
                                            mb: 0.5,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                        }}
                                    >
                                        Get Support
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '0.875rem',
                                            color: '#22c55e',
                                            fontWeight: 600,
                                            transition: 'color 0.3s ease',
                                            '&:hover': {
                                                color: '#4ade80',
                                            }
                                        }}
                                    >
                                        Click Here
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        {/* Email Section */}
                        <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                p: 1,
                                borderRadius: '8px',
                                background: 'rgba(59, 130, 246, 0.05)',
                                border: '1px solid rgba(59, 130, 246, 0.1)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    border: '1px solid rgba(59, 130, 246, 0.2)',
                                    transform: 'translateY(-2px)',
                                }
                            }}>
                                <Box
                                    component="img"
                                    src={email}
                                    alt="Email"
                                    sx={{
                                        width: { xs: '24px', md: '32px' },
                                        height: 'auto',
                                    }}
                                />
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: '0.75rem',
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            fontWeight: 600,
                                            mb: 0.5,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                        }}
                                    >
                                        Send us a Message
                                    </Typography>
                                    <a href='mailto:support@aurousacademy.com' style={{ textDecoration: 'none' }}>
                                        <Typography
                                            sx={{
                                                fontSize: '0.875rem',
                                                color: '#fff',
                                                fontWeight: 600,
                                                transition: 'color 0.3s ease',
                                                '&:hover': {
                                                    color: '#60a5fa',
                                                }
                                            }}
                                        >
                                            support@aurousacademy.com
                                        </Typography>
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            {/* Company Info and Social Media Section */}
            <Grid size={12}>
                <Box sx={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '7px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    p: { xs: 0.5, md: 0.8 },
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
                    mt: 0.5,
                }}>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={0.7} justifyContent="space-between" alignItems="center">
                        {/* Company Information */}
                        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography
                                sx={{
                                    fontSize: '0.875rem',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontWeight: 600,
                                    mb: 0.5,
                                }}
                            >
                                Aurous Academy Private Limited
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '0.75rem',
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    fontWeight: 500,
                                }}
                            >
                                (CIN: U74999MP2019PTC050133)
                            </Typography>
                        </Box>

                        {/* Social Media Icons */}
                        <Box sx={{
                            display: 'flex',
                            gap: 0.7,
                            alignItems: 'center',
                        }}>
                            {[
                                { icon: LinkedInIcon, url: 'https://in.linkedin.com/company/aurous-academy', color: '#0077B5' },
                                { icon: FacebookIcon, url: 'https://www.facebook.com/aurousacademy', color: '#1877F2' },
                                { icon: InstagramIcon, url: 'https://www.instagram.com/aurousacademy/', color: '#E4405F' },
                                { icon: YouTubeIcon, url: 'https://youtube.com/@aurousacademy8912?si=Eh3ykFIQDBLBKzb5', color: '#FF0000' },
                            ].map((social, index) => (
                                <a key={index} href={social.url} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                    <Box sx={{
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        backdropFilter: 'blur(6px)',
                                        '&:hover': {
                                            background: `linear-gradient(135deg, ${social.color}20 0%, ${social.color}10 100%)`,
                                            border: `1px solid ${social.color}40`,
                                            transform: 'translateY(-3px) scale(1.08)',
                                            boxShadow: `0 4px 12px ${social.color}30`,
                                        }
                                    }}>
                                        <social.icon
                                            sx={{
                                                color: '#fff',
                                                fontSize: '16px',
                                                transition: 'color 0.3s ease',
                                                '&:hover': {
                                                    color: social.color,
                                                }
                                            }}
                                        />
                                    </Box>
                                </a>
                            ))}
                        </Box>
                    </Stack>
                </Box>
            </Grid>
            {/* Copyright Section */}
            <Grid size={12}>
                <Box sx={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    p: 0.3,
                    mt: 0.3,
                    textAlign: 'center',
                }}>
                    <Typography
                        sx={{
                            fontSize: '0.875rem',
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontWeight: 500,
                            background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #FFCA08 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-1px)',
                                background: 'linear-gradient(135deg, #FFCA08 0%, #ffffff 50%, #e0e7ff 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            },
                        }}
                    >
                        2024 AUROUS ACADEMY PRIVATE LIMITED. All Rights Reserved | Design By
                        <a href="https://www.classiolabs.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', fontWeight: 600, cursor: 'pointer' }}>
                            &nbsp; CLASSIO LABS
                        </a>
                    </Typography>
                </Box>
            </Grid>
        </Box>
    )
}

export default Footer



