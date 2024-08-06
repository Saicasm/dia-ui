import axios from "axios";
const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});
// Response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Add any custom response error handling here
    if (error.response.status === 401) {
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
