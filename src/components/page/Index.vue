<template>
  <div class="Home">
    <header>
      
    </header>
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  
}

</script>

<style lang="less" scoped>

</style>
