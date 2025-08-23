import axios from "axios";

export const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // masalan: http://localhost:5000
  withCredentials: true, // COOKIE yuborish/olish uchun shart!
});
