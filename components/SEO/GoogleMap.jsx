'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { SectionH2 } from '@/components/SEO/SeoHeading';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

/**
 * Responsive Google Maps Component
 * Displays Aurous Academy location with embedded map
 * Optimized for mobile and desktop
 */
export const GoogleMapComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const businessInfo = {
    name: 'Aurous Academy',
    address: 'Plot No. R-4, Opposite Railway Track, Zone-II, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011, India',
    phone: '+91-95225-12624',
    email: 'contact@aurousacademy.com',
    hours: 'Mon - Sun: 8:00 AM - 10:30 PM',
    latitude: 23.23273157338026,
    longitude: 77.43653834675754,
  };

  // Google Maps embed URL (requires Google Maps Embed API key)
  const mapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Aurous+Academy+Bhopal&zoom=16`;

  // Fallback to static map if embed is not available
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${businessInfo.latitude},${businessInfo.longitude}&zoom=16&size=600x400&style=feature:all|element:labels|visibility:off&markers=color:0xF59E0B|${businessInfo.latitude},${businessInfo.longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;

  if (!isClient) {
    return null;
  }

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: '#f9fafb',
      }}
    >
      <Container maxWidth="lg">
        <SectionH2 sx={{ textAlign: 'center', mb: 4 }}>
          Visit Our Location
        </SectionH2>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
            alignItems: 'stretch',
          }}
        >
          {/* Map Container */}
          <Paper
            elevation={2}
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              height: { xs: '300px', md: '400px' },
              backgroundColor: '#fff',
            }}
          >
            {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
                aria-label="Google Map showing Aurous Academy location in Bhopal"
                src={mapsEmbedUrl}
                title="Aurous Academy Location Map"
              />
            ) : (
              <img
                src={staticMapUrl}
                alt="Aurous Academy Location Map - Bhopal, Madhya Pradesh"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            )}
          </Paper>

          {/* Contact Information */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 3,
            }}
          >
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <LocationOnIcon
                sx={{
                  color: '#F59E0B',
                  mt: 0.5,
                  flexShrink: 0,
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    fontSize: { xs: '16px', md: '18px' },
                  }}
                >
                  Location
                </Typography>
                <Typography
                  sx={{
                    color: '#666',
                    fontSize: { xs: '14px', md: '16px' },
                    lineHeight: 1.6,
                  }}
                >
                  {businessInfo.address}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <PhoneIcon
                sx={{
                  color: '#F59E0B',
                  mt: 0.5,
                  flexShrink: 0,
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    fontSize: { xs: '16px', md: '18px' },
                  }}
                >
                  Phone
                </Typography>
                <a
                  href={`tel:${businessInfo.phone}`}
                  style={{
                    color: '#F59E0B',
                    textDecoration: 'none',
                    fontSize: '16px',
                  }}
                >
                  {businessInfo.phone}
                </a>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <EmailIcon
                sx={{
                  color: '#F59E0B',
                  mt: 0.5,
                  flexShrink: 0,
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    fontSize: { xs: '16px', md: '18px' },
                  }}
                >
                  Email
                </Typography>
                <a
                  href={`mailto:${businessInfo.email}`}
                  style={{
                    color: '#F59E0B',
                    textDecoration: 'none',
                    fontSize: '16px',
                  }}
                >
                  {businessInfo.email}
                </a>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <AccessTimeIcon
                sx={{
                  color: '#F59E0B',
                  mt: 0.5,
                  flexShrink: 0,
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    fontSize: { xs: '16px', md: '18px' },
                  }}
                >
                  Hours
                </Typography>
                <Typography
                  sx={{
                    color: '#666',
                    fontSize: { xs: '14px', md: '16px' },
                  }}
                >
                  {businessInfo.hours}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* JSON-LD Schema for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: businessInfo.name,
              image: 'https://aurousacademy.com/roundedLogo.svg',
              description:
                'Aurous Academy is the best IIT JEE & NEET coaching institute in Bhopal',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Plot No. R-4, Opposite Railway Track, Zone-II, Maharana Pratap Nagar',
                addressLocality: 'Bhopal',
                addressRegion: 'Madhya Pradesh',
                postalCode: '462011',
                addressCountry: 'IN',
              },
              telephone: businessInfo.phone,
              email: businessInfo.email,
              openingHours: 'Mo-Su 08:00-22:30',
              geo: {
                '@type': 'GeoCoordinates',
                latitude: businessInfo.latitude,
                longitude: businessInfo.longitude,
              },
              url: 'https://aurousacademy.com',
              sameAs: [
                'https://www.facebook.com/aurousacademy',
                'https://www.instagram.com/aurousacademy',
                'https://youtube.com/@aurousacademy8912?si=Eh3ykFIQDBLBKzb5',
                'https://in.linkedin.com/company/aurous-academy',
              ],
            }),
          }}
        />
      </Container>
    </Box>
  );
};

export default GoogleMapComponent;
