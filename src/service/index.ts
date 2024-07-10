import axios from "axios";

const API_BASE_URL = "http://localhost:5002"; // Replace with your actual API base URL

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
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
