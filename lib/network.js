import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://prodapi.classiolabs.com/';

export const API_ENDPOINTS = {
  COURSES_URL: baseURL + 'admin/course/fetch-public/',
  COURSE_CONTENT_URL: baseURL + 'admin/course/fetchContent-public',
  TAGS_LIST_URL: baseURL + 'admin/course/fetch-tags-public/',
  BUY_COURSE_URL: baseURL + '/admin/payment/fetch-public-checkout-url',
  FETCH_IFRAME_URL: baseURL + '/admin/iframe/fetch',
  FETCH_INSTITUTE_DETAILS: baseURL + '/getMetaData/fetch-institute',
  FETCH_ADD_CLICK_URL: baseURL + 'admin/add-click',
  BANNER_URL: baseURL + '/admin/banner/fetch-public-banner/',
  FETCH_PUBLIC_EMPLOYEE: baseURL + '/admin/employee/fetch-public-employee/',
  FETCH_ANNOUNCEMENT_URL: baseURL + 'admin/announcement/fetch-active-announcement/',
  TEST_SERIES_URL: baseURL + '/admin/quiz/test-series/fetch-public/',
  FORM_SUBMIT_URL: baseURL + '/leadManagement/create-lead-form',
  ENQUIRY_SUBMIT_URL: baseURL + 'admin/enquiry/create/',
  FETCH_COURSE_SCHEDULR_URL: baseURL + 'admin/course/fetchContent-public/',
  FETCH_DOMAIN_URL: baseURL + 'domain/fetch-public?instId=',
  FETCH_GALLERY_URL: baseURL + 'admin/fetch/gallery/',
  STUDENT_FETCH_BLOG_CONTENT_URL: baseURL + 'student/course/fetchCourseContent/',
};

const requestOptions = { withCredentials: false };

class Network {
  static async fetchBlogDetailApi(contentId) {
    try {
      const response = await axios.get(
        API_ENDPOINTS.STUDENT_FETCH_BLOG_CONTENT_URL + contentId,
        requestOptions
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching blog detail:', error);
      throw error;
    }
  }

  static async fetchCourses(instId) {
    try {
      const response = await axios.get(
        API_ENDPOINTS.COURSES_URL + instId,
        requestOptions
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  }

  static async fetchCheduleApi(courseId, contentId) {
    try {
      const response = await axios.get(
        API_ENDPOINTS.FETCH_COURSE_SCHEDULR_URL + courseId + '/' + contentId,
        requestOptions
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching schedule:', error);
      throw error;
    }
  }

  static async submitForm(body) {
    try {
      const response = await axios.post(
        API_ENDPOINTS.FORM_SUBMIT_URL,
        body,
        requestOptions
      );
      return response.data;
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error;
    }
  }

  static async submitEnquiry(body) {
    try {
      const response = await axios.post(
        API_ENDPOINTS.ENQUIRY_SUBMIT_URL,
        body,
        requestOptions
      );
      return response.data;
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      throw error;
    }
  }

  static async fetchTestSeries(instId) {
    try {
      const response = await axios.get(
        API_ENDPOINTS.TEST_SERIES_URL + instId,
        requestOptions
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching test series:', error);
      throw error;
    }
  }

  static async fetchAnnouncementUrl(instId) {
    try {
      const response = await axios.get(
        API_ENDPOINTS.FETCH_ANNOUNCEMENT_URL + instId,
        requestOptions
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching announcement:', error);
      throw error;
    }
  }

  static async getTagsListApi(instId) {
    try {
      const response = await axios.get(
        API_ENDPOINTS.TAGS_LIST_URL + instId,
        requestOptions
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching tags:', error);
      throw error;
    }
  }

  static async fetchCourseContent(courseId, parentId) {
    try {
      const response = await axios.get(
        API_ENDPOINTS.COURSE_CONTENT_URL + '/' + courseId + '/' + parentId,
        requestOptions
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching course content:', error);
      throw error;
    }
  }

  static async fetchBannerss(instId) {
    try {
      const response = await axios.get(
        API_ENDPOINTS.BANNER_URL + '/' + instId,
        requestOptions
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching banners:', error);
      throw error;
    }
  }

  static async BuyCourseApi(body) {
    try {
      const response = await axios.post(API_ENDPOINTS.BUY_COURSE_URL, body, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: false,
      });
      return response.data;
    } catch (error) {
      console.error('Error buying course:', error);
      throw error;
    }
  }

  static async fetchIFrame(iframeId) {
    try {
      const response = await axios.get(
        API_ENDPOINTS.FETCH_IFRAME_URL + '/' + iframeId,
        requestOptions
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching iframe:', error);
      throw error;
    }
  }

  static async addClickApi(body, instId) {
    try {
      const response = await axios.post(
        API_ENDPOINTS.FETCH_ADD_CLICK_URL + '/' + instId,
        body,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false,
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error adding click:', error);
      throw error;
    }
  }

  static async fetchInstituteDetail(instId) {
    try {
      const response = await axios.get(
        API_ENDPOINTS.FETCH_INSTITUTE_DETAILS + '/' + instId,
        requestOptions
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching institute detail:', error);
      throw error;
    }
  }

  static async buyCourseSecondForm(body) {
    try {
      const response = await axios.post(
        API_ENDPOINTS.BUY_COURSE_URL,
        body
      );
      return response.data;
    } catch (error) {
      console.error('Error buying course second form:', error);
      throw error;
    }
  }

  static async fetchEmployee(instId) {
    try {
      const response = await axios.get(
        API_ENDPOINTS.FETCH_PUBLIC_EMPLOYEE + instId
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching employees:', error);
      throw error;
    }
  }

  static async fetchDomain(instId) {
    try {
      const response = await axios.get(
        API_ENDPOINTS.FETCH_DOMAIN_URL + instId,
        requestOptions
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching domain:', error);
      throw error;
    }
  }

  static async fetchGallery(body, instId) {
    try {
      const response = await axios.post(
        API_ENDPOINTS.FETCH_GALLERY_URL + instId,
        body,
        requestOptions
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching gallery:', error);
      throw error;
    }
  }
}

export default Network;
