<template>
  <div class="lists">
    <div class="list" v-for="item in list " :key="item.id" @click="handleClick(item.id)">
      <div class="list-item" >
        <img :src="item.imgUrl" alt="">
      </div>
      <div class="list-item-con" >
          <h4 class="title">  {{ item.title }} </h4>
          <div class="article-list-attr">
            <div class="article-list-attr-left">
              <span class="list-article-name">{{ item.author }}</span>
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
            {{ item.content }}
          </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { List } from '~/api/list'
export default {
  data ()  { 
    return  {
      pageId: 0,
      list: []
    }
  },
  mounted:{

  },
  mounted () {
    console.log(this.$route.params) //获取路由
    console.log(this.$route.query)
    // this.pageId = this.$route.params.id
  },
  async asyncData({ params }) {
    console.log(params) 
    const res  = await List()
    console.log("res",res.data.list)
    const list = res.data.list
    return { list: list }
  },
  methods:{
    handleClick(id){
      this.$router.push(`/detail/${id}`)
      console.log("id",id)
    }
  }
  // async asyncData(ctx) { 
  //       let pageNum = parseInt(ctx.route.params.page);
  //       let params = {
  //           pageSize: 10,
  //           pageNum: pageNum
  //       };
  //       let { data } = await axios({
  //           withCredentials: true,
  //           method: 'post',
  //           url: 'https://api.xxxxx.com/consult_api/consult/page',
  //           data: params
  //       })
  //       return {
  //           inforList: data.body,
  //           totalPage: data.body.totalPage * 10,
  //           pageNum
  //       }
  //   },
  // watchQuery:{
  // }
}
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    justify-content: flex-start;
    width: 1300px;
    margin: 0 auto;
    padding: 10px;
    cursor: pointer;
    .list-item {
      img{
         width: 250px !important;
         margin-right: 10px;
      }
    }
    .list-item-con {
      width: calc(100% - 250px);
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
