<template>
  <el-card class="comment-list" v-if="options.data.length > 0">
    <ListFadeIn :duration="1000">
      <el-card
          v-for="comment in options.data"
          :key="comment.id"
      >
        <h5>{{ comment.username }}：</h5>
        <div v-html="comment.content"></div>
        <p>评论时间：{{ comment.date }}</p>
      </el-card>
    </ListFadeIn>

    <el-pagination
        :page-size="options.pageSize"
        :total="options.total"
        :current-page="options.currentPage"
        layout="prev,pager,next"
        @current-change="$emit('onCurrentChange',$event)"
        small
    />
  </el-card>

  <el-card class="comment-list" v-else>
    <el-card>
      <p>暂无评论</p>
    </el-card>
  </el-card>

</template>

<script>
export default {
  name: 'CommentListUI',
  props: {
    options: Object,
    list: Array
  },
  components: {
    ListFadeIn: () => import('../../Commons/ListFadeIn')
  }
};
</script>

<style lang="scss" scoped>
  .comment-list{
    margin-top: 1em;

    .el-card{
      margin: 0 0 1em 0;
      color: #00a8c6;

      h5{
        margin: 0;
      }

      div{
        margin: 0;
        padding: 1em;
        font-size: 0.1em;
      }

      p{
        text-align: right;
        font-size: 0.1em;
        margin-bottom: 0;

        &:first-child{
          text-align: center;
        }
      }
    }

  }
</style>
