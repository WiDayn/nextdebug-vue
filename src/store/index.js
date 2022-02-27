import Vue from 'vue';
import Vuex from 'vuex';
import userModule from './module/user';
import problemModule from './module/problem';
import onlineJudgeModule from './module/onlineJudge';
import testSetModule from './module/testSet';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    testSetModule,
    problemModule,
    userModule,
    onlineJudgeModule,
  },
});
