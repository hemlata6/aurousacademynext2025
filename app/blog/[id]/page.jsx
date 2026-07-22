'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import BlogDetails from '@/components/CommonSections/BlogDetails';
import { Fab, Tooltip, useMediaQuery } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import { fetchBlogDetail } from '@/lib/api';

export default function BlogDetailsPage() {
  const params = useParams();
  const { id, slug } = params;
  const isMobile = useMediaQuery('(min-width:600px)');
  const [message, setMessage] = useState('Aurous Academy');
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadBlogDetail = async () => {
    setLoading(true);
    try {
      const response = await fetchBlogDetail(id);
      const blogDetail = response?.content;

      if (response && response.errorCode === 0 && blogDetail?.id) {
        setBlog(blogDetail);
      } else {
        setBlog(null);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching blog detail:', error);
    }
  };

  useEffect(() => {
    if (id) {
      loadBlogDetail();
    }
  }, [id, slug]);

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
        <BlogDetails blogItem={blog} loading={loading} />
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
