'use client';

import { Box, Button, Card, CardContent, CardMedia, Chip, Dialog, Stack, Typography, useMediaQuery, Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import images from '@/lib/images';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ModalImage from "react-modal-image";
import { useRouter } from 'next/navigation';

const FolderImage = images.gallery;
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BannerSection = () => {

    const instId = 120;
    const router = useRouter();
    const isMobile = useMediaQuery("(min-width:600px)");
    const [banners, setBanners] = useState([]);
    const [galleryImage, setGalleryImage] = useState([]);
    const [domainData, setDomainData] = useState([]);
    const [domainId, setDomainId] = useState(0);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedSubgroup, setSelectedSubgroup] = useState(null);
    // const [openDialog, setOpenDialog] = useState(false);

    // console.log('domainData', domainData, galleryImage, domainId)

    useEffect(() => {
        // getAllCourses();
        getBanners();
        getDomainList();
    }, []);

    useEffect(() => {
        if (domainData?.length > 0) {
            setDomainId(domainData[0])
        }
    }, [domainData])


    useEffect(() => {
        if (domainId?.id) {
            getGallery();
        }
    }, [domainId])
    const handleOpenVideo = (e, data) => {
        // if ((data?.id === 9) || (data?.id === 7)) {
        //     setEditVideo(`https://youtu.be/SFLm8jygpaE?si=mVuWG6jXp4iPCQW4`);
        // } else if (data?.id === 8) {
        //     setEditVideo(`https://youtu.be/Ld1jdqCdqiE?si=eH4nTX0YEkKDIAib`);
        // } else if (data?.id === 6) {
        //     setEditVideo(`https://youtu.be/YzP8UkoImmk?si=xevfxCy7EHmYKhF9`);
        // } else if (data?.id === 5) {
        //     setEditVideo(`https://youtu.be/nu96vTgq_Ww?si=xtjcC4CJqQH8DcPv`);
        // } else if (data?.id === 4) {
        //     setEditVideo(`https://youtu.be/Ma6QUh96HHw?si=kpEm3Ina5C_-cAM2`);
        // } else if (data?.id === 3) {
        //     setEditVideo(`https://youtu.be/tXXd1EHE0R8?si=hdxnn4CnqwpYfpn8`);
        // } else if (data?.id === 2) {
        //     setEditVideo(`https://youtu.be/vR6mO9V1z9A?si=mrQjZ3J5GHzD7bS4`);
        // } else if (data?.id === 1) {
        //     setEditVideo(`https://youtu.be/UapiV9ypx0k?si=YLt3ElLolO4-sJq6`);
        // };
        // setOpenDialog(true);
    };

    // const handleCloseVideo = () => {
    //     setOpenDialog(false);
    // };

    const getDomainList = async () => {
        try {
            const response = await Network.fetchDomain(instId);
            const domain = response?.domains;
            const galleryChildArray = (domain.find(item => item.name === 'Gallery') || {}).child || [];
            setDomainData(galleryChildArray);
        } catch (error) {
            console.error("Error fetching domains:", error);
        }
    };

    const getBanners = async () => {
        try {
            const response = await Network.fetchBannerss(instId);
            const fetchedBanners = response.banners || [];
            if (fetchedBanners.length > 0) {
                const extendedBanners = [...fetchedBanners, fetchedBanners[0]];
                setBanners(extendedBanners);
            } else {
                setBanners([]);
            }
        } catch (error) {
            console.error('Failed to fetch banners:', error);
            setBanners([]);
        }
    };

    const getGallery = async () => {
        const body = {
            "group": domainId?.name
        }
        try {
            const response = await Network.fetchGallery(body, instId);
            const fetchedBanners = response || [];
            setGalleryImage(fetchedBanners);
        } catch (error) {
            console.error('Failed to fetch banners:', error);
            setGalleryImage([]);
        }
    };



    // const galleryData = [
    //     {
    //         title: "Events",
    //         thumbnail: "https://via.placeholder.com/150", // Replace with actual image URL
    //         subgroups: [
    //             {
    //                 title: "Festival Celebration",
    //                 thumbnail: "https://via.placeholder.com/150",
    //                 images: [
    //                     "https://via.placeholder.com/150",
    //                     "https://via.placeholder.com/150"
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         title: "Results",
    //         thumbnail: "https://via.placeholder.com/150",
    //         images: [
    //             "https://via.placeholder.com/150"
    //         ]
    //     }
    // ];

    const handleDomainClick = (item) => {
        setDomainId(item);
        navigate(`/bannerchild/${item?.id}`, { state: { domainData: item } });
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
                        <PhotoLibraryIcon sx={{ color: '#FFD700', mr: 1 }} />
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#fff',
                                fontWeight: 500,
                                letterSpacing: '0.5px'
                            }}
                        >
                            Explore Our Collection
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
                        Gallery
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
                        Discover moments that define excellence through our curated collection of memories and achievements
                    </Typography>
                </Box>

                {/* Gallery Cards */}
                <Grid container spacing={4} justifyContent="center">
                    {domainData.map((item, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                            <Card
                                onClick={() => handleDomainClick(item)}
                                sx={{
                                    position: 'relative',
                                    height: 280,
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    '&:hover': {
                                        transform: 'translateY(-10px) scale(1.02)',
                                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                                        '& .card-image': {
                                            transform: 'scale(1.1)',
                                        },
                                        '& .card-overlay': {
                                            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 100%)',
                                        },
                                        '& .card-content': {
                                            transform: 'translateY(-5px)',
                                        },
                                        '& .view-more': {
                                            opacity: 1,
                                            transform: 'translateX(0)',
                                        }
                                    }
                                }}
                            >
                                {/* Background Image */}
                                <Box
                                    className="card-image"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundImage: `url(${"/PRAYAG VERMA.jpg"})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        transition: 'transform 0.4s ease',
                                    }}
                                />

                                {/* Gradient Overlay */}
                                <Box
                                    className="card-overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.6) 100%)',
                                        transition: 'background 0.4s ease',
                                    }}
                                />

                                {/* Content */}
                                <Box
                                    className="card-content"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        p: 3,
                                        transition: 'transform 0.4s ease',
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: '#fff',
                                            fontWeight: 700,
                                            mb: 1,
                                            fontSize: { xs: '1.25rem', md: '1.5rem' }
                                        }}
                                    >
                                        {item?.name}
                                    </Typography>

                                    <Box
                                        className="view-more"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: '#FFD700',
                                            fontWeight: 600,
                                            opacity: 0,
                                            transform: 'translateX(-10px)',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <Typography variant="body2" sx={{ mr: 1 }}>
                                            View Collection
                                        </Typography>
                                        <ArrowForwardIcon fontSize="small" />
                                    </Box>
                                </Box>

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
                                        '.MuiCard-root:hover &': {
                                            left: '100%',
                                        }
                                    }}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Empty State */}
                {domainData.length === 0 && (
                    <Box
                        sx={{
                            textAlign: 'center',
                            py: 8,
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '20px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <PhotoLibraryIcon sx={{ fontSize: 80, color: 'rgba(255, 255, 255, 0.3)', mb: 3 }} />
                        <Typography
                            variant="h5"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontWeight: 600,
                                mb: 2
                            }}
                        >
                            No Gallery Items Found
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.5)',
                            }}
                        >
                            Check back soon for new content
                        </Typography>
                    </Box>
                )}
            </Container>
        </Box>
    )
}

export default BannerSection


