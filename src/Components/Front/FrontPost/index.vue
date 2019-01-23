<template>
  <div class="post">
    <PostDetails />
    <Comments />
    <!--如果没有返回有效文章信息,不渲染评论按钮-->
    <Editor v-if="post.content" comment />
  </div>
</template>

<script>
import { CleanPostMixins } from '@/Components/Mixins';
export default {
  name: 'FrontPost',
  mixins: [ CleanPostMixins ],

  components: {
    PostDetails: () => import('./FrontPostDetails'),
    Comments: () => import('./FrontPostComments'),
    Editor: () => import('@/Components/Commons/Editor')
  }
};
</script>

<style lang="scss">
.post{
  margin: $front-content-el-card-margin;
}
</style>
