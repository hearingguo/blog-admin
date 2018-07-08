<template>
  <el-dialog width="30%"
    :title="title"
    :visible="visible"
    before-close="handleClose">
    <el-form ref="formLinks" :model="formLinks" label-width="40px">
      <el-form-item label="名称">
        <el-input v-model="formLinks.name" placeholder="name..."></el-input>
      </el-form-item>
      <el-form-item label="URL">
        <el-input type="textarea" :rows="4" v-model="formLinks.url" placeholder="url..."></el-input>
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
  url: string
}

@Component
export default class ModalTag extends Vue {

  @Prop()
  private title: string

  @Prop()
  private visible: boolean

  private formLinks: Form = {
    name: '',
    url: ''
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
