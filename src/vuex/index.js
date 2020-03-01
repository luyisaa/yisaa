import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules/index';
import getters from './getters';
import actions from './actions';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules,
  getters,
  actions,
  // plugins: [createPersistedState()] // vuex 持久化缓存
});
export default store;
