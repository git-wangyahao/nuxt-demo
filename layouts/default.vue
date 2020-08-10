<template>
  <div id='container'>
    <pc-header />
    <Nuxt />
    <pc-footer />
  </div>
</template>
<script>
import pcFooter from './conponents/footer'
import pcHeader from './conponents/header'
export default {
  name:"layout",
  components:{
    pcHeader,
    pcFooter
  }
}
</script>
<style>
  .container {
    width: 100%;
  }
</style>
