'use client';

import React from 'react';
import CoursesSection from '@/components/CommonSections/CoursesSection';
import { Fab, Tooltip, useMediaQuery } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';

export default function CoursePageClient() {
  const isMobile = useMediaQuery('(min-width:600px)');
  const [message, setMessage] = React.useState('Aurous Academy');

  const handleWhatsapp = (event) => {
    event.preventDefault();
    const phoneNumber = '+919993936947';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=Hey,+${encodedMessage}+%21&type=phone_number&app_absent=0`;
    window.open(whatsappURL, '_blank');
  };

  const handleRedirectToCall = () => {
    window.location.href = 'tel:+919522512624';
  };

  return (
    <div id="homePageCss">
      <div>
        <CoursesSection />
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
            <img alt="WhatsApp" style={{ width: isMobile ? '60%' : '100%' }} src="/whatsAppSvg.svg" />
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
}
