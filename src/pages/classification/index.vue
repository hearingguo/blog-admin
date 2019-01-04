<template>
  <div class="tags">

    <div class="tags-ctrl pb1 clearfix">
      <el-button type="primary" @click="visible = true" icon="el-icon-plus" size="small">添加分类</el-button>
      <el-input class="search fr" type="search" suffix-icon="el-icon-search" size="small" placeholder="search"></el-input>
    </div>

    <!-- modal -->
    <ModalTag 
      title="添加分类"
      :formTag.sync="formTag"
      :visible.sync="visible"/>
    
    <!-- 分类list -->
    <TableTags 
      title="classify"
      :tagsData="classifyInfo" />

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

  private formTag: IClassifyItem = {
    title: '',
    description: ''
  }

  private get classifyInfo () {
    return this.$store.state.classify.info
  }

  private beforeCreate() {
    this.$store.dispatch('classify/getClassifys')
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
