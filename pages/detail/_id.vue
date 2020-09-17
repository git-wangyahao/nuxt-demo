<template>
  <div class="detail">
    <div class="list-item-con" >
      <h4 class="title"> {{ detail.title }} </h4>
      <div class="article-list-attr">
        <div class="article-list-attr-left">
          <span class="list-article-name"> {{ detail.author }} </span>
          <span class="list-article-name">影片推荐</span>
          <span class="list-article-name">2年前</span>
        </div>
        <div class="article-list-attr-right">
          <span class="list-article-name">👁6.10k</span>
          <span class="list-article-name">短信1</span>
          <span class="list-article-name">赞21</span>
        </div>
      </div>
      <div class="content">
        <img :src="detail.imgUrl" alt="">
        {{ detail.content }} 
      </div>
    </div>
  </div>
</template>

<script>
import { Detail } from '~/api/list'
export default {
  data ()  { 
    return  {
      detail: { }
    }
  },
  mounted () {

  },
  async asyncData({ params }) {
    const res  = await Detail(params.id)
    const detail = res.data.detail
    return { detail: detail }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
  .detail {
    width: 1300px;
    margin: 0 auto;

    min-height: 90vh;
    .list-item {
      img{
          width: 250px !important;
          margin-right: 10px;
      }
    }
    .list-item-con {
      .article-list-attr {
        display: flex;
        justify-content: space-between;
        margin: 2px 0 8px;
        span{
          margin: 0 5px;
        }
      }
      .title{ 
        font-size: 14px;
        color: #000;
      }
    }
  }
</style>
