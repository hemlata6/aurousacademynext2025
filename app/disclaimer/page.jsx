import DisclaimerPageClient from './DisclaimerPageClient';
import { generatePageMetadata } from '@/lib/seoUtils';

export const metadata = generatePageMetadata({
  title: 'Disclaimer | Aurous Academy',
  description: 'Aurous Academy Disclaimer - Important legal disclaimers and information about our services.',
  canonical: 'https://aurousacademy.com/disclaimer',
  noindex: true,
});

export default function DisclaimerPage() {
  return <DisclaimerPageClient />;
}
