<template>
  <div>
    <div
      style="margin: 5px"
      class="text-right"
    >
      <b-button
        variant="primary"
        @click="$router.push({ name: 'problem_create' })"
      >添加题目</b-button>
    </div>
    <b-table
      :items="problems"
      :fields="fields"
      striped
      responsive="sm"
    >
      <template #cell(id)="data">
        {{ data.value }}
      </template>
      <template #cell(nameid)="data">
        <a
          href="javascript:void(0);"
          @click="$router.push({ name: 'problem',params:{id:data.item.id}})"
          @keyup="$router.push({ name: 'problem',params:{id:data.item.id}})"
        >{{
          data.item.name
        }}</a>
      </template>
      <template #cell(from)="data">
        <b-badge variant="primary">{{ data.value }}</b-badge>
      </template>
      <template #cell(op)="data">
        {{ data.value }}
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'HomeView',
  res: '',
  data() {
    return {
      queryconfig: {
        type: 'id',
        form: 1,
        to: 50,
      },
      problems: [],
      fields: [
        { key: 'id', label: '题号', thStyle: 'width: 15%' },
        { key: 'nameid', label: '题目名称', thStyle: 'width: 55%' },
        { key: 'from', label: '标签', thStyle: 'width:15%' },
        { key: 'op', label: '操作', thStyle: 'width: 15%' },
      ],
    };
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    ...mapActions('problemModule', { sortProblem: 'sort' }),
    ...mapActions('onlineJudgeModule', { sortOnlineJudge: 'sort' }),
    onLoad() {
      this.$store.dispatch('problemModule/sort', this.queryconfig).then((res) => {
        this.problems = res.data.data.problems;
      });
    },
  },
};
</script>
