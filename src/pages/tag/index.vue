<template>
  <div class="tags">

    <div class="tags-ctrl pb1 clearfix">
      <el-button type="primary" @click="visible = true; ctrlName = 'post'" icon="el-icon-plus" size="small">{{ `添加${ctrlType}` }}</el-button>
      <el-input class="search fr" type="search" suffix-icon="el-icon-search" size="small" placeholder="search..." v-model="keywords" @keyup.enter.native="onSearch"></el-input>
    </div>

    <!-- modal -->
    <ModalTag 
      :title="title"
      :ctrlName='ctrlName'
      :formTag.sync="formTag"
      :visible.sync="visible"/>
    
    <!-- 分类list -->
    <TableTags 
      :title="title"
      :ctrlName.sync="ctrlName"
      :visible.sync="visible"
      :formTag.sync="formTag"
      :tagsData="tagInfo" />

  </div>
</template>

<script lang="ts">

import { Component, Vue, Watch } from 'vue-property-decorator'
import ModalTag from '@/components/ModalTag.vue'
import TableTags from '@/components/TableTags.vue'
import { toUpper } from '../../utils/common'
import { RouteConfig } from 'vue-router';

@Component({
  components: {
    ModalTag,
    TableTags
  }
})
export default class Tags extends Vue {

  private visible: boolean = false

  private title: string = ''

  private ctrlName: string = 'post'

  private keywords: string = ''

  private formTag: IClassifyItem = {
    title: '',
    description: ''
  }

  private get ctrlType() {
    return this.title === 'tag' ? '标签': '分类'
  }

  private get tagInfo () {
    const info = this.$store.state[this.title].info
    const list = info.list.map((item: ILinkItem) => ({...item, isVisiblePop: false }))

    return {
      list,
      pagination: info.info
    }
  }

  @Watch('$route', { immediate: true, deep: true })
  onRouteChanged() { 
    this.init()
  }

  private onSearch() {
    this.$store.dispatch(`${this.title}/get${toUpper(this.title, true)}`, {
      keyword: this.keywords
    })
  }

  private init () {
    this.title = this.$route.path.replace('/', '')
    this.$store.dispatch(`${this.title}/get${toUpper(this.title, true)}`)
  }

  private created() {
    this.init()
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
