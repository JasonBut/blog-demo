import Vue from 'vue';
import Vuex from 'vuex';
import States from './States';
import Getters from './Getters';
import Mutations from './Mutations';
import Actions from './Actions';

import Back from './Back';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    ...States
  },

  getters: {
    ...Getters
  },

  mutations: {
    ...Mutations
  },

  actions: {
    ...Actions
  },

  modules: {
    Back
  }
});

export Types from './Types';
