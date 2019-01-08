<template>
  <div class="comment">

    <!-- filter -->
    <div class="filter-card">
      <el-form ref="comment" :model="comment" label-width="40px">
        <el-form-item label="状态">
          <el-radio-group v-model="comment.state" size="small">
            <el-radio-button :label="0">全部</el-radio-button>
            <el-radio-button :label="1">通过</el-radio-button>
            <el-radio-button :label="2">不通过</el-radio-button>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="搜索">
          <el-col :span="5">
            <el-input v-model="comment.search" size="small" placeholder="search..."></el-input>
          </el-col>
          <el-button class="ml1" type="primary" size="small" icon="el-icon-search">开始查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- table -->
    <div class="comment-list mt1">
      <el-row class="comment-ctrls mb1 tr">
        <el-button type="primary" size="small">全部通过</el-button>
        <el-button plain type="primary" size="small">全部不通过</el-button>
      </el-row>
      
      <el-table
        class="article-table mt1"
        border
        :data="commentList"
        empty-text="No Data">
        <el-table-column type="expand">
          <template slot-scope="props">
            {{ props.row.date }}
          </template>
        </el-table-column>
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          prop="id"
          label="id"
          width="50">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱">
        </el-table-column>
        <el-table-column
          prop="site"
          label="site">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="80">
          <template slot-scope="scope">
            {{ scope.row.status?'通过':'不通过' }}
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="240">
          <template slot-scope="scope">
            <el-button size="small">
              编辑
            </el-button>
            <el-button type="danger" plain size="small">
              {{ scope.row.status?'不通过':'通过' }}
            </el-button>
            <el-button type="danger" plain size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- pagination -->
      <el-pagination class="tr"
        layout="total, prev, pager, next"
        :total="commentList.length">
      </el-pagination>
    </div>

    
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Comment extends Vue {

  private comment = {
    status: 0,
    search: ''
  }

  private commentList =  [{
    id: 1,
    date: '2016-05-03 12:00:00',
    title: '文章一',
    name: '五一',
    email: '123@123.com',
    site: 'http://www.highya.me/',
    status: 1
  }, {
    id: 2,
    date: '2016-05-05 10:00:00',
    title: '文章二',
    name: '六一',
    email: '123@123.com',
    site: 'http://www.highya.me/',
    status: 0
  }]
  
}

</script>

<style lang="less" scoped>
  @import '../../assets/styles/vars.less';

</style>
