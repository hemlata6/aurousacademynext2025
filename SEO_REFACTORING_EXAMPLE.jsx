/**
 * EXAMPLE: SEO-OPTIMIZED Component Refactoring
 * 
 * This shows how to convert existing components to use proper SEO
 * including: proper heading hierarchy, semantic HTML, alt tags, and link optimization
 */

'use client';

import React, { useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { PageH1, SectionH2, SubsectionH3 } from '@/components/SEO/SeoHeading';
import { SeoImage } from '@/components/SEO/SeoImage';
import { SmartLink, SocialLink } from '@/components/SEO/SmartLink';

/**
 * BEFORE (Without SEO optimization):
 * - Multiple H1 tags (bad for SEO)
 * - Typography instead of semantic headings
 * - Images without alt text
 * - No link optimization
 * - Poor accessibility
 */

/**
 * AFTER (With SEO optimization):
 */
export default function SEOOptimizedSection() {
  const [courses, setCourses] = React.useState([]);

  useEffect(() => {
    // Fetch courses data
  }, []);

  return (
    <Box component="section" sx={{ py: 5 }}>
      <Container maxWidth="lg">
        {/* ✅ CORRECT: ONE H1 per page (only on homepage or main intro) */}
        {/* On other pages, start with H2 or H3 based on hierarchy */}
        <PageH1 sx={{ mb: 3 }}>Our Excellence in Coaching</PageH1>

        {/* ✅ CORRECT: Using semantic H2 for sections */}
        <SectionH2 sx={{ mt: 4, mb: 2 }}>Why Choose Aurous Academy?</SectionH2>
        <Typography paragraph>
          We provide expert-led coaching for IIT-JEE and NEET preparation with a proven track record.
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {/* Courses Grid */}
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 2, p: 2 }}>
                {/* ✅ CRITICAL: All images MUST have meaningful alt text */}
                <SeoImage
                  src={course.image}
                  alt={`${course.name} course at Aurous Academy - comprehensive preparation`}
                  responsive={true}
                  loading="lazy"
                />

                {/* ✅ CORRECT: Using H3 for card titles (hierarchy: H1 > H2 > H3) */}
                <SubsectionH3>{course.name}</SubsectionH3>

                <Typography variant="body2" sx={{ mb: 2 }}>
                  {course.description}
                </Typography>

                {/* ✅ CORRECT: Using SmartLink for internal links */}
                {/* SmartLink automatically detects internal vs external */}
                <SmartLink href={`/course/${course.slug}`}>
                  View Course Details →
                </SmartLink>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* External Links Section */}
        <Box sx={{ mt: 5, pt: 5, borderTop: '1px solid #e0e0e0' }}>
          <SectionH2>Connect With Us</SectionH2>

          {/* ✅ CORRECT: SocialLink auto-adds nofollow for external links */}
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <SocialLink
              href="https://facebook.com/aurousacademy"
              platform="Facebook"
              label="Follow Aurous Academy on Facebook"
            >
              📘 Facebook
            </SocialLink>

            <SocialLink
              href="https://instagram.com/aurousacademy"
              platform="Instagram"
              label="Follow Aurous Academy on Instagram"
            >
              📷 Instagram
            </SocialLink>

            <SocialLink
              href="https://youtube.com/@aurousacademy"
              platform="YouTube"
              label="Subscribe to Aurous Academy on YouTube"
            >
              ▶️ YouTube
            </SocialLink>
          </Box>
        </Box>

        {/* Internal Links - NO nofollow needed */}
        <Box sx={{ mt: 5 }}>
          <SectionH2>Explore More</SectionH2>
          <ul>
            <li>
              <SmartLink href="/jee">IIT-JEE Coaching Programs</SmartLink>
            </li>
            <li>
              <SmartLink href="/neet">NEET Medical Coaching</SmartLink>
            </li>
            <li>
              <SmartLink href="/foundation">Foundation Courses (Classes 7-10)</SmartLink>
            </li>
            <li>
              <SmartLink href="/blog">Educational Blog & Articles</SmartLink>
            </li>
          </ul>
        </Box>
      </Container>
    </Box>
  );
}

/**
 * KEY DIFFERENCES - BEFORE vs AFTER:
 * 
 * 1. HEADING STRUCTURE:
 *    BEFORE: Multiple <Typography variant="h1"> = Bad SEO
 *    AFTER:  PageH1 > SectionH2 > SubsectionH3 = Good SEO
 *
 * 2. ALT TAGS:
 *    BEFORE: <img src={url} /> = No alt text
 *    AFTER:  <SeoImage alt="..." /> = Descriptive alt text
 *
 * 3. EXTERNAL LINKS:
 *    BEFORE: <a href="https://fb.com"> = Link juice leaks
 *    AFTER:  <SocialLink href="..."> = Auto rel="nofollow"
 *
 * 4. SEMANTIC HTML:
 *    BEFORE: <Typography component="div"> = Non-semantic
 *    AFTER:  <Box component="section"> = Semantic <section>
 *
 * IMPLEMENTATION CHECKLIST FOR YOUR COMPONENTS:
 * 
 * [ ] Import PageH1, SectionH2, SubsectionH3 from SEO components
 * [ ] Replace Typography h1/h2/h3 with appropriate SeoHeading component
 * [ ] Add meaningful alt text to ALL images
 * [ ] Replace <a> tags with SmartLink
 * [ ] Replace external <a> or social links with SocialLink
 * [ ] Ensure proper heading hierarchy (no skipping: H1→H2→H3, not H1→H3)
 * [ ] Test in Google Search Console: site:aurousacademy.com
 * [ ] Run PageSpeed Insights test
 * [ ] Verify in Lighthouse audit
 */

/**
 * MIGRATION GUIDE - Files to update:
 * 
 * Priority 1 (this week):
 * - [ ] components/HomeComponents/*.jsx
 * - [ ] components/CommonSections/NavBar*.jsx
 * - [ ] components/CommonSections/Footer.jsx
 * 
 * Priority 2 (next week):
 * - [ ] components/BlogSection/*.jsx
 * - [ ] components/CoursesSection.jsx
 * - [ ] components/CommonSections/*.jsx
 * 
 * Priority 3 (ongoing):
 * - [ ] All remaining component files
 */
