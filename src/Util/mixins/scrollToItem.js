export default {
  methods: {
    async handleScrollToItem (refs, { list, currentPage, method, enterActiveClass, leaveActiveClass }) {
      const { id: postId, commentId } = this.$route.params;
      // 从评论列表页跳转到博文详情页时,路由params里会包含锚点的信息
      if (!commentId) { return; }

      // 获取路由携带的锚点信息
      const commentAnchor = postId + commentId;

      // 确定当前已挂载的refs集合中的锚点,返回一个数组
      const ref = commentAnchor && refs[commentAnchor];

      /*
      * 当评论列表页数大于一页,但获取不到锚点时
      * 则自动切换到下一页获取新的列表数组
      */
      if (list && list.length > 0 && commentAnchor && !ref) {
        const [ matchedItem ] = list.filter((item) => item.id === commentId);

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
        // 高亮评论
        $el.classList.toggle(enterActiveClass);
        // 平滑滚动到锚点
        $el.scrollIntoView({ behavior: 'smooth' });
        await new Promise((resolve) => {
          setTimeout(() => {
            // 取消高亮
            $el.classList.toggle(enterActiveClass);
            $el.classList.toggle(leaveActiveClass);
            resolve();
          }, 2500);
        });
        // 预留时间给退出过渡特效,之后清除类名
        setTimeout(() => {
          $el.classList.toggle(leaveActiveClass);
        }, 1000);
      }
    }
  }
};
