<template>
  <div class="filter-card">
    <el-form ref="form" :model="articleForm" label-width="80px">
      <!-- tags -->
      <el-form-item label="分类">
        <el-radio-group v-model="articleForm.classify" >
          <el-radio-button 
            v-for="(item, index) in articleClassifies"
            :label="item.id"
            :key="index">{{ item.value }}</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <!-- tags -->
      <el-form-item label="标签">
        <el-checkbox-group v-model="articleForm.tag" >
          <el-checkbox-button 
            v-for="(item, index) in articleTags"
            :label="item.id"
            :key="index">{{ item.value }}</el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      
      <!-- 权限 -->
      <el-form-item label="权限">
        <el-radio-group v-model="articleForm.release" >
          <el-radio-button :label="0">全部</el-radio-button>
          <el-radio-button :label="1">私密</el-radio-button>
          <el-radio-button :label="2">公开</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <!-- 搜索 -->
      <el-form-item label="搜索">
        <el-col :span="5">
          <el-input v-model="articleForm.search" placeholder="搜索" ></el-input>
        </el-col>
        <el-button class="ml1" type="primary" icon="el-icon-search" >查询</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'

interface ArticleForm {
  classify: number | string
  tag: Array<number|string>
  release: number | string
  search: string
}

interface Item {
  id: number
  value: string
}

@Component
export default class FilterCard extends Vue {
  private articleForm: ArticleForm = {
    classify: 0,
    tag: [0],
    release: 0,
    search: ''
  }

  private articleClassifies: Item[] = [
    {
      id: 0,
      value: '全部'
    },
    {
      id: 1,
      value: 'high码'
    },
    {
      id: 2,
      value: 'high读'
    },
    {
      id: 3,
      value: 'high活'
    }
  ]

  private articleTags: Item[] = [
    {
      id: 0,
      value: '全部'
    },
    {
      id: 1,
      value: 'javascript'
    },
    {
      id: 2,
      value: 'nodejs'
    },
    {
      id: 3,
      value: 'css'
    },
    {
      id: 4,
      value: 'html'
    }
  ]

  // @Prop()
  // readonly 

  
}

</script>

<style lang="less" scoped>
@import '../assets/styles/vars.less';

.filter-card {
  .el-radio-group, .el-checkbox-group {
    > label {
      margin: 0 @s-l;
    }
  }

  .el-form-item {
    border-bottom: 1px dashed @border;
    margin: 0;
    padding: @s-l 0;
  }
  
}

</style>
