import {
    Button, useMediaQuery, Grid2, Box, Typography, Container, Card, CardContent, IconButton, Chip, Fade, Skeleton
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Network from '@/lib/Netwrok';
import { BASE_URL } from '@/constant/endpoints';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArticleIcon from '@mui/icons-material/Article';
import Endpoints from '@/constant/endpoints';
import FolderIcon from '@mui/icons-material/Folder';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ContentPreview from '../FreeResourcesSection/ContentPreview';
import ImageIcon from '@mui/icons-material/Image';
import CloseIcon from '@mui/icons-material/Close';
import TrophyIcon from '@mui/icons-material/EmojiEvents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import instId from "@/constant/instId";

const ResultSection2 = () => {

    // const instId = 120;
    const isMobile = useMediaQuery("(min-width:600px)");
    const [coursesList, setCoursesList] = useState([]);
    const [selectedSceduleList, setSelectedSceduleList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [navigationStack, setNavigationStack] = useState([]);
    const [originalCourseId, setOriginalCourseId] = useState(null);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewItem, setPreviewItem] = useState(null);
    const [imagePreviewOpen, setImagePreviewOpen] = useState(false);
    const [imagePreviewSrc, setImagePreviewSrc] = useState(null);
    const [imagePreviewList, setImagePreviewList] = useState([]);
    const [imagePreviewIndex, setImagePreviewIndex] = useState(0);
    const [parentName, setParentName] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        getAllCourses();
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

    const getAllCourses = async () => {
        try {
            setLoading(true);
            const response = await Network.fetchCourses(instId.instId);
            const course = response?.courses || [];

            const filteredCourses = course.filter(course =>
                course?.active === true &&
                course?.id === 3661  // Result course ID
            );
            setCoursesList(filteredCourses);
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
        const newStack = [...navigationStack, item];
        setNavigationStack(newStack);
        setSelectedCourse(item);

        const courseId = originalCourseId || item.id;
        if (!originalCourseId) {
            setOriginalCourseId(item.id);
        }

        const parentId = navigationStack.length > 0 ? item.id : 0;
        getMergedSchedules(courseId, parentId);
    };

    const handleBackClick = () => {
        if (navigationStack.length > 1) {
            const previousStack = navigationStack.slice(0, -1);
            setNavigationStack(previousStack);
            const previousItem = previousStack[previousStack.length - 1];
            setSelectedCourse(previousItem);

            const parentId = previousStack.length > 1 ? previousItem.id : 0;
            getMergedSchedules(originalCourseId, parentId);
        } else if (navigationStack.length === 1) {
            setNavigationStack([]);
            setSelectedCourse(null);
            setSelectedSceduleList([]);
            setOriginalCourseId(null);
        } else {
            setSelectedCourse(null);
            setSelectedSceduleList([]);
            setOriginalCourseId(null);
        }
    };

    const handleNavigateToItem = (item) => {
        const itemIndex = navigationStack.findIndex(nav => nav.id === item.id);
        if (itemIndex !== -1) {
            const newStack = navigationStack.slice(0, itemIndex + 1);
            setNavigationStack(newStack);
            setSelectedCourse(item);

            const parentId = newStack.length > 1 ? item.id : 0;
            getMergedSchedules(originalCourseId, parentId);
        }
    };

    const handleOpenPreview = (item, e) => {
        if (e) {
            e.stopPropagation();
        }

        if (item?.entityType === 'image') {
            const imageUrl = item?.thumb || item?.image || item?.url;
            if (imageUrl) {
                const images = (selectedSceduleList || [])
                    .filter((listItem) => listItem?.entityType === 'image')
                    .map((listItem) => {
                        const rawUrl = listItem?.thumb || listItem?.image || listItem?.url;
                        if (!rawUrl) return null;
                        return rawUrl.startsWith('http') ? rawUrl : Endpoints.mediaBaseUrl + rawUrl;
                    })
                    .filter(Boolean);

                const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : Endpoints.mediaBaseUrl + imageUrl;
                const startIndex = Math.max(0, images.indexOf(fullImageUrl));

                setImagePreviewList(images);
                setImagePreviewIndex(startIndex);
                setImagePreviewSrc(fullImageUrl);
                setImagePreviewOpen(true);
            }
            return;
        }

        if (item?.entityType === 'blog') {
            const params = new URLSearchParams({
                courseId: selectedCourse?.parentCourseId || originalCourseId,
                parentId: selectedCourse?.id || 0,
                blogName: item.title
            });
            window.open(`/blog?${params.toString()}`, '_blank');
        } else {
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
            case 'image':
                return <ImageIcon sx={{ color: '#FFD700' }} />;
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
            case 'image':
                return 'Image';
            default:
                return 'Resource';
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f0f0f 100%)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 20% 80%, rgba(255, 202, 8, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 165, 0, 0.08) 0%, transparent 50%)',
                    pointerEvents: 'none',
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
                            background: 'rgba(255, 215, 0, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 215, 0, 0.3)',
                            borderRadius: '50px',
                            px: 3,
                            py: 1,
                            mb: 4,
                        }}
                    >
                        <TrophyIcon sx={{ color: '#FFD700', mr: 1 }} />
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#FFD700',
                                fontWeight: 600,
                                letterSpacing: '0.5px'
                            }}
                        >
                            Celebrate Excellence
                        </Typography>
                    </Box>

                    <Typography
                        variant="h1"
                        sx={{
                            background: 'linear-gradient(45deg, #FFD700, #FFA500, #FF8C00)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 700,
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            mb: 3,
                            textShadow: '0 0 30px rgba(255, 215, 0, 0.3)',
                        }}
                    >
                        Academic Results
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
                        Explore our comprehensive collection of exam results and academic achievements
                    </Typography>
                </Box>

                {/* Display Schedules or Courses */}
                {selectedCourse ? (
                    <>
                        {
                            parentName !== 'result' && (
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
                                                    boxShadow: '0 8px 20px rgba(255, 215, 0, 0.4)',
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
                                        color: 'rgba(255, 215, 0, 0.8)',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        '&:hover': {
                                            color: '#FFD700',
                                            background: 'rgba(255, 215, 0, 0.1)',
                                        }
                                    }}
                                >
                                    Results
                                </Button>

                                {navigationStack.map((item, index) => (
                                    <React.Fragment key={item.id}>
                                        <Typography sx={{ color: 'rgba(255, 215, 0, 0.6)' }}>/</Typography>
                                        <Button
                                            variant="text"
                                            onClick={() => handleNavigateToItem(item)}
                                            sx={{
                                                color: index === navigationStack.length - 1 ? '#FFD700' : 'rgba(255, 215, 0, 0.8)',
                                                fontWeight: index === navigationStack.length - 1 ? 700 : 400,
                                                textTransform: 'none',
                                                fontSize: '1rem',
                                                '&:hover': {
                                                    color: '#FFD700',
                                                    background: 'rgba(255, 215, 0, 0.1)',
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
                            <Grid2 container spacing={3}>
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                                        <Skeleton
                                            variant="rectangular"
                                            sx={{
                                                height: 200,
                                                borderRadius: '20px',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                            }}
                                        />
                                    </Grid2>
                                ))}
                            </Grid2>
                        ) : selectedSceduleList?.length > 0 ? (
                            <Grid2 container spacing={3}>
                                {selectedSceduleList.map((item, index) => (
                                    <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                                        <Fade in={true} timeout={300 + index * 100}>
                                            <Card
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '20px',
                                                    background: 'rgba(255, 255, 255, 0.05)',
                                                    backdropFilter: 'blur(25px)',
                                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    cursor: 'pointer',
                                                    position: 'relative',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    overflow: 'hidden',
                                                    '&:hover': {
                                                        transform: 'translateY(-12px)',
                                                        boxShadow: '0 25px 50px rgba(255, 215, 0, 0.15), 0 0 25px rgba(255, 215, 0, 0.1)',
                                                        background: 'rgba(255, 255, 255, 0.08)',
                                                        border: '1px solid rgba(255, 215, 0, 0.3)',
                                                        '& .action-button': {
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 10px 25px rgba(255, 215, 0, 0.3)',
                                                        },
                                                        '& .item-thumbnail': {
                                                            transform: 'scale(1.08)',
                                                        },
                                                    }
                                                }}
                                                onClick={() => {
                                                    if (!['video', 'audio', 'blog', 'note', 'quiz', 'image'].includes(item?.entityType)) {
                                                        handleCardClick(item);
                                                    }
                                                }}
                                            >
                                                {/* Item Thumbnail */}
                                                {(item?.thumb || item?.logo) ? (
                                                    <Box
                                                        sx={{
                                                            position: 'relative',
                                                            width: '100%',
                                                            height: '180px',
                                                            overflow: 'hidden',
                                                            borderRadius: '20px 20px 0 0'
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
                                                        <img
                                                            className="item-thumbnail"
                                                            src={`${Endpoints.mediaBaseUrl + (item?.thumb || item?.logo)}`}
                                                            alt={`${item?.title || item?.name || 'Result resource'} preview`}
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit: 'cover',
                                                                objectPosition: 'center',
                                                                display: 'block',
                                                                transition: 'transform 0.5s ease',
                                                            }}
                                                        />
                                                        <Box
                                                            sx={{
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: 0,
                                                                right: 0,
                                                                bottom: 0,
                                                                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)',
                                                            }}
                                                        />
                                                        {(item?.entityType === 'video' || item?.entityType === 'audio') && (
                                                            <Box
                                                                sx={{
                                                                    position: 'absolute',
                                                                    top: '50%',
                                                                    left: '50%',
                                                                    transform: 'translate(-50%, -50%)',
                                                                    background: 'rgba(255, 215, 0, 0.95)',
                                                                    borderRadius: '50%',
                                                                    p: 1.5,
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
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
                                                            height: '180px',
                                                            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 165, 0, 0.05) 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderRadius: '20px 20px 0 0'
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                width: '60px',
                                                                height: '60px',
                                                                background: 'rgba(255, 215, 0, 0.15)',
                                                                borderRadius: '16px',
                                                            }}
                                                        >
                                                            {getItemIcon(item?.entityType)}
                                                        </Box>
                                                    </Box>
                                                )}
                                                
                                            </Card>
                                        </Fade>
                                    </Grid2>
                                ))}
                            </Grid2>
                        ) : (
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
                                <TrophyIcon sx={{ fontSize: 80, color: 'rgba(255, 215, 0, 0.3)', mb: 3 }} />
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        fontWeight: 600,
                                        mb: 2
                                    }}
                                >
                                    No Results Available
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.5)',
                                        maxWidth: '400px',
                                        mx: 'auto'
                                    }}
                                >
                                    There are no results for this category at the moment.
                                </Typography>
                            </Box>
                        )}
                    </>
                ) : (
                    <>
                        {/* Courses Cards */}
                        {loading ? (
                            <Grid2 container spacing={3}>
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                                        <Skeleton
                                            variant="rectangular"
                                            sx={{
                                                height: 250,
                                                borderRadius: '20px',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                            }}
                                        />
                                    </Grid2>
                                ))}
                            </Grid2>
                        ) : coursesList?.length > 0 ? (
                            <Grid2 container spacing={3}>
                                {coursesList.map((item, index) => (
                                    <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                                        <Fade in={true} timeout={300 + index * 100}>
                                            <Card
                                                sx={{
                                                    height: '100%',
                                                    borderRadius: '20px',
                                                    background: 'rgba(255, 255, 255, 0.05)',
                                                    backdropFilter: 'blur(25px)',
                                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    cursor: 'pointer',
                                                    position: 'relative',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    overflow: 'hidden',
                                                    '&:hover': {
                                                        transform: 'translateY(-15px)',
                                                        boxShadow: '0 25px 50px rgba(255, 215, 0, 0.2), 0 0 30px rgba(255, 215, 0, 0.15)',
                                                        background: 'rgba(255, 255, 255, 0.08)',
                                                        border: '1px solid rgba(255, 215, 0, 0.3)',
                                                        '& .action-button': {
                                                            transform: 'scale(1.05)',
                                                        },
                                                        '& .course-image': {
                                                            transform: 'scale(1.1)',
                                                        },
                                                    },
                                                    '&::before': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.02) 0%, rgba(255, 165, 0, 0.02) 100%)',
                                                        pointerEvents: 'none',
                                                    },
                                                }}
                                                onClick={() => handleCardClick(item)}
                                            >
                                                {item?.logo && (
                                                    <Box
                                                        sx={{
                                                            position: 'relative',
                                                            width: '100%',
                                                            height: '200px',
                                                            overflow: 'hidden',
                                                            borderRadius: '20px 20px 0 0'
                                                        }}
                                                    >
                                                        <img
                                                            className="course-image"
                                                            src={`${Endpoints.mediaBaseUrl + item?.logo}`}
                                                            alt={`${item?.title || item?.name || 'Result course'} cover`}
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit: 'cover',
                                                                objectPosition: 'center',
                                                                display: 'block',
                                                                transition: 'transform 0.5s ease',
                                                            }}
                                                        />
                                                        <Box
                                                            sx={{
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: 0,
                                                                right: 0,
                                                                bottom: 0,
                                                                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)',
                                                            }}
                                                        />
                                                    </Box>
                                                )}

                                                <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                    <Box>
                                                        <Typography
                                                            variant="h6"
                                                            sx={{
                                                                color: '#fff',
                                                                fontWeight: 700,
                                                                mb: 2,
                                                                lineHeight: 1.4,
                                                                display: '-webkit-box',
                                                                WebkitLineClamp: 2,
                                                                WebkitBoxOrient: 'vertical',
                                                                overflow: 'hidden',
                                                                fontSize: '1.1rem',
                                                            }}
                                                        >
                                                            {item?.title}
                                                        </Typography>
                                                    </Box>

                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            justifyContent: 'flex-end',
                                                            alignItems: 'center',
                                                        }}
                                                    >
                                                        <IconButton
                                                            className="action-button"
                                                            sx={{
                                                                background: 'rgba(255, 215, 0, 0.1)',
                                                                border: '1px solid rgba(255, 215, 0, 0.3)',
                                                                color: '#FFD700',
                                                                transition: 'all 0.3s ease',
                                                                '&:hover': {
                                                                    background: 'rgba(255, 215, 0, 0.2)',
                                                                },
                                                            }}
                                                        >
                                                            <ArrowForwardIcon />
                                                        </IconButton>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Fade>
                                    </Grid2>
                                ))}
                            </Grid2>
                        ) : (
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
                                <TrophyIcon sx={{ fontSize: 80, color: 'rgba(255, 215, 0, 0.3)', mb: 3 }} />
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        fontWeight: 600,
                                        mb: 2
                                    }}
                                >
                                    No Results Available
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.5)',
                                        maxWidth: '400px',
                                        mx: 'auto'
                                    }}
                                >
                                    There are no results available at the moment. Check back soon for updates.
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

            {/* Full-Screen Image Preview Dialog */}
            {imagePreviewOpen && (
                <Box
                    onClick={() => setImagePreviewOpen(false)}
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 2,
                        cursor: 'zoom-out',
                    }}
                >
                    {/* Prev/Next Controls */}
                    {imagePreviewList.length > 1 && (
                        <>
                            <IconButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const nextIndex = (imagePreviewIndex - 1 + imagePreviewList.length) % imagePreviewList.length;
                                    setImagePreviewIndex(nextIndex);
                                    setImagePreviewSrc(imagePreviewList[nextIndex]);
                                }}
                                sx={{
                                    position: 'absolute',
                                    left: { xs: 8, md: 24 },
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'rgba(255, 215, 0, 0.15)',
                                    backdropFilter: 'blur(10px)',
                                    color: '#FFD700',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 215, 0, 0.25)',
                                    },
                                    zIndex: 10000,
                                }}
                            >
                                <ArrowForwardIcon sx={{ fontSize: 32, transform: 'rotate(180deg)' }} />
                            </IconButton>

                            <IconButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const nextIndex = (imagePreviewIndex + 1) % imagePreviewList.length;
                                    setImagePreviewIndex(nextIndex);
                                    setImagePreviewSrc(imagePreviewList[nextIndex]);
                                }}
                                sx={{
                                    position: 'absolute',
                                    right: { xs: 8, md: 24 },
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'rgba(255, 215, 0, 0.15)',
                                    backdropFilter: 'blur(10px)',
                                    color: '#FFD700',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 215, 0, 0.25)',
                                    },
                                    zIndex: 10000,
                                }}
                            >
                                <ArrowForwardIcon sx={{ fontSize: 32 }} />
                            </IconButton>
                        </>
                    )}

                    <IconButton
                        onClick={(e) => {
                            e.stopPropagation();
                            setImagePreviewOpen(false);
                        }}
                        sx={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            backgroundColor: 'rgba(255, 215, 0, 0.15)',
                            backdropFilter: 'blur(10px)',
                            color: '#FFD700',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 215, 0, 0.25)',
                            },
                            zIndex: 10000,
                        }}
                    >
                        <CloseIcon sx={{ fontSize: 32 }} />
                    </IconButton>

                    <Box
                        component="img"
                        src={imagePreviewSrc}
                        alt="Full screen preview"
                        onClick={(e) => e.stopPropagation()}
                        sx={{
                            maxWidth: '95%',
                            maxHeight: '95%',
                            objectFit: 'contain',
                            borderRadius: '8px',
                            boxShadow: '0 10px 50px rgba(0, 0, 0, 0.5)',
                            cursor: 'default',
                        }}
                    />

                    {/* Thumbnail Strip */}
                    {imagePreviewList.length > 1 && (
                        <Box
                            onClick={(e) => e.stopPropagation()}
                            sx={{
                                position: 'absolute',
                                bottom: { xs: 12, md: 24 },
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                gap: 1,
                                px: 2,
                                py: 1,
                                borderRadius: '16px',
                                backgroundColor: 'rgba(0, 0, 0, 0.55)',
                                backdropFilter: 'blur(8px)',
                                maxWidth: '90%',
                                overflowX: 'auto',
                                zIndex: 10000,
                            }}
                        >
                            {imagePreviewList.map((thumb, idx) => (
                                <Box
                                    key={`${thumb}-${idx}`}
                                    component="img"
                                    src={thumb}
                                    alt={`Preview ${idx + 1}`}
                                    onClick={() => {
                                        setImagePreviewIndex(idx);
                                        setImagePreviewSrc(thumb);
                                    }}
                                    sx={{
                                        width: 56,
                                        height: 40,
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                        border: idx === imagePreviewIndex ? '2px solid #FFD700' : '1px solid rgba(255, 255, 255, 0.2)',
                                        opacity: idx === imagePreviewIndex ? 1 : 0.7,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            opacity: 1,
                                        },
                                    }}
                                />
                            ))}
                        </Box>
                    )}
                </Box>
            )}
        </Box>
    );
};

export default ResultSection2;



