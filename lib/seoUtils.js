/**
 * SEO Utility for Next.js
 * Provides helper functions for SEO-optimized components
 */

/**
 * Generate metadata object for a page
 * @param {Object} params - Configuration parameters
 * @returns {Object} - Next.js metadata object
 */
export const generatePageMetadata = ({
  title,
  description,
  keywords = '',
  canonical = 'https://aurousacademy.com',
  ogImage = 'https://aurousacademy.com/assets/logo-DUJINxlD.svg',
  ogType = 'website',
  twitterHandle = '@aurousacademy',
  author = 'Aurous Academy',
  noindex = false,
} = {}) => {
  return {
    title: title || 'Aurous Academy',
    description: description || 'Best IIT JEE & NEET Coaching Institute in Bhopal',
    keywords: keywords,
    authors: [{ name: author }],
    publisher: 'Aurous Academy',
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    canonical: canonical,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      type: ogType,
      url: canonical,
      title: title,
      description: description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      creator: twitterHandle,
      images: [ogImage],
    },
  };
};

/**
 * Format URL with trailing slash for consistency
 * @param {string} url - URL string
 * @returns {string} - Formatted URL
 */
export const formatCanonicalUrl = (url) => {
  if (!url) return 'https://aurousacademy.com/';
  // Ensure it starts with https
  if (!url.includes('https://')) {
    url = 'https://aurousacademy.com' + (url.startsWith('/') ? url : `/${url}`);
  }
  // Remove trailing slash except for root
  if (url.endsWith('/') && url !== 'https://aurousacademy.com/') {
    url = url.slice(0, -1);
  }
  return url;
};

/**
 * Generate JSON-LD structured data
 * @param {Object} schema - Schema object
 * @returns {string} - JSON stringified schema
 */
export const generateJsonLd = (schema) => {
  return JSON.stringify({
    '@context': 'https://schema.org',
    ...schema,
  });
};

/**
 * Extract keywords for SEO
 * @param {string} text - Text to extract keywords from
 * @param {number} limit - Max number of keywords
 * @returns {string[]} - Array of keywords
 */
export const extractKeywords = (text, limit = 10) => {
  if (!text) return [];
  
  const stopWords = [
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'is', 'are', 'was', 'been', 'be', 'have', 'has', 'had',
    'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might'
  ];

  const words = text
    .toLowerCase()
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.includes(word));

  // Get unique words and limit
  return [...new Set(words)].slice(0, limit);
};

/**
 * Check if URL is external
 * @param {string} url - URL to check
 * @param {string} baseUrl - Base domain
 * @returns {boolean} - True if external
 */
export const isExternalUrl = (url, baseUrl = 'aurousacademy.com') => {
  try {
    const urlObj = new URL(url, 'https://aurousacademy.com');
    return !urlObj.hostname.includes(baseUrl);
  } catch {
    return false;
  }
};

/**
 * Generate rel attribute for links
 * @param {string} url - Target URL
 * @param {boolean} isExternal - Is external link
 * @returns {string} - Rel attribute value
 */
export const generateLinkRel = (url, isExternal) => {
  if (isExternal) {
    return 'nofollow noopener noreferrer';
  }
  return undefined;
};
