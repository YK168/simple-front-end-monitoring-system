import Request from '@/utils/request'

/** 新建项目 */
export const addProject = (data) => {
  return Request.post('/api/v1/user/item', data)
}
