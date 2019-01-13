<template>
  <div class="post">
    <PostDetails />
    <Comments />
  </div>
</template>

<script>

export default {
  name: 'post',

  components: {
    PostDetails: () => import('./PostDetails'),
    Comments: () => import('./Comments')
  }
};
</script>

<style lang="scss">
.post{
  @include content-el-card-margin;
}
</style>
