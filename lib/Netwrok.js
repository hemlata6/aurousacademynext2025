import Endpoints from '@/constant/endpoints.js';
import axios from "axios";

export default class Network {
  static COURSES_URL = Endpoints.baseURL + "admin/course/fetch-public/";
  static COURSE_CONTENT_URL =
    Endpoints.baseURL + "admin/course/fetchContent-public";
  static TAGS_LIST_URL = Endpoints.baseURL + "admin/course/fetch-tags-public/";
  static BUY_COURSE_URL =
    Endpoints.baseURL + "/admin/payment/fetch-public-checkout-url";
  static FETCH_IFRAME_URL = Endpoints.baseURL + "/admin/iframe/fetch";
  static FETCH_INSTITUTE_DETAILS =
    Endpoints.baseURL + "/getMetaData/fetch-institute";
  static FETCH_ADD_CLICK_URL = Endpoints.baseURL + "admin/add-click";
  static BUY_COURSE_SECOND_FORM = Endpoints.baseURL + "/admin/payment/fetch-public-checkout-url";
  static BANNER_URL = Endpoints.baseURL + "/admin/banner/fetch-public-banner/";
  static FETCH_PUBLIC_EMPLOYEE = Endpoints.baseURL + "/admin/employee/fetch-public-employee/";
  static FETCH_ANNOUNCEMENT_URL = Endpoints.baseURL + 'admin/announcement/fetch-active-announcement/';
  static TEST_SERIES_URL = Endpoints.baseURL + "/admin/quiz/test-series/fetch-public/";
  static FORM_SUBMIT_URL = Endpoints.baseURL + "/leadManagement/create-lead-form";
  static FETCH_COURSE_SCHEDULR_URL = Endpoints.baseURL + "admin/course/fetchContent-public/";
  static FETCH_DOMAIN_URL = Endpoints.baseURL + 'domain/fetch-public?instId=';
  static FETCH_GALLERY_URL = Endpoints.baseURL + 'admin/fetch/gallery/';
  static studentFetchBlogContentUrl = Endpoints.baseURL + "student/course/fetchCourseContent/";
  static studentFetchQuiz = Endpoints.baseURL + "student/test/fetch-quiz";
  static studentFetchAttachment = Endpoints.baseURL + "student/course/fetch-attachment/";
  static studentFetchAllContentUrl = Endpoints.baseURL + "/admin/course/fetch-content";
  static studentEnrolledAccessUrl = Endpoints.baseURL + "student/get-access";


  static async fetchAllContentFromCourse(body) {
    try {
      let requestOptions = {
        // headers: { "X-Auth": auth },
        withCredentials: false,
      };
      const response = await axios.post(this.studentFetchAllContentUrl, body, requestOptions);
      return response.data;
    } catch (error) {
      // Additional check for this critical API
      if (error.response?.status === 401) {
      }
      throw error;
    }
  };

  static async fetchBlogDetailApi(contentId) {

    let requestOptions = {
      withCredentials: false,
    };
    const response = await axios.get(this.studentFetchBlogContentUrl + contentId, requestOptions);
    return response.data;
  };

  static async fetchCourses(instId) {
    // console.log("instId", instId);
    let requestOptions = {
      // headers: { "X-Auth": token },
      withCredentials: false,
    };
    const response = await axios.get(this.COURSES_URL + instId, requestOptions);
    return response.data;
  };
  static async fetchCheduleApi(courseId, contentId) {
    let requestOptions = {
      withCredentials: false,
    };
    const response = await axios.get(this.FETCH_COURSE_SCHEDULR_URL + courseId + '/' + contentId, requestOptions);

    return response.data;
  };

  static async submitForm(body) {
    let requestOptions = {
      withCredentials: false,
    };
    const response = await axios.post(this.FORM_SUBMIT_URL, body, requestOptions);
    return response.data;
  }

  static async fetchTestSeries(instId) {
    let requestOptions = {
      withCredentials: false,
    };
    const response = await axios.get(this.TEST_SERIES_URL + instId, requestOptions);
    return response.data;
  }

