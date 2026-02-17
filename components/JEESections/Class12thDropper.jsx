import { AppBar, Box, Button, Card, Chip, Divider, Stack, Tab, Tabs, Typography, useMediaQuery, CardContent, Fade, Badge } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RefreshIcon from '@mui/icons-material/Refresh';
import CheckIcon from '@mui/icons-material/Check';
import { useRouter } from 'next/navigation';
import images from '@/lib/images';
import { useCourse } from '@/context/CourseContext';

// Image references
const class11thImg = images.class11JEE2YRCRP;
const class12thImg = images.class12JEE1YRCRP;
const dropperImg = images.whatsAppImage2;
const planner = images.plannerIcon;
const practice = images.practice;
const chapterSolving = images.chapterSolving;

const Class12thDropperCourses = () => {

    const router = useRouter();
    const { setSelectedCourse } = useCourse();
    const isMobile = useMediaQuery("(max-width:768px)");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const programFeatures = {
        dropper: {
            gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
            icon: <RefreshIcon />,
            badge: 'Extended'
        }
    };

    const class12thDropperData = [
        {
            id: 6,
            name: `1-Year Extended Classroom Program for IIT-JEE`,
            des: '(Main + Advanced)',
            description1: 'This program is ideal for students aiming to secure admission to top engineering colleges through the JEE Main and Advanced exams.',
            description2: 'This program by Aurous Academy is for IIT-JEE aspirants. NTA conducts JEE Main and JEE Advanced exams for admission into prestigious engineering colleges like IITs and NITs across India. For these exams students need targeted guidance by expert faculty. Aurous Academy offers a 1 year extended Classroom Program for JEE (Main + Advanced)',
            description3: 'The curriculum is specifically designed for the repeater JEE aspirants. To strengthen the foundation, conceptual knowledge and improve competition rank this course is the best option',
            targetYear: '2026',
            admissionOpen: true,
            img: dropperImg,
            programPlanner: [
                {
                    id: 33,
                    des: '750+ hours of Conceptual Classes for class 11th & 12th',
                    img: planner
                },
                {
                    id: 32,
                    des: '100+ hours of Revision Classes',
                    img: planner
                },
                {
                    id: 31,
                    des: 'Additional classroom slots for Doubt Clearing Classes',
                    img: practice
                },
                {
                    id: 30,
                    des: 'Special Rank Improvement Sessions',
                    img: chapterSolving
                },
                {
                    id: 1,
                    des: 'Along with unique Assisted Problem Solving Sessions (APSS)',
                    img: planner
                },
            ],
            mocktest: [
                {
                    id: 111,
                    des: '20 Minor Tests on JEE Main pattern'
                },
                {
                    id: 112,
                    des: '4 Major Tests on JEE Advanced pattern'
                },
            ],
            subjects: [
                {
                    id: 10,
                    des: ' Physics, Chemistry, Mathematics'
                },
            ],
            classSchedule: [
                {
                    id: 9,
                    des: ' Morning classes; 6 days/ week'
                },
            ],
            class: '12th Passout',
            batchDate: '26 Mar 2025'
        },
    ];

    const handleNavigateCourseDetails = (e, item) => {
        setSelectedCourse(item);
        router.push('/course');
    };

    const CourseCard = ({ item, index }) => {
        const [cardHovered, setCardHovered] = useState(false);
        const [buttonHovered, setButtonHovered] = useState(false);

        const features = programFeatures.dropper;

        return (
            <Fade in={isVisible} timeout={800 + (index * 200)}>
                <Card
                    sx={{
                        width: '100%',
                        maxWidth: '400px',
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        position: 'relative',
                        height: '100%',
                        boxShadow: cardHovered
                            ? '0 25px 50px rgba(0, 0, 0, 0.15)'
                            : '0 10px 30px rgba(0, 0, 0, 0.1)',
                        transform: cardHovered ? 'translateY(-8px)' : 'translateY(0)',
                    }}
                    onMouseEnter={() => setCardHovered(true)}
                    onMouseLeave={() => setCardHovered(false)}
                >
                    {/* Header with Image and Badge */}
                    <Box sx={{ position: 'relative', p: 2 }}>

                        <Box
                            sx={{
                                position: 'relative',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: `linear-gradient(135deg, ${features.gradient.split('(')[1].split(')')[0]})`,
                                    opacity: cardHovered ? 0.1 : 0,
                                    transition: 'opacity 0.3s ease',
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={item.img}
                                alt={item.name}
                                sx={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '16px',
                                    transition: 'transform 0.4s ease',
                                    transform: cardHovered ? 'scale(1.05)' : 'scale(1)',
                                }}
                            />
                        </Box>
                    </Box>

                    <CardContent sx={{ p: 3, pt: 1 }}>
                        {/* Program Title */}
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '1.1rem', md: '1.25rem' },
                                color: '#1e293b',
                                mb: 1,
                                lineHeight: 1.3,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 28,
                                    height: 28,
                                    borderRadius: '50%',
                                    background: features.gradient,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '0.9rem',
                                }}
                            >
                                {features.icon}
                            </Box>
                            {item.name}
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: '#64748b',
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                mb: 2,
                            }}
                        >
                            {item.des}
                        </Typography>

                        {/* Course Info Grid */}
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: 2,
                                mb: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    p: 1.5,
                                    backgroundColor: 'rgba(255, 154, 158, 0.08)',
                                    borderRadius: '12px',
                                }}
                            >
                                <SchoolIcon sx={{ color: '#ff9a9e', fontSize: 18 }} />
                                <Box>
                                    <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.7rem' }}>
                                        Level
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b', fontSize: '0.85rem' }}>
                                        {item.class}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    p: 1.5,
                                    backgroundColor: 'rgba(254, 207, 239, 0.08)',
                                    borderRadius: '12px',
                                }}
                            >
                                <CalendarTodayIcon sx={{ color: '#fecfef', fontSize: 18 }} />
                                <Box>
                                    <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.7rem' }}>
                                        Target
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b', fontSize: '0.85rem' }}>
                                        {item.targetYear}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        {/* Admission Status */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                mb: 3,
                                p: 1.5,
                                backgroundColor: item.admissionOpen
                                    ? 'rgba(34, 197, 94, 0.08)'
                                    : 'rgba(239, 68, 68, 0.08)',
                                borderRadius: '12px',
                                border: `1px solid ${item.admissionOpen ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
                            }}
                        >
                            <VerifiedIcon
                                sx={{
                                    color: item.admissionOpen ? '#22c55e' : '#ef4444',
                                    fontSize: 20
                                }}
                            />
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: 600,
                                    color: item.admissionOpen ? '#16a34a' : '#dc2626',
                                    fontSize: '0.9rem',
                                }}
                            >
                                {item.admissionOpen ? "Admission Open" : "Admission Closed"}
                            </Typography>
                        </Box>

                        {/* Action Button */}
                        <Button
                            onClick={(e) => handleNavigateCourseDetails(e, item)}
                            sx={{
                                width: '100%',
                                py: 1.5,
                                borderRadius: '16px',
                                textTransform: 'none',
                                fontSize: '1rem',
                                fontWeight: 600,
                                background: buttonHovered
                                    ? features.gradient
                                    : 'rgba(255, 154, 158, 0.08)',
                                color: buttonHovered ? 'white' : '#ff9a9e',
                                border: `2px solid ${buttonHovered ? 'transparent' : '#ff9a9e'}`,
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: buttonHovered ? 'translateY(-2px)' : 'translateY(0)',
                                boxShadow: buttonHovered
                                    ? '0 8px 25px rgba(255, 154, 158, 0.3)'
                                    : 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                '&:hover': {
                                    background: features.gradient,
                                    color: 'white',
                                    border: '2px solid transparent',
                                },
                            }}
                            onMouseEnter={() => setButtonHovered(true)}
                            onMouseLeave={() => setButtonHovered(false)}
                        >
                            View Details
                            <ArrowForwardIcon
                                sx={{
                                    fontSize: 18,
                                    transform: buttonHovered ? 'translateX(4px)' : 'translateX(0)',
                                    transition: 'transform 0.3s ease',
                                }}
                            />
                        </Button>
                    </CardContent>
                </Card>
            </Fade>
        );
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container spacing={4} justifyContent="center">
                {class12thDropperData.map((item, index) => (
                    <Grid key={item.id} xs={12} sm={6} lg={4}>
                        <CourseCard item={item} index={index} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Class12thDropperCourses;


