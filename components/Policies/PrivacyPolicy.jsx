import { Box, Container, Stack, Typography, useMediaQuery, Card, CardContent, Fade, Chip, IconButton, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import SecurityIcon from '@mui/icons-material/Security';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PolicyIcon from '@mui/icons-material/Policy';
import RefundIcon from '@mui/icons-material/AccountBalance';

const PrivacyPolicy = () => {
    const [isVisible, setIsVisible] = useState(false);
    const isMobile = useMediaQuery("(max-width:768px)");

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const privacyPolicyData = [
        "All transactions are processed through a gateway provider and are not stored or processed on our servers. So, in any case we do not store any of the payer's payment or transaction information.",
        "When you visit the institute Official Web site, the following information may be collected from you, either voluntarily or involuntarily:",
        "1. Your computer or network IP address, which must be validated in order for you to access the Aurous Academy Official Web site.",
        "2. Your e-mail address and message when you communicate electronically with us.",
        "3. Aurous Academy reserves the right to change/cancel any program, eligibility criterion, and course fee without prior notice."
    ];

    const refundPolicyData = [
        "1. Refund applications will be accepted ONLY in cases of change of stream, medical reasons, transfer/change of residence etc.",
        "2. AUROUS ACADEMY will follow its standard protocols to gauge the genuineness and authenticity of the reasons raised by a parent for seeking withdrawal. Hence it is compulsory for a parent to submit proofs of all reasons cited in the withdrawal request. Also, AUROUS ACADEMY will contact and clarify any information published in the documents submitted from the parent and/or the authority which has published the documents.",
        "3. Student/Parent applying for refund has to submit a written application mentioning the exact reason(s) of withdrawal at the center where the student is studying. Refund requests made verbally or through phone/SMS shall not be entertained in any cases.",
        "4. There will be a meeting of the student & parent with the center staff after the withdrawal application is received. It is compulsory to attend this meeting and complete the withdrawal process.",
        "5. The date of commencement of Program will be considered as the starting date of the Program & not the joining date of the student in the Institute for calculating the refund.",
        "6. **PRAGYAN Fee Refund:** No refund of the Admission Cum Scholarship Test Fee shall be made under any circumstances whatsoever.",
        "7. **APRE Fee Refund:** No refund of the Admission Cum Scholarship Test Fee shall be made under any circumstances whatsoever.",
        "8. **Registration Fee Refund:** No refund of the Registration Fee shall be made under any circumstances whatsoever.",
        "9. Any Legal Matter/Dispute related to Fee Refund is subject to Bhopal (Madhya Pradesh) jurisdiction only."
    ];

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
                py: { xs: 4, md: 8 },
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.08) 0%, transparent 50%)`,
                    pointerEvents: 'none',
                    zIndex: 0,
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Breadcrumb Navigation */}
                <Fade in={isVisible} timeout={500}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 4,
                            opacity: 0.8,
                        }}
                    >
                        <IconButton size="small" sx={{ color: '#FFD700' }}>
                            <HomeIcon />
                        </IconButton>
                        <ChevronRightIcon sx={{ color: '#FFD700', fontSize: 16 }} />
                        <Typography variant="body2" sx={{ color: '#FFD700' }}>
                            Privacy Policy
                        </Typography>
                    </Box>
                </Fade>

                {/* Hero Section */}
                <Fade in={isVisible} timeout={1000}>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: 700,
                                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                mb: 3,
                                fontSize: { xs: '2rem', md: '3rem' },
                                textShadow: '0 4px 20px rgba(255, 215, 0, 0.3)',
                            }}
                        >
                            Privacy Policy & Refund Policy
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                maxWidth: '800px',
                                margin: '0 auto',
                                lineHeight: 1.6,
                                fontSize: { xs: '1rem', md: '1.1rem' },
                            }}
                        >
                            Your privacy and financial security are our top priorities. Please review our policies carefully.
                        </Typography>
                    </Box>
                </Fade>

                <Grid container spacing={4}>
                    {/* Privacy Policy Section */}
                    <Grid xs={12} md={6}>
                        <Fade in={isVisible} timeout={1200}>
                            <Card
                                sx={{
                                    height: '100%',
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '4px',
                                        background: 'linear-gradient(90deg, #4CAF50 0%, #45a049 100%)',
                                    },
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
                                        border: '1px solid rgba(76, 175, 80, 0.4)',
                                        boxShadow: '0 20px 40px rgba(76, 175, 80, 0.2)',
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <SecurityIcon sx={{ color: '#4CAF50', fontSize: 32, mr: 2 }} />
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                color: '#4CAF50',
                                                fontWeight: 600,
                                                fontSize: { xs: '1.5rem', md: '2rem' },
                                            }}
                                        >
                                            Privacy Policy
                                        </Typography>
                                    </Box>
                                    
                                    <Stack spacing={3}>
                                        {privacyPolicyData.map((item, index) => (
                                            <Typography
                                                key={index}
                                                variant="body1"
                                                sx={{
                                                    color: 'rgba(255, 255, 255, 0.9)',
                                                    lineHeight: 1.6,
                                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                                    textAlign: 'justify',
                                                    pl: index > 1 && index < 5 ? 2 : 0,
                                                }}
                                            >
                                                {item}
                                            </Typography>
                                        ))}
                                        
                                        <Box sx={{ mt: 3, p: 3, borderRadius: 2, background: 'rgba(255, 193, 7, 0.1)', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: 'rgba(255, 255, 255, 0.9)',
                                                    lineHeight: 1.6,
                                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                                    textAlign: 'justify',
                                                }}
                                            >
                                                <strong style={{ color: '#FFD700' }}>Note:</strong> By submitting a payment through the online-payments site you are agreeing to these terms and conditions including any updated changes in terms and conditions from time to time through our website.
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Fade>
                    </Grid>

                    {/* Refund Policy Section */}
                    <Grid xs={12} md={6}>
                        <Fade in={isVisible} timeout={1400}>
                            <Card
                                sx={{
                                    height: '100%',
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '4px',
                                        background: 'linear-gradient(90deg, #FF9800 0%, #F57C00 100%)',
                                    },
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
                                        border: '1px solid rgba(255, 152, 0, 0.4)',
                                        boxShadow: '0 20px 40px rgba(255, 152, 0, 0.2)',
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <MonetizationOnIcon sx={{ color: '#FF9800', fontSize: 32, mr: 2 }} />
                                        <Typography
                                            id="refund-policy"
                                            variant="h4"
                                            sx={{
                                                color: '#FF9800',
                                                fontWeight: 600,
                                                fontSize: { xs: '1.5rem', md: '2rem' },
                                            }}
                                        >
                                            Refund Policy
                                        </Typography>
                                    </Box>
                                    
                                    <Stack spacing={3}>
                                        {refundPolicyData.map((item, index) => {
                                            const isHighlighted = item.includes('**');
                                            const cleanText = item.replace(/\*\*/g, '');
                                            const parts = cleanText.split(':');
                                            
                                            return (
                                                <Box key={index}>
                                                    {isHighlighted ? (
                                                        <Box sx={{ p: 2, borderRadius: 2, background: 'rgba(255, 152, 0, 0.1)', border: '1px solid rgba(255, 152, 0, 0.3)' }}>
                                                            <Typography
                                                                variant="body1"
                                                                sx={{
                                                                    color: 'rgba(255, 255, 255, 0.9)',
                                                                    lineHeight: 1.6,
                                                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                                                    textAlign: 'justify',
                                                                }}
                                                            >
                                                                <strong style={{ color: '#FF9800' }}>{parts[0]}:</strong>
                                                                {parts[1] && parts[1]}
                                                            </Typography>
                                                        </Box>
                                                    ) : (
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                color: 'rgba(255, 255, 255, 0.9)',
                                                                lineHeight: 1.6,
                                                                fontSize: { xs: '0.9rem', md: '1rem' },
                                                                textAlign: 'justify',
                                                            }}
                                                        >
                                                            {item}
                                                        </Typography>
                                                    )}
                                                </Box>
                                            );
                                        })}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Fade>
                    </Grid>
                </Grid>

                {/* Contact Information Footer */}
                <Fade in={isVisible} timeout={1600}>
                    <Card
                        sx={{
                            mt: 6,
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: 4,
                            overflow: 'hidden',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)',
                            },
                        }}
                    >
                        <CardContent sx={{ p: 4, textAlign: 'center' }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#FFD700',
                                    fontWeight: 600,
                                    mb: 2,
                                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                                }}
                            >
                                Questions About Our Policies?
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    lineHeight: 1.6,
                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                }}
                            >
                                If you have any questions or concerns regarding our privacy or refund policies, 
                                please don't hesitate to contact us. We're here to help and ensure transparency 
                                in all our dealings.
                            </Typography>
                        </CardContent>
                    </Card>
                </Fade>
            </Container>
        </Box>
    );
}

export default PrivacyPolicy;



