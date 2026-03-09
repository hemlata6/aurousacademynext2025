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
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useRouter } from 'next/navigation';
import images from '@/lib/images';
import { useCourse } from '@/context/CourseContext';

// Image references
const class11thImg = images.class11JEE2YRCRP;
const class12thImg = images.class12JEE1YRCRP;
const dropperImg = images.class12JEEDROP;
const class11th2YRCRPImg = images.classroomProgramNeet;
const class11th2YRSIPImg = images.newSankalpNeet;
const class11th2YRNEETSIPImg = images.whatsAppImage3;
const planner = images.plannerIcon;
const practice = images.practice;
const chapterSolving = images.chapterSolving;

const Class11thNEETCourse = () => {

    const router = useRouter();
    const { setSelectedCourse } = useCourse();
    const isMobile = useMediaQuery("(max-width:768px)");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Program features with medical-themed gradients for Class 11th NEET
    const programFeatures = {
        classroom: {
            gradient: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
            badge: 'Classroom Program',
            icon: <LocalHospitalIcon sx={{ fontSize: 16 }} />
        },
        sankalp: {
            gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
            badge: 'Sankalp Program',
            icon: <AutoStoriesIcon sx={{ fontSize: 16 }} />
        }
    };

    const class11thCourses = [
        {
            id: 1,
            name: `2-Year Classroom Program for NEET-UG`,
            description1: 'This program is suitable for students who want to attend their school in morning and then coaching classes in evening',
            description2: `Introducing our 2-year Classroom Program, designed to guide aspiring
medical students toward excellence in the NEET UG examination. With a
team of experienced faculty, a personalized learning approach, and a
comprehensive curriculum, this program ensures thorough preparation
for one of the most competitive medical entrance exams.`,
            description3: `Students benefit from high-quality study materials, rigorous mock
tests, and structured learning modules, all aimed at strengthening
their conceptual understanding and problem-solving skills. With a
proven track record of successful candidates who have realized their
medical career aspirations, this program serves as the ideal
foundation for achieving NEET UG success.
`,
            targetYear: '2027',
            admissionOpen: true,
            img: class11th2YRCRPImg,
            programPlanner: [
                {
                    id: 33,
                    des: '1000+ hours of Conceptual Classes for class 11th and class 12th',
                    img: planner,
                },
                {
                    id: 32,
                    des: '140+ hours of Revision Classes',
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
                    id: 12,
                    des: '22 Minor Tests'
                },
                {
                    id: 11,
                    des: '7 Major Tests'
                },
            ],
            subjects: [
                {
                    id: 10,
                    des: 'Physics, Chemistry & Biology'
                }
            ],
            classSchedule: [
                {
                    id: 9,
                    des: '4.5 hours of Evening classes'
                },
                {
                    id: 8,
                    des: '6 days/ week'
                },
            ],
            class: '11th',
            batchDate: '26 Mar 2025'
        },
        {
            id: 2,
            name: `2-Year Sankalp Program for NEET-UG`,
            description1: 'This program is suitable for students who want to attend classes every morning at the coaching center and spend maximum time for self study.',
            description2: `Elevate your chances of securing a seat in prestigious medical
colleges with our 2-year SANKALP Program for NEET UG. Designed for
aspiring medical professionals, this program offers expert guidance, a
personalized learning approach, and a comprehensive curriculum to
ensure thorough preparation for this highly competitive examination.`,
            description3: `Students benefit from high-quality study materials, rigorous mock
tests, and structured learning modules, all aimed at strengthening
their conceptual understanding and problem-solving skills. Instead of
following the traditional approach of attending school in the morning
and coaching classes in the evening, this program optimizes time
management by integrating NEET preparation with 11th, 12th, and Board
studies. With more time dedicated to self-study, students can enhance
their academic performance and maximize their chances of success in
NEET UG.`,
            description4: `With a proven track record of successful students who have made their
mark in the medical field, the SANKALP Program serves as the ideal
foundation for a fulfilling medical career.`,
            targetYear: '2027',
            admissionOpen: true,
            img: class11th2YRSIPImg,
            programPlanner: [
                {
                    id: 33,
                    des: '1500+ hours of Conceptual Classes for class 11th and class 12th',
                    img: planner,
                },
                {
                    id: 32,
                    des: '200+ hours of Revision Classes',
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
                    id: 12,
                    des: '22 Minor Tests'
                },
                {
                    id: 11,
                    des: '7 Major Tests'
                },
                {
                    id: 111,
                    des: 'Subjective Exams on Board pattern'
                },
                // {
                //     id: 112,
                //     des: 'Practicals as per syllabus conducted monthly'
                // },
            ],
            subjects: [
                {
                    id: 10,
                    des: 'Physics, Chemistry, Biology & English'
                }
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
            class: '11th',
            batchDate: '26 Mar 2025'
        },
        // {
        //     id: 2,
        //     name: `2-Year SIP for NEET-UG`,
        //     description1: 'Elevate your chances of securing a seat in prestigious medical colleges with our  2-year School Integrated Program  for NEET UG. Designed for aspiring medical professionals, this program offers expert guidance, a personalized learning approach, and a comprehensive curriculum to ensure thorough preparation for this highly competitive examination.',
        //     description2: `Students benefit from high-quality study materials, rigorous mock tests, and structured learning modules, all aimed at strengthening their conceptual understanding and problem-solving skills. Instead of following the traditional approach of attending school in the morning and coaching classes in the evening, this program optimizes time management by integrating NEET preparation with 11th, 12th, and Board studies. With more time dedicated to self-study, students can enhance their academic performance and maximize their chances of success in NEET UG.`,
        //     description3: `By eliminating the need for separate school and coaching classes, the School Integrated Program provides students with a streamlined, stress-free, and efficient preparation strategy for NEET UG, allowing them to achieve academic excellence while maintaining a well-rounded lifestyle.`,
        //     description4: ``,
        //     targetYear: '2027',
        //     admissionOpen: true,
        //     img: class11th2YRNEETSIPImg,
        //     programPlanner: [
        //         {
        //             id: 33,
        //             des: '1500+ hours of Conceptual Classes for class 11th and class 12th',
        //             img: planner,
        //         },
        //         {
        //             id: 32,
        //             des: '200+ hours of Revision Classes',
        //             img: planner,
        //         },
        //         {
        //             id: 31,
        //             des: 'Additional classroom slots for Doubt Clearing Classes',
        //             img: practice,
        //         },
        //         {
        //             id: 30,
        //             des: 'Along with unique Assisted Problem Solving Sessions (APSS)',
        //             img: chapterSolving,
        //         },
        //         {
        //             id: 36,
        //             des: 'Language & optional subject classes also conducted within school hours',
        //             img: chapterSolving,
        //         },
        //     ],
        //     mocktest: [
        //         {
        //             id: 12,
        //             des: '22 Minor Tests'
        //         },
        //         {
        //             id: 11,
        //             des: '7 Major Tests'
        //         },
        //         {
        //             id: 111,
        //             des: 'Subjective Exams on Board pattern'
        //         },
        //         // {
        //         //     id: 112,
        //         //     des: 'Practicals as per syllabus conducted monthly'
        //         // },
        //     ],
        //     subjects: [
        //         {
        //             id: 10,
        //             des: 'Physics, Chemistry, Biology & English'
        //         }
        //     ],
        //     classSchedule: [
        //         // {
        //         //     id: 9,
        //         //     des: 'Morning classes; 6 days/ week'
        //         // },
        //         // {
        //         //     id: 10,
        //         //     des: '5 hours of Morning classes'
        //         // },
        //         // {
        //         //     id: 11,
        //         //     des: '6 days/ week'
        //         // },
        //     ],
        //     class: '11th',
        //     batchDate: '26 Mar 2025'
        // },
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
                                    backgroundColor: programType === 'sankalp'
                                        ? 'rgba(6, 182, 212, 0.08)'
                                        : 'rgba(74, 222, 128, 0.08)',
                                    borderRadius: '12px',
                                }}
                            >
                                <SchoolIcon
                                    sx={{
                                        color: programType === 'sankalp' ? '#06b6d4' : '#4ade80',
                                        fontSize: 18
                                    }}
                                />
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
                                    backgroundColor: programType === 'sankalp'
                                        ? 'rgba(8, 145, 178, 0.08)'
                                        : 'rgba(34, 197, 94, 0.08)',
                                    borderRadius: '12px',
                                }}
                            >
                                <CalendarTodayIcon
                                    sx={{
                                        color: programType === 'sankalp' ? '#0891b2' : '#22c55e',
                                        fontSize: 18
                                    }}
                                />
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
                                    : programType === 'sankalp'
                                        ? 'rgba(6, 182, 212, 0.08)'
                                        : 'rgba(74, 222, 128, 0.08)',
                                color: buttonHovered
                                    ? 'white'
                                    : programType === 'sankalp' ? '#06b6d4' : '#4ade80',
                                border: `2px solid ${buttonHovered ? 'transparent' : (programType === 'sankalp' ? '#06b6d4' : '#4ade80')}`,
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: buttonHovered ? 'translateY(-2px)' : 'translateY(0)',
                                boxShadow: buttonHovered
                                    ? `0 8px 25px ${programType === 'sankalp' ? 'rgba(6, 182, 212, 0.3)' : 'rgba(74, 222, 128, 0.3)'}`
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
                {class11thCourses.map((item, index) => (
                    <Grid key={item.id} xs={12} sm={6} lg={6}>
                        <CourseCard item={item} index={index} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Class11thNEETCourse;


