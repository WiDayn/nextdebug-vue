<template>
  <ul
    class="nav flex-column nav-pills"
    id="v-pills-tab"
    role="tablist"
    aria-orientation="vertical"
    style="flex-direction: column;"
  >
    <li style="list-style: none;">
      <a
        class="nav-link nd-left-nav-item"
        :class="father + '/' + treeMenus.name == nowSelect ? 'nd-left-nav-item-selected' : ''"
        id="v-pills-home-tab"
        data-toggle="pill"
        href="#v-pills-home"
        role="tab"
        aria-controls="v-pills-home"
        :style="'margin-left:'+level * 5+'px'"
        :aria-selected="true"
        @click="click(father, treeMenus.name)"
      >
        <template v-if="treeMenus.children != null && treeMenus.children.length != 0">
          <template v-if="visible">
            {{treeMenus.name}}
            <span class="nd-breadcrumb-dropdown">↘</span>
          </template>
          <template v-else>
            {{treeMenus.name}}
            <span class="nd-breadcrumb-dropdown">↗</span>
          </template>
        </template>
        <p v-else>{{ treeMenus.name }}</p>
      </a>
      <template v-if="visible && treeMenus.children != null">
        <template v-for="(value, key) in treeMenus.children">
          <sideBar
            :key="key"
            :treeMenus="value"
            :level="nextLevel"
            :father="father + '/' + treeMenus.name"
          >
          </sideBar>
        </template>
      </template>
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
      visible: false,
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
    father: {
      type: String,
    },
  },
  computed: mapState({
    nowSelect: (state) => state.treeMenusModule.sideBarNowSelect,
  }),
  mounted() {
  },
  methods: {
    ...mapActions('treeMenusModule', { update: 'update' }),
    click(father, value) {
      this.visible = !this.visible;
      this.$store.dispatch('treeMenusModule/update', { newSelect: `${father}/${value}` });
    },
  },
});
</script>
<style>
</style>
