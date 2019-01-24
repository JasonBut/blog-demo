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
  }
};
