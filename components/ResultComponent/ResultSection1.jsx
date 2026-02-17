import { Box, Card, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, Stack, Tooltip, Typography, useMediaQuery, Modal } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { useRouter } from 'next/navigation';

const ResultSection1 = () => {

    const instId = 120;
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();
    const isMobile = useMediaQuery("(min-width:600px)");
    const [banners, setBanners] = useState([]);
    const [bannerName, setBannerName] = useState('');
    const [domainLst, setDomainList] = useState([]);
    const [courseList, setCourseList] = useState([]);
    const [selectedScheduleList, setSelectedScheduleList] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedDomain, setSelectedDomain] = useState('');
    const [domainId, setDomainId] = useState(null);
    const [viewMode, setViewMode] = useState('courseList');
    const [courseTitle, setCourseTitle] = useState('');
    // const [emptyListMessage, setEmptyListMessage] = useState('');
    // const [emptyCourseListMessage, setCourseEmptyListMessage] = useState('');
    const [selectedCourseId, setSelectedCourseId] = useState(null);
    const [folderStack, setFolderStack] = useState([]); // For folder navigation
    const [videoModal, setVideoModal] = useState({ open: false, url: '' });

    const fetchDomainList = async () => {
        try {
            let response = await Network.fetchDomain(instId);
            const domains = response?.domains || [];
            const filterDomain = domains.filter(domain => domain?.name === 'Result');
            setDomainList(filterDomain[0]?.child);

            // ✅ Set first domain as default
            if (filterDomain.length > 0) {
                setSelectedDomain(filterDomain[0].child[0]);
                setDomainId(domains[0]);
            }
        } catch (error) {
            console.log(error);
        };
    };

    const getFetchCourseList = async () => {
        try {
            let response = await Network.fetchCourses(instId);
            const course = response?.courses || [];
            const filteredCourses = course.filter(course =>
                course?.active === true &&
                course?.tags?.some(tagObj => tagObj?.tag?.toLowerCase() === "free")
                &&
                course?.domain.some(domain => domain?.id === selectedDomain?.id)
            );
            if (filteredCourses.length === 0) {
                enqueueSnackbar('No course available for this domain.', { variant: 'error' });
            }
            setCourseList(filteredCourses);
        } catch (error) {
            console.log(error);
        };
    };

    const handleChangeCourse = (event, courseId) => {
        setSelectedCourseId(courseId);
        setFolderStack([]); // Reset folder stack on new course
        getMergedSchedules(courseId);
    };

    const getMergedSchedules = async (courseId) => {
        try {
            const response = await Network?.fetchCourseContent(courseId, 0);

            const filteredContent = (response?.contentList || []).filter(
                (item) => item?.entityType
            );

            if (filteredContent.length === 0) {
                enqueueSnackbar('No blog or notes available for this course.', { variant: 'error' });
            } else {
                setViewMode('scheduleView');
            }

            setSelectedScheduleList(filteredContent);
            setCourseTitle(response?.parentName || {});
        } catch (error) {
            console.error("Error fetching course schedules:", error);
        }
    };

    const getFolderContent = async (contentId) => {
        try {
            // Save current state to stack for back navigation
            setFolderStack(prev => [
                ...prev,
                {
                    list: selectedScheduleList,
                    title: courseTitle
                }
            ]);

            const response = await Network?.fetchCourseContent(selectedCourseId, contentId);
            const filteredContent = (response?.contentList || []).filter(
                (item) => item?.entityType
            );

            setSelectedScheduleList(filteredContent);
            setCourseTitle(response?.parentName || {});

            if (filteredContent.length === 0) {
                enqueueSnackbar('No content available for the selected course.', { variant: 'error' });
            } else {
                setViewMode('scheduleView');
            }
        } catch (error) {
            console.error("Error fetching course schedules:", error);
        }
    };

    // setTimeout(() => {
    //     setEmptyListMessage('');
    // }, 4000);

    // setTimeout(() => {
    //     setCourseEmptyListMessage('');
    // }, 4000);

    // useEffect(() => {
    //     // if (selectedCourse?.length > 0) {
    //     getMergedSchedules();
    //     // };
    // }, [])

    useEffect(() => {
        fetchDomainList();
    }, []);

    useEffect(() => {
        if (domainId) {
            getFetchCourseList(domainId);
        }
    }, [domainId]);

    const handleChangeDomain = (event) => {
        const selected = event.target.value;
        setSelectedDomain(selected);
        setDomainId(selected?.id); // ensure this gets called
    };

    const handleBack = () => {
        if (folderStack.length > 0) {
            // Go back to previous folder
            const prev = folderStack[folderStack.length - 1];
            setSelectedScheduleList(prev.list);
            setCourseTitle(prev.title);
            setFolderStack(stack => stack.slice(0, -1));
        } else {
            // Go back to course list
            setSelectedScheduleList([]);
            setViewMode('courseList');
        }
    };

    const getActualThumb = (item) => {
        if (item.entityType === 'blog' && item.blog?.blog) {
            return item.blog.blog;
        } else if (item.entityType === 'note' && item.note?.note) {
            return item.note.note;
        } else if (item.entityType === 'video' && item.video?.video) {
            return item.video.video;
        } else {
            return item?.blog?.blog;
        }
    };

    const handleDownload = (item) => {
        const entityType = item.entityType;
        if (entityType === 'blog') {
            router.push(`/blog`);
        } else if (entityType === 'video') {
            // Play video in modal
            let filePath = getActualThumb(item);
            if (!filePath) {
                enqueueSnackbar('No video available to play.', { variant: 'error', autoHideDuration: 3000 })
                return;
            }
            const fileUrl = Endpoints.mediaBaseUrl + filePath;
            setVideoModal({ open: true, url: fileUrl });
        } else {
            let filePath = getActualThumb(item);
            if (!filePath) {
                enqueueSnackbar('No file available to download.', { variant: 'error' });
                return;
            }
            const fileUrl = Endpoints.mediaBaseUrl + filePath;
            const fileName = item.title.replace(/\s+/g, '_') + '.jpg'; // or .png or appropriate extension
            const anchor = document.createElement('a');
            anchor.href = fileUrl;
            anchor.download = fileName;
            anchor.target = '_blank';
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
        }
    };

    // const handleDownload = (item) => {
    //     const entityType = item.entityType;
    //     console.log("item", entityType, item);

    //     // Case: blog with downloadable links inside blog content
    //     if (entityType === 'blog' && item.blog?.thumb) {
    //         // Extract links from blog HTML content
    //         const html = item.blog.thumb;
    //         const tempDiv = document.createElement('div');
    //         tempDiv.innerHTML = html;

    //         const links = Array.from(tempDiv.querySelectorAll('a')).map((a) => a.href);

    //         if (links.length > 0) {
    //             links.forEach((link) => {
    //                 const anchor = document.createElement('a');
    //                 anchor.href = link;
    //                 anchor.download = ''; // browser will use default filename
    //                 anchor.target = '_blank';
    //                 document.body.appendChild(anchor);
    //                 anchor.click();
    //                 document.body.removeChild(anchor);
    //             });
    //         } else {
    //             alert('No downloadable content found in blog.');
    //         }
    //         return;
    //     }

    //     // Case: video/audio/note/pdf assumed to be in .thumb field or similar
    //     const fileUrl = Endpoints.mediaBaseUrl + getActualThumb(item);
    //     const fileName = item.title.replace(/\s+/g, '_') + '.download';

    //     const anchor = document.createElement('a');
    //     anchor.href = fileUrl;
    //     anchor.download = fileName;
    //     anchor.target = '_blank';
    //     document.body.appendChild(anchor);
    //     anchor.click();
    //     document.body.removeChild(anchor);
    // };

    // const getBannerApi = async () => {
    //     try {
    //         const response = await Network.fetchBannerss(instId);
    //         let reusltBanner = [];
    //         response.banners.forEach((item) => {
    //             // console.log('item', item)
    //             if (item?.group === 'Result') {
    //                 reusltBanner.push(item);
    //             };
    //         })
    //         setBanners(reusltBanner || []);
    //         setBannerName(reusltBanner[0]?.group)
    //     } catch (error) {
    //         console.log(error);
    //     };
    // };

    // useEffect(() => {
    //     getBannerApi();
    // }, []);

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
                px: { xs: 2, sm: 4, md: 8, lg: 12 },
                py: { xs: 3, sm: 4, md: 6 },
            }}
        >
            {/* Header Section */}
            <Box
                sx={{
                    textAlign: 'center',
                    mb: 6,
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        background: 'linear-gradient(45deg, #FFD700, #FFA500, #FF8C00)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 700,
                        fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                        mb: 2,
                        textShadow: '0 0 30px rgba(255, 215, 0, 0.3)',
                    }}
                >
                    Academic Results
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: { xs: '1rem', sm: '1.2rem' },
                        maxWidth: '600px',
                        mx: 'auto',
                        lineHeight: 1.6,
                    }}
                >
                    Explore our comprehensive collection of exam results and academic resources
                </Typography>
            </Box>
            {/* {
                    banners.length > 0 && banners.map((item, i) => {
                        return (
                            <Grid
                                key={i}
                                item
                                size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                style={{ overflow: 'hidden' }}
                                py={2}
                            >
                                <img
                                    alt=''
                                    src={`${Endpoints.mediaBaseUrl}${item?.banner}`}
                                    className="zoom-fade-seesaw"
                                    style={{
                                        width: '80%',
                                        height: '100%',
                                        paddingTop: '10px',
                                        paddingBottom: '10px',
                                    }}
                                />
                            </Grid>
                        );
                    })
                } */}
            {/* </Grid> */}
            {/* Main Content Container */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                {/* Course Selection Form */}
                {viewMode === 'courseList' && (
                    <Box
                        sx={{
                            mb: 4,
                            display: 'flex',
                            justifyContent: 'flex-start',
                        }}
                    >
                        {domainLst?.length > 1 && (
                            <Box
                                sx={{
                                    // background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(20px)',
                                    // border: '1px solid rgba(255, 255, 255, 0.1)',
                                    // borderRadius: '20px',
                                    // p: 4,
                                    width: { xs: '100%', sm: '400px', md: '450px' },
                                    // boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: '#FFD700',
                                        fontSize: '1.2rem',
                                        fontWeight: 600,
                                        mb: 3,
                                        textAlign: 'left',
                                    }}
                                >
                                    Select Your Exam
                                </Typography>
                                <FormControl fullWidth>
                                    <InputLabel
                                        id="exam-select-label"
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            '&.Mui-focused': { color: '#FFD700' }
                                        }}
                                    >
                                        Choose Exam Type
                                    </InputLabel>
                                    <Select
                                        labelId="exam-select-label"
                                        value={selectedDomain || ''}
                                        label="Choose Exam Type"
                                        onChange={handleChangeDomain}
                                        renderValue={(selected) => selected?.name || 'Select Exam'}
                                        sx={{
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'rgba(255, 255, 255, 0.2)',
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'rgba(255, 215, 0, 0.5)',
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: '#FFD700',
                                            },
                                            '& .MuiSelect-select': {
                                                color: '#fff',
                                            },
                                            '& .MuiSvgIcon-root': {
                                                color: '#FFD700',
                                            },
                                        }}
                                        MenuProps={{
                                            PaperProps: {
                                                sx: {
                                                    background: 'rgba(20, 20, 30, 0.95)',
                                                    backdropFilter: 'blur(20px)',
                                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                                    '& .MuiMenuItem-root': {
                                                        color: '#fff',
                                                        '&:hover': {
                                                            background: 'rgba(255, 215, 0, 0.1)',
                                                        },
                                                        '&.Mui-selected': {
                                                            background: 'rgba(255, 215, 0, 0.2)',
                                                        },
                                                    },
                                                },
                                            },
                                        }}
                                    >
                                        {domainLst.map((domain, i) => (
                                            <MenuItem key={i} value={domain}>
                                                {domain.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                        )}

                    </Box>
                )}

                {/* Error Messages handled by notistack snackbar */}

                {/* Course Grid */}
                {viewMode === 'courseList' && courseList.length > 0 && (
                    <Grid container spacing={3}>
                        {courseList.map((course, i) => (
                            <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                <Card
                                    onClick={(e) => handleChangeCourse(e, course?.id)}
                                    sx={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 25px 50px -12px rgba(255, 215, 0, 0.3)',
                                            border: '1px solid rgba(255, 215, 0, 0.3)',
                                            '& .course-image': {
                                                transform: 'scale(1.05)',
                                            },
                                            '& .course-overlay': {
                                                opacity: 1,
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
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            overflow: 'hidden',
                                            height: { xs: 180, sm: 200 },
                                        }}
                                    >
                                        <img
                                            alt={course?.title}
                                            src={Endpoints.mediaBaseUrl + course?.logo}
                                            className="course-image"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.3s ease',
                                            }}
                                        />
                                        <Box
                                            className="course-overlay"
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease',
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ p: 3 }}>
                                        <Typography
                                            sx={{
                                                color: '#fff',
                                                fontSize: '1.1rem',
                                                fontWeight: 600,
                                                mb: 2,
                                                lineHeight: 1.4,
                                            }}
                                        >
                                            {course?.title}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <IconButton
                                                sx={{
                                                    background: 'rgba(255, 215, 0, 0.1)',
                                                    border: '1px solid rgba(255, 215, 0, 0.3)',
                                                    color: '#FFD700',
                                                    '&:hover': {
                                                        background: 'rgba(255, 215, 0, 0.2)',
                                                        transform: 'scale(1.1)',
                                                    },
                                                    transition: 'all 0.2s ease',
                                                }}
                                            >
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
                {/* Schedule View */}
                {viewMode === 'scheduleView' && (
                    <Box>
                        {/* Back Button and Header */}
                        <Box
                            sx={{
                                mb: 4,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 3,
                            }}
                        >
                            <IconButton
                                onClick={handleBack}
                                sx={{
                                    background: 'rgba(255, 215, 0, 0.1)',
                                    border: '1px solid rgba(255, 215, 0, 0.3)',
                                    color: '#FFD700',
                                    padding: 2,
                                    '&:hover': {
                                        background: 'rgba(255, 215, 0, 0.2)',
                                        transform: 'scale(1.05)',
                                    },
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                <ArrowCircleLeftIcon sx={{ fontSize: '2rem' }} />
                            </IconButton>
                            <Box>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: '#fff',
                                        fontWeight: 700,
                                        fontSize: { xs: '1.5rem', sm: '2rem' },
                                        mb: 1,
                                    }}
                                >
                                    Free Resources
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        fontSize: { xs: '0.9rem', sm: '1rem' },
                                    }}
                                >
                                    {courseTitle || 'Selected Course'}
                                </Typography>
                            </Box>
                        </Box>

                        {/* Resources Grid */}
                        <Grid container spacing={3}>
                            {selectedScheduleList.length > 0 ? (
                                selectedScheduleList.map((schedule, i) => (
                                    <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                        <Card
                                            onClick={() => {
                                                if (schedule?.entityType === "folder") {
                                                    getFolderContent(schedule.id);
                                                } else {
                                                    handleDownload(schedule);
                                                }
                                            }}
                                            sx={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                backdropFilter: 'blur(20px)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                borderRadius: '20px',
                                                cursor: 'pointer',
                                                overflow: 'hidden',
                                                position: 'relative',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                '&:hover': {
                                                    transform: 'translateY(-8px)',
                                                    boxShadow: '0 25px 50px -12px rgba(255, 215, 0, 0.3)',
                                                    border: '1px solid rgba(255, 215, 0, 0.3)',
                                                    '& .resource-image': {
                                                        transform: 'scale(1.05)',
                                                    },
                                                    '& .download-overlay': {
                                                        opacity: 1,
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
                                        >
                                            <Box
                                                sx={{
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                    height: { xs: 180, sm: 200 },
                                                }}
                                            >
                                                <img
                                                    alt={schedule?.title}
                                                    src={Endpoints.mediaBaseUrl + schedule?.thumb}
                                                    className="resource-image"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        transition: 'transform 0.3s ease',
                                                    }}
                                                />
                                            </Box>
                                            <Box sx={{ p: 3 }}>
                                                <Typography
                                                    sx={{
                                                        color: '#fff',
                                                        fontSize: '1rem',
                                                        fontWeight: 600,
                                                        lineHeight: 1.4,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 1,
                                                    }}
                                                >
                                                    {schedule?.title}
                                                    <Box
                                                        sx={{
                                                            color: '#FFD700',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                        }}
                                                    >
                                                        {schedule?.entityType === "folder"
                                                            ? <FolderOpenIcon fontSize="small" />
                                                            : schedule?.entityType === "blog"
                                                                ? <ArticleRoundedIcon fontSize="small" />
                                                                : schedule?.entityType === "video"
                                                                    ? <PlayCircleIcon fontSize="small" />
                                                                    : <PictureAsPdfIcon fontSize="small" />}
                                                        {/* Video Modal */}
                                                        <Modal open={videoModal.open} onClose={() => setVideoModal({ open: false, url: '' })}>
                                                            <Box
                                                                sx={{
                                                                    position: 'absolute',
                                                                    top: '50%',
                                                                    left: '50%',
                                                                    transform: 'translate(-50%, -50%)',
                                                                    bgcolor: 'background.paper',
                                                                    boxShadow: 24,
                                                                    p: 2,
                                                                    borderRadius: 2,
                                                                    outline: 'none',
                                                                    maxWidth: '90vw',
                                                                    maxHeight: '90vh',
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    alignItems: 'center',
                                                                }}
                                                            >
                                                                <video
                                                                    src={videoModal.url}
                                                                    controls
                                                                    autoPlay
                                                                    style={{
                                                                        width: '80vw',
                                                                        maxWidth: 800,
                                                                        maxHeight: '80vh',
                                                                        borderRadius: 12,
                                                                        background: '#000',
                                                                    }}
                                                                />
                                                            </Box>
                                                        </Modal>
                                                    </Box>
                                                </Typography>
                                            </Box>
                                        </Card>
                                    </Grid>
                                ))
                            ) : (
                                <Grid size={12}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            py: 8,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                backdropFilter: 'blur(20px)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                borderRadius: '20px',
                                                p: 4,
                                                textAlign: 'center',
                                                maxWidth: '400px',
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                    fontSize: '1.1rem',
                                                    fontWeight: 500,
                                                }}
                                            >
                                                No content available for the selected course.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default ResultSection1


