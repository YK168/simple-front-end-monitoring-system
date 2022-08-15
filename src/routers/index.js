import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useUserStore } from '@/store/modules/user'
import { ElNotification } from 'element-plus'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const whiteList = ['/login', '/register']
/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  const token = userStore.getToken
  // const userInfo = userStore.getUserInfo
  // const login = userStore.login
  // 存在 token ，进入主页
  console.log('token', token)
  if (token) {
    next()
  } else {
    // 没有token的情况下，可以进入白名单
    if (whiteList.includes(to.path)) {
      next()
    } else {
      ElNotification({
        title: '未登录',
        message: '请先登录',
        type: 'error'
      })
      next('/login')
    }
  }
})

export default router
