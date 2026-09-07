import PrivacyPolicyPageClient from './PrivacyPolicyPageClient';
import { generatePageMetadata } from '@/lib/seoUtils';

export const metadata = generatePageMetadata({
  title: 'Privacy Policy and Refund Policy | Aurous Academy',
  description: 'Aurous Academy privacy policy and refund policy for how we handle personal information, payments, and refund terms.',
  canonical: 'https://aurousacademy.com/privacyPolicy',
  noindex: true,
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}
