<template>
  <div
    class="col-md-3 col-xl-12 bd-sidebar"
    id="code-font"
  >
    <p>problem set</p>
    <div class="collapse d-md-block row">
      <sideBar
        :treeMenus="treeMenusData"
        :level="0"
      ></sideBar>
    </div>
  </div>
</template>

<script>
const treeMenusData = { // 数据格式
  name: 'Base',
  children: [
    {
      name: 'Home',
      children: [
        {
          name: 'Profile',
        },
      ],
    },
  ],
};
export default {
  data() {
    return {
      treeMenusData,
      message: '',
    };
  },
  methods: {
  },
};

</script>

<style>

</style>
