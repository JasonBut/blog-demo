import Types from './Types';
export default {
  [Types.AUTH_FORM_CHANGE] (state, { target, value }) {
    state.authForm[target] = value;
  },
  [Types.AUTH_SUCCEEDED] (state) {
    state.withCredentials = true;
  }
};
