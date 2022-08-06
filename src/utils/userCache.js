import storage from './storage'

export const TOKEN_KEY = 'TOKEN_KEY'
export const USER_INFO_KEY = 'USER_INFO_KEY'

export function getTokenStorage () {
  return storage.get(TOKEN_KEY)
}

export function getUserInfoStorage () {
  return storage.get(USER_INFO_KEY)
}

export function setTokenStorage (token) {
  return storage.set(TOKEN_KEY, token)
}

export function setUserInfoStorage (userInfo) {
  return storage.set(USER_INFO_KEY, userInfo)
}

export function clearUserStorage () {
  storage.remove(TOKEN_KEY)
  storage.remove(USER_INFO_KEY)
}
