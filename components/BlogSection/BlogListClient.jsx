'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    Button,
    Card,
    CardContent,
    Chip,
    Container,
    Grid2,
    Box,
    Typography,
    useMediaQuery,
    Skeleton,
    Fab,
    Tooltip,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CallIcon from '@mui/icons-material/Call';
import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';
import instId from '@/constant/instId';
import { DEFAULT_BLOG_IMAGE_PATH, resolveMediaUrl } from '@/lib/site';

const BlogListClient = () => {
    const router = useRouter();
    // const instId = 120;
    const isMobile = useMediaQuery('(min-width:600px)');

    const [coursesList, setCoursesList] = useState([]);
    const [selectedScheduleList, setSelectedScheduleList] = useState([]);
    const [folders, setFolders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedFolder, setSelectedFolder] = useState(null);
    const [breadcrumb, setBreadcrumb] = useState([]);
    const [courseId, setCourseId] = useState(null);
    const [parentId, setParentId] = useState(null);
    const [navigationHistory, setNavigationHistory] = useState([]);
    const [currentPageSize, setCurrentPageSize] = useState(6);
    const [hasMoreBlogs, setHasMoreBlogs] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [message] = useState('Aurous Academy');
    const [defaultPoster, setDefaultPoster] = useState('');
    const [failedCardImages, setFailedCardImages] = useState({});

    const getInstituteDetail = async () => {
        try {
            let response = await Network.fetchInstituteDetail(instId.instId);
            setDefaultPoster(response.instituteAppSetting?.defaultPoster || '');
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getInstituteDetail();
    }, []);

    const getDefaultPosterImage = () => resolveMediaUrl(
        defaultPoster,
        Endpoints?.mediaBaseUrl,
        DEFAULT_BLOG_IMAGE_PATH
    );

    const isValidImageSource = (value) => {
        if (typeof value !== 'string') {
            return false;
        }

        const normalizedValue = value.trim();

        if (!normalizedValue || normalizedValue.toLowerCase() === 'string') {
            return false;
        }

        return true;
    };

    const getBlogCardImage = (item) => {
        const imageKey = item?.id || item?.entityId || item?.blog?.id;

        if (imageKey && failedCardImages[imageKey]) {
            return getDefaultPosterImage();
        }

        const primarySource = isValidImageSource(item?.blog?.thumb)
            ? item.blog.thumb
            : isValidImageSource(item?.img)
                ? item.img
                : isValidImageSource(item?.logo)
                    ? item.logo
                    : defaultPoster;

        return resolveMediaUrl(
            primarySource,
            Endpoints?.mediaBaseUrl,
            getDefaultPosterImage()
        );
    };

    const handleCardImageError = (item) => {
        const imageKey = item?.id || item?.entityId || item?.blog?.id;

        if (!imageKey) {
            return;
        }

        setFailedCardImages((prev) => {
            if (prev[imageKey]) {
                return prev;
            }

            return {
                ...prev,
                [imageKey]: true,
            };
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        getAllCourses();
    }, []);

    // console.log('coursesList', coursesList);


    useEffect(() => {
        if (coursesList?.length > 0) {
            const firstCourse = coursesList[0];
            setCourseId(firstCourse.id);
            setParentId(null);
            setCurrentPageSize(6);
            setHasMoreBlogs(true);
            getCourseContent(firstCourse.id, 6);
            getMergedSchedules(firstCourse.id, null);
            setBreadcrumb([
                { id: null, name: 'Courses' },
                { id: firstCourse.id, name: firstCourse.title || `Course ${firstCourse.id}` },
            ]);
        }
    }, [coursesList]);

    const getCourseContent = async (courseId, pageSize = 3) => {
        try {
            if (pageSize > 3) {
                setIsLoadingMore(true);
            }

            const body = {
                "courseId": courseId,
                "contentTypes": [
                    "blog"
                ],
                "page": 0,
                "pageSize": pageSize
            }
            const response = await Network.fetchAllContentFromCourse(body);

            // console.log('responseresponse', response);

            if (response?.errorCode === 0 && response?.contentList) {
                // Display all blogs from this API
                const blogs = response.contentList.filter(item => item.entityType === 'blog' && item?.active === true);

                // Sort blogs by date (latest first)
                const sortedBlogs = blogs.sort((a, b) => {
                    const dateA = new Date(a.blog
                        ?.updatedAt || 0);
                    const dateB = new Date(b.blog
                        ?.updatedAt || 0);
                    return dateB - dateA; // Descending order (newest first)
                });

                // Always replace with the full list from server (dedupe by entityId)
                setSelectedScheduleList(dedupeByEntityId(sortedBlogs));

                // Check if there are more blogs to load
                setHasMoreBlogs(blogs.length === pageSize);
                setCurrentPageSize(pageSize);
            } else {
                setHasMoreBlogs(false);
            }

        }
        catch (err) {
            console.error('Error fetching course content:', err);
            setError('Failed to load course content');
            setHasMoreBlogs(false);
        } finally {
            if (pageSize > 3) {
                setIsLoadingMore(false);
            }
        }
    };

    const getAllCourses = async () => {
        try {
            const response = await Network.fetchCourses(instId.instId);
            const courses = response?.courses || [];
            const filteredCourses = courses.filter(
                (course) =>
                    course?.active === true &&
                    course?.paid === false && course?.id === 3811
            );
            setCoursesList(filteredCourses);
            setError(null);
        } catch (err) {
            console.error('Error fetching courses:', err);
            setError('Failed to load courses');
            setCoursesList([]);
        } finally {
            setLoading(false);
        }
    };

    const getMergedSchedules = async (cId, folderId = null) => {
        try {
            setLoading(true);
            let response = await Network.fetchCheduleApi(cId, folderId || 0);

            if (response?.contentList) {
                const content = response.contentList;
                const blogs = content.filter(
                    (item) => item.entityType === 'blog' && item?.active === true
                );
                const foldersData = content.filter(
                    (item) =>
                        item.entityType === 'folder' &&
                        item?.drip === false &&
                        item?.active === true
                );

                const sortedBlogs = blogs.sort((a, b) => {
                    const dateA = new Date(a.blog?.updatedAt || 0);
                    const dateB = new Date(b.blog?.updatedAt || 0);
                    return dateB - dateA;
                });

                if (folderId) {
                    setSelectedScheduleList(dedupeByEntityId(sortedBlogs));
                }
                setFolders(foldersData);
            } else {
                if (folderId) {
                    setSelectedScheduleList([]);
                }
                setFolders([]);
            }
            setError(null);
        } catch (err) {
            console.error('Error fetching schedule:', err);
            setError('Failed to load content');
            if (folderId) {
                setSelectedScheduleList([]);
            }
            setFolders([]);
        } finally {
            setLoading(false);
        }
    };

    const slugify = (str) => {
        if (!str) return '';
        return str
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');
    };

    const dedupeByEntityId = (items = []) => {
        const seen = new Set();
        const unique = [];
        for (const item of items) {
            const key = item?.entityId ?? item?.id;
            if (key == null || seen.has(key)) {
                continue;
            }
            seen.add(key);
            unique.push(item);
        }
        return unique;
    };

    const handleCardClick = (item) => {
        if (!courseId && !item?.entityType) {
            setCourseId(item?.id);
            setParentId(null);
            getMergedSchedules(item?.id, null);
            setBreadcrumb([
                { id: null, name: 'Courses' },
                { id: item?.id, name: item?.title || `Course ${item?.id}` },
            ]);
            return;
        }

        if (item?.entityType?.toLowerCase() === 'folder') {
            setParentId(item?.id);
            getMergedSchedules(courseId, item?.id);
            setBreadcrumb((prev) => [
                ...prev.slice(0, 2),
                {
                    id: item?.id,
                    name: item?.title || item?.name || `Folder ${item?.id}`,
                },
            ]);
            return;
        }

        if (item?.entityType === 'blog') {
            const titleSlug = slugify(item.title || '');
            router.push(`/blog/${item?.id}/${titleSlug}`);
            return;
        }

        if (item?.id && !item?.entityType) {
            setCourseId(item?.id);
            setParentId(null);
            getMergedSchedules(item?.id, null);
            setBreadcrumb([
                { id: null, name: 'Courses' },
                { id: item?.id, name: item?.title || `Course ${item?.id}` },
            ]);
            return;
        }
    };

    const handleFolderSelect = (folder) => {
        if (!folder) {
            setSelectedFolder(null);
            setParentId(null);
            setCurrentPageSize(6);
            setHasMoreBlogs(true);
            getCourseContent(courseId, 6);
            getMergedSchedules(courseId, null);
            setBreadcrumb((prev) => prev.slice(0, 2));
            return;
        }

        setNavigationHistory((prev) => [
            ...prev,
            {
                selectedFolder: selectedFolder,
                parentId: parentId,
                breadcrumb: [...breadcrumb],
            },
        ]);

        setSelectedFolder(folder);
        setParentId(folder.id);
        getMergedSchedules(courseId, folder.id);

        setBreadcrumb((prev) => [
            ...prev.slice(0, 2),
            { id: folder.id, name: folder.name || folder.title },
        ]);
    };

    const handleBack = () => {
        if (navigationHistory.length === 0) {
            handleFolderSelect(null);
            return;
        }

        const previousState = navigationHistory[navigationHistory.length - 1];
        setNavigationHistory((prev) => prev.slice(0, -1));

        setSelectedFolder(previousState.selectedFolder);
        setParentId(previousState.parentId);
        setBreadcrumb(previousState.breadcrumb);

        if (!previousState.parentId) {
            setCurrentPageSize(6);
            setHasMoreBlogs(true);
            getCourseContent(courseId, 6);
            getMergedSchedules(courseId, null);
        } else {
            getMergedSchedules(courseId, previousState.parentId);
        }
    };

    const handleLoadMore = () => {
        if (!isLoadingMore && hasMoreBlogs && courseId && !selectedFolder && !parentId) {
            const newPageSize = currentPageSize + 3;
            getCourseContent(courseId, newPageSize);
        }
    };

    const handleWhatsapp = (event) => {
        event.preventDefault();
        const phoneNumber = '+919685099770';
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=Hey,+${encodedMessage}+%21&type=phone_number&app_absent=0`;
        window.open(whatsappURL, '_blank');
    };

    const handleRedirectToCall = () => {
        window.location.href = 'tel:+919522512624';
    };

    if (loading) {
        return (
            <Box sx={{ bgcolor: '#f9fafb', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography sx={{ color: '#6b7280' }}>Loading content...</Typography>
            </Box>
        );
    }

    // console.log('selectedScheduleList', selectedScheduleList);


    return (
        <>
            <Box
                sx={{
                    // minHeight: '100vh',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                }}
            >


                {/* Content Section */}
                <Box sx={{ py: 4, px: { xs: 2, md: 4 } }}>
                    {/* Header Section */}
                    <Box
                        sx={{
                            width: '100%',
                            // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            position: 'relative',
                            overflow: 'hidden',
                            py: { xs: 8, md: 12 },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                // background: `
                                //     radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                                //     radial-gradient(circle at 80% 20%, rgba(255, 177, 153, 0.3) 0%, transparent 50%),
                                //     radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)
                                // `,
                                zIndex: 1,
                            },
                        }}
                    >

                        {/* <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                            <Box sx={{ textAlign: 'center', maxWidth: '700px', mx: 'auto' }}> */}
                                {/* <Typography
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontWeight: 700,
                                        letterSpacing: '0.1em',
                                        fontSize: '0.75rem',
                                        mb: 2,
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    Knowledge Hub
                                </Typography> */}
                                <Typography
                                    variant='h1'
                                    sx={{
                                        // fontSize: { xs: '2rem', md: '2.75rem' },
                                        fontWeight: 700,
                                        color: '#ffffff',
                                        mb: 0,
                                        textAlign:'center',
                                        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    Blogs
                                </Typography>
                                {/* <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', lineHeight: 1.6, }}>
                                    Explore blogs, tutorials, and resources to enhance your exam preparation with Aurous Academy experts.
                                </Typography> */}
                            {/* </Box>
                        </Container> */}
                    </Box>
                    <Container maxWidth="lg">
                        {/* Back Button */}
                        {(selectedFolder || navigationHistory.length > 0) && (
                            <Box sx={{ mb: 4 }}>
                                <Button
                                    onClick={handleBack}
                                    startIcon={<ArrowBackIcon />}
                                    sx={{
                                        fontSize: '0.875rem',
                                        fontWeight: 700,
                                        color: '#667eea',
                                        textTransform: 'none',
                                        '&:hover': {
                                            color: '#764ba2',
                                            bgcolor: 'rgba(102, 126, 234, 0.05)',
                                        },
                                    }}
                                >
                                    Back
                                </Button>
                            </Box>
                        )}

                        {/* Folder Tabs */}
                        {folders.length > 0 && (
                            <Box sx={{ mb: 3, overflowX: 'auto', pb: 1 }}>
                                <Box sx={{ display: 'flex', gap: 2, minWidth: 'min-content' }}>
                                    <Button
                                        onClick={() => handleFolderSelect(null)}
                                        variant={!selectedFolder ? 'contained' : 'outlined'}
                                        sx={{
                                            px: 3,
                                            py: 1.5,
                                            borderRadius: '12px',
                                            fontWeight: 700,
                                            fontSize: '0.875rem',
                                            textTransform: 'none',
                                            whiteSpace: 'nowrap',
                                            bgcolor: !selectedFolder ? '#667eea' : '#ffffff',
                                            color: !selectedFolder ? '#ffffff' : '#667eea',
                                            border: !selectedFolder ? 'none' : '2px solid rgba(102, 126, 234, 0.2)',
                                            boxShadow: !selectedFolder ? '0 4px 12px rgba(102, 126, 234, 0.25)' : 'none',
                                            '&:hover': {
                                                bgcolor: !selectedFolder ? '#764ba2' : 'rgba(102, 126, 234, 0.05)',
                                                borderColor: 'rgba(102, 126, 234, 0.4)',
                                            },
                                        }}
                                    >
                                        All Content
                                    </Button>
                                    {folders.map((folder) => (
                                        <Button
                                            key={folder.id}
                                            onClick={() => handleFolderSelect(folder)}
                                            variant={selectedFolder?.id === folder.id ? 'contained' : 'outlined'}
                                            endIcon={<ChevronRightIcon sx={{ fontSize: '1rem' }} />}
                                            startIcon={<FolderIcon sx={{ fontSize: '1rem' }} />}
                                            sx={{
                                                px: 3,
                                                py: 1.5,
                                                borderRadius: '12px',
                                                fontWeight: 700,
                                                fontSize: '0.875rem',
                                                textTransform: 'none',
                                                whiteSpace: 'nowrap',
                                                bgcolor: selectedFolder?.id === folder.id ? '#667eea' : '#ffffff',
                                                color: selectedFolder?.id === folder.id ? '#ffffff' : '#667eea',
                                                border: selectedFolder?.id === folder.id ? 'none' : '2px solid rgba(102, 126, 234, 0.2)',
                                                boxShadow: selectedFolder?.id === folder.id ? '0 4px 12px rgba(102, 126, 234, 0.25)' : 'none',
                                                '&:hover': {
                                                    bgcolor: selectedFolder?.id === folder.id ? '#764ba2' : 'rgba(102, 126, 234, 0.05)',
                                                    borderColor: 'rgba(102, 126, 234, 0.4)',
                                                },
                                            }}
                                        >
                                            {folder.name || folder.title}
                                        </Button>
                                    ))}
                                </Box>
                            </Box>
                        )}

                        {error && (
                            <Box
                                sx={{
                                    bgcolor: '#fef2f2',
                                    border: '1px solid #fecaca',
                                    borderRadius: '8px',
                                    p: 2,
                                    mb: 4,
                                    color: '#b91c1c',
                                }}
                            >
                                {error}
                            </Box>
                        )}

                        {selectedScheduleList.length === 0 ? (
                            <Box sx={{ textAlign: 'center', py: 8 }}>
                                <Typography sx={{ color: '#6b7280', fontSize: '1.125rem' }}>
                                    No content available at the moment.
                                </Typography>
                            </Box>
                        ) : (
                            <Grid2 container spacing={4}>
                                {selectedScheduleList.map((item, idx) => {
                                    console.log('Rendering item:', item);
                                    return (
                                        <Grid2 key={item.id || idx} size={{ xs: 12, md: 6, lg: 4 }}>
                                            <Card
                                                onClick={() => handleCardClick(item)}
                                                sx={{
                                                    borderRadius: '16px',
                                                    overflow: 'hidden',
                                                    background: '#ffffff',
                                                    border: '1px solid rgba(102, 126, 234, 0.1)',
                                                    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.08)',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                                    '&:hover': {
                                                        transform: 'translateY(-8px) scale(1.01)',
                                                        boxShadow: '0 12px 28px rgba(102, 126, 234, 0.18)',
                                                        borderColor: 'rgba(102, 126, 234, 0.3)',
                                                    },
                                                }}
                                            >
                                                {/* Image Section */}
                                                <Box
                                                    sx={{
                                                        height: '200px',
                                                        overflow: 'hidden',
                                                        bgcolor: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
                                                        position: 'relative',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    {
                                                        (item?.blog?.thumb || item?.img || item?.logo || defaultPoster) ? (
                                                            <Image
                                                                src={getBlogCardImage(item)}
                                                                alt={`${item.title || 'Aurous Academy blog'} featured image`}
                                                                fill
                                                                sizes="(max-width: 900px) 100vw, 33vw"
                                                                onError={() => handleCardImageError(item)}
                                                                style={{
                                                                    objectFit: 'cover',
                                                                    transition: 'transform 0.5s ease',
                                                                }}
                                                            />
                                                        ) : (
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    fontSize: '2.5rem',
                                                                }}
                                                            >
                                                                {item.entityType === 'folder' ? '📁' : '📄'}
                                                            </Box>
                                                        )}
                                                    {/* 
                                                <Chip
                                                    label={
                                                        item.entityType === 'folder' ? '📁 Folder' : '📄 Blog'
                                                    }
                                                    sx={{
                                                        position: 'absolute',
                                                        top: '12px',
                                                        left: '12px',
                                                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                                                        backdropFilter: 'blur(4px)',
                                                        fontWeight: 700,
                                                        fontSize: '0.7rem',
                                                        letterSpacing: '0.05em',
                                                        color: '#667eea',
                                                    }}
                                                /> */}
                                                </Box>

                                                {/* Content Section */}
                                                <CardContent sx={{ bgcolor: '#ffffff' }}>
                                                    {/* Date and Author */}
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 2,
                                                            fontSize: '0.75rem',
                                                            color: '#9ca3af',
                                                            mb: 1,
                                                            fontWeight: 700,
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.05em',
                                                            flexWrap: 'wrap',
                                                        }}
                                                    >
                                                        {item.date || item.blog?.updatedAt ? (
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                                <CalendarTodayIcon sx={{ fontSize: '0.875rem' }} />
                                                                {(() => {
                                                                    try {
                                                                        const dateStr = item.blog?.updatedAt || item.date;
                                                                        return new Date(dateStr).toLocaleDateString(
                                                                            'en-US',
                                                                            {
                                                                                month: 'short',
                                                                                day: 'numeric',
                                                                                year: 'numeric',
                                                                            }
                                                                        );
                                                                    } catch {
                                                                        return 'Recently Added';
                                                                    }
                                                                })()}
                                                            </Box>
                                                        ) : null}

                                                        {/* {item?.blog?.author && typeof item?.blog?.author === 'string' && (
                                                        <>
                                                            <Typography component="span">•</Typography>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                                <PersonIcon sx={{ fontSize: '0.875rem' }} />
                                                                {item?.blog?.author}
                                                            </Box>
                                                        </>
                                                    )} */}
                                                    </Box>

                                                    {/* Title */}
                                                    <Typography
                                                        sx={{
                                                            fontWeight: 800,
                                                            fontSize: '1.100rem',
                                                            color: '#111827',
                                                            mb: 1,
                                                            lineHeight: 1.4,
                                                            display: '-webkit-box',
                                                            WebkitLineClamp: 2,
                                                            WebkitBoxOrient: 'vertical',
                                                            overflow: 'hidden',
                                                            transition: 'color 0.3s ease',
                                                            '&:group-hover': {
                                                                color: '#667eea',
                                                            },
                                                        }}
                                                    >
                                                        {String(item.title || item.name || 'Untitled')}
                                                    </Typography>

                                                    {/* Description */}
                                                    <Typography
                                                        sx={{
                                                            fontSize: '0.875rem',
                                                            color: '#6b7280',
                                                            lineHeight: 1.5,
                                                            mb: 2,
                                                            display: '-webkit-box',
                                                            WebkitLineClamp: 2,
                                                            WebkitBoxOrient: 'vertical',
                                                            overflow: 'hidden',
                                                        }}
                                                    >
                                                        {typeof item.desc === 'string'
                                                            ? item.desc
                                                            : typeof item.description === 'string'
                                                                ? item.description
                                                                : 'Click to explore more...'}
                                                    </Typography>

                                                    {/* CTA Button */}
                                                    <Button
                                                        endIcon={<ArrowForwardIcon sx={{ fontSize: '0.850rem' }} />}
                                                        sx={{
                                                            color: '#667eea',
                                                            fontWeight: 700,
                                                            fontSize: '0.875rem',
                                                            textTransform: 'none',
                                                            p: 0,
                                                            '&:hover': {
                                                                bgcolor: 'transparent',
                                                                transform: 'translateX(4px)',
                                                            },
                                                        }}
                                                    >
                                                        {item.entityType === 'folder'
                                                            ? 'Open Folder'
                                                            : 'Read More'}
                                                    </Button>
                                                </CardContent>
                                            </Card>
                                        </Grid2>
                                    )
                                })}
                            </Grid2>
                        )}

                        {/* Load More Button */}
                        {!selectedFolder &&
                            !parentId &&
                            hasMoreBlogs &&
                            selectedScheduleList.length > 0 && (
                                <Box sx={{ mt: 12, textAlign: 'center' }}>
                                    <Button
                                        onClick={handleLoadMore}
                                        disabled={isLoadingMore}
                                        endIcon={
                                            isLoadingMore ? null : (
                                                <ChevronRightIcon sx={{ fontSize: '1rem' }} />
                                            )
                                        }
                                        sx={{
                                            px: 8,
                                            py: 1.5,
                                            bgcolor: '#667eea',
                                            color: '#ffffff',
                                            fontWeight: 700,
                                            borderRadius: '12px',
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                bgcolor: '#764ba2',
                                                boxShadow: '0 20px 25px -5px rgba(102, 126, 234, 0.2)',
                                            },
                                            '&:disabled': {
                                                opacity: 0.5,
                                                cursor: 'not-allowed',
                                            },
                                        }}
                                    >
                                        {isLoadingMore ? (
                                            <>
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        display: 'inline-block',
                                                        animation: 'spin 1s linear infinite',
                                                        mr: 1,
                                                        '@keyframes spin': {
                                                            from: { transform: 'rotate(0deg)' },
                                                            to: { transform: 'rotate(360deg)' },
                                                        },
                                                    }}
                                                >
                                                    ⟳
                                                </Box>
                                                Loading...
                                            </>
                                        ) : (
                                            'Load More Blogs'
                                        )}
                                    </Button>
                                </Box>
                            )}
                    </Container>
                </Box>
            </Box>

            {/* Contact FABs */}
            <Tooltip title="Call Us Now" placement="top-start">
                <Fab
                    onClick={handleRedirectToCall}
                    color="primary"
                    sx={{
                        position: 'fixed',
                        bottom: '80px',
                        right: '20px',
                        background: '#ffc700',
                        '&:hover': {
                            background: '#ffb000',
                        },
                    }}
                >
                    <CallIcon sx={{ cursor: 'pointer', fontSize: '18px', color: '#1f2937' }} />
                </Fab>
            </Tooltip>

            <Tooltip title="WhatsApp us" placement="bottom-start">
                <Fab
                    onClick={handleWhatsapp}
                    color="primary"
                    sx={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        background: '#28B71D',
                        '&:hover': {
                            background: '#1e8e10',
                        },
                    }}
                >
                    <img
                        alt="WhatsApp"
                        style={{ width: isMobile ? '60%' : '100%' }}
                        src="/whatsAppSvg.svg"
                    />
                </Fab>
            </Tooltip>
        </>
    );
};

export default BlogListClient;
