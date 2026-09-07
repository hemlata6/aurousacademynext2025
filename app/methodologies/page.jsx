import MethodologiesPageClient from './MethodologiesPageClient';
import { generatePageMetadata } from '@/lib/seoUtils';

export const metadata = generatePageMetadata({
  title: 'Our Methodologies | Teaching Approach | Aurous Academy',
  description: 'Learn about Aurous Academy unique teaching methodologies that ensure effective learning, conceptual clarity, and excellent results in IIT-JEE and NEET.',
  keywords: 'teaching methodology, learning approach, teaching strategy, effective teaching',
  canonical: 'https://aurousacademy.com/methodologies',
});

export default function OurMethodologiesPage() {
  return <MethodologiesPageClient />;
}
