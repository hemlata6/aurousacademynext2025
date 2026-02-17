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
import { useRouter } from "next/navigation";
import axios from "axios";
import Network from '@/lib/Netwrok';
import { BASE_URL } from '@/constant/endpoints';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArticleIcon from '@mui/icons-material/Article';
import LaunchIcon from '@mui/icons-material/Launch';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Endpoints from '@/constant/endpoints';
import FolderIcon from '@mui/icons-material/Folder';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const BlogSection1 = () => {
    const router = useRouter();
    const instId = 120;
    const isMobile = useMediaQuery("(min-width:600px)");
    // const [Endpoints, setEndpoints] = useState('');
    const [coursesList, setCoursesList] = useState([]);
    const [selectedSceduleList, setSelectedSceduleList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [navigationStack, setNavigationStack] = useState([]);
    const [originalCourseId, setOriginalCourseId] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        // getInstituteDetail();
        getAllCourses();
    }, []);

    const getAllCourses = async () => {
        try {
            setLoading(true);
            const response = await Network.fetchCourses(instId);
            const courses = response?.courses || [];

            const filteredCourses = courses.filter(course =>
                course?.active === true &&
                course?.tags?.some(tagObj => tagObj?.tag?.toLowerCase() === "free")
            );

            // Fetch folders from each course
            const allFolders = [];
            for (const course of filteredCourses) {
                try {
                    const childResponse = await Network.fetchCheduleApi(course.id, 0);
                    if (childResponse?.contentList) {
                        const folders = childResponse.contentList.filter(
                            item => item.active === true && item?.entityType === 'folder'
                        );
                        // Store the parent course ID with each folder
                        folders.forEach(folder => {
                            folder.parentCourseId = course.id;
                        });
                        allFolders.push(...folders);
                    }
                } catch (error) {
                    console.error(`Error fetching children for course ${course.id}:`, error);
                }
            }

            setCoursesList(allFolders);
        } catch (error) {
            console.error("Error fetching courses:", error);
            setCoursesList([]);
        } finally {
            setLoading(false);
        }
    };

    const getMergedSchedules = async (courseId, parentId = 0) => {
        try {
            setLoading(true);
            const response = await Network.fetchCheduleApi(courseId, parentId);
            if (response?.contentList) {
                const activeSchedules = response.contentList.filter(item => item.active === true && (item.entityType === 'folder' || item.entityType === 'blog'));
                setSelectedSceduleList(activeSchedules);
            } else {
                setSelectedSceduleList([]);
            }
        } catch (error) {
            console.error("Error fetching course schedules:", error);
            setSelectedSceduleList([]);
        } finally {
            setLoading(false);
        }
    };


    const handleCardClick = (item) => {
        // Add current item to navigation stack
        const newStack = [...navigationStack, item];
        setNavigationStack(newStack);
        setSelectedCourse(item);

        // For root level folders, use parentCourseId as courseId, otherwise use original course ID
        const courseId = originalCourseId || item.parentCourseId;
        if (!originalCourseId) {
            setOriginalCourseId(item.parentCourseId);
        }

        // Always use the current item's ID as parent ID for fetching its children
        const parentId = item.id;
        getMergedSchedules(courseId, parentId);
    };

    const handleBackClick = () => {
        if (navigationStack.length > 1) {
            // Go back to previous item in stack
            const previousStack = navigationStack.slice(0, -1);
            setNavigationStack(previousStack);
            const previousItem = previousStack[previousStack.length - 1];
            setSelectedCourse(previousItem);

            // Calculate the parent ID for the previous item
            const parentId = previousStack.length > 1 ? previousItem.id : 0;
            getMergedSchedules(originalCourseId, parentId);
        } else if (navigationStack.length === 1) {
            // Go back to courses list
            setNavigationStack([]);
            setSelectedCourse(null);
            setSelectedSceduleList([]);
            setOriginalCourseId(null);
        } else {
            // Already at courses list
            setSelectedCourse(null);
            setSelectedSceduleList([]);
            setOriginalCourseId(null);
        }
    };

    const handleNavigateToItem = (item) => {
        // Navigate to a specific item in the breadcrumb
        const itemIndex = navigationStack.findIndex(nav => nav.id === item.id);
        if (itemIndex !== -1) {
            const newStack = navigationStack.slice(0, itemIndex + 1);
            setNavigationStack(newStack);
            setSelectedCourse(item);

            // Calculate the parent ID for navigation
            const parentId = newStack.length > 1 ? item.id : 0;
            getMergedSchedules(originalCourseId, parentId);
        }
    };

    const slugify = (str) => {
        if (!str) return '';
        return str.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');
    };

    const handleOpenPreview = (item, e) => {
        if (e) {
            e.stopPropagation();
        }
        // Navigate to blog details page with route parameters
        const cid = item.id;
        const titleSlug = slugify(item.title || '');
        router.push(`/blog/${cid}/${titleSlug}`);
    };

    const getItemIcon = (entityType) => {
        switch (entityType) {
            case 'video':
                return <PlayCircleOutlineIcon sx={{ color: '#FFD700' }} />;
            case 'note':
                return <PictureAsPdfIcon sx={{ color: '#FFD700' }} />;
            case 'blog':
                return <ArticleIcon sx={{ color: '#FFD700' }} />;
            case 'audio':
                return <AudiotrackIcon sx={{ color: '#FFD700' }} />;
            case 'folder':
                return <FolderIcon sx={{ color: '#FFD700' }} />;
            case 'quiz':
                return <FolderIcon sx={{ color: '#FFD700' }} />;
            default:
                return <ScheduleIcon sx={{ color: '#FFD700' }} />;
        }
    };

    const getItemType = (entityType) => {
        switch (entityType) {
            case 'video':
                return 'Video';
            case 'note':
                return 'Notes';
            case 'blog':
                return 'Blog';
            case 'audio':
                return 'Audio';
            case 'folder':
                return 'Folder';
            case 'quiz':
                return 'Quiz';
            default:
                return 'Resource';
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
                    {/* <Box
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
                    </Box> */}

                    <Typography
                        variant="h2"
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
                        Blog
                    </Typography>

                    {/* <Typography
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
                    </Typography> */}
                </Box>

                {/* Display Schedules or Courses */}
                {selectedCourse ? (
                    <>
                        {/* Back Button and Breadcrumb Navigation */}
                        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                            <Button
                                variant="contained"
                                onClick={handleBackClick}
                                sx={{
                                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                    color: '#000',
                                    fontWeight: 700,
                                    borderRadius: '12px',
                                    px: 3,
                                    py: 1.5,
                                    textTransform: 'none',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)',
                                    }
                                }}
                            >
                                 Back
                            </Button>

                            {/* Breadcrumb Navigation */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                                <Button
                                    variant="text"
                                    onClick={() => {
                                        setNavigationStack([]);
                                        setSelectedCourse(null);
                                        setSelectedSceduleList([]);
                                    }}
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        '&:hover': {
                                            color: '#fff',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                        }
                                    }}
                                >
                                    Courses
                                </Button>

                                {navigationStack.map((item, index) => (
                                    <React.Fragment key={item.id}>
                                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>/</Typography>
                                        <Button
                                            variant="text"
                                            onClick={() => handleNavigateToItem(item)}
                                            sx={{
                                                color: index === navigationStack.length - 1 ? '#fff' : 'rgba(255, 255, 255, 0.8)',
                                                fontWeight: index === navigationStack.length - 1 ? 700 : 400,
                                                textTransform: 'none',
                                                fontSize: '1rem',
                                                '&:hover': {
                                                    color: '#fff',
                                                    background: 'rgba(255, 255, 255, 0.1)',
                                                }
                                            }}
                                        >
                                            {item?.title}
                                        </Button>
                                    </React.Fragment>
                                ))}
                            </Box>
                        </Box>

                        {/* Schedule Items */}
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
                                                    width: '100%',
                                                    maxWidth: '400px',
                                                    borderRadius: '18px',
                                                    background: 'rgba(255, 255, 255, 0.08)',
                                                    backdropFilter: 'blur(25px)',
                                                    border: '1px solid rgba(255, 255, 255, 0.15)',
                                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                                                    transition: 'all 0.5s cubic-bezier(0.23, 1, 0.320, 1)',
                                                    cursor: 'pointer',
                                                    position: 'relative',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    overflow: 'hidden',
                                                    '&:hover': {
                                                        transform: 'translateY(-15px)',
                                                        boxShadow: '0 25px 50px rgba(255, 215, 0, 0.12), 0 0 25px rgba(255, 215, 0, 0.08)',
                                                        background: 'rgba(255, 255, 255, 0.12)',
                                                        border: '1px solid rgba(255, 215, 0, 0.2)',
                                                        '& .action-button': {
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 10px 25px rgba(255, 215, 0, 0.3)',
                                                        },
                                                        '& .item-thumbnail': {
                                                            transform: 'scale(1.1) rotate(1deg)',
                                                        },
                                                        '& .shine-overlay': {
                                                            left: '100%',
                                                        }
                                                    }
                                                }}
                                                onClick={() => {
                                                    // Only navigate if not a media/content type
                                                    if (!['video', 'audio', 'blog', 'note', 'quiz'].includes(item?.entityType)) {
                                                        handleCardClick(item);
                                                    }
                                                }}
                                            >
                                                {/* Item Thumbnail */}
                                                {item?.thumb ? (
                                                    <Box
                                                        sx={{
                                                            position: 'relative',
                                                            width: '100%',
                                                            maxWidth: '400px',
                                                            height: '200px',
                                                            overflow: 'hidden',
                                                            borderRadius: '18px 18px 0 0'
                                                        }}
                                                    >
                                                        <Box
                                                            className="item-thumb"
                                                            sx={{
                                                                width: '100%',
                                                                height: '100%',
                                                                backgroundImage: `url(${Endpoints.mediaBaseUrl + item?.thumb})`,
                                                                backgroundSize: 'cover',
                                                                backgroundPosition: 'center',
                                                                transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.320, 1)',
                                                            }}
                                                        />
                                                        {/* Gradient Overlay */}
                                                        <Box
                                                            sx={{
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: 0,
                                                                right: 0,
                                                                bottom: 0,
                                                                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(102,126,234,0.3) 100%)',
                                                            }}
                                                        />
                                                        {/* Play/Icon Overlay for Videos and Media */}
                                                        {(item?.entityType === 'video' || item?.entityType === 'audio') && (
                                                            <Box
                                                                sx={{
                                                                    position: 'absolute',
                                                                    top: '50%',
                                                                    left: '50%',
                                                                    transform: 'translate(-50%, -50%)',
                                                                    background: 'rgba(255, 215, 0, 0.9)',
                                                                    borderRadius: '50%',
                                                                    p: 1.5,
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    backdropFilter: 'blur(5px)',
                                                                }}
                                                            >
                                                                {item?.entityType === 'video' ?
                                                                    <PlayCircleIcon sx={{ color: '#000', fontSize: 32 }} /> :
                                                                    <AudiotrackIcon sx={{ color: '#000', fontSize: 32 }} />
                                                                }
                                                            </Box>
                                                        )}
                                                    </Box>
                                                ) : (
                                                    <Box
                                                        sx={{
                                                            width: '100%',
                                                            height: '160px',
                                                            background: `linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 165, 0, 0.1) 100%)`,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderRadius: '18px 18px 0 0'
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                width: '60px',
                                                                height: '60px',
                                                                background: 'rgba(255, 215, 0, 0.2)',
                                                                borderRadius: '16px',
                                                            }}
                                                        >
                                                            {getItemIcon(item?.entityType)}
                                                        </Box>
                                                    </Box>
                                                )}

                                                <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                    <Box>
                                                        <Typography
                                                            variant="h6"
                                                            sx={{
                                                                color: '#fff',
                                                                fontWeight: 800,
                                                                mb: 1,
                                                                lineHeight: 1.4,
                                                                display: '-webkit-box',
                                                                WebkitLineClamp: 2,
                                                                WebkitBoxOrient: 'vertical',
                                                                overflow: 'hidden',
                                                                fontSize: '0.95rem',
                                                                letterSpacing: '0.2px',
                                                            }}
                                                        >
                                                            {item?.title}
                                                        </Typography>

                                                        {/* Content Type Badge */}
                                                        <Box sx={{ display: 'flex', gap: 1, mt: 2, flexWrap: 'wrap' }}>
                                                            <Chip
                                                                icon={getItemIcon(item?.entityType)}
                                                                label={getItemType(item?.entityType)}
                                                                size="small"
                                                                sx={{
                                                                    background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.25) 0%, rgba(255, 165, 0, 0.15) 100%)',
                                                                    color: '#FFD700',
                                                                    fontWeight: 700,
                                                                    fontSize: '0.7rem',
                                                                    border: '1px solid rgba(255, 215, 0, 0.3)',
                                                                    height: '24px',
                                                                    '& .MuiChip-icon': {
                                                                        fontSize: '0.85rem',
                                                                    }
                                                                }}
                                                            />

                                                            {/* Show badge if item has children */}
                                                            {item?.children?.length > 0 && (
                                                                <Chip
                                                                    label={`${item.children.length} ${item.children.length === 1 ? 'item' : 'items'}`}
                                                                    size="small"
                                                                    sx={{
                                                                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)',
                                                                        color: '#fff',
                                                                        fontWeight: 700,
                                                                        fontSize: '0.7rem',
                                                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                                                        height: '24px',
                                                                    }}
                                                                />
                                                            )}
                                                        </Box>
                                                    </Box>

                                                    <Button
                                                        variant="contained"
                                                        className="action-button"
                                                        sx={{
                                                            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                                            color: '#000',
                                                            fontWeight: 800,
                                                            borderRadius: '12px',
                                                            px: 3,
                                                            py: 1.3,
                                                            textTransform: 'uppercase',
                                                            fontSize: '0.8rem',
                                                            letterSpacing: '0.7px',
                                                            width: '100%',
                                                            mt: 2,
                                                            transition: 'all 0.4s ease',
                                                            boxShadow: '0 8px 20px rgba(255, 215, 0, 0.2)',
                                                            '&:hover': {
                                                                background: 'linear-gradient(135deg, #FFB700 0%, #FF9500 100%)',
                                                                boxShadow: '0 12px 30px rgba(255, 215, 0, 0.4)',
                                                            }
                                                        }}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            if (item?.entityType === 'folder') {
                                                                handleCardClick(item);
                                                            } else {
                                                                handleOpenPreview(item, e);
                                                            }
                                                        }}
                                                    >
                                                        {item?.entityType === 'folder' ? 'Explore' : 'Preview'}
                                                    </Button>
                                                </CardContent>

                                                {/* Shine Effect */}
                                                <Box
                                                    className="shine-overlay"
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: '-100%',
                                                        width: '100%',
                                                        height: '100%',
                                                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent)',
                                                        transition: 'left 0.7s ease',
                                                        borderRadius: '18px',
                                                        pointerEvents: 'none',
                                                    }}
                                                />
                                            </Card>
                                        </Fade>
                                    </Grid2>
                                ))}
                            </Grid2>
                        ) : (
                            // Empty State for schedules
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
                                    No Resources Available
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.5)',
                                        maxWidth: '400px',
                                        mx: 'auto'
                                    }}
                                >
                                    There are no resources for this course at the moment.
                                </Typography>
                            </Box>
                        )}
                    </>
                ) : (
                    <>
                        {/* Courses Cards */}
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
                        ) : coursesList?.length > 0 ? (
                            <Grid2 container spacing={4}>
                                {coursesList.map((item, index) => (
                                    <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                                        <Fade in={true} timeout={300 + index * 100}>
                                            <Card
                                                sx={{
                                                    height: '100%',
                                                    borderRadius: '20px',
                                                    background: 'rgba(255, 255, 255, 0.08)',
                                                    backdropFilter: 'blur(25px)',
                                                    border: '1px solid rgba(255, 255, 255, 0.15)',
                                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                                                    transition: 'all 0.5s cubic-bezier(0.23, 1, 0.320, 1)',
                                                    cursor: 'pointer',
                                                    position: 'relative',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    '&:hover': {
                                                        transform: 'translateY(-20px)',
                                                        boxShadow: '0 30px 60px rgba(255, 215, 0, 0.15), 0 0 30px rgba(255, 215, 0, 0.1)',
                                                        background: 'rgba(255, 255, 255, 0.12)',
                                                        border: '1px solid rgba(255, 255, 255, 0.25)',
                                                        '& .action-button': {
                                                            transform: 'translateY(-3px) scale(1.02)',
                                                            boxShadow: '0 12px 30px rgba(255, 215, 0, 0.3)',
                                                        },
                                                        '& .course-image': {
                                                            transform: 'scale(1.15) rotate(1deg)',
                                                        },
                                                        '& .shine-overlay': {
                                                            left: '100%',
                                                        }
                                                    }
                                                }}
                                                onClick={() => handleCardClick(item)}
                                            >
                                                {/* Course Image with Overlay */}
                                                {item?.logo && (
                                                    <Box
                                                        sx={{
                                                            position: 'relative',
                                                            width: '100%',
                                                            height: '220px',
                                                            overflow: 'hidden',
                                                            borderRadius: '20px 20px 0 0'
                                                        }}
                                                    >
                                                        <Box
                                                            className="course-image"
                                                            sx={{
                                                                width: '100%',
                                                                height: '100%',
                                                                backgroundImage: `url(${Endpoints.mediaBaseUrl + item?.logo})`,
                                                                backgroundSize: 'cover',
                                                                backgroundPosition: 'center',
                                                                transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.320, 1)',
                                                            }}
                                                        />
                                                        {/* Gradient Overlay */}
                                                        <Box
                                                            sx={{
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: 0,
                                                                right: 0,
                                                                bottom: 0,
                                                                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(102,126,234,0.4) 100%)',
                                                            }}
                                                        />
                                                    </Box>
                                                )}

                                                <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                    <Box>
                                                        <Typography
                                                            variant="h6"
                                                            sx={{
                                                                color: '#fff',
                                                                fontWeight: 800,
                                                                mb: 2,
                                                                lineHeight: 1.4,
                                                                display: '-webkit-box',
                                                                WebkitLineClamp: 2,
                                                                WebkitBoxOrient: 'vertical',
                                                                overflow: 'hidden',
                                                                fontSize: '1.1rem',
                                                                letterSpacing: '0.3px',
                                                            }}
                                                        >
                                                            {item?.title}
                                                        </Typography>
                                                    </Box>

                                                    <Button
                                                        variant="contained"
                                                        className="action-button"
                                                        sx={{
                                                            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                                            color: '#000',
                                                            fontWeight: 800,
                                                            borderRadius: '12px',
                                                            px: 3,
                                                            py: 1.8,
                                                            textTransform: 'uppercase',
                                                            fontSize: '0.9rem',
                                                            letterSpacing: '1px',
                                                            width: '100%',
                                                            transition: 'all 0.4s ease',
                                                            boxShadow: '0 8px 20px rgba(255, 215, 0, 0.2)',
                                                            '&:hover': {
                                                                background: 'linear-gradient(135deg, #FFB700 0%, #FF9500 100%)',
                                                                boxShadow: '0 12px 30px rgba(255, 215, 0, 0.4)',
                                                            }
                                                        }}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleCardClick(item);
                                                        }}
                                                    >
                                                        Explore Now
                                                    </Button>
                                                </CardContent>

                                                {/* Shine Effect */}
                                                <Box
                                                    className="shine-overlay"
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: '-100%',
                                                        width: '100%',
                                                        height: '100%',
                                                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)',
                                                        transition: 'left 0.7s ease',
                                                        borderRadius: '20px',
                                                        pointerEvents: 'none',
                                                    }}
                                                />
                                            </Card>
                                        </Fade>
                                    </Grid2>
                                ))}
                            </Grid2>
                        ) : (
                            // Empty State for courses
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
                                    No Free Courses Available
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.5)',
                                        maxWidth: '400px',
                                        mx: 'auto'
                                    }}
                                >
                                    There are no free courses available at the moment. Check back soon for updates.
                                </Typography>
                            </Box>
                        )}
                    </>
                )}
            </Container>


        </Box>
    );
};

export default BlogSection1;



