import axios from "axios";

export const API_URL = (
  import.meta.env.VITE_API_URL || "https://edulearn-backend-1hry.onrender.com"
).replace(/\/+$/, "");

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export const api = {
  get: (url, config) => {
    return axiosInstance.get(url, config);
  },

  post: (url, data, config) => {
    return axiosInstance.post(url, data, config);
  },

  patch: (url, data, config) => {
    return axiosInstance.patch(url, data, config);
  },

  put: (url, data, config) => {
    return axiosInstance.put(url, data, config);
  },

  delete: (url, config) => {
    return axiosInstance.delete(url, config);
  },
};

export default api;