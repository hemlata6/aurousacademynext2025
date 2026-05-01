import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import Network from '@/lib/Netwrok';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import dayjs from 'dayjs';
import Endpoints from '@/constant/endpoints';
import instId from '@/constant/instId';

const OurTeamSection2 = () => {

    // const instId = 120;
    const isMobile = useMediaQuery("(min-width:600px)");
    const [employees, setEmployees] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0); // State to track the active index

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 5 : 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (current, next) => setActiveIndex(next), // Update activeIndex on slide change
        customPaging: (i) => (
            <div
                style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: i === activeIndex ? "#ED1B23" : "#FFD700", // Change color based on active index
                    margin: "0 5px",
                    cursor: "pointer",
                }}
            />
        ),
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
                    dots: true,
                },
            },
        ],
    };


    const getEmployeeApi = async () => {
        try {
            const response = await Network.fetchEmployee(instId.instId);
            let filterEmployee = response?.employees?.filter(employee => employee?.showInApp === true);
            setEmployees(filterEmployee || []);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        getEmployeeApi();
    }, []);

    return (
        <div style={{ paddingTop: isMobile ? '2rem' : '3rem', paddingBottom: isMobile ? '4rem' : '3rem' }}>
            <Grid container spacing={2}>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                    sx={{
                        paddingLeft: isMobile ? '6rem' : '1rem',
                        paddingRight: isMobile ? '6rem' : '1rem'
                    }}
                >
                    <Typography
                        fontSize={'18px'}
                        fontWeight={'400'}
                        textAlign={'center'}
                        py={1}
                    >
                        People Behind Aurous Academy
                    </Typography>
                    <Typography
                        fontSize={'35px'}
                        fontWeight={'500'}
                        textAlign={'center'}
                        py={1}
                    >
                        Meet Your Mentors
                    </Typography>
                    <Typography
                        fontSize={'16px'}
                        fontWeight={'400'}
                        textAlign={'center'}
                        py={1}
                        color='#667085'
                    >
                        We provide unwavering support and insightful guidance to help you thrive
                    </Typography>
                </Grid>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                    sx={{
                        width: '100%',
                    }}
                >
                    <Slider {...settings}>
                        {
                            employees.length > 0 && employees.map((item, index) => {

                                const joiningDate = dayjs(item.joining); // Replace 'item.joining' with the actual key for the joining date
                                const today = dayjs();
                                const years = today.diff(joiningDate, "year");
                                const months = today.diff(joiningDate, "month") % 12;
                                const experience = `${years} Year${years > 1 ? "s" : ""} ${months} Month${months > 1 ? "s" : ""}`;

                                return (
                                    <Box>
                                        <Stack
                                            key={index}
                                            direction={'column'}
                                            sx={{
                                                width: '100%',
                                                maxWidth: isMobile ? '250px' : '250px',
                                                margin: 'auto',
                                            }}
                                        >
                                            <img
                                                alt={`${item?.firstName || ''} ${item?.lastName || ''}`.trim() || 'Aurous Academy faculty member'}
                                                src={item.profile === null ? employee : Endpoints.mediaBaseUrl + item.image}
                                                style={{
                                                    width: '100%',
                                                }}
                                            />
                                            <Box
                                                sx={{
                                                    backgroundColor: '#FFD700',
                                                    borderRadius: '15px 15px 0px 0px',
                                                    py: 1,
                                                }}
                                            >
                                                <Typography
                                                    fontSize={'18px'}
                                                    fontWeight={'500'}
                                                    textAlign={'center'}
                                                    py={0.2}
                                                    color="#ED1B23"
                                                >
                                                    {item?.firstName + ' ' + item?.lastName || 'John Doe'}
                                                </Typography>
                                                <Typography
                                                    fontSize={'14px'}
                                                    fontWeight={'500'}
                                                    textAlign={'center'}
                                                    py={0.2}
                                                    color="#212529"
                                                >
                                                    {item.designation || 'English Language'}
                                                </Typography>
                                                <Typography
                                                    fontSize={'14px'}
                                                    fontWeight={'500'}
                                                    textAlign={'center'}
                                                    py={0.2}
                                                    color="#212529"
                                                >
                                                    {experience || '12 Year Experience'}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                )
                            })
                        }
                    </Slider>
                </Grid>
            </Grid>
        </div>
    )
}

export default OurTeamSection2


