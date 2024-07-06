import axios from "axios";
const BASE_URL = "http://localhost:8080";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

const apiPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
  timeout: 1000,
});

export default api;
