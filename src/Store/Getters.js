export default {
  // 将导航栏分类名字分隔开,用于双色效果
  splitCategoryName ({ categories }) {
    return categories.map((category) => {
      const name = category.name;
      const halfLength = Number.parseInt(name.length / 2); // 获取分类名一半长度
      const first = name.slice(0, halfLength);
      const last = name.slice(halfLength, name.length);
      return { ...category, first, last };
    });
  },
  // 用于返回给后台的分类列表,过滤掉About分类
  categoryWithoutAbout ({ categories }) {
    return categories.filter((item) => item && item.cname);
  },
  // 从保存在state树中的list状态提取已有文章信息
  postFilterFromList ({ list }) {
    return (id) => {
      console.log(id);
      return list.filter((item) => {
        return item.id === id && !!item.title;
      });
    };
  }
};
