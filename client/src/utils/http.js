// 封装http axios 请求
import axios from 'axios'

const httpInstance = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 5000,
})


// 请求拦截器
httpInstance.interceptors.request.use((config) => {
  // 在请求头中添加token，从pinia中获取
  return config
}, (error) => {
  return Promise.reject(error)
})


// 响应拦截器
httpInstance.interceptors.response.use((response) => {
  return response
}, (error) => {
})



export default httpInstance
