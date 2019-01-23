<template>
  <el-card class="comment-list" v-if="options.data.length > 0">
    <ListFadeIn :duration="1000">
      <el-card
          v-for="comment in options.data"
          :key="comment.id"
      >
        <h4>{{ comment.guestName }}：</h4>
        <div class="details-content" v-html="comment.content"></div>
        <p class="sub-message">评论时间：{{ comment.date }}</p>
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
      <p class="not-found">暂无评论</p>
    </el-card>
  </el-card>

</template>

<script>
export default {
  name: 'CommentListUI',
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  components: {
    ListFadeIn: () => import('@/Components/Commons/ListFadeIn')
  }
};
</script>

<style lang="scss">
.comment-list{
  @include autoBreak;
  margin-top: 1em;
  padding: 0;
  h4{
    margin: 0;
  }
  .sub-message{
    font-size: 0.5em;
    text-align: right;
  }
  .details-content{
    font-size: 0.5em;
    padding: 1em;
  }
}
</style>
