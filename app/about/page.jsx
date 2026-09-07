import AboutPageClient from './AboutPageClient';
import { generatePageMetadata } from '@/lib/seoUtils';

export const metadata = generatePageMetadata({
  title: 'About Us | Aurous Academy - IIT JEE & NEET Coaching',
  description: 'Learn about Aurous Academy - a leading IIT JEE and NEET coaching institute in Bhopal with expert faculty, proven track record, and personalized mentoring.',
  keywords: 'about Aurous Academy, coaching institute Bhopal, IIT preparation center, NEET coaching center',
  canonical: 'https://aurousacademy.com/about',
});

export default function AboutPage() {
  return <AboutPageClient />;
}
