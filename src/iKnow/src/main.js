// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../bower_components/bootstrap/dist/css/bootstrap.min.css'
import '../bower_components/bootstrap/dist/js/bootstrap.min.js'
import '../bower_components/font-awesome/css/font-awesome.min.css'
import '../bower_components/jquery/dist/jquery.min.js'
import '../static/js/adminlte.js'
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index.js'
import utils from './utils/index.js'

Vue.prototype.$api = api
Vue.prototype.$utils = utils
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
