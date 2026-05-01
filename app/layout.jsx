import { Poppins, Roboto_Condensed } from 'next/font/google';
import Footer from '@/components/CommonSections/Footer';
import Providers from '@/components/Providers';
import ScriptsAndTracking from '@/components/ScriptsAndTracking';
import { DEFAULT_OG_IMAGE_URL, SITE_NAME, SITE_URL, SOCIAL_URLS } from '@/lib/site';
import RootLayoutClient from './RootLayoutClient';
import '@/styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const viewport = {
  themeColor: '#F59E0B',
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: 'Aurous Academy | Best IIT JEE & NEET Coaching Institute in Bhopal | Foundation Courses',
  description: 'Aurous Academy is the best IIT JEE & NEET coaching institute in Bhopal offering expert faculty, personalized mentoring, highest selection ratio, and foundation courses for students.',
  keywords: 'Best IIT Coaching in Bhopal, Best JEE Coaching in Bhopal, Best NEET Coaching in Bhopal, Top IIT Coaching in Bhopal, Top JEE Coaching in Bhopal, Top NEET Coaching in Bhopal, Best IIT JEE Coaching in Bhopal, IIT Coaching in Bhopal, IIT coaching classes Bhopal, IIT JEE coaching classes in Bhopal, JEE coaching in Bhopal, IIT coaching Bhopal, IIT coaching center in Bhopal, Coaching institutes in Bhopal for IIT JEE, IIT institute in Bhopal, IIT JEE coaching classes, JEE Mains coaching in Bhopal',
  robots: 'index, follow',
  authors: [{ name: 'Aurous Academy' }],
  publisher: 'Aurous Academy',
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-IN': SITE_URL,
      'x-default': SITE_URL,
    },
  },
  icons: {
    icon: '/roundedLogo.svg',
    shortcut: '/roundedLogo.svg',
    apple: '/roundedLogo.svg',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Aurous Academy | Best IIT JEE & NEET Coaching Institute in Bhopal',
    description: 'Join Aurous Academy – the top IIT JEE & NEET coaching institute in Bhopal with expert mentors and proven results.',
    images: [
      {
        url: DEFAULT_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Aurous Academy coaching institute in Bhopal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurous Academy | Best IIT JEE & NEET Coaching Institute in Bhopal',
    description: 'Aurous Academy provides the best IIT JEE, NEET & Foundation coaching in Bhopal.',
    images: [DEFAULT_OG_IMAGE_URL],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${robotoCondensed.variable}`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'EducationalOrganization',
                  '@id': `${SITE_URL}/#organization`,
                  name: 'Aurous Academy',
                  url: SITE_URL,
                  logo: `${SITE_URL}/roundedLogo.svg`,
                  description: 'Best IIT JEE & NEET coaching institute in Bhopal offering foundation and competitive exam preparation.',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Plot No. R-4, Opposite Railway Track, Zone-II, Maharana Pratap Nagar',
                    addressLocality: 'Bhopal',
                    addressRegion: 'Madhya Pradesh',
                    postalCode: '462011',
                    addressCountry: 'IN',
                  },
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+91-95225-12624',
                    contactType: 'customer service',
                    areaServed: 'IN',
                    availableLanguage: ['en', 'hi'],
                  },
                  sameAs: [
                    SOCIAL_URLS.facebook,
                    SOCIAL_URLS.instagram,
                    SOCIAL_URLS.youtube,
                    SOCIAL_URLS.linkedin,
                  ],
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': `${SITE_URL}/#localbusiness`,
                  name: 'Aurous Academy',
                  image: `${SITE_URL}/roundedLogo.svg`,
                  telephone: '+91-95225-12624',
                  priceRange: '₹₹',
                  openingHours: 'Mo-Su 08:00-22:30',
                  url: SITE_URL,
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 23.23273157338026,
                    longitude: 77.43653834675754,
                  },
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Plot No. R-4, Opposite Railway Track, Zone-II, Maharana Pratap Nagar',
                    addressLocality: 'Bhopal',
                    addressRegion: 'Madhya Pradesh',
                    postalCode: '462011',
                    addressCountry: 'IN',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: 'Aurous Academy',
                  publisher: {
                    '@id': `${SITE_URL}/#organization`,
                  },
                  inLanguage: 'en',
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <ScriptsAndTracking />
        <Providers>
          <RootLayoutClient>
            {children}
          </RootLayoutClient>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
