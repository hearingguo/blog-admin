<template>
  <el-container class="home" direction="vertical">
    <!-- header -->
    <Header/>

    <el-container>
        <!-- sidebar -->
      <Sidebar/>
      
      <el-main>Main</el-main>
      
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
  }

</style>
