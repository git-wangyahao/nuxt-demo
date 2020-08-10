<template>
  <div class="container">
    <div class="box box1"></div>
    <div class="box box2"></div>
    <div class="box box3"></div>
    <div class="box box1"></div>
    <div class="box box2"></div>
    <div class="box box3"></div>
    <div class="box box4"></div>
  </div>
</template>

<script>
export default {
  head: {
      script: [
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto'
        }
      ]
    }
}

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 90vh;
  /* align-items: center; */
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
</style>
