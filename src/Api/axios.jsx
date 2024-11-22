import axios from 'axios'
import { getToken } from '../utils/helpers';

export const baseURL =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_APP_HOST_URL
    : import.meta.env.VITE_APP_HOST_URL_LIVE

const instance = axios.create({ baseURL })

instance.interceptors.request.use((config) => {
  const token = getToken();
  config.headers.Authorization = `Bearer ${token}`;
  // config.headers.["X-permissions"]
  return config;
});

instance.interceptors.response.use(
  (response) => {
    // Successful responses remain unaltered.
    return response;
  },
  (error) => {
    // Handle errors globally.
    if (error.response) {
      const status = error.response.status;
      if (status === 401 || error.response.data.message === "Unauthenticated.") {
        window.location.href = '/login'; // Redirect to login page.
      } else {
        // Optionally, log errors or show notifications.
        console.error('API Error:', error.response.data);
      }
    }
    return Promise.reject(error);
  }
);


export default instance;