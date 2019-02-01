export default {
  // 从保存在state树中的list状态提取已有文章信息
  postFilterFromList ({ list }) {
    return (targetId) => list.filter(({ id, title }) => id === targetId && !!title);
  },

  routeTitleFilter ({ categories }) {
    return ({ meta: { list }, params: { categoryName } }) => {
      let categoryCname;
      if (list) {
        /*
        * 将store中的categories数据
        * 跟breadItem.params里的categoryName逐项对比
        * 获得对应分类在数据库里的中文名
        */
        ([categoryCname] = categories.filter(({ cname, name }) => {
          return cname && name === categoryName;
        }));
        return categoryCname && categoryCname.cname;
      }
    };
  }
};
