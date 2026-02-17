// Image and API Endpoints
// This file contains all API endpoints and image URL patterns

// export default class Endpoints {
// 	// static baseUrl="http://192.168.1.125:7070";

// 	static baseURL = "http://192.168.0.242:6060";
// 	static mediaBaseUrl = "https://media.theoogway.com/";
// }

export const BASE_URL = "https://prodapi.classiolabs.com/";

const Endpoints = {
  // baseURL: "https://api.softkitesinfo.com/",
  baseURL: "https://prodapi.classiolabs.com/",
  // mediaBaseUrl: "https://media.theoogway.com/",
  // mediaBaseUrl: "https://classiopace.in-maa-1.linodeobjects.com/",
  // mediaBaseUrl: "https://classiosafaltaias.in-maa-1.linodeobjects.com/",
  mediaBaseUrl: "",
};

export const IMAGE_ENDPOINTS = {
  // Media base URLs - accessed dynamically from Endpoints
  get media_base() {
    return Endpoints.mediaBaseUrl;
  },
  images_base: "https://classioaurous.in-maa-1.linodeobjects.com/",
  
  // Course images
  course_thumbnail: (courseId) => `${Endpoints.mediaBaseUrl}course_${courseId}.jpg`,
  
  // Banner images
  banner: (bannerId) => `${BASE_URL}admin/banner/get/${bannerId}`,
  
  // Employee images
  employee: (employeeId) => `${Endpoints.mediaBaseUrl}employee_${employeeId}.jpg`,
  
  // Gallery images
  gallery: (galleryId) => `${Endpoints.mediaBaseUrl}gallery_${galleryId}.jpg`,
  
  // Test series images
  testSeries: (testId) => `${Endpoints.mediaBaseUrl}test_${testId}.jpg`,
};

export const API_ENDPOINTS = {
  baseURL: BASE_URL,
  
  // Course endpoints
  courses: BASE_URL + 'admin/course/fetch-public/',
  courseContent: BASE_URL + 'admin/course/fetchContent-public',
  tags: BASE_URL + 'admin/course/fetch-tags-public/',
  
  // Payment endpoints
  buyCoursCheckout: BASE_URL + '/admin/payment/fetch-public-checkout-url',
  
  // Content endpoints
  iframe: BASE_URL + '/admin/iframe/fetch',
  banner: BASE_URL + '/admin/banner/fetch-public-banner/',
  
  // Employee endpoints
  employee: BASE_URL + '/admin/employee/fetch-public-employee/',
  
  // Announcement endpoints
  announcement: BASE_URL + 'admin/announcement/fetch-active-announcement/',
  
  // Test series endpoints
  testSeries: BASE_URL + '/admin/quiz/test-series/fetch-public/',
  
  // Form endpoints
  leadForm: BASE_URL + '/leadManagement/create-lead-form',
  enquiry: BASE_URL + 'admin/enquiry/create/',
  
  // Domain endpoints
  domain: BASE_URL + 'domain/fetch-public?instId=',
  
  // Gallery endpoints
  gallery: BASE_URL + 'admin/fetch/gallery/',
  
  // Blog endpoints
  blog: BASE_URL + 'student/course/fetchCourseContent/',
  
  // Institute endpoints
  institute: BASE_URL + '/getMetaData/fetch-institute',
  
  // Click tracking
  addClick: BASE_URL + 'admin/add-click',
};

export default Endpoints;
