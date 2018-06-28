<template>
  <header class="b-header">
    <div class="logo">
      <router-link to="/">
        <img src="../../assets/images/avatar.jpeg" alt="">highya
      </router-link>
    </div>
    <div class="logout">
      <el-button type="text">logout</el-button>
    </div>
  </header>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  
}

</script>

<style lang="less" scoped>
  @import '../../assets/styles/vars.less';
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 5;
    height: 4.5rem;
    padding: 0 15px;
    width: 100%;
    background: @theme;

    .logout {
      .el-button {
        color: @white;
      }
    }

    .logo {
      a {
        display: flex;
        align-items: center;
        color: #fff;
        text-decoration: none;
        font-size: @f-m;
        img {
          border-radius: 50%;
          width: 3rem;
          margin-right: @s-l;
        }
      }
    }
  }
</style>
