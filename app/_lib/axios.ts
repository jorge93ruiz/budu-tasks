import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
  withXSRFToken: true,
});

let csrfInitialized = false;

api.interceptors.request.use(async (config) => {
  const method = config.method?.toLowerCase();
  if (
    ["post", "put", "patch", "delete"].includes(method || "") &&
    !csrfInitialized
  ) {
    try {
      await axios.get(process.env.NEXT_PUBLIC_CSRF_API_BASE_URL || "", {
        withCredentials: true,
      });
      csrfInitialized = true;
    } catch (error) {
      // Handle CSRF token initialization error
      console.error("CSRF token initialization failed:", error);
      throw error;
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.response) {
      // console.error("API Error:", error.response.data);
    } else {
      // console.error("Network Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
