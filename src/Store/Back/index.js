export const Types = {
  SET_EDIT_STATUS: 'SET_EDIT_STATUS',
  UPDATE_AMEND_VALUE: 'UPDATE_AMEND_VALUE',
  CLEAN_AMEND_VALUE: 'CLEAN_AMEND_VALUE'
};

export default {
  namespaced: true,

  state: {
    editingArticle: false, // 是否处于文章/评论编辑状态
    publishing: false, // 是否正在发表文章
    amendValue: Object.create(null), // 用来缓存要编辑的文章/评论信息
    asideMenu: [
      { name: 'home', cname: '博客首页' },
      { name: 'manage-categories', cname: '管理分类' },
      { name: 'manage-posts', cname: '我的文章' },
      { name: 'manage-comments', cname: '访客回复' }
    ]
  },

  getter: {

  },

  mutations: {
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
  }
};
