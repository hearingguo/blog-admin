<template>
  <el-header class="clearfix">
    <div class="logo fl">
      <a href="/">
        <span>highya</span>
      </a>
    </div>
    <div class="avatar fr">
      <a href="/">
        <img src="../../assets/images/avatar.jpeg" alt="">
      </a>
    </div>
  </el-header>
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
    background: @m-bg;
    .logo {
      a {
        color: #fff;
        text-decoration: none;
        font-size: @f-m;
      }
    }
    .avatar {
      img {
        border-radius: 50%;
        width: 3rem;
      }
    }
  }
</style>
