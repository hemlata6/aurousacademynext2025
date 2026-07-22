'use client';

import React, { useEffect, useState } from 'react';
import NewGalleryCourseWise from '@/components/NewGallerySectionDomainWise/NewGalleryCourseWise';
import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';
import { Fab, Tooltip, useMediaQuery } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import instId from '@/constant/instId';

export default function BannerPageClient() {
  // const instId = 120;
  const isMobileQuery = useMediaQuery('(min-width:600px)');
  const [mounted, setMounted] = useState(false);
  // Use false until mounted so SSR and initial client render match
  const isMobile = mounted ? isMobileQuery : false;
  const [message, setMessage] = React.useState('Aurous Academy');

  const getInstituteDetail = async () => {
    try {
      let response = await Network.fetchInstituteDetail(instId.instId);
      Endpoints.mediaBaseUrl = response.instituteTechSetting.mediaUrl;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setMounted(true);
    getInstituteDetail();
  }, []);

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
        <NewGalleryCourseWise />
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
            }}
          >
            <img alt="WhatsApp" style={{ width: isMobile ? '60%' : '100%' }} src="/whatsAppSvg.svg" />
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
}
