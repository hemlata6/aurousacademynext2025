'use client';

import { CourseProvider } from '@/context/CourseContext';

export default function Providers({ children }) {
  return (
    <CourseProvider>
      {children}
    </CourseProvider>
  );
}



