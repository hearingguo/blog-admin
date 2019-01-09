<template>
<transition name="fade">
    <el-row class="content">
      <!-- header -->
      <Header :authInfo="authorInfos"/>

      <el-container>
        <!-- sidebar -->
        <Sidebar/>
        <!-- main -->
        <el-main>
          <!-- breadcrumb -->
          <Breadcrumb />
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

import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import Header from '@/components/common/Header.vue'
import Sidebar from '@/components/common/Sidebar.vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'

@Component({
  components: {
    Header,
    Sidebar,
    Breadcrumb
  }
})
export default class Home extends Vue {

  private get authorInfos () {
    return this.$store.state.auth.info
  }

  private beforeCreate() {
    this.$store.dispatch('auth/getAuth')
  }

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
