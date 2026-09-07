import ResultPageClient from './ResultPageClient';
import { generatePageMetadata } from '@/lib/seoUtils';

export const metadata = generatePageMetadata({
  title: 'Results | Aurous Academy - Success Stories of IIT-JEE & NEET Qualifiers',
  description: 'Check outstanding results and success stories of Aurous Academy students who qualified IIT-JEE, NEET, and other competitive exams.',
  keywords: 'IIT-JEE results, NEET results, student results, success stories, qualification statistics',
  canonical: 'https://aurousacademy.com/result',
});

export default function ResultPage() {
  return <ResultPageClient />;
}
