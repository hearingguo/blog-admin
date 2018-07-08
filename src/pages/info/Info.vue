<template>
  <div class="info">
    <!-- blog基本信息 -->
    <div class="base-info">
      <div class="title">基本信息</div>
      <el-form ref="baseInfos" :model="baseInfos" label-position="left" size="small" label-width="70px">
        <el-form-item label="标题">
          <el-col :span="12">
            <el-input v-model="baseInfos.title" placeholder="title..."></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="副标题">
          <el-col :span="12">
            <el-input v-model="baseInfos.subTitle" placeholder="subtitle..."></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="关键词">
          <el-input v-model="baseInfos.keywords" placeholder="keywords..."></el-input>
        </el-form-item>
        <el-form-item label="站点URL">
          <el-input v-model="baseInfos.url" placeholder="URl..."></el-input>
        </el-form-item>
        <el-form-item label="站点描述">
          <el-input type="textarea" rows="4" v-model="baseInfos.desc" placeholder="description..."></el-input>
        </el-form-item>
        <el-form-item label="电子邮件">
          <el-input v-model="baseInfos.email" placeholder="email..."></el-input>
        </el-form-item>
        <el-form-item label="ICP">
          <el-input v-model="baseInfos.icp" placeholder="ICP..."></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" size="small">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- blog个人信息 -->
    <div class="author-info">
      <div class="title">个人信息</div>
      <el-form ref="authorInfos" :model="authorInfos" label-position="left" size="small" label-width="70px">
        <el-form-item label="头像">
          <el-upload
            class="img-uploader"
            action=""
            :show-file-list="false"
            :on-success="handleSuccess"
            :before-upload="beforeUpload">
            <img v-if="authorInfos.avatar" :src="authorInfos.avatar" class="_img">
            <i v-else class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input :disabled="true" placeholder="username..."></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="authorInfos.name" placeholder="name..."></el-input>
        </el-form-item>
        <el-form-item label="个性签名">
          <el-input v-model="authorInfos.signature" placeholder="signature..."></el-input>
        </el-form-item>
        <el-form-item label="原密码">
          <el-input type="password" v-model="authorInfos.password" placeholder="old password..."></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input type="password" v-model="authorInfos.passwordnew" placeholder="new password..."></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model="authorInfos.passwordnew" placeholder="new password again..."></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" size="small">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

interface FormBase {
  title: string
  subTitle: string
  keywords: string
  url: string
  desc: string
  email: string
  icp: string
}

interface FormAuthor {
  avatar: string
  name: string
  signature: string
  password: string
  passwordnew: string
  author?: string
}

@Component
export default class Info extends Vue {

  private baseInfos:FormBase = {
    title: '',
    subTitle: '',
    keywords: '',
    url: '',
    desc: '',
    email: '',
    icp: ''
  }

  private authorInfos:FormAuthor = {
    avatar: '',
    name: '',
    signature: '',
    password: '',
    passwordnew: ''
  }

  private handleSuccess(res: any, file: any) {
    this.authorInfos.avatar = URL.createObjectURL(file.raw)
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

  .info {
    display: flex;
    justify-content: space-between;
    .title {
      padding-bottom: @xxl-l;
      font-size: @m-f;
    }
    > div {
      flex-grow: 1;
      &.base-info {
        flex-grow: 4;
        border-right: 1px dashed @border;
        margin-right: @xl-l;
        padding-right: @xl-l;
      }
    } 
  }

</style>
