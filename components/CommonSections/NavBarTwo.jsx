'use client';

import { useMediaQuery, Box, Button, Typography, Drawer, List, ListItem, ListItemButton, Collapse, IconButton, MenuItem, Avatar, Menu, Badge, ListItemText, Chip, Dialog, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import images from '@/lib/images';
import { useRouter } from 'next/navigation';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Network from '@/lib/Netwrok';
import Grid from '@mui/material/Grid2';
import ContactUs from './ContactUs';
import moment from 'moment';
import AnnouncementDialog from './AnnouncementDialog';

const Logo = images.logo;
const PolygonDown = images.polygonDown;
const new_icon_blink1 = images.newIconBlink1;

// Add CSS animations
const styles = `
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
`;

// Inject styles
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

const NavBarTwo = () => {

    const instId = 120;
    const isMobile = useMediaQuery("(min-width:600px)");
    const router = useRouter();
    const [selectedCourse, setSelectedCourse] = useState('Home');
    const [anchorElOnlineCourse, setAnchorElOnlineCourse] = useState(null);
    const [anchorEScholarship, setanchorEScholarship] = useState(null);
    const [anchorAbout, setanchorAbout] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const openOnlineCourse = Boolean(anchorElOnlineCourse);
    const openSholarship = Boolean(anchorEScholarship);
    const openAbout = Boolean(anchorAbout);
    const [openLeft, setOpenLeft] = useState(false);
    const [openScholarshipExp, setOpenScholarshipExp] = useState(false);
    const [openAboutUs, setOpenAboutUs] = useState(false);
    const [openCourse, setOpenCourse] = React.useState(false);
    const [openAnnouncement, setOpenAnnouncement] = React.useState(false);
    const [openContactUs, setOpenContactUs] = React.useState(false);
    const [courses, setCourses] = useState([]);
    const [testSeries, setTestSeries] = useState([]);
    const [isSticky, setIsSticky] = useState(false);
    const [anncouncementData, setAnncouncementData] = useState([]);
    const [selectedData, setSelectedData] = useState([]);
    const [openAnnouncementDialog, setOpenAnnouncementDialog] = useState(false);

    const handleNavigatePlayStore = () => {
        const url = 'https://student.aurousacademy.com/sign-in'
        window.open(url, '_blank', 'noreferrer');
    };

    const handleNavigateGallery = () => {
        router.push('/gallery');
    };

    const handleClickCourse = (event) => {
        setOpenCourse((prevOpen) => !prevOpen);
        event.stopPropagation();
    };
    const handleOpenContactUs = (event) => {
        setOpenContactUs(true);
        event.stopPropagation();
        setOpenLeft(false);
    };

    const handleBuyCourse = (item) => {
        // router.push(`/courseDetails/${item?.id}`);
        // router.push(`https://course.classiolabs.com/course/${item?.id}`);
        const url = `https://course.classiolabs.com/course/${item?.id}`
        window.open(url, '_blank', 'noreferrer');
        handleClose();
        handleCloseOnlineCourse();
    };

    const getAllAnnouncement = async () => {
        try {
            const response = await Network.fetchAnnouncementUrl(instId);
            setAnncouncementData(response?.announcement);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        getAllAnnouncement();
    }, []);

    const getAllCourses = async () => {
        const response = await Network.fetchCourses(instId);
        // setCourses(response.courses);
        let activeCourses = [];
        let testSeriesCourses = [];

        response.courses.forEach((course) => {
            if (course.active === true) {
                activeCourses.push(course);
                if (course?.tags && course?.tags.some(tag => tag?.tag === "Website")) {
                    testSeriesCourses.push(course); // Add to testSeriesCourses if tag found
                }
            }
        });
        setCourses(activeCourses);
        setTestSeries(testSeriesCourses);
    };

    useEffect(() => {
        getAllCourses();
    }, []);

    const handleClickOnlineCourse = (event) => {
        setAnchorElOnlineCourse(event.currentTarget);
    };

    const handleClickScholarship = (event) => {
        setanchorEScholarship(event.currentTarget);
    };
    const handleClickAboutUs = (event) => {
        setanchorAbout(event.currentTarget);
    };
    const handleClickCloseAboutUs = (event) => {
        setanchorAbout(null);
    };

    const handleCloseScholarship = (event) => {
        setanchorEScholarship(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseOnlineCourse = () => {
        setAnchorElOnlineCourse(null);
    };

    const toggleDrawer = (newOpen) => () => {
        setOpenLeft(newOpen);
    };

    const handleNavigateWeb = () => {
        const url = 'https://amber-jordan-31.tiiny.site'
        window.open(url, '_blank', 'noreferrer');
    };
    const handleNavigatePragyan = () => {
        // const url = 'https://pragyan.classiolabs.com/'
        const url = 'https://pragyan.aurousacademy.com/'
        window.open(url, '_blank', 'noreferrer');
    };
    const handleNavigateAPRE = () => {
        // const url = 'https://apre.aurousacademy.com'
        const url = 'https://apre.aurousacademy.com/'
        window.open(url, '_blank', 'noreferrer');
    };

    const handleNavBarClick = (e, course) => {
        setSelectedCourse(course);
        if (course === 'Home') {
            router.push('/');
        };
    };

    const handleOpenNavMen2Close = () => {
        setOpenLeft(false);
    };

    const handleOpenNavMenu2 = () => {
        setOpenLeft(true);
    };

    const handlClickScholarshipExp = (e) => {
        e.preventDefault()
        setOpenScholarshipExp(!openScholarshipExp);
    };

    const handlClickAboutExp = (e) => {
        e.preventDefault()
        setOpenAboutUs(!openAboutUs);
    };


    // const handleBuyCourse = (item) => {
    //     const url = `https://course.classiolabs.com/` + `course/${item?.id}?folderId=${0}`
    //     window.open(url, '_blank', 'noreferrer');
    //     handleClose();
    //     handleCloseOnlineCourse();
    // };

    const handlePlayStore = () => {
        const section5Element = document.querySelector('.home-section-5');
        if (section5Element) {
            section5Element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleOpenAnnouncement = () => {
        setOpenAnnouncement(true);
    };
    const handleCloseAnnouncement = () => {
        setOpenAnnouncement(false);
    };

    const handleConvertToBase64 = (e) => {
        e.preventDefault();
        var object = {
            "isAdmitCard": true,
            "contact": ''
        }
        const url = `https://portal.aurousacademy.com/#/data=${btoa(JSON.stringify(object))}`;
        // Open the WhatsApp URL in a new tab
        window.open(url, '_blank');
    }

    const handleNavigateResult = () => {
        router.push('/result')
    };
    const handleOnlineCourse = () => {
        const url = 'https://aurousacademy.graphy.com/'
        window.open(url, '_blank', 'noreferrer');
    }

    const handleCourseMenu = (value) => {
        if (value === "JEE") {
            router.push('/jee');
        } else if (value === "NEET") {
            router.push('/neet');
        } else if (value === "Foundation") {
            router.push('/foundation');
        }
    }

    // Always show logo at the top of NavBarTwo
    const LogoBar = (
        <Box sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 1.5,
            background: 'transparent',
        }}>
            <img
                onClick={(e) => handleNavBarClick(e, 'About Aurous')}
                style={{
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    filter: 'brightness(1.1)',
                    maxHeight: 48,
                    maxWidth: '70%',
                    width: 'auto',
                }}
                alt='Aurous Academy Logo'
                src={Logo}
            />
        </Box>
    );

    const DrawerList = (
        <Box sx={{ width: 280 }} role="presentation">
            {LogoBar}
            <List sx={{ padding: 0 }}>
                <ListItem sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    padding: '16px 20px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <Typography variant="h6" sx={{ color: '#fff', fontWeight: '600' }}>
                        Menu
                    </Typography>
                    <IconButton
                        onClick={handleOpenNavMen2Close}
                        sx={{
                            color: '#fff',
                            background: 'rgba(255, 255, 255, 0.1)',
                            '&:hover': {
                                background: 'rgba(255, 255, 255, 0.2)'
                            }
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={handlClickAboutExp}
                        sx={{
                            padding: '12px 20px',
                            borderRadius: '12px',
                            margin: '4px 12px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateX(8px)'
                            }
                        }}
                    >
                        <Typography
                            variant="body1" sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#fff',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                width: '100%'
                            }} >
                            About Aurous
                            <Box sx={{
                                transition: 'transform 0.3s ease',
                                transform: openAboutUs ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}>
                                {openAboutUs ? <KeyboardArrowUpIcon sx={{ color: '#E8410E' }} /> : <KeyboardArrowDownIcon />}
                            </Box>
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <Collapse in={openAboutUs}>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{
                                fontSize: '14px',
                                padding: '8px 40px',
                                color: '#ccc',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: '#E8410E',
                                    background: 'rgba(232, 65, 14, 0.05)'
                                }
                            }}
                            onClick={(e) => handleDownloadPdf(e, 'aboutUs')}
                        >
                            About Us
                        </ListItemButton>
                        <ListItemButton
                            sx={{
                                fontSize: '14px',
                                padding: '8px 40px',
                                color: '#ccc',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: '#E8410E',
                                    background: 'rgba(232, 65, 14, 0.05)'
                                }
                            }}
                            onClick={(e) => handleDownloadPdf(e, 'ourTeam')}
                        >
                            Directors' Message
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={handlClickScholarshipExp}
                        sx={{
                            padding: '12px 20px',
                            borderRadius: '12px',
                            margin: '4px 12px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateX(8px)'
                            }
                        }}
                    >
                        <Typography
                            variant="body1" sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#fff',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                width: '100%'
                            }} >
                            Scholarship Exams
                            <Box sx={{
                                transition: 'transform 0.3s ease',
                                transform: openScholarshipExp ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}>
                                {openScholarshipExp ? <KeyboardArrowUpIcon sx={{ color: '#E8410E' }} /> : <KeyboardArrowDownIcon />}
                            </Box>
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <Collapse in={openScholarshipExp}>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{
                                fontSize: '14px',
                                padding: '8px 40px',
                                color: '#ccc',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: '#E8410E',
                                    background: 'rgba(232, 65, 14, 0.05)'
                                }
                            }}
                            onClick={(e) => handleDownloadPdf(e, 'pragyan')}
                        >
                            PRAGYAN
                        </ListItemButton>
                        <ListItemButton
                            sx={{
                                fontSize: '14px',
                                padding: '8px 40px',
                                color: '#ccc',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: '#E8410E',
                                    background: 'rgba(232, 65, 14, 0.05)'
                                }
                            }}
                            onClick={(e) => handleDownloadPdf(e, 'apre')}
                        >
                            APRE
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={handleClickCourse}
                        sx={{
                            padding: '12px 20px',
                            borderRadius: '12px',
                            margin: '4px 12px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateX(8px)'
                            }
                        }}
                    >
                        <Typography
                            variant="body1" sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#fff',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                width: '100%'
                            }} >
                            Courses
                            <Box sx={{
                                transition: 'transform 0.3s ease',
                                transform: openCourse ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}>
                                {openCourse ? <KeyboardArrowUpIcon sx={{ color: '#E8410E' }} /> : <KeyboardArrowDownIcon />}
                            </Box>
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <Collapse in={openCourse} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            sx={{
                                fontSize: '14px',
                                padding: '8px 40px',
                                color: '#ccc',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: '#E8410E',
                                    background: 'rgba(232, 65, 14, 0.05)'
                                }
                            }}
                            onClick={() => handleCourseMenu('JEE')}
                        >
                            IIT-JEE
                        </ListItemButton>
                        <ListItemButton
                            sx={{
                                fontSize: '14px',
                                padding: '8px 40px',
                                color: '#ccc',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: '#E8410E',
                                    background: 'rgba(232, 65, 14, 0.05)'
                                }
                            }}
                            onClick={() => handleCourseMenu('NEET')}
                        >
                            NEET
                        </ListItemButton>
                        <ListItemButton
                            sx={{
                                fontSize: '14px',
                                padding: '8px 40px',
                                color: '#ccc',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: '#E8410E',
                                    background: 'rgba(232, 65, 14, 0.05)'
                                }
                            }}
                            onClick={() => handleCourseMenu('Foundation')}
                        >
                            Foundation
                        </ListItemButton>
                        <ListItemButton
                            sx={{
                                fontSize: '14px',
                                padding: '8px 40px',
                                color: '#ccc',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: '#E8410E',
                                    background: 'rgba(232, 65, 14, 0.05)'
                                }
                            }}
                            onClick={handleOnlineCourse}
                        >
                            Online Courses
                        </ListItemButton>
                    </List>
                </Collapse>
                {/* <ListItem disablePadding>
                    <ListItemButton onClick={(e) => handleMPPSCClick(e)}>
                        <Typography
                            variant="body1" sx={{
                                fontSize: '1.2rem',
                                ':hover': {
                                    color: '#DD4223'
                                },
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                width: '100%'
                            }} >
                            Courses {openMPPSC === true ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </Typography>
                    </ListItemButton>
                </ListItem> */}
                {/* <Collapse in={openMPPSC}>
                    <List component="div" disablePadding>
                        <MenuItem sx={{ fontSize: '15px' }} onClick={(e) => handleDownloadPdf(e, 'mppscPyqSection')}>
                            PYQ
                        </MenuItem>
                        <MenuItem sx={{ fontSize: '15px' }} onClick={(e) => handleDownloadPdf(e, 'mppscSyllabus')}>
                            Syllabus
                        </MenuItem>
                        <MenuItem sx={{ fontSize: '15px' }} onClick={(e) => handleDownloadPdf(e, 'mppscCompleteProgram')}>
                            Complete Program
                        </MenuItem>
                    </List>
                </Collapse> */}
                {/* <ListItem disablePadding>
                    <ListItemButton onClick={handleClickTest} >
                        <Typography
                            variant="body1" sx={{
                                fontSize: '1.2rem',
                                ':hover': {
                                    color: '#DD4223'
                                },
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                width: '100%'
                            }} >
                            Test Series  {openTestSeries ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <Collapse in={openTestSeries} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {testSeries && testSeries.map((filteredCourse, index) => (
                            <ListItemButton sx={{ fontSize: '15px' }} onClick={() => handleBuyCourse(filteredCourse)}>
                                {filteredCourse.title}
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse> */}
                <ListItem disablePadding>
                    <ListItemButton
                        sx={{
                            padding: '12px 20px',
                            borderRadius: '12px',
                            margin: '4px 12px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateX(8px)'
                            }
                        }}
                    >
                    <a href="/result" style={{ textDecoration: "none", color: '#fff', width: '100%' }}>
