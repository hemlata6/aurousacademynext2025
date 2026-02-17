import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://prodapi.classiolabs.com/';

// Create axios instance with base config
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
});

export const API_ENDPOINTS = {
  COURSES: 'admin/course/fetch-public/',
  COURSE_CONTENT: 'admin/course/fetchContent-public',
  TAGS_LIST: 'admin/course/fetch-tags-public/',
  BUY_COURSE: '/admin/payment/fetch-public-checkout-url',
  FETCH_IFRAME: '/admin/iframe/fetch',
  FETCH_INSTITUTE_DETAILS: '/getMetaData/fetch-institute',
  FETCH_ADD_CLICK: 'admin/add-click',
  BANNER: '/admin/banner/fetch-public-banner/',
  FETCH_PUBLIC_EMPLOYEE: '/admin/employee/fetch-public-employee/',
  FETCH_ANNOUNCEMENT: 'admin/announcement/fetch-active-announcement/',
  TEST_SERIES: '/admin/quiz/test-series/fetch-public/',
  FORM_SUBMIT: '/leadManagement/create-lead-form',
  FETCH_COURSE_SCHEDULER: 'admin/course/fetchContent-public/',
  FETCH_DOMAIN: 'domain/fetch-public',
  FETCH_GALLERY: 'admin/fetch/gallery/',
  FETCH_BLOG_CONTENT: 'student/course/fetchCourseContent/',
};

// Blog Detail API
export async function fetchBlogDetail(contentId) {
  try {
    const response = await axiosInstance.get(`${API_ENDPOINTS.FETCH_BLOG_CONTENT}${contentId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog detail:', error);
    throw error;
  }
}

// Courses API
export async function fetchCourses(instId) {
  try {
    const response = await axiosInstance.get(`${API_ENDPOINTS.COURSES}${instId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
}

// Course Schedule API
export async function fetchCourseSchedule(courseId, contentId) {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINTS.FETCH_COURSE_SCHEDULER}${courseId}/${contentId}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching course schedule:', error);
    throw error;
  }
}

// Courses Content API
export async function fetchCoursesContent(courseId) {
  try {
    const response = await axiosInstance.get(`${API_ENDPOINTS.COURSE_CONTENT}/${courseId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses content:', error);
    throw error;
  }
}

// Tags List API
export async function fetchTagsList(instId) {
  try {
    const response = await axiosInstance.get(`${API_ENDPOINTS.TAGS_LIST}${instId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tags list:', error);
    throw error;
  }
}

// Announcement API
export async function fetchAnnouncement(instId) {
  try {
    const response = await axiosInstance.get(`${API_ENDPOINTS.FETCH_ANNOUNCEMENT}${instId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching announcement:', error);
    throw error;
  }
}

// Gallery API
export async function fetchGallery(instId) {
  try {
    const response = await axiosInstance.get(`${API_ENDPOINTS.FETCH_GALLERY}${instId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching gallery:', error);
    throw error;
  }
}

// Banner API
export async function fetchBanner(instId) {
  try {
    const response = await axiosInstance.get(`${API_ENDPOINTS.BANNER}${instId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching banner:', error);
    throw error;
  }
}

// Domain API
export async function fetchDomain(instId) {
  try {
    const response = await axiosInstance.get(`${API_ENDPOINTS.FETCH_DOMAIN}?instId=${instId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching domain:', error);
    throw error;
  }
}

// Test Series API
export async function fetchTestSeries(instId) {
  try {
    const response = await axiosInstance.get(`${API_ENDPOINTS.TEST_SERIES}${instId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching test series:', error);
    throw error;
  }
}

// Form Submit API
export async function submitForm(data) {
  try {
    const response = await axiosInstance.post(API_ENDPOINTS.FORM_SUBMIT, data);
    return response.data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}

// Institute Detail API
export async function fetchInstituteDetail(instId) {
  try {
    const response = await axiosInstance.get(`${API_ENDPOINTS.FETCH_INSTITUTE_DETAILS}/${instId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching institute detail:', error);
    throw error;
  }
}

export default axiosInstance;
