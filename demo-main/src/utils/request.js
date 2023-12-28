import axios from 'axios'
const baseURL = '/api'
const service = axios.create({
  baseURL,
  timeout: 10000
})
// 请求拦截器
service.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
})

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { msg, code, data, total, rows } = response.data
    if (code !== 200) {
      return Promise.reject(new Error(msg))
    } else {
      if (!data) {
        return { total, rows }
      }
      return data
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default service
