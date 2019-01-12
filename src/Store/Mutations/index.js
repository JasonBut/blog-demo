import { MUTATIONS } from '@/Store/Constants';

export default {
  [MUTATIONS.FETCH_START] (state) {
    state.loading = true;
  },

  [MUTATIONS.REQUESTED_FAILED] (state, err) {
    state.err = err.toString();
    console.log(err);
  },

  [MUTATIONS.FETCH_SUCCESS] (state) {
    state.loading = false;
  },

  [MUTATIONS.GET_CATEGORIES] (state, { payload }) {
    state.categories = payload;
  },

  [MUTATIONS.GET_LIST] (state, { payload }) {
    state.list = payload;
  }
};
