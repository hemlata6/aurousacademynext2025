import { Box, Container, Typography } from '@mui/material';

const mapAddress =
  'Plot No. R-4, Opposite Railway Track, Zone-2, MP Nagar, Bhopal, Madhya Pradesh 462011';

const mapQuery = encodeURIComponent(mapAddress);

export default function HomeLocationMap() {
  return (
    <Box
      component="section"
      aria-labelledby="home-location-heading"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 3 },
        background: 'linear-gradient(180deg, #f8fbff 0%, #eef4ff 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          id="home-location-heading"
          component="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            color: '#1f2937',
            mb: 1,
          }}
        >
          Find Aurous Academy in Bhopal
        </Typography>
        <Typography
          sx={{
            color: '#4b5563',
            mb: 3,
            fontSize: { xs: '0.95rem', md: '1rem' },
          }}
        >
          Visit our campus at MP Nagar, Zone-2 for IIT-JEE, NEET, and Foundation counseling.
        </Typography>

        <Box
          sx={{
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.15)',
            border: '1px solid rgba(15, 23, 42, 0.12)',
            backgroundColor: '#fff',
            position: 'relative',
            width: '100%',
            pt: '56.25%',
          }}
        >
          <Box
            component="iframe"
            title="Aurous Academy Location on Google Maps"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
