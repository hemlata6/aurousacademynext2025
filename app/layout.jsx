import Footer from '@/components/CommonSections/Footer';
import Providers from '@/components/Providers';
import ScriptsAndTracking from '@/components/ScriptsAndTracking';
import RootLayoutClient from './RootLayoutClient';
import '@/styles/globals.css';

export const metadata = {
  title: 'Aurous Academy | Best IIT JEE & NEET Coaching Institute in Bhopal | Foundation Courses',
  description: 'Aurous Academy is the best IIT JEE & NEET coaching institute in Bhopal offering expert faculty, personalized mentoring, highest selection ratio, and foundation courses for students.',
  keywords: 'Best IIT Coaching in Bhopal, Best JEE Coaching in Bhopal, Best NEET Coaching in Bhopal, Top IIT Coaching in Bhopal, Top JEE Coaching in Bhopal, Top NEET Coaching in Bhopal, Best IIT JEE Coaching in Bhopal, IIT Coaching in Bhopal, IIT coaching classes Bhopal, IIT JEE coaching classes in Bhopal, JEE coaching in Bhopal, IIT coaching Bhopal, IIT coaching center in Bhopal, Coaching institutes in Bhopal for IIT JEE, IIT institute in Bhopal, IIT JEE coaching classes, JEE Mains coaching in Bhopal',
  robots: 'index, follow',
  authors: [{ name: 'Aurous Academy' }],
  publisher: 'Aurous Academy',
  canonical: 'https://aurousacademy.com/',
  alternates: {
    canonical: 'https://aurousacademy.com/',
    languages: {
      'en-IN': 'https://aurousacademy.com/',
      'x-default': 'https://aurousacademy.com/',
    },
  },
  icons: {
    icon: '/roundedLogo.svg',
    shortcut: '/roundedLogo.svg',
    apple: '/roundedLogo.svg',
  },
  themeColor: '#F59E0B',
  openGraph: {
    type: 'website',
    url: 'https://aurousacademy.com/',
    title: 'Aurous Academy | Best IIT JEE & NEET Coaching Institute in Bhopal',
    description: 'Join Aurous Academy – the top IIT JEE & NEET coaching institute in Bhopal with expert mentors and proven results.',
    images: [
      {
        url: 'https://aurousacademy.com/assets/logo-DUJINxlD.svg',
        width: 1200,
        height: 630,
        alt: 'Aurous Academy Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurous Academy | Best IIT JEE & NEET Coaching Institute in Bhopal',
    description: 'Aurous Academy provides the best IIT JEE, NEET & Foundation coaching in Bhopal.',
    images: ['https://aurousacademy.com/assets/logo-DUJINxlD.svg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
                  '@id': 'https://aurousacademy.com/#organization',
                  name: 'Aurous Academy',
                  url: 'https://aurousacademy.com/',
                  logo: 'https://aurousacademy.com/assets/logo-DUJINxlD.svg',
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
                    'https://www.facebook.com/aurousacademy',
                    'https://www.instagram.com/aurousacademy',
                    'https://www.youtube.com/@aurousacademy8912',
                    'https://www.linkedin.com/company/aurous-academy',
                  ],
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://aurousacademy.com/#localbusiness',
                  name: 'Aurous Academy',
                  image: 'https://aurousacademy.com/assets/logo-DUJINxlD.svg',
                  telephone: '+91-95225-12624',
                  priceRange: '₹₹',
                  openingHours: 'Mo-Su 08:00-22:30',
                  url: 'https://aurousacademy.com/',
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
                  '@id': 'https://aurousacademy.com/#website',
                  url: 'https://aurousacademy.com/',
                  name: 'Aurous Academy',
                  publisher: {
                    '@id': 'https://aurousacademy.com/#organization',
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
