<template>
  <el-dialog width="30%"
    :title="title"
    :visible="visible"
    before-close="handleClose">
    <el-form ref="formLink" :model="formLink" label-width="40px">
      <el-form-item label="名称">
        <el-input v-model="formLink.username" placeholder="username..."></el-input>
      </el-form-item>
      <el-form-item label="URL">
        <el-input type="textarea" :rows="4" v-model="formLink.url" placeholder="url..."></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleAddLink">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ModalTag extends Vue {

  @Prop()
  private title: string

  @Prop()
  private visible: boolean

  @Prop()
  private formLink: ILinkItem

  @Prop()
  private ctrlName: string

  private get currentRes() {
    return this.$store.state.link.currentRes
  }

  private handleClose () {
    this.$emit('update:visible', false)
  }

  private async handleAddLink (data: ILinkItem) {
    if (this.ctrlName === 'put') {
      await this.$store.dispatch('link/putLink', this.formLink)
    } else {
      await this.$store.dispatch('link/postLink', this.formLink)
    }
    
    if(this.currentRes.code) {
      this.handleClose()
      this.$store.dispatch('link/getLinks')
      this.$emit('update:formLink', { username: '', url: '' })
    }
  }
  
}
</script>
