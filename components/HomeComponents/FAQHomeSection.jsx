import React from 'react';
import { Box, Container, Typography } from '@mui/material';


const FAQHomeSection = () => {

    const faqs = [
        {
            q: 'Does Aurous Academy offer JEE coaching in Bhopal for droppers?',
            a: 'Yes. Along with Class 11 and Class 12 batches, Aurous runs a dedicated dropper batch for JEE aspirants who want a focused, second attempt at cracking JEE Main and Advanced.',
        },
        {
            q: 'What makes Aurous Academy different from other IIT coaching institutes in Bhopal?',
            a: 'Small batch sizes, expert faculty, personal mentorship for every student, expert-curated study material, and a scholarship program based on merit rather than just enrollment.',
        },
        {
            q: 'Is there a Foundation course for students below Class 11?',
            a: 'Yes, Aurous Academy offers Foundation batches for Class 7 to Class 10, designed to build strong basics in core subjects before students move on to serious JEE or NEET preparation.',
        },
        {
            q: 'Where is Aurous Academy located in Bhopal?',
            a: 'The campus is located at Plot No. R-4, Opposite Railway Track, Zone-2, MP Nagar, Bhopal, Madhya Pradesh 462011 — a central location accessible from most parts of the city.',
        },
        {
            q: 'Does Aurous Academy provide scholarships?',
            a: 'Yes, Aurous Academy organises APRE (Aurous Potential Recognition Exam) and PRAGYAN Scholarship test, offering up to 100% scholarship on fees for eligible students.',
        },
        {
            q: 'Are online classes available at Aurous Academy?',
            a: 'Yes, along with offline classroom coaching in Bhopal, Aurous Academy also offers online courses and a learning app available on mobile, tablet, and desktop.',
        },
        {
            q: 'How will I manage school along with NEET/JEE preparation?',
            a: 'Aurous Academy follows a structured preparation approach that combines classroom learning, regular practice, tests and mentorship, helping students stay on track with their competitive exam preparation alongside school studies.',
        },
        {
            q: 'How often are tests conducted?',
            a: 'Regular tests and mock exams are conducted to help students assess their preparation, practise under exam-like conditions and identify areas that need improvement.',
        },
        {
            q: 'Will I get study material for my preparation?',
            a: 'Yes. Students get access to expert-curated study material along with classroom learning and the Aurous digital learning platform to support their preparation.',
        },
        {
            q: 'What if I get stuck on a topic?',
            a: 'Stuck on a topic? You don\'t have to wait for the next class. Aurous Academy provides regular doubt-solving sessions, and students can communicate with faculty beyond class hours to get their questions addressed.',
        },
        {
            q: 'What happens if I miss a class?',
            a: 'If you miss a class, you can use Aurous Academy\'s online learning platform and app to stay connected with your preparation. You can also reach out to faculty for guidance and get your doubts addressed so you can get back on track.',
        },
        {
            q: 'How can I contact Aurous Academy for admission details?',
            a: (
                <>
                    You can call +91 95225-12624 (8:00 AM to 8:00 PM), email{' '}
                    <a
                        href="mailto:support@aurousacademy.com"
                        style={{ color: '#E8410E', fontWeight: 600, textDecoration: 'none' }}
                    >
                        support@aurousacademy.com
                    </a>
                    , or visit the campus in MP Nagar, Zone-2, Bhopal directly.
                </>
            ),
        },
    ];

    return (
        <Box
            component="section"
            aria-label="Frequently asked questions"
            sx={{
                py: { xs: 5, md: 7 },
                px: { xs: 2, md: 3 },
                background: '#ffffff',
                borderTop: '1px solid #eef2f7',
            }}
        >
            <Container maxWidth="lg">
                {/* FAQ */}
                <Typography
                    component="h2"
                    sx={{
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 700,
                        color: '#1f2937',
                        mb: 3,
                    }}
                >
                    Frequently Asked Questions
                </Typography>
                <Box>
                    {faqs.map((item) => (
                        <Box
                            component="details"
                            key={item.q}
                            sx={{
                                mb: 2,
                                borderRadius: '12px',
                                border: '1px solid #e5e7eb',
                                background: '#fafafa',
                                overflow: 'hidden',
                            }}
                        >
                            <Box
                                component="summary"
                                sx={{
                                    cursor: 'pointer',
                                    listStyle: 'none',
                                    '&::-webkit-details-marker': { display: 'none' },
                                    '&::marker': { content: '""' },
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: 2,
                                    px: 2.5,
                                    py: 2,
                                }}
                            >
                                <Typography
                                    component="h3"
                                    sx={{ fontSize: '1rem', fontWeight: 600, color: '#1f2937' }}
                                >
                                    {item.q}
                                </Typography>
                                <Typography
                                    component="span"
                                    aria-hidden="true"
                                    sx={{ color: '#E8410E', fontSize: '1.25rem', lineHeight: 1 }}
                                >
                                    +
                                </Typography>
                            </Box>
                            <Box sx={{ px: 2.5, pb: 2.5 }}>
                                <Typography sx={{ color: '#4b5563', lineHeight: 1.7 }}>{item.a}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default FAQHomeSection