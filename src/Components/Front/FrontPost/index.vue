<template>
  <div class="post">
    <PostDetails />
    <Comments />
    <!--如果没有返回有效文章信息,不渲染评论按钮-->
    <Editor v-if="post.content" comment />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { Types } from '@/Store';
export default {
  name: 'FrontPost',

  components: {
    PostDetails: () => import('./FrontPostDetails'),
    Comments: () => import('./FrontPostComments'),
    Editor: () => import('@/Components/Commons/Editor')
  },
  computed: {
    ...mapState(['post'])
  },

  // 离开当前详情页时清理state中post内容,避免面包屑导航中文章标题项抖动
  beforeRouteLeave (to, from, next) {
    this.updateStore({
      target: 'post',
      data: {}
    });
    next();
  },

  methods: {
    ...mapMutations({
      updateStore: Types.UPDATE_STORE
    })
  }
};
</script>

<style lang="scss">
.post{
  margin: $front-content-el-card-margin;
}
</style>
