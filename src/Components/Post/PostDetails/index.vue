<template>
  <PostDetailsUI
      :details="postDetails"
  />
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'postDetails',
  components: {
    PostDetailsUI: () => import('./PostDetailsUI')
  },

  computed: {
    ...mapState({
      list: 'list'
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
