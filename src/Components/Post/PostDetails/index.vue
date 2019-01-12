<template>
  <PostDetailsUI :details="postDetails" />
</template>

<script>
import { mapState } from 'vuex';
import { Constants } from '@/Store';

export default {
  name: 'postDetails',
  components: {
    PostDetailsUI: () => import('./PostDetailsUI')
  },

  computed: {
    ...mapState({
      list: Constants.postList
    }),

    postDetails () {
      const [post] = this.list.filter((item) => {
        return item.id === this.$route.params.id;
      });
      return post;
    }
  }
};
</script>
