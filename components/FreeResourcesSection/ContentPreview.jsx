import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Box,
    Typography,
    CircularProgress,
    Alert,
    Grid2
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArticleIcon from '@mui/icons-material/Article';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import Endpoints from '@/constant/endpoints';

const ContentPreview = ({ open, onClose, item }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // console.log('Preview Item:', item);

    useEffect(() => {
        if (open) {
            setLoading(false);
            setError(null);
        }
    }, [open]);

    const getVideoEmbed = (url) => {
        if (!url) return null;

        // Handle YouTube URLs
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            let videoId = '';
            if (url.includes('youtube.com/watch?v=')) {
                videoId = url.split('v=')[1]?.split('&')[0];
            } else if (url.includes('youtu.be/')) {
                videoId = url.split('youtu.be/')[1]?.split('?')[0];
            }
            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}`;
            }
        }

        // Handle Vimeo URLs
        if (url.includes('vimeo.com')) {
            const videoId = url.split('/').pop();
            return `https://player.vimeo.com/video/${videoId}`;
        }

        // Return direct video URL if it looks like a video file
        if (url.includes('.mp4') || url.includes('.webm') || url.includes('.ogg')) {
            return url;
        }

        return url;
    };

    const renderVideoPreview = () => {
        // Check if there's a video object/array in the item
        if (item?.video) {
            const videos = Array.isArray(item.video) ? item.video : [item.video];

            return (
                <Box>
                    {/* Video Title */}
                    <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: '#FFD700' }}>
                        {item?.title}
                    </Typography>

                    {/* Thumbnail */}
                    {item?.thumb && (
                        <Box
                            sx={{
                                mb: 3,
                                borderRadius: '12px',
                                overflow: 'hidden',
                                maxHeight: '300px',
                            }}
                        >
                            <Box
                                component="img"
                                src={Endpoints.mediaBaseUrl + item.thumb}
                                alt={item?.title}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    borderRadius: '12px',
                                }}
                            />
                        </Box>
                    )}

                    {/* Videos */}
                    <Grid2 container spacing={2}>
                        {videos.map((video, index) => {
                            const videoUrl = video?.video || video?.url || video?.link;
                            const embedUrl = getVideoEmbed(videoUrl);

                            if (!embedUrl) {
                                return (
                                    <Grid2 key={index} size={{ xs: 12 }}>
                                        <Alert severity="warning">
                                            Video URL is not valid or unavailable
                                        </Alert>
                                    </Grid2>
                                );
                            }

                            // Check if it's an embedded URL (YouTube/Vimeo)
                            if (embedUrl.includes('youtube.com/embed') || embedUrl.includes('vimeo.com')) {
                                return (
                                    <Grid2 key={index} size={{ xs: 12 }}>
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                width: '100%',
                                                paddingBottom: '56.25%', // 16:9 aspect ratio
                                                height: 0,
                                                overflow: 'hidden',
                                                borderRadius: '12px',
                                                backgroundColor: '#000',
                                            }}
                                        >
                                            <iframe
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    border: 'none',
                                                    borderRadius: '12px',
                                                }}
                                                src={Endpoints.mediaBaseUrl + video.video}
                                                title={video?.title || item?.title}
                                                allowFullScreen
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            />
                                        </Box>
                                    </Grid2>
                                );
                            }

                            // Direct video file
                            return (
                                <Grid2 key={index} size={{ xs: 12 }}>
                                    <video
                                        width="100%"
                                        height="auto"
                                        controls
                                        style={{ borderRadius: '12px', maxHeight: '500px' }}
                                    >
                                        <source src={embedUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </Grid2>
                            );
                        })}
                    </Grid2>
                </Box>
            );
        }

        // Fallback to link/url based video
        const videoUrl = item?.link || item?.url;
        const embedUrl = getVideoEmbed(videoUrl);

        if (!embedUrl) {
            return (
                <Alert severity="warning">
                    Video URL is not valid or unavailable
                </Alert>
            );
        }

        // Check if it's an embedded URL (YouTube/Vimeo)
        if (embedUrl.includes('youtube.com/embed') || embedUrl.includes('vimeo.com')) {
            return (
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        paddingBottom: '56.25%', // 16:9 aspect ratio
                        height: 0,
                        overflow: 'hidden',
                        borderRadius: '12px',
                        backgroundColor: '#000',
                    }}
                >
                    <iframe
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            borderRadius: '12px',
                        }}
                        src={embedUrl}
                        title={item?.title}
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                </Box>
            );
        }

        // Direct video file
        return (
            <video
                width="100%"
                height="auto"
                controls
                style={{ borderRadius: '12px', maxHeight: '500px' }}
            >
                <source src={embedUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        );
    };

    const renderBlogPreview = () => {
        const blogUrl = item?.link || item?.url;

        if (!blogUrl) {
            return (
                <Alert severity="warning">
                    Blog URL is not available
                </Alert>
            );
        }

        return (
            <Box sx={{ textAlign: 'center', py: 4 }}>
                <ArticleIcon sx={{ fontSize: 60, color: '#FFD700', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Blog Post: {item?.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3 }}>
                    Click the button below to open the blog post in a new window
                </Typography>
                <Box
                    component="a"
                    href={blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        display: 'inline-block',
                        px: 4,
                        py: 1.5,
                        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                        color: '#000',
                        textDecoration: 'none',
                        fontWeight: 700,
                        borderRadius: '12px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 10px 25px rgba(255, 215, 0, 0.3)',
                        }
                    }}
                >
                    Open Blog Post
                </Box>
            </Box>
        );
    };

    const getMediaUrl = (path) => {
        if (!path) return '';
        if (typeof path !== 'string') return '';
        if (path.startsWith('http://') || path.startsWith('https://')) {
            return path;
        }
        return `${Endpoints.mediaBaseUrl}${path}`;
    };

    const renderNotesPreview = () => {
        // Check if there's a notes object in the item
        // console.log('Notes Preview - item:', item);
        // console.log('Notes Preview - item.note:', item?.note);

        const rawNotes = item?.note || item?.notes || item?.noteList;

        if (rawNotes || item?.link || item?.url || item?.file || item?.pdf) {
            // Handle both single note object and array of notes
            const notes = rawNotes
                ? (Array.isArray(rawNotes) ? rawNotes : [rawNotes])
                : [{
                    url: item?.link || item?.url || item?.file || item?.pdf,
                    title: item?.title
                }];
            // console.log('Parsed notes array:', notes);

            return (
                <Box>
                    {/* Notes Title */}
                    <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: '#FFD700' }}>
                        {item?.title}
                    </Typography>

                    {/* Thumbnail */}
                    {item?.thumb && (
                        <Box
                            sx={{
                                mb: 3,
                                borderRadius: '12px',
                                overflow: 'hidden',
                                maxHeight: '300px',
                            }}
                        >
                            <Box
                                component="img"
                                src={Endpoints.mediaBaseUrl + item.thumb}
                                alt={item?.title}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    borderRadius: '12px',
                                }}
                            />
                        </Box>
                    )}

                    {/* Notes */}
                    <Grid2 container spacing={2}>
                        {notes.map((note, index) => {
                            // Get PDF URL from note.note property
                            const pdfUrl = note?.note || note?.notes || note?.url || note?.link || note?.file || note?.pdf;
                                // console.log(`Note ${index}:{/* `, note);
                                // console.log(`Note ${index}  */}PDF URL (relative):`, pdfUrl);

                            if (!pdfUrl) {
                                return (
                                    <Grid2 key={index} size={{ xs: 12 }}>
                                        <Alert severity="warning">
                                            PDF URL is not available
                                        </Alert>
                                    </Grid2>
                                );
                            }

                            // Construct full PDF URL with base URL
                            const fullPdfUrl = getMediaUrl(pdfUrl);
                            {/* console.log(`Note ${index} Full PDF URL:`, fullPdfUrl); */}

                            return (
                                <Grid2 key={index} size={{ xs: 12 }}>
                                    <Box sx={{ position: 'relative', width: '100%', height: '600px', borderRadius: '12px', overflow: 'hidden' }}>
                                        <iframe
                                            src={`${fullPdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                border: 'none',
                                                borderRadius: '12px',
                                            }}
                                            title={note?.title || item?.title}
                                        />
                                    </Box>
                                </Grid2>
                            );
                        })}
                    </Grid2>
                </Box>
            );
        }

        // Fallback when notes don't exist
        return (
            <Alert severity="warning">
                Notes are not available for this item
            </Alert>
        );
    };

    const renderAudioPreview = () => {
            // Check if there's an audio array in the item
            if (item?.audio) {
                const audios = Array.isArray(item.audio) ? item.audio : [item.audio];

                return (
                    <Box>
                        {/* Audio Title */}
                        <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, color: '#FFD700' }}>
                            {item?.title}
                        </Typography>

                        {/* Thumbnail */}
                        {item?.thumb && (
                            <Box
                                sx={{
                                    mb: 3,
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    maxHeight: '300px',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={Endpoints.mediaBaseUrl + item.thumb}
                                    alt={item?.title}
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        borderRadius: '12px',
                                    }}
                                />
                            </Box>
                        )}

                        {/* Audio Files */}
                        <Grid2 container spacing={2}>
                            {audios.map((audio, index) => {
                                const audioUrl = audio?.audio || audio?.url || audio?.link;

                                if (!audioUrl) {
                                    return (
                                        <Grid2 key={index} size={{ xs: 12 }}>
                                            <Alert severity="warning">
                                                Audio URL is not available
                                            </Alert>
                                        </Grid2>
                                    );
                                }

                                return (
                                    <Grid2 key={index} size={{ xs: 12 }}>
                                        <Box sx={{ py: 2 }}>
                                            <Box sx={{ textAlign: 'center', mb: 2 }}>
                                                {audio?.thumb ? (
                                                    <Box
                                                        component="img"
                                                        src={Endpoints.mediaBaseUrl + audio.thumb}
                                                        alt={audio?.title || item?.title}
                                                        sx={{
                                                            maxWidth: '70px',
                                                            maxHeight: '70px',
                                                            objectFit: 'cover',
                                                            borderRadius: '8px',
                                                            mb: 2,
                                                        }}
                                                    />
                                                ) : (
                                                    <Box
                                                        sx={{
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            width: '80px',
                                                            height: '80px',
                                                            background: 'rgba(255, 215, 0, 0.2)',
                                                            borderRadius: '16px',
                                                            mb: 2,
                                                        }}
                                                    >
                                                        <AudiotrackIcon sx={{ fontSize: 50, color: '#FFD700' }} />
                                                    </Box>
                                                )}
                                                <Typography variant="body2" sx={{ fontWeight: 600, color: '#fff' }}>
                                                    {audio?.title || `Audio ${index + 1}`}
                                                </Typography>
                                            </Box>

                                            <Box
                                                sx={{
                                                    background: 'rgba(255, 255, 255, 0.05)',
                                                    border: '1px solid rgba(255, 215, 0, 0.2)',
                                                    borderRadius: '12px',
                                                    p: 2,
                                                }}
                                            >
                                                <audio
                                                    controls
                                                    style={{
                                                        width: '100%',
                                                        borderRadius: '8px',
                                                    }}
                                                >
                                                    <source src={audioUrl} type="audio/mpeg" />
                                                    Your browser does not support the audio element.
                                                </audio>
                                            </Box>
                                        </Box>
                                    </Grid2>
                                );
                            })}
                        </Grid2>
                    </Box>
                );
            }

            // Fallback to link/url based audio
            const audioUrl = item?.link || item?.url;

            if (!audioUrl) {
                return (
                    <Alert severity="warning">
                        Audio URL is not available
                    </Alert>
                );
            }

            return (
                <Box sx={{ py: 3 }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                        <Box
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '80px',
                                height: '80px',
                                background: 'rgba(255, 215, 0, 0.2)',
                                borderRadius: '16px',
                                mb: 2,
                            }}
                        >
                            <AudiotrackIcon sx={{ fontSize: 50, color: '#FFD700' }} />
                        </Box>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            {item?.title}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 215, 0, 0.2)',
                            borderRadius: '12px',
                            p: 3,
                            mb: 2,
                        }}
                    >
                        <audio
                            controls
                            style={{
                                width: '100%',
                                borderRadius: '8px',
                            }}
                        >
                            <source src={audioUrl} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </Box>

                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Use the player above to play the audio. You can download it by right-clicking on the player.
                    </Typography>
                </Box>
            );
        };

        const renderFolderPreview = () => {
            return (
                <Box sx={{ textAlign: 'center', py: 6 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        {item?.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Click "Explore" to view the contents of this folder
                    </Typography>
                </Box>
            );
        };

        const renderPreview = () => {
            if (!item) {
                return <Typography>No content available</Typography>;
            }

            switch (item?.entityType) {
                case 'video':
                    return renderVideoPreview();
                case 'blog':
                    return renderBlogPreview();
                case 'note':
                    return renderNotesPreview();
                case 'audio':
                    return renderAudioPreview();
                case 'folder':
                    return renderFolderPreview();
                default:
                    return (
                        <Alert severity="info">
                            Preview not available for this content type
                        </Alert>
                    );
            }
        };

        return (
            <Dialog
                open={open}
                onClose={onClose}
                maxWidth="lg"
                fullWidth
                PaperProps={{
                    sx: {
                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
                        backdropFilter: 'blur(25px)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '20px',
                    }
                }}
            >
                <DialogTitle
                    sx={{
                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: '#fff',
                        fontWeight: 700,
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        {item?.entityType === 'video' && <PlayCircleIcon sx={{ color: '#FFD700' }} />}
                        {item?.entityType === 'blog' && <ArticleIcon sx={{ color: '#FFD700' }} />}
                        {item?.entityType === 'note' && <Box sx={{ width: 24, height: 24, background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)', borderRadius: '4px' }} />}
                        {item?.entityType === 'audio' && <AudiotrackIcon sx={{ color: '#FFD700' }} />}
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {item?.title}
                        </Typography>
                    </Box>
                    <IconButton
                        onClick={onClose}
                        sx={{
                            color: '#fff',
                            '&:hover': {
                                background: 'rgba(255, 255, 255, 0.1)',
                            }
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent
                    sx={{
                        pt: 4,
                        pb: 4,
                        color: '#fff',
                        '& .MuiAlert-root': {
                            background: 'rgba(255, 152, 0, 0.1)',
                            border: '1px solid rgba(255, 152, 0, 0.3)',
                            color: '#FFD700',
                        }
                    }}
                >
                    {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
                            <CircularProgress sx={{ color: '#FFD700' }} />
                        </Box>
                    ) : error ? (
                        <Alert severity="error">{error}</Alert>
                    ) : (
                        renderPreview()
                    )}
                </DialogContent>
            </Dialog>
        );
    }

export default ContentPreview;



