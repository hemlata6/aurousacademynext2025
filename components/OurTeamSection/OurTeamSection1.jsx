import { Typography, useMediaQuery, Box, Container, Card, CardContent, Fade, Zoom, Avatar } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PersonIcon from '@mui/icons-material/Person';

const OurTeamSection1 = () => {
    const isMobile = useMediaQuery("(max-width:768px)");
    const isTablet = useMediaQuery("(max-width:1024px)");

    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden',
                py: { xs: 6, md: 10 },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
                    zIndex: 1,
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '120%',
                    height: '120%',
                    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%233B82F6" fill-opacity="0.04"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    zIndex: 1,
                }
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    px: { xs: 2, md: 4 }
                }}
            >
                <Grid container spacing={{ xs: 4, md: 6 }}>
                    {/* Header Section */}
                    <Grid size={12}>
                        <Zoom in timeout={1000}>
                            <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        mb: 3
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
                                            width: { xs: 60, md: 80 },
                                            height: { xs: 60, md: 80 },
                                            mr: 2,
                                            boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
                                        }}
                                    >
                                        <PersonIcon sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: '#fff' }} />
                                    </Avatar>
                                </Box>

                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                                        fontWeight: 700,
                                        background: 'linear-gradient(45deg, #1e293b 30%, #475569 90%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        textShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                        mb: 2,
                                        letterSpacing: '1px'
                                    }}
                                >
                                    Directors' Message
                                </Typography>

                                <Box
                                    sx={{
                                        width: { xs: 80, md: 120 },
                                        height: 4,
                                        background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
                                        mx: 'auto',
                                        borderRadius: 2,
                                        boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)'
                                    }}
                                />
                            </Box>
                        </Zoom>
                    </Grid>

                    {/* Content Section */}
                    <Grid size={12}>
                        <Fade in timeout={1500} style={{ transitionDelay: '300ms' }}>
                            <Card
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    borderRadius: 4,
                                    boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
                                    transition: 'all 0.4s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 35px 70px rgba(0,0,0,0.15)',
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 6,
                                        background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
                                    }
                                }}
                            >
                                <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                                    {/* Quote Icon */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            mb: 4
                                        }}
                                    >
                                        <FormatQuoteIcon
                                            sx={{
                                                fontSize: { xs: '3rem', md: '4rem' },
                                                color: '#3b82f6',
                                                opacity: 0.3,
                                                transform: 'rotate(180deg)'
                                            }}
                                        />
                                    </Box>

                                    {/* Message Content */}
                                    <Box sx={{ space: 4 }}>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: '1rem', md: '1.1rem' },
                                                fontWeight: 500,
                                                color: '#1e293b',
                                                lineHeight: 1.8,
                                                mb: 4,
                                                textAlign: 'justify',
                                                position: 'relative',
                                                '&::first-letter': {
                                                    fontSize: '3em',
                                                    fontWeight: 700,
                                                    color: '#3b82f6',
                                                    float: 'left',
                                                    lineHeight: 1,
                                                    marginRight: '8px',
                                                    marginTop: '4px'
                                                }
                                            }}
                                        >
                                            We firmly believe that there is no substitute for hard work. Success in highly competitive examinations such as JEE Main, JEE Advanced, NEET, and various Olympiads demands consistent effort, discipline, and a strong commitment to excellence. Our experienced faculty and visionary leadership are dedicated to providing quality education, personalized guidance, and to help students confidently face these challenges.
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontSize: { xs: '1rem', md: '1.1rem' },
                                                fontWeight: 400,
                                                color: '#475569',
                                                lineHeight: 1.8,
                                                mb: 4,
                                                textAlign: 'justify'
                                            }}
                                        >
                                            Beyond academic preparation, we focus on developing a positive mindset, self-belief, and mental strength in our students. We understand that true success is achieved through the right balance of knowledge, attitude, and strategy. Our structured curriculum, interactive classrooms, and carefully designed learning environment encourage deep conceptual understanding, critical thinking, and curiosity-driven learning.
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontSize: { xs: '1rem', md: '1.1rem' },
                                                fontWeight: 400,
                                                color: '#475569',
                                                lineHeight: 1.8,
                                                mb: 4,
                                                textAlign: 'justify'
                                            }}
                                        >
                                            At Aurous Academy, we emphasize the perfect blend of hard work and smart work. Through systematic teaching, in-depth discussions, and regular assessments, we empower students with strong fundamentals, problem-solving skills, and strategic thinking, enabling them to perform their best and achieve their academic goals.
                                        </Typography>

                                        {/* Highlighted Conclusion */}
                                        <Box
                                            sx={{
                                                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
                                                border: '2px solid rgba(59, 130, 246, 0.2)',
                                                borderRadius: 3,
                                                p: 4,
                                                mt: 4,
                                                position: 'relative',
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 0,
                                                    bottom: 0,
                                                    width: 6,
                                                    background: 'linear-gradient(to bottom, #3b82f6, #6366f1)',
                                                    borderRadius: '0 3px 3px 0'
                                                }
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: { xs: '1rem', md: '1.1rem' },
                                                    fontWeight: 600,
                                                    color: '#1e293b',
                                                    lineHeight: 1.8,
                                                    textAlign: 'center',
                                                    fontStyle: 'italic'
                                                }}
                                            >
                                                "We are not just educators—we are partners in our students' success.
                                                Your success is our success, and we are committed to doing everything
                                                possible to help you reach the pinnacle of achievement. At Aurous
                                                Academy, we don't just teach, we mentor, inspire, and empower you to
                                                achieve the extraordinary."
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Fade>
                    </Grid>

                    {/* Team Image Section */}
                    {/* <Grid size={12}>
                        <Fade in timeout={1500} style={{ transitionDelay: '600ms' }}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    // height: { xs: 400, md: 500, lg: 600 },
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                                    transition: 'all 0.4s ease',
                                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 35px 70px rgba(0,0,0,0.2)',
                                    }
                                }}
                            >
                                <img
                                    src="/Team.svg"
                                    alt="Our Team"
                                    style={{
                                        width: !isMobile ? '100%' : '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.4s ease'
                                    }}
                                />

                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                                        p: 3,
                                        color: '#fff'
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            textAlign: 'center',
                                            fontSize: { xs: '1rem', md: '1.2rem' }
                                        }}
                                    >
                                        Our Dedicated Team
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '0.9rem', md: '1rem' },
                                            textAlign: 'center',
                                            opacity: 0.9,
                                            mt: 1
                                        }}
                                    >
                                        Committed to Excellence
                                    </Typography>
                                </Box>
                            </Box>
                        </Fade>
                    </Grid> */}
                </Grid>
            </Container>
        </Box>
    )
}

export default OurTeamSection1



