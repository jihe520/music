// src/apis/authApi.js
import httpInstance from '@/utils/http';

// 登录接口
export const login = async (username, password, isAdmin) => {
  try {
    const response = await httpInstance.post('/login', { username, password, isAdmin });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};