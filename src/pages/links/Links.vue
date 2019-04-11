<template>
  <div class="links">

    <div class="links-ctrl pb1 clearfix">
      <el-button type="primary" @click="visible = true" icon="el-icon-plus" size="small">添加友链</el-button>
      <el-input class="search fr" type="search" suffix-icon="el-icon-search" size="small" placeholder="search..." v-model="keywords" @keyup.enter.native="onSearch"></el-input>
    </div>

    <el-table
      class="table-links"
      :data="links.list"
      style="width: 100%">
      <el-table-column
        type="index"
        label="编号"
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        label="友情人"
        width="180">
      </el-table-column>
      <el-table-column
        label="友情地址">
        <template slot-scope="scope">
          <a :href="scope.row.url">{{ scope.row.url }}</a>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button size="small" @click="handleChangeLink(scope.row)">修改</el-button>
          <el-popover
            placement="top"
            width="160"
            v-model="scope.row.isVisiblePop">
            <p>{{ `确认删除关于${scope.row.name}的友情链接么？` }}</p>
            <div style="text-align: right; margin: 10px 0 0;">
              <el-button size="mini" type="text" @click="scope.row.isVisiblePop = false">取消</el-button>
              <el-button type="danger" plain size="mini" @click="handleDeleteLink(scope.row._id); scope.row.isVisiblePop = false">确定</el-button>
            </div>
            <el-button type="danger" slot="reference" plain size="small" @click="scope.row.isVisiblePop = true">删除</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>

    <!-- pagination -->
    <el-pagination class="tr"
      layout="total, prev, pager, next"
      :total="links.list.length">
    </el-pagination>

    <!-- modal -->
    <ModalLinks
      :ctrlName="ctrlName"
      :formLink.sync="formLink"
      :visible.sync="visible"/>
    
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import ModalLinks from '@/components/ModalLinks.vue'

@Component({
  components: {
    ModalLinks
  }
})
export default class Links extends Vue {

  private visible: boolean = false

  private keywords: string = ''

  private ctrlName: string = 'post'

  private formLink: ILinkItem = {
    name: '',
    url: ''
  }

  private get links () {
    const info = this.$store.state.link.info
    const list = info.list.map((item: ILinkItem) => ({...item, isVisiblePop: false }))

    return {
      list,
      pagination: info.pagination
    }
  }

  private handleChangeLink (link: ILinkItem) {
    this.visible = true
    this.ctrlName = 'put'
    const { _id, name, url } = link
    this.formLink = { _id, name, url }
  }

  private async handleDeleteLink (id: string) {
    await this.$store.dispatch('link/deleteLink', id)
    this.$store.dispatch('link/getLinks')
  }

  private onSearch() {
    this.$store.dispatch('link/getLinks', {
      keyword: this.keywords
    })
  }

  private beforeCreate () {
    this.$store.dispatch('link/getLinks')
  }
  
}

</script>

<style lang="less" scoped>

  @import '../../assets/styles/vars.less';

  .table-links {
    margin-top: @m-l;
    a {
      color: @text;
    }
  }

  .links-ctrl {
    border-bottom: 1px dashed @border;
    .search {
      width: 200px;
    }
  }

</style>
