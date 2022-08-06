import router from '@/routers/index'

export function toLogin () {
  router.replace({
    path: '/login',
    query: {
      ...router.currentRoute.value.query,
      redirect: router.currentRoute.value.path
    }
  })
}
