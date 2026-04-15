import TermConditionsPageClient from './TermConditionsPageClient';

export const metadata = {
  title: 'Terms & Conditions | Aurous Academy',
  description: 'Aurous Academy Terms & Conditions - Read our terms of service and conditions for using our platform.',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://aurousacademy.com/termConditions',
  },
};

export default function TermOfUsePage() {
  return <TermConditionsPageClient />;
}
