<template>
  <el-dialog width="30%"
    :title="modalTitle"
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
      <el-button type="primary" @click="handleAddTag()">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'
import { toUpper } from '../utils/common'

type IItem = ITagItem | IClassifyItem

@Component
export default class ModalTag extends Vue {

  @Prop()
  private title: string

  @Prop()
  private visible: boolean

  @Prop()
  private formTag: IItem

  @Prop()
  private ctrlName: string

  private get modalTitle() {
    return this.title === 'tag'?'添加标签':'添加分类'
  }

  private get currentRes() {
    return this.$store.state[this.title].currentRes
  }

  private handleClose () {
    this.$emit('update:visible', false)
    this.$emit('update:formTag', { title: '', description: '' })
  }

  private async handleAddTag (data: IItem) {
    await this.$store.dispatch(`${this.title}/${this.ctrlName}${toUpper(this.title)}`, this.formTag)

    if(this.currentRes.code) {
      this.handleClose()
      this.$store.dispatch(`${this.title}/get${toUpper(this.title, true)}`)
      this.$emit('update:formTag', { title: '', description: '' })
    }
  }
  
}

</script>

<style lang="less" scoped>

</style>
