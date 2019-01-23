<template>
  <el-card class="comment-list" v-if="list.length > 0">

    <ListFadeIn :duration="1000">
      <el-card
          v-for="comment in list"
          :key="comment.id"
      >
        <h4>{{ comment.guestName }}：</h4>
        <div class="details-content" v-html="comment.content"></div>
        <p class="sub-message">评论时间：{{ comment.date }}</p>
      </el-card>
    </ListFadeIn>

    <Pagination
        :options="options"
        @onCurrentChange="$emit('onCurrentChange',$event)"
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
    list: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  components: {
    ListFadeIn: () => import('@/Components/Commons/ListFadeIn'),
    Pagination: () => import('@/Components/Commons/Pagination')
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
