<template>
  <div class="table-tags mt1">
    <p class="tags-title mb1 pr1 tr">{{ title }}</p>
    <el-table
      class="tags-content"
      :data="tagsData"
      border
      style="width: 100%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="描述"
        width="180">
      </el-table-column>
      <el-table-column
        prop="article"
        label="文章">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button plain type="primary">编辑</el-button>
          <el-button plain type="primary">删除</el-button>
          <el-button plain type="primary">隐藏</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'

interface Table {
  name: string
  desc: string
  article: number
}

@Component
export default class ComponentName extends Vue {

  @Prop()
  private title: string

  @Prop()
  private tagsData: Table[]
  
}

</script>

<style lang="less" scoped>

</style>
