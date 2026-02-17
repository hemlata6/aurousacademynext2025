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
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ContentPreview from './ContentPreview';

const PreviousYearPaperPage = () => {

    const instId = 120;
    const isMobile = useMediaQuery("(min-width:600px)");
    // const [Endpoints, setEndpoints] = useState('');
    const [coursesList, setCoursesList] = useState([]);
    const [selectedSceduleList, setSelectedSceduleList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [navigationStack, setNavigationStack] = useState([]);
    const [originalCourseId, setOriginalCourseId] = useState(null);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewItem, setPreviewItem] = useState(null);
    const [parentName, setParentName] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        setSelectedCourse({ id: 3652, title: 'Previous Year Paper' });
        setOriginalCourseId(3652);
        getMergedSchedules(3652, 0);
    }, []);

    // Auto-select first course when coursesList loads
    useEffect(() => {
        if (coursesList.length > 0 && !selectedCourse) {
            const firstCourse = coursesList[0];
            setSelectedCourse(firstCourse);
            setOriginalCourseId(firstCourse.id);
            setNavigationStack([firstCourse]);
            getMergedSchedules(firstCourse.id, 0);
        }
    }, [coursesList]);

    // const getAllCourses = async () => {
    //     try {
    //         setLoading(true);
    //         const response = await Network.fetchCourses(instId);
    //         const course = response?.courses || [];

    //         const filteredCourses = course.filter(course =>
    //             course?.active === true &&
    //             course?.id === 3652
    //         );
    //         setCoursesList(filteredCourses);
    //     } catch (error) {
    //         console.error("Error fetching courses:", error);
    //         setCoursesList([]);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const getMergedSchedules = async (courseId, parentId = 0) => {
        try {
            setLoading(true);
            const response = await Network.fetchCheduleApi(courseId, parentId);
            setParentName(response?.parentName || '');
            if (response?.contentList) {
                const activeSchedules = response.contentList.filter(item => item.active === true);
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

        // Use original course ID if it's a nested item, otherwise set it as original
        const courseId = originalCourseId || item.id;
        if (!originalCourseId) {
            setOriginalCourseId(item.id);
        }

        // For nested items, pass the current item's ID as parent ID
        const parentId = newStack.length > 0 ? item.id : 0;
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
            // Go back to root content
            setNavigationStack([]);
            setSelectedCourse({ id: 3652, title: 'Previous Year Paper' });
            setOriginalCourseId(3652);
            getMergedSchedules(3652, 0);
        } else {
            // Already at courses list
            setSelectedCourse({ id: 3652, title: 'Previous Year Paper' });
            setOriginalCourseId(3652);
            getMergedSchedules(3652, 0);
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

    const handleDownloadPDF = async (item, e) => {
        if (e) {
            e.stopPropagation();
        }
        try {
            // Get the PDF URL from the item
            const pdfUrl = item?.note?.note || item?.documentUrl || item?.resourceUrl || item?.fileUrl;

            if (!pdfUrl) {
                console.warn('No PDF URL found for item:', item);
                return;
            }

            // Create full URL with media base
            const fullUrl = `${Endpoints.mediaBaseUrl}${pdfUrl}`;

            // Fetch the PDF as a blob
            const response = await fetch(fullUrl);
            const blob = await response.blob();

            // Create blob URL and trigger download
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = item?.title ? `${item.title}.pdf` : 'document.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Clean up the blob URL
            window.URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

    const handleOpenPreview = (item, e) => {
        // console.log('item', item);
        if (e) {
            e.stopPropagation();
        }

        // For blogs, open in new tab with URL parameters
        if (item?.entityType === 'blog') {
            const params = new URLSearchParams({
                courseId: selectedCourse?.parentCourseId || originalCourseId,
                parentId: selectedCourse?.id || 0,
                blogName: item.title
            });
            window.open(`/blog?${params.toString()}`, '_blank');
        } else {
            // For other content types, show preview dialog
            setPreviewItem(item);
            setPreviewOpen(true);
        }
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
                        Previous Year Paper
                    </Typography>
                </Box>

                {/* Display Schedules or Courses */}
                {selectedCourse ? (
                    <>
                        {
                            parentName !== 'previous year paper' && (
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
                                        {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
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
                            </Box> */}
                                    </Box>
                                </>
                            )
                        }


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
                                {selectedSceduleList.map((item, index) => {
                                    const isNote = item?.entityType === 'note';
                                    const hasMedia = Boolean(item?.thumb || item?.logo);

                                    if (isNote) {
                                        return (
                                            <Grid2 size={{ xs: 12 }} key={index} sx={{ mt: 0.5, maxWidth: { xs: '100%', md: '50%' }, display: 'flex', justifyContent: 'center' }}>
                                                <Fade in={true} timeout={300 + index * 100}>
                                                    <Card
                                                        sx={{
                                                            // height: '46px',
                                                            width: '100%',
                                                            maxWidth: '100%',
                                                            borderRadius: '999px',
                                                            background: '#ffffff',
                                                            border: '1px solid rgba(0, 0, 0, 0.08)',
                                                            boxShadow: '0 10px 24px rgba(0, 0, 0, 0.15)',
                                                            transition: 'all 0.4s ease',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            padding: "5px",
                                                            '&:hover': {
                                                                transform: 'translateY(-4px)',
                                                                boxShadow: '0 16px 30px rgba(0, 0, 0, 0.18)',
                                                            }
                                                        }}
                                                        onClick={(e) => handleOpenPreview(item, e)}
                                                    >
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                            <Box
                                                                sx={{
                                                                    width: 26,
                                                                    height: 26,
                                                                    borderRadius: '999px',
                                                                    background: 'rgba(0, 0, 0, 0.06)',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                }}
                                                            >
                                                                <PictureAsPdfIcon sx={{ color: '#111', fontSize: 15 }} />
                                                            </Box>
                                                            <Typography
                                                                sx={{
                                                                    color: '#111',
                                                                    fontWeight: 700,
                                                                    fontSize: '0.85rem',
                                                                    lineHeight: 1.2,
                                                                    display: '-webkit-box',
                                                                    WebkitLineClamp: 1,
                                                                    WebkitBoxOrient: 'vertical',
                                                                    overflow: 'hidden',
                                                                }}
                                                            >
                                                                {item?.title}
                                                            </Typography>
                                                        </Box>
                                                        <IconButton
                                                            sx={{
                                                                width: 28,
                                                                height: 28,
                                                                background: '#111',
                                                                color: '#fff',
                                                                '&:hover': {
                                                                    background: '#000',
                                                                },
                                                            }}
                                                            onClick={(e) => handleDownloadPDF(item, e)}
                                                        >
                                                            <FileDownloadOutlinedIcon sx={{ fontSize: 16 }} />
                                                        </IconButton>
                                                    </Card>
                                                </Fade>
                                            </Grid2>
                                        );
                                    }

                                    return (
                                        <Grid2 size={{ xs: 12, md: 6, lg: 3 }} key={index}>
                                            <Fade in={true} timeout={300 + index * 100}>
                                                <Card
                                                    sx={{
                                                        height: '180px',
                                                        width: '90%',
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
                                                            transform: 'translateY(-10px)',
                                                            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.35)',
                                                            '& .card-media': {
                                                                transform: 'scale(1.05)'
                                                            }
                                                        }
                                                    }}
                                                    onClick={(e) => {
                                                        // Navigate for folders; open preview for media/content types
                                                        if (['video', 'audio', 'blog', 'note', 'quiz'].includes(item?.entityType)) {
                                                            handleOpenPreview(item, e);
                                                        } else {
                                                            handleCardClick(item);
                                                        }
                                                    }}
                                                >
                                                    {hasMedia ? (
                                                        <Box
                                                            className="card-media"
                                                            sx={{
                                                                position: 'relative',
                                                                width: '100%',
                                                                height: '100%',
                                                                overflow: 'hidden',
                                                                borderRadius: '18px'
                                                            }}
                                                        >
                                                            <img
                                                                src={`${Endpoints.mediaBaseUrl + (item?.thumb || item?.logo)}`}
                                                                alt="Item thumbnail"
                                                                style={{
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    objectFit: 'cover',
                                                                    objectPosition: 'center',
                                                                    display: 'block',
                                                                    transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.320, 1)',
                                                                }}
                                                            />
                                                            <Box
                                                                sx={{
                                                                    position: 'absolute',
                                                                    top: 0,
                                                                    left: 0,
                                                                    right: 0,
                                                                    bottom: 0,
                                                                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
                                                                }}
                                                            />
                                                        </Box>
                                                    ) : (
                                                        <Box
                                                            className="card-media"
                                                            sx={{
                                                                width: '100%',
                                                                height: '100%',
                                                                background: 'rgba(255, 255, 255, 0.08)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                borderRadius: '18px'
                                                            }}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    width: 52,
                                                                    height: 52,
                                                                    background: 'rgba(255, 215, 0, 0.2)',
                                                                    borderRadius: '14px',
                                                                }}
                                                            >
                                                                {getItemIcon(item?.entityType)}
                                                            </Box>
                                                        </Box>
                                                    )}

                                                    <Box
                                                        sx={{
                                                            position: 'absolute',
                                                            left: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            px: 2,
                                                            py: 1.5,
                                                            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
                                                        }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                color: '#fff',
                                                                fontWeight: 700,
                                                                fontSize: '0.9rem',
                                                                lineHeight: 1.2,
                                                                display: '-webkit-box',
                                                                WebkitLineClamp: 2,
                                                                WebkitBoxOrient: 'vertical',
                                                                overflow: 'hidden',
                                                            }}
                                                        >
                                                            {item?.title}
                                                        </Typography>
                                                    </Box>

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
                                                            borderRadius: '18px',
                                                            pointerEvents: 'none',
                                                        }}
                                                    />
                                                </Card>
                                            </Fade>
                                        </Grid2>
                                    );
                                })}
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
                                                        <img
                                                            className="course-image"
                                                            src={`${Endpoints.mediaBaseUrl + item?.logo}`}
                                                            alt="Course logo"
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit: 'cover',
                                                                objectPosition: 'center',
                                                                display: 'block',
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

            {/* Content Preview Dialog */}
            <ContentPreview
                open={previewOpen}
                onClose={() => setPreviewOpen(false)}
                item={previewItem}
            />
        </Box>
    );
};

export default PreviousYearPaperPage;



