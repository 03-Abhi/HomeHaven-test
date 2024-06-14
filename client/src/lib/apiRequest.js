import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://home-haven-backend.vercel.app",
  withCredentials: true,
});

export default apiRequest;
