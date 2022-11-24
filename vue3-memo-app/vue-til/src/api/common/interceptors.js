import { useUserStore } from '@/stores/auth/user';
// import { storeToRefs } from 'pinia';

export const setInterceptors = instance => {
  // Add a request interceptor
  instance.interceptors.request.use(
    config => {
      const { token } = useUserStore();
      // Do something before request is sent
      config.headers.Authorization = token;
      return config;
    },
    error => {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    response => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    error => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );
  return instance;
};
