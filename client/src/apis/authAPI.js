// src/apis/authApi.js
import httpInstance from '../utils/http';

// 登录接口
export const login = async (username, password) => {
  try {
    const response = await httpInstance.post('/login', { username, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};