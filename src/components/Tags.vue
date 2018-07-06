<template>
  <div class="tags">
    <el-form-item 
      :label="label">
      <el-tag
        v-for="item in tags"
        :key="item"
        closable
        :disable-transitions="false"
        @close="handleClose(item)">
        {{ item }}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag"  @click="showInput">+ New Tag</el-button>
    </el-form-item>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Tags extends Vue {

  @Prop()
  private label: string

  @Prop()
  private tags: string[]

  private inputVisible: boolean = false

  private inputValue: string = ''

  private handleClose (item: string) {
    this.tags.splice(this.tags.indexOf(item), 1)
    this.$emit('update: tags', this.tags)
  }

  showInput() {
    this.inputVisible = true;
    this.$nextTick(() => {
      (this.$refs.saveTagInput as any).$refs.input.focus();
    });
  }

  handleInputConfirm() {
    let inputValue = this.inputValue
    if (inputValue) this.tags.push(inputValue)
    this.$emit('update: tags', this.tags)
    this.inputVisible = false
    this.inputValue = ''
  }
  
}

</script>

<style lang="less" scoped>

  @import '../assets/styles/vars.less';

  .el-tag + .el-tag {
    margin-left: @s-l;
  }

  .input-new-tag {
    width: 120px;
  }

  .button-new-tag, .input-new-tag {
    margin-left: @s-l;
  }

</style>
