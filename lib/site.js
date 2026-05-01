export const SITE_NAME = 'Aurous Academy';
export const SITE_URL = 'https://aurousacademy.com';
export const DEFAULT_OG_IMAGE_PATH = '/opengraph-image';
export const DEFAULT_OG_IMAGE_URL = `${SITE_URL}${DEFAULT_OG_IMAGE_PATH}`;
export const DEFAULT_BLOG_IMAGE_PATH = '/aurous-academy-blog-featured-image.svg';
export const DEFAULT_BLOG_IMAGE_URL = `${SITE_URL}${DEFAULT_BLOG_IMAGE_PATH}`;
export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@aurousacademy8912';

export const SOCIAL_URLS = {
  facebook: 'https://www.facebook.com/aurousacademy',
  instagram: 'https://www.instagram.com/aurousacademy/',
  linkedin: 'https://in.linkedin.com/company/aurous-academy',
  youtube: YOUTUBE_CHANNEL_URL,
};

export function toAbsoluteUrl(path = '/') {
  try {
    return new URL(path, SITE_URL).toString();
  } catch {
    return SITE_URL;
  }
}

export function normalizeUrl(value, fallback = SITE_URL) {
  if (!value || typeof value !== 'string') {
    return fallback;
  }

  if (value.startsWith('//')) {
    return `https:${value}`;
  }

  if (/^https?:\/\//i.test(value)) {
    return value.replace(/^http:\/\//i, 'https://');
  }

  return toAbsoluteUrl(value.startsWith('/') ? value : `/${value}`);
}

export function resolveMediaUrl(path, mediaBaseUrl, fallback = DEFAULT_BLOG_IMAGE_URL) {
  if (!path || typeof path !== 'string') {
    return fallback;
  }

  if (/^https?:\/\//i.test(path) || path.startsWith('//')) {
    return normalizeUrl(path, fallback);
  }

  if (mediaBaseUrl) {
    try {
      return new URL(path, normalizeUrl(mediaBaseUrl)).toString();
    } catch {
      return fallback;
    }
  }

  return normalizeUrl(path, fallback);
}