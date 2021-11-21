import axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
  timeout: 0,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
