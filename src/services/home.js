import Request from '@/utils/request'

/** 新建项目 */
export const addProject = (data) => {
  return Request.post('/api/v1/user/item', data)
}

/** 获取项目列表 */
export const listProject = () => {
  return Request.get('/api/v1/user/item')
}
/** 删除项目 */
export const delProjecyById = (project_key) => {
  return Request.delete(`/api/v1/user/item/${project_key}`)
}
