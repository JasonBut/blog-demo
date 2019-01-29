import Types from './Types';

export default {
  [Types.REQUESTED_START] (state) {
    state.err = '';
    state.loading = true;
  },

  [Types.REQUESTED_FAILED] (state, { err }) {
    console.log(err);
    state.err = err.toString();
    state.loading = false;
  },

  [Types.REQUESTED_SUCCEEDED] (state) {
    state.loading = false;
  },

  [Types.UPDATE_STORE] (state, { target, data }) {
    state[target] = data;
  },

  [Types.UPDATE_BREAD_LIST] (state, { matched, params }) {
    //    旧逻辑,根据路径去判断,依赖性太强
    //    而且路径与面包屑标签的对应关系硬编码在组件里
    //    耦合太强,如果组件或路径变动
    //    需要更改原有规则
    //    const paths = route.path.split('/');
    //    state.breadList = paths.map((item, i, arr) => {
    //      if (i > 0 && !item) {
    //        return;
    //      }
    //      return i > 0
    //        ? (arr.slice(0, i + 1).join('/'))
    //        : `/`;
    //    });

    /*
    * 重构前的路由表中,详情页跟列表页是兄弟关系,不存在嵌套
    * 获取matched时会少了中间列表页的信息
    * 重构后将详情页嵌套到列表页里面
    * 并在对应路由规则中将信息写进meta里传递
    * 因此可以根据嵌套关系获取每层的数据
    */
    state.breadList = matched.map(({ name, meta }) => {
      return {
        name: name || 'home',
        meta,
        params
      };
    });
  }
};
