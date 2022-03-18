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
          :class="father+'/'+value.original_id  == nowSelect
          && nowSelectID == nowID + key ? 'nd-left-nav-item-selected' : ''"
          :id="key"
          data-toggle="pill"
          href="javascript:void(0);"
          role="tab"
          aria-controls="v-pills-home"
          :style="'margin-left:'+ (level+1) * 5+'px'"
          :aria-selected="true"
          @click="click(father, value.original_id, nowID + key)"
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
        from: 1,
        to: 30,
      },
      problems: [],
      Done: false,
    };
  },
  props: {
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
    this.onLoad();
  },
  created() {
    window.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

      if (scrollTop + windowHeight >= (scrollHeight * 5) / 6) {
        if (!this.Done) {
          this.queryconfig.from += 30;
          this.queryconfig.to += 30;
          this.onLoad();
        }
      }
    };
  },
  methods: {
    ...mapActions('problemModule', { sortProblem: 'sort' }),
    ...mapActions('treeMenusModule', { update: 'update', updateID: 'updateID' }),
    onLoad() {
      this.$store.dispatch('problemModule/sort', this.queryconfig).then((res) => {
        if (res.data.data == null) this.Done = true;
        else this.problems = this.problems.concat(res.data.data.problems);
      });
    },
    click(father, originalID, nowID) {
      this.visible = !this.visible;
      this.$store.dispatch('treeMenusModule/update', { newSelect: `${father}/${originalID}` });
      this.$store.dispatch('treeMenusModule/updateID', { newSelect: nowID });
      this.$router.push({ name: 'problem_detail', params: { originalID } });
    },
  },
};
</script>

<style>

</style>
