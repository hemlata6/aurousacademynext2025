import { Box, Button, Card, Chip, Dialog, Stack, Typography, useMediaQuery, Container, IconButton, Fade, CardContent } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';
import YouTubePlayer from '@/components/CommonSections/YoutubePlayer';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StarIcon from '@mui/icons-material/Star';

const GallerySection1 = () => {

    // const instId = 120;
    const isMobile = useMediaQuery("(min-width:600px)");
    const [editVideo, setEditVideo] = useState("");
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenVideo = (e, data) => {
        if ((data?.id === 9) || (data?.id === 7)) {
            setEditVideo(`https://youtu.be/SFLm8jygpaE?si=mVuWG6jXp4iPCQW4`);
        } else if (data?.id === 8) {
            setEditVideo(`https://youtu.be/Ld1jdqCdqiE?si=eH4nTX0YEkKDIAib`);
        } else if (data?.id === 6) {
            setEditVideo(`https://youtu.be/YzP8UkoImmk?si=xevfxCy7EHmYKhF9`);
        } else if (data?.id === 5) {
            setEditVideo(`https://youtu.be/nu96vTgq_Ww?si=xtjcC4CJqQH8DcPv`);
        } else if (data?.id === 4) {
            setEditVideo(`https://youtu.be/Ma6QUh96HHw?si=kpEm3Ina5C_-cAM2`);
        } else if (data?.id === 3) {
            setEditVideo(`https://youtu.be/tXXd1EHE0R8?si=hdxnn4CnqwpYfpn8`);
        } else if (data?.id === 2) {
            setEditVideo(`https://youtu.be/vR6mO9V1z9A?si=mrQjZ3J5GHzD7bS4`);
        } else if (data?.id === 1) {
            setEditVideo(`https://youtu.be/UapiV9ypx0k?si=YLt3ElLolO4-sJq6`);
        };
        setOpenDialog(true);
    };

    const handleCloseVideo = () => {
        setOpenDialog(false);
    };

    const imageData = [
        {
            id: 1,
            image: '/Images/PRAYAG VERMA.jpg',
            name: "Prayag Verma",
            rank: "AIR 4600",
            description: `Success Formula of Prayag Verma | JEE Advanced 2024 Topper- AIR 4600 | Aurous Academy, Bhopal`,
        },
        {
            id: 2,
            image: '/Images/KUSHAGRA BANSAL.jpg',
            name: "Kushagra Bansal",
            rank: "AIR 4014",
            description: `Success Formula of Kushagra Bansal | JEE Advanced 2024 Topper- AIR 4014 | Aurous Academy, Bhopal`,
        },
        {
            id: 3,
            image: '/Images/ABHINAV BADEGAONKAR.jpg',
            name: "Abhinav Badegaonkar",
            rank: "AIR 2364",
            description: `Success Formula of Abhinav Badegaonkar | JEE Advanced 2024 Topper- AIR 2364 | Aurous Academy, Bhopal`,
        },
        {
            id: 4,
            image: '/Images/SARTHAK JAIN.jpg',
            name: "Sarthak Jain",
            rank: "AIR 4597",
            description: `Success Formula of Sarthak Jain | JEE Advanced 2024 Topper- AIR 4597 | Aurous Academy, Bhopal`,
        },
        {
            id: 5,
            image: '/Images/DARSHIT SINGH.jpg',
            name: "Darshit Singh",
            rank: "AIR 1043",
            description: `Success Formula of Darshit Singh | JEE Advanced 2024 Topper AIR - 1043 | Aurous Academy, Bhopal`,
        },
        {
            id: 6,
            image: '/Images/HARSHIT SAHU.jpg',
            name: "Harshit Sahu",
            rank: "AIR 4888",
            description: `Success Formula of Harshit Sahu | JEE Advanced 2024 Topper- AIR 4888 | Aurous Academy, Bhopal`,
        },
        {
            id: 7,
            image: '/Images/SHREE PANDIT.jpg',
            name: "Shree Pandit",
            rank: "Top Performer",
            description: `Success Formula of Shree Pandit & Rishi Talreja | JEE Advanced 2024 Topper | Aurous Academy, Bhopal`,
        },
        {
            id: 8,
            image: '/Images/NISHIL SETH GUPTA.jpg',
            name: "Nishil Seth Gupta",
            rank: "AIR 3167",
            description: `Success Formula of Nishil Seth Gupta | JEE Advanced 2024 Topper - AIR 3167 | Aurous Academy, Bhopal`,
        },
        {
            id: 9,
            image: '/Images/RISHI TALREJA.jpg',
            name: "Rishi Talreja",
            rank: "Top Performer",
            description: `Success Formula of Shree Pandit & Rishi Talreja | JEE Advanced 2024 Topper | Aurous Academy, Bhopal`,
        },
    ];

    return (
        <Box
            sx={{
                minHeight: '100vh',
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
            <Container
                maxWidth="xl"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    py: { xs: 4, md: 8 },
                    px: { xs: 2, md: 6 }
                }}
            >
                {/* Hero Section */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '50px',
                            px: 3,
                            py: 1,
                            mb: 4,
                        }}
                    >
                        <StarIcon sx={{ color: '#FFD700', mr: 1 }} />
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#fff',
                                fontWeight: 500,
                                letterSpacing: '0.5px'
                            }}
                        >
                            Success Stories
                        </Typography>
                    </Box>

                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            mb: 3,
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            lineHeight: 1.2,
                        }}
                    >
                        Aurous Stars
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            maxWidth: '600px',
                            mx: 'auto',
                            lineHeight: 1.6,
                            fontSize: { xs: '1rem', md: '1.25rem' }
                        }}
                    >
                        Meet our exceptional students who conquered JEE Advanced 2024 and achieved their dreams
                    </Typography>
                </Box>

                {/* Success Stories Grid */}
                <Grid container spacing={4}>
                    {imageData.map((item, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                            <Fade in={true} timeout={300 + index * 100}>
                                <Card
                                    onClick={(e) => handleOpenVideo(e, item)}
                                    sx={{
                                        position: 'relative',
                                        height: 400,
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        backdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                        '&:hover': {
                                            transform: 'translateY(-10px) scale(1.02)',
                                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                                            '& .student-image img': {
                                                transform: 'scale(1.1)',
                                            },
                                            '& .overlay': {
                                                opacity: 1,
                                            },
                                            '& .play-button': {
                                                opacity: 1,
                                                transform: 'scale(1)',
                                            },
                                            '& .student-info': {
                                                transform: 'translateY(0)',
                                            }
                                        }
                                    }}
                                >
                                    {/* Student Image */}
                                    <Box
                                        className="student-image"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '75%',
                                            overflow: 'hidden',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
                                        }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                width: 'auto',
                                                height: 'auto',
                                                objectFit: 'contain',
                                                objectPosition: 'center center',
                                                transition: 'transform 0.4s ease',
                                                display: 'block',
                                            }}
                                        />
                                    </Box>

                                    {/* Rank Badge */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 15,
                                            right: 15,
                                            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                            color: '#000',
                                            px: 2,
                                            py: 1,
                                            borderRadius: '15px',
                                            fontWeight: 700,
                                            fontSize: '0.75rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
                                        }}
                                    >
                                        <EmojiEventsIcon sx={{ fontSize: 16, mr: 0.5 }} />
                                        {item.rank}
                                    </Box>

                                    {/* Play Overlay */}
                                    <Box
                                        className="overlay"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '70%',
                                            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Box
                                            className="play-button"
                                            sx={{
                                                background: 'rgba(255, 215, 0, 0.9)',
                                                borderRadius: '50%',
                                                width: 70,
                                                height: 70,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                opacity: 0,
                                                transform: 'scale(0.5)',
                                                transition: 'all 0.3s ease',
                                                boxShadow: '0 4px 20px rgba(255, 215, 0, 0.4)',
                                            }}
                                        >
                                            <PlayCircleOutlineIcon sx={{ color: '#000', fontSize: 36 }} />
                                        </Box>
                                    </Box>

                                    {/* Student Info */}
                                    <CardContent
                                        className="student-info"
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '30%',
                                            background: 'rgba(0, 0, 0, 0.8)',
                                            backdropFilter: 'blur(10px)',
                                            p: 3,
                                            transform: 'translateY(10px)',
                                            transition: 'transform 0.3s ease',
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: '#fff',
                                                fontWeight: 700,
                                                mb: 1,
                                                fontSize: { xs: '1rem', md: '1.1rem' }
                                            }}
                                        >
                                            {item.name}
                                        </Typography>

                                        <Chip
                                            label="JEE Advanced 2024"
                                            sx={{
                                                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                                color: '#000',
                                                fontWeight: 600,
                                                fontSize: '0.7rem',
                                                height: 24,
                                            }}
                                        />
                                    </CardContent>

                                    {/* Shine Effect */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: '-100%',
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                                            transition: 'left 0.6s ease',
                                            '.MuiCard-root:hover &': {
                                                left: '100%',
                                            }
                                        }}
                                    />
                                </Card>
                            </Fade>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Enhanced Video Dialog */}
            <Dialog
                open={openDialog}
                onClose={handleCloseVideo}
                maxWidth={false}
                fullScreen={true}
                sx={{
                    '& .MuiDialog-container': {
                        '& .MuiPaper-root': {
                            width: '100vw',
                            height: '100vh',
                            maxWidth: '100vw',
                            maxHeight: '100vh',
                            margin: 0,
                            borderRadius: 0,
                            background: 'rgba(0, 0, 0, 0.95)',
                            backdropFilter: 'blur(20px)',
                            border: 'none',
                            overflow: 'hidden',
                        },
                    },
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        backdropFilter: 'blur(10px)',
                    }
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 0, // Remove all padding
                        m: 0, // Remove all margin
                    }}
                >
                    {/* Close Button */}
                    <IconButton
                        onClick={handleCloseVideo}
                        sx={{
                            position: 'fixed',
                            top: { xs: 10, md: 20 },
                            right: { xs: 10, md: 20 },
                            zIndex: 1300,
                            background: 'rgba(255, 215, 0, 0.9)',
                            color: '#000',
                            border: '2px solid #FFD700',
                            width: { xs: 40, md: 50 },
                            height: { xs: 40, md: 50 },
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)',
                            '&:hover': {
                                background: 'rgba(255, 215, 0, 1)',
                                transform: 'scale(1.05)',
                                boxShadow: '0 6px 25px rgba(255, 215, 0, 0.5)',
                            }
                        }}
                    >
                        <CancelRoundedIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                    </IconButton>

                    {/* Video Player Container */}
                    <Box
                        sx={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: { xs: 'none', md: '1200px' },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pt: { xs: 6, md: 8 },
                            px: { xs: 3, md: 2 }, // Equal padding on mobile
                            boxSizing: 'border-box',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                maxWidth: { xs: '100%', md: '100%' },
                                aspectRatio: '16/9',
                                '& iframe': {
                                    width: '100% !important',
                                    height: '100% !important',
                                    borderRadius: { xs: '10px', md: '15px' }, // Small border radius on mobile
                                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                                }
                            }}
                        >
                            <YouTubePlayer videoUrl={editVideo} />
                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </Box>
    );
}

export default GallerySection1


