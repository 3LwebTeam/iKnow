import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import Login from '@/components/Login'
import register from '@/components/register'
import lockscreen from '@/components/lockscreen'
import iNotes from '@/components/iNotes'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/lockscreen',
    name: 'lockscreen',
    component: lockscreen
  }, {
    path: '/register',
    name: 'register',
    component: register
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/',
    name: 'root',
    component: layout,
    redirect: '/iNotes',
    children: [{
      path: 'iNotes',
      name: 'iNotes',
      component: iNotes
    }]
  }]
})
