<template>
  <el-container class="home" direction="vertical">
    <!-- header -->
    <Header/>

    <el-container>
        <!-- sidebar -->
      <Sidebar/>
      
      <!-- main -->
      <el-main>
        <el-col :span="24" key="1">
          <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item>文章管理</el-breadcrumb-item>
            <el-breadcrumb-item>文章列表</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="24" key="2" class="content">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-col>
      </el-main>
      
    </el-container>
  </el-container>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import Header from '../common/Header.vue'
import Sidebar from '../common/Sidebar.vue'

@Component({
  components: {
    Header,
    Sidebar
  }
})
export default class Home extends Vue {
  
}

</script>

<style lang="less" scoped>
  @import '../../assets/styles/vars.less';
  .home > section {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    padding-top: 4.5rem;
    min-height: 100%;
    width: 100%;
    background: @in-bg;
    aside {
      background: #fff;
    }

    .el-main {
      padding: 1rem;
      .breadcrumb{
        margin-bottom: 1rem;
      }
    }
  }

</style>
