<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Page Header
        <small>Optional description</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>
    </section>
    <!-- Main content -->
    <section class="content container-fluid">
      <!--------------------------
        | Your Page Content Here |
        -------------------------->
      <h2 v-text="dat.title"></h2>
      <p v-if="dat.author">作者：{{dat.author.loginname}} 发表于：{{$utils.goodTime(dat.create_at)}}</p>
      <hr>
      <article v-html="dat.content"></article>
      <h3>网友回复：</h3>
      <ul>
        <li v-for="i in dat.replies" :key="i.id">
          <p>评论者：{{i.author.loginname}} 评论于：{{$utils.goodTime(i.create_at)}}</p>
          <article v-html="i.content"></article>
        </li>
      </ul>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>
<script>
// import myHeader from '../components/header.vue'
// import myFoot from '../components/footer.vue'
export default {
  // components: {myHeader, myFoot},
  data () {
    return {
      id: this.$route.params.id,
      dat: {
        author: {}
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topic/' + this.id, null, r => {
        this.dat = r.data
      })
    }
  }
}

</script>
