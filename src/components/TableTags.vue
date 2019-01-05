<template>
  <div class="table-tags mt1 clearfix">
    <!-- <p class="tags-title mb1 pr1">{{ title }}</p> -->
    <el-table
      class="tags-content"
      :data="tagsData.list"
      style="width: 100%">
      <el-table-column
        type="index"
        label="编号"
        width="50">
      </el-table-column>
      <el-table-column
        prop="title"
        :label="ctrlType"
        width="200">
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述">
      </el-table-column>
      <el-table-column
        prop="count"
        label="文章"
        width="100">
      </el-table-column>
      <el-table-column
        label="操作"
        width="220">
        <template slot-scope="scope">
          <el-button size="small" @click="handleEditTag(scope.row)">编辑</el-button>
          <el-popover
            placement="top"
            width="160"
            v-model="scope.row.isVisiblePop">
            <p>{{ `确认删除${scope.row.title}此${ctrlType}么？` }}</p>
            <div style="text-align: right; margin: 10px 0 0;">
              <el-button size="mini" type="text" @click="scope.row.isVisiblePop = false">取消</el-button>
              <el-button type="danger" plain size="mini" @click="handleDeleteTag(scope.row._id); scope.row.isVisiblePop = false">确定</el-button>
            </div>
            <el-button type="danger" slot="reference" plain size="small" @click="scope.row.isVisiblePop = true">删除</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>

    <!-- pagination -->
    <el-pagination class="mt1 fr"
      layout="total, prev, pager, next"
      :total="tagsData.list.length">
    </el-pagination>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'

import { toUpper } from '../utils/common'

type IItem  = IClassifyItem | ITagItem


@Component
export default class ComponentName extends Vue {

  @Prop()
  private title: string

  @Prop()
  private visible: boolean

  @Prop()
  private formTag: IItem

  @Prop()
  private tagsData: Array<IItem>

  private get ctrlType() {
    return this.title === 'tag' ? '标签': '分类'
  }


  private handleEditTag(data: IItem) {
    this.$emit('update:visible', true)
    this.$emit('update:formTag', data)
    this.$emit('update:ctrlName', 'put')
  }

  private async handleDeleteTag (id: string) {
    await this.$store.dispatch(`${this.title}/delete${toUpper(this.title)}`, id)
    this.$store.dispatch(`${this.title}/get${toUpper(this.title, true)}`)
  }
  
}

</script>

<style lang="less" scoped>

</style>
