<template>
  <div class="article">
    <el-card class="box-card mb1" shadow="never">
      <FilterCard/>
    </el-card>
    <div class="article-table p1 clearfix">
      <el-table
        :data="tableData4"
        style="width: 100%"
        max-height="250"
        empty-text="-">
        <el-table-column
          prop="date"
          label="日期">
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
            <el-button plain
              type="info"
              size="small">
              编辑
            </el-button>
            <el-button plain
              type="info"
              size="small">
              {{ scope.row.release?'私密':'公开' }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="mt1 fr"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import FilterCard from '@/components/common/FilterCard.vue'

@Component({
  components: {
    FilterCard
  }
})
export default class Article extends Vue {

  private tableData4 =  [{
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

.article-table {
  background: #fff;
  padding-bottom: 2rem;
  border-radius: 4px;
}

</style>
