import CoursePageClient from './CoursePageClient';

export const metadata = {
  title: 'Courses | IIT JEE, NEET & Foundation Courses | Aurous Academy Bhopal',
  description: 'Explore comprehensive courses at Aurous Academy - IIT JEE Main & Advanced, NEET, and Foundation classes for classes 7-12 with expert guidance.',
  keywords: 'IIT-JEE coaching, NEET preparation courses, foundation courses, online classes, JEE Main courses',
  alternates: {
    canonical: 'https://aurousacademy.com/course',
  },
};

export default function CoursePage() {
  return <CoursePageClient />;
}
