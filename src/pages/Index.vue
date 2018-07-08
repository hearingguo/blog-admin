<template>
<transition name="fade">
    <el-row class="content">
      <!-- header -->
      <Header/>

      <el-container>

        <!-- sidebar -->
        <Sidebar/>
        
        <!-- main -->
        <el-main>
          <!-- breadcrumb -->
          <el-col :span="24" key="1">
            <el-breadcrumb separator="/" class="breadcrumb">
              <el-breadcrumb-item>文章管理</el-breadcrumb-item>
              <el-breadcrumb-item>文章列表</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>

          <!-- content -->
          <el-col :span="24" key="2" class="content">
            <transition name="fade" mode="out-in">
              <el-card class="box-card mb1" shadow="never">
                <transition name="fade" mode="out-in">
                  <router-view></router-view>
                </transition>
              </el-card>
            </transition>
          </el-col>
        </el-main>
      </el-container>
    </el-row>
</transition>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/common/Header.vue'
import Sidebar from '@/components/common/Sidebar.vue'

@Component({
  components: {
    Header,
    Sidebar
  }
})
export default class Home extends Vue {
  
}

</script>

<style lang="less">
  @import '../assets/styles/vars.less';

  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

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
  }

</style>
