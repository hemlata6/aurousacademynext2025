import { AppBar, Box, Button, Card, Chip, Divider, Stack, Tab, Tabs, Typography, useMediaQuery, CardContent, Fade, Badge } from '@mui/material';
import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid2';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import { useRouter } from 'next/navigation';
import images from '@/lib/images';
import { useCourse } from '@/context/CourseContext';

// Image references
const class12SANKALPthImg = images.class12SankalpProgram;
const class12thImg = images.class12ClassroomProgram;
const dropperImg = images.class12JEEDROP;
const planner = images.plannerIcon;
const practice = images.practice;
const chapterSolving = images.chapterSolving;

const Class12thCourses = () => {
    const router = useRouter();
    const { setSelectedCourse } = useCourse();
    const isMobile = useMediaQuery("(max-width:768px)");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const programFeatures = {
        classroom: {
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            icon: <SchoolIcon />,
            badge: 'Evening'
        },
        sankalp: {
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            icon: <TrendingUpIcon />,
            badge: 'Morning'
        }
    };

    const class12thCoursesData = [
        {
            id: 4,
            name: `1-Year Classroom Program for IIT-JEE`,
            des: '(Main + Advanced)',
            description1: 'This program is suitable for students who want to attend their school in morning and then coaching classes in evening',
            description2: `The National Testing Agency (NTA) conducts the JEE Main and JEE
Advanced examinations for admission into prestigious engineering
institutions such as the Indian Institutes of Technology (IITs) and
National Institutes of Technology (NITs) across India. To succeed in
these highly competitive exams, students require targeted guidance
from expert faculty and a structured academic approach.`,
            description3: `Aurous Academy offers a 1-year Classroom Program exclusively designed
for Class 12 students preparing for IIT JEE. The curriculum is
meticulously structured to integrate JEE preparation with 12th and
Board studies, ensuring a comprehensive and well-rounded learning
experience. This program focuses on strengthening foundational
concepts, enhancing conceptual understanding, and improving
problem-solving skills, making it an ideal choice for students aiming
to excel in both JEE and Board examinations.`,
            description4: `With expert mentorship, structured study plans, and rigorous practice
sessions, this program provides students with the necessary tools to
achieve success in JEE and build a strong academic foundation for
their engineering career.`,
            targetYear: '2026',
            admissionOpen: true,
            img: class12thImg,
            programPlanner: [
                {
                    id: 33,
                    des: '500+ hours of Conceptual Classes for class 12th',
                    img: planner,
                },
                {
                    id: 32,
                    des: '70+ hours of Revision Classes',
                    img: planner,
                },
                {
                    id: 31,
                    des: 'Additional classroom slots for Doubt Clearing Classes',
                    img: practice,
                },
                {
                    id: 30,
                    des: 'Chapter-wise Assisted Problem Solving Sessions (APSS)',
                    img: chapterSolving,
                },
            ],
            mocktest: [
                {
                    id: 111,
                    des: '3 Major Tests on JEE Advanced pattern'
                },
                {
                    id: 112,
                    des: '10 Minor Tests on JEE Main pattern'
                },
            ],
            subjects: [
                {
                    id: 10,
                    des: 'Physics, Chemistry & Mathematics'
                },
            ],
            classSchedule: [
                {
                    id: 8,
                    des: '4.5 hours of evening classes'
                },
                {
                    id: 9,
                    des: '4 days/ week'
                },
            ],
            class: '12th',
            batchDate: '26 Mar 2025'
        },
        {
            id: 5,
            name: `1-Year Sankalp Program for IIT-JEE`,
            des: '(Main + Advanced)',
            description1: 'This program is suitable for students who want to attend classes every morning at the coaching center and spend maximum time for self study.',
            description2: `The National Testing Agency (NTA) conducts the JEE Main and JEE
Advanced examinations for admission into prestigious engineering
institutions such as the Indian Institutes of Technology (IITs) and
National Institutes of Technology (NITs) across India. To excel in
these competitive exams, students require targeted guidance from
expert faculty and a structured academic approach.`,
            description3: `Aurous Academy offers a 1-year SANKALP Program exclusively designed
for Class 11 students aspiring for IIT JEE. This curriculum seamlessly
integrates JEE preparation with 12th and Board studies, ensuring a
well-balanced and effective learning experience. Instead of attending
school in the morning and coaching classes in the evening, this
program optimizes time management, allowing students to dedicate more
time to self-study—a key factor in securing success in JEE.`,
            description4: `With a structured, year-long curriculum, students can strengthen their
foundational knowledge, enhance conceptual understanding, and improve
problem-solving skills with ease. The SANKALP Program is an ideal
choice for JEE aspirants seeking efficient preparation, expert
mentorship, and a streamlined academic experience for a successful
engineering career.`,
            targetYear: '2026',
            admissionOpen: true,
            img: class12SANKALPthImg,
            programPlanner: [
                {
                    id: 33,
                    des: '750+ hours of Conceptual Classes for class 12th',
                    img: planner,
                },
                {
                    id: 32,
                    des: '100+ hours of Revision Classes',
                    img: planner,
                },
                {
                    id: 31,
                    des: 'Additional classroom slots for Doubt Clearing Classes',
                    img: practice,
                },
                {
                    id: 30,
                    des: 'Along with unique Assisted Problem Solving Sessions (APSS)',
                    img: chapterSolving,
                },
            ],
            mocktest: [
                {
                    id: 111,
                    des: '10 Minor Tests on JEE Main pattern'
                },
                {
                    id: 112,
                    des: '3 Major Tests on JEE Advanced pattern'
                },
                {
                    id: 132,
                    des: 'Subjective Exams on Board pattern'
                },
                // {
                //     id: 162,
                //     des: 'Practicals as per syllabus conducted monthly'
                // },
            ],
            subjects: [
                {
                    id: 10,
                    des: 'Physics, Chemistry, Mathematics & English'
                },
            ],
            classSchedule: [
                // {
                //     id: 9,
                //     des: 'Morning classes; 6 days/ week'
                // },
                {
                    id: 10,
                    des: '5 hours of Morning classes'
                },
                {
                    id: 11,
                    des: '6 days/ week'
                },
            ],
            class: '12th',
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
        
        const programType = item.name.toLowerCase().includes('sankalp') ? 'sankalp' : 'classroom';
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
                                    backgroundColor: 'rgba(103, 126, 234, 0.08)',
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
                                    backgroundColor: 'rgba(240, 147, 251, 0.08)',
                                    borderRadius: '12px',
                                }}
                            >
                                <CalendarTodayIcon sx={{ color: '#f093fb', fontSize: 18 }} />
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
                                    : 'rgba(103, 126, 234, 0.08)',
                                color: buttonHovered ? 'white' : '#667eea',
                                border: `2px solid ${buttonHovered ? 'transparent' : '#667eea'}`,
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: buttonHovered ? 'translateY(-2px)' : 'translateY(0)',
                                boxShadow: buttonHovered 
                                    ? '0 8px 25px rgba(103, 126, 234, 0.3)' 
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
                {class12thCoursesData.map((item, index) => (
                    <Grid key={item.id} xs={12} sm={6} lg={6}>
                        <CourseCard item={item} index={index} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Class12thCourses


