export default {
  // 用于返回给后台的分类列表,过滤掉About项
  categoryWithoutAbout (state, getters, { categories }) {
    return categories.filter(({ cname }) => cname);
  },

  // 后台PostList组件的分类项
  postListFilters (state, { categoryWithoutAbout }) {
    return categoryWithoutAbout.map(({ name }) => ({
      text: name.toLowerCase(),
      value: name.toLowerCase()
    }));
  },

  postListFilterMethod () {
    return (value, { category }) => category === value;
  },

  filteredList ({ filterRules }, getters, { list }) {
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
  }
};
