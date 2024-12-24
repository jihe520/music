import axios from 'axios'
import { ElMessage } from 'element-plus'

const httpInstance = axios.create({
  baseURL: '/api', // 修改为使用 /api 前缀
  timeout: 5000
})

// 请求拦截器
httpInstance.interceptors.request.use(
  config => {
    // 可以在这里添加token等认证信息
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
httpInstance.interceptors.response.use(
  response => {
    const res = response.data
    // 处理成功响应
    if (res.code && res.code !== 200) {
      ElMessage({
        message: res.message || '请求失败',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || '请求失败'))
    }
    return res.data || res
  },
  error => {
    // 处理错误响应
    console.error('响应错误:', error)
    ElMessage({
      message: error.response?.data?.message || '服务器错误',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default httpInstance