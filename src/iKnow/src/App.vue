<template>
  <div id="app" class="wrapper">
    <myHeader></myHeader>
    <div>
      <mySidebar></mySidebar>
      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <router-view/>
      </div>
    </div>
    <!-- <myFoot></myFoot> -->
  </div>
</template>
<script>
import myHeader from './components/header.vue'
import myFoot from './components/footer.vue'
import mySidebar from './components/sidebar.vue'
export default {
  components: { myHeader, myFoot, mySidebar },
  name: 'App'
}

</script>
<style lang="less">
@import "./style/app";

</style>
