<template>
  <div class="post">
    <PostDetails />
    <Comments />
    <!--如果没有返回有效文章信息,则不渲染评论按钮-->
    <Editor v-if="post.content" comment />
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'FrontPost',

  components: {
    PostDetails: () => import('./FrontPostDetails'),
    Comments: () => import('./FrontPostComments'),
    Editor: () => import('@/Components/Commons/Editor')
  },
  computed: {
    ...mapState(['post'])
  }
};
</script>

<style lang="scss">
.post{
  @include content-el-card-margin;
}
</style>