<Typography
                            onClick={handleNavigateResult}
                            variant="body1" sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#fff',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                width: '100%'
                            }} >
                            Result
                        </Typography>
                    </a>
                        
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        sx={{
                            padding: '12px 20px',
                            borderRadius: '12px',
                            margin: '4px 12px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateX(8px)'
                            }
                        }}
                    >
                        <a
                            href="/banner"
                            style={{ textDecoration: "none", color: '#fff', width: '100%' }}
                        >
                            <Typography
                                variant="body1" sx={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    color: '#fff',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    width: '100%'
                                }} >
                                Gallery
                            </Typography>
                        </a>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        sx={{
                            padding: '12px 20px',
                            borderRadius: '12px',
                            margin: '4px 12px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateX(8px)'
                            }
                        }}
                    >
                        <Typography
                            onClick={() => router.push('/timetable')}
                            variant="body1" sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#fff',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                width: '100%'
                            }} >
                            Timetable
                        </Typography>
                    </ListItemButton>
                </ListItem>
                {/* <ListItem disablePadding>
                    <ListItemButton
                        sx={{
                            padding: '12px 20px',
                            borderRadius: '12px',
                            margin: '4px 12px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateX(8px)'
                            }
                        }}
                    >
                        <Typography
                            onClick={() => router.push('/blog')}
                            variant="body1" sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#fff',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                width: '100%'
                            }} >
                            Blog
                        </Typography>
                    </ListItemButton>
                </ListItem> */}
                {/* <ListItem disablePadding>
                    <ListItemButton
                        sx={{
                            padding: '12px 20px',
                            borderRadius: '12px',
                            margin: '4px 12px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateX(8px)'
                            }
                        }}
                    >
                        <Typography
                            onClick={() => router.push('/freeresources')}
                            variant="body1" sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#fff',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                width: '100%'
                            }} >
                            Free Resources
                        </Typography>
                    </ListItemButton>
                </ListItem> */}
                {/* <ListItem disablePadding>
                    <ListItemButton
                        sx={{
                            padding: '12px 20px',
                            borderRadius: '12px',
                            margin: '4px 12px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateX(8px)'
                            }
                        }}
                    >
                        <Typography
                            onClick={() => router.push('/previousyearpaper')}
                            variant="body1" sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#fff',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                width: '100%'
                            }} >
                            Download
                        </Typography>
                    </ListItemButton>
                </ListItem> */}
                <ListItem disablePadding>
                    <ListItemButton
                        sx={{
                            padding: '12px 20px',
                            borderRadius: '12px',
                            margin: '4px 12px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateX(8px)'
                            }
                        }}
                    >
                        <Typography
                            onClick={handleOpenContactUs}
                            variant="body1" sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#fff',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                width: '100%'
                            }} >
                            Contact Us
                        </Typography>
                    </ListItemButton>
                </ListItem>
                {/* <ListItem disablePadding>
                    <ListItemButton
                        onClick={handleOpenAnnouncement}
                        sx={{
                            padding: '12px 20px',
                            borderRadius: '12px',
                            margin: '4px 12px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateX(8px)'
                            }
                        }}
                    >
                        <Typography
                            variant="body1" sx={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#fff',
                                display: 'flex',
                                justifyContent: 'start',
                                gap: '0.5rem',
                                alignItems: 'center',
                                cursor: 'pointer',
                                width: '100%'
                            }} >
                            Announcement
                            <img
                                alt=''
                                src={new_icon_blink1}
                                style={{
                                    animation: 'pulse 2s infinite'
                                }}
                            />
                        </Typography>
                    </ListItemButton>
                </ListItem> */}
                <ListItem sx={{ padding: '16px 20px' }}>
                    <Button
                        onClick={handleNavigatePlayStore}
                        sx={{
                            color: '#fff',
                            background: 'linear-gradient(135deg, #E8410E 0%, #FF6B35 100%)',
                            boxShadow: '0 4px 15px rgba(232, 65, 14, 0.3)',
                            ':hover': {
                                background: 'linear-gradient(135deg, #D73807 0%, #E8410E 100%)',
                                boxShadow: '0 6px 20px rgba(232, 65, 14, 0.4)',
                                transform: 'translateY(-2px)'
                            },
                            fontWeight: '600',
                            textTransform: 'none',
                            borderRadius: '12px',
                            paddingX: '24px',
                            paddingY: '12px',
                            transition: 'all 0.3s ease',
                            width: '100%',
                            fontSize: '16px'
                        }}
                    >
                        Download APP Now
                    </Button>
                </ListItem>
            </List>
        </Box>
    );

    const handleDownloadPdf = (e, value) => {
        if (value === 'pragyan') {
            handleNavigatePragyan();
        } else if (value === 'apre') {
            handleNavigateAPRE();
        } else if (value === 'aboutUs') {
            handleNavigateAboutUs();
        } else if (value === 'ourTeam') {
            handleNavigateOurTeam();
        }
    };

    useEffect(() => {
        // getInstituteDetail();
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleCloseAnnouncementDialog = () => {
        setOpenAnnouncementDialog(false);
    };
    const handleOpenAnnouncementDialog = () => {
        setOpenAnnouncementDialog(true);
    };

    const handleSelectData = (e, data) => {
        setSelectedData(data);
        handleOpenAnnouncementDialog();
    };

    const handleNavigateAboutUs = () => {
        router.push('/about');
    };
    const handleNavigateOurTeam = () => {
        router.push('/ourTeam');
    };


    return (
        <div style={{
            paddingLeft: isMobile ? '3rem' : '',
            paddingRight: isMobile ? '3rem' : '',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            background: 'linear-gradient(135deg, #1a1f36 0%, #2d3748 100%)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '1565px',
                    margin: '0 auto'
                }}
            >
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    gap={{ md: 0.5, lg: 1.5, xl: 3 }}
                    flexWrap={{ md: 'wrap', lg: 'nowrap' }}
                    width={'100%'}
                >
                    <Typography
                        onClick={handleClickAboutUs}
                        color='#fff'
                        display={'flex'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        gap={0.5}
                        fontSize={{ md: '11px', lg: '13px', xl: '15px' }}
                        sx={{
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            padding: { md: '4px 6px', lg: '6px 10px', xl: '8px 12px' },
                            borderRadius: '8px',
                            whiteSpace: 'nowrap',
                            '&:hover': {
                                color: '#E8410E',
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateY(-2px)'
                            }
                        }}
                    >
                        About Aurous
                        <img
                            alt=''
                            style={{
                                transform: anchorAbout ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                                filter: 'brightness(0) invert(1)',
                                width: '12px',
                                height: '12px'
                            }}
                            src={PolygonDown}
                        />
                    </Typography>
                    <Typography
                        onClick={handleClickScholarship}
                        color='#fff'
                        display={'flex'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        gap={0.5}
                        fontSize={{ md: '11px', lg: '13px', xl: '15px' }}
                        sx={{
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            padding: { md: '4px 6px', lg: '6px 10px', xl: '8px 12px' },
                            borderRadius: '8px',
                            whiteSpace: 'nowrap',
                            '&:hover': {
                                color: '#E8410E',
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateY(-2px)'
                            }
                        }}
                    >
                        Scholarship Exams
                        <img
                            alt=''
                            style={{
                                transform: anchorEScholarship ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                                filter: 'brightness(0) invert(1)',
                                width: '12px',
                                height: '12px'
                            }}
                            src={PolygonDown}
                        />
                    </Typography>
                    <Typography
                        onClick={handleClickOnlineCourse}
                        color='#fff'
                        display={'flex'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        gap={0.5}
                        fontSize={{ md: '11px', lg: '13px', xl: '15px' }}
                        sx={{
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            padding: { md: '4px 6px', lg: '6px 10px', xl: '8px 12px' },
                            borderRadius: '8px',
                            whiteSpace: 'nowrap',
                            '&:hover': {
                                color: '#E8410E',
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateY(-2px)'
                            }
                        }}
                    >
                        Courses
                        <img
                            alt=''
                            style={{
                                transform: anchorElOnlineCourse ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                                filter: 'brightness(0) invert(1)',
                                width: '12px',
                                height: '12px'
                            }}
                            src={PolygonDown}
                        />
                    </Typography>
                    <a href='/result'>
 <Typography
                        onClick={handleNavigateResult}
                        color='#fff'
                        display={'flex'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        gap={0.5}
                        fontSize={{ md: '11px', lg: '13px', xl: '15px' }}
                        sx={{
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            padding: { md: '4px 6px', lg: '6px 10px', xl: '8px 12px' },
                            borderRadius: '8px',
                            whiteSpace: 'nowrap',
                            '&:hover': {
                                color: '#E8410E',
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateY(-2px)'
                            }
                        }}
                    >
                        Result
                    </Typography>
                    </a>
                   
                    <a
                        href="/banner"
                        style={{ textDecoration: "none" }}
                    >
                        <Typography
                            color='#fff'
                            display={'flex'}
                            justifyContent={'start'}
                            alignItems={'center'}
                            gap={0.5}
                            fontSize={{ md: '11px', lg: '13px', xl: '15px' }}
                            sx={{
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                padding: { md: '4px 6px', lg: '6px 10px', xl: '8px 12px' },
                                borderRadius: '8px',
                                whiteSpace: 'nowrap',
                                '&:hover': {
                                    color: '#E8410E',
                                    background: 'rgba(232, 65, 14, 0.1)',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            Gallery
                        </Typography>
                    </a>
                    <Typography
                        onClick={() => router.push('/timetable')}
                        color='#fff'
                        display={'flex'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        gap={0.5}
                        fontSize={{ md: '11px', lg: '13px', xl: '15px' }}
                        sx={{
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            padding: { md: '4px 6px', lg: '6px 10px', xl: '8px 12px' },
                            borderRadius: '8px',
                            whiteSpace: 'nowrap',
                            '&:hover': {
                                color: '#E8410E',
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateY(-2px)'
                            }
                        }}
                    >
                        Timetable
                    </Typography>
                    {/* <Typography
                        onClick={() => router.push('/previousyearpaper')}
                        color='#fff'
                        display={'flex'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        gap={0.5}
                        fontSize={{ md: '11px', lg: '13px', xl: '15px' }}
                        sx={{
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            padding: { md: '4px 6px', lg: '6px 10px', xl: '8px 12px' },
                            borderRadius: '8px',
                            whiteSpace: 'nowrap',
                            '&:hover': {
                                color: '#E8410E',
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateY(-2px)'
                            }
                        }}
                    >
                        Download
                    </Typography> */}
                    {/* <Typography
                        onClick={() => router.push('/freeresources')}
                        color='#fff'
                        display={'flex'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        gap={0.5}
                        fontSize={{ md: '11px', lg: '13px', xl: '15px' }}
                        sx={{
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            padding: { md: '4px 6px', lg: '6px 10px', xl: '8px 12px' },
                            borderRadius: '8px',
                            whiteSpace: 'nowrap',
                            '&:hover': {
                                color: '#E8410E',
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateY(-2px)'
                            }
                        }}
                    >
                        Free Resources
                    </Typography> */}
                    {/* <Typography
                        onClick={() => router.push('/blog')}
                        color='#fff'
                        display={'flex'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        gap={0.5}
                        fontSize={{ md: '11px', lg: '13px', xl: '15px' }}
                        sx={{
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            padding: { md: '4px 6px', lg: '6px 10px', xl: '8px 12px' },
                            borderRadius: '8px',
                            whiteSpace: 'nowrap',
                            '&:hover': {
                                color: '#E8410E',
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateY(-2px)'
                            }
                        }}
                    >
                        Blog
                    </Typography> */}
                    <Typography
                        onClick={handleOpenContactUs}
                        color='#fff'
                        display={'flex'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        gap={0.5}
                        fontSize={{ md: '11px', lg: '13px', xl: '15px' }}
                        sx={{
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            padding: { md: '4px 6px', lg: '6px 10px', xl: '8px 12px' },
                            borderRadius: '8px',
                            whiteSpace: 'nowrap',
                            '&:hover': {
                                color: '#E8410E',
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateY(-2px)'
                            }
                        }}
                    >
                        Contact us
                    </Typography>
                    {/* <Typography
                        onClick={handleOpenAnnouncement}
                        color='#fff'
                        display={'flex'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        gap={0.3}
                        fontSize={{ md: '11px', lg: '13px', xl: '15px' }}
                        sx={{
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            padding: { md: '4px 6px', lg: '6px 10px', xl: '8px 12px' },
                            borderRadius: '8px',
                            whiteSpace: 'nowrap',
                            '&:hover': {
                                color: '#E8410E',
                                background: 'rgba(232, 65, 14, 0.1)',
                                transform: 'translateY(-2px)'
                            }
                        }}
                    >
                        Announcements
                        <img alt='' src={new_icon_blink1} style={{
                            animation: 'pulse 2s infinite',
                            width: '12px',
                            height: '12px'
                        }} />
                    </Typography> */}
                    <Button
                        onClick={handleNavigatePlayStore}
                        sx={{
                            color: '#fff',
                            background: 'linear-gradient(135deg, #E8410E 0%, #FF6B35 100%)',
                            boxShadow: '0 4px 15px rgba(232, 65, 14, 0.3)',
                            ':hover': {
                                background: 'linear-gradient(135deg, #D73807 0%, #E8410E 100%)',
                                boxShadow: '0 6px 20px rgba(232, 65, 14, 0.4)',
                                transform: 'translateY(-2px)'
                            },
                            fontWeight: '600',
                            fontSize: { md: '10px', lg: '12px', xl: '13px' },
                            textTransform: 'none',
                            borderRadius: '12px',
                            paddingX: { md: '10px', lg: '16px', xl: '20px' },
                            paddingY: { md: '4px', lg: '6px', xl: '8px' },
                            transition: 'all 0.3s ease',
                            minWidth: { md: '80px', lg: '100px', xl: '120px' },
                            whiteSpace: 'nowrap',
                            flexShrink: 0
                        }}
                    >
                        Student Login
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    padding: '8px 16px',
                    margin: '0 8px'
                }}
            >
                <Box
                    display={'flex'}
                    justifyContent={'start'}
                    alignItems={'center'}
                >
                    <img
                        alt=''
                        onClick={(e) => handleNavBarClick(e, 'Home')}
                        style={{
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                            filter: 'brightness(1.1)'
                        }}
                        width={'80%'}
                        src={Logo}
                    />
                </Box>
                <Box display={'flex'} justifyContent={'end'} alignItems={'center'} gap={2}>
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        sx={{
                            background: 'linear-gradient(135deg, #E8410E 0%, #FF6B35 100%)',
                            borderRadius: '50%',
                            padding: '12px',
                            boxShadow: '0 4px 15px rgba(232, 65, 14, 0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                boxShadow: '0 6px 20px rgba(232, 65, 14, 0.4)'
                            }
                        }}
                        onClick={() => {
                            window.location.href = 'tel:+919522512624';
                        }}
                    >
                        <CallOutlinedIcon
                            sx={{
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                color: '#fff',
                                fontSize: '20px'
                            }}
                        />
                    </Box>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu2}
                        sx={{
                            color: 'white',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'rgba(255, 255, 255, 0.2)',
                                transform: 'scale(1.05)'
                            }
                        }}
                    >
                        <MenuIcon sx={{ fontSize: '28px' }} />
                    </IconButton>
                </Box>
                <Drawer
                    anchor="right"
                    open={openLeft}
                    onClose={toggleDrawer(false)}
                    PaperProps={{
                        sx: {
                            background: 'linear-gradient(135deg, #1a1f36 0%, #2d3748 100%)',
                            color: '#fff',
                            backdropFilter: 'blur(20px)',
                            borderLeft: '1px solid rgba(255, 255, 255, 0.1)'
                        }
                    }}
                >
                    {DrawerList}
                </Drawer>
            </Box>
            <Menu
                anchorEl={anchorAbout}
                id="account-menu"
                open={openAbout}
                onClose={handleClickCloseAboutUs}
                onClick={handleClickCloseAboutUs}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        minWidth: "220px",
                        overflow: 'visible',
                        background: 'linear-gradient(135deg, #1a1f36 0%, #2d3748 100%)',
                        color: '#fff',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: '#1a1f36',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderBottom: 'none',
                            borderRight: 'none'
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem
                    sx={{
                        fontSize: '14px',
                        fontWeight: "500",
                        padding: '12px 20px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            background: 'rgba(232, 65, 14, 0.1)',
                            color: '#E8410E'
                        }
                    }}
                    onClick={(e) => handleNavigateAboutUs(e)}
                >
                    About Us
                </MenuItem>
                <MenuItem
                    sx={{
                        fontSize: '14px',
                        fontWeight: "500",
                        padding: '12px 20px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            background: 'rgba(232, 65, 14, 0.1)',
                            color: '#E8410E'
                        }
                    }}
                    onClick={(e) => handleNavigateOurTeam(e)}
                >
                    Directors' Message
                </MenuItem>
            </Menu>
            <Menu
                anchorEl={anchorEScholarship}
                id="account-menu"
                open={openSholarship}
                onClose={handleCloseScholarship}
                onClick={handleCloseScholarship}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        minWidth: "220px",
                        overflow: 'visible',
                        background: 'linear-gradient(135deg, #1a1f36 0%, #2d3748 100%)',
                        color: '#fff',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: '#1a1f36',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderBottom: 'none',
                            borderRight: 'none'
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem
                    sx={{
                        fontSize: '14px',
                        fontWeight: "500",
                        padding: '12px 20px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            background: 'rgba(232, 65, 14, 0.1)',
                            color: '#E8410E'
                        }
                    }}
                    onClick={(e) => handleNavigateAPRE(e)}
                >
                    APRE
                </MenuItem>
                <MenuItem
                    sx={{
                        fontSize: '14px',
                        fontWeight: "500",
                        padding: '12px 20px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            background: 'rgba(232, 65, 14, 0.1)',
                            color: '#E8410E'
                        }
                    }}
                    onClick={(e) => handleNavigatePragyan(e)}
                >
                    PRAGYAN
                </MenuItem>
            </Menu>
            <Menu
                anchorEl={anchorElOnlineCourse}
                id="account-menu"
                open={openOnlineCourse}
                onClose={handleCloseOnlineCourse}
                onClick={handleCloseOnlineCourse}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        minWidth: "220px",
                        overflow: 'visible',
                        background: 'linear-gradient(135deg, #1a1f36 0%, #2d3748 100%)',
                        color: '#fff',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: '#1a1f36',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderBottom: 'none',
                            borderRight: 'none'
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem
                    sx={{
                        fontSize: '14px',
                        fontWeight: "500",
                        padding: '12px 20px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            background: 'rgba(232, 65, 14, 0.1)',
                            color: '#E8410E'
                        }
                    }}
                    onClick={() => handleCourseMenu('JEE')}
                >
                    IIT-JEE
                </MenuItem>
                <MenuItem
                    sx={{
                        fontSize: '14px',
                        fontWeight: "500",
                        padding: '12px 20px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            background: 'rgba(232, 65, 14, 0.1)',
                            color: '#E8410E'
                        }
                    }}
                    onClick={() => handleCourseMenu('NEET')}
                >
                    NEET
                </MenuItem>
                <MenuItem
                    sx={{
                        fontSize: '14px',
                        fontWeight: "500",
                        padding: '12px 20px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            background: 'rgba(232, 65, 14, 0.1)',
                            color: '#E8410E'
                        }
                    }}
                    onClick={() => handleCourseMenu('Foundation')}
                >
                    Foundation
                </MenuItem>
                <MenuItem
                    sx={{
                        fontSize: '14px',
                        fontWeight: "500",
                        padding: '12px 20px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            background: 'rgba(232, 65, 14, 0.1)',
                            color: '#E8410E'
                        }
                    }}
                    onClick={handleOnlineCourse}
                >
                    Online Courses
                </MenuItem>
            </Menu>
            <Dialog
                open={openAnnouncement}
                onClose={handleCloseAnnouncement}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "800px",
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, #1a1f36 0%, #2d3748 100%)',
                            color: '#fff',
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                        },
                    },
                }}
            >
                <Grid container>
                    <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }} position={'absolute'} display={'flex'} justifyContent={'end'} sx={{ zIndex: 10 }}>
                        <IconButton
                            sx={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                color: '#fff',
                                margin: '16px',
                                '&:hover': {
                                    background: 'rgba(255, 255, 255, 0.2)'
                                }
                            }}
                        >
                            <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleCloseAnnouncement} />
                        </IconButton>
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }} p={3} position={'relative'}>
                        <Stack direction={'column'} spacing={3}>
                            <Typography
                                fontSize={'28px'}
                                fontWeight={'700'}
                                textAlign={'center'}
                                sx={{
                                    background: 'linear-gradient(135deg, #E8410E 0%, #FF6B35 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    marginBottom: '16px'
                                }}
                            >
                                Announcement List
                            </Typography>
                            {anncouncementData?.map((data, index) => {
                                return (
                                    <Box
                                        key={index}
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        alignItems={'center'}
                                        sx={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '12px',
                                            padding: '16px 20px',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                background: 'rgba(232, 65, 14, 0.1)',
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
                                            }
                                        }}
                                    >
                                        <Typography
                                            onClick={(e) => handleSelectData(e, data)}
                                            fontSize={'18px'}
                                            fontWeight={'600'}
                                            textAlign={'start'}
                                            sx={{
                                                cursor: 'pointer',
                                                color: '#fff',
                                                transition: 'color 0.3s ease',
                                                '&:hover': {
                                                    color: '#E8410E'
                                                }
                                            }}
                                        >
                                            {data?.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: '#ccc',
                                                fontSize: '14px',
                                                fontWeight: '400'
                                            }}
                                        >
                                            {moment(data?.createdAt).format('DD MMMM YYYY')}
                                        </Typography>
                                    </Box>
                                )
                            })}
                        </Stack>
                    </Grid>
                </Grid>
            </Dialog>
            <Dialog
                open={openContactUs}
                onClose={(e) => setOpenContactUs(false)}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            // height: '51vh',
                            maxWidth: "450px",
                            borderRadius: '16px',
                        },
                    },
                }}
            >
                <ContactUs handleClose={(e) => setOpenContactUs(false)} />
            </Dialog>
            <Dialog
                open={openAnnouncementDialog}
                onClose={handleCloseAnnouncementDialog}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            height: '100%',
                            maxWidth: "700px",
                        },
                    },
                }}
            >
                <AnnouncementDialog data={selectedData} handleClose={handleCloseAnnouncementDialog} from={'navbar'} />
            </Dialog>
        </div>
    )
}

export default NavBarTwo



