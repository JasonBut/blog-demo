import Types from './Types';

export default {
  [Types.SET_EDIT_STATUS] (state, status) {
    if (typeof status !== 'string') {
      throw new Error(`Invalid status type '${typeof status}'`);
    }
    const lowerCaseStatus = status.toLowerCase();
    const pool = new Map([
      ['new', () => { state.publishing = true; }],
      ['edit', () => { state.editingArticle = state.publishing = true; }],
      ['cancel', () => { state.editingArticle = state.publishing = false; }]
    ]);
    const action = pool.get(lowerCaseStatus);
    if (!action) {
      throw new Error(`Status did not exist in pool`);
    }
    action();
  },

  [Types.UPDATE_AMEND_VALUE] (state, payload) {
    if (typeof payload !== 'object' || Array.isArray(payload)) {
      throw new Error(`Amend value payload should only be 'Object'!`);
    }
    state.amendValue = payload;
  },

  [Types.CLEAN_AMEND_VALUE] (state) {
    state.amendValue = Object.create(null);
  }
};
