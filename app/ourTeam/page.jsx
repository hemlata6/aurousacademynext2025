import OurTeamPageClient from './OurTeamPageClient';

export const metadata = {
  title: 'Our Team | Faculty & Staff | Aurous Academy',
  description: 'Meet the expert faculty and dedicated team at Aurous Academy. Experienced educators committed to student success in IIT-JEE and NEET.',
  keywords: 'faculty, teacher, expert instructors, coaching staff, experienced teachers',
  alternates: {
    canonical: 'https://aurousacademy.com/ourTeam',
  },
};

export default function OurTeamPage() {
  return <OurTeamPageClient />;
}
