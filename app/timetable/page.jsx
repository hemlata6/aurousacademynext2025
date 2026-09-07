import TimeTablePageClient from './TimeTablePageClient';
import { generatePageMetadata } from '@/lib/seoUtils';

export const metadata = generatePageMetadata({
  title: 'Timetable | Class Schedule | Aurous Academy',
  description: 'Check the complete class timetable and schedule for all courses at Aurous Academy. Plan your IIT-JEE and NEET preparation.',
  keywords: 'class schedule, timetable, course schedule, batch timing, study schedule',
  canonical: 'https://aurousacademy.com/timetable',
});

export default function TimeTablePage() {
  return <TimeTablePageClient />;
}
