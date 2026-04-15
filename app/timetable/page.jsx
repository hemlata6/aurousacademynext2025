import TimeTablePageClient from './TimeTablePageClient';

export const metadata = {
  title: 'Timetable | Class Schedule | Aurous Academy',
  description: 'Check the complete class timetable and schedule for all courses at Aurous Academy. Plan your IIT-JEE and NEET preparation.',
  keywords: 'class schedule, timetable, course schedule, batch timing, study schedule',
  alternates: {
    canonical: 'https://aurousacademy.com/timetable',
  },
};

export default function TimeTablePage() {
  return <TimeTablePageClient />;
}
