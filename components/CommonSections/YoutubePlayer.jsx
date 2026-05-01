import React from 'react'

const getYouTubeVideoId = (videoUrl = '') => {
    try {
        if (!videoUrl) return '';

        if (videoUrl.includes('youtu.be/')) {
            return videoUrl.split('youtu.be/')[1]?.split('?')[0] || '';
        }

        if (videoUrl.includes('youtube.com/watch?v=')) {
            return videoUrl.split('v=')[1]?.split('&')[0] || '';
        }

        if (videoUrl.includes('youtube.com/embed/')) {
            return videoUrl.split('embed/')[1]?.split('?')[0] || '';
        }

        if (videoUrl.includes('youtube.com/shorts/')) {
            return videoUrl.split('shorts/')[1]?.split('?')[0] || '';
        }
    } catch {
        return '';
    }

    return '';
};

const YouTubePlayer = ({ videoUrl }) => {
    const videoId = getYouTubeVideoId(videoUrl);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    if (!videoId) {
        return null;
    }

    return (
        <iframe
            // width="560"
            // height="315"
            src={embedUrl}
            title="YouTube video player"
            // frameBorder="0"
            loading="lazy"
            style={{
                width: '100%',
                // height: '780%'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    );
};

export default YouTubePlayer


