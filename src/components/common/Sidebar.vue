<template>
  <el-aside class="sidebar" width="200px">
    <el-menu
      default-active="2"
      class="el-menu-vertical">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>文章管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">文章列表</el-menu-item>
          <el-menu-item index="1-2">文章发布</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">标签</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">评论</span>
      </el-menu-item>
      <!-- <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">留言墙</span>
      </el-menu-item> -->
      <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">信息管理</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Sidebar extends Vue {
  
}

</script>

<style lang="less" scoped>

</style>
