<template>
  <div>
    <section>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> 知识笔记</a></li>
        <li class="active">index</li>
      </ol>
    </section>
    <section class="article_list">
      <ul>
        <li v-for="i in list" :key="i.id">
          <time v-text="$utils.goodTime(i.create_at)"></time>
          <router-link :to="'/content/' + i.id">{{i.title}}</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
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
