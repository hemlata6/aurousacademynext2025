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
          Aurous Academy – Bhopal&apos;s Trusted Name for NEET, JEE and IIT Coaching
        </Typography>
        <Typography sx={{ color: '#4b5563', lineHeight: 1.8, mb: 2 }}>
          Aurous Academy Private Limited has been operating in Bhopal since 2019, guided by a simple
          principle: every student who walks through our doors deserves a clear strategy, a
          personalised approach to addressing knowledge gaps, and a team of instructors who take
          preparation as seriously as the students themselves. Over the years, this approach has
          evolved into a comprehensive preparation ecosystem comprising offline classes, an online
          learning platform, and a dedicated app (for smartphones, tablets, and PCs) that tracks
          student daily progress. The system is complemented by regular doubt-solving sessions to
          review complex topics and an analysis of past exam papers, ensuring preparation grounded
          in data rather than mere intuition.
        </Typography>

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
          NEET Coaching in Bhopal — Minus the Guesswork
        </Typography>
        <Typography sx={{ color: '#4b5563', lineHeight: 1.8, mb: 2 }}>
          The NEET exam leaves no room for error. It covers three subjects and offers just one
          attempt—with only 180 minutes to turn two years of hard work into a successful result.
          Our{' '}
          <SmartLink
            href="https://aurousacademy.com/"
            style={{ color: '#E8410E', fontWeight: 600, textDecoration: 'none' }}
          >
            NEET coaching in Bhopal
          </SmartLink>{' '}
          goes far beyond the rote memorization of NCERT textbooks; most students have already tried
          that approach on their own and are well aware of its limitations. We focus on the
          practical realities of the exam: techniques for eliminating incorrect options, speed, and
          the ability to decide which questions are best skipped. We deliberately keep our class
          sizes small, ensuring that a biology question arising on a Tuesday doesn&apos;t have to
          wait until Friday for an answer. Each student is assigned a mentor who tracks their actual
          progress—not just attendance—and our faculty consist of educators with a proven track
          record of successfully preparing students for NEET.
        </Typography>

        {/* JEE and IIT Coaching in Bhopal */}
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
          JEE and IIT Coaching in Bhopal for Students Who Want More Than a Qualifying Score
        </Typography>
        <Typography sx={{ color: '#4b5563', lineHeight: 1.8, mb: 2 }}>
          If you ask an IIT student what distinguishes those who merely pass the JEE from those who
          secure top rankings, the answer is almost always the same: the speed at which they solve
          problems under strict time constraints, rather than just theoretical knowledge. This
          principle lies at the heart of our{' '}
          <SmartLink
            href="https://aurousacademy.com/"
            style={{ color: '#E8410E', fontWeight: 600, textDecoration: 'none' }}
          >
            JEE and IIT coaching in Bhopal
          </SmartLink>
          .
        </Typography>
        <Typography sx={{ color: '#4b5563', lineHeight: 1.8, mb: 2 }}>
          Our instructors are IITians, a fact that shapes their teaching approach: they go beyond
          simply presenting textbook material, placing special emphasis on effective
          problem-solving techniques and an intuitive grasp of the subject—insights gained only
          through firsthand experience with the exam. Each subject—physics, chemistry, and
          mathematics—is taught by a specialist in that field rather than a generalist instructor;
          furthermore, we regularly conduct mock exams that cover the entire syllabus. As a result,
          students do not merely &quot;work through the chapters&quot; a week before the test but
          are genuinely prepared for the exam itself.
        </Typography>
        <Typography sx={{ color: '#4b5563', lineHeight: 1.8, mb: 4 }}>
          Students who join us earlier—between the 7th and 10th grades—go through our Foundation
          program first. Admittedly, this stage is less intensive than the JEE or NEET exam
          preparation courses; however, it is precisely here that the fundamental groundwork is
          laid, ensuring that students do not have to start from scratch when they move into the
          11th grade.
        </Typography>

        {/* Why Choose Aurous Academy */}
        {/* <Typography
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
        </Grid> */}

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
        {/* <Typography
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
        </Box> */}
      </Container>
    </Box>
  );
}
