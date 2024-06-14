import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://homehaven-test.onrender.com",
  withCredentials: true,
});

export default apiRequest;
