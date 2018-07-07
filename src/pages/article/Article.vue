<template>
  <div class="article">
    <!-- filter -->
    <FilterCard/>

    <!-- article list -->
    <div class="article-list">
      <!-- ctrol -->
      <el-row class="article-ctrls mb1 tr">
        <el-button type="primary">发布</el-button>
        <el-button plain type="primary">撤消</el-button>
      </el-row>

      <!-- table -->
      <el-table
        class="article-table"
        :data="articleList"
        border
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
          prop="date"
          label="日期">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="class"
          label="分类">
        </el-table-column>
        <el-table-column
          prop="tags"
          label="标签">
          <template slot-scope="scope">
            {{ scope.row.tags.join(' ') }}
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <el-button>
              编辑
            </el-button>
            <el-button type="primary">
              {{ scope.row.release?'私密':'公开' }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- pagination -->
      <el-pagination class="mt1 fr"
      layout="total, prev, pager, next"
      :total="articleList.length">
    </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import FilterCard from '@/components/FilterCard.vue'

@Component({
  components: {
    FilterCard
  }
})
export default class Article extends Vue {

  private articleList =  [{
          id: 1,
          date: '2016-05-03',
          title: '文章一',
          class: 'code',
          tags: ['javascript', 'nodejs'],
          release: true
        }, {
          id: 2,
          date: '2016-05-02',
          title: '文章二',
          class: '生活',
          tags: ['摄影', '旅游'],
          release: false
        }]


  private showTags (val: string[]) {
    
  }
  
}

</script>

<style lang="less" scoped>
@import '../../assets/styles/vars.less';

.article-list {
  padding: @xl-l 0 @xxxl-l;
}

</style>
