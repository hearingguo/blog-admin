<template>
  <el-breadcrumb v-if="!(indexPath === currentPathName)">
    <transition-group name="btn" >

      <el-breadcrumb-item 
        to="/home"
        :key="indexPath">
        {{ indexPath }}
      </el-breadcrumb-item>

      <el-breadcrumb-item
        :key="currentPathNameParent">
        {{ currentPathNameParent }}
      </el-breadcrumb-item>

      <el-breadcrumb-item 
        :key="currentPathName" 
        v-if="currentPathName !== currentPathNameParent">
        {{ currentPathName }}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">

import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'

@Component({
  name: 'breadcrumb'
})
export default class Breadcrumb extends Vue {

  private indexPath: string = '首页'

  private currentPathName: string = ''

  private currentPathNameParent: string = ''

  @Watch('$route', { immediate: true })
  private routeChange (val: Route, oldVal: Route): void {
    this.currentPathName = val.name || ''
    this.currentPathNameParent = val.matched[0].name || ''
  }

}

</script>

<style lang="less" scoped>

  @import '../../assets/styles/vars.less';

  .el-breadcrumb {
    margin-bottom: @m-l;
  }

</style>
