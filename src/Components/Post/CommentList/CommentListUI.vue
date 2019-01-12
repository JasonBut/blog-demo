<template>
  <el-card class="comment-list">
    <el-card
        v-for="comment in commentList"
        :key="comment.id"
    >
      <h4>{{ comment.username }}：</h4>
      <div v-html="comment.content"></div>
      <p>评论时间：{{ comment.date }}</p>
    </el-card>
  </el-card>
</template>

<script>
export default {
  name: 'CommentListUI',
  props: {
    commentList: Array
  }
};
</script>

<style lang="scss" scoped>
  .comment-list{
    margin-top: 1em;
    .el-card{
      margin: 0 0 1em 0;

      h4{
        margin: 0;
      }

      div{
        margin: 0;
        padding: 1em;
      }

      p{
        text-align: right;
        font-size: 0.5em;
      }
    }

  }
</style>
