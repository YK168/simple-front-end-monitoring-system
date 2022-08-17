import router from '@/routers/index'

export function toLogin () {
  router.replace({
    path: '/login'
  })
}

export function toRegister () {
  router.replace({
    path: '/register'
  })
}

export function toHome () {
  router.replace({
    path: '/'
  })
}

export function toOverview () {
  router.replace({
    path: '/overview'
  })
}
