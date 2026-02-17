import React from 'react'

const YouTubePlayer = ({ videoUrl }) => {
    const videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0]; // Extract the video ID
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <iframe
            // width="560"
            // height="315"
            src={embedUrl}
            title="YouTube video player"
            // frameBorder="0"
            style={{
                width: '100%',
                // height: '780%'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowFullScreen
        />
    );
};

export default YouTubePlayer


