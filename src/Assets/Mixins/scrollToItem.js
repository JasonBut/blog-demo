export default {
  methods: {
    handleScrollToItem (refs) {
      // 获取路由携带的锚点信息
      const path = this.$route.params.anchor;
      // 搜索refs确定锚点位置
      const ref = path && refs[path];
      if (Array.isArray(ref)) {
        const { 0: { $el: element } } = ref;
        // 平滑滚动到锚点
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
