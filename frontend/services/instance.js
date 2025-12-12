import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://192.168.1.138:3000/api',
  timeout: 5000,
});


