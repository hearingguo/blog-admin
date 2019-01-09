<template>
  <header class="b-header">
    <!-- left -->
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo-gray.png" alt="">
      </router-link>
    </div>
    <!-- right -->
    <div class="logout">
      <!-- <img :src="authInfo.avatar" alt=""/> -->
      <i class="iconfont icon-logout"></i>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Header extends Vue {

  @Prop()
  private authInfo: IAuth

}
</script>

<style lang="less" scoped>
  @import '../../assets/styles/vars.less';

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 5;
    height: 3.5rem;
    padding: 0 15px;
    width: 100%;
    background: @theme;

    .logout {
      display: flex;
      align-items: center;
      color: @border;
      text-decoration: none;
      font-size: @l-f;
      .el-button {
        color: @white;
      }
      img {
        border-radius: 50%;
        width: 2rem;
        margin-right: @s-l;
      }
      .iconfont {
        font-size: 1.2rem;
        cursor: pointer;
      }
    }

    .logo {
      img {
        width: 100px;
      }
    }
  }
</style>
