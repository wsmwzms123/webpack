<template>
  <div id="app">
    <emoji></emoji>
    <navbar></navbar>
    <router-view class="main"></router-view>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Hello',
  components: {
    Navbar
  }
}
</script>

<style>
  html,
  body {
    height: 100%;
    width: 100%;
  }
</style>

<style scoped>
  #app {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .main {
    flex: 1;
  }
</style>
