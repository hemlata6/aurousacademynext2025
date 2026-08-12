'use client';

import { useState, useEffect } from 'react';
import NavBarOne from '@/components/CommonSections/NavBarOne';
import NavBarTwo from '@/components/CommonSections/NavBarTwo';
import ImagePopup from '@/components/CommonSections/ImagePopup';
// import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import Network from '@/lib/Netwrok';
import instId from '@/constant/instId';
import Endpoints from '@/constant/endpoints';

export default function RootLayoutClient({ children }) {
  const isMobileQuery = useMediaQuery('(max-width:600px)');
  const [mounted, setMounted] = useState(false);
   const [banner, setBanner] = useState([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getBannerAPI = async () => {
    try {
      const response = await Network.fetchBannerss(instId.instId);
      // if (response && response.data) {
      let activeBanners = response.banners.filter(banner => banner.group === 'upperbanner' && banner.active === true);
      // console.log("Active Banners:", activeBanners);
      setBanner(activeBanners);
      // }
    } catch (error) {
      console.log("Error fetching banner:", error);
    };
  };

  // console.log("Banner:", banner);

  useEffect(() => {
    getBannerAPI();
  }, []);

  // Use false until mounted so SSR and initial client render match exactly
  const isMobile = mounted ? isMobileQuery : false;

  return (
    <div style={{ paddingTop: '90px' }}>
      {/* NavBarOne - Fixed at top for entire scroll on desktop */}
      {mounted && !isMobile && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          width: '100%',
          background: '#fff'
        }}>
          <NavBarOne />
        </div>
      )}

      {/* NavBarTwo - Fixed at top for entire scroll on mobile, normal on desktop */}
      <div style={mounted && isMobile ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        width: '100%',
        background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
      } : {}}>
        <NavBarTwo />
      </div>

      {/* Main content */}
      {children}

      {/* Image Popup - Shows on home page, once per session */}
      {banner.length > 0 && banner[0]?.banner && (
        <ImagePopup
          imageSrc={Endpoints.mediaBaseUrl + banner[0].banner}
          imageAlt="Aurous Academy"
          linkUrl="https://pragyan.aurousacademy.com/"
          showOnPaths={['/']}
        />
      )}
    </div>
  );
}
