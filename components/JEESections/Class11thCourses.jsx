import { AppBar, Box, Button, Card, Chip, Divider, Stack, Tab, Tabs, Typography, useMediaQuery, CardContent, Fade, Badge } from '@mui/material';
import React, { useState, useEffect } from 'react';
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
const class11thImg = images.classroomProgramJEE11and12;
const class11thSANKALPImg = images.sankalpJEE11and12;
const class11thSIPImg = images.sipForIitJEE;
const class11th2YVPImg = images.twoYearVenusProgram;
const planner = images.plannerIcon;
const practice = images.practice;
const chapterSolving = images.chapterSolving;

const Class11thCourses = () => {

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
        },
        sip: {
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            icon: <AccessTimeIcon />,
            badge: 'Integrated'
        }
    };

    const class11thCourses = [
        {
            id: 1,
            name: `2-Year Classroom Program for IIT-JEE`,
            des: '(Main + Advanced)',
            description1: 'This program is suitable for students who want to attend their school in morning and then coaching classes in evening',
            description2: `The National Testing Agency (NTA) conducts the JEE Main and JEE
Advanced examinations for admission into prestigious engineering
institutions such as the Indian Institutes of Technology (IITs) and
National Institutes of Technology (NITs) across India. To succeed in
these highly competitive exams, students require structured guidance
and mentorship from experienced faculty.`,
            description3: `Aurous Academy offers a comprehensive 2-year Classroom Program
exclusively designed for Class 11 students aspiring for IIT JEE. This
curriculum is meticulously planned to integrate JEE preparation with
11th, 12th, and Board exam studies, ensuring a well-rounded academic
foundation. The program emphasizes conceptual clarity, problem-solving
skills, and strategic exam preparation, making it an ideal choice for
students aiming to excel in both their school and competitive
examinations.`,
            description4: `By enrolling in this program, students receive expert guidance,
structured study plans, and rigorous practice sessions that enhance
their academic proficiency and problem-solving abilities, ultimately
paving the way for success in JEE and other competitive examinations.
`,
            targetYear: '2028',
            admissionOpen: true,
            img: class11thImg,
            programPlanner: [
                {
                    id: 33,
                    des: `1000+ hours of Conceptual Classes for class 11th and class 12th`,
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
                    des: '22 Minor Tests on JEE Main pattern'
                },
                {
                    id: 11,
                    des: '7 Major Tests on JEE Advanced pattern'
                },
            ],
            subjects: [
                {
                    id: 10,
                    des: 'Physics, Chemistry & Mathematics'
                }
            ],
            classSchedule: [
                {
                    id: 9,
                    des: '4.5 hours of Evening classes'
                },
                // {
                //     id: 8,
                //     des: '4-5 days/ week'
                // },
            ],
            class: '11th',
            batchDate: '26 Mar 2025'
        },
        {
            id: 2,
            name: `2-Year Sankalp Program for IIT-JEE`,
            des: '(Main + Advanced)',
            description1: 'This program is suitable for students who want to attend classes every morning at the coaching center and spend maximum time for self study.',
            description2: `The National Testing Agency (NTA) conducts the JEE Main and JEE
Advanced examinations for admission into prestigious engineering
institutions such as the Indian Institutes of Technology (IITs) and
National Institutes of Technology (NITs) across India. To excel in
these competitive exams, students require structured guidance from
expert faculty.`,
            description3: `Aurous Academy offers a 2-year SANKALP Program exclusively designed
for Class 11 students preparing for IIT JEE. The curriculum is
strategically planned to integrate JEE preparation with 11th, 12th,
and Board studies, providing a seamless learning experience.`,
            description4: `Unlike the traditional approach of attending school in the morning and
coaching classes in the evening, this program optimizes time
management, ensuring students have ample time for self-study—a crucial
factor in achieving success in JEE. With a structured, long-term
curriculum, students can strengthen their foundation, enhance
conceptual understanding, and develop problem-solving skills with
ease.`,
            description5: `This program is the ideal choice for JEE aspirants seeking efficient
preparation, expert mentorship, and a streamlined academic experience
for a successful engineering career.`,
            targetYear: '2028',
            admissionOpen: true,
            img: class11thSANKALPImg,
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
                    des: '22 Minor Tests on JEE Main pattern'
                },
                {
                    id: 11,
                    des: '7 Major Tests on JEE Advanced pattern'
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
                    des: 'Physics, Chemistry, Mathematics & English'
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
        {
            id: 3,
            name: `2-Year SIP for IIT-JEE`,
            des: '(Main + Advanced)',
            description1: 'This program is suitable for students who want to prepare for JEE and other entrance exams within the school schedule. Students don\'t have to sacrifice extracurricular activities and sports by choosing this program.',
            description2: `The National Testing Agency (NTA) conducts the JEE Main and JEE
Advanced examinations for admission into prestigious engineering
institutions such as the Indian Institutes of Technology (IITs) and
National Institutes of Technology (NITs) across India. To succeed in
these highly competitive exams, students require targeted guidance
from expert faculty and a structured academic approach.`,
            description3: `Aurous Academy offers a 2-year School Integrated Program exclusively
designed for Class 11 students aspiring for IIT JEE. This curriculum
seamlessly integrates JEE preparation with 11th, 12th, and Board
studies, ensuring a well-balanced and effective learning experience.
Over the years, we have observed two crucial benefits of this program.
First, with a structured 2-year curriculum, students can optimize
their self-study time, which is essential for excelling in JEE.
Second, the program allows students to manage their studies
efficiently while also participating in sports and extracurricular
activities, ensuring a stress-free learning environment and holistic
development.`,
            description4: `By eliminating the need for separate school and coaching classes, the
School Integrated Program provides students with a streamlined,
stress-free, and efficient preparation strategy for IIT JEE, allowing
them to achieve academic excellence while maintaining a well-rounded
lifestyle.
`,
            targetYear: '2028',
            admissionOpen: true,
            img: class11thSIPImg,
            programPlanner: [
                {
                    id: 33,
                    des: '1500+ hours of Conceptual Classes for class 11th and class 12th',
                    img: planner
                },
                {
                    id: 32,
                    des: '200+ hours of Revision Classes',
                    img: planner
                },
                {
                    id: 31,
                    des: 'Additional classroom slots for Doubt Clearing Classes',
                    img: practice
                },
                {
                    id: 21,
                    des: 'Along with unique Assisted Problem Solving Sessions (APSS)',
                    img: chapterSolving
                },
                {
                    id: 30,
                    des: ' Language & optional subject classes also conducted within school hours',
                    img: planner
                },
            ],
            mocktest: [
                {
                    id: 12,
                    des: '22 Minor Tests on JEE Main pattern'
                },
                {
                    id: 11,
                    des: '7 Major Tests on JEE Advanced pattern'
                },
                {
                    id: 111,
                    des: 'Subjective Exams on Board pattern'
                },
                {
                    id: 112,
                    des: 'Practicals as per syllabus conducted monthly'
                },
            ],
            subjects: [
                {
                    id: 10,
                    des: 'Physics, Chemistry, Mathematics by Aurous Academy'
                },
                {
                    id: 100,
                    des: 'Languages and optional subject by school teachers'
                }
            ],
            classSchedule: [
                // {
                //     id: 9,
                //     des: 'Morning classes within school schedule: 6 days/ week'
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
        {
            id: 4,
            name: `2-Year Venus Program for IIT-JEE`,
            des: '(Main + Advanced)',
            description1: `This program is suitable for students who want to prepare for JEE and other entrance exams within the school schedule. Students don't have to sacrifice extracurricular activities and sports by choosing this program.`,
            description2: `Aurous Academy offers a 2-year Venus Program exclusively designed for Class 11 students aspiring for IIT JEE. This curriculum seamlessly integrates JEE preparation with Class 11, 12, and Board studies, ensuring a well-balanced and effective learning experience.`,
            description3: `One of the key highlights of the program is the inclusion of Daily APSS (Assisted Problem Solving Sessions), where students receive guided support to strengthen their problem-solving skills and enhance conceptual clarity.`,
            description4: `Over the years, we have observed two crucial benefits of this program. First, with a structured 2-year curriculum, students can optimize their self-study time, which is essential for excelling in JEE. Second, the program allows students to manage their studies efficiently while also participating in sports and extracurricular activities, ensuring a stress-free learning environment and holistic development.`,
            description5: `By eliminating the need for separate school and coaching classes, the School Integrated Program provides students with a streamlined, stress-free, and efficient preparation strategy for IIT JEE, allowing them to achieve academic excellence while maintaining a well-rounded lifestyle.`,
            targetYear: '2027',
            admissionOpen: true,
            img: class11th2YVPImg,
            programPlanner: [
                {
                    id: 33,
                    des: '1500+ hours of Conceptual Classes for class 11th and class 12th',
                    img: planner
                },
                {
                    id: 32,
                    des: '200+ hours of Revision Classes',
                    img: planner
                },
                {
                    id: 31,
                    des: 'Additional classroom slots for Doubt Clearing Classes',
                    img: practice
                },
                {
                    id: 21,
                    des: 'Daily Assisted Problem Solving Sessions (APSS)',
                    img: chapterSolving
                },
                {
                    id: 30,
                    des: ' Language & optional subject classes also conducted within school hours',
                    img: planner
                },
            ],
            mocktest: [
                {
                    id: 12,
                    des: '22 Minor Tests on JEE Main pattern'
                },
                {
                    id: 11,
                    des: '7 Major Tests on JEE Advanced pattern'
                },
                {
                    id: 111,
                    des: 'Subjective Exams on Board pattern'
                },
                {
                    id: 112,
                    des: 'Practicals as per syllabus conducted monthly'
                },
            ],
            subjects: [
                {
                    id: 10,
                    des: 'Physics, Chemistry, Mathematics by Aurous Academy'
                },
                {
                    id: 100,
                    des: 'Languages and optional subject by school teachers'
                }
            ],
            classSchedule: [
                // {
                //     id: 9,
                //     des: 'Morning classes within school schedule: 6 days/ week'
                // },
                {
                    id: 10,
                    des: '5 hours of Morning classes along with 3 hours Assisted Problem Solving Sessions(APSS)'
                },
                {
                    id: 11,
                    des: '6 days/ week'
                },
            ],
            class: '11th',
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

        const programType = item.name.toLowerCase().includes('sankalp')
            ? 'sankalp'
            : item.name.toLowerCase().includes('sip')
                ? 'sip'
                : 'classroom';
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
                {class11thCourses.map((item, index) => (
                    <Grid key={item.id} xs={12} sm={6} lg={4}>
                        <CourseCard item={item} index={index} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Class11thCourses;


