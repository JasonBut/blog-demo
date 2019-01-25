import state from './States';
import getters from './Getters';
import mutations from './Mutations';
import deleteData from './deleteData';
import Auth from './Auth';

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions: {
    deleteData
  },
  modules: {
    Auth
  }
};
