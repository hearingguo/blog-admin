<template>
  <el-aside class="sidebar" width="200px">
    <el-menu
      class="el-menu-vertical"
      default-active="currentPath"
      unique-opened
      router>
      <template v-for="(item, index) in $router.options.routes">
        <el-submenu
          v-if="item.meta.show && !item.meta.leaves && item.children"
          :index="String(index)"
          :key="index">
          <template slot="title">
            <i :class="['iconfont', item.meta.icon]"></i>
            <span class="title">{{item.name}}</span>
          </template>
          <el-menu-item
            v-for="child in item.children"
            :index="child.path"
            :route="child"
            :key="child.path">
            <i :class="['iconfont', child.meta.icon]"></i>
            <span class="text">
              {{child.name}}
            </span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item
          v-if="item.meta.show && item.meta.leaves && item.children"
          :route="item.children[0]"
          :index="item.children[0].path"
          :key="index">
          <i :class="['iconfont', item.meta.icon]"></i>
          <span>{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">

import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'

@Component
export default class Sidebar extends Vue {

  private currentPath: string = ''

  private created (): void {
    this.currentPath = this.$route.path
  }
  
}

</script>

<style lang="less" scoped>

  @import '../../assets/styles/vars.less';

  .sidebar {
    background: @white;
    border-right: 1px solid @border;
    .el-menu {
      border-right: 0;
    }
  }

</style>
