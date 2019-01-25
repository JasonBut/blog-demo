import Types from '@/Store/Types';
export default {
  sendAuthRequest ({ commit, dispatch }, payload) {
    try {
      commit({ type: Types.REQUESTED_START }, { root: true });
      console.log(payload);
      commit({ type: Types.REQUESTED_SUCCEEDED }, { root: true });
      commit({ type: Types.AUTH_SUCCEEDED });
    } catch (err) {
      commit({ type: Types.REQUESTED_FAILED, err }, { root: true });
    }
  }
};
