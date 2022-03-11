<template>
  <div id="app">
    <NavBar />
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import NavBar from './views/layout/NavBar.vue';

export default {
  components: { NavBar },
  data() {
    return {};
  },
};
</script>
<link data-n-head="ssr" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&amp;Space+Mono:wght@400&amp;family=Epilogue:wght@200;400;700&amp;display=swap">
<style lang="scss">
</style>
