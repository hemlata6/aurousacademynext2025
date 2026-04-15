'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, Container, Card, CardContent, Fade, Chip, IconButton, Grid2 } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import images from '@/lib/images';

// Image paths for Concept Building and Learning Redefined
const image1 = '/Images/217412file1.png';
const image2 = '/Images/241009file1.png';
const image3 = '/Images/chapterSolving.png';
const image4 = '/Images/180504file1.png';
const image5 = '/Images/209283file1.png';
const image6 = '/Images/272963file1.png';
const image7 = '/Images/321507file1.png';
const image8 = '/Images/408255file1.png';
const image9 = '/Images/408616file1.png';
const image10 = images.file525551;
const image11 = images.file528236;
const image12 = images.file582031;
const image13 = images.file588089;
const image14 = images.file715262;
const image15 = images.file734379;
const image16 = images.file780185;
const image17 = images.file789323;
const image18 = images.file988038;
const image19 = images.books;
const image20 = images.earphones;

const OurMethodologies = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});
    const refs = useRef({});
    const isMobile = useMediaQuery('(max-width:768px)');

    const methodologySections = [
        {
            id: 'main-lectures',
            title: 'Main Lecture Classes',
            description: 'Best qualified faculties deliver regular lectures as per schedule and course provided by the JEE committee. All the topics covered under classroom teaching are appropriate as per the latest JEE syllabus and pattern.',
            image: image1,
            category: 'Concept Building'
        },
        {
            id: 'sheet-discussion',
            title: 'Sheet Discussion Classes',
            description: 'Problem Sheets are discussed regularly in sheet discussion classes which also include discussion on question banks and special assignments. These classes help students in clarifying doubts and help them in understanding the concepts.',
            image: image2,
            category: 'Concept Building'
        },
        {
            id: 'revision',
            title: 'Revision Classes',
            description: 'Special classes are conducted for revision so that students can complete the course if they left some of the topics during classroom lectures.',
            image: image3,
            category: 'Concept Building'
        },
        {
            id: 'board-prep',
            title: 'Board Preparation Classes',
            description: 'AUROUS also organizes special board preparation classes in addition to JEE to enable students to get better marks in board.',
            image: image4,
            category: 'Concept Building'
        },
        {
            id: 'best-faculty',
            title: 'Best Faculty',
            description: 'A "/Team.svg" of professionals who know the content and process of engineering entrance exams inside out. The faculties here are the best combination of a \'Guru\' and a friend, providing a helping hand to the students whenever they need their support.',
            image: image5,
            category: 'Learning Redefined'
        },
        {
            id: 'video-library',
            title: 'Video Library',
            description: 'At Aurous, facility of video library is available where all the lectures are provided in the recorded form.',
            image: image6,
            category: 'Learning Redefined'
        },
        {
            id: 'digital-panel',
            title: 'Digital Panel',
            description: 'We have well-organized digital panel which makes learning easy and interesting. A 3D view of all the diagrams and structures makes the respective topic more clear. Class becomes more interesting and attentive in visualized manner.',
            image: image7,
            category: 'Learning Redefined'
        },
        {
            id: 'pattern-proof',
            title: 'Pattern Proof Teaching',
            description: 'Our main aim is to identify the analytical ability of the students and to guide them as per their ability. We aim to build our students\' concept much stronger so that, irrespective of the fact that every year IITJEE keeps changing their pattern, our students excel at each level.',
            image: image8,
            category: 'Learning Redefined'
        },
        {
            id: 'batch-size',
            title: 'Batch Size',
            description: 'We believe in the fact that it is the quality that matters, not the numbers. Instead of having hundreds of students in a batch we prefer 40 to 50 students per batch who gets the entire guidance and we develop a lasting relationship with every student.',
            image: image9,
            category: 'Learning Redefined'
        },
        {
            id: 'personalized',
            title: 'Personalised Coaching',
            description: 'Faculties at Aurous Academy tend to ensure that the students are in the right hands and are free to discuss all their doubts without any hesitation. Each and every student at Aurous Academy is given individual guidance and attention.',
            image: image10,
            category: 'Learning Redefined'
        },
        {
            id: 'dpp',
            title: 'Daily Practice Problems (DPP)',
            description: 'Regular progress is important and to ensure the progress, students must check their level of knowledge by solving "/practice.png" sheets. With the help of problem sheets, they get to know about the multi-conceptual questions and solve them easily.',
            image: image11,
            category: 'Study Material'
        },
        {
            id: 'exercise-sheets',
            title: 'Chapter-wise EXERCISE Sheets',
            description: 'Exercise Sheets are developed Chapter-wise and created by taking care of the syllabus of the JEE. Questions involved in the booklet are of various kinds that vary in conceptual, tricky, multi-chapter and brainstorming.',
            image: image12,
            category: 'Study Material'
        },
        {
            id: 'theory-notes',
            title: 'Theory Notes & Key Concepts',
            description: 'With each sheet, there is a brief description of the key concepts. This helps students to go through an approach for a while before start of solving questions.',
            image: image13,
            category: 'Study Material'
        },
        {
            id: 'question-banks',
            title: 'Question Banks',
            description: 'It contains best "/practice.png" questions based on JEE Pattern and is distributed among easy to difficult levels.',
            image: image14,
            category: 'Study Material'
        },
        {
            id: 'jee-main-review',
            title: 'JEE Main Review Test Series',
            description: 'In a time duration of every 2-3 weeks, AUROUS conducts a test of 3 hours based on JEE Main Exam Pattern.',
            image: image15,
            category: 'Test Series'
        },
        {
            id: 'jee-advanced-review',
            title: 'JEE Advanced Review Test Series',
            description: 'In a time duration of every 2-3 weeks, AUROUS conducts a test of 3 hours based on JEE Advanced Exam Pattern.',
            image: image16,
            category: 'Test Series'
        },
        {
            id: 'monthly-mock',
            title: 'Monthly Mock Test',
            description: 'Monthly Mock Test includes questions from all the topics completed upto the time. Full syllabus questions are covered in this Mock Test.',
            image: image17,
            category: 'Test Series'
        },
        {
            id: 'unit-test',
            title: 'Unit Test',
            description: 'Unit tests are conducted for each subject on the completion of individual topics, and their score is also intimated to students as well as parents.',
            image: image18,
            category: 'Test Series'
        },
        {
            id: 'all-india-test',
            title: 'All India Test Series',
            description: 'All India Test Series is conducted to help the student for evaluating his performance and understanding his All India Rank.',
            image: image19,
            category: 'Test Series'
        },
        {
            id: 'parent-teacher',
            title: 'Parent Teacher Meeting',
            description: 'To keep parents aware about their child\'s progress, regular Parent Teacher meetings are arranged on monthly basis.',
            image: image20,
            category: 'Test Series'
        }
    ];

    // Categories for organization
    const categories = ['Concept Building', 'Learning Redefined', 'Study Material', 'Test Series'];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check visibility for all methodology sections
            methodologySections.forEach((section) => {
                const ref = refs.current[section.id];
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    if (currentScrollY > lastScrollY && rect.top < window.innerHeight * 0.8) {
                        setIsVisible(prev => ({ ...prev, [section.id]: true }));
                    }
                }
            });

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY, methodologySections]);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
                py: { xs: 8, md: 12 },
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.08) 0%, transparent 50%)`,
                    pointerEvents: 'none',
                    zIndex: 0,
                },
            }}
        >
            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Breadcrumb Navigation */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 4,
                        opacity: 0.8,
                    }}
                >
                    <IconButton size="small" sx={{ color: '#FFD700' }}>
                        <HomeIcon />
                    </IconButton>
                    <ChevronRightIcon sx={{ color: '#FFD700', fontSize: 16 }} />
                    <Typography variant="body2" sx={{ color: '#FFD700' }}>
                        Our Methodologies
                    </Typography>
                </Box>

                {/* Hero Section */}
                <Fade in timeout={1000}>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: 700,
                                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                mb: 3,
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                textShadow: '0 4px 20px rgba(255, 215, 0, 0.3)',
                            }}
                        >
                            Our Methodologies
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.9)',
                                maxWidth: '800px',
                                margin: '0 auto',
                                lineHeight: 1.6,
                                fontSize: { xs: '1rem', md: '1.25rem' },
                            }}
                        >
                            Discover our proven teaching methodologies designed to maximize student success
                            through innovative approaches and comprehensive learning strategies.
                        </Typography>
                    </Box>
                </Fade>

                {/* Methodology Categories */}
                {categories.map((category, categoryIndex) => {
                    const categorySections = methodologySections.filter(section => section.category === category);

                    return (
                        <Box key={category} sx={{ mb: 8 }}>
                            {/* Category Header */}
                            <Box sx={{ textAlign: 'center', mb: 6 }}>
                                <Chip
                                    icon={<SchoolIcon />}
                                    label={category}
                                    sx={{
                                        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 165, 0, 0.2) 100%)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 215, 0, 0.3)',
                                        color: '#FFD700',
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        py: 3,
                                        px: 2,
                                        mb: 4,
                                        '& .MuiChip-icon': {
                                            color: '#FFD700',
                                            fontSize: '1.2rem',
                                        },
                                    }}
                                />
                            </Box>

                            {/* Methodology Cards Grid */}
                            <Grid2 container spacing={4}>
                                {categorySections.map((methodology, index) => (
                                    <Grid2 key={methodology.id} xs={12} sx={{ height: { xs: 300, md: 300 } }}>
                                        <Fade
                                            in={isVisible[methodology.id]}
                                            timeout={{
                                                enter: 800 + (index * 200),
                                                exit: 300
                                            }}
                                        >
                                            <Card
                                                ref={el => refs.current[methodology.id] = el}
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    minHeight: 300,
                                                    maxHeight: 300,
                                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                                                    backdropFilter: 'blur(20px)',
                                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                                    borderRadius: 4,
                                                    overflow: 'hidden',
                                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    cursor: 'pointer',
                                                    position: 'relative',
                                                    display: 'flex',
                                                    flexDirection: { xs: 'column', md: 'row' },
                                                    boxSizing: 'border-box',
                                                    '&::before': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        height: '4px',
                                                        background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)',
                                                        transform: 'scaleX(0)',
                                                        transformOrigin: 'left',
                                                        transition: 'transform 0.3s ease',
                                                    },
                                                    '&:hover': {
                                                        transform: 'translateY(-8px)',
                                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
                                                        border: '1px solid rgba(255, 215, 0, 0.4)',
                                                        boxShadow: '0 20px 40px rgba(255, 215, 0, 0.2)',
                                                        '&::before': {
                                                            transform: 'scaleX(1)',
                                                        },
                                                    },
                                                }}
                                            >
                                                {/* Image Section - Left Side */}
                                                <Box
                                                    sx={{
                                                        width: { xs: '100%', md: '300px' },
                                                        height: { xs: '150px', md: '100%' },
                                                        minWidth: { xs: '100%', md: '300px' },
                                                        maxWidth: { xs: '100%', md: '300px' },
                                                        flexShrink: 0,
                                                        position: 'relative',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.3) 0%, rgba(26, 26, 46, 0.3) 100%)',
                                                        p: 2,
                                                        boxSizing: 'border-box',
                                                    }}
                                                >
                                                    <Box
                                                        component="img"
                                                        src={methodology.image}
                                                        alt={methodology.title}
                                                        sx={{
                                                            maxWidth: '100%',
                                                            maxHeight: '100%',
                                                            width: 'auto',
                                                            height: 'auto',
                                                            objectFit: 'contain',
                                                            transition: 'transform 0.4s ease',
                                                            borderRadius: 2,
                                                            '&:hover': {
                                                                transform: 'scale(1.05)',
                                                            },
                                                        }}
                                                    />
                                                </Box>

                                                {/* Content Section - Right Side */}
                                                <CardContent
                                                    sx={{
                                                        flex: 1,
                                                        width: { xs: '100%', md: 'calc(100% - 300px)' },
                                                        height: { xs: '150px', md: '100%' },
                                                        p: 4,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        overflow: 'hidden',
                                                        boxSizing: 'border-box',
                                                    }}
                                                >
                                                    <Typography
                                                        variant="h5"
                                                        sx={{
                                                            color: '#FFD700',
                                                            fontWeight: 600,
                                                            mb: 2,
                                                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                                                            lineHeight: 1.3,
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            display: '-webkit-box',
                                                            WebkitLineClamp: 2,
                                                            WebkitBoxOrient: 'vertical',
                                                            width: '100%',
                                                        }}
                                                    >
                                                        {methodology.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            color: 'rgba(255, 255, 255, 0.9)',
                                                            lineHeight: 1.5,
                                                            fontSize: { xs: '0.9rem', md: '1rem' },
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            display: '-webkit-box',
                                                            WebkitLineClamp: { xs: 4, md: 6 },
                                                            WebkitBoxOrient: 'vertical',
                                                            width: '100%',
                                                        }}
                                                    >
                                                        {methodology.description}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Fade>
                                    </Grid2>
                                ))}
                            </Grid2>
                        </Box>
                    );
                })}
            </Container>
        </Box>
    );
}

export default OurMethodologies;



