<template>
  <div class="filter-card">
    <el-form ref="form" :model="articleForm" label-width="60px">
      <!-- tags -->
      <el-form-item label="标签:">
        <el-radio-group v-model="articleForm.tag" size="small">
          <el-radio-button 
            v-for="(item, index) in articleTags"
            :label="item.id"
            :key="index">{{ item.value }}</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <!-- 权限 -->
      <el-form-item label="权限:">
        <el-radio-group v-model="articleForm.authority" size="small">
          <el-radio :label="0">私密</el-radio>
          <el-radio :label="1">公开</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'

interface ArticleForm {
  tag: number | string
  authority: number | string
}

interface TagItem {
  id: number
  value: string
}

@Component
export default class FilterCard extends Vue {
  private articleForm: ArticleForm = {
    tag: '',
    authority: ''
  }

  private articleTags: TagItem[] = [
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
  .el-radio-group {
    > label {
      margin: 0 @s-l;
    }
  }
  
}

</style>
