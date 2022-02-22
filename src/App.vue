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

<style lang="scss">
</style>
