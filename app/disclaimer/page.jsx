import DisclaimerPageClient from './DisclaimerPageClient';

export const metadata = {
  title: 'Disclaimer | Aurous Academy',
  description: 'Aurous Academy Disclaimer - Important legal disclaimers and information about our services.',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://aurousacademy.com/disclaimer',
  },
};

export default function DisclaimerPage() {
  return <DisclaimerPageClient />;
}
