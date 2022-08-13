import { defineStore } from 'pinia'
import {
  getTokenStorage,
  getUserInfoStorage,
  clearUserStorage,
  setUserInfoStorage,
  setTokenStorage
} from '../../utils/userCache'
import { toLogin } from '../../utils/auth'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: null,
    avatar:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F30%2F20200330091314_yNVUZ.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662317044&t=2a385543d9d85f8d3fd4e09b61e481dc',
    userInfo: {} // null
  }),
  getters: {
    getToken () {
      return this.token || getTokenStorage()
    },
    getUserInfo () {
      return this.userInfo || getUserInfoStorage() || {}
    },
    getUserAvatar () {
      return this.avatar
    }
  },
  actions: {
    async login (data, token) {
      this.token = token
      this.userInfo = data
      setUserInfoStorage(data)
      setTokenStorage(token)
    },
    logout () {
      this.userInfo = null
      this.token = null
      clearUserStorage()
      toLogin()
    }
  }
})
