'use client';

import React, { useEffect, useState } from 'react'
import Network from '@/lib/Netwrok';
import { usePathname } from 'next/navigation';
import Grid from '@mui/material/Grid2';
import { Card, Stack, useMediaQuery, Box, Typography, Container, IconButton, Fade, Skeleton } from '@mui/material';
import ModalImage from 'react-modal-image';
import Endpoints from '@/constant/endpoints';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ImageIcon from '@mui/icons-material/Image';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import instId from '@/constant/instId';

// Add custom styles for modal
const modalStyles = `
  .modal-image {
    z-index: 9999 !important;
  }
  
  .modal-image img {
    max-width: 95vw !important;
    max-height: 95vh !important;
    object-fit: contain !important;
    border-radius: 8px !important;
  }
  
  .modal-image .modal-content {
    background-color: rgba(0, 0, 0, 0.95) !important;
    backdrop-filter: blur(10px) !important;
  }
  
  .modal-image .modal-close {
    color: #FFD700 !important;
    font-size: 2rem !important;
    font-weight: bold !important;
    background: rgba(255, 215, 0, 0.2) !important;
    border-radius: 50% !important;
    width: 50px !important;
    height: 50px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    border: 2px solid #FFD700 !important;
    transition: all 0.3s ease !important;
  }
  
  .modal-image .modal-close:hover {
    background: rgba(255, 215, 0, 0.4) !important;
    transform: scale(1.1) !important;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes zoomIn {
    from { 
      opacity: 0;
      transform: scale(0.8);
    }
    to { 
      opacity: 1;
      transform: scale(1);
    }
  }

  .fullscreen-modal {
    animation: fadeIn 0.3s ease-out;
  }

  .fullscreen-image {
    animation: zoomIn 0.3s ease-out;
  }
`;

// Add styles to head
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = modalStyles;
    document.head.appendChild(styleSheet);
}

