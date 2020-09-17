<template>
    <div class="page-list">
      <div class="L-header" v-if="show">
        <span>快讯</span>
        <a href="">更多</a>
      </div>
      <ul class="L-content">
        <li>
          <i class="iconfont icon-sanjiaoright"></i>
          <div class="L-content-wrap">
            <a href="">小米本周美国路演，有香港投资者称估值应为200亿美元小米本周美国路演，有香港投资者称估值应为200亿美元</a>
            <span> <i class="iconfont icon-yonghu"></i> admin</span>
            <time> <i class="iconfont icon-shijian"></i> 2018年6月25日</time>
          </div>
        </li>
        <li>
          <i class="iconfont icon-sanjiaoright"></i>
          <div class="L-content-wrap">
            <a href="">小米本周美国路演，有香港投资者称估值应为200亿美元小米本周美国路演，有香港投资者称估值应为200亿美元</a>
            <span> <i class="iconfont icon-yonghu"></i> admin</span>
            <time> <i class="iconfont icon-shijian"></i> 2018年6月25日</time>
          </div>
        </li>
        <li>
          <i class="iconfont icon-sanjiaoright"></i>
          <div class="L-content-wrap">
            <a href="">小米本周美国路演，有香港投资者称估值应为200亿美元小米本周美国路演，有香港投资者称估值应为200亿美元</a>
            <span> <i class="iconfont icon-yonghu"></i> admin</span>
            <time> <i class="iconfont icon-shijian"></i> 2018年6月25日</time>
          </div>
        </li>
        <li>
          <i class="iconfont icon-sanjiaoright"></i>
          <div class="L-content-wrap">
            <a href="">小米本周美国路演，有香港投资者称估值应为200亿美元小米本周美国路演，有香港投资者称估值应为200亿美元</a>
            <span> <i class="iconfont icon-yonghu"></i> admin</span>
            <time> <i class="iconfont icon-shijian"></i> 2018年6月25日</time>
          </div>
        </li>
        <li>
          <i class="iconfont icon-sanjiaoright"></i>
          <div class="L-content-wrap">
            <a href="">小米本周美国路演，有香港投资者称估值应为200亿美元小米本周美国路演，有香港投资者称估值应为200亿美元</a>
            <span> <i class="iconfont icon-yonghu"></i> admin</span>
            <time> <i class="iconfont icon-shijian"></i> 2018年6月25日</time>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
       show: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-list { 
    width: 100%;
    margin-top: 20px;
    padding: 15px;
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
  .L-content {
    li {
      .L-content-wrap {
        .iconfont {
          padding-right: 5px;
          font-size: 12px;
        }
      }
      a {
        display: block;
      }
      span {
        margin-right: 5px;
      }
      .icon-sanjiaoright {
        font-size: 10px;
        margin-right: 5px;
        display: block;
        color: rgb(167, 167, 167);
      }
      display: flex;
      padding: 10px 0;
    }
  }
</style>