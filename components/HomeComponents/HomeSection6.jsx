import { Box, Button, Chip, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import Grid from '@mui/material/Grid2';
import WatchVideoSection from '@/components/CommonSections/WatchSection';

const HomeSection6 = () => {
    const isMobile = useMediaQuery("(min-width:600px)");
    return (
        <div style={{ paddingLeft: isMobile ? '0rem' : '0rem', paddingRight: isMobile ? '0rem' : '0rem', paddingTop: isMobile ? '0rem' : '0rem', paddingBottom: isMobile ? '0rem' : '0rem' }}>
            {/* <Grid container>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                    height={'30vh'}
                    sx={{ 
                        background: '#264796'
                    }}
                >
                    1
                </Grid>
            </Grid> */}
            <WatchVideoSection />
        </div>
    )
}

export default HomeSection6;


