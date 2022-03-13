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
        :father="''"
      ></sideBar>
    </div>
  </div>
</template>

<script>

const treeMenusData = {
  name: 'Base',
  children: [
    {
      name: 'Home',
      children: [
      ],
    },
    {
      name: 'Profile',
      children: [
        {
          name: 'Detail',
        },
      ],
    },
    {
      name: 'Messages',
      children: [
        {
          name: 'Detail',
        },
      ],
    },
    {
      name: 'Settings',
      children: [
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
