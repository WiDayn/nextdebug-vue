<template>
  <ul
    class="nav flex-column nav-pills"
    id="v-pills-tab"
    role="tablist"
    aria-orientation="vertical"
    style="flex-direction: column;"
  >
    <template v-for="(value, key) in problems">
      <li
        style="list-style: none;"
        :key="key"
      >
        <a
          class="nav-link nd-left-nav-item"
          :class="father+'/'+value.original_id == nowSelect ? 'nd-left-nav-item-selected' : ''"
          id="v-pills-home-tab"
          data-toggle="pill"
          href="#v-pills-home"
          role="tab"
          aria-controls="v-pills-home"
          :style="'margin-left:'+ (level+1) * 5+'px'"
          :aria-selected="true"
          @click="click(father, value.original_id)"
        >
          {{value.original_id + " " + value.name}}
        </a>
      </li>
    </template>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ProblemListSideBar',
  data() {
    return {
      queryconfig: {
        type: 'id',
        form: 1,
        to: 50,
      },
      problems: [],
    };
  },
  props: {
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
    this.onLoad();
  },
  methods: {
    ...mapActions('problemModule', { sortProblem: 'sort' }),
    ...mapActions('treeMenusModule', { update: 'update' }),
    onLoad() {
      this.$store.dispatch('problemModule/sort', this.queryconfig).then((res) => {
        this.problems = res.data.data.problems;
      });
    },
    click(father, value) {
      this.visible = !this.visible;
      this.$store.dispatch('treeMenusModule/update', { newSelect: `${father}/${value}` });
    },
  },
};
</script>

<style>

</style>
