'use client';

import React, { useState } from 'react';
import { Box, Fab, Tooltip, useMediaQuery, CircularProgress, Container, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import BlogDetails from '@/components/CommonSections/BlogDetails';
import images from '@/lib/images';

const whatsAppSvg = images.whatsAppSvg;

export default function BlogDetailsClient({ blog, error, slug }) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [message, setMessage] = useState('Aurous Academy');

  const handleWhatsapp = (event) => {
    event.preventDefault();
    const phoneNumber = '+919685099770';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=Hey,+${encodedMessage}+%21&type=phone_number&app_absent=0`;
    window.open(whatsappURL, '_blank');
  };

  const handleRedirectToCall = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'tel:+919522512624';
    }
  };

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h5" color="error" align="center">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <div id="homePageCss">
      <div>
        <BlogDetails blogItem={blog} loading={!blog} />

      
        <Tooltip title="Call Us Now" placement="top-start">
          <Fab
            onClick={handleRedirectToCall}
            color="primary"
            size="medium"
            sx={{
              position: 'fixed',
              bottom: '80px',
              right: '20px',
              background: '#ffc700',
              ':hover': {
                background: '#ffc700',
              },
              zIndex: 1000,
            }}
          >
            <CallIcon sx={{ cursor: 'pointer', fontSize: '18px' }} />
          </Fab>
        </Tooltip>

        <Tooltip title="WhatsApp us" placement="bottom-start">
          <Fab
            onClick={handleWhatsapp}
            color="primary"
            size="medium"
            sx={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              background: '#28B71D',
              ':hover': {
                background: '#28B71D',
              },
              zIndex: 1000,
            }}
          >
            <img alt="WhatsApp" style={{ width: isMobile ? '60%' : '100%' }} src={whatsAppSvg} />
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
}



