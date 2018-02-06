<template>
  <div>
    <section>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> 知识笔记</a></li>
        <li class="active">index</li>
      </ol>
    </section>
    <section class="article_list">
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
  </div>
</template>
<script>
export default {
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
