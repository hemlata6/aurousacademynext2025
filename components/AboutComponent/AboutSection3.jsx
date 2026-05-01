import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from 'next/navigation';
import instId from '@/constant/instId';

const AboutSection3 = () => {

    // const instId = 120;
    const isMobile = useMediaQuery("(min-width:600px)");
    const [gallerData, setGallerData] = useState([]);
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNavigate = () => {
        router.push('/gallery');
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        appendDots: (dots) => (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                }}
            >
                {dots}
            </div>
        ),
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };

    const fetchGallerAPI = async () => {
        try {
            const response = await Network.fetchInstituteDetail(instId.instId);
            setGallerData(response?.institute?.gallery);
            // Endpoints.mediaBaseUrl = response.instituteTechSettingModals.mediaUrl;
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        fetchGallerAPI();
    }, []);

    return (
        <div style={{ paddingLeft: isMobile ? '6rem' : '1rem', paddingRight: isMobile ? '6rem' : '1rem', paddingTop: isMobile ? '2rem' : '2rem', paddingBottom: isMobile ? '4rem' : '2rem' }}>
            <Grid container spacing={2}>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Slider {...settings}>
                        {
                            gallerData.map((item, i) => (
                                <Grid
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                    key={i}
                                >
                                    <Grid
                                        item
                                        xs={12}
                                        sm={3}
                                        lg={3}
                                        md={3}
                                        sx={{ px: 2, py: 2 }}
                                    >
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                                objectFit: "cover",
                                            }}
                                            alt={`Aurous Academy gallery slide ${i + 1}`}
                                            src={`${Endpoints.mediaBaseUrl}${item}`}
                                        />
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </Slider>
                </Grid>

            </Grid>
        </div>
    )
}

export default AboutSection3


