<template>
  <div class="container">
    <div class="left">
      <!-- 轮播图 -->
      <div style="width:100%;height:400px">
        <!-- Using the slider component -->
        <slider ref="slider" :options="options">
            <!-- slideritem wrapped package with the components you need -->
            <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
            <!-- Customizable loading -->
            <div slot="loading">loading...</div>
        </slider>
      </div>
      <!-- 专题报道 -->
      <c-special></c-special>
      <sort-tabs class="sort-tabs"></sort-tabs>
    </div>
    <div class="right">
      <div>
        <img src="~/assets/images/5.jpg" alt="">
      </div>
      <page-list></page-list>
      <page-list></page-list>
    </div>
   
    <!-- <img-item></img-item> -->
  </div>
</template>

<script>
// import { slider, slideritem } from '~/components'
// import imgItem from './components/img-item'
import pageList from './components/right/page-list'
import CSpecial from './components/left/C_Special'
import SortTabs from './components/left/SortTabs'
export default {
  components:{
    pageList,
    CSpecial,
    SortTabs
    // imgItem
  },
  data () {
    return {
      //data list [array]
      someList:[
        {
          html: 'slide1',
          style: {
            'background': '#1bbc9b'
          }
        },
        {
          html: 'slide2',
          style: {
            'background': '#4bbfc3'
          }
        },
        {
          html: 'slide3',
          style: {
            'background': '#7baabe'
          }
        }
      ],
      //Slider configuration [obj]
      options: {
        currentPage: 0
      }
    }
  },
}
</script>


<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 90vh;
  width: 1300px;
  display: flex;
  /* align-items: center; */
  .left {
    flex: 2;
    margin-right: 20px;
  }
  .right {
    flex: 1;
    width: 300px;
    img{
      width: 100%;
      height: auto;
      vertical-align: top;
      border-radius: 3px;
    }
  }
}
h1 {
  font-size: 80px;
  align-items: center;
  line-height: 100px;
}
.box {
  height: 500px;
  margin: 0 auto;
  background-repeat: no-repeat;
  width: 1400px;
  background-size: 100% 100%;

}
.box1 {
  background-image: url('~assets/images/1.webp');
}
.box2 {
  background-image: url('~assets/images/2.webp');
   background-attachment: fixed;
}
.box3 {
  background-image: url('~assets/images/3.webp');
}
.box4 {
  background-image: url('~assets/images/4.webp');
   background-attachment: fixed;
}
.sort-tabs {
  margin-top: 15px;
}
</style>
