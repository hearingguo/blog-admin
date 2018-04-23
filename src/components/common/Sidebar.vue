<template>
  <el-aside class="sidebar" width="200px">
    <el-menu
      default-active="2"
      class="el-menu-vertical">
      <template v-for="(item, index) in $router.options.routes">
        <el-submenu :index="index" v-if="item.meta.show && !item.meta.leaf && item.children" :key="index">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span class="title">{{item.name}}</span>
          </template>
          <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">
            <i class="el-icon-menu"></i>
            <span class="text">
              {{child.name}}
            </span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-if="item.meta.show && item.meta.leaf && item.children" :index="item.children[0].path" :key="index">
          <i class="el-icon-menu" ></i>
          <span>{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Sidebar extends Vue {

  mounted () {
    // @ts-ignore
    console.log(this.$router.options.routes)
  }
  
}

</script>

<style lang="less" scoped>

</style>
