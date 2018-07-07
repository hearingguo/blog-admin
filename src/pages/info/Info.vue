<template>
  <div class="info">
    <el-form ref="formInfos" :model="formInfos" label-width="80px">
      <el-form-item label="昵称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-input v-model="form.avatar"></el-input>
      </el-form-item>
      <el-form-item label="账户">
        <el-input v-model="form.avatar"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

interface Form {
  name: string
  avatar: string
}

@Component
export default class Info extends Vue {

  private formInfos:Form = {
    name: '',
    avatar: ''
  }
}

</script>

<style lang="less" scoped>

</style>
