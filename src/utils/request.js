import axios from 'axios';
import storageService from '@/service/storageService';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 1000 * 5,
});

// Add a request interceptor
service.interceptors.request.use((config) => {
  Object.assign(config.headers, { Authorization: `Bearer ${storageService.get(storageService.USER_TOKEN)}` });
  return config;
}, (error) => Promise.reject(error));

export default service;
