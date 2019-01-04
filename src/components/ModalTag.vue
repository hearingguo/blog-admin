<template>
  <el-dialog width="30%"
    :title="title"
    :visible="visible"
    before-close="handleClose">
    <el-form ref="formTag" :model="formTag" label-width="40px">
      <el-form-item label="标题">
        <el-input v-model="formTag.title" placeholder="title..."></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" :rows="4" v-model="formTag.description" placeholder="description..."></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleAddClassify()">确 定</el-button>
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
  private formTag: IClassifyItem | ITagItem

  @Prop()
  private ctrlName: string

  private get currentRes() {
    return this.$store.state.classify.currentRes
  }

  private handleClose () {
    this.$emit('update:visible', false)
  }

  private async handleAddClassify (data: ILinkItem) {
    if (this.ctrlName === 'put') {
      await this.$store.dispatch('classify/putClassify', this.formTag)
    } else {
      await this.$store.dispatch('classify/postClassify', this.formTag)
    }
    
    if(this.currentRes.code) {
      this.handleClose()
      this.$store.dispatch('classify/getClassifys')
      this.$emit('update:formTag', { title: '', description: '' })
    }
  }
  
}

</script>

<style lang="less" scoped>

</style>
