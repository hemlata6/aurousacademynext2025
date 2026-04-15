/**
 * SEO-Optimized External Link Component
 * Automatically adds nofollow and security attributes
 */

import React from 'react';
import Link from 'next/link';
import { isExternalUrl, generateLinkRel } from '@/lib/seoUtils';

/**
 * Smart Link Component - handles both internal and external links
 * @param {string} href - Link URL
 * @param {React.ReactNode} children - Link text/content
 * @param {boolean} external - Force external link treatment
 * @param {string} className - CSS class
 * @param {Object} sx - MUI sx prop (if using with MUI Link)
 * @param {string} rel - Custom rel attribute
 */
export const SmartLink = ({
  href,
  children,
  external = false,
  className = '',
  sx = {},
  rel = '',
  newTab = false,
  prefetch = true,
  ...props
}) => {
  // Check if URL is external
  const isExternal = external || isExternalUrl(href);

  // Generate rel attribute
  let linkRel = rel;
  if (isExternal) {
    linkRel = rel || 'nofollow noopener noreferrer';
  }

  // Handle external links
  if (isExternal) {
    return (
      <a
        href={href}
        target={newTab ? '_blank' : '_self'}
        rel={linkRel}
        className={className}
        style={sx}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Handle internal links
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={className}
      rel={linkRel}
      {...props}
    >
      {children}
    </Link>
  );
};

/**
 * Social Media Link Component
 * Automatically adds appropriate rel attributes
 */
export const SocialLink = ({
  href,
  platform = '',
  label = '',
  ...props
}) => {
  // Social media platforms that should always be nofollow
  const socialPlatforms = ['facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'whatsapp'];
  const isSocialPlatform = socialPlatforms.some(p => href.includes(p));

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={label || platform}
      title={label || platform}
      {...props}
    >
      {props.children}
    </a>
  );
};

/**
 * Phone Link Component
 * Ensures proper SEO handling of tel: links
 */
export const PhoneLink = ({ phone, label = '', children = null, ...props }) => {
  if (!phone) return null;

  const cleanPhone = phone.replace(/\D/g, '');
  const href = `tel:+${cleanPhone}`;

  return (
    <a
      href={href}
      aria-label={label || `Call ${phone}`}
      {...props}
    >
      {children || phone}
    </a>
  );
};

/**
 * Email Link Component
 */
export const EmailLink = ({ email, label = '', subject = '', children = null, ...props }) => {
  if (!email) return null;

  const href = subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;

  return (
    <a
      href={href}
      aria-label={label || `Email ${email}`}
      {...props}
    >
      {children || email}
    </a>
  );
};

export default SmartLink;
