export default {
  // 将导航栏分类名字分隔开,用于双色效果
  splitCategoryLabel ({ categories }) {
    return categories.map((category) => {
      const label = category.label;
      const halfLength = Number.parseInt(label.length / 2); // 获取分类名一半长度
      const first = label.slice(0, halfLength);
      const last = label.slice(halfLength, label.length);
      return { ...category, first, last };
    });
  },
  // 用于返回给后台的分类列表,过滤掉About分类
  categoryWithoutAbout ({ categories }) {
    return categories.filter((item) => item && item.cname);
  },
  // 从保存在state树中的list状态提取已有文章信息
  postFilterFromList ({ list }) {
    return (id) => list.filter((item) => item.id === id && !!item.title);
  },
  // 后台PostList组件的分类过去项
  categoryFilters (state, { categoryWithoutAbout }) {
    return categoryWithoutAbout.map(({ name }) => ({
      text: name.toLowerCase(),
      value: name.toLowerCase()
    }));
  }
};
