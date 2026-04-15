import { Typography, useMediaQuery, Box, Container, Stack, Fade, Zoom, Card, CardContent } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';

const AboutSection1 = () => {

    const isMobile = useMediaQuery("(max-width:768px)");
    const isTablet = useMediaQuery("(max-width:1024px)");

    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                    zIndex: 1,
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '-50%',
                    right: '-20%',
                    width: '40%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 1,
                }
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    py: { xs: 4, md: 8 },
                    px: { xs: 2, md: 4 }
                }}
            >
                <Grid container spacing={{ xs: 3, md: 4 }}>
                    <Grid size={12}>
                        <Zoom in timeout={1000}>
                            <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                                        fontWeight: 700,
                                        background: 'linear-gradient(45deg, #fff 30%, #f8f9ff 90%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                                        mb: 2,
                                        letterSpacing: '2px'
                                    }}
                                >
                                    ABOUT US
                                </Typography>
                                <Box
                                    sx={{
                                        width: { xs: 60, md: 80 },
                                        height: 4,
                                        background: 'linear-gradient(90deg, #fff 0%, transparent 100%)',
                                        mx: 'auto',
                                        borderRadius: 2,
                                        boxShadow: '0 2px 4px rgba(255,255,255,0.3)'
                                    }}
                                />
                            </Box>
                        </Zoom>
                    </Grid>

                    <Grid size={12}>
                        <Stack spacing={{ xs: 3, md: 4 }}>
                            <Fade in timeout={1500} style={{ transitionDelay: '300ms' }}>
                                <Card
                                    sx={{
                                        background: 'rgba(255, 255, 255, 0.15)',
                                        backdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: 4,
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: '1rem', md: '1.1rem' },
                                                fontWeight: 400,
                                                color: '#ffffff',
                                                textAlign: 'justify',
                                                lineHeight: 1.8,
                                                textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                                            }}
                                        >
                                            At Aurous Academy, we believe education is not just about acquiring knowledge but about transforming students into confident, responsible, and capable individuals who contribute meaningfully to society. Our vision is to empower young minds through expert mentorship, academic excellence, and character development to shape a brighter future.<br />
                                            The final two years of higher secondary education (Classes 11 and 12) play a crucial role in shaping a student's academic and professional journey. These years act as a gateway to top institutes like IITs, NITs, AIIMS, and other premier universities. Given the competitive nature of exams such as JEE (Main + Advanced) and NEET UG, students need strategic preparation and expert guidance to excel.<br />
                                            To build a strong academic base early, Aurous Academy offers Foundation Batches for Classes 7, 8, 9, and 10, focusing on strengthening core concepts and problem-solving skills while preparing students for future competitive exams like JEE, NEET, and Olympiads.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Fade>

                            <Fade in timeout={1500} style={{ transitionDelay: '600ms' }}>
                                <Card
                                    sx={{
                                        background: 'rgba(255, 255, 255, 0.15)',
                                        backdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: 4,
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: '1rem', md: '1.1rem' },
                                                fontWeight: 400,
                                                color: '#ffffff',
                                                textAlign: 'justify',
                                                lineHeight: 1.8,
                                                textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                                            }}
                                        >
                                            At Aurous Academy, we simplify and streamline this challenging journey
                                            by providing best-in-class mentorship, high-quality academic
                                            resources, and a well-structured curriculum that integrates school and
                                            board exam preparation with IIT-JEE and NEET coaching. Our team of
                                            highly qualified and experienced faculty members have a deep
                                            understanding of competitive exam patterns, syllabus structures, and
                                            student challenges. They provide personalized attention, one-on-one
                                            mentoring, and targeted problem-solving sessions to ensure that every
                                            student reaches their full potential. Our meticulously designed
                                            curriculum integrates conceptual learning, practical application, and
                                            strategic exam preparation for JEE (Main + Advanced), NEET UG,
                                            Olympiads, and Board exams. We emphasize strong foundational learning
                                            in Physics, Chemistry, Mathematics, and Biology, ensuring that
                                            students develop a deep and lasting understanding of core subjects.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Fade>

                            <Fade in timeout={1500} style={{ transitionDelay: '900ms' }}>
                                <Card
                                    sx={{
                                        background: 'rgba(255, 255, 255, 0.15)',
                                        backdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: 4,
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: '1rem', md: '1.1rem' },
                                                fontWeight: 400,
                                                color: '#ffffff',
                                                textAlign: 'justify',
                                                lineHeight: 1.8,
                                                textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                                            }}
                                        >
                                            Many students struggle to balance school studies with competitive exam
                                            preparation. Our School Integrated Programs eliminate the need for
                                            separate school and coaching classes by merging board exam preparation
                                            with JEE and NEET coaching. This approach ensures better time
                                            management, reduced stress levels, and improved self-study efficiency.
                                            We go beyond traditional rote learning and focus on interactive,
                                            application-based learning techniques such as concept-based teaching,
                                            regular doubt-solving sessions, mock tests, previous years' paper
                                            analysis, and AI-driven performance tracking to assess student
                                            progress. Our focus is not just on academic excellence but also on
                                            holistic development, encouraging students to participate in
                                            extracurricular activities, Olympiads, and research-based projects,
                                            ensuring a well-rounded educational experience.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Fade>

                            <Fade in timeout={1500} style={{ transitionDelay: '1200ms' }}>
                                <Card
                                    sx={{
                                        background: 'rgba(255, 255, 255, 0.15)',
                                        backdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: 4,
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: '1rem', md: '1.1rem' },
                                                fontWeight: 400,
                                                color: '#ffffff',
                                                textAlign: 'justify',
                                                lineHeight: 1.8,
                                                textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                                            }}
                                        >
                                            With a proven track record of success, Aurous Academy has consistently
                                            produced top-performing students, securing admissions in IITs, NITs,
                                            AIIMS, and other premier institutes. Our alumni network is a testament
                                            to our commitment to academic excellence, disciplined learning, and
                                            career success. We understand the challenges that students face in
                                            today's highly competitive academic landscape and strive to bridge the
                                            gap between potential and success by offering a supportive and
                                            engaging learning environment, expert mentorship, cutting-edge
                                            learning resources, and a stress-free approach to competitive exam
                                            preparation.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Fade>

                            <Fade in timeout={1500} style={{ transitionDelay: '1500ms' }}>
                                <Card
                                    sx={{
                                        background: 'rgba(255, 255, 255, 0.2)',
                                        backdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255, 255, 255, 0.3)',
                                        borderRadius: 4,
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                                        },
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: 4,
                                            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: '1rem', md: '1.1rem' },
                                                fontWeight: 500,
                                                color: '#ffffff',
                                                textAlign: 'justify',
                                                lineHeight: 1.8,
                                                textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                                            }}
                                        >
                                            At Aurous Academy, we believe that every student has the potential to
                                            achieve greatness. With the right guidance, structured preparation,
                                            and unwavering determination, they can turn their aspirations into
                                            reality. Whether you aspire to become a top engineer, doctor, or
                                            scientist, Aurous Academy is here to guide you every step of the way.
                                            With our expert faculty, student-centric programs, and commitment to
                                            excellence, we provide an unparalleled learning experience that
                                            ensures success in both academics and beyond. Your dreams deserve the
                                            best preparation—let's achieve them together at Aurous Academy!
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Fade>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AboutSection1



