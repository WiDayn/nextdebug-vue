<template>
  <ul
    class="nav flex-column nav-pills"
    id="v-pills-tab"
    role="tablist"
    aria-orientation="vertical"
    style="flex-direction: column;"
  >
    <li
      v-for="(value, key) in treeMenus"
      :key="key"
      style="list-style: none;"
    >
      <a
        class="nav-link nd-left-nav-item"
        :class="value == nowSelect ? 'nd-left-nav-item-selected' : ''"
        id="v-pills-home-tab"
        data-toggle="pill"
        href="#v-pills-home"
        role="tab"
        aria-controls="v-pills-home"
        :style="'margin-left:'+level * 5+'px'"
        :aria-selected="true"
        @click="click(value)"
        v-if="typeof value != 'object'"
      >{{value}}</a>
      <sideBar
        v-if="typeof value == 'object'"
        :treeMenus="value"
        :level="nextLevel"
      ></sideBar>
    </li>
  </ul>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default ({
  name: 'treeMenus',
  data() {
    return {
      nextLevel: this.level + 1,
    };
  },
  props: {
    treeMenus: {
      Type: Object,
      default: () => {},
    },
    level: {
      type: Number,
    },
  },
  computed: mapState({
    nowSelect: (state) => state.treeMenusModule.sideBarNowSelect,
  }),
  mounted() {
  },
  methods: {
    ...mapActions('treeMenusModule', { update: 'update' }),
    click(value) {
      this.$store.dispatch('treeMenusModule/update', { newSelect: value });
    },
  },
});
</script>
<style>
</style>
