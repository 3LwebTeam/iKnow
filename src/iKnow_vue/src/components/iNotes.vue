<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        知识笔记
        <small>参考github的issues展示方式，展示每个知识点的了解程度，提出问题的解决状态，可以随时添加修改</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> 知识笔记</a></li>
        <li class="active">Here</li>
      </ol>
    </section>
    <!-- Main content -->
    <section class="content container-fluid">
      <!--------------------------
        | Your Page Content Here |
        -------------------------->
      <div class="article_list">
        <ul class="timeline">
          <li v-for="i in list" :key="i.id">
            <i class="fa fa-info-circle bg-green"></i>
            <div class="timeline-item">
              <span class="time"><i class="fa fa-clock-o"></i> <time v-text="$utils.goodTime(i.create_at)"></time></span>
              <h3 class="timeline-header"><router-link :to="'/iNotes/' + i.id">{{i.title}}</router-link></h3>
              <div class="timeline-body">
                Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...
              </div>
              <div class="timeline-footer">
                <a class="btn btn-primary btn-xs">Nodejs</a>
                <a class="btn btn-danger btn-xs">vue</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>
<script>
// import Header from '../components/header.vue'
// import Foot from '../components/footer.vue'
export default {
  // components: { Header, Foot },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        this.list = r.data
      })
    }
  }
}

</script>
