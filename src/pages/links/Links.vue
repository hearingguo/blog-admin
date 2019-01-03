<template>
  <div class="links">

    <div class="links-ctrl pb1 clearfix">
      <el-button type="primary" @click="visible = true" icon="el-icon-plus" size="small">添加友链</el-button>
      <el-input class="search fr" type="search" suffix-icon="el-icon-search" size="small" placeholder="search..."></el-input>
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
        prop="username"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        label="URL">
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
            <p>{{ `确认删除关于${scope.row.username}的友情链接么？` }}</p>
            <div style="text-align: right; margin: 10px 0 0;">
              <el-button size="mini" type="text" @click="scope.row.isVisiblePop = false">取消</el-button>
              <el-button type="danger" plain size="mini" @click="handleDeleteLink(scope.row._id)" >确定</el-button>
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

  private ctrlName: string = 'post'

  private o_id: string = 'old_id'
  private c_id: string = 'current_id'

  private formLink: ILinkItem = {
    username: '',
    url: ''
  }

  private get links () {
    return this.$store.state.link.info.map((item: ILinkItem) => ({...item, isVisiblePop: false }))
  }

  // private get isVisiblePop() {
  //   return this.c_id === this.o_id
  // }

  private handleChangeLink (link: ILinkItem) {
    this.visible = true
    this.ctrlName = 'put'
    const { _id, username, url } = link
    this.formLink = { _id, username, url }
  }

  private handleDeleteLink (id: string, isDel?: boolean) {
    if (typeof isDel === undefined) {
      this.o_id = id
      this.c_id = id
    } else {
      if (isDel) { // delete
        this.$store.dispatch('link/deleteLink', id)
      }
      this.c_id = ''
    }
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
