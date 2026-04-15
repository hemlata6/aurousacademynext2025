import FreeResourcesPageClient from './FreeResourcesPageClient';

export const metadata = {
  title: 'Free Resources | Study Materials & E-books | Aurous Academy',
  description: 'Access free study materials, notes, and e-books for IIT-JEE and NEET preparation. Comprehensive resources to supplement your learning.',
  keywords: 'free study materials, notes, e-books, study resources, exam preparation materials',
  alternates: {
    canonical: 'https://aurousacademy.com/freeresources',
  },
};

export default function FreeResourcesPage() {
  return <FreeResourcesPageClient />;
}
