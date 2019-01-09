<template>
  <div class="article">
    <!-- filter -->
    <FilterCard :classifies="articleClassifies" :tags="articleTags"/>

    <!-- article list -->
    <div class="article-list">
      <!-- table -->
      <el-table class="article-table" border :data="articles.list" empty-text="No Data">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="table-expand">
              <el-form-item label="时间">
                <span>{{ dayjs(props.row.createDate).format('YYYY-MM-DD HH:mm:ss') }}</span>
              </el-form-item>
              <el-form-item label="关键字">
                <span>{{ props.row.keyword }}</span>
              </el-form-item>
              <el-form-item label="其他">
                <span>{{ `${props.row.meta.views} 人看过, ${props.row.meta.likes} 人喜欢, ${props.row.meta.comments} 条评论` }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="createDate" label="日期" width="160">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ dayjs(scope.row.createDate).format('YYYY-MM-DD HH:mm:ss') }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题" width="200"></el-table-column>
        <el-table-column prop="classify" label="分类" width="100">
          <template slot-scope="scope">
            {{ scope.row.classify.title }}
          </template>
        </el-table-column>
        <el-table-column prop="tag" label="标签">
          <template slot-scope="scope">
            {{ scope.row.tag | filterTag(articleTags) }}
          </template>
        </el-table-column>
        <el-table-column prop="state" label="状态" width="130">
          <template slot-scope="scope">
            {{ scope.row.state === 1?'已发布':'未发布' }}
            <el-button size="small" style="margin-left: 5px;"
              @click="handlePatchArticle({
                _id: scope.row._id, 
                state: scope.row.state === 1?2:1
              })">
              {{ scope.row.state === 2?'发布':'撤消' }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="220">
          <template slot-scope="scope">
            <el-button size="small" @click="toEditArticle(scope.row._id)">编辑</el-button>
            <el-popover
              placement="top"
              width="160"
              v-model="scope.row.isVisiblePop">
              <p>{{ `确认删除${scope.row.title}这篇文章么？` }}</p>
              <div style="text-align: right; margin: 10px 0 0;">
                <el-button size="mini" type="text" @click="scope.row.isVisiblePop = false">取消</el-button>
                <el-button type="danger" plain size="mini" @click="handleDeleteArticle(scope.row._id); scope.row.isVisiblePop = false">确定</el-button>
              </div>
              <el-button type="danger" slot="reference" plain size="small" @click="scope.row.isVisiblePop = true">删除</el-button>
            </el-popover>
            <el-button type="danger" plain size="small"
              @click="handlePatchArticle({
                _id: scope.row._id, 
                publish: scope.row.publish === 1?2:1
              })">
              {{ scope.row.publish === 1?'私密':'公开' }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- pagination -->
      <el-pagination class="tr" layout="total, prev, pager, next" :total="articles.list.length"></el-pagination>
      
    </div>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import { Component, Vue } from 'vue-property-decorator'
import FilterCard from '@/components/FilterCard.vue'

@Component({
  components: {
    FilterCard
  },
  filters: {
    filterTag: function(tags: ITagItem[]) {
      return tags.map(item => {
        return item.title
      }).join(' ')
    }
  }
})
export default class Article extends Vue {

  private dayjs = dayjs

  private get articles () {
    const articles = this.$store.state.article.articles
    if(!articles.list.length) return articles
    const list = articles.list.map((item: ILinkItem) => ({...item, isVisiblePop: false }))
    return {
      list,
      pagination: articles.pagination
    }
  }
  
  private get articleClassifies () {
    return this.$store.state.classify.info.list
  }

  private get articleTags () {
    return this.$store.state.tag.info.list
  }

  private toEditArticle (id: string) {
    this.$router.push(`/article/release/${id}`)
  }

  private async handlePatchArticle (params: IArticleState) {
    await this.$store.dispatch('article/patchArticle', params)
    this.$store.dispatch('article/getArticles')
  }

  private async handleDeleteArticle (id: string) {
    await this.$store.dispatch('article/deleteArticle', id)
    this.$store.dispatch('article/getArticles')
  }

  private beforeCreate() {
    Promise.all([
      this.$store.dispatch('article/getArticles'),
      this.$store.dispatch('classify/getClassifies'),
      this.$store.dispatch('tag/getTags')
    ])
  }

}

</script>

<style lang="less" scoped>
  @import '../../assets/styles/vars.less';

</style>
