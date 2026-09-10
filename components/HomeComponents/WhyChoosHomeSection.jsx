import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const whyChoose = [
  {
    title: 'Experienced Faculty',
    desc: 'Learn from IITians and subject experts with years of experience in JEE and NEET preparation.',
  },
  {
    title: 'Small Batch Size',
    desc: 'Limited students per batch ensure individual attention and faster doubt resolution.',
  },
  {
    title: 'Regular Tests',
    desc: 'Weekly tests, part tests, and full-length mock tests mapped to the latest JEE and NEET patterns.',
  },
  {
    title: 'Doubt Resolution',
    desc: 'Dedicated doubt-clearing sessions with faculty, both in the classroom and one-on-one.',
  },
  {
    title: 'Personalised Mentorship',
    desc: 'Academic mentors track every student’s progress and provide one-to-one guidance.',
  },
  {
    title: 'Study Material',
    desc: 'Comprehensive, exam-oriented modules and practice sheets for every subject.',
  },
];

const WhyChoosHomeSection = () => {
  return (
    <Box
      component="section"
      aria-label="Why choose Aurous Academy"
      sx={{
        py: { xs: 5, md: 7 },
        px: { xs: 2, md: 3 },
        background: '#ffffff',
        borderTop: '1px solid #eef2f7',
      }}
    >
      <Container maxWidth="lg">
        {/* Why Choose Aurous Academy */}
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            color: '#1f2937',
            mb: 3,
          }}
        >
          Why Choose Aurous Academy?
        </Typography>
        <Grid container spacing={3}>
          {whyChoose.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
              <Box
                sx={{
                  height: '100%',
                  p: 3,
                  borderRadius: '16px',
                  border: '1px solid #eef2f7',
                  background: '#f8fbff',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 10px 24px rgba(15, 23, 42, 0.08)',
                    transform: 'translateY(-4px)',
                    borderColor: '#E8410E',
                  },
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#E8410E',
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ color: '#4b5563', lineHeight: 1.7 }}>
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChoosHomeSection;