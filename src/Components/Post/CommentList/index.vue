<template>
  <commentListUI :commentList="commentList" />
</template>

<script>
import { mapState } from 'vuex';
import { Constants } from '@/Store';

export default {
  name: 'CommentList',

  components: {
    commentListUI: () => import('./commentListUI')
  },

  computed: {
    ...mapState({
      list: Constants.commentList
    }),
    commentList () {
      return this.list.filter((item) => {
        console.log(item.post);
        return item.post === +this.$route.params.id;
      });
    }
  }
};
</script>
