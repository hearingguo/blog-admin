<template>
  <div class="filter-card">
    <el-form ref="form" :model="articleFilter" label-width="60px">
      <!-- tags -->
      <el-form-item label="分类:">
        <el-radio-group v-model="articleFilter.classify" size="small" @change="handleSearch">
          <el-radio-button label="">全部</el-radio-button>
          <el-radio-button
            v-for="(item, index) in classifies"
            :label="item._id"
            :key="index">{{ item.title }}</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <!-- tags -->
      <el-form-item label="标签:">
        <el-checkbox-group v-model="articleFilter.tag" size="small" @change="handleSearch(true)">
          <el-checkbox-button label="">全部</el-checkbox-button>
          <el-checkbox-button
          v-for="(item, index) in tags"
          :label="item._id"
          :key="index">{{ item.title }}</el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      
      <!-- 权限 -->
      <el-form-item label="权限:">
        <el-radio-group v-model="articleFilter.publish" size="small" @change="handleSearch">
          <el-radio-button :label="0">全部</el-radio-button>
          <el-radio-button :label="1">公开</el-radio-button>
          <el-radio-button :label="2">私密</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <!-- 发布 -->
      <el-form-item label="发布:">
        <el-radio-group v-model="articleFilter.state" size="small" @change="handleSearch">
          <el-radio-button :label="0">全部</el-radio-button>
          <el-radio-button :label="2">草稿</el-radio-button>
          <el-radio-button :label="1">发布</el-radio-button>
        </el-radio-group>
      </el-form-item>

    </el-form>
    <div class="filter-search mtb1 clearfix">
      <el-input class="search fr" type="search" suffix-icon="el-icon-search" size="small" placeholder="search..." v-model="articleFilter.keyword" @keyup.enter.native="handleSearch"></el-input>
    </div>
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

  private handleSearch (isTag?: boolean) {
    const tags = this.articleFilter.tag
    if (isTag && tags.includes('') && tags.length > 1){
      if (!tags[tags.length - 1]) {
        this.articleFilter.tag = ['']
      } else {
        this.articleFilter.tag = tags.filter(item => !!item)
      }
    }
    const { tag, ...rest } = this.articleFilter
    this.$store.dispatch('article/getArticles', {
      tag: JSON.stringify(tag),
      ...rest
    })
  }
  
}

</script>

<style lang="less" scoped>
  @import '../assets/styles/vars.less';

  .filter-search {
    .search {
      width: 200px;
    }
  }

</style>
