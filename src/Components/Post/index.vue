<template>
  <div class="post">
    <PostDetails />
    <CommentList />
  </div>
</template>

<script>

export default {
  name: 'post',

  components: {
    PostDetails: () => import('./PostDetails'),
    CommentList: () => import('./CommentList')
  }
};
</script>

<style lang="scss">
.post{
  @include content-el-card-margin;
}
</style>
