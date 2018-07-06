<template>
  <el-dialog width="30%"
    :title="title"
    :visible="visible"
    before-close="handleClose">
    <el-form ref="formTag" :model="formTag" label-width="40px">
      <el-form-item label="名称">
        <el-input v-model="formTag.name" placeholder="请输入标签/分类名称"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" :rows="4" v-model="formTag.desc" placeholder="请输入标签/分类描述"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'

interface Form {
  name: string
  desc: string
}

@Component
export default class ModalTag extends Vue {

  @Prop()
  private title: string

  @Prop()
  private visible: boolean

  private formTag: Form = {
    name: '',
    desc: ''
  }

  private handleClose () {
    this.$emit('update:visible', false)
  }

  private submit () {
    this.handleClose()

  }
  
}

</script>

<style lang="less" scoped>

</style>
