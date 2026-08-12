'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

/**
 * ImagePopup - A reusable popup component that displays an image with a close button.
 * Shows after page load, only on specified paths.
 * 
 * Props:
 *  - imageSrc: URL of the image to display
 *  - imageAlt: Alt text for the image
 *  - linkUrl: Optional URL to redirect when image is clicked
 *  - showOnPaths: Array of pathnames where popup should appear. Defaults to ['/'] (home page only).
 */
const ImagePopup = ({
  imageSrc,
  imageAlt = 'Aurous Academy',
  linkUrl = '',
  showOnPaths = ['/'],
}) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    // Only show on matching paths
    const shouldShow = showOnPaths.some(
      (path) => pathname === path || (path !== '/' && pathname.startsWith(path))
    );

    if (!shouldShow) return;

    // Show popup after page fully loads
    const showPopup = () => setIsOpen(true);

    if (document.readyState === 'complete') {
      // Page already loaded, show with slight delay for smooth UX
      const timer = setTimeout(showPopup, 500);
      return () => clearTimeout(timer);
    } else {
      window.addEventListener('load', showPopup);
      return () => window.removeEventListener('load', showPopup);
    }
  }, [pathname, showOnPaths]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleImageClick = () => {
    if (linkUrl) {
      window.open(linkUrl, '_blank');
    }
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`image-popup-overlay ${isClosing ? 'image-popup-closing' : ''}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Popup notification"
    >
      <div className={`image-popup-container ${isClosing ? 'image-popup-container-closing' : ''}`}>
        {/* Close Button */}
        <IconButton
          className="image-popup-close-btn"
          onClick={handleClose}
          aria-label="Close popup"
          size="large"
        >
          <CloseIcon sx={{ fontSize: '28px', color: '#fff' }} />
        </IconButton>

        {/* Image with fallback */}
        {!imgError ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`image-popup-img ${linkUrl ? 'image-popup-clickable' : ''}`}
            onClick={handleImageClick}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="image-popup-fallback">
            <p style={{ color: '#fff', fontSize: '18px', textAlign: 'center', padding: '40px' }}>
              {imageAlt}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePopup;
