import BannerPageClient from './BannerPageClient';
import { generatePageMetadata } from '@/lib/seoUtils';

export const metadata = generatePageMetadata({
  title: 'Institute Gallery | Aurous Academy',
  description: 'Explore the Aurous Academy gallery showcasing campus photos, classrooms, events, student activities, and institute highlights.',
  keywords: 'Aurous Academy gallery, institute gallery, campus photos, student activities, events, classrooms, Aurous Academy images',
  canonical: 'https://aurousacademy.com/banner',
});

export default function BannerPage() {
  return <BannerPageClient />;
}
