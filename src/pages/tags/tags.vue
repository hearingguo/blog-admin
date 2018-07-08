<template>
  <div class="tags">

    <div class="tags-ctrl pb1 clearfix">
      <el-button type="primary" @click="addTag('添加标签')" icon="el-icon-plus" size="small">添加标签</el-button>
      <el-button type="primary" @click="addTag('添加分类')" icon="el-icon-plus" size="small">添加分类</el-button>
      <el-input class="search fr" type="search" suffix-icon="el-icon-search" size="small" placeholder="search"></el-input>
    </div>

    <!-- modal -->
    <ModalTag 
      :title="title"
      :visible.sync="visible"/>

    <!-- 标签list -->
    <TableTags 
      title="tags"
      :tagsData="tags" />
    

    <!-- 分类list -->
    <TableTags 
      title="classifies"
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

.tags-ctrl {
  border-bottom: 1px dashed @border;
  .search {
    width: 200px;
  }
}

</style>
