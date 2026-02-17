import { Box, Dialog, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';

const Disclaimer = () => {

    const instId = 120;
    const isMobile = useMediaQuery("(min-width:600px)");

    return (
        <div style={{ paddingLeft: isMobile ? '6rem' : '1rem', paddingRight: isMobile ? '6rem' : '1rem', paddingTop: isMobile ? '2rem' : '1rem', paddingBottom: isMobile ? '4rem' : '1rem' }}>
            <Grid container spacing={2}>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Stack direction={'column'} spacing={2}>
                        <Typography
                            fontSize={'35px'}
                            fontWeight={'600'}
                            textAlign={'center'}
                        >
                            Disclaimer
                        </Typography>
                        <Typography
                            fontSize={'16px'}
                            fontWeight={'600'}
                            textAlign={'center'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            gap={1}
                        >
                            <a href='/' style={{ textDecoration: 'none' }}>
                                Home
                            </a> {">"}
                            <a href='/disclaimer' style={{ textDecoration: 'none' }}>
                                Disclaimer
                            </a>
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Stack direction={'column'} spacing={2}>
                        <Typography
                            fontSize={'16px'}
                            fontWeight={'500'}
                            textAlign={'start'}
                            color='#666d81'
                        >
                            The information provided on the Aurous Academy website and through its associated platforms is intended solely for informational purposes. While we strive to ensure the accuracy and reliability of the information presented, Aurous Academy does not warrant or guarantee the completeness, reliability, or suitability of the content for any particular purpose.
                        </Typography>
                        <Typography
                            fontSize={'16px'}
                            fontWeight={'500'}
                            textAlign={'start'}
                            color='#666d81'
                        >
                            Users accessing the website or enrolling in programs are advised to carefully review the <a href='/privacyPolicy' style={{ textDecoration: 'none' }}> Privacy Policy</a>,<a href='/termConditions' style={{ textDecoration: 'none' }}> Terms and Conditions</a>, and Refund Policy before proceeding. By engaging with our services, you acknowledge and accept these policies in their entirety.
                        </Typography>
                        <Typography
                            fontSize={'16px'}
                            fontWeight={'500'}
                            textAlign={'start'}
                            color='#666d81'
                        >
                            Aurous Academy reserves the right to modify, update, or discontinue any program, eligibility criteria, fee structure, or other details at its discretion without prior notice. All decisions made by Aurous Academy management regarding admissions, scholarships, rewards, and refunds are final and binding.
                        </Typography>
                        <Typography
                            fontSize={'16px'}
                            fontWeight={'500'}
                            textAlign={'start'}
                            color='#666d81'
                        >
                            All transactions on this website are processed securely via a payment gateway provider; no payment or transaction data is stored on our servers.
                        </Typography>
                        <Typography
                            fontSize={'16px'}
                            fontWeight={'500'}
                            textAlign={'start'}
                            color='#666d81'
                        >
                            Any legal disputes or matters related to the academy shall fall under the exclusive jurisdiction of the courts in Bhopal, Madhya Pradesh.
                        </Typography>
                        <Typography
                            fontSize={'16px'}
                            fontWeight={'500'}
                            textAlign={'start'}
                            color='#666d81'
                        >
                            For inquiries, please contact us at <a href="mailto:academyaurous@gmail.com" style={{ textDecoration: 'none' }}>academyaurous@gmail.com</a>.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default Disclaimer


