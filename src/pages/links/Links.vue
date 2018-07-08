<template>
  <div class="links">

    <div class="links-ctrl pb1 clearfix">
      <el-button type="primary" @click="addLinks()" icon="el-icon-plus" size="small">添加友链</el-button>
      <el-input class="search fr" type="search" suffix-icon="el-icon-search" size="small" placeholder="search..."></el-input>
    </div>

    <el-table
      class="table-links"
      :data="linksData"
      style="width: 100%">
      <el-table-column
        type="index"
        label="编号"
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
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
          <el-button size="small">修改</el-button>
          <el-button type="danger" plain size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- pagination -->
    <el-pagination class="tr"
      layout="total, prev, pager, next"
      :total="linksData.length">
    </el-pagination>

    <!-- modal -->
    <ModalLinks
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

  private linksData = [
    {
      name: '612星球',
      url: 'http://www.612.com/'
    },
    {
      name: '渺小',
      url: 'http://www.miaoxiao.com/'
    }
  ]


  private addLinks () {
    this.visible = true
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
