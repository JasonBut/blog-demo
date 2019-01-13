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

  breadListFilters: () => (bread) => {
    switch (bread) {
      case '/':
        return '首页';

      case '/daily':
        return '日常生活';

      case '/programs':
        return '项目记录';

      case '/notes':
        return '学习笔记';

      case undefined:
        break;

      default:
        return '文章详情';
    }
  }
};
