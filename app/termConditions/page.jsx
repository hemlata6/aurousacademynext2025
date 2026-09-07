import TermConditionsPageClient from './TermConditionsPageClient';
import { generatePageMetadata } from '@/lib/seoUtils';

export const metadata = generatePageMetadata({
  title: 'Terms & Conditions | Aurous Academy',
  description: 'Aurous Academy Terms & Conditions - Read our terms of service and conditions for using our platform.',
  canonical: 'https://aurousacademy.com/termConditions',
  noindex: true,
});

export default function TermOfUsePage() {
  return <TermConditionsPageClient />;
}
