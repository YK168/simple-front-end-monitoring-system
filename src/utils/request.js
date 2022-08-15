import axios from 'axios'
import { ElNotification } from 'element-plus'
import { useUserStore } from '@/store/modules/user'

// 请求拦截器
function reqResolve (config) {
  const userStore = useUserStore()
  const token = userStore.getToken
  // 如果token存在 注入token
  config.headers['x-token'] = token
  return config
}

function reqReject (error) {
  return Promise.reject(error)
}

// 响应拦截器
function resResolve (response) {
  const { status, msg, data } = response.data
  // 与后端约定
  if (status === 200) {
    return response.data
  } else {
    ElNotification({
      title: '',
      message: msg,
      type: 'error'
    })
    return Promise.reject(data)
  }
}

function resReject (error) {
  ElNotification({
    title: error.response.data.status,
    message: error.response.data.msg,
    type: 'error'
  })
  return Promise.reject(error)
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
