const treeMenusModule = {
  namespaced: true,
  state: () => ({
    sideBarNowSelect: 'Base',
  }),
  mutations: {
    SET_SIDEBARNOWSELECT(state, newSelect) {
      // 变更状态
      state.sideBarNowSelect = newSelect;
    },
  },
  actions: {
    update(context, { newSelect }) {
      context.commit('SET_SIDEBARNOWSELECT', newSelect);
    },
  },
};

export default treeMenusModule;