  static async fetchAnnouncementUrl(instId) {
    let requestOptions = {
      // headers: { "X-Auth": token },
      withCredentials: false,
    };
    const response = await axios.get(
      this.FETCH_ANNOUNCEMENT_URL + instId,
      requestOptions
    );
    return response.data;
  }

  static async getTagsListApi(instId) {
    let requestOptions = {
      // headers: { "X-Auth": token },
      withCredentials: false,
    };
    const response = await axios.get(
      this.TAGS_LIST_URL + instId,
      requestOptions
    );
    return response.data;
  }

  static async fetchCourseContent(courseId, parentId) {
    let requestOptions = {
      // headers: { "X-Auth": token },
      withCredentials: false,
    };
    const response = await axios.get(
      this.COURSE_CONTENT_URL + "/" + courseId + "/" + parentId,
      requestOptions
    );
    return response.data;
  }


  static async fetchBannerss(instId) {
    let requestOptions = {
      // headers: { "X-Auth": token },
      withCredentials: false,
    };
    const response = await axios.get(
      this.BANNER_URL + "/" + instId,
      requestOptions
    );
    return response.data;
  }

  // static async fetchCourseContent(courseId, parentId) {
  //   let requestOptions = {
  //     headers: {
  //       "X-Auth":
  //         "eyJ1c2VySWQiOjEwMywidGltZXN0YW1wIjoxNzAwODI0MTg5NzI5LCJleHBpcnkiOjE3MzA4MjQxODk3Mjl9",
  //     },
  //     withCredentials: false,
  //   };
  //   const response = await axios.get(
  //     "https://prodapi.classiolabs.com//admin/course/fetchContent/85/0",
  //     requestOptions
  //   );
  //   return response.data;
  // }
  static async BuyCourseApi(body) {
    let response = await axios.post(this.BUY_COURSE_URL, body, {
      headers: {
        "Content-Type": "application/json",
        // "X-Auth": token,
      },
      withCredentials: false,
    });
    return response.data;
  }

  static async fetchIFrame(iframeId) {
    let requestOptions = {
      // headers: { "X-Auth": token },
      withCredentials: false,
    };
    const response = await axios.get(
      this.FETCH_IFRAME_URL + "/" + iframeId,
      requestOptions
    );
    return response.data;
  }

  static async addClickApi(body, instId) {
    let response = await axios.post(
      this.FETCH_ADD_CLICK_URL + "/" + instId,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          // "X-Auth": token,
        },
        withCredentials: false,
      }
    );
    return response.data;
  }

  static async fetchInstituteDetail(instId) {
    let requestOptions = {
      // headers: { "X-Auth": token },
      withCredentials: false,
    };
    const response = await axios.get(
      this.FETCH_INSTITUTE_DETAILS + "/" + instId,
      requestOptions
    );
    return response.data;
  }

  static async buyCourseSecondForm(body) {
    // let requestOptions = {
    //   // headers: { "X-Auth": token },
    //   withCredentials: false,
    // };
    const response = await axios.post(
      this.BUY_COURSE_SECOND_FORM,
      // requestOptions,
      body
    );
    return response.data;
  }

  static async fetchEmployee(instId) {
    // console.log("instId", instId);
    // let requestOptions = {
    //   // headers: { "X-Auth": token },
    //   withCredentials: false,
    // };
    const response = await axios.get(this.FETCH_PUBLIC_EMPLOYEE + instId,);
    return response.data;
  }

  static async fetchDomain(instId) {
    // console.log("instId", instId);
    let requestOptions = {
      // headers: { "X-Auth": token },
      withCredentials: false,
    };
    const response = await axios.get(this.FETCH_DOMAIN_URL + instId, requestOptions);
    return response.data;
  };

  static async fetchGallery(body, instId) {
    // console.log("instId", instId);
    let requestOptions = {
      // headers: { "X-Auth": token },
      withCredentials: false,
    };
    const response = await axios.post(this.FETCH_GALLERY_URL + instId, body, requestOptions);
    return response.data;
  };

}
