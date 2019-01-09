<template>
  <el-row class="b-login tc">
    <el-card class="content" :body-style="{ width: '80%', margin: '0 auto' }">
      <div class="title">ADMINISTRATOR</div>
      <el-form :model="loginForm" ref="form">
        <el-form-item
          prop="username"
          :rules="[
            { required: true, message: 'Account is required!', trigger: 'blur' },
            { min: 5, message: 'Account length is no less than five!', trigger: 'blur' }
          ]">
          <el-input placeholder="ACCOUNT" v-model="loginForm.username" :maxlength="40"></el-input>
        </el-form-item>
        <el-form-item
          prop="password"
          :rules="[
            { required: true, message: 'Password is required!', trigger: 'blur' },
            { min: 6, message: 'Account length is no less than six!', trigger: 'blur' }
          ]">
          <el-input 
            placeholder="PASSWORD" 
            v-model="loginForm.password" 
            :maxlength="40" 
            type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="false" @click="submit" size="small">SUBMIT</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

interface FormLogin {
  username: string,
  password: string
}

@Component
export default class Login extends Vue {
  
  $refs: {
    form: HTMLFormElement
  }

  private loginForm: FormLogin = {
    username: '',
    password: ''
  }

  private get loginInfo() {
    return this.$store.state.auth.login
  }

  private get submitLoading() {
    return this.$store.state.auth.submitLoading
  }

  // 提交表单
  private submit (): void {
    this.$refs.form.validate(async (valid: boolean): Promise<boolean> => {
      if (valid) {
        const res = await this.$store.dispatch('auth/login', this.loginForm)
        if (!this.loginInfo.name) return false
        this.$router.push(this.$route.query.redirect || '/')
        return true
      } else {
        return false
      }
    })
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../assets/styles/vars.less';

@login-w: 500px;

.b-login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .content{
    width: 100%;
    width: @login-w;
    padding: @xl-l;
    margin-top: -20%;
    .title{
      margin-bottom: @xl-l;
      font-size: @l-f;
    }
  }
}

.el-card {
  box-shadow: none;
  border: 0;
}

</style>
