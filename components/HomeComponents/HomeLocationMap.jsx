import { Box, Container, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { setOptions, importLibrary } from '@googlemaps/js-api-loader';

const AROUS_ACADEMY_LOCATION = {
  lat: 23.23265393502977,
  lng: 77.43650213798978,
};

const GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Aurous+Academy+MP+Nagar+Bhopal';

const MARKER_ICON_URL =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="320" height="104" viewBox="0 0 320 104">
      <ellipse cx="16" cy="97" rx="7" ry="2.5" fill="rgba(0,0,0,0.3)"/>
      <path d="M16 58 C 8 58 1 65 1 74 C 1 84 16 96 16 96 C 16 96 31 84 31 74 C 31 65 24 58 16 58 Z" fill="#EA4335" stroke="#B31412" stroke-width="1.5"/>
      <circle cx="16" cy="73" r="5" fill="#ffffff"/>
      <text x="44" y="56" font-family="'Segoe UI', Arial, sans-serif" font-size="21" font-weight="700" fill="#C62828">Aurous Academy</text>
      <text x="44" y="78" font-family="'Segoe UI', Arial, sans-serif" font-size="14" font-weight="600" fill="#C62828">Best IIT-JEE, NEET &amp; Foundation</text>
      <text x="44" y="98" font-family="'Segoe UI', Arial, sans-serif" font-size="14" font-weight="600" fill="#C62828">औरस अकादमी</text>
    </svg>
  `);

if (typeof window !== 'undefined' && GOOGLE_MAPS_API_KEY) {
  setOptions({
    key: GOOGLE_MAPS_API_KEY,
    v: 'weekly',
  });
}

export default function HomeLocationMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    let map;

    const loadMap = async () => {
      const { Map } = await importLibrary('maps');
      const { Marker } = await importLibrary('marker');

      map = new Map(mapRef.current, {
        center: AROUS_ACADEMY_LOCATION,
        zoom: 16,

        // Hide all Google POIs/businesses.
        styles: [
          {
            featureType: 'poi',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
        ],

        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });

      // Custom marker: red pin + Aurous Academy label.
      const marker = new Marker({
        position: AROUS_ACADEMY_LOCATION,
        map,
        title: 'Aurous Academy',
        icon: {
          url: MARKER_ICON_URL,
          scaledSize: new google.maps.Size(320, 104),
          anchor: new google.maps.Point(16, 96),
        },
      });

      // Redirect to Google Maps on click.
      marker.addListener('click', () => {
        window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer');
      });
    };

    loadMap().catch((error) => {
      console.error('Google Maps failed to load:', error);
    });

    return () => {
      map = null;
    };
  }, []);

  return (
    <Box
      component="section"
      aria-labelledby="home-location-heading"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 3 },
        background:
          'linear-gradient(180deg, #f8fbff 0%, #eef4ff 100%)',
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
          Visit our campus at MP Nagar, Zone-2 for IIT-JEE,
          NEET, and Foundation counseling.
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
            height: { xs: '350px', md: '500px' },
          }}
        >
          <Box
            ref={mapRef}
            sx={{
              width: '100%',
              height: '100%',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}