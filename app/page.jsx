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
import HomeLocationMap from '@/components/HomeComponents/HomeLocationMap';
import GoogleMapComponent from '@/components/SEO/GoogleMap';
import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';
import instId from '@/constant/instId';

export default function HomePage() {
  // const instId = 120;
  const isMobile = useMediaQuery('(max-width:600px)');
  const [message, setMessage] = React.useState('Aurous Academy');
  const [isHydrated, setIsHydrated] = React.useState(false);
  const homeSection2Ref = useRef(null);

  useEffect(() => {
    setIsHydrated(true);
    getInstituteDetail();
  }, []);

  const getInstituteDetail = async () => {
    try {
      let response = await Network.fetchInstituteDetail(instId.instId);

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
        {/* SEO: Hidden H1 for accessibility and search engines */}
        <h1
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          Best IIT JEE and NEET Coaching Institute in Bhopal
        </h1>
        <HomeSection1 />
        <div ref={homeSection2Ref}>
          <HomeSection3 />
        </div>
        <HomeSection2 />
        <HomeSection4 />
        <HomeSection6 />
        
        {/* Google Maps Component */}
        <GoogleMapComponent />
        
        <HomeLocationMap />
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
            aria-label="Call Us Now"
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
            aria-label="WhatsApp us"
          >
            <img
              alt="WhatsApp"
              style={{ width: isHydrated && isMobile ? '60%' : '100%' }}
              src="/whatsAppSvg.svg"
            />
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
}
