import { Box, Button, Typography, useMediaQuery, Container, Card, CardContent, Fade, Slide, useTheme } from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const AboutSection2 = () => {
    const isMobile = useMediaQuery("(max-width:768px)");
    const isTablet = useMediaQuery("(max-width:1024px)");
    const theme = useTheme();
    const [activeSection, setActiveSection] = useState('vision');

    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
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
                    background: 'radial-gradient(circle at 20% 80%, rgba(255, 202, 8, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)',
                    zIndex: 1,
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '-10%',
                    left: '-10%',
                    width: '120%',
                    height: '120%',
                    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFD700" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
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
                {/* Section Toggle Buttons for Mobile */}
                <Box
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        justifyContent: 'center',
                        mb: 4,
                        gap: 2
                    }}
                >
                    <Button
                        variant={activeSection === 'vision' ? 'contained' : 'outlined'}
                        onClick={() => setActiveSection('vision')}
                        startIcon={<VisibilityIcon />}
                        sx={{
                            borderColor: '#FFD700',
                            color: activeSection === 'vision' ? '#000' : '#FFD700',
                            backgroundColor: activeSection === 'vision' ? '#FFD700' : 'transparent',
                            '&:hover': {
                                backgroundColor: activeSection === 'vision' ? '#FFD700' : 'rgba(255, 215, 0, 0.1)',
                                borderColor: '#FFD700',
                            },
                            textTransform: 'none',
                            fontWeight: 600,
                            borderRadius: 3,
                            px: 3,
                            py: 1.5
                        }}
                    >
                        Our Vision
                    </Button>
                    <Button
                        variant={activeSection === 'mission' ? 'contained' : 'outlined'}
                        onClick={() => setActiveSection('mission')}
                        startIcon={<TrackChangesIcon />}
                        sx={{
                            borderColor: '#FFD700',
                            color: activeSection === 'mission' ? '#000' : '#FFD700',
                            backgroundColor: activeSection === 'mission' ? '#FFD700' : 'transparent',
                            '&:hover': {
                                backgroundColor: activeSection === 'mission' ? '#FFD700' : 'rgba(255, 215, 0, 0.1)',
                                borderColor: '#FFD700',
                            },
                            textTransform: 'none',
                            fontWeight: 600,
                            borderRadius: 3,
                            px: 3,
                            py: 1.5
                        }}
                    >
                        Our Mission
                    </Button>
                </Box>

                <Grid container spacing={{ xs: 3, md: 4 }}>
                    {/* Vision Section */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Slide direction="right" in timeout={1000}>
                            <Card
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 215, 0, 0.2)',
                                    borderRadius: 4,
                                    boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                                    transition: 'all 0.4s ease',
                                    height: '100%',
                                    display: { xs: activeSection === 'vision' ? 'block' : 'none', md: 'block' },
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 35px 70px rgba(0,0,0,0.3)',
                                        border: '1px solid rgba(255, 215, 0, 0.4)',
                                    }
                                }}
                            >
                                <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
                                    {/* Header with Icon */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 3,
                                            position: 'relative'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                                borderRadius: '50%',
                                                p: 1.5,
                                                mr: 2,
                                                boxShadow: '0 8px 20px rgba(255, 215, 0, 0.3)'
                                            }}
                                        >
                                            <VisibilityIcon sx={{ color: '#000', fontSize: '1.5rem' }} />
                                        </Box>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                fontSize: { xs: '1.5rem', md: '2rem' },
                                                fontWeight: 700,
                                                background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
                                                backgroundClip: 'text',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                textShadow: '0 2px 4px rgba(255,215,0,0.3)'
                                            }}
                                        >
                                            Our Vision
                                        </Typography>
                                    </Box>

                                    {/* Content */}
                                    <Box sx={{ space: 3 }}>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: '0.95rem', md: '1.05rem' },
                                                fontWeight: 400,
                                                color: '#f1f5f9',
                                                lineHeight: 1.8,
                                                mb: 3,
                                                textAlign: 'justify'
                                            }}
                                        >
                                            At Aurous Academy, our vision is to be the premier destination for
                                            nurturing India's brightest minds, empowering them with world-class
                                            education, expert mentorship, and a structured approach to excel in
                                            competitive exams like IIT-JEE and NEET. We are committed to shaping
                                            the future of aspiring engineers and medical professionals by
                                            providing them with the right guidance, resources, and support to
                                            achieve their dreams.
                                        </Typography>
                                        
                                        <Typography
                                            sx={{
                                                fontSize: { xs: '0.95rem', md: '1.05rem' },
                                                fontWeight: 400,
                                                color: '#e2e8f0',
                                                lineHeight: 1.8,
                                                mb: 3,
                                                textAlign: 'justify'
                                            }}
                                        >
                                            What sets us apart is our team of highly skilled and passionate
                                            mentors, who have themselves excelled in the very exams our students
                                            aspire to conquer. Their firsthand experience, combined with their
                                            dedication to teaching, ensures that students receive reliable
                                            guidance, strategic insights, and personalized mentorship.
                                        </Typography>

                                        <Box
                                            sx={{
                                                background: 'rgba(255, 215, 0, 0.1)',
                                                border: '1px solid rgba(255, 215, 0, 0.3)',
                                                borderRadius: 3,
                                                p: 3,
                                                mt: 3,
                                                position: 'relative',
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 0,
                                                    bottom: 0,
                                                    width: 4,
                                                    background: 'linear-gradient(to bottom, #FFD700, #FFA500)',
                                                    borderRadius: '0 2px 2px 0'
                                                }
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                                    fontWeight: 500,
                                                    color: '#FFD700',
                                                    fontStyle: 'italic',
                                                    textAlign: 'center',
                                                    lineHeight: 1.6
                                                }}
                                            >
                                                "It is always better to have a helping hand from those who have done it before."
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Slide>
                    </Grid>

                    {/* Mission Section */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Slide direction="left" in timeout={1000} style={{ transitionDelay: '300ms' }}>
                            <Card
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 215, 0, 0.2)',
                                    borderRadius: 4,
                                    boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                                    transition: 'all 0.4s ease',
                                    height: '100%',
                                    display: { xs: activeSection === 'mission' ? 'block' : 'none', md: 'block' },
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 35px 70px rgba(0,0,0,0.3)',
                                        border: '1px solid rgba(255, 215, 0, 0.4)',
                                    }
                                }}
                            >
                                <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
                                    {/* Header with Icon */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 3,
                                            position: 'relative'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                                borderRadius: '50%',
                                                p: 1.5,
                                                mr: 2,
                                                boxShadow: '0 8px 20px rgba(255, 215, 0, 0.3)'
                                            }}
                                        >
                                            <TrackChangesIcon sx={{ color: '#000', fontSize: '1.5rem' }} />
                                        </Box>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                fontSize: { xs: '1.5rem', md: '2rem' },
                                                fontWeight: 700,
                                                background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
                                                backgroundClip: 'text',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                textShadow: '0 2px 4px rgba(255,215,0,0.3)'
                                            }}
                                        >
                                            Our Mission
                                        </Typography>
                                    </Box>

                                    {/* Content */}
                                    <Box sx={{ space: 3 }}>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: '0.95rem', md: '1.05rem' },
                                                fontWeight: 400,
                                                color: '#f1f5f9',
                                                lineHeight: 1.8,
                                                mb: 3,
                                                textAlign: 'justify'
                                            }}
                                        >
                                            At Aurous Academy, our mission is to enrich students' lives by
                                            providing an impeccable learning experience that supports them through
                                            every step of their academic journey. We believe in walking alongside
                                            our students on their steep learning curve, ensuring they receive the
                                            guidance, mentorship, and resources needed to excel.
                                        </Typography>
                                        
                                        <Typography
                                            sx={{
                                                fontSize: { xs: '0.95rem', md: '1.05rem' },
                                                fontWeight: 400,
                                                color: '#e2e8f0',
                                                lineHeight: 1.8,
                                                mb: 3,
                                                textAlign: 'justify'
                                            }}
                                        >
                                            Our commitment is to deliver best-in-class, high-quality, and
                                            meaningful education, enabling students to set higher standards for
                                            themselves and their goals. We strive to empower young, high-spirited
                                            minds with the skills, knowledge, and confidence necessary to achieve
                                            excellence today and shape a promising future.
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontSize: { xs: '0.95rem', md: '1.05rem' },
                                                fontWeight: 400,
                                                color: '#e2e8f0',
                                                lineHeight: 1.8,
                                                mb: 3,
                                                textAlign: 'justify'
                                            }}
                                        >
                                            We aim to instill a passion for lifelong learning and achievement,
                                            ensuring that students develop not just academically but also as
                                            independent thinkers and problem-solvers. By fostering an inclusive
                                            learning environment, we bridge the gap between students and faculty.
                                        </Typography>

                                        <Box
                                            sx={{
                                                background: 'rgba(255, 215, 0, 0.1)',
                                                border: '1px solid rgba(255, 215, 0, 0.3)',
                                                borderRadius: 3,
                                                p: 3,
                                                mt: 3,
                                                textAlign: 'center'
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                                    fontWeight: 600,
                                                    color: '#FFD700',
                                                    lineHeight: 1.6
                                                }}
                                            >
                                                We don't just prepare students for exams—we prepare them for success in life.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Slide>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AboutSection2



