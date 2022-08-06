import router from './router'
import { useUserStore } from '@/store/modules/user'
import { isEmpty } from 'lodash-es'
import { ElMessage } from 'element-plus'

// 白名单
const whiteList = ['/login']
/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  const token = userStore.getToken
  const userInfo = useUserStore.getUserInfo
  const login = userStore.login
  // 存在 token ，进入主页
  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断是否存在用户信息，若不存在用户信息，则需要获取用户信息
      if (isEmpty(userInfo)) {
        // 获取用户信息
        try {
          await login()
          return next(to.path)
        } catch (error) {
          // 获取用户信息失败，退出登录
          ElMessage.error(error.message || '获取用户信息失败！')
        }
      }
      next()
    }
  } else {
    // 没有token的情况下，可以进入白名单
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
