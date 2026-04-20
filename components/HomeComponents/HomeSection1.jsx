import { Box, Dialog, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CustomCarousel from './CustomCarousel';
import Grid from '@mui/material/Grid2';
import Network from '@/lib/Netwrok';
import AnnouncementDialog from '@/components/CommonSections/AnnouncementDialog';
import instId from '@/constant/instId';

const HomeSection1 = () => {

    // const instId = 120;
    const isMobile = useMediaQuery("(min-width:600px)");
    const [anncouncementData, setAnncouncementData] = useState([]);
    const [selectedData, setSelectedData] = useState([]);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleSelectData = (e, data) => {
        setSelectedData(data);
        handleOpen();
    };

    const getAllAnnouncement = async () => {
        try {
            const response = await Network.fetchAnnouncementUrl(instId.instId);
            setAnncouncementData(response?.announcement);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        getAllAnnouncement();
    }, []);


    return (
        <Box sx={{
            width: '100%',
            overflow: 'hidden',
            maxWidth: '100vw',
            boxSizing: 'border-box'
        }}>
            <Grid container sx={{ width: '100%', margin: 0, padding: 0 }}>
                <Grid item xs={12} sx={{ width: '100%', padding: 0 }}>
                    <Box
                        sx={{
                            width: '100%',
                            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                            borderBottom: '2px solid #E8410E',
                            overflow: 'hidden',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Stack
                            direction={'row'}
                            width={'100%'}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'flex-start'}
                            sx={{
                                px: { xs: 1, sm: 2, md: 3 },
                                py: { xs: 1, sm: 1.5 },
                                width: '100%',
                                overflow: 'hidden',
                                boxSizing: 'border-box'
                            }}
                        >
                            <Box
                                sx={{
                                    flexShrink: 0,
                                    mr: { xs: 1, sm: 1.5 },
                                    display: 'flex',
                                    alignItems: 'center',
                                    background: 'rgba(232, 65, 14, 0.1)',
                                    borderRadius: '50%',
                                    p: { xs: 0.5, sm: 0.8 },
                                    width: { xs: '28px', sm: '32px' },
                                    height: { xs: '28px', sm: '32px' },
                                    justifyContent: 'center'
                                }}
                            >
                                <img
                                    alt='speaker'
                                    style={{
                                        width: '16px',
                                        height: '16px',
                                        filter: 'hue-rotate(340deg) saturate(2)'
                                    }}
                                    src="/Images/speakerIcon.svg"
                                />
                            </Box>
                            <Box
                                sx={{
                                    flex: 1,
                                    overflow: 'hidden',
                                    minWidth: 0,
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    borderRadius: '15px',
                                    py: 0.5,
                                    px: { xs: 0.5, sm: 1 },
                                    border: '1px solid rgba(232, 65, 14, 0.2)',
                                    maxWidth: 'calc(100vw - 80px)'
                                }}
                            >
                                <Box sx={{
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    width: '100%',
                                    position: 'relative'
                                }}>
                                    <Box
                                        sx={{
                                            display: 'inline-block',
                                            animation: 'scroll 30s linear infinite',
                                            willChange: 'transform'
                                        }}
                                    >
                                        {anncouncementData && anncouncementData.length > 0 &&
                                            anncouncementData.map((item, index) => (
                                                <Typography
                                                    component="span"
                                                    key={index}
                                                    onClick={(e) => handleSelectData(e, item)}
                                                    sx={{
                                                        marginRight: '30px',
                                                        color: '#E8410E',
                                                        fontSize: { xs: '13px', sm: '14px', md: '15px' },
                                                        fontWeight: '500',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        textDecoration: 'none',
                                                        '&:hover': {
                                                            color: '#d73807',
                                                            textShadow: '0 2px 4px rgba(232, 65, 14, 0.3)'
                                                        }
                                                    }}
                                                >
                                                    📕 {item?.title}
                                                </Typography>
                                            ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ width: '100%', padding: 0 }}>
                    <Box
                        sx={{
                            background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                            // py: { xs: 2, sm: 3, md: 4 },
                            // px: { xs: 0.5, sm: 1, md: 2 },
                            width: '100%',
                            overflow: 'visible',
                            boxSizing: 'border-box',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* Modern Carousel Card with Animated Gradient, Glow, and Effects */}
                        <Box
                            className="animated-carousel-card"
                            sx={{
                                position: 'relative',
                                width: '100vw',
                                maxWidth: '100vw',
                                minHeight: { xs: '240px', sm: '320px', md: '400px', lg: '480px' },
                                borderRadius: { xs: '0px', sm: '0px', md: '0px' },
                                boxShadow: '0 10px 36px 0 rgba(60, 80, 180, 0.13), 0 2px 8px 0 rgba(127, 83, 172, 0.08)',
                                border: '2.5px solid rgba(127, 83, 172, 0.10)',
                                background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'visible',
                                p: 0,
                                m: 0,
                                transition: 'box-shadow 0.4s cubic-bezier(.4,2,.6,1)',
                                animation: 'cardEntrance 1.1s cubic-bezier(.4,2,.6,1), bannerShadowPulse 3.5s ease-in-out infinite',
                                '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    zIndex: 0,
                                    top: '-3px',
                                    left: '-3px',
                                    right: '-3px',
                                    bottom: '-3px',
                                    borderRadius: 'inherit',
                                    background: 'linear-gradient(120deg, rgba(255,255,255,0.35) 0%, rgba(127,83,172,0.10) 100%)',
                                    backgroundSize: '300% 300%',
                                    filter: 'blur(10px)',
                                    opacity: 0.45,
                                    animation: 'gradientBorder 5s ease-in-out infinite',
                                },
                            }}
                        >
                            {/* Carousel with center highlight, animated glow, and 3D effect */}
                            <Box
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minWidth: 0,
                                    position: 'relative',
                                    zIndex: 1,
                                }}
                            >
                                <Box
                                    className="carousel-center-glow"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        perspective: '1200px',
                                    }}
                                >
                                    <CustomCarousel highlightCenter />
                                </Box>
                            </Box>
                        </Box>
                        {/* Animations and Effects for Carousel Card, Arrows, and Center Image */}
                        <style>
                            {`
                            @keyframes gradientBorder {
                                0% { background-position: 0% 50%; }
                                50% { background-position: 100% 50%; }
                                100% { background-position: 0% 50%; }
                            }
                            @keyframes cardEntrance {
                                0% { opacity: 0; transform: scale(0.95) translateY(30px); }
                                100% { opacity: 1; transform: scale(1) translateY(0); }
                            }
                            @keyframes bannerShadowPulse {
                                0% { box-shadow: 0 10px 36px 0 rgba(60,80,180,0.13), 0 2px 8px 0 rgba(127,83,172,0.08); }
                                50% { box-shadow: 0 20px 60px 0 rgba(127,83,172,0.18), 0 8px 32px 0 rgba(232,65,14,0.10); }
                                100% { box-shadow: 0 10px 36px 0 rgba(60,80,180,0.13), 0 2px 8px 0 rgba(127,83,172,0.08); }
                            }
                            @keyframes arrowPulse {
                                0%, 100% { box-shadow: 0 2px 8px rgba(232,65,14,0.13); }
                                50% { box-shadow: 0 4px 16px 2px #E8410E44; }
                            }
                            @keyframes arrowPulseHover {
                                0% { box-shadow: 0 2px 8px rgba(232,65,14,0.13); }
                                100% { box-shadow: 0 4px 16px 2px #E8410E44; }
                            }
                            /* Center image highlight and 3D effect (applied in CustomCarousel via highlightCenter) */
                            .carousel-center-glow .carousel-center-image {
                                box-shadow: 0 0 0 0 #E8410E, 0 8px 32px 0 #E8410E33;
                                border-radius: 18px;
                                transition: box-shadow 0.4s, transform 0.4s cubic-bezier(.4,2,.6,1);
                                animation: centerGlow 2.5s infinite alternate;
                                transform: scale(1.08) perspective(900px) rotateY(-6deg) rotateX(2deg);
                                height: 100% !important;
                                width: 90% !important;
                                object-fit: cover !important;
                                max-width: none !important;
                                max-height: 500px !important;
                            }
                            .carousel-center-glow .carousel-center-image:hover {
                                box-shadow: 0 0 0 6px #E8410E55, 0 12px 36px 0 #E8410E44;
                                transform: scale(1.13) perspective(900px) rotateY(-2deg) rotateX(0deg);
                            }
                            @keyframes centerGlow {
                                0% { box-shadow: 0 0 0 0 #E8410E33, 0 8px 32px 0 #E8410E33; }
                                100% { box-shadow: 0 0 0 8px #E8410E33, 0 12px 36px 0 #E8410E44; }
                            }
                            `}
                        </style>
                    </Box>
                </Grid>
            </Grid>
            <Dialog
                open={open}
                onClose={handleClose}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "90%",
                            height: 'auto',
                            maxWidth: "600px",
                            maxHeight: "85vh",
                            borderRadius: '12px',
                            overflow: 'hidden',
                            margin: '20px'
                        },
                    },
                }}
            >
                <AnnouncementDialog data={selectedData} handleClose={handleClose} from={'section1'} />
            </Dialog>
        </Box>
    )
}

export default HomeSection1


