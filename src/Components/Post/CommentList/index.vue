<template>
  <CommentListUI :commentList="commentList" />
</template>

<script>
import { mapState } from 'vuex';
import { Constants } from '@/Store';

export default {
  name: 'CommentList',

  components: {
    CommentListUI: () => import('./CommentListUI')
  },

  computed: {
    ...mapState({
      list: Constants.commentList
    }),
    commentList () {
      return this.list.filter((item) => {
        return item.post === +this.$route.params.id;
      });
    }
  }
};
</script>
