'use client';

import React, { useEffect, useRef } from 'react';
import { Fab, Tooltip, useMediaQuery } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import HomeSection1 from '@/components/HomeComponents/HomeSection1';
import HomeSection2 from '@/components/HomeComponents/HomeSection2';
import HomeSection3 from '@/components/HomeComponents/HomeSection3';
import HomeSection4 from '@/components/HomeComponents/HomeSection4';
import HomeSection5 from '@/components/HomeComponents/HomeSection5';
import HomeSection6 from '@/components/HomeComponents/HomeSection6';
import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';

export default function HomePage() {
  const instId = 120;
  const isMobile = useMediaQuery('(max-width:600px)');
  const [message, setMessage] = React.useState('Aurous Academy');
  const homeSection2Ref = useRef(null);

  useEffect(() => {
    getInstituteDetail();
  }, []);

  const getInstituteDetail = async () => {
    try {
      let response = await Network.fetchInstituteDetail(instId);

      Endpoints.mediaBaseUrl = response.instituteTechSetting.mediaUrl
      // setGalleryList(response?.institute?.gallery);
    } catch (err) {
      console.log(err);
    }
  };

  const handleWhatsapp = (event) => {
    event.preventDefault();
    const phoneNumber = '+919685099770';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=Hey,+${encodedMessage}+%21&type=phone_number&app_absent=0`;
    window.open(whatsappURL, '_blank');
  };

  const handleRedirectToCall = () => {
    window.location.href = 'tel:+919522512624';
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#aboutContent') {
      homeSection2Ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div id='homePageCss'>
      <div>
        <HomeSection1 />
        <div ref={homeSection2Ref}>
          <HomeSection3 />
        </div>
        <HomeSection2 />
        <HomeSection4 />
        <HomeSection6 />
        <HomeSection5 />

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
          <img
            alt="WhatsApp"
            style={{ width: isMobile ? '60%' : '100%' }}
            src="/whatsAppSvg.svg"
          />
        </Fab>
      </Tooltip>
      </div>
    </div>
  );
}
