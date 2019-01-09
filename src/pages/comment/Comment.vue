<template>
  <div class="comment">

    <!-- filter -->
    <div class="filter-card">
      <el-form ref="commentFilter" :model="commentFilter" label-width="40px">
        <el-form-item label="状态">
          <el-radio-group v-model="commentFilter.state" size="small" @change="handleSearch">
            <el-radio-button label="">全部</el-radio-button>
            <el-radio-button :label="0">待审核</el-radio-button>
            <el-radio-button :label="1">通过</el-radio-button>
            <el-radio-button :label="2">不通过</el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-form>
      
      <div class="filter-search mtb1 clearfix">
        <el-input class="search fr" type="search" suffix-icon="el-icon-search" size="small" placeholder="search..." v-model="commentFilter.keyword" @keyup.enter.native="handleSearch"></el-input>
      </div>
    </div>

    <!-- table -->
    <div class="comment-list mt1">
      <el-table class="article-table mt1" border :data="comments.list" empty-text="No Data">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="table-expand">
              <el-form-item label="时间:">
                <span>{{ dayjs(props.row.createDate).format('YYYY-MM-DD HH:mm:ss') }}</span>
              </el-form-item>
              <el-form-item label="ip:">
                <span>{{ props.row.ip }}</span>
              </el-form-item>
              <el-form-item label="地址:">
                <span>{{ props.row.addr }}</span>
              </el-form-item>
              <el-form-item label="系统:">
                <span>{{ props.row.agent }}</span>
              </el-form-item>
              <el-form-item label="内容:">
                <span>{{ `${props.row.content} 人喜欢` }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="createDate" label="日期" width="150">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span>{{ dayjs(scope.row.createDate).format('YYYY-MM-DD HH:mm:ss') }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="commentator.name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="commentator.email" label="邮箱"></el-table-column>
        <el-table-column prop="commentator.site" label="site"></el-table-column>
        <el-table-column prop="state" label="状态" width="60">
          <template slot-scope="scope">
            {{ scope.row.state === 0
               ? '待审核'
               : scope.row.state === 1
                 ? '通过'
                 : '不通过'
            }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="210">
          <template slot-scope="scope">
            <el-popover v-if="scope.row.state === 0 || scope.row.state === 1" placement="top" width="160" v-model="scope.row.isVisiblePopPut">
              <p>{{ `确认不通过${scope.row.commentator.name}的这一条评论么？` }}</p>
              <div style="text-align: right; margin: 10px 0 0;">
                <el-button size="mini" type="text" @click="scope.row.isVisiblePopPut = false">取消</el-button>
                <el-button type="danger" plain size="mini" @click="handlePutComment({
                  _id: scope.row._id,
                  state: 2,
                  postIds: scope.row.postId
                }); scope.row.isVisiblePopPut = false">确定</el-button>
              </div>
              <el-button slot="reference" plain size="small" @click="scope.row.isVisiblePopPut = true">不通过</el-button>
            </el-popover>
            <el-popover v-if="scope.row.state === 0 || scope.row.state === 2" placement="top" width="160" v-model="scope.row.isVisiblePopPut">
              <p>{{ `确认通过${scope.row.commentator.name}的这一条评论么？` }}</p>
              <div style="text-align: right; margin: 10px 0 0;">
                <el-button size="mini" type="text" @click="scope.row.isVisiblePopPut = false">取消</el-button>
                <el-button type="danger" plain size="mini" @click="handlePutComment({
                  _id: scope.row._id,
                  state: 1,
                  postIds: scope.row.postId
                }); scope.row.isVisiblePopPut = false">确定</el-button>
              </div>
              <el-button slot="reference" plain size="small" @click="scope.row.isVisiblePopPut = true">通过</el-button>
            </el-popover>
            <el-popover
              placement="top"
              width="160"
              v-model="scope.row.isVisiblePopDel">
              <p>{{ `确认删除关于${scope.row.commentator.name}的评论么？` }}</p>
              <div style="text-align: right; margin: 10px 0 0;">
                <el-button size="mini" type="text" @click="scope.row.isVisiblePopDel = false">取消</el-button>
                <el-button type="danger" plain size="mini" @click="handleDeleteComment({
                  _id: scope.row._id,
                  postIds: scope.row.postId
                }); scope.row.isVisiblePopDel = false">确定</el-button>
              </div>
              <el-button type="danger" slot="reference" plain size="small" @click="scope.row.isVisiblePopDel = true">删除</el-button>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>

      <!-- pagination -->
      <el-pagination class="tr"
        layout="total, prev, pager, next"
        :total="comments.list.length">
      </el-pagination>
    </div>

    
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import { Component, Vue } from 'vue-property-decorator'

interface IParams {
  _id: string;
  postIds: string[];
  state?: number;
}

@Component
export default class Comment extends Vue {

  private dayjs = dayjs

  private commentFilter = {
    state: '',
    keyword: ''
  }

  private get comments() {
    const comments = this.$store.state.comment.comments
    if(!comments.list.length) return comments
    const list = comments.list.map((item: ILinkItem) => ({...item, isVisiblePopPut: false, isVisiblePopDel: false }))
    return {
      list,
      pagination: comments.pagination
    }
  }

  private async handlePutComment(params: IParams) {
    await this.$store.dispatch('comment/putComment', params)
    this.$store.dispatch('comment/getComments', this.commentFilter)
  }

  private async handleDeleteComment(params: IParams) {
    await this.$store.dispatch('comment/deleteComment', params)
    this.$store.dispatch('comment/getComments', this.commentFilter)
  }

  private handleSearch() {
    this.$store.dispatch('comment/getComments', this.commentFilter)
  }

  private beforeCreate() {
    this.$store.dispatch('comment/getComments', this.commentFilter)
  }
  
}

</script>

<style lang="less" scoped>
  @import '../../assets/styles/vars.less';

  .filter-search {
    .search {
      width: 200px;
    }
  }

</style>
