import { Box, Dialog, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react'
import HomeBannerSlider from './HomeBannerSlider';
import Grid from '@mui/material/Grid2';
import Network from '@/lib/Netwrok';
import AnnouncementDialog from '@/components/CommonSections/AnnouncementDialog';
import instId from '@/constant/instId';
import HomepageSeoSections from '@/components/SEO/HomepageSeoSections';

const HomeSection1 = () => {

    // const instId = 120;
    const isMobile = useMediaQuery("(min-width:600px)");
    const [anncouncementData, setAnncouncementData] = useState([]);
    const [selectedData, setSelectedData] = useState([]);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleSelectData = (e, data) => {
        setSelectedData(data);
        handleOpen();
    };

    const getAllAnnouncement = async () => {
        try {
            const response = await Network.fetchAnnouncementUrl(instId.instId);
            setAnncouncementData(response?.announcement);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        getAllAnnouncement();
    }, []);


    return (
        <Box sx={{
            width: '100%',
            overflow: 'hidden',
            maxWidth: '100vw',
            boxSizing: 'border-box'
        }}>
            <Grid container sx={{ width: '100%', margin: 0, padding: 0 }}>
                <Grid item xs={12} sx={{ width: '100%', padding: 0 }}>
                    <Box
                        sx={{
                            width: '100%',
                            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                            // borderBottom: '2px solid #E8410E',
                            overflow: 'hidden',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Stack
                            direction={'row'}
                            width={'100%'}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'flex-start'}
                            sx={{
                                px: { xs: 1, sm: 2, md: 3 },
                                py: { xs: 1, sm: 1.5 },
                                width: '100%',
                                overflow: 'hidden',
                                boxSizing: 'border-box'
                            }}
                        >
                            <Box
                                sx={{
                                    flexShrink: 0,
                                    mr: { xs: 1, sm: 1.5 },
                                    display: 'flex',
                                    alignItems: 'center',
                                    background: 'rgba(232, 65, 14, 0.1)',
                                    borderRadius: '50%',
                                    p: { xs: 0.5, sm: 0.8 },
                                    width: { xs: '28px', sm: '32px' },
                                    height: { xs: '28px', sm: '32px' },
                                    justifyContent: 'center'
                                }}
                            >
                                <img
                                    alt='speaker'
                                    style={{
                                        width: '16px',
                                        height: '16px',
                                        filter: 'hue-rotate(340deg) saturate(2)'
                                    }}
                                    src="/Images/speakerIcon.svg"
                                />
                            </Box>
                            <Box
                                sx={{
                                    flex: 1,
                                    overflow: 'hidden',
                                    minWidth: 0,
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    borderRadius: '15px',
                                    py: 0.5,
                                    px: { xs: 0.5, sm: 1 },
                                    border: '1px solid rgba(232, 65, 14, 0.2)',
                                    maxWidth: 'calc(100vw - 80px)'
                                }}
                            >
                                <Box sx={{
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    width: '100%',
                                    position: 'relative'
                                }}>
                                    <Box
                                        sx={{
                                            display: 'inline-block',
                                            animation: 'scroll 30s linear infinite',
                                            willChange: 'transform'
                                        }}
                                    >
                                        {anncouncementData && anncouncementData.length > 0 &&
                                            anncouncementData.map((item, index) => (
                                                <Typography
                                                    component="span"
                                                    key={index}
                                                    onClick={(e) => handleSelectData(e, item)}
                                                    sx={{
                                                        marginRight: '30px',
                                                        color: '#E8410E',
                                                        fontSize: { xs: '13px', sm: '14px', md: '15px' },
                                                        fontWeight: '500',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        textDecoration: 'none',
                                                        '&:hover': {
                                                            color: '#d73807',
                                                            textShadow: '0 2px 4px rgba(232, 65, 14, 0.3)'
                                                        }
                                                    }}
                                                >
                                                    📕 {item?.title}
                                                </Typography>
                                            ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ width: '100%', padding: 0 }}>
                    <HomeBannerSlider />
                </Grid>
            </Grid>
            {/* <HomepageSeoSections /> */}
            <Dialog
                open={open}
                onClose={handleClose}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "90%",
                            height: 'auto',
                            maxWidth: "600px",
                            maxHeight: "85vh",
                            borderRadius: '12px',
                            overflow: 'hidden',
                            margin: '20px'
                        },
                    },
                }}
            >
                <AnnouncementDialog data={selectedData} handleClose={handleClose} from={'section1'} />
            </Dialog>
        </Box>
    )
}

export default HomeSection1


