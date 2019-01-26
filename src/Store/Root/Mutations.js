import Types from './Types';

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

  [Types.UPDATE_STORE] (state, { target, data }) {
    state[target] = data;
  },

  [Types.UPDATE_BREAD_LIST] (state, route) {
    //    旧逻辑,根据路径去判断,依赖性太强
    //    const paths = route.path.split('/');
    //    state.breadList = paths.map((item, i, arr) => {
    //      if (i > 0 && !item) {
    //        return;
    //      }
    //      return i > 0
    //        ? (arr.slice(0, i + 1).join('/'))
    //        : `/`;
    //    });

    let breadList = [];

    route.matched.forEach((item) => {
      breadList.push({
        name: item.name || 'home',
        cname: item.meta.cname,
        list: item.meta.list,
        params: route.params
      });
    });
    state.breadList = breadList;
  }
};
