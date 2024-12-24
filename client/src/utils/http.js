// src/utils/http.js
import axios from 'axios';

const httpInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // 后端 API 的基础 URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

// 添加请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，例如添加 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
httpInstance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response;
  },
  (error) => {
    // 对响应错误做些什么
    if (error.response) {
      // 处理常见的错误状态码
      switch (error.response.status) {
        case 401:
          // 未授权，跳转到登录页面
          window.location.href = '/login';
          break;
        case 404:
          // 资源未找到
          console.error('Resource not found');
          break;
        case 500:
          // 服务器错误
          console.error('Server error');
          break;
        default:
          console.error('Unknown error');
      }
    }
    return Promise.reject(error);
  }
);

export default httpInstance;