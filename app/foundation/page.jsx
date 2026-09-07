import FoundationPageClient from './FoundationPageClient';
import { generatePageMetadata } from '@/lib/seoUtils';

export const metadata = generatePageMetadata({
  title: 'Foundation Courses | Classes 7-10 | CBSE Curriculum | Aurous Academy',
  description: 'Build a strong foundation with Aurous Academy foundation courses for classes 7-10. Expert-led CBSE curriculum designed for competitive exam preparation.',
  keywords: 'foundation courses, class 7 coaching, class 8 coaching, class 9 coaching, class 10 coaching, CBSE foundation',
  canonical: 'https://aurousacademy.com/foundation',
});

export default function FoundationPage() {
  return <FoundationPageClient />;
}
