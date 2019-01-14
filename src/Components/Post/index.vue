<template>
  <div class="post">
    <PostDetails />
    <Comments />
    <Editor :comment="true" />
  </div>
</template>

<script>
import { Types } from '@/Store';
export default {
  name: 'post',

  components: {
    PostDetails: () => import('./PostDetails'),
    Comments: () => import('./Comments'),
    Editor: () => import('../Editor')
  },

  // 离开当前详情页时清理state中post内容,避免面包屑导航中文章标题项抖动
  beforeRouteLeave (to, from, next) {
    this.$store.commit(Types.UPDATE_STORE, {
      target: 'post',
      data: {}
    });
    next();
  }
};
</script>

<style lang="scss">
.post{
  @include content-el-card-margin;
}
</style>
