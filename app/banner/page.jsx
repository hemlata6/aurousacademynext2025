import BannerPageClient from './BannerPageClient';

export const metadata = {
  title: 'Institute Gallery | Aurous Academy',
  description: 'Explore the Aurous Academy gallery showcasing campus photos, classrooms, events, student activities, and institute highlights.',
  keywords: 'Aurous Academy gallery, institute gallery, campus photos, student activities, events, classrooms, Aurous Academy images',
  alternates: {
    canonical: 'https://aurousacademy.com/gallery',
  },
};

export default function BannerPage() {
  return <BannerPageClient />;
}
