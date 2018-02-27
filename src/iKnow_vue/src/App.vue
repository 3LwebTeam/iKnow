<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import auth from './auth/auth'

export default {
  name: 'App',
  data () {
    return {
      msg: '欢迎您登录成功',
      email: ''
    }
  },
  methods: {
    getEmail () {
      this.$http.get('http://localhost:8081/user/getEmail', {
        headers: auth.getAuthHeader()
      }).then(function (re) {
        this.email = re.bodyText
      }, function () {
        console.log('get email error')
      })
    }
  }
}

</script>
