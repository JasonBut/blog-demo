import Vue from 'vue';
import Vuex from 'vuex';
import Root from './Root';
import Front from './Front';
import Back from './Back';

Vue.use(Vuex);
const { state, getters, mutations, actions } = Root;

export default new Vuex.Store({
  strict: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    Front,
    Back
  }
});

export Types from './Types';
