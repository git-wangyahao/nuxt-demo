<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="最新文章" name="first">
      <SortItem />
      <SortItem />
      <SortItem />
      <SortItem />
      <SortItem />
      <SortItem />
    </el-tab-pane>
    <el-tab-pane label="产品设计" name="second">
       <SortItem />
      <SortItem />
      <SortItem />
      <SortItem />
      <SortItem />
      <SortItem />
    </el-tab-pane>
    <el-tab-pane label="创业分享" name="third">
      <SortItem />
      <SortItem />
      <SortItem />
      <SortItem />
      <SortItem />
      <SortItem />
    </el-tab-pane>
    <el-tab-pane label="行业动态" name="fourth">
       <SortItem />
      <SortItem />
      <SortItem />
      <SortItem />
      <SortItem />
      <SortItem />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import SortItem from './SortItem'
export default {
  components:{
    SortItem
  },
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };

</script>

<style>

</style>