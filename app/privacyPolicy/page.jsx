import PrivacyPolicyPageClient from './PrivacyPolicyPageClient';

export const metadata = {
  title: 'Privacy Policy and Refund Policy | Aurous Academy',
  description: 'Aurous Academy privacy policy and refund policy for how we handle personal information, payments, and refund terms.',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://aurousacademy.com/privacyPolicy',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}
