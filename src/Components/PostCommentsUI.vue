<template>
  <el-card class="comment-list" v-if="list.length > 0">

    <ListFadeIn :duration="1000">
      <el-card
          v-for="comment in list"
          :key="comment.id"
          :ref="comment.post + comment.id"
      >
        <h4>{{ comment.guestName }}：</h4>
        <div class="details-content" v-html="comment.content"></div>
        <p class="sub-message">评论时间：{{ comment.date }}</p>
      </el-card>
    </ListFadeIn>

    <Pagination
        :options="options"
        @on-current-change="handleCurrentChange"
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
    scroll: {
      type: Boolean,
      default: false
    },
    activeClass: {
      type: String
    },
    options: {
      type: Object,
      required: true
    }
  },
  components: {
    ListFadeIn: () => import('@/Components/ListFadeIn'),
    Pagination: () => import('@/Components/Pagination')
  },

  updated () {
    // 有传入scroll时才执行滑动操作
    if (this.scroll) {
      const { $refs, list, options: { currentPage }, handleCurrentChange: method } = this;
      const scrollOptions = {
        activeClass: this.activeClass || 'scroll-focus',
        method,
        currentPage,
        list
      };
      this.$on(this.$emit('on-view-scroll', $refs, scrollOptions));
    }
  },

  methods: {
    handleCurrentChange (currentPage) {
      this.$emit('on-current-change', currentPage);
    }
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
  .el-card{
    transition: border 2.5s linear;
  }
  .sub-message{
    font-size: 0.8em;
    text-align: right;
  }
  .details-content{
    font-size: 0.8em;
    padding: 1em;
  }
  .scroll-focus{
    border: $back-menu-item-hover-fill 1px solid !important;
  }
}
</style>
