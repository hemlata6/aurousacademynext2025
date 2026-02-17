import { Box, Dialog, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';

const TermOfUseSection = () => {

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
                            Terms And Conditions
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
                            <a href='/termConditions' style={{ textDecoration: 'none' }}>
                                Terms And Conditions
                            </a>
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Stack direction={'column'} spacing={2}>
                        <Typography
                            fontSize={'30px'}
                            fontWeight={'700'}
                            textAlign={'start'}
                            color='#131d3b'
                        >
                            Terms and Conditions
                        </Typography>
                        <Typography
                            fontSize={'16px'}
                            fontWeight={'500'}
                            textAlign={'start'}
                            color='#666d81'
                        >
                            All transactions are processed through a gateway provider and are not stored or processed on our servers. So, in any case we do not store any of the payer's payment or transaction information.
                        </Typography>
                        <Typography
                            fontSize={'16px'}
                            fontWeight={'500'}
                            textAlign={'start'}
                            color='#666d81'
                        >
                            When you visit the institute Official Web site, the following information may be collected from you, either voluntarily or involuntarily:
                        </Typography>
                        <Typography
                            fontSize={'16px'}
                            fontWeight={'500'}
                            textAlign={'start'}
                            color='#666d81'
                        >
                            1. Your computer or network IP address, which must be validated in order for you to access the Aurous Academy Official Web site.
                        </Typography>
                        <Typography
                            fontSize={'16px'}
                            fontWeight={'500'}
                            textAlign={'start'}
                            color='#666d81'
                        >
                            2. Your e-mail address and message when you communicate electronically with us.
                        </Typography>
                        <Typography
                            fontSize={'16px'}
                            fontWeight={'500'}
                            textAlign={'start'}
                            color='#666d81'
                        >
                            3. Aurous Academy reserves the right to change / cancel any program, eligibility criterion, and course fee without prior notice.
                        </Typography>
                        <Typography
                            fontSize={'16px'}
                            fontWeight={'500'}
                            textAlign={'start'}
                            color='#666d81'
                        >
                            <span style={{ fontWeight: '600' }}>Note:</span> By submitting a payment through the online-payments site you are agreeing to these terms and conditions including any updated changes in terms and conditions from time to time through our website.
                        </Typography>
                        <Typography
                            fontSize={'30px'}
                            fontWeight={'700'}
                            textAlign={'start'}
                            color='#131d3b'
                        >
                            Terms & Conditions and Eligibility Criteria (PRAGYAN)
                        </Typography>
                        <Typography
                            fontSize={'16px'}
                            fontWeight={'500'}
                            textAlign={'start'}
                            color='#666d81'
                        >
                            The following are the Eligibility Criteria and detailed terms & conditions of PRAGYAN for those selected to get rewards. Failure to comply with the following rules may result in the disqualification for rewards.
                        </Typography>
                        <Typography
                            fontSize={'16px'}
                            fontWeight={'700'}
                            textAlign={'start'}
                            color='#131d3b'
                        >
                            Eligibility Criteria
                        </Typography>
                        <Stack direction={'column'} spacing={2} padding={1}>
                            <Typography
                                fontSize={'16px'}
                                fontWeight={'500'}
                                textAlign={'start'}
                                color='#666d81'
                            >
                                &#x2022; Students of class 10th moving to 11th are eligible for reward of Macbook, iphone, ipad, smart watches and fee waiver as well as career counselling.
                            </Typography>
                            <Typography
                                fontSize={'16px'}
                                fontWeight={'500'}
                                textAlign={'start'}
                                color='#666d81'
                            >
                                &#x2022; Students of class 11th moving to 12th are eligible for reward of smart watches and fee waiver as well as career counselling.
                            </Typography>
                            <Typography
                                fontSize={'16px'}
                                fontWeight={'500'}
                                textAlign={'start'}
                                color='#666d81'
                            >
                                &#x2022; Student of class 7th,8th, 9th and 11th moving to 8th, 9th,10th and 12th are eligible for fee waivers as well as career counselling.
                            </Typography>
                            <Typography
                                fontSize={'16px'}
                                fontWeight={'500'}
                                textAlign={'start'}
                                color='#666d81'
                            >
                                &#x2022;  Enrollment in long term classroom program of Aurous Academy for the academic year 2025-2026 is mandatory and one must have complete enrolment formalities before Nov 2024.
                            </Typography>
                            <Typography
                                fontSize={'16px'}
                                fontWeight={'500'}
                                textAlign={'start'}
                                color='#666d81'
                            >
                                &#x2022; All decisions on the winners will be taken by the Management of Aurous Academy and it will be final and binding.
                            </Typography>
                        </Stack>
                        <Typography
                            fontSize={'16px'}
                            fontWeight={'700'}
                            textAlign={'start'}
                            color='#131d3b'
                        >
                            Terms and Conditions
                        </Typography>
                        <Stack direction={'column'} spacing={2} padding={1}>
                            <Typography
                                fontSize={'16px'}
                                fontWeight={'500'}
                                textAlign={'start'}
                                color='#666d81'
                            >
                                &#x2022; No cash equivalent to rewards will be provided by Aurous Academy in the event parents/students are not interested to receive rewards. • List of top students will be declared in the Feb 25.
                            </Typography>
                            <Typography
                                fontSize={'16px'}
                                fontWeight={'500'}
                                textAlign={'start'}
                                color='#666d81'
                            >
                                &#x2022; Tie Breaker Rule:
                            </Typography>
                            <Typography
                                fontSize={'16px'}
                                fontWeight={'500'}
                                textAlign={'start'}
                                color='#666d81'
                            >
                                If many students secure equal aggregate marks, then higher rank will be given by comparing subject scores in priority of Maths, Physics & Chemistry up to class X. (If all subject scores are also equal then lower age student will be given higher rank.)
                            </Typography>
                            <Typography
                                fontSize={'16px'}
                                fontWeight={'500'}
                                textAlign={'start'}
                                color='#666d81'
                            >
                                &#x2022; The student who attempts to appear in multiple offline exams will not be eligible for any cash reward and scholarship
                            </Typography>
                            <Typography
                                fontSize={'16px'}
                                fontWeight={'500'}
                                textAlign={'start'}
                                color='#666d81'
                            >
                                &#x2022; The Courts at Bhopal shall have exclusive jurisdiction and the parties hereby submit themselves to the jurisdiction of Bhopal Courts.
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default TermOfUseSection


