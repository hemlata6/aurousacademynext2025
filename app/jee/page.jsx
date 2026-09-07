import JEEPageClient from './JEEPageClient';
import { generatePageMetadata } from '@/lib/seoUtils';

export const metadata = generatePageMetadata({
  title: 'JEE Coaching | Best IIT JEE Preparation Classes in Bhopal | Aurous Academy',
  description: 'Join Aurous Academy for expert JEE coaching in Bhopal. Get personalized mentoring, high-quality teaching, and proven results with our IIT JEE classes.',
  keywords: 'JEE coaching Bhopal, IIT JEE classes, JEE Main preparation, JEE Advanced coaching, best JEE coaching center',
  canonical: 'https://aurousacademy.com/jee',
});

export default function JEEPage() {
  return <JEEPageClient />;
}
