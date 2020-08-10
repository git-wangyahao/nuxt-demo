<template>
  <div class="header">
    <div class="header-wrap">
      <Logo />
      <ul class="menu">
        <li><nuxt-link to="/">首页</nuxt-link></li>
        <li @click="handleRouter"><nuxt-link to="/list/1">前端</nuxt-link></li>
        <li> <nuxt-link to="/list/2" > 后端 </nuxt-link></li>
        <li><nuxt-link to="/list/3">UI </nuxt-link></li>
        <li><nuxt-link to="/list/4">云开发 </nuxt-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
import Logo from '~/components/Logo'
export default {
    components:{
      Logo
    },
    methods: {
      handleRouter() {
         console.log(" this.$router", this.$router)
      }
    }
}
</script>
<style scoped>
</style>
