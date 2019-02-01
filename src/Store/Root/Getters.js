export default {
  // 从保存在state树中的list状态提取已有文章信息
  postFilterFromList ({ list }) {
    return (targetId) => list.filter(({ id, title }) => id === targetId && !!title);
  },

  filteredList ({ list, filterRules }) {
    const filteredList = [];

    /*
    * 列表更改筛选或重置时会传入filters
    * 重置时会传入空的filters数组
    * 当filters不为空,就会遍历filters的筛选项
    * 然后同时找出store中的list对应项目
    * 保存到filteredList状态
    */
    if (filterRules.length > 0) {
      for (const filter of filterRules) {
        filteredList.push(...list.filter(({ category }) => {
          return category && category === filter;
        }));
      }
      // 根据id由新到旧排列
      filteredList.sort((a, b) => +b.id - +a.id);
    }

    return filteredList;
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
