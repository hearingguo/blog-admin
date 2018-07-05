<template>
  <div class="tags">
    <el-form label-width="80px">

      <!-- classify -->
      <Tag
        label="分类管理"
        :tags.sync='classifies'/>

      <!-- tags -->
      <Tag
      label="分类管理"
      :tags.sync='tags'/>

    </el-form>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import Tag from '@/components/common/Tags.vue'

@Component({
  components: {
    Tag
  }
})
export default class Tags extends Vue {

  private classifies: string[] = ['high 码', 'high 读', 'high 活']

  private tags: string[] = ['html', 'css', 'nodejs', 'javascript', 'webpack']

}

</script>

<style lang="less" scoped>

@import '../../assets/styles/vars.less';

.el-tag + .el-tag {
    margin-left: @s-l;
  }

</style>
