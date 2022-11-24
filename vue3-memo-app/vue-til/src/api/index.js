import axios from 'axios';
import { setInterceptors } from './common/interceptors';

const createInstance = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
  });
};

// init axios
const createInstanceWithAuth = url => {
  const instance = axios.create({
    baseURL: `${import.meta.env.VITE_APP_API_URL}${url}`,
  });

  return setInterceptors(instance);
};

const instance = createInstance();
const posts = createInstanceWithAuth('posts');

export { instance, posts };
