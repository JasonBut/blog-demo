<template>
  <div class="post">
    <postDetails />
    <commentList />
  </div>
</template>

<script>

export default {
  name: 'post',

  components: {
    postDetails: () => import('./PostDetails'),
    commentList: () => import('./CommentList')
  }
};
</script>

<style lang="scss">
.post{
  @include content-el-card-margin;
}
</style>
