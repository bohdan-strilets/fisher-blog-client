import axios from "axios";

export const API_URL = "http://localhost:5050/";

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("persist:user") as string);

  if (token) {
    const parsedToken = token.token.replaceAll('"', "");
    config.headers.Authorization = `Bearer ${parsedToken}`;
  }

  return config;
});

export default api;
