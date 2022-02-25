<template>
  <div>
    <h1>{{ problem.name }}</h1>
    <hr />
    <h3>来源: {{ problem.from }} 上传者: {{ problem.uploader }}</h3>
    <p>{{ problem.description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      problem: {},
      queryconfig: {
        id: this.$route.params.id,
      },
    };
  },
  mounted() {
    this.$store.dispatch('problemModule/get', this.queryconfig).then((res) => {
      this.problem = res.data.data.problem;
    });
  },
};
</script>

<style>

</style>
