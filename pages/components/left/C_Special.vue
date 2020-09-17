<template>
  <div class="wrap">
    <div class="S_header">
      <span class="title">专题介绍</span>
      <span>全部报道</span>
    </div>
    <div class="s-images">
      <div class="s-images-item" :style="{backgroundImage:`url(${imgurl})`}">
        <span> 图上文字 </span>
      </div>
      <div class="s-images-item" :style="{backgroundImage:`url(${imgurl})`}">
        <span> 图上文字 </span>
      </div>
      <div class="s-images-item" :style="{backgroundImage:`url(${imgurl})`}">
        <span> 图上文字 </span>
      </div>
      <div class="s-images-item" :style="{backgroundImage:`url(${imgurl})`}">
        <span> 图上文字 </span>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '~/assets/images/1.jpg'
export default {
  data () {
    return { 
      imgurl: img1
    }
  }
}
</script>

<style lang="scss" scoped>
  .S_header {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    .title {
      font-size: 16px;
      font-weight: 700;
      color: #000;
    }
  }
  .s-images {
    display: flex;
    justify-content: space-around;
    .s-images-item {
      flex: 1;
      margin: 5px;
      background-size: cover;
      height: 125px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
</style>