<template>
  <div class="release">

    <div class="article">
      <el-form ref="article" :model="article" size="small" label-width="100px">
        <el-form-item label="文章标题">
          <el-col :span="12">
            <el-input v-model="article.title" placeholder="title..."></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="文章关键字">
          <el-col :span="12">
            <el-input v-model="article.keywords" placeholder="keywords..."></el-input>
          </el-col>
        </el-form-item>
        <el-form-item class="filter-card" label="文章标签">
          <el-checkbox-group v-model="article.tag" size="small">
            <el-checkbox-button
              v-for="(item, index) in articleTags"
              :label="item.id"
              :key="index"
              v-if="item.id">{{ item.value }}</el-checkbox-button>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="文章描述">
          <el-input rows="4" type="textarea" v-model="article.desc" placeholder="description"></el-input>
        </el-form-item>
        <el-form-item label="文章内容">
          <MarkdownEditor></MarkdownEditor>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" size="small">保存</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="other">
      <div class="filter-card">
        <el-form ref="article" :model="article" label-width="80px">
          <el-form-item label="文章分类">
            <el-radio-group v-model="article.classify" size="small">
              <el-radio-button
                v-for="(item, index) in articleClassifies"
                :label="item.id"
                :key="index"
                v-if="item.id">{{ item.value }}</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文章状态">
            <el-radio-group v-model="article.release" size="small">
              <el-radio-button label="1">发布</el-radio-button>
              <el-radio-button label="2">草稿</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文章状态">
            <el-radio-group v-model="article.status" size="small">
              <el-radio-button label="1">公开</el-radio-button>
              <el-radio-button label="2">私密</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="缩略图" required>
            <el-upload
              class="img-uploader"
              action=""
              :show-file-list="false"
              :on-success="handleSuccess"
              :before-upload="beforeUpload">
              <img v-if="article.cover" :src="article.cover" class="_img">
              <i v-else class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import MarkdownEditor from '@/components/common/MdEditor.vue'

@Component({
  components: {
    MarkdownEditor
  }
})
export default class Release extends Vue {

  private articleClassifies = [
    {
      id: 0,
      value: '全部'
    },
    {
      id: 1,
      value: 'high码'
    },
    {
      id: 2,
      value: 'high读'
    },
    {
      id: 3,
      value: 'high活'
    }
  ]

  private articleTags = [
    {
      id: 0,
      value: '全部'
    },
    {
      id: 1,
      value: 'javascript'
    },
    {
      id: 2,
      value: 'nodejs'
    },
    {
      id: 3,
      value: 'css'
    },
    {
      id: 4,
      value: 'html'
    }
  ]

  private article = {
    title: '',
    keywords: '',
    tag:[],
    desc: '',
    content: '',
    classify: 1,
    release: 1,
    status: 1,
    cover: ''
  }

  private handleSuccess(res: any, file: any) {
    this.article.cover = URL.createObjectURL(file.raw)
  }

  private beforeUpload(file: any) {
    const isJPG = file.type === 'image/jpeg'
    const isLt2M = file.size / 1024 / 1024 < 2

    if (!isJPG) {
      this.$message.error('上传头像图片只能是 JPG 格式!')
    }
    if (!isLt2M) {
      this.$message.error('上传头像图片大小不能超过 2MB!')
    }
    return isJPG && isLt2M
  }
  
}

</script>

<style lang="less" scoped>
  @import '../../assets/styles/vars.less';

  .release {
    display: flex;
    justify-content: space-between;
    > div {
      flex-grow: 1;
      &:nth-of-type(1) {
        flex-grow: 3;
        margin-right: @xl-l;
        padding-right: @xl-l;
        border-right: 1px dashed @border;
      }
    }

    .other {
      .el-form-item {
        &:nth-last-of-type(1) {
          border-bottom: 0;
        }
      }
    }
  }

</style>
