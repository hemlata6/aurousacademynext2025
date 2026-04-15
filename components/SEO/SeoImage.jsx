/**
 * SEO-Optimized Image Component
 * Ensures proper alt tags, lazy loading, and image optimization
 */

'use client';

import React from 'react';
import Image from 'next/image';

/**
 * SEO-Optimized Image Component
 * @param {string} src - Image source
 * @param {string} alt - Alt text (REQUIRED for SEO)
 * @param {string} title - Image title for hover
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {boolean} responsive - Make image responsive
 * @param {string} loading - Loading strategy (lazy, eager)
 * @param {Object} sx - Additional styling
 */
export const SeoImage = ({
  src,
  alt = 'Aurous Academy',
  title = '',
  width = null,
  height = null,
  responsive = true,
  loading = 'lazy',
  priority = false,
  sx = {},
  className = '',
  ...props
}) => {
  // Validate alt text
  if (!alt || alt.trim() === '') {
    console.warn(`Image missing alt text: ${src}`);
  }

  // For remote images or when width/height not specified
  if (!width || !height || responsive) {
    return (
      <img
        src={src}
        alt={alt}
        title={title || alt}
        loading={loading}
        className={className}
        style={{
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
          ...sx,
        }}
        {...props}
      />
    );
  }

  // For local images with Next.js Image optimization
  return (
    <Image
      src={src}
      alt={alt}
      title={title || alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      priority={priority}
      className={className}
      style={{
        maxWidth: '100%',
        height: 'auto',
        ...sx,
      }}
      quality={85}
      {...props}
    />
  );
};

/**
 * Background Image Component
 * Useful for cover images with proper SEO
 */
export const SeoBackgroundImage = ({
  src,
  alt = 'Background image',
  title = '',
  children = null,
  sx = {},
  ...props
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        ...sx,
      }}
      aria-label={alt}
      title={title || alt}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Picture Component for responsive images with fallback
 */
export const ResponsivePicture = ({
  webp = null,
  jpg = null,
  alt = 'Aurous Academy image',
  title = '',
  loading = 'lazy',
  sx = {},
  className = '',
  ...props
}) => {
  return (
    <picture>
      {webp && <source srcSet={webp} type="image/webp" />}
      {jpg && <source srcSet={jpg} type="image/jpeg" />}
      <img
        src={jpg || webp}
        alt={alt}
        title={title || alt}
        loading={loading}
        className={className}
        style={{
          maxWidth: '100%',
          height: 'auto',
          ...sx,
        }}
        {...props}
      />
    </picture>
  );
};

/**
 * Lazy Loading Image with Intersection Observer
 */
export const LazyImage = ({
  src,
  alt = 'Aurous Academy',
  placeholder = null,
  title = '',
  ...props
}) => {
  const [imageSrc, setImageSrc] = React.useState(placeholder || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E');
  const [imageRef, setImageRef] = React.useState(null);

  React.useEffect(() => {
    let observer;

    if (imageRef && imageSrc === placeholder) {
      observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            setImageSrc(src);
            observer.unobserve(imageRef);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(imageRef);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [imageRef, imageSrc, src, placeholder]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      title={title || alt}
      style={{
        maxWidth: '100%',
        height: 'auto',
        transition: 'opacity 0.3s ease-in-out',
      }}
      {...props}
    />
  );
};

export default SeoImage;
