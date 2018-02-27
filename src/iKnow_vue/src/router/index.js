import Vue from 'vue'
import Router from 'vue-router'
import auth from '../auth/auth'
import routes from './router.js'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  // 判断是否已登录，未登录则进入登录页面
  if (to.name !== 'login') {
    if (!auth.authenticated) {
      router.replace({ name: 'login' })
    }
  }

  next()
})
export default router
