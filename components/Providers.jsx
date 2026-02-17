'use client';

import { SnackbarProvider } from 'notistack';
import { CourseProvider } from '@/context/CourseContext';

export default function Providers({ children }) {
  return (
    <SnackbarProvider>
      <CourseProvider>
        {children}
      </CourseProvider>
    </SnackbarProvider>
  );
}



