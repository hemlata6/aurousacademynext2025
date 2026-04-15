import {
    Button, useMediaQuery, Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Grid2,
    Box,
    Typography,
    Container,
    Card,
    CardContent,
    IconButton,
    Chip,
    Fade,
    Skeleton
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Network from "@/lib/Netwrok";
import { BASE_URL } from "@/constant/endpoints";
import ScheduleIcon from '@mui/icons-material/Schedule';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArticleIcon from '@mui/icons-material/Article';
import LaunchIcon from '@mui/icons-material/Launch';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const TimeTableSection1 = () => {

    const instId = 120;
    const isMobile = useMediaQuery("(min-width:600px)");
    const [Endpoints, setEndpoints] = useState('');
    const [coursesList, setCoursesList] = useState([]);
    const [selectedSceduleList, setSelectedSceduleList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        getInstituteDetail();
        getAllCourses();
    }, []);

    useEffect(() => {
        if (coursesList?.length > 0) {
            getMergedSchedules()
        }
    }, [coursesList])

    const getInstituteDetail = async () => {
        try {
            let requestOptions = {
                // headers: { "X-Auth": token },
                withCredentials: false,
            };
            const response = await axios.get(
                BASE_URL + "/getMetaData/fetch-institute/" + instId,
                requestOptions
            );
            if (response?.data?.errorCode === 0) {
                setEndpoints(response?.data?.instituteTechSetting?.mediaUrl)
                // Endpoints = response?.data?.instituteTechSetting?.mediaUrl
            };
        } catch (error) {
            console.log(error);
        }
    };

    const getAllCourses = async () => {
        const response = await Network.fetchCourses(instId);
        const course = response?.courses || [];


        const filteredCourses = course.filter(course =>
            course?.active === true && course?.title === "Timetable" &&
            course?.tags?.some(tagObj => tagObj?.tag?.toLowerCase() === "free")
        );

        setCoursesList(filteredCourses);
    };

    const getMergedSchedules = async () => {
        try {
            setLoading(true);
            let allSchedules = [];

            await Promise.all(
                coursesList.map(async (course) => {
                    const response = await Network.fetchCheduleApi(course.id, 0);
                    if (response?.contentList) {
                        const activeSchedules = response.contentList.filter(item => item.active === true);
                        allSchedules = [...allSchedules, ...activeSchedules];
                    }
                })
            );

            setSelectedSceduleList(allSchedules);
        } catch (error) {
            console.error("Error fetching course schedules:", error);
        } finally {
            setLoading(false);
        }
    };


    const handleCardClick = (item) => {
        if (item?.entityType === "video" && item?.video?.video) {
            window.open(Endpoints + item?.video?.video, "_blank");
        } else if (item?.entityType === "note" && item?.note?.note) {
            window.open(Endpoints + item?.note?.note, "_blank");
        } else {
            console.warn("No valid URL found for this item.");
        }
    };

    const getItemIcon = (entityType) => {
        switch (entityType) {
            case 'video':
                return <PlayCircleOutlineIcon sx={{ color: '#FFD700' }} />;
            case 'note':
                return <ArticleIcon sx={{ color: '#FFD700' }} />;
            default:
                return <ScheduleIcon sx={{ color: '#FFD700' }} />;
        }
    };

    const getItemType = (entityType) => {
        switch (entityType) {
            case 'video':
                return 'Video Class';
            case 'note':
                return 'Study Material';
            default:
                return 'Schedule Item';
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255, 177, 153, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)
                    `,
                    zIndex: 1,
                },
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    py: { xs: 4, md: 8 },
                    px: { xs: 2, md: 6 }
                }}
            >
                {/* Hero Section */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '50px',
                            px: 3,
                            py: 1,
                            mb: 4,
                        }}
                    >
                        <CalendarTodayIcon sx={{ color: '#FFD700', mr: 1 }} />
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#fff',
                                fontWeight: 500,
                                letterSpacing: '0.5px'
                            }}
                        >
                            Class Schedule
                        </Typography>
                    </Box>

                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            mb: 3,
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            lineHeight: 1.2,
                        }}
                    >
                        Timetable
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            maxWidth: '600px',
                            mx: 'auto',
                            lineHeight: 1.6,
                            fontSize: { xs: '1rem', md: '1.25rem' }
                        }}
                    >
                        Stay updated with our ongoing classes and never miss a session
                    </Typography>
                </Box>

                {/* Timetable Cards */}
                {loading ? (
                    <Grid2 container spacing={4}>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                                <Skeleton
                                    variant="rectangular"
                                    sx={{
                                        height: 180,
                                        borderRadius: '20px',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                    }}
                                />
                            </Grid2>
                        ))}
                    </Grid2>
                ) : selectedSceduleList?.length > 0 ? (
                    <Grid2 container spacing={4}>
                        {selectedSceduleList.map((item, index) => (
                            <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                                <Fade in={true} timeout={300 + index * 100}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            borderRadius: '20px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            backdropFilter: 'blur(20px)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                transform: 'translateY(-10px) scale(1.02)',
                                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                                                '& .action-button': {
                                                    transform: 'scale(1.05)',
                                                    boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
                                                }
                                            }
                                        }}
                                        onClick={() => handleCardClick(item)}
                                    >
                                        <CardContent sx={{ p: 4 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                                                <Box
                                                    sx={{
                                                        background: 'rgba(255, 215, 0, 0.2)',
                                                        borderRadius: '12px',
                                                        p: 2,
                                                        mr: 3,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    {getItemIcon(item?.entityType)}
                                                </Box>

                                                <Box sx={{ flexGrow: 1 }}>
                                                    {/* <Chip
                                                        label={getItemType(item?.entityType)}
                                                        sx={{
                                                            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                                            color: '#000',
                                                            fontWeight: 600,
                                                            fontSize: '0.75rem',
                                                            height: 24,
                                                            mb: 2,
                                                        }}
                                                    /> */}

                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            color: '#fff',
                                                            fontWeight: 700,
                                                            mb: 2,
                                                            lineHeight: 1.3,
                                                            display: '-webkit-box',
                                                            WebkitLineClamp: 2,
                                                            WebkitBoxOrient: 'vertical',
                                                            overflow: 'hidden',
                                                        }}
                                                    >
                                                        {item?.title}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            <Button
                                                variant="contained"
                                                className="action-button"
                                                endIcon={<LaunchIcon />}
                                                sx={{
                                                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                                    color: '#000',
                                                    fontWeight: 700,
                                                    borderRadius: '12px',
                                                    px: 3,
                                                    py: 1.5,
                                                    textTransform: 'none',
                                                    fontSize: '1rem',
                                                    width: '100%',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        background: 'linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)',
                                                    }
                                                }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleCardClick(item);
                                                }}
                                            >
                                                View Timetable
                                            </Button>
                                        </CardContent>

                                        {/* Shine Effect */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: '-100%',
                                                width: '100%',
                                                height: '100%',
                                                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                                                transition: 'left 0.6s ease',
                                                borderRadius: '20px',
                                                '.MuiCard-root:hover &': {
                                                    left: '100%',
                                                }
                                            }}
                                        />
                                    </Card>
                                </Fade>
                            </Grid2>
                        ))}
                    </Grid2>
                ) : (
                    // Empty State
                    <Box
                        sx={{
                            textAlign: 'center',
                            py: 12,
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '20px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <ScheduleIcon sx={{ fontSize: 80, color: 'rgba(255, 255, 255, 0.3)', mb: 3 }} />
                        <Typography
                            variant="h4"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontWeight: 600,
                                mb: 2
                            }}
                        >
                            No Classes Scheduled
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.5)',
                                maxWidth: '400px',
                                mx: 'auto'
                            }}
                        >
                            There are no ongoing classes at the moment. Check back soon for updates.
                        </Typography>
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default TimeTableSection1;



