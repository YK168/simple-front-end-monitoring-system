import layouts from '@/layouts/index.vue'

const routes = [
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/pages/login/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/pages/home/index.vue')
  },
  {
    path: '/',
    component: layouts,
    redirect: '/home',
    children: [
      {
        path: '/overview',
        name: 'overview',
        component: () =>
          import(
            /* webpackChunkName: "overview" */ '@/pages/overview/index.vue'
          ),
        meta: {
          title: '总览',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/about',
        name: 'about',
        component: () =>
          import(/* webpackChunkName: "about" */ '@/pages/about/index.vue'),
        meta: {
          title: '关于',
          icon: 'el-icon-user'
        }
      }
    ]
  }
]

export default routes
