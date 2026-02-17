import { AppBar, Box, Button, Card, Chip, Divider, Stack, Tab, Tabs, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import Grid from '@mui/material/Grid2';
import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import images from '@/lib/images';
import CheckIcon from '@mui/icons-material/Check';

// Image references
const class11th2YRCRPImg = images.class11NEET2YRCRP;
const class11th2YRSIPImg = images.class11NEET2YRSIP;
const NEET12_1YRCRP = images.class12NEET1YRCRP;
const NEET12_1YRSAN = images.class12NEET1YRSAN;
const dropperImg = images.class12NEETDROP;
const booksImg = images.books;
const cumpus = images.campus;
const note = images.note;
const planner = images.planner;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const NEETSection1 = () => {

    const isMobile = useMediaQuery("(min-width:600px)");
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [selectedCourse, setSelectedCourse] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setSelectedCourse([]);
    };

    const class11thCourses = [
        {
            id: 1,
            name: `2 year CLASSROOM PROGRAM for NEET`,
            description1: 'This program is suitable for students who want to attend their school in morning and then coaching classes in evening',
            description2: 'Introducing our 2-Year CLASSROOM Program, your path to excellence in the NEET UG examination. Our experienced faculty, personalized learning approach, and comprehensive curriculum are tailored to equip you thoroughly for this highly competitive medical entrance test. With access to high-quality study materials, rigorous mock tests, and a proven track record of successful students who have achieved their dreams, our program is your gateway to a fulfilling medical career and NEET UG success.',
            description3: '',
            targetYear: '2026',
            admissionOpen: true,
            img: class11th2YRCRPImg,
            programPlanner: [
                {
                    id: 33,
                    des: '1000+ hours of Conceptual Classes for class XI and class XII'
                },
                {
                    id: 32,
                    des: '140+ hours of Revision Classes'
                },
                {
                    id: 31,
                    des: 'Additional classroom slots for Doubt Clearing Classes'
                },
                {
                    id: 30,
                    des: 'Chapter wise Assisted Problem Solving Sessions (APSS)'
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
                    des: '4 days/ week'
                },
            ]
        },
        {
            id: 2,
            name: `2 year SANKALP PROGRAM for NEET`,
            description1: 'This program is suitable for students who want to attend classes every morning at the coaching center and spend maximum time for self study.',
            description2: `Elevate your chances of securing a seat in esteemed medical colleges with our 2 year SANKALP program for NEET UG. Our experienced faculty, personalized learning approach, and comprehensive curriculum ensure that you're thoroughly prepared for this highly competitive exam. Benefit from our top-quality study materials, rigorous mock tests, and a track record of successful students who've made their mark in the medical field. Join us on your journey to a fulfilling medical career and NEET UG success.`,
            description3: 'Instead of attending school in morning plus coaching classes in evening, this course helps the aspirants by better time management. With more time spent on self study their success in the NEET UG exam is ensured with ease through a 2 year-long curriculum.',
            targetYear: '2026',
            admissionOpen: true,
            img: class11th2YRSIPImg,
            programPlanner: [
                {
                    id: 33,
                    des: '1500+ hours of Conceptual Classes for class XI and class XII'
                },
                {
                    id: 32,
                    des: '200+ hours of Revision Classes'
                },
                {
                    id: 31,
                    des: 'Additional classroom slots for Doubt Clearing Classes'
                },
                {
                    id: 30,
                    des: 'Chapter wise Assisted Problem Solving Sessions (APSS)'
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
                {
                    id: 112,
                    des: 'Practicals as per syllabus conducted monthly'
                },
            ],
            subjects: [
                {
                    id: 10,
                    des: 'English, Physics, Chemistry, Biology & Optional Subject'
                }
            ],
            classSchedule: [
                {
                    id: 9,
                    des: 'Morning classes; 6 days/ week'
                },
            ]
        },
    ];

    const class12thCoursesData = [
        {
            id: 4,
            name: `1 year CLASSROOM PROGRAM for NEET`,
            description1: 'This program is suitable for students who want to attend their school in morning and then coaching classes in evening.',
            description2: 'Introducing our 1 year CLASSROOM Program, your path to excellence in the NEET UG examination. Our experienced faculty, personalized learning approach, and comprehensive curriculum are tailored to equip you thoroughly for this highly competitive medical entrance test. With access to high-quality study materials, rigorous mock tests, and a proven track record of successful students who have achieved their dreams, our program is your gateway to a fulfilling medical career and NEET UG success.',
            description3: "",
            targetYear: '2025',
            admissionOpen: true,
            img: NEET12_1YRCRP,
            programPlanner: [
                {
                    id: 33,
                    des: '500+ hours of Conceptual Classes for class XII'
                },
                {
                    id: 32,
                    des: '70+ hours of Revision Classes'
                },
                {
                    id: 31,
                    des: 'Additional classroom slots for Doubt Clearing Classes'
                },
                {
                    id: 30,
                    des: 'Chapter wise Assisted Problem Solving Sessions (APSS)'
                },
            ],
            mocktest: [
                {
                    id: 111,
                    des: '4 Major Tests'
                },
                {
                    id: 112,
                    des: '10 Minor Tests'
                },
            ],
            subjects: [
                {
                    id: 10,
                    des: 'Physics, Chemistry & Biology'
                },
            ],
            classSchedule: [
                {
                    id: 9,
                    des: '4.5 hours of Evening classes;'
                },
                {
                    id: 10,
                    des: '4 days/ week'
                },
            ],
        },
        {
            id: 5,
            name: `1 year SANKALP PROGRAM for NEET`,
            description1: 'This program is suitable for students who want to attend classes every morning at the coaching center and spend maximum time for self study.',
            description2: `Elevate your chances of securing a seat in esteemed medical colleges with our 1 year SANKALP program for NEET UG. Our experienced faculty, personalized learning approach, and comprehensive curriculum ensure that you're thoroughly prepared for this highly competitive exam. Benefit from our top-quality study materials, rigorous mock tests, and a track record of successful students who've made their mark in the medical field. Join us on your journey to a fulfilling medical career and NEET UG success.`,
            description3: 'Instead of attending school in morning plus coaching classes in evening, this course helps the aspirants by better time management. With more time spent on self study their success in the NEET UG exam is ensured with ease through a 2 year-long curriculum.',
            targetYear: '2025',
            admissionOpen: true,
            img: NEET12_1YRSAN,
            programPlanner: [
                {
                    id: 33,
                    des: '750+ hours of Conceptual Classes for class XII'
                },
                {
                    id: 32,
                    des: '100+ hours of Revision Classes'
                },
                {
                    id: 31,
                    des: 'Additional classroom slots for Doubt Clearing Classes'
                },
                {
                    id: 30,
                    des: 'Chapter wise Assisted Problem Solving Sessions (APSS)'
                },
            ],
            mocktest: [
                {
                    id: 111,
                    des: '10 Minor Tests'
                },
                {
                    id: 112,
                    des: '4 Major Tests'
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
                    des: 'Physics, Chemistry, Biology  & English'
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
        },
    ];

    const class12thDropperData = [
        {
            id: 6,
            name: `1 year extended CLASSROOM PROGRAM for NEET`,
            description1: 'This program is suitable for students who want to attend their school in morning and then coaching classes in evening.',
            description2: 'For repeater students seeking another opportunity to shine in the NEET UG examination, our 1 year extended CLASSROOM PROGRAM is tailored to your specific needs. Our experienced faculty, personalized learning approach, and comprehensive curriculum provide the necessary edge for a triumphant comeback. Access top-quality study materials and undergo rigorous mock tests. Join us on your journey to a fulfilling medical career and NEET UG success the second time around.',
            description3: 'The curriculum is specifically designed for the repeater NEET aspirants. To strengthen the foundation, conceptual knowledge and improve competition rank this course is the best option.',
            targetYear: '2025',
            admissionOpen: true,
            img: dropperImg,
            programPlanner: [
                {
                    id: 33,
                    des: '750+ hours of Conceptual Classes for class XII'
                },
                {
                    id: 32,
                    des: '100+ hours of Revision Classes'
                },
                {
                    id: 31,
                    des: 'Additional classroom slots for Doubt Clearing Classes'
                },
                {
                    id: 30,
                    des: 'Special Rank Improvement Sessions'
                },
                {
                    id: 1,
                    des: 'Along with unique Assisted Problem Solving Sessions (APSS)'
                },
            ],
            mocktest: [
                {
                    id: 111,
                    des: '20 Minor Tests'
                },
                {
                    id: 112,
                    des: '4 Major Tests'
                },
            ],
            subjects: [
                {
                    id: 10,
                    des: ' Physics, Chemistry & Biology'
                },
            ],
            classSchedule: [
                // {
                //     id: 9,
                //     des: ' Morning classes; 6 days/ week'
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
        },
    ];

    const handleSelectCourse = (e, item) => {
        setSelectedCourse(item)
    };

    return (
        <div style={{ paddingLeft: isMobile ? '6rem' : '1rem', paddingRight: isMobile ? '6rem' : '1rem', paddingTop: isMobile ? '2rem' : '1rem', paddingBottom: isMobile ? '4rem' : '1rem' }}>
            <Grid container spacing={2}>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Stack direction={'column'} spacing={2}>
                        <Typography
                            fontSize={{ xs: '25px', sm: '35px', md: '35px', lg: '35px' }}
                            fontWeight={'600'}
                            textAlign={'center'}
                        >
                            NEET- UG (With Board)
                        </Typography>
                        <Typography
                            fontSize={'16px'}
                            fontWeight={'600'}
                            textAlign={'center'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            gap={1}
                        >
                            <a href='/' style={{ textDecoration: 'none' }}>
                                Home
                            </a> {">"}
                            <a href='/neet' style={{ textDecoration: 'none' }}>
                                NEET- UG (With Board)
                            </a>
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }} display={'flex'} justifyContent={'center'} py={2}>
                    <Stack direction={'column'} spacing={1}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        width={'100%'}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                maxWidth: '1000px',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <AppBar position="static">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="secondary"
                                    textColor="inherit"
                                    variant="fullWidth"
                                    sx={{
                                        background: '#fff',
                                        color: '#000',
                                        borderRadius: '40px',
                                    }}
                                >
                                    <Tab
                                        label={
                                            <Typography
                                                fontSize={'14px'}
                                                textTransform={'none'}
                                                sx={{
                                                    ":hover": {
                                                        color: "#E8410E"
                                                    },
                                                    px: { xs: 1, sm: 2, md: 2, lg: 2 },
                                                    py: { xs: 0, sm: 0.6, md: 0.6, lg: 0.6 }
                                                }}
                                            >
                                                Class 11th
                                            </Typography>
                                        }
                                        {...a11yProps(0)}
                                    />
                                    <Tab
                                        label={
                                            <Typography
                                                fontSize={'14px'}
                                                textTransform={'none'}
                                                sx={{
                                                    ":hover": {
                                                        color: "#E8410E"
                                                    },
                                                    px: { xs: 1, sm: 2, md: 2, lg: 2 },
                                                    py: { xs: 0, sm: 0.6, md: 0.6, lg: 0.6 }
                                                }}
                                            >
                                                Class 12th
                                            </Typography>
                                        }
                                        {...a11yProps(1)}
                                    />
                                    <Tab
                                        label={
                                            <Typography
                                                fontSize={'14px'}
                                                textTransform={'none'}
                                                sx={{
                                                    ":hover": {
                                                        color: "#E8410E"
                                                    },
                                                    px: { xs: 1, sm: 2, md: 2, lg: 2 },
                                                    py: { xs: 0, sm: 0.6, md: 0.6, lg: 0.6 }
                                                }}
                                            >
                                                Class 12th Passout
                                            </Typography>
                                        }
                                        {...a11yProps(2)}
                                    />
                                </Tabs>
                            </AppBar>
                        </Box>
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <Grid container spacing={2}>
                                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                                    display={{ xs: 'grid', sm: 'flex', md: 'flex', lg: 'flex' }}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    gap={5}
                                >
                                    {
                                        class11thCourses.map((item, i) => {
                                            return (
                                                <Card
                                                    key={i}
                                                    sx={{
                                                        width: '100%',
                                                        maxWidth: '330px',
                                                        border: '1px solid #000',
                                                        borderRadius: '15px',
                                                        boxShadow: '2px 6px 8px',
                                                        transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out',
                                                        ':hover': {
                                                            boxShadow: '6px 5px 8px',
                                                            transform: 'scale(1.05)',
                                                        },
                                                    }}
                                                >
                                                    <Stack spacing={2} direction={'column'}>
                                                        <Stack spacing={2} p={1}>
                                                            <img
                                                                alt=''
                                                                src={item?.img}
                                                                style={{
                                                                    width: '100%',
                                                                    borderRadius: '10px'
                                                                }}
                                                            />
                                                        </Stack>
                                                        <Typography
                                                            textAlign={'center'}
                                                            fontSize={'14px'}
                                                            fontWeight={'600'}
                                                            p={2}
                                                        >
                                                            {item?.name}
                                                        </Typography>
                                                        <Divider />
                                                        <Stack direction={'column'} spacing={1} p={2}>
                                                            <Typography
                                                                textAlign={'start'}
                                                                fontSize={'12px'}
                                                                fontWeight={'700'}
                                                                display={'flex'}
                                                                justifyContent={'flex-start'}
                                                                alignItems={'center'}
                                                                gap={1}
                                                            >
                                                                Course Includes
                                                            </Typography>
                                                            <Typography
                                                                textAlign={'start'}
                                                                fontSize={'12px'}
                                                                fontWeight={'700'}
                                                                display={'flex'}
                                                                justifyContent={'flex-start'}
                                                                alignItems={'center'}
                                                                gap={1}
                                                            >
                                                                <CheckIcon sx={{ color: '#28a745', fontWeight: 'bold', fontSize: '14px' }} /> Target Year : {item?.targetYear}
                                                            </Typography>
                                                            <Typography
                                                                textAlign={'start'}
                                                                fontSize={'12px'}
                                                                fontWeight={'700'}
                                                                display={'flex'}
                                                                justifyContent={'flex-start'}
                                                                alignItems={'center'}
                                                                gap={1}
                                                            >
                                                                <CheckIcon sx={{ color: '#28a745', fontWeight: 'bold', fontSize: '14px' }} /> {item?.admissionOpen === true ? "Addmission Open" : "Addmission Closed"}
                                                            </Typography>
                                                        </Stack>
                                                        <Divider />
                                                        <Stack direction={'row'} spacing={1} p={2} justifyContent={'center'}>
                                                            <Button
                                                                onClick={(e) => handleSelectCourse(e, item)}
                                                                sx={{
                                                                    textTransform: 'none',
                                                                    borderRadius: '20px',
                                                                    background: '#ff3c00',
                                                                    ":hover": {
                                                                        background: '#ff3c00'
                                                                    },
                                                                    fontSize: '12px',
                                                                    color: '#fff',
                                                                    px: 4
                                                                }}
                                                            >
                                                                View More
                                                            </Button>
                                                        </Stack>
                                                    </Stack>
                                                </Card>
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <Grid container spacing={2}>
                                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                                    display={{ xs: 'grid', sm: 'flex', md: 'flex', lg: 'flex' }}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    gap={5}
                                >
                                    {
                                        class12thCoursesData.map((item, i) => {
                                            return (
                                                <Card
                                                    key={i}
                                                    sx={{
                                                        width: '100%',
                                                        maxWidth: '330px',
                                                        border: '1px solid #000',
                                                        borderRadius: '15px',
                                                        boxShadow: '2px 6px 8px',
                                                        transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out',
                                                        ':hover': {
                                                            boxShadow: '6px 5px 8px',
                                                            transform: 'scale(1.05)',
                                                        },
                                                    }}
                                                >
                                                    <Stack spacing={2} direction={'column'}>
                                                        <Stack spacing={2} p={1}>
                                                            <img
                                                                alt=''
                                                                src={item?.img}
                                                                style={{
                                                                    width: '100%',
                                                                    borderRadius: '10px'
                                                                }}
                                                            />
                                                        </Stack>
                                                        <Typography
                                                            textAlign={'center'}
                                                            fontSize={'14px'}
                                                            fontWeight={'600'}
                                                            p={2}
                                                        >
                                                            {item?.name}
                                                        </Typography>
                                                        <Divider />
                                                        <Stack direction={'column'} spacing={1} p={2}>
                                                            <Typography
                                                                textAlign={'start'}
                                                                fontSize={'12px'}
                                                                fontWeight={'700'}
                                                                display={'flex'}
                                                                justifyContent={'flex-start'}
                                                                alignItems={'center'}
                                                                gap={1}
                                                            >
                                                                Course Includes
                                                            </Typography>
                                                            <Typography
                                                                textAlign={'start'}
                                                                fontSize={'12px'}
                                                                fontWeight={'700'}
                                                                display={'flex'}
                                                                justifyContent={'flex-start'}
                                                                alignItems={'center'}
                                                                gap={1}
                                                            >
                                                                <CheckIcon sx={{ color: '#28a745', fontWeight: 'bold', fontSize: '14px' }} /> Target Year : {item?.targetYear}
                                                            </Typography>
                                                            <Typography
                                                                textAlign={'start'}
                                                                fontSize={'12px'}
                                                                fontWeight={'700'}
                                                                display={'flex'}
                                                                justifyContent={'flex-start'}
                                                                alignItems={'center'}
                                                                gap={1}
                                                            >
                                                                <CheckIcon sx={{ color: '#28a745', fontWeight: 'bold', fontSize: '14px' }} /> {item?.admissionOpen === true ? "Addmission Open" : "Addmission Closed"}
                                                            </Typography>
                                                        </Stack>
                                                        <Divider />
                                                        <Stack direction={'row'} spacing={1} p={2} justifyContent={'center'}>
                                                            <Button
                                                                onClick={(e) => handleSelectCourse(e, item)}
                                                                sx={{
                                                                    textTransform: 'none',
                                                                    borderRadius: '20px',
                                                                    background: '#ff3c00',
                                                                    ":hover": {
                                                                        background: '#ff3c00'
                                                                    },
                                                                    fontSize: '12px',
                                                                    color: '#fff',
                                                                    px: 4
                                                                }}
                                                            >
                                                                View More
                                                            </Button>
                                                        </Stack>
                                                    </Stack>
                                                </Card>
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <Grid container spacing={2}>
                                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                                    display={{ xs: 'grid', sm: 'flex', md: 'flex', lg: 'flex' }}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    gap={5}
                                >
                                    {
                                        class12thDropperData.map((item, i) => {
                                            return (
                                                <Card
                                                    key={i}
                                                    sx={{
                                                        width: '100%',
                                                        maxWidth: '330px',
                                                        border: '1px solid #000',
                                                        borderRadius: '15px',
                                                        boxShadow: '2px 6px 8px',
                                                        transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out',
                                                        ':hover': {
                                                            boxShadow: '6px 5px 8px',
                                                            transform: 'scale(1.05)',
                                                        },
                                                    }}
                                                >
                                                    <Stack spacing={2} direction={'column'}>
                                                        <Stack spacing={2} p={1}>
                                                            <img
                                                                alt=''
                                                                src={item?.img}
                                                                style={{
                                                                    width: '100%',
                                                                    borderRadius: '10px'
                                                                }}
                                                            />
                                                        </Stack>
                                                        <Typography
                                                            textAlign={'center'}
                                                            fontSize={'14px'}
                                                            fontWeight={'600'}
                                                            p={2}
                                                        >
                                                            {item?.name}
                                                        </Typography>
                                                        <Divider />
                                                        <Stack direction={'column'} spacing={1} p={2}>
                                                            <Typography
                                                                textAlign={'start'}
                                                                fontSize={'12px'}
                                                                fontWeight={'700'}
                                                                display={'flex'}
                                                                justifyContent={'flex-start'}
                                                                alignItems={'center'}
                                                                gap={1}
                                                            >
                                                                Course Includes
                                                            </Typography>
                                                            <Typography
                                                                textAlign={'start'}
                                                                fontSize={'12px'}
                                                                fontWeight={'700'}
                                                                display={'flex'}
                                                                justifyContent={'flex-start'}
                                                                alignItems={'center'}
                                                                gap={1}
                                                            >
                                                                <CheckIcon sx={{ color: '#28a745', fontWeight: 'bold', fontSize: '14px' }} /> Target Year : {item?.targetYear}
                                                            </Typography>
                                                            <Typography
                                                                textAlign={'start'}
                                                                fontSize={'12px'}
                                                                fontWeight={'700'}
                                                                display={'flex'}
                                                                justifyContent={'flex-start'}
                                                                alignItems={'center'}
                                                                gap={1}
                                                            >
                                                                <CheckIcon sx={{ color: '#28a745', fontWeight: 'bold', fontSize: '14px' }} /> {item?.admissionOpen === true ? "Addmission Open" : "Addmission Closed"}
                                                            </Typography>
                                                        </Stack>
                                                        <Divider />
                                                        <Stack direction={'row'} spacing={1} p={2} justifyContent={'center'}>
                                                            <Button
                                                                onClick={(e) => handleSelectCourse(e, item)}
                                                                sx={{
                                                                    textTransform: 'none',
                                                                    borderRadius: '20px',
                                                                    background: '#ff3c00',
                                                                    ":hover": {
                                                                        background: '#ff3c00'
                                                                    },
                                                                    fontSize: '12px',
                                                                    color: '#fff',
                                                                    px: 4
                                                                }}
                                                            >
                                                                View More
                                                            </Button>
                                                        </Stack>
                                                    </Stack>
                                                </Card>
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>
                        </TabPanel>
                    </Stack>
                </Grid>
                {
                    selectedCourse?.id && (
                        <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }} py={2}>
                            <Stack direction={'column'} spacing={2}
                                sx={{
                                    border: '1px solid #000',
                                    borderRadius: '15px',
                                }}
                            >
                                <Stack direction={'column'} spacing={1} p={1}>
                                    <Typography
                                        fontSize={'18px'}
                                        fontWeight={'700'}
                                        textAlign={'center'}
                                        py={1}
                                        color='#131d3b'
                                    >
                                        {selectedCourse?.name}
                                    </Typography>
                                    <hr
                                        style={{
                                            border: '0',
                                            borderTop: '3px solid #ff4f01', // Set the border color and width
                                            width: '100%' // Optional: Control width,
                                        }}
                                    />
                                    <Typography
                                        fontSize={'12px'}
                                        fontWeight={'500'}
                                        textAlign={'center'}
                                        color='#666d81'
                                        py={1}
                                        fontFamily={`"Roboto Condensed", serif`}
                                    >
                                        {selectedCourse?.description1}
                                    </Typography>
                                </Stack>
                                <Stack direction={'row'} spacing={1} p={1}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'baseline'}
                                >
                                    <hr
                                        style={{
                                            border: '0',
                                            borderTop: '4px solid #0e1f50', // Set the border color and width
                                            width: '15%',
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            width: { xs: '100%', sm: '20%', md: '30%', lg: '30%' },
                                            fontSize: { xs: '16px', sm: '20px', md: '20px', lg: '20px' },
                                            fontFamily: `"Roboto Condensed", serif`
                                        }}
                                    >
                                        PROGRAM ADVANTAGE
                                    </Typography>
                                    <hr
                                        style={{
                                            border: '0',
                                            borderTop: '4px solid #ff4f01', // Set the border color and width
                                            width: '100%' // Optional: Control width,
                                        }}
                                    />
                                </Stack>
                                <Stack direction={'column'} spacing={1} p={1}>
                                    <Typography
                                        fontSize={'14px'}
                                        fontWeight={'500'}
                                        textAlign={isMobile ? 'start' : 'center'}
                                        color='#666d81'
                                        py={1}
                                        fontFamily={`"Roboto Condensed", serif`}
                                    >
                                        {selectedCourse?.description2}
                                    </Typography>
                                    {
                                        selectedCourse?.description3 && (
                                            <Typography
                                                fontSize={'14px'}
                                                fontWeight={'500'}
                                                textAlign={isMobile ? 'start' : 'center'}
                                                color='#666d81'
                                                py={1}
                                                fontFamily={`"Roboto Condensed", serif`}
                                            >
                                                {selectedCourse?.description3}
                                            </Typography>
                                        )
                                    }
                                </Stack>
                                <Stack direction={'column'} spacing={1} p={1}>
                                    <Grid container spacing={2} width={'100%'}
                                        sx={{
                                            border: '1px solid #ff4f01',
                                            padding: '1rem',
                                            ":hover": {
                                                border: '3px solid #ff4f01',
                                            }
                                        }}
                                    >
                                        <Grid item size={{ xs: 12, sm: 5, md: 5, lg: 5 }}
                                            display={isMobile ? 'flex' : 'grid'}
                                            justifyContent={'flex-start'}
                                            alignItems={'center'}
                                            gap={1}
                                            sx={{
                                                borderRight: isMobile ? '1px solid #ff4f01' : ''
                                            }}
                                        >
                                            <img
                                                alt=''
                                                src={planner}
                                                style={{
                                                    width: isMobile ? '12%' : '40%'
                                                }}
                                            />
                                            <Typography
                                                textAlign={isMobile ? 'start' : 'center'}
                                                fontSize={'16px'}
                                                fontWeight={'700'}
                                                display={'flex'}
                                                justifyContent={'flex-start'}
                                                alignItems={'center'}
                                                gap={1}
                                            >
                                                PROGRAM PLANNER
                                            </Typography>
                                        </Grid>
                                        <Grid item size={{ xs: 12, sm: 7, md: 7, lg: 7 }}
                                            display={'flex'}
                                            justifyContent={'flex-start'}
                                            alignItems={'center'}
                                        >
                                            <Stack direction={'column'} spacing={2}>
                                                {
                                                    selectedCourse?.programPlanner?.map((item, i) => {
                                                        return (
                                                            <Typography
                                                                key={i}
                                                                textAlign={'start'}
                                                                fontSize={'12px'}
                                                                fontWeight={'700'}
                                                                display={'flex'}
                                                                justifyContent={'flex-start'}
                                                                alignItems={'center'}
                                                                gap={1}
                                                            >
                                                                <CheckIcon sx={{ color: '#28a745', fontWeight: 'bold', fontSize: '14px' }} />{item?.des}
                                                            </Typography>
                                                        )
                                                    })
                                                }
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} width={'100%'}
                                        sx={{
                                            border: '1px solid #ff4f01',
                                            padding: '1rem',
                                            ":hover": {
                                                border: '3px solid #ff4f01',
                                            }
                                        }}
                                    >
                                        <Grid item size={{ xs: 12, sm: 5, md: 5, lg: 5 }}
                                            display={isMobile ? 'flex' : 'grid'}
                                            justifyContent={'flex-start'}
                                            alignItems={'center'}
                                            gap={1}
                                            sx={{
                                                borderRight: isMobile ? '1px solid #ff4f01' : ''
                                            }}
                                        >
                                            <img
                                                alt=''
                                                src={note}
                                                style={{
                                                    width: isMobile ? '12%' : '40%'
                                                }}
                                            />
                                            <Typography
                                                textAlign={isMobile ? 'start' : 'center'}
                                                fontSize={'16px'}
                                                fontWeight={'700'}
                                                display={'flex'}
                                                justifyContent={'flex-start'}
                                                alignItems={'center'}
                                                gap={1}
                                            >
                                                MOCK TESTS & PRACTICE PAPERS
                                            </Typography>
                                        </Grid>
                                        <Grid item size={{ xs: 12, sm: 7, md: 7, lg: 7 }}
                                            display={'flex'}
                                            justifyContent={'flex-start'}
                                            alignItems={'center'}
                                        >
                                            <Stack direction={'column'} spacing={2}>
                                                {
                                                    selectedCourse?.mocktest?.map((item, i) => {
                                                        return (
                                                            <Typography
                                                                key={i}
                                                                textAlign={'start'}
                                                                fontSize={'12px'}
                                                                fontWeight={'700'}
                                                                display={'flex'}
                                                                justifyContent={'flex-start'}
                                                                alignItems={'center'}
                                                                gap={1}
                                                            >
                                                                <CheckIcon sx={{ color: '#28a745', fontWeight: 'bold', fontSize: '14px' }} />{item?.des}
                                                            </Typography>
                                                        )
                                                    })
                                                }
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} width={'100%'}
                                        sx={{
                                            border: '1px solid #ff4f01',
                                            padding: '1rem',
                                            ":hover": {
                                                border: '3px solid #ff4f01',
                                            }
                                        }}
                                    >
                                        <Grid item size={{ xs: 12, sm: 5, md: 5, lg: 5 }}
                                            display={isMobile ? 'flex' : 'grid'}
                                            justifyContent={'flex-start'}
                                            alignItems={'center'}
                                            gap={1}
                                            sx={{
                                                borderRight: isMobile ? '1px solid #ff4f01' : ''
                                            }}
                                        >
                                            <img
                                                alt=''
                                                src={booksImg}
                                                style={{
                                                    width: isMobile ? '12%' : '40%'
                                                }}
                                            />
                                            <Typography
                                                textAlign={isMobile ? 'start' : 'center'}
                                                fontSize={'16px'}
                                                fontWeight={'700'}
                                                display={'flex'}
                                                justifyContent={'flex-start'}
                                                alignItems={'center'}
                                                gap={1}
                                            >
                                                SUBJECTS:
                                            </Typography>
                                        </Grid>
                                        <Grid item size={{ xs: 12, sm: 7, md: 7, lg: 7 }}
                                            display={'flex'}
                                            justifyContent={'flex-start'}
                                            alignItems={'center'}
                                        >
                                            <Stack direction={'column'} spacing={2}>
                                                {
                                                    selectedCourse?.subjects?.map((item, i) => {
                                                        return (
                                                            <Typography
                                                                key={i}
                                                                textAlign={'start'}
                                                                fontSize={'12px'}
                                                                fontWeight={'700'}
                                                                display={'flex'}
                                                                justifyContent={'flex-start'}
                                                                alignItems={'center'}
                                                                gap={1}
                                                            >
                                                                <CheckIcon sx={{ color: '#28a745', fontWeight: 'bold', fontSize: '14px' }} />{item?.des}
                                                            </Typography>
                                                        )
                                                    })
                                                }
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} width={'100%'}
                                        sx={{
                                            border: '1px solid #ff4f01',
                                            padding: '1rem',
                                            ":hover": {
                                                border: '3px solid #ff4f01',
                                            }
                                        }}
                                    >
                                        <Grid item size={{ xs: 12, sm: 5, md: 5, lg: 5 }}
                                            display={isMobile ? 'flex' : 'grid'}
                                            justifyContent={'flex-start'}
                                            alignItems={'center'}
                                            gap={1}
                                            sx={{
                                                borderRight: isMobile ? '1px solid #ff4f01' : ''
                                            }}
                                        >
                                            <img
                                                alt=''
                                                src={cumpus}
                                                style={{
                                                    width: isMobile ? '12%' : '40%'
                                                }}
                                            />
                                            <Typography
                                                textAlign={isMobile ? 'start' : 'center'}
                                                fontSize={'16px'}
                                                fontWeight={'700'}
                                                display={'flex'}
                                                justifyContent={'flex-start'}
                                                alignItems={'center'}
                                                gap={1}
                                            >
                                                CLASS SCHEDULE
                                            </Typography>
                                        </Grid>
                                        <Grid item size={{ xs: 12, sm: 7, md: 7, lg: 7 }}
                                            display={'flex'}
                                            justifyContent={'flex-start'}
                                            alignItems={'center'}
                                        >
                                            <Stack direction={'column'} spacing={2}>
                                                {
                                                    selectedCourse?.classSchedule?.map((item, i) => {
                                                        return (
                                                            <Typography
                                                                key={i}
                                                                textAlign={'start'}
                                                                fontSize={'12px'}
                                                                fontWeight={'700'}
                                                                display={'flex'}
                                                                justifyContent={'flex-start'}
                                                                alignItems={'center'}
                                                                gap={1}
                                                            >
                                                                <CheckIcon sx={{ color: '#28a745', fontWeight: 'bold', fontSize: '14px' }} />{item?.des}
                                                            </Typography>
                                                        )
                                                    })
                                                }
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Stack>
                            </Stack>
                        </Grid>
                    )
                }
            </Grid>
        </div >
    )
}

export default NEETSection1


