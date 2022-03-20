<template>
  <ul
    class="nav flex-column nav-pills child_right_slider transition_dom"
    id="v-pills-tab"
    role="tablist"
    aria-orientation="vertical"
    style="flex-direction: column;"
    ref="box"
  >
    <li style="list-style: none;">
      <a
        class="nav-link nd-left-nav-item"
        :class="father + '/' + treeMenus.name == nowSelect
        && nowSelectID == nowID ? 'nd-left-nav-item-selected' : ''"
        id="v-pills-home-tab"
        data-toggle="pill"
        href="javascript:void(0);"
        role="tab"
        aria-controls="v-pills-home"
        :style="'margin-left:'+level * 10+'px'"
        :aria-selected="true"
        @click="click(father, treeMenus.name, nowID)"
      >
        <template v-if="(treeMenus.children != null && treeMenus.children.length != 0)
        || treeMenus.module != null">
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
      <template v-if="visible && treeMenus.children != null && treeMenus.module == null">
        <div class="nd-dropdown-wrap">
          <template v-for="(value, key) in treeMenus.children">
            <sideBar
              :key="key"
              :treeMenus="value"
              :level="nextLevel"
              :father="father + '/' + treeMenus.name"
              :nowID="nowID + key"
            >
            </sideBar>
          </template>
        </div>
      </template>
      <template v-if="visible && treeMenus.module != null">
        <ProblemListSideBar
          :level="nextLevel"
          :father="father + '/' + treeMenus.name"
          :nowID="nowID + 10000"
        />
      </template>
    </li>
  </ul>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import ProblemListSideBar from './module/ProblemListSideBar.vue';

export default ({
  name: 'treeMenus',
  data() {
    return {
      nextLevel: this.level + 1,
      visible: false,
      is_show: true,
      height: '',
    };
  },
  components: {
    ProblemListSideBar,
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
    nowID: {
      type: Number,
    },
  },
  computed: mapState({
    nowSelect: (state) => state.treeMenusModule.sideBarNowSelect,
    nowSelectID: (state) => state.treeMenusModule.sideBarNowSelectID,
  }),
  mounted() {
    this.fun_get_list();
  },
  methods: {
    ...mapActions('treeMenusModule', { update: 'update', updateID: 'updateID' }),
    click(father, value) {
      if (this.is_show) {
        this.$refs.box.style.height = '0';
      } else {
        this.$refs.box.style.height = this.height;
      }
      this.is_show = !this.is_show;
      this.visible = !this.visible;
      this.$store.dispatch('treeMenusModule/update', { newSelect: `${father}/${value}` });
      this.$store.dispatch('treeMenusModule/updateID', { newSelect: this.nowID });
    },
    fun_get_list() {
      // 1：网络请求获取数据后会把元素自动撑开，我们要做的就是让这个元素做展开收起动画
      // 做法： 1：获取这个元素的高度
      //        2:吧获取的高度赋值给这个元素，这样这个元素就是高度固定的了。nextTick用于dom刷新后执行
      this.$nextTick(function () {
        const height = 100;
        console.log(height);
        this.$refs.box.style.height = `${height}px`;
        this.height = `${height}px`;
      });
    },
  },
});
</script>

<style lang="scss">
.transition_dom {
    transition: all 0.3s linear 0s;
}
.child_right_slider {
    display: inline-block;
    width: 300px;
    color: white;
}
</style>
