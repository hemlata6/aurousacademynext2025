import GalleryPageClient from './GalleryPageClient';

export const metadata = {
  title: 'Gallery | Aurous Academy - Campus & Student Success Stories',
  description: 'Explore Aurous Academy gallery with campus photos, student achievements, and success stories of IIT-JEE and NEET qualifiers.',
  keywords: 'Aurous Academy photos, campus gallery, student achievements, success stories',
  alternates: {
    canonical: 'https://aurousacademy.com/gallery',
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
