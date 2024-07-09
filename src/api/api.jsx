import axios from "axios";
const BASE_URL = "http://localhost:8080";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export const apiPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
  timeout: 1000,
});
