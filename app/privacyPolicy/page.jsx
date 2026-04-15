import PrivacyPolicyPageClient from './PrivacyPolicyPageClient';

export const metadata = {
  title: 'Privacy Policy | Aurous Academy',
  description: 'Aurous Academy Privacy Policy - Learn about how we collect, use, and protect your personal information.',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://aurousacademy.com/privacyPolicy',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}
