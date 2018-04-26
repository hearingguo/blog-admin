<template>
  <div class="b-login tc">
    <div class="content">
      <div class="title">管理员登录</div>
      <el-form :model="form" ref="form">
        <el-form-item
          prop="username"
          :rules="[
            { required: true, message: '用户名', trigger: 'blur' },
            { min: 5, message: '账号至少6位', trigger: 'blur' }
          ]">
          <el-input placeholder="管理员账号" v-model="form.username" :maxlength="40"></el-input>
        </el-form-item>
        <el-form-item
          prop="password"
          :rules="[
            { required: true, message: '密码', trigger: 'blur' },
            { min: 6, message: '密码至少6位', trigger: 'blur' }
          ]">
          <el-input 
            placeholder="密码" 
            v-model="form.password" 
            :maxlength="40" 
            type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
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

  private form: FormLogin = {
    username: '',
    password: ''
  }

  // 提交表单
  private submit (): void {
    this.$refs.form.validate(async (valid: boolean): Promise<boolean> => {
      if (valid) {
        // const res: Ajax.AjaxResponse = await axios('login', { ...this.form })
        // if (res.code !== 1) return false
        this.$router.push(this.$route.query.redirect || '/home')
        return true
      } else {
        return false
      }
    })
  }


  // 登录
  // export function login (
  //   params: StoreState.Login
  // ): Promise<Ajax.AjaxResponse> {
  //   return ax.post('/login', { ...params })
  //             .then((res: Ajax.AxiosResponse) => res.data)
  //             .catch((e: string) => console.error(e))
  // }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../assets/styles/vars.less';
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .content{
    width: 100%;
    max-width: 500px;
    background: @themelight;
    border-radius: @s-br;
    padding: 25px;
    .title{
      margin-bottom: 20px;
    }
  }
}

</style>
