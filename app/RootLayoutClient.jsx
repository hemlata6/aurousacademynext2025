'use client';

import NavBarOne from '@/components/CommonSections/NavBarOne';
import NavBarTwo from '@/components/CommonSections/NavBarTwo';
import { useMediaQuery } from '@mui/material';

export default function RootLayoutClient({ children }) {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div style={{ paddingTop: '90px' }}>
      {/* NavBarOne - Fixed at top for entire scroll on desktop */}
      {!isMobile && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          zIndex: 1300, 
          width: '100%',
          background: '#fff'
        }}>
          <NavBarOne />
        </div>
      )}
      
      {/* NavBarTwo - Fixed at top for entire scroll on mobile, normal on desktop */}
      <div style={isMobile ? { 
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
    </div>
  );
}
