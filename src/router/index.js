import Vue from 'vue'
import Router from 'vue-router'
import children from './children.js'


Vue.use(Router)

const routes = [{
  path: '*',
  redirect: '/',
  hidden: true
},
{
  path: '/',
  component: () => import('../layout/layout-main.vue'),
  children,
}
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  // 改变页面标题
  // const title = to.meta && to.meta.title
  // if (title) {
  //   document.title = title
  // }
  // // 路由权限   todo 
  // if (!getToken() && to.path !== '/login') {
  //   next('/login')
  // } else {
  //   next()
  // }
  next()
})

export default router


