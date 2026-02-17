'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load course data from localStorage on mount
    if (typeof window !== 'undefined') {
      try {
        const savedCourse = localStorage.getItem('selectedCourse');
        if (savedCourse) {
          setSelectedCourse(JSON.parse(savedCourse));
        }
      } catch (error) {
        console.error('Error loading course from localStorage:', error);
      }
    }
    setIsLoading(false);
  }, []);

  const handleSetSelectedCourse = (course) => {
    setSelectedCourse(course);
    // Save to localStorage
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('selectedCourse', JSON.stringify(course));
      } catch (error) {
        console.error('Error saving course to localStorage:', error);
      }
    }
  };

  return (
    <CourseContext.Provider value={{ selectedCourse, setSelectedCourse: handleSetSelectedCourse, isLoading }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourse must be used within CourseProvider');
  }
  return context;
}
