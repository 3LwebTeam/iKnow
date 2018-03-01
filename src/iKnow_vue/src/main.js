// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './router'
import auth from './auth/auth'
import api from '@/api'
import utils from '@/utils'
import './lib/jquery-vender.js'
import 'bootstrap'
import 'admin-lte'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.prototype.$api = api
Vue.prototype.$utils = utils
Vue.config.productionTip = false

// 在启动APP时进行校验是否有token
auth.checkAuth()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
