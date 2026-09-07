import NEETPageClient from './NEETPageClient';
import { generatePageMetadata } from '@/lib/seoUtils';

export const metadata = generatePageMetadata({
  title: 'NEET Coaching | Best Medical Entrance Preparation in Bhopal | Aurous Academy',
  description: 'Get expert NEET coaching at Aurous Academy Bhopal. Personalized guidance, mock tests, and high success rate for NEET UG preparation.',
  keywords: 'NEET coaching Bhopal, medical entrance preparation, NEET classes, NEET UG, medical coaching',
  canonical: 'https://aurousacademy.com/neet',
});

export default function NEETPage() {
  return <NEETPageClient />;
}
