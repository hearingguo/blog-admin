<template>
  <div class="release">

    <div class="article">
      <el-form ref="article" :model="article" size="small" label-width="100px">
        <el-form-item label="文章标题" required>
          <el-col :span="12">
            <el-input v-model="article.title" placeholder="title..."></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="文章关键字" required>
          <el-col :span="12">
            <el-input v-model="article.keyword" placeholder="keyword..."></el-input>
          </el-col>
        </el-form-item>
        <el-form-item class="filter-card" label="文章标签" required>
          <router-link to="/tag" v-if="articleTags.list.length === 0">
            <i class="el-icon-plus"></i>
            添加标签
          </router-link>
          <el-checkbox-group v-else v-model="article.tag" size="small">
            <el-checkbox-button
              v-for="(item, index) in articleTags.list"
              :label="item._id"
              :key="index">{{ item.title }}</el-checkbox-button>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="文章描述">
          <el-input rows="4" type="textarea" v-model="article.description" placeholder="description"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" required>
          <MarkdownEditor :content.sync="article.content"/>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" size="small" @click="handleSaveArticle()">保存</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="other">
      <div class="filter-card">
        <el-form ref="article" :model="article" label-width="80px">
          <el-form-item label="文章分类" required>
            <el-radio-group v-model="article.classify" size="small">
              <el-radio-button
                v-for="(item, index) in articleClassifies.list"
                :label="item._id"
                :key="index">{{ item.title }}</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文章状态">
            <el-radio-group v-model="article.state" size="small">
              <el-radio-button label="1">发布</el-radio-button>
              <el-radio-button label="2">草稿</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文章状态">
            <el-radio-group v-model="article.publish" size="small">
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
              <img v-if="article.thumb" :src="article.thumb" class="_img">
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

  private paramsId: string = this.$route.params.id

  private get articleClassifies () {
    return this.$store.state.classify.info
  }

  private get articleTags () {
    return this.$store.state.tag.info
  }

  private get article () {
    const result = this.$store.state.article.currentRes.result
    if(this.paramsId && result) {
      const { _id, title, keyword, description, content, state, publish, thumb, classify, tag } = result
      return { _id, title, keyword, description, content, state, publish, thumb, classify, tag: tag.map((item: ITagItem) => item._id) }
    }
    return {
        title: '',
        keyword: '',
        tag: [],
        description: '',
        content: '',
        state: 2,
        publish: 2,
        thumb: '',
        classify: ''
      }
  }

  private handleSaveArticle () {
      this.paramsId 
      ? this.$store.dispatch('article/putArticle', this.article)
      : this.$store.dispatch('article/postArticle', this.article)
  }

  private handleSuccess(res: any, file: any) {
    this.article.thumb = URL.createObjectURL(file.raw)
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

  private init() {
    Promise.all([
      this.$store.dispatch('classify/getClassifies'),
      this.$store.dispatch('tag/getTags')
    ])
    if (this.paramsId) {
      this.$store.dispatch('article/getArticle', this.paramsId)
    }
  }

  private created () {
    this.init()
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
