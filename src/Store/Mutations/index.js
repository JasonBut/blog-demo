import Types from '../Types';

export default {
  [Types.REQUESTED_START] (state, { target }) {
    state.loading = true;
    if (target) {
      state[target] = target === 'post' ? {} : [];
    }
  },

  [Types.REQUESTED_FAILED] (state, { err }) {
    console.log(err);
    state.err = err.toString();
  },

  [Types.REQUESTED_SUCCEEDED] (state) {
    state.loading = false;
  },

  [Types.UPDATE_STORE] (state, { target, data }) {
    state[target] = data;
  }
};
