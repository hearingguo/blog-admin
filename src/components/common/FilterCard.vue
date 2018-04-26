<template>
  <div class="filter-card">
    <div class="item">
      <span>标签:</span>
      <el-radio-group v-model="radio2">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class FilterCard extends Vue {

  private radio2: string = '上海'

  // @Prop()
  // readonly 

  
}

</script>

<style lang="less" scoped>
@import '../../assets/styles/vars.less';
.filter-card {
  .item {
    display: flex;
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 10px;
    line-height: 34px;
    border-bottom: 1px dashed rgba(210, 210, 210, 0.274);
    > span {
      width: 4rem;
      flex-shrink: 0;
      text-align: right;
    }
    .el-radio-group {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-left: 10px;
      .el-radio-button {
        margin: 0 3px;
      }
      .el-radio-button__inner {
        border: none;
        border-radius: 4px;
      }
      .is-active {
        background: #f00;
        .el-radio-button__inner {
          background: @theme;
          box-shadow: none;
        }
      }
    }
  }
}

</style>
