import Request from '@/utils/request'

/** 登录 */
export const loginHttp = (data) => {
  return Request.post('/api/v1/user/login', data)
}
/** 注册 **/
export const registerHttp = (data) => {
  return Request.post('/api/v1/user/register', data)
}
