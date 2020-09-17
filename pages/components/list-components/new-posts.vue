<template>
  <div class="newPost">
    <div class="L-header">
      <span>快讯</span>
      <a href="">更多</a>
    </div>
    <ul class="new-list">
      <li v-for="(item ,index) in list" :key="index">
        <a href="#" class="new_link">
          <div class="new-img">
            <img src="~/assets/images/1.jpg" alt="">
          </div>
          <div class="new-content">
            <div class="title">
              哈维：梅西续约巴萨已经完成 巴萨还能踢得更好
              哈维：梅西续约巴萨已经完成 巴萨还能踢得更好
            </div>
            <div class="time">
              2020年09月14日
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return  { 
      list : 10
    }
  }
}
</script>

<style lang="scss" scoped>
.newPost {
  margin-top: 10px;
}
  .L-header {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-left: 20px;
    span:before{ 
      content: '';
      display: block;
      width: 5px;
      background-color: rgb(37, 86, 248);
      height: 24px;
      position: absolute;
      top: 0px;
      left: 0px;
    }
  }
  .new-list {
    margin-top: 10px;
    li {
      margin: 5px 0;
      padding: 5px;
      border: 1px solid transparent;
      transform: all .5s;
      &:hover {
         border: 1px solid rgb(90, 93, 255);
      }
    }
    a {
      display: block;
    }
    .new-content {
      margin-left: 115px;
    }
    .new-img {
      float: left;
      width:100px;
      overflow: hidden;
      img {
        width: 100%;
        height: 72px;
        vertical-align: top;
      }
    }
  }
</style>