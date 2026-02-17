import { Box, Button, Card, CardActions, CardContent, FormControl, MenuItem, Select, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Grid from '@mui/material/Grid2';

const ThankYouPage = () => {
    return (
        <React.Fragment>
            <Grid container sx={{ display: "flex", justifyContent: "center", textAlign: "center", height: "100%" }}>
                <Grid xs={12} sm={12} md={12} lg={12} paddingLeft={"0px"} mt={['0px']} sx={{ display: "flex", alignItems: "center", height: "100%" }}>
                    <Card sx={{ boxShadow: "none" }}>
                        <CardContent sx={{ p: [2, 5] }}>
                            <Box>
                                <CheckCircleOutlineOutlinedIcon color="success" sx={{ fontSize: "100px" }} />
                            </Box>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                fontFamily={'Inter , sans-serif'}
                                fontSize={['40px', '46px']}
                                fontWeight={'500'}
                                lineHeight={'60px'}
                            >
                                Thank You for Submitting
                            </Typography>
                            <Typography
                                sx={{
                                    padding: '9px',
                                    textAlign: 'center',
                                    width: '100%'
                                }}
                                fontFamily={'Inter , sans-serif'}
                                fontSize={'20px'}
                                fontWeight={'400'}
                                lineHeight={'22px'}
                            >
                                we will connect you soon
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
};

export default ThankYouPage;


