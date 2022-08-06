import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store/modules/user'

// 请求拦截器
function reqResolve (config) {
  const userStore = useUserStore()
  const token = userStore.getToken
  // 如果token存在 注入token
  config.headers.Authorization = `Bearer ${token}`
  return config
}

function reqReject (error) {
  return Promise.reject(error)
}

// 响应拦截器
function resResolve (response) {
  const { code, message, data } = response.data
  // 与后端约定
  if (code === 0) {
    return data
  } else {
    ElMessage.error(message)
    return Promise.reject(data)
  }
}

function resReject (error) {
  ElMessage.error(error.message)
  return Promise.reject(error, response.data)
}

export function createAxios (options = {}) {
  const defaultOptions = {
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 12000
  }
  const service = axios.create({
    ...defaultOptions,
    ...options
  })
  service.interceptors.request.use(reqResolve, reqReject)
  service.interceptors.response.use(resResolve, resReject)
  return service
}

export default createAxios()
