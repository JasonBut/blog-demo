export default {
  // 将导航栏分类名字分隔开,用于双色效果
  splitCategoryLabel (state, getters, { categories }) {
    return categories.map((category) => {
      const { label } = category;
      const halfLength = Number.parseInt(label.length / 2); // 获取分类名一半长度
      const first = label.slice(0, halfLength);
      const last = label.slice(halfLength, label.length);
      return { ...category, first, last };
    });
  }
};
