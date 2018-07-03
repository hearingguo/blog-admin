<template>
  <div class="filter-card">
    <el-form ref="form" :model="articleForm" label-width="80px">
      <!-- tags -->
      <el-form-item label="分类">
        <el-radio-group v-model="articleForm.classify" size="small">
          <el-radio-button 
            v-for="(item, index) in articleClassifies"
            :label="item.id"
            :key="index">{{ item.value }}</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <!-- tags -->
      <el-form-item label="标签">
        <el-checkbox-group v-model="articleForm.tag" size="small">
          <el-checkbox-button 
            v-for="(item, index) in articleTags"
            :label="item.id"
            :key="index">{{ item.value }}</el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      
      <!-- 权限 -->
      <el-form-item label="权限">
        <el-radio-group v-model="articleForm.authority" size="small">
          <el-radio :label="1">私密</el-radio>
          <el-radio :label="2">公开</el-radio>
        </el-radio-group>
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
}

interface Item {
  id: number
  value: string
}

@Component
export default class FilterCard extends Vue {
  private articleForm: ArticleForm = {
    classify: 0,
    tag: [''],
    release: 0
  }

  private articleClassifies: Item[] = [
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
@import '../../assets/styles/vars.less';

.filter-card {
  .el-radio-group, .el-checkbox-group {
    > label {
      margin: 0 @s-l;
    }
  }
  
}

</style>
