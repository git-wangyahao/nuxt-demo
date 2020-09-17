<template>
  <div class="sortItem">
    <div class="s-img">
      <img src="~/assets/images/1.jpg" alt="">
    </div>
    <div class="s-content">
      <div class="s-title">
        谷歌正在开发自动驾驶卡车 计划今年就要上路测试了
      </div>
      <div class="s-dec">
        据《连线》网站(Wired)报道，谷歌(微博)母公司Alphabet旗下的Waymo公司周五证实，该公司正在开发自动驾驶卡车，并将于今年晚些时候在亚利桑那州进行上路测试。
      </div>
      <div class="s-item">
        <div class="user"> 
          <img src="~/assets/images/1.jpg" alt="">
          <span></span>
        </div>
        <div class="time"> 
          <i class="iconfont icon-shijian"></i>
          2017年6月9日
        </div>
        <div class="watch">
          <i class="iconfont icon-yanjing"></i>
          279.9k
        </div>
        <div class="comment">
          <i class="iconfont icon-pinglun"></i>
           51
        </div>
        <div class="like">
          <i class="iconfont icon-xihuan"></i>
            26
        </div>
        <div class="good">
          <i class="iconfont icon-dianzan"></i>
          174
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
 .sortItem {
   display: flex;
   height: 145px;
   margin: 20px 0;
   .s-img {
     width: 33%;
     margin-right: 1%;
     height: 100%;
     overflow: hidden;
     img {
       width: 100%;
       height: 100%;
     }
   }
   .s-content {
    width: 66%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    position: relative;
    height: 100%;
    .s-title {
      font-size: 18px;
      color: rgb(31, 31, 31);
    }
    .s-dec {
      margin-top: 10px;
    }
    .s-item {
      display: flex;
      justify-content: flex-start;
      margin-top: auto;
      vertical-align: center;
      // position: absolute;
      // bottom: 0px;
      // left: 0px;
      .time ,.user,.watch,.comment,.like,.good {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
        i {
          margin-right: 3px;
        }
      }
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
   }
 }
</style>