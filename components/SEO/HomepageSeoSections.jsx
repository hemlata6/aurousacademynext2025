'use client';

import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { SmartLink } from '@/components/SEO/SmartLink';

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

const faqs = [
  {
    q: 'Which classes does Aurous Academy offer?',
    a: 'Aurous Academy offers programs for Classes 7 to 12 along with dropper batches. This includes Foundation courses (Classes 7–10), IIT-JEE (Main & Advanced) coaching for Classes 11 and 12, and NEET-UG coaching, as well as school-integrated and Sankalp programs.',
  },
  {
    q: 'Does Aurous Academy provide IIT-JEE coaching in Bhopal?',
    a: 'Yes. Aurous Academy is a well-known IIT-JEE coaching institute in Bhopal, offering classroom, school-integrated, and dropper programs taught by IITian faculty.',
  },
  {
    q: 'Does Aurous Academy offer NEET coaching in Bhopal?',
    a: 'Yes. We offer complete NEET-UG preparation for Classes 11, 12, and droppers, covering Physics, Chemistry, and Biology with regular mock tests and doubt-clearing sessions.',
  },
  {
    q: 'Which foundation classes are available?',
    a: 'Foundation programs are available for Classes 7, 8, 9, and 10. These focus on building strong fundamentals in Mathematics and Science for future JEE, NEET, and Olympiad preparation.',
  },
  {
    q: 'Where is Aurous Academy located?',
    a: 'Aurous Academy is located at Plot No. R-4, Opposite Railway Track, Zone-2, MP Nagar, Bhopal, Madhya Pradesh 462011.',
  },
  {
    q: 'Does Aurous Academy offer online courses?',
    a: 'Yes. Aurous Academy also offers online courses through its online learning platform, so students can learn from anywhere.',
  },
];

export default function HomepageSeoSections() {
  return (
    <Box
      component="section"
      aria-label="About Aurous Academy and frequently asked questions"
      sx={{
        py: { xs: 5, md: 7 },
        px: { xs: 2, md: 3 },
        background: '#ffffff',
        borderTop: '1px solid #eef2f7',
      }}
    >
      <Container maxWidth="lg">
        {/* About Aurous Academy */}
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            color: '#1f2937',
            mb: 1.5,
          }}
        >
          About Aurous Academy
        </Typography>
        <Typography sx={{ color: '#4b5563', lineHeight: 1.8, mb: 2 }}>
          Aurous Academy is a premier coaching institute in Bhopal, Madhya Pradesh, committed to
          guiding students toward success in India&apos;s most competitive entrance examinations —
          IIT-JEE (Main &amp; Advanced) and NEET-UG. Located at MP Nagar, the academy offers
          structured classroom programs for Classes 11, 12, and dropper batches, helping aspirants
          build the conceptual clarity and exam temperament required to secure admissions to the
          IITs, NITs, and leading medical colleges across the country.
        </Typography>
        <Typography sx={{ color: '#4b5563', lineHeight: 1.8, mb: 4 }}>
          Preparation at Aurous Academy begins early with Foundation courses for Classes 7 to 10,
          where students develop strong fundamentals in Mathematics and Science before stepping into
          rigorous JEE and NEET training. Our teaching methodology combines concept-based lectures,
          comprehensive study material, regular tests, and personalised mentorship. With experienced
          faculty and a student-first support system, Aurous Academy ensures that every learner
          receives individual attention, timely doubt resolution, and consistent academic guidance
          throughout their journey.
        </Typography>

        {/* Why Choose Aurous Academy */}
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            color: '#1f2937',
            mb: 3,
            mt: 5,
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

        {/* IIT-JEE Coaching in Bhopal */}
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            color: '#1f2937',
            mb: 1.5,
            mt: 6,
          }}
        >
          IIT-JEE Coaching in Bhopal
        </Typography>
        <Typography sx={{ color: '#4b5563', lineHeight: 1.8, mb: 1 }}>
          Aurous Academy is one of the most trusted names for IIT-JEE coaching in Bhopal. Our JEE
          Main &amp; Advanced programs for Classes 11, 12, and droppers are designed by IITian
          faculty and focus on conceptual depth, problem-solving speed, and exam temperament.
          Students benefit from structured modules, weekly tests, and personalised feedback that
          together build the confidence needed to crack one of the world&apos;s toughest entrance
          exams.
        </Typography>
        <SmartLink href="/jee">Explore IIT-JEE Programs →</SmartLink>

        {/* NEET Coaching in Bhopal */}
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            color: '#1f2937',
            mb: 1.5,
            mt: 5,
          }}
        >
          NEET Coaching in Bhopal
        </Typography>
        <Typography sx={{ color: '#4b5563', lineHeight: 1.8, mb: 1 }}>
          Our NEET coaching in Bhopal prepares medical aspirants for NEET-UG with a strong focus on
          NCERT-based Biology, along with rigorous Physics and Chemistry training. From Class 11 and
          12 classroom programs to dedicated dropper batches, Aurous Academy provides systematic
          coverage of the syllabus, regular mock tests, and doubt-clearing support to help students
          secure admission to top government medical colleges.
        </Typography>
        <SmartLink href="/neet">Explore NEET Programs →</SmartLink>

        {/* Foundation Coaching in Bhopal */}
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            color: '#1f2937',
            mb: 1.5,
            mt: 5,
          }}
        >
          Foundation Coaching in Bhopal
        </Typography>
        <Typography sx={{ color: '#4b5563', lineHeight: 1.8, mb: 1 }}>
          Strong fundamentals make competitive exams easier. Aurous Academy&apos;s Foundation
          coaching in Bhopal for Classes 7 to 10 strengthens core concepts in Mathematics and
          Science while gradually introducing students to the analytical thinking required for JEE,
          NEET, and Olympiads. Early guidance helps students build confidence and a lasting academic
          edge.
        </Typography>
        <SmartLink href="/foundation">Explore Foundation Programs →</SmartLink>

        {/* FAQ */}
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            color: '#1f2937',
            mb: 3,
            mt: 6,
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
