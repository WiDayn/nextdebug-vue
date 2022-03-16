const treeMenusModule = {
  namespaced: true,
  state: () => ({
    sideBarNowSelect: '/Base',
    sideBarNowSelectID: '0',
  }),
  mutations: {
    SET_SIDEBARNOWSELECT(state, newSelect) {
      // 变更状态
      state.sideBarNowSelect = newSelect;
    },
    SET_SIDEBARNOWSELECTID(state, newSelect) {
      // 变更状态
      state.sideBarNowSelectID = newSelect;
    },
  },
  actions: {
    update(context, { newSelect }) {
      context.commit('SET_SIDEBARNOWSELECT', newSelect);
    },
    updateID(context, { newSelect }) {
      context.commit('SET_SIDEBARNOWSELECTID', newSelect);
    },
  },
};

export default treeMenusModule;
