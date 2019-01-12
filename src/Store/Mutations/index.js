import Types from '../Types';

export default {
  [Types.REQUESTED_START] (state) {
    state.loading = true;
  },

  [Types.REQUESTED_FAILED] (state, { err }) {
    console.log(err);
    state.err = err.toString();
  },

  [Types.REQUESTED_SUCCEEDED] (state) {
    state.loading = false;
  },

  [Types.GET_CATEGORIES] (state, { data }) {
    state.categories = data;
  },

  [Types.GET_LIST] (state, { data }) {
    state.list = data;
  },

  [Types.GET_POST] (state, { data }) {
    state.post = data;
  }
};
