import { 
    AppBar, 
    Box, 
    Button, 
    Card, 
    CardContent,
    Chip, 
    Divider, 
    Stack, 
    Tab, 
    Tabs, 
    Typography, 
    useMediaQuery,
    Fade,
    Badge
} from '@mui/material';
import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid2';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useRouter } from 'next/navigation';
import { useCourse } from '@/context/CourseContext';

const Class8thFoundationCourses = () => {

    const router = useRouter();
    const { setSelectedCourse } = useCourse();
    const isMobile = useMediaQuery("(max-width:768px)");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Program features with gradients and icons for Class 8th
    const programFeatures = {
        classroom: {
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            badge: 'Classroom Program',
            icon: <SchoolIcon sx={{ fontSize: 16 }} />
        },
        multi: {
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            badge: '3-Year Program',
            icon: <AutoStoriesIcon sx={{ fontSize: 16 }} />
        }
    };

    const class8thCourses = [
        {
            id: 1,
            name: `1-Year Classroom Program for Class 8th`,
            description1: 'This program is suitable for students who want to attend their school in morning and then coaching classes in evening.',
            description2: `This program is designed to provide students with a strong academic
foundation, preparing them for Olympiad exams, NSEJS, and advanced
competitive exams like JEE (Main + Advanced) and NEET UG. It serves as
an ideal starting point for students aiming to build a solid
conceptual base while excelling in Class 8th, 9th, and 10th school
examinations.`,
            description3: `By integrating early-stage preparation for engineering and medical
entrance tests, this program ensures a structured and strategic
learning approach, equipping students with the skills and knowledge
required to excel in competitive exams and secure a successful
academic future.`,
            targetYear: '2026',
            admissionOpen: true,
            img: '/Images/WhatsApp Image 2025-10-15 at 13.20.51 (1).jpeg',
            programPlanner: [
                {
                    id: 33,
                    des: `300+ hours of Conceptual Classes for class 8th`,
                    img: '/Images/palnner_icon1.png',
                },
                {
                    id: 32,
                    des: '50+ hours of Revision Classes',
                    img: '/Images/palnner_icon1.png',
                },
                {
                    id: 31,
                    des: 'Additional classroom slots for Doubt Clearing Classes',
                    img: '/Images/practice.png',
                },
                {
                    id: 30,
                    des: 'Chapter-wise Assisted Problem Solving Sessions (APSS)',
                    img: '/Images/chapterSolving.png',
                },
            ],
            mocktest: [
                {
                    id: 12,
                    des: '8 Minor Tests'
                },
                {
                    id: 11,
                    des: '3 Major Tests'
                },
            ],
            subjects: [
                {
                    id: 10,
                    des: 'Physics, Chemistry, Mathematics, Biology, Social Science & Mental Ability'
                }
            ],
            classSchedule: [
                {
                    id: 9,
                    des: '3 hours of Evening classes'
                },
                {
                    id: 8,
                    des: '3 days/ week'
                },
            ],
            class: '8th',
            batchDate: '26 Mar 2025'
        },
        {
            id: 2,
            name: `3-Year Classroom Program for Class 8th, 9th & 10th`,
            description1: 'This program is suitable for students who want to attend classes every morning at the coaching center and spend maximum time for self study.',
            description2: `This program is designed to provide students with comprehensive
preparation for Olympiad exams, NSEJS, and senior-level competitive
exams like JEE (Main + Advanced) and NEET UG. Serving as an ideal
starting point for students in Classes 8th, 9th, and 10th, this program
ensures a strong academic foundation while supporting school exam
success.`,
            description3: `Our Classroom Programs have consistently delivered high success rates
in Class 10 Board Exams, reinforcing our commitment to academic
excellence. With a team of expert faculty and Aurous Academy's tested
pedagogy, the 3-year Classroom Program is specifically structured to
enhance conceptual clarity, problem-solving skills, and strategic
preparation, equipping students for success in both board and
competitive examinations.`,
            targetYear: '2028',
            admissionOpen: true,
            img: '/Images/8TH 3-Year Classroom Program for Class 8th, 9th & 10th.jpg',
            programPlanner: [
                {
                    id: 33,
                    des: '1000+ hours of Conceptual Classes for class 8th, 9th & 10th',
                    img: '/Images/palnner_icon1.png',
                },
                {
                    id: 32,
                    des: '150+ hours of Revision Classes',
                    img: '/Images/palnner_icon1.png',
                },
                {
                    id: 31,
                    des: 'Additional classroom slots for Doubt Clearing Classes',
                    img: '/Images/practice.png',
                },
                {
                    id: 30,
                    des: 'Chapter-wise Assisted Problem Solving Sessions (APSS)',
                    img: '/Images/chapterSolving.png',
                },
            ],
            mocktest: [
                {
                    id: 12,
                    des: '25 Minor Tests for class 8th, 9th and 10th'
                },
                {
                    id: 11,
                    des: '10 Major Tests for class 8th, 9th and 10th'
                },
            ],
            subjects: [
                {
                    id: 10,
                    des: 'Physics, Chemistry, Mathematics, Biology, Social Science & Mental Ability'
                }
            ],
            classSchedule: [
                {
                    id: 9,
                    des: '3 hours of Evening classes'
                },
                {
                    id: 10,
                    des: '4 days a week'
                },
            ],
            class: '8th',
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
        
        const programType = item.name.toLowerCase().includes('3-year') ? 'multi' : 'classroom';
        const features = programFeatures[programType];

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

                        {/* Course Info Grid */}
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: 2,
                                mb: 3,
                                mt: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    p: 1.5,
                                    backgroundColor: 'rgba(102, 126, 234, 0.08)',
                                    borderRadius: '12px',
                                }}
                            >
                                <SchoolIcon sx={{ color: '#667eea', fontSize: 18 }} />
                                <Box>
                                    <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.7rem' }}>
                                        Class
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
                                    backgroundColor: 'rgba(118, 75, 162, 0.08)',
                                    borderRadius: '12px',
                                }}
                            >
                                <CalendarTodayIcon sx={{ color: '#764ba2', fontSize: 18 }} />
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
                                    : 'rgba(102, 126, 234, 0.08)',
                                color: buttonHovered ? 'white' : '#667eea',
                                border: `2px solid ${buttonHovered ? 'transparent' : '#667eea'}`,
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: buttonHovered ? 'translateY(-2px)' : 'translateY(0)',
                                boxShadow: buttonHovered 
                                    ? '0 8px 25px rgba(102, 126, 234, 0.3)' 
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
                {class8thCourses.map((item, index) => (
                    <Grid key={item.id} xs={12} sm={6} lg={6}>
                        <CourseCard item={item} index={index} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
};

export default Class8thFoundationCourses


