<template>
  <CommentListUI
      :commentList="commentList"
  />
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CommentList',

  components: {
    CommentListUI: () => import('./CommentListUI')
  },

  computed: {
    ...mapState({
      list: 'list'
    }),
    commentList () {
      return this.list.filter((item) => {
        return item.post === +this.$route.params.id;
      });
    }
  }
};
</script>
