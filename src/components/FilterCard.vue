<template>
  <div class="filter-card">
    <el-form ref="form" :model="articleFilter" label-width="60px">
      <!-- tags -->
      <el-form-item label="分类:">
        <el-radio-group v-model="articleFilter.classify" size="small">
          <el-radio-button label="">全部</el-radio-button>
          <el-radio-button
            v-for="(item, index) in classifies"
            :label="item._id"
            :key="index">{{ item.title }}</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <!-- tags -->
      <el-form-item label="标签:">
        <el-checkbox-group v-model="articleFilter.tag" size="small">
          <el-checkbox-button label="">全部</el-checkbox-button>
          <el-checkbox-button
          v-for="(item, index) in tags"
          :label="item._id"
          :key="index">{{ item.title }}</el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      
      <!-- 权限 -->
      <el-form-item label="权限:">
        <el-radio-group v-model="articleFilter.publish" size="small">
          <el-radio-button :label="0">全部</el-radio-button>
          <el-radio-button :label="1">公开</el-radio-button>
          <el-radio-button :label="2">私密</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <!-- 发布 -->
      <el-form-item label="发布:">
        <el-radio-group v-model="articleFilter.state" size="small">
          <el-radio-button :label="0">全部</el-radio-button>
          <el-radio-button :label="2">草稿</el-radio-button>
          <el-radio-button :label="1">发布</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <!-- 搜索 -->
      <el-form-item label="关键词:">
        <el-col :span="5">
          <el-input v-model="articleFilter.keyword" size="small" placeholder="search..."></el-input>
        </el-col>
      </el-form-item>

    </el-form>
    <el-button class="mtb1 fr" type="primary" size="small" icon="el-icon-search" @click="handleSearch()">开始查询</el-button>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

interface ArticleFilter {
  classify: string
  tag: Array<string>
  publish: number
  state: number
  keyword: string
}

interface Item {
  id: number
  value: string
}

@Component
export default class FilterCard extends Vue {
  private articleFilter: ArticleFilter = {
    classify: '',
    tag: [''],
    publish: 0,
    state: 0,
    keyword: ''
  }

  @Prop()
  private classifies: IClassifyItem[]

  @Prop()
  private tags: ITagItem[]

  @Watch('articleFilter.tag')
  onTagChange(tags: string[]) {
    if (tags.includes('')){
      this.articleFilter.tag = tags.filter(item => !item)
    }
  }

  private handleSearch () {
    this.$store.dispatch('article/getArticles', this.articleFilter)
  }
  
}

</script>

<style lang="less" scoped>
@import '../assets/styles/vars.less';

</style>
