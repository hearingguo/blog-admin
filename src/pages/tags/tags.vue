<template>
  <div class="tags">

    <div class="tags-ctrl">
      <el-button type="primary" plain @click="addTag('添加标签')">添加标签</el-button>
      <el-button type="primary" plain @click="addTag('添加分类')">添加分类</el-button>
    </div>

    <!-- modal -->
    <ModalTag 
      :title="title"
      :visible.sync="visible"/>

    <!-- 标签list -->
    <TableTags 
      title="标签"
      :tagsData="tags" />
    

    <!-- 分类list -->
    <TableTags 
      title="分类"
      :tagsData="classifies" />

  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import ModalTag from '@/components/ModalTag.vue'
import TableTags from '@/components/TableTags.vue'

@Component({
  components: {
    ModalTag,
    TableTags
  }
})
export default class Tags extends Vue {

  private visible: boolean = false

  private title: string = ''

  private classifies = [
    {
      name: 'high coding',
      desc: 'coding相关',
      article: 10
    },
    {
      name: 'high reading',
      desc: 'reading相关',
      article: 10
    },
    {
      name: 'high living',
      desc: 'living相关',
      article: 10
    }
  ]

  private tags = [
    {
      name: 'javascript',
      desc: 'javascript相关',
      article: 10
    }
  ]

  private addTag (title: string) {
    this.visible = true
    this.title = title
  }

}

</script>

<style lang="less" scoped>

@import '../../assets/styles/vars.less';

.el-tag + .el-tag {
    margin-left: @s-l;
  }

</style>