const BannerChildSections = () => {

    // const instId = 120;
    const isMobile = useMediaQuery("(min-width:600px)");
    const pathname = usePathname();
    const domainData = (typeof window !== 'undefined' && window.location.state?.domainData) || [];
    const [galleryImage, setGalleryImage] = useState([]);
    const [domainId, setDomainId] = useState(0);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    // useEffect(() => {
    //     if (domainData?.length > 0) {
    //         setDomainId(domainData[0])
    //     }
    // }, [domainData]);

    useEffect(() => {
        // if (domainId?.id) {
        getGallery();
        // }
    }, [])

    const getGallery = async () => {
        const body = {
            "group": domainId?.name
        }
        try {
            setLoading(true);
            const response = await Network.fetchGallery(body, instId.instId);
            const fetchedBanners = response || [];
            setGalleryImage(fetchedBanners);
        } catch (error) {
            console.error('Failed to fetch banners:', error);
            setGalleryImage([]);
        } finally {
            setLoading(false);
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
                    py: { xs: 4, md: 6 },
                    px: { xs: 2, md: 6 }
                }}
            >
                {/* Header Section */}
                <Box sx={{ mb: 6 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 4,
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '20px',
                            p: 3,
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        <IconButton
                            href='/banner'
                            sx={{
                                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                color: '#000',
                                mr: 3,
                                width: 56,
                                height: 56,
                                boxShadow: '0 4px 20px rgba(255, 215, 0, 0.4)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    boxShadow: '0 6px 25px rgba(255, 215, 0, 0.6)',
                                }
                            }}
                        >
                            <ArrowCircleLeftIcon sx={{ fontSize: 32 }} />
                        </IconButton>

                        <Box sx={{ flexGrow: 1 }}>
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
                                    mb: 2,
                                }}
                            >
                                <PhotoLibraryIcon sx={{ color: '#FFD700', mr: 1, fontSize: 20 }} />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#fff',
                                        fontWeight: 500,
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    Collection
                                </Typography>
                            </Box>

                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 700,
                                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                                    lineHeight: 1.2,
                                }}
                            >
                                {domainData?.name || 'Gallery Collection'}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Gallery Grid */}
                {loading ? (
                    <Grid container spacing={4}>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                                <Skeleton
                                    variant="rectangular"
                                    sx={{
                                        height: 280,
                                        borderRadius: '20px',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                ) : galleryImage?.length > 0 ? (
                    <Grid container spacing={4}>
                        {galleryImage.map((item, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                                <Fade in={true} timeout={300 + index * 100}>
                                    <Card
                                        onClick={() => handleImageClick(Endpoints?.mediaBaseUrl + item)}
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
                                                '& .image-container': {
                                                    transform: 'scale(1.1)',
                                                },
                                                '& .overlay': {
                                                    opacity: 1,
                                                },
                                                '& .zoom-icon': {
                                                    opacity: 1,
                                                    transform: 'scale(1)',
                                                },
                                                '& .view-text': {
                                                    opacity: 1,
                                                    transform: 'translateY(0)',
                                                }
                                            }
                                        }}
                                    >
                                        {/* Image Container */}
                                        <Box
                                            className="image-container"
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                transition: 'transform 0.4s ease',
                                            }}
                                        >
                                            <img
                                                src={Endpoints?.mediaBaseUrl + item}
                                                alt={`Gallery image ${index + 1}`}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    borderRadius: '20px',
                                                    pointerEvents: 'none'
                                                }}
                                            />
                                        </Box>

                                        {/* Hover Overlay */}
                                        <Box
                                            className="overlay"
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                pointerEvents: 'none',
                                            }}
                                        >
                                            <Box
                                                className="zoom-icon"
                                                sx={{
                                                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                                    borderRadius: '50%',
                                                    width: 70,
                                                    height: 70,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    opacity: 0,
                                                    transform: 'scale(0.5)',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: '0 4px 20px rgba(255, 215, 0, 0.4)',
                                                    mb: 2,
                                                }}
                                            >
                                                <ZoomInIcon sx={{ color: '#000', fontSize: 32, fontWeight: 'bold' }} />
                                            </Box>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#FFD700',
                                                    fontWeight: 600,
                                                    textAlign: 'center',
                                                    opacity: 0,
                                                    transform: 'translateY(10px)',
                                                    transition: 'all 0.3s ease 0.1s',
                                                }}
                                                className="view-text"
                                            >
                                                Click to view full size
                                            </Typography>
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
                                </Fade>
                            </Grid>
                        ))}
                    </Grid>
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
                        <ImageIcon sx={{ fontSize: 80, color: 'rgba(255, 255, 255, 0.3)', mb: 3 }} />
                        <Typography
                            variant="h4"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontWeight: 600,
                                mb: 2
                            }}
                        >
                            No Images Found
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.5)',
                                maxWidth: '400px',
                                mx: 'auto'
                            }}
                        >
                            This collection doesn't contain any images yet. Check back soon for new content.
                        </Typography>
                    </Box>
                )}
            </Container>

            {/* Full Screen Modal */}
            {modalOpen && selectedImage && (
                <Box
                    onClick={handleCloseModal}
                    className="fullscreen-modal"
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        backdropFilter: 'blur(10px)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                    }}
                >
                    {/* Close Button */}
                    <IconButton
                        onClick={handleCloseModal}
                        sx={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            background: 'rgba(255, 215, 0, 0.2)',
                            color: '#FFD700',
                            width: 60,
                            height: 60,
                            border: '2px solid #FFD700',
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            transition: 'all 0.3s ease',
                            zIndex: 10000,
                            '&:hover': {
                                background: 'rgba(255, 215, 0, 0.4)',
                                transform: 'scale(1.1)',
                            }
                        }}
                    >
                        ✕
                    </IconButton>

                    {/* Full Screen Image */}
                    <img
                        src={selectedImage}
                        alt="Full size gallery image"
                        onClick={(e) => e.stopPropagation()}
                        className="fullscreen-image"
                        style={{
                            maxWidth: '95vw',
                            maxHeight: '95vh',
                            objectFit: 'contain',
                            borderRadius: '8px',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
                            cursor: 'default',
                        }}
                    />

                    {/* Instructions */}
                    <Typography
                        sx={{
                            position: 'absolute',
                            bottom: 30,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontSize: '1.1rem',
                            fontWeight: 500,
                            textAlign: 'center',
                            background: 'rgba(0, 0, 0, 0.5)',
                            padding: '12px 24px',
                            borderRadius: '25px',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        Click anywhere to close
                    </Typography>
                </Box>
            )}
        </Box>
    )
}

export default BannerChildSections


