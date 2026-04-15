/**
 * SEO-Optimized Heading Component
 * Prevents multiple H1s and ensures proper heading hierarchy
 */

import React from 'react';
import { Typography } from '@mui/material';

/**
 * @param {string} level - Heading level (h1, h2, h3, h4, h5, h6)
 * @param {string} children - Heading text
 * @param {Object} sx - Additional styling
 * @param {boolean} semantic - Use semantic HTML tags (default: true)
 */
export const SeoHeading = ({
  level = 'h2',
  children,
  sx = {},
  semantic = true,
  className = '',
  ...props
}) => {
  // Map heading levels to Typography variants
  const variantMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  };

  const variant = variantMap[level] || 'h2';

  if (semantic) {
    // Use semantic HTML heading tags
    const HeadingTag = level;
    return (
      <HeadingTag
        className={className}
        style={{
          margin: '0.5em 0',
          ...sx,
        }}
        {...props}
      >
        {children}
      </HeadingTag>
    );
  }

  // Fallback to Typography (useful for styling consistency)
  return (
    <Typography
      variant={variant}
      component={level}
      className={className}
      sx={{
        margin: '0.5em 0',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

/**
 * Page Heading Component with main H1 tag
 */
export const PageH1 = ({ children, sx = {}, ...props }) => {
  return (
    <SeoHeading
      level="h1"
      semantic={true}
      sx={{
        fontSize: { xs: '28px', sm: '32px', md: '40px' },
        fontWeight: 700,
        marginBottom: '1rem',
        color: '#1a1a1a',
        ...sx,
      }}
      {...props}
    >
      {children}
    </SeoHeading>
  );
};

/**
 * Section Heading Component with H2 tag
 */
export const SectionH2 = ({ children, sx = {}, ...props }) => {
  return (
    <SeoHeading
      level="h2"
      semantic={true}
      sx={{
        fontSize: { xs: '22px', sm: '26px', md: '32px' },
        fontWeight: 600,
        marginTop: '1.5rem',
        marginBottom: '0.75rem',
        color: '#2c3e50',
        ...sx,
      }}
      {...props}
    >
      {children}
    </SeoHeading>
  );
};

/**
 * Subsection Heading Component with H3 tag
 */
export const SubsectionH3 = ({ children, sx = {}, ...props }) => {
  return (
    <SeoHeading
      level="h3"
      semantic={true}
      sx={{
        fontSize: { xs: '18px', sm: '20px', md: '24px' },
        fontWeight: 600,
        marginTop: '1rem',
        marginBottom: '0.5rem',
        color: '#34495e',
        ...sx,
      }}
      {...props}
    >
      {children}
    </SeoHeading>
  );
};

/**
 * Minor Heading Component with H4 tag
 */
export const MinorH4 = ({ children, sx = {}, ...props }) => {
  return (
    <SeoHeading
      level="h4"
      semantic={true}
      sx={{
        fontSize: { xs: '16px', sm: '18px', md: '20px' },
        fontWeight: 600,
        marginTop: '0.75rem',
        marginBottom: '0.5rem',
        color: '#4a5c7a',
        ...sx,
      }}
      {...props}
    >
      {children}
    </SeoHeading>
  );
};
