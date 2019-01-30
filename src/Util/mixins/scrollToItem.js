export default {
  methods: {
    handleScrollToItem (refs, { list, currentPage, method }) {
      const { anchor } = this.$route.params;
      // 从评论列表页跳转到博文详情页时,路由params里会包含锚点的信息
      if (!anchor) { return; }

      // 获取路由携带的锚点信息
      const { post, comment } = anchor;
      const commentAnchor = post + comment;

      // 确定当前已挂载的refs集合中的锚点,返回一个数组
      const ref = commentAnchor && refs[commentAnchor];

      /*
      * 当评论列表页数大于一页,但获取不到锚点时
      * 则自动切换到下一页获取新的列表数组
      */
      if (list && list.length > 0 && commentAnchor && !ref) {
        const [ matchedItem ] = list.filter((item) => item.id === comment);

        if (!currentPage || !method) {
          throw new Error(`If provided options for pageable components, currentPage and method are required!`);
        }

        // 没有符合的话会触发翻页函数,持续翻页直到找到对应锚点为止
        if (!matchedItem) {
          const count = currentPage + 1;
          method(count);
          return;
        }
      }

      if (Array.isArray(ref) && ref.length > 0) {
        const [{ $el }] = ref;
        // 平滑滚动到锚点
        $el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
