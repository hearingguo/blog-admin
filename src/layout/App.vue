<template>
  <transition name="fade">
    <router-view/>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Admin extends Vue {

  private beforeCreate () {
    // initAuth
  }
  
}
</script>

<style lang="less">
@import '../assets/styles/vars.less';
#admin {
  min-height: 100%;
  // display: flex;
  // align-items: center;
}
</style>
