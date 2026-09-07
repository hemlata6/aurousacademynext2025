import PreviousYearPaperPageClient from './PreviousYearPaperPageClient';
import { generatePageMetadata } from '@/lib/seoUtils';

export const metadata = generatePageMetadata({
  title: 'Previous Year Papers | JEE & NEET Question Papers | Free Download',
  description: 'Download free previous year question papers for IIT-JEE and NEET exams. Practice with actual exam papers for better preparation.',
  keywords: 'previous year papers, JEE papers, NEET papers, question papers, past papers',
  canonical: 'https://aurousacademy.com/previousyearpaper',
});

export default function PreviousYearPaper() {
  return <PreviousYearPaperPageClient />;
}
