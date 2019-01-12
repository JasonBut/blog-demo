import Vue from 'vue';
import Vuex from 'vuex';
import States from './States';
import Getters from './Getters';
import Mutations from './Mutations';
import Actions from './Actions';

Vue.use(Vuex);

export default new Vuex.Store({
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

  }
});

export Types from './Types';
