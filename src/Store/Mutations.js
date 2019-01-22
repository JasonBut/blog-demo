import Types from './Types'

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
  },

  [Types.UPDATE_BREAD_LIST] (state, { path }) {
    const paths = path.split('/');
    state.breadList = paths.map((item, i, arr) => {
      if (i > 0 && !item) {
        return;
      }
      return i > 0
        ? (arr.slice(0, i + 1).join('/'))
        : `/`;
    });
  }
};
