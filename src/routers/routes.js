import layouts from '@/layouts/index.vue'

const routes = [
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/pages/login/index.vue')
  },
  {
    path: '/register',
    component: () =>
      import(/* webpackChunkName: "register" */ '@/pages/register/index.vue')
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
        path: '/pageDetail',
        name: 'pageDetail',
        component: () =>
          import(
            /* webpackChunkName: "pageDetail" */ '@/pages/overview/pageDetail.vue'
          ),
        meta: {
          title: '页面访问详情',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/Monitor',
        name: 'Monitor',
        component: () =>
          import(
            /* webpackChunkName: "Monitor" */ '@/pages/overview/apiMonitoring.vue'
          ),
        meta: {
          title: '网络请求监控',
          icon: 'el-icon-user'
        }
      }
    ]
  }
]

export default routes
