<template>
  <div id="app">
    <router-view />
    <main-tab-bar />
  </div>
</template>
<script>
import MainTabBar from "./components/content/mainTabBar/mainTabBar.vue";

export default {
  components: {
    MainTabBar
  }
};
</script>
<style>
@import "assets/css/base.css";
</style>
